import type { Metadata } from "next";
import LandingPageTemplate from "@/components/landing/LandingPageTemplate";

const path = "/leistungsnachweis-gebaeudereinigung";

export const metadata: Metadata = {
  title:
    "Leistungsnachweis Gebäudereinigung | Digital & rechtssicher | Taskey",
  description:
    "Digitaler Leistungsnachweis für Gebäudereinigung: NFC, GPS, Fotos und Unterschriften – manipulationssicher dokumentiert. Schluss mit Reklamationen.",
  alternates: { canonical: `https://www.taskeyapp.com${path}` },
  openGraph: {
    title: "Leistungsnachweis Gebäudereinigung | Digital & rechtssicher | Taskey",
    description:
      "Digitaler Leistungsnachweis per NFC, GPS, Foto und Unterschrift – manipulationssicher dokumentiert.",
    url: `https://www.taskeyapp.com${path}`,
    type: "article",
    locale: "de_DE",
    siteName: "Taskey",
    images: [
      { url: "/opengraph-image", width: 1200, height: 630, alt: "Digitaler Leistungsnachweis in der Gebäudereinigung mit Taskey" },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Leistungsnachweis Gebäudereinigung | Digital & rechtssicher | Taskey",
    description: "Schluss mit Reklamationen: manipulationssicherer digitaler Nachweis.",
    images: ["/opengraph-image"],
  },
};

export default function Page() {
  return (
    <LandingPageTemplate
      path={path}
      title="Leistungsnachweis Gebäudereinigung"
      eyebrow="Pillar · Nachweis"
      h1="Leistungsnachweis Gebäudereinigung —"
      h1Accent="digital, manipulationssicher, rechtssicher."
      lead={`\u201EWir waren da, ehrlich!\u201C reicht nicht. Bei jeder Reklamation, jedem Auftraggeber-Wechsel und jedem Vertragsende entscheidet ein Nachweis darüber, ob Sie bezahlt werden. Taskey dokumentiert jeden Einsatz automatisch: per NFC-Scan, GPS, Foto und \u2013 wenn nötig \u2013 mit digitaler Unterschrift.`}
      breadcrumbs={[
        { name: "Home", url: "https://www.taskeyapp.com" },
        { name: "Leistungsnachweis Gebäudereinigung", url: `https://www.taskeyapp.com${path}` },
      ]}
      sections={[
        {
          eyebrow: "Warum überhaupt Nachweis?",
          heading: "Reklamationen kosten Geld. Nachweise nicht.",
          intro:
            "Im Gebäudereinigungs-Alltag tauchen Reklamationen genau dann auf, wenn der Auftraggeber selbst Druck hat – Audit-Termin, Mietwechsel, interner Streit. Wer dann keinen Nachweis hat, zahlt drauf.",
          body: [
            "Ein typischer Fall: Der Hausverwalter behauptet, das Treppenhaus sei am Dienstag nicht gereinigt worden. Ohne Nachweis bleiben Ihnen drei Optionen: a) die Reinigung kostenlos wiederholen, b) eine Gutschrift ausstellen oder c) sich auf einen Konflikt einlassen, der den Vertrag kosten kann.",
            "Mit einem digitalen Leistungsnachweis ist der Fall in einer Minute geklärt: NFC-Scan um 6:32 Uhr, GPS-Punkt am Objekt, Mitarbeitername, Foto vom gereinigten Treppenhaus. Diskussion beendet.",
          ],
          bullets: [
            "Vermeidet Streit über erbrachte vs. abgerechnete Leistung",
            "Schützt vor unberechtigten Gutschriften",
            "Hilft bei Auftraggeber-Audits und ISO-Zertifizierungen",
            "Ist Voraussetzung für viele öffentliche Ausschreibungen",
          ],
        },
        {
          eyebrow: "Wie Taskey nachweist",
          heading: "Vier Belege pro Einsatz – automatisch.",
          subsections: [
            {
              heading: "NFC-Scan am Objekt",
              body:
                "Der Mitarbeiter hält das Handy an den NFC-Tag. Zeitstempel + Tag-ID gehen in den Datensatz. Manipulation ausgeschlossen – der Tag ist physisch am Objekt.",
            },
            {
              heading: "GPS-Standort",
              body:
                "Im Moment des Scans wird der GPS-Punkt erfasst. Liegt er außerhalb des hinterlegten Objekt-Radius, wird der Eintrag markiert und gesondert geprüft.",
            },
            {
              heading: "Foto-Nachweis",
              body:
                "Optional pro Einsatz oder pro Bereich: Foto vorher/nachher, Fotos kritischer Stellen, Foto vom Reklamations-Fund. Alle Bilder mit Zeit, Ort und Mitarbeiter signiert.",
            },
            {
              heading: "Digitale Unterschrift",
              body:
                "Wo gewünscht: Hausmeister oder Auftraggeber unterschreibt direkt auf dem Smartphone-Display – etwa bei Sonderreinigung oder Abnahme. PDF wird automatisch erzeugt und versendet.",
            },
          ],
        },
        {
          eyebrow: "Auftraggeber-Zugang",
          heading: "Vertrauen schaffen, statt nur reklamieren zu lassen.",
          body: [
            "Taskey Share gibt jedem Auftraggeber einen eigenen Login mit Echtzeit-Übersicht aller Einsätze für seine Objekte – inklusive Nachweisen, Beanstandungs-Funktion und Statistik.",
            "Der Effekt: Auftraggeber sehen selbst, dass Sie liefern. Reklamationen entstehen seltener, weil das Vertrauen größer ist. Und wenn doch mal etwas zu klären ist, hat der Auftraggeber den Beleg vor sich – ohne Sie anrufen zu müssen.",
            "Für Sie als Inhaber bedeutet das: weniger Rückfragen, höhere Verlängerungsrate bei Verträgen und bessere Verhandlungsposition bei Nachverhandlungen.",
          ],
        },
        {
          eyebrow: "Rechtssicherheit",
          heading: "Was vor Gericht zählt – und wie Taskey dort steht.",
          body: [
            "Digitale Nachweise sind in Deutschland grundsätzlich als Beweismittel zulässig (§371a ZPO), sofern sie manipulationssicher dokumentiert sind. Taskey erfüllt diese Anforderung durch versionierte Datensätze, kryptografische Signaturen jedes Eintrags und ein lückenloses Audit-Log jeder nachträglichen Änderung.",
            "Im Streitfall können Sie alle relevanten Belege als signiertes PDF exportieren – mit Zeitstempel, Mitarbeiter, GPS, Foto und ggf. Unterschrift. Solche PDFs werden in Schiedsverfahren und vor Amtsgerichten regelmäßig akzeptiert.",
          ],
        },
      ]}
      faqs={[
        {
          question: "Ist ein digitaler Leistungsnachweis vor Gericht gültig?",
          answer:
            "Ja. Nach §371a ZPO sind digitale Belege grundsätzlich zulässig. Voraussetzung ist Manipulationssicherheit – die Taskey durch versionierte, kryptografisch signierte Datensätze und lückenloses Audit-Log erfüllt.",
        },
        {
          question: "Können meine Mitarbeitenden den Nachweis nachträglich ändern?",
          answer:
            "Nein. Mitarbeitende können einen Einsatz lediglich melden, wenn etwas Außergewöhnliches passiert (z.B. Schaden gefunden). Änderungen an Zeitstempeln und GPS-Daten sind technisch nur über Admin-Rolle möglich – mit voller Audit-Spur.",
        },
        {
          question: "Wie schickt der Auftraggeber eine Beanstandung?",
          answer:
            "Über den Taskey-Share-Login: Er klickt auf den jeweiligen Einsatz, fotografiert die beanstandete Stelle und gibt einen Kommentar ein. Sie sehen die Reklamation sofort und können direkt antworten oder einen Folge-Einsatz auslösen.",
        },
        {
          question: "Kann ich den Nachweis als PDF an meinen Auftraggeber schicken?",
          answer:
            "Ja. Pro Objekt, Zeitraum oder Auftrag exportieren Sie ein signiertes PDF mit allen Belegen, Fotos und Unterschriften. Auf Wunsch automatisch monatlich am Monatsersten per E-Mail.",
        },
        {
          question: "Wie lange werden die Nachweise gespeichert?",
          answer:
            "Standardmäßig über die gesamte gesetzliche Aufbewahrungsfrist (mind. 2 Jahre, in vielen Fällen 10 Jahre für steuerrelevante Unterlagen) – auch nach Ende der Geschäftsbeziehung mit dem Auftraggeber.",
        },
        {
          question: "Was passiert, wenn ein Auftraggeber Zugriff auf falsche Objekte hätte?",
          answer:
            "Jeder Auftraggeber-Login ist auf seine eigenen Objekte beschränkt. Er sieht weder andere Kunden noch Mitarbeiter-Stammdaten. Sie konfigurieren die Sichtbarkeit feingranular pro Rolle.",
        },
      ]}
      related={[
        {
          href: "/software-gebaeudereinigung",
          label: "Software für Gebäudereinigung",
          description: "All-in-One Branchensoftware: Einsatzplanung, NFC-Nachweis, Zeiterfassung, Angebote, Rechnungen, Live-Margen.",
        },
        {
          href: "/nfc-zeiterfassung",
          label: "NFC Zeiterfassung",
          description: "Aus jedem NFC-Tap wird automatisch ein Teil des Leistungsnachweises.",
        },
        {
          href: "/zeiterfassung-gebaeudereinigung",
          label: "Zeiterfassung Gebäudereinigung",
          description: "Wie die Arbeitszeit lückenlos und gleichzeitig nachweissicher erfasst wird.",
        },
        {
          href: "/loesungen/klinikreinigung",
          label: "Klinikreinigung",
          description: "Wo der Nachweis besonders streng sein muss – und wie Taskey das löst.",
        },
      ]}
    />
  );
}
