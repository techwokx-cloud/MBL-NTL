import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export const runtime = 'nodejs';

const DATA_PATH = path.join(process.cwd(), 'data', 'social.json');

// Public, read-only — used by the header/footer to show real social links.
export async function GET() {
  try {
    const raw = fs.readFileSync(DATA_PATH, 'utf-8');
    return NextResponse.json(JSON.parse(raw));
  } catch {
    return NextResponse.json({ facebook: '', instagram: '', linkedin: '', youtube: '' });
  }
}
