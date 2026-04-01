import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/landing/LandingPageTemplate';
import type { LandingPageData } from '@/components/landing/LandingPageTemplate';

export const metadata: Metadata = {
  title: 'Reinigungspläne digital erstellen – Taskey',
  description: 'Reinigungspläne digital erstellen und verteilen. Taskey definiert Leistungsverzeichnisse pro Objekt – klar, messbar und nachvollziehbar.',
  alternates: { canonical: 'https://www.taskey.de/loesungen/reinigungsplaene-digital-erstellen' },
};

const data: LandingPageData = {
  badge: 'Reinigungspläne',
  headline: 'Reinigungspläne',
  headlineHighlight: 'digital erstellen',
  subheadline: 'Klar definierte Leistungen für jedes Objekt.',
  heroDescription: 'Was soll wann wie gereinigt werden? Taskey erstellt digitale Reinigungspläne mit klaren Leistungsverzeichnissen – für gleichbleibende Qualität in jedem Objekt.',
  painPoints: [
    { icon: '📋', text: 'Reinigungspläne existieren nur als Word-Dokument oder gar nicht.' },
    { icon: '❓', text: 'Reinigungskräfte wissen nicht genau, was in welchem Raum zu tun ist.' },
    { icon: '📊', text: 'Unterschiedliche Qualität je nach Mitarbeiter und Tagesform.' },
    { icon: '🔄', text: 'Änderungen an Plänen kommen nicht bei allen an.' },
  ],
  solutionTitle: 'Reinigungspläne für jedes Objekt',
  solutionDescription: 'Taskey erstellt klare Reinigungspläne, die jeder Mitarbeiter auf dem Smartphone sieht.',
  solutionSteps: [
    { icon: '📋', title: 'Plan erstellen', description: 'Räume, Aufgaben und Häufigkeiten pro Objekt definieren.' },
    { icon: '📱', title: 'An Teams verteilen', description: 'Reinigungskräfte sehen ihren Plan auf dem Smartphone.' },
    { icon: '✅', title: 'Erledigung tracken', description: 'Sehen, welche Aufgaben erledigt wurden und welche nicht.' },
  ],
  ctaText: 'Jetzt Reinigungspläne digitalisieren',
  featureHighlights: [
    { icon: '📋', title: 'Leistungsverzeichnis', description: 'Detaillierte Aufgaben pro Raum und Reinigungsintervall.' },
    { icon: '📅', title: 'Häufigkeiten', description: 'Täglich, wöchentlich, monatlich – für jede Aufgabe definiert.' },
    { icon: '📱', title: 'Mobile Anzeige', description: 'Reinigungskräfte sehen ihren Plan auf dem Smartphone.' },
    { icon: '✅', title: 'Erledigungsstatus', description: 'In Echtzeit sehen, was erledigt wurde.' },
    { icon: '🔄', title: 'Einfach anpassen', description: 'Pläne ändern und sofort an alle Betroffenen verteilen.' },
    { icon: '📊', title: 'Qualitätsnachweis', description: 'Dokumentierte Erledigung als Qualitätsnachweis für den Kunden.' },
  ],
  closingHeadline: 'Klare Pläne. Konstante Qualität.',
  closingText: 'Taskey macht Ihre Reinigungspläne zum Qualitätsgaranten.',
};

export default function Page() {
  return <LandingPageTemplate data={data} />;
}
