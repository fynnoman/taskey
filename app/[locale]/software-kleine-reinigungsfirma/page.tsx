import type { Metadata } from "next";
import LandingPageTemplate from "@/components/landing/LandingPageTemplate";
import AnswerBox from "@/components/AnswerBox";

const ANSWER_COPY = {
  de: {
    q: "Software für kleine Reinigungsfirmen: was brauchen 1–15 Mitarbeitende?",
    a: "Kleine Reinigungsfirmen brauchen NFC-Objektnachweis, Mindestlohn-konforme Zeiterfassung, einfache Einsatzplanung, Rechnungen und DATEV-Export in einer App, ohne Enterprise-Setup. Taskey liefert genau das im Beginner-Tarif ab 119 € pro Monat, mit Self-Service-Einrichtung unter 10 Minuten oder Done-for-You-Setup in 48 Stunden.",
  },
  en: {
    q: "Software for small cleaning companies: what do 1–15 staff need?",
    a: "Small cleaning companies need NFC proof of service, minimum-wage-compliant time tracking, simple scheduling, invoicing and DATEV export in one app, without enterprise setup. Taskey delivers exactly that in the Beginner plan from EUR 119 per month, with self-service setup in under 10 minutes or Done-for-You setup in 48 hours.",
  },
  fr: {
    q: "Logiciel pour petites entreprises de nettoyage : ce qu’il faut pour 1–15 salariés",
    a: "Les petites entreprises de nettoyage ont besoin de preuve NFC, pointage conforme, planification simple, factures et export DATEV dans une seule app – sans dispositif entreprise. Taskey couvre tout cela dans le tarif Beginner à partir de 119 € par mois, mise en place en libre-service en moins de 10 minutes ou Done-for-You en 48 heures.",
  },
} as const;
import { buildMetadata, pickLocale, type PageCopy } from "@/lib/i18n-metadata";

const path = "/software-kleine-reinigungsfirma";

