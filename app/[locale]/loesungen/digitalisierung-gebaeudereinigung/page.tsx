import type { Metadata } from "next";
import LandingPageTemplate from "@/components/landing/LandingPageTemplate";
import { buildMetadata, pickLocale, type PageCopy } from "@/lib/i18n-metadata";

const path = "/loesungen/digitalisierung-gebaeudereinigung";

const COPY: PageCopy = {
  de: {
    title: "Digitalisierung Gebäudereinigung | Wo anfangen, was rechnet sich | Taskey",
    description:
      "Digitalisierung in der Gebäudereinigung: wo der Betrieb anfängt, welche Schritte sich zuerst rechnen und welche Fallstricke zu vermeiden sind. Praxis-Ratgeber für Reinigungsunternehmer.",
    ogTitle: "Digitalisierung Gebäudereinigung | Taskey",
    ogDescription:
      "Wo anfangen, was sich zuerst rechnet, welche Fallstricke zu vermeiden sind.",
    twitterTitle: "Digitalisierung Gebäudereinigung | Taskey",
    twitterDescription:
      "Wo anfangen, was sich zuerst rechnet, welche Fallstricke.",
  },
  en: {
    title: "Digitisation in commercial cleaning | Where to start, what pays off | Taskey",
    description:
      "Digitisation in commercial cleaning: where the company starts, which steps pay off first and which pitfalls to avoid. Practical guide for cleaning entrepreneurs.",
    ogTitle: "Digitisation in commercial cleaning | Taskey",
    ogDescription:
      "Where to start, what pays off first, which pitfalls to avoid.",
    twitterTitle: "Digitisation in commercial cleaning | Taskey",
    twitterDescription:
      "Where to start, what pays off first, which pitfalls.",
  },
  fr: {
    title: "Digitalisation en propreté | Par où commencer, ce qui rapporte | Taskey",
    description:
      "Digitalisation en propreté: par où l'entreprise commence, quelles étapes rapportent d'abord et quels pièges éviter. Guide pratique pour dirigeants d'entreprises de nettoyage.",
    ogTitle: "Digitalisation en propreté | Taskey",
    ogDescription:
      "Par où commencer, ce qui rapporte d'abord, quels pièges éviter.",
    twitterTitle: "Digitalisation en propreté | Taskey",
    twitterDescription:
      "Par où commencer, ce qui rapporte d'abord, quels pièges.",
  },
};

