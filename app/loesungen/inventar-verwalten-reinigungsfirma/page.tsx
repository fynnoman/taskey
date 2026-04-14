import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/landing/LandingPageTemplate';
import type { LandingPageData } from '@/components/landing/LandingPageTemplate';

export const metadata: Metadata = {
  title: 'Inventar verwalten Reinigungsfirma – Taskey',
  description: 'Inventar für Reinigungsfirmen digital verwalten. Taskey erfasst Geräte, Reinigungsmittel und Zubehör – mit Standort und Zustandsdokumentation.',
  alternates: { canonical: 'https://www.taskeyapp.com/loesungen/inventar-verwalten-reinigungsfirma' },
};

const data: LandingPageData = {
  badge: 'Inventarverwaltung',
  headline: 'Inventar für Ihre',
  headlineHighlight: 'Reinigungsfirma',
  subheadline: 'digital verwalten.',
  heroDescription: 'Wo ist die Scheuersaugmaschine? Wie viel Reinigungsmittel ist noch da? Taskey verwaltet Ihr gesamtes Inventar digital – vom Reinigungsgerät bis zum Verbrauchsmaterial.',
  painPoints: [
    { text: 'Keine Ahnung, wo welches Gerät gerade im Einsatz ist.' },
    { text: 'Reinigungsmittel sind leer – keiner hat nachbestellt.' },
    { text: 'Geräte fallen aus, weil Wartungen vergessen wurden.' },
    { text: 'Inventar geht verloren oder wird beschädigt – ohne Dokumentation.' },
  ],
  solutionTitle: 'Inventar digital im Griff',
  solutionDescription: 'Taskey verwaltet Ihr gesamtes Equipment zentral und übersichtlich.',
  solutionSteps: [
    { title: 'Inventar erfassen', description: 'Alle Geräte und Materialien mit Details, Fotos und Standort anlegen.' },
    { title: 'Standort tracken', description: 'Immer wissen, wo welches Gerät gerade im Einsatz ist.' },
    { title: 'Wartung planen', description: 'Automatische Erinnerungen für Wartung und Nachbestellung.' },
  ],
  ctaText: 'Jetzt Inventar digitalisieren',
  featureHighlights: [
    { title: 'Geräteübersicht', description: 'Alle Geräte mit Typ, Zustand, Standort und Wartungsstatus.' },
    { title: 'Standortverfolgung', description: 'Wissen, in welchem Objekt welches Gerät eingesetzt wird.' },
    { title: 'Wartungsplanung', description: 'Wartungsintervalle hinterlegen und automatisch erinnert werden.' },
    { title: 'Bestandsverwaltung', description: 'Reinigungsmittel und Verbrauchsmaterial tracken.' },
    { title: 'Meldebestand', description: 'Automatische Warnung bei unterschrittenem Mindestbestand.' },
    { title: 'Kostenanalyse', description: 'Inventarkosten pro Objekt und Zeitraum analysieren.' },
  ],
  closingHeadline: 'Ihr Inventar – immer im Blick.',
  closingText: 'Taskey verhindert verlorenes Equipment und leere Vorräte – für reibungslosen Betrieb.',
  relatedLinks: [
      {
          href: '/loesungen/reinigungsmittel-verwaltung',
          label: 'Reinigungsmittel-Verwaltung',
          description: 'Reinigungsmittel und Material als Inventar effizient verwalten.'
      },
      {
          href: '/loesungen/objektverwaltung-gebaeudereinigung',
          label: 'Objektverwaltung',
          description: 'Inventar pro Reinigungsobjekt organisieren und Bestaende ueberwachen.'
      },
      {
          href: '/loesungen/nachkalkulation-reinigungsauftraege',
          label: 'Nachkalkulation',
          description: 'Materialkosten in die Auftragsnachkalkulation einbeziehen.'
      }
  ],
};

export default function Page() {
  return <LandingPageTemplate data={data} />;
}
