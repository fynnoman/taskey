import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/landing/LandingPageTemplate';
import type { LandingPageData } from '@/components/landing/LandingPageTemplate';

export const metadata: Metadata = {
  title: 'Gebäudereinigung App – Mobile Lösung für Reinigungsunternehmen | Taskey',
  description: 'Die Gebäudereinigung App für Inhaber, Objektleiter und Reinigungskräfte: Aufträge, Zeiten, Nachweise – alles mobil. Jetzt testen!',
  alternates: { canonical: 'https://www.taskeyapp.com/loesungen/gebaeudereinigung-app' },
};

const data: LandingPageData = {
  badge: 'Mobile App',
  headline: 'Gebäudereinigung App –',
  headlineHighlight: 'dein Buero in der Hosentasche.',
  subheadline: 'Aufträge, Teams, Zeiten, Nachweise – alles mobil. Für iOS und Android.',
  heroDescription: 'Reinigungsunternehmen werden nicht vom Schreibtisch aus geführt. Taskey gibt dir eine mobile App, mit der du alles von unterwegs managst – und dein Team vor Ort alles hat, was es braucht.',
  painPoints: [
    { text: 'Objektleiter sind unterwegs, aber haben keinen Zugriff auf Daten.' },
    { text: 'Reinigungskräfte können keine Zeiten oder Nachweise mobil erfassen.' },
    { text: 'Änderungen im Buero kommen nicht beim Team vor Ort an.' },
    { text: 'Komplizierte Software wird von Reinigungskräften nicht genutzt.' },
  ],
  solutionTitle: 'Eine App. Alle Rollen. Jedes Geraet.',
  solutionDescription: 'Taskey bietet für jede Rolle die richtige Ansicht – vom Inhaber über den Objektleiter bis zur Reinigungskraft.',
  solutionSteps: [
    { title: 'App herunterladen', description: 'Kostenlos im App Store und Google Play Store verfügbar.' },
    { title: 'Team einladen', description: 'Mitarbeiter erhalten einen Einladungslink und sind sofort einsatzbereit.' },
    { title: 'Mobil arbeiten', description: 'Aufträge sehen, Zeiten scannen, Nachweise senden – alles in der App.' },
  ],
  ctaText: 'App entdecken',
  featureHighlights: [
    { title: 'NFC-Scan', description: 'Zeiten und Nachweise per NFC-Tag erfassen.' },
    { title: 'Mehrsprachig', description: 'App in der Sprache deiner Mitarbeiter – 20+ Sprachen.' },
    { title: 'Offline-faehig', description: 'Funktioniert auch ohne Internet – synchronisiert später.' },
    { title: 'Push-Benachrichtigungen', description: 'Neue Aufträge und Änderungen in Echtzeit.' },
    { title: 'Foto-Upload', description: 'Fotos direkt vom Objekt hochladen.' },
    { title: 'Einfache Bedienung', description: 'So einfach wie WhatsApp – kein Schulungsbedarf.' },
  ],
  closingHeadline: 'Gebäudereinigung. Mobil. Intuitiv. Ueberall.',
  closingText: 'Teste Taskey 14 Tage kostenlos und erlebe die einfachste App für Gebäudereiniger.',
  relatedLinks: [
    { href: '/loesungen/reinigungskräfte-app', label: 'Mitarbeiter-App', description: 'Die App speziell für Reinigungskräfte.' },
    { href: '/loesungen/einsatzplanung-gebäudereinigung', label: 'Einsatzplanung', description: 'Einsätze mobil planen und koordinieren.' },
    { href: '/loesungen/nfc-leistungsnachweis-reinigung', label: 'NFC Nachweis', description: 'NFC-Leistungsnachweise per App.' },
  ],
};

export default function Page() {
  return <LandingPageTemplate data={data} />;
}
