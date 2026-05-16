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
const TargetAudiences = dynamic(() => import("@/components/TargetAudiences"));
const Branchen = dynamic(() => import("@/components/home/Branchen"));
const BusinessSize = dynamic(() => import("@/components/home/BusinessSize"));
const IOSAppSection = dynamic(() => import("@/components/home/iOSAppSection"));
const FAQ = dynamic(() => import("@/components/home/FAQ"));

export const metadata: Metadata = {
  title: "Taskey – Reinigungssoftware & Software für Gebäudereinigung | All-in-One",
  description: "Die All-in-One Reinigungssoftware für Gebäudereinigung, Unterhaltsreinigung, Glasreinigung, Industrie- und Klinikreinigung. NFC-Objektnachweise, Zeiterfassung, Einsatzplanung, Angebote, Rechnungen & DATEV – in einem System statt 5 Abos. DSGVO, Made in Germany. 3 Monate kostenlos.",
  alternates: {
    canonical: "https://www.taskeyapp.com",
  },
};

export default function Home() {
  // Structured Data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Taskey",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web, iOS, Android",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "EUR",
      "description": "3 Monate kostenlos testen"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "ratingCount": "250"
    },
    "description": "Reinigungssoftware für Gebäudereinigung, Unterhaltsreinigung, Glas-, Industrie- und Klinikreinigung. NFC-Objektnachweise, Zeiterfassung, Einsatzplanung und Live-Margen in einer App.",
    "softwareVersion": "2.0",
    "author": {
      "@type": "Organization",
      "name": "Taskey",
      "url": "https://www.taskeyapp.com"
    }
  };

  const organizationData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Taskey",
    "url": "https://www.taskeyapp.com",
    "logo": "https://www.taskeyapp.com/logobittt.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+49-151-68488999",
      "email": "fynn@taskeyapp.com",
      "contactType": "customer service",
      "areaServed": ["DE", "AT", "CH"],
      "availableLanguage": ["German", "English", "French"]
    },
    "sameAs": [
      "https://www.linkedin.com/company/taskey",
      "https://twitter.com/taskey"
    ]
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
