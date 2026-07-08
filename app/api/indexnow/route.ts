import { NextResponse } from "next/server";

const HOST = "www.taskeyapp.com";
const KEY = process.env.INDEXNOW_KEY ?? "k9f2m7q4p8j3n6t1r5w2y8b4c7e0a3s6";
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;

const ENDPOINTS = [
  "https://api.indexnow.org/indexnow",
  "https://www.bing.com/indexnow",
  "https://yandex.com/indexnow",
];

export const dynamic = "force-dynamic";

export async function POST(req: Request) {
  const secret = req.headers.get("x-indexnow-secret");
  if (!process.env.INDEXNOW_SECRET || secret !== process.env.INDEXNOW_SECRET) {
    return NextResponse.json({ error: "unauthorized" }, { status: 401 });
  }

  const body = await req.json().catch(() => ({}));
  const urls: string[] = Array.isArray(body?.urls) ? body.urls : [];
  if (urls.length === 0) {
    return NextResponse.json({ error: "no urls provided" }, { status: 400 });
  }

  const payload = {
    host: HOST,
    key: KEY,
    keyLocation: KEY_LOCATION,
    urlList: urls,
  };

  const results = await Promise.allSettled(
    ENDPOINTS.map((endpoint) =>
      fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json; charset=utf-8" },
        body: JSON.stringify(payload),
      }).then((r) => ({ endpoint, status: r.status }))
    )
  );

  return NextResponse.json({
    submitted: urls.length,
    endpoints: results.map((r) =>
      r.status === "fulfilled" ? r.value : { error: String(r.reason) }
    ),
  });
}

export async function GET() {
  return NextResponse.json({
    key: KEY,
    keyLocation: KEY_LOCATION,
    endpoints: ENDPOINTS,
    hint: "POST to this endpoint with { urls: string[] } and x-indexnow-secret header to notify Bing/Yandex.",
  });
}
