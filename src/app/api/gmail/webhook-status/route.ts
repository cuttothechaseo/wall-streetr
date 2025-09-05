import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

// Check webhook status and configuration
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const userId = searchParams.get('userId');
    
    if (!userId) {
      return NextResponse.json({ error: 'userId is required' }, { status: 400 });
    }
    
    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.SUPABASE_SERVICE_ROLE_KEY!
    );
    
    // Get user's Gmail account and webhook status
    const { data: emailAccount, error: accountError } = await supabase
      .from('user_email_accounts')
      .select('*')
      .eq('user_id', userId)
      .eq('provider', 'gmail')
      .single();
    
    if (accountError || !emailAccount) {
      return NextResponse.json({ 
        connected: false,
        error: 'Gmail account not connected',
        details: accountError 
      });
    }
    
    // Check webhook configuration
    const webhookStatus = {
      connected: true,
      email: emailAccount.email,
      watchTopic: emailAccount.watch_topic,
      watchExpiry: emailAccount.watch_expiry,
      watchHistoryId: emailAccount.watch_history_id,
      isExpired: emailAccount.watch_expiry ? new Date(emailAccount.watch_expiry) < new Date() : true,
      environment: {
        hasWebhookTopic: !!process.env.GMAIL_WEBHOOK_TOPIC,
        hasProjectId: !!process.env.GOOGLE_CLOUD_PROJECT_ID,
        hasAppUrl: !!process.env.NEXT_PUBLIC_APP_URL,
        webhookTopic: process.env.GMAIL_WEBHOOK_TOPIC,
        projectId: process.env.GOOGLE_CLOUD_PROJECT_ID,
        appUrl: process.env.NEXT_PUBLIC_APP_URL,
      }
    };
    
    return NextResponse.json(webhookStatus);
    
  } catch (error) {
    console.error('Error checking webhook status:', error);
    return NextResponse.json({ error: 'Failed to check webhook status' }, { status: 500 });
  }
}
