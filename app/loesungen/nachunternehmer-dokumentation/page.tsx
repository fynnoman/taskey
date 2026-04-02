import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/landing/LandingPageTemplate';
import type { LandingPageData } from '@/components/landing/LandingPageTemplate';

export const metadata: Metadata = {
  title: 'Nachunternehmer Dokumentation – Taskey',
  description: 'Nachunternehmer-Dokumentation digital verwalten. Taskey speichert Verträge, Zertifikate, Versicherungen und Leistungsnachweise zentral.',
  alternates: { canonical: 'https://www.taskey.de/loesungen/nachunternehmer-dokumentation' },
};

const data: LandingPageData = {
  badge: 'Sub-Dokumentation',
  headline: 'Nachunternehmer-',
  headlineHighlight: 'Dokumentation',
  subheadline: 'Alle Unterlagen digital und griffbereit.',
  heroDescription: 'Vertrag, Gewerbeschein, Versicherungsnachweis, Zertifikate – bei einer Prüfung müssen alle Unterlagen Ihrer Nachunternehmer sofort verfügbar sein. Taskey macht das möglich.',
  painPoints: [
    { text: 'Sub-Unterlagen in E-Mails, Ordnern und Schubladen verstreut.' },
    { text: 'Bei einer Prüfung fehlen wichtige Nachweise – teure Konsequenzen.' },
    { text: 'Abgelaufene Versicherungen oder Zertifikate werden nicht bemerkt.' },
    { text: 'Für jeden neuen Sub dieselben Unterlagen einfordern – aufwändig.' },
  ],
  solutionTitle: 'Alle Sub-Unterlagen an einem Ort',
  solutionDescription: 'Taskey verwaltet die komplette Dokumentation aller Nachunternehmer digital.',
  solutionSteps: [
    { title: 'Unterlagen hochladen', description: 'Verträge, Zertifikate und Nachweise digital hinterlegen.' },
    { title: 'Fristen überwachen', description: 'Automatische Erinnerungen bei ablaufenden Dokumenten.' },
    { title: 'Sofort finden', description: 'Jedes Dokument in Sekunden auffinden – per Suche oder Filter.' },
  ],
  ctaText: 'Jetzt Sub-Dokumentation digitalisieren',
  featureHighlights: [
    { title: 'Dokumenten-Ablage', description: 'Alle Sub-Unterlagen zentral und strukturiert gespeichert.' },
    { title: 'Fristenverwaltung', description: 'Automatisch erinnert bei ablaufenden Versicherungen und Zertifikaten.' },
    { title: 'Checkliste', description: 'Vollständigkeitsprüfung – sofort sehen, welche Unterlagen fehlen.' },
    { title: 'Anforderung', description: 'Fehlende Dokumente direkt beim Sub per E-Mail anfordern.' },
    { title: 'Schnelle Suche', description: 'Jedes Dokument in Sekunden finden.' },
    { title: 'Compliance-Übersicht', description: 'Auf einen Blick sehen, welche Subs vollständig dokumentiert sind.' },
  ],
  closingHeadline: 'Immer prüfungsbereit.',
  closingText: 'Taskey sorgt dafür, dass alle Nachunternehmer-Unterlagen vollständig und aktuell sind.',
  relatedLinks: [
      {
          href: '/loesungen/subunternehmer-verwalten-bau',
          label: 'Subunternehmer verwalten',
          description: 'Nachunternehmer zentral verwalten und ihre Leistungen dokumentieren.'
      },
      {
          href: '/loesungen/nachunternehmer-koordinieren-software',
          label: 'Nachunternehmer koordinieren',
          description: 'Mehrere Nachunternehmer gleichzeitig koordinieren.'
      },
      {
          href: '/loesungen/baudokumentation-software',
          label: 'Baudokumentation',
          description: 'Nachunternehmerleistungen als Teil der Baudokumentation.'
      }
  ],
};

export default function Page() {
  return <LandingPageTemplate data={data} />;
}
