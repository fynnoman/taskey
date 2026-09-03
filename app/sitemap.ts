import { MetadataRoute } from "next";
import { posts } from "./[locale]/news/posts";

/* ============================================================================
 * Sitemap with hreflang alternates for /, /en/*, /fr/*
 *  - Default locale "de" stays at root (no prefix).
 *  - "en" and "fr" are prefixed.
 *  - Each localized entry carries `alternates.languages` so Google sees all
 *    URL variants pointing at one another (+ x-default = DE).
 *  - DE-only pages (Vergleiche) get an explicit de-DE / x-default block.
 * ========================================================================== */

const BASE = "https://www.taskeyapp.com";
const SUPPORTED = ["de", "en", "fr"] as const;
type Locale = (typeof SUPPORTED)[number];

function urlFor(path: string, locale: Locale): string {
  if (locale === "de") return path === "/" ? BASE : `${BASE}${path}`;
  return `${BASE}/${locale}${path === "/" ? "" : path}`;
}

function multilingualAlternates(path: string) {
  const de = urlFor(path, "de");
  return {
    languages: {
      "de-DE": de,
      "en-US": urlFor(path, "en"),
      "fr-FR": urlFor(path, "fr"),
      "x-default": de,
    },
  };
}

function deOnlyAlternates(path: string) {
  const de = urlFor(path, "de");
  return {
    languages: {
      "de-DE": de,
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
  { path: "/features/taskey-share", changeFrequency: "monthly", priority: 0.85 },
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
  { path: "/reinigungssoftware", changeFrequency: "weekly", priority: 0.9 },

  // Branchen (Hub + Pillars)
  { path: "/loesungen", changeFrequency: "monthly", priority: 0.8 },
  { path: "/loesungen/unterhaltsreinigung", changeFrequency: "monthly", priority: 0.85 },
  { path: "/loesungen/glasreinigung", changeFrequency: "monthly", priority: 0.85 },
  { path: "/loesungen/industriereinigung", changeFrequency: "monthly", priority: 0.85 },
  { path: "/loesungen/klinikreinigung", changeFrequency: "monthly", priority: 0.85 },
  { path: "/loesungen/hotel-housekeeping", changeFrequency: "monthly", priority: 0.85 },

  // Detail-Landingpages (nur live Seiten; 410-Redirects wurden aus der Sitemap entfernt)
  { path: "/loesungen/digitalisierung-gebaeudereinigung", changeFrequency: "monthly", priority: 0.8 },
  { path: "/loesungen/objektuebergabe-reinigung", changeFrequency: "monthly", priority: 0.75 },
  { path: "/loesungen/reinigung-kontrollieren", changeFrequency: "monthly", priority: 0.75 },
  { path: "/loesungen/reinigungsauftraege-verwalten", changeFrequency: "monthly", priority: 0.75 },
  { path: "/loesungen/reinigungskraefte-planen", changeFrequency: "monthly", priority: 0.75 },
  { path: "/loesungen/reinigungsobjekte-verwalten", changeFrequency: "monthly", priority: 0.75 },
  { path: "/loesungen/reinigungsplan-erstellen", changeFrequency: "monthly", priority: 0.75 },
  { path: "/loesungen/reinigungsvertrag-erstellen", changeFrequency: "monthly", priority: 0.75 },
  { path: "/loesungen/schluesselverwaltung-gebaeudereinigung", changeFrequency: "monthly", priority: 0.75 },
  { path: "/loesungen/springer-reinigung", changeFrequency: "monthly", priority: 0.75 },

  // Rechner (Tools)
  { path: "/rechner", changeFrequency: "monthly", priority: 0.85 },
  { path: "/rechner/reinigungskosten", changeFrequency: "monthly", priority: 0.9 },
  { path: "/rechner/stundenverrechnungssatz", changeFrequency: "monthly", priority: 0.9 },
  { path: "/rechner/personalbedarf", changeFrequency: "monthly", priority: 0.9 },
  { path: "/rechner/lohnkosten-reinigung", changeFrequency: "monthly", priority: 0.85 },
  { path: "/rechner/marge-gebaeudereinigung", changeFrequency: "monthly", priority: 0.85 },

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
  { path: "/reinigungsapp", changeFrequency: "weekly", priority: 0.9 },
  { path: "/reinigersoftware", changeFrequency: "weekly", priority: 0.9 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const expandMultilingual = (entry: Entry) => {
    const ts = entry.lastModified ?? now;
    return SUPPORTED.map((locale) => ({
      url: urlFor(entry.path, locale),
      lastModified: ts,
      changeFrequency: entry.changeFrequency,
      priority: entry.priority,
      alternates: multilingualAlternates(entry.path),
    }));
  };

  const staticUrls = STATIC_ENTRIES.flatMap(expandMultilingual);

  const vergleichUrls = VERGLEICH_ENTRIES.map((entry) => ({
    url: urlFor(entry.path, "de"),
    lastModified: entry.lastModified ?? now,
    changeFrequency: entry.changeFrequency,
    priority: entry.priority,
    alternates: deOnlyAlternates(entry.path),
  }));

  const newsUrls = posts
    .filter((p) => !p.planned)
    .flatMap((post) => {
      const path = `/news/${post.slug}`;
      const lastModified = post.isoDate ? new Date(post.isoDate) : now;
      return expandMultilingual({ path, changeFrequency: "monthly", priority: 0.7, lastModified });
    });

  return [...staticUrls, ...vergleichUrls, ...newsUrls];
}
