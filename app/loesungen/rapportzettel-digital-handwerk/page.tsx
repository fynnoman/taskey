import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/landing/LandingPageTemplate';
import type { LandingPageData } from '@/components/landing/LandingPageTemplate';

export const metadata: Metadata = {
  title: 'Rapportzettel digital Handwerk | Taskey',
  description: 'Digitale Rapportzettel für Handwerksbetriebe: Arbeitszeiten, Material und Leistungen mobil erfassen. Mit Unterschrift. Jetzt testen!',
  alternates: { canonical: 'https://www.taskey.de/loesungen/rapportzettel-digital-handwerk' },
};

const data: LandingPageData = {
  badge: 'Rapportzettel digital',
  headline: 'Rapportzettel –',
  headlineHighlight: 'digital statt Durchschlag.',
  subheadline: 'Arbeitszeiten, Material und Leistungen mobil erfassen – mit digitaler Unterschrift.',
  heroDescription: 'Taskey ersetzt den Papier-Rapportzettel: Stunden, Material und ausgeführte Arbeiten werden direkt auf dem Handy erfasst. Der Kunde unterschreibt digital.',
  painPoints: [
    { text: 'Rapportzettel sind unleserlich, gehen verloren oder kommen zu spät.' },
    { text: 'Infos müssen vom Zettel ins System abgetippt werden – fehleranfällig.' },
    { text: 'Kundenunterschriften fehlen – Streitigkeiten vorprogrammiert.' },
    { text: 'Papierstapel im Büro – kein schneller Zugriff auf alte Rapporte.' },
  ],
  solutionTitle: 'Rapport ausfüllen. Unterschreiben. Fertig.',
  solutionDescription: 'Alles digital auf dem Handy – mit Kundenunterschrift und sofortigem PDF.',
  solutionSteps: [
    { title: 'Mobil ausfüllen', description: 'Stunden, Material und Leistungen direkt auf dem Handy erfassen – am Einsatzort.' },
    { title: 'Kunde unterschreibt', description: 'Der Kunde unterschreibt direkt auf dem Display – rechtssicher.' },
    { title: 'PDF sofort', description: 'Ein fertiger Rapportzettel als PDF – sofort per Mail an Büro und Kunden.' },
  ],
  ctaText: 'Rapportzettel digitalisieren',
  featureHighlights: [
    { title: 'Mobile Erfassung', description: 'Rapport direkt am Einsatzort auf dem Handy ausfüllen.' },
    { title: 'Digitale Unterschrift', description: 'Kunden unterschreiben auf dem Display.' },
    { title: 'Sofort-PDF', description: 'PDF wird automatisch generiert und archiviert.' },
    { title: 'Auto-Versand', description: 'PDF geht automatisch an Büro und Kunde.' },
    { title: 'In Abrechnung', description: 'Rapportdaten fließen direkt in die Rechnungsstellung.' },
    { title: 'Archiv', description: 'Alle Rapporte digital gespeichert und durchsuchbar.' },
  ],
  closingHeadline: 'Rapport. Digital. Unterschrieben.',
  closingText: 'Starte jetzt und verabschiede dich vom Papier-Rapportzettel.',
  relatedLinks: [
      {
          href: '/loesungen/stundennachweise-digital',
          label: 'Stundennachweise digital',
          description: 'Nicht nur Rapporte – auch Stundennachweise automatisch generieren.'
      },
      {
          href: '/loesungen/zeiterfassung-handwerk',
          label: 'Zeiterfassung Handwerk',
          description: 'Arbeitszeiten als Teil des digitalen Rapports automatisch erfassen.'
      },
      {
          href: '/loesungen/fotos-baustelle-dokumentieren-app',
          label: 'Fotos dokumentieren',
          description: 'Rapportzettel mit Fotos ergänzen – direkt aus der App.'
      }
  ],
};

export default function Page() {
  return <LandingPageTemplate data={data} />;
}
