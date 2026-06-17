/* ============================================================================
 * News translations (EN + FR)
 * ----------------------------------------------------------------------------
 * Keyed by post slug. If a field is missing, the slug page falls back to the
 * German version from posts.ts. Bodies for long marketing articles fall back
 * to the German body with a translation banner shown above it; bodies for
 * short release/update notes are translated fully.
 * ========================================================================== */

import type { PostTranslation } from "./posts";

type Locale = "en" | "fr";

const T: Record<string, Partial<Record<Locale, PostTranslation>>> = {
  "taskey-share-live": {
    en: {
      title: "Taskey Share is live: the client portal is here",
      summary:
        "We talked about it for a while – now it's here. Taskey Share, the portal where your clients see for themselves what's happening on site, goes live today and ships in every plan. Here's what it does, what it fixes and how to switch it on.",
      metaTitle: "Taskey Share is live | Client portal now in every plan",
      metaDescription:
        "Taskey Share is finally out. The lean client portal shows your customers live status, proof of service, budgets and messages straight from the browser — no phone calls, no email. Included in every Taskey plan from day one.",
      date: "June 2, 2026",
    },
    fr: {
      title: "Taskey Share est en ligne : le portail client est là",
      summary:
        "Annoncé depuis longtemps — il est enfin là. Taskey Share, le portail dans lequel vos clients voient ce qui se passe chez eux, est disponible aujourd'hui dans tous les plans. Ce qu'il fait, ce qu'il règle et comment l'activer.",
      metaTitle: "Taskey Share en ligne | Portail client inclus dans tous les plans",
      metaDescription:
        "Taskey Share est enfin disponible. Le portail léger montre à vos clients le statut en direct, les preuves de service, les budgets et les échanges directement dans le navigateur — sans appels, sans e-mails. Inclus dans chaque plan Taskey.",
      date: "2 juin 2026",
    },
  },

  "kommunikation-einsatzort-buero-erfolgsfaktor": {
    en: {
      title: "Communication between field and office: the underrated success factor",
      summary:
        "Why most cleaning businesses still lose hours every day on the simple back-and-forth between site and office — and how a single live channel changes the economics.",
      metaTitle: "Field-to-office communication: the underrated success factor | Taskey",
      metaDescription:
        "Most cleaning businesses still lose hours daily on phone calls between site and office. Here's how a single live channel removes the friction and changes margins.",
      date: "May 18, 2026",
    },
    fr: {
      title: "Communication terrain ↔ bureau : le facteur de réussite sous-estimé",
      summary:
        "Pourquoi la plupart des entreprises de nettoyage perdent encore des heures chaque jour dans les allers-retours entre site et bureau — et comment un canal unique en direct change l'économie.",
      metaTitle: "Communication terrain-bureau : le facteur de réussite sous-estimé | Taskey",
      metaDescription:
        "La plupart des entreprises de nettoyage perdent encore des heures par jour en appels entre site et bureau. Voici comment un canal unique en direct supprime les frictions et change les marges.",
      date: "18 mai 2026",
    },
  },

  "mg-gebaeudeservice-duesseldorf-case-study": {
    en: {
      title: "MG Gebäudeservice Düsseldorf: how 30 employees switched to Taskey in 4 weeks",
      summary:
        "An established Düsseldorf cleaning business with a broad portfolio – offices, doctor's surgeries, production halls. How they moved off paper timesheets and onto Taskey in four weeks, and what changed.",
      metaTitle: "Case study: MG Gebäudeservice Düsseldorf with Taskey | Taskey",
      metaDescription:
        "How a 30-person Düsseldorf cleaning company moved off paper timesheets onto Taskey in 4 weeks – with NFC proof of service, scheduling and live billing.",
      date: "April 24, 2026",
    },
    fr: {
      title: "MG Gebäudeservice Düsseldorf : comment 30 employés ont basculé sur Taskey en 4 semaines",
      summary:
        "Un nettoyeur établi à Düsseldorf, portefeuille large – bureaux, cabinets médicaux, halls de production. Comment ils ont quitté les fiches papier pour Taskey en quatre semaines, et ce qui a changé.",
      metaTitle: "Étude de cas : MG Gebäudeservice Düsseldorf avec Taskey | Taskey",
      metaDescription:
        "Comment une entreprise de nettoyage de 30 personnes à Düsseldorf a quitté les fiches papier pour Taskey en 4 semaines – avec preuve NFC, planification et facturation en direct.",
      date: "24 avril 2026",
    },
  },

  "zeiterfassung-gebaeudereinigung-nfc": {
    en: {
      title: "Time tracking in commercial cleaning: why NFC beats every other method",
      summary:
        "Paper timesheets, fingerprint scanners, kiosk apps – we've seen every variant. Here's why NFC is the only one that actually works in the day-to-day reality of commercial cleaning.",
      metaTitle: "Time tracking in cleaning: why NFC wins | Taskey",
      metaDescription:
        "Paper, fingerprints, kiosks – we've tested every time-tracking method in commercial cleaning. Here's why NFC is the only one that survives the day-to-day reality.",
      date: "March 30, 2026",
    },
    fr: {
      title: "Pointage en nettoyage : pourquoi le NFC bat toutes les autres méthodes",
      summary:
        "Fiches papier, lecteurs d'empreintes, applis kiosque – nous avons tout testé. Voici pourquoi le NFC est la seule méthode qui tient vraiment dans le quotidien du nettoyage professionnel.",
      metaTitle: "Pointage en nettoyage : pourquoi le NFC l'emporte | Taskey",
      metaDescription:
        "Papier, empreintes, kiosques – nous avons tout testé en nettoyage professionnel. Voici pourquoi le NFC est la seule méthode qui survit au quotidien.",
      date: "30 mars 2026",
    },
  },

  "offline-modus": {
    en: {
      title: "Full offline mode",
      summary:
        "No signal on site? No problem. Taskey will soon work fully offline – and sync the moment connectivity returns.",
      metaTitle: "Full offline mode | Taskey",
      metaDescription:
        "Coming soon: Taskey will work fully offline. Create jobs, clock in, tick checklists – everything syncs once you're back online.",
      body: `One of the most-requested features from our community: a true offline mode.

Not just read – but also creating jobs, clocking in, ticking checklists. Everything stored locally, syncing automatically the moment you're back online.

Especially for crews working in basements, tunnels or large construction sites, this is a game changer. We're on it.`,
      date: "Coming soon",
    },
    fr: {
      title: "Mode hors ligne complet",
      summary:
        "Pas de réseau sur le site ? Pas de souci. Taskey fonctionnera bientôt entièrement hors ligne – avec synchronisation dès que la connexion revient.",
      metaTitle: "Mode hors ligne complet | Taskey",
      metaDescription:
        "Bientôt : Taskey fonctionnera entièrement hors ligne. Créer des missions, pointer, cocher des checklists – tout se synchronise dès le retour de la connexion.",
      body: `Une des fonctionnalités les plus demandées par notre communauté : un vrai mode hors ligne.

Pas seulement la lecture – aussi la création de missions, le pointage, les checklists. Tout est stocké localement et synchronisé automatiquement dès que vous êtes de nouveau en ligne.

Surtout pour les équipes qui travaillent en caves, tunnels ou grands chantiers, c'est un game changer. On y travaille.`,
      date: "Prochainement",
    },
  },

  "nfc-tags-update": {
    en: {
      title: "NFC tags now included in every plan",
      summary:
        "NFC tags are now built into every Taskey plan – no separate orders any more. Crews tap tools, machines and vehicles with a single touch.",
      metaTitle: "NFC tags now in every Taskey plan | Update",
      metaDescription:
        "Every Taskey plan now includes NFC tags by default. Tap tools, machines and vehicles to log who took what, when, and when it came back.",
      body: `We spent a long time thinking about how to make NFC as simple as possible. The answer was: just throw it in.

From today, every START customer gets 3 NFC tags, every GROW customer 15 tags, and every SCALE customer 45 tags – included, no extra cost.

The tags arrive by post. You stick them on machines, tool boxes or vehicles. Your team taps them with their phone – and everything is logged automatically. Who took what, when. Who brought it back.

No more disappearing kit. No more arguments. No more paper trail.`,
      date: "March 12, 2026",
    },
    fr: {
      title: "Tags NFC inclus dans chaque plan",
      summary:
        "Les tags NFC sont désormais intégrés à chaque plan Taskey – plus besoin de commandes séparées. Les équipes scannent outils, machines et véhicules d'un simple tap.",
      metaTitle: "Tags NFC dans chaque plan Taskey | Mise à jour",
      metaDescription:
        "Tous les plans Taskey incluent désormais des tags NFC. Scannez outils, machines et véhicules pour enregistrer qui a pris quoi, quand, et quand c'est revenu.",
      body: `On a longuement réfléchi à comment rendre le NFC le plus simple possible. La réponse : on inclut tout.

Désormais, chaque client START reçoit 3 tags NFC, chaque client GROW 15 tags, et chaque client SCALE 45 tags – inclus, sans surcoût.

Les tags arrivent par courrier. Vous les collez sur les machines, caisses à outils ou véhicules. Vos équipes approchent leur téléphone – et tout est journalisé automatiquement. Qui a pris quoi, quand. Qui a rapporté.

Plus de matériel qui disparaît. Plus de discussions. Plus de paperasse.`,
      date: "12 mars 2026",
    },
  },

  "taskey-16": {
    en: {
      title: "Taskey 1.6 – Photo gallery & improved GPS",
      summary:
        "Version 1.6 brings a complete photo gallery for projects and jobs, plus real-time GPS tracking.",
      metaTitle: "Taskey 1.6 release notes | Photo gallery & GPS",
      metaDescription:
        "Taskey 1.6 is live. Highlights: per-job photo gallery, faster real-time GPS tracking with 7-day route history, and a tightened navigation.",
      body: `Taskey 1.6 is live. The headline changes:

Photo gallery: Every job and every project now has its own image gallery. Before/after shots, damage documentation, handover photos – all stored on the job and visible to everyone involved.

GPS tracking: Real-time tracking has been rebuilt from the ground up. The map is faster, positions update more frequently, and you can now pull up route history for the last 7 days.

UI refresh: We've tightened the navigation inside the app. Fewer clicks to the information that matters.

The update rolls out automatically – you don't need to do anything.`,
      date: "February 14, 2026",
    },
    fr: {
      title: "Taskey 1.6 – Galerie photo & GPS amélioré",
      summary:
        "La version 1.6 apporte une galerie photo complète pour les projets et missions, ainsi qu'un suivi GPS en temps réel.",
      metaTitle: "Taskey 1.6 release notes | Galerie photo & GPS",
      metaDescription:
        "Taskey 1.6 est disponible. À retenir : galerie photo par mission, suivi GPS temps réel plus rapide avec historique de 7 jours, navigation resserrée.",
      body: `Taskey 1.6 est en ligne. Les principales nouveautés :

Galerie photo : Chaque mission et chaque projet dispose désormais de sa propre galerie d'images. Avant/après, documentation des dommages, photos de réception – tout est stocké sur la mission et visible par toutes les parties prenantes.

Suivi GPS : Le tracking en temps réel a été entièrement refait. La carte est plus rapide, les positions sont mises à jour plus souvent, et vous pouvez consulter l'historique de tournée sur les 7 derniers jours.

Refonte UI : Nous avons resserré la navigation dans l'application. Moins de clics jusqu'à l'information importante.

La mise à jour est déployée automatiquement – vous n'avez rien à faire.`,
      date: "14 février 2026",
    },
  },

  "enterprise-launch": {
    en: {
      title: "Taskey Enterprise is here",
      summary:
        "For businesses with 50+ employees or custom requirements: own integrations, dedicated support, bespoke workflows.",
      metaTitle: "Taskey Enterprise is here | Custom plans for large operations",
      metaDescription:
        "Taskey Enterprise: custom integrations, dedicated support and bespoke workflows for cleaning and facility businesses with 50+ employees.",
      body: `Since Taskey launched, we've kept hearing from operations that need more than what our standard plans cover.

Large teams. Specific integrations. Their own billing systems. Complex role structures.

That's what Taskey Enterprise is for.

What it means: we sit down with you, get to know your operation – and then build the version of Taskey that you need. With your branding, your workflows, your integrations.

No one-size package. No compromises.

Interested? Just get in touch.`,
      date: "January 20, 2026",
    },
    fr: {
      title: "Taskey Enterprise est là",
      summary:
        "Pour les entreprises de 50+ employés ou aux besoins spécifiques : intégrations dédiées, support dédié, workflows sur mesure.",
      metaTitle: "Taskey Enterprise est là | Plans sur mesure pour grandes opérations",
      metaDescription:
        "Taskey Enterprise : intégrations sur mesure, support dédié et workflows personnalisés pour les entreprises de nettoyage et facility de plus de 50 employés.",
      body: `Depuis le lancement de Taskey, des entreprises nous contactent régulièrement avec des besoins qui dépassent nos plans standard.

Grandes équipes. Intégrations spécifiques. Systèmes de facturation propriétaires. Structures de rôles complexes.

C'est précisément ce que couvre Taskey Enterprise.

Concrètement : on s'assoit avec vous, on comprend votre activité – et on construit la version de Taskey dont vous avez besoin. Avec votre branding, vos workflows, vos interfaces.

Pas de pack unique. Pas de compromis.

Intéressé ? Contactez-nous directement.`,
      date: "20 janvier 2026",
    },
  },
};

export function getPostTranslation(slug: string, locale: "en" | "fr"): PostTranslation | undefined {
  return T[slug]?.[locale];
}
