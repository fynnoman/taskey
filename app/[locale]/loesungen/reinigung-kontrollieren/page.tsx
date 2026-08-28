import type { Metadata } from "next";
import LandingPageTemplate from "@/components/landing/LandingPageTemplate";
import { buildMetadata, pickLocale, type PageCopy } from "@/lib/i18n-metadata";

const path = "/loesungen/reinigung-kontrollieren";

const COPY: PageCopy = {
  de: {
    title: "Reinigung kontrollieren | Qualitätsprüfung, Nachweis, Reklamation | Taskey",
    description:
      "Reinigung zuverlässig kontrollieren: Qualitätsprüfung nach objektivem Standard, Nachweis pro Einsatz, Reklamationen dokumentiert klären. Ohne Bauchgefühl und ohne endlose Diskussionen.",
    ogTitle: "Reinigung kontrollieren | Taskey",
    ogDescription:
      "Qualitätsprüfung, Nachweis und Reklamationsklärung mit dokumentierten Daten.",
    twitterTitle: "Reinigung kontrollieren | Taskey",
    twitterDescription:
      "Qualitätsprüfung, Nachweis und Reklamationsklärung mit Daten.",
  },
  en: {
    title: "Cleaning quality control | Inspection, proof, complaints | Taskey",
    description:
      "Reliably control cleaning quality: inspection to an objective standard, proof per visit, complaints resolved with documented data. No guesswork, no endless disputes.",
    ogTitle: "Cleaning quality control | Taskey",
    ogDescription:
      "Inspection, proof and complaint resolution with documented data.",
    twitterTitle: "Cleaning quality control | Taskey",
    twitterDescription:
      "Inspection, proof and complaint resolution with data.",
  },
  fr: {
    title: "Contrôler le nettoyage | Contrôle qualité, preuve, réclamation | Taskey",
    description:
      "Contrôlez le nettoyage de manière fiable: contrôle qualité selon standard objectif, preuve par intervention, réclamations résolues avec données documentées. Sans à-peu-près.",
    ogTitle: "Contrôler le nettoyage | Taskey",
    ogDescription:
      "Contrôle qualité, preuve et résolution de réclamation avec données documentées.",
    twitterTitle: "Contrôler le nettoyage | Taskey",
    twitterDescription:
      "Contrôle qualité, preuve et résolution de réclamation avec données.",
  },
};

