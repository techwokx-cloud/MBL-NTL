import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export const runtime = 'nodejs';

const DATA_PATH = path.join(process.cwd(), 'data', 'leads.json');
const COOKIE_NAME = 'sulnox_admin_session';

interface Lead {
  id: string;
  fullName: string;
  companyName: string;
  phone: string;
  email: string;
  region: string;
  message: string;
  submittedAt: string;
}

function readLeads(): Lead[] {
  try {
    return JSON.parse(fs.readFileSync(DATA_PATH, 'utf-8'));
  } catch {
    return [];
  }
}

function writeLeads(leads: Lead[]) {
  fs.writeFileSync(DATA_PATH, JSON.stringify(leads, null, 2), 'utf-8');
}

// Public: anyone submitting the Become a Sales Agent form can POST here.
export async function POST(request: NextRequest) {
  const body = await request.json();
  const { fullName, companyName, phone, email, region, message } = body;

  if (!fullName || !phone || !email || !region) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
  }

  const lead: Lead = {
    id: `lead-${Date.now()}`,
    fullName,
    companyName: companyName || '',
    phone,
    email,
    region,
    message: message || '',
    submittedAt: new Date().toISOString(),
  };

  const leads = readLeads();
  leads.unshift(lead);
  writeLeads(leads);

  return NextResponse.json({ success: true });
}

// Admin-only: reading the list requires the admin session cookie.
export async function GET(request: NextRequest) {
  const isAuthenticated = request.cookies.get(COOKIE_NAME)?.value === 'authenticated';
  if (!isAuthenticated) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
  return NextResponse.json({ leads: readLeads() });
}
