import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/landing/LandingPageTemplate';
import type { LandingPageData } from '@/components/landing/LandingPageTemplate';

export const metadata: Metadata = {
  title: 'Hotelreinigung Software – Housekeeping digital steuern | Taskey',
  description: 'Housekeeping-Software für Hotels: Zimmerreinigung planen, Qualität prüfen, Wäsche managen. Speziell für Hotels im DACH-Raum. Jetzt testen!',
  alternates: { canonical: 'https://www.taskeyapp.com/loesungen/hotelreinigung-software' },
};

const data: LandingPageData = {
  badge: 'Hotelreinigung',
  headline: 'Hotelreinigung –',
  headlineHighlight: 'Housekeeping digital gesteuert.',
  subheadline: 'Zimmer, Lobby, Konferenz – jede Reinigung geplant und geprüft.',
  heroDescription: 'Hotels brauchen perfekte Reinigung – jedes Zimmer, jeder Tag. Taskey steuert dein Housekeeping-Team und sorgt für gleichbleibende Qualität.',
  painPoints: [
    { text: 'Check-in-Zeiten müssen eingehalten werden – Zimmer müssen puenktlich fertig sein.' },
    { text: 'Gaestebeschwerden über Sauberkeit schädigen die Online-Bewertung.' },
    { text: 'Wäschewechsel und Minibar müssen koordiniert werden.' },
    { text: 'Saisonale Auslastungsschwankungen machen die Personalplanung schwierig.' },
  ],
  solutionTitle: 'Housekeeping. Digital. Puenktlich. Perfekt.',
  solutionDescription: 'Jedes Zimmer, jede Aufgabe, jeder Status – in Echtzeit.',
  solutionSteps: [
    { title: 'Zimmer zuweisen', description: 'Automatische Zuweisung basierend auf Check-out-Liste und Verfügbarkeit.' },
    { title: 'Checkliste abarbeiten', description: 'Digitale Checkliste pro Zimmertyp – nichts wird vergessen.' },
    { title: 'Qualität prüfen', description: 'Supervisor prüft stichprobenartig und gibt digital frei.' },
  ],
  ctaText: 'Housekeeping digitalisieren',
  featureHighlights: [
    { title: 'Zimmerstatus live', description: 'Echtzeit-Übersicht: schmutzig, in Reinigung, fertig, geprüft.' },
    { title: 'Check-out-Integration', description: 'Automatische Benachrichtigung bei Check-out.' },
    { title: 'Checklisten pro Zimmertyp', description: 'Suite, Doppelzimmer, Einzelzimmer – jeweils eigene Standards.' },
    { title: 'Minibar & Wäsche', description: 'Minibar-Auffuellung und Wäschewechsel tracken.' },
    { title: 'Supervisor-Kontrolle', description: 'Stichprobenkontrollen mit digitaler Freigabe.' },
    { title: 'Personalplanung', description: 'Schichten nach Auslastung automatisch planen.' },
  ],
  closingHeadline: 'Hotelreinigung. Immer puenktlich. Immer perfekt.',
  closingText: 'Teste Taskey 14 Tage kostenlos und optimiere dein Housekeeping.',
  relatedLinks: [
    { href: '/loesungen/schichtplanung-reinigungsunternehmen', label: 'Schichtplanung', description: 'Schichten nach Auslastung planen.' },
    { href: '/loesungen/checklisten-reinigung-digital', label: 'Checklisten Reinigung', description: 'Digitale Checklisten für jeden Zimmertyp.' },
    { href: '/loesungen/qualitaetskontrolle-gebäudereinigung', label: 'Qualitätskontrolle', description: 'Supervisor-Kontrollen digital abwickeln.' },
  ],
};

export default function Page() {
  return <LandingPageTemplate data={data} />;
}
