import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/landing/LandingPageTemplate';
import type { LandingPageData } from '@/components/landing/LandingPageTemplate';

export const metadata: Metadata = {
  title: 'Ressourcenplanung Baufirma – Taskey',
  description: 'Ressourcenplanung für Baufirmen digitalisieren. Taskey optimiert die Verteilung von Personal, Maschinen und Material auf Ihre Bauprojekte.',
  alternates: { canonical: 'https://www.taskey.de/loesungen/ressourcenplanung-baufirma' },
};

const data: LandingPageData = {
  badge: 'Ressourcenplanung',
  headline: 'Ressourcenplanung für',
  headlineHighlight: 'Baufirmen',
  subheadline: 'Personal, Maschinen und Material optimal verteilen.',
  heroDescription: 'Zu viele Projekte, zu wenig Ressourcen? Taskey hilft Ihnen, Personal, Maschinen und Material optimal auf Ihre Bauprojekte zu verteilen.',
  painPoints: [
    { icon: '⚠️', text: 'Engpässe bei Personal und Maschinen führen zu Projektverzögerungen.' },
    { icon: '📊', text: 'Keine Übersicht über die aktuelle Auslastung aller Ressourcen.' },
    { icon: '💸', text: 'Teure Maschinen stehen ungenutzt herum, während sie anderswo gebraucht werden.' },
    { icon: '📋', text: 'Ressourcenplanung per Whiteboard funktioniert nicht mehr ab 5 Baustellen.' },
  ],
  solutionTitle: 'Alle Ressourcen im Blick',
  solutionDescription: 'Taskey zeigt Ihnen die Auslastung aller Ressourcen in Echtzeit.',
  solutionSteps: [
    { icon: '📊', title: 'Auslastung prüfen', description: 'Sehen Sie sofort, welche Ressourcen verfügbar oder überlastet sind.' },
    { icon: '📋', title: 'Optimal verteilen', description: 'Weisen Sie Personal, Maschinen und Material den Projekten zu.' },
    { icon: '🔔', title: 'Engpässe vermeiden', description: 'Frühwarnsystem bei drohenden Ressourcenengpässen.' },
  ],
  ctaText: 'Jetzt Ressourcen optimal planen',
  featureHighlights: [
    { icon: '👥', title: 'Personalplanung', description: 'Mitarbeiter nach Qualifikation und Verfügbarkeit einplanen.' },
    { icon: '🏗️', title: 'Maschinenplanung', description: 'Maschinen und Geräte den Baustellen zuordnen.' },
    { icon: '📦', title: 'Materialplanung', description: 'Materialbedarf pro Projekt berechnen und Bestellungen planen.' },
    { icon: '📊', title: 'Auslastungsübersicht', description: 'Kapazitäten über alle Projekte hinweg visualisieren.' },
    { icon: '⚠️', title: 'Engpass-Warnung', description: 'Automatisch alarmiert werden bei Ressourcenkonflikten.' },
    { icon: '📈', title: 'Prognose', description: 'Zukünftigen Ressourcenbedarf basierend auf geplanten Projekten vorhersagen.' },
  ],
  closingHeadline: 'Nie wieder Ressourcenchaos.',
  closingText: 'Taskey optimiert Ihre Ressourcenplanung – für pünktliche Projekte und zufriedene Kunden.',
  relatedLinks: [
      {
          href: '/loesungen/kapazitaetsplanung-handwerk',
          label: 'Kapazitätsplanung',
          description: 'Kapazitäten als Teil der umfassenden Ressourcenplanung.'
      },
      {
          href: '/loesungen/personalplanung-baufirma',
          label: 'Personalplanung',
          description: 'Personal als wichtigste Ressource professionell planen.'
      },
      {
          href: '/loesungen/materialverwaltung-handwerk',
          label: 'Materialverwaltung',
          description: 'Material als Ressource verwalten und Baustellen zuordnen.'
      }
  ],
};

export default function Page() {
  return <LandingPageTemplate data={data} />;
}
