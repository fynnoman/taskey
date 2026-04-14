import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/landing/LandingPageTemplate';
import type { LandingPageData } from '@/components/landing/LandingPageTemplate';

export const metadata: Metadata = {
  title: 'Glasreinigung Software – Auftraege, Touren & Nachweise | Taskey',
  description: 'Software fuer Glasreinigung: Touren planen, Auftraege verwalten, Leistungsnachweise erstellen. Speziell fuer Glasreiniger im DACH-Raum. Jetzt testen!',
  alternates: { canonical: 'https://www.taskeyapp.com/loesungen/glasreinigung-software' },
};

const data: LandingPageData = {
  badge: 'Glasreinigung',
  headline: 'Glasreinigung –',
  headlineHighlight: 'perfekt geplant, sauber dokumentiert.',
  subheadline: 'Fensterfronten, Fassaden, Schaufenster – jeder Auftrag nachvollziehbar.',
  heroDescription: 'Taskey plant deine Glasreinigungs-Touren, dokumentiert jeden Einsatz mit Fotos und erstellt automatisch Leistungsnachweise fuer deine Kunden.',
  painPoints: [
    { text: 'Tourenplanung fuer verschiedene Objekte ist komplex und fehleranfaellig.' },
    { text: 'Kunden reklamieren, dass Fenster nicht gereinigt wurden – kein Beweis.' },
    { text: 'Saisonale Schwankungen machen die Personalplanung schwierig.' },
    { text: 'Rechnungsstellung nach verschiedenen Intervallen ist muehsam.' },
  ],
  solutionTitle: 'Jede Scheibe. Jeder Einsatz. Dokumentiert.',
  solutionDescription: 'Von der Tour bis zum Nachweis – alles in einer App.',
  solutionSteps: [
    { title: 'Touren planen', description: 'Ordne Objekte zu optimalen Touren – Taskey beruecksichtigt Intervalle und Standorte.' },
    { title: 'Einsatz dokumentieren', description: 'Vorher/Nachher-Fotos, Zeitstempel, NFC-Scan – alles automatisch.' },
    { title: 'Nachweis & Rechnung', description: 'Leistungsnachweis per Klick erstellen und direkt abrechnen.' },
  ],
  ctaText: 'Glasreinigung digitalisieren',
  featureHighlights: [
    { title: 'Intervallplanung', description: 'Woechentlich, monatlich, quartalsweise – Taskey erinnert automatisch.' },
    { title: 'Tourenoptimierung', description: 'Objekte nach Route sortieren fuer effiziente Touren.' },
    { title: 'Wetterdaten', description: 'Regenwarnung im Dashboard – Glasreinigung bei Bedarf verschieben.' },
    { title: 'Fotodokumentation', description: 'Vorher/Nachher-Fotos als Qualitaetsnachweis.' },
    { title: 'Kundenportal', description: 'Auftraggeber sehen den naechsten Reinigungstermin live.' },
    { title: 'Flexible Abrechnung', description: 'Pro Quadratmeter, pauschal oder nach Aufwand abrechnen.' },
  ],
  closingHeadline: 'Glasreinigung. Geplant. Dokumentiert. Abgerechnet.',
  closingText: 'Teste Taskey 14 Tage kostenlos und optimiere deine Glasreinigung.',
  relatedLinks: [
    { href: '/loesungen/tourenplanung-reinigungsteams', label: 'Tourenplanung Reinigung', description: 'Optimale Touren fuer deine Reinigungsteams planen.' },
    { href: '/loesungen/nfc-leistungsnachweis-reinigung', label: 'NFC Leistungsnachweis', description: 'Jeden Einsatz per NFC-Scan nachweisen.' },
    { href: '/loesungen/rechnung-schreiben-reinigungsfirma', label: 'Rechnung Reinigung', description: 'Rechnungen direkt aus den Einsatzdaten erstellen.' },
  ],
};

export default function Page() {
  return <LandingPageTemplate data={data} />;
}
