import type { Metadata } from "next";
import LandingPageTemplate from "@/components/landing/LandingPageTemplate";
import { buildMetadata, pickLocale, type PageCopy, type Locale } from "@/lib/i18n-metadata";
import { NEWSLETTER_LABELS } from "@/lib/newsletter-labels";

const path = "/loesungen/springer-reinigung";

const NEWSLETTER_SOURCE_LABELS: Record<Locale, string> = {
  de: "Ratgeber Springer in der Reinigung",
  en: "Guide Floaters in cleaning",
  fr: "Guide Volants en propreté",
};

const COPY: PageCopy = {
  de: {
    title: "Springer in der Reinigung | Vertretung, Krankheit, Ausfall | Taskey",
    description:
      "Springer in der Gebäudereinigung sauber organisieren: wie viele braucht der Betrieb, wie werden sie eingesetzt, wie läuft die Vertretung bei Krankheit oder Urlaub. Ohne Ad-hoc-Krise.",
    ogTitle: "Springer in der Reinigung | Taskey",
    ogDescription:
      "Wie Springer und Vertretungen in der Reinigungsbranche funktionieren.",
    twitterTitle: "Springer in der Reinigung | Taskey",
    twitterDescription:
      "Vertretung bei Krankheit und Urlaub ohne Ad-hoc-Krise.",
  },
  en: {
    title: "Floaters in commercial cleaning | Substitution, sick, absence | Taskey",
    description:
      "Organise floaters in commercial cleaning cleanly: how many the company needs, how they are deployed, how substitution runs on sickness or vacation. Without ad-hoc crisis.",
    ogTitle: "Floaters in commercial cleaning | Taskey",
    ogDescription:
      "How floaters and substitutions work in the cleaning industry.",
    twitterTitle: "Floaters in commercial cleaning | Taskey",
    twitterDescription:
      "Substitution on sickness and vacation without ad-hoc crisis.",
  },
  fr: {
    title: "Volants en propreté | Remplacement, maladie, absence | Taskey",
    description:
      "Organisez proprement les volants en nettoyage: combien il en faut, comment ils sont déployés, comment tourne le remplacement en maladie ou congés. Sans crise ad-hoc.",
    ogTitle: "Volants en propreté | Taskey",
    ogDescription:
      "Comment volants et remplacements fonctionnent dans la branche nettoyage.",
    twitterTitle: "Volants en propreté | Taskey",
    twitterDescription:
      "Remplacement en maladie et congés sans crise ad-hoc.",
  },
};

