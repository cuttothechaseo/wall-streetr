import { NextRequest, NextResponse } from 'next/server';
import { createGmailClient } from '@/lib/gmail';
import { createClient } from '@supabase/supabase-js';

// Handle Gmail webhook notifications for incoming emails
export async function POST(request: NextRequest) {
  console.log('🔔 Gmail webhook triggered at:', new Date().toISOString());
  
  try {
    const body = await request.json();
    console.log('📨 Webhook body received:', JSON.stringify(body, null, 2));
    
    // Verify this is a valid Gmail push notification
    if (!body.message || !body.message.data) {
      console.log('❌ Invalid notification format - missing message or data');
      return NextResponse.json({ error: 'Invalid notification format' }, { status: 400 });
    }

    // Decode the message data (it's base64 encoded)
    const messageData = JSON.parse(Buffer.from(body.message.data, 'base64').toString());
    console.log('📋 Decoded message data:', JSON.stringify(messageData, null, 2));
    
    if (!messageData.emailAddress || !messageData.historyId) {
      console.log('❌ Missing email address or history ID');
      return NextResponse.json({ error: 'Missing email address or history ID' }, { status: 400 });
    }

    const userEmail = messageData.emailAddress;
    const historyId = messageData.historyId;
    console.log(`👤 Processing webhook for user: ${userEmail}, historyId: ${historyId}`);

    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.SUPABASE_SERVICE_ROLE_KEY!
    );

    // Find the user's email account
    const { data: emailAccount, error: accountError } = await supabase
      .from('user_email_accounts')
      .select('*')
      .eq('email', userEmail)
      .eq('provider', 'gmail')
      .single();

    if (accountError || !emailAccount) {
      console.log('❌ No email account found for:', userEmail, 'Error:', accountError);
      return NextResponse.json({ success: true, message: 'No account found' });
    }
    
    console.log('✅ Found email account:', emailAccount.id, 'for user:', emailAccount.user_id);

    // Create Gmail client
    const gmailClient = createGmailClient(
      emailAccount.access_token,
      emailAccount.refresh_token
    );

    // Get recent messages
    console.log('📬 Fetching recent unread messages...');
    const messagesResponse = await gmailClient.users.messages.list({
      userId: 'me',
      maxResults: 10,
      q: 'is:unread'
    });

    console.log('📊 Messages response:', JSON.stringify(messagesResponse.data, null, 2));

    if (!messagesResponse.data.messages || messagesResponse.data.messages.length === 0) {
      console.log('ℹ️ No new unread messages found');
      return NextResponse.json({ success: true, message: 'No new messages' });
    }
    
    console.log(`📨 Found ${messagesResponse.data.messages.length} unread messages`);

    // Process each new message
    for (const messageRef of messagesResponse.data.messages) {
      try {
        console.log(`🔍 Processing message ID: ${messageRef.id}`);
        
        const messageResponse = await gmailClient.users.messages.get({
          userId: 'me',
          id: messageRef.id!,
          format: 'full'
        });

        const message = messageResponse.data;
        const headers = message.payload?.headers || [];
        
        // Extract sender email
        const fromHeader = headers.find(h => h.name?.toLowerCase() === 'from');
        const subjectHeader = headers.find(h => h.name?.toLowerCase() === 'subject');
        
        console.log(`📧 From header: ${fromHeader?.value}`);
        console.log(`📝 Subject: ${subjectHeader?.value}`);
        
        if (!fromHeader?.value) {
          console.log('❌ No from header found, skipping message');
          continue;
        }

        // Extract email address from "Name <email@domain.com>" format
        const senderEmail = fromHeader.value.match(/<(.+)>/)?.[1] || fromHeader.value;
        console.log(`👤 Extracted sender email: ${senderEmail}`);
        
        // Find contact by email (case-insensitive)
        const { data: contact, error: contactError } = await supabase
          .from('contacts')
          .select('*')
          .eq('user_id', emailAccount.user_id)
          .ilike('email', senderEmail) // Use ilike for case-insensitive matching
          .single();

        if (contactError || !contact) {
          console.log('❌ No contact found for sender:', senderEmail, 'Error:', contactError);
          continue;
        }
        
        console.log(`✅ Found contact: ${contact.first_name} ${contact.last_name} (${contact.email}) - Stage: ${contact.stage}`);

        // Check if this message is already in our history
        const { data: existingMessage } = await supabase
          .from('email_history')
          .select('id')
          .eq('gmail_message_id', message.id)
          .single();

        if (existingMessage) {
          console.log('⚠️ Message already processed:', message.id);
          continue;
        }

        // Extract message content
        let content = '';
        if (message.payload?.body?.data) {
          content = Buffer.from(message.payload.body.data, 'base64').toString();
        } else if (message.payload?.parts) {
          // Handle multipart messages
          for (const part of message.payload.parts) {
            if (part.mimeType === 'text/plain' && part.body?.data) {
              content = Buffer.from(part.body.data, 'base64').toString();
              break;
            }
          }
        }

        console.log(`📄 Message content length: ${content.length} characters`);

        // Store incoming email in history
        const { error: historyError } = await supabase
          .from('email_history')
          .insert({
            contact_id: contact.id,
            user_email_account_id: emailAccount.id,
            direction: 'received',
            subject: subjectHeader?.value || 'No Subject',
            content: content,
            gmail_message_id: message.id,
            sent_at: new Date(parseInt(message.internalDate!)).toISOString(),
          });

        if (historyError) {
          console.error('❌ Error storing email history:', historyError);
          continue;
        }
        
        console.log('✅ Email history stored successfully');

        // Update contact stage to 'in_conversation' if currently 'intro_sent'
        console.log(`🔍 Checking if contact stage should be updated:`);
        console.log(`  - Current stage: '${contact.stage}'`);
        console.log(`  - Should update: ${contact.stage === 'intro_sent' ? 'YES' : 'NO'}`);
        
        if (contact.stage === 'intro_sent') {
          console.log(`🔄 Updating contact stage from 'intro_sent' to 'in_conversation' for: ${contact.first_name} ${contact.last_name}`);
          
          const { error: stageError } = await supabase
            .from('contacts')
            .update({ 
              stage: 'in_conversation',
              last_activity: new Date().toISOString()
            })
            .eq('id', contact.id);
          
          if (stageError) {
            console.error('❌ Error updating contact stage:', stageError);
          } else {
            console.log('✅ Successfully updated contact stage to in_conversation for:', contact.first_name, contact.last_name);
            
            // Verify the update by fetching the contact again
            const { data: updatedContact } = await supabase
              .from('contacts')
              .select('stage')
              .eq('id', contact.id)
              .single();
            
            console.log(`🔍 Verification - Contact stage after update: '${updatedContact?.stage}'`);
          }
        } else {
          console.log(`ℹ️ Contact stage is '${contact.stage}', not updating (only updates from 'intro_sent')`);
        }

      } catch (messageError) {
        console.error('Error processing message:', messageError);
        continue;
      }
    }

    return NextResponse.json({ 
      success: true, 
      message: 'Webhook processed successfully' 
    });

  } catch (error) {
    console.error('Error processing Gmail webhook:', error);
    return NextResponse.json({ error: 'Failed to process webhook' }, { status: 500 });
  }
}

export async function GET(request: NextRequest) {
  console.log('🔔 Gmail webhook GET handler triggered!');
  return NextResponse.json({ success: true, message: 'Gmail webhook GET working' });
}