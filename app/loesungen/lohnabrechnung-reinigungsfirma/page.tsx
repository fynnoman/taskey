import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/landing/LandingPageTemplate';
import type { LandingPageData } from '@/components/landing/LandingPageTemplate';

export const metadata: Metadata = {
  title: 'Lohnabrechnung Reinigungsfirma – Taskey',
  description: 'Lohnabrechnung für Reinigungsfirmen vorbereiten. Taskey erfasst Arbeitszeiten und exportiert alle Daten für die Lohnbuchhaltung.',
  alternates: { canonical: 'https://www.taskey.de/loesungen/lohnabrechnung-reinigungsfirma' },
};

const data: LandingPageData = {
  badge: 'Lohnabrechnung',
  headline: 'Lohnabrechnung für Ihre',
  headlineHighlight: 'Reinigungsfirma',
  subheadline: 'vorbereiten – in Minuten statt Stunden.',
  heroDescription: 'Viele Mitarbeiter, unterschiedliche Stundenlöhne, Zuschläge und Abzüge – Taskey bereitet alle Daten für die Lohnabrechnung Ihrer Reinigungskräfte automatisch auf.',
  painPoints: [
    { icon: '⏳', text: 'Stundenlang Arbeitszeiten für die Lohnbuchhaltung zusammentragen.' },
    { icon: '❌', text: 'Fehlerhafte Abrechnungen führen zu Mitarbeiter-Unzufriedenheit.' },
    { icon: '📋', text: 'Zuschläge für Nacht, Wochenende und Feiertage manuell berechnen.' },
    { icon: '📊', text: 'Verschiedene Stundenlöhne und Vertragsmodelle manuell berücksichtigen.' },
  ],
  solutionTitle: 'Lohndaten automatisch aufbereiten',
  solutionDescription: 'Taskey berechnet alle lohnrelevanten Daten automatisch aus der Zeiterfassung.',
  solutionSteps: [
    { icon: '⏱️', title: 'Zeiten erfassen', description: 'Mitarbeiter stempeln per App – alle Arbeitszeiten werden automatisch erfasst.' },
    { icon: '🔢', title: 'Automatisch berechnen', description: 'Zuschläge, Überstunden und Abwesenheiten werden automatisch berechnet.' },
    { icon: '📤', title: 'Exportieren', description: 'Lohndaten als CSV oder PDF an die Buchhaltung senden.' },
  ],
  ctaText: 'Jetzt Lohnvorbereitung vereinfachen',
  featureHighlights: [
    { icon: '⏱️', title: 'Automatische Zeiterfassung', description: 'Alle Arbeitszeiten digital erfasst – keine manuellen Stundenlisten.' },
    { icon: '💰', title: 'Zuschlagsberechnung', description: 'Nacht-, Wochenend- und Feiertagszuschläge automatisch berechnet.' },
    { icon: '📊', title: 'Überstundenübersicht', description: 'Überstunden pro Mitarbeiter und Monat auf einen Blick.' },
    { icon: '📅', title: 'Abwesenheiten', description: 'Urlaub, Krankheit und Fehlzeiten korrekt berücksichtigt.' },
    { icon: '📤', title: 'Steuerberater-Export', description: 'Lohndaten im passenden Format für den Steuerberater exportieren.' },
    { icon: '✅', title: 'Plausibilitätsprüfung', description: 'Automatische Prüfung auf Unstimmigkeiten vor dem Export.' },
  ],
  closingHeadline: 'Lohnvorbereitung in Minuten – nicht Stunden.',
  closingText: 'Taskey macht die Lohnvorbereitung für Ihre Reinigungsfirma einfach und fehlerfrei.',
  relatedLinks: [
      {
          href: '/loesungen/arbeitszeiterfassung-reinigungsfirma',
          label: 'Arbeitszeiterfassung Reinigung',
          description: 'Erfasste Zeiten als Basis für die korrekte Lohnabrechnung.'
      },
      {
          href: '/loesungen/schichtplanung-reinigungsunternehmen',
          label: 'Schichtplanung Reinigung',
          description: 'Schichten planen und Zuschläge automatisch berechnen.'
      },
      {
          href: '/loesungen/ueberstunden-verwalten-handwerksbetrieb',
          label: 'Überstunden verwalten',
          description: 'Überstunden korrekt erfassen und in die Lohnabrechnung übernehmen.'
      }
  ],
};

export default function Page() {
  return <LandingPageTemplate data={data} />;
}
