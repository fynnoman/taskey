import type { Metadata } from "next";
import LandingPageTemplate from "@/components/landing/LandingPageTemplate";
import { buildMetadata, pickLocale, type PageCopy } from "@/lib/i18n-metadata";

const path = "/loesungen/industriereinigung";

const COPY: PageCopy = {
  de: {
    title: "Software für Industriereinigung | Protokolle, Schichten, DATEV | Taskey",
    description:
      "Reinigungssoftware für Industriereinigung: Schichtbetrieb, Sicherheitsprotokolle, Stundenlisten und DATEV-Export. DSGVO-konform und Made in Germany.",
    ogTitle: "Software für Industriereinigung | Protokolle, Schichten, DATEV | Taskey",
    ogDescription:
      "Schichtbetrieb, Sicherheitsprotokolle und DATEV-Export für Industriereinigungsbetriebe.",
    twitterTitle: "Software für Industriereinigung | Taskey",
    twitterDescription: "Protokolle, Schichten und DATEV-Export für die Industriereinigung.",
  },
  en: {
    title: "Industrial cleaning software | Protocols, shifts, DATEV | Taskey",
    description:
      "Cleaning software for industrial cleaning: shift operations, safety protocols, time sheets and DATEV export. DSGVO-compliant and Made in Germany.",
    ogTitle: "Industrial cleaning software | Protocols, shifts, DATEV | Taskey",
    ogDescription:
      "Shift operations, safety protocols and DATEV export for industrial cleaning companies.",
    twitterTitle: "Industrial cleaning software | Taskey",
    twitterDescription: "Protocols, shifts and DATEV export for industrial cleaning.",
  },
  fr: {
    title: "Logiciel pour le nettoyage industriel | Protocoles, postes, DATEV | Taskey",
    description:
      "Logiciel de nettoyage pour le nettoyage industriel : travail posté, protocoles de sécurité, feuilles d’heures et export DATEV. Conforme DSGVO et Made in Germany.",
    ogTitle: "Logiciel pour le nettoyage industriel | Protocoles, postes, DATEV | Taskey",
    ogDescription:
      "Travail posté, protocoles de sécurité et export DATEV pour les entreprises de nettoyage industriel.",
    twitterTitle: "Logiciel pour le nettoyage industriel | Taskey",
    twitterDescription: "Protocoles, postes et export DATEV pour le nettoyage industriel.",
  },
};

