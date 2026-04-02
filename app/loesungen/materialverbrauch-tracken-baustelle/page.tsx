import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/landing/LandingPageTemplate';
import type { LandingPageData } from '@/components/landing/LandingPageTemplate';

export const metadata: Metadata = {
  title: 'Materialverbrauch tracken Baustelle – Taskey',
  description: 'Materialverbrauch auf der Baustelle digital tracken. Taskey erfasst Verbräuche, erkennt Abweichungen und optimiert Ihre Materialplanung.',
  alternates: { canonical: 'https://www.taskey.de/loesungen/materialverbrauch-tracken-baustelle' },
};

const data: LandingPageData = {
  badge: 'Materialverbrauch',
  headline: 'Materialverbrauch auf der',
  headlineHighlight: 'Baustelle tracken',
  subheadline: 'Wissen, wo Ihr Material bleibt.',
  heroDescription: 'Wo sind die 50 Säcke Zement geblieben? Taskey trackt den Materialverbrauch auf jeder Baustelle – für volle Transparenz und weniger Verschwendung.',
  painPoints: [
    { text: 'Kein Überblick, wie viel Material auf welcher Baustelle verbraucht wird.' },
    { text: 'Materialverschwendung und Schwund kosten bares Geld.' },
    { text: 'Nachkalkulation unmöglich, weil Verbräuche nicht dokumentiert sind.' },
    { text: 'Material fehlt, weil der Verbrauch unterschätzt wurde.' },
  ],
  solutionTitle: 'Materialverbrauch digital erfassen',
  solutionDescription: 'Taskey macht Materialverbräuche transparent und nachvollziehbar.',
  solutionSteps: [
    { title: 'Verbrauch erfassen', description: 'Mitarbeiter tragen Materialverbräuche direkt per App ein.' },
    { title: 'Auswerten', description: 'Verbrauch pro Baustelle, Gewerk und Material analysieren.' },
    { title: 'Optimieren', description: 'Abweichungen erkennen und Materialplanung verbessern.' },
  ],
  ctaText: 'Jetzt Materialverbrauch tracken',
  featureHighlights: [
    { title: 'Mobile Erfassung', description: 'Materialverbrauch direkt auf der Baustelle per App erfassen.' },
    { title: 'Verbrauchsanalyse', description: 'Soll- vs. Ist-Verbrauch pro Baustelle und Material.' },
    { title: 'Abweichungs-Alarm', description: 'Automatisch gewarnt werden bei überhöhtem Verbrauch.' },
    { title: 'Projektzuordnung', description: 'Jeder Verbrauch wird dem richtigen Projekt zugeordnet.' },
    { title: 'Kostenberechnung', description: 'Materialkosten pro Projekt automatisch berechnen.' },
    { title: 'Erfahrungswerte', description: 'Verbrauchsdaten für bessere zukünftige Kalkulationen nutzen.' },
  ],
  closingHeadline: 'Jedes Material zählt.',
  closingText: 'Taskey macht Ihren Materialverbrauch transparent – für weniger Verschwendung und bessere Kalkulationen.',
  relatedLinks: [
      {
          href: '/loesungen/materialverwaltung-handwerk',
          label: 'Materialverwaltung',
          description: 'Material zentral verwalten und Verbräuche pro Baustelle auswerten.'
      },
      {
          href: '/loesungen/materialliste-baustelle-erstellen',
          label: 'Materiallisten erstellen',
          description: 'Vor Baubeginn die benötigten Materialien planen und listen.'
      },
      {
          href: '/loesungen/nachkalkulation-handwerk',
          label: 'Nachkalkulation',
          description: 'Materialkosten pro Auftrag auswerten – für bessere Kalkulationen.'
      }
  ],
};

export default function Page() {
  return <LandingPageTemplate data={data} />;
}
