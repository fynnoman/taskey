import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/landing/LandingPageTemplate';
import type { LandingPageData } from '@/components/landing/LandingPageTemplate';

export const metadata: Metadata = {
  title: 'Infos an Monteure senden – Taskey',
  description: 'Infos an Monteure schnell und zuverlässig senden. Taskey verteilt Auftragsinfos, Änderungen und Dokumente direkt auf das Smartphone.',
  alternates: { canonical: 'https://www.taskey.de/loesungen/infos-an-monteure-senden' },
};

const data: LandingPageData = {
  badge: 'Info-Verteilung',
  headline: 'Infos an',
  headlineHighlight: 'Monteure senden',
  subheadline: 'Schnell, zuverlässig und nachweisbar.',
  heroDescription: 'Ihre Monteure brauchen aktuelle Informationen – Auftragsänderungen, neue Pläne, Kundenwünsche. Taskey stellt sicher, dass jede Info ankommt und gelesen wird.',
  painPoints: [
    { icon: '📞', text: 'Jeden Monteur einzeln anrufen bei Änderungen – dauert ewig.' },
    { icon: '📱', text: 'WhatsApp-Nachrichten gehen in der Flut unter.' },
    { icon: '❓', text: 'Keine Bestätigung, ob die Info gelesen wurde.' },
    { icon: '📋', text: 'Wichtige Dokumente können nicht einfach geteilt werden.' },
  ],
  solutionTitle: 'Infos direkt auf das Monteur-Smartphone',
  solutionDescription: 'Taskey verteilt Informationen gezielt und nachweisbar.',
  solutionSteps: [
    { icon: '📝', title: 'Info erstellen', description: 'Nachricht verfassen und relevante Dokumente oder Fotos anhängen.' },
    { icon: '👥', title: 'Empfänger wählen', description: 'An einzelne Monteure, Teams oder alle senden.' },
    { icon: '✅', title: 'Lesebestätigung', description: 'Sehen, wer die Info gelesen hat und wer nicht.' },
  ],
  ctaText: 'Jetzt Infos effizienter verteilen',
  featureHighlights: [
    { icon: '🔔', title: 'Push-Benachrichtigung', description: 'Wichtige Infos erscheinen sofort auf dem Monteur-Smartphone.' },
    { icon: '✅', title: 'Lesebestätigung', description: 'Nachweisbar, dass jeder Monteur die Info erhalten und gelesen hat.' },
    { icon: '📎', title: 'Anhänge', description: 'Pläne, Fotos und Dokumente direkt mitsenden.' },
    { icon: '👥', title: 'Gruppenverteilung', description: 'Infos an einzelne Personen, Teams oder alle auf einmal.' },
    { icon: '📋', title: 'Projektbezogen', description: 'Infos dem richtigen Projekt zuordnen.' },
    { icon: '📁', title: 'Nachrichtenarchiv', description: 'Alle gesendeten Infos dokumentiert und abrufbar.' },
  ],
  closingHeadline: 'Jede Info kommt an.',
  closingText: 'Taskey macht Ihre Monteur-Kommunikation schnell, zuverlässig und nachweisbar.',
  relatedLinks: [
      {
          href: '/loesungen/chat-app-handwerksbetrieb',
          label: 'Chat-App Handwerk',
          description: 'Die Chat-Zentrale für die gesamte Teamkommunikation.'
      },
      {
          href: '/loesungen/einsatzplanung-monteure',
          label: 'Einsatzplanung Monteure',
          description: 'Monteure nicht nur informieren, sondern auch effizient einplanen.'
      },
      {
          href: '/loesungen/app-fuer-handwerker-aussendienst',
          label: 'App für Außendienst',
          description: 'Alle Infos, Aufträge und Nachrichten in einer App – unterwegs.'
      }
  ],
};

export default function Page() {
  return <LandingPageTemplate data={data} />;
}