const META_COPY: PageCopy = {
  de: {
    title:
      "Software für kleine Reinigungsfirmen | Ab 1 Mitarbeitendem | Taskey",
    description:
      "Reinigungssoftware für kleine Betriebe ab 1 Mitarbeitendem: NFC-Zeit, Einsatzplan, Rechnungen und DATEV. Ab 119 €/Monat. Täglich kündbar, keine Setup-Kosten.",
  },
  en: {
    title:
      "Software for Small Cleaning Companies | From 1 employee | Taskey",
    description:
      "Cleaning software for small operations starting from one employee: NFC time tracking, scheduling, invoicing and DATEV. From €119/month. Cancel any day, no setup fees.",
  },
  fr: {
    title:
      "Logiciel pour petites entreprises de nettoyage | Dès 1 salarié | Taskey",
    description:
      "Logiciel de nettoyage pour les petites structures dès 1 salarié : pointage NFC, planning, factures et DATEV. À partir de 119 €/mois. Résiliable au jour le jour, sans frais d’installation.",
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
    title: "Software für kleine Reinigungsfirmen",
    eyebrow: "Pillar · Kleinbetriebe",
    h1: "Software für kleine Reinigungsfirmen —",
    h1Accent: "ab 1 Mitarbeitendem, täglich kündbar.",
    lead: "Branchensoftware ist nicht nur für Großbetriebe. Taskey ist die einzige All-in-One-Reinigungssoftware, die schon ab einem Mitarbeitenden Sinn macht – mit fairen Preisen, einfacher Bedienung und ohne Setup-Kosten. Ab 119 € pro Monat.",
    breadcrumbHome: "Home",
    breadcrumbCurrent: "Software für kleine Reinigungsfirmen",
    sec1Eyebrow: "Wofür Sie Taskey brauchen",
    sec1Heading: "Sie sind Inhaber, Disponent, Vorarbeiter und Buchhalter zugleich.",
    sec1Intro:
      "Wer mit 1 bis 20 Mitarbeitenden reinigt, hat einen Job, der eigentlich für vier reicht. Taskey nimmt Ihnen genau die Aufgaben ab, die jeden Tag wiederkehren – damit Sie sich um Akquise, Qualität und Wachstum kümmern können.",
    sec1Bullet1: "Stundenzettel und Lohnvorbereitung – jetzt automatisch",
    sec1Bullet2: "Einsatzplan – jetzt auf jedem Handy live",
    sec1Bullet3: "Angebote und Rechnungen – jetzt in der gleichen App",
    sec1Bullet4: "Auftraggeber-Anrufe – jetzt seltener, weil der Kunde selbst sieht",
    sec1Bullet5: "Krankmeldung um 5 Uhr – jetzt mit Vertretungs-Vorschlag",
    sec2Eyebrow: "Was ein 5-Personen-Betrieb sparte",
    sec2Heading: "Echte Zahlen aus dem Reinigungsalltag.",
    sec2Body1:
      "Ein typischer 5-Personen-Betrieb in unserer Kundschaft verbringt vor Taskey rund 8–12 Stunden pro Woche mit Stundenzetteln, Wochenplänen, Chat-Antworten und Rechnungsversand. Nach der Umstellung auf Taskey sind das 2–3 Stunden pro Woche.",
    sec2Body2:
      "Das ergibt – bei einem Stundensatz des Inhabers von 50 € – eine Zeitersparnis im Wert von etwa 18.000 bis 24.000 € pro Jahr. Plus 5–15 % höhere Marge pro Objekt, weil Stunden, Pausen und Vertretungen korrekt erfasst werden.",
    sec2Body3:
      "Die Software amortisiert sich in der Regel im ersten Monat – und ist täglich kündbar, falls es doch nicht passt.",
    sec3Eyebrow: "Was im Beginner-Tarif enthalten ist",
    sec3Heading: "Ab 119 € pro Monat – ohne Funktions-Kappung.",
    sec3Intro:
      "Taskey ist kein verkrüppelter 'Starter-Tarif'. Im Beginner-Tarif sind alle Kernfunktionen enthalten, die ein kleiner Reinigungsbetrieb braucht.",
    sec3Bullet1: "NFC-Zeiterfassung mit GPS und Offline-Sync",
    sec3Bullet2: "Unbegrenzt viele Mitarbeitende",
    sec3Bullet3: "Einsatzplanung mit Drag-and-Drop",
    sec3Bullet4: "Objektakte mit Sonderwünschen und Historie",
    sec3Bullet5: "Angebote, Wartungsverträge und Rechnungen",
    sec3Bullet6: "Mobile App für iOS und Android",
    sec3Bullet7: "DSGVO-konform, deutsche Server",
    sec3Bullet8: "Persönlicher Support per E-Mail und Telefon",
    sec4Eyebrow: "Mitwachsen statt umsteigen",
    sec4Heading: "Was passiert, wenn Sie auf 20, 50 oder 100 Mitarbeitende wachsen?",
    sec4Body1:
      "Nichts Wildes – Sie wechseln vom Beginner- in den Professional- oder Business-Tarif. Alle Ihre Daten, Objekte, Verträge und Nachweise bleiben erhalten. Sie zahlen nur die Funktionen, die Sie wirklich brauchen – etwa Live-Margen, DATEV-Export oder Auftraggeber-Zugang.",
    sec4Body2:
      "Für Inhaber, die langfristig denken, ist das ein großer Vorteil: Sie müssen sich nicht in zwei Jahren erneut nach einer Software umsehen und alle Mitarbeitenden umtrainieren. Taskey ist von Anfang an auf Wachstum gebaut – vom 1-Personen-Betrieb bis zum Enterprise mit 200+ Mitarbeitenden.",
    faq1Q: "Lohnt sich Taskey schon bei 1 Mitarbeiter?",
    faq1A:
      "Ja. Schon als Soloselbstständiger sparen Sie Zeit bei Touren, Rechnungen, Stundenzetteln und der Kommunikation mit Auftraggebern. Die Software amortisiert sich in der Regel im ersten Monat.",
    faq2Q: "Gibt es eine Mindestvertragslaufzeit?",
    faq2A:
      "Nein. Taskey ist täglich kündbar. Sie zahlen monatlich, ohne Setup-Kosten und ohne lange Bindung.",
    faq3Q: "Muss ich meine Mitarbeitenden vorher schulen?",
    faq3A:
      "Nein. Die Taskey-App auf dem Handy ist so gestaltet, dass jede Reinigungskraft sie ohne Schulung bedienen kann – auch ohne perfekte Deutschkenntnisse (DE/TR/RU/PL u.a.).",
    faq4Q: "Was passiert mit meinen alten Excel-Listen?",
    faq4A:
      "Im Done-for-You Setup importieren wir Ihre bestehenden Objekte, Mitarbeitenden, Verträge und Stammdaten für Sie. Sie müssen nichts abtippen.",
    faq5Q: "Kann ich auch Rechnungen direkt in Taskey schreiben?",
    faq5A:
      "Ja. Aus jedem Auftrag oder Einsatz heraus erstellen Sie eine Rechnung mit einem Klick. Vorlagen, Wartungsverträge und wiederkehrende Rechnungen sind ebenfalls integriert.",
    faq6Q: "Was kostet Taskey für einen 5-Personen-Betrieb wirklich?",
    faq6A:
      "Der Beginner-Tarif startet bei 119 € pro Monat. Hinzu kommen 4,40 € pro aktivem Objekt. Für 10 Objekte und 5 Mitarbeitende landen Sie bei etwa 163 € pro Monat – inklusive aller Funktionen.",
    rel1Label: "Software für Gebäudereinigung",
    rel1Desc: "All-in-One Branchensoftware: Einsatzplanung, NFC-Nachweis, Zeiterfassung, Angebote, Rechnungen, Live-Margen.",
    rel2Label: "Preise im Überblick",
    rel2Desc: "Beginner ab 119 €, Professional ab 315 €, Business ab 429 € pro Monat.",
    rel3Label: "Enterprise für große Betriebe",
    rel3Desc: "Wenn Sie wachsen: SSO, API, dedizierter Account-Manager.",
    rel4Label: "Einsatzplanung Reinigung",
    rel4Desc: "Wie Sie auch mit kleinem Team große Strecken sauber durchplanen.",
  },
  en: {
    title: "Software for Small Cleaning Companies",
    eyebrow: "Pillar · Small operations",
    h1: "Software for small cleaning companies —",
    h1Accent: "from 1 employee, cancellable daily.",
    lead: "Industry software is not just for large operations. Taskey is the only all-in-one cleaning software that already makes sense from a single employee onwards – with fair pricing, simple operation and no setup costs. From EUR 119 per month.",
    breadcrumbHome: "Home",
    breadcrumbCurrent: "Software for Small Cleaning Companies",
    sec1Eyebrow: "What you need Taskey for",
    sec1Heading: "You’re the owner, dispatcher, foreman and bookkeeper all at once.",
    sec1Intro:
      "Anyone cleaning with 1 to 20 staff has a job that really takes four. Taskey takes the tasks that come around every day off your plate – so you can focus on acquisition, quality and growth.",
    sec1Bullet1: "Timesheets and payroll prep – now automatic",
    sec1Bullet2: "Schedule – now live on every phone",
    sec1Bullet3: "Quotes and invoices – now in the same app",
    sec1Bullet4: "Client calls – now rarer, because the client sees for themselves",
    sec1Bullet5: "Sick call at 5 am – now with a replacement suggestion",
    sec2Eyebrow: "What a 5-person operation saved",
    sec2Heading: "Real numbers from cleaning everyday life.",
    sec2Body1:
      "A typical 5-person operation in our customer base spends around 8–12 hours per week on timesheets, weekly plans, chat replies and invoice dispatch before Taskey. After the switch, that’s 2–3 hours per week.",
    sec2Body2:
      "That translates – at an owner hourly rate of EUR 50 – into time savings worth roughly EUR 18,000 to 24,000 per year. Plus a 5–15 % higher margin per site, because hours, breaks and replacements are recorded correctly.",
    sec2Body3:
      "The software typically pays for itself within the first month – and it’s cancellable daily, in case it really doesn’t fit.",
    sec3Eyebrow: "What’s in the Beginner plan",
    sec3Heading: "From EUR 119 per month – without crippled features.",
    sec3Intro:
      "Taskey is not a crippled 'starter plan'. The Beginner plan contains every core feature a small cleaning operation needs.",
    sec3Bullet1: "NFC time tracking with GPS and offline sync",
    sec3Bullet2: "Unlimited staff",
    sec3Bullet3: "Scheduling with drag-and-drop",
    sec3Bullet4: "Site file with special requests and history",
    sec3Bullet5: "Quotes, maintenance contracts and invoices",
    sec3Bullet6: "Mobile app for iOS and Android",
    sec3Bullet7: "DSGVO-compliant, German servers",
    sec3Bullet8: "Personal support by email and phone",
    sec4Eyebrow: "Grow with you, not switch",
    sec4Heading: "What happens when you grow to 20, 50 or 100 staff?",
    sec4Body1:
      "Nothing dramatic – you move from the Beginner plan to Professional or Business. All your data, sites, contracts and proofs stay in place. You only pay for the features you really need – such as live margins, DATEV export or client access.",
    sec4Body2:
      "For owners thinking long-term that’s a big advantage: you don’t have to shop for software again in two years and retrain all your staff. Taskey is built for growth from day one – from a one-person operation to enterprises with 200+ staff.",
    faq1Q: "Is Taskey worth it for just 1 employee?",
    faq1A:
      "Yes. Even as a sole trader you save time on routes, invoices, timesheets and client communication. The software typically pays for itself in the first month.",
    faq2Q: "Is there a minimum contract term?",
    faq2A:
      "No. Taskey is cancellable daily. You pay monthly, with no setup costs and no long-term commitment.",
    faq3Q: "Do I have to train my staff beforehand?",
    faq3A:
      "No. The Taskey app on the phone is designed so that every cleaner can use it without training – even without perfect German (DE/TR/RU/PL and more).",
    faq4Q: "What happens to my old Excel lists?",
    faq4A:
      "In the Done-for-You setup we import your existing sites, staff, contracts and master data for you. You don’t have to retype anything.",
    faq5Q: "Can I also write invoices directly in Taskey?",
    faq5A:
      "Yes. From every job or assignment you create an invoice with one click. Templates, maintenance contracts and recurring invoices are also built in.",
    faq6Q: "What does Taskey really cost for a 5-person operation?",
    faq6A:
      "The Beginner plan starts at EUR 119 per month. On top, there are EUR 4.40 per active site. For 10 sites and 5 staff you end up at around EUR 163 per month – all features included.",
    rel1Label: "Software for Building Cleaning",
    rel1Desc: "All-in-one industry software: scheduling, NFC proof of service, time tracking, quotes, invoices, live margins.",
    rel2Label: "Pricing overview",
    rel2Desc: "Beginner from EUR 119, Professional from EUR 315, Business from EUR 429 per month.",
    rel3Label: "Enterprise for large operations",
    rel3Desc: "When you grow: SSO, API, dedicated account manager.",
    rel4Label: "Cleaning Workforce Scheduling",
    rel4Desc: "How to plan long routes cleanly with a small team as well.",
  },
  fr: {
    title: "Logiciel pour petites entreprises de nettoyage",
    eyebrow: "Pillar · Petites structures",
    h1: "Logiciel pour petites entreprises de nettoyage —",
    h1Accent: "dès 1 salarié, résiliable chaque jour.",
    lead: "Le logiciel métier n’est pas réservé aux grandes structures. Taskey est le seul logiciel de nettoyage tout-en-un pertinent dès un salarié – avec des prix justes, une prise en main simple et sans frais d’installation. À partir de 119 € par mois.",
    breadcrumbHome: "Accueil",
    breadcrumbCurrent: "Logiciel pour petites entreprises de nettoyage",
    sec1Eyebrow: "À quoi sert Taskey pour vous",
    sec1Heading: "Vous êtes dirigeant, dispatcher, chef d’équipe et comptable en même temps.",
    sec1Intro:
      "Avec 1 à 20 salariés, vous faites un travail qui en demanderait quatre. Taskey vous décharge exactement des tâches qui reviennent chaque jour – pour que vous puissiez vous concentrer sur l’acquisition, la qualité et la croissance.",
    sec1Bullet1: "Feuilles d’heures et préparation paie – désormais automatiques",
    sec1Bullet2: "Planning – désormais en direct sur chaque téléphone",
    sec1Bullet3: "Devis et factures – désormais dans la même app",
    sec1Bullet4: "Appels des donneurs d’ordre – plus rares, parce que le client voit lui-même",
    sec1Bullet5: "Arrêt maladie à 5 h – désormais avec proposition de remplacement",
    sec2Eyebrow: "Ce qu’a économisé une entreprise de 5 personnes",
    sec2Heading: "Des chiffres réels du quotidien du nettoyage.",
    sec2Body1:
      "Une entreprise type de 5 personnes chez nos clients passe, avant Taskey, environ 8 à 12 heures par semaine sur feuilles d’heures, plannings hebdomadaires, réponses par chat et envoi de factures. Après le passage à Taskey, c’est 2 à 3 heures par semaine.",
    sec2Body2:
      "Cela représente – avec un taux horaire dirigeant de 50 € – un gain de temps d’environ 18 000 à 24 000 € par an. Plus 5 à 15 % de marge en plus par site, parce que les heures, pauses et remplacements sont correctement saisis.",
    sec2Body3:
      "Le logiciel s’amortit en règle générale dès le premier mois – et il est résiliable chaque jour, si vraiment ça ne colle pas.",
    sec3Eyebrow: "Ce qui est inclus dans le tarif Beginner",
    sec3Heading: "À partir de 119 € par mois – sans bridage de fonctions.",
    sec3Intro:
      "Taskey n’est pas un « tarif starter » bridé. Le tarif Beginner inclut toutes les fonctions de base dont une petite entreprise de nettoyage a besoin.",
    sec3Bullet1: "Pointage NFC avec GPS et synchro hors ligne",
    sec3Bullet2: "Nombre illimité de salariés",
    sec3Bullet3: "Planification en glisser-déposer",
    sec3Bullet4: "Fiche site avec demandes spéciales et historique",
    sec3Bullet5: "Devis, contrats d’entretien et factures",
    sec3Bullet6: "Application mobile pour iOS et Android",
    sec3Bullet7: "Conforme DSGVO, serveurs allemands",
    sec3Bullet8: "Support personnel par e-mail et téléphone",
    sec4Eyebrow: "Grandir avec vous, pas changer d’outil",
    sec4Heading: "Que se passe-t-il quand vous passez à 20, 50 ou 100 salariés ?",
    sec4Body1:
      "Rien de fou – vous passez du tarif Beginner au Professional ou au Business. Toutes vos données, sites, contrats et justificatifs restent en place. Vous ne payez que les fonctions dont vous avez vraiment besoin – marges en direct, export DATEV ou accès donneur d’ordre, par exemple.",
    sec4Body2:
      "Pour les dirigeants qui pensent long terme, c’est un grand avantage : vous n’aurez pas à rechercher un nouveau logiciel dans deux ans et à reformer tous les salariés. Taskey est conçu pour la croissance dès le départ – du travailleur indépendant à l’entreprise avec plus de 200 salariés.",
    faq1Q: "Taskey est-il rentable dès 1 salarié ?",
    faq1A:
      "Oui. Même en indépendant, vous gagnez du temps sur les tournées, factures, feuilles d’heures et la communication avec les donneurs d’ordre. Le logiciel s’amortit en règle générale dès le premier mois.",
    faq2Q: "Y a-t-il une durée minimale d’engagement ?",
    faq2A:
      "Non. Taskey est résiliable chaque jour. Vous payez au mois, sans frais d’installation et sans engagement long.",
    faq3Q: "Dois-je former mes agents au préalable ?",
    faq3A:
      "Non. L’app Taskey sur le téléphone est conçue pour que chaque agent puisse l’utiliser sans formation – même sans parfaite maîtrise de l’allemand (DE/TR/RU/PL et plus).",
    faq4Q: "Que deviennent mes anciennes listes Excel ?",
    faq4A:
      "Dans la mise en place Done-for-You, nous importons pour vous vos sites existants, salariés, contrats et données de base. Rien à ressaisir.",
    faq5Q: "Puis-je aussi écrire mes factures directement dans Taskey ?",
    faq5A:
      "Oui. Depuis chaque contrat ou intervention, vous créez une facture en un clic. Modèles, contrats d’entretien et factures récurrentes sont également intégrés.",
    faq6Q: "Combien coûte vraiment Taskey pour une entreprise de 5 personnes ?",
    faq6A:
      "Le tarif Beginner démarre à 119 € par mois. S’y ajoutent 4,40 € par site actif. Pour 10 sites et 5 salariés, vous arrivez à environ 163 € par mois – toutes fonctions incluses.",
    rel1Label: "Logiciel pour le nettoyage de bâtiments",
    rel1Desc: "Logiciel métier tout-en-un : planification, justificatif NFC, pointage, devis, factures, marges en direct.",
    rel2Label: "Aperçu des tarifs",
    rel2Desc: "Beginner à partir de 119 €, Professional à partir de 315 €, Business à partir de 429 € par mois.",
    rel3Label: "Enterprise pour les grandes structures",
    rel3Desc: "Quand vous grandissez : SSO, API, gestionnaire de compte dédié.",
    rel4Label: "Planification Nettoyage",
    rel4Desc: "Comment planifier proprement de grandes tournées même avec une petite équipe.",
  },
} as const;

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const loc = pickLocale(locale);
  const c = CONTENT[loc];
  const answer = ANSWER_COPY[loc];
  return (
    <>
    <AnswerBox question={answer.q} answer={answer.a} />
    <LandingPageTemplate
      path={path}
      title={c.title}
      eyebrow={c.eyebrow}
      h1={c.h1}
      h1Accent={c.h1Accent}
      lead={c.lead}
      breadcrumbs={[
        { name: c.breadcrumbHome, url: "https://www.taskeyapp.com" },
        {
          name: c.breadcrumbCurrent,
          url: `https://www.taskeyapp.com${path}`,
        },
      ]}
      sections={[
        {
          eyebrow: c.sec1Eyebrow,
          heading: c.sec1Heading,
          intro: c.sec1Intro,
          bullets: [
            c.sec1Bullet1,
            c.sec1Bullet2,
            c.sec1Bullet3,
            c.sec1Bullet4,
            c.sec1Bullet5,
          ],
        },
        {
          eyebrow: c.sec2Eyebrow,
          heading: c.sec2Heading,
          body: [c.sec2Body1, c.sec2Body2, c.sec2Body3],
        },
        {
          eyebrow: c.sec3Eyebrow,
          heading: c.sec3Heading,
          intro: c.sec3Intro,
          bullets: [
            c.sec3Bullet1,
            c.sec3Bullet2,
            c.sec3Bullet3,
            c.sec3Bullet4,
            c.sec3Bullet5,
            c.sec3Bullet6,
            c.sec3Bullet7,
            c.sec3Bullet8,
          ],
        },
        {
          eyebrow: c.sec4Eyebrow,
          heading: c.sec4Heading,
          body: [c.sec4Body1, c.sec4Body2],
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
          href: "/pricing",
          label: c.rel2Label,
          description: c.rel2Desc,
        },
        {
          href: "/pricing#enterprise",
          label: c.rel3Label,
          description: c.rel3Desc,
        },
        {
          href: "/einsatzplanung-reinigung",
          label: c.rel4Label,
          description: c.rel4Desc,
        },
      ]}
    />
    </>
  );
}
