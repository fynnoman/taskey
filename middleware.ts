import { NextResponse, type NextRequest } from "next/server";

/* ============================================================================
 * i18n middleware
 * ----------------------------------------------------------------------------
 *  - "/"      = DE (no prefix, default locale)
 *  - "/en/*"  = English
 *  - "/fr/*"  = French
 *
 * Strategy:
 *  - /en/* and /fr/* requests are rewritten to /[en|fr]/* (passthrough).
 *  - Bare paths are rewritten to /de/* internally so the [locale] segment
 *    receives "de" without the browser URL changing.
 *  - Always set "x-locale" response header so the root layout / providers
 *    know the active locale (read via next/headers).
 * ========================================================================== */

const SUPPORTED_LOCALES = ["de", "en", "fr"] as const;
const DEFAULT_LOCALE = "de";

// Paths that must NEVER be rewritten through [locale] — root-level resources.
const PASS_THROUGH = [
  "/api",
  "/_next",
  "/favicon",
  "/icon",
  "/apple-icon",
  "/manifest.webmanifest",
  "/opengraph-image",
  "/robots.txt",
  "/sitemap.xml",
];

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Skip static + API routes
  if (PASS_THROUGH.some((p) => pathname === p || pathname.startsWith(`${p}/`) || pathname.startsWith(`${p}.`))) {
    return NextResponse.next();
  }

  // Detect prefixed locale
  const firstSegment = pathname.split("/")[1];
  const isPrefixedLocale = SUPPORTED_LOCALES.includes(firstSegment as (typeof SUPPORTED_LOCALES)[number]);

  if (isPrefixedLocale) {
    // Already has a locale prefix — pass through, tag headers on REQUEST
    // (so server components can read it via next/headers).
    const requestHeaders = new Headers(req.headers);
    requestHeaders.set("x-locale", firstSegment);
    const res = NextResponse.next({ request: { headers: requestHeaders } });
    res.headers.set("x-locale", firstSegment);
    return res;
  }

  // No prefix → bare path → DE. Rewrite internally to /de/<rest>.
  const url = req.nextUrl.clone();
  url.pathname = `/${DEFAULT_LOCALE}${pathname === "/" ? "" : pathname}`;
  const requestHeaders = new Headers(req.headers);
  requestHeaders.set("x-locale", DEFAULT_LOCALE);
  const res = NextResponse.rewrite(url, { request: { headers: requestHeaders } });
  res.headers.set("x-locale", DEFAULT_LOCALE);
  return res;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - api routes
     * - _next internals (build assets, image optimization)
     * - file extensions (e.g. .png, .ico, .svg, .mp4, .webp, .json)
     */
    "/((?!api|_next/static|_next/image|.*\\..*).*)",
  ],
};
