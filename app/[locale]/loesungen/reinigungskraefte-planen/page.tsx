import type { Metadata } from "next";
import LandingPageTemplate from "@/components/landing/LandingPageTemplate";
import { buildMetadata, pickLocale, type PageCopy, type Locale } from "@/lib/i18n-metadata";
import { NEWSLETTER_LABELS } from "@/lib/newsletter-labels";

const path = "/loesungen/reinigungskraefte-planen";

const NEWSLETTER_SOURCE_LABELS: Record<Locale, string> = {
  de: "Ratgeber Reinigungskräfte planen",
  en: "Guide Plan cleaning staff",
  fr: "Guide Planifier les agents",
};

const COPY: PageCopy = {
  de: {
    title: "Reinigungskräfte planen | Einsätze, Kolonnen, Vertretung | Taskey",
    description:
      "Reinigungskräfte zuverlässig planen: Einsätze pro Objekt, Kolonnen, Vertretungen und Krankenreserve. Die Belegschaft trägt die Objekte, ohne dass die Objektleitung ständig telefoniert. Ohne Excel-Chaos.",
    ogTitle: "Reinigungskräfte planen | Taskey",
    ogDescription:
      "Einsätze, Kolonnen und Vertretungen zuverlässig planen. Ohne Excel-Chaos.",
    twitterTitle: "Reinigungskräfte planen | Taskey",
    twitterDescription:
      "Einsätze, Kolonnen und Vertretungen zuverlässig planen.",
  },
  en: {
    title: "Plan cleaning staff | Shifts, crews, substitution | Taskey",
    description:
      "Plan cleaning staff reliably: shifts per site, crews, substitutions and sick reserve. The team carries the sites without the account manager on the phone constantly. Without spreadsheet chaos.",
    ogTitle: "Plan cleaning staff | Taskey",
    ogDescription:
      "Shifts, crews and substitutions planned reliably. Without spreadsheet chaos.",
    twitterTitle: "Plan cleaning staff | Taskey",
    twitterDescription:
      "Shifts, crews and substitutions planned reliably.",
  },
  fr: {
    title: "Planifier les agents de nettoyage | Interventions, équipes, remplacements | Taskey",
    description:
      "Planifiez les agents de nettoyage de manière fiable: interventions par site, équipes, remplacements et réserve maladie. L'équipe porte les sites sans que l'encadrement soit au téléphone en continu. Sans chaos Excel.",
    ogTitle: "Planifier les agents de nettoyage | Taskey",
    ogDescription:
      "Interventions, équipes et remplacements planifiés de manière fiable. Sans chaos Excel.",
    twitterTitle: "Planifier les agents de nettoyage | Taskey",
    twitterDescription:
      "Interventions, équipes et remplacements planifiés.",
  },
};

