"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

/* FEATURES — Mainpage-Stil. Mehrsprachig (DE / EN / FR). */

type Feature = { title: string; desc: string; bullets: string[] };
type Category = { id: string; badge: string; headline: string; intro: string; features: Feature[] };

type Content = {
  hero: { badge: string; title1: string; title2: string; subtitle: string };
  categories: Category[];
  cta: { badge: string; title: string; subtitle: string; pricing: string; start: string };
};

const content: Record<"de" | "en" | "fr", Content> = {
  de: {
    hero: {
      badge: "Funktionen · Klar gegliedert",
      title1: "Alles, was Ihr Betrieb",
      title2: "wirklich braucht.",
      subtitle:
        "Keine 200 Buttons. Fünf klare Bereiche — jeder löst ein konkretes Problem aus dem Alltag.",
    },
    categories: [
      {
        id: "nfc",
        badge: "NFC-Aufkleber",
        headline: "Ankommen. Scannen. Nachweis fertig.",
        intro:
          "Ein kleiner Aufkleber am Objekt — und jeder Einsatz ist automatisch dokumentiert. Wetterfest, manipulationssicher, jahrelang haltbar.",
        features: [
          {
            title: "Digitale Objektakte",
            desc: "Scan am Eingang — und Ihr Team sieht sofort, was heute zu tun ist. Die Akte bleibt am Objekt, auch wenn Personal wechselt.",
            bullets: ["Heutige Aufgaben & Sonderwünsche", "Letzte Reinigung mit Foto", "Wetterfest, hält 5+ Jahre"],
          },
          {
            title: "Leistungsnachweis per Scan",
            desc: "Jeder Scan mit Zeitstempel und Standort. Wenn der Auftraggeber fragt — Sie haben die Antwort schwarz auf weiß.",
            bullets: ["Zeitstempel + GPS bei jedem Scan", "Manipulationssicher", "Sofort als PDF teilbar"],
          },
          {
            title: "Rundgang-Kontrolle",
            desc: "Mehrere Etagen, viele Räume. Pro Bereich ein Tag — lückenloser Beleg, dass alles erledigt wurde.",
            bullets: ["Tag pro Etage / Bereich", "Automatisches Protokoll", "Keine vergessenen Räume"],
          },
          {
            title: "Material- & Schlüsselverwaltung",
            desc: "Putzwagen oder Schlüsselbund einmal taggen. Bestände, Übergaben und Verluste sind sofort nachvollziehbar.",
            bullets: ["Bestand per Scan dokumentieren", "Schlüssel-Übergaben mit Signatur", "Benachrichtigung bei knappem Material"],
          },
        ],
      },
      {
        id: "kalender",
        badge: "Kalender & Planung",
        headline: "Der ganze Betrieb auf einen Blick.",
        intro:
          "Einsätze, Urlaub, Krankmeldungen, Termine — alles in einem Kalender. Konflikte erkennen, bevor sie entstehen.",
        features: [
          {
            title: "Einsatzplanung",
            desc: "Drag-and-Drop-Schichten, Touren und Vertretungen. Mitarbeiter sehen ihren Plan in der App — Push, wenn sich etwas ändert.",
            bullets: ["Wiederkehrende Reinigungstouren", "Sofort-Push bei Änderungen", "Vertretungen mit einem Klick"],
          },
          {
            title: "Urlaub & Krankmeldungen",
            desc: "Anträge in der App, Genehmigung im Dashboard. Konflikte werden im Kalender automatisch markiert.",
            bullets: ["Antrag → Genehmigung → Kalender", "Resturlaubsanzeige", "Krankmeldung mit Foto-Upload"],
          },
          {
            title: "Automatische Erinnerungen",
            desc: "Niemand vergisst mehr einen Termin — Push für Mitarbeiter, Übersicht für die Disposition.",
            bullets: ["Push 24h / 1h vor Einsatz", "Eskalation bei Nicht-Bestätigung", "Auch für Sonderaufgaben"],
          },
        ],
      },
      {
        id: "zeit",
        badge: "Zeit & Buchhaltung",
        headline: "Schluss mit Stundenzettel-Chaos.",
        intro:
          "Arbeitszeit wird beim Scan automatisch erfasst, Pausen sauber getrennt, am Monatsende ist alles abrechnungsfertig.",
        features: [
          {
            title: "Automatische Zeiterfassung",
            desc: "Start beim Scan, Stop beim Auschecken. Pausen mit einem Klick. Keine manuelle Nacharbeit, keine Diskussionen.",
            bullets: ["Start/Stop per NFC", "Pausen automatisch gesetzkonform", "DATEV-, PDF- & Excel-Export"],
          },
          {
            title: "Rentabilitäts-Auswertung",
            desc: "Sehen Sie pro Objekt, Mitarbeiter oder Tour, ob es sich rechnet. Live, ohne Excel-Akrobatik.",
            bullets: ["Marge pro Objekt in Echtzeit", "Lohnkosten automatisch berechnet", "Belege per Foto direkt zugeordnet"],
          },
          {
            title: "Belege & Spesen",
            desc: "Quittung fotografieren, fertig. Kategorisiert, dem richtigen Objekt zugeordnet — keine verlorenen Zettel mehr.",
            bullets: ["Foto-Upload aus der App", "Automatische Kategorisierung", "Direkter DATEV-Export"],
          },
        ],
      },
      {
        id: "share",
        badge: "Taskey Share",
        headline: "Das Auftraggeber-Portal.",
        intro:
          "Ihr Auftraggeber sieht in einem schlanken Portal jederzeit, wann zuletzt gereinigt wurde — mit Fotos, Protokollen und Live-Status. Schluss mit „War heute jemand da?“-Anrufen.",
        features: [
          {
            title: "Live-Status pro Objekt",
            desc: "Auftraggeber, Hausverwaltung oder Objektträger sieht jederzeit: nächster Termin, letzter Einsatz, aktueller Fortschritt.",
            bullets: ["Wann war zuletzt jemand da?", "Wann ist der nächste Einsatz?", "Aktueller Live-Fortschritt"],
          },
          {
            title: "Nachweise auf Knopfdruck",
            desc: "Fotos, Protokolle, Unterschriften — alles am Objekt verknüpft. Auftraggeber lädt sich seine Belege selbst.",
            bullets: ["Fotos vor/nach Einsatz", "PDF-Export für Beirat & Abrechnung", "Keine Mail-Tickets mehr"],
          },
          {
            title: "Mängel direkt melden",
            desc: "Auftraggeber meldet eine Auffälligkeit mit Foto im Portal — sie landet direkt im Auftrag, ohne Umweg.",
            bullets: ["Foto + Standort + Beschreibung", "Push direkt an Disposition", "Status-Tracking bis erledigt"],
          },
          {
            title: "Vertrauen ohne Aufwand",
            desc: "Saubere Außenkommunikation, ohne dass Sie sie aktiv erzeugen müssen. Das Portal arbeitet von allein.",
            bullets: ["Gewinnt Ausschreibungen", "Reduziert Reklamationen", "DSGVO-konform"],
          },
        ],
      },
      {
        id: "team",
        badge: "Team & Kunden",
        headline: "Zentral, sauber, in einem System.",
        intro:
          "Mitarbeiter, Kunden, Objekte — alles in einer Datenbank. Keine Excel-Listen, keine WhatsApp-Suche.",
        features: [
          {
            title: "Mitarbeiter-Verwaltung",
            desc: "Stammdaten, Qualifikationen, Verfügbarkeiten — alles zentral. Rollen und Berechtigungen sauber gesteuert.",
            bullets: ["Vorarbeiter-Rollen", "Qualifikationen & Schulungen", "DSGVO-konforme Personalakte"],
          },
          {
            title: "Kundenakte",
            desc: "Alle Kunden mit Objekten, Verträgen und Kontakten. Hinweise und Sonderwünsche direkt am Datensatz.",
            bullets: ["Mehrere Objekte pro Kunde", "Vertragslaufzeiten & Kündigungen", "Hinweise sofort sichtbar"],
          },
          {
            title: "GPS — datenschutzkonform",
            desc: "Standort nur am Auftrag, nicht permanent. Faire, transparente Dokumentation für Ihr Team.",
            bullets: ["Nur bei aktivem Auftrag", "Stoppt bei Pause automatisch", "Vom Mitarbeiter einsehbar"],
          },
        ],
      },
    ],
    cta: {
      badge: "3 Monate kostenlos",
      title: "Selbst ausprobieren — ohne Risiko.",
      subtitle: "Keine Kreditkarte. Täglich kündbar. Setup in einem Tag.",
      pricing: "Preise ansehen",
      start: "Jetzt starten",
    },
  },

  en: {
    hero: {
      badge: "Features · Cleanly structured",
      title1: "Everything your business",
      title2: "actually needs.",
      subtitle:
        "No 200 buttons. Five clear areas — each one solving a concrete daily problem.",
    },
    categories: [
      {
        id: "nfc",
        badge: "NFC stickers",
        headline: "Arrive. Scan. Proof done.",
        intro:
          "A small sticker on the property — and every visit is automatically documented. Weatherproof, tamper-proof, lasts for years.",
        features: [
          {
            title: "Digital property file",
            desc: "Scan at the entrance — your team instantly sees what's due today. The file stays on the property, even when staff changes.",
            bullets: ["Today's tasks & special requests", "Last cleaning with photo", "Weatherproof, lasts 5+ years"],
          },
          {
            title: "Service proof per scan",
            desc: "Every scan with timestamp and location. When the client asks — you have the answer in black and white.",
            bullets: ["Timestamp + GPS on every scan", "Tamper-proof", "Instant PDF sharing"],
          },
          {
            title: "Walkthrough control",
            desc: "Several floors, many rooms. One tag per area — seamless proof that everything was done.",
            bullets: ["One tag per floor / area", "Automatic protocol", "No forgotten rooms"],
          },
          {
            title: "Material & key management",
            desc: "Tag your cleaning cart or key set once. Stock, handovers and losses are immediately traceable.",
            bullets: ["Document stock by scan", "Key handovers with signature", "Notification when material runs low"],
          },
        ],
      },
      {
        id: "kalender",
        badge: "Calendar & planning",
        headline: "The whole business at a glance.",
        intro:
          "Shifts, vacation, sick leave, appointments — all in one calendar. Spot conflicts before they happen.",
        features: [
          {
            title: "Shift planning",
            desc: "Drag-and-drop shifts, tours and substitutes. Employees see their plan in the app — push when something changes.",
            bullets: ["Recurring cleaning tours", "Instant push on changes", "Substitutes with one click"],
          },
          {
            title: "Vacation & sick leave",
            desc: "Requests in the app, approval in the dashboard. Conflicts are automatically flagged in the calendar.",
            bullets: ["Request → approval → calendar", "Remaining vacation display", "Sick note with photo upload"],
          },
          {
            title: "Automatic reminders",
            desc: "No one forgets an appointment again — push for staff, overview for dispatch.",
            bullets: ["Push 24h / 1h before shift", "Escalation on non-confirmation", "Also for special tasks"],
          },
        ],
      },
      {
        id: "zeit",
        badge: "Time & accounting",
        headline: "End the timesheet chaos.",
        intro:
          "Working time is captured automatically by scan, breaks cleanly separated, ready to invoice at month-end.",
        features: [
          {
            title: "Automatic time tracking",
            desc: "Start on scan, stop on checkout. Breaks with one click. No manual rework, no debates.",
            bullets: ["Start/Stop via NFC", "Breaks compliant by default", "DATEV, PDF & Excel export"],
          },
          {
            title: "Profitability analysis",
            desc: "See per property, employee or tour whether it pays off. Live, without Excel acrobatics.",
            bullets: ["Margin per property in real time", "Wage cost auto-calculated", "Receipts by photo, instantly assigned"],
          },
          {
            title: "Receipts & expenses",
            desc: "Snap a receipt — done. Categorised, assigned to the right property — no more lost slips.",
            bullets: ["Photo upload from the app", "Automatic categorisation", "Direct DATEV export"],
          },
        ],
      },
      {
        id: "share",
        badge: "Taskey Share",
        headline: "The client portal.",
        intro:
          "Your client sees in a clean portal anytime when the last cleaning happened — with photos, protocols and live status. End the \"Was anyone there today?\" calls.",
        features: [
          {
            title: "Live status per property",
            desc: "Clients, property managers or owners always see: next appointment, last visit, current progress.",
            bullets: ["When was someone there last?", "When is the next visit?", "Current live progress"],
          },
          {
            title: "Proof on demand",
            desc: "Photos, protocols, signatures — all linked to the property. Clients download their proof themselves.",
            bullets: ["Before/after photos", "PDF export for board & billing", "No more email tickets"],
          },
          {
            title: "Report defects directly",
            desc: "Client reports an issue with a photo in the portal — it lands directly in the order, no detour.",
            bullets: ["Photo + location + description", "Push directly to dispatch", "Status tracking until resolved"],
          },
          {
            title: "Trust, without effort",
            desc: "Clean external communication — without you actively producing it. The portal works on its own.",
            bullets: ["Wins tenders", "Reduces complaints", "GDPR compliant"],
          },
        ],
      },
      {
        id: "team",
        badge: "Team & customers",
        headline: "Central, clean, one system.",
        intro:
          "Employees, customers, properties — all in one database. No Excel lists, no WhatsApp searches.",
        features: [
          {
            title: "Employee management",
            desc: "Master data, qualifications, availabilities — all central. Roles and permissions cleanly controlled.",
            bullets: ["Foreman roles", "Qualifications & training", "GDPR-compliant personnel file"],
          },
          {
            title: "Customer file",
            desc: "All customers with properties, contracts and contacts. Notes and special requests right on the record.",
            bullets: ["Multiple properties per customer", "Contract terms & cancellations", "Notes immediately visible"],
          },
          {
            title: "GPS — privacy-compliant",
            desc: "Location only during orders, not permanent. Fair, transparent documentation for your team.",
            bullets: ["Only during active order", "Stops automatically on break", "Visible to the employee"],
          },
        ],
      },
    ],
    cta: {
      badge: "3 months free",
      title: "Try it yourself — no risk.",
      subtitle: "No credit card. Cancel daily. Setup in one day.",
      pricing: "View pricing",
      start: "Get started",
    },
  },

  fr: {
    hero: {
      badge: "Fonctionnalités · Bien structuré",
      title1: "Tout ce dont votre entreprise",
      title2: "a vraiment besoin.",
      subtitle:
        "Pas 200 boutons. Cinq domaines clairs — chacun résout un problème concret du quotidien.",
    },
    categories: [
      {
        id: "nfc",
        badge: "Étiquettes NFC",
        headline: "Arriver. Scanner. Preuve faite.",
        intro:
          "Une petite étiquette sur le site — et chaque intervention est automatiquement documentée. Étanche, infalsifiable, durable des années.",
        features: [
          {
            title: "Dossier numérique du site",
            desc: "Scan à l'entrée — votre équipe voit immédiatement ce qu'il faut faire aujourd'hui. Le dossier reste sur place, même en cas de changement de personnel.",
            bullets: ["Tâches du jour & demandes spéciales", "Dernier nettoyage avec photo", "Étanche, dure 5+ ans"],
          },
          {
            title: "Preuve d'intervention par scan",
            desc: "Chaque scan avec horodatage et localisation. Quand le client demande — vous avez la réponse noir sur blanc.",
            bullets: ["Horodatage + GPS à chaque scan", "Infalsifiable", "Partage PDF instantané"],
          },
          {
            title: "Contrôle de tournée",
            desc: "Plusieurs étages, beaucoup de pièces. Une étiquette par zone — preuve complète que tout a été fait.",
            bullets: ["Une étiquette par étage / zone", "Protocole automatique", "Aucune pièce oubliée"],
          },
          {
            title: "Gestion du matériel & clés",
            desc: "Étiquetez chariot ou trousseau une fois. Stock, remises et pertes sont immédiatement traçables.",
            bullets: ["Stock par scan", "Remise des clés avec signature", "Notification si matériel bas"],
          },
        ],
      },
      {
        id: "kalender",
        badge: "Calendrier & planning",
        headline: "Toute l'entreprise en un coup d'œil.",
        intro:
          "Interventions, congés, arrêts maladie, rendez-vous — tout dans un seul calendrier. Repérez les conflits avant qu'ils n'arrivent.",
        features: [
          {
            title: "Planning d'intervention",
            desc: "Glisser-déposer pour shifts, tournées et remplacements. Les employés voient leur planning dans l'app — push si quelque chose change.",
            bullets: ["Tournées de nettoyage récurrentes", "Push instantané sur modifications", "Remplacements en un clic"],
          },
          {
            title: "Congés & arrêts maladie",
            desc: "Demandes dans l'app, validation dans le tableau de bord. Les conflits sont automatiquement signalés.",
            bullets: ["Demande → validation → calendrier", "Affichage des congés restants", "Arrêt avec photo"],
          },
          {
            title: "Rappels automatiques",
            desc: "Plus personne n'oublie un rendez-vous — push pour le personnel, vue d'ensemble pour le dispatch.",
            bullets: ["Push 24h / 1h avant intervention", "Escalade en cas de non-confirmation", "Aussi pour tâches spéciales"],
          },
        ],
      },
      {
        id: "zeit",
        badge: "Temps & comptabilité",
        headline: "Fini le chaos des feuilles d'heures.",
        intro:
          "Le temps de travail est saisi automatiquement par scan, pauses séparées proprement, prêt à facturer en fin de mois.",
        features: [
          {
            title: "Suivi du temps automatique",
            desc: "Démarrage au scan, arrêt à la sortie. Pauses en un clic. Pas de retraitement manuel, pas de débats.",
            bullets: ["Démarrage/arrêt par NFC", "Pauses conformes par défaut", "Export DATEV, PDF & Excel"],
          },
          {
            title: "Analyse de rentabilité",
            desc: "Voyez par site, employé ou tournée si c'est rentable. En direct, sans acrobaties Excel.",
            bullets: ["Marge par site en temps réel", "Coûts salariaux calculés auto.", "Reçus par photo, immédiatement attribués"],
          },
          {
            title: "Reçus & frais",
            desc: "Photographier le ticket, c'est fait. Catégorisé, attribué au bon site — plus de bouts de papier perdus.",
            bullets: ["Upload photo depuis l'app", "Catégorisation automatique", "Export DATEV direct"],
          },
        ],
      },
      {
        id: "share",
        badge: "Taskey Share",
        headline: "Le portail client.",
        intro:
          "Votre client voit à tout moment dans un portail clair la dernière intervention — avec photos, protocoles et statut en direct. Fini les appels « Quelqu'un est passé aujourd'hui ? ».",
        features: [
          {
            title: "Statut en direct par site",
            desc: "Client, syndic ou propriétaire voit toujours : prochain rendez-vous, dernière intervention, progression actuelle.",
            bullets: ["Quand est passé le dernier ?", "Quand la prochaine intervention ?", "Progression en direct"],
          },
          {
            title: "Preuves à la demande",
            desc: "Photos, protocoles, signatures — tout lié au site. Les clients téléchargent leurs preuves eux-mêmes.",
            bullets: ["Photos avant/après", "Export PDF pour conseil & facturation", "Plus de tickets mail"],
          },
          {
            title: "Signaler des défauts directement",
            desc: "Le client signale un problème avec une photo dans le portail — il atterrit directement dans l'ordre.",
            bullets: ["Photo + lieu + description", "Push direct au dispatch", "Suivi de statut jusqu'à résolution"],
          },
          {
            title: "Confiance, sans effort",
            desc: "Communication externe propre — sans que vous ayez à la produire activement. Le portail fonctionne seul.",
            bullets: ["Gagne des appels d'offres", "Réduit les réclamations", "Conforme RGPD"],
          },
        ],
      },
      {
        id: "team",
        badge: "Équipe & clients",
        headline: "Central, propre, un seul système.",
        intro:
          "Employés, clients, sites — tout dans une base de données. Pas de listes Excel, pas de recherches WhatsApp.",
        features: [
          {
            title: "Gestion des employés",
            desc: "Données de base, qualifications, disponibilités — tout au même endroit. Rôles et droits proprement gérés.",
            bullets: ["Rôles de chef d'équipe", "Qualifications & formations", "Dossier RH conforme RGPD"],
          },
          {
            title: "Fiche client",
            desc: "Tous les clients avec sites, contrats et contacts. Notes et demandes spéciales directement sur la fiche.",
            bullets: ["Plusieurs sites par client", "Durées de contrat & résiliations", "Notes visibles immédiatement"],
          },
          {
            title: "GPS — conforme",
            desc: "Position uniquement pendant les ordres, pas en permanence. Documentation équitable et transparente.",
            bullets: ["Uniquement en ordre actif", "S'arrête automatiquement en pause", "Visible par l'employé"],
          },
        ],
      },
    ],
    cta: {
      badge: "3 mois gratuits",
      title: "Essayez vous-même — sans risque.",
      subtitle: "Pas de carte de crédit. Résiliable au jour le jour. Mise en place en un jour.",
      pricing: "Voir les tarifs",
      start: "Commencer",
    },
  },
};

