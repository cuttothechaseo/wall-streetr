import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  console.log('🔔 SIMPLE POST handler triggered!');
  return NextResponse.json({ success: true, message: 'Simple POST working' });
}

export async function GET(request: NextRequest) {
  console.log('🔔 SIMPLE GET handler triggered!');
  return NextResponse.json({ success: true, message: 'Simple GET working' });
}
