import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/landing/LandingPageTemplate';
import type { LandingPageData } from '@/components/landing/LandingPageTemplate';

export const metadata: Metadata = {
  title: 'Unterhaltsreinigung Software – Planung, Nachweis & Abrechnung | Taskey',
  description: 'Software fuer Unterhaltsreinigung: Objekte planen, Reinigungskraefte zuweisen, Leistung nachweisen und abrechnen. Alles in einer App. Jetzt testen!',
  alternates: { canonical: 'https://www.taskeyapp.com/loesungen/unterhaltsreinigung-software' },
};

const data: LandingPageData = {
  badge: 'Unterhaltsreinigung',
  headline: 'Unterhaltsreinigung –',
  headlineHighlight: 'digital geplant & nachgewiesen.',
  subheadline: 'Taeglich wiederkehrende Reinigung braucht ein System, das mitdenkt.',
  heroDescription: 'Taskey plant deine Unterhaltsreinigung automatisch, erinnert dein Team an Aufgaben und dokumentiert jede Leistung per NFC – fuer jeden Auftraggeber nachvollziehbar.',
  painPoints: [
    { text: 'Taegliche Routinen werden vergessen oder unvollstaendig ausgefuehrt.' },
    { text: 'Auftraggeber fragen staendig nach Nachweisen – du hast keine.' },
    { text: 'Reinigungsplaene existieren nur auf Papier und sind nie aktuell.' },
    { text: 'Personalwechsel fuehrt zu Chaos, weil nichts dokumentiert ist.' },
  ],
  solutionTitle: 'Jedes Objekt. Jeder Tag. Dokumentiert.',
  solutionDescription: 'Digitale Reinigungsplaene mit automatischer Nachweisfuehrung.',
  solutionSteps: [
    { title: 'Reinigungsplan erstellen', description: 'Definiere fuer jedes Objekt, was wann gereinigt werden muss – taeglich, woechentlich, monatlich.' },
    { title: 'Team zuweisen', description: 'Weise Reinigungskraefte den Objekten zu. Die App zeigt ihnen genau, was zu tun ist.' },
    { title: 'Leistung nachweisen', description: 'NFC-Scan + Checkliste + Foto = lueckenloser Nachweis fuer jeden Auftraggeber.' },
  ],
  ctaText: 'Unterhaltsreinigung digitalisieren',
  featureHighlights: [
    { title: 'Wiederkehrende Plaene', description: 'Reinigungsintervalle einmal definieren, automatisch wiederholen.' },
    { title: 'Checklisten pro Raum', description: 'Jeder Raum hat seine eigene Checkliste – abgehakt und dokumentiert.' },
    { title: 'Vertretungsplanung', description: 'Bei Krankheit automatisch Vertretung einplanen.' },
    { title: 'Auftraggeber-Portal', description: 'Kunden sehen live den Status ihrer Objekte.' },
    { title: 'Qualitaetskontrollen', description: 'Stichprobenartige Kontrollen planen und dokumentieren.' },
    { title: 'Monatsberichte', description: 'Automatische Berichte pro Objekt fuer die Abrechnung.' },
  ],
  closingHeadline: 'Unterhaltsreinigung. Systematisch. Nachweisbar.',
  closingText: 'Teste Taskey 14 Tage kostenlos und bringe System in deine taegliche Reinigung.',
  relatedLinks: [
    { href: '/loesungen/reinigungsplaene-digital-erstellen', label: 'Reinigungsplaene digital', description: 'Digitale Reinigungsplaene fuer alle Objekte erstellen.' },
    { href: '/loesungen/einsatzplanung-gebaeudereinigung', label: 'Einsatzplanung Reinigung', description: 'Teams optimal auf Objekte verteilen.' },
    { href: '/loesungen/nfc-leistungsnachweis-reinigung', label: 'NFC Leistungsnachweis', description: 'Jeden Einsatz per NFC-Scan nachweisen.' },
  ],
};

export default function Page() {
  return <LandingPageTemplate data={data} />;
}
