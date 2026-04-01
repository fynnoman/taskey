import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/landing/LandingPageTemplate';
import type { LandingPageData } from '@/components/landing/LandingPageTemplate';

export const metadata: Metadata = {
  title: 'Baustelleninfos teilen App – Taskey',
  description: 'Baustelleninformationen einfach per App teilen. Taskey verteilt Pläne, Fotos und Updates an alle Beteiligten auf der Baustelle.',
  alternates: { canonical: 'https://www.taskey.de/loesungen/baustelleninfos-teilen-app' },
};

const data: LandingPageData = {
  badge: 'Baustelleninfos',
  headline: 'Baustelleninfos',
  headlineHighlight: 'teilen per App',
  subheadline: 'Alle Beteiligten auf dem gleichen Stand.',
  heroDescription: 'Pläne, Fotos, Änderungen, Sicherheitshinweise – alle Baustelleninformationen an einem Ort, für alle Beteiligten zugänglich.',
  painPoints: [
    { icon: '📂', text: 'Aktuelle Pläne nur im Büro – auf der Baustelle wird mit veralteten gearbeitet.' },
    { icon: '📧', text: 'Wichtige Updates per E-Mail – nicht jeder auf der Baustelle hat Zugang.' },
    { icon: '📞', text: 'Informationen werden mündlich weitergegeben und verzerrt.' },
    { icon: '❌', text: 'Fehler durch veraltete oder fehlende Informationen.' },
  ],
  solutionTitle: 'Eine App für alle Baustelleninfos',
  solutionDescription: 'Taskey macht Baustelleninformationen für alle Beteiligten zugänglich.',
  solutionSteps: [
    { icon: '📤', title: 'Infos hochladen', description: 'Pläne, Fotos und Dokumente in Taskey hochladen.' },
    { icon: '📱', title: 'Zugang gewähren', description: 'Alle Beteiligten – auch Subunternehmer – erhalten Zugriff.' },
    { icon: '🔔', title: 'Updates pushen', description: 'Bei Änderungen werden alle Beteiligten automatisch informiert.' },
  ],
  ctaText: 'Jetzt Baustelleninfos digital teilen',
  featureHighlights: [
    { icon: '📄', title: 'Dokumentenfreigabe', description: 'Pläne und Dokumente für alle Beteiligten bereitstellen.' },
    { icon: '📸', title: 'Foto-Updates', description: 'Aktuelle Baustellenfotos für alle sichtbar teilen.' },
    { icon: '🔔', title: 'Änderungs-Benachrichtigungen', description: 'Sofort informiert bei aktualisierten Plänen oder Änderungen.' },
    { icon: '👥', title: 'Zugriffsverwaltung', description: 'Steuern, wer welche Informationen sehen darf.' },
    { icon: '📱', title: 'Offline-Zugriff', description: 'Wichtige Dokumente auch ohne Internet verfügbar.' },
    { icon: '📊', title: 'Aktualitätsgarantie', description: 'Immer die neueste Version aller Dokumente sichtbar.' },
  ],
  closingHeadline: 'Alle auf dem gleichen Stand.',
  closingText: 'Taskey stellt sicher, dass jeder auf der Baustelle mit aktuellen Informationen arbeitet.',
};

export default function Page() {
  return <LandingPageTemplate data={data} />;
}
