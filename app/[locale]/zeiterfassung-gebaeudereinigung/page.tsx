import type { Metadata } from "next";
import LandingPageTemplate from "@/components/landing/LandingPageTemplate";

const path = "/zeiterfassung-gebaeudereinigung";

export const metadata: Metadata = {
  title:
    "Zeiterfassung Gebäudereinigung | Digital, Mindestlohn-konform | Taskey",
  description:
    "Digitale Zeiterfassung für Gebäudereinigung: NFC, GPS, Offline, DSGVO. Mindestlohn-konforme Dokumentation und automatische Stundenzettel. Jetzt testen.",
  alternates: { canonical: `https://www.taskeyapp.com${path}` },
  openGraph: {
    title: "Zeiterfassung Gebäudereinigung | Digital, Mindestlohn-konform | Taskey",
    description:
      "Digitale Zeiterfassung für Gebäudereinigung: NFC, GPS, Offline, DSGVO. Mindestlohn-konforme Dokumentation.",
    url: `https://www.taskeyapp.com${path}`,
    type: "article",
    locale: "de_DE",
    siteName: "Taskey",
    images: [
      {
        url: "/feature-zeiterfassung.webp",
        width: 1200,
        height: 630,
        alt: "Reinigungskraft scannt NFC-Tag mit Smartphone zur Zeiterfassung im Objekt",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Zeiterfassung Gebäudereinigung | Digital, Mindestlohn-konform | Taskey",
    description: "NFC-Zeiterfassung mit GPS, Offline-Modus und automatischem Stundenzettel.",
    images: ["/feature-zeiterfassung.webp"],
  },
};

export default function Page() {
  return (
    <LandingPageTemplate
      path={path}
      title="Zeiterfassung Gebäudereinigung"
      eyebrow="Pillar · Zeiterfassung"
      h1="Zeiterfassung für Gebäudereinigung —"
      h1Accent="digital, automatisch, DSGVO-konform."
      lead="Reinigungsbetriebe verlieren Tag für Tag Zeit mit Stundenzetteln, Excel und Rückfragen beim Team. Taskey erfasst die Arbeitszeit Ihrer Mitarbeitenden automatisch per NFC, GPS und Offline-Sync – revisionssicher, Mindestlohn-konform und in der Lohnbuchhaltung sofort weiterverarbeitbar."
      breadcrumbs={[
        { name: "Home", url: "https://www.taskeyapp.com" },
        { name: "Zeiterfassung Gebäudereinigung", url: `https://www.taskeyapp.com${path}` },
      ]}
      sections={[
        {
          eyebrow: "Problem",
          heading: "Warum Stundenzettel Sie Geld kosten.",
          intro:
            "Wer Arbeitszeit in der Gebäudereinigung mit Papier oder Excel erfasst, zahlt am Monatsende dreimal: in vergessenen Stunden, in Rückfragen ans Team und in Bußgeldrisiko durch fehlende Nachweise.",
          body: [
            "Das Mindestlohngesetz (§17 MiLoG) verpflichtet jeden Gebäudereinigungsbetrieb, Beginn, Ende und Dauer der täglichen Arbeitszeit jeder Reinigungskraft innerhalb von sieben Tagen aufzuzeichnen und zwei Jahre aufzubewahren. Stundenzettel im Auto-Handschuhfach, abfotografierte Notizzettel auf WhatsApp und nachträglich ausgefüllte Excel-Tabellen halten dieser Anforderung nicht stand.",
            "In der Praxis bedeutet das: Bei einer Zollkontrolle kann der Betrieb die Arbeitszeiten nicht lückenlos nachweisen. Die Folge sind Bußgelder von bis zu 30.000 Euro pro Verstoß. Hinzu kommt der unsichtbare Schaden: Pausen werden falsch verbucht, Fahrtzeiten verschwinden, Überstunden werden vergessen – auf Kosten der Marge.",
          ],
          bullets: [
            "Bußgeldrisiko bei Zollkontrollen (FKS)",
            "Vergessene Stunden gehen direkt von der Marge ab",
            "Manuelle Erfassung dauert pro Objekt 5–15 Minuten",
            "Streit über Pausen und Anfahrt belastet das Team",
          ],
        },
        {
          eyebrow: "Lösung",
          heading: "So funktioniert die Zeiterfassung mit Taskey.",
          intro:
            "Jede Reinigungskraft hält bei Ankunft das Smartphone an den NFC-Tag am Objekt. Taskey erkennt automatisch Mitarbeiter, Objekt, Uhrzeit und GPS-Standort. Beim Verlassen das Gleiche – fertig.",
          subsections: [
            {
              heading: "NFC-Check-in am Objekt",
              body:
                "Ein wetterfester NFC-Aufkleber am Eingang reicht. Taskey loggt den Start mit Zeitstempel, GPS-Koordinaten und Mitarbeiter-ID. Keine App muss vorher geöffnet werden, kein Passwort eingegeben – das Telefon tippt und der Eintrag steht.",
            },
            {
              heading: "Offline-Sync auch im Keller",
              body:
                "Tiefgaragen, Kellerräume oder Bestandsgebäude ohne Empfang sind Alltag in der Gebäudereinigung. Taskey speichert alle Zeitbuchungen lokal auf dem Gerät und synchronisiert automatisch, sobald wieder Netz da ist. Keine Lücken, keine Doppeleinträge.",
            },
            {
              heading: "Automatische Pausenregeln",
              body:
                "Hinterlegen Sie pro Mitarbeiter oder Objekt feste Pausenmodelle. Taskey berechnet die Nettoarbeitszeit Mindestlohn-konform und weist Pausen automatisch im richtigen Verhältnis aus – kein händisches Nachtragen.",
            },
            {
              heading: "Schluss mit Stundenzetteln",
              body:
                "Am Monatsende exportiert Taskey alle Zeitdaten als PDF, CSV, Excel oder im DATEV-Format für die Lohnbuchhaltung. Ein Klick statt eines Wochenend-Marathons im Büro.",
            },
          ],
        },
        {
          eyebrow: "Recht & Compliance",
          heading: "Mindestlohn, DSGVO und Manipulationssicherheit.",
          intro:
            "Eine digitale Zeiterfassung ist nur dann wertvoll, wenn sie auch vor Gericht standhält. Taskey ist von Anfang an für die rechtlichen Anforderungen der Gebäudereinigung in Deutschland gebaut.",
          bullets: [
            "Mindestlohn-konform nach §17 MiLoG",
            "DSGVO-konform: Server in Deutschland, AVV inklusive",
            "Manipulationssicher: Zeiteinträge sind versioniert und kryptografisch signiert",
            "EuGH-Urteil 2019: Arbeitszeit muss objektiv, verlässlich und zugänglich erfasst werden – Taskey erfüllt alle drei Kriterien",
            "Volltextsuche und Filter nach Mitarbeiter, Objekt, Zeitraum, Auftraggeber",
            "Audit-Log dokumentiert jede nachträgliche Änderung",
          ],
        },
        {
          eyebrow: "Praxis",
          heading: "Was sich für Inhaber konkret ändert.",
          body: [
            "Statt am Monatsletzten Stundenzettel zu sortieren, sehen Sie in Echtzeit, wer wo arbeitet, wie lange und mit welchem Pausenstand. Stundenkonten laufen automatisch mit. Überstunden, Krank- und Urlaubsmeldungen fließen in dieselbe Übersicht.",
            "Wenn ein Auftraggeber fragt, ob am Dienstag um 6:30 Uhr wirklich gereinigt wurde, brauchen Sie keine Anrufe mehr – Sie öffnen das Objekt in Taskey, sehen den NFC-Scan, den GPS-Punkt und können dem Auftraggeber innerhalb einer Minute eine PDF-Bestätigung schicken.",
            "Für die Lohnbuchhaltung bedeutet das: Ein einziger Klick exportiert alle Zeitdaten DATEV-fertig. Steuerberater und Buchhaltung müssen nichts nachpflegen, nichts hinterfragen und keine Rückfragen mehr stellen.",
          ],
        },
      ]}
      faqs={[
        {
          question: "Funktioniert die NFC-Zeiterfassung auch ohne Internet?",
          answer:
            "Ja. Taskey speichert alle Zeitbuchungen lokal auf dem Smartphone und synchronisiert automatisch, sobald die App wieder Netz hat. Tiefgaragen, Bestandsgebäude oder Glasfassaden ohne Empfang sind kein Problem.",
        },
        {
          question: "Erfüllt Taskey die Aufzeichnungspflicht nach Mindestlohngesetz?",
          answer:
            "Ja. Taskey dokumentiert Beginn, Ende und Dauer der täglichen Arbeitszeit jeder Reinigungskraft, archiviert die Einträge revisionssicher und stellt sie für Zollkontrollen oder die Finanzkontrolle Schwarzarbeit (FKS) jederzeit als PDF zur Verfügung – über die gesetzliche Aufbewahrungsfrist hinaus.",
        },
        {
          question: "Kann ich die erfassten Stunden direkt an DATEV übergeben?",
          answer:
            "Ja. Taskey exportiert Lohndaten im DATEV-Standardformat. Ihr Steuerberater oder Ihre interne Lohnbuchhaltung importiert die Datei direkt, ohne Nachbearbeitung.",
        },
        {
          question: "Wie verhindert Taskey Manipulationen oder rückwirkende Änderungen?",
          answer:
            "Jeder Zeiteintrag ist mit Zeitstempel, GPS-Position, Mitarbeiter-ID und Gerätekennung versehen. Nachträgliche Änderungen sind nur durch berechtigte Rollen und mit Audit-Log möglich – jeder Eingriff bleibt nachvollziehbar.",
        },
        {
          question: "Brauchen meine Mitarbeitenden ein Firmen-Smartphone?",
          answer:
            "Nein. Taskey läuft auf privaten und Firmen-Smartphones (iOS und Android). Die App ist mehrsprachig (Deutsch, Türkisch, Russisch, Polnisch und weitere) und so einfach gestaltet, dass keine Schulung nötig ist.",
        },
        {
          question: "Was kostet die Zeiterfassung in Taskey?",
          answer:
            "Die NFC-Zeiterfassung ist in jedem Taskey-Tarif enthalten – ab 119 € pro Monat für den Beginner-Tarif (zzgl. 4,40 € pro aktivem Objekt). Es gibt keinen Aufpreis pro Mitarbeitendem.",
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
          label: "NFC Zeiterfassung im Detail",
          description: "Wie der NFC-Tag funktioniert, was er kostet und wie er angebracht wird.",
        },
        {
          href: "/leistungsnachweis-gebaeudereinigung",
          label: "Leistungsnachweis Gebäudereinigung",
          description: "Aus der Zeitbuchung wird automatisch der Nachweis für den Auftraggeber.",
        },
        {
          href: "/einsatzplanung-reinigung",
          label: "Einsatzplanung Reinigung",
          description: "Schichten, Touren und Vertretungen – nahtlos verbunden mit der Zeiterfassung.",
        },
      ]}
    />
  );
}
