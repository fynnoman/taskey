import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/landing/LandingPageTemplate';
import type { LandingPageData } from '@/components/landing/LandingPageTemplate';

export const metadata: Metadata = {
  title: 'Kundenfeedback Reinigung – Taskey',
  description: 'Kundenfeedback für Reinigungsfirmen digital erfassen. Taskey sammelt Bewertungen, erkennt Verbesserungspotenzial und steigert die Kundenzufriedenheit.',
  alternates: { canonical: 'https://www.taskey.de/loesungen/kundenfeedback-reinigung' },
};

const data: LandingPageData = {
  badge: 'Kundenfeedback',
  headline: 'Kundenfeedback für',
  headlineHighlight: 'Reinigungsfirmen',
  subheadline: 'Zufriedenheit messen, Qualität steigern.',
  heroDescription: 'Wissen Sie, wie zufrieden Ihre Kunden wirklich sind? Taskey sammelt Feedback systematisch und hilft Ihnen, Ihre Reinigungsqualität kontinuierlich zu verbessern.',
  painPoints: [
    { icon: '❓', text: 'Keine Ahnung, ob der Kunde mit der Reinigung zufrieden ist.' },
    { icon: '😤', text: 'Beschwerden kommen erst, wenn es zu spät ist – der Vertrag wird gekündigt.' },
    { icon: '📊', text: 'Keine Daten über die tatsächliche Reinigungsqualität.' },
    { icon: '🔄', text: 'Qualitätsprobleme werden nicht systematisch behoben.' },
  ],
  solutionTitle: 'Feedback sammeln, Qualität steigern',
  solutionDescription: 'Taskey macht Kundenzufriedenheit messbar und gibt Ihnen die Werkzeuge, um besser zu werden.',
  solutionSteps: [
    { icon: '📧', title: 'Feedback einholen', description: 'Automatische Feedback-Anfragen nach jeder Reinigung oder in regelmäßigen Intervallen.' },
    { icon: '📊', title: 'Auswerten', description: 'Zufriedenheits-Scores pro Objekt, Team und Zeitraum analysieren.' },
    { icon: '🎯', title: 'Verbessern', description: 'Konkrete Maßnahmen aus dem Feedback ableiten und umsetzen.' },
  ],
  ctaText: 'Jetzt Kundenfeedback nutzen',
  featureHighlights: [
    { icon: '⭐', title: 'Zufriedenheits-Score', description: 'Einfache Bewertungsskala für schnelles Kundenfeedback.' },
    { icon: '📊', title: 'Trend-Analyse', description: 'Zufriedenheitsentwicklung über Zeit und Objekte verfolgen.' },
    { icon: '🔔', title: 'Frühwarnsystem', description: 'Sofort benachrichtigt werden bei negativem Feedback.' },
    { icon: '📋', title: 'Maßnahmen ableiten', description: 'Aus Feedback konkrete Verbesserungsmaßnahmen erstellen.' },
    { icon: '🏢', title: 'Objektbezogen', description: 'Feedback pro Reinigungsobjekt für gezielte Optimierung.' },
    { icon: '📈', title: 'Qualitätsnachweis', description: 'Zufriedenheitsdaten als Verkaufsargument bei Neukunden.' },
  ],
  closingHeadline: 'Zufriedene Kunden bleiben.',
  closingText: 'Taskey hilft Ihnen, die Kundenzufriedenheit zu messen und kontinuierlich zu verbessern.',
};

export default function Page() {
  return <LandingPageTemplate data={data} />;
}
