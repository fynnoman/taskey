import type { Metadata } from "next";
import LandingPageTemplate from "@/components/landing/LandingPageTemplate";
import { buildMetadata, pickLocale, type PageCopy } from "@/lib/i18n-metadata";

const path = "/loesungen/klinikreinigung";

const COPY: PageCopy = {
  de: {
    title:
      "Software für Klinik- und Hygienereinigung | Lückenlos dokumentiert | Taskey",
    description:
      "Reinigungssoftware für Klinik- und Hygienereinigung: lückenlose Dokumentation, RKI-konforme Protokolle, Schichtbetrieb und Auftraggeber-Reports. DSGVO-konform.",
    ogTitle:
      "Software für Klinik- und Hygienereinigung | Lückenlos dokumentiert | Taskey",
    ogDescription:
      "Lückenlose Dokumentation, RKI-konforme Protokolle, Schichtbetrieb und Auftraggeber-Reports.",
    twitterTitle: "Software für Klinik- und Hygienereinigung | Taskey",
    twitterDescription: "Lückenlos dokumentiert für Krankenhaus und Pflegeheim.",
  },
  en: {
    title:
      "Clinic and hygiene cleaning software | Fully documented | Taskey",
    description:
      "Cleaning software for clinic and hygiene cleaning: gap-free documentation, RKI-compliant protocols, shift operations and client reports. DSGVO-compliant.",
    ogTitle:
      "Clinic and hygiene cleaning software | Fully documented | Taskey",
    ogDescription:
      "Gap-free documentation, RKI-compliant protocols, shift operations and client reports.",
    twitterTitle: "Clinic and hygiene cleaning software | Taskey",
    twitterDescription: "Fully documented for hospitals and care homes.",
  },
  fr: {
    title:
      "Logiciel pour le nettoyage hospitalier et d’hygiène | Documenté sans faille | Taskey",
    description:
      "Logiciel de nettoyage pour l’hospitalier et l’hygiène : documentation sans faille, protocoles conformes RKI, travail posté et rapports clients. Conforme DSGVO.",
    ogTitle:
      "Logiciel pour le nettoyage hospitalier et d’hygiène | Documenté sans faille | Taskey",
    ogDescription:
      "Documentation sans faille, protocoles conformes RKI, travail posté et rapports clients.",
    twitterTitle: "Logiciel pour le nettoyage hospitalier et d’hygiène | Taskey",
    twitterDescription: "Documenté sans faille pour hôpitaux et EHPAD.",
  },
};

const OG_ALT: Record<"de" | "en" | "fr", string> = {
  de: "Software für Klinik- und Hygienereinigung mit Taskey",
  en: "Clinic and hygiene cleaning software with Taskey",
  fr: "Logiciel pour le nettoyage hospitalier et d’hygiène avec Taskey",
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const l = pickLocale(locale);
  const meta = buildMetadata({
    copyByLocale: COPY,
    locale: l,
    path,
    type: "article",
  });
  if (meta.openGraph && Array.isArray(meta.openGraph.images)) {
    meta.openGraph.images = [
      { url: "/opengraph-image", width: 1200, height: 630, alt: OG_ALT[l] },
    ];
  }
  return meta;
}

