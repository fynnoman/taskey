import type { Metadata } from "next";
import LandingPageTemplate from "@/components/landing/LandingPageTemplate";

const path = "/vergleich/blink-alternative";

export const metadata: Metadata = {
  title:
    "Blink Alternative für Gebäudereinigung | Was Taskey anders macht | Taskey",
  description:
    "Blink-Alternative für Reinigungsbetriebe: Taskey kombiniert NFC, Einsatzplanung, Rechnungen und Auftraggeber-Portal – speziell für Gebäudereinigung im DACH-Raum.",
  alternates: { canonical: `https://www.taskeyapp.com${path}` },
  openGraph: {
    title: "Blink Alternative für Gebäudereinigung | Taskey",
    description:
      "Was Taskey anders macht als Blink: NFC nativ, Auftraggeber-Portal, DACH-Fokus, deutsche Server.",
    url: `https://www.taskeyapp.com${path}`,
    type: "article",
    locale: "de_DE",
    siteName: "Taskey",
    images: [
      { url: "/opengraph-image", width: 1200, height: 630, alt: "Vergleich Blink vs. Taskey für Reinigungsbetriebe" },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blink Alternative für Gebäudereinigung | Taskey",
    description: "NFC nativ, Auftraggeber-Portal, DACH-Fokus.",
    images: ["/opengraph-image"],
  },
};

export default function Page() {
  return (
    <LandingPageTemplate
      path={path}
      title="Blink Alternative"
      eyebrow="Vergleich · Blink"
      h1="Blink Alternative für Gebäudereinigung —"
      h1Accent="was Taskey anders macht."
      lead="Blink ist eine starke Plattform für deskless workers – Taskey ist die spezialisierte All-in-One-Lösung für Gebäudereinigung im DACH-Raum. Mit nativer NFC-Zeiterfassung, Auftraggeber-Portal, deutscher DSGVO-Compliance und einer Bedienung, die auch ohne Schulung sitzt."
      breadcrumbs={[
        { name: "Home", url: "https://www.taskeyapp.com" },
        { name: "Vergleich", url: "https://www.taskeyapp.com/vergleich/blink-alternative" },
        { name: "Blink Alternative", url: `https://www.taskeyapp.com${path}` },
      ]}
      sections={[
        {
          eyebrow: "Worauf es Reinigungsfirmen ankommt",
          heading: "Eine generische Worker-App reicht nicht.",
          body: [
            "Blink ist großartig, wenn Sie hauptsächlich Kommunikation, News und einen App-basierten Zugang für Frontline-Mitarbeitende suchen. Für die Spezial-Anforderungen einer Reinigungsfirma reicht das aber nicht: Sie brauchen NFC-Zeiterfassung, Objektakten, Rundgang-Nachweise, Marge pro Auftrag, DATEV-Export und ein Auftraggeber-Portal.",
            "Genau hier ist Taskey gebaut: nicht als generische Worker-Plattform mit Reinigungs-Plugin, sondern als All-in-One-Lösung speziell für Gebäudereiniger.",
          ],
        },
        {
          eyebrow: "Direkter Vergleich",
          heading: "Was Taskey kann, was Blink nicht out-of-the-box bietet.",
          bullets: [
            "Native NFC-Zeiterfassung mit GPS und Offline-Sync",
            "Objektakten mit Sonderwünschen und Fotos pro Objekt",
            "Live-Margen pro Auftrag in Echtzeit",
            "Auftraggeber-Zugang (Taskey Share) mit eigenem Login",
            "Angebote, Wartungsverträge, Rechnungen",
            "DATEV-Export im deutschen Standardformat",
            "Server in Deutschland, AVV inkl., DACH-fokussiert",
            "Done-for-You Setup in 48 Stunden",
          ],
        },
        {
          eyebrow: "Was Blink besser kann",
          heading: "Ehrlich: wann Blink die richtige Wahl ist.",
          body: [
            "Wenn Sie eine breite Belegschaft jenseits der Reinigung haben (z.B. Pflege, Logistik, Einzelhandel) und vor allem Kommunikation und Engagement im Vordergrund stehen, ist Blink gut aufgestellt. Auch für sehr große internationale Konzerne mit eigenen Customizing-Teams ist Blink stark.",
            "Wenn Ihr Geschäft aber Gebäudereinigung im DACH-Raum ist und Sie eine fertige Lösung statt einer Plattform wollen, sparen Sie mit Taskey Monate an Setup und mehrere tausend Euro an Customizing.",
          ],
        },
        {
          eyebrow: "Migration",
          heading: "Wechsel von Blink: kein Datenverlust.",
          body: [
            "Mitarbeiterstammdaten, Objektzuordnungen und Zeitlogs werden – soweit aus Blink exportierbar – in Taskey importiert. Alles, was nicht direkt aus Blink kommt, wird im Done-for-You Setup mit Ihnen erfasst.",
            "In der Übergangsphase können beide Systeme parallel laufen, damit kein Einsatz durchs Raster fällt. Nach 2–4 Wochen ist die Umstellung abgeschlossen.",
          ],
        },
      ]}
      faqs={[
        {
          question: "Hat Blink eine eigene NFC-Zeiterfassung?",
          answer:
            "Blink ist primär eine Worker-Engagement- und Kommunikationsplattform. NFC-Zeiterfassung ist kein nativer Kernbestandteil – bei Taskey ist sie das Herzstück.",
        },
        {
          question: "Welche Sprachen unterstützt Taskey für meine Reinigungskräfte?",
          answer:
            "Taskey ist auf Deutsch, Türkisch, Russisch, Polnisch, Englisch und Französisch verfügbar – die typischen Sprachen in deutschen Reinigungsbetrieben.",
        },
        {
          question: "Kann ich aus Blink direkt in Taskey importieren?",
          answer:
            "Wenn Blink einen Export der Stammdaten erlaubt, importieren wir diese im Done-for-You Setup. Andernfalls erfassen wir gemeinsam mit Ihnen die Kerndaten – das dauert üblicherweise wenige Stunden.",
        },
        {
          question: "Gibt es bei Taskey ebenfalls Mitarbeiter-Kommunikation?",
          answer:
            "Ja. Team-Chat, Push-Benachrichtigungen, Aushänge und individuelle Mitarbeiter-News sind enthalten – fokussiert auf den Reinigungsalltag.",
        },
        {
          question: "Sind die Daten DSGVO-konform in Deutschland gespeichert?",
          answer:
            "Ja. Alle Daten liegen auf deutschen Servern, AVV wird automatisch mit dem Vertrag bereitgestellt, und der Datenschutzbeauftragte ist erreichbar.",
        },
      ]}
      related={[
        {
          href: "/vergleich/zvoove-alternative",
          label: "Zvoove Alternative",
          description: "Wie Taskey im Vergleich zur klassischen ERP-Lösung steht.",
        },
        {
          href: "/vergleich/fortytools-alternative",
          label: "Fortytools Alternative",
          description: "Direkter Vergleich mit Fortytools für Reinigungsbetriebe.",
        },
        {
          href: "/nfc-zeiterfassung",
          label: "NFC Zeiterfassung im Detail",
          description: "Warum NFC der Kern jeder modernen Reinigungs-App ist.",
        },
      ]}
    />
  );
}
