import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/landing/LandingPageTemplate';
import type { LandingPageData } from '@/components/landing/LandingPageTemplate';

export const metadata: Metadata = {
  title: 'Stundensätze kalkulieren Handwerk – Taskey',
  description: 'Stundensätze im Handwerk richtig kalkulieren. Taskey hilft Ihnen, kostendeckende Stundensätze zu berechnen und profitabel zu arbeiten.',
  alternates: { canonical: 'https://www.taskey.de/loesungen/stundensaetze-kalkulieren-handwerk' },
};

const data: LandingPageData = {
  badge: 'Stundensatz-Kalkulation',
  headline: 'Stundensätze im',
  headlineHighlight: 'Handwerk',
  subheadline: 'richtig kalkulieren.',
  heroDescription: 'Ist Ihr Stundensatz kostendeckend? Taskey berechnet Ihre tatsächlichen Kosten und hilft Ihnen, den richtigen Preis für Ihre Arbeit zu finden.',
  painPoints: [
    { icon: '💸', text: 'Stundensatz zu niedrig – am Ende bleibt nichts übrig.' },
    { icon: '❓', text: 'Keine Ahnung, was eine Arbeitsstunde den Betrieb wirklich kostet.' },
    { icon: '📊', text: 'Gemeinkosten, Sozialabgaben und Materialkosten werden nicht einberechnet.' },
    { icon: '🏆', text: 'Wettbewerber sind günstiger – oder arbeiten sie auch mit Verlust?' },
  ],
  solutionTitle: 'Stundensatz auf Basis echter Daten',
  solutionDescription: 'Taskey berechnet Ihren kostendeckenden Stundensatz aus Ihren realen Betriebsdaten.',
  solutionSteps: [
    { icon: '📊', title: 'Kosten erfassen', description: 'Alle Betriebskosten – Personal, Material, Gemeinkosten – erfassen.' },
    { icon: '🔢', title: 'Stundensatz berechnen', description: 'Taskey berechnet den kostendeckenden Stundensatz inklusive Gewinnaufschlag.' },
    { icon: '📈', title: 'Regelmäßig prüfen', description: 'Stundensatz regelmäßig an aktuelle Kosten anpassen.' },
  ],
  ctaText: 'Jetzt Stundensatz berechnen',
  featureHighlights: [
    { icon: '🔢', title: 'Vollkostenrechnung', description: 'Alle Kosten berücksichtigt – Personal, Material, Gemeinkosten, Abschreibungen.' },
    { icon: '📊', title: 'Gewinnaufschlag', description: 'Gewünschten Gewinn definieren und in den Stundensatz einrechnen.' },
    { icon: '📈', title: 'Branchenvergleich', description: 'Ihren Stundensatz mit Branchendurchschnitten vergleichen.' },
    { icon: '🔄', title: 'Regelmäßige Aktualisierung', description: 'Stundensatz an steigende Kosten automatisch anpassen.' },
    { icon: '📋', title: 'Nachkalkulation', description: 'Tatsächliche Kosten mit kalkulierten vergleichen.' },
    { icon: '💰', title: 'Profitabilität', description: 'Sicherstellen, dass jeder Auftrag profitabel ist.' },
  ],
  closingHeadline: 'Der richtige Preis für Ihre Arbeit.',
  closingText: 'Taskey hilft Ihnen, profitabel zu kalkulieren – damit sich Ihre Arbeit auch lohnt.',
};

export default function Page() {
  return <LandingPageTemplate data={data} />;
}
