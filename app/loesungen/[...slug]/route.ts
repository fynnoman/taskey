// 410 Gone for all deleted /loesungen/* URLs (catch-all)
// Signals to Google that these pages are permanently removed.
export const dynamic = "force-static";

export function GET() {
  return new Response(
    "<!doctype html><html lang=\"de\"><head><meta charset=\"utf-8\"><title>410 – Seite endgültig entfernt</title><meta name=\"robots\" content=\"noindex\"></head><body><h1>410 Gone</h1><p>Diese Seite wurde dauerhaft entfernt. Bitte besuche <a href=\"https://www.taskeyapp.com/\">taskeyapp.com</a>.</p></body></html>",
    {
      status: 410,
      headers: {
        "Content-Type": "text/html; charset=utf-8",
        "X-Robots-Tag": "noindex",
      },
    }
  );
}
