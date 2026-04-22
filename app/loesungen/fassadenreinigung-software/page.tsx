import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/landing/LandingPageTemplate';
import type { LandingPageData } from '@/components/landing/LandingPageTemplate';

export const metadata: Metadata = {
  title: 'Fassadenreinigung Software – Aufträge planen & dokumentieren | Taskey',
  description: 'Software für Fassadenreinigung: Klinker, Naturstein, Putz, Metall – Aufträge planen, Sicherheit dokumentieren, Nachweise erstellen. Jetzt testen!',
  alternates: { canonical: 'https://www.taskeyapp.com/loesungen/fassadenreinigung-software' },
};

const data: LandingPageData = {
  badge: 'Fassadenreinigung',
  headline: 'Fassadenreinigung –',
  headlineHighlight: 'sicher geplant, sauber dokumentiert.',
  subheadline: 'Jede Fassade, jedes Verfahren, jeder Nachweis – digital.',
  heroDescription: 'Fassadenreinigung erfordert Sicherheitsplanung und exakte Dokumentation. Taskey verwaltet Aufträge, Sicherheitsprotokolle und Leistungsnachweise.',
  painPoints: [
    { text: 'Sicherheitsvorschriften für Hoehenarbeiten müssen dokumentiert werden.' },
    { text: 'Verschiedene Fassadenmaterialien erfordern unterschiedliche Verfahren.' },
    { text: 'Grosse Flaechen machen die Kalkulation komplex.' },
    { text: 'Witterungsabhaengigkeit erfordert flexible Terminplanung.' },
  ],
  solutionTitle: 'Fassadenreinigung. Sicher. Dokumentiert.',
  solutionDescription: 'Sicherheitsprotokoll, Reinigungsnachweis und Abrechnung in einer App.',
  solutionSteps: [
    { title: 'Sicherheit planen', description: 'Sicherheitsprotokoll erstellen, PSA-Checkliste abarbeiten.' },
    { title: 'Reinigung dokumentieren', description: 'Fortschritt per Foto und Zeitstempel festhalten.' },
    { title: 'Nachweis erstellen', description: 'Leistungsnachweis mit Vorher/Nachher-Fotos generieren.' },
  ],
  ctaText: 'Fassadenreinigung digitalisieren',
  featureHighlights: [
    { title: 'Sicherheitsprotokolle', description: 'Digitale Sicherheitschecklisten für Hoehenarbeiten.' },
    { title: 'Witterungsplanung', description: 'Wetterdaten beruecksichtigen und Termine flexibel verschieben.' },
    { title: 'Flaechenberechnung', description: 'Fassadenflaechen erfassen und kalkulieren.' },
    { title: 'Verfahrenswahl', description: 'Reinigungsverfahren je nach Fassadenmaterial vorschlagen.' },
    { title: 'Fotodokumentation', description: 'Vorher/Nachher-Vergleich für den Auftraggeber.' },
    { title: 'Geräteplanung', description: 'Hubbuehnen und Spezialgeräte Aufträgen zuweisen.' },
  ],
  closingHeadline: 'Fassadenreinigung. Professionell. Nachweisbar.',
  closingText: 'Teste Taskey 3 Monate kostenlos und plane deine Fassadenreinigung digital.',
  relatedLinks: [
    { href: '/loesungen/glasreinigung-software', label: 'Glasreinigung', description: 'Fenster und Glasfassaden professionell reinigen.' },
    { href: '/loesungen/nfc-leistungsnachweis-reinigung', label: 'NFC Leistungsnachweis', description: 'Jeden Einsatz per NFC nachweisen.' },
    { href: '/loesungen/inventar-verwalten-reinigungsfirma', label: 'Inventar Reinigung', description: 'Geräte und Reinigungsmittel verwalten.' },
  ],
};

export default function Page() {
  return <LandingPageTemplate data={data} />;
}
