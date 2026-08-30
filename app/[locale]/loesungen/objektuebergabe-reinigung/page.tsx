import type { Metadata } from "next";
import LandingPageTemplate from "@/components/landing/LandingPageTemplate";
import { buildMetadata, pickLocale, type PageCopy, type Locale } from "@/lib/i18n-metadata";
import { NEWSLETTER_LABELS } from "@/lib/newsletter-labels";

const path = "/loesungen/objektuebergabe-reinigung";

const NEWSLETTER_SOURCE_LABELS: Record<Locale, string> = {
  de: "Ratgeber Objektübergabe Reinigung",
  en: "Guide Site handover in cleaning",
  fr: "Guide Reprise de site en propreté",
};

const COPY: PageCopy = {
  de: {
    title: "Objektübergabe Reinigung | Checkliste, Prozess, Protokoll | Taskey",
    description:
      "Objektübergabe in der Gebäudereinigung sauber führen: Übernahme eines neuen Objekts, Übergabe an eine Vertretung oder an ein anderes Unternehmen. Checkliste, Protokoll, Prozess ohne Chaos.",
    ogTitle: "Objektübergabe Reinigung | Taskey",
    ogDescription:
      "Übernahme, Vertretungs- und Kontrakt-Übergabe mit Checkliste und Protokoll.",
    twitterTitle: "Objektübergabe Reinigung | Taskey",
    twitterDescription:
      "Übernahme, Vertretung und Kontrakt-Übergabe mit Checkliste.",
  },
  en: {
    title: "Site handover in commercial cleaning | Checklist, process, protocol | Taskey",
    description:
      "Run site handovers in commercial cleaning cleanly: taking on a new site, handing over to a substitute or another company. Checklist, protocol, process without chaos.",
    ogTitle: "Site handover in commercial cleaning | Taskey",
    ogDescription:
      "Onboarding, substitute handover and contract handover with checklist and protocol.",
    twitterTitle: "Site handover in commercial cleaning | Taskey",
    twitterDescription:
      "Onboarding, substitute handover and contract handover with checklist.",
  },
  fr: {
    title: "Reprise de site en propreté | Checklist, processus, protocole | Taskey",
    description:
      "Menez proprement les reprises de site en nettoyage: reprise d'un nouveau site, passation à un remplaçant ou à une autre entreprise. Checklist, protocole, processus sans chaos.",
    ogTitle: "Reprise de site en propreté | Taskey",
    ogDescription:
      "Reprise, passation à remplaçant et passation contractuelle avec checklist et protocole.",
    twitterTitle: "Reprise de site en propreté | Taskey",
    twitterDescription:
      "Reprise, passation à remplaçant et passation contractuelle avec checklist.",
  },
};