export default function FeaturesClient() {
  const { language } = useLanguage();
  const c = content[language] ?? content.de;

  const [active, setActive] = useState(0);
  const cat = c.categories[active];

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.title =
        language === "en"
          ? "All features at a glance | Taskey"
          : language === "fr"
          ? "Toutes les fonctionnalités | Taskey"
          : "Alle Funktionen im Überblick | Taskey";
    }
  }, [language]);

  return (
    <main className="relative bg-gradient-to-b from-gray-950 via-[#0a1628] to-gray-950 text-white min-h-screen overflow-hidden">
      <div className="absolute top-0 left-1/4 w-[900px] h-[700px] bg-cyan-500/15 rounded-full blur-[80px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[700px] h-[600px] bg-blue-600/15 rounded-full blur-[80px] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.04),transparent_60%)] pointer-events-none" />
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <section className="relative pt-32 md:pt-40 pb-12 md:pb-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400" />
            </span>
            <span className="text-[10px] sm:text-xs font-black tracking-[0.25em] text-cyan-300 uppercase">
              {c.hero.badge}
            </span>
          </div>

          <h1 className="text-[clamp(2.5rem,7vw,5.5rem)] font-black leading-[0.95] tracking-tight mb-6 text-white">
            {c.hero.title1}
            <br />
            <span className="bg-gradient-to-r from-cyan-300 via-white to-cyan-300 bg-clip-text text-transparent">
              {c.hero.title2}
            </span>
          </h1>

          <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto">{c.hero.subtitle}</p>
        </div>
      </section>

      <section className="relative pb-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-2 md:gap-3">
            {c.categories.map((cc, i) => (
              <button
                key={cc.id}
                onClick={() => setActive(i)}
                className={`px-4 md:px-5 py-2.5 rounded-full text-xs md:text-sm font-bold tracking-wide transition-all border ${
                  i === active
                    ? "bg-white text-gray-900 border-white shadow-lg shadow-cyan-500/10"
                    : "bg-white/5 text-white/70 border-white/10 hover:bg-white/10 hover:text-white"
                }`}
              >
                {cc.badge}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="relative pb-24 md:pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div key={cat.id} className="animate-[features-fade_0.6s_ease-out]">
            <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
              <span className="inline-block px-3 py-1 text-[10px] font-black tracking-[0.3em] uppercase text-cyan-300 bg-cyan-500/10 border border-cyan-400/20 rounded-full mb-5">
                {cat.badge}
              </span>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-black leading-[0.95] tracking-tight mb-5 text-white">
                {cat.headline}
              </h2>
              <p className="text-base md:text-lg text-white/60">{cat.intro}</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
              {cat.features.map((f, i) => (
                <div
                  key={f.title}
                  className={`relative rounded-3xl p-[1.5px] ${
                    i === 0
                      ? "bg-gradient-to-br from-cyan-400/40 via-blue-500/30 to-purple-500/20"
                      : "bg-white/10"
                  }`}
                >
                  <div className="rounded-[calc(1.5rem-1.5px)] bg-gradient-to-br from-[#13203a] to-[#0d1a2e] p-7 md:p-8 h-full flex flex-col">
                    <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-400/20 flex items-center justify-center mb-5">
                      <span className="text-cyan-300 font-black text-sm">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <h3 className="text-xl md:text-2xl font-black text-white mb-3 leading-tight">
                      {f.title}
                    </h3>
                    <p className="text-sm text-white/60 leading-relaxed mb-5">{f.desc}</p>
                    <ul className="space-y-2.5 mt-auto">
                      {f.bullets.map((b) => (
                        <li key={b} className="flex items-start gap-2.5 text-sm text-white/80">
                          <svg
                            className="w-4 h-4 text-cyan-300 flex-shrink-0 mt-0.5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2.5}
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative pb-24 md:pb-32">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl bg-gradient-to-br from-[#13203a] via-[#0d1a2e] to-[#13203a] border border-white/10 p-8 md:p-12 overflow-hidden">
            <div className="absolute -top-20 -right-20 w-[400px] h-[400px] bg-cyan-500/15 rounded-full blur-[56px] pointer-events-none" />
            <div className="relative flex flex-col md:flex-row md:items-center justify-between gap-8">
              <div className="max-w-xl">
                <span className="inline-block px-3 py-1 text-[10px] font-black tracking-[0.3em] uppercase text-cyan-300 bg-cyan-500/10 border border-cyan-400/20 rounded-full mb-4">
                  {c.cta.badge}
                </span>
                <h2 className="text-3xl md:text-4xl font-black leading-tight mb-3 text-white">
                  {c.cta.title}
                </h2>
                <p className="text-white/60 text-base md:text-lg">{c.cta.subtitle}</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
                <Link
                  href="/pricing"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 border border-white/20 text-white text-sm font-bold rounded-full hover:bg-white/10 transition-colors whitespace-nowrap"
                >
                  {c.cta.pricing}
                </Link>
                <a
                  href="https://signup.taskeyapp.com"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white text-gray-900 text-sm font-bold rounded-full hover:bg-white/90 transition-colors whitespace-nowrap"
                >
                  {c.cta.start}
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes features-fade {
          from { opacity: 0; transform: translateY(12px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </main>
  );
}
