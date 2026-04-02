import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/landing/LandingPageTemplate';
import type { LandingPageData } from '@/components/landing/LandingPageTemplate';

export const metadata: Metadata = {
  title: 'Handwerk Software einfach – Alles in einer App | Taskey',
  description: 'Einfache Handwerk-Software: Aufträge, Zeiten, Rechnungen in einer App. Keine IT nötig, sofort einsatzbereit. Jetzt 14 Tage kostenlos testen!',
  alternates: { canonical: 'https://www.taskey.de/loesungen/handwerk-software-einfach' },
};

const data: LandingPageData = {
  badge: 'Einfache Handwerk-Software',
  headline: 'Handwerk-Software –',
  headlineHighlight: 'endlich einfach.',
  subheadline: 'Alles in einer App. Keine IT nötig. In 5 Minuten startklar.',
  heroDescription: 'Taskey ist die einfachste Software für Handwerksbetriebe. Aufträge, Zeiterfassung, Dokumentation, Rechnungen – alles in einer App, so einfach wie WhatsApp.',
  painPoints: [
    { text: 'Bisherige Software war zu komplex – keiner im Team nutzt sie.' },
    { text: 'Enterprise-Lösungen kosten Tausende und brauchen IT-Support.' },
    { text: 'Du brauchst 5 verschiedene Apps für 5 verschiedene Aufgaben.' },
    { text: 'Die Einrichtung dauert Wochen – du hast keine Zeit dafür.' },
  ],
  solutionTitle: 'Eine App. Alles drin. Sofort loslegen.',
  solutionDescription: 'Registrieren, Mitarbeiter einladen, ersten Auftrag anlegen – in 5 Minuten.',
  solutionSteps: [
    { title: 'Registrieren', description: '14-Tage-Test kostenlos. Keine Kreditkarte. Account in 2 Minuten.' },
    { title: 'Team einladen', description: 'Mitarbeiter per Link einladen – sie laden die App herunter und sind drin.' },
    { title: 'Loslegen', description: 'Ersten Auftrag anlegen, Zeiten erfassen, Fotos machen – alles sofort nutzbar.' },
  ],
  ctaText: 'Jetzt einfach starten',
  featureHighlights: [
    { title: 'Aufträge', description: 'Aufträge anlegen, zuweisen und tracken – ganz einfach.' },
    { title: 'Zeiterfassung', description: 'Stempeln per App, NFC oder GPS – ein Tap.' },
    { title: 'Fotodokumentation', description: 'Fotos machen und dem Auftrag zuordnen.' },
    { title: 'Rechnungen', description: 'Rechnungen aus Aufträgen erstellen – automatisch.' },
    { title: 'NFC-Tags', description: 'Werkzeuge und Baustellen mit NFC-Tags digitalisieren.' },
    { title: 'Für jedes Handy', description: 'Läuft auf iOS und Android – keine Spezialgeräte.' },
  ],
  closingHeadline: 'Einfach. Digital. Handwerk.',
  closingText: 'Starte jetzt und erlebe, wie einfach Software sein kann.',
  relatedLinks: [
      {
          href: '/loesungen/alles-in-einer-app-handwerksbetrieb',
          label: 'Alles in einer App',
          description: 'Eine App für alles – keine komplizierte Software-Landschaft.'
      },
      {
          href: '/loesungen/digitalisierung-handwerksbetrieb',
          label: 'Digitalisierung Handwerk',
          description: 'Einfache Software als Schlüssel zur erfolgreichen Digitalisierung.'
      },
      {
          href: '/loesungen/app-fuer-handwerker-aussendienst',
          label: 'App für Außendienst',
          description: 'Einfach auch unterwegs – die App für Handwerker im Außendienst.'
      }
  ],
};

export default function Page() {
  return <LandingPageTemplate data={data} />;
}
