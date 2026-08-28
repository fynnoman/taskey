import type { Metadata } from "next";
import LandingPageTemplate from "@/components/landing/LandingPageTemplate";
import { buildMetadata, pickLocale, type PageCopy } from "@/lib/i18n-metadata";

const path = "/loesungen/reinigungsobjekte-verwalten";

const COPY: PageCopy = {
  de: {
    title: "Reinigungsobjekte verwalten | Objektstammdaten, Nachweis, Team | Taskey",
    description:
      "Reinigungsobjekte sauber verwalten: Stammdaten, Kontakte, Schlüssel, Reinigungsplan und Nachweis in einem System. Alle Informationen pro Objekt zentral, Team sieht was es braucht. Ohne Excel-Chaos.",
    ogTitle: "Reinigungsobjekte verwalten | Taskey",
    ogDescription:
      "Objektstammdaten, Kontakte, Schlüssel, Reinigungsplan und Nachweis in einem System. Zentral, mobil, aktuell.",
    twitterTitle: "Reinigungsobjekte verwalten | Taskey",
    twitterDescription:
      "Stammdaten, Kontakte, Schlüssel, Plan und Nachweis pro Objekt in einem System.",
  },
  en: {
    title: "Manage cleaning sites | Master data, proof, team | Taskey",
    description:
      "Manage cleaning sites cleanly: master data, contacts, keys, cleaning plan and proof in one system. All information per site centralised, the team sees what it needs. Without spreadsheet chaos.",
    ogTitle: "Manage cleaning sites | Taskey",
    ogDescription:
      "Master data, contacts, keys, cleaning plan and proof in one system. Central, mobile, current.",
    twitterTitle: "Manage cleaning sites | Taskey",
    twitterDescription:
      "Master data, contacts, keys, plan and proof per site in one system.",
  },
  fr: {
    title: "Gérer les sites de nettoyage | Données maîtres, preuve, équipe | Taskey",
    description:
      "Gérez proprement les sites de nettoyage: données maîtres, contacts, clés, plan et justificatif dans un système. Toutes les informations par site centralisées, l'équipe voit ce qu'il faut. Sans chaos Excel.",
    ogTitle: "Gérer les sites de nettoyage | Taskey",
    ogDescription:
      "Données maîtres, contacts, clés, plan et justificatif dans un système. Central, mobile, actuel.",
    twitterTitle: "Gérer les sites de nettoyage | Taskey",
    twitterDescription:
      "Données maîtres, contacts, clés, plan et justificatif par site dans un système.",
  },
};

