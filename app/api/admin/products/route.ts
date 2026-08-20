import { NextRequest, NextResponse } from 'next/server';
import { getProducts, saveProducts, type Product } from '@/lib/products-data';

export const runtime = 'nodejs';

const COOKIE_NAME = 'sulnox_admin_session';

function isAuthenticated(request: NextRequest): boolean {
  return request.cookies.get(COOKIE_NAME)?.value === 'authenticated';
}

export async function GET(request: NextRequest) {
  if (!isAuthenticated(request)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
  return NextResponse.json({ products: getProducts() });
}

export async function POST(request: NextRequest) {
  if (!isAuthenticated(request)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const body = await request.json();
  const products: Product[] = body.products;

  if (!Array.isArray(products)) {
    return NextResponse.json({ error: 'Invalid payload' }, { status: 400 });
  }

  try {
    saveProducts(products);
    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('Failed to save products', err);
    return NextResponse.json({ error: 'Failed to save' }, { status: 500 });
  }
}
