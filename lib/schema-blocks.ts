/**
 * Wiederverwendbare Schema.org-JSON-LD-Blöcke für Landingpages.
 *
 * Enthält Organization, WebSite, BreadcrumbList sowie einen Wrapper, der
 * mehrere Schemas in einem JSON-LD-Array ausgibt.
 */

const BASE = "https://www.taskeyapp.com";

export const TASKEY_ORG = {
  "@type": "Organization",
  "@id": `${BASE}/#organization`,
  name: "Taskey",
  legalName: "Schulz & Stosse GbR",
  url: BASE,
  logo: `${BASE}/taskey-logo.png`,
  sameAs: [
    "https://www.linkedin.com/company/111912028/",
    "https://www.youtube.com/@TaskeyYT",
    "https://apps.apple.com/de/app/taskey/id6757116248",
    "https://play.google.com/store/apps/details?id=com.taskey.taskey_android",
  ],
} as const;

export const TASKEY_WEBSITE = {
  "@type": "WebSite",
  "@id": `${BASE}/#website`,
  url: BASE,
  name: "Taskey",
  publisher: { "@id": `${BASE}/#organization` },
  inLanguage: ["de-DE", "en-US", "fr-FR"],
} as const;

export const TASKEY_AUTHOR = {
  "@type": "Person",
  "@id": `${BASE}/#author-fynn-schulz`,
  name: "Fynn Schulz",
  jobTitle: "Gründer, Taskey",
  worksFor: { "@id": `${BASE}/#organization` },
  url: `${BASE}/about`,
} as const;

export type BreadcrumbItem = { name: string; url: string };

export function breadcrumbList(items: BreadcrumbItem[]) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

/**
 * Fasst mehrere JSON-LD-Blöcke in einem @graph zusammen, wie von Google
 * empfohlen. Verhindert Duplikate und ermöglicht @id-Cross-Referenzen.
 */
export function jsonLdGraph(...blocks: object[]): string {
  return JSON.stringify({
    "@context": "https://schema.org",
    "@graph": blocks,
  });
}
