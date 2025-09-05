import { NextRequest, NextResponse } from 'next/server';
import { createGmailClient } from '@/lib/gmail';
import { createClient } from '@supabase/supabase-js';

// Handle Gmail webhook notifications for incoming emails
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Verify this is a valid Gmail push notification
    if (!body.message || !body.message.data) {
      return NextResponse.json({ error: 'Invalid notification format' }, { status: 400 });
    }

    // Decode the message data (it's base64 encoded)
    const messageData = JSON.parse(Buffer.from(body.message.data, 'base64').toString());
    const { emailAddress, historyId } = messageData;

    // Get Supabase client
    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.SUPABASE_SERVICE_ROLE_KEY!
    );

    // Find the email account for this user
    const { data: emailAccount, error: emailAccountError } = await supabase
      .from('email_accounts')
      .select('id, user_id, access_token, refresh_token')
      .eq('email', emailAddress)
      .single();

    if (emailAccountError || !emailAccount) {
      console.error('Email account not found:', emailAccountError);
      return NextResponse.json({ error: 'Email account not found' }, { status: 404 });
    }

    // Create Gmail client
    const gmailClient = createGmailClient(emailAccount.access_token, emailAccount.refresh_token);

    // Fetch recent unread messages
    const messagesResponse = await gmailClient.users.messages.list({
      userId: 'me',
      q: 'is:unread',
      maxResults: 10
    });

    const messages = messagesResponse.data.messages || [];
    const processedMessageIds = new Set<string>();

    // Process each message
    for (const message of messages) {
      if (processedMessageIds.has(message.id!)) {
        continue; // Skip already processed messages
      }

      try {
        // Get message details
        const messageDetails = await gmailClient.users.messages.get({
          userId: 'me',
          id: message.id!,
          format: 'full'
        });

        const headers = messageDetails.data.payload?.headers || [];
        const fromHeader = headers.find(h => h.name?.toLowerCase() === 'from');
        const subjectHeader = headers.find(h => h.name?.toLowerCase() === 'subject');

        if (!fromHeader?.value) continue;

        // Extract sender email
        const senderEmail = fromHeader.value.match(/<(.+)>/)?.[1] || fromHeader.value.split(' ').pop();
        if (!senderEmail) continue;

        // Find contact by email
        const { data: contact, error: contactError } = await supabase
          .from('contacts')
          .select('*')
          .ilike('email', senderEmail)
          .eq('user_id', emailAccount.user_id)
          .single();

        if (contactError || !contact) {
          continue; // Skip if contact not found
        }

        // Store email history
        const { error: historyError } = await supabase
          .from('email_history')
          .insert({
            contact_id: contact.id,
            message_id: message.id,
            subject: subjectHeader?.value || '',
            sender_email: senderEmail,
            content: messageDetails.data.snippet || '',
            direction: 'inbound',
            user_id: emailAccount.user_id
          });

        if (historyError) {
          console.error('Error storing email history:', historyError);
        }

        // Update contact stage if needed
        if (contact.stage === 'intro_sent') {
          const { error: updateError } = await supabase
            .from('contacts')
            .update({ stage: 'in_conversation' })
            .eq('id', contact.id);

          if (updateError) {
            console.error('Error updating contact stage:', updateError);
          }
        }

        processedMessageIds.add(message.id!);
      } catch (error) {
        console.error('Error processing message:', error);
      }
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Webhook error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

// Handle Gmail webhook verification
export async function GET(request: NextRequest) {
  const url = new URL(request.url);
  const challenge = url.searchParams.get('challenge');
  
  if (!challenge) {
    return NextResponse.json({ error: 'No challenge provided' }, { status: 400 });
  }
  
  return new Response(challenge, { status: 200 });
}