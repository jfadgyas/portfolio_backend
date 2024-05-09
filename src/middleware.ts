// This file must be in the main directori of the app (src, or app, or whatever)
// can be in the route.ts file, as NextResponse(response, headers: {
            //   'Access-Control-Allow-Origin': '*',
            //   'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
            //   'Access-Control-Allow-Headers': 'Content-Type, Authorization',
            // },)

import { NextRequest, NextResponse } from "next/server";

const corsOptions: {
    allowedOrigins: string,
    allowedMethods: string,
    allowedHeaders: string,
  } = {
    allowedOrigins: process.env.ALLOWED_ORIGINS || '',
    allowedMethods: process.env.ALLOWED_METHODS || '',
    allowedHeaders: process.env.ALLOWED_HEADERS || '',
  }

// Middleware
export async function middleware(req: NextRequest) {
  
  const response = NextResponse.next();

  // Allowed origins check
  const origin = req.headers.get('origin') ?? '';
  if (corsOptions.allowedOrigins.includes('*') || corsOptions.allowedOrigins.includes(origin)) {
    response.headers.set('Access-Control-Allow-Origin', '*');
  }
  
  // Set default CORS headers
  response.headers.set("Access-Control-Allow-Methods", corsOptions.allowedMethods)
  response.headers.set("Access-Control-Allow-Headers", corsOptions.allowedHeaders)

  return response;
}