import type { Metadata } from "next";
import LandingPageTemplate from "@/components/landing/LandingPageTemplate";
import AnswerBox from "@/components/AnswerBox";

const ANSWER_COPY = {
  de: {
    q: "Zeiterfassung Gebäudereinigung: was gehört rein?",
    a: "Zeiterfassung in der Gebäudereinigung ist heute Pflicht (§17 MiLoG, EuGH 2019) und sollte automatisch per NFC oder GPS erfassen, offline funktionieren, den Objektbezug pro Einsatz sichern und ohne Nachbearbeitung an DATEV übergeben. Taskey erfüllt alle vier Punkte in einer App, ab 119 € pro Monat.",
  },
  en: {
    q: "Time tracking for building cleaning: what does it need?",
    a: "Time tracking in building cleaning is mandatory under German law (§17 MiLoG, ECJ 2019). It should capture time automatically via NFC or GPS, work offline, tie each shift to a specific site and hand hours over to payroll without rework. Taskey covers all four in one app, from EUR 119 per month.",
  },
  fr: {
    q: "Pointage nettoyage de bâtiments : ce qui est requis",
    a: "Le pointage dans le nettoyage de bâtiments est obligatoire en Allemagne (§17 MiLoG, CJUE 2019). Il doit s’enregistrer automatiquement via NFC ou GPS, fonctionner hors-ligne, lier chaque intervention à un site précis et alimenter la paie sans retouche. Taskey couvre les quatre points dans une seule app, à partir de 119 € par mois.",
  },
} as const;
import { buildMetadata, pickLocale, type PageCopy } from "@/lib/i18n-metadata";

const path = "/zeiterfassung-gebaeudereinigung";

const META_COPY: PageCopy = {
  de: {
    title:
      "Zeiterfassung Gebäudereinigung | Digital, Mindestlohn-konform | Taskey",
    description:
      "Digitale Zeiterfassung für Gebäudereinigung: NFC, GPS, Offline, DSGVO. Mindestlohn-konforme Dokumentation und automatische Stundenzettel. Kostenlosen Account erstellen.",
  },
  en: {
    title:
      "Time Tracking for Building Cleaning | Digital, compliant | Taskey",
    description:
      "Digital time tracking for building cleaning: NFC, GPS, offline, GDPR-compliant. Minimum-wage compliant documentation and automatic timesheets. Create your free account.",
  },
  fr: {
    title:
      "Pointage nettoyage de bâtiments | Numérique, conforme | Taskey",
    description:
      "Pointage numérique pour le nettoyage de bâtiments : NFC, GPS, hors ligne, RGPD. Documentation conforme au salaire minimum et feuilles d’heures automatiques. Créez votre compte gratuit.",
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
    image: "/feature-zeiterfassung.webp",
  });
}

