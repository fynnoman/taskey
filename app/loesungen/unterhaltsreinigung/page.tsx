import type { Metadata } from "next";
import LandingPageTemplate from "@/components/landing/LandingPageTemplate";

const path = "/loesungen/unterhaltsreinigung";

export const metadata: Metadata = {
  title:
    "Software für Unterhaltsreinigung | Planung, Nachweis, Abrechnung | Taskey",
  description:
    "Reinigungssoftware für Unterhaltsreinigung: wiederkehrende Touren, NFC-Nachweise pro Objekt, automatische Abrechnung und Auftraggeber-Portal. Made in Germany.",
  alternates: { canonical: `https://www.taskeyapp.com${path}` },
  openGraph: {
    title: "Software für Unterhaltsreinigung | Planung, Nachweis, Abrechnung | Taskey",
    description:
      "Wiederkehrende Touren, NFC-Nachweise pro Objekt, automatische Abrechnung und Auftraggeber-Portal.",
    url: `https://www.taskeyapp.com${path}`,
    type: "article",
    locale: "de_DE",
    siteName: "Taskey",
    images: [
      { url: "/opengraph-image", width: 1200, height: 630, alt: "Software für Unterhaltsreinigung mit Taskey" },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Software für Unterhaltsreinigung | Taskey",
    description: "Touren, Nachweise und Abrechnung für die Unterhaltsreinigung.",
    images: ["/opengraph-image"],
  },
};

export default function Page() {
  return (
    <LandingPageTemplate
      path={path}
      title="Unterhaltsreinigung"
      eyebrow="Branche · Unterhaltsreinigung"
      h1="Software für Unterhaltsreinigung —"
      h1Accent="Planung, Nachweis, Abrechnung."
      lead="Unterhaltsreinigung lebt von wiederkehrenden Touren, dünnen Margen und Auftraggebern, die hohe Erwartungen an die Dokumentation haben. Taskey automatisiert genau diese drei Punkte: Schichten und Touren planen, jeden Einsatz per NFC nachweisen, jede Leistung sauber abrechnen."
      breadcrumbs={[
        { name: "Home", url: "https://www.taskeyapp.com" },
        { name: "Lösungen", url: "https://www.taskeyapp.com/loesungen/unterhaltsreinigung" },
        { name: "Unterhaltsreinigung", url: `https://www.taskeyapp.com${path}` },
      ]}
      sections={[
        {
          eyebrow: "Alltag",
          heading: "Drei Schichten pro Tag, 40 Objekte, 12 Mitarbeitende.",
          body: [
            "Typische Unterhaltsreinigung in Deutschland: morgens vor 8 Uhr Büros, mittags Treppenhäuser in Wohnanlagen, abends Schulen oder Kitas. Jeder Auftrag hat seine eigenen Sonderwünsche, Schlüsselregelungen und Abrechnungsmodalitäten.",
            "Excel und WhatsApp halten das nicht aus. Taskey macht den Plan in der App live für jedes Teammitglied sichtbar – inklusive Wegbeschreibung, Schlüsselübergabe-Protokoll und individueller Aufgabenliste pro Objekt.",
          ],
          bullets: [
            "Wiederkehrende Touren pro Woche, Monat oder individuell",
            "Schichten morgens / mittags / abends parallel",
            "Vertretungen mit Vorschlagsalgorithmus",
            "Pro Objekt: Sonderwünsche, Notizen, Fotos, Schlüsselbestand",
          ],
        },
        {
          eyebrow: "Nachweis",
          heading: "NFC-Tag am Eingang löst die WhatsApp-Beweispflicht ab.",
          body: [
            "In der Unterhaltsreinigung kommt der Auftraggeber selten persönlich vorbei – er sieht nicht, ob Sie gereinigt haben oder nicht. Damit Sie Reklamationen mit Daten statt mit Worten begegnen, dokumentiert Taskey jeden Einsatz automatisch.",
            "Ein wetterfester NFC-Tag im Treppenhaus oder am Schlüsselkasten reicht. Der Tap der Reinigungskraft erzeugt einen Zeitstempel, GPS-Punkt und Mitarbeiter-Nachweis – auf Wunsch mit Foto.",
          ],
        },
        {
          eyebrow: "Auftraggeber-Portal",
          heading: "Live-Status für Hausverwaltungen und Facility-Manager.",
          body: [
            "Mit Taskey Share bekommt jeder Auftraggeber – etwa die Hausverwaltung – einen eigenen Login. Er sieht in Echtzeit, wann sein Treppenhaus gereinigt wurde, wer dort war und ob es Beanstandungen gibt.",
            "Das senkt die Anrufe in Ihrem Büro drastisch und bringt Ihnen messbar bessere Vertragsverlängerungen. Hausverwaltungen lieben Transparenz – und genau die liefert Taskey.",
          ],
        },
        {
          eyebrow: "Abrechnung",
          heading: "Vom Einsatz zur Rechnung in zwei Klicks.",
          body: [
            "Aus den NFC-Buchungen und dem Einsatzplan erzeugt Taskey automatisch die Abrechnungsgrundlage – als Pauschal-Wartungsvertrag, nach Stunden oder pro Einsatz. Sammelrechnungen für Verwalter mit vielen Objekten sind in zwei Klicks erstellt.",
            "DATEV-Export für die Lohnbuchhaltung gibt es in den höheren Tarifen direkt mit dazu. Ihr Steuerberater bekommt eine fertige Datei – keine Rückfragen.",
          ],
        },
      ]}
      faqs={[
        {
          question: "Wie behält Taskey den Überblick bei 50+ Unterhaltsreinigungs-Verträgen?",
          answer:
            "Jedes Objekt ist ein eigener Datensatz mit Vertrag, Sonderwünschen, Schlüsseln und Touren. Sie filtern, gruppieren und sortieren nach Auftraggeber, Postleitzahl, Reinigungstyp oder Marge.",
        },
        {
          question: "Funktioniert das auch für Reinigung in Wohnanlagen ohne Hausverwalter vor Ort?",
          answer:
            "Ja, sogar besonders gut. Der NFC-Tag im Treppenhaus oder am Briefkasten ist der zentrale Nachweis – kein Hausmeister muss anwesend sein, kein Stempel auf Papier nötig.",
        },
        {
          question: "Kann ich Wartungsverträge mit festen monatlichen Pauschalen abbilden?",
          answer:
            "Ja. Sie hinterlegen pro Objekt eine monatliche Pauschale, ggf. plus Sonderleistungen nach Aufwand. Taskey erzeugt automatisch die monatliche Rechnung.",
        },
        {
          question: "Wie geht Taskey mit Schlüsseln um?",
          answer:
            "Pro Objekt hinterlegen Sie den Schlüsselbestand. NFC-Tags am Schlüsselkasten dokumentieren Entnahme und Rückgabe. Sie wissen jederzeit, welcher Schlüssel wo ist.",
        },
        {
          question: "Was, wenn ich Sonderaufträge zwischen den festen Touren habe?",
          answer:
            "Sie planen den Sonderauftrag mit einem Klick zusätzlich ein. Mitarbeiter sehen ihn in der App, Auftraggeber sieht ihn separat im Portal – alles sauber getrennt von der wiederkehrenden Tour.",
        },
      ]}
      related={[
        {
          href: "/software-gebaeudereinigung",
          label: "Software für Gebäudereinigung",
          description: "All-in-One Branchensoftware: Einsatzplanung, NFC-Nachweis, Zeiterfassung, Angebote, Rechnungen, Live-Margen.",
        },
        {
          href: "/einsatzplanung-reinigung",
          label: "Einsatzplanung Reinigung",
          description: "Wiederkehrende Touren in Sekunden planen und umplanen.",
        },
        {
          href: "/nfc-zeiterfassung",
          label: "NFC Zeiterfassung",
          description: "Der zentrale Nachweis-Workflow in der Unterhaltsreinigung.",
        },
        {
          href: "/leistungsnachweis-gebaeudereinigung",
          label: "Leistungsnachweis Gebäudereinigung",
          description: "Wie Reklamationen mit harten Daten verschwinden.",
        },
      ]}
    />
  );
}
