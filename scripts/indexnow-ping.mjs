#!/usr/bin/env node

const HOST = "www.taskeyapp.com";
const KEY = "k9f2m7q4p8j3n6t1r5w2y8b4c7e0a3s6";
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;
const ENDPOINT = "https://api.indexnow.org/indexnow";

const BASE = `https://${HOST}`;

const PATHS = [
  "/",
  "/features",
  "/features/taskey-share",
  "/pricing",
  "/about",
  "/ios",
  "/nfc",
  "/oepnv",
  "/news",
  "/software-gebaeudereinigung",
  "/zeiterfassung-gebaeudereinigung",
  "/nfc-zeiterfassung",
  "/einsatzplanung-reinigung",
  "/leistungsnachweis-gebaeudereinigung",
  "/software-kleine-reinigungsfirma",
  "/loesungen",
  "/loesungen/unterhaltsreinigung",
  "/loesungen/glasreinigung",
  "/loesungen/industriereinigung",
  "/loesungen/klinikreinigung",
  "/loesungen/hotel-housekeeping",
  "/loesungen/digitalisierung-gebaeudereinigung",
  "/loesungen/objektuebergabe-reinigung",
  "/loesungen/reinigung-kontrollieren",
  "/loesungen/reinigungsauftraege-verwalten",
  "/loesungen/reinigungskraefte-planen",
  "/loesungen/reinigungsobjekte-verwalten",
  "/loesungen/reinigungsplan-erstellen",
  "/loesungen/reinigungsvertrag-erstellen",
  "/loesungen/schluesselverwaltung-gebaeudereinigung",
  "/loesungen/springer-reinigung",
  "/rechner",
  "/rechner/reinigungskosten",
  "/rechner/stundenverrechnungssatz",
  "/rechner/personalbedarf",
  "/rechner/lohnkosten-reinigung",
  "/rechner/marge-gebaeudereinigung",
  "/vergleich/software-gebaeudereinigung",
  "/vergleich/beste-software-gebaeudereiniger-2026",
  "/vergleich/taskey-vs-fortytools",
  "/vergleich/taskey-vs-pland",
  "/vergleich/taskey-vs-blink",
  "/vergleich/taskey-vs-cleanmanager",
];

function expandLocales(paths) {
  const urls = [];
  for (const p of paths) {
    urls.push(`${BASE}${p === "/" ? "" : p}` || BASE);
    urls.push(`${BASE}/en${p === "/" ? "" : p}`);
    urls.push(`${BASE}/fr${p === "/" ? "" : p}`);
  }
  return urls;
}

async function main() {
  const isProd =
    process.env.VERCEL_ENV === "production" ||
    process.env.INDEXNOW_FORCE === "1";

  if (!isProd) {
    console.log(
      "[indexnow] Skipped: not a production deploy (set INDEXNOW_FORCE=1 to override)."
    );
    return;
  }

  const urlList = expandLocales(PATHS);

  const payload = {
    host: HOST,
    key: KEY,
    keyLocation: KEY_LOCATION,
    urlList,
  };

  try {
    const res = await fetch(ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      body: JSON.stringify(payload),
    });

    const text = await res.text().catch(() => "");
    console.log(
      `[indexnow] Response ${res.status}${text ? ` :: ${text}` : ""} (${urlList.length} URLs submitted)`
    );

    if (res.status >= 200 && res.status < 300) {
      process.exit(0);
    }
    process.exit(0);
  } catch (err) {
    console.warn("[indexnow] Ping failed:", err?.message ?? err);
    process.exit(0);
  }
}

main();
