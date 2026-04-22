import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/landing/LandingPageTemplate';
import type { LandingPageData } from '@/components/landing/LandingPageTemplate';

export const metadata: Metadata = {
  title: 'Unterhaltsreinigung Software – Planung, Nachweis & Abrechnung | Taskey',
  description: 'Software für Unterhaltsreinigung: Objekte planen, Reinigungskräfte zuweisen, Leistung nachweisen und abrechnen. Alles in einer App. Jetzt testen!',
  alternates: { canonical: 'https://www.taskeyapp.com/loesungen/unterhaltsreinigung-software' },
};

const data: LandingPageData = {
  badge: 'Unterhaltsreinigung',
  headline: 'Unterhaltsreinigung –',
  headlineHighlight: 'digital geplant & nachgewiesen.',
  subheadline: 'Täglich wiederkehrende Reinigung braucht ein System, das mitdenkt.',
  heroDescription: 'Taskey plant deine Unterhaltsreinigung automatisch, erinnert dein Team an Aufgaben und dokumentiert jede Leistung per NFC – für jeden Auftraggeber nachvollziehbar.',
  painPoints: [
    { text: 'Tägliche Routinen werden vergessen oder unvollständig ausgeführt.' },
    { text: 'Auftraggeber fragen ständig nach Nachweisen – du hast keine.' },
    { text: 'Reinigungspläne existieren nur auf Papier und sind nie aktuell.' },
    { text: 'Personalwechsel fuehrt zu Chaos, weil nichts dokumentiert ist.' },
  ],
  solutionTitle: 'Jedes Objekt. Jeder Tag. Dokumentiert.',
  solutionDescription: 'Digitale Reinigungspläne mit automatischer Nachweisführung.',
  solutionSteps: [
    { title: 'Reinigungsplan erstellen', description: 'Definiere für jedes Objekt, was wann gereinigt werden muss – täglich, woechentlich, monatlich.' },
    { title: 'Team zuweisen', description: 'Weise Reinigungskräfte den Objekten zu. Die App zeigt ihnen genau, was zu tun ist.' },
    { title: 'Leistung nachweisen', description: 'NFC-Scan + Checkliste + Foto = lückenloser Nachweis für jeden Auftraggeber.' },
  ],
  ctaText: 'Unterhaltsreinigung digitalisieren',
  featureHighlights: [
    { title: 'Wiederkehrende Plaene', description: 'Reinigungsintervalle einmal definieren, automatisch wiederholen.' },
    { title: 'Checklisten pro Raum', description: 'Jeder Raum hat seine eigene Checkliste – abgehakt und dokumentiert.' },
    { title: 'Vertretungsplanung', description: 'Bei Krankheit automatisch Vertretung einplanen.' },
    { title: 'Auftraggeber-Portal', description: 'Kunden sehen live den Status ihrer Objekte.' },
    { title: 'Qualitätskontrollen', description: 'Stichprobenartige Kontrollen planen und dokumentieren.' },
    { title: 'Monatsberichte', description: 'Automatische Berichte pro Objekt für die Abrechnung.' },
  ],
  closingHeadline: 'Unterhaltsreinigung. Systematisch. Nachweisbar.',
  closingText: 'Teste Taskey 3 Monate kostenlos und bringe System in deine tägliche Reinigung.',
  relatedLinks: [
    { href: '/loesungen/reinigungspläne-digital-erstellen', label: 'Reinigungspläne digital', description: 'Digitale Reinigungspläne für alle Objekte erstellen.' },
    { href: '/loesungen/einsatzplanung-gebäudereinigung', label: 'Einsatzplanung Reinigung', description: 'Teams optimal auf Objekte verteilen.' },
    { href: '/loesungen/nfc-leistungsnachweis-reinigung', label: 'NFC Leistungsnachweis', description: 'Jeden Einsatz per NFC-Scan nachweisen.' },
  ],
};

export default function Page() {
  return <LandingPageTemplate data={data} />;
}