const OG_ALT: Record<"de" | "en" | "fr", string> = {
  de: "Digitalisierung Gebäudereinigung mit Taskey",
  en: "Digitisation in commercial cleaning with Taskey",
  fr: "Digitalisation en propreté avec Taskey",
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
    title: "Digitalisierung Gebäudereinigung",
    eyebrow: "Ratgeber · Digitalisierung",
    h1: "Digitalisierung in der Gebäudereinigung —",
    h1Accent: "wo anfangen, was rechnet sich.",
    lead: "Digitalisierung klingt nach Großprojekt. In der Gebäudereinigung ist sie einfacher, wenn man beim größten Schmerzpunkt anfängt und schrittweise ausbaut. Dieser Ratgeber zeigt, welche Schritte sich zuerst rechnen und welche Fallstricke Betriebe regelmäßig treffen.",
    breadcrumbs: [
      { name: "Home", url: "https://www.taskeyapp.com" },
      { name: "Lösungen", url: "https://www.taskeyapp.com/loesungen" },
      { name: "Digitalisierung Gebäudereinigung", url: `https://www.taskeyapp.com${path}` },
    ],
    sections: [
      {
        eyebrow: "Ausgangslage",
        heading: "Warum viele Betriebe bei der Digitalisierung stecken bleiben.",
        body: [
          "Viele Reinigungsbetriebe arbeiten heute noch mit Excel für die Objektverwaltung, Papier für den Leistungsnachweis, WhatsApp für die Vertretung und Buchhaltungssoftware für die Rechnung. Jedes System für sich funktioniert, die Übergaben zwischen ihnen sind die eigentliche Quelle für Fehler und Zeitverlust.",
          "Der klassische Fehler beim Einstieg in die Digitalisierung: alles auf einmal umstellen wollen. Das überfordert Belegschaft und Objektleitung, erzeugt Widerstand und endet oft mit Rückkehr zum alten Setup. Der bessere Weg ist der Einstieg beim größten Schmerzpunkt.",
        ],
        bullets: [
          "Excel für Objektverwaltung",
          "Papier für Leistungsnachweis",
          "WhatsApp für Vertretung",
          "Buchhaltung isoliert",
          "Übergaben zwischen Systemen als Fehlerquelle",
        ],
      },
      {
        eyebrow: "Reihenfolge",
        heading: "Wo sich der Einstieg zuerst rechnet.",
        body: [
          "Erster Schritt für die meisten Betriebe: der Leistungsnachweis. Reinigungskraft bestätigt den Einsatz per NFC oder QR am Objekt, das Ergebnis landet automatisch in der Historie. Der Betrieb spart Papier, Auftraggeber bekommen zuverlässige Nachweise, Reklamationen werden mit Daten geklärt statt mit Bauchgefühl.",
          "Zweiter Schritt: die zentrale Objektverwaltung. Stammdaten, Ansprechpartner, Schlüssel, Reinigungsplan an einem Ort. Ab diesem Punkt ist die Reinigungskraft am Objekt informiert, ohne dass die Objektleitung telefonieren muss.",
          "Dritter Schritt: die Einsatzplanung mit Vertretungslogik. Krankmeldungen führen nicht mehr zur Anrufrunde, sondern werden automatisch an Springer eskaliert. Ab hier merkt der Betrieb wirtschaftliche Effekte, nicht nur operative.",
          "Vierter Schritt: Angebot, Rechnung und Kalkulation im gleichen System. Ab hier zahlt sich die Digitalisierung auch in der Marge aus.",
        ],
        bullets: [
          "Schritt 1: Leistungsnachweis mit NFC oder QR",
          "Schritt 2: Zentrale Objektverwaltung",
          "Schritt 3: Einsatzplanung mit Vertretungslogik",
          "Schritt 4: Angebot, Rechnung, Kalkulation integriert",
        ],
      },
      {
        eyebrow: "Effekte",
        heading: "Was Digitalisierung wirtschaftlich bringt.",
        body: [
          "Die messbaren Effekte kommen an drei Stellen: reduzierte Verwaltungszeit, weniger Reklamationen, bessere Marge durch belastbare Kalkulation. Der erste Effekt spürt der Betrieb sofort. Weniger Papier, weniger Rückfragen, weniger telefonische Vertretung.",
          "Der zweite Effekt zeigt sich nach zwei bis drei Monaten. Nachweise sind zuverlässig, Reklamationen werden mit Daten beantwortet, Auftraggeber sind zufriedener. Vertragsverlängerungen und Weiterempfehlungen laufen leichter.",
          "Der dritte Effekt kommt nach dem Aufbau der Kalkulation im System. Neue Angebote sind schneller und präziser, Marge pro Objekt wird sichtbar, Preisverhandlungen erfolgen mit Daten. Der Betrieb wird nicht nur digitaler, sondern auch profitabler.",
        ],
        bullets: [
          "Weniger Verwaltungszeit sofort",
          "Weniger Reklamationen nach zwei bis drei Monaten",
          "Bessere Marge nach Kalkulationsaufbau",
          "Zufriedenere Auftraggeber und Belegschaft",
        ],
      },
      {
        eyebrow: "Fallstricke",
        heading: "Was Betriebe bei der Digitalisierung oft falsch machen.",
        body: [
          "Erstens: alles auf einmal umstellen. Das überfordert Belegschaft und Betrieb. Besser schrittweise starten und den ersten Schritt sauber leben, bevor der zweite angefangen wird.",
          "Zweitens: das falsche Werkzeug für den Betrieb wählen. Eine generische Projektmanagement-Lösung bildet die Realität der Gebäudereinigung nicht ab. Objekte, Kolonnen, Schlüssel, NFC-Nachweise brauchen eine branchenspezifische Lösung.",
          "Drittens: keine Einbindung der Reinigungskräfte. Wer die App nur der Objektleitung gibt und die Reinigungskraft weiter mit Papier arbeiten lässt, verliert den größten Teil des Nutzens. Die App gehört in die Hand der Reinigungskraft.",
          "Viertens: Digitalisierung als reines IT-Projekt behandeln. Es ist ein Change-Projekt, in dem Belegschaft, Objektleitung und Geschäftsführung neue Abläufe lernen. Ohne Change-Management scheitert die beste Software.",
        ],
        bullets: [
          "Nicht alles auf einmal umstellen",
          "Branchenspezifische Lösung wählen",
          "Reinigungskräfte in die App einbinden",
          "Change-Management ernst nehmen",
        ],
      },
    ],
    faqs: [
      {
        question: "Wo fange ich mit der Digitalisierung an?",
        answer:
          "Der beste erste Schritt ist der Leistungsnachweis mit NFC oder QR. Wenig Aufwand, sichtbarer Nutzen, Grundlage für weitere Schritte. Danach zentrale Objektverwaltung, Einsatzplanung mit Vertretungslogik, schließlich Kalkulation und Rechnung.",
      },
      {
        question: "Wie lange dauert die Umstellung?",
        answer:
          "Für den ersten Schritt Leistungsnachweis: einige Wochen bis wenige Monate, je nach Anzahl Objekte und Kolonnen. Für den kompletten Umstieg auf ein integriertes System: sechs bis zwölf Monate, wenn schrittweise ausgebaut wird.",
      },
      {
        question: "Was kostet die Digitalisierung eines Reinigungsbetriebs?",
        answer:
          "Software wie Taskey wird typischerweise pro Nutzer und Monat abgerechnet, im Rahmen weniger Euro pro Reinigungskraft. Zusätzlich einmalige Kosten für Einführung und Einweisung. Der Return kommt über eingesparte Verwaltungszeit, weniger Reklamationen und bessere Marge.",
      },
      {
        question: "Braucht meine Reinigungskraft ein Smartphone?",
        answer:
          "Ja, entweder ein privates oder ein vom Betrieb gestelltes Gerät. Ein einfaches Android- oder iPhone-Gerät reicht aus. NFC-Fähigkeit ist Standard in aktuellen Smartphones. Vor der Einführung sollte geklärt sein, welche Geräte in der Belegschaft vorhanden sind.",
      },
      {
        question: "Was mache ich mit älteren Mitarbeitenden, die skeptisch sind?",
        answer:
          "Erfahrungsgemäß sind Reinigungskräfte weniger skeptisch als erwartet, wenn die Umstellung schrittweise erfolgt und die App echten Nutzen bringt. Weniger Papier, weniger Rückfragen, klare Aufgaben. Wichtig ist eine gute Einführung mit Zeit für Fragen.",
      },
      {
        question: "Wie hilft Taskey bei der Digitalisierung?",
        answer:
          "Taskey ist speziell für die Gebäudereinigung gebaut. Objektverwaltung, NFC-Leistungsnachweis, Einsatzplanung, Kalkulation und Rechnung in einem System. Der schrittweise Einstieg ist vorgesehen: erst ein Modul einführen, dann weitere Module aktivieren.",
      },
    ],
    related: [
      {
        href: "/software-gebaeudereinigung",
        label: "Software für Gebäudereinigung",
        description: "Die Lösung, mit der die Digitalisierung schrittweise geht.",
      },
      {
        href: "/leistungsnachweis-gebaeudereinigung",
        label: "Leistungsnachweis",
        description: "Der erste Digitalisierungsschritt für die meisten Betriebe.",
      },
      {
        href: "/loesungen/reinigungsobjekte-verwalten",
        label: "Reinigungsobjekte verwalten",
        description: "Der zweite Digitalisierungsschritt: zentrale Objektakte.",
      },
      {
        href: "/loesungen/reinigungskraefte-planen",
        label: "Reinigungskräfte planen",
        description: "Der dritte Digitalisierungsschritt: Einsatzplanung.",
      },
      {
        href: "/rechner/reinigungskosten",
        label: "Reinigungskosten-Rechner",
        description: "Der Kalkulationsschritt, kostenlos testbar.",
      },
    ],
  },
  en: {
    title: "Digitisation in commercial cleaning",
    eyebrow: "Guide · Digitisation",
    h1: "Digitisation in commercial cleaning —",
    h1Accent: "where to start, what pays off.",
    lead: "Digitisation sounds like a big project. In commercial cleaning it is easier when you start at the biggest pain point and build out step by step. This guide shows which steps pay off first and which pitfalls hit companies regularly.",
    breadcrumbs: [
      { name: "Home", url: "https://www.taskeyapp.com" },
      { name: "Solutions", url: "https://www.taskeyapp.com/loesungen" },
      { name: "Digitisation", url: `https://www.taskeyapp.com${path}` },
    ],
    sections: [
      {
        eyebrow: "Starting point",
        heading: "Why many companies stall on digitisation.",
        body: [
          "Many cleaning companies still run on Excel for site management, paper for proof of service, WhatsApp for substitutions and separate accounting software for invoicing. Each system works on its own; the handovers between them are the real source of errors and time loss.",
          "The classic mistake on entry: trying to switch everything at once. That overwhelms staff and account managers, creates resistance and often ends with a return to the old setup. Better to start at the biggest pain point.",
        ],
        bullets: [
          "Excel for site management",
          "Paper for proof of service",
          "WhatsApp for substitutions",
          "Isolated accounting",
          "Handovers between systems as error source",
        ],
      },
      {
        eyebrow: "Sequence",
        heading: "Where entry pays off first.",
        body: [
          "First step for most companies: proof of service. The cleaner confirms the visit by NFC or QR on site, the result lands automatically in the history. The company saves paper, clients get reliable proof, complaints are resolved with data instead of gut feel.",
          "Second step: central site management. Master data, contacts, keys, cleaning plan in one place. From here the cleaner is informed on site without the account manager needing to phone.",
          "Third step: dispatching with substitution logic. Sick calls no longer trigger phone rounds but are escalated automatically to floaters. From here the company sees economic effects, not just operational.",
          "Fourth step: quote, invoice and calculation in the same system. From here digitisation pays off in margin too.",
        ],
        bullets: [
          "Step 1: proof of service with NFC or QR",
          "Step 2: central site management",
          "Step 3: dispatching with substitution logic",
          "Step 4: quote, invoice, calculation integrated",
        ],
      },
      {
        eyebrow: "Effects",
        heading: "What digitisation delivers economically.",
        body: [
          "Measurable effects arrive in three places: reduced admin time, fewer complaints, better margin through defensible calculation. The first is felt immediately. Less paper, fewer questions, fewer phone substitutions.",
          "The second shows after two to three months. Proofs are reliable, complaints answered with data, clients happier. Contract extensions and referrals become easier.",
          "The third comes after building calculation in the system. New quotes are faster and more precise, margin per site becomes visible, price negotiations run with data. The company becomes not only more digital but more profitable.",
        ],
        bullets: [
          "Less admin time immediately",
          "Fewer complaints after two to three months",
          "Better margin after calculation build-out",
          "Happier clients and staff",
        ],
      },
      {
        eyebrow: "Pitfalls",
        heading: "What companies often get wrong.",
        body: [
          "First: switching everything at once. That overwhelms staff and company. Better to start step by step and live the first step cleanly before starting the second.",
          "Second: choosing the wrong tool. A generic project management solution does not reflect commercial cleaning reality. Sites, crews, keys, NFC proof need an industry solution.",
          "Third: no cleaner buy-in. Giving the app only to the account manager and leaving cleaners on paper loses most of the benefit. The app belongs in the cleaner's hand.",
          "Fourth: treating digitisation as a pure IT project. It is a change project where staff, account managers and leadership learn new flows. Without change management, the best software fails.",
        ],
        bullets: [
          "Do not switch everything at once",
          "Choose industry-specific solution",
          "Include cleaners in the app",
          "Take change management seriously",
        ],
      },
    ],
    faqs: [
      {
        question: "Where do I start with digitisation?",
        answer:
          "The best first step is proof of service with NFC or QR. Little effort, visible benefit, foundation for further steps. Then central site management, dispatching with substitution logic, finally calculation and invoicing.",
      },
      {
        question: "How long does the transition take?",
        answer:
          "For the first step, proof of service: a few weeks to a few months depending on number of sites and crews. For the full switch to an integrated system: six to twelve months when built out step by step.",
      },
      {
        question: "What does digitising a cleaning company cost?",
        answer:
          "Software like Taskey is typically billed per user per month, in the range of a few euros per cleaner. Plus one-time setup and training. The return comes via saved admin time, fewer complaints and better margin.",
      },
      {
        question: "Do cleaners need a smartphone?",
        answer:
          "Yes, either a private or company-provided device. A simple Android or iPhone suffices. NFC is standard in current smartphones. Before rollout, clarify which devices are available in the team.",
      },
      {
        question: "What about older staff who are skeptical?",
        answer:
          "Experience shows cleaners are less skeptical than expected when rollout is step by step and the app provides real benefit. Less paper, fewer questions, clear tasks. A good introduction with time for questions matters.",
      },
      {
        question: "How does Taskey help with digitisation?",
        answer:
          "Taskey is built specifically for commercial cleaning. Site management, NFC proof, dispatching, calculation and invoicing in one system. Step-by-step entry is designed in: introduce one module first, activate others later.",
      },
    ],
    related: [
      {
        href: "/software-gebaeudereinigung",
        label: "Cleaning company software",
        description: "The solution that supports step-by-step digitisation.",
      },
      {
        href: "/leistungsnachweis-gebaeudereinigung",
        label: "Proof of service",
        description: "The first digitisation step for most companies.",
      },
      {
        href: "/loesungen/reinigungsobjekte-verwalten",
        label: "Manage cleaning sites",
        description: "The second digitisation step: central site record.",
      },
      {
        href: "/loesungen/reinigungskraefte-planen",
        label: "Plan cleaning staff",
        description: "The third digitisation step: dispatching.",
      },
      {
        href: "/rechner/reinigungskosten",
        label: "Cleaning cost calculator",
        description: "The calculation step, free to try.",
      },
    ],
  },
  fr: {
    title: "Digitalisation en propreté",
    eyebrow: "Guide · Digitalisation",
    h1: "Digitalisation en propreté —",
    h1Accent: "par où commencer, ce qui rapporte.",
    lead: "La digitalisation sonne comme un grand projet. En propreté, elle est plus simple quand on commence par le plus grand point douloureux et qu'on construit étape par étape. Ce guide montre quelles étapes rapportent d'abord et quels pièges frappent régulièrement les entreprises.",
    breadcrumbs: [
      { name: "Accueil", url: "https://www.taskeyapp.com" },
      { name: "Solutions", url: "https://www.taskeyapp.com/loesungen" },
      { name: "Digitalisation", url: `https://www.taskeyapp.com${path}` },
    ],
    sections: [
      {
        eyebrow: "Point de départ",
        heading: "Pourquoi beaucoup d'entreprises bloquent sur la digitalisation.",
        body: [
          "De nombreuses entreprises tournent encore avec Excel pour la gestion des sites, papier pour les justificatifs, WhatsApp pour les remplacements et logiciel comptable isolé pour la facturation. Chaque système marche seul; les transitions entre eux sont la vraie source d'erreurs et de perte de temps.",
          "L'erreur classique à l'entrée: vouloir tout basculer en une fois. Cela dépasse le personnel et l'encadrement, crée de la résistance et finit souvent par un retour à l'ancien. Mieux vaut commencer par le plus grand point douloureux.",
        ],
        bullets: [
          "Excel pour gestion des sites",
          "Papier pour justificatifs",
          "WhatsApp pour remplacements",
          "Comptabilité isolée",
          "Transitions entre systèmes comme source d'erreur",
        ],
      },
      {
        eyebrow: "Séquence",
        heading: "Où l'entrée rapporte d'abord.",
        body: [
          "Première étape pour la plupart: le justificatif de prestation. L'agent confirme l'intervention par NFC ou QR sur site, le résultat atterrit automatiquement dans l'historique. L'entreprise économise du papier, les donneurs obtiennent des preuves fiables, les réclamations se résolvent avec des données.",
          "Deuxième étape: la gestion centrale des sites. Données maîtres, contacts, clés, plan dans un lieu. À partir de là, l'agent sur site est informé sans que l'encadrement téléphone.",
          "Troisième étape: la planification avec logique de remplacement. Les arrêts maladie ne déclenchent plus un tour d'appels mais sont escaladés automatiquement aux volants. À partir de là, l'entreprise voit des effets économiques, pas seulement opérationnels.",
          "Quatrième étape: devis, facture et calcul dans le même système. À partir de là, la digitalisation paie aussi en marge.",
        ],
        bullets: [
          "Étape 1: justificatif avec NFC ou QR",
          "Étape 2: gestion centrale des sites",
          "Étape 3: planification avec logique de remplacement",
          "Étape 4: devis, facture, calcul intégrés",
        ],
      },
      {
        eyebrow: "Effets",
        heading: "Ce que la digitalisation apporte économiquement.",
        body: [
          "Les effets mesurables arrivent à trois endroits: temps administratif réduit, moins de réclamations, meilleure marge par calcul défendable. Le premier se ressent immédiatement. Moins de papier, moins de questions, moins de remplacements téléphoniques.",
          "Le deuxième apparaît après deux à trois mois. Justificatifs fiables, réclamations résolues avec données, donneurs plus satisfaits. Prolongations et recommandations tournent plus facilement.",
          "Le troisième vient après la mise en place du calcul dans le système. Nouveaux devis plus rapides et précis, marge par site visible, négociations de prix avec données. L'entreprise devient non seulement plus digitale mais plus rentable.",
        ],
        bullets: [
          "Moins de temps administratif immédiatement",
          "Moins de réclamations après deux à trois mois",
          "Meilleure marge après mise en place du calcul",
          "Donneurs et personnel plus satisfaits",
        ],
      },
      {
        eyebrow: "Pièges",
        heading: "Ce que les entreprises font souvent de travers.",
        body: [
          "Un: tout basculer en une fois. Cela dépasse personnel et entreprise. Mieux vaut démarrer étape par étape et vivre proprement la première avant d'attaquer la deuxième.",
          "Deux: choisir le mauvais outil. Une solution générique de gestion de projet ne reflète pas la réalité propreté. Sites, équipes, clés, preuves NFC ont besoin d'une solution métier.",
          "Trois: pas d'adhésion des agents. Donner l'application seulement à l'encadrement et laisser les agents sur papier perd la plus grande partie du bénéfice. L'application appartient à la main de l'agent.",
          "Quatre: traiter la digitalisation comme projet IT pur. C'est un projet de changement où personnel, encadrement et direction apprennent de nouveaux flux. Sans conduite du changement, le meilleur logiciel échoue.",
        ],
        bullets: [
          "Ne pas tout basculer en une fois",
          "Choisir une solution métier",
          "Inclure les agents dans l'application",
          "Prendre la conduite du changement au sérieux",
        ],
      },
    ],
    faqs: [
      {
        question: "Par où commencer la digitalisation?",
        answer:
          "La meilleure première étape est le justificatif de prestation avec NFC ou QR. Peu d'effort, bénéfice visible, base pour les étapes suivantes. Ensuite gestion centrale, planification avec remplacement, enfin calcul et facturation.",
      },
      {
        question: "Combien de temps prend la bascule?",
        answer:
          "Pour la première étape justificatif: quelques semaines à quelques mois selon nombre de sites et équipes. Pour la bascule complète vers un système intégré: six à douze mois en construction étape par étape.",
      },
      {
        question: "Que coûte la digitalisation?",
        answer:
          "Un logiciel comme Taskey se facture typiquement par utilisateur par mois, dans la fourchette de quelques euros par agent. Plus des coûts uniques de mise en place et formation. Le retour vient via temps administratif économisé, moins de réclamations et meilleure marge.",
      },
      {
        question: "Les agents ont-ils besoin d'un smartphone?",
        answer:
          "Oui, soit personnel soit fourni par l'entreprise. Un simple Android ou iPhone suffit. NFC est standard dans les smartphones actuels. Avant déploiement, clarifier quels appareils sont disponibles dans l'équipe.",
      },
      {
        question: "Que faire des agents plus âgés sceptiques?",
        answer:
          "L'expérience montre que les agents sont moins sceptiques que prévu quand le déploiement est progressif et que l'application apporte un bénéfice réel. Moins de papier, moins de questions, tâches claires. Une bonne introduction avec temps pour questions compte.",
      },
      {
        question: "Comment Taskey aide-t-il à la digitalisation?",
        answer:
          "Taskey est construit spécifiquement pour la propreté. Gestion des sites, justificatif NFC, planification, calcul et facturation dans un système. L'entrée étape par étape est prévue: introduire un module d'abord, activer les autres ensuite.",
      },
    ],
    related: [
      {
        href: "/software-gebaeudereinigung",
        label: "Logiciel pour société de nettoyage",
        description: "La solution qui soutient la digitalisation étape par étape.",
      },
      {
        href: "/leistungsnachweis-gebaeudereinigung",
        label: "Justificatif de prestations",
        description: "La première étape de digitalisation pour la plupart.",
      },
      {
        href: "/loesungen/reinigungsobjekte-verwalten",
        label: "Gérer les sites",
        description: "La deuxième étape: fiche site centrale.",
      },
      {
        href: "/loesungen/reinigungskraefte-planen",
        label: "Planifier les agents",
        description: "La troisième étape: planification.",
      },
      {
        href: "/rechner/reinigungskosten",
        label: "Calculateur de coûts",
        description: "L'étape calcul, gratuite à tester.",
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
