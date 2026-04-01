import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/landing/LandingPageTemplate';
import type { LandingPageData } from '@/components/landing/LandingPageTemplate';

export const metadata: Metadata = {
  title: 'Gewinn pro Auftrag berechnen Handwerk | Taskey',
  description: 'Gewinn pro Auftrag im Handwerk berechnen: Live-Marge, Stunden, Material – automatisch. Nie mehr raten. Jetzt kostenlos testen!',
  alternates: { canonical: 'https://taskey.de/loesungen/gewinn-pro-auftrag-berechnen' },
};

const data: LandingPageData = {
  badge: 'Gewinn pro Auftrag',
  headline: 'Gewinn pro Auftrag –',
  headlineHighlight: 'sofort wissen, nicht raten.',
  subheadline: 'Jeder Auftrag hat ein Live-Dashboard: Einnahmen vs. Kosten – in Echtzeit.',
  heroDescription: 'Taskey zeigt dir in Echtzeit, ob ein Auftrag Gewinn oder Verlust macht. Stunden, Material und alle Kosten werden automatisch gegen die Auftragssumme gerechnet.',
  painPoints: [
    { icon: '🤷', text: 'Am Ende des Auftrags weißt du nicht, ob du Geld verdient hast.' },
    { icon: '📊', text: 'Die Nachkalkulation kommt Wochen zu spät – du kannst nichts mehr ändern.' },
    { icon: '💸', text: 'Manche Aufträge machen Minus – aber welche?' },
    { icon: '📝', text: 'Stunden und Material werden nicht sauber dem Auftrag zugeordnet.' },
  ],
  solutionTitle: 'Live-Gewinn für jeden Auftrag.',
  solutionDescription: 'Stunden und Material fließen automatisch in die Gewinnberechnung.',
  solutionSteps: [
    { icon: '💰', title: 'Auftragssumme definieren', description: 'Lege die Auftragssumme fest – Taskey rechnet alles dagegen.' },
    { icon: '📊', title: 'Kosten laufen automatisch', description: 'Erfasste Stunden und gebuchtes Material werden automatisch als Kosten berechnet.' },
    { icon: '📈', title: 'Live-Marge sehen', description: 'Sieh in Echtzeit: +12% Marge oder -3% Verlust – und reagiere sofort.' },
  ],
  ctaText: 'Gewinne sichtbar machen',
  featureHighlights: [
    { icon: '📈', title: 'Live-Marge', description: 'Echtzeit-Gewinn in Prozent und Euro für jeden Auftrag.' },
    { icon: '⚠️', title: 'Margen-Warnung', description: 'Automatischer Alarm, wenn ein Auftrag ins Minus rutscht.' },
    { icon: '📊', title: 'Soll/Ist', description: 'Geplante vs. tatsächliche Kosten pro Position.' },
    { icon: '💰', title: 'Stundensatz-Analyse', description: 'Tatsächlicher Stundensatz vs. kalkulierter Stundensatz.' },
    { icon: '📋', title: 'Top/Flop Aufträge', description: 'Ranking: Welche Aufträge bringen am meisten, welche am wenigsten?' },
    { icon: '📤', title: 'Auswertungen', description: 'PDF-Reports für Geschäftsführung und Steuerberater.' },
  ],
  closingHeadline: 'Gewinn? Oder Verlust? Jetzt wissen.',
  closingText: 'Starte jetzt und sieh den Gewinn jedes Auftrags in Echtzeit.',
};

export default function Page() {
  return <LandingPageTemplate data={data} />;
}
