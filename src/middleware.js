// middleware.js (at the project root)
import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

export const middleware = async (req) => {
  const token = await getToken({ req });
  const isTokenOk = Boolean(token)
console.log('Api request', req)
  // If token is not valid, redirect to login page
  if (!isTokenOk) {
    const loginUrl = new URL("/login", req.url);
    return NextResponse.redirect(loginUrl);
  }

  // Token is valid, allow access
  return NextResponse.next();
};

// Define which routes are protected
export const config = {
  matcher: [
    "/dashboard/:path*",     // Protect /dashboard and all subpaths
    "/products/:id"          // Protect product detail page by id
  ],
};