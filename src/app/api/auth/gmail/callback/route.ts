import { NextRequest, NextResponse } from 'next/server';
import { exchangeCodeForTokens, getUserInfo } from '@/lib/gmail';
import { createClient } from '@supabase/supabase-js';

// Handle Gmail OAuth callback
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const code = searchParams.get('code');
    const state = searchParams.get('state');
    
    if (!code || !state) {
      return NextResponse.json({ error: 'Code and state are required' }, { status: 400 });
    }
    
    // Exchange code for tokens
    let tokens;
    try {
      tokens = await exchangeCodeForTokens(code);
    } catch (error) {
      console.error('Error exchanging code for tokens:', error);
      return NextResponse.redirect(new URL('/dashboard?gmail=error&reason=token_exchange', request.url));
    }
    
    if (!tokens.access_token || !tokens.refresh_token) {
      return NextResponse.redirect(new URL('/dashboard?gmail=error&reason=missing_tokens', request.url));
    }
    
    // Get user info to retrieve email
    const userInfo = await getUserInfo(tokens.access_token);
    
    // Store tokens in database using service role key to bypass RLS
    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.SUPABASE_SERVICE_ROLE_KEY!
    );
    
    const { error } = await supabase
      .from('user_email_accounts')
      .upsert({
        user_id: state, // Clerk user ID from state
        provider: 'gmail',
        email: userInfo.email || '', // Store the user's Gmail address
        access_token: tokens.access_token,
        refresh_token: tokens.refresh_token,
        expires_at: new Date(tokens.expiry_date || Date.now() + 3600000).toISOString(),
      }, {
        onConflict: 'user_id,provider'
      });
    
    if (error) {
      console.error('Error storing tokens:', error);
      return NextResponse.json({ error: 'Failed to store tokens' }, { status: 500 });
    }

    // Automatically set up Gmail watch for webhook notifications
    try {
      const { createGmailClient, setupGmailWatch } = await import('@/lib/gmail');
      
      const gmailClient = createGmailClient(
        tokens.access_token,
        tokens.refresh_token
      );
      
      // Set up watch request with the configured topic
      const topicName = process.env.GMAIL_WEBHOOK_TOPIC || 'gmail-webhook-topic';
      const fullTopicName = `projects/${process.env.GOOGLE_CLOUD_PROJECT_ID}/topics/${topicName}`;
      
      const watchResult = await setupGmailWatch(
        gmailClient,
        fullTopicName,
        `${process.env.NEXT_PUBLIC_APP_URL}/api/webhooks/gmail`
      );
      
      // Store watch information
      // Convert expiration timestamp to proper date
      let expirationDate: string;
      if (watchResult.expiration) {
        // Gmail returns expiration as a string timestamp in milliseconds
        const expirationMs = parseInt(watchResult.expiration.toString());
        expirationDate = new Date(expirationMs).toISOString();
      } else {
        // Fallback to 7 days from now
        expirationDate = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString();
      }
      
      await supabase
        .from('user_email_accounts')
        .update({
          watch_topic: topicName,
          watch_expiry: expirationDate,
          watch_history_id: watchResult.historyId,
        })
        .eq('user_id', state)
        .eq('provider', 'gmail');
      
      console.log('Gmail watch setup successful:', watchResult);
    } catch (watchError) {
      console.error('Error setting up Gmail watch:', watchError);
      // Don't fail the entire connection if watch setup fails
      // Log the error but continue with the connection
    }
    
    // Redirect back to dashboard with success message
    return NextResponse.redirect(new URL('/dashboard?gmail=connected', request.url));
  } catch (error) {
    console.error('Error handling OAuth callback:', error);
    return NextResponse.redirect(new URL('/dashboard?gmail=error', request.url));
  }
}
