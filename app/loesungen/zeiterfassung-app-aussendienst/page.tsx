import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/landing/LandingPageTemplate';
import type { LandingPageData } from '@/components/landing/LandingPageTemplate';

export const metadata: Metadata = {
  title: 'Zeiterfassung App für Außendienst | Taskey',
  description: 'Zeiterfassung App für Außendienst-Mitarbeiter: GPS, NFC, offline-fähig. Perfekt für Handwerk, Technik & Service. Jetzt kostenlos testen!',
  alternates: { canonical: 'https://www.taskey.de/loesungen/zeiterfassung-app-aussendienst' },
};

const data: LandingPageData = {
  badge: 'Außendienst App',
  headline: 'Zeiterfassung im Außendienst –',
  headlineHighlight: 'per App statt per Anruf.',
  subheadline: 'Deine Außendienst-Mitarbeiter erfassen Zeiten direkt vor Ort – du sparst Stunden im Büro.',
  heroDescription: 'Die Taskey App ist speziell für Außendienstteams gebaut: GPS-basiert, offline-fähig, mit NFC-Support. Ein Tap reicht.',
  painPoints: [
    { icon: '📞', text: 'Außendienstler rufen im Büro an, um ihre Zeiten durchzugeben.' },
    { icon: '📝', text: 'Zeiten werden abends aus dem Gedächtnis rekonstruiert.' },
    { icon: '🗂️', text: 'Bürokraft tippt handschriftliche Zettel in Excel ab.' },
    { icon: '❌', text: 'Fehlerquote hoch – niemand weiß, ob Zeiten stimmen.' },
  ],
  solutionTitle: 'Eine App für den kompletten Außendienst.',
  solutionDescription: 'Stempeln, dokumentieren, abrechnen – alles in einer App.',
  solutionSteps: [
    { icon: '📱', title: 'App starten, einstempeln', description: 'Ein Tap auf dem Smartphone – Arbeitszeit läuft. GPS-Position wird automatisch erfasst.' },
    { icon: '📸', title: 'Einsatz dokumentieren', description: 'Fotos, Notizen und Material direkt im Einsatz erfassen – kein Nachdokumentieren.' },
    { icon: '📤', title: 'Automatisch im Büro', description: 'Alle Daten sind sofort im Büro verfügbar – kein Abtippen, kein Nachfragen.' },
  ],
  ctaText: 'Außendienst-App testen',
  featureHighlights: [
    { icon: '📱', title: 'Intuitive App', description: 'So einfach wie WhatsApp – keine Schulung nötig.' },
    { icon: '📍', title: 'GPS-Protokoll', description: 'Wo war der Mitarbeiter? GPS-Nachweis für jeden Einsatz.' },
    { icon: '📸', title: 'Fotodokumentation', description: 'Fotos mit automatischem Zeitstempel und GPS-Tag.' },
    { icon: '📡', title: 'Offline-Modus', description: 'Funktioniert auch im Keller oder in Funklöchern.' },
    { icon: '🔔', title: 'Push-Nachrichten', description: 'Neue Aufträge und Änderungen direkt aufs Handy.' },
    { icon: '📊', title: 'Echtzeit-Dashboards', description: 'Im Büro siehst du live, wer wo im Einsatz ist.' },
  ],
  closingHeadline: 'Außendienst ohne Papierkram.',
  closingText: 'Starte jetzt und erlebe, wie einfach Außendienst-Zeiterfassung sein kann.',
};

export default function Page() {
  return <LandingPageTemplate data={data} />;
}
