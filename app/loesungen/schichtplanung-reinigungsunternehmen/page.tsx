import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/landing/LandingPageTemplate';
import type { LandingPageData } from '@/components/landing/LandingPageTemplate';

export const metadata: Metadata = {
  title: 'Schichtplanung Reinigungsunternehmen | Taskey',
  description: 'Schichtplanung für Reinigungsunternehmen: Objekte zuweisen, Schichten planen, Vertretungen managen. Digital & einfach. Jetzt testen!',
  alternates: { canonical: 'https://www.taskey.de/loesungen/schichtplanung-reinigungsunternehmen' },
};

const data: LandingPageData = {
  badge: 'Schichtplanung Reinigung',
  headline: 'Schichtplanung für Reinigung –',
  headlineHighlight: 'ohne Excel-Chaos.',
  subheadline: 'Plane Schichten, weise Objekte zu und manage Vertretungen – alles in einer App.',
  heroDescription: 'Taskey macht Schichtplanung im Reinigungsgewerbe einfach: Drag & Drop, automatische Benachrichtigungen, Konflikterkennung.',
  painPoints: [
    { icon: '📊', text: 'Schichtpläne in Excel sind unübersichtlich und fehleranfällig.' },
    { icon: '📞', text: 'Bei Krankheit musst du alle abtelefonieren, um Ersatz zu finden.' },
    { icon: '🔄', text: 'Änderungen erreichen die Reinigungskräfte nicht rechtzeitig.' },
    { icon: '❌', text: 'Doppelbelegungen und vergessene Objekte kosten Kunden.' },
  ],
  solutionTitle: 'Schichtpläne, die funktionieren.',
  solutionDescription: 'Plan erstellen, Mitarbeiter zuweisen, fertig. Änderungen kommen sofort aufs Handy.',
  solutionSteps: [
    { icon: '📅', title: 'Schichten planen', description: 'Erstelle Schichtpläne per Drag & Drop – visuell, übersichtlich, schnell.' },
    { icon: '👥', title: 'Teams zuweisen', description: 'Weise Reinigungskräfte Objekten und Schichten zu – mit Qualifikationsabgleich.' },
    { icon: '📱', title: 'Sofort informiert', description: 'Jede Änderung wird sofort per Push-Nachricht an betroffene Mitarbeiter gesendet.' },
  ],
  ctaText: 'Schichtplanung starten',
  featureHighlights: [
    { icon: '📅', title: 'Drag & Drop Planung', description: 'Schichten visuell erstellen und anpassen – intuitiv und schnell.' },
    { icon: '⚠️', title: 'Konflikterkennung', description: 'Automatische Warnung bei Doppelbelegungen oder Überlastung.' },
    { icon: '📱', title: 'Mobile Einsicht', description: 'Reinigungskräfte sehen ihren Schichtplan jederzeit auf dem Handy.' },
    { icon: '🔄', title: 'Vertretungsmanagement', description: 'Bei Ausfall schnell Ersatz finden und zuweisen.' },
    { icon: '🏢', title: 'Objekt-basiert', description: 'Plane nach Objekten, nicht nur nach Mitarbeitern.' },
    { icon: '📊', title: 'Auslastungsübersicht', description: 'Sieh auf einen Blick, welche Mitarbeiter über- oder unterlastet sind.' },
  ],
  closingHeadline: 'Schichtplanung ohne Stress.',
  closingText: 'Teste Taskey und erlebe, wie einfach Schichtplanung sein kann.',
  relatedLinks: [
      {
          href: '/loesungen/arbeitszeiterfassung-reinigungsfirma',
          label: 'Arbeitszeiterfassung Reinigung',
          description: 'Zeiten pro Schicht automatisch erfassen – lückenlos und korrekt.'
      },
      {
          href: '/loesungen/tagesplanung-reinigungskraefte',
          label: 'Tagesplanung Reinigungskräfte',
          description: 'Den täglichen Einsatz Ihrer Reinigungskräfte effizient planen.'
      },
      {
          href: '/loesungen/einsatzplanung-gebaeudereinigung',
          label: 'Einsatzplanung Gebäudereinigung',
          description: 'Mitarbeiter den richtigen Objekten und Schichten zuordnen.'
      }
  ],
};

export default function Page() {
  return <LandingPageTemplate data={data} />;
}
