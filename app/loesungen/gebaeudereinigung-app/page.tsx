import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/landing/LandingPageTemplate';
import type { LandingPageData } from '@/components/landing/LandingPageTemplate';

export const metadata: Metadata = {
  title: 'Gebaeudereinigung App – Mobile Loesung fuer Reinigungsunternehmen | Taskey',
  description: 'Die Gebaeudereinigung App fuer Inhaber, Objektleiter und Reinigungskraefte: Auftraege, Zeiten, Nachweise – alles mobil. Jetzt testen!',
  alternates: { canonical: 'https://www.taskeyapp.com/loesungen/gebaeudereinigung-app' },
};

const data: LandingPageData = {
  badge: 'Mobile App',
  headline: 'Gebaeudereinigung App –',
  headlineHighlight: 'dein Buero in der Hosentasche.',
  subheadline: 'Auftraege, Teams, Zeiten, Nachweise – alles mobil. Fuer iOS und Android.',
  heroDescription: 'Reinigungsunternehmen werden nicht vom Schreibtisch aus gefuehrt. Taskey gibt dir eine mobile App, mit der du alles von unterwegs managst – und dein Team vor Ort alles hat, was es braucht.',
  painPoints: [
    { text: 'Objektleiter sind unterwegs, aber haben keinen Zugriff auf Daten.' },
    { text: 'Reinigungskraefte koennen keine Zeiten oder Nachweise mobil erfassen.' },
    { text: 'Aenderungen im Buero kommen nicht beim Team vor Ort an.' },
    { text: 'Komplizierte Software wird von Reinigungskraeften nicht genutzt.' },
  ],
  solutionTitle: 'Eine App. Alle Rollen. Jedes Geraet.',
  solutionDescription: 'Taskey bietet fuer jede Rolle die richtige Ansicht – vom Inhaber ueber den Objektleiter bis zur Reinigungskraft.',
  solutionSteps: [
    { title: 'App herunterladen', description: 'Kostenlos im App Store und Google Play Store verfuegbar.' },
    { title: 'Team einladen', description: 'Mitarbeiter erhalten einen Einladungslink und sind sofort einsatzbereit.' },
    { title: 'Mobil arbeiten', description: 'Auftraege sehen, Zeiten scannen, Nachweise senden – alles in der App.' },
  ],
  ctaText: 'App entdecken',
  featureHighlights: [
    { title: 'NFC-Scan', description: 'Zeiten und Nachweise per NFC-Tag erfassen.' },
    { title: 'Mehrsprachig', description: 'App in der Sprache deiner Mitarbeiter – 20+ Sprachen.' },
    { title: 'Offline-faehig', description: 'Funktioniert auch ohne Internet – synchronisiert spaeter.' },
    { title: 'Push-Benachrichtigungen', description: 'Neue Auftraege und Aenderungen in Echtzeit.' },
    { title: 'Foto-Upload', description: 'Fotos direkt vom Objekt hochladen.' },
    { title: 'Einfache Bedienung', description: 'So einfach wie WhatsApp – kein Schulungsbedarf.' },
  ],
  closingHeadline: 'Gebaeudereinigung. Mobil. Intuitiv. Ueberall.',
  closingText: 'Teste Taskey 14 Tage kostenlos und erlebe die einfachste App fuer Gebaeudereiniger.',
  relatedLinks: [
    { href: '/loesungen/reinigungskraefte-app', label: 'Mitarbeiter-App', description: 'Die App speziell fuer Reinigungskraefte.' },
    { href: '/loesungen/einsatzplanung-gebaeudereinigung', label: 'Einsatzplanung', description: 'Einsaetze mobil planen und koordinieren.' },
    { href: '/loesungen/nfc-leistungsnachweis-reinigung', label: 'NFC Nachweis', description: 'NFC-Leistungsnachweise per App.' },
  ],
};

export default function Page() {
  return <LandingPageTemplate data={data} />;
}