const CONTENT = {
  de: {
    title: "Klinik- und Hygienereinigung",
    eyebrow: "Branche · Klinik & Hygiene",
    h1: "Software für Klinik- und Hygienereinigung —",
    h1Accent: "lückenlos dokumentiert.",
    lead: "In Krankenhäusern, Reha-Kliniken und Pflegeheimen ist Reinigung lebenswichtig – und Dokumentation streng. Taskey hilft Reinigungsdienstleistern, jeden Einsatz manipulationssicher zu erfassen, RKI-Vorgaben einzuhalten und Auftraggebern lückenlose Berichte zu liefern.",
    answer: "Taskey dokumentiert jede Reinigung in Kliniken und Pflegeheimen pro Raum, Zyklus, Mittel und Personal, liefert monatliche PDF-Reports für Hygienebeauftragte und ist DSGVO-konform mit Hosting in Deutschland.",
    serviceName: "Software für Klinik- und Hygienereinigung",
    serviceDescription: "Betriebssoftware für Reinigungsdienstleister im Klinik- und Pflegeumfeld: raum- und zyklusgenaue Dokumentation nach Hygieneplan, Schichtübergaben, Auftraggeber-Reports und Audit-Trail.",
    audienceType: "Reinigungsdienstleister für Krankenhäuser, Reha-Kliniken und Pflegeheime im DACH-Raum",
    breadcrumbs: [
      { name: "Home", url: "https://www.taskeyapp.com" },
      { name: "Lösungen", url: "https://www.taskeyapp.com/loesungen/klinikreinigung" },
      { name: "Klinik- und Hygienereinigung", url: `https://www.taskeyapp.com${path}` },
    ],
    sections: [
      {
        eyebrow: "Anforderungen",
        heading: "Hygiene-Audits, RKI, Auftraggeber-Erwartungen.",
        body: [
          "Klinikreinigung steht unter doppelter Beobachtung: Auftraggeber (Klinik, Träger) und Behörden (Gesundheitsamt, Krankenkasse, MDK) erwarten lückenlose Dokumentation jedes Reinigungs-Einsatzes nach Zimmer, Bereich, Risikoklasse.",
          "Taskey strukturiert die Dokumentation nach Hygieneplan und ermöglicht es, pro Raum und Reinigungszyklus festzuhalten: wer, wann, mit welchem Mittel, in welcher Chargennummer, mit welchem PSA. Lückenlos, signiert, exportierbar.",
        ],
        bullets: [
          "Pro Raum: Reinigungszyklus, Risikoklasse, eingesetzte Mittel",
          "Schulungsstand pro Mitarbeiter inkl. Hygienebelehrung",
          "Automatische Sperre für Einsätze, wenn Schulung abgelaufen",
          "Audit-Trail jedes Eintrags, manipulationssicher",
        ],
      },
      {
        eyebrow: "Schichtbetrieb",
        heading: "Kontinuierliche Reinigung – nahtloser Übergabe.",
        body: [
          "Klinik-Reinigung läuft fast immer in Schichten, mit Übergabe zwischen Früh- und Spätdienst. Taskey hält die Übergabe-Liste pro Bereich digital vor: was wurde erledigt, was steht noch aus, gab es Auffälligkeiten?",
          "Übergaben werden mit Zeitstempel und ggf. Foto dokumentiert. Der ablösende Mitarbeiter sieht beim NFC-Tap im Bereich sofort den aktuellen Stand und übernimmt nahtlos.",
        ],
      },
      {
        eyebrow: "Auftraggeber-Reports",
        heading: "Monatsreport für Klinik-Hygienebeauftragte.",
        body: [
          "Der Hygienebeauftragte der Klinik will monatlich (oder bei Bedarf adhoc) sehen: welche Bereiche wurden in welcher Frequenz gereinigt, wo gab es Beanstandungen, welche Mitarbeitenden waren eingesetzt und welche Schulungen sind aktuell.",
          "Aus Taskey heraus generieren Sie diesen Report mit einem Klick – im Auftraggeber-Branding, als signiertes PDF, optional automatisiert per E-Mail.",
        ],
      },
      {
        eyebrow: "Compliance",
        heading: "RKI-Empfehlungen, IfSG, Datenschutz.",
        body: [
          "Taskey ist DSGVO-konform (Server in Deutschland, AVV bereitgestellt) und ermöglicht die Dokumentation entlang gängiger Hygiene-Anforderungen (RKI-Empfehlungen, IfSG §23). Die Daten bleiben revisionssicher in Ihrem Account – auch nach Vertragsende mit der jeweiligen Klinik.",
          "Bei Audits exportieren Sie alle relevanten Belege als signiertes PDF inklusive Audit-Log – fertig für die Prüfer.",
        ],
      },
    ],
    faqs: [
      {
        question: "Erfüllt Taskey die RKI-Anforderungen an Dokumentation?",
        answer:
          "Taskey strukturiert die Dokumentation entlang der relevanten Felder (Raum, Bereich, Risikoklasse, Mittel, Chargen, PSA, Mitarbeiter, Zeit). Die konkrete Umsetzung im RKI-Sinne hängt von Ihrem Hygieneplan ab – wir helfen bei der Einrichtung.",
      },
      {
        question: "Kann ich Schulungsstand inklusive Hygienebelehrung führen?",
        answer:
          "Ja. Pro Mitarbeiter hinterlegen Sie Schulungen mit Gültigkeitsdatum. Wird eine Schulung fällig, wird der Mitarbeiter automatisch erinnert – und ggf. aus relevanten Einsätzen ausgeplant.",
      },
      {
        question: "Funktioniert das auch in Pflegeheimen mit dezentralen Räumen?",
        answer:
          "Ja. Pro Bereich oder Etage NFC-Tag, pro Bewohnerzimmer optional ein separater Tag. Taskey strukturiert das hierarchisch und behält den Überblick.",
      },
      {
        question: "Wie sicher sind die sensiblen Daten in Taskey?",
        answer:
          "Alle Daten liegen verschlüsselt auf deutschen Servern. AVV ist im Account verfügbar. Zugriffsrechte sind feingranular pro Rolle steuerbar. Personenbezug auf Patientenebene besteht nicht – Taskey dokumentiert Räume und Bereiche, keine Patientendaten.",
      },
      {
        question: "Lassen sich Reinigungsmittel mit Chargennummern dokumentieren?",
        answer:
          "Ja. Pro Einsatz wählen Sie aus einer hinterlegten Mittel-Liste das verwendete Produkt mit Chargennummer aus. Für Audits ein wichtiger Beleg.",
      },
    ],
    related: [
      {
        href: "/software-gebaeudereinigung",
        label: "Software für Gebäudereinigung",
        description: "All-in-One Branchensoftware: Einsatzplanung, NFC-Nachweis, Zeiterfassung, Angebote, Rechnungen, Live-Margen.",
      },
      {
        href: "/leistungsnachweis-gebaeudereinigung",
        label: "Leistungsnachweis Gebäudereinigung",
        description: "Audit-fester Nachweis pro Einsatz und Bereich.",
      },
      {
        href: "/loesungen/industriereinigung",
        label: "Industriereinigung",
        description: "Ähnliche Anforderungen an Schichtbetrieb und Protokolle.",
      },
      {
        href: "/pricing#enterprise",
        label: "Enterprise für Kliniken",
        description: "SSO, API-Zugang und SLA für große Klinikverträge.",
      },
    ],
  },
  en: {
    title: "Clinic and hygiene cleaning",
    eyebrow: "Industry · Clinic & hygiene",
    h1: "Clinic and hygiene cleaning software —",
    h1Accent: "fully documented.",
    lead: "In hospitals, rehab clinics and care homes, cleaning is vital – and documentation is strict. Taskey helps cleaning service providers record every job in a tamper-proof way, meet RKI requirements and deliver gap-free reports to clients.",
    answer: "Taskey documents every cleaning in hospitals and care homes per room, cycle, agent and staff, generates monthly PDF reports for hygiene officers and is DSGVO-compliant with hosting in Germany.",
    serviceName: "Clinic and hygiene cleaning software",
    serviceDescription: "Operational software for cleaning service providers in clinical and care environments: room- and cycle-level documentation aligned with the hygiene plan, shift handovers, client reports and audit trail.",
    audienceType: "Cleaning service providers for hospitals, rehab clinics and care homes in DACH",
    breadcrumbs: [
      { name: "Home", url: "https://www.taskeyapp.com" },
      { name: "Solutions", url: "https://www.taskeyapp.com/loesungen/klinikreinigung" },
      { name: "Clinic and hygiene cleaning", url: `https://www.taskeyapp.com${path}` },
    ],
    sections: [
      {
        eyebrow: "Requirements",
        heading: "Hygiene audits, RKI, client expectations.",
        body: [
          "Clinic cleaning is under double scrutiny: clients (hospital, operator) and authorities (public health office, statutory health insurer, MDK) expect gap-free documentation of every cleaning job by room, area and risk class.",
          "Taskey structures the documentation along the hygiene plan and lets you record per room and cleaning cycle: who, when, with which agent, with which batch number, with which PPE. Gap-free, signed, exportable.",
        ],
        bullets: [
          "Per room: cleaning cycle, risk class, agents used",
          "Training status per employee incl. hygiene briefing",
          "Automatic lock-out for jobs when training has lapsed",
          "Audit trail for every entry, tamper-proof",
        ],
      },
      {
        eyebrow: "Shift operations",
        heading: "Continuous cleaning – with seamless handover.",
        body: [
          "Clinic cleaning almost always runs in shifts, with handover between early and late shift. Taskey holds the handover list per area digitally: what has been done, what is still open, were there any issues?",
          "Handovers are documented with timestamp and, if needed, photo. With the NFC tap in the area, the relieving employee immediately sees the current state and takes over seamlessly.",
        ],
      },
      {
        eyebrow: "Client reports",
        heading: "Monthly report for clinic hygiene officers.",
        body: [
          "The clinic’s hygiene officer wants to see monthly (or ad hoc on demand): which areas were cleaned at which frequency, where there were complaints, which employees were deployed and which trainings are current.",
          "From Taskey you generate that report with one click – in the client’s branding, as a signed PDF, optionally automated by email.",
        ],
      },
      {
        eyebrow: "Compliance",
        heading: "RKI recommendations, IfSG, data protection.",
        body: [
          "Taskey is DSGVO-compliant (servers in Germany, data processing agreement provided) and enables documentation along common hygiene requirements (RKI recommendations, IfSG §23). The data stays audit-proof in your account – even after the contract with the respective clinic ends.",
          "During audits you export all relevant evidence as a signed PDF including audit log – ready for the inspectors.",
        ],
      },
    ],
    faqs: [
      {
        question: "Does Taskey meet RKI documentation requirements?",
        answer:
          "Taskey structures the documentation along the relevant fields (room, area, risk class, agent, batches, PPE, employee, time). The concrete implementation in line with RKI depends on your hygiene plan – we help with the setup.",
      },
      {
        question: "Can I track training status including hygiene briefing?",
        answer:
          "Yes. Per employee you record trainings with validity dates. When a training is due, the employee is reminded automatically – and where needed planned out of relevant jobs.",
      },
      {
        question: "Does this also work in care homes with decentralised rooms?",
        answer:
          "Yes. NFC tag per area or floor, plus optionally a separate tag per resident’s room. Taskey structures this hierarchically and keeps the overview.",
      },
      {
        question: "How secure is the sensitive data in Taskey?",
        answer:
          "All data is encrypted on German servers. The data processing agreement is available in the account. Access rights are fine-grained per role. There is no personal reference at the patient level – Taskey documents rooms and areas, not patient data.",
      },
      {
        question: "Can cleaning agents be documented with batch numbers?",
        answer:
          "Yes. Per job you pick the product used with its batch number from a stored agent list. For audits this is an important piece of evidence.",
      },
    ],
    related: [
      {
        href: "/software-gebaeudereinigung",
        label: "Building services software",
        description: "All-in-one industry software: scheduling, NFC proof, time tracking, quotes, invoices, live margins.",
      },
      {
        href: "/leistungsnachweis-gebaeudereinigung",
        label: "Service proof for cleaning",
        description: "Audit-proof evidence per job and area.",
      },
      {
        href: "/loesungen/industriereinigung",
        label: "Industrial cleaning",
        description: "Similar requirements for shift operations and protocols.",
      },
      {
        href: "/pricing#enterprise",
        label: "Enterprise for clinics",
        description: "SSO, API access and SLA for large clinic contracts.",
      },
    ],
  },
  fr: {
    title: "Nettoyage hospitalier et d’hygiène",
    eyebrow: "Secteur · Hôpital & hygiène",
    h1: "Logiciel pour le nettoyage hospitalier et d’hygiène —",
    h1Accent: "documenté sans faille.",
    lead: "Dans les hôpitaux, cliniques de rééducation et EHPAD, le nettoyage est vital – et la documentation, stricte. Taskey aide les prestataires de nettoyage à enregistrer chaque intervention de manière infalsifiable, à respecter les exigences RKI et à fournir aux donneurs d’ordres des rapports sans faille.",
    answer: "Taskey documente chaque nettoyage en hôpital et EHPAD par pièce, cycle, produit et personnel, génère des rapports PDF mensuels pour les référents hygiène et est conforme DSGVO avec un hébergement en Allemagne.",
    serviceName: "Logiciel pour le nettoyage hospitalier et d’hygiène",
    serviceDescription: "Logiciel métier pour les prestataires de nettoyage en milieu hospitalier et médico-social : documentation par pièce et par cycle selon le plan d’hygiène, transmissions d’équipe, rapports clients et piste d’audit.",
    audienceType: "Prestataires de nettoyage pour hôpitaux, cliniques de rééducation et EHPAD dans la zone DACH",
    breadcrumbs: [
      { name: "Accueil", url: "https://www.taskeyapp.com" },
      { name: "Solutions", url: "https://www.taskeyapp.com/loesungen/klinikreinigung" },
      { name: "Nettoyage hospitalier et d’hygiène", url: `https://www.taskeyapp.com${path}` },
    ],
    sections: [
      {
        eyebrow: "Exigences",
        heading: "Audits d’hygiène, RKI, attentes des donneurs d’ordres.",
        body: [
          "Le nettoyage hospitalier est sous double surveillance : donneurs d’ordres (hôpital, gestionnaire) et autorités (service de santé, caisse, MDK) attendent une documentation sans faille de chaque intervention par chambre, zone et classe de risque.",
          "Taskey structure la documentation selon le plan d’hygiène et permet, par pièce et par cycle de nettoyage, d’enregistrer : qui, quand, avec quel produit, sous quel numéro de lot, avec quels EPI. Sans faille, signé, exportable.",
        ],
        bullets: [
          "Par pièce : cycle de nettoyage, classe de risque, produits utilisés",
          "Niveau de formation par collaborateur, formation hygiène incluse",
          "Blocage automatique des interventions en cas de formation expirée",
          "Piste d’audit pour chaque entrée, infalsifiable",
        ],
      },
      {
        eyebrow: "Travail posté",
        heading: "Nettoyage continu – transmission sans rupture.",
        body: [
          "Le nettoyage en clinique se fait presque toujours en équipes, avec une transmission entre le matin et l’après-midi. Taskey maintient la liste de transmission par zone en numérique : ce qui a été fait, ce qui reste à faire, y a-t-il eu des anomalies ?",
          "Les transmissions sont documentées avec horodatage et, si besoin, photo. Au tap NFC dans la zone, le collaborateur suivant voit immédiatement l’état actuel et prend le relais sans rupture.",
        ],
      },
      {
        eyebrow: "Rapports client",
        heading: "Rapport mensuel pour les référents hygiène de la clinique.",
        body: [
          "Le référent hygiène de la clinique veut voir mensuellement (ou ponctuellement) : quelles zones ont été nettoyées à quelle fréquence, où il y a eu des réclamations, quels collaborateurs sont intervenus et quelles formations sont à jour.",
          "Depuis Taskey, vous générez ce rapport en un clic – au branding du donneur d’ordres, sous forme de PDF signé, en option automatisé par e-mail.",
        ],
      },
      {
        eyebrow: "Conformité",
        heading: "Recommandations RKI, IfSG, protection des données.",
        body: [
          "Taskey est conforme DSGVO (serveurs en Allemagne, contrat de sous-traitance fourni) et permet une documentation conforme aux exigences d’hygiène courantes (recommandations RKI, IfSG §23). Les données restent infalsifiables dans votre compte – même après la fin du contrat avec la clinique concernée.",
          "Lors des audits, vous exportez tous les justificatifs pertinents en PDF signé, journal d’audit inclus – prêts pour les contrôleurs.",
        ],
      },
    ],
    faqs: [
      {
        question: "Taskey répond-il aux exigences RKI en matière de documentation ?",
        answer:
          "Taskey structure la documentation selon les champs pertinents (pièce, zone, classe de risque, produit, lots, EPI, collaborateur, heure). La mise en œuvre concrète selon le RKI dépend de votre plan d’hygiène – nous vous aidons à la paramétrer.",
      },
      {
        question: "Puis-je suivre le niveau de formation, formation hygiène incluse ?",
        answer:
          "Oui. Par collaborateur, vous enregistrez les formations avec leur date de validité. Lorsqu’une formation arrive à échéance, le collaborateur est rappelé automatiquement – et, si besoin, retiré des interventions concernées.",
      },
      {
        question: "Cela fonctionne-t-il aussi dans les EHPAD avec des pièces décentralisées ?",
        answer:
          "Oui. Un tag NFC par zone ou par étage, et en option un tag séparé par chambre de résident. Taskey organise cela hiérarchiquement et garde la vue d’ensemble.",
      },
      {
        question: "Quel est le niveau de sécurité des données sensibles dans Taskey ?",
        answer:
          "Toutes les données sont chiffrées sur des serveurs allemands. Le contrat de sous-traitance est disponible dans le compte. Les droits d’accès sont finement paramétrables par rôle. Il n’y a pas de lien personnel au niveau patient – Taskey documente des pièces et des zones, pas des données patient.",
      },
      {
        question: "Peut-on documenter les produits de nettoyage avec leurs numéros de lot ?",
        answer:
          "Oui. Par intervention, vous sélectionnez dans une liste de produits le produit utilisé avec son numéro de lot. Pour les audits, c’est un justificatif important.",
      },
    ],
    related: [
      {
        href: "/software-gebaeudereinigung",
        label: "Logiciel pour le nettoyage de bâtiments",
        description: "Logiciel métier tout-en-un : planification, preuve NFC, pointage, devis, factures, marges en direct.",
      },
      {
        href: "/leistungsnachweis-gebaeudereinigung",
        label: "Justificatif de prestations de nettoyage",
        description: "Preuve résistant à l’audit par intervention et par zone.",
      },
      {
        href: "/loesungen/industriereinigung",
        label: "Nettoyage industriel",
        description: "Exigences similaires en matière de travail posté et de protocoles.",
      },
      {
        href: "/pricing#enterprise",
        label: "Enterprise pour les cliniques",
        description: "SSO, accès API et SLA pour les grands contrats hospitaliers.",
      },
    ],
  },
} as const;

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const l = pickLocale(locale);
  const c = CONTENT[l];

  return (
    <LandingPageTemplate
      path={path}
      title={c.title}
      eyebrow={c.eyebrow}
      h1={c.h1}
      h1Accent={c.h1Accent}
      lead={c.lead}
      answerBlock={c.answer}
      breadcrumbs={[...c.breadcrumbs] as { name: string; url: string }[]}
      sections={c.sections as any}
      faqs={c.faqs.map((f) => ({ question: f.question, answer: f.answer }))}
      related={[...c.related] as { href: string; label: string; description?: string }[]}
      service={{
        name: c.serviceName,
        description: c.serviceDescription,
        serviceType: "Cleaning management software for clinical environments",
        areaServed: ["DE", "AT", "CH"],
        audienceType: c.audienceType,
      }}
    />
  );
}
