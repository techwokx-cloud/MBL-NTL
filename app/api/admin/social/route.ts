import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export const runtime = 'nodejs';

const DATA_PATH = path.join(process.cwd(), 'data', 'social.json');
const COOKIE_NAME = 'sulnox_admin_session';

function isAuthenticated(request: NextRequest): boolean {
  return request.cookies.get(COOKIE_NAME)?.value === 'authenticated';
}

export async function GET(request: NextRequest) {
  if (!isAuthenticated(request)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
  try {
    const raw = fs.readFileSync(DATA_PATH, 'utf-8');
    return NextResponse.json(JSON.parse(raw));
  } catch {
    return NextResponse.json({ facebook: '', instagram: '', linkedin: '', youtube: '' });
  }
}

export async function POST(request: NextRequest) {
  if (!isAuthenticated(request)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
  const body = await request.json();
  fs.writeFileSync(DATA_PATH, JSON.stringify(body, null, 2), 'utf-8');
  return NextResponse.json({ success: true });
}
