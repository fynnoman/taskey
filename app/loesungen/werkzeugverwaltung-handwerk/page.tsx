import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/landing/LandingPageTemplate';
import type { LandingPageData } from '@/components/landing/LandingPageTemplate';

export const metadata: Metadata = {
  title: 'Werkzeugverwaltung Handwerk | Taskey',
  description: 'Werkzeugverwaltung für Handwerksbetriebe: Werkzeuge mit NFC-Tags tracken, Standorte sehen, Wartungen planen. Jetzt kostenlos testen!',
  alternates: { canonical: 'https://www.taskey.de/loesungen/werkzeugverwaltung-handwerk' },
};

const data: LandingPageData = {
  badge: 'Werkzeugverwaltung',
  headline: 'Werkzeug finden –',
  headlineHighlight: 'sofort statt stundenlang.',
  subheadline: 'NFC-Tag scannen → Standort, letzter Nutzer und nächste Wartung sehen.',
  heroDescription: 'Taskey macht dein Werkzeug smart: Klebe NFC-Tags auf Maschinen und Werkzeuge. Ein Scan zeigt dir alles: Wo ist es, wer hatte es zuletzt, wann ist die nächste Wartung?',
  painPoints: [
    { icon: '🔧', text: 'Jeden Morgen suchen 3 Leute die Rüttelplatte, den Akkuschrauber oder die Stichsäge.' },
    { icon: '📍', text: 'Werkzeug steht auf einer Baustelle, aber niemand weiß auf welcher.' },
    { icon: '⚙️', text: 'Wartungstermine werden vergessen – Ausfälle und Reparaturkosten steigen.' },
    { icon: '💸', text: 'Werkzeug verschwindet – keiner fühlt sich verantwortlich.' },
  ],
  solutionTitle: 'Jedes Werkzeug. Geortet. Gewartet.',
  solutionDescription: 'NFC-Tags + Taskey App = volle Kontrolle über dein Werkzeuginventar.',
  solutionSteps: [
    { icon: '🏷️', title: 'NFC-Tag aufkleben', description: 'Klebe einen wetterfesten NFC-Tag auf jede Maschine und jedes Werkzeug.' },
    { icon: '📱', title: 'Scannen & sehen', description: 'Ein Scan zeigt: Standort, Zustand, letzter Nutzer, Wartungshistorie.' },
    { icon: '🔔', title: 'Wartung planen', description: 'Automatische Erinnerungen an anstehende Wartungen und Prüfungen.' },
  ],
  ctaText: 'Werkzeuge digital tracken',
  featureHighlights: [
    { icon: '🏷️', title: 'NFC-Tracking', description: 'Jeder Scan erfasst GPS-Position und Zeitpunkt.' },
    { icon: '📍', title: 'Standort-Historie', description: 'Sieh, wo das Werkzeug war und wo es jetzt ist.' },
    { icon: '⚙️', title: 'Wartungsplanung', description: 'Automatische Erinnerungen für Wartung und TÜV.' },
    { icon: '📋', title: 'Inventarliste', description: 'Vollständiges digitales Inventar aller Werkzeuge und Maschinen.' },
    { icon: '👤', title: 'Nutzer-Zuordnung', description: 'Wer hat das Werkzeug zuletzt benutzt und wo?' },
    { icon: '📸', title: 'Zustandsdokumentation', description: 'Fotos vom Zustand bei Ausgabe und Rückgabe.' },
  ],
  closingHeadline: 'Werkzeug? Gefunden.',
  closingText: 'Starte jetzt und verliere nie wieder Werkzeug auf der Baustelle.',
  relatedLinks: [
      {
          href: '/loesungen/lagerverwaltung-handwerksbetrieb',
          label: 'Lagerverwaltung',
          description: 'Werkzeuge und Material gemeinsam am selben Ort verwalten.'
      },
      {
          href: '/loesungen/materialverwaltung-handwerk',
          label: 'Materialverwaltung',
          description: 'Nicht nur Werkzeuge – auch Verbrauchsmaterial im Griff behalten.'
      },
      {
          href: '/loesungen/fahrzeugplanung-handwerksbetrieb',
          label: 'Fahrzeugplanung',
          description: 'Werkzeuge, Fahrzeuge und Geräte gemeinsam disponieren.'
      }
  ],
};

export default function Page() {
  return <LandingPageTemplate data={data} />;
}
