import type { Metadata } from "next";
import LandingPageTemplate, {
  type LandingPageProps,
} from "@/components/landing/LandingPageTemplate";
import { buildMetadata, pickLocale, type PageCopy, type Locale } from "@/lib/i18n-metadata";

const path = "/vergleich/plan-d-alternative";

const COPY: PageCopy = {
  de: {
    title:
      "Plan-D Alternative | Moderne Cloud-Software statt Desktop-ERP | Taskey",
    description:
      "Plan-D-Alternative für Gebäudereiniger: Taskey ersetzt das klassische Desktop-ERP durch eine moderne Cloud-App mit NFC-Zeiterfassung, Live-Margen und Auftraggeber-Portal – ab 71 €/Monat, ohne Setup-Kosten, täglich kündbar.",
    ogTitle: "Plan-D Alternative | Moderne Cloud statt Desktop-ERP | Taskey",
    ogDescription:
      "Cloud statt Desktop, NFC nativ, Live-Margen, kein Setup-Aufwand, täglich kündbar – ab 71 €/Monat.",
    twitterTitle: "Plan-D Alternative | Taskey",
    twitterDescription: "Moderne Cloud-Software statt Desktop-ERP – ab 71 €/Monat.",
  },
  en: {
    title:
      "Plan-D Alternative | Modern Cloud Software Instead of Desktop ERP | Taskey",
    description:
      "Plan-D alternative for building cleaners: Taskey replaces the classic desktop ERP with a modern cloud app – NFC time tracking, live margins and a client portal. From €71/month, no setup cost, cancel any day.",
    ogTitle: "Plan-D Alternative | Modern Cloud Instead of Desktop ERP | Taskey",
    ogDescription:
      "Cloud instead of desktop, native NFC, live margins, no setup effort, cancel any day – from €71/month.",
    twitterTitle: "Plan-D Alternative | Taskey",
    twitterDescription: "Modern cloud software instead of desktop ERP – from €71/month.",
  },
  fr: {
    title:
      "Alternative à Plan-D | Logiciel cloud moderne à la place du ERP desktop | Taskey",
    description:
      "Alternative à Plan-D pour les entreprises de nettoyage de bâtiments : Taskey remplace l'ERP desktop classique par une application cloud moderne – pointage NFC, marges en direct et portail client. Dès 71 €/mois, sans frais de setup, résiliable au jour le jour.",
    ogTitle: "Alternative à Plan-D | Cloud moderne à la place du ERP desktop | Taskey",
    ogDescription:
      "Cloud au lieu de desktop, NFC natif, marges en direct, sans setup, résiliable au jour le jour – dès 71 €/mois.",
    twitterTitle: "Alternative à Plan-D | Taskey",
    twitterDescription: "Logiciel cloud moderne à la place du ERP desktop – dès 71 €/mois.",
  },
};

type PageContent = Omit<LandingPageProps, "path">;

