import { MetadataRoute } from "next";
import { posts } from "./[locale]/news/posts";

/* ============================================================================
 * Sitemap with hreflang alternates for /, /en/*, /fr/*
 *  - Default locale "de" stays at root (no prefix).
 *  - "en" and "fr" are prefixed.
 *  - Each entry carries `alternates.languages` so Google sees all three
 *    URL variants pointing at one another (+ x-default = DE).
 * ========================================================================== */

const BASE = "https://www.taskeyapp.com";
const SUPPORTED = ["de", "en", "fr"] as const;
type Locale = (typeof SUPPORTED)[number];

function localized(path: string, locale: Locale): string {
  const safe = path === "/" ? "" : path;
  if (locale === "de") return `${BASE}${safe || "/"}`.replace(/\/$/, BASE === `${BASE}` && safe === "" ? "" : "");
  return `${BASE}/${locale}${safe}`;
}

function alternates(path: string) {
  const de = path === "/" ? BASE : `${BASE}${path}`;
  return {
    languages: {
      "de-DE": de,
      "en-US": `${BASE}/en${path === "/" ? "" : path}`,
      "fr-FR": `${BASE}/fr${path === "/" ? "" : path}`,
      "x-default": de,
    },
  };
}

type Entry = {
  path: string;
  changeFrequency: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
  priority: number;
  lastModified?: Date;
};

