import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/landing/LandingPageTemplate';
import type { LandingPageData } from '@/components/landing/LandingPageTemplate';

export const metadata: Metadata = {
  title: 'Team Kommunikation Baustelle App | Taskey',
  description: 'Team-Kommunikation auf der Baustelle: Aufträge, Infos und Änderungen direkt per App an dein Team. Kein WhatsApp-Chaos mehr. Jetzt testen!',
  alternates: { canonical: 'https://www.taskey.de/loesungen/team-kommunikation-baustelle' },
};

const data: LandingPageData = {
  badge: 'Team-Kommunikation',
  headline: 'Baustelleninfos –',
  headlineHighlight: 'sofort bei jedem.',
  subheadline: 'Schluss mit WhatsApp-Chaos. Alle Infos, Änderungen und Aufträge in einer App.',
  heroDescription: 'Taskey ersetzt WhatsApp-Gruppen auf der Baustelle: Aufträge, Planänderungen, Fotos und Anweisungen kommen direkt und strukturiert beim Team an.',
  painPoints: [
    { icon: '📱', text: 'WhatsApp-Gruppen mit 200 Nachrichten am Tag – wichtige Infos gehen unter.' },
    { icon: '📞', text: 'Planänderungen werden per Telefon weitergegeben – stille Post.' },
    { icon: '🤷', text: 'Monteure sagen: Das hat mir keiner gesagt.' },
    { icon: '📸', text: 'Fotos und Pläne sind in privaten WhatsApp-Chats – nicht auffindbar.' },
  ],
  solutionTitle: 'Kommunikation, die ankommt.',
  solutionDescription: 'Aufträge, Infos und Dokumente – strukturiert und direkt beim Empfänger.',
  solutionSteps: [
    { icon: '📋', title: 'Info am Auftrag', description: 'Alle Informationen sind am Auftrag hinterlegt – nicht in einer Chat-Flut.' },
    { icon: '🔔', title: 'Push-Benachrichtigungen', description: 'Änderungen und neue Aufträge kommen als Push-Nachricht aufs Handy.' },
    { icon: '📸', title: 'Fotos & Dokumente', description: 'Pläne, Fotos und Anweisungen direkt im Auftrag – nicht in WhatsApp.' },
  ],
  ctaText: 'Team-Kommunikation verbessern',
  featureHighlights: [
    { icon: '📋', title: 'Auftrags-Kommentare', description: 'Kommunikation direkt am Auftrag – kontextbezogen und nachvollziehbar.' },
    { icon: '🔔', title: 'Push-Nachrichten', description: 'Wichtige Updates sofort auf dem Handy – nicht in der Chat-Flut.' },
    { icon: '📸', title: 'Fotos teilen', description: 'Fotos direkt zum Auftrag – mit Kommentar und Zeitstempel.' },
    { icon: '📄', title: 'Dokumente anhängen', description: 'Pläne, Zeichnungen und PDFs direkt im Auftrag hinterlegen.' },
    { icon: '✅', title: 'Lesebestätigung', description: 'Sieh, wer die Info gelesen hat.' },
    { icon: '📱', title: 'Eine App für alles', description: 'Keine 5 Apps mehr – alles in Taskey.' },
  ],
  closingHeadline: 'Info raus. Angekommen.',
  closingText: 'Starte jetzt und kommuniziere strukturiert mit deinem Team.',
};

export default function Page() {
  return <LandingPageTemplate data={data} />;
}