const CONTENT = {
  de: {
    title: "Zeiterfassung Gebäudereinigung",
    eyebrow: "Pillar · Zeiterfassung",
    h1: "Zeiterfassung für Gebäudereinigung —",
    h1Accent: "digital, automatisch, DSGVO-konform.",
    lead: "Reinigungsbetriebe verlieren Tag für Tag Zeit mit Stundenzetteln, Excel und Rückfragen beim Team. Taskey erfasst die Arbeitszeit Ihrer Mitarbeitenden automatisch per NFC, GPS und Offline-Sync – revisionssicher, Mindestlohn-konform und in der Lohnbuchhaltung sofort weiterverarbeitbar.",
    breadcrumbHome: "Home",
    breadcrumbCurrent: "Zeiterfassung Gebäudereinigung",
    sec1Eyebrow: "Problem",
    sec1Heading: "Warum Stundenzettel Sie Geld kosten.",
    sec1Intro:
      "Wer Arbeitszeit in der Gebäudereinigung mit Papier oder Excel erfasst, zahlt am Monatsende dreimal: in vergessenen Stunden, in Rückfragen ans Team und in Bußgeldrisiko durch fehlende Nachweise.",
    sec1Body1:
      "Das Mindestlohngesetz (§17 MiLoG) verpflichtet jeden Gebäudereinigungsbetrieb, Beginn, Ende und Dauer der täglichen Arbeitszeit jeder Reinigungskraft innerhalb von sieben Tagen aufzuzeichnen und zwei Jahre aufzubewahren. Stundenzettel im Auto-Handschuhfach, abfotografierte Notizzettel im Chat und nachträglich ausgefüllte Excel-Tabellen halten dieser Anforderung nicht stand.",
    sec1Body2:
      "In der Praxis bedeutet das: Bei einer Zollkontrolle kann der Betrieb die Arbeitszeiten nicht lückenlos nachweisen. Die Folge sind Bußgelder von bis zu 30.000 Euro pro Verstoß. Hinzu kommt der unsichtbare Schaden: Pausen werden falsch verbucht, Fahrtzeiten verschwinden, Überstunden werden vergessen – auf Kosten der Marge.",
    sec1Bullet1: "Bußgeldrisiko bei Zollkontrollen (FKS)",
    sec1Bullet2: "Vergessene Stunden gehen direkt von der Marge ab",
    sec1Bullet3: "Manuelle Erfassung dauert pro Objekt 5–15 Minuten",
    sec1Bullet4: "Streit über Pausen und Anfahrt belastet das Team",
    sec2Eyebrow: "Lösung",
    sec2Heading: "So funktioniert die Zeiterfassung mit Taskey.",
    sec2Intro:
      "Jede Reinigungskraft hält bei Ankunft das Smartphone an den NFC-Tag am Objekt. Taskey erkennt automatisch Mitarbeiter, Objekt, Uhrzeit und GPS-Standort. Beim Verlassen das Gleiche – fertig.",
    sec2Sub1Heading: "NFC-Check-in am Objekt",
    sec2Sub1Body:
      "Ein wetterfester NFC-Aufkleber am Eingang reicht. Taskey loggt den Start mit Zeitstempel, GPS-Koordinaten und Mitarbeiter-ID. Keine App muss vorher geöffnet werden, kein Passwort eingegeben – das Telefon tippt und der Eintrag steht.",
    sec2Sub2Heading: "Offline-Sync auch im Keller",
    sec2Sub2Body:
      "Tiefgaragen, Kellerräume oder Bestandsgebäude ohne Empfang sind Alltag in der Gebäudereinigung. Taskey speichert alle Zeitbuchungen lokal auf dem Gerät und synchronisiert automatisch, sobald wieder Netz da ist. Keine Lücken, keine Doppeleinträge.",
    sec2Sub3Heading: "Automatische Pausenregeln",
    sec2Sub3Body:
      "Hinterlegen Sie pro Mitarbeiter oder Objekt feste Pausenmodelle. Taskey berechnet die Nettoarbeitszeit Mindestlohn-konform und weist Pausen automatisch im richtigen Verhältnis aus – kein händisches Nachtragen.",
    sec2Sub4Heading: "Schluss mit Stundenzetteln",
    sec2Sub4Body:
      "Am Monatsende exportiert Taskey alle Zeitdaten als PDF, CSV, Excel oder im DATEV-Format für die Lohnbuchhaltung. Ein Klick statt eines Wochenend-Marathons im Büro.",
    sec3Eyebrow: "Recht & Compliance",
    sec3Heading: "Mindestlohn, DSGVO und Manipulationssicherheit.",
    sec3Intro:
      "Eine digitale Zeiterfassung ist nur dann wertvoll, wenn sie auch vor Gericht standhält. Taskey ist von Anfang an für die rechtlichen Anforderungen der Gebäudereinigung in Deutschland gebaut.",
    sec3Bullet1: "Mindestlohn-konform nach §17 MiLoG",
    sec3Bullet2: "DSGVO-konform: Server in Deutschland, AVV inklusive",
    sec3Bullet3: "Manipulationssicher: Zeiteinträge sind versioniert und kryptografisch signiert",
    sec3Bullet4: "EuGH-Urteil 2019: Arbeitszeit muss objektiv, verlässlich und zugänglich erfasst werden – Taskey erfüllt alle drei Kriterien",
    sec3Bullet5: "Volltextsuche und Filter nach Mitarbeiter, Objekt, Zeitraum, Auftraggeber",
    sec3Bullet6: "Audit-Log dokumentiert jede nachträgliche Änderung",
    sec4Eyebrow: "Praxis",
    sec4Heading: "Was sich für Inhaber konkret ändert.",
    sec4Body1:
      "Statt am Monatsletzten Stundenzettel zu sortieren, sehen Sie in Echtzeit, wer wo arbeitet, wie lange und mit welchem Pausenstand. Stundenkonten laufen automatisch mit. Überstunden, Krank- und Urlaubsmeldungen fließen in dieselbe Übersicht.",
    sec4Body2:
      "Wenn ein Auftraggeber fragt, ob am Dienstag um 6:30 Uhr wirklich gereinigt wurde, brauchen Sie keine Anrufe mehr – Sie öffnen das Objekt in Taskey, sehen den NFC-Scan, den GPS-Punkt und können dem Auftraggeber innerhalb einer Minute eine PDF-Bestätigung schicken.",
    sec4Body3:
      "Für die Lohnbuchhaltung bedeutet das: Ein einziger Klick exportiert alle Zeitdaten DATEV-fertig. Steuerberater und Buchhaltung müssen nichts nachpflegen, nichts hinterfragen und keine Rückfragen mehr stellen.",
    faq1Q: "Funktioniert die NFC-Zeiterfassung auch ohne Internet?",
    faq1A:
      "Ja. Taskey speichert alle Zeitbuchungen lokal auf dem Smartphone und synchronisiert automatisch, sobald die App wieder Netz hat. Tiefgaragen, Bestandsgebäude oder Glasfassaden ohne Empfang sind kein Problem.",
    faq2Q: "Erfüllt Taskey die Aufzeichnungspflicht nach Mindestlohngesetz?",
    faq2A:
      "Ja. Taskey dokumentiert Beginn, Ende und Dauer der täglichen Arbeitszeit jeder Reinigungskraft, archiviert die Einträge revisionssicher und stellt sie für Zollkontrollen oder die Finanzkontrolle Schwarzarbeit (FKS) jederzeit als PDF zur Verfügung – über die gesetzliche Aufbewahrungsfrist hinaus.",
    faq3Q: "Kann ich die erfassten Stunden direkt an DATEV übergeben?",
    faq3A:
      "Ja. Taskey exportiert Lohndaten im DATEV-Standardformat. Ihr Steuerberater oder Ihre interne Lohnbuchhaltung importiert die Datei direkt, ohne Nachbearbeitung.",
    faq4Q: "Wie verhindert Taskey Manipulationen oder rückwirkende Änderungen?",
    faq4A:
      "Jeder Zeiteintrag ist mit Zeitstempel, GPS-Position, Mitarbeiter-ID und Gerätekennung versehen. Nachträgliche Änderungen sind nur durch berechtigte Rollen und mit Audit-Log möglich – jeder Eingriff bleibt nachvollziehbar.",
    faq5Q: "Brauchen meine Mitarbeitenden ein Firmen-Smartphone?",
    faq5A:
      "Nein. Taskey läuft auf privaten und Firmen-Smartphones (iOS und Android). Die App ist mehrsprachig (Deutsch, Türkisch, Russisch, Polnisch und weitere) und so einfach gestaltet, dass keine Schulung nötig ist.",
    faq6Q: "Was kostet die Zeiterfassung in Taskey?",
    faq6A:
      "Die NFC-Zeiterfassung ist in jedem Taskey-Tarif enthalten – ab 119 € pro Monat für den Beginner-Tarif (zzgl. 4,40 € pro aktivem Objekt). Es gibt keinen Aufpreis pro Mitarbeitendem.",
    rel1Label: "Software für Gebäudereinigung",
    rel1Desc: "All-in-One Branchensoftware: Einsatzplanung, NFC-Nachweis, Zeiterfassung, Angebote, Rechnungen, Live-Margen.",
    rel2Label: "NFC Zeiterfassung im Detail",
    rel2Desc: "Wie der NFC-Tag funktioniert, was er kostet und wie er angebracht wird.",
    rel3Label: "Leistungsnachweis Gebäudereinigung",
    rel3Desc: "Aus der Zeitbuchung wird automatisch der Nachweis für den Auftraggeber.",
    rel4Label: "Einsatzplanung Reinigung",
    rel4Desc: "Schichten, Touren und Vertretungen – nahtlos verbunden mit der Zeiterfassung.",
  },
  en: {
    title: "Time Tracking for Building Cleaning",
    eyebrow: "Pillar · Time tracking",
    h1: "Time tracking for building cleaning —",
    h1Accent: "digital, automatic, DSGVO-compliant.",
    lead: "Cleaning operations lose time day after day on timesheets, Excel and follow-ups with the team. Taskey records your staff’s working time automatically via NFC, GPS and offline sync – audit-proof, minimum-wage compliant and ready for payroll without rework.",
    breadcrumbHome: "Home",
    breadcrumbCurrent: "Time Tracking for Building Cleaning",
    sec1Eyebrow: "Problem",
    sec1Heading: "Why timesheets cost you money.",
    sec1Intro:
      "Anyone recording working time in building cleaning on paper or in Excel pays at month-end three times over: in forgotten hours, in follow-ups with the team and in fine risk from missing proof.",
    sec1Body1:
      "The Minimum Wage Act (§17 MiLoG) obliges every building cleaning operation to record start, end and duration of each cleaner’s daily working time within seven days and to keep it for two years. Timesheets in the car glove box, photographed notes shared in chats and Excel sheets filled in after the fact don’t meet that requirement.",
    sec1Body2:
      "In practice, this means: in a customs inspection, the operation can’t produce complete working-time proof. The result is fines of up to 30,000 euro per violation. On top comes the invisible damage: breaks are recorded wrong, travel times disappear, overtime is forgotten – at the expense of the margin.",
    sec1Bullet1: "Fine risk in customs inspections (FKS)",
    sec1Bullet2: "Forgotten hours come straight off the margin",
    sec1Bullet3: "Manual recording takes 5–15 minutes per site",
    sec1Bullet4: "Disputes over breaks and travel weigh on the team",
    sec2Eyebrow: "Solution",
    sec2Heading: "Here’s how time tracking with Taskey works.",
    sec2Intro:
      "Every cleaner holds their smartphone to the NFC tag at the site on arrival. Taskey automatically detects employee, site, time and GPS location. Same on leaving – done.",
    sec2Sub1Heading: "NFC check-in at the site",
    sec2Sub1Body:
      "A weatherproof NFC sticker at the entrance is enough. Taskey logs the start with timestamp, GPS coordinates and employee ID. No app has to be opened first, no password entered – the phone taps and the entry is there.",
    sec2Sub2Heading: "Offline sync even in the basement",
    sec2Sub2Body:
      "Underground car parks, basement rooms or old buildings with no signal are part of everyday building cleaning. Taskey stores every time entry locally on the device and syncs automatically as soon as there’s a signal again. No gaps, no duplicate entries.",
    sec2Sub3Heading: "Automatic break rules",
    sec2Sub3Body:
      "Store fixed break models per employee or site. Taskey calculates net working time in a minimum-wage compliant way and allocates breaks automatically in the correct ratio – no manual catch-up.",
    sec2Sub4Heading: "Goodbye timesheets",
    sec2Sub4Body:
      "At the end of the month, Taskey exports all time data as PDF, CSV, Excel or in DATEV format for payroll. One click instead of a weekend marathon in the office.",
    sec3Eyebrow: "Law & compliance",
    sec3Heading: "Minimum wage, DSGVO and tamper-proofing.",
    sec3Intro:
      "Digital time tracking is only valuable if it also holds up in court. Taskey is built from day one for the legal requirements of building cleaning in Germany.",
    sec3Bullet1: "Minimum-wage compliant under §17 MiLoG",
    sec3Bullet2: "DSGVO-compliant: servers in Germany, DPA included",
    sec3Bullet3: "Tamper-proof: time entries are versioned and cryptographically signed",
    sec3Bullet4: "ECJ ruling 2019: working time must be recorded objectively, reliably and accessibly – Taskey meets all three criteria",
    sec3Bullet5: "Full-text search and filters by employee, site, period, client",
    sec3Bullet6: "Audit log documents every subsequent change",
    sec4Eyebrow: "In practice",
    sec4Heading: "What changes concretely for owners.",
    sec4Body1:
      "Instead of sorting timesheets on the last day of the month, you see in real time who is working where, for how long and with what break status. Time accounts run automatically. Overtime, sick and vacation reports flow into the same overview.",
    sec4Body2:
      "When a client asks whether cleaning really happened on Tuesday at 6:30 am, you don’t need any more phone calls – you open the site in Taskey, see the NFC scan, the GPS point and can send the client a PDF confirmation within a minute.",
    sec4Body3:
      "For payroll this means: a single click exports all time data DATEV-ready. Tax advisors and bookkeepers don’t have to maintain anything, don’t have to question anything and don’t have to ask any more follow-up questions.",
    faq1Q: "Does NFC time tracking also work without internet?",
    faq1A:
      "Yes. Taskey stores all time entries locally on the smartphone and syncs automatically as soon as the app has signal again. Underground car parks, old buildings or glass facades without reception are not a problem.",
    faq2Q: "Does Taskey meet the recording obligation under the Minimum Wage Act?",
    faq2A:
      "Yes. Taskey documents start, end and duration of each cleaner’s daily working time, archives the entries in an audit-proof way and makes them available at any time as PDF for customs inspections or the financial enforcement against illegal work (FKS) – beyond the statutory retention period.",
    faq3Q: "Can I hand over the recorded hours directly to DATEV?",
    faq3A:
      "Yes. Taskey exports payroll data in DATEV standard format. Your tax advisor or internal payroll team imports the file directly, with no post-processing.",
    faq4Q: "How does Taskey prevent manipulation or retroactive changes?",
    faq4A:
      "Every time entry is stamped with timestamp, GPS position, employee ID and device identifier. Subsequent changes are only possible through authorised roles and with an audit log – every intervention remains traceable.",
    faq5Q: "Do my staff need a company smartphone?",
    faq5A:
      "No. Taskey runs on private and company smartphones (iOS and Android). The app is multilingual (German, Turkish, Russian, Polish and more) and so simple that no training is needed.",
    faq6Q: "What does time tracking in Taskey cost?",
    faq6A:
      "NFC time tracking is included in every Taskey plan – from EUR 119 per month for the Beginner plan (plus EUR 4.40 per active site). There’s no per-employee surcharge.",
    rel1Label: "Software for Building Cleaning",
    rel1Desc: "All-in-one industry software: scheduling, NFC proof of service, time tracking, quotes, invoices, live margins.",
    rel2Label: "NFC time tracking in detail",
    rel2Desc: "How the NFC tag works, what it costs and how it is attached.",
    rel3Label: "Proof of Service – Building Cleaning",
    rel3Desc: "Every time entry automatically becomes the proof for the client.",
    rel4Label: "Cleaning Workforce Scheduling",
    rel4Desc: "Shifts, routes and replacements – seamlessly connected to time tracking.",
  },
  fr: {
    title: "Pointage Nettoyage de bâtiments",
    eyebrow: "Pillar · Pointage",
    h1: "Pointage pour le nettoyage de bâtiments —",
    h1Accent: "numérique, automatique, conforme DSGVO.",
    lead: "Les entreprises de nettoyage perdent du temps chaque jour avec des feuilles d’heures, Excel et des relances à l’équipe. Taskey enregistre automatiquement le temps de travail de vos agents en NFC, GPS et synchro hors ligne – opposable, conforme au salaire minimum et directement exploitable en paie.",
    breadcrumbHome: "Accueil",
    breadcrumbCurrent: "Pointage Nettoyage de bâtiments",
    sec1Eyebrow: "Problème",
    sec1Heading: "Pourquoi les feuilles d’heures vous coûtent de l’argent.",
    sec1Intro:
      "Saisir le temps de travail dans le nettoyage sur papier ou Excel, c’est payer trois fois en fin de mois : en heures oubliées, en relances à l’équipe et en risque d’amende pour défaut de justificatif.",
    sec1Body1:
      "La loi sur le salaire minimum (§17 MiLoG) oblige toute entreprise de nettoyage à consigner début, fin et durée du temps de travail quotidien de chaque agent dans les sept jours et à les conserver deux ans. Feuilles d’heures dans la boîte à gants, notes photographiées dans les chats et tableurs Excel remplis après coup ne répondent pas à cette exigence.",
    sec1Body2:
      "En pratique : lors d’un contrôle douanier, l’entreprise ne peut pas justifier intégralement les heures de travail. À la clé, des amendes allant jusqu’à 30 000 euros par infraction. S’y ajoutent les dégâts invisibles : pauses mal saisies, temps de trajet qui disparaissent, heures supplémentaires oubliées – au détriment de la marge.",
    sec1Bullet1: "Risque d’amende lors des contrôles douaniers (FKS)",
    sec1Bullet2: "Les heures oubliées sortent directement de la marge",
    sec1Bullet3: "La saisie manuelle prend 5 à 15 minutes par site",
    sec1Bullet4: "Les litiges sur pauses et trajets pèsent sur l’équipe",
    sec2Eyebrow: "Solution",
    sec2Heading: "Voici comment fonctionne le pointage avec Taskey.",
    sec2Intro:
      "À l’arrivée, chaque agent approche son smartphone du tag NFC sur le site. Taskey identifie automatiquement l’agent, le site, l’heure et la position GPS. Idem en partant – terminé.",
    sec2Sub1Heading: "Check-in NFC sur le site",
    sec2Sub1Body:
      "Un autocollant NFC résistant aux intempéries à l’entrée suffit. Taskey enregistre le départ avec horodatage, coordonnées GPS et ID agent. Pas d’app à ouvrir, pas de mot de passe à saisir – le téléphone tape et l’entrée est créée.",
    sec2Sub2Heading: "Synchro hors ligne même en sous-sol",
    sec2Sub2Body:
      "Parkings souterrains, caves ou bâtiments anciens sans réseau font partie du quotidien du nettoyage. Taskey stocke toutes les saisies localement sur l’appareil et synchronise automatiquement dès que le réseau revient. Aucun trou, aucun doublon.",
    sec2Sub3Heading: "Règles de pause automatiques",
    sec2Sub3Body:
      "Définissez par agent ou par site des modèles de pause fixes. Taskey calcule le temps net conformément au salaire minimum et impute automatiquement les pauses dans les bonnes proportions – pas de rattrapage manuel.",
    sec2Sub4Heading: "Fini les feuilles d’heures",
    sec2Sub4Body:
      "En fin de mois, Taskey exporte toutes les données de temps en PDF, CSV, Excel ou au format DATEV pour la paie. Un clic au lieu d’un marathon du week-end au bureau.",
    sec3Eyebrow: "Droit & conformité",
    sec3Heading: "Salaire minimum, DSGVO et infalsifiabilité.",
    sec3Intro:
      "Un pointage numérique n’a de valeur que s’il tient aussi devant un tribunal. Taskey est conçu dès le départ pour les exigences juridiques du nettoyage de bâtiments en Allemagne.",
    sec3Bullet1: "Conforme salaire minimum selon §17 MiLoG",
    sec3Bullet2: "Conforme DSGVO : serveurs en Allemagne, DPA inclus",
    sec3Bullet3: "Infalsifiable : les saisies de temps sont versionnées et signées cryptographiquement",
    sec3Bullet4: "Arrêt CJUE 2019 : le temps de travail doit être enregistré de façon objective, fiable et accessible – Taskey remplit les trois critères",
    sec3Bullet5: "Recherche plein texte et filtres par agent, site, période, donneur d’ordre",
    sec3Bullet6: "Journal d’audit consignant chaque modification ultérieure",
    sec4Eyebrow: "Pratique",
    sec4Heading: "Ce qui change concrètement pour les dirigeants.",
    sec4Body1:
      "Au lieu de trier les feuilles d’heures le dernier jour du mois, vous voyez en temps réel qui travaille où, combien de temps et avec quel solde de pauses. Les compteurs d’heures avancent automatiquement. Heures sup, arrêts maladie et congés alimentent la même vue.",
    sec4Body2:
      "Si un donneur d’ordre demande si le nettoyage a bien eu lieu mardi à 6 h 30, plus besoin d’appels – vous ouvrez le site dans Taskey, voyez le scan NFC, le point GPS et envoyez au donneur d’ordre une confirmation PDF en une minute.",
    sec4Body3:
      "Côté paie, cela signifie : un seul clic exporte toutes les données de temps au format DATEV. Les experts-comptables et la paie n’ont rien à compléter, rien à questionner et plus aucune relance à faire.",
    faq1Q: "Le pointage NFC fonctionne-t-il aussi sans internet ?",
    faq1A:
      "Oui. Taskey stocke toutes les saisies de temps localement sur le smartphone et synchronise automatiquement dès que l’app retrouve du réseau. Parkings souterrains, bâtiments anciens ou façades vitrées sans réception ne posent aucun problème.",
    faq2Q: "Taskey respecte-t-il l’obligation de consignation prévue par la loi sur le salaire minimum ?",
    faq2A:
      "Oui. Taskey documente début, fin et durée du temps de travail quotidien de chaque agent, archive les entrées de manière opposable et les met à disposition à tout moment en PDF pour les contrôles douaniers ou le FKS – au-delà du délai légal de conservation.",
    faq3Q: "Puis-je transmettre les heures enregistrées directement à DATEV ?",
    faq3A:
      "Oui. Taskey exporte les données de paie au format standard DATEV. Votre expert-comptable ou votre paie interne importe le fichier directement, sans retouche.",
    faq4Q: "Comment Taskey empêche-t-il les manipulations ou modifications rétroactives ?",
    faq4A:
      "Chaque entrée de temps est associée à un horodatage, une position GPS, un ID agent et un identifiant d’appareil. Les modifications ultérieures ne sont possibles que par les rôles habilités et avec un journal d’audit – chaque intervention reste traçable.",
    faq5Q: "Mes agents ont-ils besoin d’un smartphone d’entreprise ?",
    faq5A:
      "Non. Taskey fonctionne sur smartphones privés et d’entreprise (iOS et Android). L’app est multilingue (allemand, turc, russe, polonais et plus) et conçue si simplement qu’aucune formation n’est nécessaire.",
    faq6Q: "Combien coûte le pointage dans Taskey ?",
    faq6A:
      "Le pointage NFC est inclus dans chaque tarif Taskey – à partir de 119 € par mois pour le tarif Beginner (plus 4,40 € par site actif). Pas de supplément par agent.",
    rel1Label: "Logiciel pour le nettoyage de bâtiments",
    rel1Desc: "Logiciel métier tout-en-un : planification, justificatif NFC, pointage, devis, factures, marges en direct.",
    rel2Label: "Pointage NFC en détail",
    rel2Desc: "Comment le tag NFC fonctionne, combien il coûte et comment il est apposé.",
    rel3Label: "Justificatif d’intervention – Nettoyage",
    rel3Desc: "Chaque saisie de temps devient automatiquement le justificatif pour le donneur d’ordre.",
    rel4Label: "Planification Nettoyage",
    rel4Desc: "Équipes, tournées et remplacements – reliés sans couture au pointage.",
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
        { name: c.breadcrumbCurrent, url: `https://www.taskeyapp.com${path}` },
      ]}
      sections={[
        {
          eyebrow: c.sec1Eyebrow,
          heading: c.sec1Heading,
          intro: c.sec1Intro,
          body: [c.sec1Body1, c.sec1Body2],
          bullets: [
            c.sec1Bullet1,
            c.sec1Bullet2,
            c.sec1Bullet3,
            c.sec1Bullet4,
          ],
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
          intro: c.sec3Intro,
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
          href: "/nfc-zeiterfassung",
          label: c.rel2Label,
          description: c.rel2Desc,
        },
        {
          href: "/leistungsnachweis-gebaeudereinigung",
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
