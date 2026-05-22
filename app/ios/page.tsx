import IOSClient from "./ios-client";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

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

export default function IOSPage() {
  return (
    <>
      <BreadcrumbSchema crumbs={[
        { name: "Home", url: "https://www.taskeyapp.com" },
        { name: "iOS App", url: "https://www.taskeyapp.com/ios" },
      ]} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(mobileAppSchema) }}
      />
      <IOSClient />
    </>
  );
}
