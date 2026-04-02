import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/landing/LandingPageTemplate';
import type { LandingPageData } from '@/components/landing/LandingPageTemplate';

export const metadata: Metadata = {
  title: 'Personalplanung Baufirma – Digital & übersichtlich | Taskey',
  description: 'Personalplanung für Baufirmen: Mitarbeiter auf Baustellen einteilen, Kolonnen planen, Kapazitäten überblicken. Jetzt kostenlos testen!',
  alternates: { canonical: 'https://www.taskey.de/loesungen/personalplanung-baufirma' },
};

const data: LandingPageData = {
  badge: 'Personalplanung Bau',
  headline: 'Personalplanung am Bau –',
  headlineHighlight: 'endlich digital.',
  subheadline: 'Wer ist morgen auf welcher Baustelle? Mit Taskey ist das in Sekunden klar.',
  heroDescription: 'Plane dein Personal über alle Baustellen hinweg. Taskey zeigt dir Kapazitäten, Qualifikationen und Verfügbarkeiten – auf einen Blick.',
  painPoints: [
    { text: 'Personalplanung läuft über Whiteboards und Zettel im Büro.' },
    { text: 'Morgens um 6 Uhr telefonierst du, weil keiner weiß, wohin er soll.' },
    { text: 'Bei Krankheit bricht die ganze Baustellenplanung zusammen.' },
    { text: 'Du siehst nicht, ob eine Baustelle überbesetzt oder unterbesetzt ist.' },
  ],
  solutionTitle: 'Personal planen wie ein Profi.',
  solutionDescription: 'Alle Mitarbeiter, alle Baustellen, alle Qualifikationen – in einer Ansicht.',
  solutionSteps: [
    { title: 'Übersicht schaffen', description: 'Sieh alle Mitarbeiter und Baustellen in einer Kalenderansicht – wer ist wo eingeplant?' },
    { title: 'Per Drag & Drop zuweisen', description: 'Ziehe Mitarbeiter auf Baustellen – Konflikte werden automatisch erkannt.' },
    { title: 'Sofort kommuniziert', description: 'Mitarbeiter sehen ihre Einsatzplanung in der App – Änderungen kommen in Echtzeit.' },
  ],
  ctaText: 'Personal digital planen',
  featureHighlights: [
    { title: 'Kalenderansicht', description: 'Wochen- und Monatsansicht mit allen Baustellen und Mitarbeitern.' },
    { title: 'Qualifikationen', description: 'Plane nach Fähigkeiten – wer hat welchen Schein, welche Erfahrung?' },
    { title: 'Kapazitätsplanung', description: 'Sieh auf einen Blick, wer frei ist und wer überlastet.' },
    { title: 'Abwesenheiten', description: 'Urlaub, Krankheit und Schulungen automatisch berücksichtigt.' },
    { title: 'Mobile Planung', description: 'Plane auch von unterwegs per Handy oder Tablet.' },
    { title: 'Tagesplan-Export', description: 'Drucke oder versende den Tagesplan an dein Team.' },
  ],
  closingHeadline: 'Morgens kein Chaos mehr.',
  closingText: 'Teste Taskey und erlebe, wie einfach Personalplanung am Bau sein kann.',
  relatedLinks: [
      {
          href: '/loesungen/mitarbeiter-auf-baustellen-einteilen',
          label: 'Mitarbeiter auf Baustellen einteilen',
          description: 'Kolonnen zusammenstellen und Mitarbeiter gezielt Baustellen zuordnen.'
      },
      {
          href: '/loesungen/kapazitaetsplanung-handwerk',
          label: 'Kapazitätsplanung Handwerk',
          description: 'Kapazitäten planen, Engpässe erkennen und Teams optimal auslasten.'
      },
      {
          href: '/loesungen/kolonnenplanung-bau',
          label: 'Kolonnenplanung Bau',
          description: 'Kolonnen für verschiedene Baustellen effizient zusammenstellen.'
      }
  ],
};

export default function Page() {
  return <LandingPageTemplate data={data} />;
}