const STATIC_ENTRIES: Entry[] = [
  // Kernseiten
  { path: "/", changeFrequency: "weekly", priority: 1.0 },
  { path: "/features", changeFrequency: "monthly", priority: 0.9 },
  { path: "/pricing", changeFrequency: "monthly", priority: 0.9 },
  { path: "/about", changeFrequency: "monthly", priority: 0.8 },
  { path: "/partnerschaften", changeFrequency: "monthly", priority: 0.7 },
  { path: "/ios", changeFrequency: "monthly", priority: 0.8 },
  { path: "/support", changeFrequency: "monthly", priority: 0.6 },
  { path: "/google-kalender-sync", changeFrequency: "monthly", priority: 0.6 },
  { path: "/nfc", changeFrequency: "monthly", priority: 0.8 },
  { path: "/videos", changeFrequency: "monthly", priority: 0.6 },

  // Pillar-Landingpages
  { path: "/software-gebaeudereinigung", changeFrequency: "weekly", priority: 0.95 },
  { path: "/zeiterfassung-gebaeudereinigung", changeFrequency: "monthly", priority: 0.9 },
  { path: "/nfc-zeiterfassung", changeFrequency: "monthly", priority: 0.9 },
  { path: "/einsatzplanung-reinigung", changeFrequency: "monthly", priority: 0.9 },
  { path: "/leistungsnachweis-gebaeudereinigung", changeFrequency: "monthly", priority: 0.9 },
  { path: "/software-kleine-reinigungsfirma", changeFrequency: "monthly", priority: 0.9 },
  { path: "/oepnv", changeFrequency: "monthly", priority: 0.9 },

  // Branchen
  { path: "/loesungen", changeFrequency: "monthly", priority: 0.8 },
  { path: "/loesungen/unterhaltsreinigung", changeFrequency: "monthly", priority: 0.85 },
  { path: "/loesungen/glasreinigung", changeFrequency: "monthly", priority: 0.85 },
  { path: "/loesungen/industriereinigung", changeFrequency: "monthly", priority: 0.85 },
  { path: "/loesungen/klinikreinigung", changeFrequency: "monthly", priority: 0.85 },
  { path: "/loesungen/hotel-housekeeping", changeFrequency: "monthly", priority: 0.85 },

  // Detail-Landingpages (Reinigung + Handwerk, Long-Tail-Keywords)
  { path: "/loesungen/abnahmeprotokoll-digital", changeFrequency: "monthly", priority: 0.7 },
  { path: "/loesungen/abschlagsrechnung-erstellen-handwerk", changeFrequency: "monthly", priority: 0.7 },
  { path: "/loesungen/alles-in-einer-app-handwerksbetrieb", changeFrequency: "monthly", priority: 0.7 },
  { path: "/loesungen/angebotskalkulation-bau", changeFrequency: "monthly", priority: 0.7 },
  { path: "/loesungen/app-fuer-handwerker-aussendienst", changeFrequency: "monthly", priority: 0.7 },
  { path: "/loesungen/arbeitszeiterfassung-reinigungsfirma", changeFrequency: "monthly", priority: 0.7 },
  { path: "/loesungen/auftraege-organisieren-malerbetrieb", changeFrequency: "monthly", priority: 0.7 },
  { path: "/loesungen/auftragsplanung-reinigungsfirma", changeFrequency: "monthly", priority: 0.7 },
  { path: "/loesungen/auftragsverwaltung-handwerk", changeFrequency: "monthly", priority: 0.7 },
  { path: "/loesungen/bauabrechnung-software", changeFrequency: "monthly", priority: 0.7 },
  { path: "/loesungen/bauakte-digital-erstellen", changeFrequency: "monthly", priority: 0.7 },
  { path: "/loesungen/baudokumentation-software", changeFrequency: "monthly", priority: 0.7 },
  { path: "/loesungen/baustellen-koordinieren-tool", changeFrequency: "monthly", priority: 0.7 },
  { path: "/loesungen/baustelleninfos-teilen-app", changeFrequency: "monthly", priority: 0.7 },
  { path: "/loesungen/buchhaltung-handwerksbetrieb", changeFrequency: "monthly", priority: 0.7 },
  { path: "/loesungen/bueroarbeit-reduzieren-handwerk", changeFrequency: "monthly", priority: 0.7 },
  { path: "/loesungen/chat-app-handwerksbetrieb", changeFrequency: "monthly", priority: 0.7 },
  { path: "/loesungen/checklisten-reinigung-digital", changeFrequency: "monthly", priority: 0.7 },
  { path: "/loesungen/crm-fuer-handwerker", changeFrequency: "monthly", priority: 0.7 },
  { path: "/loesungen/digitale-unterschrift-bauabnahme", changeFrequency: "monthly", priority: 0.7 },
  { path: "/loesungen/digitalisierung-handwerksbetrieb", changeFrequency: "monthly", priority: 0.7 },
  { path: "/loesungen/disposition-handwerk-software", changeFrequency: "monthly", priority: 0.7 },
  { path: "/loesungen/einnahmen-ausgaben-handwerker", changeFrequency: "monthly", priority: 0.7 },
  { path: "/loesungen/einsatzplanung-gebaeudereinigung", changeFrequency: "monthly", priority: 0.7 },
  { path: "/loesungen/einsatzplanung-monteure", changeFrequency: "monthly", priority: 0.7 },
  { path: "/loesungen/fahrzeugplanung-handwerksbetrieb", changeFrequency: "monthly", priority: 0.7 },
  { path: "/loesungen/fotos-baustelle-dokumentieren-app", changeFrequency: "monthly", priority: 0.7 },
  { path: "/loesungen/fremdleistungen-abrechnen-bau", changeFrequency: "monthly", priority: 0.7 },
  { path: "/loesungen/gewinn-pro-auftrag-berechnen", changeFrequency: "monthly", priority: 0.7 },
  { path: "/loesungen/handwerk-software-einfach", changeFrequency: "monthly", priority: 0.7 },
  { path: "/loesungen/infos-an-monteure-senden", changeFrequency: "monthly", priority: 0.7 },
  { path: "/loesungen/inventar-verwalten-reinigungsfirma", changeFrequency: "monthly", priority: 0.7 },
  { path: "/loesungen/kapazitaetsplanung-handwerk", changeFrequency: "monthly", priority: 0.7 },
  { path: "/loesungen/kolonnenplanung-bau", changeFrequency: "monthly", priority: 0.7 },
  { path: "/loesungen/kostenvoranschlag-erstellen-software", changeFrequency: "monthly", priority: 0.7 },
  { path: "/loesungen/krankmeldung-digital-handwerk", changeFrequency: "monthly", priority: 0.7 },
  { path: "/loesungen/kundendatenbank-reinigungsfirma", changeFrequency: "monthly", priority: 0.7 },
  { path: "/loesungen/kundenfeedback-reinigung", changeFrequency: "monthly", priority: 0.7 },
  { path: "/loesungen/kundenhistorie-verwalten-handwerk", changeFrequency: "monthly", priority: 0.7 },
  { path: "/loesungen/kundenkommunikation-baufirma", changeFrequency: "monthly", priority: 0.7 },
  { path: "/loesungen/kundenverwaltung-handwerksbetrieb", changeFrequency: "monthly", priority: 0.7 },
  { path: "/loesungen/lagerverwaltung-handwerksbetrieb", changeFrequency: "monthly", priority: 0.7 },
  { path: "/loesungen/maengeldokumentation-bau", changeFrequency: "monthly", priority: 0.7 },
  { path: "/loesungen/papierloses-buero-handwerk", changeFrequency: "monthly", priority: 0.7 },
  { path: "/loesungen/qualitaetskontrolle-gebaeudereinigung", changeFrequency: "monthly", priority: 0.7 },
  { path: "/loesungen/schichtplanung-reinigungsunternehmen", changeFrequency: "monthly", priority: 0.7 },
  { path: "/loesungen/schlussrechnung-software-bau", changeFrequency: "monthly", priority: 0.7 },

  // Rechtliches
  { path: "/impressum", changeFrequency: "yearly", priority: 0.3 },
  { path: "/datenschutz", changeFrequency: "yearly", priority: 0.3 },
  { path: "/datenschutz-app", changeFrequency: "yearly", priority: 0.3 },
  { path: "/agb", changeFrequency: "yearly", priority: 0.3 },

  // News-Index
  { path: "/news", changeFrequency: "weekly", priority: 0.8 },
];