const OG_ALT: Record<"de" | "en" | "fr", string> = {
  de: "Objektübergabe Reinigung mit Taskey",
  en: "Site handover in commercial cleaning with Taskey",
  fr: "Reprise de site en propreté avec Taskey",
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
    title: "Objektübergabe Reinigung",
    eyebrow: "Ratgeber · Objektübergabe",
    h1: "Objektübergabe in der Reinigung —",
    h1Accent: "Übernahme, Vertretung, Kontraktwechsel.",
    lead: "Eine saubere Objektübergabe entscheidet, ob ein neuer Auftrag gut startet oder direkt Reklamationen produziert. Drei Übergabesituationen prägen den Alltag: Übernahme eines neuen Objekts, Vertretung im laufenden Betrieb, Kontraktwechsel zwischen Anbietern. Für alle drei gibt es einen wiederholbaren Prozess.",
    breadcrumbs: [
      { name: "Home", url: "https://www.taskeyapp.com" },
      { name: "Lösungen", url: "https://www.taskeyapp.com/loesungen" },
      { name: "Objektübergabe Reinigung", url: `https://www.taskeyapp.com${path}` },
    ],
    sections: [
      {
        eyebrow: "Situationen",
        heading: "Drei Übergabesituationen im Alltag.",
        body: [
          "Die erste Übergabe: neuer Auftrag, neues Objekt. Der Betrieb übernimmt ein Objekt vom Auftraggeber oder von einem Vorgänger. Alles muss von null aufgebaut werden: Stammdaten, Zugang, Reinigungsplan, Ansprechpartner, Schlüssel.",
          "Die zweite Übergabe: laufender Betrieb, Wechsel der Reinigungskraft. Urlaub, Krankheit, Personalwechsel. Die Vertretung muss innerhalb von Stunden das Objekt kennenlernen und die Leistung erbringen können, sonst leidet die Qualität.",
          "Die dritte Übergabe: Vertragsende oder Anbieterwechsel. Der Betrieb gibt ein Objekt an einen Nachfolger ab. Schlüssel zurück, Nachweise übergeben, offene Punkte geklärt. Wer das nicht sauber macht, riskiert Haftungsfälle nach Vertragsende.",
        ],
        bullets: [
          "Neuübernahme eines Objekts",
          "Vertretung im laufenden Betrieb",
          "Kontraktwechsel zwischen Anbietern",
          "Jede Situation braucht eigenen Prozess",
        ],
      },
      {
        eyebrow: "Checkliste",
        heading: "Die Checkliste für die Objektübernahme.",
        body: [
          "Bei einer Neuübernahme laufen fünf Schritte parallel. Erst die Aufmaß-Begehung mit dem Auftraggeber: Flächen bestätigen, Zugangswege klären, Sonderleistungen dokumentieren. Dann die Übergabe der Schlüssel und Zugangscodes mit Protokoll. Dann die Erfassung der Ansprechpartner mit Notfall-Nummern. Dann der Aufbau des Reinigungsplans im System. Dann die Einweisung der Reinigungskraft am Objekt.",
          "Was oft vergessen wird: die Erwartungsklärung mit dem Auftraggeber. Was heißt sauber für dieses Objekt, welche Qualitätsstufe erwartet er, wie sollen Reklamationen laufen? Wer diese Fragen vor dem ersten Einsatz klärt, spart in den ersten Monaten viel Ärger.",
        ],
        bullets: [
          "Aufmaß-Begehung mit dem Auftraggeber",
          "Schlüssel und Zugangscodes mit Protokoll",
          "Ansprechpartner mit Notfallkontakten",
          "Reinigungsplan im System aufbauen",
          "Einweisung der Reinigungskraft vor Ort",
          "Erwartungsklärung: Qualität, Reklamationsweg, Sonderleistungen",
        ],
      },
      {
        eyebrow: "Vertretung",
        heading: "Übergabe an eine Vertretung im laufenden Betrieb.",
        body: [
          "Die Vertretung soll das Objekt in wenigen Minuten so gut kennen, dass sie die Reinigung ohne Rückfragen erbringen kann. Das gelingt nur mit digital hinterlegten Objektinformationen: Adresse, Zugang, Aufgabenliste, Sonderregelungen, Ansprechpartner.",
          "Wer im Papier-Zeitalter arbeitet, verliert bei jeder Vertretung eine halbe Stunde für die telefonische Einweisung. In größeren Betrieben summiert sich das auf Wochen pro Jahr, die nur in Vertretungs-Briefings fließen.",
        ],
        bullets: [
          "Zugang und Schlüssel-Übergabe geregelt",
          "Aufgabenliste des Tages sichtbar",
          "Ansprechpartner und Notfallnummer greifbar",
          "Sonderregelungen dokumentiert",
          "Nachweispflicht klar",
        ],
      },
      {
        eyebrow: "Kontraktwechsel",
        heading: "Übergabe bei Vertragsende oder Anbieterwechsel.",
        body: [
          "Beim Vertragsende sollte die Übergabe an den Nachfolger dokumentiert erfolgen. Alle Schlüssel zurück an den Auftraggeber, Nachweise übergeben, offene Reklamationen abgeschlossen. Ein Übergabeprotokoll dokumentiert den Zustand des Objekts, damit spätere Ansprüche des Nachfolgers klar abgegrenzt sind.",
          "Für den Auftragnehmer ist das Vertragsende oft heikel: Motivation der Reinigungskräfte sinkt, Reklamationsquote steigt, Rückgabe von Schlüsseln wird nachlässig. Ein sauberer Prozess schützt die letzten Wochen der Zusammenarbeit und den Ruf des Betriebs.",
        ],
        bullets: [
          "Schlüssel dokumentiert zurückgeben",
          "Nachweise komplett übergeben",
          "Offene Reklamationen abschließen",
          "Übergabeprotokoll mit Zustand des Objekts",
          "Kommunikation mit Nachfolger klar",
        ],
      },
    ],
    faqs: [
      {
        question: "Wie läuft die Übernahme eines neuen Reinigungsobjekts?",
        answer:
          "In fünf parallelen Schritten: Aufmaß-Begehung mit dem Auftraggeber, Schlüssel- und Zugangsübergabe mit Protokoll, Erfassung der Ansprechpartner, Aufbau des Reinigungsplans im System, Einweisung der Reinigungskraft vor Ort. Zusätzlich eine Erwartungsklärung zu Qualität und Reklamationsweg.",
      },
      {
        question: "Was gehört in ein Übergabeprotokoll?",
        answer:
          "Datum, Objekt, Auftraggeber und Auftragnehmer, ausgehändigte Schlüssel und Zugangscodes, Zustand der Räume, offene Punkte oder Mängel, Unterschrift beider Seiten. Bei digitaler Übergabe zusätzlich Fotos der kritischen Bereiche.",
      },
      {
        question: "Wie lange dauert eine Objektübernahme?",
        answer:
          "Für ein Bürogebäude von 500 bis 1500 Quadratmetern häufig zwei bis vier Stunden für Begehung, Protokoll und Einweisung. Größere oder komplexere Objekte entsprechend mehr. Der Aufwand ist eine Investition, die sich in den ersten Wochen der Zusammenarbeit auszahlt.",
      },
      {
        question: "Wie regele ich Vertretungen bei kurzfristigem Ausfall?",
        answer:
          "Mit digital hinterlegten Objektinformationen. Die Vertretung sieht Adresse, Zugang, Aufgaben und Sonderregelungen in der App. Ohne digitale Ablage läuft die Übergabe über die Objektleitung mit entsprechendem Zeitaufwand.",
      },
      {
        question: "Was mache ich bei Vertragsende?",
        answer:
          "Übergabeprotokoll erstellen, alle Schlüssel dokumentiert zurückgeben, offene Reklamationen abschließen, Nachweise komplett an den Auftraggeber oder Nachfolger übergeben. So sind spätere Ansprüche sauber abgegrenzt.",
      },
      {
        question: "Wie hilft Taskey bei der Objektübergabe?",
        answer:
          "Taskey führt Objektakten mit Stammdaten, Schlüsselbestand, Reinigungsplan und Historie. Bei Übernahme wird das Objekt einmal komplett angelegt. Bei Vertretung sieht der Springer alle nötigen Informationen in der App. Bei Vertragsende exportiert der Betrieb Nachweise für den Nachfolger.",
      },
    ],
    related: [
      {
        href: "/loesungen/reinigungsobjekte-verwalten",
        label: "Reinigungsobjekte verwalten",
        description: "Objektakte als Grundlage jeder Übergabe.",
      },
      {
        href: "/loesungen/schluesselverwaltung-gebaeudereinigung",
        label: "Schlüsselverwaltung",
        description: "Protokoll für Schlüsselübergabe bei jeder Übergabesituation.",
      },
      {
        href: "/loesungen/springer-reinigung",
        label: "Springer in der Reinigung",
        description: "Vertretungslogik für kurzfristige Übergaben.",
      },
      {
        href: "/loesungen/reinigungsplan-erstellen",
        label: "Reinigungsplan erstellen",
        description: "Was der Plan bei der Übernahme leisten muss.",
      },
      {
        href: "/loesungen/reinigungsvertrag-erstellen",
        label: "Reinigungsvertrag erstellen",
        description: "Vertragliche Regelung von Übergabe und Rückgabe.",
      },
    ],
  },
  en: {
    title: "Site handover in commercial cleaning",
    eyebrow: "Guide · Site handover",
    h1: "Site handover in commercial cleaning —",
    h1Accent: "onboarding, substitution, contract change.",
    lead: "A clean site handover decides whether a new contract starts well or produces complaints straight away. Three handover situations shape daily work: taking on a new site, substitution during operations, handover between providers on contract change. All three follow a repeatable process.",
    breadcrumbs: [
      { name: "Home", url: "https://www.taskeyapp.com" },
      { name: "Solutions", url: "https://www.taskeyapp.com/loesungen" },
      { name: "Site handover", url: `https://www.taskeyapp.com${path}` },
    ],
    sections: [
      {
        eyebrow: "Situations",
        heading: "Three handover situations in daily operations.",
        body: [
          "First handover: new contract, new site. The company takes over a site from the client or a predecessor. Everything is built from scratch: master data, access, cleaning plan, contacts, keys.",
          "Second handover: running operations, staff change. Vacation, sickness, staff turnover. The substitute must learn the site within hours and be able to deliver, or quality suffers.",
          "Third handover: contract end or provider change. The company hands a site to a successor. Keys returned, proofs handed over, open points resolved. Sloppy handling here creates liability cases after contract end.",
        ],
        bullets: [
          "New site onboarding",
          "Substitution during operations",
          "Provider change on contract end",
          "Each situation needs its own process",
        ],
      },
      {
        eyebrow: "Checklist",
        heading: "The checklist for site onboarding.",
        body: [
          "For new onboarding, five steps run in parallel. First, the measurement walk-through with the client: confirm areas, clarify access, document specials. Then key and access code handover with protocol. Then contact capture with emergency numbers. Then cleaning plan setup in the system. Then briefing of the cleaner on site.",
          "Often forgotten: expectation alignment with the client. What does clean mean for this site, which quality level is expected, how should complaints run? Clarifying these questions before the first visit saves a lot of pain in the first months.",
        ],
        bullets: [
          "Measurement walk-through with the client",
          "Keys and access codes with protocol",
          "Contacts with emergency numbers",
          "Cleaning plan setup in the system",
          "Cleaner briefing on site",
          "Expectation alignment: quality, complaint route, specials",
        ],
      },
      {
        eyebrow: "Substitution",
        heading: "Handover to a substitute during operations.",
        body: [
          "The substitute should know the site within minutes well enough to deliver without questions. That only works with digitally stored site information: address, access, task list, special rules, contacts.",
          "In the paper era, every substitution eats half an hour for a phone briefing. In larger companies this adds up to weeks per year spent only on substitute briefings.",
        ],
        bullets: [
          "Access and key handover regulated",
          "Task list for the day visible",
          "Contact and emergency number at hand",
          "Special rules documented",
          "Proof duty clear",
        ],
      },
      {
        eyebrow: "Contract change",
        heading: "Handover on contract end or provider change.",
        body: [
          "On contract end, handover to the successor should be documented. All keys back to the client, proofs handed over, open complaints closed. A handover protocol documents the site state so later claims by the successor are cleanly bounded.",
          "For the contractor, contract end is often sensitive: cleaner motivation drops, complaint rates rise, key return becomes sloppy. A clean process protects the last weeks of collaboration and the company's reputation.",
        ],
        bullets: [
          "Return keys with documentation",
          "Hand over proofs completely",
          "Close open complaints",
          "Handover protocol with site state",
          "Communication with successor clear",
        ],
      },
    ],
    faqs: [
      {
        question: "How does taking on a new cleaning site work?",
        answer:
          "In five parallel steps: measurement walk-through with the client, key and access handover with protocol, contact capture, cleaning plan setup in the system, cleaner briefing on site. Plus expectation alignment on quality and complaint route.",
      },
      {
        question: "What belongs in a handover protocol?",
        answer:
          "Date, site, client and contractor, handed keys and access codes, room condition, open points or defects, signature of both sides. In digital handover, additionally photos of critical areas.",
      },
      {
        question: "How long does site onboarding take?",
        answer:
          "For an office of 500 to 1500 square metres, often two to four hours for walk-through, protocol and briefing. Larger or more complex sites accordingly more. The effort is an investment that pays off in the first weeks.",
      },
      {
        question: "How do I regulate substitutions on short-notice absence?",
        answer:
          "With digitally stored site information. The substitute sees address, access, tasks and special rules in the app. Without digital storage, handover runs via the account manager with corresponding effort.",
      },
      {
        question: "What do I do on contract end?",
        answer:
          "Create handover protocol, return all keys with documentation, close open complaints, hand over proofs completely to the client or successor. Later claims are then cleanly bounded.",
      },
      {
        question: "How does Taskey help with site handover?",
        answer:
          "Taskey runs site records with master data, key inventory, cleaning plan and history. On onboarding, the site is set up once completely. On substitution, the floater sees all necessary information in the app. On contract end, the company exports proofs for the successor.",
      },
    ],
    related: [
      {
        href: "/loesungen/reinigungsobjekte-verwalten",
        label: "Manage cleaning sites",
        description: "Site record as basis for every handover.",
      },
      {
        href: "/loesungen/schluesselverwaltung-gebaeudereinigung",
        label: "Key management",
        description: "Protocol for key handover in every situation.",
      },
      {
        href: "/loesungen/springer-reinigung",
        label: "Floaters in cleaning",
        description: "Substitution logic for short-notice handovers.",
      },
      {
        href: "/loesungen/reinigungsplan-erstellen",
        label: "Create cleaning plan",
        description: "What the plan must deliver on onboarding.",
      },
      {
        href: "/loesungen/reinigungsvertrag-erstellen",
        label: "Create cleaning contract",
        description: "Contractual clauses for handover and return.",
      },
    ],
  },
  fr: {
    title: "Reprise de site en propreté",
    eyebrow: "Guide · Reprise de site",
    h1: "Reprise de site en propreté —",
    h1Accent: "reprise, remplacement, changement de contrat.",
    lead: "Une reprise de site propre décide si un nouveau contrat démarre bien ou produit des réclamations immédiatement. Trois situations de reprise marquent le quotidien: prise en charge d'un nouveau site, remplacement en cours, transition entre prestataires en fin de contrat. Toutes suivent un processus reproductible.",
    breadcrumbs: [
      { name: "Accueil", url: "https://www.taskeyapp.com" },
      { name: "Solutions", url: "https://www.taskeyapp.com/loesungen" },
      { name: "Reprise de site", url: `https://www.taskeyapp.com${path}` },
    ],
    sections: [
      {
        eyebrow: "Situations",
        heading: "Trois situations de reprise au quotidien.",
        body: [
          "Première reprise: nouveau contrat, nouveau site. L'entreprise reprend un site du donneur ou d'un prédécesseur. Tout se construit à partir de zéro: données maîtres, accès, plan, contacts, clés.",
          "Deuxième reprise: exploitation en cours, changement d'agent. Congés, maladie, rotation. Le remplaçant doit apprendre le site en quelques heures et pouvoir livrer, sinon la qualité souffre.",
          "Troisième reprise: fin de contrat ou changement de prestataire. L'entreprise remet un site à un successeur. Clés rendues, justificatifs transmis, points ouverts résolus. Négliger cela crée des cas de responsabilité après contrat.",
        ],
        bullets: [
          "Prise en charge d'un nouveau site",
          "Remplacement en exploitation",
          "Changement de prestataire en fin de contrat",
          "Chaque situation a son propre processus",
        ],
      },
      {
        eyebrow: "Checklist",
        heading: "La checklist pour la prise en charge.",
        body: [
          "En prise en charge, cinq étapes tournent en parallèle. D'abord la visite de métré avec le donneur: confirmer les surfaces, clarifier les accès, documenter les spéciales. Ensuite la remise des clés et codes avec protocole. Ensuite la saisie des contacts avec numéros d'urgence. Ensuite la construction du plan dans le système. Ensuite le briefing de l'agent sur site.",
          "Souvent oublié: l'alignement des attentes avec le donneur. Que signifie propre pour ce site, quel niveau de qualité attendu, comment tourneront les réclamations? Clarifier ces questions avant la première intervention économise beaucoup de peine dans les premiers mois.",
        ],
        bullets: [
          "Visite de métré avec le donneur",
          "Clés et codes avec protocole",
          "Contacts avec numéros d'urgence",
          "Plan mis en place dans le système",
          "Briefing de l'agent sur site",
          "Alignement des attentes: qualité, réclamations, spéciales",
        ],
      },
      {
        eyebrow: "Remplacement",
        heading: "Passation à un remplaçant en cours.",
        body: [
          "Le remplaçant doit connaître le site en quelques minutes assez bien pour livrer sans questions. Cela ne fonctionne qu'avec des informations site stockées en digital: adresse, accès, liste de tâches, règles particulières, contacts.",
          "En ère papier, chaque remplacement consomme une demi-heure de briefing téléphonique. Dans les grandes entreprises cela cumule des semaines par an de briefings.",
        ],
        bullets: [
          "Accès et remise des clés réglés",
          "Liste des tâches du jour visible",
          "Contact et numéro d'urgence accessible",
          "Règles particulières documentées",
          "Obligation de justificatif claire",
        ],
      },
      {
        eyebrow: "Fin de contrat",
        heading: "Passation en fin de contrat ou changement.",
        body: [
          "En fin de contrat, la passation au successeur devrait être documentée. Toutes les clés au donneur, justificatifs remis, réclamations ouvertes closes. Un protocole documente l'état du site pour que les réclamations ultérieures du successeur soient clairement bornées.",
          "Pour le prestataire sortant, la fin de contrat est souvent délicate: la motivation baisse, le taux de réclamations monte, le retour des clés devient négligent. Un processus propre protège les dernières semaines et la réputation.",
        ],
        bullets: [
          "Rendre les clés avec documentation",
          "Remettre les justificatifs complets",
          "Clore les réclamations ouvertes",
          "Protocole avec état du site",
          "Communication avec successeur claire",
        ],
      },
    ],
    faqs: [
      {
        question: "Comment se déroule la prise en charge d'un nouveau site?",
        answer:
          "En cinq étapes parallèles: visite de métré avec le donneur, remise clés et accès avec protocole, saisie des contacts, construction du plan dans le système, briefing de l'agent sur site. Plus alignement des attentes sur qualité et réclamations.",
      },
      {
        question: "Que contient un protocole de reprise?",
        answer:
          "Date, site, donneur et prestataire, clés et codes remis, état des pièces, points ouverts ou défauts, signature des deux parties. En reprise digitale, additionnellement photos des zones critiques.",
      },
      {
        question: "Combien de temps prend une prise en charge?",
        answer:
          "Pour un bureau de 500 à 1500 mètres carrés, souvent deux à quatre heures pour visite, protocole et briefing. Sites plus grands ou complexes en conséquence plus. L'effort est un investissement qui paie dans les premières semaines.",
      },
      {
        question: "Comment régler les remplacements en cas d'absence brève?",
        answer:
          "Avec des informations site stockées en digital. Le remplaçant voit adresse, accès, tâches et règles particulières dans l'application. Sans stockage digital, la passation passe par l'encadrement avec l'effort correspondant.",
      },
      {
        question: "Que faire en fin de contrat?",
        answer:
          "Créer un protocole, rendre toutes les clés avec documentation, clore les réclamations ouvertes, remettre les justificatifs complets au donneur ou successeur. Les réclamations ultérieures sont ainsi proprement bornées.",
      },
      {
        question: "Comment Taskey aide-t-il à la reprise?",
        answer:
          "Taskey gère les fiches site avec données maîtres, inventaire de clés, plan et historique. En prise en charge, le site est établi une fois complètement. En remplacement, le volant voit toutes les informations utiles dans l'application. En fin de contrat, l'entreprise exporte les justificatifs pour le successeur.",
      },
    ],
    related: [
      {
        href: "/loesungen/reinigungsobjekte-verwalten",
        label: "Gérer les sites",
        description: "Fiche site comme base de toute passation.",
      },
      {
        href: "/loesungen/schluesselverwaltung-gebaeudereinigung",
        label: "Gestion des clés",
        description: "Protocole pour remise des clés en toute situation.",
      },
      {
        href: "/loesungen/springer-reinigung",
        label: "Volants en propreté",
        description: "Logique de remplacement pour passations courtes.",
      },
      {
        href: "/loesungen/reinigungsplan-erstellen",
        label: "Créer un plan",
        description: "Ce que le plan doit livrer en prise en charge.",
      },
      {
        href: "/loesungen/reinigungsvertrag-erstellen",
        label: "Créer un contrat",
        description: "Clauses contractuelles pour passation et retour.",
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
      newsletter={{
        source: path,
        sourceLabel: NEWSLETTER_SOURCE_LABELS[l],
        labels: NEWSLETTER_LABELS[l],
      }}
    />
  );
}
