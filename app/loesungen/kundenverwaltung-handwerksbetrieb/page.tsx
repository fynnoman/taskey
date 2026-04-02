import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/landing/LandingPageTemplate';
import type { LandingPageData } from '@/components/landing/LandingPageTemplate';

export const metadata: Metadata = {
  title: 'Kundenverwaltung Handwerksbetrieb | Taskey',
  description: 'Kundenverwaltung für Handwerksbetriebe: Kontaktdaten, Auftragshistorie, Notizen – alles an einem Ort. Jetzt kostenlos testen!',
  alternates: { canonical: 'https://www.taskey.de/loesungen/kundenverwaltung-handwerksbetrieb' },
};

const data: LandingPageData = {
  badge: 'Kundenverwaltung',
  headline: 'Alle Kunden –',
  headlineHighlight: 'ein System.',
  subheadline: 'Kontaktdaten, Auftragshistorie, Notizen – kein Suchen, kein Vergessen.',
  heroDescription: 'Taskey ist dein CRM für den Handwerksbetrieb. Alle Kundeninformationen zentral, jeder Auftrag verknüpft, jede Notiz abrufbar.',
  painPoints: [
    { text: 'Kundendaten stehen in Excel, im Handy und auf Visitenkarten.' },
    { text: 'Welche Aufträge hattest du mit diesem Kunden? Musst du erst suchen.' },
    { text: 'Der Kunde ruft an – du weißt nicht, worum es beim letzten Mal ging.' },
    { text: 'Wichtige Absprachen stehen irgendwo auf einem Zettel.' },
  ],
  solutionTitle: 'Jeder Kunde. Jede Info. Sofort.',
  solutionDescription: 'Öffne die Kundenkarte und sieh alles: Kontakt, Aufträge, Dokumente, Notizen.',
  solutionSteps: [
    { title: 'Kunde anlegen', description: 'Name, Adresse, Telefon, Mail – einmal anlegen, immer verfügbar.' },
    { title: 'Aufträge verknüpfen', description: 'Jeder Auftrag wird automatisch dem Kunden zugeordnet – lückenlose Historie.' },
    { title: 'Notizen & Dokumente', description: 'Halte Absprachen fest und hänge Dokumente an den Kunden an.' },
  ],
  ctaText: 'Kunden digital verwalten',
  featureHighlights: [
    { title: 'Kundenkarten', description: 'Alle Infos auf einer übersichtlichen Kundenkarte.' },
    { title: 'Auftragshistorie', description: 'Alle vergangenen und aktuellen Aufträge auf einen Blick.' },
    { title: 'Notizen', description: 'Wichtige Absprachen und Infos direkt beim Kunden hinterlegen.' },
    { title: 'Schnellsuche', description: 'Finde jeden Kunden in Sekunden – nach Name, Ort oder Auftrag.' },
    { title: 'Mobiler Zugriff', description: 'Kundendaten auch unterwegs auf dem Handy abrufbar.' },
    { title: 'Kontakte importieren', description: 'Bestehende Kundendaten aus Excel importieren.' },
  ],
  closingHeadline: 'Kunden kennen. Aufträge gewinnen.',
  closingText: 'Starte jetzt und hab alle Kundeninformationen immer parat.',
  relatedLinks: [
      {
          href: '/loesungen/crm-fuer-handwerker',
          label: 'CRM für Handwerker',
          description: 'Kundenbeziehungen professionell pflegen und ausbauen.'
      },
      {
          href: '/loesungen/kundenhistorie-verwalten-handwerk',
          label: 'Kundenhistorie verwalten',
          description: 'Alle bisherigen Aufträge und Kontakte zu jedem Kunden einsehen.'
      },
      {
          href: '/loesungen/angebote-schreiben-handwerk',
          label: 'Angebote schreiben',
          description: 'Aus Kundendaten direkt professionelle Angebote erstellen.'
      }
  ],
};

export default function Page() {
  return <LandingPageTemplate data={data} />;
}
