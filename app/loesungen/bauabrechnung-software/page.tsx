import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/landing/LandingPageTemplate';
import type { LandingPageData } from '@/components/landing/LandingPageTemplate';

export const metadata: Metadata = {
  title: 'Bauabrechnung Software – Taskey',
  description: 'Bauabrechnung Software für Baufirmen. Taskey erstellt Abschläge, Nachträge und Schlussrechnungen automatisch aus Ihren Projektdaten.',
  alternates: { canonical: 'https://www.taskey.de/loesungen/bauabrechnung-software' },
};

const data: LandingPageData = {
  badge: 'Bauabrechnung',
  headline: 'Bauabrechnung –',
  headlineHighlight: 'einfach & automatisch',
  subheadline: 'Von der Aufmaß-Erfassung bis zur Schlussrechnung.',
  heroDescription: 'Bauabrechnung muss nicht kompliziert sein. Taskey verbindet Aufmaß, Leistungserfassung und Rechnungsstellung zu einem nahtlosen Prozess.',
  painPoints: [
    { text: 'Komplexe Bauabrechnungen manuell erstellen – fehleranfällig und zeitraubend.' },
    { text: 'Aufmaße, Nachträge und Abschläge händisch zusammenführen.' },
    { text: 'Streitigkeiten mit Auftraggebern über abzurechnende Leistungen.' },
    { text: 'Wochen zwischen Leistungserbringung und Rechnungsstellung.' },
  ],
  solutionTitle: 'Bauabrechnung aus einem Guss',
  solutionDescription: 'Taskey verbindet alle Schritte der Bauabrechnung nahtlos.',
  solutionSteps: [
    { title: 'Aufmaß erfassen', description: 'Mengen und Leistungen digital auf der Baustelle erfassen.' },
    { title: 'Rechnung erstellen', description: 'Aus erfassten Leistungen automatisch Abrechnungen generieren.' },
    { title: 'Nachverfolgen', description: 'Zahlungseingänge überwachen und Liquidität planen.' },
  ],
  ctaText: 'Jetzt Bauabrechnung vereinfachen',
  featureHighlights: [
    { title: 'Integriertes Aufmaß', description: 'Aufmaße direkt in die Abrechnung übernehmen.' },
    { title: 'Nachtragsverwaltung', description: 'Nachträge dokumentieren und in die Abrechnung integrieren.' },
    { title: 'Soll-Ist-Vergleich', description: 'Abgerechnete vs. kalkulierte Leistungen vergleichen.' },
    { title: 'Abschlagsrechnungen', description: 'Mehrstufige Abschlagsrechnungen automatisch erstellen.' },
    { title: 'VOB-konform', description: 'Abrechnungen nach VOB-Standards erstellen.' },
    { title: 'Export', description: 'Alle Abrechnungen als PDF oder in Buchhaltungssoftware exportieren.' },
  ],
  closingHeadline: 'Bauabrechnung – so einfach wie noch nie.',
  closingText: 'Taskey macht Ihre Bauabrechnung automatisch, fehlerfrei und schnell.',
  relatedLinks: [
      {
          href: '/loesungen/abschlagsrechnung-erstellen-handwerk',
          label: 'Abschlagsrechnungen',
          description: 'Abschlagsrechnungen nach Baufortschritt automatisch erstellen.'
      },
      {
          href: '/loesungen/schlussrechnung-software-bau',
          label: 'Schlussrechnung',
          description: 'Die finale Abrechnung nach Projektabschluss.'
      },
      {
          href: '/loesungen/aufmass-erstellen-digital',
          label: 'Aufmaß digital',
          description: 'Aufmaße vor Ort digital erstellen – als Basis für die Abrechnung.'
      }
  ],
};

export default function Page() {
  return <LandingPageTemplate data={data} />;
}
