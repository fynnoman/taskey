import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/landing/LandingPageTemplate';
import type { LandingPageData } from '@/components/landing/LandingPageTemplate';

export const metadata: Metadata = {
  title: 'Reinigungspläne digital erstellen – Taskey',
  description: 'Reinigungspläne digital erstellen und verteilen. Taskey definiert Leistungsverzeichnisse pro Objekt – klar, messbar und nachvollziehbar.',
  alternates: { canonical: 'https://www.taskeyapp.com/loesungen/reinigungsplaene-digital-erstellen' },
};

const data: LandingPageData = {
  badge: 'Reinigungspläne',
  headline: 'Reinigungspläne',
  headlineHighlight: 'digital erstellen',
  subheadline: 'Klar definierte Leistungen für jedes Objekt.',
  heroDescription: 'Was soll wann wie gereinigt werden? Taskey erstellt digitale Reinigungspläne mit klaren Leistungsverzeichnissen – für gleichbleibende Qualität in jedem Objekt.',
  painPoints: [
    { text: 'Reinigungspläne existieren nur als Word-Dokument oder gar nicht.' },
    { text: 'Reinigungskräfte wissen nicht genau, was in welchem Raum zu tun ist.' },
    { text: 'Unterschiedliche Qualität je nach Mitarbeiter und Tagesform.' },
    { text: 'Änderungen an Plänen kommen nicht bei allen an.' },
  ],
  solutionTitle: 'Reinigungspläne für jedes Objekt',
  solutionDescription: 'Taskey erstellt klare Reinigungspläne, die jeder Mitarbeiter auf dem Smartphone sieht.',
  solutionSteps: [
    { title: 'Plan erstellen', description: 'Räume, Aufgaben und Häufigkeiten pro Objekt definieren.' },
    { title: 'An Teams verteilen', description: 'Reinigungskräfte sehen ihren Plan auf dem Smartphone.' },
    { title: 'Erledigung tracken', description: 'Sehen, welche Aufgaben erledigt wurden und welche nicht.' },
  ],
  ctaText: 'Jetzt Reinigungspläne digitalisieren',
  featureHighlights: [
    { title: 'Leistungsverzeichnis', description: 'Detaillierte Aufgaben pro Raum und Reinigungsintervall.' },
    { title: 'Häufigkeiten', description: 'Täglich, wöchentlich, monatlich – für jede Aufgabe definiert.' },
    { title: 'Mobile Anzeige', description: 'Reinigungskräfte sehen ihren Plan auf dem Smartphone.' },
    { title: 'Erledigungsstatus', description: 'In Echtzeit sehen, was erledigt wurde.' },
    { title: 'Einfach anpassen', description: 'Pläne ändern und sofort an alle Betroffenen verteilen.' },
    { title: 'Qualitätsnachweis', description: 'Dokumentierte Erledigung als Qualitätsnachweis für den Kunden.' },
  ],
  closingHeadline: 'Klare Pläne. Konstante Qualität.',
  closingText: 'Taskey macht Ihre Reinigungspläne zum Qualitätsgaranten.',
  relatedLinks: [
      {
          href: '/loesungen/checklisten-reinigung-digital',
          label: 'Checklisten Reinigung',
          description: 'Reinigungspläne mit Checklisten für jeden Raum und jedes Objekt.'
      },
      {
          href: '/loesungen/einsatzplanung-gebaeudereinigung',
          label: 'Einsatzplanung',
          description: 'Reinigungspläne direkt mit der Einsatzplanung verknüpfen.'
      },
      {
          href: '/loesungen/qualitaetskontrolle-gebaeudereinigung',
          label: 'Qualitätskontrolle',
          description: 'Reinigungspläne als Basis für systematische Qualitätskontrollen.'
      }
  ],
};

export default function Page() {
  return <LandingPageTemplate data={data} />;
}
