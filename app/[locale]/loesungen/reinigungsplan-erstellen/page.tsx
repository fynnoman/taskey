import type { Metadata } from "next";
import LandingPageTemplate from "@/components/landing/LandingPageTemplate";
import { buildMetadata, pickLocale, type PageCopy } from "@/lib/i18n-metadata";

const path = "/loesungen/reinigungsplan-erstellen";

const COPY: PageCopy = {
  de: {
    title: "Reinigungsplan erstellen | Struktur, Vorlage, Software | Taskey",
    description:
      "Wie erstellt man einen Reinigungsplan? Aufbau, Pflicht-Inhalte und digitale Umsetzung. Struktur pro Objekt, Frequenzen, Nachweise und Übergabe an das Team. Ohne Excel-Chaos.",
    ogTitle: "Reinigungsplan erstellen | Taskey",
    ogDescription:
      "Struktur, Pflicht-Inhalte und digitale Umsetzung eines Reinigungsplans für die Gebäudereinigung.",
    twitterTitle: "Reinigungsplan erstellen | Taskey",
    twitterDescription:
      "Struktur, Pflicht-Inhalte und digitale Umsetzung eines Reinigungsplans.",
  },
  en: {
    title: "Create a cleaning plan | Structure, template, software | Taskey",
    description:
      "How to create a cleaning plan. Structure, required content and digital delivery. Site structure, frequencies, proof of service and team handover. Without spreadsheet chaos.",
    ogTitle: "Create a cleaning plan | Taskey",
    ogDescription:
      "Structure, required content and digital delivery of a cleaning plan.",
    twitterTitle: "Create a cleaning plan | Taskey",
    twitterDescription:
      "Structure, required content and digital delivery of a cleaning plan.",
  },
  fr: {
    title: "Créer un plan de nettoyage | Structure, modèle, logiciel | Taskey",
    description:
      "Comment créer un plan de nettoyage. Structure, contenus obligatoires et mise en œuvre digitale. Structure par site, fréquences, justificatifs et transmission à l'équipe. Sans chaos Excel.",
    ogTitle: "Créer un plan de nettoyage | Taskey",
    ogDescription:
      "Structure, contenus obligatoires et mise en œuvre digitale d'un plan de nettoyage.",
    twitterTitle: "Créer un plan de nettoyage | Taskey",
    twitterDescription:
      "Structure, contenus obligatoires et mise en œuvre digitale.",
  },
};

