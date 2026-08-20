import { NextRequest, NextResponse } from 'next/server';

export const runtime = 'nodejs';

// Demo-tier auth: single shared password via env var, falls back to a
// default for the Render demo. Replace with real user accounts before
// this goes to production.
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'sulnox-demo-2026';
const COOKIE_NAME = 'sulnox_admin_session';

export async function POST(request: NextRequest) {
  const { password } = await request.json();

  if (password !== ADMIN_PASSWORD) {
    return NextResponse.json({ success: false, error: 'Incorrect password' }, { status: 401 });
  }

  const response = NextResponse.json({ success: true });
  response.cookies.set(COOKIE_NAME, 'authenticated', {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/',
    maxAge: 60 * 60 * 8, // 8 hours
  });
  return response;
}
