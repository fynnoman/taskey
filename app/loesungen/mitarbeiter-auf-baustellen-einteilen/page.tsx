import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/landing/LandingPageTemplate';
import type { LandingPageData } from '@/components/landing/LandingPageTemplate';

export const metadata: Metadata = {
  title: 'Mitarbeiter auf Baustellen einteilen – Taskey',
  description: 'Mitarbeiter effizient auf Baustellen einteilen. Taskey zeigt Verfügbarkeiten, Qualifikationen und optimiert die Personaleinteilung.',
  alternates: { canonical: 'https://www.taskey.de/loesungen/mitarbeiter-auf-baustellen-einteilen' },
};

const data: LandingPageData = {
  badge: 'Personaleinteilung',
  headline: 'Mitarbeiter auf',
  headlineHighlight: 'Baustellen einteilen',
  subheadline: 'Effizient, übersichtlich und ohne Chaos.',
  heroDescription: 'Wer kommt morgen wohin? Taskey zeigt Ihnen auf einen Blick, welche Mitarbeiter verfügbar sind, und verteilt sie optimal auf Ihre Baustellen.',
  painPoints: [
    { icon: '📋', text: 'Whiteboards und Excel-Listen sind unübersichtlich und fehleranfällig.' },
    { icon: '📱', text: 'Ständige Anrufe und WhatsApp-Nachrichten zur Einteilung.' },
    { icon: '❌', text: 'Baustellen stehen still, weil zu wenig Personal eingeteilt wurde.' },
    { icon: '🔄', text: 'Kurzfristige Änderungen sorgen für totales Chaos.' },
  ],
  solutionTitle: 'Baustelleneinteilung per Drag & Drop',
  solutionDescription: 'Taskey macht die Personaleinteilung so einfach wie nie.',
  solutionSteps: [
    { icon: '👥', title: 'Verfügbarkeit prüfen', description: 'Auf einen Blick sehen, welche Mitarbeiter wann verfügbar sind.' },
    { icon: '📋', title: 'Zuordnung per Drag & Drop', description: 'Mitarbeiter einfach per Drag & Drop den Baustellen zuweisen.' },
    { icon: '📱', title: 'Automatische Benachrichtigung', description: 'Mitarbeiter erhalten ihre Einteilung direkt auf das Smartphone.' },
  ],
  ctaText: 'Jetzt Personaleinteilung optimieren',
  featureHighlights: [
    { icon: '📊', title: 'Verfügbarkeitsübersicht', description: 'Urlaub, Krankheit, andere Einsätze – alles auf einen Blick.' },
    { icon: '🎯', title: 'Qualifikationsfilter', description: 'Mitarbeiter nach Qualifikation und Fähigkeit filtern.' },
    { icon: '📱', title: 'Mobile Benachrichtigung', description: 'Jeder Mitarbeiter weiß sofort, wo er eingesetzt wird.' },
    { icon: '🔄', title: 'Schnelle Umplanung', description: 'Bei Ausfällen in Sekunden umplanen und Team informieren.' },
    { icon: '📋', title: 'Baustellenübersicht', description: 'Sehen, welche Baustelle mit wie vielen Leuten besetzt ist.' },
    { icon: '📈', title: 'Auslastungsoptimierung', description: 'Leerlauf vermeiden durch optimale Personalverteilung.' },
  ],
  closingHeadline: 'Nie wieder Baustellenchaos.',
  closingText: 'Taskey bringt die richtigen Leute zur richtigen Zeit auf die richtige Baustelle.',
};

export default function Page() {
  return <LandingPageTemplate data={data} />;
}
