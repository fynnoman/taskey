import AboutClient from "./about-client";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Taskey",
  "legalName": "Schulz & Stosse GbR",
  "url": "https://www.taskeyapp.com",
  "logo": "https://www.taskeyapp.com/logobittt.png",
  "foundingDate": "2024",
  "description":
    "Taskey ist eine Reinigungssoftware Made in Germany. Entwickelt für Gebäudereiniger im DACH-Raum: NFC-Zeiterfassung, Einsatzplanung, Live-Margen und DATEV-Export.",
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
    "availableLanguage": ["German"],
  },
  "founder": [
    { "@type": "Person", "name": "Fynn-Luca Schulz", "jobTitle": "CEO" },
    { "@type": "Person", "name": "Julian Stosse", "jobTitle": "CTO" },
  ],
  "areaServed": ["DE", "AT", "CH"],
  "sameAs": [
    "https://www.linkedin.com/company/taskey",
    "https://twitter.com/taskey",
  ],
};

// Eigenständige Person-Schemas für E-E-A-T (Expertise, Authority, Trust):
// Google verbindet Founder mit Organization und stärkt das Knowledge-Graph-Profil.
const founderFynn = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Fynn-Luca Schulz",
  "jobTitle": "CEO & Mitgründer",
  "worksFor": {
    "@type": "Organization",
    "name": "Taskey",
    "url": "https://www.taskeyapp.com",
  },
  "knowsAbout": [
    "Gebäudereinigungssoftware",
    "NFC-Zeiterfassung",
    "Digitalisierung Reinigungsbranche",
    "Einsatzplanung",
  ],
  "url": "https://www.taskeyapp.com/about",
  "email": "fynn@taskeyapp.com",
  "nationality": "DE",
};

const founderJulian = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Julian Stosse",
  "jobTitle": "CTO & Mitgründer",
  "worksFor": {
    "@type": "Organization",
    "name": "Taskey",
    "url": "https://www.taskeyapp.com",
  },
  "knowsAbout": [
    "Softwarearchitektur",
    "iOS- & Android-Entwicklung",
    "DSGVO-konforme Cloud-Infrastruktur",
    "Reinigungssoftware",
  ],
  "url": "https://www.taskeyapp.com/about",
  "nationality": "DE",
};

export default function AboutPage() {
  return (
    <>
      <BreadcrumbSchema crumbs={[
        { name: "Home", url: "https://www.taskeyapp.com" },
        { name: "Über uns", url: "https://www.taskeyapp.com/about" },
      ]} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(founderFynn) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(founderJulian) }}
      />
      <AboutClient />
    </>
  )
}
