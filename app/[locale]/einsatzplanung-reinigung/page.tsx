import type { Metadata } from "next";
import LandingPageTemplate from "@/components/landing/LandingPageTemplate";
import { buildMetadata, pickLocale, type PageCopy } from "@/lib/i18n-metadata";

const path = "/einsatzplanung-reinigung";

const META_COPY: PageCopy = {
  de: {
    title:
      "Einsatzplanung Reinigung | Schichten, Touren, Vertretungen | Taskey",
    description:
      "Einsatzplanung für Reinigungsbetriebe: Schichten, Touren, Krankmeldungen und Vertretungen in Minuten umplanen. Live-Status pro Mitarbeiter und Objekt.",
  },
  en: {
    title:
      "Cleaning Workforce Scheduling | Shifts, Routes, Cover | Taskey",
    description:
      "Scheduling for cleaning companies: rearrange shifts, routes, sick leaves and cover in minutes. Live status per employee and site.",
  },
  fr: {
    title:
      "Planification du nettoyage | Équipes, tournées, remplacements | Taskey",
    description:
      "Planification pour entreprises de nettoyage : réorganisez équipes, tournées, arrêts maladie et remplacements en quelques minutes. Statut en direct par agent et par site.",
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return buildMetadata({
    copyByLocale: META_COPY,
    locale: pickLocale(locale),
    path,
    type: "article",
    image: "/opengraph-image",
  });
}

const CONTENT = {
  de: {
    title: "Einsatzplanung Reinigung",
    eyebrow: "Pillar · Einsatzplanung",
    h1: "Einsatzplanung für Reinigungsbetriebe —",
    h1Accent: "Schichten, Touren, Vertretungen.",
    lead: "Wer in der Gebäudereinigung mit Excel oder WhatsApp plant, verliert Zeit, Marge und Nerven. Taskey gibt Ihnen einen Live-Plan über alle Objekte, Schichten und Touren – mit automatischen Vertretungsvorschlägen, Mobil-Sync und integrierter Zeiterfassung.",
    breadcrumbHome: "Home",
    breadcrumbCurrent: "Einsatzplanung Reinigung",
    sec1Eyebrow: "Problem",
    sec1Heading: "Excel, WhatsApp und Anrufe sind keine Einsatzplanung.",
    sec1Intro:
      "Die meisten Reinigungsbetriebe planen ihre Mitarbeitenden in einer Tabelle, kommunizieren Änderungen per WhatsApp und merken bei Krankheit erst dann, dass jemand fehlt, wenn der Auftraggeber sich beschwert.",
    sec1Body1:
      "Das Problem dabei: Niemand hat eine einzige verlässliche Quelle. Die Disposition pflegt Excel, der Vorarbeiter hat eine andere Version, das Team hat einen WhatsApp-Stand von gestern und der Auftraggeber bekommt – wenn überhaupt – einen Wochenplan per Mail. Spätestens bei der ersten Krankmeldung läuft alles auseinander.",
    sec1Body2:
      "Hinzu kommt: Excel rechnet keine Fahrtzeiten, kein Mindestpausen, keine Doppelbesetzungen und keine Überstunden. Was auf dem Plan steht, hat oft wenig mit dem zu tun, was am Ende des Monats abgerechnet werden kann.",
    sec2Eyebrow: "Lösung",
    sec2Heading: "Ein Plan. Live. Für alle.",
    sec2Intro:
      "Taskey ist Ihre zentrale Disposition. Sie planen pro Objekt, pro Schicht oder pro Tour – die App spielt die jeweils relevanten Einsätze automatisch auf das Handy jedes Mitarbeiters.",
    sec2Sub1Heading: "Drag-and-drop pro Woche oder Tag",
    sec2Sub1Body:
      "Mitarbeiter, Objekt, Zeitfenster – per Maus oder Touch zuweisen. Konflikte (Doppelbelegung, Mindestpause unterschritten, Mitarbeiter krank) werden sofort markiert.",
    sec2Sub2Heading: "Wiederkehrende Touren",
    sec2Sub2Body:
      "Ein Reinigungsvertrag mit 3 × pro Woche, immer dienstags und donnerstags zwischen 6 und 9 Uhr? Einmal anlegen, monatelang automatisch planen. Änderungen bei Feiertagen oder Urlaub werden automatisch vorgeschlagen.",
    sec2Sub3Heading: "Vertretungs-Engine",
    sec2Sub3Body:
      "Krankmeldung um 5:00 Uhr? Taskey schlägt automatisch verfügbare Mitarbeiter vor, basierend auf Qualifikation, Wohnort und aktuellem Auslastungsgrad. Mit einem Klick anpingen, Vertretung bestätigen – fertig.",
    sec2Sub4Heading: "Live-Status der Einsätze",
    sec2Sub4Body:
      "Auf einem Blick: Wer ist eingecheckt, wer fehlt, wo läuft etwas aus dem Ruder? Ampelfarben pro Objekt und Mitarbeiter – inklusive automatischer Push-Benachrichtigung bei verspätetem Check-in.",
    sec3Eyebrow: "Integration",
    sec3Heading: "Verbunden mit Zeiterfassung, Abrechnung und Auftraggeber.",
    sec3Body1:
      "Die Einsatzplanung in Taskey ist keine Insel. Aus jedem geplanten Einsatz wird automatisch eine Soll-Zeit, gegen die die Ist-Zeit über NFC abgeglichen wird. Abweichungen sehen Sie sofort – inklusive Marge pro Objekt.",
    sec3Body2:
      "Wenn der Auftraggeber-Zugang (Taskey Share) aktiviert ist, sieht der Kunde nur seine eigenen Objekte und Einsätze – mit Live-Status, Nachweisen und Beanstandungs-Funktion. Das spart Anrufe und schafft Vertrauen.",
    sec3Bullet1: "Soll/Ist-Vergleich pro Objekt und Mitarbeiter",
    sec3Bullet2: "Marge in Echtzeit pro Auftrag",
    sec3Bullet3: "Auftraggeber-Zugang mit Live-Plan",
    sec3Bullet4: "Automatische Stundenzettel und DATEV-Export",
    sec3Bullet5: "Mobile-First: jeder Mitarbeiter sieht nur seine eigenen Einsätze",
    sec3Bullet6: "Mehrsprachig – DE/TR/RU/PL/EN/FR",
    sec4Eyebrow: "Was Inhaber davon haben",
    sec4Heading: "Weniger Anrufe, höhere Marge, ruhigeres Wochenende.",
    sec4Body1:
      "Inhaber, die von Excel auf Taskey wechseln, berichten typischerweise: 60–80 % weniger Telefonate pro Woche, weil Mitarbeitende ihren Einsatzplan auf dem Handy sehen und automatisch Push-Erinnerungen bekommen.",
    sec4Body2: `Zwischen 5 und 15 % höhere Marge pro Objekt, weil Stunden nicht mehr „verschwinden“, Pausen korrekt erfasst werden und Über-/Unterbesetzungen sofort sichtbar sind.`,
    sec4Body3:
      "Und – das hört man besonders oft – das Wochenende gehört wieder der Familie statt Stundenzetteln.",
    faq1Q: "Kann ich auch mehrere Kolonnen mit unterschiedlichen Tarifen planen?",
    faq1A:
      "Ja. Sie hinterlegen pro Mitarbeiter Qualifikation, Tarif und Verfügbarkeit. Die Planung berücksichtigt diese Faktoren automatisch und schlägt nur passende Personen vor.",
    faq2Q: "Wie kommen meine Mitarbeitenden an den aktuellen Plan?",
    faq2A:
      "Jeder Mitarbeitende hat die Taskey-App auf dem Handy und sieht nur seine eigenen Einsätze. Bei Änderungen kommt automatisch eine Push-Benachrichtigung. WhatsApp-Spam entfällt.",
    faq3Q: "Funktioniert das auch für 1-Mann-Betriebe oder erst ab einer bestimmten Größe?",
    faq3A:
      "Taskey lohnt sich ab dem ersten festen Mitarbeitenden. Auch Soloselbstständige nutzen die Planung als zentrale Übersicht für Touren, Auftraggeber und Termine.",
    faq4Q: "Wie schnell kann ich einen kompletten Plan auf Taskey umstellen?",
    faq4A:
      "Mit unserem Done-for-You Setup importieren wir Ihre Objekte, Mitarbeitenden und Schichten in 48 Stunden. Sie müssen keinen Plan abtippen.",
    faq5Q: "Gibt es eine Ansicht für Auftraggeber?",
    faq5A:
      "Ja, optional. Mit Taskey Share bekommt jeder Auftraggeber einen eigenen Login mit Live-Status der Einsätze für seine Objekte – ohne dass er andere Kunden sieht.",
    faq6Q: "Wie geht Taskey mit kurzfristigen Krankmeldungen um?",
    faq6A:
      "Die Krankmeldung wird im Chat oder über die App erfasst. Taskey schlägt automatisch verfügbare Vertretungen vor, sortiert nach Qualifikation und Nähe zum Objekt. Sie pingen mit einem Klick an.",
    rel1Label: "Software für Gebäudereinigung",
    rel1Desc: "All-in-One Branchensoftware: Einsatzplanung, NFC-Nachweis, Zeiterfassung, Angebote, Rechnungen, Live-Margen.",
    rel2Label: "Zeiterfassung Gebäudereinigung",
    rel2Desc: "Wie die geplante Soll-Zeit zur dokumentierten Ist-Zeit wird.",
    rel3Label: "Software für kleine Reinigungsfirmen",
    rel3Desc: "Auch ab 1 Mitarbeiter sinnvoll – nicht nur für Großbetriebe.",
    rel4Label: "Unterhaltsreinigung",
    rel4Desc: "Wiederkehrende Touren sauber geplant – Woche für Woche.",
  },
  en: {
    title: "Cleaning Workforce Scheduling",
    eyebrow: "Pillar · Workforce Scheduling",
    h1: "Workforce scheduling for cleaning companies —",
    h1Accent: "shifts, routes, replacements.",
    lead: "Anyone planning a building cleaning operation in Excel or WhatsApp loses time, margin and nerves. Taskey gives you a live plan across every site, shift and route – with automatic replacement suggestions, mobile sync and built-in time tracking.",
    breadcrumbHome: "Home",
    breadcrumbCurrent: "Cleaning Workforce Scheduling",
    sec1Eyebrow: "Problem",
    sec1Heading: "Excel, WhatsApp and phone calls are not scheduling.",
    sec1Intro:
      "Most cleaning companies plan their workforce in a spreadsheet, push changes through WhatsApp, and only notice someone is missing once the client complains.",
    sec1Body1:
      "The real problem: nobody has a single trusted source. Dispatch maintains Excel, the foreman has a different version, the team has yesterday’s WhatsApp status, and the client gets – at best – a weekly plan by email. By the first sick-call, everything falls apart.",
    sec1Body2:
      "On top of that: Excel doesn’t calculate travel times, minimum breaks, double-bookings or overtime. What ends up on the plan often has little to do with what can actually be invoiced at the end of the month.",
    sec2Eyebrow: "Solution",
    sec2Heading: "One plan. Live. For everyone.",
    sec2Intro:
      "Taskey is your central dispatch. You plan per site, per shift or per route – the app automatically pushes each relevant assignment to every staff member’s phone.",
    sec2Sub1Heading: "Drag-and-drop per week or day",
    sec2Sub1Body:
      "Staff, site, time window – assigned by mouse or touch. Conflicts (double-booking, minimum break violated, employee on sick leave) are flagged instantly.",
    sec2Sub2Heading: "Recurring routes",
    sec2Sub2Body:
      "A cleaning contract 3× per week, every Tuesday and Thursday between 6 and 9 am? Set it up once, schedule it automatically for months. Changes for public holidays or vacation are suggested automatically.",
    sec2Sub3Heading: "Replacement engine",
    sec2Sub3Body:
      "Sick call at 5:00 am? Taskey automatically suggests available staff based on qualification, home address and current workload. Ping with one click, confirm the replacement – done.",
    sec2Sub4Heading: "Live status of assignments",
    sec2Sub4Body:
      "At a glance: who has checked in, who is missing, where is something running off track? Traffic-light colours per site and per employee – including automatic push notification for late check-in.",
    sec3Eyebrow: "Integration",
    sec3Heading: "Connected to time tracking, invoicing and clients.",
    sec3Body1:
      "Scheduling in Taskey is not an island. Every planned assignment automatically becomes a target time, against which the actual time is matched via NFC. You see deviations immediately – including margin per site.",
    sec3Body2:
      "When client access (Taskey Share) is enabled, your client only sees their own sites and assignments – with live status, proof of service and a complaints function. That saves calls and builds trust.",
    sec3Bullet1: "Target/actual comparison per site and employee",
    sec3Bullet2: "Margin in real time per job",
    sec3Bullet3: "Client access with live plan",
    sec3Bullet4: "Automatic timesheets and DATEV export",
    sec3Bullet5: "Mobile-first: each employee sees only their own assignments",
    sec3Bullet6: "Multilingual – DE/TR/RU/PL/EN/FR",
    sec4Eyebrow: "What owners get out of it",
    sec4Heading: "Fewer calls, higher margin, calmer weekends.",
    sec4Body1:
      "Owners who switch from Excel to Taskey typically report: 60–80 % fewer phone calls per week, because staff see their schedule on their phone and receive automatic push reminders.",
    sec4Body2: `Between 5 and 15 % higher margin per site, because hours no longer “disappear”, breaks are recorded correctly and over- or under-staffing is visible immediately.`,
    sec4Body3:
      "And – this is what we hear most often – the weekend belongs to the family again, not to timesheets.",
    faq1Q: "Can I also plan several crews with different pay rates?",
    faq1A:
      "Yes. You store qualification, pay rate and availability per employee. The scheduling automatically takes these factors into account and only suggests suitable people.",
    faq2Q: "How do my staff get the current plan?",
    faq2A:
      "Every employee has the Taskey app on their phone and only sees their own assignments. Changes trigger an automatic push notification. WhatsApp spam is gone.",
    faq3Q: "Does this work for one-person operations or only from a certain size?",
    faq3A:
      "Taskey is worth it from the first permanent employee onwards. Sole traders also use the scheduling as a central overview for routes, clients and appointments.",
    faq4Q: "How quickly can I move a complete plan to Taskey?",
    faq4A:
      "With our Done-for-You setup, we import your sites, staff and shifts within 48 hours. You don’t have to retype a single plan.",
    faq5Q: "Is there a view for clients?",
    faq5A:
      "Yes, optional. With Taskey Share every client gets their own login with live status of assignments for their sites – without seeing other customers.",
    faq6Q: "How does Taskey handle short-notice sick calls?",
    faq6A:
      "The sick call is recorded via chat or app. Taskey automatically suggests available replacements, sorted by qualification and proximity to the site. You ping them with a single click.",
    rel1Label: "Software for Building Cleaning",
    rel1Desc: "All-in-one industry software: scheduling, NFC proof of service, time tracking, quotes, invoices, live margins.",
    rel2Label: "Time Tracking for Building Cleaning",
    rel2Desc: "How a planned target time becomes a documented actual time.",
    rel3Label: "Software for Small Cleaning Companies",
    rel3Desc: "Already worthwhile from one employee onwards – not just for large operations.",
    rel4Label: "Maintenance Cleaning",
    rel4Desc: "Recurring routes planned cleanly – week after week.",
  },
  fr: {
    title: "Planification des interventions de nettoyage",
    eyebrow: "Pillar · Planification",
    h1: "Planification pour les entreprises de nettoyage —",
    h1Accent: "équipes, tournées, remplacements.",
    lead: "Planifier le nettoyage de bâtiments dans Excel ou WhatsApp fait perdre du temps, de la marge et de l’énergie. Taskey vous donne un plan en direct sur l’ensemble des sites, équipes et tournées – avec suggestions de remplacement automatiques, synchronisation mobile et pointage intégré.",
    breadcrumbHome: "Accueil",
    breadcrumbCurrent: "Planification des interventions de nettoyage",
    sec1Eyebrow: "Problème",
    sec1Heading: "Excel, WhatsApp et les appels ne sont pas de la planification.",
    sec1Intro:
      "La plupart des entreprises de nettoyage planifient leurs équipes dans un tableur, communiquent les changements par WhatsApp et ne remarquent une absence que lorsque le client se plaint.",
    sec1Body1:
      "Le vrai problème : personne n’a de source fiable unique. Le dispatch tient Excel, le chef d’équipe a une autre version, les agents ont un état WhatsApp d’hier et le client reçoit – au mieux – un planning hebdomadaire par e-mail. Au premier arrêt maladie, tout part en vrille.",
    sec1Body2:
      "S’y ajoute : Excel ne calcule ni les temps de trajet, ni les pauses minimales, ni les doublons d’affectation, ni les heures supplémentaires. Ce qui figure sur le planning a souvent peu à voir avec ce qui pourra réellement être facturé en fin de mois.",
    sec2Eyebrow: "Solution",
    sec2Heading: "Un plan. En direct. Pour tous.",
    sec2Intro:
      "Taskey est votre dispatch central. Vous planifiez par site, par équipe ou par tournée – l’application pousse automatiquement chaque intervention pertinente sur le téléphone de chaque agent.",
    sec2Sub1Heading: "Glisser-déposer par semaine ou par jour",
    sec2Sub1Body:
      "Agent, site, créneau – à attribuer à la souris ou au toucher. Les conflits (double affectation, pause minimale non respectée, agent en arrêt) sont signalés immédiatement.",
    sec2Sub2Heading: "Tournées récurrentes",
    sec2Sub2Body:
      "Un contrat de nettoyage 3× par semaine, chaque mardi et jeudi entre 6 h et 9 h ? À configurer une seule fois, à planifier automatiquement pendant des mois. Les ajustements lors de jours fériés ou de congés sont proposés automatiquement.",
    sec2Sub3Heading: "Moteur de remplacement",
    sec2Sub3Body:
      "Arrêt maladie à 5 h ? Taskey propose automatiquement les agents disponibles selon la qualification, le domicile et la charge de travail actuelle. Notification en un clic, remplacement confirmé – terminé.",
    sec2Sub4Heading: "État en direct des interventions",
    sec2Sub4Body:
      "D’un coup d’œil : qui est pointé, qui manque, où ça dérape ? Code couleur par site et par agent – avec notification push automatique en cas de pointage tardif.",
    sec3Eyebrow: "Intégration",
    sec3Heading: "Connecté au pointage, à la facturation et aux donneurs d’ordre.",
    sec3Body1:
      "La planification dans Taskey n’est pas un îlot. Chaque intervention planifiée devient automatiquement un temps prévu, comparé au temps réel via NFC. Vous voyez immédiatement les écarts – marge par site comprise.",
    sec3Body2:
      "Quand l’accès donneur d’ordre (Taskey Share) est activé, le client ne voit que ses propres sites et interventions – avec état en direct, justificatifs et fonction de réclamation. Cela évite des appels et crée de la confiance.",
    sec3Bullet1: "Comparatif prévu/réel par site et par agent",
    sec3Bullet2: "Marge en temps réel par contrat",
    sec3Bullet3: "Accès donneur d’ordre avec planning en direct",
    sec3Bullet4: "Feuilles d’heures automatiques et export DATEV",
    sec3Bullet5: "Mobile-first : chaque agent ne voit que ses propres interventions",
    sec3Bullet6: "Multilingue – DE/TR/RU/PL/EN/FR",
    sec4Eyebrow: "Ce que les dirigeants en retirent",
    sec4Heading: "Moins d’appels, plus de marge, des week-ends plus calmes.",
    sec4Body1:
      "Les dirigeants qui passent d’Excel à Taskey rapportent typiquement : 60 à 80 % d’appels en moins par semaine, parce que les agents voient leur planning sur le téléphone et reçoivent des rappels push automatiques.",
    sec4Body2: `Entre 5 et 15 % de marge en plus par site, parce que les heures ne « disparaissent » plus, que les pauses sont correctement enregistrées et que les sur- ou sous-effectifs sont immédiatement visibles.`,
    sec4Body3:
      "Et – on l’entend particulièrement souvent – le week-end appartient à nouveau à la famille, pas aux feuilles d’heures.",
    faq1Q: "Puis-je aussi planifier plusieurs équipes avec différents tarifs ?",
    faq1A:
      "Oui. Vous enregistrez par agent la qualification, le tarif et la disponibilité. La planification tient compte automatiquement de ces critères et ne propose que des personnes adaptées.",
    faq2Q: "Comment mes agents reçoivent-ils le planning à jour ?",
    faq2A:
      "Chaque agent a l’application Taskey sur son téléphone et ne voit que ses propres interventions. Les changements déclenchent une notification push automatique. Le spam WhatsApp disparaît.",
    faq3Q: "Cela fonctionne-t-il aussi pour des structures à 1 personne ou seulement à partir d’une certaine taille ?",
    faq3A:
      "Taskey est pertinent dès le premier salarié permanent. Les indépendants l’utilisent aussi comme vue d’ensemble centrale pour tournées, clients et rendez-vous.",
    faq4Q: "À quelle vitesse puis-je basculer tout un planning sur Taskey ?",
    faq4A:
      "Avec notre installation Done-for-You, nous importons vos sites, agents et plannings en 48 heures. Vous n’avez aucun plan à ressaisir.",
    faq5Q: "Existe-t-il une vue pour les donneurs d’ordre ?",
    faq5A:
      "Oui, en option. Avec Taskey Share, chaque donneur d’ordre obtient son propre identifiant avec l’état en direct des interventions sur ses sites – sans voir les autres clients.",
    faq6Q: "Comment Taskey gère-t-il les arrêts maladie de dernière minute ?",
    faq6A:
      "L’arrêt maladie est enregistré dans le chat ou via l’application. Taskey propose automatiquement les remplaçants disponibles, triés par qualification et proximité du site. Vous les notifiez en un clic.",
    rel1Label: "Logiciel pour le nettoyage de bâtiments",
    rel1Desc: "Logiciel métier tout-en-un : planification, justificatif NFC, pointage, devis, factures, marges en direct.",
    rel2Label: "Pointage Nettoyage de bâtiments",
    rel2Desc: "Comment le temps prévu devient un temps réel documenté.",
    rel3Label: "Logiciel pour petites entreprises de nettoyage",
    rel3Desc: "Pertinent dès 1 salarié – pas réservé aux grandes structures.",
    rel4Label: "Nettoyage d’entretien",
    rel4Desc: "Tournées récurrentes planifiées proprement – semaine après semaine.",
  },
} as const;

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const c = CONTENT[pickLocale(locale)];
  return (
    <LandingPageTemplate
      path={path}
      title={c.title}
      eyebrow={c.eyebrow}
      h1={c.h1}
      h1Accent={c.h1Accent}
      lead={c.lead}
      breadcrumbs={[
        { name: c.breadcrumbHome, url: "https://www.taskeyapp.com" },
        { name: c.breadcrumbCurrent, url: `https://www.taskeyapp.com${path}` },
      ]}
      sections={[
        {
          eyebrow: c.sec1Eyebrow,
          heading: c.sec1Heading,
          intro: c.sec1Intro,
          body: [c.sec1Body1, c.sec1Body2],
        },
        {
          eyebrow: c.sec2Eyebrow,
          heading: c.sec2Heading,
          intro: c.sec2Intro,
          subsections: [
            { heading: c.sec2Sub1Heading, body: c.sec2Sub1Body },
            { heading: c.sec2Sub2Heading, body: c.sec2Sub2Body },
            { heading: c.sec2Sub3Heading, body: c.sec2Sub3Body },
            { heading: c.sec2Sub4Heading, body: c.sec2Sub4Body },
          ],
        },
        {
          eyebrow: c.sec3Eyebrow,
          heading: c.sec3Heading,
          body: [c.sec3Body1, c.sec3Body2],
          bullets: [
            c.sec3Bullet1,
            c.sec3Bullet2,
            c.sec3Bullet3,
            c.sec3Bullet4,
            c.sec3Bullet5,
            c.sec3Bullet6,
          ],
        },
        {
          eyebrow: c.sec4Eyebrow,
          heading: c.sec4Heading,
          body: [c.sec4Body1, c.sec4Body2, c.sec4Body3],
        },
      ]}
      faqs={[
        { question: c.faq1Q, answer: c.faq1A },
        { question: c.faq2Q, answer: c.faq2A },
        { question: c.faq3Q, answer: c.faq3A },
        { question: c.faq4Q, answer: c.faq4A },
        { question: c.faq5Q, answer: c.faq5A },
        { question: c.faq6Q, answer: c.faq6A },
      ]}
      related={[
        {
          href: "/software-gebaeudereinigung",
          label: c.rel1Label,
          description: c.rel1Desc,
        },
        {
          href: "/zeiterfassung-gebaeudereinigung",
          label: c.rel2Label,
          description: c.rel2Desc,
        },
        {
          href: "/software-kleine-reinigungsfirma",
          label: c.rel3Label,
          description: c.rel3Desc,
        },
        {
          href: "/loesungen/unterhaltsreinigung",
          label: c.rel4Label,
          description: c.rel4Desc,
        },
      ]}
    />
  );
}