const OG_ALT: Record<"de" | "en" | "fr", string> = {
  de: "Software für Industriereinigung mit Taskey",
  en: "Industrial cleaning software with Taskey",
  fr: "Logiciel pour le nettoyage industriel avec Taskey",
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
    title: "Industriereinigung",
    eyebrow: "Branche · Industrie",
    h1: "Software für Industriereinigung —",
    h1Accent: "Protokolle, Schichten, DATEV.",
    lead: "Industriereinigung läuft anders: 24/7-Schichten, strenge Sicherheits- und Hygieneprotokolle, hohe Dokumentationspflichten gegenüber Auftraggebern und Behörden. Taskey strukturiert Schichtbetrieb, dokumentiert Protokolle revisionssicher und übergibt Stunden direkt an DATEV.",
    breadcrumbs: [
      { name: "Home", url: "https://www.taskeyapp.com" },
      { name: "Lösungen", url: "https://www.taskeyapp.com/loesungen/industriereinigung" },
      { name: "Industriereinigung", url: `https://www.taskeyapp.com${path}` },
    ],
    sections: [
      {
        eyebrow: "Schichtbetrieb",
        heading: "Drei Schichten, 50 Mitarbeitende, keine Lücke.",
        body: [
          "Industriereinigung in Produktionsbetrieben läuft oft im 3-Schicht-Modell mit Wechsel zur Hauptzeit. Taskey plant Früh-, Spät- und Nachtschicht parallel, berücksichtigt automatisch Mindestruhezeiten und meldet Konflikte sofort.",
          "Krankmeldungen mitten in der Nacht? Die Vertretungs-Engine schlägt verfügbare Mitarbeiter mit passender Qualifikation und kurzer Anfahrtszeit vor – Sie pingen sie direkt aus der App an.",
        ],
        bullets: [
          "Schichten Früh / Spät / Nacht parallel",
          "Mindestruhezeiten automatisch geprüft",
          "Vertretungs-Engine mit Qualifikations-Matching",
          "Push-Benachrichtigung an Mitarbeiter ohne Chat-Spam",
        ],
      },
      {
        eyebrow: "Sicherheitsprotokolle",
        heading: "Schulungsstand, PSA, Hygiene-Check – alles nachweisbar.",
        body: [
          "Bei der Industriereinigung – etwa in Lebensmittelproduktion, Pharma oder Chemie – gibt es strenge Vorgaben zu PSA, Schulung, Reinigungsmittel und Hygiene. Taskey hinterlegt pro Mitarbeiter den aktuellen Schulungsstand und blockiert automatisch Einsätze, für die der Mitarbeiter nicht qualifiziert ist.",
          "Pro Einsatz dokumentieren Sie die verwendete PSA, das eingesetzte Reinigungsmittel inklusive Chargennummer und ggf. Temperaturmessungen. Auf Wunsch mit digitaler Unterschrift des Schichtleiters.",
        ],
      },
      {
        eyebrow: "Auftraggeber-Reporting",
        heading: "Monatsbericht ohne Wochenend-Marathon.",
        body: [
          "Industrie-Auftraggeber wollen Monatsberichte mit Stundenlisten, Reinigungsprotokollen, eingesetzten Materialien und Beanstandungen. Aus Taskey heraus generieren Sie diesen Bericht mit zwei Klicks – inklusive Branding und Unterschriften.",
          "Auf Wunsch automatisch am Monatsersten als signiertes PDF per E-Mail an den Auftraggeber. Sie sparen Stunden manueller Arbeit jeden Monat.",
        ],
      },
      {
        eyebrow: "Lohnbuchhaltung",
        heading: "Komplexe Tarife – einfach abgerechnet.",
        body: [
          "Industriereinigung hat oft komplexe Tarifstrukturen: Schichtzuschläge, Sonntags- und Feiertagszuschläge, Nachtarbeit, Erschwerniszulagen. Taskey berechnet diese automatisch nach Ihrem hinterlegten Tarifmodell und exportiert die Lohndaten DATEV-fertig.",
          "Ihr Steuerberater bekommt eine Datei pro Monat, die direkt importiert wird – keine Excel-Listen, keine Rückfragen.",
        ],
      },
    ],
    faqs: [
      {
        question: "Kann Taskey komplexe Schichttarife abbilden?",
        answer:
          "Ja. Sie hinterlegen pro Mitarbeiter oder Mitarbeitergruppe Tarif, Zuschläge und Zulagen. Taskey berechnet automatisch beim Lohnexport.",
      },
      {
        question: "Wie wird der Schulungsstand jedes Mitarbeiters gepflegt?",
        answer:
          "Pro Mitarbeiter pflegen Sie Schulungen mit Gültigkeitsdaten. Läuft eine Schulung ab, wird der Mitarbeiter automatisch aus entsprechenden Einsätzen herausgeplant und Sie bekommen eine Erinnerung zur Nachschulung.",
      },
      {
        question: "Lassen sich Reinigungsmittel-Chargen pro Einsatz dokumentieren?",
        answer:
          "Ja. Pro Einsatz wählen Sie das verwendete Mittel und ggf. die Chargennummer aus einer Liste. Bei Lebensmittel- oder Pharmaproduktion ist das oft Audit-Voraussetzung.",
      },
      {
        question: "Können externe Auditoren ein Read-Only-Login bekommen?",
        answer:
          "Ja. Sie geben einem Auditor zeitlich begrenzten Lesezugriff auf relevante Objekte und Zeiträume – ohne ihm Ihr System zu öffnen.",
      },
      {
        question: "Was, wenn ich 24/7 in mehreren Werken parallel reinige?",
        answer:
          "Taskey skaliert auf beliebig viele Werke und Schichten. Sie können Werke nach Standort, Auftraggeber oder Kostenstelle organisieren und separate Auswertungen fahren.",
      },
    ],
    related: [
      {
        href: "/software-gebaeudereinigung",
        label: "Software für Gebäudereinigung",
        description: "All-in-One Branchensoftware: Einsatzplanung, NFC-Nachweis, Zeiterfassung, Angebote, Rechnungen, Live-Margen.",
      },
      {
        href: "/einsatzplanung-reinigung",
        label: "Einsatzplanung Reinigung",
        description: "Schichten im 3-Schicht-Betrieb professionell planen.",
      },
      {
        href: "/leistungsnachweis-gebaeudereinigung",
        label: "Leistungsnachweis Gebäudereinigung",
        description: "Audit-fester Nachweis pro Einsatz.",
      },
      {
        href: "/pricing#enterprise",
        label: "Enterprise-Tarif",
        description: "Für Industriebetriebe mit 50+ Mitarbeitenden und API-Bedarf.",
      },
    ],
  },
  en: {
    title: "Industrial cleaning",
    eyebrow: "Industry · Industrial",
    h1: "Industrial cleaning software —",
    h1Accent: "protocols, shifts, DATEV.",
    lead: "Industrial cleaning works differently: 24/7 shifts, strict safety and hygiene protocols, heavy documentation duties towards clients and authorities. Taskey structures shift operations, documents protocols in an audit-proof way and hands hours over to DATEV directly.",
    breadcrumbs: [
      { name: "Home", url: "https://www.taskeyapp.com" },
      { name: "Solutions", url: "https://www.taskeyapp.com/loesungen/industriereinigung" },
      { name: "Industrial cleaning", url: `https://www.taskeyapp.com${path}` },
    ],
    sections: [
      {
        eyebrow: "Shift operations",
        heading: "Three shifts, 50 employees, no gaps.",
        body: [
          "Industrial cleaning in production facilities often runs on a three-shift model with overlap during peak hours. Taskey plans early, late and night shifts in parallel, automatically respects minimum rest periods and flags conflicts immediately.",
          "Sick reports in the middle of the night? The substitution engine suggests available employees with the right qualification and short commute – you ping them straight from the app.",
        ],
        bullets: [
          "Early / late / night shifts in parallel",
          "Minimum rest periods checked automatically",
          "Substitution engine with qualification matching",
          "Push notifications to employees without chat spam",
        ],
      },
      {
        eyebrow: "Safety protocols",
        heading: "Training status, PPE, hygiene check – all auditable.",
        body: [
          "In industrial cleaning – for instance in food production, pharma or chemicals – there are strict rules on PPE, training, cleaning agents and hygiene. Taskey stores each employee’s current training status and automatically blocks jobs they are not qualified for.",
          "Per job you document the PPE used, the cleaning agent applied including batch number and, where required, temperature measurements. Optionally with the shift supervisor’s digital signature.",
        ],
      },
      {
        eyebrow: "Client reporting",
        heading: "Monthly report without a weekend marathon.",
        body: [
          "Industrial clients want monthly reports with time sheets, cleaning protocols, materials used and complaints. From Taskey you generate that report in two clicks – including branding and signatures.",
          "On request, automatically on the first day of the month as a signed PDF emailed to the client. You save hours of manual work every month.",
        ],
      },
      {
        eyebrow: "Payroll",
        heading: "Complex pay scales – billed simply.",
        body: [
          "Industrial cleaning often has complex pay structures: shift premiums, Sunday and holiday surcharges, night work, hardship allowances. Taskey calculates these automatically against your configured pay model and exports payroll data ready for DATEV.",
          "Your tax adviser gets one file per month, imported directly – no Excel lists, no follow-up queries.",
        ],
      },
    ],
    faqs: [
      {
        question: "Can Taskey model complex shift pay scales?",
        answer:
          "Yes. Per employee or employee group you store the pay scale, premiums and allowances. Taskey computes them automatically at payroll export.",
      },
      {
        question: "How is each employee’s training status maintained?",
        answer:
          "Per employee you maintain trainings with validity dates. When a training expires, the employee is automatically planned out of the relevant jobs and you receive a reminder for refresher training.",
      },
      {
        question: "Can cleaning agent batches be documented per job?",
        answer:
          "Yes. Per job you pick the agent used and, where relevant, the batch number from a list. In food or pharma production this is often an audit requirement.",
      },
      {
        question: "Can external auditors get a read-only login?",
        answer:
          "Yes. You give an auditor time-limited read access to the relevant sites and periods – without opening up your whole system.",
      },
      {
        question: "What if I clean 24/7 across several plants in parallel?",
        answer:
          "Taskey scales to any number of plants and shifts. You can organise plants by location, client or cost centre and run separate analyses.",
      },
    ],
    related: [
      {
        href: "/software-gebaeudereinigung",
        label: "Building services software",
        description: "All-in-one industry software: scheduling, NFC proof, time tracking, quotes, invoices, live margins.",
      },
      {
        href: "/einsatzplanung-reinigung",
        label: "Cleaning scheduling",
        description: "Plan shifts professionally in 3-shift operations.",
      },
      {
        href: "/leistungsnachweis-gebaeudereinigung",
        label: "Service proof for cleaning",
        description: "Audit-proof evidence per job.",
      },
      {
        href: "/pricing#enterprise",
        label: "Enterprise plan",
        description: "For industrial businesses with 50+ employees and API needs.",
      },
    ],
  },
  fr: {
    title: "Nettoyage industriel",
    eyebrow: "Secteur · Industrie",
    h1: "Logiciel pour le nettoyage industriel —",
    h1Accent: "protocoles, postes, DATEV.",
    lead: "Le nettoyage industriel fonctionne différemment : équipes 24/7, protocoles de sécurité et d’hygiène stricts, exigences de documentation élevées vis-à-vis des donneurs d’ordres et des autorités. Taskey structure le travail posté, documente les protocoles de manière infalsifiable et transmet les heures directement à DATEV.",
    breadcrumbs: [
      { name: "Accueil", url: "https://www.taskeyapp.com" },
      { name: "Solutions", url: "https://www.taskeyapp.com/loesungen/industriereinigung" },
      { name: "Nettoyage industriel", url: `https://www.taskeyapp.com${path}` },
    ],
    sections: [
      {
        eyebrow: "Travail posté",
        heading: "Trois équipes, 50 collaborateurs, aucune faille.",
        body: [
          "Le nettoyage industriel dans la production tourne souvent en 3x8 avec chevauchement aux heures de pointe. Taskey planifie le matin, l’après-midi et la nuit en parallèle, contrôle automatiquement les temps de repos minimaux et signale les conflits immédiatement.",
          "Arrêts maladie en pleine nuit ? Le moteur de remplacement propose des collaborateurs disponibles avec la bonne qualification et un trajet court – vous les sollicitez directement depuis l’application.",
        ],
        bullets: [
          "Équipes matin / après-midi / nuit en parallèle",
          "Temps de repos minimaux vérifiés automatiquement",
          "Moteur de remplacement avec matching de qualifications",
          "Notifications push aux collaborateurs sans spam de chat",
        ],
      },
      {
        eyebrow: "Protocoles de sécurité",
        heading: "Niveau de formation, EPI, contrôle hygiène – tout est prouvé.",
        body: [
          "Dans le nettoyage industriel – p. ex. agroalimentaire, pharmacie ou chimie – les règles sur les EPI, la formation, les produits et l’hygiène sont strictes. Taskey enregistre par collaborateur le niveau de formation actuel et bloque automatiquement les interventions pour lesquelles le collaborateur n’est pas qualifié.",
          "Par intervention, vous documentez les EPI utilisés, le produit de nettoyage employé avec son numéro de lot et, le cas échéant, des mesures de température. Avec signature numérique du chef d’équipe si vous le souhaitez.",
        ],
      },
      {
        eyebrow: "Reporting client",
        heading: "Rapport mensuel sans marathon du week-end.",
        body: [
          "Les donneurs d’ordres industriels veulent des rapports mensuels avec feuilles d’heures, protocoles de nettoyage, matériaux utilisés et réclamations. Depuis Taskey, vous générez ce rapport en deux clics – branding et signatures inclus.",
          "Sur demande, automatiquement le premier du mois sous forme de PDF signé envoyé par e-mail au donneur d’ordres. Vous économisez des heures de travail manuel chaque mois.",
        ],
      },
      {
        eyebrow: "Paie",
        heading: "Grilles complexes – facturées simplement.",
        body: [
          "Le nettoyage industriel a souvent des grilles complexes : primes de poste, majorations dimanche et jours fériés, travail de nuit, primes de pénibilité. Taskey les calcule automatiquement selon votre grille configurée et exporte les données de paie prêtes pour DATEV.",
          "Votre comptable reçoit un fichier par mois, importé directement – pas de listes Excel, pas de questions de retour.",
        ],
      },
    ],
    faqs: [
      {
        question: "Taskey peut-il modéliser des grilles de poste complexes ?",
        answer:
          "Oui. Par collaborateur ou par groupe, vous enregistrez la grille, les primes et les indemnités. Taskey les calcule automatiquement à l’export de la paie.",
      },
      {
        question: "Comment le niveau de formation de chaque collaborateur est-il maintenu ?",
        answer:
          "Par collaborateur, vous gérez les formations avec dates de validité. Quand une formation expire, le collaborateur est automatiquement retiré des interventions concernées et vous recevez un rappel de recyclage.",
      },
      {
        question: "Les lots de produits de nettoyage peuvent-ils être documentés par intervention ?",
        answer:
          "Oui. Par intervention, vous sélectionnez dans une liste le produit utilisé et, le cas échéant, le numéro de lot. Dans la production agroalimentaire ou pharmaceutique, c’est souvent une exigence d’audit.",
      },
      {
        question: "Les auditeurs externes peuvent-ils obtenir un accès en lecture seule ?",
        answer:
          "Oui. Vous donnez à un auditeur un accès en lecture temporaire aux sites et périodes pertinents – sans lui ouvrir l’ensemble de votre système.",
      },
      {
        question: "Et si je nettoie 24/7 dans plusieurs usines en parallèle ?",
        answer:
          "Taskey s’adapte à un nombre illimité d’usines et d’équipes. Vous pouvez organiser les sites par lieu, par donneur d’ordres ou par centre de coût et obtenir des analyses séparées.",
      },
    ],
    related: [
      {
        href: "/software-gebaeudereinigung",
        label: "Logiciel pour le nettoyage de bâtiments",
        description: "Logiciel métier tout-en-un : planification, preuve NFC, pointage, devis, factures, marges en direct.",
      },
      {
        href: "/einsatzplanung-reinigung",
        label: "Planification d’interventions de nettoyage",
        description: "Planifier les postes en 3x8 de façon professionnelle.",
      },
      {
        href: "/leistungsnachweis-gebaeudereinigung",
        label: "Justificatif de prestations de nettoyage",
        description: "Preuve résistant à l’audit pour chaque intervention.",
      },
      {
        href: "/pricing#enterprise",
        label: "Offre Enterprise",
        description: "Pour les entreprises industrielles avec 50+ collaborateurs et besoins API.",
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
      breadcrumbs={[...c.breadcrumbs] as { name: string; url: string }[]}
      sections={c.sections as any}
      faqs={c.faqs.map((f) => ({ question: f.question, answer: f.answer }))}
      related={[...c.related] as { href: string; label: string; description?: string }[]}
    />
  );
}
