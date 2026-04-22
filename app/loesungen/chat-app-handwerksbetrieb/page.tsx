import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/landing/LandingPageTemplate';
import type { LandingPageData } from '@/components/landing/LandingPageTemplate';

export const metadata: Metadata = {
  title: 'Chat App Handwerksbetrieb – Taskey',
  description: 'Chat App für Handwerksbetriebe. Taskey bietet einen sicheren Team-Chat für die Kommunikation zwischen Büro, Baustelle und Werkstatt.',
  alternates: { canonical: 'https://www.taskeyapp.com/loesungen/chat-app-handwerksbetrieb' },
};

const data: LandingPageData = {
  badge: 'Team-Chat',
  headline: 'Chat App für Ihren',
  headlineHighlight: 'Handwerksbetrieb',
  subheadline: 'Sichere Team-Kommunikation statt WhatsApp.',
  heroDescription: 'WhatsApp ist nicht für geschäftliche Kommunikation gemacht. Taskey bietet einen sicheren, DSGVO-konformen Team-Chat – integriert in Ihre Projektarbeit.',
  painPoints: [
    { text: 'WhatsApp-Gruppen mit 500 ungelesenen Nachrichten – keiner blickt durch.' },
    { text: 'WhatsApp ist nicht DSGVO-konform – ein Risiko für Ihren Betrieb.' },
    { text: 'Wichtige Infos gehen im Chat-Verlauf unter.' },
    { text: 'Private und geschäftliche Nachrichten vermischen sich.' },
  ],
  solutionTitle: 'Team-Chat, der zum Handwerk passt',
  solutionDescription: 'Taskey gibt Ihrem Team einen eigenen, sicheren Kommunikationskanal.',
  solutionSteps: [
    { title: 'Kanal erstellen', description: 'Channels für Projekte, Teams oder Themen anlegen.' },
    { title: 'Nachricht senden', description: 'Text, Fotos und Dokumente schnell und einfach teilen.' },
    { title: 'Projektbezogen', description: 'Nachrichten sind dem Projekt zugeordnet – kein Suchen mehr.' },
  ],
  ctaText: 'Jetzt Team-Chat starten',
  featureHighlights: [
    { title: 'Projekt-Channels', description: 'Separate Kanäle pro Projekt, Baustelle oder Team.' },
    { title: 'Foto-Sharing', description: 'Fotos direkt teilen – sie werden automatisch dem Projekt zugeordnet.' },
    { title: 'Aufgaben aus Chat', description: 'Aus Nachrichten direkt Aufgaben erstellen.' },
    { title: 'DSGVO-konform', description: 'Sichere Kommunikation auf deutschen Servern.' },
    { title: 'Push-Benachrichtigungen', description: 'Wichtige Nachrichten kommen sofort an.' },
    { title: 'Dateien teilen', description: 'Pläne, Dokumente und Fotos sicher im Chat teilen.' },
  ],
  closingHeadline: 'Kommunikation – sicher und projektbezogen.',
  closingText: 'Taskey gibt Ihrem Team den Chat, den WhatsApp nicht bieten kann.',
  relatedLinks: [
      {
          href: '/loesungen/team-kommunikation-baustelle',
          label: 'Team-Kommunikation Baustelle',
          description: 'Speziell für Baustellen: Chat, Infos und Updates ans Team.'
      },
      {
          href: '/loesungen/infos-an-monteure-senden',
          label: 'Infos an Monteure senden',
          description: 'Wichtige Informationen gezielt an einzelne Monteure senden.'
      },
      {
          href: '/loesungen/baustelleninfos-teilen-app',
          label: 'Baustelleninfos teilen',
          description: 'Fotos, Pläne und Updates zur Baustelle mit dem Team teilen.'
      }
  ],
};

export default function Page() {
  return <LandingPageTemplate data={data} />;
}
