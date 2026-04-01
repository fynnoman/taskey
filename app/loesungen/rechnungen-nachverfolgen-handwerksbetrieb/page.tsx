import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/landing/LandingPageTemplate';
import type { LandingPageData } from '@/components/landing/LandingPageTemplate';

export const metadata: Metadata = {
  title: 'Rechnungen nachverfolgen Handwerksbetrieb – Taskey',
  description: 'Offene Rechnungen im Handwerksbetrieb nachverfolgen. Taskey zeigt sofort, welche Rechnungen bezahlt, offen oder überfällig sind.',
  alternates: { canonical: 'https://www.taskey.de/loesungen/rechnungen-nachverfolgen-handwerksbetrieb' },
};

const data: LandingPageData = {
  badge: 'Rechnungsverfolgung',
  headline: 'Rechnungen',
  headlineHighlight: 'nachverfolgen',
  subheadline: 'Immer wissen, welche Rechnungen offen sind.',
  heroDescription: 'Nie wieder Rechnungen vergessen oder Zahlungseingänge übersehen. Taskey gibt Ihnen den kompletten Überblick über alle offenen, bezahlten und überfälligen Rechnungen.',
  painPoints: [
    { icon: '❓', text: 'Keine Ahnung, welche Rechnungen noch offen sind.' },
    { icon: '💸', text: 'Zahlungseingänge werden nicht zeitnah geprüft.' },
    { icon: '📞', text: 'Peinliche Nachfragen bei Kunden, die schon bezahlt haben.' },
    { icon: '📉', text: 'Liquiditätsengpässe wegen überfälliger Rechnungen.' },
  ],
  solutionTitle: 'Alle Rechnungen auf einen Blick',
  solutionDescription: 'Taskey zeigt Ihnen den Status jeder Rechnung in Echtzeit.',
  solutionSteps: [
    { icon: '📊', title: 'Dashboard öffnen', description: 'Alle Rechnungen mit Status übersichtlich im Dashboard sehen.' },
    { icon: '🔔', title: 'Erinnerungen erhalten', description: 'Automatische Benachrichtigung bei überfälligen Rechnungen.' },
    { icon: '📤', title: 'Mahnungen versenden', description: 'Zahlungserinnerungen direkt aus Taskey an den Kunden senden.' },
  ],
  ctaText: 'Jetzt Rechnungen im Blick behalten',
  featureHighlights: [
    { icon: '🚦', title: 'Ampel-Status', description: 'Grün, Gelb, Rot – sofort erkennen, welche Rechnungen Aufmerksamkeit brauchen.' },
    { icon: '🔔', title: 'Automatische Erinnerungen', description: 'Nie wieder eine überfällige Rechnung übersehen.' },
    { icon: '📊', title: 'Umsatzübersicht', description: 'Fakturierter und eingegangener Umsatz auf einen Blick.' },
    { icon: '📧', title: 'Zahlungserinnerungen', description: 'Freundliche Zahlungserinnerungen per E-Mail versenden.' },
    { icon: '💰', title: 'Liquiditätsplanung', description: 'Erwartete Zahlungseingänge für bessere Planung.' },
    { icon: '📁', title: 'Rechnungsarchiv', description: 'Alle Rechnungen digital archiviert und jederzeit abrufbar.' },
  ],
  closingHeadline: 'Nie wieder Rechnungen vergessen.',
  closingText: 'Mit Taskey haben Sie alle offenen Posten im Blick – für eine gesunde Liquidität.',
};

export default function Page() {
  return <LandingPageTemplate data={data} />;
}
