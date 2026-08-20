import { NextResponse } from 'next/server';

export const runtime = 'nodejs';

const COOKIE_NAME = 'sulnox_admin_session';

export async function POST() {
  const response = NextResponse.json({ success: true });
  response.cookies.set(COOKIE_NAME, '', { path: '/', maxAge: 0 });
  return response;
}
