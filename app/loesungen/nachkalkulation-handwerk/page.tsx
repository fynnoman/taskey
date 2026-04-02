import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/landing/LandingPageTemplate';
import type { LandingPageData } from '@/components/landing/LandingPageTemplate';

export const metadata: Metadata = {
  title: 'Nachkalkulation Handwerk | Taskey',
  description: 'Nachkalkulation für Handwerksbetriebe: Geplante vs. tatsächliche Kosten vergleichen. Gewinn pro Auftrag in Echtzeit. Jetzt testen!',
  alternates: { canonical: 'https://www.taskey.de/loesungen/nachkalkulation-handwerk' },
};

const data: LandingPageData = {
  badge: 'Nachkalkulation',
  headline: 'Nachkalkulation –',
  headlineHighlight: 'in Echtzeit statt Wochen später.',
  subheadline: 'War der Auftrag rentabel? Taskey zeigt es dir sofort – nicht erst beim Steuerberater.',
  heroDescription: 'Taskey kalkuliert laufend mit: Arbeitsstunden, Material, Nachträge – alles wird gegen die Auftragssumme gerechnet. Du siehst in Echtzeit, ob du Geld verdienst.',
  painPoints: [
    { text: 'Die Nachkalkulation passiert erst Wochen nach Auftragsende – zu spät zum Handeln.' },
    { text: 'Aufträge enden im Minus – und du merkst es erst Monate später.' },
    { text: 'Stunden und Material müssen manuell zusammengetragen werden.' },
    { text: 'Welche Auftragstypen sind profitabel? Keine Daten, nur Bauchgefühl.' },
  ],
  solutionTitle: 'Live-Nachkalkulation für jeden Auftrag.',
  solutionDescription: 'Stunden und Material werden automatisch erfasst – die Marge berechnet sich von allein.',
  solutionSteps: [
    { title: 'Automatisch erfasst', description: 'Arbeitsstunden und Material werden im Auftrag automatisch mitgezählt.' },
    { title: 'Live-Marge', description: 'Sieh in Echtzeit, ob der Auftrag im Plus oder Minus liegt.' },
    { title: 'Warnsystem', description: 'Automatische Warnung, wenn ein Auftrag unter die Gewinngrenze rutscht.' },
  ],
  ctaText: 'Nachkalkulation automatisieren',
  featureHighlights: [
    { title: 'Soll/Ist-Vergleich', description: 'Geplante vs. tatsächliche Kosten auf einen Blick.' },
    { title: 'Live-Marge', description: 'Echtzeit-Gewinn pro Auftrag in Prozent und Euro.' },
    { title: 'Margen-Warnung', description: 'Automatischer Alarm bei sinkender Rentabilität.' },
    { title: 'Stundensatz-Analyse', description: 'Tatsächlicher vs. kalkulierter Stundensatz.' },
    { title: 'Material-Auswertung', description: 'Geplanter vs. tatsächlicher Materialverbrauch.' },
    { title: 'Reports', description: 'Auswertungen als PDF für Geschäftsführung und Steuerberater.' },
  ],
  closingHeadline: 'Gewinn oder Verlust? Sofort wissen.',
  closingText: 'Starte jetzt und hab deine Margen im Griff.',
  relatedLinks: [
      {
          href: '/loesungen/gewinn-pro-auftrag-berechnen',
          label: 'Gewinn pro Auftrag berechnen',
          description: 'Was hat der Auftrag wirklich gebracht? Gewinn auf Knopfdruck.'
      },
      {
          href: '/loesungen/angebotskalkulation-bau',
          label: 'Angebotskalkulation',
          description: 'Nächstes Mal besser kalkulieren – mit Daten aus der Nachkalkulation.'
      },
      {
          href: '/loesungen/stundensaetze-kalkulieren-handwerk',
          label: 'Stundensätze kalkulieren',
          description: 'Stundensätze auf Basis realer Projektdaten optimieren.'
      }
  ],
};

export default function Page() {
  return <LandingPageTemplate data={data} />;
}
