import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/landing/LandingPageTemplate';
import type { LandingPageData } from '@/components/landing/LandingPageTemplate';

export const metadata: Metadata = {
  title: 'Mitarbeiter auf Baustellen einteilen – Taskey',
  description: 'Mitarbeiter effizient auf Baustellen einteilen. Taskey zeigt Verfügbarkeiten, Qualifikationen und optimiert die Personaleinteilung.',
  alternates: { canonical: 'https://www.taskeyapp.com/loesungen/mitarbeiter-auf-baustellen-einteilen' },
};

const data: LandingPageData = {
  badge: 'Personaleinteilung',
  headline: 'Mitarbeiter auf',
  headlineHighlight: 'Baustellen einteilen',
  subheadline: 'Effizient, übersichtlich und ohne Chaos.',
  heroDescription: 'Wer kommt morgen wohin? Taskey zeigt Ihnen auf einen Blick, welche Mitarbeiter verfügbar sind, und verteilt sie optimal auf Ihre Baustellen.',
  painPoints: [
    { text: 'Whiteboards und Excel-Listen sind unübersichtlich und fehleranfällig.' },
    { text: 'Ständige Anrufe und WhatsApp-Nachrichten zur Einteilung.' },
    { text: 'Baustellen stehen still, weil zu wenig Personal eingeteilt wurde.' },
    { text: 'Kurzfristige Änderungen sorgen für totales Chaos.' },
  ],
  solutionTitle: 'Baustelleneinteilung per Drag & Drop',
  solutionDescription: 'Taskey macht die Personaleinteilung so einfach wie nie.',
  solutionSteps: [
    { title: 'Verfügbarkeit prüfen', description: 'Auf einen Blick sehen, welche Mitarbeiter wann verfügbar sind.' },
    { title: 'Zuordnung per Drag & Drop', description: 'Mitarbeiter einfach per Drag & Drop den Baustellen zuweisen.' },
    { title: 'Automatische Benachrichtigung', description: 'Mitarbeiter erhalten ihre Einteilung direkt auf das Smartphone.' },
  ],
  ctaText: 'Jetzt Personaleinteilung optimieren',
  featureHighlights: [
    { title: 'Verfügbarkeitsübersicht', description: 'Urlaub, Krankheit, andere Einsätze – alles auf einen Blick.' },
    { title: 'Qualifikationsfilter', description: 'Mitarbeiter nach Qualifikation und Fähigkeit filtern.' },
    { title: 'Mobile Benachrichtigung', description: 'Jeder Mitarbeiter weiß sofort, wo er eingesetzt wird.' },
    { title: 'Schnelle Umplanung', description: 'Bei Ausfällen in Sekunden umplanen und Team informieren.' },
    { title: 'Baustellenübersicht', description: 'Sehen, welche Baustelle mit wie vielen Leuten besetzt ist.' },
    { title: 'Auslastungsoptimierung', description: 'Leerlauf vermeiden durch optimale Personalverteilung.' },
  ],
  closingHeadline: 'Nie wieder Baustellenchaos.',
  closingText: 'Taskey bringt die richtigen Leute zur richtigen Zeit auf die richtige Baustelle.',
  relatedLinks: [
      {
          href: '/loesungen/personalplanung-baufirma',
          label: 'Personalplanung Bau',
          description: 'Personalkapazitäten planen und optimal auf Baustellen verteilen.'
      },
      {
          href: '/loesungen/kolonnenplanung-bau',
          label: 'Kolonnenplanung',
          description: 'Kolonnen zusammenstellen und auf Baustellen verteilen.'
      },
      {
          href: '/loesungen/baustellen-koordinieren-tool',
          label: 'Baustellen koordinieren',
          description: 'Mehrere Baustellen gleichzeitig managen und koordinieren.'
      }
  ],
};

export default function Page() {
  return <LandingPageTemplate data={data} />;
}
