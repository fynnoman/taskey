import { MetadataRoute } from 'next';
import { posts } from './news/posts';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.taskeyapp.com';
  const now = new Date();

  return [
    // ─── Kernseiten ───────────────────────────────────────
    { url: baseUrl, lastModified: now, changeFrequency: 'weekly', priority: 1 },
    { url: `${baseUrl}/features`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/pricing`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/about`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/enterprise`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/partnerschaften`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/ios`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/support`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },

    // ─── Pillar-Landingpages ──────────────────────────────
    { url: `${baseUrl}/zeiterfassung-gebaeudereinigung`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/nfc-zeiterfassung`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/einsatzplanung-reinigung`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/leistungsnachweis-gebaeudereinigung`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/software-kleine-reinigungsfirma`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },

    // ─── Vergleichsseiten ─────────────────────────────────
    { url: `${baseUrl}/vergleich/zvoove-alternative`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/vergleich/blink-alternative`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/vergleich/mendato-alternative`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/vergleich/fortytools-alternative`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },

    // ─── Branchen-Seiten ──────────────────────────────────
    { url: `${baseUrl}/loesungen`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/loesungen/unterhaltsreinigung`, lastModified: now, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${baseUrl}/loesungen/glasreinigung`, lastModified: now, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${baseUrl}/loesungen/industriereinigung`, lastModified: now, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${baseUrl}/loesungen/klinikreinigung`, lastModified: now, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${baseUrl}/loesungen/hotel-housekeeping`, lastModified: now, changeFrequency: 'monthly', priority: 0.85 },

    // ─── Rechtliches ──────────────────────────────────────
    { url: `${baseUrl}/impressum`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${baseUrl}/datenschutz`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${baseUrl}/agb`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },

    // ─── News & Blog ──────────────────────────────────────
    { url: `${baseUrl}/news`, lastModified: now, changeFrequency: 'weekly' as const, priority: 0.8 },
    ...posts
      .filter((p) => !p.planned)
      .map((post) => ({
        url: `${baseUrl}/news/${post.slug}`,
        lastModified: post.isoDate ? new Date(post.isoDate) : now,
        changeFrequency: 'monthly' as const,
        priority: 0.7,
      })),
  ];
}
