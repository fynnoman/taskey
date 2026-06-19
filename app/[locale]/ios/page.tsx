import IOSClient from "./ios-client";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import { pickLocale, canonical } from "@/lib/i18n-metadata";

const mobileAppSchema = {
  "@context": "https://schema.org",
  "@type": "MobileApplication",
  "name": "Taskey",
  "operatingSystem": "iOS",
  "applicationCategory": "BusinessApplication",
  "applicationSubCategory": "Cleaning Management",
  "url": "https://apps.apple.com/app/id6757116248",
  "description":
    "Die Taskey iOS App für Reinigungsteams: NFC-Zeiterfassung, Einsatzplan, Objektakte und Offline-Sync auf iPhone und iPad.",
  "publisher": {
    "@type": "Organization",
    "name": "Schulz & Stosse GbR",
    "url": "https://www.taskeyapp.com",
  },
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "EUR",
  },
};

const CRUMB_LABELS: Record<"de" | "en" | "fr", { home: string; ios: string }> = {
  de: { home: "Home", ios: "iOS App" },
  en: { home: "Home", ios: "iOS App" },
  fr: { home: "Accueil", ios: "Application iOS" },
};

export default async function IOSPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const loc = pickLocale(locale);
  const crumbs = CRUMB_LABELS[loc];

  return (
    <>
      <BreadcrumbSchema crumbs={[
        { name: crumbs.home, url: canonical("/", loc) },
        { name: crumbs.ios, url: canonical("/ios", loc) },
      ]} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(mobileAppSchema) }}
      />
      <IOSClient />
    </>
  );
}