const CONTENT: Record<Locale, PageContent> = {
  de: {
    title: "Plan-D Alternative",
    eyebrow: "Vergleich · Plan-D",
    h1: "Plan-D Alternative —",
    h1Accent: "moderne Cloud-Software statt Desktop-ERP.",
    lead: "Plan-D ist eine in der Reinigungsbranche etablierte Lösung – aber konzeptionell aus einer anderen Software-Ära. Taskey ist die zeitgemäße Antwort: Cloud-nativ, mobile-first, mit NFC-Zeiterfassung von Haus aus, Live-Margen pro Auftrag, Auftraggeber-Portal und Done-for-You Setup in 48 Stunden statt mehreren Wochen Projekt. Ab 71 € pro Monat. Täglich kündbar. Ohne Setup-Pauschale.",
    breadcrumbs: [
      { name: "Home", url: "https://www.taskeyapp.com" },
      { name: "Vergleich", url: "https://www.taskeyapp.com/vergleich/plan-d-alternative" },
      { name: "Plan-D Alternative", url: `https://www.taskeyapp.com${path}` },
    ],
    sections: [
      {
        eyebrow: "Was Wechsler immer wieder berichten",
        heading: "Warum Inhaber von Plan-D zu Taskey wechseln.",
        intro:
          "In Gesprächen mit Reinigungsfirmen, die Plan-D im Einsatz hatten, hören wir immer wieder dieselben Punkte. Wir behaupten nichts pauschal über Plan-D – das hier sind die Aussagen aus dem Feld.",
        bullets: [
          "Desktop-Software mit Server-Installation – Wartung, Updates, IT-Aufwand bleiben am Inhaber hängen",
          "Klassische, dichte Oberfläche – sieht aus wie aus den 2000ern, Mitarbeitende brauchen Tage Schulung",
          "Eigene Mitarbeiter-App fehlt oder ist nur als Zusatzmodul verfügbar",
          "Setup als Projekt mit Beratertagen – fünfstellige Anfangsinvestition keine Seltenheit",
          "Lange Vertragslaufzeiten – kein „heute starten, morgen kündigen“",
          "Reporting läuft über Excel-Export statt Live-Dashboard",
          "Auftraggeber-Portal nur als kostenpflichtiges Add-on – falls überhaupt verfügbar",
        ],
      },
      {
        eyebrow: "Direkter Vergleich",
        heading: "Was Taskey grundlegend anders macht.",
        intro:
          "Wir vergleichen hier die Architektur – nicht einzelne Features. Der Unterschied liegt im Konzept.",
        bullets: [
          "Cloud-nativ: Login im Browser oder App, keine Installation, automatische Updates",
          "Mobile-first: Die Mitarbeiter-App ist das Hauptinterface, nicht das Beiwerk",
          "NFC-Zeiterfassung in jedem Tarif – ein Tap am Objekt, Schluss mit Excel-Stundenzetteln",
          "Live-Margen pro Auftrag und Objekt – Sie sehen heute, ob die Reinigung von gestern profitabel war",
          "Auftraggeber-Portal (Taskey Share) ab Professional – ohne Aufpreis",
          "Done-for-You Setup in 48 h, im Tarif enthalten, keine Beratertage zu zahlen",
          "Täglich kündbar, transparente Monatspreise: 71 / 189 / 257 € + Objektpauschale",
          "Mehrsprachige App: DE/TR/RU/PL/EN/FR – Standard im deutschen Reinigungsbetrieb",
          "Server in Deutschland, AVV inkl., DSGVO-Compliance ab Tag 1",
        ],
      },
      {
        eyebrow: "Kosten ehrlich",
        heading: "Was Plan-D wirklich kostet – und was Taskey kostet.",
        body: [
          "Plan-D arbeitet typischerweise mit individuellen Angeboten: User-Lizenzen, Setup-Pauschale, Beratertage, Server-Infrastruktur, Update-Verträge. Was bei der Demo nach „überschaubar“ klingt, summiert sich im ersten Jahr regelmäßig auf einen fünfstelligen Betrag – plus laufende Lizenzkosten.",
          "Taskey: 71 € im Beginner, 189 € im Professional, 257 € im Business pro Monat. Plus 4,40 – 5,10 € pro aktivem Objekt. Setup ist im Preis enthalten. Mitarbeiteranzahl ist unbegrenzt. Sie können täglich kündigen. Wenn Sie zur kleinen oder mittleren Reinigungsfirma gehören, sparen Sie gegenüber Plan-D in der Regel mehrere tausend Euro pro Jahr.",
        ],
      },
      {
        eyebrow: "Wann Plan-D dennoch sinnvoll ist",
        heading: "Ehrliche Worte.",
        body: [
          "Plan-D hat einen breiten Funktionsumfang, der über die reine Reinigungs-Operative hinausgeht – etwa für sehr große Konzern-Betriebe mit mehreren Niederlassungen, eigener IT-Abteilung und individuellen Workflow-Anforderungen, die echtes Customizing erlauben.",
          "Wenn Sie eine eigene IT-Abteilung haben, mehrwöchige Implementierungsprojekte einplanen können und ein hochangepasstes System wollen, ist Plan-D eine valide Wahl.",
          "Wenn Ihr Ziel aber ist, dass die Frühschicht morgen früh um 5 Uhr einfach am NFC-Tag taggt und das Büro bis 10 Uhr alle Stunden, Margen und offenen Aufgaben sieht – ohne Beraterprojekt, ohne IT-Personal, ohne mehrere Wochen Vorlauf – dann ist Taskey die richtige Antwort.",
        ],
      },
      {
        eyebrow: "Migration",
        heading: "Was beim Wechsel von Plan-D passiert.",
        body: [
          "Wir übernehmen Stammdaten – Mitarbeitende, Objekte, Auftraggeber, Verträge – aus Ihrem Plan-D-Export. Stundenkonten, soweit Plan-D einen sauberen Export erlaubt, importieren wir ebenfalls. Was nicht direkt exportierbar ist, erfassen wir gemeinsam mit Ihnen im Done-for-You Setup.",
          "2–4 Wochen Parallelbetrieb: Sie führen die letzten Plan-D-Aufträge zu Ende, beginnen mit Taskey für alle neuen Aufträge. Danach sauberer Cut. Wir geben Ihnen einen Migrationsmonat als Übergangspuffer – während dieser Zeit zahlen Sie nur Taskey.",
          "Kein IT-Personal nötig. Kein eigener Server. Keine Beratertage. Wir setzen den Account auf und schulen Sie und Ihre Bürokraft – meist in einer halben Stunde.",
        ],
      },
    ],
    faqs: [
      {
        question: "Ist Taskey wirklich günstiger als Plan-D?",
        answer:
          "In nahezu allen Fällen für kleine und mittelgroße Reinigungsbetriebe: ja, deutlich. Plan-D-Setups liegen häufig im fünfstelligen Bereich plus laufende Lizenzkosten. Taskey startet bei 71 € im Monat ohne Setup-Pauschale, mit unbegrenzter Mitarbeiterzahl. Den verbindlichen Vergleich machen wir gerne im Gespräch – mit Ihrem konkreten Plan-D-Angebot als Grundlage.",
      },
      {
        question: "Kann ich Daten aus Plan-D übernehmen?",
        answer:
          "Ja. Plan-D erlaubt Exports der Kerndaten – Mitarbeitende, Objekte, Verträge, teilweise Stunden. Wir lesen diese Exporte ein und ordnen sie den neuen Taskey-Strukturen zu. Das ist Teil des Done-for-You Setups und kostet Sie keinen Cent extra.",
      },
      {
        question: "Brauche ich für Taskey eine IT-Abteilung wie bei Plan-D?",
        answer:
          "Nein. Taskey läuft komplett in der Cloud – kein Server, keine Installation, keine Updates, keine Wartung. Ihre Bürokraft loggt sich im Browser ein, Ihre Reinigungskräfte nutzen die App auf ihrem Smartphone. IT-Aufwand auf Ihrer Seite: null.",
      },
      {
        question: "Hat Plan-D nicht einen größeren Funktionsumfang?",
        answer:
          "Plan-D hat mehr historisch gewachsene Funktionen, ja. Die Frage ist, ob Sie diese Funktionen tatsächlich nutzen. Die meisten Reinigungsbetriebe nutzen erfahrungsgemäß 20 – 30 % der Plan-D-Funktionen – zahlen aber für 100 %. Taskey fokussiert auf die Funktionen, die im Reinigungsalltag wirklich gebraucht werden, und macht diese dafür modern und schnell bedienbar.",
      },
      {
        question: "Was passiert, wenn ich Plan-D parallel weiterlaufen lassen will?",
        answer:
          "Können Sie. In der Migrationsphase laufen beide Systeme nebeneinander, damit kein Einsatz durchs Raster fällt. Nach 2 – 4 Wochen ist Taskey die alleinige Quelle der Wahrheit, und Sie kündigen Plan-D regulär zum nächstmöglichen Termin.",
      },
      {
        question: "Gibt es bei Taskey auch einen DATEV-Export?",
        answer:
          "Ja. Im Tarif Business enthalten, kein Aufpreis. Das DATEV-Standardformat geht direkt zur Steuerkanzlei – ohne Excel-Krücke dazwischen.",
      },
      {
        question: "Wie schnell sind meine Mitarbeitenden produktiv?",
        answer:
          "30 Minuten Einführung reichen in der Regel. Die App ist bewusst minimalistisch und in den typischen Sprachen des deutschen Reinigungsbetriebs verfügbar (Deutsch, Türkisch, Russisch, Polnisch). Der Wechsel von Plan-D-Stundenzetteln zum NFC-Tap am Objekt ist für die Kräfte typischerweise eine Erleichterung – nicht eine Hürde.",
      },
    ],
    related: [
      {
        href: "/software-gebaeudereinigung",
        label: "Software für Gebäudereinigung",
        description: "All-in-One Branchensoftware: Einsatzplanung, NFC-Nachweis, Zeiterfassung, Angebote, Rechnungen, Live-Margen.",
      },
      {
        href: "/vergleich/zvoove-alternative",
        label: "Zvoove Alternative",
        description: "Vergleich gegen die klassische ERP-Lösung im Branchenumfeld.",
      },
      {
        href: "/vergleich/mendato-alternative",
        label: "Mendato Alternative",
        description: "Wie Taskey gegen Mendato für Reinigungsbetriebe abschneidet.",
      },
      {
        href: "/vergleich/fortytools-alternative",
        label: "Fortytools Alternative",
        description: "Spezialisiert auf Reinigung statt generischer Handwerkersoftware.",
      },
      {
        href: "/pricing",
        label: "Taskey-Preise",
        description: "Beginner ab 71 €, Professional ab 189 €, Business ab 257 € pro Monat.",
      },
    ],
  },
  en: {
    title: "Plan-D Alternative",
    eyebrow: "Comparison · Plan-D",
    h1: "Plan-D alternative —",
    h1Accent: "modern cloud software instead of desktop ERP.",
    lead: "Plan-D is an established solution in the cleaning industry – but conceptually from a different software era. Taskey is the contemporary answer: cloud-native, mobile-first, with NFC time tracking out of the box, live margins per job, a client portal and Done-for-You setup in 48 hours instead of a multi-week project. From €71 per month. Cancel any day. No setup flat fee.",
    breadcrumbs: [
      { name: "Home", url: "https://www.taskeyapp.com" },
      { name: "Comparison", url: "https://www.taskeyapp.com/vergleich/plan-d-alternative" },
      { name: "Plan-D Alternative", url: `https://www.taskeyapp.com${path}` },
    ],
    sections: [
      {
        eyebrow: "What switchers keep telling us",
        heading: "Why owners move from Plan-D to Taskey.",
        intro:
          "In conversations with cleaning companies that have used Plan-D, we keep hearing the same points. We are not making sweeping claims about Plan-D – these are statements from the field.",
        bullets: [
          "Desktop software with server installation – maintenance, updates and IT effort stay on the owner's shoulders",
          "Classic, dense interface – looks like the 2000s, staff need days of training",
          "Dedicated employee app is missing or only available as an add-on module",
          "Setup as a project with consultant days – a five-figure upfront investment is no rarity",
          "Long contract terms – no “start today, cancel tomorrow”",
          "Reporting runs via Excel export instead of a live dashboard",
          "Client portal only as a paid add-on – if available at all",
        ],
      },
      {
        eyebrow: "Head-to-head",
        heading: "What Taskey does fundamentally differently.",
        intro:
          "We are comparing architecture here – not individual features. The difference is in the concept.",
        bullets: [
          "Cloud-native: log in via browser or app, no installation, automatic updates",
          "Mobile-first: the employee app is the main interface, not an accessory",
          "NFC time tracking in every plan – one tap at the site, no more Excel timesheets",
          "Live margins per job and site – you see today whether yesterday's cleaning was profitable",
          "Client portal (Taskey Share) from Professional onwards – no surcharge",
          "Done-for-You setup in 48 h, included in your plan, no consultant days to pay",
          "Cancel any day, transparent monthly pricing: €71 / 189 / 257 + site fee",
          "Multilingual app: DE/TR/RU/PL/EN/FR – standard in German cleaning companies",
          "Servers in Germany, DPA included, DSGVO compliance from day one",
        ],
      },
      {
        eyebrow: "Costs, honestly",
        heading: "What Plan-D really costs – and what Taskey costs.",
        body: [
          "Plan-D typically works with individual quotes: user licences, setup flat fee, consultant days, server infrastructure, update contracts. What sounds “manageable” in the demo regularly adds up to a five-figure amount in the first year – plus ongoing licence costs.",
          "Taskey: €71 on Beginner, €189 on Professional, €257 on Business per month. Plus €4.40 – €5.10 per active site. Setup is included in the price. Number of employees is unlimited. You can cancel any day. If you are a small or mid-sized cleaning company, you typically save several thousand euros per year compared to Plan-D.",
        ],
      },
      {
        eyebrow: "When Plan-D still makes sense",
        heading: "Honest words.",
        body: [
          "Plan-D has a broad feature scope that goes beyond pure cleaning operations – for example for very large corporate operations with several branches, an in-house IT department and individual workflow requirements that allow real customisation.",
          "If you have your own IT department, can plan multi-week implementation projects and want a highly customised system, Plan-D is a valid choice.",
          "But if your goal is for the early shift to simply tap an NFC tag tomorrow morning at 5 a.m. and for the office to see all hours, margins and open tasks by 10 a.m. – with no consultancy project, no IT staff and no multi-week lead time – then Taskey is the right answer.",
        ],
      },
      {
        eyebrow: "Migration",
        heading: "What happens when you switch from Plan-D.",
        body: [
          "We take over master data – employees, sites, clients, contracts – from your Plan-D export. Time accounts, as far as Plan-D allows a clean export, are imported as well. Anything that cannot be exported directly is captured together with you in the Done-for-You setup.",
          "2–4 weeks of parallel operation: you finish the last Plan-D jobs and start using Taskey for all new jobs. Then a clean cut. We give you a migration month as a transitional buffer – during this time you only pay Taskey.",
          "No IT staff needed. No server of your own. No consultant days. We set up the account and train you and your office staff – usually in half an hour.",
        ],
      },
    ],
    faqs: [
      {
        question: "Is Taskey really cheaper than Plan-D?",
        answer:
          "In almost all cases for small and mid-sized cleaning companies: yes, significantly. Plan-D setups often land in the five-figure range plus ongoing licence costs. Taskey starts at €71 per month with no setup flat fee and unlimited employees. We are happy to do a binding comparison in a conversation – with your concrete Plan-D quote as a basis.",
      },
      {
        question: "Can I take data from Plan-D with me?",
        answer:
          "Yes. Plan-D allows exports of core data – employees, sites, contracts and partly hours. We read those exports and map them to the new Taskey structures. This is part of the Done-for-You setup and costs you nothing extra.",
      },
      {
        question: "Do I need an IT department for Taskey like with Plan-D?",
        answer:
          "No. Taskey runs entirely in the cloud – no server, no installation, no updates, no maintenance. Your office staff log in via browser, your cleaners use the app on their smartphones. IT effort on your side: zero.",
      },
      {
        question: "Doesn't Plan-D have a broader feature set?",
        answer:
          "Plan-D has more historically grown features, yes. The question is whether you actually use them. Most cleaning companies use 20 – 30 % of Plan-D's features in practice – but pay for 100 %. Taskey focuses on the functions that are really needed in everyday cleaning work, and makes those fast and modern to operate.",
      },
      {
        question: "What if I want to keep Plan-D running in parallel?",
        answer:
          "You can. During the migration phase, both systems run side by side so no shift falls through the cracks. After 2 – 4 weeks Taskey is the single source of truth, and you cancel Plan-D regularly at the next possible date.",
      },
      {
        question: "Does Taskey also offer a DATEV export?",
        answer:
          "Yes. Included in the Business plan at no extra cost. The DATEV standard format goes directly to your tax office – without an Excel workaround in between.",
      },
      {
        question: "How quickly are my staff productive?",
        answer:
          "A 30-minute introduction is usually enough. The app is deliberately minimalistic and available in the typical languages of the German cleaning industry (German, Turkish, Russian, Polish). Switching from Plan-D timesheets to an NFC tap at the site is typically a relief for the staff – not a hurdle.",
      },
    ],
    related: [
      {
        href: "/software-gebaeudereinigung",
        label: "Software for building cleaning",
        description: "All-in-one industry software: scheduling, NFC proof, time tracking, quotes, invoices, live margins.",
      },
      {
        href: "/vergleich/zvoove-alternative",
        label: "Zvoove Alternative",
        description: "Compared with the classic ERP solution in the industry.",
      },
      {
        href: "/vergleich/mendato-alternative",
        label: "Mendato Alternative",
        description: "How Taskey stacks up against Mendato for cleaning companies.",
      },
      {
        href: "/vergleich/fortytools-alternative",
        label: "Fortytools Alternative",
        description: "Specialised in cleaning instead of generic trades software.",
      },
      {
        href: "/pricing",
        label: "Taskey pricing",
        description: "Beginner from €71, Professional from €189, Business from €257 per month.",
      },
    ],
  },
  fr: {
    title: "Alternative à Plan-D",
    eyebrow: "Comparatif · Plan-D",
    h1: "Alternative à Plan-D —",
    h1Accent: "logiciel cloud moderne à la place du ERP desktop.",
    lead: "Plan-D est une solution établie dans le secteur du nettoyage – mais conceptuellement issue d'une autre ère logicielle. Taskey est la réponse contemporaine : cloud-native, mobile-first, avec pointage NFC de base, marges en direct par mission, portail client et mise en place Done-for-You en 48 heures plutôt qu'un projet de plusieurs semaines. Dès 71 € par mois. Résiliable au jour le jour. Sans frais de setup.",
    breadcrumbs: [
      { name: "Accueil", url: "https://www.taskeyapp.com" },
      { name: "Comparatif", url: "https://www.taskeyapp.com/vergleich/plan-d-alternative" },
      { name: "Alternative à Plan-D", url: `https://www.taskeyapp.com${path}` },
    ],
    sections: [
      {
        eyebrow: "Ce que rapportent ceux qui changent",
        heading: "Pourquoi les dirigeants passent de Plan-D à Taskey.",
        intro:
          "Dans nos échanges avec des entreprises de nettoyage qui utilisaient Plan-D, nous entendons toujours les mêmes points. Nous n'affirmons rien de général sur Plan-D – ce sont des retours du terrain.",
        bullets: [
          "Logiciel desktop avec installation serveur – la maintenance, les mises à jour et l'effort IT restent à la charge du dirigeant",
          "Interface classique et dense – semble issue des années 2000, les employés ont besoin de plusieurs jours de formation",
          "Application employé propre absente ou disponible uniquement en module additionnel",
          "Mise en place sous forme de projet avec jours de conseil – un investissement initial à cinq chiffres n'est pas rare",
          "Engagements longs – pas de « démarrer aujourd'hui, résilier demain »",
          "Le reporting passe par un export Excel plutôt qu'un tableau de bord en direct",
          "Portail donneur d'ordre uniquement en add-on payant – s'il est disponible",
        ],
      },
      {
        eyebrow: "Comparatif direct",
        heading: "Ce que Taskey fait fondamentalement différemment.",
        intro:
          "Nous comparons ici l'architecture – pas des fonctionnalités isolées. La différence se situe dans le concept.",
        bullets: [
          "Cloud-natif : connexion dans le navigateur ou via l'app, sans installation, mises à jour automatiques",
          "Mobile-first : l'application employé est l'interface principale, pas un accessoire",
          "Pointage NFC dans chaque formule – un tap sur le site, fini les feuilles Excel",
          "Marges en direct par mission et par site – vous voyez aujourd'hui si le nettoyage d'hier était rentable",
          "Portail donneur d'ordre (Taskey Share) à partir de Professional – sans surcoût",
          "Mise en place Done-for-You en 48 h, incluse dans la formule, aucun jour de conseil à payer",
          "Résiliable au jour le jour, tarifs mensuels transparents : 71 / 189 / 257 € + forfait par site",
          "Application multilingue : DE/TR/RU/PL/EN/FR – standard dans le nettoyage allemand",
          "Serveurs en Allemagne, contrat de sous-traitance inclus, conformité DSGVO dès le jour 1",
        ],
      },
      {
        eyebrow: "Les coûts, franchement",
        heading: "Ce que coûte réellement Plan-D – et ce que coûte Taskey.",
        body: [
          "Plan-D fonctionne typiquement avec des offres individualisées : licences utilisateurs, forfait de setup, jours de conseil, infrastructure serveur, contrats de mises à jour. Ce qui semble « raisonnable » en démo s'additionne régulièrement à un montant à cinq chiffres dès la première année – auquel s'ajoutent des frais de licence récurrents.",
          "Taskey : 71 € en Beginner, 189 € en Professional, 257 € en Business par mois. Plus 4,40 à 5,10 € par site actif. La mise en place est incluse. Le nombre d'employés est illimité. Vous pouvez résilier au jour le jour. Si vous êtes une petite ou moyenne entreprise de nettoyage, vous économisez en général plusieurs milliers d'euros par an par rapport à Plan-D.",
        ],
      },
      {
        eyebrow: "Quand Plan-D reste pertinent",
        heading: "Paroles honnêtes.",
        body: [
          "Plan-D dispose d'un large périmètre fonctionnel qui dépasse la seule activité opérationnelle de nettoyage – par exemple pour de très grandes structures avec plusieurs sites, un service informatique interne et des besoins de workflows spécifiques permettant une vraie personnalisation.",
          "Si vous disposez d'un service informatique, pouvez planifier des projets d'implémentation de plusieurs semaines et souhaitez un système fortement personnalisé, Plan-D est un choix valide.",
          "Mais si votre objectif est que l'équipe du matin pointe simplement sur un tag NFC à 5 h demain matin et que le bureau voie d'ici 10 h toutes les heures, marges et tâches en cours – sans projet de conseil, sans personnel IT, sans plusieurs semaines de préparation – alors Taskey est la bonne réponse.",
        ],
      },
      {
        eyebrow: "Migration",
        heading: "Ce qui se passe lors de la bascule depuis Plan-D.",
        body: [
          "Nous reprenons les données de base – employés, sites, donneurs d'ordre, contrats – depuis votre export Plan-D. Les comptes d'heures, dans la mesure où Plan-D autorise un export propre, sont également importés. Tout ce qui n'est pas directement exportable est saisi avec vous lors de la mise en place Done-for-You.",
          "Fonctionnement en parallèle pendant 2 à 4 semaines : vous terminez les dernières missions sous Plan-D et démarrez avec Taskey pour toutes les nouvelles missions. Ensuite, bascule nette. Nous vous offrons un mois de migration en tampon – durant cette période, vous ne payez que Taskey.",
          "Pas besoin de personnel IT. Pas de serveur propre. Pas de jours de conseil. Nous configurons le compte et formons vous et votre personnel administratif – en général en une demi-heure.",
        ],
      },
    ],
    faqs: [
      {
        question: "Taskey est-il vraiment moins cher que Plan-D ?",
        answer:
          "Dans presque tous les cas pour les petites et moyennes entreprises de nettoyage : oui, nettement. Les setups Plan-D atteignent souvent un montant à cinq chiffres auquel s'ajoutent les frais de licence récurrents. Taskey démarre à 71 € par mois sans frais de setup, avec un nombre illimité d'employés. Nous réalisons volontiers une comparaison chiffrée lors d'un échange – sur la base de votre offre Plan-D concrète.",
      },
      {
        question: "Puis-je reprendre les données de Plan-D ?",
        answer:
          "Oui. Plan-D autorise l'export des données de base – employés, sites, contrats et, partiellement, heures. Nous intégrons ces exports dans les nouvelles structures Taskey. Cela fait partie de la mise en place Done-for-You et ne vous coûte rien de plus.",
      },
      {
        question: "Faut-il un service informatique pour Taskey, comme pour Plan-D ?",
        answer:
          "Non. Taskey fonctionne entièrement dans le cloud – pas de serveur, pas d'installation, pas de mises à jour, pas de maintenance. Votre personnel administratif se connecte dans le navigateur, vos agents utilisent l'application sur leur smartphone. Effort IT de votre côté : zéro.",
      },
      {
        question: "Plan-D n'a-t-il pas un périmètre fonctionnel plus large ?",
        answer:
          "Plan-D dispose de plus de fonctions historiques, oui. La question est de savoir si vous les utilisez réellement. La plupart des entreprises de nettoyage utilisent dans les faits 20 à 30 % des fonctions de Plan-D – mais paient pour 100 %. Taskey se concentre sur les fonctions réellement nécessaires au quotidien dans le nettoyage et les rend modernes et rapides à utiliser.",
      },
      {
        question: "Que se passe-t-il si je veux conserver Plan-D en parallèle ?",
        answer:
          "C'est possible. Pendant la phase de migration, les deux systèmes fonctionnent côte à côte afin qu'aucune intervention ne soit oubliée. Après 2 à 4 semaines, Taskey devient la seule source de vérité et vous résiliez Plan-D normalement à la prochaine échéance.",
      },
      {
        question: "Taskey propose-t-il aussi un export DATEV ?",
        answer:
          "Oui. Inclus dans la formule Business, sans surcoût. Le format standard DATEV part directement chez le cabinet comptable – sans étape Excel intermédiaire.",
      },
      {
        question: "À quelle vitesse mes employés sont-ils productifs ?",
        answer:
          "30 minutes d'introduction suffisent en règle générale. L'application est volontairement minimaliste et disponible dans les langues typiques du nettoyage allemand (allemand, turc, russe, polonais). Passer des feuilles d'heures Plan-D au tap NFC sur le site est typiquement un soulagement pour les agents – pas un obstacle.",
      },
    ],
    related: [
      {
        href: "/software-gebaeudereinigung",
        label: "Logiciel pour le nettoyage de bâtiments",
        description: "Logiciel métier tout-en-un : planification, preuve NFC, pointage, devis, factures, marges en direct.",
      },
      {
        href: "/vergleich/zvoove-alternative",
        label: "Alternative à Zvoove",
        description: "Comparaison face à la solution ERP classique du secteur.",
      },
      {
        href: "/vergleich/mendato-alternative",
        label: "Alternative à Mendato",
        description: "Comment Taskey se positionne face à Mendato pour les entreprises de nettoyage.",
      },
      {
        href: "/vergleich/fortytools-alternative",
        label: "Alternative à fortytools",
        description: "Spécialisé pour le nettoyage plutôt qu'un logiciel artisan généraliste.",
      },
      {
        href: "/pricing",
        label: "Tarifs Taskey",
        description: "Beginner dès 71 €, Professional dès 189 €, Business dès 257 € par mois.",
      },
    ],
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return buildMetadata({
    copyByLocale: COPY,
    locale: pickLocale(locale),
    path,
    type: "article",
    image: "/opengraph-image",
  });
}

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
      breadcrumbs={c.breadcrumbs}
      sections={c.sections}
      faqs={c.faqs}
      related={c.related}
    />
  );
}
