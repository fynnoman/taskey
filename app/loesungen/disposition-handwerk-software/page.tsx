import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/landing/LandingPageTemplate';
import type { LandingPageData } from '@/components/landing/LandingPageTemplate';

export const metadata: Metadata = {
  title: 'Disposition Handwerk Software | Taskey',
  description: 'Dispositions-Software für Handwerksbetriebe: Mitarbeiter, Fahrzeuge und Werkzeuge optimal einteilen. Digital, übersichtlich, in Echtzeit.',
  alternates: { canonical: 'https://www.taskey.de/loesungen/disposition-handwerk-software' },
};

const data: LandingPageData = {
  badge: 'Disposition Handwerk',
  headline: 'Disposition –',
  headlineHighlight: 'digital statt Whiteboard.',
  subheadline: 'Wer fährt wohin, mit welchem Fahrzeug, mit welchem Werkzeug? Alles auf einen Blick.',
  heroDescription: 'Taskey digitalisiert deine Disposition: Plane Mitarbeiter, Fahrzeuge und Maschinen auf Aufträge – visuell, konfliktfrei und in Echtzeit.',
  painPoints: [
    { icon: '📋', text: 'Die Disposition läuft über ein Whiteboard im Büro – unterwegs unsichtbar.' },
    { icon: '🚗', text: 'Fahrzeuge und Werkzeuge werden doppelt verplant.' },
    { icon: '📞', text: 'Mitarbeiter rufen morgens an: Wohin soll ich? Was brauche ich?' },
    { icon: '🔄', text: 'Bei Ausfall bricht die gesamte Tagesplanung zusammen.' },
  ],
  solutionTitle: 'Dein digitales Dispositions-Board.',
  solutionDescription: 'Alle Ressourcen, alle Aufträge – visuell geplant und automatisch kommuniziert.',
  solutionSteps: [
    { icon: '📋', title: 'Aufträge & Ressourcen', description: 'Sieh alle offenen Aufträge und verfügbaren Ressourcen in einer Ansicht.' },
    { icon: '🖱️', title: 'Per Drag & Drop planen', description: 'Ziehe Mitarbeiter, Fahrzeuge und Werkzeuge auf Aufträge – Konflikte werden erkannt.' },
    { icon: '📱', title: 'Automatisch informiert', description: 'Jeder sieht seinen Plan in der App – Änderungen kommen in Echtzeit.' },
  ],
  ctaText: 'Disposition digitalisieren',
  featureHighlights: [
    { icon: '📊', title: 'Visuelle Planung', description: 'Übersichtliches Board mit allen Ressourcen und Aufträgen.' },
    { icon: '⚠️', title: 'Konflikterkennung', description: 'Automatische Warnung bei Doppelbelegungen.' },
    { icon: '🚗', title: 'Fuhrpark-Planung', description: 'Fahrzeuge auf Aufträge und Mitarbeiter verplanen.' },
    { icon: '🔧', title: 'Werkzeug-Disposition', description: 'Maschinen und Werkzeuge den Einsätzen zuweisen.' },
    { icon: '📱', title: 'Mobile Einsicht', description: 'Mitarbeiter sehen ihren Einsatzplan in der App.' },
    { icon: '🔄', title: 'Schnelle Umplanung', description: 'Bei Ausfall in Sekunden umplanen und alle informieren.' },
  ],
  closingHeadline: 'Disposition ohne Anrufe.',
  closingText: 'Teste Taskey und erlebe, wie entspannt Disposition sein kann.',
  relatedLinks: [
      {
          href: '/loesungen/terminplanung-handwerker',
          label: 'Terminplanung',
          description: 'Disponierte Aufträge terminieren und Teams zuordnen.'
      },
      {
          href: '/loesungen/einsatzplanung-monteure',
          label: 'Einsatzplanung Monteure',
          description: 'Monteure gezielt auf Einsätze disponieren.'
      },
      {
          href: '/loesungen/wochenplan-handwerker-erstellen',
          label: 'Wochenplan erstellen',
          description: 'Aus der Disposition fertige Wochenpläne generieren.'
      }
  ],
};

export default function Page() {
  return <LandingPageTemplate data={data} />;
}
