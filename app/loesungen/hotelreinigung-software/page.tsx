import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/landing/LandingPageTemplate';
import type { LandingPageData } from '@/components/landing/LandingPageTemplate';

export const metadata: Metadata = {
  title: 'Hotelreinigung Software – Housekeeping digital steuern | Taskey',
  description: 'Housekeeping-Software fuer Hotels: Zimmerreinigung planen, Qualitaet pruefen, Waesche managen. Speziell fuer Hotels im DACH-Raum. Jetzt testen!',
  alternates: { canonical: 'https://www.taskeyapp.com/loesungen/hotelreinigung-software' },
};

const data: LandingPageData = {
  badge: 'Hotelreinigung',
  headline: 'Hotelreinigung –',
  headlineHighlight: 'Housekeeping digital gesteuert.',
  subheadline: 'Zimmer, Lobby, Konferenz – jede Reinigung geplant und geprueft.',
  heroDescription: 'Hotels brauchen perfekte Reinigung – jedes Zimmer, jeder Tag. Taskey steuert dein Housekeeping-Team und sorgt fuer gleichbleibende Qualitaet.',
  painPoints: [
    { text: 'Check-in-Zeiten muessen eingehalten werden – Zimmer muessen puenktlich fertig sein.' },
    { text: 'Gaestebeschwerden ueber Sauberkeit schaedigen die Online-Bewertung.' },
    { text: 'Waeschewechsel und Minibar muessen koordiniert werden.' },
    { text: 'Saisonale Auslastungsschwankungen machen die Personalplanung schwierig.' },
  ],
  solutionTitle: 'Housekeeping. Digital. Puenktlich. Perfekt.',
  solutionDescription: 'Jedes Zimmer, jede Aufgabe, jeder Status – in Echtzeit.',
  solutionSteps: [
    { title: 'Zimmer zuweisen', description: 'Automatische Zuweisung basierend auf Check-out-Liste und Verfuegbarkeit.' },
    { title: 'Checkliste abarbeiten', description: 'Digitale Checkliste pro Zimmertyp – nichts wird vergessen.' },
    { title: 'Qualitaet pruefen', description: 'Supervisor prueft stichprobenartig und gibt digital frei.' },
  ],
  ctaText: 'Housekeeping digitalisieren',
  featureHighlights: [
    { title: 'Zimmerstatus live', description: 'Echtzeit-Uebersicht: schmutzig, in Reinigung, fertig, geprueft.' },
    { title: 'Check-out-Integration', description: 'Automatische Benachrichtigung bei Check-out.' },
    { title: 'Checklisten pro Zimmertyp', description: 'Suite, Doppelzimmer, Einzelzimmer – jeweils eigene Standards.' },
    { title: 'Minibar & Waesche', description: 'Minibar-Auffuellung und Waeschewechsel tracken.' },
    { title: 'Supervisor-Kontrolle', description: 'Stichprobenkontrollen mit digitaler Freigabe.' },
    { title: 'Personalplanung', description: 'Schichten nach Auslastung automatisch planen.' },
  ],
  closingHeadline: 'Hotelreinigung. Immer puenktlich. Immer perfekt.',
  closingText: 'Teste Taskey 14 Tage kostenlos und optimiere dein Housekeeping.',
  relatedLinks: [
    { href: '/loesungen/schichtplanung-reinigungsunternehmen', label: 'Schichtplanung', description: 'Schichten nach Auslastung planen.' },
    { href: '/loesungen/checklisten-reinigung-digital', label: 'Checklisten Reinigung', description: 'Digitale Checklisten fuer jeden Zimmertyp.' },
    { href: '/loesungen/qualitaetskontrolle-gebaeudereinigung', label: 'Qualitaetskontrolle', description: 'Supervisor-Kontrollen digital abwickeln.' },
  ],
};

export default function Page() {
  return <LandingPageTemplate data={data} />;
}
