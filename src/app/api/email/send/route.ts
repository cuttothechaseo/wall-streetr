import { NextRequest, NextResponse } from 'next/server';
import { createGmailClient, sendEmail } from '@/lib/gmail';
import { createClient } from '@supabase/supabase-js';

// Send email via Gmail API
export async function POST(request: NextRequest) {
  try {
    const { contactId, subject, body, userId, attachments = [] } = await request.json();
    
    if (!contactId || !subject || !body || !userId) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
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
    
    // Get contact information
    const { data: contact, error: contactError } = await supabase
      .from('contacts')
      .select('*')
      .eq('id', contactId)
      .single();
    
    if (contactError || !contact) {
      return NextResponse.json({ error: 'Contact not found' }, { status: 404 });
    }
    
    // Create Gmail client
    const gmailClient = createGmailClient(
      emailAccount.access_token,
      emailAccount.refresh_token
    );
    
    // Send email with attachments
    const result = await sendEmail(
      gmailClient,
      contact.email || '',
      subject,
      body,
      emailAccount.email || '',
      attachments
    );
    
    // Store email in history
    const { error: historyError } = await supabase
      .from('email_history')
      .insert({
        contact_id: contactId,
        user_email_account_id: emailAccount.id,
        direction: 'sent',
        subject,
        content: body,
        gmail_message_id: result.id,
        sent_at: new Date().toISOString(),
      });
    
    if (historyError) {
      console.error('Error storing email history:', historyError);
    }

    // Update contact stage to 'intro_sent' if currently 'not_contacted'
    if (contact.stage === 'not_contacted') {
      const { error: stageError } = await supabase
        .from('contacts')
        .update({ 
          stage: 'intro_sent',
          last_activity: new Date().toISOString()
        })
        .eq('id', contactId);
      
      if (stageError) {
        console.error('Error updating contact stage:', stageError);
      }
    }
    
    return NextResponse.json({ 
      success: true, 
      messageId: result.id,
      message: 'Email sent successfully'
    });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }
}
