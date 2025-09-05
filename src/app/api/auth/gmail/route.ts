import { NextRequest, NextResponse } from 'next/server';
import { generateAuthUrl, exchangeCodeForTokens } from '@/lib/gmail';
import { createClient } from '@/utils/supabase/server';

// Initiate Gmail OAuth flow
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const userId = searchParams.get('userId');
    
    if (!userId) {
      return NextResponse.json({ error: 'User ID is required' }, { status: 400 });
    }
    
    const authUrl = generateAuthUrl(userId);
    
    return NextResponse.json({ authUrl });
  } catch (error) {
    console.error('Error generating auth URL:', error);
    return NextResponse.json({ error: 'Failed to generate auth URL' }, { status: 500 });
  }
}
