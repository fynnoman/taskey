import type { Metadata } from "next";
import Script from "next/script";
import { headers } from "next/headers";
import "./globals.css";
import { WebVitals } from "./web-vitals";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.taskeyapp.com"),
  title: {
    default: "Taskey – Betriebssoftware für Reinigung & Facility Management",
    template: "%s | Taskey",
  },
  description:
    "Taskey ist die einfachste Betriebssoftware für Gebäudereinigung und Facility Management im DACH-Raum. Zeiterfassung, NFC-Nachweise, Einsatzplanung, Live-Margen – alles in einer App. DSGVO-konform. 30 Tage kostenlos testen!",
  authors: [{ name: "Taskey" }],
  creator: "Taskey",
  publisher: "Taskey",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: "https://www.taskeyapp.com",
    siteName: "Taskey",
    title: "Taskey - Betriebssoftware für Reinigung & Facility Management",
    description:
      "Zeiterfassung, NFC-Nachweise, Einsatzplanung & Live-Margen für Gebäudereinigung und Facility Management. Made in Germany, DSGVO-konform.",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Taskey Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Taskey - Betriebssoftware für Reinigung & Facility Management",
    description:
      "Zeiterfassung, NFC-Nachweise, Einsatzplanung & Live-Margen für Gebäudereinigung und Facility Management. Made in Germany, DSGVO-konform.",
    images: ["/opengraph-image"],
  },
  alternates: {
    canonical: "https://www.taskeyapp.com",
    languages: {
      "de-DE": "https://www.taskeyapp.com",
      "en-US": "https://www.taskeyapp.com/en",
      "fr-FR": "https://www.taskeyapp.com/fr",
      "x-default": "https://www.taskeyapp.com",
    },
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Locale set by middleware (x-locale header). Default to "de" for safety.
  const h = await headers();
  const locale = h.get("x-locale") ?? "de";

  return (
    <html lang={locale}>
      <head>
        <link rel="preload" href="/hero-background.webp" as="image" type="image/webp" fetchPriority="high" />
        <link rel="preconnect" href="https://mission-control.vars-development.com" />
        <link rel="preconnect" href="https://signup.taskeyapp.com" />
        <link rel="preconnect" href="https://taskey.vars-development.com" />
        <link rel="dns-prefetch" href="https://mission-control.vars-development.com" />
        <link rel="dns-prefetch" href="https://signup.taskeyapp.com" />
        <link rel="dns-prefetch" href="https://taskey.vars-development.com" />
      </head>
      <body className="antialiased">
        <WebVitals />
        <Script
          src="https://mission-control.vars-development.com/umami/script.js"
          data-website-id="15a75075-86a0-4e36-8cd2-7cd83d860d5c"
          strategy="afterInteractive"
        />
        {children}
      </body>
    </html>
  );
}
