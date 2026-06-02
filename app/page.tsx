import Hero from "@/components/home/Hero";
import CommunicationUSP from "@/components/CommunicationUSP";
import AllInOneUSP from "@/components/AllInOneUSP";
import type { Metadata } from "next";
import dynamic from "next/dynamic";

// Above-the-fold / initial: Hero + CommunicationUSP + AllInOneUSP statisch.
// Alles darunter wird dynamisch nachgeladen für schnellere First Paint / LCP.
const FeaturePreview = dynamic(() => import("@/components/home/FeaturePreview"));
const LiveMargen = dynamic(() => import("@/components/home/LiveMargen"));
const TaskeyShare = dynamic(() => import("@/components/home/TaskeyShare"));
const TaskeyShareDemo = dynamic(() => import("@/components/home/TaskeyShareDemo"));
const TargetAudiences = dynamic(() => import("@/components/TargetAudiences"));
const Branchen = dynamic(() => import("@/components/home/Branchen"));
const BusinessSize = dynamic(() => import("@/components/home/BusinessSize"));
const IOSAppSection = dynamic(() => import("@/components/home/iOSAppSection"));
const FAQ = dynamic(() => import("@/components/home/FAQ"));

export const metadata: Metadata = {
  title: "Gebäudereinigungssoftware | NFC Zeiterfassung & Live-Margen | Taskey",
  description:
    "Reinigungssoftware Made in Germany: NFC-Zeiterfassung, Einsatzplanung, Live-Margen & Auftraggeber-Portal. DSGVO-konform. 3 Monate kostenlos testen.",
  alternates: {
    canonical: "https://www.taskeyapp.com",
  },
  openGraph: {
    title: "Gebäudereinigungssoftware | NFC Zeiterfassung & Live-Margen | Taskey",
    description:
      "Reinigungssoftware Made in Germany: NFC-Zeiterfassung, Einsatzplanung, Live-Margen & Auftraggeber-Portal. DSGVO-konform. 3 Monate kostenlos testen.",
    url: "https://www.taskeyapp.com",
    type: "website",
    locale: "de_DE",
    siteName: "Taskey",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Taskey – Gebäudereinigungssoftware mit NFC-Zeiterfassung",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gebäudereinigungssoftware | NFC Zeiterfassung & Live-Margen | Taskey",
    description:
      "Reinigungssoftware Made in Germany: NFC-Zeiterfassung, Einsatzplanung, Live-Margen & Auftraggeber-Portal. DSGVO-konform.",
    images: ["/opengraph-image"],
  },
};

