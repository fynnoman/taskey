import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/landing/LandingPageTemplate';
import type { LandingPageData } from '@/components/landing/LandingPageTemplate';

export const metadata: Metadata = {
  title: 'Handwerk Software einfach – Alles in einer App | Taskey',
  description: 'Einfache Handwerk-Software: Aufträge, Zeiten, Rechnungen in einer App. Keine IT nötig, sofort einsatzbereit. Jetzt 14 Tage kostenlos testen!',
  alternates: { canonical: 'https://taskey.de/loesungen/handwerk-software-einfach' },
};

const data: LandingPageData = {
  badge: 'Einfache Handwerk-Software',
  headline: 'Handwerk-Software –',
  headlineHighlight: 'endlich einfach.',
  subheadline: 'Alles in einer App. Keine IT nötig. In 5 Minuten startklar.',
  heroDescription: 'Taskey ist die einfachste Software für Handwerksbetriebe. Aufträge, Zeiterfassung, Dokumentation, Rechnungen – alles in einer App, so einfach wie WhatsApp.',
  painPoints: [
    { icon: '💻', text: 'Bisherige Software war zu komplex – keiner im Team nutzt sie.' },
    { icon: '💰', text: 'Enterprise-Lösungen kosten Tausende und brauchen IT-Support.' },
    { icon: '📱', text: 'Du brauchst 5 verschiedene Apps für 5 verschiedene Aufgaben.' },
    { icon: '⏰', text: 'Die Einrichtung dauert Wochen – du hast keine Zeit dafür.' },
  ],
  solutionTitle: 'Eine App. Alles drin. Sofort loslegen.',
  solutionDescription: 'Registrieren, Mitarbeiter einladen, ersten Auftrag anlegen – in 5 Minuten.',
  solutionSteps: [
    { icon: '📱', title: 'Registrieren', description: '14-Tage-Test kostenlos. Keine Kreditkarte. Account in 2 Minuten.' },
    { icon: '👥', title: 'Team einladen', description: 'Mitarbeiter per Link einladen – sie laden die App herunter und sind drin.' },
    { icon: '🚀', title: 'Loslegen', description: 'Ersten Auftrag anlegen, Zeiten erfassen, Fotos machen – alles sofort nutzbar.' },
  ],
  ctaText: 'Jetzt einfach starten',
  featureHighlights: [
    { icon: '📋', title: 'Aufträge', description: 'Aufträge anlegen, zuweisen und tracken – ganz einfach.' },
    { icon: '⏱️', title: 'Zeiterfassung', description: 'Stempeln per App, NFC oder GPS – ein Tap.' },
    { icon: '📸', title: 'Fotodokumentation', description: 'Fotos machen und dem Auftrag zuordnen.' },
    { icon: '📄', title: 'Rechnungen', description: 'Rechnungen aus Aufträgen erstellen – automatisch.' },
    { icon: '🏷️', title: 'NFC-Tags', description: 'Werkzeuge und Baustellen mit NFC-Tags digitalisieren.' },
    { icon: '📱', title: 'Für jedes Handy', description: 'Läuft auf iOS und Android – keine Spezialgeräte.' },
  ],
  closingHeadline: 'Einfach. Digital. Handwerk.',
  closingText: 'Starte jetzt und erlebe, wie einfach Software sein kann.',
};

export default function Page() {
  return <LandingPageTemplate data={data} />;
}
