import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/landing/LandingPageTemplate';
import type { LandingPageData } from '@/components/landing/LandingPageTemplate';

export const metadata: Metadata = {
  title: 'Digitalisierung Handwerksbetrieb | Taskey',
  description: 'Handwerksbetrieb digitalisieren: Aufträge, Zeiten, Dokumente und Rechnungen in einer App. Schluss mit Zettelwirtschaft. Jetzt kostenlos testen!',
  alternates: { canonical: 'https://www.taskey.de/loesungen/digitalisierung-handwerksbetrieb' },
};

const data: LandingPageData = {
  badge: 'Digitalisierung Handwerk',
  headline: 'Handwerk digitalisieren –',
  headlineHighlight: 'einfach statt kompliziert.',
  subheadline: 'Aufträge, Zeiten, Dokumente, Rechnungen – alles in einer App. Schluss mit Zettelwirtschaft.',
  heroDescription: 'Taskey ist die All-in-One-Software für Handwerksbetriebe, die digital werden wollen. Keine 10 verschiedenen Tools, keine IT-Abteilung nötig – eine App für alles.',
  painPoints: [
    { text: 'Zettelwirtschaft frisst täglich 2 Stunden produktive Arbeitszeit.' },
    { text: 'Informationen liegen verstreut in Excel, Outlook, WhatsApp und Papierakten.' },
    { text: 'Bisherige Software war zu teuer, zu komplex oder beides.' },
    { text: 'Du weißt nicht, wo du mit der Digitalisierung anfangen sollst.' },
  ],
  solutionTitle: 'Digitalisierung? Ein Tool. 5 Minuten.',
  solutionDescription: 'Taskey ersetzt Zettel, Excel, WhatsApp-Gruppen und Papierstapel – sofort.',
  solutionSteps: [
    { title: 'Registrieren', description: 'Account erstellen, Mitarbeiter einladen – in 5 Minuten startklar.' },
    { title: 'Aufträge & Zeiten', description: 'Erstelle deinen ersten Auftrag und lass dein Team die Zeiten erfassen.' },
    { title: 'Sofort Ergebnisse', description: 'Ab Tag 1 sparst du Zeit, reduzierst Fehler und hast den Überblick.' },
  ],
  ctaText: 'Jetzt digitalisieren',
  featureHighlights: [
    { title: 'Auftragsverwaltung', description: 'Alle Aufträge digital anlegen, verwalten und abrechnen.' },
    { title: 'Zeiterfassung', description: 'Arbeitszeiten automatisch erfassen – per App, GPS oder NFC.' },
    { title: 'Dokumentation', description: 'Fotos, Berichte und Protokolle digital erstellen.' },
    { title: 'Rechnungen', description: 'Rechnungen aus Aufträgen generieren – mit einem Klick.' },
    { title: 'NFC-Tags', description: 'Werkzeuge, Maschinen und Baustellen mit NFC-Tags digitalisieren.' },
    { title: 'Eine App für alles', description: 'Kein Tool-Chaos – alles in Taskey vereint.' },
  ],
  closingHeadline: 'Digitalisierung startet hier.',
  closingText: 'Starte jetzt und mach deinen Handwerksbetrieb fit für die Zukunft.',
  relatedLinks: [
      {
          href: '/loesungen/papierloses-buero-handwerk',
          label: 'Papierloses Büro',
          description: 'Der erste Schritt der Digitalisierung: Papier abschaffen.'
      },
      {
          href: '/loesungen/zettelwirtschaft-abschaffen-handwerk',
          label: 'Zettelwirtschaft abschaffen',
          description: 'Schluss mit Zetteln – alles digital an einem Ort.'
      },
      {
          href: '/loesungen/alles-in-einer-app-handwerksbetrieb',
          label: 'Alles in einer App',
          description: 'Alle Prozesse Ihres Betriebs in einer einzigen App vereinen.'
      }
  ],
};

export default function Page() {
  return <LandingPageTemplate data={data} />;
}
