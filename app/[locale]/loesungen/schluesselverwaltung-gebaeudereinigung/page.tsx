import type { Metadata } from "next";
import LandingPageTemplate from "@/components/landing/LandingPageTemplate";
import { buildMetadata, pickLocale, type PageCopy } from "@/lib/i18n-metadata";

const path = "/loesungen/schluesselverwaltung-gebaeudereinigung";

const COPY: PageCopy = {
  de: {
    title: "Schlüsselverwaltung Gebäudereinigung | Prozess, Nachweis, App | Taskey",
    description:
      "Schlüsselverwaltung in der Gebäudereinigung sauber aufsetzen. Übergabeprotokoll, Ausgabe- und Rückgabe-Nachweis, Zuständigkeiten und Haftung. Digital umgesetzt mit Taskey.",
    ogTitle: "Schlüsselverwaltung Gebäudereinigung | Taskey",
    ogDescription:
      "Übergabeprotokoll, Nachweis, Zuständigkeiten und Haftung für die Schlüsselverwaltung in Reinigungsbetrieben.",
    twitterTitle: "Schlüsselverwaltung Gebäudereinigung | Taskey",
    twitterDescription:
      "Übergabeprotokoll, Nachweis und Haftung für Schlüssel im Reinigungsbetrieb.",
  },
  en: {
    title: "Key management in commercial cleaning | Process, proof, app | Taskey",
    description:
      "Set up key management in commercial cleaning cleanly. Handover protocol, issue and return proof, responsibilities and liability. Delivered digitally with Taskey.",
    ogTitle: "Key management in commercial cleaning | Taskey",
    ogDescription:
      "Handover protocol, proof, responsibilities and liability for key management in cleaning operations.",
    twitterTitle: "Key management cleaning | Taskey",
    twitterDescription:
      "Handover protocol, proof and liability for keys in cleaning operations.",
  },
  fr: {
    title: "Gestion des clés en propreté | Processus, preuve, application | Taskey",
    description:
      "Mettez en place proprement la gestion des clés en nettoyage. Protocole de remise, preuve de sortie et retour, responsabilités et engagement. Livré digitalement avec Taskey.",
    ogTitle: "Gestion des clés en propreté | Taskey",
    ogDescription:
      "Protocole de remise, preuve, responsabilités et engagement pour la gestion des clés en nettoyage.",
    twitterTitle: "Gestion des clés nettoyage | Taskey",
    twitterDescription:
      "Protocole de remise, preuve et engagement pour les clés en nettoyage.",
  },
};

