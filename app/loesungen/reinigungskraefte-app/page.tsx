import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/landing/LandingPageTemplate';
import type { LandingPageData } from '@/components/landing/LandingPageTemplate';

export const metadata: Metadata = {
  title: 'Reinigungskräfte App – Die mobile App für dein Team | Taskey',
  description: 'Mobile App für Reinigungskräfte: Einsätze sehen, NFC scannen, Checklisten abarbeiten, Fotos hochladen. Kinderleicht & mehrsprachig. Jetzt testen!',
  alternates: { canonical: 'https://www.taskeyapp.com/loesungen/reinigungskraefte-app' },
};

const data: LandingPageData = {
  badge: 'Mitarbeiter-App',
  headline: 'Die App, die dein Team –',
  headlineHighlight: 'vom ersten Tag an versteht.',
  subheadline: 'Kinderleicht, mehrsprachig, offline-faehig – für jede Reinigungskraft.',
  heroDescription: 'Deine Mitarbeiter brauchen keine Schulung. Die Taskey App ist so einfach, dass jeder sie sofort bedienen kann – in Deutsch, Englisch oder Franzoesisch.',
  painPoints: [
    { text: 'Viele Reinigungskräfte sprechen kein Deutsch – herkoemmliche Software ist unverständlich.' },
    { text: 'Komplizierte Apps werden von Mitarbeitern nicht genutzt.' },
    { text: 'Ohne Internetempfang im Keller funktioniert nichts.' },
    { text: 'Mitarbeiter müssen ständig im Buero anrufen, um Infos zu bekommen.' },
  ],
  solutionTitle: 'Eine App. Drei Sprachen. Null Schulung.',
  solutionDescription: 'Intuitiv, mehrsprachig und offline-faehig – perfekt für Reinigungsteams.',
  solutionSteps: [
    { title: 'App herunterladen', description: 'iOS oder Android – in 2 Minuten installiert und eingeloggt.' },
    { title: 'Sprache wählen', description: 'Deutsch, Englisch oder Franzoesisch – die App passt sich an.' },
    { title: 'Loslegen', description: 'Einsätze sehen, NFC scannen, Checkliste abhaken – fertig.' },
  ],
  ctaText: 'App jetzt testen',
  featureHighlights: [
    { title: 'Mehrsprachig', description: 'Deutsch, Englisch, Franzoesisch – weitere Sprachen folgen.' },
    { title: 'Offline-faehig', description: 'Funktioniert auch ohne Internet – synchronisiert später.' },
    { title: 'NFC-Scan', description: 'Handy an den Tag halten – fertig.' },
    { title: 'Checklisten', description: 'Aufgaben abhaken – visuell und einfach.' },
    { title: 'Fotodokumentation', description: 'Fotos hochladen direkt aus der App.' },
    { title: 'Push-Nachrichten', description: 'Änderungen und neue Einsätze sofort erfahren.' },
  ],
  closingHeadline: 'Die App für Reinigungskräfte. Einfach. Fertig.',
  closingText: 'Teste Taskey 3 Monate kostenlos und gib deinem Team eine App, die wirklich funktioniert.',
  relatedLinks: [
    { href: '/loesungen/nfc-leistungsnachweis-reinigung', label: 'NFC Leistungsnachweis', description: 'NFC-Scans direkt aus der App.' },
    { href: '/loesungen/checklisten-reinigung-digital', label: 'Checklisten', description: 'Digitale Checklisten in der Mitarbeiter-App.' },
    { href: '/loesungen/arbeitszeiterfassung-reinigungsfirma', label: 'Zeiterfassung', description: 'Zeiten per App erfassen.' },
  ],
};

export default function Page() {
  return <LandingPageTemplate data={data} />;
}
