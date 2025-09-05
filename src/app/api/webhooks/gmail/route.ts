import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  console.log('🔔 FRESH POST handler triggered!');
  return NextResponse.json({ success: true, message: 'Fresh webhook working' });
}

export async function GET(request: NextRequest) {
  console.log('🔔 FRESH GET handler triggered!');
  return NextResponse.json({ success: true, message: 'Fresh GET working' });
}