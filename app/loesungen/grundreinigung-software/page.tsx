import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/landing/LandingPageTemplate';
import type { LandingPageData } from '@/components/landing/LandingPageTemplate';

export const metadata: Metadata = {
  title: 'Grundreinigung Software – Aufträge planen & dokumentieren | Taskey',
  description: 'Software für Grundreinigung: Bodenreinigung, Steinbodensanierung, Teppichgrundreinigung – Aufträge planen, kalkulieren und dokumentieren. Jetzt testen!',
  alternates: { canonical: 'https://www.taskeyapp.com/loesungen/grundreinigung-software' },
};

const data: LandingPageData = {
  badge: 'Grundreinigung',
  headline: 'Grundreinigung –',
  headlineHighlight: 'jeder Auftrag praezise kalkuliert.',
  subheadline: 'Intensive Reinigung braucht genaue Planung. Taskey liefert sie.',
  heroDescription: 'Grundreinigungen sind aufwendig: verschiedene Bodenbelaege, unterschiedliche Verfahren, exakte Kalkulation. Taskey plant und dokumentiert jeden Auftrag.',
  painPoints: [
    { text: 'Grundreinigungen werden falsch kalkuliert – du verlierst Marge.' },
    { text: 'Materialverbrauch bei Intensivreinigungen ist schwer vorherzusagen.' },
    { text: 'Auftraggeber wollen Vorher/Nachher-Dokumentation – du hast keine.' },
    { text: 'Verschiedene Bodenbelaege erfordern unterschiedliche Verfahren und Zeiten.' },
  ],
  solutionTitle: 'Grundreinigung. Kalkuliert. Dokumentiert.',
  solutionDescription: 'Von der Flaeche bis zur Rechnung – alles in einer App.',
  solutionSteps: [
    { title: 'Auftrag kalkulieren', description: 'Flaeche, Bodenbelag, Verschmutzungsgrad – Taskey berechnet Zeit und Material.' },
    { title: 'Team einplanen', description: 'Weise qualifizierte Reinigungskräfte und Spezialgeräte dem Auftrag zu.' },
    { title: 'Ergebnis dokumentieren', description: 'Vorher/Nachher-Fotos, Verbrauchsprotokoll und Leistungsnachweis automatisch.' },
  ],
  ctaText: 'Grundreinigung digitalisieren',
  featureHighlights: [
    { title: 'Flaechenberechnung', description: 'Quadratmeter erfassen und automatisch kalkulieren.' },
    { title: 'Verfahrensbibliothek', description: 'Reinigungsverfahren pro Bodenbelag hinterlegen.' },
    { title: 'Materialplanung', description: 'Reinigungsmittel und Geräte pro Auftrag planen.' },
    { title: 'Vorher/Nachher-Fotos', description: 'Fotodokumentation mit Zeitstempel für den Kunden.' },
    { title: 'Nachkalkulation', description: 'Tatsaechlichen Aufwand mit Kalkulation vergleichen.' },
    { title: 'Kundenfreigabe', description: 'Digitale Abnahme durch den Auftraggeber.' },
  ],
  closingHeadline: 'Grundreinigung. Praezise. Profitabel.',
  closingText: 'Teste Taskey 3 Monate kostenlos und kalkuliere deine Grundreinigungen praezise.',
  relatedLinks: [
    { href: '/loesungen/nfc-leistungsnachweis-reinigung', label: 'NFC Leistungsnachweis', description: 'Jeden Einsatz per NFC nachweisen.' },
    { href: '/loesungen/inventar-verwalten-reinigungsfirma', label: 'Inventar Reinigung', description: 'Reinigungsmittel und Geräte verwalten.' },
    { href: '/loesungen/rechnung-schreiben-reinigungsfirma', label: 'Rechnung Reinigung', description: 'Rechnungen direkt aus Aufträgen erstellen.' },
  ],
};

export default function Page() {
  return <LandingPageTemplate data={data} />;
}
