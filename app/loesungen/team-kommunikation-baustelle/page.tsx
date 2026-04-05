import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/landing/LandingPageTemplate';
import type { LandingPageData } from '@/components/landing/LandingPageTemplate';

export const metadata: Metadata = {
  title: 'Team Kommunikation Baustelle App | Taskey',
  description: 'Team-Kommunikation auf der Baustelle: Aufträge, Infos und Änderungen direkt per App an dein Team. Kein WhatsApp-Chaos mehr. Jetzt testen!',
  alternates: { canonical: 'https://www.taskeyapp.com/loesungen/team-kommunikation-baustelle' },
};

const data: LandingPageData = {
  badge: 'Team-Kommunikation',
  headline: 'Baustelleninfos –',
  headlineHighlight: 'sofort bei jedem.',
  subheadline: 'Schluss mit WhatsApp-Chaos. Alle Infos, Änderungen und Aufträge in einer App.',
  heroDescription: 'Taskey ersetzt WhatsApp-Gruppen auf der Baustelle: Aufträge, Planänderungen, Fotos und Anweisungen kommen direkt und strukturiert beim Team an.',
  painPoints: [
    { text: 'WhatsApp-Gruppen mit 200 Nachrichten am Tag – wichtige Infos gehen unter.' },
    { text: 'Planänderungen werden per Telefon weitergegeben – stille Post.' },
    { text: 'Monteure sagen: Das hat mir keiner gesagt.' },
    { text: 'Fotos und Pläne sind in privaten WhatsApp-Chats – nicht auffindbar.' },
  ],
  solutionTitle: 'Kommunikation, die ankommt.',
  solutionDescription: 'Aufträge, Infos und Dokumente – strukturiert und direkt beim Empfänger.',
  solutionSteps: [
    { title: 'Info am Auftrag', description: 'Alle Informationen sind am Auftrag hinterlegt – nicht in einer Chat-Flut.' },
    { title: 'Push-Benachrichtigungen', description: 'Änderungen und neue Aufträge kommen als Push-Nachricht aufs Handy.' },
    { title: 'Fotos & Dokumente', description: 'Pläne, Fotos und Anweisungen direkt im Auftrag – nicht in WhatsApp.' },
  ],
  ctaText: 'Team-Kommunikation verbessern',
  featureHighlights: [
    { title: 'Auftrags-Kommentare', description: 'Kommunikation direkt am Auftrag – kontextbezogen und nachvollziehbar.' },
    { title: 'Push-Nachrichten', description: 'Wichtige Updates sofort auf dem Handy – nicht in der Chat-Flut.' },
    { title: 'Fotos teilen', description: 'Fotos direkt zum Auftrag – mit Kommentar und Zeitstempel.' },
    { title: 'Dokumente anhängen', description: 'Pläne, Zeichnungen und PDFs direkt im Auftrag hinterlegen.' },
    { title: 'Lesebestätigung', description: 'Sieh, wer die Info gelesen hat.' },
    { title: 'Eine App für alles', description: 'Keine 5 Apps mehr – alles in Taskey.' },
  ],
  closingHeadline: 'Info raus. Angekommen.',
  closingText: 'Starte jetzt und kommuniziere strukturiert mit deinem Team.',
  relatedLinks: [
      {
          href: '/loesungen/chat-app-handwerksbetrieb',
          label: 'Chat-App Handwerk',
          description: 'Die komplette Chat-Lösung für den gesamten Betrieb.'
      },
      {
          href: '/loesungen/baustelleninfos-teilen-app',
          label: 'Baustelleninfos teilen',
          description: 'Pläne, Fotos und Updates direkt auf der Baustelle teilen.'
      },
      {
          href: '/loesungen/infos-an-monteure-senden',
          label: 'Infos an Monteure',
          description: 'Monteure unterwegs mit wichtigen Informationen versorgen.'
      }
  ],
};

export default function Page() {
  return <LandingPageTemplate data={data} />;
}
