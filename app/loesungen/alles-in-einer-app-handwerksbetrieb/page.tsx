import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/landing/LandingPageTemplate';
import type { LandingPageData } from '@/components/landing/LandingPageTemplate';

export const metadata: Metadata = {
  title: 'Alles in einer App Handwerksbetrieb – Taskey',
  description: 'Alles in einer App für Ihren Handwerksbetrieb. Taskey vereint Zeiterfassung, Aufträge, Dokumentation und Abrechnung in einer einzigen Plattform.',
  alternates: { canonical: 'https://www.taskey.de/loesungen/alles-in-einer-app-handwerksbetrieb' },
};

const data: LandingPageData = {
  badge: 'All-in-One',
  headline: 'Alles in einer App für Ihren',
  headlineHighlight: 'Handwerksbetrieb',
  subheadline: 'Eine App statt zehn verschiedene Tools.',
  heroDescription: 'Zeiterfassung hier, Aufträge dort, Rechnungen woanders – Schluss mit Tool-Chaos. Taskey vereint alles, was Ihr Handwerksbetrieb braucht, in einer einzigen App.',
  painPoints: [
    { text: 'Fünf verschiedene Apps für fünf verschiedene Aufgaben – keiner blickt durch.' },
    { text: 'Mehrere Abo-Gebühren für Tools, die nicht zusammenarbeiten.' },
    { text: 'Daten manuell zwischen verschiedenen Systemen übertragen.' },
    { text: 'Jedes Tool muss einzeln gelernt und geschult werden.' },
  ],
  solutionTitle: 'Eine App für alles',
  solutionDescription: 'Taskey ersetzt Ihre Sammlung von Einzeltools durch eine integrierte Plattform.',
  solutionSteps: [
    { title: 'Eine App installieren', description: 'Taskey deckt Zeiterfassung, Aufträge, Dokumentation und mehr ab.' },
    { title: 'Alles verbunden', description: 'Zeiten fließen in Aufträge, Aufträge in Rechnungen – alles automatisch.' },
    { title: 'Einfach loslegen', description: 'Eine App lernen, eine App nutzen – für das ganze Team.' },
  ],
  ctaText: 'Jetzt alles in einer App',
  featureHighlights: [
    { title: 'Zeiterfassung', description: 'Arbeitszeiten per App, NFC oder GPS erfassen.' },
    { title: 'Auftragsverwaltung', description: 'Aufträge erstellen, zuweisen und nachverfolgen.' },
    { title: 'Dokumentation', description: 'Fotos, Berichte und Protokolle direkt in der App.' },
    { title: 'Rechnungsstellung', description: 'Aus erfassten Leistungen Rechnungen generieren.' },
    { title: 'Personalplanung', description: 'Teams einteilen und Einsätze koordinieren.' },
    { title: 'Kommunikation', description: 'Team-Chat und Benachrichtigungen – alles in Taskey.' },
  ],
  closingHeadline: 'Eine App. Alles drin.',
  closingText: 'Taskey ist die eine App, die Ihr Handwerksbetrieb wirklich braucht.',
  relatedLinks: [
      {
          href: '/loesungen/handwerk-software-einfach',
          label: 'Einfache Handwerk-Software',
          description: 'Eine App, die so einfach ist, dass jeder sie sofort versteht.'
      },
      {
          href: '/loesungen/digitalisierung-handwerksbetrieb',
          label: 'Digitalisierung Handwerk',
          description: 'Mit einer App den gesamten Betrieb digitalisieren.'
      },
      {
          href: '/loesungen/bueroarbeit-reduzieren-handwerk',
          label: 'Büroarbeit reduzieren',
          description: 'Eine App für alles bedeutet: deutlich weniger Büroarbeit.'
      }
  ],
};

export default function Page() {
  return <LandingPageTemplate data={data} />;
}