const OG_ALT: Record<"de" | "en" | "fr", string> = {
  de: "Reinigung kontrollieren mit Taskey",
  en: "Cleaning quality control with Taskey",
  fr: "Contrôler le nettoyage avec Taskey",
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
    title: "Reinigung kontrollieren",
    eyebrow: "Ratgeber · Qualitätskontrolle",
    h1: "Reinigung kontrollieren —",
    h1Accent: "objektiv, dokumentiert, wiederholbar.",
    lead: "Die Frage was gute Reinigung ausmacht wird oft mit Bauchgefühl beantwortet. Das reicht für ein Objekt, nicht für fünfzig. Wer Reinigung zuverlässig kontrollieren will, braucht einen objektiven Standard, einen dokumentierten Nachweis und eine klare Abfolge für Reklamationen.",
    breadcrumbs: [
      { name: "Home", url: "https://www.taskeyapp.com" },
      { name: "Lösungen", url: "https://www.taskeyapp.com/loesungen" },
      { name: "Reinigung kontrollieren", url: `https://www.taskeyapp.com${path}` },
    ],
    sections: [
      {
        eyebrow: "Standard",
        heading: "Was heißt objektive Qualitätskontrolle?",
        body: [
          "Objektive Kontrolle heißt: derselbe Prüfer würde am gleichen Objekt zum gleichen Ergebnis kommen wie ein anderer Prüfer. Das setzt einen Prüfkatalog voraus, eine wiederholbare Methode und eine dokumentierte Bewertung. In der Gebäudereinigung sind DIN-Standards und branchenspezifische Prüfsysteme wie das Prüfsystem nach DIN 13549 verbreitet.",
          "Für den Alltag reicht meist ein pragmatischer Prüfkatalog pro Objekttyp. Für ein Bürogebäude sind das Prüfpunkte wie Sanitär, Böden, Schreibtische, Fenster. Pro Prüfpunkt gibt es eine Note oder ein Ampel-System. Das Ergebnis lässt sich zwischen Objekten und über die Zeit vergleichen.",
        ],
        bullets: [
          "Prüfkatalog pro Objekttyp",
          "Wiederholbare Methode, mehrere Prüfer möglich",
          "Bewertungssystem mit klarer Skala",
          "Ergebnis über die Zeit vergleichbar",
        ],
      },
      {
        eyebrow: "Nachweis",
        heading: "Nachweis pro Einsatz als Grundlage.",
        body: [
          "Kontrolle beginnt nicht bei der Stichprobe, sondern beim Einsatz. Wenn jeder Einsatz per NFC oder QR-Code am Objekt bestätigt wird, existiert eine harte Grundlage: Wer war wann wie lange auf dem Objekt. Reklamationen zu Terminen und Anwesenheit sind damit sofort geklärt.",
          "Der zusätzliche Fotonachweis für kritische Bereiche wie Sanitär oder Küche macht auch die Qualität nachvollziehbar. In Taskey wird der Nachweis automatisch in der Objekthistorie abgelegt und ist bei einer Kontrolle oder Reklamation sofort verfügbar.",
        ],
        bullets: [
          "NFC- oder QR-Bestätigung pro Einsatz",
          "Zeitstempel für Ankunft und Abschluss",
          "Fotonachweis für kritische Bereiche",
          "Automatische Ablage in der Objekthistorie",
        ],
      },
      {
        eyebrow: "Ablauf",
        heading: "Die Abfolge für eine belastbare Kontrolle.",
        body: [
          "Ein belastbarer Kontrollprozess hat drei Ebenen. Erste Ebene: der Prüfer geht das Objekt mit dem Prüfkatalog durch und dokumentiert das Ergebnis. Zweite Ebene: bei Abweichungen wird ein Foto oder eine Notiz erfasst und die Verantwortlichkeit zugeordnet. Dritte Ebene: die Nachbesserung wird ausgelöst, dokumentiert und geprüft.",
          "In der digitalen Umsetzung entsteht daraus eine Aufgabe für die Reinigungskraft, die den nächsten Einsatz betrifft. Der Auftraggeber sieht bei Bedarf, dass die Kontrolle stattgefunden hat und die Nachbesserung erfolgt ist. Das reduziert Diskussionen deutlich.",
        ],
        bullets: [
          "Prüfkatalog systematisch durchgehen",
          "Abweichungen mit Foto und Verantwortlichkeit",
          "Nachbesserung als Aufgabe im nächsten Einsatz",
          "Nachprüfung und Abschluss dokumentiert",
        ],
      },
      {
        eyebrow: "Reklamation",
        heading: "Reklamationen mit Daten klären.",
        body: [
          "Die typische Reklamation lautet: das Objekt wurde heute nicht sauber gemacht. Ohne Daten steht Aussage gegen Aussage. Mit einem digitalen Nachweis pro Einsatz ist klar, wer wann am Objekt war, welche Aufgaben abgehakt wurden und ob es einen Fotonachweis gibt.",
          "Das ändert die Gespräche mit Auftraggebern grundlegend. Statt Diskussion über die Frage ob überhaupt gereinigt wurde, geht es um konkrete Verbesserungen. Das schont Nerven und die Vertragsbeziehung.",
        ],
        bullets: [
          "Nachweis pro Einsatz mit Zeitstempel",
          "Aufgabenliste zeigt was gemacht wurde",
          "Fotonachweis für kritische Bereiche",
          "Klare Grundlage für Nachbesserung oder Klärung",
        ],
      },
    ],
    faqs: [
      {
        question: "Wie kontrolliere ich Reinigungsqualität objektiv?",
        answer:
          "Mit einem Prüfkatalog pro Objekttyp, einer wiederholbaren Methode und einer dokumentierten Bewertung. In der Gebäudereinigung sind DIN-Standards oder das Prüfsystem nach DIN 13549 verbreitet. Für den Alltag reicht oft ein pragmatischer Prüfkatalog mit Ampel-Bewertung pro Prüfpunkt.",
      },
      {
        question: "Wie oft sollte kontrolliert werden?",
        answer:
          "Frequenz und Kritikalität entscheiden. In sensiblen Bereichen wie Klinik oder Lebensmittel häufig, teils täglich. In Bürogebäuden häufig monatlich oder quartalsweise. Wichtig ist die Regelmäßigkeit und Vergleichbarkeit der Ergebnisse über die Zeit.",
      },
      {
        question: "Wie hilft NFC bei der Qualitätskontrolle?",
        answer:
          "NFC-Tags am Objekt bestätigen automatisch Anwesenheit und Dauer jedes Einsatzes. Der Nachweis ist manipulationssicher und liegt automatisch in der Historie. Bei Reklamationen entfällt die Diskussion, ob überhaupt gereinigt wurde.",
      },
      {
        question: "Was gehört in einen Prüfkatalog?",
        answer:
          "Prüfpunkte pro Objekttyp, klare Bewertungsskala, Foto- und Notizfelder für Abweichungen, Zuordnung der Verantwortlichkeit und Feld für die Nachbesserung. Der Katalog sollte in wenigen Minuten pro Objekt durchführbar sein, sonst wird er nicht gelebt.",
      },
      {
        question: "Wie klare ich Reklamationen sauber?",
        answer:
          "Mit einer klaren Ablauf-Kette: Reklamation aufnehmen, Nachweis prüfen, Verantwortlichkeit klären, Nachbesserung terminieren, Nachprüfung durchführen und Abschluss dokumentieren. Alle Schritte digital in der Objektakte sichtbar.",
      },
      {
        question: "Wie hilft Taskey bei der Qualitätskontrolle?",
        answer:
          "Taskey führt Nachweise per NFC oder QR pro Einsatz, ermöglicht Fotonachweise, führt Prüfkataloge pro Objekttyp und dokumentiert Reklamationen mit dem gesamten Bearbeitungsverlauf. Alle Daten sind zentral, für Objektleitung und Auftraggeber transparent.",
      },
    ],
    related: [
      {
        href: "/software-gebaeudereinigung",
        label: "Software für Gebäudereinigung",
        description: "Nachweis, Kontrolle und Reklamation in einem System.",
      },
      {
        href: "/leistungsnachweis-gebaeudereinigung",
        label: "Leistungsnachweis",
        description: "Wie der digitale Nachweis pro Einsatz funktioniert.",
      },
      {
        href: "/loesungen/qualitaetskontrolle-gebaeudereinigung",
        label: "Qualitätskontrolle",
        description: "Prüfkatalog, Bewertung und Nachbesserung im Detail.",
      },
      {
        href: "/nfc-zeiterfassung",
        label: "NFC-Nachweis",
        description: "Anwesenheit und Dauer pro Einsatz manipulationssicher.",
      },
      {
        href: "/loesungen/kundenfeedback-reinigung",
        label: "Kundenfeedback",
        description: "Auftraggeber-Rückmeldungen strukturiert erfassen.",
      },
    ],
  },
  en: {
    title: "Cleaning quality control",
    eyebrow: "Guide · Quality control",
    h1: "Control cleaning —",
    h1Accent: "objective, documented, repeatable.",
    lead: "What makes cleaning good is often answered by gut feel. That works for one site, not for fifty. Anyone who wants to control cleaning reliably needs an objective standard, documented proof and a clear sequence for complaints.",
    breadcrumbs: [
      { name: "Home", url: "https://www.taskeyapp.com" },
      { name: "Solutions", url: "https://www.taskeyapp.com/loesungen" },
      { name: "Control cleaning", url: `https://www.taskeyapp.com${path}` },
    ],
    sections: [
      {
        eyebrow: "Standard",
        heading: "What does objective quality control mean?",
        body: [
          "Objective control means the same inspector would come to the same result at the same site as another inspector. That requires an inspection catalogue, a repeatable method and a documented rating. In commercial cleaning, DIN standards and industry-specific systems like DIN 13549 are common.",
          "For daily use, a pragmatic inspection catalogue per site type usually suffices. For an office, that means points such as sanitary, floors, desks, windows. Per point, a grade or traffic-light system. The result is comparable between sites and over time.",
        ],
        bullets: [
          "Inspection catalogue per site type",
          "Repeatable method, multiple inspectors possible",
          "Rating system with clear scale",
          "Result comparable over time",
        ],
      },
      {
        eyebrow: "Proof",
        heading: "Proof per visit as the foundation.",
        body: [
          "Control does not start with the spot check but with the visit. If every visit is confirmed by NFC or QR at the site, a hard basis exists: who was where and for how long. Complaints about attendance and time are resolved immediately.",
          "Additional photo proof for critical areas such as sanitary or kitchen makes quality traceable too. In Taskey, proof lands automatically in the site history and is instantly available on inspection or complaint.",
        ],
        bullets: [
          "NFC or QR confirmation per visit",
          "Timestamp for arrival and completion",
          "Photo proof for critical areas",
          "Automatic storage in site history",
        ],
      },
      {
        eyebrow: "Flow",
        heading: "The sequence for defensible control.",
        body: [
          "A defensible control process has three layers. First: the inspector runs through the site with the catalogue and documents the result. Second: on deviations, a photo or note is captured and responsibility is assigned. Third: rework is triggered, documented and checked.",
          "Digitally, this becomes a task for the cleaner on the next visit. The client sees on demand that inspection took place and rework happened. Discussion time drops significantly.",
        ],
        bullets: [
          "Run the inspection catalogue systematically",
          "Deviations with photo and responsibility",
          "Rework as a task on the next visit",
          "Re-inspection and closure documented",
        ],
      },
      {
        eyebrow: "Complaints",
        heading: "Resolve complaints with data.",
        body: [
          "The typical complaint is: the site was not cleaned today. Without data, it is one word against another. With digital proof per visit, it is clear who was at the site when, which tasks were checked off, and whether there is photo proof.",
          "That changes conversations with clients fundamentally. Instead of debating whether cleaning happened at all, the discussion is about concrete improvements. That preserves nerves and the contract.",
        ],
        bullets: [
          "Proof per visit with timestamp",
          "Task list shows what was done",
          "Photo proof for critical areas",
          "Clear basis for rework or clarification",
        ],
      },
    ],
    faqs: [
      {
        question: "How do I control cleaning quality objectively?",
        answer:
          "With an inspection catalogue per site type, a repeatable method and a documented rating. In commercial cleaning, DIN standards or the DIN 13549 inspection system are common. For daily use, a pragmatic catalogue with traffic-light rating per point is often enough.",
      },
      {
        question: "How often should inspections happen?",
        answer:
          "Frequency and criticality decide. In sensitive areas like hospitals or food, frequently, sometimes daily. In offices often monthly or quarterly. Regularity and comparability of results over time matter.",
      },
      {
        question: "How does NFC help with quality control?",
        answer:
          "NFC tags at the site automatically confirm attendance and duration for each visit. Proof is tamper-resistant and lands in the history automatically. Debates about whether cleaning happened at all disappear.",
      },
      {
        question: "What belongs in an inspection catalogue?",
        answer:
          "Inspection points per site type, clear rating scale, photo and note fields for deviations, responsibility assignment and a rework field. The catalogue should be doable in a few minutes per site or it will not be used.",
      },
      {
        question: "How do I resolve complaints cleanly?",
        answer:
          "With a clear chain: capture the complaint, check proof, clarify responsibility, schedule rework, run re-inspection and document closure. All steps visible digitally in the site record.",
      },
      {
        question: "How does Taskey help with quality control?",
        answer:
          "Taskey runs NFC or QR proof per visit, enables photo proof, runs inspection catalogues per site type and documents complaints with the full handling trail. All data central, transparent for account manager and client.",
      },
    ],
    related: [
      {
        href: "/software-gebaeudereinigung",
        label: "Cleaning company software",
        description: "Proof, inspection and complaints in one system.",
      },
      {
        href: "/leistungsnachweis-gebaeudereinigung",
        label: "Proof of service",
        description: "How digital proof per visit works.",
      },
      {
        href: "/loesungen/qualitaetskontrolle-gebaeudereinigung",
        label: "Quality control",
        description: "Inspection catalogue, rating and rework in detail.",
      },
      {
        href: "/nfc-zeiterfassung",
        label: "NFC proof",
        description: "Attendance and duration per visit tamper-resistant.",
      },
      {
        href: "/loesungen/kundenfeedback-reinigung",
        label: "Client feedback",
        description: "Capture client feedback in a structured way.",
      },
    ],
  },
  fr: {
    title: "Contrôler le nettoyage",
    eyebrow: "Guide · Contrôle qualité",
    h1: "Contrôler le nettoyage —",
    h1Accent: "objectif, documenté, reproductible.",
    lead: "Ce qui fait un bon nettoyage est souvent répondu au feeling. Cela suffit pour un site, pas pour cinquante. Qui veut contrôler le nettoyage de manière fiable a besoin d'un standard objectif, d'une preuve documentée et d'une séquence claire pour les réclamations.",
    breadcrumbs: [
      { name: "Accueil", url: "https://www.taskeyapp.com" },
      { name: "Solutions", url: "https://www.taskeyapp.com/loesungen" },
      { name: "Contrôler le nettoyage", url: `https://www.taskeyapp.com${path}` },
    ],
    sections: [
      {
        eyebrow: "Standard",
        heading: "Que signifie contrôle qualité objectif?",
        body: [
          "Contrôle objectif signifie que le même contrôleur arriverait au même résultat sur le même site qu'un autre contrôleur. Cela suppose un catalogue de contrôle, une méthode reproductible et une notation documentée. En propreté, les normes DIN et systèmes spécifiques comme DIN 13549 sont répandus.",
          "Au quotidien, un catalogue pragmatique par type de site suffit souvent. Pour un bureau: sanitaire, sols, bureaux, vitres. Par point: une note ou un système feu tricolore. Le résultat est comparable entre sites et dans le temps.",
        ],
        bullets: [
          "Catalogue de contrôle par type de site",
          "Méthode reproductible, plusieurs contrôleurs possibles",
          "Système de notation avec échelle claire",
          "Résultat comparable dans le temps",
        ],
      },
      {
        eyebrow: "Preuve",
        heading: "Preuve par intervention comme base.",
        body: [
          "Le contrôle ne commence pas au sondage mais à l'intervention. Si chaque intervention est confirmée par NFC ou QR sur site, une base solide existe: qui était où et combien de temps. Réclamations sur présence et durée sont résolues immédiatement.",
          "La preuve photo pour zones critiques comme sanitaire ou cuisine rend aussi la qualité traçable. Dans Taskey, la preuve arrive automatiquement dans l'historique du site et est disponible instantanément en contrôle ou réclamation.",
        ],
        bullets: [
          "Confirmation NFC ou QR par intervention",
          "Horodatage arrivée et clôture",
          "Preuve photo pour zones critiques",
          "Stockage automatique dans l'historique du site",
        ],
      },
      {
        eyebrow: "Séquence",
        heading: "La séquence pour un contrôle solide.",
        body: [
          "Un contrôle solide a trois couches. Un: le contrôleur parcourt le site avec le catalogue et documente le résultat. Deux: en écart, photo ou note et attribution de responsabilité. Trois: la reprise est déclenchée, documentée et vérifiée.",
          "En digital, cela devient une tâche pour l'agent à la prochaine intervention. Le donneur voit à la demande que le contrôle a eu lieu et que la reprise est faite. Le temps de discussion chute nettement.",
        ],
        bullets: [
          "Parcourir le catalogue systématiquement",
          "Écarts avec photo et responsabilité",
          "Reprise comme tâche à la prochaine intervention",
          "Nouvelle vérification et clôture documentées",
        ],
      },
      {
        eyebrow: "Réclamations",
        heading: "Résoudre les réclamations avec des données.",
        body: [
          "La réclamation typique: le site n'a pas été nettoyé aujourd'hui. Sans données, parole contre parole. Avec preuve digitale par intervention, il est clair qui était sur site quand, quelles tâches ont été cochées et si preuve photo existe.",
          "Cela change fondamentalement les échanges avec les donneurs d'ordre. Au lieu de débattre si le nettoyage a eu lieu, la discussion porte sur des améliorations concrètes. Cela préserve les nerfs et le contrat.",
        ],
        bullets: [
          "Preuve par intervention horodatée",
          "Liste de tâches montre ce qui a été fait",
          "Preuve photo pour zones critiques",
          "Base claire pour reprise ou clarification",
        ],
      },
    ],
    faqs: [
      {
        question: "Comment contrôler la qualité du nettoyage objectivement?",
        answer:
          "Avec un catalogue de contrôle par type de site, une méthode reproductible et une notation documentée. En propreté, les normes DIN ou le système DIN 13549 sont répandus. Au quotidien, un catalogue pragmatique avec notation feu tricolore par point suffit souvent.",
      },
      {
        question: "À quelle fréquence contrôler?",
        answer:
          "Fréquence et criticité décident. En zones sensibles comme cliniques ou agroalimentaire, souvent, parfois quotidiennement. En bureaux souvent mensuel ou trimestriel. Régularité et comparabilité dans le temps comptent.",
      },
      {
        question: "Comment NFC aide-t-il au contrôle qualité?",
        answer:
          "Les tags NFC sur site confirment automatiquement présence et durée de chaque intervention. La preuve est infalsifiable et arrive dans l'historique automatiquement. Les débats sur si le nettoyage a eu lieu disparaissent.",
      },
      {
        question: "Que contient un catalogue de contrôle?",
        answer:
          "Points de contrôle par type de site, échelle de notation claire, champs photo et note pour écarts, attribution de responsabilité et champ pour reprise. Le catalogue doit être faisable en quelques minutes par site sinon il n'est pas utilisé.",
      },
      {
        question: "Comment résoudre les réclamations proprement?",
        answer:
          "Avec une chaîne claire: saisir la réclamation, vérifier la preuve, clarifier la responsabilité, planifier la reprise, effectuer nouvelle vérification et documenter clôture. Toutes les étapes visibles digitalement dans la fiche site.",
      },
      {
        question: "Comment Taskey aide-t-il au contrôle qualité?",
        answer:
          "Taskey gère preuves NFC ou QR par intervention, permet preuves photo, gère catalogues de contrôle par type de site et documente réclamations avec tout le suivi. Toutes données centrales, transparentes pour encadrement et donneur d'ordre.",
      },
    ],
    related: [
      {
        href: "/software-gebaeudereinigung",
        label: "Logiciel pour société de nettoyage",
        description: "Preuve, contrôle et réclamations dans un système.",
      },
      {
        href: "/leistungsnachweis-gebaeudereinigung",
        label: "Justificatif de prestations",
        description: "Comment la preuve digitale par intervention fonctionne.",
      },
      {
        href: "/loesungen/qualitaetskontrolle-gebaeudereinigung",
        label: "Contrôle qualité",
        description: "Catalogue de contrôle, notation et reprise en détail.",
      },
      {
        href: "/nfc-zeiterfassung",
        label: "Preuve NFC",
        description: "Présence et durée par intervention infalsifiables.",
      },
      {
        href: "/loesungen/kundenfeedback-reinigung",
        label: "Retours clients",
        description: "Saisir les retours des donneurs d'ordre de manière structurée.",
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