const OG_ALT: Record<"de" | "en" | "fr", string> = {
  de: "Reinigungskräfte planen mit Taskey",
  en: "Plan cleaning staff with Taskey",
  fr: "Planifier les agents de nettoyage avec Taskey",
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
    title: "Reinigungskräfte planen",
    eyebrow: "Ratgeber · Personalplanung",
    h1: "Reinigungskräfte planen —",
    h1Accent: "Einsätze, Kolonnen, Vertretung.",
    lead: "Personalplanung ist in der Gebäudereinigung der operativ heikelste Bereich. Wechselnde Schichten, mehrere Objekte pro Tag, kranke Mitarbeitende und Objektleitungen, die Vertretungen aus dem Hut zaubern müssen. Ein sauberer Plan spart Nerven, Fahrtkilometer und Reklamationen.",
    breadcrumbs: [
      { name: "Home", url: "https://www.taskeyapp.com" },
      { name: "Lösungen", url: "https://www.taskeyapp.com/loesungen" },
      { name: "Reinigungskräfte planen", url: `https://www.taskeyapp.com${path}` },
    ],
    sections: [
      {
        eyebrow: "Grundlage",
        heading: "Was Personalplanung in der Reinigung besonders macht.",
        body: [
          "Anders als in vielen Branchen sind Reinigungseinsätze zeit- und ortsgebunden zugleich. Ein Büro wird morgens vor acht gereinigt, ein Restaurant nachts nach Schließung, ein Treppenhaus einmal pro Woche zu einer festen Zeit. Wer nur nach Kapazität plant, aber die Zeitfenster ignoriert, produziert unbezahlbare Fahrten und unzufriedene Auftraggeber.",
          "Dazu kommt eine strukturell hohe Ausfallquote. Zwischen Urlaub, Krankheit und Fluktuation sind in der Praxis 10 bis 15 Prozent der Sollstunden nicht verfügbar. Ohne eingeplante Reserve entsteht Chaos beim ersten Ausfall.",
        ],
        bullets: [
          "Zeit- und ortsgebundene Einsätze",
          "Feste Zeitfenster pro Objekt",
          "Fahrtstrukturen zwischen Objekten",
          "Strukturelle Ausfallquote 10 bis 15 Prozent",
          "Kolonnen mit Vorarbeiter oder alleine",
        ],
      },
      {
        eyebrow: "Prinzipien",
        heading: "Die Grundprinzipien einer belastbaren Planung.",
        body: [
          "Der erste Grundsatz: Plane in Touren, nicht in Einzeleinsätzen. Wer eine Reinigungskraft einem Objekt zuordnet, verschwendet Zeit zwischen den Terminen. Wer sie einer Tour von drei bis fünf Objekten zuordnet, nutzt die produktive Zeit besser und reduziert Fahrten.",
          "Der zweite Grundsatz: Plane feste Zuordnungen, wo möglich. Objekte laufen mit weniger Reklamationen, wenn dieselbe Reinigungskraft sie regelmäßig betreut. Der Auftraggeber erlebt Verlässlichkeit, die Reinigungskraft kennt die Besonderheiten des Objekts.",
          "Der dritte Grundsatz: Plane Reserve fest ein. Ein Springer pro drei bis fünf Kolonnen ist branchenüblich. Ohne Reserve wird jeder Krankheitstag zur Ad-hoc-Krise.",
        ],
        bullets: [
          "In Touren planen, nicht in Einzeleinsätzen",
          "Feste Objektzuordnung wo möglich",
          "Springer und Reserven fest einplanen",
          "Fahrtwege berücksichtigen",
          "Zeitfenster pro Objekt respektieren",
        ],
      },
      {
        eyebrow: "Vertretung",
        heading: "Was passiert, wenn jemand ausfällt.",
        body: [
          "Der klassische Ausfall passiert morgens vor 6 Uhr, wenn die Objektleitung noch schläft. Ohne System läuft dann die Krankmeldung per Chat oder Telefon rein, die Objektleitung wacht auf, sucht Vertretung, ruft Personen an, bittet um Übernahme, wartet auf Zusagen. Bis alles steht, ist Vormittag.",
          "Mit einem digitalen Vertretungssystem läuft das anders: Die Krankmeldung geht direkt in die App, die Aufträge des Tages werden automatisch als offen markiert, Springer sehen freie Aufträge in ihrer Nähe und übernehmen mit einem Klick. Die Objektleitung wird informiert, nicht in Anspruch genommen.",
        ],
        bullets: [
          "Krankmeldung digital, mit Zeitstempel",
          "Betroffene Einsätze automatisch als offen markiert",
          "Springer sehen freie Aufträge in ihrer Nähe",
          "Übernahme per Klick, ohne Rückruf",
          "Objektleitung informiert, nicht belastet",
        ],
      },
      {
        eyebrow: "Digital",
        heading: "Wie Taskey Personalplanung führt.",
        body: [
          "In Taskey ist die Personalplanung an die Objektakte gekoppelt. Jedes Objekt hat feste Zeiten, Frequenzen und einen Personalbedarf, der aus Fläche und Reinigungsart abgeleitet wird. Dieser Bedarf wird gegen die verfügbare Belegschaft geplant, mit Blick auf Zeitfenster, Fahrten und Springer.",
          "Änderungen sind für alle Beteiligten sofort sichtbar: Reinigungskraft in der App, Objektleitung im Dashboard, Zentrale in der Übersicht. Bei Ausfall greift die Springer-Logik, ohne dass die Objektleitung telefonieren muss.",
        ],
        bullets: [
          "Personalbedarf aus Fläche und Frequenz",
          "Planung gegen verfügbare Belegschaft",
          "Feste Objektzuordnung mit Springer-Reserve",
          "Änderungen live für alle Betroffenen",
          "Vertretungslogik ohne Objektleitung-Rundruf",
        ],
      },
    ],
    faqs: [
      {
        question: "Wie plane ich Reinigungskräfte für mehrere Objekte?",
        answer:
          "Am besten in Touren, nicht in Einzeleinsätzen. Drei bis fünf Objekte pro Reinigungskraft pro Schicht sind in der Unterhaltsreinigung üblich, abhängig von Größe und Fahrtwegen. Die Tour berücksichtigt Zeitfenster, Fahrt und Materialbedarf.",
      },
      {
        question: "Wie viele Springer brauche ich?",
        answer:
          "Als Faustregel: ein Springer pro drei bis fünf Kolonnen. Bei hoher Krankheitsquote oder saisonalen Spitzen mehr. Springer werden entweder fest angestellt oder über Subunternehmer und Aushilfen abgedeckt.",
      },
      {
        question: "Wie plane ich bei Krankheit oder Urlaub?",
        answer:
          "Idealerweise mit einer digitalen Springer-Logik. Krankmeldung geht in die App, betroffene Einsätze werden als offen markiert, Springer in der Nähe sehen und übernehmen. Ohne digitales System führt die Objektleitung eine Anrufrunde und verliert einen halben Vormittag.",
      },
      {
        question: "Kann ich Reinigungskräfte fest einem Objekt zuordnen?",
        answer:
          "Ja, und es ist meist die beste Lösung. Feste Zuordnung reduziert Reklamationen, weil dieselbe Kraft die Objekt-Besonderheiten kennt. Springer und Vertretungen decken die Ausfälle ab. Für saisonale oder projektbezogene Einsätze ist rotierende Planung sinnvoll.",
      },
      {
        question: "Wie viele produktive Stunden pro Vollzeitkraft plane ich?",
        answer:
          "Rund 135 produktive Stunden pro Monat bei 39 Stunden Wochenarbeitszeit, nach Abzug von Urlaub, Krankheit, Feiertag und unproduktiver Zeit. Der Personalbedarf-Rechner nutzt diesen Wert als Startpunkt.",
      },
      {
        question: "Wie hilft Taskey bei der Personalplanung?",
        answer:
          "Taskey koppelt Personalplanung an die Objektakte: Zeitfenster, Frequenzen und Personalbedarf pro Objekt gegen die verfügbare Belegschaft. Änderungen live für alle Beteiligten, Vertretungen über Springer-Logik, ohne dass die Objektleitung telefoniert.",
      },
    ],
    related: [
      {
        href: "/rechner/personalbedarf",
        label: "Personalbedarf-Rechner",
        description: "Aus Fläche und Frequenz die benötigte Kapazität pro Objekt.",
      },
      {
        href: "/loesungen/springer-reinigung",
        label: "Springer in der Reinigung",
        description: "Vertretungslogik für Krankheit, Urlaub und Ausfälle.",
      },
      {
        href: "/einsatzplanung-reinigung",
        label: "Einsatzplanung Reinigung",
        description: "Kolonnen, Touren und Zeitfenster in einem System.",
      },
      {
        href: "/loesungen/reinigungsobjekte-verwalten",
        label: "Reinigungsobjekte verwalten",
        description: "Objektakte als Grundlage jeder Personalplanung.",
      },
      {
        href: "/rechner/stundenverrechnungssatz",
        label: "Stundenverrechnungssatz",
        description: "Der Vollkostensatz pro produktiver Stunde.",
      },
    ],
  },
  en: {
    title: "Plan cleaning staff",
    eyebrow: "Guide · Staff planning",
    h1: "Plan cleaning staff —",
    h1Accent: "shifts, crews, substitution.",
    lead: "Staff planning is the most sensitive operational area in commercial cleaning. Shifting schedules, multiple sites per day, sick staff and account managers who need to conjure substitutes from a hat. A clean plan saves nerves, mileage and complaints.",
    breadcrumbs: [
      { name: "Home", url: "https://www.taskeyapp.com" },
      { name: "Solutions", url: "https://www.taskeyapp.com/loesungen" },
      { name: "Plan cleaning staff", url: `https://www.taskeyapp.com${path}` },
    ],
    sections: [
      {
        eyebrow: "Foundation",
        heading: "What makes cleaning staff planning particular.",
        body: [
          "Unlike many industries, cleaning shifts are both time- and place-bound. An office is cleaned before 8, a restaurant after closing, a staircase once a week at a fixed time. Planning purely by capacity while ignoring time slots produces expensive travel and unhappy clients.",
          "On top comes a structurally high absence rate. Between vacation, sickness and turnover, 10 to 15 percent of target hours are not available in practice. Without built-in reserve, chaos starts on the first absence.",
        ],
        bullets: [
          "Time- and place-bound shifts",
          "Fixed time slots per site",
          "Travel structure between sites",
          "Structural absence rate 10 to 15 percent",
          "Crews with lead or working alone",
        ],
      },
      {
        eyebrow: "Principles",
        heading: "The core principles of solid planning.",
        body: [
          "First principle: plan in tours, not in single visits. Assigning a cleaner to a site wastes time between visits. Assigning them to a tour of three to five sites uses productive time better and reduces travel.",
          "Second principle: plan fixed assignments where possible. Sites run with fewer complaints when the same cleaner attends regularly. The client experiences reliability, the cleaner knows the site's specifics.",
          "Third principle: plan reserve. One floater per three to five crews is industry standard. Without reserve, every sick day becomes an ad-hoc crisis.",
        ],
        bullets: [
          "Plan in tours, not in single visits",
          "Fixed site assignment where possible",
          "Floaters and reserves planned in",
          "Consider travel routes",
          "Respect time slots per site",
        ],
      },
      {
        eyebrow: "Substitution",
        heading: "What happens when someone is out.",
        body: [
          "The classic absence hits before 6 a.m. when the account manager is still asleep. Without a system, the sick call runs via chat or phone, the account manager wakes up, hunts for a substitute, calls people, asks for cover, waits for confirmations. By the time it all stands, it is late morning.",
          "With a digital substitution system, it runs differently: the sick call goes straight into the app, the day's shifts are automatically marked open, floaters see open shifts nearby and take them with one click. The account manager is informed, not consumed.",
        ],
        bullets: [
          "Digital sick call with timestamp",
          "Affected shifts automatically marked open",
          "Floaters see open shifts nearby",
          "Take over by click, no callback",
          "Account manager informed, not burdened",
        ],
      },
      {
        eyebrow: "Digital",
        heading: "How Taskey runs staff planning.",
        body: [
          "In Taskey, staff planning is coupled to the site record. Each site has fixed times, frequencies and a staff requirement derived from area and cleaning type. This requirement is planned against available staff, considering time slots, travel and floaters.",
          "Changes are instantly visible to everyone involved: cleaner in the app, account manager in the dashboard, back office in the overview. On absence, the floater logic kicks in without account manager phone rounds.",
        ],
        bullets: [
          "Staff requirement from area and frequency",
          "Planning against available staff",
          "Fixed site assignment with floater reserve",
          "Changes live to all affected",
          "Substitution logic without account manager phone round",
        ],
      },
    ],
    faqs: [
      {
        question: "How do I plan cleaners across multiple sites?",
        answer:
          "Best in tours, not in single visits. Three to five sites per cleaner per shift is common in maintenance cleaning, depending on size and travel. The tour considers time slots, travel and materials.",
      },
      {
        question: "How many floaters do I need?",
        answer:
          "Rule of thumb: one floater per three to five crews. Higher with high sick rates or seasonal peaks. Floaters are either permanently employed or covered via subcontractors and temps.",
      },
      {
        question: "How do I plan for sickness or vacation?",
        answer:
          "Ideally with digital floater logic. Sick call in the app, affected shifts marked open, nearby floaters see and take them. Without a digital system, the account manager runs a phone round and loses half a morning.",
      },
      {
        question: "Can I fix cleaners to a site?",
        answer:
          "Yes, and it is usually the best solution. Fixed assignment reduces complaints because the same person knows the site's specifics. Floaters and substitutes cover absences. For seasonal or project work, rotating planning makes sense.",
      },
      {
        question: "How many productive hours per FTE do I plan?",
        answer:
          "Around 135 productive hours per month at 39 weekly hours, after vacation, sickness, holidays and unproductive time. The staff requirement calculator uses this as a starting value.",
      },
      {
        question: "How does Taskey help with staff planning?",
        answer:
          "Taskey couples staff planning to the site record: time slots, frequencies and staff requirement per site against available staff. Changes live to all involved, substitution via floater logic, without account manager phone rounds.",
      },
    ],
    related: [
      {
        href: "/rechner/personalbedarf",
        label: "Staff requirement calculator",
        description: "Required capacity per site from area and frequency.",
      },
      {
        href: "/loesungen/springer-reinigung",
        label: "Floaters in cleaning",
        description: "Substitution logic for sickness, vacation and absences.",
      },
      {
        href: "/einsatzplanung-reinigung",
        label: "Cleaning dispatching",
        description: "Crews, tours and time slots in one system.",
      },
      {
        href: "/loesungen/reinigungsobjekte-verwalten",
        label: "Manage cleaning sites",
        description: "Site record as foundation for staff planning.",
      },
      {
        href: "/rechner/stundenverrechnungssatz",
        label: "Hourly billing rate",
        description: "The full-cost rate per productive hour.",
      },
    ],
  },
  fr: {
    title: "Planifier les agents de nettoyage",
    eyebrow: "Guide · Planification personnel",
    h1: "Planifier les agents de nettoyage —",
    h1Accent: "interventions, équipes, remplacements.",
    lead: "La planification du personnel est le domaine opérationnel le plus sensible en propreté. Horaires changeants, plusieurs sites par jour, agents malades et encadrement qui doit sortir des remplaçants de son chapeau. Un plan propre économise nerfs, kilomètres et réclamations.",
    breadcrumbs: [
      { name: "Accueil", url: "https://www.taskeyapp.com" },
      { name: "Solutions", url: "https://www.taskeyapp.com/loesungen" },
      { name: "Planifier les agents", url: `https://www.taskeyapp.com${path}` },
    ],
    sections: [
      {
        eyebrow: "Base",
        heading: "Ce qui rend la planification en propreté particulière.",
        body: [
          "Contrairement à d'autres branches, les interventions de nettoyage sont à la fois liées au temps et au lieu. Un bureau se nettoie avant 8 heures, un restaurant après fermeture, une cage d'escalier une fois par semaine à une heure fixe. Planifier uniquement par capacité en ignorant les créneaux produit trajets coûteux et donneurs mécontents.",
          "S'y ajoute un taux d'absence structurellement élevé. Entre congés, maladie et rotation, 10 à 15 pour cent des heures cibles sont indisponibles en pratique. Sans réserve intégrée, le chaos démarre à la première absence.",
        ],
        bullets: [
          "Interventions liées au temps et au lieu",
          "Créneaux fixes par site",
          "Structure des trajets entre sites",
          "Taux d'absence structurel 10 à 15 pour cent",
          "Équipes avec chef ou en solo",
        ],
      },
      {
        eyebrow: "Principes",
        heading: "Les principes clés d'une planification solide.",
        body: [
          "Premier principe: planifier en tournées, pas en interventions isolées. Affecter un agent à un site gaspille le temps entre interventions. L'affecter à une tournée de trois à cinq sites utilise mieux le temps productif et réduit les trajets.",
          "Deuxième principe: planifier des affectations fixes quand c'est possible. Les sites tournent avec moins de réclamations quand le même agent s'en occupe régulièrement. Le donneur d'ordre vit une fiabilité, l'agent connaît les particularités.",
          "Troisième principe: prévoir la réserve. Un volant pour trois à cinq équipes est courant. Sans réserve, chaque jour de maladie devient une crise ad-hoc.",
        ],
        bullets: [
          "Planifier en tournées, pas en interventions isolées",
          "Affectation fixe au site quand possible",
          "Volants et réserves planifiés",
          "Considérer les trajets",
          "Respecter les créneaux par site",
        ],
      },
      {
        eyebrow: "Remplacement",
        heading: "Ce qui se passe quand quelqu'un est absent.",
        body: [
          "L'absence classique arrive avant 6 heures quand l'encadrement dort encore. Sans système, l'arrêt maladie arrive par chat ou téléphone, l'encadrement se réveille, cherche un remplaçant, appelle des personnes, demande la reprise, attend les confirmations. Le temps que tout soit en place, il est fin de matinée.",
          "Avec un système digital, cela tourne autrement: l'arrêt maladie va directement dans l'application, les interventions du jour sont automatiquement marquées ouvertes, les volants voient les interventions libres à proximité et les prennent en un clic. L'encadrement est informé, pas mobilisé.",
        ],
        bullets: [
          "Arrêt maladie digital, horodaté",
          "Interventions concernées marquées ouvertes automatiquement",
          "Volants voient les interventions libres à proximité",
          "Reprise en un clic, sans rappel",
          "Encadrement informé, non chargé",
        ],
      },
      {
        eyebrow: "Digital",
        heading: "Comment Taskey pilote la planification.",
        body: [
          "Dans Taskey, la planification du personnel est couplée à la fiche site. Chaque site a horaires fixes, fréquences et un besoin en personnel déduit de la surface et du type de prestation. Ce besoin est planifié contre l'effectif disponible, en tenant compte de créneaux, trajets et volants.",
          "Les changements sont visibles instantanément par tous les concernés: agent dans l'application, encadrement dans le tableau de bord, back-office dans la vue. En cas d'absence, la logique volant s'enclenche sans que l'encadrement téléphone.",
        ],
        bullets: [
          "Besoin en personnel depuis surface et fréquence",
          "Planification contre l'effectif disponible",
          "Affectation fixe avec réserve volants",
          "Changements en direct pour tous les concernés",
          "Logique de remplacement sans tour d'appels",
        ],
      },
    ],
    faqs: [
      {
        question: "Comment planifier des agents pour plusieurs sites?",
        answer:
          "Idéalement en tournées, pas en interventions isolées. Trois à cinq sites par agent par vacation est courant en entretien courant, selon taille et trajets. La tournée tient compte des créneaux, trajets et matériel.",
      },
      {
        question: "Combien de volants me faut-il?",
        answer:
          "Règle d'or: un volant pour trois à cinq équipes. Plus en cas de taux de maladie élevé ou de pics saisonniers. Les volants sont soit permanents, soit couverts par sous-traitants et intérimaires.",
      },
      {
        question: "Comment planifier en cas de maladie ou congé?",
        answer:
          "Idéalement avec une logique volant digitale. L'arrêt entre dans l'application, les interventions concernées deviennent ouvertes, les volants proches voient et prennent. Sans système, l'encadrement enchaîne les appels et perd une demi-matinée.",
      },
      {
        question: "Puis-je fixer des agents à un site?",
        answer:
          "Oui, et c'est souvent la meilleure solution. L'affectation fixe réduit les réclamations parce que la même personne connaît les particularités. Volants et remplaçants couvrent les absences. Pour saisonnier ou projet, planification tournante logique.",
      },
      {
        question: "Combien d'heures productives par ETP planifier?",
        answer:
          "Environ 135 heures productives par mois à 39 heures par semaine, après congés, maladie, fériés et temps improductif. Le calculateur d'effectif utilise cette valeur comme point de départ.",
      },
      {
        question: "Comment Taskey aide-t-il à la planification?",
        answer:
          "Taskey couple la planification à la fiche site: créneaux, fréquences et besoin par site contre l'effectif disponible. Changements en direct pour tous, remplacement par logique volant, sans tour d'appels de l'encadrement.",
      },
    ],
    related: [
      {
        href: "/rechner/personalbedarf",
        label: "Calculateur d'effectif",
        description: "Capacité requise par site depuis surface et fréquence.",
      },
      {
        href: "/loesungen/springer-reinigung",
        label: "Volants en nettoyage",
        description: "Logique de remplacement pour maladie, congés et absences.",
      },
      {
        href: "/einsatzplanung-reinigung",
        label: "Planification nettoyage",
        description: "Équipes, tournées et créneaux dans un système.",
      },
      {
        href: "/loesungen/reinigungsobjekte-verwalten",
        label: "Gérer les sites",
        description: "Fiche site comme base de toute planification.",
      },
      {
        href: "/rechner/stundenverrechnungssatz",
        label: "Taux horaire",
        description: "Le taux en coût complet par heure productive.",
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
