import { NextRequest, NextResponse } from 'next/server';
import { createGmailClient, setupGmailWatch } from '@/lib/gmail';
import { createClient } from '@supabase/supabase-js';

// Manually setup Gmail webhook for a user
export async function POST(request: NextRequest) {
  try {
    const { userId } = await request.json();
    
    if (!userId) {
      return NextResponse.json({ error: 'userId is required' }, { status: 400 });
    }
    
    console.log('🔧 Manual webhook setup for user:', userId);
    
    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.SUPABASE_SERVICE_ROLE_KEY!
    );
    
    // Get user's Gmail account
    const { data: emailAccount, error: accountError } = await supabase
      .from('user_email_accounts')
      .select('*')
      .eq('user_id', userId)
      .eq('provider', 'gmail')
      .single();
    
    if (accountError || !emailAccount) {
      console.log('❌ No Gmail account found for user:', userId);
      return NextResponse.json({ error: 'Gmail account not connected' }, { status: 400 });
    }
    
    console.log('✅ Found Gmail account:', emailAccount.email);
    
    // Create Gmail client
    const gmailClient = createGmailClient(
      emailAccount.access_token,
      emailAccount.refresh_token
    );
    
    // Set up watch request with the configured topic
    const topicName = process.env.GMAIL_WEBHOOK_TOPIC || 'gmail-webhook-topic';
    const fullTopicName = `projects/${process.env.GOOGLE_CLOUD_PROJECT_ID}/topics/${topicName}`;
    const webhookUrl = `${process.env.NEXT_PUBLIC_APP_URL}/api/webhooks/gmail`;
    
    console.log('🔧 Setting up watch with:');
    console.log('  - Topic:', fullTopicName);
    console.log('  - Webhook URL:', webhookUrl);
    
    const watchResult = await setupGmailWatch(
      gmailClient,
      fullTopicName,
      webhookUrl
    );
    
    console.log('✅ Watch result:', watchResult);
    
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
    
    console.log('📅 Expiration date:', expirationDate);
    
    const { error: updateError } = await supabase
      .from('user_email_accounts')
      .update({
        watch_topic: topicName,
        watch_expiry: expirationDate,
        watch_history_id: watchResult.historyId,
      })
      .eq('user_id', userId)
      .eq('provider', 'gmail');
    
    if (updateError) {
      console.error('❌ Error updating watch info:', updateError);
      return NextResponse.json({ error: 'Failed to store watch information' }, { status: 500 });
    }
    
    console.log('✅ Watch information stored successfully');
    
    return NextResponse.json({ 
      success: true, 
      watchResult,
      message: 'Gmail webhook setup successful' 
    });
    
  } catch (error) {
    console.error('❌ Error setting up Gmail webhook:', error);
    return NextResponse.json({ 
      error: 'Failed to setup Gmail webhook',
      details: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 });
  }
}
