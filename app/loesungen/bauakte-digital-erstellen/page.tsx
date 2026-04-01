import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/landing/LandingPageTemplate';
import type { LandingPageData } from '@/components/landing/LandingPageTemplate';

export const metadata: Metadata = {
  title: 'Bauakte digital erstellen – Taskey',
  description: 'Bauakten digital erstellen und verwalten. Taskey bündelt alle Projektdokumente, Fotos und Protokolle in einer digitalen Bauakte.',
  alternates: { canonical: 'https://www.taskey.de/loesungen/bauakte-digital-erstellen' },
};

const data: LandingPageData = {
  badge: 'Digitale Bauakte',
  headline: 'Bauakten',
  headlineHighlight: 'digital erstellen',
  subheadline: 'Alle Projektdokumente an einem Ort.',
  heroDescription: 'Schluss mit Papierbergen und verstreuten Dokumenten. Taskey erstellt digitale Bauakten, die alle Pläne, Fotos, Protokolle und Dokumente eines Projekts bündeln.',
  painPoints: [
    { icon: '📂', text: 'Projektdokumente in verschiedenen Ordnern, E-Mails und Schubladen verteilt.' },
    { icon: '🔍', text: 'Stundenlange Suche nach einem bestimmten Dokument.' },
    { icon: '⚠️', text: 'Bei Streitigkeiten fehlen wichtige Nachweise und Protokolle.' },
    { icon: '📋', text: 'Bauakten werden erst nach Projektende zusammengestellt – wenn überhaupt.' },
  ],
  solutionTitle: 'Digitale Bauakte – automatisch gefüllt',
  solutionDescription: 'Taskey sammelt alle Projektdokumente automatisch in einer digitalen Bauakte.',
  solutionSteps: [
    { icon: '📁', title: 'Bauakte anlegen', description: 'Für jedes Projekt automatisch eine digitale Bauakte erstellen.' },
    { icon: '📋', title: 'Dokumente zuordnen', description: 'Alle Dokumente, Fotos und Protokolle werden automatisch der Akte zugeordnet.' },
    { icon: '📤', title: 'Jederzeit abrufbar', description: 'Die komplette Bauakte jederzeit einsehen, teilen oder exportieren.' },
  ],
  ctaText: 'Jetzt Bauakten digitalisieren',
  featureHighlights: [
    { icon: '📁', title: 'Automatische Zuordnung', description: 'Alle projektbezogenen Dokumente werden automatisch gesammelt.' },
    { icon: '📸', title: 'Foto-Dokumentation', description: 'Alle Baustellenfotos chronologisch in der Akte gespeichert.' },
    { icon: '📋', title: 'Protokolle', description: 'Baubesprechungen, Abnahmen und Mängelprotokolle integriert.' },
    { icon: '🔍', title: 'Schnelle Suche', description: 'Jedes Dokument in Sekunden finden – per Stichwortsuche.' },
    { icon: '📤', title: 'Export', description: 'Komplette Bauakte als PDF oder ZIP exportieren.' },
    { icon: '🔒', title: 'Revisionssicher', description: 'Alle Dokumente unveränderlich archiviert – für rechtliche Sicherheit.' },
  ],
  closingHeadline: 'Die Bauakte, die sich selbst füllt.',
  closingText: 'Taskey dokumentiert Ihre Projekte automatisch – lückenlos und jederzeit abrufbar.',
  relatedLinks: [
      {
          href: '/loesungen/baudokumentation-software',
          label: 'Baudokumentation',
          description: 'Die Bauakte als Sammlung der gesamten Baudokumentation.'
      },
      {
          href: '/loesungen/bautagebuch-digital',
          label: 'Bautagebuch',
          description: 'Das Bautagebuch als wichtiger Bestandteil jeder Bauakte.'
      },
      {
          href: '/loesungen/abnahmeprotokoll-digital',
          label: 'Abnahmeprotokoll',
          description: 'Abnahmeprotokolle gehören in jede vollständige Bauakte.'
      }
  ],
};

export default function Page() {
  return <LandingPageTemplate data={data} />;
}
