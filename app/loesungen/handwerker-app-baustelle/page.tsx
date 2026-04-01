import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/landing/LandingPageTemplate';
import type { LandingPageData } from '@/components/landing/LandingPageTemplate';

export const metadata: Metadata = {
  title: 'Handwerker App für Baustelle | Taskey',
  description: 'Die Handwerker App für die Baustelle: Aufträge, Zeiten, Fotos, Material – alles mobil auf dem Smartphone. Jetzt kostenlos testen!',
  alternates: { canonical: 'https://taskey.de/loesungen/handwerker-app-baustelle' },
};

const data: LandingPageData = {
  badge: 'Handwerker App',
  headline: 'Die App für die Baustelle –',
  headlineHighlight: 'alles in der Hosentasche.',
  subheadline: 'Aufträge sehen, Zeiten stempeln, Fotos machen, Material buchen – alles auf dem Handy.',
  heroDescription: 'Die Taskey App ist für die Baustelle gebaut: Robustes Design, offline-fähig, ein Tap zum Stempeln. Deine Handwerker lieben sie, weil sie so einfach ist.',
  painPoints: [
    { icon: '📱', text: 'Bisherige Apps waren zu komplex – keiner hat sie benutzt.' },
    { icon: '📵', text: 'Auf der Baustelle gibt es kein Internet – die App funktioniert nicht.' },
    { icon: '📝', text: 'Informationen kommen erst abends im Büro an – zu spät.' },
    { icon: '🤷', text: 'Die Monteure sagen: Ich brauche keine App, Zettel reichen.' },
  ],
  solutionTitle: 'So einfach, dass sie jeder nutzt.',
  solutionDescription: 'Ein Tap zum Stempeln. Ein Foto zum Dokumentieren. Fertig.',
  solutionSteps: [
    { icon: '📱', title: 'App öffnen', description: 'Intuitive Oberfläche – keine Schulung nötig. Selbst Technik-Muffel kommen klar.' },
    { icon: '👆', title: 'Ein Tap', description: 'Einstempeln, Fotos machen, Material buchen – jede Aktion braucht max. 2 Taps.' },
    { icon: '📡', title: 'Offline funktioniert', description: 'Kein Netz? Kein Problem. Alles wird lokal gespeichert und später synchronisiert.' },
  ],
  ctaText: 'App jetzt testen',
  featureHighlights: [
    { icon: '📱', title: 'iOS & Android', description: 'Läuft auf jedem Smartphone – kein Spezialgerät nötig.' },
    { icon: '👆', title: 'Maximal einfach', description: 'So einfach wie WhatsApp – dein Team nutzt sie ab Tag 1.' },
    { icon: '📡', title: 'Offline-fähig', description: 'Funktioniert auch im Keller oder auf der Baustelle ohne Empfang.' },
    { icon: '📸', title: 'Fotos mit Stempel', description: 'Fotos mit automatischem GPS- und Zeitstempel.' },
    { icon: '🏷️', title: 'NFC-Support', description: 'NFC-Tags scannen für Zeiterfassung und Werkzeugverwaltung.' },
    { icon: '🔔', title: 'Push-Nachrichten', description: 'Neue Aufträge und Änderungen direkt aufs Handy.' },
  ],
  closingHeadline: 'Die App, die Handwerker lieben.',
  closingText: 'Teste Taskey 14 Tage kostenlos – auf deinem Handy.',
};

export default function Page() {
  return <LandingPageTemplate data={data} />;
}
