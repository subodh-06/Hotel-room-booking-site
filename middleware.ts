import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(req: NextRequest) {
  const token = req.cookies.get('token')?.value;
  const pathname = req.nextUrl.pathname;

  // 👇 If visiting /owner
  if (pathname === '/owner'|| pathname==="/owner/list-hotel" || pathname==="owner/dashboard") {
    if (!token) {
      return NextResponse.redirect(new URL('/auth', req.url));
    }

    try {
      const payload = JSON.parse(atob(token.split('.')[1]));

      if (payload.role === 'owner') {
        return NextResponse.redirect(new URL('/owner/dashboard', req.url));
      } else {
        return NextResponse.redirect(new URL('/unauthorized', req.url));
      }
    } catch (error) {
      console.error('Invalid JWT:', error);
      return NextResponse.redirect(new URL('/login', req.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/owner', '/owner/:path*', '/profile', '/hotel/:path*'],
};
