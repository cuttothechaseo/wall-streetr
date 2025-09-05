import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

// Check Pub/Sub topic configuration
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
    
    // Get user's Gmail account
    const { data: emailAccount, error: accountError } = await supabase
      .from('user_email_accounts')
      .select('*')
      .eq('user_id', userId)
      .eq('provider', 'gmail')
      .single();
    
    if (accountError || !emailAccount) {
      return NextResponse.json({ error: 'Gmail account not connected' }, { status: 400 });
    }
    
    const topicName = process.env.GMAIL_WEBHOOK_TOPIC || 'gmail-webhook-topic';
    const projectId = process.env.GOOGLE_CLOUD_PROJECT_ID;
    const appUrl = process.env.NEXT_PUBLIC_APP_URL;
    
    const configuration = {
      // Current configuration
      current: {
        topicName,
        projectId,
        appUrl,
        webhookUrl: `${appUrl}/api/webhooks/gmail`,
        fullTopicName: `projects/${projectId}/topics/${topicName}`,
        userEmail: emailAccount.email,
        watchTopic: emailAccount.watch_topic,
        watchExpiry: emailAccount.watch_expiry,
        watchHistoryId: emailAccount.watch_history_id,
      },
      
      // Required Google Cloud Console setup
      requiredSetup: {
        steps: [
          {
            step: 1,
            title: "Create Pub/Sub Topic",
            description: `Create a topic named "${topicName}" in Google Cloud Console`,
            url: `https://console.cloud.google.com/cloudpubsub/topic/list?project=${projectId}`,
            details: [
              `Topic name: ${topicName}`,
              `Project: ${projectId}`,
              "Click 'Create Topic'"
            ]
          },
          {
            step: 2,
            title: "Create Subscription",
            description: "Create a push subscription for the topic",
            details: [
              `Subscription name: ${topicName}-subscription`,
              "Delivery type: Push",
              `Endpoint URL: ${appUrl}/api/webhooks/gmail`,
              "Click 'Create'"
            ]
          },
          {
            step: 3,
            title: "Configure Topic Permissions",
            description: "Add Gmail API permissions to the topic",
            details: [
              "Go to topic → Permissions tab",
              "Add Principal: gmail-api-push@system.gserviceaccount.com",
              "Role: Pub/Sub Publisher",
              "Save"
            ]
          },
          {
            step: 4,
            title: "Verify OAuth Scopes",
            description: "Ensure Gmail API has required scopes",
            details: [
              "Go to APIs & Services → OAuth consent screen",
              "Add scope: https://www.googleapis.com/auth/gmail.modify",
              "Save and publish changes"
            ]
          }
        ]
      },
      
      // Troubleshooting
      troubleshooting: {
        commonIssues: [
          {
            issue: "Webhook not receiving notifications",
            solutions: [
              "Verify Pub/Sub topic exists and is active",
              "Check subscription endpoint URL is correct",
              "Ensure topic has gmail-api-push@system.gserviceaccount.com permission",
              "Verify webhook URL is publicly accessible"
            ]
          },
          {
            issue: "Topic permissions missing",
            solutions: [
              "Add gmail-api-push@system.gserviceaccount.com as Pub/Sub Publisher",
              "Wait 5-10 minutes for permissions to propagate",
              "Re-run webhook setup after fixing permissions"
            ]
          },
          {
            issue: "Webhook URL not accessible",
            solutions: [
              "Ensure your app is deployed and accessible",
              "For localhost: use ngrok or similar tunneling service",
              "Check firewall settings"
            ]
          }
        ]
      }
    };
    
    return NextResponse.json(configuration);
    
  } catch (error) {
    console.error('Error checking Pub/Sub configuration:', error);
    return NextResponse.json({ error: 'Failed to check configuration' }, { status: 500 });
  }
}
