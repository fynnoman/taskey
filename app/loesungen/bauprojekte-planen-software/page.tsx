import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/landing/LandingPageTemplate';
import type { LandingPageData } from '@/components/landing/LandingPageTemplate';

export const metadata: Metadata = {
  title: 'Bauprojekte planen Software | Taskey',
  description: 'Software zur Planung von Bauprojekten: Aufträge, Mitarbeiter, Material und Zeitpläne digital managen. Für kleine und mittlere Baufirmen. Jetzt testen!',
  alternates: { canonical: 'https://www.taskeyapp.com/loesungen/bauprojekte-planen-software' },
};

const data: LandingPageData = {
  badge: 'Bauprojekte planen',
  headline: 'Bauprojekte planen –',
  headlineHighlight: 'digital statt Whiteboard.',
  subheadline: 'Alle Baustellen, alle Gewerke, alle Termine – in einer Software.',
  heroDescription: 'Taskey hilft dir, Bauprojekte von Anfang bis Ende zu planen und zu steuern. Personal, Material, Zeitpläne – alles verbunden, alles aktuell.',
  painPoints: [
    { text: 'Bauprojekte werden auf Whiteboards und in Excel geplant – Änderungen gehen unter.' },
    { text: 'Gewerke sind nicht aufeinander abgestimmt – Baustellen stehen still.' },
    { text: 'Änderungen im Bauablauf erreichen das Team zu spät.' },
    { text: 'Budget und Zeitplan laufen auseinander – ohne dass du es merkst.' },
  ],
  solutionTitle: 'Bauprojekte steuern wie ein Profi.',
  solutionDescription: 'Plane, überwache und steuere alle Bauprojekte – von einer zentralen Stelle.',
  solutionSteps: [
    { title: 'Projekt anlegen', description: 'Definiere Phasen, Meilensteine und Gewerke – visuell und übersichtlich.' },
    { title: 'Ressourcen planen', description: 'Weise Mitarbeiter, Maschinen und Material den Phasen zu.' },
    { title: 'Fortschritt tracken', description: 'Verfolge den Baufortschritt in Echtzeit – Budget und Zeitplan immer im Blick.' },
  ],
  ctaText: 'Bauprojekte digital planen',
  featureHighlights: [
    { title: 'Projektphasen', description: 'Unterteile Projekte in Phasen mit eigenen Meilensteinen.' },
    { title: 'Ressourcenplanung', description: 'Personal und Maschinen projektübergreifend planen.' },
    { title: 'Budget-Tracking', description: 'Geplante vs. tatsächliche Kosten in Echtzeit.' },
    { title: 'Mobile Updates', description: 'Baufortschritt direkt von der Baustelle melden.' },
    { title: 'Baudokumentation', description: 'Fotos und Berichte direkt aus dem Projekt heraus.' },
    { title: 'Checklisten', description: 'Qualitätschecklisten pro Phase und Gewerk.' },
  ],
  closingHeadline: 'Bauprojekte. Geplant. Gesteuert.',
  closingText: 'Teste Taskey 14 Tage kostenlos und bring Ordnung in deine Bauprojekte.',
  relatedLinks: [
      {
          href: '/loesungen/projektmanagement-kleine-baufirma',
          label: 'Projektmanagement Baufirma',
          description: 'Bauprojekte von Anfang bis Ende planen, steuern und dokumentieren.'
      },
      {
          href: '/loesungen/baudokumentation-software',
          label: 'Baudokumentation',
          description: 'Alles dokumentieren: Fotos, Protokolle, Mängel – digital und zentral.'
      },
      {
          href: '/loesungen/ressourcenplanung-baufirma',
          label: 'Ressourcenplanung',
          description: 'Material, Maschinen und Mitarbeiter optimal einsetzen.'
      }
  ],
};

export default function Page() {
  return <LandingPageTemplate data={data} />;
}
