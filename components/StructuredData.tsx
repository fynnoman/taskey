import React from "react";

// Shared JSON-LD building blocks for GEO / AI-search visibility.
// Rendered server-side so answer-engine crawlers (which don't run JS) see them.
// Legal entity per Impressum: "Schulz & Stosse GbR" trading as "Taskey".

type FaqItem = { q: string; a: string };
type Crumb = { name: string; url: string };

const SITE_URL = "https://www.taskeyapp.com";
const LOGO_URL = "https://www.taskeyapp.com/logo_transparent.png";

function jsonLdScript(id: string, data: unknown) {
  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
      id={id}
    />
  );
}

export function OrganizationJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Taskey",
    legalName: "Schulz & Stosse GbR",
    url: SITE_URL,
    logo: LOGO_URL,
    description:
      "Taskey ist eine All-in-One-Software für Gebäudereinigungsbetriebe im DACH-Raum mit NFC-Objektnachweis, Zeiterfassung, Einsatzplanung, Kalkulation, Angeboten, Rechnungen und DATEV-Export.",
    email: "fynn@taskeyapp.com",
    telephone: "+49-151-68488999",
    address: {
      "@type": "PostalAddress",
      streetAddress: "In der Acht 44",
      postalCode: "66333",
      addressLocality: "Völklingen",
      addressRegion: "SL",
      addressCountry: "DE",
    },
    founder: [
      { "@type": "Person", name: "Fynn-Luca Schulz" },
      { "@type": "Person", name: "Julian Stosse" },
    ],
    areaServed: ["DE", "AT", "CH"],
    knowsLanguage: ["de", "en", "fr"],
    sameAs: [
      "https://apps.apple.com/de/app/taskey/id6748812720",
    ],
  };
  return jsonLdScript("ld-organization", data);
}

export function WebSiteJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Taskey",
    url: SITE_URL,
    inLanguage: ["de-DE", "en-US", "fr-FR"],
    publisher: {
      "@type": "Organization",
      name: "Taskey",
      url: SITE_URL,
    },
  };
  return jsonLdScript("ld-website", data);
}

export function GlobalStructuredData() {
  return (
    <>
      <OrganizationJsonLd />
      <WebSiteJsonLd />
    </>
  );
}

export function FaqJsonLd({ items, id }: { items: FaqItem[]; id?: string }) {
  if (!items.length) return null;
  const data = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };
  return jsonLdScript(id ?? "ld-faq", data);
}

export function ServiceJsonLd({
  name,
  description,
  serviceType,
  areaServed,
  audienceType,
  url,
  id,
}: {
  name: string;
  description: string;
  serviceType?: string;
  areaServed?: string[];
  audienceType?: string;
  url?: string;
  id?: string;
}) {
  const data = {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    serviceType: serviceType ?? "Software as a Service",
    ...(url ? { url } : {}),
    provider: {
      "@type": "Organization",
      name: "Taskey",
      url: SITE_URL,
    },
    areaServed: areaServed ?? ["DE", "AT", "CH"],
    ...(audienceType
      ? {
          audience: {
            "@type": "Audience",
            audienceType,
          },
        }
      : {}),
  };
  return jsonLdScript(id ?? "ld-service", data);
}

export function BreadcrumbJsonLd({ crumbs, id }: { crumbs: Crumb[]; id?: string }) {
  if (!crumbs.length) return null;
  const data = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.name,
      item: crumb.url,
    })),
  };
  return jsonLdScript(id ?? "ld-breadcrumb", data);
}
