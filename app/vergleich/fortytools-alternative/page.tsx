import type { Metadata } from "next";
import LandingPageTemplate from "@/components/landing/LandingPageTemplate";

const path = "/vergleich/fortytools-alternative";

export const metadata: Metadata = {
  title:
    "Fortytools Alternative | Moderne Lösung für Reinigungsbetriebe | Taskey",
  description:
    "Fortytools-Alternative für Reinigungsfirmen: Taskey kombiniert NFC-Zeiterfassung, Einsatzplanung und Live-Margen in einer App – ab 71 €/Monat, täglich kündbar.",
  alternates: { canonical: `https://www.taskeyapp.com${path}` },
  openGraph: {
    title: "Fortytools Alternative | Moderne Lösung für Reinigungsbetriebe | Taskey",
    description:
      "NFC-Zeiterfassung, Einsatzplanung, Live-Margen – speziell für Gebäudereinigung im DACH-Raum.",
    url: `https://www.taskeyapp.com${path}`,
    type: "article",
    locale: "de_DE",
    siteName: "Taskey",
    images: [
      { url: "/opengraph-image", width: 1200, height: 630, alt: "Vergleich Fortytools vs. Taskey für Reinigungsbetriebe" },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fortytools Alternative | Moderne Lösung | Taskey",
    description: "NFC, Einsatzplanung und Live-Margen – speziell für Gebäudereinigung.",
    images: ["/opengraph-image"],
  },
};

export default function Page() {
  return (
    <LandingPageTemplate
      path={path}
      title="Fortytools Alternative"
      eyebrow="Vergleich · Fortytools"
      h1="Fortytools Alternative —"
      h1Accent="die moderne Lösung für Reinigungsbetriebe."
      lead="Fortytools ist eine breit aufgestellte Handwerker-Software. Taskey ist speziell für die Gebäudereinigung gebaut: NFC-Zeiterfassung, Live-Margen pro Objekt, Auftraggeber-Portal und DATEV-Export – ohne Module für Branchen, die Sie nicht brauchen."
      breadcrumbs={[
        { name: "Home", url: "https://www.taskeyapp.com" },
        { name: "Vergleich", url: "https://www.taskeyapp.com/vergleich/fortytools-alternative" },
        { name: "Fortytools Alternative", url: `https://www.taskeyapp.com${path}` },
      ]}
      sections={[
        {
          eyebrow: "Branchen-Fokus",
          heading: "Generischer Handwerk vs. spezialisierter Reinigungs-Fokus.",
          body: [
            "Fortytools bedient eine breite Palette von Handwerksbetrieben – vom Maler über den Schreiner bis zur Reinigung. Das hat Vorteile (viel Flexibilität), aber auch Nachteile: Funktionen, die für Ihren Betrieb irrelevant sind, machen die Oberfläche unübersichtlich und treiben den Preis.",
            "Taskey ist konsequent auf Gebäudereinigung zugeschnitten. Sie sehen nur, was Reinigungsbetriebe brauchen – kein Material-Modul für Holzbearbeitung, keine Aufmaß-Funktionen für Tapezierer.",
          ],
        },
        {
          eyebrow: "Direkter Vergleich",
          heading: "Was bei Taskey von Haus aus drin ist.",
          bullets: [
            "NFC-Zeiterfassung mit GPS und Offline-Sync (nativ, kein Add-on)",
            "Live-Margen pro Auftrag in Echtzeit",
            "Auftraggeber-Portal mit eigenem Login",
            "Objektakten mit Sonderwünschen, Fotos und Schlüsseldokumentation",
            "Rundgang-Kontrolle per Tag pro Etage",
            "Mehrsprachige Mitarbeiter-App",
            "Done-for-You Setup in 48 Stunden",
            "Täglich kündbar",
          ],
        },
        {
          eyebrow: "Wann Fortytools dennoch passt",
          heading: "Ehrlich: wo Fortytools überlegen ist.",
          body: [
            "Wenn Ihr Betrieb mehrere Gewerke gleichzeitig anbietet (z.B. Reinigung + Hausmeisterservice + kleine Renovierungen) und Sie wirklich eine einheitliche Plattform für all das suchen, kann Fortytools die richtige Wahl sein.",
            "Wenn Sie aber zu 80 % oder mehr in der Gebäudereinigung tätig sind, sparen Sie mit Taskey Komplexität, Schulungszeit und Geld.",
          ],
        },
        {
          eyebrow: "Migration",
          heading: "So läuft der Wechsel ab.",
          body: [
            "Aus Fortytools exportieren Sie Stammdaten zu Kunden, Mitarbeitenden und Verträgen. Wir importieren diese in Taskey und richten den Account ein. Für 2–4 Wochen können Sie beide Tools parallel nutzen, bevor Sie Fortytools final beenden.",
            "Offene Rechnungen aus Fortytools laufen wie gehabt weiter – Taskey beginnt mit neuen Aufträgen und Einsätzen ab Go-Live-Datum.",
          ],
        },
      ]}
      faqs={[
        {
          question: "Hat Fortytools auch eine native NFC-Zeiterfassung für Reinigung?",
          answer:
            "Fortytools bietet GPS-basierte und manuelle Zeiterfassung. NFC-Workflows sind nicht so tief integriert wie bei Taskey, wo NFC der zentrale Workflow im Reinigungsalltag ist.",
        },
        {
          question: "Was kostet Taskey im Vergleich zu Fortytools?",
          answer:
            "Taskey startet bei 71 € pro Monat inkl. unbegrenzter Mitarbeiterzahl plus 4,40 € pro aktivem Objekt. Fortytools ist je nach Modulauswahl ähnlich oder teurer. Ein verbindlicher Vergleich hängt von Ihrer Betriebsgröße ab – sprechen Sie uns an.",
        },
        {
          question: "Kann ich die Migration selbst durchführen?",
          answer:
            "Sie können – wir übernehmen es aber im Done-for-You Setup für Sie. Das spart Ihnen einen halben Arbeitstag und vermeidet Migrationsfehler.",
        },
        {
          question: "Was ist mit DATEV-Schnittstelle in beiden Tools?",
          answer:
            "Beide bieten einen DATEV-Export. Bei Taskey ist er in jedem Tarif ab Business enthalten – ohne Aufpreis. Format: DATEV-Standard, direkter Import beim Steuerberater.",
        },
        {
          question: "Werden Mitarbeitende mit der Umstellung zurechtkommen?",
          answer:
            "Ja. Die Taskey-App ist bewusst minimalistisch und mehrsprachig. Die meisten Reinigungskräfte sind nach dem ersten Tap am NFC-Tag produktiv.",
        },
      ]}
      related={[
        {
          href: "/vergleich/zvoove-alternative",
          label: "Zvoove Alternative",
          description: "Wenn Sie eher ERP-Lösungen evaluieren.",
        },
        {
          href: "/vergleich/blink-alternative",
          label: "Blink Alternative",
          description: "Wenn Sie eine Frontline-Worker-Plattform vergleichen.",
        },
        {
          href: "/loesungen/unterhaltsreinigung",
          label: "Unterhaltsreinigung",
          description: "Die wichtigste Branche, für die Taskey entwickelt wurde.",
        },
      ]}
    />
  );
}
