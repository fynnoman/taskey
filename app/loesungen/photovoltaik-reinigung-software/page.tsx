import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/landing/LandingPageTemplate';
import type { LandingPageData } from '@/components/landing/LandingPageTemplate';

export const metadata: Metadata = {
  title: 'Photovoltaik-Reinigung Software – PV-Anlagen digital verwalten | Taskey',
  description: 'Software für PV-Reinigung: Aufträge planen, NFC-Leistungsnachweise, Qualitätskontrolle. Ideal für Reinigungsunternehmen mit Solarpanel-Reinigung.',
  alternates: { canonical: 'https://www.taskeyapp.com/loesungen/photovoltaik-reinigung-software' },
};

const data: LandingPageData = {
  badge: 'PV-Reinigung',
  headline: 'Photovoltaik-Reinigung –',
  headlineHighlight: 'digital geplant & dokumentiert.',
  subheadline: 'PV-Anlagen reinigen, dokumentieren, nachweisen – alles in einer App.',
  heroDescription: 'Die Reinigung von Solaranlagen erfordert praezise Planung und lückenlose Dokumentation. Taskey hilft dir, PV-Reinigungsaufträge effizient zu verwalten.',
  painPoints: [
    { text: 'PV-Reinigungsaufträge sind schwer zu planen – saisonale Spitzen ueberfordern.' },
    { text: 'Auftraggeber fordern Nachweise mit Vorher-/Nachher-Fotos.' },
    { text: 'Ohne GPS-Tracking keine Kontrolle, ob alle Module gereinigt wurden.' },
    { text: 'Manuelle Dokumentation kostet bei grossen Anlagen enorm viel Zeit.' },
  ],
  solutionTitle: 'PV-Reinigung. Lückenlos digital.',
  solutionDescription: 'Von der Auftragsannahme bis zum Leistungsnachweis – Taskey deckt den gesamten PV-Reinigungsprozess ab.',
  solutionSteps: [
    { title: 'Anlagen & Module anlegen', description: 'Verwalte PV-Anlagen als Objekte mit allen Details wie Modulzahl und Standort.' },
    { title: 'Teams zuweisen & planen', description: 'Weise Reinigungsteams zu und plane Einsätze nach Wetterlage und Saison.' },
    { title: 'NFC-Nachweis & Fotodoku', description: 'Vor-Ort-Scan, Fotos hochladen – der Auftraggeber bekommt seinen Nachweis digital.' },
  ],
  ctaText: 'PV-Reinigung digitalisieren',
  featureHighlights: [
    { title: 'Anlagen-Verwaltung', description: 'Alle PV-Anlagen mit Standort, Modulzahl und Reinigungsintervall.' },
    { title: 'Saisonale Planung', description: 'Reinigungszyklen an Saison und Verschmutzungsgrad anpassen.' },
    { title: 'Fotodokumentation', description: 'Vorher-/Nachher-Bilder direkt am Objekt hochladen.' },
    { title: 'GPS-Tracking', description: 'Nachvollziehen, wo und wann gereinigt wurde.' },
    { title: 'Leistungsnachweis', description: 'Digitale Nachweise für Betreiber und Versicherungen.' },
    { title: 'Rechnung pro Anlage', description: 'Automatische Rechnungsstellung pro PV-Anlage.' },
  ],
  closingHeadline: 'PV-Reinigung. Professionell. Dokumentiert. Digital.',
  closingText: 'Teste Taskey 14 Tage kostenlos und manage deine PV-Reinigungsaufträge effizient.',
  relatedLinks: [
    { href: '/loesungen/fassadenreinigung-software', label: 'Fassadenreinigung', description: 'Spezielle Reinigungsarten digital verwalten.' },
    { href: '/loesungen/qualitaetskontrolle-gebäudereinigung', label: 'Qualitätskontrolle', description: 'Reinigungsqualität prüfen und dokumentieren.' },
    { href: '/loesungen/nfc-leistungsnachweis-reinigung', label: 'NFC Leistungsnachweis', description: 'Vor-Ort-Nachweise per NFC.' },
  ],
};

export default function Page() {
  return <LandingPageTemplate data={data} />;
}
