import type { Metadata } from "next";
import LandingPageTemplate from "@/components/landing/LandingPageTemplate";
import { buildMetadata, pickLocale, type PageCopy } from "@/lib/i18n-metadata";

const path = "/loesungen/reinigungsvertrag-erstellen";

const COPY: PageCopy = {
  de: {
    title: "Reinigungsvertrag erstellen | Aufbau, Klauseln, Fallstricke | Taskey",
    description:
      "Reinigungsvertrag sauber aufsetzen: Leistungsverzeichnis, Frequenzen, Preise, Kündigung, Haftung. Was rein muss, was oft fehlt, und wie der Vertrag mit der operativen Realität zusammenpasst.",
    ogTitle: "Reinigungsvertrag erstellen | Taskey",
    ogDescription:
      "Aufbau, Klauseln und Fallstricke im Reinigungsvertrag. Ratgeber für Auftragnehmer.",
    twitterTitle: "Reinigungsvertrag erstellen | Taskey",
    twitterDescription:
      "Aufbau, Klauseln und Fallstricke im Reinigungsvertrag.",
  },
  en: {
    title: "Create a cleaning contract | Structure, clauses, pitfalls | Taskey",
    description:
      "Set up a cleaning contract cleanly: service catalogue, frequencies, prices, termination, liability. What must be in, what is often missing, and how the contract matches operational reality.",
    ogTitle: "Create a cleaning contract | Taskey",
    ogDescription:
      "Structure, clauses and pitfalls in the cleaning contract. Guide for contractors.",
    twitterTitle: "Create a cleaning contract | Taskey",
    twitterDescription:
      "Structure, clauses and pitfalls in the cleaning contract.",
  },
  fr: {
    title: "Créer un contrat de nettoyage | Structure, clauses, pièges | Taskey",
    description:
      "Établissez proprement un contrat de nettoyage: catalogue de prestations, fréquences, prix, résiliation, responsabilité. Ce qui doit y figurer, ce qui manque souvent, comment il s'aligne avec la réalité opérationnelle.",
    ogTitle: "Créer un contrat de nettoyage | Taskey",
    ogDescription:
      "Structure, clauses et pièges dans le contrat de nettoyage. Guide pour prestataires.",
    twitterTitle: "Créer un contrat de nettoyage | Taskey",
    twitterDescription:
      "Structure, clauses et pièges dans le contrat de nettoyage.",
  },
};

