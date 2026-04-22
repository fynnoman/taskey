import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/landing/LandingPageTemplate';
import type { LandingPageData } from '@/components/landing/LandingPageTemplate';

export const metadata: Metadata = {
  title: 'Baustellen koordinieren Tool | Taskey',
  description: 'Tool zur Koordination von Baustellen: Personal, Material und Termine über mehrere Baustellen hinweg steuern. Jetzt kostenlos testen!',
  alternates: { canonical: 'https://www.taskeyapp.com/loesungen/baustellen-koordinieren-tool' },
};

const data: LandingPageData = {
  badge: 'Baustellen koordinieren',
  headline: 'Mehrere Baustellen –',
  headlineHighlight: 'ein Tool.',
  subheadline: 'Koordiniere Personal, Material und Termine über alle Baustellen hinweg.',
  heroDescription: 'Je mehr Baustellen, desto mehr Chaos? Nicht mit Taskey. Koordiniere alles zentral – und behalte den Überblick, auch wenn es hektisch wird.',
  painPoints: [
    { text: 'Bei 5+ Baustellen gleichzeitig verlierst du den Überblick.' },
    { text: 'Mitarbeiter werden auf die falsche Baustelle geschickt.' },
    { text: 'Material steht auf Baustelle A – gebraucht wird es auf Baustelle B.' },
    { text: 'Du verbringst den halben Tag am Telefon, um zu koordinieren.' },
  ],
  solutionTitle: 'Alle Baustellen. Eine Zentrale.',
  solutionDescription: 'Taskey zeigt dir live, was auf jeder Baustelle passiert.',
  solutionSteps: [
    { title: 'Alle Baustellen im Blick', description: 'Sieh alle Baustellen auf einer Karte – mit Personal, Status und nächsten Schritten.' },
    { title: 'Personal verteilen', description: 'Verschiebe Mitarbeiter zwischen Baustellen – Konflikte werden automatisch erkannt.' },
    { title: 'Team informieren', description: 'Änderungen kommen sofort auf das Handy deiner Mitarbeiter.' },
  ],
  ctaText: 'Baustellen koordinieren',
  featureHighlights: [
    { title: 'Karten-Ansicht', description: 'Alle Baustellen auf einer interaktiven Karte.' },
    { title: 'Personal-Übersicht', description: 'Wer ist wo eingeplant? Auf einen Blick.' },
    { title: 'Status pro Baustelle', description: 'Fortschritt, offene Aufgaben und Probleme je Baustelle.' },
    { title: 'Material-Tracking', description: 'Welches Material ist auf welcher Baustelle?' },
    { title: 'Echtzeit-Updates', description: 'Änderungen werden sofort an alle Beteiligten kommuniziert.' },
    { title: 'Terminplanung', description: 'Termine baustellenübergreifend planen und abstimmen.' },
  ],
  closingHeadline: 'Koordination statt Chaos.',
  closingText: 'Teste Taskey und koordiniere deine Baustellen zentral.',
  relatedLinks: [
      {
          href: '/loesungen/personalplanung-baufirma',
          label: 'Personalplanung Baufirma',
          description: 'Mitarbeiter auf Baustellen verteilen und Kapazitäten optimal nutzen.'
      },
      {
          href: '/loesungen/mitarbeiter-auf-baustellen-einteilen',
          label: 'Mitarbeiter einteilen',
          description: 'Teams flexibel auf verschiedene Baustellen einteilen.'
      },
      {
          href: '/loesungen/zeiterfassung-baustelle',
          label: 'Zeiterfassung Baustelle',
          description: 'Arbeitszeiten pro Baustelle automatisch erfassen und zuordnen.'
      }
  ],
};

export default function Page() {
  return <LandingPageTemplate data={data} />;
}
