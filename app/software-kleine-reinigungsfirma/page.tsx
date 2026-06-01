import type { Metadata } from "next";
import LandingPageTemplate from "@/components/landing/LandingPageTemplate";

const path = "/software-kleine-reinigungsfirma";

export const metadata: Metadata = {
  title:
    "Software für kleine Reinigungsfirmen | Ab 1 Mitarbeitendem | Taskey",
  description:
    "Reinigungssoftware für kleine Betriebe ab 1 Mitarbeitendem: NFC-Zeit, Einsatzplan, Rechnungen und DATEV. Ab 119 €/Monat. Täglich kündbar, keine Setup-Kosten.",
  alternates: { canonical: `https://www.taskeyapp.com${path}` },
  openGraph: {
    title: "Software für kleine Reinigungsfirmen | Ab 1 Mitarbeitendem | Taskey",
    description:
      "Reinigungssoftware ab 1 Mitarbeitendem: NFC-Zeit, Einsatzplan, Rechnungen und DATEV. Ab 119 €/Monat.",
    url: `https://www.taskeyapp.com${path}`,
    type: "article",
    locale: "de_DE",
    siteName: "Taskey",
    images: [
      { url: "/opengraph-image", width: 1200, height: 630, alt: "Reinigungssoftware für kleine Betriebe mit Taskey" },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Software für kleine Reinigungsfirmen | Ab 1 Mitarbeitendem | Taskey",
    description: "Ab 119 € pro Monat. Täglich kündbar. Keine Setup-Kosten.",
    images: ["/opengraph-image"],
  },
};

export default function Page() {
  return (
    <LandingPageTemplate
      path={path}
      title="Software für kleine Reinigungsfirmen"
      eyebrow="Pillar · Kleinbetriebe"
      h1="Software für kleine Reinigungsfirmen —"
      h1Accent="ab 1 Mitarbeitendem, täglich kündbar."
      lead="Branchensoftware ist nicht nur für Großbetriebe. Taskey ist die einzige All-in-One-Reinigungssoftware, die schon ab einem Mitarbeitenden Sinn macht – mit fairen Preisen, einfacher Bedienung und ohne Setup-Kosten. Ab 119 € pro Monat."
      breadcrumbs={[
        { name: "Home", url: "https://www.taskeyapp.com" },
        {
          name: "Software für kleine Reinigungsfirmen",
          url: `https://www.taskeyapp.com${path}`,
        },
      ]}
      sections={[
        {
          eyebrow: "Wofür Sie Taskey brauchen",
          heading: "Sie sind Inhaber, Disponent, Vorarbeiter und Buchhalter zugleich.",
          intro:
            "Wer mit 1 bis 20 Mitarbeitenden reinigt, hat einen Job, der eigentlich für vier reicht. Taskey nimmt Ihnen genau die Aufgaben ab, die jeden Tag wiederkehren – damit Sie sich um Akquise, Qualität und Wachstum kümmern können.",
          bullets: [
            "Stundenzettel und Lohnvorbereitung – jetzt automatisch",
            "Einsatzplan – jetzt auf jedem Handy live",
            "Angebote und Rechnungen – jetzt in der gleichen App",
            "Auftraggeber-Anrufe – jetzt seltener, weil der Kunde selbst sieht",
            "Krankmeldung um 5 Uhr – jetzt mit Vertretungs-Vorschlag",
          ],
        },
        {
          eyebrow: "Was ein 5-Personen-Betrieb sparte",
          heading: "Echte Zahlen aus dem Reinigungsalltag.",
          body: [
            "Ein typischer 5-Personen-Betrieb in unserer Kundschaft verbringt vor Taskey rund 8–12 Stunden pro Woche mit Stundenzetteln, Wochenplänen, WhatsApp-Antworten und Rechnungsversand. Nach der Umstellung auf Taskey sind das 2–3 Stunden pro Woche.",
            "Das ergibt – bei einem Stundensatz des Inhabers von 50 € – eine Zeitersparnis im Wert von etwa 18.000 bis 24.000 € pro Jahr. Plus 5–15 % höhere Marge pro Objekt, weil Stunden, Pausen und Vertretungen korrekt erfasst werden.",
            "Die Software amortisiert sich in der Regel im ersten Monat – und ist täglich kündbar, falls es doch nicht passt.",
          ],
        },
        {
          eyebrow: "Was im Beginner-Tarif enthalten ist",
          heading: "Ab 119 € pro Monat – ohne Funktions-Kappung.",
          intro:
            "Taskey ist kein verkrüppelter 'Starter-Tarif'. Im Beginner-Tarif sind alle Kernfunktionen enthalten, die ein kleiner Reinigungsbetrieb braucht.",
          bullets: [
            "NFC-Zeiterfassung mit GPS und Offline-Sync",
            "Unbegrenzt viele Mitarbeitende",
            "Einsatzplanung mit Drag-and-Drop",
            "Objektakte mit Sonderwünschen und Historie",
            "Angebote, Wartungsverträge und Rechnungen",
            "Mobile App für iOS und Android",
            "DSGVO-konform, deutsche Server",
            "Persönlicher Support per E-Mail und Telefon",
          ],
        },
        {
          eyebrow: "Mitwachsen statt umsteigen",
          heading: "Was passiert, wenn Sie auf 20, 50 oder 100 Mitarbeitende wachsen?",
          body: [
            "Nichts Wildes – Sie wechseln vom Beginner- in den Professional- oder Business-Tarif. Alle Ihre Daten, Objekte, Verträge und Nachweise bleiben erhalten. Sie zahlen nur die Funktionen, die Sie wirklich brauchen – etwa Live-Margen, DATEV-Export oder Auftraggeber-Zugang.",
            "Für Inhaber, die langfristig denken, ist das ein großer Vorteil: Sie müssen sich nicht in zwei Jahren erneut nach einer Software umsehen und alle Mitarbeitenden umtrainieren. Taskey ist von Anfang an auf Wachstum gebaut – vom 1-Personen-Betrieb bis zum Enterprise mit 200+ Mitarbeitenden.",
          ],
        },
      ]}
      faqs={[
        {
          question: "Lohnt sich Taskey schon bei 1 Mitarbeiter?",
          answer:
            "Ja. Schon als Soloselbstständiger sparen Sie Zeit bei Touren, Rechnungen, Stundenzetteln und der Kommunikation mit Auftraggebern. Die Software amortisiert sich in der Regel im ersten Monat.",
        },
        {
          question: "Gibt es eine Mindestvertragslaufzeit?",
          answer:
            "Nein. Taskey ist täglich kündbar. Sie zahlen monatlich, ohne Setup-Kosten und ohne lange Bindung.",
        },
        {
          question: "Muss ich meine Mitarbeitenden vorher schulen?",
          answer:
            "Nein. Die Taskey-App auf dem Handy ist so gestaltet, dass jede Reinigungskraft sie ohne Schulung bedienen kann – auch ohne perfekte Deutschkenntnisse (DE/TR/RU/PL u.a.).",
        },
        {
          question: "Was passiert mit meinen alten Excel-Listen?",
          answer:
            "Im Done-for-You Setup importieren wir Ihre bestehenden Objekte, Mitarbeitenden, Verträge und Stammdaten für Sie. Sie müssen nichts abtippen.",
        },
        {
          question: "Kann ich auch Rechnungen direkt in Taskey schreiben?",
          answer:
            "Ja. Aus jedem Auftrag oder Einsatz heraus erstellen Sie eine Rechnung mit einem Klick. Vorlagen, Wartungsverträge und wiederkehrende Rechnungen sind ebenfalls integriert.",
        },
        {
          question: "Was kostet Taskey für einen 5-Personen-Betrieb wirklich?",
          answer:
            "Der Beginner-Tarif startet bei 119 € pro Monat. Hinzu kommen 4,40 € pro aktivem Objekt. Für 10 Objekte und 5 Mitarbeitende landen Sie bei etwa 163 € pro Monat – inklusive aller Funktionen.",
        },
      ]}
      related={[
        {
          href: "/pricing",
          label: "Preise im Überblick",
          description: "Beginner ab 119 €, Professional ab 315 €, Business ab 429 € pro Monat.",
        },
        {
          href: "/pricing#enterprise",
          label: "Enterprise für große Betriebe",
          description: "Wenn Sie wachsen: SSO, API, dedizierter Account-Manager.",
        },
        {
          href: "/einsatzplanung-reinigung",
          label: "Einsatzplanung Reinigung",
          description: "Wie Sie auch mit kleinem Team große Strecken sauber durchplanen.",
        },
      ]}
    />
  );
}