const OG_ALT: Record<"de" | "en" | "fr", string> = {
  de: "Reinigungsplan erstellen mit Taskey",
  en: "Create a cleaning plan with Taskey",
  fr: "Créer un plan de nettoyage avec Taskey",
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
    title: "Reinigungsplan erstellen",
    eyebrow: "Ratgeber · Reinigungsplan",
    h1: "Reinigungsplan erstellen —",
    h1Accent: "Struktur, Pflichtinhalte, Umsetzung.",
    lead: "Ein guter Reinigungsplan ist die Grundlage für saubere Objekte, zufriedene Auftraggeber und ein Team, das ohne Rückfragen arbeitet. Was gehört rein, wie ist der Aufbau, und wie kommt der Plan vom Papier in den Arbeitsalltag der Reinigungskräfte?",
    breadcrumbs: [
      { name: "Home", url: "https://www.taskeyapp.com" },
      { name: "Lösungen", url: "https://www.taskeyapp.com/loesungen" },
      { name: "Reinigungsplan erstellen", url: `https://www.taskeyapp.com${path}` },
    ],
    sections: [
      {
        eyebrow: "Grundlage",
        heading: "Was ist ein Reinigungsplan und was gehört rein?",
        body: [
          "Ein Reinigungsplan ist die Beschreibung, welche Reinigungsleistung an welchem Ort mit welcher Frequenz erbracht wird. Er ist Grundlage der Kalkulation, der Ausschreibung, der Einsatzplanung und des Leistungsnachweises. Ohne dokumentierten Plan gibt es keine belastbare Kalkulation und keine Grundlage für Reklamationsklärung.",
          "Im Kern beschreibt ein Reinigungsplan drei Ebenen: den Ort, die Leistung, die Frequenz. Ort meint Raum, Bereich oder Flächenart. Leistung meint die konkrete Tätigkeit, zum Beispiel Nassreinigung, Kehren, Fensterputz oder Sanitärgrundreinigung. Frequenz meint werktäglich, wöchentlich, monatlich oder nach Bedarf.",
        ],
        bullets: [
          "Objekt und Adresse",
          "Räume und Flächen mit Quadratmetern",
          "Leistungsverzeichnis pro Raumtyp",
          "Frequenzen mit Wochentagen oder Zeitfenstern",
          "Sonderleistungen wie Grundreinigung, Glas oder Winterdienst",
          "Ansprechpartner und Schlüsselregelung",
        ],
      },
      {
        eyebrow: "Aufbau",
        heading: "So strukturieren Sie den Reinigungsplan pro Objekt.",
        body: [
          "Die pragmatischste Struktur ist eine Matrix. In den Zeilen stehen Räume oder Bereiche, in den Spalten die Leistungen mit ihrer Frequenz. Diese Matrix ist die Basis für die Kalkulation der Arbeitszeit, den Einsatzplan der Kolonnen und den Leistungsnachweis am Objekt.",
          "Für die Kalkulation lässt sich aus dieser Matrix pro Raum die benötigte Arbeitszeit ermitteln. Der Reinigungskosten-Rechner setzt genau hier an: Fläche mal Leistung ergibt Stunden, Stunden mal Frequenz ergibt Monatsbedarf, plus Kostenpositionen ergibt den Angebotspreis.",
        ],
        bullets: [
          "Zeile pro Raum oder Bereich",
          "Spalte pro Leistung mit Frequenz",
          "Optional: Verantwortliche pro Raum",
          "Optional: Reinigungsmittel und Ausstattung pro Raum",
          "Verweise auf DIN- oder Qualitätsstufen bei Bedarf",
        ],
      },
      {
        eyebrow: "Umsetzung",
        heading: "Vom Papier in den Arbeitsalltag.",
        body: [
          "Ein Reinigungsplan, den nur die Objektleitung im Ordner hat, hilft im Tagesbetrieb wenig. Die Reinigungskraft am Objekt braucht Zugriff auf ihre Aufgaben pro Termin, sichtbar auf dem Smartphone, aktualisierbar bei Änderungen und mit einfacher Möglichkeit für Nachweise und Rückmeldungen.",
          "Digital umgesetzt wird der Reinigungsplan zur Grundlage für die Einsatzplanung, den NFC- oder QR-basierten Nachweis am Objekt, die Qualitätskontrolle und die Rechnungsstellung. Mit Taskey liegt genau dieser Ablauf in einem System, ohne parallele Excel-Dateien und ohne Chats zur Aufgabenübergabe.",
        ],
        bullets: [
          "Aufgaben pro Termin für die Reinigungskraft sichtbar",
          "Änderungen live an alle betroffenen Mitarbeitenden",
          "Nachweis pro Objekt und pro Aufgabe möglich",
          "Kontrollen und Reklamationen dokumentiert",
          "Grundlage für Abrechnung und Auswertung",
        ],
      },
      {
        eyebrow: "Rechtliches",
        heading: "Was rechtlich beachtet werden sollte.",
        body: [
          "Für bestimmte Bereiche gibt es Vorgaben. In Kliniken, Pflegeeinrichtungen und Lebensmittelbetrieben regeln Hygienepläne, was gereinigt werden muss und in welcher Frequenz. Der Reinigungsplan ergänzt und operationalisiert diese Hygienepläne für das Reinigungspersonal.",
          "Datenschutz spielt beim Betreten von Räumen mit personenbezogenen Daten eine Rolle, etwa in Arztpraxen oder Kanzleien. Der Reinigungsplan sollte hier die Zugangsregelung, die Reinigungszeiten und die Verantwortlichkeiten dokumentieren.",
        ],
        bullets: [
          "Hygieneplan als Grundlage in sensiblen Bereichen",
          "Zugangsregelungen und Zeiten dokumentieren",
          "Nachweispflichten je Branche prüfen",
          "Regelmäßige Aktualisierung, mindestens jährlich",
        ],
      },
    ],
    faqs: [
      {
        question: "Wie erstelle ich einen Reinigungsplan?",
        answer:
          "Erfassen Sie zuerst das Objekt mit Adresse, Räumen und Quadratmetern. Legen Sie pro Raum die Leistungen mit ihrer Frequenz fest. Ergänzen Sie Sonderleistungen wie Grundreinigung oder Glas. Kalkulieren Sie daraus die Arbeitszeit pro Termin und pro Monat. Digital umgesetzt wird der Plan Grundlage für Einsatzplanung, Nachweis und Abrechnung.",
      },
      {
        question: "Was gehört in einen Reinigungsplan?",
        answer:
          "Objekt, Räume mit Quadratmetern, Leistungen pro Raumtyp, Frequenzen, Sonderleistungen, Ansprechpartner, Schlüsselregelung, Zugangszeiten und optional die verwendeten Reinigungsmittel. In sensiblen Branchen zusätzlich Verweise auf Hygienepläne und Nachweispflichten.",
      },
      {
        question: "Wie oft muss der Reinigungsplan aktualisiert werden?",
        answer:
          "Mindestens jährlich, außerdem bei jeder relevanten Änderung: neue Flächen, neue Leistungen, neue Frequenzen oder neue rechtliche Vorgaben. In laufenden Verträgen ist es üblich, den Plan gemeinsam mit dem Auftraggeber einmal pro Jahr zu prüfen.",
      },
      {
        question: "Reinigungsplan versus Hygieneplan?",
        answer:
          "Der Hygieneplan legt fest, was gereinigt und desinfiziert werden muss, meist auf Grundlage gesetzlicher oder branchenspezifischer Vorgaben. Der Reinigungsplan operationalisiert diese Vorgaben und beschreibt, wer welche Leistung wo in welcher Frequenz erbringt. In Kliniken und Pflegeeinrichtungen ergänzen sich beide Dokumente.",
      },
      {
        question: "Brauche ich einen digitalen Reinigungsplan?",
        answer:
          "Zwingend nicht. Sinnvoll ja, sobald mehrere Objekte, mehrere Mitarbeitende oder Nachweispflichten im Spiel sind. Der digitale Plan wird gleichzeitig Aufgabenliste für die Reinigungskraft, Grundlage für Einsatzplanung und Basis für den Leistungsnachweis. Excel skaliert nur bis zu einer bestimmten Größe.",
      },
      {
        question: "Wie hänge ich Kalkulation und Reinigungsplan zusammen?",
        answer:
          "Der Reinigungsplan gibt Flächen und Frequenzen vor. Multipliziert mit dem Leistungswert pro Reinigungsart ergibt sich die Arbeitszeit pro Reinigung und pro Monat. Der Reinigungskosten-Rechner setzt hier an und ermittelt aus Arbeitszeit, Stundensatz, Material, Fahrt und Zielmarge den Angebotspreis.",
      },
    ],
    related: [
      {
        href: "/rechner/reinigungskosten",
        label: "Reinigungskosten-Rechner",
        description: "Aus dem Reinigungsplan direkt zur Angebotszahl. Kostenlos.",
      },
      {
        href: "/rechner/personalbedarf",
        label: "Personalbedarf-Rechner",
        description: "Ermittelt aus Fläche und Frequenz die benötigten Stunden pro Monat.",
      },
      {
        href: "/software-gebaeudereinigung",
        label: "Software für Gebäudereinigung",
        description: "Reinigungsplan, Einsatzplanung, Nachweis und Abrechnung in einem System.",
      },
      {
        href: "/loesungen/checklisten-reinigung-digital",
        label: "Digitale Checklisten",
        description: "So werden aus dem Reinigungsplan konkrete Aufgabenlisten für das Team.",
      },
      {
        href: "/leistungsnachweis-gebaeudereinigung",
        label: "Leistungsnachweis",
        description: "Wie die im Plan definierten Leistungen dokumentiert werden.",
      },
    ],
  },
  en: {
    title: "Create a cleaning plan",
    eyebrow: "Guide · Cleaning plan",
    h1: "Create a cleaning plan —",
    h1Accent: "structure, required content, delivery.",
    lead: "A good cleaning plan is the foundation for clean sites, satisfied clients and a team that works without follow-up questions. What belongs in it, how is it structured, and how does it move from paper into the daily work of the cleaners?",
    breadcrumbs: [
      { name: "Home", url: "https://www.taskeyapp.com" },
      { name: "Solutions", url: "https://www.taskeyapp.com/loesungen" },
      { name: "Create a cleaning plan", url: `https://www.taskeyapp.com${path}` },
    ],
    sections: [
      {
        eyebrow: "Foundation",
        heading: "What is a cleaning plan and what belongs in it?",
        body: [
          "A cleaning plan describes which cleaning service is delivered where, at which frequency. It is the foundation for calculation, tender, dispatching and proof of service. Without a documented plan there is no defensible calculation and no basis for handling complaints.",
          "At its core, a cleaning plan describes three layers: location, service, frequency. Location means room, area or surface type. Service means the actual task, for example wet cleaning, sweeping, glass or sanitary deep cleaning. Frequency means daily, weekly, monthly or on demand.",
        ],
        bullets: [
          "Site and address",
          "Rooms and areas with square metres",
          "Service catalogue per room type",
          "Frequencies with weekdays or time slots",
          "Special services such as deep cleaning, glass or winter service",
          "Contact persons and key handling",
        ],
      },
      {
        eyebrow: "Structure",
        heading: "How to structure the cleaning plan per site.",
        body: [
          "The most pragmatic structure is a matrix. Rows are rooms or areas, columns are services with their frequency. This matrix is the basis for time calculation, crew dispatching and on-site proof of service.",
          "For calculation, the matrix produces the required working time per room. The cleaning cost calculator picks up here: area times productivity gives hours, hours times frequency gives monthly need, plus cost positions gives the quoted price.",
        ],
        bullets: [
          "Row per room or area",
          "Column per service with frequency",
          "Optional: responsible persons per room",
          "Optional: cleaning agents and equipment per room",
          "References to DIN or quality levels where needed",
        ],
      },
      {
        eyebrow: "Delivery",
        heading: "From paper to daily work.",
        body: [
          "A cleaning plan that lives only in the account manager's folder rarely helps in daily operation. The cleaner on site needs access to their tasks per shift, visible on the phone, updatable when things change, with an easy way to log proof and feedback.",
          "Delivered digitally, the cleaning plan becomes the foundation for dispatching, NFC or QR proof on site, quality control and invoicing. With Taskey, all of that lives in one system, without parallel spreadsheets and without chats to hand off tasks.",
        ],
        bullets: [
          "Tasks per shift visible to the cleaner",
          "Changes reach all affected staff live",
          "Proof per site and per task possible",
          "Inspections and complaints documented",
          "Foundation for invoicing and analysis",
        ],
      },
      {
        eyebrow: "Legal",
        heading: "What to keep in mind legally.",
        body: [
          "Certain sectors have specific requirements. In hospitals, care facilities and food businesses, hygiene plans define what must be cleaned and at which frequency. The cleaning plan complements and operationalises those hygiene plans for the cleaning staff.",
          "Data protection matters in rooms with personal data, for example medical or legal practices. The cleaning plan should document access rules, cleaning times and responsibilities.",
        ],
        bullets: [
          "Hygiene plan as basis in sensitive areas",
          "Document access rules and times",
          "Check proof requirements per industry",
          "Regular update, at least annually",
        ],
      },
    ],
    faqs: [
      {
        question: "How do I create a cleaning plan?",
        answer:
          "First record the site with address, rooms and square metres. Define services and frequency per room. Add specials such as deep cleaning or glass. Calculate working time per shift and per month. Delivered digitally, the plan becomes the basis for dispatching, proof and invoicing.",
      },
      {
        question: "What belongs in a cleaning plan?",
        answer:
          "Site, rooms with area, services per room type, frequencies, special services, contact persons, key handling, access times and optionally the cleaning agents used. In sensitive industries also references to hygiene plans and proof duties.",
      },
      {
        question: "How often does a cleaning plan need to be updated?",
        answer:
          "At least annually, plus on any relevant change: new areas, new services, new frequencies or new legal requirements. In running contracts it is common practice to review the plan with the client once a year.",
      },
      {
        question: "Cleaning plan versus hygiene plan?",
        answer:
          "The hygiene plan defines what must be cleaned and disinfected, usually on the basis of legal or industry-specific requirements. The cleaning plan operationalises those requirements and describes who delivers which service where and how often. In hospitals and care facilities, both documents complement each other.",
      },
      {
        question: "Do I need a digital cleaning plan?",
        answer:
          "Not strictly. Useful yes, as soon as multiple sites, multiple staff members or proof duties come into play. The digital plan becomes the task list for the cleaner, the basis for dispatching and the foundation for proof of service. Spreadsheets scale only to a point.",
      },
      {
        question: "How do calculation and cleaning plan connect?",
        answer:
          "The cleaning plan defines areas and frequencies. Multiplied by productivity per cleaning type, this gives working time per cleaning and per month. The cleaning cost calculator picks this up and derives the quoted price from working time, hourly rate, materials, travel and target margin.",
      },
    ],
    related: [
      {
        href: "/rechner/reinigungskosten",
        label: "Cleaning cost calculator",
        description: "From cleaning plan to quote price. Free.",
      },
      {
        href: "/rechner/personalbedarf",
        label: "Staff requirement calculator",
        description: "Derives required hours per month from area and frequency.",
      },
      {
        href: "/software-gebaeudereinigung",
        label: "Cleaning company software",
        description: "Cleaning plan, dispatching, proof and invoicing in one system.",
      },
      {
        href: "/loesungen/checklisten-reinigung-digital",
        label: "Digital checklists",
        description: "How the cleaning plan becomes concrete task lists for the team.",
      },
      {
        href: "/leistungsnachweis-gebaeudereinigung",
        label: "Proof of service",
        description: "How the services defined in the plan are documented.",
      },
    ],
  },
  fr: {
    title: "Créer un plan de nettoyage",
    eyebrow: "Guide · Plan de nettoyage",
    h1: "Créer un plan de nettoyage —",
    h1Accent: "structure, contenus obligatoires, mise en œuvre.",
    lead: "Un bon plan de nettoyage est la base pour des sites propres, des donneurs d'ordre satisfaits et une équipe qui travaille sans questions de suivi. Que doit-il contenir, comment est-il structuré, et comment passer du papier au quotidien des agents?",
    breadcrumbs: [
      { name: "Accueil", url: "https://www.taskeyapp.com" },
      { name: "Solutions", url: "https://www.taskeyapp.com/loesungen" },
      { name: "Créer un plan de nettoyage", url: `https://www.taskeyapp.com${path}` },
    ],
    sections: [
      {
        eyebrow: "Base",
        heading: "Qu'est-ce qu'un plan de nettoyage et que contient-il?",
        body: [
          "Un plan de nettoyage décrit quelle prestation est réalisée où, à quelle fréquence. Il est la base du calcul, de l'appel d'offres, de la planification et du justificatif. Sans plan documenté, pas de calcul solide ni de base pour traiter les réclamations.",
          "Au cœur, un plan de nettoyage décrit trois couches: lieu, prestation, fréquence. Le lieu est la pièce, la zone ou le type de surface. La prestation est la tâche concrète, par exemple lavage humide, balayage, vitres ou nettoyage sanitaire en profondeur. La fréquence est quotidienne, hebdomadaire, mensuelle ou à la demande.",
        ],
        bullets: [
          "Site et adresse",
          "Pièces et zones avec surface",
          "Catalogue de prestations par type de pièce",
          "Fréquences avec jours ou créneaux",
          "Prestations spéciales comme remise en état, vitres ou hivernal",
          "Interlocuteurs et gestion des clés",
        ],
      },
      {
        eyebrow: "Structure",
        heading: "Comment structurer le plan par site.",
        body: [
          "La structure la plus pragmatique est une matrice. Les lignes sont les pièces ou zones, les colonnes les prestations avec leur fréquence. Cette matrice est la base pour calculer le temps de travail, la planification des équipes et le justificatif sur site.",
          "Pour le calcul, la matrice donne le temps de travail nécessaire par pièce. Le calculateur de coûts de nettoyage se raccroche ici: surface fois rendement égale heures, heures fois fréquence égale besoin mensuel, plus postes de coûts égale prix proposé.",
        ],
        bullets: [
          "Ligne par pièce ou zone",
          "Colonne par prestation avec fréquence",
          "Optionnel: responsables par pièce",
          "Optionnel: produits et matériel par pièce",
          "Références aux normes ou niveaux de qualité si nécessaire",
        ],
      },
      {
        eyebrow: "Mise en œuvre",
        heading: "Du papier au quotidien.",
        body: [
          "Un plan qui ne vit que dans le classeur de l'encadrement aide peu en exploitation. L'agent sur site a besoin d'accéder à ses tâches par intervention, visible sur le téléphone, mis à jour en cas de changement, avec un moyen simple pour justificatifs et retours.",
          "Mis en œuvre digitalement, le plan devient la base de la planification, du justificatif NFC ou QR sur site, du contrôle qualité et de la facturation. Avec Taskey, tout cela vit dans un système, sans tableaux parallèles ni chats de transmission.",
        ],
        bullets: [
          "Tâches par intervention visibles pour l'agent",
          "Changements diffusés à tous les concernés en direct",
          "Justificatif par site et par tâche possible",
          "Contrôles et réclamations documentés",
          "Base pour facturation et analyse",
        ],
      },
      {
        eyebrow: "Cadre",
        heading: "Ce qu'il faut respecter juridiquement.",
        body: [
          "Certains secteurs ont des exigences spécifiques. En cliniques, EHPAD et agroalimentaire, des plans d'hygiène définissent ce qui doit être nettoyé et à quelle fréquence. Le plan de nettoyage complète et opérationnalise ces plans d'hygiène pour l'agent.",
          "La protection des données compte dans les pièces avec données personnelles, par exemple cabinets médicaux ou juridiques. Le plan doit documenter les règles d'accès, les horaires et les responsabilités.",
        ],
        bullets: [
          "Plan d'hygiène comme base dans les zones sensibles",
          "Documenter règles d'accès et horaires",
          "Vérifier les obligations de justificatif par branche",
          "Mise à jour régulière, au moins annuelle",
        ],
      },
    ],
    faqs: [
      {
        question: "Comment créer un plan de nettoyage?",
        answer:
          "Enregistrez d'abord le site avec adresse, pièces et surface. Définissez prestations et fréquence par pièce. Ajoutez les spéciales comme remise en état ou vitres. Calculez le temps de travail par intervention et par mois. Mis en œuvre digitalement, le plan devient la base de la planification, du justificatif et de la facturation.",
      },
      {
        question: "Que contient un plan de nettoyage?",
        answer:
          "Site, pièces avec surface, prestations par type de pièce, fréquences, prestations spéciales, interlocuteurs, gestion des clés, horaires d'accès et optionnellement les produits utilisés. En secteurs sensibles, également références aux plans d'hygiène et obligations de justificatif.",
      },
      {
        question: "À quelle fréquence mettre à jour le plan?",
        answer:
          "Au moins une fois par an, plus à chaque changement pertinent: nouvelles surfaces, nouvelles prestations, nouvelles fréquences ou nouvelles exigences légales. Dans les contrats en cours, il est courant de revoir le plan avec le donneur d'ordre une fois par an.",
      },
      {
        question: "Plan de nettoyage versus plan d'hygiène?",
        answer:
          "Le plan d'hygiène définit ce qui doit être nettoyé et désinfecté, généralement sur base d'exigences légales ou sectorielles. Le plan de nettoyage opérationnalise et décrit qui délivre quelle prestation où et à quelle fréquence. En cliniques et EHPAD, les deux documents se complètent.",
      },
      {
        question: "Ai-je besoin d'un plan digital?",
        answer:
          "Pas obligatoire. Utile oui, dès que plusieurs sites, plusieurs agents ou obligations de justificatif sont en jeu. Le plan digital devient liste de tâches pour l'agent, base de planification et fondation du justificatif. Excel n'évolue que jusqu'à un certain point.",
      },
      {
        question: "Comment lier calcul et plan de nettoyage?",
        answer:
          "Le plan définit surfaces et fréquences. Multiplié par le rendement par type de prestation, cela donne le temps de travail par prestation et par mois. Le calculateur de coûts se raccroche ici et déduit le prix proposé du temps de travail, du taux horaire, des matériaux, du déplacement et de la marge cible.",
      },
    ],
    related: [
      {
        href: "/rechner/reinigungskosten",
        label: "Calculateur de coûts de nettoyage",
        description: "Du plan de nettoyage au prix proposé. Gratuit.",
      },
      {
        href: "/rechner/personalbedarf",
        label: "Calculateur d'effectif",
        description: "Déduit les heures nécessaires par mois de surface et fréquence.",
      },
      {
        href: "/software-gebaeudereinigung",
        label: "Logiciel pour société de nettoyage",
        description: "Plan, planification, justificatif et facturation dans un système.",
      },
      {
        href: "/loesungen/checklisten-reinigung-digital",
        label: "Checklists digitales",
        description: "Comment le plan devient des listes de tâches concrètes pour l'équipe.",
      },
      {
        href: "/leistungsnachweis-gebaeudereinigung",
        label: "Justificatif de prestations",
        description: "Comment les prestations définies dans le plan sont documentées.",
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
      sections={c.sections as unknown as import("@/components/landing/LandingPageTemplate").LandingSection[]}
      faqs={c.faqs.map((f) => ({ question: f.question, answer: f.answer }))}
      related={[...c.related] as { href: string; label: string; description?: string }[]}
    />
  );
}
