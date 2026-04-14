import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/landing/LandingPageTemplate';
import type { LandingPageData } from '@/components/landing/LandingPageTemplate';

export const metadata: Metadata = {
  title: 'Kundendatenbank Reinigungsfirma – Taskey',
  description: 'Kundendatenbank für Reinigungsfirmen. Taskey verwaltet alle Objekte, Ansprechpartner und Verträge zentral und übersichtlich.',
  alternates: { canonical: 'https://www.taskeyapp.com/loesungen/kundendatenbank-reinigungsfirma' },
};

const data: LandingPageData = {
  badge: 'Kundendatenbank',
  headline: 'Kundendatenbank für Ihre',
  headlineHighlight: 'Reinigungsfirma',
  subheadline: 'Alle Objekte, Verträge und Kontakte zentral verwalten.',
  heroDescription: 'Schluss mit verstreuten Informationen. Taskey gibt Ihnen eine zentrale Datenbank für alle Kunden, Objekte und Vertragsdaten Ihrer Reinigungsfirma.',
  painPoints: [
    { text: 'Kundendaten in verschiedenen Excel-Dateien und Ordnern verstreut.' },
    { text: 'Objektinformationen nicht aktuell oder unvollständig.' },
    { text: 'Kein schneller Zugriff auf Ansprechpartner und Vertragsdetails.' },
    { text: 'Vertragslaufzeiten werden übersehen – Verlängerungen verpasst.' },
  ],
  solutionTitle: 'Eine Datenbank für alles',
  solutionDescription: 'Taskey vereint Kunden, Objekte und Verträge in einer übersichtlichen Plattform.',
  solutionSteps: [
    { title: 'Kunden & Objekte anlegen', description: 'Alle Kundeninformationen und zugehörigen Reinigungsobjekte erfassen.' },
    { title: 'Verträge hinterlegen', description: 'Vertragslaufzeiten, Leistungsumfang und Konditionen dokumentieren.' },
    { title: 'Jederzeit Zugriff', description: 'Vom Büro oder unterwegs – alle Daten immer griffbereit.' },
  ],
  ctaText: 'Jetzt Kundendaten zentralisieren',
  featureHighlights: [
    { title: 'Objektverwaltung', description: 'Jedes Reinigungsobjekt mit Besonderheiten, Plänen und Zugangsdaten.' },
    { title: 'Vertragsverwaltung', description: 'Laufzeiten, Kündigungsfristen und Leistungsumfang im Blick.' },
    { title: 'Ansprechpartner', description: 'Alle Kontaktpersonen pro Kunde und Objekt hinterlegt.' },
    { title: 'Erinnerungen', description: 'Automatische Erinnerungen bei Vertragsverlängerungen.' },
    { title: 'Umsatzanalyse', description: 'Umsatz pro Kunde und Objekt – für bessere Geschäftsentscheidungen.' },
    { title: 'Mobiler Zugriff', description: 'Alle Kundendaten auch unterwegs auf dem Smartphone verfügbar.' },
  ],
  closingHeadline: 'Alle Kunden. Ein System.',
  closingText: 'Taskey ist die zentrale Kundendatenbank, die Ihre Reinigungsfirma verdient.',
  relatedLinks: [
      {
          href: '/loesungen/stammkunden-verwalten-gebäudereinigung',
          label: 'Stammkunden verwalten',
          description: 'Stammkunden mit Objekten, Verträgen und Kontaktdaten pflegen.'
      },
      {
          href: '/loesungen/rechnung-schreiben-reinigungsfirma',
          label: 'Rechnungen schreiben',
          description: 'Aus der Kundendatenbank direkt Rechnungen erstellen.'
      },
      {
          href: '/loesungen/sla-tracking-reinigungsfirma',
          label: 'SLA-Tracking',
          description: 'Service Level Agreements pro Kunde verwalten und einhalten.'
      }
  ],
};

export default function Page() {
  return <LandingPageTemplate data={data} />;
}
