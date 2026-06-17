import Hero from "@/components/home/Hero";
import CommunicationUSP from "@/components/CommunicationUSP";
import AllInOneUSP from "@/components/AllInOneUSP";
import TestimonialReviews from "@/components/schema/TestimonialReviews";
import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { buildMetadata, pickLocale, type PageCopy } from "@/lib/i18n-metadata";

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

const HOME_COPY: PageCopy = {
  de: {
    title: "Gebäudereinigungssoftware | NFC Zeiterfassung & Live-Margen | Taskey",
    description:
      "Reinigungssoftware Made in Germany: NFC-Zeiterfassung, Einsatzplanung, Live-Margen & Auftraggeber-Portal. DSGVO-konform. 3 Monate kostenlos testen.",
  },
  en: {
    title: "Cleaning management software | NFC time tracking & live margins | Taskey",
    description:
      "Cleaning software made in Germany: NFC time tracking, scheduling, live margins and a client portal. GDPR-compliant. Try 3 months for free.",
  },
  fr: {
    title: "Logiciel de gestion de nettoyage | Pointage NFC & marges en direct | Taskey",
    description:
      "Logiciel de nettoyage made in Germany : pointage NFC, planification, marges en direct et portail client. Conforme RGPD. 3 mois d'essai gratuit.",
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return buildMetadata({
    copyByLocale: HOME_COPY,
    locale: pickLocale(locale),
    path: "/",
  });
}

const SOFTWARE_DESC: Record<"de" | "en" | "fr", string> = {
  de: "All-in-One Reinigungssoftware für Gebäudereinigung mit NFC-Zeiterfassung, Einsatzplanung, Live-Margen und DATEV-Export.",
  en: "All-in-one cleaning management software with NFC time tracking, scheduling, live margins and DATEV export.",
  fr: "Logiciel de gestion de nettoyage tout-en-un avec pointage NFC, planification, marges en direct et export DATEV.",
};

const FAQ_BY_LOCALE: Record<"de" | "en" | "fr", { q: string; a: string }[]> = {
  de: [
    { q: "Ist Taskey DSGVO-konform?", a: "Ja, Taskey ist vollständig DSGVO-konform. Alle Daten werden auf deutschen Servern gespeichert und verschlüsselt übertragen." },
    { q: "Ist die App auch für Mitarbeiter ohne Deutschkenntnisse geeignet?", a: "Absolut. Taskey ist mehrsprachig (Deutsch, Türkisch, Russisch, Polnisch u.a.) und so einfach gestaltet, dass jeder Mitarbeiter sofort damit arbeiten kann – auch ohne Schulung." },
    { q: "Wie funktioniert der Leistungsnachweis per NFC?", a: "Ihr Mitarbeiter hält das Handy an den NFC-Tag am Objekt oder Werkzeug. Taskey protokolliert automatisch Zeitstempel, GPS-Standort und Mitarbeiter. Sie haben den Nachweis schwarz auf weiß." },
    { q: "Erfüllt Taskey die Mindestlohn-Dokumentationspflicht?", a: "Ja. Die automatische Zeiterfassung dokumentiert alle Arbeitszeiten Mindestlohn-konform. Keine manuellen Stundenzettel, keine Fehler – alles digital und nachvollziehbar." },
    { q: "Funktioniert die App auch in Kellern und Tiefgaragen (offline)?", a: "Ja, Taskey funktioniert vollständig offline. Alle Daten werden lokal gespeichert und automatisch synchronisiert, sobald wieder Netz vorhanden ist." },
    { q: "Kann ich bestehende Objekte und Mitarbeiterdaten importieren?", a: "Ja, wir importieren alle Ihre Objekte, Mitarbeiter und Verträge für Sie – schlüsselfertig. Das ist unser Done-for-You Setup." },
    { q: "Kann ich Daten exportieren?", a: "Ja, Taskey bietet umfangreiche Export-Funktionen. Zeitdaten und Abrechnungen können als PDF, CSV oder Excel exportiert werden." },
    { q: "Wie schnell kann ich starten?", a: "Sofort nach der Registrierung. Mit unserem Done-for-You Setup ist Ihr kompletter Betrieb in 48 Stunden einsatzbereit." },
    { q: "Wie funktioniert die Schlüsselverwaltung?", a: "Taskey dokumentiert, welcher Mitarbeiter Zugang zu welchem Objekt hat. Per NFC-Tag am Schlüsselkasten wird jede Entnahme und Rückgabe protokolliert." },
    { q: "Was kostet Taskey?", a: "Taskey bietet flexible Preismodelle ab 119 € pro Monat – vom Soloselbstständigen bis zum Großbetrieb. Die Details finden Sie auf der Preisseite." },
  ],
  en: [
    { q: "Is Taskey GDPR-compliant?", a: "Yes, Taskey is fully GDPR-compliant. All data is stored on German servers and transmitted encrypted." },
    { q: "Is the app suitable for employees who don't speak German?", a: "Absolutely. Taskey is multilingual (German, Turkish, Russian, Polish and more) and designed to be simple enough that any team member can use it immediately – no training needed." },
    { q: "How does the NFC proof of service work?", a: "Your team holds their phone against the NFC tag at the site or on a tool. Taskey automatically logs the timestamp, GPS location and employee. You have proof in black and white." },
    { q: "Does Taskey meet the minimum-wage documentation requirements?", a: "Yes. Automatic time tracking documents all working hours in line with German minimum-wage law. No paper timesheets, no errors – fully digital and auditable." },
    { q: "Does the app also work offline (basements, underground garages)?", a: "Yes, Taskey works fully offline. All data is stored locally and syncs automatically as soon as connectivity returns." },
    { q: "Can I import existing sites and employee data?", a: "Yes, we import all your sites, employees and contracts for you – turnkey. That's our Done-for-You setup." },
    { q: "Can I export data?", a: "Yes, Taskey offers extensive export options. Time data and billing can be exported as PDF, CSV or Excel." },
    { q: "How fast can I get started?", a: "Right after sign-up. With our Done-for-You setup, your entire operation is up and running within 48 hours." },
    { q: "How does key management work?", a: "Taskey documents which employee has access to which site. An NFC tag on the key cabinet logs every pickup and return." },
    { q: "How much does Taskey cost?", a: "Taskey offers flexible plans starting at €119 per month – from solo operators to large enterprises. Details on the pricing page." },
  ],
  fr: [
    { q: "Taskey est-il conforme au RGPD ?", a: "Oui, Taskey est entièrement conforme au RGPD. Toutes les données sont stockées sur des serveurs allemands et transmises de manière chiffrée." },
    { q: "L'application convient-elle aux employés qui ne parlent pas allemand ?", a: "Absolument. Taskey est multilingue (allemand, turc, russe, polonais et plus) et conçu pour être si simple que tout employé peut l'utiliser immédiatement – sans formation." },
    { q: "Comment fonctionne la preuve de service NFC ?", a: "Votre employé approche son téléphone du tag NFC sur le site ou un outil. Taskey enregistre automatiquement l'horodatage, la position GPS et l'employé. Vous avez la preuve noir sur blanc." },
    { q: "Taskey répond-il aux obligations de documentation du salaire minimum ?", a: "Oui. Le pointage automatique documente toutes les heures conformément à la loi. Pas de fiches papier, pas d'erreurs – tout est numérique et auditable." },
    { q: "L'application fonctionne-t-elle hors ligne (caves, parkings souterrains) ?", a: "Oui, Taskey fonctionne entièrement hors ligne. Les données sont stockées localement et synchronisées dès que le réseau revient." },
    { q: "Puis-je importer mes sites et données employés existants ?", a: "Oui, nous importons tous vos sites, employés et contrats pour vous – clé en main. C'est notre Done-for-You Setup." },
    { q: "Puis-je exporter les données ?", a: "Oui, Taskey offre de nombreuses options d'export. Les données de temps et de facturation s'exportent en PDF, CSV ou Excel." },
    { q: "À quelle vitesse puis-je démarrer ?", a: "Immédiatement après l'inscription. Avec notre Done-for-You Setup, toute votre activité est opérationnelle en 48 heures." },
    { q: "Comment fonctionne la gestion des clés ?", a: "Taskey documente quel employé a accès à quel site. Un tag NFC sur l'armoire à clés enregistre chaque retrait et restitution." },
    { q: "Combien coûte Taskey ?", a: "Taskey propose des forfaits flexibles à partir de 119 €/mois – du travailleur indépendant aux grandes entreprises. Détails sur la page tarifs." },
  ],
};

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const loc = pickLocale(locale);
  const baseUrl = loc === "de" ? "https://www.taskeyapp.com" : `https://www.taskeyapp.com/${loc}`;

  // Structured Data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Taskey",
    "applicationCategory": "BusinessApplication",
    "applicationSubCategory": "Cleaning Management Software",
    "operatingSystem": "iOS, Android, Web",
    "url": baseUrl,
    "description": SOFTWARE_DESC[loc],
    "inLanguage": [loc === "de" ? "de-DE" : loc === "en" ? "en-US" : "fr-FR", "tr", "ru", "pl"],
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

  // FAQPage-Schema – per-locale answers
  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": FAQ_BY_LOCALE[loc].map((item) => ({
      "@type": "Question",
      "name": item.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.a,
      },
    })),
  };

  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": loc === "fr" ? "Accueil" : loc === "en" ? "Home" : "Home",
        "item": baseUrl,
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
      <TestimonialReviews />
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
