import { NextRequest, NextResponse } from 'next/server';

const COOKIE_NAME = 'sulnox_admin_session';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname.startsWith('/admin') && pathname !== '/admin/login') {
    const isAuthenticated = request.cookies.get(COOKIE_NAME)?.value === 'authenticated';
    if (!isAuthenticated) {
      const loginUrl = new URL('/admin/login', request.url);
      return NextResponse.redirect(loginUrl);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*'],
};