const OG_ALT: Record<"de" | "en" | "fr", string> = {
  de: "Reinigungsvertrag erstellen mit Taskey",
  en: "Create a cleaning contract with Taskey",
  fr: "Créer un contrat de nettoyage avec Taskey",
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
    title: "Reinigungsvertrag erstellen",
    eyebrow: "Ratgeber · Vertrag",
    h1: "Reinigungsvertrag erstellen —",
    h1Accent: "Aufbau, Klauseln, Fallstricke.",
    lead: "Ein Reinigungsvertrag entscheidet, ob ein Auftrag über die Vertragslaufzeit trägt oder ob er zum Verlustbringer wird. Dieser Ratgeber zeigt, welcher Aufbau in der Praxis funktioniert, welche Klauseln oft fehlen und wie der Vertrag mit der operativen Realität zusammenpasst. Keine Rechtsberatung, sondern Erfahrungswerte aus dem Reinigungsalltag.",
    breadcrumbs: [
      { name: "Home", url: "https://www.taskeyapp.com" },
      { name: "Lösungen", url: "https://www.taskeyapp.com/loesungen" },
      { name: "Reinigungsvertrag erstellen", url: `https://www.taskeyapp.com${path}` },
    ],
    sections: [
      {
        eyebrow: "Aufbau",
        heading: "Der Reinigungsvertrag im Kern.",
        body: [
          "Ein tragfähiger Reinigungsvertrag hat sechs Blöcke: Vertragsparteien, Leistungsverzeichnis, Preise und Zahlungsbedingungen, Vertragslaufzeit und Kündigung, Haftung und Versicherung, sowie sonstige Regelungen. Alles darüber hinaus ist Ausschmückung, alles darunter reicht meist nicht.",
          "Der wichtigste Block ist das Leistungsverzeichnis. Es beschreibt, was geleistet wird, wo, wie oft und in welcher Qualitätsstufe. Ohne präzises Leistungsverzeichnis ist im Streitfall alles verhandelbar und der Auftragnehmer trägt die Beweislast.",
        ],
        bullets: [
          "Vertragsparteien mit vollständigen Angaben",
          "Leistungsverzeichnis mit Frequenzen",
          "Preise und Zahlungsbedingungen",
          "Vertragslaufzeit und Kündigung",
          "Haftung und Versicherung",
          "Sonstige Regelungen wie Schlüssel, Datenschutz, Preisanpassung",
        ],
      },
      {
        eyebrow: "Leistungsverzeichnis",
        heading: "Das Leistungsverzeichnis als operative Grundlage.",
        body: [
          "Ein Leistungsverzeichnis nennt Räume oder Bereiche, die Leistungen pro Bereich und ihre Frequenzen. Für ein Bürogebäude sind das typischerweise Böden, Sanitär, Schreibtische, Papierkörbe, Küche, Konferenzräume. Pro Bereich stehen die konkreten Tätigkeiten mit ihrer Frequenz.",
          "Der häufigste Fehler: Ein zu allgemeines Leistungsverzeichnis wie 'Büroräume werden werktäglich gereinigt'. Was passiert bei Fenstern, Teppichböden, hohen Regalen? Ohne Regelung wird alles zur Sonderleistung, für die separat verhandelt werden muss.",
        ],
        bullets: [
          "Bereiche mit Quadratmetern",
          "Leistungen pro Bereich",
          "Frequenzen mit Wochentagen oder Zyklen",
          "Sonderleistungen wie Grundreinigung, Fensterputz, Winterdienst",
          "Qualitätsstufen wo relevant",
        ],
      },
      {
        eyebrow: "Preise",
        heading: "Preise und Preisanpassung sauber regeln.",
        body: [
          "Der Preis wird meist als monatliches Fixum für die Unterhaltsreinigung ausgewiesen, plus Positionen für Sonderleistungen. Wichtig ist eine Preisanpassungsklausel, die Lohnerhöhungen und Tarifänderungen abbildet. Ohne diese Klausel bleibt der Betrieb bei steigenden Lohnkosten auf den Kosten sitzen.",
          "In der Praxis funktioniert eine Kopplung an den Tarif Gebäudereinigung oder an einen Index wie den Verbraucherpreisindex. Manche Verträge nutzen eine automatische jährliche Anpassung, andere setzen auf Verhandlung. Beides sollte vertraglich vorgesehen sein.",
        ],
        bullets: [
          "Monatspreis für Unterhaltsreinigung",
          "Sonderleistungen separat ausgewiesen",
          "Preisanpassungsklausel für Lohnkosten",
          "Zahlungsbedingungen mit Frist und Skonto",
          "Verzugsregelung",
        ],
      },
      {
        eyebrow: "Fallstricke",
        heading: "Die häufigsten Fallstricke.",
        body: [
          "Erstens: keine Preisanpassungsklausel. Bei einem dreijährigen Vertrag frisst die Lohninflation die Marge auf.",
          "Zweitens: unklare Schlüsselregelung. Wer haftet in welcher Höhe bei Verlust, welche Versicherung greift, wie erfolgt die Rückgabe bei Vertragsende. Ohne Regelung entstehen im Ernstfall lange Diskussionen.",
          "Drittens: keine klare Regelung zu Sonderleistungen. Grundreinigung, Fensterputz und Winterdienst sind oft Auslegungssache, wenn sie nicht separat ausgewiesen sind. Der Auftragnehmer bleibt auf den Kosten sitzen.",
          "Viertens: unrealistische Kündigungsfristen. Kurze Kündigung ist bequem für den Auftraggeber, ruinös für den Auftragnehmer, der Personal aufbauen musste. Sechs Monate Kündigungsfrist sind branchenüblich und sinnvoll.",
        ],
        bullets: [
          "Preisanpassung für Lohn und Tarif einbauen",
          "Schlüsselhaftung klar regeln",
          "Sonderleistungen separat ausweisen",
          "Kündigungsfrist realistisch bemessen",
          "Datenschutz bei sensiblen Bereichen bedenken",
        ],
      },
    ],
    faqs: [
      {
        question: "Was gehört in einen Reinigungsvertrag?",
        answer:
          "Vertragsparteien, Leistungsverzeichnis mit Bereichen, Leistungen und Frequenzen, Preise und Zahlungsbedingungen, Vertragslaufzeit und Kündigung, Haftung und Versicherung, sowie sonstige Regelungen zu Schlüsseln, Datenschutz, Preisanpassung und Sonderleistungen.",
      },
      {
        question: "Wie regele ich Preisanpassungen im Vertrag?",
        answer:
          "Am besten mit einer klaren Klausel, die an den Tarif Gebäudereinigung oder an einen Index wie den Verbraucherpreisindex koppelt. Alternativ eine automatische jährliche Anpassung um einen definierten Prozentsatz. Ohne Klausel trägt der Betrieb Lohnsteigerungen allein.",
      },
      {
        question: "Wie lang sollte die Kündigungsfrist sein?",
        answer:
          "In der Gebäudereinigung sind drei bis sechs Monate branchenüblich. Kürzere Fristen sind für Auftragnehmer riskant, weil Personal nicht kurzfristig abgebaut werden kann. Bei größeren Aufträgen und aufgebauter Kolonne sind sechs Monate sinnvoll.",
      },
      {
        question: "Wie regele ich Schlüsselhaftung?",
        answer:
          "Mit klarer Haftungshöhe pro Vorfall, Bezug auf eine Schlüsselversicherung und dokumentiertem Übergabeprozess. Ohne Regelung entstehen im Ernstfall lange Diskussionen zwischen Auftraggeber, Betrieb und Versicherung. Der Ratgeber Schlüsselverwaltung zeigt Details.",
      },
      {
        question: "Was tun bei Sonderleistungen?",
        answer:
          "Sonderleistungen wie Grundreinigung, Fensterputz oder Winterdienst separat im Vertrag ausweisen, mit Preis und geplanter Frequenz. Ohne Ausweis werden sie zur Auslegungssache und der Auftragnehmer trägt die Kosten.",
      },
      {
        question: "Ist ein Reinigungsvertrag verpflichtend?",
        answer:
          "Rechtlich nicht in jeder Form vorgeschrieben, aber in der Praxis unverzichtbar. Ohne schriftlichen Vertrag ist im Streitfall alles verhandelbar. Auch kleine Aufträge sollten mindestens ein Angebotsschreiben mit angenommenen Konditionen haben.",
      },
    ],
    related: [
      {
        href: "/loesungen/reinigungsauftraege-verwalten",
        label: "Reinigungsaufträge verwalten",
        description: "Wie der Vertrag im laufenden Betrieb geführt wird.",
      },
      {
        href: "/loesungen/schluesselverwaltung-gebaeudereinigung",
        label: "Schlüsselverwaltung",
        description: "Was rund um die Schlüsselregelung im Vertrag stehen sollte.",
      },
      {
        href: "/loesungen/reinigungsplan-erstellen",
        label: "Reinigungsplan erstellen",
        description: "Struktur für das Leistungsverzeichnis im Vertrag.",
      },
      {
        href: "/rechner/reinigungskosten",
        label: "Reinigungskosten-Rechner",
        description: "Grundlage für Preise und Preisanpassung im Vertrag.",
      },
      {
        href: "/rechner/marge-gebaeudereinigung",
        label: "Marge-Rechner",
        description: "Zielpreis für die Vertragskalkulation.",
      },
    ],
  },
  en: {
    title: "Create a cleaning contract",
    eyebrow: "Guide · Contract",
    h1: "Create a cleaning contract —",
    h1Accent: "structure, clauses, pitfalls.",
    lead: "A cleaning contract decides whether a job holds its margin over the contract term or becomes a loss maker. This guide shows what structure works in practice, which clauses are often missing and how the contract aligns with operational reality. Not legal advice, but experience from daily cleaning operations.",
    breadcrumbs: [
      { name: "Home", url: "https://www.taskeyapp.com" },
      { name: "Solutions", url: "https://www.taskeyapp.com/loesungen" },
      { name: "Create a cleaning contract", url: `https://www.taskeyapp.com${path}` },
    ],
    sections: [
      {
        eyebrow: "Structure",
        heading: "The cleaning contract at its core.",
        body: [
          "A viable cleaning contract has six blocks: parties, service catalogue, prices and payment terms, term and termination, liability and insurance, and other clauses. Anything beyond is decoration, anything less usually falls short.",
          "The most important block is the service catalogue. It describes what is delivered, where, how often and to which quality level. Without a precise catalogue, everything becomes negotiable in dispute and the contractor carries the burden of proof.",
        ],
        bullets: [
          "Parties with full details",
          "Service catalogue with frequencies",
          "Prices and payment terms",
          "Term and termination",
          "Liability and insurance",
          "Other clauses like keys, data protection, price indexation",
        ],
      },
      {
        eyebrow: "Catalogue",
        heading: "The service catalogue as operational foundation.",
        body: [
          "A service catalogue names rooms or areas, the services per area and their frequencies. For an office building, that means floors, sanitary, desks, bins, kitchen, meeting rooms. Per area, specific tasks with frequency.",
          "The most common mistake: a catalogue too general like 'offices are cleaned on workdays'. What happens with windows, carpets, high shelves? Without clauses, everything becomes a special that needs separate negotiation.",
        ],
        bullets: [
          "Areas with square metres",
          "Services per area",
          "Frequencies with weekdays or cycles",
          "Specials like deep cleaning, windows, winter service",
          "Quality levels where relevant",
        ],
      },
      {
        eyebrow: "Prices",
        heading: "Regulate prices and indexation cleanly.",
        body: [
          "The price is usually stated as a monthly fixed amount for maintenance cleaning plus items for specials. A price indexation clause matters, reflecting wage increases and tariff changes. Without it, the company absorbs rising labour costs.",
          "In practice, a link to the cleaning industry tariff or a consumer price index works. Some contracts use automatic annual adjustment, others require negotiation. Both should be foreseen contractually.",
        ],
        bullets: [
          "Monthly price for maintenance cleaning",
          "Specials priced separately",
          "Indexation clause for labour cost",
          "Payment terms with deadline and discount",
          "Default clause",
        ],
      },
      {
        eyebrow: "Pitfalls",
        heading: "The most common pitfalls.",
        body: [
          "First: no indexation clause. In a three-year contract, wage inflation eats the margin.",
          "Second: unclear key clause. Who is liable and up to what amount on loss, which insurance applies, how return works at contract end. Without regulation, disputes drag out.",
          "Third: no clear specials clause. Deep cleaning, glass and winter service are open to interpretation if not stated separately. The contractor absorbs the cost.",
          "Fourth: unrealistic termination periods. Short termination is comfortable for the client, ruinous for the contractor who built up staff. Six months is common and sensible.",
        ],
        bullets: [
          "Include price indexation for wages and tariff",
          "Clarify key liability",
          "State specials separately",
          "Set realistic termination period",
          "Consider data protection in sensitive areas",
        ],
      },
    ],
    faqs: [
      {
        question: "What belongs in a cleaning contract?",
        answer:
          "Parties, service catalogue with areas, services and frequencies, prices and payment terms, term and termination, liability and insurance, and other clauses on keys, data protection, price indexation and specials.",
      },
      {
        question: "How do I regulate price adjustments?",
        answer:
          "Best with a clear clause linked to the cleaning industry tariff or a consumer price index. Alternatively an automatic annual adjustment by a defined percentage. Without a clause, the company bears wage increases alone.",
      },
      {
        question: "How long should the termination period be?",
        answer:
          "In cleaning, three to six months is common. Shorter periods are risky for contractors because staff cannot be reduced at short notice. On larger contracts with dedicated crews, six months makes sense.",
      },
      {
        question: "How do I regulate key liability?",
        answer:
          "With a clear liability cap per incident, reference to key insurance and a documented handover process. Without regulation, disputes between client, company and insurance drag out. The key management guide shows details.",
      },
      {
        question: "What about specials?",
        answer:
          "State specials such as deep cleaning, glass or winter service separately in the contract with price and planned frequency. Without listing, they are open to interpretation and the contractor bears the cost.",
      },
      {
        question: "Is a cleaning contract mandatory?",
        answer:
          "Not legally required in every form but essential in practice. Without a written contract, everything is negotiable in dispute. Even small jobs should have at least an offer letter with accepted terms.",
      },
    ],
    related: [
      {
        href: "/loesungen/reinigungsauftraege-verwalten",
        label: "Manage cleaning contracts",
        description: "How the contract runs in daily operations.",
      },
      {
        href: "/loesungen/schluesselverwaltung-gebaeudereinigung",
        label: "Key management",
        description: "What should sit around the key clause in the contract.",
      },
      {
        href: "/loesungen/reinigungsplan-erstellen",
        label: "Create cleaning plan",
        description: "Structure for the service catalogue in the contract.",
      },
      {
        href: "/rechner/reinigungskosten",
        label: "Cleaning cost calculator",
        description: "Basis for prices and indexation in the contract.",
      },
      {
        href: "/rechner/marge-gebaeudereinigung",
        label: "Margin calculator",
        description: "Target price for contract calculation.",
      },
    ],
  },
  fr: {
    title: "Créer un contrat de nettoyage",
    eyebrow: "Guide · Contrat",
    h1: "Créer un contrat de nettoyage —",
    h1Accent: "structure, clauses, pièges.",
    lead: "Un contrat de nettoyage décide si un marché tient sa marge sur la durée ou devient déficitaire. Ce guide montre quelle structure fonctionne en pratique, quelles clauses manquent souvent et comment le contrat s'aligne avec la réalité opérationnelle. Pas de conseil juridique, mais l'expérience du quotidien.",
    breadcrumbs: [
      { name: "Accueil", url: "https://www.taskeyapp.com" },
      { name: "Solutions", url: "https://www.taskeyapp.com/loesungen" },
      { name: "Créer un contrat de nettoyage", url: `https://www.taskeyapp.com${path}` },
    ],
    sections: [
      {
        eyebrow: "Structure",
        heading: "Le contrat de nettoyage à son cœur.",
        body: [
          "Un contrat tenable a six blocs: parties, catalogue de prestations, prix et conditions de paiement, durée et résiliation, responsabilité et assurance, autres clauses. Au-delà, c'est de la décoration; en deçà, cela ne suffit généralement pas.",
          "Le bloc le plus important est le catalogue de prestations. Il décrit ce qui est livré, où, à quelle fréquence et à quel niveau de qualité. Sans catalogue précis, tout devient négociable en litige et le prestataire porte la charge de la preuve.",
        ],
        bullets: [
          "Parties avec coordonnées complètes",
          "Catalogue de prestations avec fréquences",
          "Prix et conditions de paiement",
          "Durée et résiliation",
          "Responsabilité et assurance",
          "Autres clauses: clés, protection des données, indexation",
        ],
      },
      {
        eyebrow: "Catalogue",
        heading: "Le catalogue comme base opérationnelle.",
        body: [
          "Un catalogue nomme pièces ou zones, prestations par zone et leurs fréquences. Pour un bureau: sols, sanitaire, bureaux, poubelles, cuisine, salles de réunion. Par zone, tâches précises avec fréquence.",
          "L'erreur la plus fréquente: catalogue trop général comme 'les bureaux sont nettoyés en semaine'. Que se passe-t-il pour vitres, moquette, étagères hautes? Sans clause, tout devient spécial à négocier séparément.",
        ],
        bullets: [
          "Zones avec surface",
          "Prestations par zone",
          "Fréquences avec jours ou cycles",
          "Spéciales comme remise en état, vitrerie, hivernal",
          "Niveaux de qualité si pertinent",
        ],
      },
      {
        eyebrow: "Prix",
        heading: "Régler prix et indexation proprement.",
        body: [
          "Le prix est généralement un forfait mensuel pour l'entretien plus lignes spéciales. Une clause d'indexation compte, reflétant hausses salariales et évolutions tarifaires. Sans elle, l'entreprise absorbe seule les hausses.",
          "En pratique, un lien à la convention de branche ou un indice type IPC fonctionne. Certains contrats prévoient un ajustement annuel automatique, d'autres une négociation. Les deux devraient être prévus contractuellement.",
        ],
        bullets: [
          "Forfait mensuel pour entretien",
          "Spéciales tarifées séparément",
          "Clause d'indexation pour coûts salariaux",
          "Conditions de paiement avec délai et escompte",
          "Clause de retard",
        ],
      },
      {
        eyebrow: "Pièges",
        heading: "Les pièges les plus fréquents.",
        body: [
          "Un: pas de clause d'indexation. Sur un contrat de trois ans, l'inflation salariale mange la marge.",
          "Deux: clause clé floue. Qui engage sa responsabilité à quel montant, quelle assurance couvre, comment le retour se fait en fin de contrat. Sans règle, les litiges traînent.",
          "Trois: pas de clause claire sur les spéciales. Remise en état, vitres, hivernal restent à interprétation si pas listés séparément. Le prestataire absorbe.",
          "Quatre: préavis de résiliation irréaliste. Court est confortable pour le donneur, ruineux pour le prestataire qui a bâti l'équipe. Six mois est courant et raisonnable.",
        ],
        bullets: [
          "Inclure indexation pour salaires et convention",
          "Clarifier engagement des clés",
          "Lister spéciales séparément",
          "Préavis de résiliation réaliste",
          "Penser protection des données en zones sensibles",
        ],
      },
    ],
    faqs: [
      {
        question: "Que contient un contrat de nettoyage?",
        answer:
          "Parties, catalogue avec zones, prestations et fréquences, prix et conditions de paiement, durée et résiliation, responsabilité et assurance, autres clauses sur clés, protection des données, indexation et spéciales.",
      },
      {
        question: "Comment régler les ajustements de prix?",
        answer:
          "Idéalement avec une clause claire liée à la convention de branche ou un indice type IPC. Alternativement un ajustement annuel automatique d'un pourcentage défini. Sans clause, l'entreprise porte seule les hausses.",
      },
      {
        question: "Quelle durée de préavis?",
        answer:
          "En nettoyage, trois à six mois est courant. Plus court est risqué pour le prestataire parce que le personnel ne peut être réduit à court terme. Sur marchés plus larges avec équipes dédiées, six mois logique.",
      },
      {
        question: "Comment régler l'engagement des clés?",
        answer:
          "Avec plafond d'engagement clair par incident, référence à une assurance clé et processus de remise documenté. Sans règle, les litiges entre donneur, prestataire et assurance traînent. Le guide gestion des clés montre les détails.",
      },
      {
        question: "Quid des prestations spéciales?",
        answer:
          "Lister les spéciales comme remise en état, vitrerie ou hivernal séparément avec prix et fréquence prévue. Sans liste, elles restent à interprétation et le prestataire porte le coût.",
      },
      {
        question: "Un contrat est-il obligatoire?",
        answer:
          "Pas légalement dans toute forme, mais essentiel en pratique. Sans contrat écrit, tout est négociable en litige. Même les petits marchés devraient avoir au moins une offre écrite avec conditions acceptées.",
      },
    ],
    related: [
      {
        href: "/loesungen/reinigungsauftraege-verwalten",
        label: "Gérer les contrats",
        description: "Comment le contrat tourne au quotidien.",
      },
      {
        href: "/loesungen/schluesselverwaltung-gebaeudereinigung",
        label: "Gestion des clés",
        description: "Ce qui doit se trouver autour de la clause clé.",
      },
      {
        href: "/loesungen/reinigungsplan-erstellen",
        label: "Créer un plan de nettoyage",
        description: "Structure pour le catalogue de prestations.",
      },
      {
        href: "/rechner/reinigungskosten",
        label: "Calculateur de coûts",
        description: "Base pour prix et indexation dans le contrat.",
      },
      {
        href: "/rechner/marge-gebaeudereinigung",
        label: "Calculateur de marge",
        description: "Prix cible pour la calculation contractuelle.",
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
