import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/landing/LandingPageTemplate';
import type { LandingPageData } from '@/components/landing/LandingPageTemplate';

export const metadata: Metadata = {
  title: 'Aufträge organisieren Malerbetrieb | Taskey',
  description: 'Aufträge im Malerbetrieb organisieren: Kunden, Termine, Material und Abrechnung – alles digital in einer App. Jetzt testen!',
  alternates: { canonical: 'https://www.taskeyapp.com/loesungen/auftraege-organisieren-malerbetrieb' },
};

const data: LandingPageData = {
  badge: 'Malerbetrieb',
  headline: 'Malerbetrieb organisieren –',
  headlineHighlight: 'ohne Post-its und Chaos.',
  subheadline: 'Aufträge, Farben, Flächen, Termine – alles an einem Ort statt auf 20 Zetteln.',
  heroDescription: 'Taskey ist die Betriebssoftware für Malerbetriebe: Aufträge anlegen, Kolonnen zuweisen, Material planen und Stunden automatisch erfassen.',
  painPoints: [
    { text: 'Aufträge stehen auf Post-its am Bildschirm – einige fallen runter und gehen verloren.' },
    { text: 'Kunden rufen an und fragen nach einem Termin – du blätterst im Kalender.' },
    { text: 'Materialbestellungen werden vergessen – Baustelle steht still.' },
    { text: 'Am Ende weißt du nicht, ob sich der Auftrag gelohnt hat.' },
  ],
  solutionTitle: 'Dein Malerbetrieb, digital organisiert.',
  solutionDescription: 'Vom Angebot über die Farbplanung bis zur Rechnung – alles in Taskey.',
  solutionSteps: [
    { title: 'Auftrag anlegen', description: 'Kunde, Adresse, Flächen, gewünschte Farben – alles erfasst und dem Team zugewiesen.' },
    { title: 'Kolonne einplanen', description: 'Weise dein Team zu, plane den Zeitraum und füge Materiallisten hinzu.' },
    { title: 'Abschließen & abrechnen', description: 'Fotos hochladen, Stunden auswerten, Rechnung erstellen – aus einem Guss.' },
  ],
  ctaText: 'Malerbetrieb digitalisieren',
  featureHighlights: [
    { title: 'Auftragsübersicht', description: 'Alle Aufträge mit Status, Termin und zugewiesener Kolonne.' },
    { title: 'Vorher/Nachher-Fotos', description: 'Dokumentiere deine Arbeit mit GPS- und Zeitstempel.' },
    { title: 'Materialplanung', description: 'Farben, Mengen, Werkzeuge – alles zum Auftrag hinterlegt.' },
    { title: 'Zeiterfassung', description: 'Mitarbeiter stempeln per App – Zeiten werden dem Auftrag zugeordnet.' },
    { title: 'Nachkalkulation', description: 'War der Auftrag rentabel? Taskey zeigt es dir sofort.' },
    { title: 'Angebote & Rechnungen', description: 'Erstelle professionelle Dokumente direkt aus dem Auftrag.' },
  ],
  closingHeadline: 'Malerbetrieb im Griff. Digital.',
  closingText: 'Starte jetzt und organisiere deinen Malerbetrieb mit Taskey.',
  relatedLinks: [
      {
          href: '/loesungen/auftragsverwaltung-handwerk',
          label: 'Auftragsverwaltung im Handwerk',
          description: 'Aufträge digital verwalten – vom ersten Kontakt bis zur Schlussrechnung.'
      },
      {
          href: '/loesungen/angebote-schreiben-handwerk',
          label: 'Angebote schreiben',
          description: 'Professionelle Angebote direkt aus der App erstellen und versenden.'
      },
      {
          href: '/loesungen/terminplanung-handwerker',
          label: 'Terminplanung',
          description: 'Aufträge terminieren und Teams effizient einteilen.'
      }
  ],
};

export default function Page() {
  return <LandingPageTemplate data={data} />;
}