const OG_ALT: Record<"de" | "en" | "fr", string> = {
  de: "Schlüsselverwaltung Gebäudereinigung mit Taskey",
  en: "Key management in commercial cleaning with Taskey",
  fr: "Gestion des clés en propreté avec Taskey",
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
    title: "Schlüsselverwaltung Gebäudereinigung",
    eyebrow: "Ratgeber · Schlüsselverwaltung",
    h1: "Schlüsselverwaltung in der Gebäudereinigung —",
    h1Accent: "Protokoll, Nachweis, Haftung.",
    lead: "Schlüssel sind das operativ heikelste Thema in der Gebäudereinigung. Ein verlorener Schließanlagen-Schlüssel kann fünfstellige Schäden bedeuten. Wer Ausgabe und Rückgabe nicht dokumentiert, hat im Streitfall keine Grundlage. Dieser Ratgeber zeigt, wie ein sauberer Prozess aussieht und wie er sich digital umsetzen lässt.",
    breadcrumbs: [
      { name: "Home", url: "https://www.taskeyapp.com" },
      { name: "Lösungen", url: "https://www.taskeyapp.com/loesungen" },
      { name: "Schlüsselverwaltung", url: `https://www.taskeyapp.com${path}` },
    ],
    sections: [
      {
        eyebrow: "Warum es zählt",
        heading: "Warum Schlüsselverwaltung so schnell teuer wird.",
        body: [
          "Bei einer Schließanlage kostet ein einziger verlorener Generalschlüssel häufig fünfstellig, weil die Anlage komplett neu bestückt werden muss. Bei einfachen Schlössern sind es hunderte Euro pro Schlüssel plus Aufwand für Umverteilung. Die Haftung liegt in der Regel beim Reinigungsunternehmen, wenn der Verlust während des Einsatzes eintritt.",
          "Genau deshalb ist der Prozess für Ausgabe, Rückgabe und Aufbewahrung nicht nur eine formale Übung, sondern kaufmännisch relevant. Ohne dokumentierten Prozess gibt es weder eine belastbare Grundlage für Versicherungen noch eine faire Verteilung der Haftung zwischen Betrieb, Mitarbeitenden und Auftraggeber.",
        ],
        bullets: [
          "Generalschlüssel: fünfstellige Schäden bei Verlust möglich",
          "Haftung meist beim Reinigungsunternehmen",
          "Versicherung braucht dokumentierten Prozess",
          "Ohne Nachweis kein sauberer Streitausgang",
        ],
      },
      {
        eyebrow: "Prozess",
        heading: "Der saubere Prozess für Ausgabe und Rückgabe.",
        body: [
          "Ein tragfähiger Schlüsselprozess trennt drei Rollen: die Objektleitung im Betrieb, die Reinigungskraft, die den Schlüssel während der Reinigung nutzt, und der Auftraggeber, der den Schlüssel bereitstellt oder verwaltet. Für jede Übergabe zwischen diesen Rollen braucht es eine Signatur oder digitale Bestätigung.",
          "Der klassische Papier-Weg ist der Übergabeschein pro Schlüssel. In der Praxis funktioniert das nur, solange die Belegschaft klein ist. Bei mehreren Kolonnen, Vertretungen und Wochenenddiensten geht der Papierschein regelmäßig verloren. Der digitale Weg über eine App macht die gleiche Information sofort für alle sichtbar.",
        ],
        bullets: [
          "Ausgabe pro Schlüssel dokumentieren, mit Datum und Verantwortlichem",
          "Rückgabe genauso dokumentieren, kein Schlüssel ohne Nachweis zurück",
          "Ausgeliehenen Bestand pro Mitarbeitendem sichtbar",
          "Übergabe bei Krankheit oder Vertretung eindeutig geregelt",
          "Verlustmeldung sofort an Objektleitung, dokumentiert",
        ],
      },
      {
        eyebrow: "Digital",
        heading: "Digital umgesetzt mit Taskey.",
        body: [
          "In Taskey liegt pro Objekt der Schlüsselbestand: welche Schlüssel es gibt, wer sie ausgehändigt hat und wer sie aktuell nutzt. Die Ausgabe wird per Signatur oder NFC-Bestätigung dokumentiert. Die Rückgabe genauso. Objektleitung, Reinigungskraft und Zentrale sehen jederzeit den aktuellen Stand.",
          "Bei Vertretungen oder Personalwechsel entfällt das lange Suchen. Die Historie zeigt, wer wann welchen Schlüssel hatte. Bei Verlust ist die Meldung in Sekunden dokumentiert. Die Versicherung erhält im Ernstfall einen sauberen Nachweis, kein Excel-Puzzle.",
        ],
        bullets: [
          "Schlüsselbestand pro Objekt hinterlegt",
          "Ausgabe und Rückgabe per Signatur oder NFC",
          "Live-Übersicht wer welchen Schlüssel hat",
          "Historie pro Schlüssel abrufbar",
          "Verlustmeldung mit Zeitstempel",
        ],
      },
      {
        eyebrow: "Vertrag",
        heading: "Was im Reinigungsvertrag stehen sollte.",
        body: [
          "Der Reinigungsvertrag sollte die Schlüsselhaftung klar regeln. Wer stellt die Schlüssel bereit, wer haftet bei Verlust, wie hoch ist die Deckelung, welche Versicherung greift? Ohne diese Regelung entstehen im Ernstfall lange Diskussionen zwischen Auftraggeber, Reinigungsunternehmen und Versicherung.",
          "In der Praxis lohnt sich eine Deckelung der Haftung pro Vorfall. Genauso wichtig ist die Klarstellung, dass das Unternehmen einen dokumentierten Prozess führt und die Reinigungskraft im Rahmen ihrer Tätigkeit versichert ist.",
        ],
        bullets: [
          "Wer stellt Schlüssel bereit",
          "Wer haftet in welcher Höhe",
          "Welche Versicherung greift",
          "Wie wird ein Verlust gemeldet",
          "Wie erfolgt die Rückgabe bei Vertragsende",
        ],
      },
    ],
    faqs: [
      {
        question: "Wer haftet bei Schlüsselverlust in der Gebäudereinigung?",
        answer:
          "In der Regel haftet das Reinigungsunternehmen, wenn der Verlust während des Einsatzes passiert. Der Vertrag kann eine Deckelung der Haftungssumme vorsehen. Eine Schlüsselversicherung ist branchenüblich und deckt in vielen Fällen den Austausch von Schließanlagen ab.",
      },
      {
        question: "Wie hoch ist der Schaden bei einem verlorenen Generalschlüssel?",
        answer:
          "Bei einer Schließanlage muss die gesamte Anlage neu bestückt werden. Die Kosten liegen häufig zwischen 5.000 und 30.000 Euro, in großen Gebäuden auch deutlich höher. Ohne Schlüsselversicherung geht dieser Betrag zulasten des Reinigungsunternehmens.",
      },
      {
        question: "Was gehört in ein Übergabeprotokoll für Schlüssel?",
        answer:
          "Datum, Objekt, Schlüsselbezeichnung, ausgebende Person, empfangende Person, Unterschrift oder digitale Bestätigung. Bei Rückgabe die gleichen Angaben plus Datum der Rückgabe. In digitalen Systemen ergänzt der Zeitstempel das Protokoll automatisch.",
      },
      {
        question: "Reicht ein Excel für die Schlüsselverwaltung?",
        answer:
          "Solange Sie ein Objekt und eine Handvoll Schlüssel haben, ja. Bei mehreren Objekten, Kolonnen und Vertretungen führt Excel schnell zu Fehlern. Der digitale Prozess mit App und Nachweisfunktion ist deutlich sicherer und im Streitfall aussagekräftiger.",
      },
      {
        question: "Wie funktioniert die Schlüsselverwaltung mit NFC?",
        answer:
          "An der Schlüsselbox oder am Objekt hängt ein NFC-Tag. Beim Abholen und Zurückbringen scannt die Reinigungskraft den Tag mit dem Smartphone. Die App dokumentiert automatisch, wer wann welchen Schlüssel hatte. Manuelle Protokolle entfallen.",
      },
      {
        question: "Was passiert bei einem Personalwechsel?",
        answer:
          "Vor dem letzten Arbeitstag wird die Rückgabe aller Schlüssel dokumentiert. Bei Übergabe an eine Vertretung wird die Ausgabe an die neue Person protokolliert. Ohne dokumentierte Rückgabe bleibt der scheidende Mitarbeiter formal in der Verantwortung.",
      },
    ],
    related: [
      {
        href: "/software-gebaeudereinigung",
        label: "Software für Gebäudereinigung",
        description: "Objekt, Personal, Schlüssel und Nachweis in einem System.",
      },
      {
        href: "/nfc-zeiterfassung",
        label: "NFC-Nachweis",
        description: "Wie NFC-Tags am Objekt Ausgabe und Rückgabe dokumentieren.",
      },
      {
        href: "/loesungen/reinigungsobjekte-verwalten",
        label: "Reinigungsobjekte verwalten",
        description: "Objektstammdaten inklusive Schlüsselbestand.",
      },
      {
        href: "/loesungen/reinigungsplan-erstellen",
        label: "Reinigungsplan erstellen",
        description: "Reinigungsplan pro Objekt mit Schlüsselregelung im Zugriff.",
      },
      {
        href: "/leistungsnachweis-gebaeudereinigung",
        label: "Leistungsnachweis",
        description: "Nachweis pro Einsatz, inklusive Zugang und Rückgabe.",
      },
    ],
  },
  en: {
    title: "Key management in commercial cleaning",
    eyebrow: "Guide · Key management",
    h1: "Key management in commercial cleaning —",
    h1Accent: "protocol, proof, liability.",
    lead: "Keys are the most sensitive operational topic in commercial cleaning. A single lost master key can cause five-figure damage. Anyone who does not document issue and return has no basis in a dispute. This guide shows what a clean process looks like and how to deliver it digitally.",
    breadcrumbs: [
      { name: "Home", url: "https://www.taskeyapp.com" },
      { name: "Solutions", url: "https://www.taskeyapp.com/loesungen" },
      { name: "Key management", url: `https://www.taskeyapp.com${path}` },
    ],
    sections: [
      {
        eyebrow: "Why it matters",
        heading: "Why key management becomes expensive fast.",
        body: [
          "For a master key system, a single lost master key often costs five figures because the entire system has to be re-keyed. For simple locks, hundreds of euros per key plus redistribution effort. Liability usually sits with the cleaning company when the loss occurs during service.",
          "That is why the process for issue, return and storage is not a formality but a commercial matter. Without a documented process, there is no defensible basis for insurance and no fair distribution of liability between company, staff and client.",
        ],
        bullets: [
          "Master keys: five-figure damage possible on loss",
          "Liability usually with the cleaning company",
          "Insurance requires a documented process",
          "No proof means no clean resolution in dispute",
        ],
      },
      {
        eyebrow: "Process",
        heading: "The clean process for issue and return.",
        body: [
          "A viable key process separates three roles: the account manager at the company, the cleaner using the key during service, and the client who provides or manages the key. Every handover between these roles needs a signature or digital confirmation.",
          "The classic paper route is a handover slip per key. In practice it works only for small teams. With multiple crews, substitutions and weekend service, paper slips get lost regularly. Digital via an app makes the same information visible to everyone immediately.",
        ],
        bullets: [
          "Document issue per key with date and responsible person",
          "Document return the same way, no key without proof",
          "Held keys per staff member visible",
          "Handover on sick leave or substitution clearly ruled",
          "Loss report immediately to account manager, documented",
        ],
      },
      {
        eyebrow: "Digital",
        heading: "Delivered digitally with Taskey.",
        body: [
          "In Taskey, each site carries a key inventory: which keys exist, who issued them and who currently holds them. Issue is documented by signature or NFC confirmation. Return the same. Account manager, cleaner and back office see the current state at any time.",
          "For substitutions or staff changes, the long search disappears. History shows who held which key when. On loss, the report is documented in seconds. Insurance gets a clean proof in the worst case, not an Excel puzzle.",
        ],
        bullets: [
          "Key inventory per site stored",
          "Issue and return by signature or NFC",
          "Live overview who holds which key",
          "History per key retrievable",
          "Loss report with timestamp",
        ],
      },
      {
        eyebrow: "Contract",
        heading: "What should be in the cleaning contract.",
        body: [
          "The cleaning contract should regulate key liability clearly. Who provides the keys, who is liable on loss, what is the cap, which insurance applies? Without this clause, disputes between client, cleaning company and insurance drag out.",
          "In practice, a liability cap per incident is worthwhile. Equally important is the clarification that the company runs a documented process and that the cleaner is insured within their duties.",
        ],
        bullets: [
          "Who provides keys",
          "Who is liable and up to what amount",
          "Which insurance applies",
          "How to report a loss",
          "How return works at contract end",
        ],
      },
    ],
    faqs: [
      {
        question: "Who is liable for a lost key in commercial cleaning?",
        answer:
          "Usually the cleaning company when loss happens during service. The contract can cap the liability amount. Key insurance is common in the industry and covers re-keying master systems in many cases.",
      },
      {
        question: "How expensive is a lost master key?",
        answer:
          "For a master key system, the entire system has to be re-keyed. Costs often sit between 5,000 and 30,000 EUR, in large buildings significantly more. Without key insurance, this hits the cleaning company.",
      },
      {
        question: "What belongs in a key handover protocol?",
        answer:
          "Date, site, key designation, issuing person, receiving person, signature or digital confirmation. On return, the same plus return date. In digital systems, timestamps complement the protocol automatically.",
      },
      {
        question: "Is a spreadsheet enough for key management?",
        answer:
          "As long as you have one site and a handful of keys, yes. With multiple sites, crews and substitutions, spreadsheets lead to errors quickly. Digital with app and proof is significantly safer and clearer in disputes.",
      },
      {
        question: "How does NFC-based key management work?",
        answer:
          "An NFC tag sits on the key box or at the site. On pickup and return, the cleaner scans the tag with the phone. The app automatically documents who held which key when. Manual protocols disappear.",
      },
      {
        question: "What happens on staff change?",
        answer:
          "Before the last day, return of all keys is documented. On handover to a substitute, issue to the new person is logged. Without documented return, the departing staff member formally remains responsible.",
      },
    ],
    related: [
      {
        href: "/software-gebaeudereinigung",
        label: "Cleaning company software",
        description: "Site, staff, keys and proof in one system.",
      },
      {
        href: "/nfc-zeiterfassung",
        label: "NFC proof",
        description: "How NFC tags on site document issue and return.",
      },
      {
        href: "/loesungen/reinigungsobjekte-verwalten",
        label: "Manage cleaning sites",
        description: "Site master data including key inventory.",
      },
      {
        href: "/loesungen/reinigungsplan-erstellen",
        label: "Create cleaning plan",
        description: "Cleaning plan per site with key access included.",
      },
      {
        href: "/leistungsnachweis-gebaeudereinigung",
        label: "Proof of service",
        description: "Proof per visit including access and return.",
      },
    ],
  },
  fr: {
    title: "Gestion des clés en propreté",
    eyebrow: "Guide · Gestion des clés",
    h1: "Gestion des clés en propreté —",
    h1Accent: "protocole, preuve, engagement.",
    lead: "Les clés sont le sujet opérationnel le plus sensible en propreté. Une seule clé maîtresse perdue peut causer un dommage à cinq chiffres. Qui ne documente pas remise et retour n'a aucune base en litige. Ce guide montre à quoi ressemble un processus propre et comment le livrer en digital.",
    breadcrumbs: [
      { name: "Accueil", url: "https://www.taskeyapp.com" },
      { name: "Solutions", url: "https://www.taskeyapp.com/loesungen" },
      { name: "Gestion des clés", url: `https://www.taskeyapp.com${path}` },
    ],
    sections: [
      {
        eyebrow: "Pourquoi c'est essentiel",
        heading: "Pourquoi la gestion des clés devient vite coûteuse.",
        body: [
          "Sur une installation avec clé maîtresse, une seule clé perdue coûte souvent cinq chiffres parce que toute l'installation doit être re-clé. Sur des serrures simples, des centaines d'euros par clé plus la redistribution. L'engagement est en général celui de la société de nettoyage quand la perte survient pendant l'intervention.",
          "C'est pourquoi le processus pour remise, retour et conservation n'est pas une formalité mais un enjeu commercial. Sans processus documenté, aucune base solide pour l'assurance ni répartition juste entre entreprise, agents et donneur d'ordre.",
        ],
        bullets: [
          "Clés maîtresses: dommage à cinq chiffres possible",
          "Engagement souvent chez la société de nettoyage",
          "L'assurance exige un processus documenté",
          "Sans preuve, pas de résolution propre en litige",
        ],
      },
      {
        eyebrow: "Processus",
        heading: "Le processus propre pour remise et retour.",
        body: [
          "Un processus tenable sépare trois rôles: l'encadrement, l'agent qui utilise la clé pendant l'intervention et le donneur d'ordre qui fournit ou gère la clé. Pour chaque remise entre ces rôles, il faut signature ou confirmation digitale.",
          "Le chemin papier classique est le bordereau de remise par clé. En pratique cela fonctionne pour les petites équipes. Avec plusieurs équipes, remplacements et services de week-end, les bordereaux papier se perdent régulièrement. Le digital via une application rend l'information immédiatement visible à tous.",
        ],
        bullets: [
          "Documenter la remise par clé avec date et responsable",
          "Documenter le retour de la même façon, aucune clé sans preuve",
          "Encours détenu par agent visible",
          "Remise en cas de maladie ou remplacement clairement réglée",
          "Signalement de perte immédiat à l'encadrement, documenté",
        ],
      },
      {
        eyebrow: "Digital",
        heading: "Livré digitalement avec Taskey.",
        body: [
          "Dans Taskey, chaque site porte un inventaire de clés: quelles clés existent, qui les a remises et qui les détient actuellement. La remise est documentée par signature ou confirmation NFC. Le retour de même. Encadrement, agent et back-office voient l'état actuel à tout moment.",
          "Pour les remplacements ou changements de personnel, la longue recherche disparaît. L'historique montre qui détenait quelle clé quand. En cas de perte, le signalement est documenté en quelques secondes. L'assurance reçoit dans le pire cas une preuve propre, pas un puzzle Excel.",
        ],
        bullets: [
          "Inventaire des clés par site stocké",
          "Remise et retour par signature ou NFC",
          "Vue en direct de qui détient quelle clé",
          "Historique par clé consultable",
          "Signalement de perte horodaté",
        ],
      },
      {
        eyebrow: "Contrat",
        heading: "Ce qui doit figurer dans le contrat.",
        body: [
          "Le contrat doit régler clairement l'engagement des clés. Qui fournit les clés, qui engage sa responsabilité en cas de perte, quel plafond, quelle assurance couvre? Sans clause, les litiges entre donneur d'ordre, société et assurance traînent.",
          "En pratique, un plafonnement de l'engagement par incident vaut la peine. Aussi importante: la clarification que l'entreprise mène un processus documenté et que l'agent est couvert dans le cadre de ses missions.",
        ],
        bullets: [
          "Qui fournit les clés",
          "Qui engage sa responsabilité et à quel niveau",
          "Quelle assurance intervient",
          "Comment signaler une perte",
          "Comment se déroule le retour en fin de contrat",
        ],
      },
    ],
    faqs: [
      {
        question: "Qui est responsable d'une clé perdue en nettoyage?",
        answer:
          "Généralement la société de nettoyage quand la perte survient pendant l'intervention. Le contrat peut plafonner le montant engagé. L'assurance clé est courante dans la branche et couvre le re-clef d'installations maîtresses dans de nombreux cas.",
      },
      {
        question: "Combien coûte une clé maîtresse perdue?",
        answer:
          "Sur une installation avec clé maîtresse, toute l'installation doit être re-clé. Les coûts se situent souvent entre 5.000 et 30.000 EUR, dans les grands bâtiments bien plus. Sans assurance clé, cela pèse sur la société de nettoyage.",
      },
      {
        question: "Que contient un protocole de remise de clé?",
        answer:
          "Date, site, désignation de la clé, personne remettante, personne réceptrice, signature ou confirmation digitale. Au retour, les mêmes informations plus date de retour. En système digital, l'horodatage complète automatiquement le protocole.",
      },
      {
        question: "Excel suffit-il pour la gestion des clés?",
        answer:
          "Tant que vous avez un site et une poignée de clés, oui. Avec plusieurs sites, équipes et remplacements, Excel conduit rapidement à des erreurs. Le digital avec application et preuve est nettement plus sûr et clair en litige.",
      },
      {
        question: "Comment fonctionne la gestion NFC?",
        answer:
          "Un tag NFC est fixé à la boîte à clés ou au site. À la prise et au retour, l'agent scanne le tag avec le téléphone. L'application documente automatiquement qui détenait quelle clé quand. Les protocoles manuels disparaissent.",
      },
      {
        question: "Que se passe-t-il en cas de changement de personnel?",
        answer:
          "Avant le dernier jour, le retour de toutes les clés est documenté. À la remise à un remplaçant, la remise à la nouvelle personne est enregistrée. Sans retour documenté, l'agent sortant reste formellement responsable.",
      },
    ],
    related: [
      {
        href: "/software-gebaeudereinigung",
        label: "Logiciel pour société de nettoyage",
        description: "Site, personnel, clés et preuve dans un système.",
      },
      {
        href: "/nfc-zeiterfassung",
        label: "Preuve NFC",
        description: "Comment les tags NFC sur site documentent remise et retour.",
      },
      {
        href: "/loesungen/reinigungsobjekte-verwalten",
        label: "Gérer les sites de nettoyage",
        description: "Données maîtres du site, inventaire de clés inclus.",
      },
      {
        href: "/loesungen/reinigungsplan-erstellen",
        label: "Créer un plan de nettoyage",
        description: "Plan par site avec règle d'accès aux clés.",
      },
      {
        href: "/leistungsnachweis-gebaeudereinigung",
        label: "Justificatif de prestations",
        description: "Justificatif par intervention, accès et retour compris.",
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
