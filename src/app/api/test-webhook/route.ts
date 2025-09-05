import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  console.log('🔔 TEST POST handler triggered!');
  return NextResponse.json({ success: true, message: 'Test webhook working' });
}

export async function GET(request: NextRequest) {
  console.log('🔔 TEST GET handler triggered!');
  return NextResponse.json({ success: true, message: 'Test GET working' });
}
