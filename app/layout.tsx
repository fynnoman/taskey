import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieConsent from "@/components/CookieConsent";
import { LanguageProvider } from "@/context/LanguageContext";

export const metadata: Metadata = {
  metadataBase: new URL('https://www.taskeyapp.com'),
  title: {
    default: "Taskey - Die Betriebssoftware für Handwerk, Reinigung & Facility Management | Made in Germany",
    template: "%s | Taskey"
  },
  description: "Taskey ist die einfachste Betriebssoftware für Handwerk, Gebäudereinigung und Facility Management im DACH-Raum. Zeiterfassung, NFC-Nachweise, Einsatzplanung, Live-Margen – alles in einer App. DSGVO-konform. 3 Monate kostenlos testen!",
  keywords: [
    // Kern-USPs
    "Betriebssoftware", "All-in-One Software Handwerk", "Komplettlösung Handwerksbetrieb",
    "Komplettsoftware Gebäudereinigung", "eine Software für alles Handwerk",
    // Handwerk
    "Handwerkersoftware", "Software Handwerksbetrieb", "Software für Handwerker",
    "Elektriker Software", "SHK Software", "Sanitär Heizung Klima Software",
    "Heizungsbauer Software", "Maler Software", "Malerbetrieb Software",
    "Dachdecker Software", "Trockenbau Software", "Tischlerei Software",
    "Schreinerei Software", "Zimmerei Software", "Fliesenleger Software",
    "Bauunternehmen Software", "Bauhandwerk Software",
    // Gebäudereinigung
    "Reinigungssoftware", "Gebäudereinigung Software", "Software Gebäudereinigung",
    "Software für Reinigungsfirma", "Reinigungsmanagement Software",
    "Unterhaltsreinigung Software", "Glasreinigung Software",
    "Industriereinigung Software", "Baureinigung Software",
    "Fensterreinigung App", "Revierreinigung App",
    // Zeiterfassung
    "Zeiterfassung Handwerk", "Zeiterfassung Gebäudereinigung",
    "Zeiterfassung Baustelle", "Zeiterfassung Reinigungskräfte",
    "Zeiterfassung Außendienst", "elektronische Zeiterfassung Pflicht",
    "mobile Zeiterfassung", "NFC Zeiterfassung", "NFC Stempeluhr",
    "digitale Stempeluhr", "Arbeitszeiterfassung App",
    // NFC / Nachweis
    "NFC Leistungsnachweis", "NFC Objektnachweis", "NFC Tags Gebäudereinigung",
    "Leistungsnachweis Reinigung digital", "Qualitätsnachweis Gebäudereinigung",
    "Objekt-Check-in NFC",
    // Planung & Einsatz
    "Einsatzplanung Handwerk", "Tourenplanung Handwerk",
    "Dienstplan Gebäudereinigung", "Schichtplan Reinigungsfirma",
    "Personaleinsatzplanung Handwerk", "Baustellenplanung digital",
    "Monteur Einsatzplanung", "Auftragsverwaltung Handwerk",
    "Auftragsmanagement Gebäudereinigung", "Nachkalkulation Handwerk",
    // Facility / weitere Branchen
    "Facility Management Software", "Hausmeisterservice Software",
    "Software Hausmeister", "Software Gartenbau", "GaLaBau Software",
    "Landschaftspflege Software", "Winterdienst Software",
    "Software Sicherheitsdienst", "Wächterkontrolle NFC",
    "Objektschutz Software", "Software Schädlingsbekämpfung",
    // Kommerz / Alternative
    "Alternative zu Craftnote", "Alternative zu openHandwerk",
    "Alternative zu ToolTime", "Alternative zu plancraft",
    "Alternative zu HERO Software", "Handwerkersoftware Vergleich",
    "Reinigungssoftware Vergleich", "günstige Handwerkersoftware",
    // Compliance
    "DSGVO-konforme Software", "Handwerkersoftware Made in Germany",
    "Zeiterfassung DSGVO konform", "Handwerkersoftware Österreich",
    "Handwerkersoftware Schweiz",
    // Pain-Point
    "Stundenzettel digital", "WhatsApp Alternative Handwerk",
    "Handwerk digitalisieren", "Reinigungsfirma digitalisieren",
    "Angebot Rechnung Handwerk Software", "DATEV Export Handwerk"
  ],
  authors: [{ name: "Taskey" }],
  creator: "Taskey",
  publisher: "Taskey",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: "https://www.taskeyapp.com",
    siteName: "Taskey",
    title: "Taskey - Betriebssoftware für Handwerk, Reinigung & Facility Management",
    description: "Zeiterfassung, NFC-Nachweise, Einsatzplanung & Live-Margen für Handwerker und Gebäudereiniger. Made in Germany, DSGVO-konform.",
    images: [
      {
        url: "/logobittt.png",
        width: 1200,
        height: 630,
        alt: "Taskey Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Taskey - Betriebssoftware für Handwerk, Reinigung & Facility Management",
    description: "Zeiterfassung, NFC-Nachweise, Einsatzplanung & Live-Margen für Handwerker und Gebäudereiniger. Made in Germany, DSGVO-konform.",
    images: ["/logobittt.png"],
  },
  alternates: {
    canonical: "https://www.taskeyapp.com",
  },
  verification: {
    google: "your-google-verification-code-here",
  },
  icons: {
    icon: '/logobittt.png',
    shortcut: '/logobittt.png',
    apple: '/logobittt.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <head>
        <link rel="preload" href="/Gemini_Generated_Image_u0ytjru0ytjru0yt.webp" as="image" type="image/webp" fetchPriority="high" />
        <link rel="preconnect" href="https://mission-control.vars-development.com" />
        <link rel="preconnect" href="https://signup.taskeyapp.com" />
        <link rel="preconnect" href="https://taskey.vars-development.com" />
        <link rel="dns-prefetch" href="https://mission-control.vars-development.com" />
        <link rel="dns-prefetch" href="https://signup.taskeyapp.com" />
        <link rel="dns-prefetch" href="https://taskey.vars-development.com" />
      </head>
      <body className="antialiased">
        <script defer src="https://mission-control.vars-development.com/umami/script.js" data-website-id="15a75075-86a0-4e36-8cd2-7cd83d860d5c"></script>
        <LanguageProvider>
          <Header />
          {children}
          <Footer />
          <CookieConsent />
        </LanguageProvider>
      </body>
    </html>
  );
}
