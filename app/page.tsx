import Hero from "@/components/home/Hero";
import NFCSection from "@/components/home/NFCSection";
import FeaturePreview from "@/components/home/FeaturePreview";
import SectionDivider from "@/components/home/SectionDivider";
import CommunicationUSP from "@/components/CommunicationUSP";
import AllInOneUSP from "@/components/AllInOneUSP";
import TargetAudiences from "@/components/TargetAudiences";
import type { Metadata } from "next";
import dynamic from "next/dynamic";
import ReferralSection from "@/components/home/ReferralSection";

const LiveMargen = dynamic(() => import("@/components/home/LiveMargen"));
const TaskeyShare = dynamic(() => import("@/components/home/TaskeyShare"));
const IOSAppSection = dynamic(() => import("@/components/home/iOSAppSection"));
const BusinessSize = dynamic(() => import("@/components/home/BusinessSize"));
const Branchen = dynamic(() => import("@/components/home/Branchen"));
const FAQ = dynamic(() => import("@/components/home/FAQ"));
const Contact = dynamic(() => import("@/components/home/Contact"));
const ScrollLine = dynamic(() => import("@/components/home/ScrollLine"));

export const metadata: Metadata = {
  title: "Taskey – Handwerkersoftware, Reinigungssoftware & Facility Management Software | All-in-One",
  description: "Die All-in-One Software für Handwerk, Gebäudereinigung, Facility Management, GaLaBau, Sicherheitsdienste und Industriereinigung. Zeiterfassung, NFC-Nachweise, Einsatzplanung, Angebote, Rechnungen & DATEV – in einem System statt 5 Abos. DSGVO, Made in Germany. 3 Monate kostenlos.",
  keywords: [
    "Handwerkersoftware", "Software Handwerk", "Software Gebäudereinigung",
    "Reinigungssoftware", "Facility Management Software", "All-in-One Software Handwerk",
    "Komplettlösung Handwerksbetrieb", "Elektriker Software", "SHK Software",
    "Maler Software", "Dachdecker Software", "GaLaBau Software",
    "Hausmeisterservice Software", "Software Sicherheitsdienst",
    "NFC Zeiterfassung", "Zeiterfassung Handwerk", "Zeiterfassung Gebäudereinigung",
    "Einsatzplanung Handwerk", "Tourenplanung Handwerk", "Monteur Einsatzplanung",
    "Nachkalkulation Handwerk", "DATEV Export Handwerk",
    "Alternative zu Craftnote", "Alternative zu openHandwerk",
    "Alternative zu ToolTime", "Handwerkersoftware Vergleich",
    "Handwerk digitalisieren", "Reinigungsfirma digitalisieren",
    "Made in Germany", "DSGVO-konforme Software"
  ],
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
    "description": "Betriebssoftware für Handwerk, Gebäudereinigung und Facility Management. Zeiterfassung, NFC-Nachweise, Einsatzplanung und Live-Margen in einer App.",
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
        <Hero />
        <ReferralSection />
        <CommunicationUSP variant="full" />
        <AllInOneUSP variant="dark" />
        <TargetAudiences variant="light" />
        <NFCSection />
        <SectionDivider from="#f9fafb" to="white" variant="wave" />

        <FeaturePreview />
        {/* <Testimonials /> */}

        {/* Hero Feature Sections */}
        <LiveMargen />
        <SectionDivider from="#111827" to="white" variant="wave" />
        <SectionDivider from="white" to="#f9fafb" variant="curve" />
        <TaskeyShare />

        <SectionDivider from="#f9fafb" to="#f9fafb" variant="curve" />
        <div className="relative">
          <ScrollLine />
          <IOSAppSection />
          <SectionDivider from="#f9fafb" to="white" variant="slant" />
          <BusinessSize />
          <Branchen />
          <FAQ />

          {/* Onboarding Teaser Strip */}
          <div className="mx-4 sm:mx-8 lg:mx-auto lg:max-w-5xl my-10 rounded-2xl overflow-hidden bg-gradient-to-r from-gray-900 via-blue-950 to-gray-900 border border-white/10 relative">
            <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400"></div>
            <div className="flex flex-col md:flex-row items-center gap-6 px-8 py-7">
              <div className="flex-1 min-w-0">
                <p className="text-xs font-black text-cyan-400 uppercase tracking-widest mb-2">Done-for-You Setup</p>
                <h3 className="text-xl md:text-2xl font-black text-white mb-1">Wir richten Taskey für Sie ein — komplett schlüsselfertig.</h3>
                <p className="text-gray-400 text-sm">Kein Aufwand Ihrerseits. Wir importieren Ihre Daten, konfigurieren das System und schulen Ihr Team.</p>
              </div>
              <div className="flex-shrink-0">
                <a
                  href="/pricing#onboarding"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-400 to-cyan-500 text-gray-900 font-black px-7 py-3.5 rounded-xl hover:scale-105 transition-all shadow-lg text-sm whitespace-nowrap"
                >
                  Setup-Optionen ansehen
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </a>
              </div>
            </div>
          </div>
        </div>
        <SectionDivider from="white" to="#f9fafb" variant="dot-fade" />
        <Contact />

        {/* Cross-links to specialized pages */}
        <div className="bg-gray-100 border-t border-gray-200">
          <div className="max-w-5xl mx-auto px-4 py-4 flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-gray-500">
            <span className="flex items-center gap-2">
              <span>Speziell für Handwerk & Bau?</span>
              <a href="/handwerk" className="text-blue-900 font-semibold hover:underline">
                Handwerker-Version &rarr;
              </a>
            </span>
            <span className="hidden sm:inline text-gray-300">|</span>
            <span className="flex items-center gap-2">
              <span>Speziell für Gebäudereinigung?</span>
              <a href="/gebaeudereinigung" className="text-blue-900 font-semibold hover:underline">
                Reiniger-Version &rarr;
              </a>
            </span>
          </div>
        </div>
      </main>
    </>
  );
}