const OG_ALT: Record<"de" | "en" | "fr", string> = {
  de: "Reinigungsobjekte verwalten mit Taskey",
  en: "Manage cleaning sites with Taskey",
  fr: "Gérer les sites de nettoyage avec Taskey",
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
    title: "Reinigungsobjekte verwalten",
    eyebrow: "Ratgeber · Objektverwaltung",
    h1: "Reinigungsobjekte verwalten —",
    h1Accent: "Stammdaten, Plan, Team.",
    lead: "Sobald ein Reinigungsbetrieb mehr als eine Handvoll Objekte betreut, wird die zentrale Objektverwaltung zum Nerv des Betriebs. Wer Objektstammdaten, Kontakte, Schlüssel, Reinigungsplan und Nachweise in einem System hat, spart tägliche Rückfragen und liefert Auftraggebern das, was sie erwarten.",
    breadcrumbs: [
      { name: "Home", url: "https://www.taskeyapp.com" },
      { name: "Lösungen", url: "https://www.taskeyapp.com/loesungen" },
      { name: "Reinigungsobjekte verwalten", url: `https://www.taskeyapp.com${path}` },
    ],
    sections: [
      {
        eyebrow: "Warum es zählt",
        heading: "Warum die Objektverwaltung so schnell zum Engpass wird.",
        body: [
          "Ein Reinigungsobjekt ist keine Adresszeile. Es hat Auftraggeber, Ansprechpartner, Ansprechpartner für Notfälle, Schlüsselbestand, Zugangszeiten, Reinigungsplan mit Frequenzen, Materialbedarf, Sonderleistungen und Sonderregelungen. Wer diese Informationen in Ordnern, Excel-Dateien und Chats verteilt, verliert regelmäßig Details.",
          "Der eigentliche Schmerz entsteht bei Vertretung, Personalwechsel oder Nachverhandlung. Die Reinigungskraft steht vor dem Objekt, weiß nicht wo der Schlüssel liegt, kennt die Notfallnummer nicht, findet den aktuellen Plan nicht. Die Objektleitung telefoniert hinterher. Der Auftraggeber wird nervös.",
        ],
        bullets: [
          "Auftraggeber und Ansprechpartner pro Objekt",
          "Schlüsselbestand und Zugangszeiten",
          "Reinigungsplan mit Frequenzen",
          "Materialbedarf und Sonderleistungen",
          "Notfallkontakte und Sonderregelungen",
          "Historie aller Änderungen",
        ],
      },
      {
        eyebrow: "Struktur",
        heading: "Was gehört in die Objektstammdaten.",
        body: [
          "Eine tragfähige Objektakte hat vier Ebenen: Basis, Zugang, Leistung, Historie. Basis ist alles Formale: Adresse, Auftraggeber, Vertrag. Zugang ist alles Operative: Schlüssel, Zeiten, Ansprechpartner. Leistung ist der Reinigungsplan mit allen Frequenzen und Sonderleistungen. Historie ist die Zeitachse aller Einsätze, Reklamationen und Änderungen.",
          "In dieser Struktur findet sich sowohl die Objektleitung als auch die Reinigungskraft zurecht. Wichtig ist die klare Trennung zwischen Informationen für den Innendienst und Informationen für den Außendienst. Die Reinigungskraft am Objekt sieht nur, was für den heutigen Einsatz relevant ist.",
        ],
        bullets: [
          "Basis: Adresse, Auftraggeber, Vertrag",
          "Zugang: Schlüssel, Zeiten, Ansprechpartner, Notfall",
          "Leistung: Reinigungsplan mit Frequenzen",
          "Historie: Einsätze, Reklamationen, Änderungen",
        ],
      },
      {
        eyebrow: "Digital",
        heading: "Wie Taskey Objekte digital führt.",
        body: [
          "In Taskey ist jedes Objekt eine eigene Akte. Alle Stammdaten sind an einem Ort, die Reinigungskraft sieht per App den heutigen Einsatz mit allen relevanten Informationen. Änderungen an Plan oder Zugangsregelung sind sofort für alle betroffenen Mitarbeitenden sichtbar.",
          "Der Nachweis pro Einsatz landet automatisch in der Historie. Bei Reklamationen ist der Zeitverlauf auf einen Blick da. Bei Vertretungen entfällt das lange Briefing, weil die Reinigungskraft alle nötigen Informationen direkt im Objekt sieht.",
        ],
        bullets: [
          "Alle Stammdaten pro Objekt an einem Ort",
          "Reinigungskraft sieht nur ihren Einsatz mit relevanten Infos",
          "Änderungen live an alle Betroffenen",
          "Historie automatisch aus jedem Nachweis",
          "Reklamationen und Änderungen dokumentiert",
        ],
      },
      {
        eyebrow: "Skalierung",
        heading: "Was bei mehreren Standorten und Kolonnen wichtig wird.",
        body: [
          "Ab zehn bis fünfzehn Objekten wird die zentrale Übersicht wichtiger als die einzelne Akte. Welche Objekte laufen sauber, welche haben Reklamationen, wo steht Personalwechsel an, wo droht ein Vertragsende? Ein digitales System bietet diese Übersicht, ohne dass jemand Excel-Reports pflegen muss.",
          "Bei mehreren Standorten oder Regionen kommt die Aufteilung nach Objektleitung oder Region hinzu. Jede Objektleitung sieht ihre Objekte, die Zentrale sieht alles. Kolonnenplanung, Vertretungen und Aushilfen werden über die Objektakte transparent gesteuert.",
        ],
        bullets: [
          "Zentrale Übersicht aller Objekte mit Status",
          "Filter nach Auftraggeber, Region, Objektleitung",
          "Kolonnenplanung mit Blick auf Objektlast",
          "Frühwarnzeichen für Reklamationen oder Auslastung",
        ],
      },
    ],
    faqs: [
      {
        question: "Was gehört in die Stammdaten eines Reinigungsobjekts?",
        answer:
          "Adresse, Auftraggeber, Vertragsdaten, Ansprechpartner mit Notfallkontakten, Schlüsselbestand, Zugangszeiten, Reinigungsplan mit Frequenzen, Materialbedarf, Sonderleistungen, Sonderregelungen und die Historie aller Einsätze, Reklamationen und Änderungen.",
      },
      {
        question: "Reicht Excel für die Objektverwaltung?",
        answer:
          "Bei bis zu zehn Objekten oft ja. Ab dann fehlt die zentrale Übersicht, Änderungen werden nicht überall aktualisiert, und die Reinigungskraft am Objekt hat keinen Zugriff auf die aktuellen Informationen. Ein digitales System skaliert deutlich besser.",
      },
      {
        question: "Wie sieht die Reinigungskraft nur das, was sie braucht?",
        answer:
          "In einem System wie Taskey wird pro Einsatz gefiltert. Die Reinigungskraft sieht Adresse, Zugang, Aufgaben, Reinigungsplan und Materialbedarf für heute. Interne Notizen, Vertragsdetails oder Reklamationshistorie bleiben dem Innendienst vorbehalten.",
      },
      {
        question: "Wie werden Änderungen an Plan oder Zugang kommuniziert?",
        answer:
          "Änderungen werden in der Objektakte gepflegt und sind sofort für alle betroffenen Mitarbeitenden sichtbar. Zusätzliche Benachrichtigungen per App oder Mail sind optional. Papierpläne oder Chats sind nicht mehr nötig.",
      },
      {
        question: "Wie hilft Objektverwaltung bei Reklamationen?",
        answer:
          "Der Nachweis pro Einsatz landet automatisch in der Historie. Bei Reklamationen ist die Zeitachse mit Fotos, Signaturen oder NFC-Nachweisen auf einen Blick da. Der Auftraggeber bekommt eine klare Antwort mit Daten, keine Vermutung.",
      },
      {
        question: "Wie hänge ich Objektverwaltung und Kalkulation zusammen?",
        answer:
          "Der Reinigungsplan in der Objektakte ist die Grundlage der Kalkulation. Fläche und Frequenzen ergeben die benötigte Arbeitszeit, aus dem Stundenverrechnungssatz und Materialbedarf folgen die Vollkosten. Der Reinigungskosten-Rechner nutzt genau diese Werte.",
      },
    ],
    related: [
      {
        href: "/software-gebaeudereinigung",
        label: "Software für Gebäudereinigung",
        description: "Objekt, Personal, Plan und Nachweis in einem System.",
      },
      {
        href: "/loesungen/reinigungsplan-erstellen",
        label: "Reinigungsplan erstellen",
        description: "Was der Reinigungsplan in der Objektakte enthält.",
      },
      {
        href: "/loesungen/schluesselverwaltung-gebaeudereinigung",
        label: "Schlüsselverwaltung",
        description: "Schlüsselbestand als Teil der Objektakte.",
      },
      {
        href: "/rechner/reinigungskosten",
        label: "Reinigungskosten-Rechner",
        description: "Vom Reinigungsplan zur belastbaren Angebotszahl.",
      },
      {
        href: "/rechner/personalbedarf",
        label: "Personalbedarf-Rechner",
        description: "Kapazität pro Objekt aus Fläche und Frequenz.",
      },
    ],
  },
  en: {
    title: "Manage cleaning sites",
    eyebrow: "Guide · Site management",
    h1: "Manage cleaning sites —",
    h1Accent: "master data, plan, team.",
    lead: "As soon as a cleaning company runs more than a handful of sites, central site management becomes the nerve of operations. Anyone with master data, contacts, keys, cleaning plan and proof in one system saves daily back-and-forth and delivers what clients expect.",
    breadcrumbs: [
      { name: "Home", url: "https://www.taskeyapp.com" },
      { name: "Solutions", url: "https://www.taskeyapp.com/loesungen" },
      { name: "Manage cleaning sites", url: `https://www.taskeyapp.com${path}` },
    ],
    sections: [
      {
        eyebrow: "Why it matters",
        heading: "Why site management becomes a bottleneck fast.",
        body: [
          "A cleaning site is not just an address line. It has a client, contacts, emergency contacts, key inventory, access hours, cleaning plan with frequencies, material need, special services and special rules. Scattering this across folders, spreadsheets and chats regularly loses details.",
          "The real pain hits on substitution, staff change or renegotiation. The cleaner stands in front of the site, does not know where the key is, does not have the emergency number, cannot find the current plan. The account manager runs after it. The client gets nervous.",
        ],
        bullets: [
          "Client and contacts per site",
          "Key inventory and access hours",
          "Cleaning plan with frequencies",
          "Material need and special services",
          "Emergency contacts and special rules",
          "History of all changes",
        ],
      },
      {
        eyebrow: "Structure",
        heading: "What belongs in the site master data.",
        body: [
          "A viable site record has four layers: base, access, service, history. Base is everything formal: address, client, contract. Access is everything operational: keys, times, contacts. Service is the cleaning plan with all frequencies and specials. History is the timeline of visits, complaints and changes.",
          "Both back office and cleaner find their way in this structure. The clear separation between back-office information and field information matters. On site, the cleaner only sees what is relevant for today's visit.",
        ],
        bullets: [
          "Base: address, client, contract",
          "Access: keys, times, contacts, emergency",
          "Service: cleaning plan with frequencies",
          "History: visits, complaints, changes",
        ],
      },
      {
        eyebrow: "Digital",
        heading: "How Taskey runs sites digitally.",
        body: [
          "In Taskey each site is its own record. All master data lives in one place, the cleaner sees today's visit with all relevant information in the app. Changes to plan or access rules become visible to all affected staff instantly.",
          "Proof per visit lands automatically in the history. On complaints, the timeline is available at a glance. On substitution, the long briefing disappears because the cleaner sees all necessary information in the site record.",
        ],
        bullets: [
          "All master data per site in one place",
          "Cleaner sees only their visit with relevant info",
          "Changes live to all affected",
          "History automatic from every proof",
          "Complaints and changes documented",
        ],
      },
      {
        eyebrow: "Scale",
        heading: "What matters with multiple locations and crews.",
        body: [
          "From ten to fifteen sites, the central overview becomes more important than the individual record. Which sites run cleanly, which have complaints, where does a staff change come up, where does a contract end approach? A digital system provides this overview without anyone maintaining Excel reports.",
          "With multiple locations or regions, the split by account manager or region comes on top. Every account manager sees their sites, the head office sees everything. Crew planning, substitutions and floaters are managed transparently through the site record.",
        ],
        bullets: [
          "Central overview of all sites with status",
          "Filter by client, region, account manager",
          "Crew planning with view on site load",
          "Early warnings for complaints or utilisation",
        ],
      },
    ],
    faqs: [
      {
        question: "What belongs in the master data of a cleaning site?",
        answer:
          "Address, client, contract data, contacts with emergency numbers, key inventory, access hours, cleaning plan with frequencies, material need, special services, special rules and the history of all visits, complaints and changes.",
      },
      {
        question: "Is Excel enough for site management?",
        answer:
          "Often yes up to ten sites. From then on the central overview is missing, changes do not propagate everywhere, and the cleaner on site has no access to current information. A digital system scales significantly better.",
      },
      {
        question: "How does the cleaner see only what they need?",
        answer:
          "In a system like Taskey, filtering is per visit. The cleaner sees address, access, tasks, cleaning plan and material need for today. Internal notes, contract details or complaint history stay with the back office.",
      },
      {
        question: "How are changes to plan or access communicated?",
        answer:
          "Changes are maintained in the site record and are immediately visible to all affected staff. Additional notifications via app or email are optional. Paper plans or chats are no longer needed.",
      },
      {
        question: "How does site management help with complaints?",
        answer:
          "Proof per visit lands automatically in the history. On complaints, the timeline with photos, signatures or NFC proof is available at a glance. The client gets a clear answer with data, not speculation.",
      },
      {
        question: "How do site management and calculation connect?",
        answer:
          "The cleaning plan in the site record is the basis for calculation. Area and frequencies produce required time, hourly rate and material need produce full cost. The cleaning cost calculator uses exactly these values.",
      },
    ],
    related: [
      {
        href: "/software-gebaeudereinigung",
        label: "Cleaning company software",
        description: "Site, staff, plan and proof in one system.",
      },
      {
        href: "/loesungen/reinigungsplan-erstellen",
        label: "Create cleaning plan",
        description: "What the cleaning plan in the site record contains.",
      },
      {
        href: "/loesungen/schluesselverwaltung-gebaeudereinigung",
        label: "Key management",
        description: "Key inventory as part of the site record.",
      },
      {
        href: "/rechner/reinigungskosten",
        label: "Cleaning cost calculator",
        description: "From cleaning plan to defensible quote.",
      },
      {
        href: "/rechner/personalbedarf",
        label: "Staff requirement calculator",
        description: "Capacity per site from area and frequency.",
      },
    ],
  },
  fr: {
    title: "Gérer les sites de nettoyage",
    eyebrow: "Guide · Gestion des sites",
    h1: "Gérer les sites de nettoyage —",
    h1Accent: "données maîtres, plan, équipe.",
    lead: "Dès qu'une société de nettoyage gère plus qu'une poignée de sites, la gestion centrale devient le nerf de l'exploitation. Avec données maîtres, contacts, clés, plan et justificatif dans un système, on économise les allers-retours quotidiens et on livre ce que les donneurs d'ordre attendent.",
    breadcrumbs: [
      { name: "Accueil", url: "https://www.taskeyapp.com" },
      { name: "Solutions", url: "https://www.taskeyapp.com/loesungen" },
      { name: "Gérer les sites de nettoyage", url: `https://www.taskeyapp.com${path}` },
    ],
    sections: [
      {
        eyebrow: "Pourquoi c'est essentiel",
        heading: "Pourquoi la gestion des sites devient vite un goulot.",
        body: [
          "Un site de nettoyage n'est pas juste une adresse. Il a un donneur d'ordre, des interlocuteurs, contacts d'urgence, inventaire de clés, horaires d'accès, plan avec fréquences, besoin matériel, prestations spéciales et règles particulières. Éparpiller ces informations dans classeurs, tableaux et chats perd régulièrement des détails.",
          "La vraie douleur arrive au remplacement, au changement de personnel ou en renégociation. L'agent devant le site ne sait pas où est la clé, n'a pas le numéro d'urgence, ne trouve pas le plan à jour. L'encadrement court derrière. Le donneur d'ordre s'agace.",
        ],
        bullets: [
          "Donneur d'ordre et contacts par site",
          "Inventaire de clés et horaires d'accès",
          "Plan de nettoyage avec fréquences",
          "Besoin matériel et prestations spéciales",
          "Contacts d'urgence et règles particulières",
          "Historique de toutes les modifications",
        ],
      },
      {
        eyebrow: "Structure",
        heading: "Ce qui figure dans les données maîtres.",
        body: [
          "Une fiche site tenable a quatre couches: base, accès, prestation, historique. Base: tout ce qui est formel — adresse, donneur, contrat. Accès: tout ce qui est opérationnel — clés, horaires, contacts. Prestation: le plan avec toutes les fréquences et spéciales. Historique: la ligne du temps des interventions, réclamations et modifications.",
          "Dans cette structure, encadrement et agent s'y retrouvent. La séparation claire entre informations back-office et informations terrain compte. Sur site, l'agent ne voit que ce qui est pertinent pour l'intervention du jour.",
        ],
        bullets: [
          "Base: adresse, donneur, contrat",
          "Accès: clés, horaires, contacts, urgence",
          "Prestation: plan avec fréquences",
          "Historique: interventions, réclamations, changements",
        ],
      },
      {
        eyebrow: "Digital",
        heading: "Comment Taskey gère les sites en digital.",
        body: [
          "Dans Taskey chaque site est une fiche propre. Toutes les données maîtres vivent en un lieu, l'agent voit l'intervention du jour avec toutes les informations utiles dans l'application. Les changements au plan ou aux règles d'accès sont visibles instantanément par tous les concernés.",
          "Le justificatif par intervention arrive automatiquement dans l'historique. En réclamation, la chronologie est visible d'un coup d'œil. En remplacement, le long briefing disparaît parce que l'agent voit toutes les informations nécessaires dans la fiche du site.",
        ],
        bullets: [
          "Toutes les données maîtres par site à un endroit",
          "L'agent ne voit que son intervention avec les infos utiles",
          "Changements en direct pour tous les concernés",
          "Historique automatique depuis chaque justificatif",
          "Réclamations et changements documentés",
        ],
      },
      {
        eyebrow: "Échelle",
        heading: "Ce qui compte avec plusieurs sites et équipes.",
        body: [
          "À partir de dix à quinze sites, la vue centrale devient plus importante que la fiche individuelle. Quels sites tournent proprement, lesquels ont des réclamations, où un changement de personnel arrive, où un fin de contrat approche? Un système digital fournit cette vue sans qu'on maintienne des rapports Excel.",
          "Avec plusieurs sites ou régions s'ajoute la répartition par encadrant ou région. Chaque encadrant voit ses sites, le siège voit tout. Planification, remplacements et renforts sont pilotés de manière transparente via la fiche site.",
        ],
        bullets: [
          "Vue centrale de tous les sites avec statut",
          "Filtres par donneur, région, encadrant",
          "Planification avec vue sur la charge par site",
          "Alertes précoces pour réclamations ou taux d'occupation",
        ],
      },
    ],
    faqs: [
      {
        question: "Que contient la fiche maîtresse d'un site de nettoyage?",
        answer:
          "Adresse, donneur d'ordre, données contractuelles, contacts avec numéros d'urgence, inventaire de clés, horaires d'accès, plan avec fréquences, besoin matériel, prestations spéciales, règles particulières et historique de toutes les interventions, réclamations et modifications.",
      },
      {
        question: "Excel suffit-il pour la gestion des sites?",
        answer:
          "Souvent oui jusqu'à dix sites. Au-delà, la vue centrale manque, les changements ne se propagent pas partout, et l'agent sur site n'a pas accès aux informations à jour. Un système digital évolue nettement mieux.",
      },
      {
        question: "Comment l'agent ne voit-il que ce qu'il faut?",
        answer:
          "Dans un système comme Taskey, le filtrage est par intervention. L'agent voit adresse, accès, tâches, plan et besoin matériel du jour. Notes internes, détails contractuels ou historique de réclamations restent au back-office.",
      },
      {
        question: "Comment les changements sont-ils communiqués?",
        answer:
          "Les changements sont tenus dans la fiche site et sont immédiatement visibles pour tous les concernés. Des notifications supplémentaires par application ou e-mail sont optionnelles. Plans papier ou chats ne sont plus nécessaires.",
      },
      {
        question: "Comment la gestion des sites aide-t-elle en réclamations?",
        answer:
          "Le justificatif par intervention arrive automatiquement dans l'historique. En réclamation, la chronologie avec photos, signatures ou preuves NFC est disponible d'un coup d'œil. Le donneur reçoit une réponse claire avec données, pas spéculation.",
      },
      {
        question: "Comment lier gestion des sites et calcul?",
        answer:
          "Le plan dans la fiche site est la base du calcul. Surface et fréquences produisent le temps nécessaire, taux horaire et besoin matériel produisent le coût complet. Le calculateur de coûts utilise exactement ces valeurs.",
      },
    ],
    related: [
      {
        href: "/software-gebaeudereinigung",
        label: "Logiciel pour société de nettoyage",
        description: "Site, personnel, plan et justificatif dans un système.",
      },
      {
        href: "/loesungen/reinigungsplan-erstellen",
        label: "Créer un plan de nettoyage",
        description: "Ce que le plan dans la fiche site contient.",
      },
      {
        href: "/loesungen/schluesselverwaltung-gebaeudereinigung",
        label: "Gestion des clés",
        description: "L'inventaire de clés comme partie de la fiche site.",
      },
      {
        href: "/rechner/reinigungskosten",
        label: "Calculateur de coûts de nettoyage",
        description: "Du plan au chiffre défendable.",
      },
      {
        href: "/rechner/personalbedarf",
        label: "Calculateur d'effectif",
        description: "Capacité par site à partir de surface et fréquence.",
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
