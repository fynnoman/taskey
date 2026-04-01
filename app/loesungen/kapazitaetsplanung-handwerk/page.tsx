import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/landing/LandingPageTemplate';
import type { LandingPageData } from '@/components/landing/LandingPageTemplate';

export const metadata: Metadata = {
  title: 'Kapazitätsplanung Handwerk – Taskey',
  description: 'Kapazitätsplanung im Handwerk digitalisieren. Taskey zeigt freie Kapazitäten und verhindert Über- oder Unterlastung.',
  alternates: { canonical: 'https://www.taskey.de/loesungen/kapazitaetsplanung-handwerk' },
};

const data: LandingPageData = {
  badge: 'Kapazitätsplanung',
  headline: 'Kapazitätsplanung im',
  headlineHighlight: 'Handwerk',
  subheadline: 'Immer wissen, was noch reinpasst.',
  heroDescription: 'Können Sie den neuen Auftrag annehmen? Taskey zeigt Ihnen in Echtzeit, wie Ihre Kapazitäten ausgelastet sind – und wo noch Platz ist.',
  painPoints: [
    { icon: '📊', text: 'Keine Ahnung, ob noch Kapazitäten für neue Aufträge vorhanden sind.' },
    { icon: '😓', text: 'Überlastung führt zu Qualitätsproblemen und unzufriedenen Kunden.' },
    { icon: '💸', text: 'Leerlauf kostet Geld – Mitarbeiter ohne Auftrag sind teuer.' },
    { icon: '📅', text: 'Keine Vorausplanung – alles wird kurzfristig entschieden.' },
  ],
  solutionTitle: 'Kapazitäten in Echtzeit überblicken',
  solutionDescription: 'Taskey zeigt Ihnen genau, wie ausgelastet Ihr Team wirklich ist.',
  solutionSteps: [
    { icon: '📊', title: 'Auslastung prüfen', description: 'Kapazitäten pro Mitarbeiter und Team in Echtzeit sehen.' },
    { icon: '📅', title: 'Vorausplanen', description: 'Geplante Projekte und ihre Ressourcenbedarfe in die Zukunft planen.' },
    { icon: '✅', title: 'Entscheidungen treffen', description: 'Auf Datenbasis entscheiden, ob ein neuer Auftrag angenommen werden kann.' },
  ],
  ctaText: 'Jetzt Kapazitäten planen',
  featureHighlights: [
    { icon: '📊', title: 'Echtzeit-Auslastung', description: 'Aktuelle Auslastung aller Mitarbeiter und Teams auf einen Blick.' },
    { icon: '📅', title: 'Zukunftsplanung', description: 'Geplante Projekte einbeziehen für vorausschauende Planung.' },
    { icon: '⚠️', title: 'Überlastungs-Warnung', description: 'Automatisch gewarnt werden, wenn Kapazitätsgrenzen erreicht werden.' },
    { icon: '📈', title: 'Auslastungs-Historie', description: 'Vergangene Auslastung analysieren für bessere Personalplanung.' },
    { icon: '🎯', title: 'Zielauslastung', description: 'Optimale Auslastung definieren und als Ziel verfolgen.' },
    { icon: '📋', title: 'Auftragspipeline', description: 'Geplante und angebotene Aufträge in die Kapazitätsplanung einbeziehen.' },
  ],
  closingHeadline: 'Nie wieder über- oder unterbelastet.',
  closingText: 'Taskey gibt Ihnen den Überblick über Ihre Kapazitäten – für bessere Entscheidungen und zufriedenere Teams.',
  relatedLinks: [
      {
          href: '/loesungen/personalplanung-baufirma',
          label: 'Personalplanung',
          description: 'Personalkapazitäten als Kernstück der Gesamtplanung.'
      },
      {
          href: '/loesungen/disposition-handwerk-software',
          label: 'Disposition',
          description: 'Kapazitäten in die tägliche Disposition einfließen lassen.'
      },
      {
          href: '/loesungen/ressourcenplanung-baufirma',
          label: 'Ressourcenplanung',
          description: 'Nicht nur Personal – auch Material und Maschinen einplanen.'
      }
  ],
};

export default function Page() {
  return <LandingPageTemplate data={data} />;
}
