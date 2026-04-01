import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/landing/LandingPageTemplate';
import type { LandingPageData } from '@/components/landing/LandingPageTemplate';

export const metadata: Metadata = {
  title: 'Inventar verwalten Reinigungsfirma – Taskey',
  description: 'Inventar für Reinigungsfirmen digital verwalten. Taskey erfasst Geräte, Reinigungsmittel und Zubehör – mit Standort und Zustandsdokumentation.',
  alternates: { canonical: 'https://www.taskey.de/loesungen/inventar-verwalten-reinigungsfirma' },
};

const data: LandingPageData = {
  badge: 'Inventarverwaltung',
  headline: 'Inventar für Ihre',
  headlineHighlight: 'Reinigungsfirma',
  subheadline: 'digital verwalten.',
  heroDescription: 'Wo ist die Scheuersaugmaschine? Wie viel Reinigungsmittel ist noch da? Taskey verwaltet Ihr gesamtes Inventar digital – vom Reinigungsgerät bis zum Verbrauchsmaterial.',
  painPoints: [
    { icon: '❓', text: 'Keine Ahnung, wo welches Gerät gerade im Einsatz ist.' },
    { icon: '📦', text: 'Reinigungsmittel sind leer – keiner hat nachbestellt.' },
    { icon: '🔧', text: 'Geräte fallen aus, weil Wartungen vergessen wurden.' },
    { icon: '💸', text: 'Inventar geht verloren oder wird beschädigt – ohne Dokumentation.' },
  ],
  solutionTitle: 'Inventar digital im Griff',
  solutionDescription: 'Taskey verwaltet Ihr gesamtes Equipment zentral und übersichtlich.',
  solutionSteps: [
    { icon: '📋', title: 'Inventar erfassen', description: 'Alle Geräte und Materialien mit Details, Fotos und Standort anlegen.' },
    { icon: '📍', title: 'Standort tracken', description: 'Immer wissen, wo welches Gerät gerade im Einsatz ist.' },
    { icon: '🔔', title: 'Wartung planen', description: 'Automatische Erinnerungen für Wartung und Nachbestellung.' },
  ],
  ctaText: 'Jetzt Inventar digitalisieren',
  featureHighlights: [
    { icon: '📋', title: 'Geräteübersicht', description: 'Alle Geräte mit Typ, Zustand, Standort und Wartungsstatus.' },
    { icon: '📍', title: 'Standortverfolgung', description: 'Wissen, in welchem Objekt welches Gerät eingesetzt wird.' },
    { icon: '🔧', title: 'Wartungsplanung', description: 'Wartungsintervalle hinterlegen und automatisch erinnert werden.' },
    { icon: '📦', title: 'Bestandsverwaltung', description: 'Reinigungsmittel und Verbrauchsmaterial tracken.' },
    { icon: '⚠️', title: 'Meldebestand', description: 'Automatische Warnung bei unterschrittenem Mindestbestand.' },
    { icon: '📊', title: 'Kostenanalyse', description: 'Inventarkosten pro Objekt und Zeitraum analysieren.' },
  ],
  closingHeadline: 'Ihr Inventar – immer im Blick.',
  closingText: 'Taskey verhindert verlorenes Equipment und leere Vorräte – für reibungslosen Betrieb.',
  relatedLinks: [
      {
          href: '/loesungen/materialverwaltung-handwerk',
          label: 'Materialverwaltung',
          description: 'Reinigungsmittel und Material als Inventar effizient verwalten.'
      },
      {
          href: '/loesungen/lagerverwaltung-handwerksbetrieb',
          label: 'Lagerverwaltung',
          description: 'Inventar im Lager organisieren und Bestände überwachen.'
      },
      {
          href: '/loesungen/bestellwesen-handwerksbetrieb',
          label: 'Bestellwesen',
          description: 'Bei niedrigem Inventar automatisch nachbestellen.'
      }
  ],
};

export default function Page() {
  return <LandingPageTemplate data={data} />;
}
