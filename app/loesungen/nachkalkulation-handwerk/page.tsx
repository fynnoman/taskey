import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/landing/LandingPageTemplate';
import type { LandingPageData } from '@/components/landing/LandingPageTemplate';

export const metadata: Metadata = {
  title: 'Nachkalkulation Handwerk | Taskey',
  description: 'Nachkalkulation für Handwerksbetriebe: Geplante vs. tatsächliche Kosten vergleichen. Gewinn pro Auftrag in Echtzeit. Jetzt testen!',
  alternates: { canonical: 'https://taskey.de/loesungen/nachkalkulation-handwerk' },
};

const data: LandingPageData = {
  badge: 'Nachkalkulation',
  headline: 'Nachkalkulation –',
  headlineHighlight: 'in Echtzeit statt Wochen später.',
  subheadline: 'War der Auftrag rentabel? Taskey zeigt es dir sofort – nicht erst beim Steuerberater.',
  heroDescription: 'Taskey kalkuliert laufend mit: Arbeitsstunden, Material, Nachträge – alles wird gegen die Auftragssumme gerechnet. Du siehst in Echtzeit, ob du Geld verdienst.',
  painPoints: [
    { icon: '📊', text: 'Die Nachkalkulation passiert erst Wochen nach Auftragsende – zu spät zum Handeln.' },
    { icon: '💰', text: 'Aufträge enden im Minus – und du merkst es erst Monate später.' },
    { icon: '📝', text: 'Stunden und Material müssen manuell zusammengetragen werden.' },
    { icon: '🤷', text: 'Welche Auftragstypen sind profitabel? Keine Daten, nur Bauchgefühl.' },
  ],
  solutionTitle: 'Live-Nachkalkulation für jeden Auftrag.',
  solutionDescription: 'Stunden und Material werden automatisch erfasst – die Marge berechnet sich von allein.',
  solutionSteps: [
    { icon: '📊', title: 'Automatisch erfasst', description: 'Arbeitsstunden und Material werden im Auftrag automatisch mitgezählt.' },
    { icon: '📈', title: 'Live-Marge', description: 'Sieh in Echtzeit, ob der Auftrag im Plus oder Minus liegt.' },
    { icon: '🔔', title: 'Warnsystem', description: 'Automatische Warnung, wenn ein Auftrag unter die Gewinngrenze rutscht.' },
  ],
  ctaText: 'Nachkalkulation automatisieren',
  featureHighlights: [
    { icon: '📊', title: 'Soll/Ist-Vergleich', description: 'Geplante vs. tatsächliche Kosten auf einen Blick.' },
    { icon: '📈', title: 'Live-Marge', description: 'Echtzeit-Gewinn pro Auftrag in Prozent und Euro.' },
    { icon: '⚠️', title: 'Margen-Warnung', description: 'Automatischer Alarm bei sinkender Rentabilität.' },
    { icon: '💰', title: 'Stundensatz-Analyse', description: 'Tatsächlicher vs. kalkulierter Stundensatz.' },
    { icon: '📋', title: 'Material-Auswertung', description: 'Geplanter vs. tatsächlicher Materialverbrauch.' },
    { icon: '📤', title: 'Reports', description: 'Auswertungen als PDF für Geschäftsführung und Steuerberater.' },
  ],
  closingHeadline: 'Gewinn oder Verlust? Sofort wissen.',
  closingText: 'Starte jetzt und hab deine Margen im Griff.',
};

export default function Page() {
  return <LandingPageTemplate data={data} />;
}
