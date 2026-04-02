import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/landing/LandingPageTemplate';
import type { LandingPageData } from '@/components/landing/LandingPageTemplate';

export const metadata: Metadata = {
  title: 'Fahrzeugplanung Handwerksbetrieb – Taskey',
  description: 'Fahrzeugplanung für Handwerksbetriebe digitalisieren. Taskey verwaltet Ihren Fuhrpark und optimiert die Fahrzeugverteilung.',
  alternates: { canonical: 'https://www.taskey.de/loesungen/fahrzeugplanung-handwerksbetrieb' },
};

const data: LandingPageData = {
  badge: 'Fahrzeugplanung',
  headline: 'Fahrzeugplanung für',
  headlineHighlight: 'Handwerksbetriebe',
  subheadline: 'Fuhrpark effizient einsetzen und verwalten.',
  heroDescription: 'Welches Fahrzeug steht morgen zur Verfügung? Taskey gibt Ihnen den Überblick über Ihren Fuhrpark und optimiert die Fahrzeugverteilung auf Ihre Teams.',
  painPoints: [
    { text: 'Keine Übersicht, welches Fahrzeug wo im Einsatz ist.' },
    { text: 'Schlüssel suchen, Fahrzeuge umparken – tägliches Chaos.' },
    { text: 'TÜV-Termine und Wartungen werden vergessen.' },
    { text: 'Unklare Kostenverteilung pro Fahrzeug und Projekt.' },
  ],
  solutionTitle: 'Fuhrpark digital verwalten',
  solutionDescription: 'Taskey bringt Ordnung in Ihre Fahrzeugverwaltung.',
  solutionSteps: [
    { title: 'Fahrzeuge anlegen', description: 'Alle Fahrzeuge mit Details, Dokumenten und Wartungsintervallen erfassen.' },
    { title: 'Einsätze planen', description: 'Fahrzeuge den Teams und Baustellen zuweisen.' },
    { title: 'Wartung überwachen', description: 'Automatische Erinnerungen für TÜV, Inspektion und Reifenwechsel.' },
  ],
  ctaText: 'Jetzt Fuhrpark digitalisieren',
  featureHighlights: [
    { title: 'Fahrzeugübersicht', description: 'Alle Fahrzeuge mit Status, Standort und aktueller Zuordnung.' },
    { title: 'Einsatzplanung', description: 'Fahrzeuge den richtigen Teams und Projekten zuweisen.' },
    { title: 'Wartungsmanagement', description: 'TÜV, Inspektion und Reparaturen planen und dokumentieren.' },
    { title: 'Tankkosten', description: 'Kraftstoffverbrauch und -kosten pro Fahrzeug tracken.' },
    { title: 'Kostenanalyse', description: 'Gesamtkosten pro Fahrzeug für bessere Wirtschaftlichkeitsentscheidungen.' },
    { title: 'Mobile Übersicht', description: 'Fahrzeugstatus und Zuordnung auch unterwegs einsehen.' },
  ],
  closingHeadline: 'Ihr Fuhrpark – endlich organisiert.',
  closingText: 'Taskey macht Fahrzeugplanung einfach und verhindert teure Ausfälle.',
  relatedLinks: [
      {
          href: '/loesungen/ressourcenplanung-baufirma',
          label: 'Ressourcenplanung',
          description: 'Fahrzeuge als Teil der gesamten Ressourcenplanung.'
      },
      {
          href: '/loesungen/werkzeugverwaltung-handwerk',
          label: 'Werkzeugverwaltung',
          description: 'Nicht nur Fahrzeuge – auch Werkzeuge und Geräte verwalten.'
      },
      {
          href: '/loesungen/disposition-handwerk-software',
          label: 'Disposition',
          description: 'Fahrzeuge zusammen mit Teams und Aufträgen disponieren.'
      }
  ],
};

export default function Page() {
  return <LandingPageTemplate data={data} />;
}
