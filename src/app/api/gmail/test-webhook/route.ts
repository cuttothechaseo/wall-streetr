import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

// Test endpoint to manually trigger webhook processing
export async function POST(request: NextRequest) {
  try {
    const { userId, testEmail } = await request.json();
    
    if (!userId) {
      return NextResponse.json({ error: 'userId is required' }, { status: 400 });
    }
    
    console.log('🧪 Manual webhook test triggered');
    console.log('  - User ID:', userId);
    console.log('  - Test Email:', testEmail);
    
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
    
    // Find contact by email (if provided)
    if (testEmail) {
      const { data: contact, error: contactError } = await supabase
        .from('contacts')
        .select('*')
        .eq('user_id', userId)
        .ilike('email', testEmail)
        .single();
      
      if (contactError || !contact) {
        console.log('❌ No contact found for email:', testEmail);
        return NextResponse.json({ error: 'Contact not found' }, { status: 404 });
      }
      
      console.log('✅ Found contact:', contact.first_name, contact.last_name, '- Stage:', contact.stage);
      
      return NextResponse.json({
        success: true,
        contact: {
          id: contact.id,
          name: `${contact.first_name} ${contact.last_name}`,
          email: contact.email,
          stage: contact.stage
        },
        message: 'Contact found - check logs for stage details'
      });
    }
    
    // If no test email provided, just return account info
    return NextResponse.json({
      success: true,
      account: {
        email: emailAccount.email,
        watchTopic: emailAccount.watch_topic,
        watchExpiry: emailAccount.watch_expiry,
        watchHistoryId: emailAccount.watch_history_id
      },
      message: 'Account info retrieved'
    });
    
  } catch (error) {
    console.error('❌ Error in webhook test:', error);
    return NextResponse.json({ 
      error: 'Failed to test webhook',
      details: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 });
  }
}
