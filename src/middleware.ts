import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const host = req.headers.get("host");
  const protocol = req.headers.get("x-forwarded-proto") || "http";

  if (
    (protocol === "http" || host?.slice(0, 4) !== "www.") &&
    !host?.includes("localhost")
  ) {
    const correctedHost = host?.slice(0, 4) === "www." ? host : `www.${host}`;

    const redirectUrl = `https://${correctedHost}${req.nextUrl.pathname}${req.nextUrl.search}`;

    return NextResponse.redirect(redirectUrl, 301);
  }

  return NextResponse.next();
}