const OG_ALT: Record<"de" | "en" | "fr", string> = {
  de: "Springer in der Reinigung mit Taskey",
  en: "Floaters in commercial cleaning with Taskey",
  fr: "Volants en propreté avec Taskey",
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
    title: "Springer in der Reinigung",
    eyebrow: "Ratgeber · Springer und Vertretung",
    h1: "Springer in der Reinigung —",
    h1Accent: "Reserve für den Ernstfall.",
    lead: "In der Gebäudereinigung fällt regelmäßig jemand aus. Krank, Urlaub, Familientermin. Wer keinen sauberen Springer-Prozess hat, führt jeden Ausfall als Krise. Wer Reserve fest eingeplant hat, führt jeden Ausfall als Standardvorgang.",
    answer: "Ein Springer-Prozess funktioniert, wenn Sie 8 bis 12 Prozent der Einsatzstunden als Reserve fest planen, Springer-Profile mit Qualifikationen und Verfügbarkeit hinterlegen und Ausfälle mit einem Klick auf eine passende Reserve umleiten.",
    breadcrumbs: [
      { name: "Home", url: "https://www.taskeyapp.com" },
      { name: "Lösungen", url: "https://www.taskeyapp.com/loesungen" },
      { name: "Springer in der Reinigung", url: `https://www.taskeyapp.com${path}` },
    ],
    sections: [
      {
        eyebrow: "Grundlage",
        heading: "Warum Reinigungsbetriebe Springer brauchen.",
        body: [
          "Reinigungseinsätze sind an feste Zeitfenster gebunden. Ein Büro muss morgens vor Arbeitsbeginn sauber sein, ein Restaurant nachts nach Schließung, eine Praxis vor der ersten Sprechstunde. Verschiebt sich der Einsatz um Stunden, ist die Reinigung faktisch ausgefallen.",
          "Die durchschnittliche Krankheitsquote in der Gebäudereinigung liegt in Deutschland bei rund 6 bis 8 Prozent, in manchen Regionen und Segmenten deutlich höher. Dazu Urlaub, gesetzliche Ausfallzeiten und Fluktuation. Ohne Reserve entstehen an mindestens jedem zweiten Tag Vertretungssituationen.",
        ],
        bullets: [
          "Zeitfenster erlauben keine Verschiebung",
          "Krankheitsquote 6 bis 8 Prozent im Schnitt",
          "Urlaub und Feiertage zusätzlich",
          "Fluktuation über die Zeit",
          "Vertretungssituationen fast täglich",
        ],
      },
      {
        eyebrow: "Bedarf",
        heading: "Wie viele Springer braucht der Betrieb?",
        body: [
          "Als Faustregel gilt: ein Springer pro drei bis fünf Kolonnen, je nach Krankheitsquote und Region. Bei zehn Kolonnen sind das zwei bis drei Springer. In Segmenten mit hohem Ausfall wie Klinikreinigung oder Ferienregionen mit saisonalen Spitzen ist das Verhältnis enger.",
          "Alternativ oder ergänzend werden Ausfälle über Aushilfen, Zeitarbeit oder Subunternehmer abgedeckt. Diese sind flexibler, aber teurer pro Stunde. Der eigene Springer ist günstiger pro Stunde, kostet aber auch dann, wenn kein Einsatz nötig ist. Die Mischung entscheidet über die Wirtschaftlichkeit.",
        ],
        bullets: [
          "Ein Springer pro drei bis fünf Kolonnen als Faustregel",
          "Höheres Verhältnis bei hoher Ausfallquote",
          "Eigene Springer günstiger, aber Fixkosten",
          "Aushilfen und Sub teurer, aber flexibler",
          "Mischung aus beiden meist am wirtschaftlichsten",
        ],
      },
      {
        eyebrow: "Prozess",
        heading: "Wie der Vertretungsprozess sauber läuft.",
        body: [
          "Der klassische Prozess ohne System: Krankmeldung um 5 Uhr per Chat oder SMS, Objektleitung wacht auf, ruft in der Kolonne herum, sucht Vertretung, wartet auf Zusagen. Bis alles steht, sind Objekte schon in Verzug.",
          "Der saubere Prozess mit digitalem System: Krankmeldung geht in die App, betroffene Einsätze werden automatisch als offen markiert und die Springer-Gruppe wird benachrichtigt. Verfügbare Springer sehen die freien Aufträge in ihrer Nähe und übernehmen mit einem Klick. Die Objektleitung wird informiert und kann bei Bedarf einschreiten, muss aber nicht die Nachtschicht übernehmen.",
        ],
        bullets: [
          "Krankmeldung digital, mit Zeitstempel",
          "Betroffene Einsätze automatisch als offen markiert",
          "Springer-Gruppe wird benachrichtigt",
          "Übernahme per Klick, ohne Rückruf",
          "Objektleitung informiert, nicht in Verantwortung",
          "Auftraggeber muss nichts bemerken",
        ],
      },
      {
        eyebrow: "Wirtschaft",
        heading: "Wirtschaftlichkeit von Springern.",
        body: [
          "Springer kosten Sollstunden, auch wenn kein Einsatz nötig ist. Diese Kosten müssen im Stundenverrechnungssatz und in der Kalkulation abgebildet sein, sonst geht die Marge verloren. Realistisch werden Springer-Kosten pauschal auf alle produktiven Stunden umgelegt, häufig als Aufschlag von 5 bis 10 Prozent auf den Stundensatz.",
          "Die Alternative sind Aushilfen und Subunternehmer, die je nach Stundensatz 20 bis 40 Prozent teurer sein können als eigene Mitarbeitende. Bei sporadischen Ausfällen ist das wirtschaftlicher als der eigene Springer, bei regelmäßigen Ausfällen ist der Springer günstiger.",
        ],
        bullets: [
          "Springer kosten Sollstunden, unabhängig vom Einsatz",
          "Umlage auf produktive Stunden nötig",
          "Aushilfen und Sub 20 bis 40 Prozent teurer pro Stunde",
          "Mischung entscheidet über Wirtschaftlichkeit",
        ],
      },
    ],
    faqs: [
      {
        question: "Wie viele Springer braucht ein Reinigungsbetrieb?",
        answer:
          "Als Faustregel ein Springer pro drei bis fünf Kolonnen. Bei hoher Krankheitsquote, saisonalen Spitzen oder in Klinik und Pflege ein engeres Verhältnis. Bei zehn Kolonnen sind das häufig zwei bis drei Springer plus Ergänzung durch Aushilfen.",
      },
      {
        question: "Wie plane ich Springer?",
        answer:
          "Am besten in einer Springer-Gruppe mit Verfügbarkeitsfenstern und regionaler Zuordnung. Digital können Springer freie Aufträge in ihrer Nähe sehen und mit einem Klick übernehmen. Ohne System läuft die Vertretung über die Objektleitung, mit entsprechendem Aufwand.",
      },
      {
        question: "Was kostet ein eigener Springer?",
        answer:
          "Die Kosten entsprechen einem regulären Vollzeit- oder Teilzeit-Mitarbeitenden, sind aber unabhängig vom tatsächlichen Einsatz. Umgelegt auf die produktiven Stunden ergibt sich ein Aufschlag von häufig 5 bis 10 Prozent auf den Stundenverrechnungssatz.",
      },
      {
        question: "Sind Aushilfen oder Subunternehmer eine Alternative?",
        answer:
          "Ja, besonders bei unregelmäßigen Ausfällen. Aushilfen und Subunternehmer sind pro Stunde 20 bis 40 Prozent teurer als eigene Mitarbeitende, aber sie kosten nur bei tatsächlichem Einsatz. Bei regelmäßigen Ausfällen ist der eigene Springer meist günstiger.",
      },
      {
        question: "Wie meldet sich ein Springer für einen Einsatz?",
        answer:
          "In einem digitalen System sieht der Springer offene Aufträge in seiner Nähe und übernimmt per Klick. Ohne System läuft es über Rückruf, WhatsApp oder Objektleitungs-Anfrage. Der digitale Weg ist deutlich schneller und weniger fehleranfällig.",
      },
      {
        question: "Wie hilft Taskey bei der Springer-Organisation?",
        answer:
          "Taskey führt Springer als eigene Rolle in der Personalstruktur. Krankmeldungen werden automatisch an die Springer-Gruppe eskaliert, verfügbare Springer sehen offene Aufträge in ihrer Region, Übernahmen laufen per Klick. Objektleitung wird informiert, muss aber keine Anrufrunde starten.",
      },
    ],
    related: [
      {
        href: "/loesungen/reinigungskraefte-planen",
        label: "Reinigungskräfte planen",
        description: "Personalplanung, in die Springer eingebettet sind.",
      },
      {
        href: "/rechner/personalbedarf",
        label: "Personalbedarf-Rechner",
        description: "Grundbedarf pro Objekt, ergänzt um Springer-Reserve.",
      },
      {
        href: "/rechner/stundenverrechnungssatz",
        label: "Stundenverrechnungssatz",
        description: "Wie Springer-Kosten in den Vollkostensatz einfließen.",
      },
      {
        href: "/einsatzplanung-reinigung",
        label: "Einsatzplanung Reinigung",
        description: "Wie Kolonnen und Springer gemeinsam disponiert werden.",
      },
      {
        href: "/software-gebaeudereinigung",
        label: "Software für Gebäudereinigung",
        description: "Springer-Logik als Teil der Gesamtlösung.",
      },
    ],
  },
  en: {
    title: "Floaters in commercial cleaning",
    eyebrow: "Guide · Floaters and substitution",
    h1: "Floaters in commercial cleaning —",
    h1Accent: "reserve for the real world.",
    lead: "In commercial cleaning, someone drops out regularly. Sick, vacation, family. Anyone without a clean floater process runs every absence as a crisis. Anyone with reserve built in runs every absence as a standard event.",
    answer: "A floater process works when you plan 8 to 12 percent of your operational hours as reserve, maintain floater profiles with qualification and availability and reroute absences to a matching reserve with one click.",
    breadcrumbs: [
      { name: "Home", url: "https://www.taskeyapp.com" },
      { name: "Solutions", url: "https://www.taskeyapp.com/loesungen" },
      { name: "Floaters in cleaning", url: `https://www.taskeyapp.com${path}` },
    ],
    sections: [
      {
        eyebrow: "Foundation",
        heading: "Why cleaning companies need floaters.",
        body: [
          "Cleaning shifts are tied to fixed time windows. An office must be clean before work starts, a restaurant after closing, a practice before the first consultation. Shifting the shift by hours is effectively a missed shift.",
          "Average sick rates in commercial cleaning in Germany sit around 6 to 8 percent, in some regions and segments significantly higher. Plus vacation, statutory absences and turnover. Without reserve, substitution situations arise at least every other day.",
        ],
        bullets: [
          "Time windows do not shift",
          "Sick rate 6 to 8 percent on average",
          "Vacation and holidays on top",
          "Turnover over time",
          "Substitution needs almost daily",
        ],
      },
      {
        eyebrow: "Need",
        heading: "How many floaters does the company need?",
        body: [
          "Rule of thumb: one floater per three to five crews, depending on sick rate and region. With ten crews, that means two to three floaters. In segments with high absence such as hospital cleaning or seasonal regions, the ratio tightens.",
          "Alternatively or additionally, absences are covered by temps, agency staff or subcontractors. They are more flexible but more expensive per hour. Own floaters are cheaper per hour but cost even when no visit is required. The mix decides economics.",
        ],
        bullets: [
          "One floater per three to five crews as rule of thumb",
          "Tighter ratio with higher absence",
          "Own floaters cheaper but fixed cost",
          "Temps and subs more expensive but flexible",
          "Mix usually most economic",
        ],
      },
      {
        eyebrow: "Process",
        heading: "How the substitution process runs cleanly.",
        body: [
          "Classic process without a system: sick call at 5 a.m. by chat or SMS, account manager wakes up, calls around the crew, hunts substitutes, waits for confirmations. By the time it stands, sites are already delayed.",
          "Clean process with digital system: sick call goes into the app, affected shifts are automatically marked open, the floater group is notified. Available floaters see open shifts nearby and take them with one click. The account manager is informed and can step in if needed but does not have to run the night shift.",
        ],
        bullets: [
          "Sick call digital with timestamp",
          "Affected shifts automatically marked open",
          "Floater group notified",
          "Take over by click, no callback",
          "Account manager informed, not responsible",
          "Client does not notice",
        ],
      },
      {
        eyebrow: "Economics",
        heading: "The economics of floaters.",
        body: [
          "Floaters cost target hours whether needed or not. These costs must appear in the hourly billing rate and in calculation, or the margin bleeds. Realistically, floater costs are allocated across all productive hours, often as 5 to 10 percent markup on the hourly rate.",
          "The alternative are temps and subcontractors, which can be 20 to 40 percent more expensive per hour than own staff. For sporadic absences that is more economic than own floaters, for regular absences own floaters win.",
        ],
        bullets: [
          "Floaters cost target hours regardless of use",
          "Allocation across productive hours required",
          "Temps and subs 20 to 40 percent more expensive per hour",
          "Mix decides economics",
        ],
      },
    ],
    faqs: [
      {
        question: "How many floaters does a cleaning company need?",
        answer:
          "Rule of thumb: one floater per three to five crews. With high sick rates, seasonal peaks or hospital and care, tighter. With ten crews, often two to three floaters plus additional temps.",
      },
      {
        question: "How do I plan floaters?",
        answer:
          "Best in a floater group with availability windows and regional assignment. Digitally, floaters see open shifts nearby and take by click. Without a system, substitution runs via the account manager with corresponding effort.",
      },
      {
        question: "What does an own floater cost?",
        answer:
          "Costs match a regular full-time or part-time employee but are independent of actual use. Allocated across productive hours, this often adds 5 to 10 percent to the hourly billing rate.",
      },
      {
        question: "Are temps or subcontractors an alternative?",
        answer:
          "Yes, especially for irregular absences. Temps and subcontractors are 20 to 40 percent more expensive per hour than own staff but only cost when used. For regular absences, own floaters are usually cheaper.",
      },
      {
        question: "How does a floater sign up for a shift?",
        answer:
          "In a digital system, the floater sees open shifts nearby and takes by click. Without a system, it runs via callback, WhatsApp or account manager request. Digital is significantly faster and less error-prone.",
      },
      {
        question: "How does Taskey help with floater organisation?",
        answer:
          "Taskey runs floaters as their own role in the staff structure. Sick calls are automatically escalated to the floater group, available floaters see open shifts in their region, take by click. Account manager informed but not obliged to run a phone round.",
      },
    ],
    related: [
      {
        href: "/loesungen/reinigungskraefte-planen",
        label: "Plan cleaning staff",
        description: "Staff planning with floaters embedded.",
      },
      {
        href: "/rechner/personalbedarf",
        label: "Staff requirement calculator",
        description: "Base need per site, complemented by floater reserve.",
      },
      {
        href: "/rechner/stundenverrechnungssatz",
        label: "Hourly billing rate",
        description: "How floater costs flow into the full-cost rate.",
      },
      {
        href: "/einsatzplanung-reinigung",
        label: "Cleaning dispatching",
        description: "How crews and floaters are dispatched together.",
      },
      {
        href: "/software-gebaeudereinigung",
        label: "Cleaning company software",
        description: "Floater logic as part of the overall solution.",
      },
    ],
  },
  fr: {
    title: "Volants en propreté",
    eyebrow: "Guide · Volants et remplacements",
    h1: "Volants en propreté —",
    h1Accent: "réserve pour le monde réel.",
    lead: "En propreté, quelqu'un manque régulièrement. Maladie, congés, urgence familiale. Qui n'a pas de processus volants propre vit chaque absence comme une crise. Qui a de la réserve intégrée vit chaque absence comme un standard.",
    answer: "Un processus volants fonctionne quand vous planifiez 8 à 12 pour cent des heures d’exploitation en réserve, tenez des profils volants avec qualification et disponibilité, et redirigez les absences vers une réserve compatible en un clic.",
    breadcrumbs: [
      { name: "Accueil", url: "https://www.taskeyapp.com" },
      { name: "Solutions", url: "https://www.taskeyapp.com/loesungen" },
      { name: "Volants en propreté", url: `https://www.taskeyapp.com${path}` },
    ],
    sections: [
      {
        eyebrow: "Base",
        heading: "Pourquoi les sociétés de nettoyage ont besoin de volants.",
        body: [
          "Les interventions de nettoyage sont liées à des créneaux fixes. Un bureau doit être propre avant le début du travail, un restaurant après fermeture, un cabinet avant la première consultation. Décaler l'intervention de plusieurs heures équivaut à l'avoir manquée.",
          "Le taux moyen de maladie en propreté en Allemagne se situe autour de 6 à 8 pour cent, dans certaines régions et segments nettement plus. Plus congés, absences légales et rotation. Sans réserve, des situations de remplacement surgissent au moins un jour sur deux.",
        ],
        bullets: [
          "Les créneaux ne se décalent pas",
          "Taux de maladie 6 à 8 pour cent en moyenne",
          "Congés et fériés en plus",
          "Rotation dans le temps",
          "Besoin de remplacement quasi quotidien",
        ],
      },
      {
        eyebrow: "Besoin",
        heading: "Combien de volants pour l'entreprise?",
        body: [
          "Règle d'or: un volant pour trois à cinq équipes, selon taux de maladie et région. Avec dix équipes, cela fait deux à trois volants. Dans les segments à absentéisme élevé comme clinique ou saison touristique, ratio plus serré.",
          "En alternative ou en complément, les absences sont couvertes par intérimaires, personnel d'agence ou sous-traitants. Plus flexibles mais plus chers à l'heure. Un volant en interne est moins cher à l'heure mais coûte aussi sans intervention. Le mix décide de l'économie.",
        ],
        bullets: [
          "Un volant pour trois à cinq équipes en règle d'or",
          "Ratio plus serré en cas d'absentéisme élevé",
          "Volants internes moins chers mais coût fixe",
          "Intérim et sous plus chers mais flexibles",
          "Le mix généralement le plus économique",
        ],
      },
      {
        eyebrow: "Processus",
        heading: "Comment le processus de remplacement tourne proprement.",
        body: [
          "Processus classique sans système: arrêt maladie à 5 heures par chat ou SMS, encadrement se réveille, appelle dans l'équipe, cherche remplacement, attend confirmations. Le temps que tout soit en place, les sites sont déjà en retard.",
          "Processus propre avec système digital: l'arrêt maladie entre dans l'application, les interventions concernées sont marquées ouvertes automatiquement, le groupe volants est notifié. Les volants disponibles voient les interventions libres à proximité et prennent en un clic. L'encadrement est informé et peut intervenir si besoin sans devoir gérer la nuit.",
        ],
        bullets: [
          "Arrêt maladie digital, horodaté",
          "Interventions concernées marquées ouvertes automatiquement",
          "Groupe volants notifié",
          "Reprise en un clic, sans rappel",
          "Encadrement informé, non responsable",
          "Le donneur d'ordre ne remarque rien",
        ],
      },
      {
        eyebrow: "Économie",
        heading: "L'économie des volants.",
        body: [
          "Les volants coûtent des heures cibles qu'ils soient utilisés ou non. Ces coûts doivent apparaître dans le taux horaire et dans le calcul, sinon la marge saigne. Réalistement, les coûts volants sont répartis sur toutes les heures productives, souvent en majoration de 5 à 10 pour cent sur le taux horaire.",
          "L'alternative sont intérimaires et sous-traitants, qui peuvent être 20 à 40 pour cent plus chers à l'heure que le personnel interne. Pour absences sporadiques c'est plus économique qu'un volant interne, pour absences régulières l'interne gagne.",
        ],
        bullets: [
          "Volants coûtent des heures cibles indépendamment de l'usage",
          "Répartition sur heures productives nécessaire",
          "Intérim et sous 20 à 40 pour cent plus chers à l'heure",
          "Le mix décide de l'économie",
        ],
      },
    ],
    faqs: [
      {
        question: "Combien de volants pour une société de nettoyage?",
        answer:
          "Règle d'or: un volant pour trois à cinq équipes. Avec absentéisme élevé, saison ou clinique, plus serré. Avec dix équipes, souvent deux à trois volants plus intérimaires en complément.",
      },
      {
        question: "Comment planifier les volants?",
        answer:
          "Idéalement en groupe volants avec fenêtres de disponibilité et affectation régionale. En digital, les volants voient les interventions libres à proximité et prennent en un clic. Sans système, remplacement via l'encadrement avec effort correspondant.",
      },
      {
        question: "Que coûte un volant interne?",
        answer:
          "Les coûts correspondent à un employé temps plein ou partiel régulier, indépendamment de l'usage. Répartis sur les heures productives, cela ajoute souvent 5 à 10 pour cent au taux horaire.",
      },
      {
        question: "Intérim ou sous-traitants comme alternative?",
        answer:
          "Oui, surtout pour absences irrégulières. Intérimaires et sous-traitants sont 20 à 40 pour cent plus chers à l'heure que le personnel interne mais ne coûtent qu'en usage. Pour absences régulières, les volants internes sont généralement moins chers.",
      },
      {
        question: "Comment un volant s'inscrit-il pour une intervention?",
        answer:
          "Dans un système digital, le volant voit les interventions libres à proximité et prend en un clic. Sans système, cela passe par rappel, WhatsApp ou demande de l'encadrement. Le digital est nettement plus rapide et moins sujet aux erreurs.",
      },
      {
        question: "Comment Taskey aide-t-il à l'organisation des volants?",
        answer:
          "Taskey gère les volants comme rôle propre dans la structure du personnel. Les arrêts maladie sont escaladés automatiquement au groupe volants, les volants disponibles voient les interventions libres dans leur région, reprise en un clic. Encadrement informé sans devoir démarrer un tour d'appels.",
      },
    ],
    related: [
      {
        href: "/loesungen/reinigungskraefte-planen",
        label: "Planifier les agents",
        description: "Planification personnel où les volants sont intégrés.",
      },
      {
        href: "/rechner/personalbedarf",
        label: "Calculateur d'effectif",
        description: "Besoin de base par site, complété par réserve volants.",
      },
      {
        href: "/rechner/stundenverrechnungssatz",
        label: "Taux horaire",
        description: "Comment les coûts volants entrent dans le taux complet.",
      },
      {
        href: "/einsatzplanung-reinigung",
        label: "Planification nettoyage",
        description: "Comment équipes et volants sont planifiés ensemble.",
      },
      {
        href: "/software-gebaeudereinigung",
        label: "Logiciel pour société de nettoyage",
        description: "Logique volants comme partie de la solution globale.",
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
