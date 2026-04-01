import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/landing/LandingPageTemplate';
import type { LandingPageData } from '@/components/landing/LandingPageTemplate';

export const metadata: Metadata = {
  title: 'Kundendatenbank Reinigungsfirma – Taskey',
  description: 'Kundendatenbank für Reinigungsfirmen. Taskey verwaltet alle Objekte, Ansprechpartner und Verträge zentral und übersichtlich.',
  alternates: { canonical: 'https://www.taskey.de/loesungen/kundendatenbank-reinigungsfirma' },
};

const data: LandingPageData = {
  badge: 'Kundendatenbank',
  headline: 'Kundendatenbank für Ihre',
  headlineHighlight: 'Reinigungsfirma',
  subheadline: 'Alle Objekte, Verträge und Kontakte zentral verwalten.',
  heroDescription: 'Schluss mit verstreuten Informationen. Taskey gibt Ihnen eine zentrale Datenbank für alle Kunden, Objekte und Vertragsdaten Ihrer Reinigungsfirma.',
  painPoints: [
    { icon: '📂', text: 'Kundendaten in verschiedenen Excel-Dateien und Ordnern verstreut.' },
    { icon: '📋', text: 'Objektinformationen nicht aktuell oder unvollständig.' },
    { icon: '📞', text: 'Kein schneller Zugriff auf Ansprechpartner und Vertragsdetails.' },
    { icon: '🔄', text: 'Vertragslaufzeiten werden übersehen – Verlängerungen verpasst.' },
  ],
  solutionTitle: 'Eine Datenbank für alles',
  solutionDescription: 'Taskey vereint Kunden, Objekte und Verträge in einer übersichtlichen Plattform.',
  solutionSteps: [
    { icon: '👤', title: 'Kunden & Objekte anlegen', description: 'Alle Kundeninformationen und zugehörigen Reinigungsobjekte erfassen.' },
    { icon: '📋', title: 'Verträge hinterlegen', description: 'Vertragslaufzeiten, Leistungsumfang und Konditionen dokumentieren.' },
    { icon: '📊', title: 'Jederzeit Zugriff', description: 'Vom Büro oder unterwegs – alle Daten immer griffbereit.' },
  ],
  ctaText: 'Jetzt Kundendaten zentralisieren',
  featureHighlights: [
    { icon: '🏢', title: 'Objektverwaltung', description: 'Jedes Reinigungsobjekt mit Besonderheiten, Plänen und Zugangsdaten.' },
    { icon: '📋', title: 'Vertragsverwaltung', description: 'Laufzeiten, Kündigungsfristen und Leistungsumfang im Blick.' },
    { icon: '👥', title: 'Ansprechpartner', description: 'Alle Kontaktpersonen pro Kunde und Objekt hinterlegt.' },
    { icon: '🔔', title: 'Erinnerungen', description: 'Automatische Erinnerungen bei Vertragsverlängerungen.' },
    { icon: '📊', title: 'Umsatzanalyse', description: 'Umsatz pro Kunde und Objekt – für bessere Geschäftsentscheidungen.' },
    { icon: '📱', title: 'Mobiler Zugriff', description: 'Alle Kundendaten auch unterwegs auf dem Smartphone verfügbar.' },
  ],
  closingHeadline: 'Alle Kunden. Ein System.',
  closingText: 'Taskey ist die zentrale Kundendatenbank, die Ihre Reinigungsfirma verdient.',
  relatedLinks: [
      {
          href: '/loesungen/stammkunden-verwalten-gebaeudereinigung',
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
