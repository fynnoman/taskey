import type { Metadata } from "next";
import LandingPageTemplate from "@/components/landing/LandingPageTemplate";
import TestimonialReviews from "@/components/schema/TestimonialReviews";

const path = "/software-gebaeudereinigung";

export const metadata: Metadata = {
  title: "Software für Gebäudereinigung 2026 – All-in-One Branchensoftware",
  description:
    "Software für Gebäudereinigung 2026: NFC-Objektnachweis, Zeiterfassung, Einsatzplanung, Rechnungen, Live-Margen, DATEV – in einer App. DSGVO, Made in Germany, 3 Monate kostenlos.",
  alternates: { canonical: `https://www.taskeyapp.com${path}` },
  openGraph: {
    title: "Software für Gebäudereinigung – All-in-One Branchensoftware | Taskey",
    description:
      "Die Software für Gebäudereinigung: NFC-Nachweis, Zeiterfassung, Einsatzplanung, Rechnungen, Live-Margen, DATEV. DSGVO, Made in Germany.",
    url: `https://www.taskeyapp.com${path}`,
    type: "article",
    locale: "de_DE",
    siteName: "Taskey",
    images: [
      {
        url: "/feature-zeiterfassung.webp",
        width: 1200,
        height: 630,
        alt: "Taskey – Software für Gebäudereinigung im Einsatz auf Smartphone und Desktop",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Software für Gebäudereinigung – Taskey",
    description:
      "All-in-One Software für Gebäudereinigung: NFC, Zeiterfassung, Einsatzplanung, Rechnungen, Live-Margen. DSGVO, 3 Monate kostenlos.",
    images: ["/feature-zeiterfassung.webp"],
  },
};

const softwareApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Taskey – Software für Gebäudereinigung",
  applicationCategory: "BusinessApplication",
  applicationSubCategory: "Branchensoftware Gebäudereinigung",
  operatingSystem: "Web, iOS, Android",
  url: `https://www.taskeyapp.com${path}`,
  description:
    "All-in-One Software für Gebäudereinigung mit Einsatzplanung, NFC-Objektnachweis, Zeiterfassung, Angeboten, Rechnungen, Live-Margen und DATEV-Export. Für Unterhaltsreinigung, Glas-, Industrie- und Klinikreinigung.",
  offers: {
    "@type": "Offer",
    price: "119",
    priceCurrency: "EUR",
    priceSpecification: {
      "@type": "UnitPriceSpecification",
      price: "119",
      priceCurrency: "EUR",
      unitText: "MONTH",
    },
    availability: "https://schema.org/InStock",
    url: "https://signup.taskeyapp.com",
    description: "3 Monate kostenlos testen, danach ab 119 € pro Monat",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    ratingCount: "250",
    bestRating: "5",
    worstRating: "1",
  },
  author: {
    "@type": "Organization",
    name: "Schulz & Stosse GbR",
    url: "https://www.taskeyapp.com",
  },
  featureList: [
    "Einsatzplanung Gebäudereinigung",
    "NFC-Objektnachweis",
    "Mobile Zeiterfassung (Mindestlohn-konform)",
    "Angebote & Rechnungen",
    "DATEV-Export",
    "Live-Margen pro Objekt",
    "Qualitätskontrolle & Checklisten",
    "Auftraggeber-Portal (Taskey Share)",
    "DSGVO-konform, Made in Germany",
  ],
  inLanguage: "de-DE",
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema) }}
      />
      <TestimonialReviews />
      <LandingPageTemplate
      path={path}
      title="Software für Gebäudereinigung"
      eyebrow="Pillar · Branchensoftware"
      h1="Software für Gebäudereinigung:"
      h1Accent="alles in einem System statt fünf Abos."
      lead="Taskey ist die Software, mit der Gebäudereinigungsbetriebe Einsatzplanung, NFC-Objektnachweis, Zeiterfassung, Angebote, Rechnungen, Live-Margen und DATEV in einer einzigen Branchensoftware abbilden. Made in Germany, DSGVO-konform, ab dem ersten Tag einsatzbereit – egal ob Unterhaltsreinigung, Glas-, Industrie- oder Klinikreinigung."
      breadcrumbs={[
        { name: "Home", url: "https://www.taskeyapp.com" },
        { name: "Software für Gebäudereinigung", url: `https://www.taskeyapp.com${path}` },
      ]}
      sections={[
        {
          eyebrow: "Problem",
          heading: "Warum klassische Software in der Gebäudereinigung scheitert.",
          intro:
            "Die meisten Reinigungsbetriebe arbeiten heute mit einem Flickenteppich aus Excel, WhatsApp, einem Buchhaltungs-Tool, einer separaten Zeiterfassung und einer Cloud für Dokumente. Eine echte Software für Gebäudereinigung muss diesen Flickenteppich ersetzen – nicht erweitern.",
          body: [
            "In der Gebäudereinigung gibt es keine zwei gleichen Objekte. Tarife sind unterschiedlich, Schichten verschieben sich kurzfristig, Krankmeldungen kommen am Sonntagabend, Auftraggeber verlangen tagesaktuelle Nachweise. Klassische Branchensoftware ist auf den Industriebetrieb oder den Handwerksbetrieb zugeschnitten – und passt deshalb nie zu hundert Prozent.",
            "Spezialisierte Reinigungssoftware löst zwar einzelne Probleme – etwa die Zeiterfassung oder die Einsatzplanung – verkauft aber jedes Modul einzeln. Das Ergebnis: fünf monatliche Abos, vier Logins, drei nicht miteinander verbundene Datenbanken. Eine moderne Software für Gebäudereinigung bündelt diese Module in einem System.",
            "Taskey wurde von Grund auf für Gebäudereinigungsfirmen gebaut. Jede Funktion – vom NFC-Tag am Objekt bis zum DATEV-Export – ist auf den Alltag einer Reinigungsfirma optimiert.",
          ],
          bullets: [
            "Tool-Chaos: 4–6 Abos für Aufgaben, die zusammengehören",
            "Datenbruch zwischen Disposition, Nachweis und Rechnung",
            "Keine Live-Sicht auf Marge pro Objekt",
            "Nachweise an Auftraggeber kosten 4–8 Bürostunden pro Woche",
            "Mitarbeiter im Feld arbeiten ohne digitale Plan- und Routenführung",
          ],
        },
        {
          eyebrow: "Lösung",
          heading: "Was eine echte Software für Gebäudereinigung können muss.",
          intro:
            "Taskey verbindet alle Module, die ein Reinigungsbetrieb täglich braucht, in einer durchgehenden Datenbasis. Einmal angelegt, fließt jedes Objekt automatisch in Planung, Nachweis, Stundenzettel, Rechnung und Auswertung.",
          subsections: [
            {
              heading: "Einsatzplanung für Gebäudereinigung",
              body:
                "Drag-and-drop-Planung für Touren, Kolonnen und Vertretungen. Mitarbeitende sehen ihren Tagesplan live auf dem Smartphone, Disposition sieht in Echtzeit, welche Objekte besetzt sind und welche nicht. Kurzfristige Umplanungen brauchen statt zehn Anrufen einen einzigen Tap.",
            },
            {
              heading: "NFC-Objektnachweis – das Killer-Feature",
              body:
                "Ein wetterfester NFC-Tag pro Objekt. Mitarbeitende halten ihr Smartphone beim Eintreffen und Verlassen kurz an den Tag – Zeit, Ort und Person werden manipulationssicher dokumentiert. Damit erfüllen Gebäudereinigungsfirmen Auftraggeberforderungen nach lückenlosem Nachweis ohne Excel-Listen oder Anrufe.",
            },
            {
              heading: "Mobile Zeiterfassung",
              body:
                "Aus dem NFC-Scan wird automatisch der gesetzeskonforme Stundenzettel. GPS-gestützt, mit automatischen Pausen, mehrsprachig, offline-fähig und Mindestlohn-konform nach §17 MiLoG.",
            },
            {
              heading: "Angebote, Rechnungen, DATEV",
              body:
                "Pro Objekt kalkulieren, wiederkehrende Rechnungen automatisch versenden, Mahnwesen ohne Word-Vorlagen, Export im DATEV-Standardformat für die Lohnbuchhaltung. Steuerberater bekommen alles auf Knopfdruck.",
            },
            {
              heading: "Live-Margen pro Objekt",
              body:
                "Die wichtigste Kennzahl in der Gebäudereinigung ist die Marge pro Objekt – nicht der Umsatz. Taskey berechnet sie in Echtzeit aus Angebot, geleisteten Stunden, Materialeinsatz und Sonderkosten. Inhaber wissen jeden Morgen, welche Objekte Geld verdienen und welche nicht.",
            },
            {
              heading: "Qualitätskontrolle & Checklisten",
              body:
                "Digitale Reinigungs-Checklisten, Foto-Doku, Mängelaufnahme und Kundenfeedback direkt aus der Mitarbeiter-App. Qualitätsprobleme werden sichtbar, bevor der Auftraggeber sie meldet.",
            },
            {
              heading: "Taskey Share – Auftraggeber-Portal",
              body:
                "Auftraggeber bekommen einen eigenen, schlanken Login. Sie sehen Nachweise, Rechnungen, Qualitätsdaten und können Sonderaufträge anfordern – ohne den Umweg über Mails und PDF-Anhänge. Ein klares Differenzierungsmerkmal gegen Wettbewerber.",
            },
            {
              heading: "DSGVO & Made in Germany",
              body:
                "Hosting in Deutschland, deutscher Support, AVV automatisch hinterlegt. Mitarbeiterdaten, Stundenzettel und Objektnachweise bleiben in der EU. Keine US-Cloud, kein Datenrisiko bei Audits.",
            },
          ],
        },
        {
          eyebrow: "Reinigungsarten",
          heading: "Eine Software für jede Reinigungsart.",
          intro:
            "Taskey ist als Software für Gebäudereinigung speziell auf die unterschiedlichen Reinigungsarten und Objekttypen ausgelegt. Spezielle Checklisten, Tarifmodelle und Workflows decken jede Spezialisierung ab – vom Einzelobjekt bis zu mehreren hundert Liegenschaften.",
          bullets: [
            "Unterhaltsreinigung – wiederkehrende Touren, Schlüsselverwaltung, Vertretungen",
            "Glasreinigung – Höhenarbeit, Sicherheitsnachweise, intervallbasierte Planung",
            "Industriereinigung – Maschinenreinigung, Sonderschichten, hohe Stundenkontingente",
            "Klinik- und Praxisreinigung – Hygiene-Protokolle, RKI-konforme Checklisten",
            "Bauendreinigung – Projektphasen, Sonderkalkulation, Foto-Doku für Abnahme",
            "Hotel-Housekeeping – Zimmerstatus, Roomboy/Roomgirl-Workflows",
            "Sonderreinigung – Einsatzplanung auf Zuruf, Notdienst, Sonderkosten",
            "Bürohausreinigung, Schulreinigung, Treppenhausreinigung, Außenanlagen",
          ],
        },
        {
          eyebrow: "Skalierung",
          heading: "Vom 1-Mann-Betrieb bis zur Mehrobjekt-Gebäudereinigungsfirma.",
          body: [
            "Die Software für Gebäudereinigung ist vom 1-Mann-Betrieb bis zu Enterprise-Strukturen mit mehreren hundert Objekten skalierbar. Kleine Betriebe profitieren besonders von der All-in-One-Logik: weniger Tools, weniger Abos, mehr Zeit für das Kerngeschäft. Größere Reinigungsfirmen nutzen Mehrmandantenfähigkeit, Rollen- und Rechtekonzepte und API-Schnittstellen.",
            "Migration aus Excel oder einer Alt-Software ist Teil des Onboardings: Kunden, Objekte, Mitarbeiter und Verträge übernimmt das Taskey-Team per CSV-Import kostenfrei. Die Software ist nach Registrierung in unter zehn Minuten einsatzbereit; die komplette Ersteinrichtung übernimmt auf Wunsch das Onboarding-Team in 48 Stunden.",
            "Inhaberinnen und Inhaber sehen den ROI in den ersten Wochen: weniger Bürostunden, keine Streitfälle mit Auftraggebern über Anwesenheit, schnellere Rechnungslegung. Die Software für Gebäudereinigung amortisiert sich in der Regel innerhalb eines Quartals.",
          ],
        },
        {
          eyebrow: "Vergleich",
          heading: "Ohne Taskey vs. mit Taskey – im Alltag einer Reinigungsfirma.",
          intro:
            "So verändert sich der Alltag, wenn eine Reinigungsfirma vom Excel-Flickenteppich auf eine echte Branchensoftware Gebäudereinigung umstellt.",
          bullets: [
            "Stundenzettel auf Papier → NFC-Nachweis automatisch digital",
            "Disposition per WhatsApp → Einsatzplan live in der App, dokumentiert",
            "Streit mit Auftraggebern → lückenloser Nachweis pro Objekt",
            "Rechnungen 2 Wochen später → mit einem Klick aus den Stunden",
            "Kein Überblick über Marge → Live-Marge pro Objekt sichtbar",
            "Schlüssel- und Objektinfos im Kopf des Chefs → in der App des Teams",
            "Vier Abos für vier Tools → eine Software, ein Login, ein Preis",
          ],
        },
        {
          eyebrow: "Garantie",
          heading: "Sie sehen alles vorher. In einem kostenlosen Call, persönlich, ohne Verkaufsdruck.",
          intro:
            "Sie müssen Taskey nicht blind einkaufen. Bevor Sie sich entscheiden, gehen wir die gesamte Software in einem unverbindlichen Termin Schritt für Schritt mit Ihnen durch – am Beispiel Ihres eigenen Betriebs, Ihrer Objekte und Ihrer Reinigungsarten.",
          body: [
            "In rund 30 Minuten zeigen wir Ihnen jedes Modul live: Wie Sie ein Objekt anlegen, einen Einsatz planen, den NFC-Nachweis verproben, Stundenzettel exportieren und die Live-Marge pro Objekt ablesen. Sie fragen, wir zeigen – nichts wird beschönigt, nichts ausgespart.",
            "Wenn Taskey für Ihren Betrieb nicht passt, sagen wir Ihnen das offen. Wenn es passt, übernimmt unser Onboarding-Team die komplette Ersteinrichtung in 48 Stunden – inklusive Stammdaten-Migration aus Excel oder Alt-Software. Die ersten drei Monate sind kostenlos. Ohne Kreditkarte. Ohne automatische Verlängerung.",
          ],
          bullets: [
            "30 Minuten Live-Demo, individuell auf Ihren Reinigungsbetrieb zugeschnitten",
            "Wir gehen alle Module einmal vollständig mit Ihnen durch – nicht nur die schönen",
            "Ehrliche Einschätzung, ob Taskey für Ihre Objekte und Reinigungsarten passt",
            "Kostenlos, unverbindlich, keine versteckten Verkaufs-Tricks",
            "Bei Passung: 48-Stunden-Onboarding inkl. Datenmigration + 3 Monate kostenlos testen",
          ],
        },
      ]}
      faqs={[
        {
          question: "Was ist die beste Software für Gebäudereinigung?",
          answer:
            "Die beste Software für Gebäudereinigung deckt alle Kernprozesse einer Reinigungsfirma in einem System ab: Einsatzplanung, mobile Zeiterfassung, NFC-Objektnachweis, Angebote, Rechnungen, DATEV-Export und Live-Margen pro Objekt. Taskey ist die einzige Branchensoftware für Gebäudereinigung, die diese Module gebündelt anbietet – statt sie als einzelne Abos zu verkaufen. DSGVO-konform, gehostet in Deutschland, ab dem ersten Tag einsatzbereit.",
        },
        {
          question: "Welche Software nutzen Gebäudereinigungsfirmen?",
          answer:
            "Gebäudereinigungsfirmen nutzen heute meist eine Kombination aus Zeiterfassung, Einsatzplanung, Buchhaltungs-Tool und Office-Anwendungen. Genau dieses Tool-Chaos löst Taskey auf: eine Software für Gebäudereinigung, in der Disposition, Nachweis, Abrechnung und Reporting durchgehend miteinander verbunden sind. So spart eine durchschnittliche Reinigungsfirma 4–8 Bürostunden pro Woche.",
        },
        {
          question: "Was kostet eine Software für Gebäudereinigung?",
          answer:
            "Taskey startet als Software für Gebäudereinigung mit dem Beginner-Tarif ab 119 € pro Monat (zzgl. 4,40 € pro aktivem Objekt). Es gibt feste Monatspreise statt versteckter Modulkosten. Die ersten 3 Monate sind kostenlos – ohne Kreditkarte, ohne automatische Verlängerung. Volle Preise auf der Pricing-Seite.",
        },
        {
          question: "Welche Reinigungsarten deckt die Software ab?",
          answer:
            "Taskey ist als Software für Gebäudereinigung speziell auf Unterhaltsreinigung, Glasreinigung, Grundreinigung, Industriereinigung, Klinik- und Praxisreinigung, Bauendreinigung, Hotel-Housekeeping sowie Sonderreinigung ausgelegt. Spezielle Checklisten, Objekttypen und Tarifmodelle decken jede Reinigungsart ab.",
        },
        {
          question: "Ist die Software DSGVO-konform und Made in Germany?",
          answer:
            "Ja. Taskey wird in Deutschland entwickelt und gehostet, ist vollständig DSGVO-konform, ein Auftragsverarbeitungsvertrag (AVV) wird automatisch bereitgestellt. Mitarbeiterdaten, Stundenzettel und Objektnachweise bleiben in der EU. Es gibt keinen Datenabfluss in die USA.",
        },
        {
          question: "Funktioniert die Software auch für kleine Reinigungsfirmen?",
          answer:
            "Ja. Die Software für Gebäudereinigung ist vom 1-Mann-Betrieb bis zu Enterprise-Strukturen mit mehreren hundert Objekten skalierbar. Kleine Betriebe profitieren besonders von der All-in-One-Logik: weniger Tools, weniger Abos, mehr Zeit für das Kerngeschäft.",
        },
        {
          question: "Wie funktioniert der NFC-Objektnachweis?",
          answer:
            "An jedem Objekt wird ein NFC-Tag angebracht. Mitarbeitende halten ihr Smartphone beim Eintreffen und Verlassen kurz an den Tag – Zeit, Ort und Person werden manipulationssicher dokumentiert. Damit erfüllt jede Gebäudereinigungsfirma Auftraggeberforderungen nach lückenlosem Nachweis ohne Excel-Listen.",
        },
        {
          question: "Kann man Daten aus der bisherigen Software übernehmen?",
          answer:
            "Ja. Kunden, Objekte, Mitarbeitende und Verträge lassen sich über CSV-Import übernehmen. Das Taskey-Team begleitet die Migration kostenfrei, damit der Wechsel von Excel oder einer Alt-Software ohne Datenverlust läuft.",
        },
        {
          question: "Gibt es eine App für Mitarbeiter im Außendienst?",
          answer:
            "Ja. Die Taskey-Mitarbeiter-App für iOS und Android zeigt Einsatzpläne, Routen, Checklisten und ermöglicht NFC-Nachweis, Foto-Dokumentation und Krankmeldung direkt vom Smartphone. Auch ohne Internetverbindung nutzbar – Daten synchronisieren später automatisch.",
        },
        {
          question: "Wie schnell ist die Software einsatzbereit?",
          answer:
            "Die Software für Gebäudereinigung ist nach Registrierung in unter zehn Minuten einsatzbereit. Erste Objekte, Mitarbeitende und Aufträge lassen sich in einer Stunde anlegen. Optional übernimmt das Taskey-Onboarding-Team die komplette Ersteinrichtung in 48 Stunden – inklusive Stammdatenmigration aus Excel oder Alt-Software.",
        },
      ]}
      related={[
        {
          href: "/zeiterfassung-gebaeudereinigung",
          label: "Zeiterfassung Gebäudereinigung",
          description: "Mindestlohn-konforme Arbeitszeiterfassung per NFC, GPS und Offline-Sync.",
        },
        {
          href: "/nfc-zeiterfassung",
          label: "NFC-Zeiterfassung im Detail",
          description: "Wie der NFC-Tag funktioniert, was er kostet und wie er am Objekt angebracht wird.",
        },
        {
          href: "/einsatzplanung-reinigung",
          label: "Einsatzplanung Reinigung",
          description: "Touren, Kolonnen und Vertretungen – planbar per Drag-and-drop.",
        },
        {
          href: "/leistungsnachweis-gebaeudereinigung",
          label: "Leistungsnachweis Gebäudereinigung",
          description: "Aus dem NFC-Scan wird automatisch der Nachweis für den Auftraggeber.",
        },
        {
          href: "/software-kleine-reinigungsfirma",
          label: "Software für kleine Reinigungsfirmen",
          description: "Speziell für Betriebe mit 1–15 Mitarbeitenden und überschaubarem Objekt-Portfolio.",
        },
        {
          href: "/vergleich/software-gebaeudereinigung",
          label: "Anbietervergleich 2026",
          description: "8 Software für Gebäudereinigung im Direktvergleich – Funktionen, Preise, Stärken, Schwächen.",
        },
        {
          href: "/vergleich/zvoove-alternative",
          label: "Taskey vs. zvoove",
          description: "Wie Taskey gegen den Marktführer für Gebäudereinigungssoftware abschneidet.",
        },
      ]}
    />
    </>
  );
}
