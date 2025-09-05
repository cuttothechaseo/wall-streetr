import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

// Check if Gmail is connected for a user
export async function POST(request: NextRequest) {
  try {
    const { userId } = await request.json();
    
    if (!userId) {
      return NextResponse.json({ error: 'Missing userId' }, { status: 400 });
    }
    
    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.SUPABASE_SERVICE_ROLE_KEY!
    );
    
    // Get user's Gmail account using service role key to bypass RLS
    const { data: emailAccount, error } = await supabase
      .from('user_email_accounts')
      .select('*')
      .eq('user_id', userId)
      .eq('provider', 'gmail')
      .single();
    
    if (error && error.code !== 'PGRST116') { // PGRST116 = no rows returned
      console.error('Error checking Gmail connection:', error);
      return NextResponse.json({ error: 'Database error' }, { status: 500 });
    }
    
    if (emailAccount) {
      return NextResponse.json({ 
        connected: true, 
        email: emailAccount.email,
        watchTopic: emailAccount.watch_topic,
        watchExpiry: emailAccount.watch_expiry
      });
    } else {
      return NextResponse.json({ connected: false });
    }
    
  } catch (error) {
    console.error('Error checking Gmail connection:', error);
    return NextResponse.json({ error: 'Failed to check Gmail connection' }, { status: 500 });
  }
}
