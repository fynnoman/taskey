import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/landing/LandingPageTemplate';
import type { LandingPageData } from '@/components/landing/LandingPageTemplate';

export const metadata: Metadata = {
  title: 'Rechnungsprogramm Handwerker | Taskey',
  description: 'Rechnungsprogramm für Handwerker: Rechnungen aus Aufträgen erstellen, Zahlungen tracken, Mahnwesen. GoBD-konform. Jetzt kostenlos testen!',
  alternates: { canonical: 'https://www.taskey.de/loesungen/rechnungsprogramm-handwerker' },
};

const data: LandingPageData = {
  badge: 'Rechnungsprogramm',
  headline: 'Rechnungen schreiben –',
  headlineHighlight: 'direkt aus dem Auftrag.',
  subheadline: 'Auftrag abgeschlossen? Rechnung in 30 Sekunden erstellt und verschickt.',
  heroDescription: 'Taskey erstellt Rechnungen direkt aus abgeschlossenen Aufträgen. Stunden, Material, Positionen – alles ist schon da. Du klickst nur noch auf „Senden".',
  painPoints: [
    { icon: '⏰', text: 'Rechnungen werden Wochen nach Auftragsende geschrieben – Geld kommt spät.' },
    { icon: '📝', text: 'Positionen müssen manuell von Stundenzetteln und Lieferscheinen abgetippt werden.' },
    { icon: '❌', text: 'Rechnungsfehler führen zu Kürzungen und Ärger mit Kunden.' },
    { icon: '📊', text: 'Den Überblick über offene Rechnungen verlierst du regelmäßig.' },
  ],
  solutionTitle: 'Rechnungen, die sich fast selbst schreiben.',
  solutionDescription: 'Alle Daten sind da – Taskey macht daraus eine fertige Rechnung.',
  solutionSteps: [
    { icon: '✅', title: 'Auftrag abschließen', description: 'Markiere den Auftrag als abgeschlossen – alle Stunden und Materialien sind erfasst.' },
    { icon: '📄', title: 'Rechnung generieren', description: 'Taskey erstellt die Rechnung automatisch aus den Auftragsdaten.' },
    { icon: '📤', title: 'Versenden & tracken', description: 'Per Mail versenden und den Zahlungseingang direkt in Taskey verfolgen.' },
  ],
  ctaText: 'Rechnungen automatisieren',
  featureHighlights: [
    { icon: '📄', title: 'Automatische Rechnungen', description: 'Rechnungen werden aus Auftragsdaten automatisch befüllt.' },
    { icon: '📧', title: 'Per Mail versenden', description: 'Rechnung als PDF direkt aus Taskey an den Kunden mailen.' },
    { icon: '💰', title: 'Zahlungs-Tracking', description: 'Sieh auf einen Blick, welche Rechnungen bezahlt sind und welche offen.' },
    { icon: '⚠️', title: 'Mahnwesen', description: 'Automatische Zahlungserinnerungen bei überfälligen Rechnungen.' },
    { icon: '📊', title: 'Umsatzübersicht', description: 'Monatliche und jährliche Umsatzübersichten auf einen Blick.' },
    { icon: '🔒', title: 'GoBD-konform', description: 'Alle Rechnungen werden revisionssicher archiviert.' },
  ],
  closingHeadline: 'Rechnung raus. Geld rein.',
  closingText: 'Starte jetzt und erstelle deine erste Rechnung in unter einer Minute.',
  relatedLinks: [
      {
          href: '/loesungen/angebote-schreiben-handwerk',
          label: 'Angebote schreiben',
          description: 'Vom Angebot zur Rechnung – ein nahtloser digitaler Prozess.'
      },
      {
          href: '/loesungen/rechnungen-nachverfolgen-handwerksbetrieb',
          label: 'Rechnungen nachverfolgen',
          description: 'Offene Rechnungen im Blick behalten und Zahlungseingänge tracken.'
      },
      {
          href: '/loesungen/abschlagsrechnung-erstellen-handwerk',
          label: 'Abschlagsrechnung erstellen',
          description: 'Abschlagsrechnungen nach Baufortschritt automatisch generieren.'
      }
  ],
};

export default function Page() {
  return <LandingPageTemplate data={data} />;
}
