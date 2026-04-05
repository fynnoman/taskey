import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/landing/LandingPageTemplate';
import type { LandingPageData } from '@/components/landing/LandingPageTemplate';

export const metadata: Metadata = {
  title: 'Mobile Zeiterfassung für Monteure | Taskey',
  description: 'Mobile Zeiterfassung für Monteure und Techniker im Außendienst. GPS-basiert, offline-fähig, NFC-Tags. Jetzt 14 Tage kostenlos testen!',
  alternates: { canonical: 'https://www.taskeyapp.com/loesungen/mobile-zeiterfassung-monteure' },
};

const data: LandingPageData = {
  badge: 'Mobile Zeiterfassung',
  headline: 'Monteure im Außendienst –',
  headlineHighlight: 'Zeiten mobil erfassen.',
  subheadline: 'Deine Monteure stempeln unterwegs per App – du hast alle Zeiten zentral.',
  heroDescription: 'Ob auf der Baustelle, beim Kunden oder auf der Fahrt: Taskey erfasst die Arbeitszeiten deiner Monteure mobil, GPS-gestützt und offline-fähig.',
  painPoints: [
    { text: 'Monteure sind den ganzen Tag unterwegs – Zeiterfassung geht unter.' },
    { text: 'Auf Baustellen gibt es kein Internet – stationäre Systeme funktionieren nicht.' },
    { text: 'Fahrtzeiten, Einsatzzeiten und Pausen werden durcheinander gewürfelt.' },
    { text: 'Zeiten müssen abends nochmal ins System eingetragen werden.' },
  ],
  solutionTitle: 'Mobile Zeiterfassung, die mitfährt.',
  solutionDescription: 'Die Taskey App läuft auf jedem Smartphone – online und offline.',
  solutionSteps: [
    { title: 'App auf dem Handy', description: 'Monteure stempeln direkt auf ihrem Smartphone ein und aus – beim Kunden, auf der Baustelle, im Fahrzeug.' },
    { title: 'Offline-Modus', description: 'Kein Netz? Kein Problem. Zeiten werden lokal gespeichert und bei Verbindung synchronisiert.' },
    { title: 'Fahrtzeiten erfassen', description: 'Start, Ziel und Dauer der Fahrt – automatisch getrennt von der Arbeitszeit.' },
  ],
  ctaText: 'Mobile Zeiterfassung starten',
  featureHighlights: [
    { title: 'iOS & Android', description: 'Läuft auf allen gängigen Smartphones – keine Spezialgeräte nötig.' },
    { title: 'Offline-fähig', description: 'Alle Funktionen auch ohne Internetverbindung nutzbar.' },
    { title: 'Fahrtenbuch', description: 'Automatisches Fahrtenbuch mit GPS-Routenprotokoll.' },
    { title: 'GPS-Tracking', description: 'Standort bei Ein- und Ausstempeln automatisch dokumentiert.' },
    { title: 'NFC-Tags beim Kunden', description: 'NFC-Tags bei Stammkunden für sekundenschnelles Einstempeln.' },
    { title: 'Einsatz-Reports', description: 'Automatische Übersichten pro Monteur, pro Kunde, pro Tag.' },
  ],
  closingHeadline: 'Unterwegs arbeiten. Automatisch erfassen.',
  closingText: 'Starte jetzt mit mobiler Zeiterfassung für dein Montageteam.',
  relatedLinks: [
      {
          href: '/loesungen/zeiterfassung-app-aussendienst',
          label: 'Zeiterfassung App Außendienst',
          description: 'Die perfekte App für Außendienstmitarbeiter – Zeiten mobil erfassen, egal wo.'
      },
      {
          href: '/loesungen/app-fuer-handwerker-aussendienst',
          label: 'App für Handwerker im Außendienst',
          description: 'Alles in einer App: Zeiten, Aufträge, Materialien – unterwegs immer dabei.'
      },
      {
          href: '/loesungen/stundennachweise-digital',
          label: 'Stundennachweise digital',
          description: 'Aus mobil erfassten Zeiten werden automatisch fertige Stundennachweise.'
      }
  ],
};

export default function Page() {
  return <LandingPageTemplate data={data} />;
}