// DE-only Vergleichsseiten (kein en/fr — Seiten geben dort notFound zurück).
const VERGLEICH_ENTRIES: Entry[] = [
  { path: "/vergleich/software-gebaeudereinigung", changeFrequency: "monthly", priority: 0.9 },
  { path: "/vergleich/beste-software-gebaeudereiniger-2026", changeFrequency: "monthly", priority: 0.9 },
  { path: "/vergleich/taskey-vs-fortytools", changeFrequency: "monthly", priority: 0.8 },
  { path: "/vergleich/taskey-vs-pland", changeFrequency: "monthly", priority: 0.8 },
  { path: "/vergleich/taskey-vs-blink", changeFrequency: "monthly", priority: 0.8 },
  { path: "/vergleich/taskey-vs-cleanmanager", changeFrequency: "monthly", priority: 0.8 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const expand = (entry: Entry) => {
    const ts = entry.lastModified ?? now;
    return SUPPORTED.map((locale) => ({
      url: locale === "de"
        ? (entry.path === "/" ? BASE : `${BASE}${entry.path}`)
        : `${BASE}/${locale}${entry.path === "/" ? "" : entry.path}`,
      lastModified: ts,
      changeFrequency: entry.changeFrequency,
      priority: entry.priority,
      alternates: alternates(entry.path),
    }));
  };

  const staticUrls = STATIC_ENTRIES.flatMap(expand);

  const vergleichUrls = VERGLEICH_ENTRIES.map((entry) => ({
    url: `${BASE}${entry.path}`,
    lastModified: entry.lastModified ?? now,
    changeFrequency: entry.changeFrequency,
    priority: entry.priority,
  }));

  const newsUrls = posts
    .filter((p) => !p.planned)
    .flatMap((post) => {
      const path = `/news/${post.slug}`;
      const lastModified = post.isoDate ? new Date(post.isoDate) : now;
      return expand({ path, changeFrequency: "monthly", priority: 0.7, lastModified });
    });

  return [...staticUrls, ...vergleichUrls, ...newsUrls];
}
