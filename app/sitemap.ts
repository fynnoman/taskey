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

  // Pillar-Landingpages
  { path: "/software-gebaeudereinigung", changeFrequency: "weekly", priority: 0.95 },
  { path: "/zeiterfassung-gebaeudereinigung", changeFrequency: "monthly", priority: 0.9 },
  { path: "/nfc-zeiterfassung", changeFrequency: "monthly", priority: 0.9 },
  { path: "/einsatzplanung-reinigung", changeFrequency: "monthly", priority: 0.9 },
  { path: "/leistungsnachweis-gebaeudereinigung", changeFrequency: "monthly", priority: 0.9 },
  { path: "/software-kleine-reinigungsfirma", changeFrequency: "monthly", priority: 0.9 },

  // Branchen
  { path: "/loesungen", changeFrequency: "monthly", priority: 0.8 },
  { path: "/loesungen/unterhaltsreinigung", changeFrequency: "monthly", priority: 0.85 },
  { path: "/loesungen/glasreinigung", changeFrequency: "monthly", priority: 0.85 },
  { path: "/loesungen/industriereinigung", changeFrequency: "monthly", priority: 0.85 },
  { path: "/loesungen/klinikreinigung", changeFrequency: "monthly", priority: 0.85 },
  { path: "/loesungen/hotel-housekeeping", changeFrequency: "monthly", priority: 0.85 },

  // Rechtliches
  { path: "/impressum", changeFrequency: "yearly", priority: 0.3 },
  { path: "/datenschutz", changeFrequency: "yearly", priority: 0.3 },
  { path: "/datenschutz-app", changeFrequency: "yearly", priority: 0.3 },
  { path: "/agb", changeFrequency: "yearly", priority: 0.3 },

  // News-Index
  { path: "/news", changeFrequency: "weekly", priority: 0.8 },
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

  const newsUrls = posts
    .filter((p) => !p.planned)
    .flatMap((post) => {
      const path = `/news/${post.slug}`;
      const lastModified = post.isoDate ? new Date(post.isoDate) : now;
      return expand({ path, changeFrequency: "monthly", priority: 0.7, lastModified });
    });

  return [...staticUrls, ...newsUrls];
}
