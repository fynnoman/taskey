import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/landing/LandingPageTemplate';
import type { LandingPageData } from '@/components/landing/LandingPageTemplate';

export const metadata: Metadata = {
  title: 'Kundenhistorie verwalten Handwerk – Taskey',
  description: 'Kundenhistorie im Handwerksbetrieb digital verwalten. Taskey dokumentiert alle Aufträge, Kontakte und Angebote pro Kunde.',
  alternates: { canonical: 'https://www.taskey.de/loesungen/kundenhistorie-verwalten-handwerk' },
};

const data: LandingPageData = {
  badge: 'Kundenhistorie',
  headline: 'Kundenhistorie im',
  headlineHighlight: 'Handwerk',
  subheadline: 'Alle Aufträge, Kontakte und Angebote pro Kunde dokumentiert.',
  heroDescription: 'Wissen Sie noch, was Sie vor 2 Jahren bei Kunde X gemacht haben? Mit Taskey haben Sie die komplette Kundenhistorie immer griffbereit.',
  painPoints: [
    { icon: '❓', text: 'Welche Arbeiten wurden beim letzten Mal durchgeführt? Keiner weiß es mehr.' },
    { icon: '📂', text: 'Alte Angebote und Rechnungen sind nicht auffindbar.' },
    { icon: '📞', text: 'Kunde fragt nach Details zu einem alten Auftrag – langes Suchen beginnt.' },
    { icon: '🔄', text: 'Wiederkehrende Wartungsaufträge werden vergessen.' },
  ],
  solutionTitle: 'Lückenlose Kundenhistorie auf Knopfdruck',
  solutionDescription: 'Taskey dokumentiert automatisch alles, was bei einem Kunden passiert.',
  solutionSteps: [
    { icon: '📋', title: 'Automatische Erfassung', description: 'Jeder Auftrag, jedes Angebot und jede Rechnung wird dem Kunden zugeordnet.' },
    { icon: '🔍', title: 'Schnell finden', description: 'Suche nach Kunde, Datum oder Leistung – in Sekunden gefunden.' },
    { icon: '📊', title: 'Analyse & Planung', description: 'Umsatzentwicklung pro Kunde und Potenzial für Folgeaufträge erkennen.' },
  ],
  ctaText: 'Jetzt Kundenhistorie aufbauen',
  featureHighlights: [
    { icon: '📋', title: 'Komplette Auftragshistorie', description: 'Alle jemals durchgeführten Arbeiten beim Kunden einsehen.' },
    { icon: '📄', title: 'Angebote & Rechnungen', description: 'Alle Dokumente zum Kunden an einem Ort gesammelt.' },
    { icon: '📸', title: 'Foto-Dokumentation', description: 'Fotos von durchgeführten Arbeiten dem Kunden zugeordnet.' },
    { icon: '📝', title: 'Notizen', description: 'Besonderheiten und Hinweise zum Kunden festhalten.' },
    { icon: '🔔', title: 'Wartungserinnerungen', description: 'Automatisch erinnert werden, wenn Wartungsintervalle anstehen.' },
    { icon: '📊', title: 'Kundenentwicklung', description: 'Umsatzentwicklung und Auftragshäufigkeit pro Kunde analysieren.' },
  ],
  closingHeadline: 'Vergessen Sie nie wieder einen Kundenauftrag.',
  closingText: 'Taskey merkt sich alles – damit Sie den Kopf frei haben für gute Arbeit.',
  relatedLinks: [
      {
          href: '/loesungen/crm-fuer-handwerker',
          label: 'CRM für Handwerker',
          description: 'Kundenhistorie ist Teil eines ganzheitlichen CRM-Systems.'
      },
      {
          href: '/loesungen/kundenverwaltung-handwerksbetrieb',
          label: 'Kundenverwaltung',
          description: 'Alle Kundendaten und deren Historie zentral verwalten.'
      },
      {
          href: '/loesungen/reklamationen-verwalten-handwerk',
          label: 'Reklamationen verwalten',
          description: 'Reklamationen in der Kundenhistorie dokumentieren und nachverfolgen.'
      }
  ],
};

export default function Page() {
  return <LandingPageTemplate data={data} />;
}