export default function Home() {
  // Structured Data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Taskey",
    "applicationCategory": "BusinessApplication",
    "applicationSubCategory": "Cleaning Management Software",
    "operatingSystem": "iOS, Android, Web",
    "url": "https://www.taskeyapp.com",
    "description":
      "All-in-One Reinigungssoftware für Gebäudereinigung mit NFC-Zeiterfassung, Einsatzplanung, Live-Margen und DATEV-Export.",
    "inLanguage": ["de-DE", "tr", "ru", "pl"],
    "publisher": {
      "@type": "Organization",
      "name": "Schulz & Stosse GbR",
      "url": "https://www.taskeyapp.com",
    },
    "offers": {
      "@type": "AggregateOffer",
      "lowPrice": "119",
      "highPrice": "429",
      "priceCurrency": "EUR",
      "offerCount": "3",
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "ratingCount": "250",
    },
    "softwareVersion": "2.0",
  };

  const organizationData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Taskey",
    "legalName": "Schulz & Stosse GbR",
    "url": "https://www.taskeyapp.com",
    "logo": "https://www.taskeyapp.com/logobittt.png",
    "foundingDate": "2024",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "In der Acht 44",
      "addressLocality": "Völklingen",
      "postalCode": "66333",
      "addressCountry": "DE",
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+49-151-68488999",
      "email": "fynn@taskeyapp.com",
      "contactType": "customer service",
      "areaServed": ["DE", "AT", "CH"],
      "availableLanguage": ["German", "English", "French"],
    },
    "founder": [
      { "@type": "Person", "name": "Fynn-Luca Schulz" },
      { "@type": "Person", "name": "Julian Stosse" },
    ],
    "areaServed": ["DE", "AT", "CH"],
    "sameAs": [
      "https://www.linkedin.com/company/taskey",
      "https://twitter.com/taskey",
    ],
  };

  // FAQPage-Schema – Inhalt deckungsgleich mit de.ts (FAQ-Component)
  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Ist Taskey DSGVO-konform?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text":
            "Ja, Taskey ist vollständig DSGVO-konform. Alle Daten werden auf deutschen Servern gespeichert und verschlüsselt übertragen.",
        },
      },
      {
        "@type": "Question",
        "name": "Ist die App auch für Mitarbeiter ohne Deutschkenntnisse geeignet?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text":
            "Absolut. Taskey ist mehrsprachig (Deutsch, Türkisch, Russisch, Polnisch u.a.) und so einfach gestaltet, dass jeder Mitarbeiter sofort damit arbeiten kann – auch ohne Schulung.",
        },
      },
      {
        "@type": "Question",
        "name": "Wie funktioniert der Leistungsnachweis per NFC?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text":
            "Ihr Mitarbeiter hält das Handy an den NFC-Tag am Objekt oder Werkzeug. Taskey protokolliert automatisch Zeitstempel, GPS-Standort und Mitarbeiter. Sie haben den Nachweis schwarz auf weiß.",
        },
      },
      {
        "@type": "Question",
        "name": "Erfüllt Taskey die Mindestlohn-Dokumentationspflicht?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text":
            "Ja. Die automatische Zeiterfassung dokumentiert alle Arbeitszeiten Mindestlohn-konform. Keine manuellen Stundenzettel, keine Fehler – alles digital und nachvollziehbar.",
        },
      },
      {
        "@type": "Question",
        "name": "Funktioniert die App auch in Kellern und Tiefgaragen (offline)?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text":
            "Ja, Taskey funktioniert vollständig offline. Alle Daten werden lokal gespeichert und automatisch synchronisiert, sobald wieder Netz vorhanden ist.",
        },
      },
      {
        "@type": "Question",
        "name": "Kann ich bestehende Objekte und Mitarbeiterdaten importieren?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text":
            "Ja, wir importieren alle Ihre Objekte, Mitarbeiter und Verträge für Sie – schlüsselfertig. Das ist unser Done-for-You Setup.",
        },
      },
      {
        "@type": "Question",
        "name": "Kann ich Daten exportieren?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text":
            "Ja, Taskey bietet umfangreiche Export-Funktionen. Zeitdaten und Abrechnungen können als PDF, CSV oder Excel exportiert werden.",
        },
      },
      {
        "@type": "Question",
        "name": "Wie schnell kann ich starten?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text":
            "Sofort nach der Registrierung. Mit unserem Done-for-You Setup ist Ihr kompletter Betrieb in 48 Stunden einsatzbereit.",
        },
      },
      {
        "@type": "Question",
        "name": "Wie funktioniert die Schlüsselverwaltung?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text":
            "Taskey dokumentiert, welcher Mitarbeiter Zugang zu welchem Objekt hat. Per NFC-Tag am Schlüsselkasten wird jede Entnahme und Rückgabe protokolliert.",
        },
      },
      {
        "@type": "Question",
        "name": "Was kostet Taskey?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text":
            "Taskey bietet flexible Preismodelle ab 119 € pro Monat – vom Soloselbstständigen bis zum Großbetrieb. Die Details finden Sie auf der Preisseite.",
        },
      },
    ],
  };

  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.taskeyapp.com",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }}
      />
      <main>
        {/* 1. Hook: Hero (Wert-Versprechen + CTA) */}
        <Hero />

        {/* 2. Kern-USP #1: Kommunikation Feld ↔ Büro (zentraler Schmerz) */}
        <CommunicationUSP variant="full" />

        {/* 3. Kern-USP #2: Alles in einem System statt 5 Abos */}
        <AllInOneUSP variant="dark" />

        {/* 4. Soziale Validierung: Für wen ist Taskey? */}
        <TargetAudiences variant="dark" />

        {/* 5. Testimonials aus der Reinigungsbranche */}
        <Branchen />

        {/* 6. Produkt-Show: konkrete Features im Einsatz */}
        <FeaturePreview />

        {/* 7. Money-Argument: Live-Margen → harter ROI-Beweis */}
        <LiveMargen />

        {/* 8. Auftraggeber-Portal: differenzierendes USP */}
        <TaskeyShare />

        {/* 8.5 Live-Demo des Auftraggeber-Portals */}
        <TaskeyShareDemo />

        {/* 9. Skalierbarkeit: vom 1-Mann bis Enterprise */}
        <BusinessSize />

        {/* 10. Mobile App: Alltag des Teams */}
        <IOSAppSection />

        {/* 11. Einwände abbauen */}
        <FAQ />
      </main>
    </>
  );
}
