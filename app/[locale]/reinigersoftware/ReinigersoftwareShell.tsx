"use client";

import Link from "next/link";
import { motion, type Transition } from "motion/react";
import type { CSSProperties, ReactNode } from "react";

/* ─────────────────────────────────────────────────────────────────────────────
 * SEO-Landingpage „Reinigersoftware"
 * Additive Ergänzung zur Taskey-Site. Nutzt ausschließlich globale tk-Tokens
 * aus app/globals.css, damit die Seite unabhängig von Redesign-Komponenten läuft.
 * ────────────────────────────────────────────────────────────────────────── */

const springs = {
  base: { type: "spring", bounce: 0, duration: 0.5 } satisfies Transition,
  snappy: { type: "spring", bounce: 0, duration: 0.35 } satisfies Transition,
  soft: { type: "spring", bounce: 0, duration: 0.8 } satisfies Transition,
};

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.25 },
  transition: springs.base,
} as const;

const SIGNUP_URL = "https://signup.taskeyapp.com";

function Eyebrow({
  children,
  tone = "muted",
}: {
  children: ReactNode;
  tone?: "muted" | "light" | "accent";
}) {
  const color =
    tone === "light"
      ? "rgba(255,255,255,0.7)"
      : tone === "accent"
        ? "var(--tk-accent)"
        : "var(--tk-ink-muted)";
  return (
    <span className="tk-eyebrow" style={{ color }}>
      {children}
    </span>
  );
}

function PrimaryCta({
  href,
  children,
  external = false,
}: {
  href: string;
  children: ReactNode;
  external?: boolean;
}) {
  const style: CSSProperties = {
    background: "var(--tk-ink)",
    color: "#fff",
    fontSize: "16px",
    boxShadow: "0 20px 50px -20px rgba(15,23,42,0.5)",
  };
  const cls =
    "inline-flex items-center gap-2 px-7 py-4 rounded-full font-medium transition-transform";
  return (
    <motion.a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      whileTap={{ scale: 0.97 }}
      transition={springs.snappy}
      className={cls}
      style={style}
    >
      {children}
      <span aria-hidden>→</span>
    </motion.a>
  );
}

function GhostCta({ href, children }: { href: string; children: ReactNode }) {
  return (
    <motion.span whileTap={{ scale: 0.97 }} transition={springs.snappy}>
      <Link
        href={href}
        className="inline-flex items-center gap-2 px-7 py-4 rounded-full font-medium"
        style={{
          background: "transparent",
          color: "var(--tk-ink)",
          border: "1px solid rgba(15, 23, 42, 0.14)",
          fontSize: "16px",
        }}
      >
        {children}
      </Link>
    </motion.span>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
 * Hero
 * ────────────────────────────────────────────────────────────────────────── */

function HeroScene() {
  return (
    <section
      style={{
        position: "relative",
        minHeight: "88vh",
        overflow: "hidden",
        background: "var(--tk-ink)",
        color: "#fff",
        isolation: "isolate",
      }}
    >
      {/* Ambient background glow */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(60% 60% at 15% 20%, rgba(37,99,235,0.25) 0%, rgba(37,99,235,0) 60%), radial-gradient(50% 50% at 85% 75%, rgba(29,78,216,0.22) 0%, rgba(29,78,216,0) 60%)",
          pointerEvents: "none",
        }}
      />
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(180deg, rgba(11,18,32,0) 0%, rgba(11,18,32,0.4) 60%, rgba(11,18,32,0.85) 100%)",
          pointerEvents: "none",
        }}
      />

      <div
        className="tk-container-wide"
        style={{
          position: "relative",
          minHeight: "88vh",
          display: "flex",
          alignItems: "center",
          paddingTop: "14vh",
          paddingBottom: "14vh",
        }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center w-full">
          <div className="lg:col-span-8">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...springs.soft, delay: 0.1 }}
            >
              <Eyebrow tone="light">Reinigersoftware 2026</Eyebrow>
              <h1
                className="tk-display mt-6"
                style={{
                  fontSize: "clamp(2.4rem, 6.8vw, 5.5rem)",
                  color: "#fff",
                  maxWidth: "20ch",
                }}
              >
                Reinigersoftware, die
                <br />
                <span style={{ color: "rgba(255,255,255,0.65)" }}>
                  Ihren Betrieb wirklich weiterbringt.
                </span>
              </h1>
              <p
                className="mt-8"
                style={{
                  color: "rgba(255,255,255,0.8)",
                  fontSize: "clamp(1rem, 1.35vw, 1.2rem)",
                  lineHeight: 1.6,
                  maxWidth: "58ch",
                }}
              >
                Einsatzplanung, Zeiterfassung, Leistungsnachweis, Kalkulation und
                Kundenportal in einer App. Gebaut für Reinigungsbetriebe, die
                Papierstundenzettel, Excel und WhatsApp gegen ein sauberes System
                tauschen wollen. Weniger Tools, weniger Aufwand, mehr Marge.
              </p>

              <div className="mt-10 flex flex-wrap items-center gap-4">
                <PrimaryCta href={SIGNUP_URL} external>
                  Kostenlosen Account erstellen
                </PrimaryCta>
                <motion.a
                  href="#kernfunktionen"
                  whileTap={{ scale: 0.97 }}
                  transition={springs.snappy}
                  className="inline-flex items-center gap-2 px-7 py-4 rounded-full font-medium tk-glass-dark"
                  style={{ fontSize: "16px" }}
                >
                  Funktionen ansehen
                </motion.a>
              </div>

              <p
                className="mt-6"
                style={{ color: "rgba(255,255,255,0.55)", fontSize: "13px" }}
              >
                Keine Kreditkarte. Made in Germany. DSGVO-konform.
              </p>
            </motion.div>
          </div>

          <div className="lg:col-span-4 flex lg:justify-end">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...springs.soft, delay: 0.35 }}
              className="tk-glass-dark"
              style={{
                borderRadius: "var(--tk-radius-panel)",
                padding: "24px",
                maxWidth: "340px",
              }}
            >
              <Eyebrow tone="light">Auf einen Blick</Eyebrow>
              <ul
                style={{
                  marginTop: "16px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                }}
              >
                {[
                  "Einsatzplanung inkl. Springer",
                  "NFC-Zeiterfassung, mindestlohnsicher",
                  "Live-Nachweise pro Raum",
                  "Kalkulation, Angebot, Rechnung",
                  "Kundenportal mit Live-Status",
                  "DATEV-Export",
                ].map((line) => (
                  <li
                    key={line}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "10px",
                      color: "rgba(255,255,255,0.9)",
                      fontSize: "14px",
                      lineHeight: 1.5,
                    }}
                  >
                    <span
                      aria-hidden
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        width: "18px",
                        height: "18px",
                        borderRadius: "999px",
                        background: "rgba(37,99,235,0.35)",
                        color: "#fff",
                        fontSize: "11px",
                        flexShrink: 0,
                        marginTop: "2px",
                      }}
                    >
                      ✓
                    </span>
                    {line}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
 * Was Reinigersoftware ausmacht (Definition + SEO-Copy)
 * ────────────────────────────────────────────────────────────────────────── */

function DefinitionSection() {
  const kriterien = [
    {
      titel: "Ein System statt fünf",
      body: "Gute Reinigersoftware bündelt Planung, Zeiten, Nachweise, Rechnungen und Kundenkommunikation. Wer ein Tool für die Zeit und ein anderes für die Rechnung braucht, verliert Zeit an Schnittstellen.",
    },
    {
      titel: "Mobil zuerst",
      body: "Ihre Reinigungskräfte arbeiten mit dem Handy, nicht am Laptop. Reinigersoftware, die nur am Rechner sauber läuft, wird im Betrieb nicht angenommen.",
    },
    {
      titel: "Nachweise, die vor Gericht halten",
      body: "NFC-Objektnachweis, GPS-Zeiterfassung, Foto-Protokoll. Wer bei Reklamationen oder Zoll-Prüfung sauber dokumentiert ist, muss nichts erklären.",
    },
    {
      titel: "Fair skalierender Preis",
      body: "Pro-Mitarbeiter-Preise werden mit dem Team teuer. Sinnvoller sind Pauschalen, die Betriebe planbar machen, unabhängig davon, ob Sie zehn oder achtzig Reinigungskräfte beschäftigen.",
    },
    {
      titel: "DSGVO und Made in Germany",
      body: "Standortdaten, Arbeitszeiten und Kundenlisten sind personenbezogen. Anbieter mit Sitz und Servern in der EU liefern hier eine sichere Grundlage.",
    },
    {
      titel: "Ohne IT-Abteilung nutzbar",
      body: "Onboarding in Tagen, nicht Monaten. Wenn Ihr Team eine Schulung braucht, um einen Einsatz zu starten, ist die Software zu kompliziert.",
    },
  ];

  return (
    <section
      className="tk-section"
      style={{ background: "var(--tk-canvas)", color: "var(--tk-ink)" }}
    >
      <div className="tk-container">
        <div className="max-w-3xl">
          <motion.div {...fadeUp}>
            <Eyebrow>Was Reinigersoftware ausmacht</Eyebrow>
            <h2
              className="tk-headline mt-4"
              style={{
                fontSize: "clamp(2rem, 4vw, 3rem)",
                color: "var(--tk-ink)",
              }}
            >
              Nicht jede Software für Reinigungsfirmen ist
              <br />
              <span style={{ color: "var(--tk-ink-muted)" }}>
                für den Alltag gemacht.
              </span>
            </h2>
            <p
              className="mt-6"
              style={{
                color: "var(--tk-ink-muted)",
                fontSize: "1.0625rem",
                lineHeight: 1.65,
                maxWidth: "62ch",
              }}
            >
              Reinigersoftware verspricht viel. Am Ende zählt, ob die Disponentin
              den Plan in zehn Minuten baut, ob die Reinigungskraft ohne Schulung
              einstempelt und ob der Kunde am nächsten Morgen weiß, dass sein
              Objekt sauber ist. Wir haben sechs Kriterien zusammengetragen, an
              denen sich moderne Reinigersoftware messen lassen muss.
            </p>
          </motion.div>
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {kriterien.map((k, i) => (
            <motion.article
              key={k.titel}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ ...springs.base, delay: i * 0.05 }}
              className="tk-glass"
              style={{
                borderRadius: "var(--tk-radius-card)",
                padding: "clamp(20px, 2.2vw, 28px)",
                background: "rgba(255,255,255,0.9)",
              }}
            >
              <h3
                className="tk-headline"
                style={{
                  fontSize: "clamp(1.05rem, 1.4vw, 1.2rem)",
                  color: "var(--tk-ink)",
                }}
              >
                {k.titel}
              </h3>
              <p
                style={{
                  marginTop: "10px",
                  color: "var(--tk-ink-muted)",
                  fontSize: "15px",
                  lineHeight: 1.6,
                }}
              >
                {k.body}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
 * Kernfunktionen einer modernen Reinigersoftware
 * ────────────────────────────────────────────────────────────────────────── */

function FeaturesSection() {
  const features: {
    tag: string;
    titel: string;
    body: string;
    href: string;
    linkLabel: string;
  }[] = [
    {
      tag: "Einsatzplanung",
      titel: "Der Plan schreibt sich weitgehend selbst.",
      body: "Objekte, Kolonnen, Springer und Vertragsintervalle in einem Kalender. Wiederkehrende Einsätze laufen automatisch, Ausfälle werden per Vorschlag ersetzt.",
      href: "/einsatzplanung-reinigung",
      linkLabel: "Einsatzplanung im Detail",
    },
    {
      tag: "Zeiterfassung",
      titel: "NFC-Tag scannen, fertig.",
      body: "Zeit, Ort, Person und Objekt in einem Zug erfasst. Mindestlohnsicher, auslesbar für die Lohnabrechnung, ohne Papierstundenzettel und ohne WhatsApp-Nachfragen.",
      href: "/nfc-zeiterfassung",
      linkLabel: "NFC-Zeiterfassung",
    },
    {
      tag: "Leistungsnachweis",
      titel: "Sichtbar dokumentiert, bevor jemand fragt.",
      body: "Pro Raum, pro Fläche, pro Tag. Foto, Uhrzeit, Reinigungskraft. Der Kunde sieht das Ergebnis, bevor er den Hörer in die Hand nimmt.",
      href: "/leistungsnachweis-gebaeudereinigung",
      linkLabel: "Leistungsnachweis",
    },
    {
      tag: "Kalkulation",
      titel: "Objekte, die von Anfang an Marge machen.",
      body: "Fläche, Leistungsverzeichnis und Personalkapazität werden verrechnet, statt geschätzt. Die Software zeigt, wo Subunternehmer sinnvoll sind und ab welchem Punkt die Marge kippt.",
      href: "/features",
      linkLabel: "Kalkulation ansehen",
    },
    {
      tag: "Kundenportal",
      titel: "Ihr Auftraggeber sieht selbst nach.",
      body: "Live-Grundriss mit Raumstatus, offene Tickets, geleistete Stunden. Der Anruf, den er früher gemacht hätte, entfällt. Der Ton mit Ihren Kunden ändert sich, ohne dass Sie mehr sagen müssen.",
      href: "/features",
      linkLabel: "Kundenportal",
    },
    {
      tag: "DATEV & Abrechnung",
      titel: "Vom Einsatz bis zur Steuerkanzlei ohne Umweg.",
      body: "Angebote, Rechnungen, Zeitkonten. Alles läuft in einem System und geht sauber exportiert an DATEV. Kein Copy-Paste, keine Excel-Runde am Monatsende.",
      href: "/features",
      linkLabel: "Abrechnung ansehen",
    },
  ];

  return (
    <section
      id="kernfunktionen"
      className="tk-section-lg"
      style={{ background: "var(--tk-canvas-elev)", color: "var(--tk-ink)" }}
    >
      <div className="tk-container">
        <div className="max-w-3xl">
          <motion.div {...fadeUp}>
            <Eyebrow>Kernfunktionen</Eyebrow>
            <h2
              className="tk-headline mt-4"
              style={{
                fontSize: "clamp(2rem, 4.4vw, 3.25rem)",
                color: "var(--tk-ink)",
              }}
            >
              Sechs Funktionen, die eine
              <br />
              <span style={{ color: "var(--tk-ink-muted)" }}>
                Reinigersoftware heute liefern muss.
              </span>
            </h2>
            <p
              className="mt-6"
              style={{
                color: "var(--tk-ink-muted)",
                fontSize: "1.0625rem",
                lineHeight: 1.65,
              }}
            >
              Wir haben die typischen Baustellen in Reinigungsbetrieben
              zusammengeführt und geschaut, welche Funktionen sie in einer
              Software tatsächlich lösen.
            </p>
          </motion.div>
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <motion.article
              key={f.tag}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ ...springs.base, delay: i * 0.06 }}
              className="tk-glass"
              style={{
                borderRadius: "var(--tk-radius-panel)",
                padding: "clamp(24px, 2.4vw, 32px)",
                background: "rgba(255,255,255,0.94)",
                display: "flex",
                flexDirection: "column",
                gap: "14px",
              }}
            >
              <span
                style={{
                  alignSelf: "flex-start",
                  padding: "5px 12px",
                  borderRadius: "999px",
                  background: "rgba(37,99,235,0.1)",
                  color: "var(--tk-accent-strong)",
                  fontSize: "11px",
                  fontWeight: 600,
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                }}
              >
                {f.tag}
              </span>
              <h3
                className="tk-headline"
                style={{
                  fontSize: "clamp(1.2rem, 1.55vw, 1.4rem)",
                  color: "var(--tk-ink)",
                }}
              >
                {f.titel}
              </h3>
              <p
                style={{
                  color: "var(--tk-ink-muted)",
                  fontSize: "15px",
                  lineHeight: 1.6,
                }}
              >
                {f.body}
              </p>
              <Link
                href={f.href}
                className="inline-flex items-center gap-1 text-sm font-semibold"
                style={{
                  color: "var(--tk-accent-strong)",
                  marginTop: "4px",
                }}
              >
                {f.linkLabel}
                <span aria-hidden>→</span>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
 * Vorher / Nachher (typische Umstellung)
 * ────────────────────────────────────────────────────────────────────────── */

function TransitionSection() {
  const zeilen: { vorher: string; nachher: string }[] = [
    {
      vorher: "Stundenzettel auf Papier, monatliche Übertragung nach Excel",
      nachher: "Einstempeln per NFC-Scan, Zeiten laufen direkt in Lohn und Rechnung",
    },
    {
      vorher: "Einsatzplan per WhatsApp, jeder Ausfall ein Feuerwehreinsatz",
      nachher: "Kalender mit automatischen Wiederholungen und Springer-Vorschlägen",
    },
    {
      vorher: "Kunde ruft an, wenn er den Bericht nicht findet",
      nachher: "Kunde öffnet sein Portal, sieht den Live-Status und schweigt zufrieden",
    },
    {
      vorher: "Reklamation kommt, niemand weiß mehr, wer wann wo war",
      nachher: "Foto, Uhrzeit und Person sind pro Raum dokumentiert, ohne dass jemand nachfragt",
    },
    {
      vorher: "Am Monatsende drei Tage Rechnungslauf und DATEV-Vorbereitung",
      nachher: "Rechnungen entstehen aus den Einsätzen, DATEV-Export läuft in Minuten",
    },
  ];

  return (
    <section
      className="tk-section"
      style={{ background: "var(--tk-canvas)", color: "var(--tk-ink)" }}
    >
      <div className="tk-container">
        <div className="max-w-3xl">
          <motion.div {...fadeUp}>
            <Eyebrow>Vor und nach dem Umstieg</Eyebrow>
            <h2
              className="tk-headline mt-4"
              style={{
                fontSize: "clamp(2rem, 4.2vw, 3.25rem)",
                color: "var(--tk-ink)",
              }}
            >
              So verändert Reinigersoftware
              <br />
              <span style={{ color: "var(--tk-ink-muted)" }}>
                den Alltag im Betrieb.
              </span>
            </h2>
          </motion.div>
        </div>

        <div className="mt-12 flex flex-col gap-4">
          {zeilen.map((z, i) => (
            <motion.div
              key={z.vorher}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ ...springs.base, delay: i * 0.05 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-4"
            >
              <div
                style={{
                  padding: "20px 24px",
                  borderRadius: "var(--tk-radius-card)",
                  background: "rgba(15,23,42,0.04)",
                  border: "1px solid rgba(15,23,42,0.08)",
                  color: "var(--tk-ink-muted)",
                  fontSize: "15px",
                  lineHeight: 1.55,
                  display: "flex",
                  gap: "12px",
                  alignItems: "flex-start",
                }}
              >
                <span
                  style={{
                    flexShrink: 0,
                    fontSize: "11px",
                    fontWeight: 600,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    color: "rgba(15,23,42,0.5)",
                    marginTop: "3px",
                  }}
                >
                  Vorher
                </span>
                <span>{z.vorher}</span>
              </div>
              <div
                className="tk-glass"
                style={{
                  padding: "20px 24px",
                  borderRadius: "var(--tk-radius-card)",
                  background:
                    "linear-gradient(135deg, rgba(37,99,235,0.08) 0%, rgba(255,255,255,0.9) 100%)",
                  border: "1px solid rgba(37,99,235,0.18)",
                  color: "var(--tk-ink)",
                  fontSize: "15px",
                  lineHeight: 1.55,
                  display: "flex",
                  gap: "12px",
                  alignItems: "flex-start",
                }}
              >
                <span
                  style={{
                    flexShrink: 0,
                    fontSize: "11px",
                    fontWeight: 600,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    color: "var(--tk-accent-strong)",
                    marginTop: "3px",
                  }}
                >
                  Nachher
                </span>
                <span>{z.nachher}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
 * Taskey-Spotlight (Empfehlung + Product-Highlight)
 * ────────────────────────────────────────────────────────────────────────── */

function TaskeySpotlight() {
  return (
    <section
      className="tk-section-lg"
      style={{
        background: "var(--tk-ink)",
        color: "#fff",
        position: "relative",
        overflow: "hidden",
        isolation: "isolate",
      }}
    >
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(45% 45% at 80% 20%, rgba(37,99,235,0.35) 0%, rgba(37,99,235,0) 60%), radial-gradient(40% 40% at 15% 80%, rgba(29,78,216,0.25) 0%, rgba(29,78,216,0) 60%)",
          pointerEvents: "none",
        }}
      />
      <div className="tk-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <Eyebrow tone="light">Unsere Empfehlung</Eyebrow>
            <h2
              className="tk-headline mt-4"
              style={{
                fontSize: "clamp(2rem, 4.4vw, 3.5rem)",
                color: "#fff",
              }}
            >
              Reinigersoftware, die in Wochen
              <br />
              <span style={{ color: "rgba(255,255,255,0.6)" }}>
                nicht in Monaten läuft.
              </span>
            </h2>
            <p
              className="mt-6"
              style={{
                color: "rgba(255,255,255,0.78)",
                fontSize: "1.0625rem",
                lineHeight: 1.65,
                maxWidth: "58ch",
              }}
            >
              Taskey ist die Reinigersoftware, die wir für neue Reinigungsbetriebe
              in Deutschland empfehlen. Alle sechs Kernfunktionen sind in einer
              Anwendung enthalten, das Onboarding dauert Tage statt Monate und
              der Preis skaliert nicht pro Reinigungskraft.
            </p>

            <ul
              style={{
                marginTop: "28px",
                display: "grid",
                gridTemplateColumns: "1fr",
                gap: "12px",
              }}
            >
              {[
                "Ein System für Planung, Zeit, Nachweis, Rechnung und Kundenportal",
                "NFC-Objektnachweis inklusive, ohne Zusatzhardware-Zwang",
                "Pauschaler Monatspreis, unabhängig von der Teamgröße",
                "Made in Germany, Server in der EU, AVV inklusive",
                "Kostenlos testen, Onboarding durch den Gründer selbst",
              ].map((line) => (
                <li
                  key={line}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "12px",
                    color: "rgba(255,255,255,0.9)",
                    fontSize: "15px",
                    lineHeight: 1.55,
                  }}
                >
                  <span
                    aria-hidden
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: "20px",
                      height: "20px",
                      borderRadius: "999px",
                      background: "rgba(37,99,235,0.4)",
                      color: "#fff",
                      fontSize: "12px",
                      flexShrink: 0,
                      marginTop: "2px",
                    }}
                  >
                    ✓
                  </span>
                  {line}
                </li>
              ))}
            </ul>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <motion.a
                href={SIGNUP_URL}
                target="_blank"
                rel="noopener noreferrer"
                whileTap={{ scale: 0.97 }}
                transition={springs.snappy}
                className="inline-flex items-center gap-2 px-7 py-4 rounded-full font-medium"
                style={{
                  background: "#fff",
                  color: "var(--tk-ink)",
                  fontSize: "16px",
                  boxShadow: "0 20px 50px -20px rgba(255,255,255,0.35)",
                }}
              >
                Kostenlosen Account erstellen
                <span aria-hidden>→</span>
              </motion.a>
              <motion.span whileTap={{ scale: 0.97 }} transition={springs.snappy}>
                <Link
                  href="/vergleich/software-gebaeudereinigung"
                  className="inline-flex items-center gap-2 px-7 py-4 rounded-full font-medium tk-glass-dark"
                  style={{ fontSize: "16px" }}
                >
                  Vergleich ansehen
                </Link>
              </motion.span>
            </div>
          </div>

          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={springs.soft}
              className="tk-glass-dark"
              style={{
                borderRadius: "var(--tk-radius-shell)",
                padding: "clamp(28px, 3vw, 40px)",
              }}
            >
              <Eyebrow tone="light">Preis auf einen Blick</Eyebrow>
              <div
                style={{
                  marginTop: "18px",
                  display: "flex",
                  alignItems: "baseline",
                  gap: "10px",
                }}
              >
                <span
                  className="tk-display"
                  style={{
                    fontSize: "clamp(3rem, 6vw, 4rem)",
                    color: "#fff",
                    lineHeight: 1,
                  }}
                >
                  119 €
                </span>
                <span style={{ color: "rgba(255,255,255,0.65)", fontSize: "15px" }}>
                  pro Monat
                </span>
              </div>
              <p
                style={{
                  marginTop: "10px",
                  color: "rgba(255,255,255,0.75)",
                  fontSize: "14px",
                  lineHeight: 1.55,
                }}
              >
                Pauschal für den gesamten Betrieb, unabhängig von der Anzahl der
                Reinigungskräfte. Alle Kernfunktionen enthalten.
              </p>

              <div
                style={{
                  marginTop: "24px",
                  height: "1px",
                  background: "rgba(255,255,255,0.12)",
                }}
              />

              <div
                style={{
                  marginTop: "22px",
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "18px",
                }}
              >
                {[
                  { label: "Setup-Kosten", value: "0 €" },
                  { label: "Pro Nutzer", value: "0 €" },
                  { label: "Testphase", value: "Frei" },
                  { label: "Vertrag", value: "Monatlich" },
                ].map((row) => (
                  <div key={row.label}>
                    <div
                      style={{
                        color: "rgba(255,255,255,0.55)",
                        fontSize: "11px",
                        letterSpacing: "0.08em",
                        textTransform: "uppercase",
                      }}
                    >
                      {row.label}
                    </div>
                    <div
                      style={{
                        color: "#fff",
                        fontSize: "17px",
                        fontWeight: 600,
                        marginTop: "4px",
                      }}
                    >
                      {row.value}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
 * Für welche Betriebsgrößen
 * ────────────────────────────────────────────────────────────────────────── */

function AudienceSection() {
  const groups = [
    {
      titel: "Kleine Reinigungsfirma",
      groesse: "5 bis 30 Mitarbeiter",
      body: "Der Umstieg auf Reinigersoftware bringt hier den größten Sprung. Papierstundenzettel, WhatsApp-Pläne und Excel-Rechnungen werden durch ein System ersetzt, das die Inhaberin morgens am Handy prüft.",
      href: "/software-kleine-reinigungsfirma",
      linkLabel: "Für kleine Betriebe",
    },
    {
      titel: "Mittlere Reinigungsfirma",
      groesse: "30 bis 150 Mitarbeiter",
      body: "Kolonnen, Springer und Objektwechsel sind nicht mehr per Anruf zu steuern. Eine gute Reinigersoftware entlastet die Disposition und macht Marge pro Objekt sichtbar, bevor der Vertrag verloren geht.",
      href: "/software-gebaeudereinigung",
      linkLabel: "Für mittlere Betriebe",
    },
    {
      titel: "Große Reinigungsfirma",
      groesse: "150 Mitarbeiter und mehr",
      body: "Der Fokus liegt auf Steuerung, Nachweisbarkeit und Kundentransparenz. Reinigersoftware wird hier zum Betriebssystem, ergänzt durch DATEV-Integration und Auftraggeberportal für Filialkunden.",
      href: "/enterprise",
      linkLabel: "Für Enterprise",
    },
  ];

  return (
    <section
      className="tk-section"
      style={{ background: "var(--tk-canvas-elev)", color: "var(--tk-ink)" }}
    >
      <div className="tk-container">
        <div className="max-w-3xl">
          <motion.div {...fadeUp}>
            <Eyebrow>Für welche Betriebe</Eyebrow>
            <h2
              className="tk-headline mt-4"
              style={{
                fontSize: "clamp(2rem, 4vw, 3rem)",
                color: "var(--tk-ink)",
              }}
            >
              Reinigersoftware passt zu jedem
              <br />
              <span style={{ color: "var(--tk-ink-muted)" }}>
                sauber geführten Betrieb.
              </span>
            </h2>
            <p
              className="mt-6"
              style={{
                color: "var(--tk-ink-muted)",
                fontSize: "1.0625rem",
                lineHeight: 1.65,
              }}
            >
              Die Anforderungen unterscheiden sich mit der Größe. Kleine Betriebe
              profitieren am meisten vom Umstieg auf ein System, größere von
              zentraler Steuerung und Transparenz gegenüber Auftraggebern.
            </p>
          </motion.div>
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
          {groups.map((g, i) => (
            <motion.article
              key={g.titel}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ ...springs.base, delay: i * 0.06 }}
              className="tk-glass"
              style={{
                borderRadius: "var(--tk-radius-panel)",
                padding: "clamp(24px, 2.4vw, 32px)",
                background: "rgba(255,255,255,0.94)",
                display: "flex",
                flexDirection: "column",
                gap: "14px",
              }}
            >
              <div>
                <div
                  style={{
                    fontSize: "11px",
                    fontWeight: 600,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    color: "var(--tk-accent-strong)",
                  }}
                >
                  {g.groesse}
                </div>
                <h3
                  className="tk-headline"
                  style={{
                    fontSize: "clamp(1.25rem, 1.6vw, 1.4rem)",
                    color: "var(--tk-ink)",
                    marginTop: "6px",
                  }}
                >
                  {g.titel}
                </h3>
              </div>
              <p
                style={{
                  color: "var(--tk-ink-muted)",
                  fontSize: "15px",
                  lineHeight: 1.6,
                }}
              >
                {g.body}
              </p>
              <Link
                href={g.href}
                className="inline-flex items-center gap-1 text-sm font-semibold"
                style={{ color: "var(--tk-accent-strong)", marginTop: "auto" }}
              >
                {g.linkLabel}
                <span aria-hidden>→</span>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
 * FAQ (sichtbar + im JSON-LD Schema)
 * ────────────────────────────────────────────────────────────────────────── */

function FaqSection() {
  const items = [
    {
      q: "Was ist Reinigersoftware?",
      a: "Reinigersoftware ist eine Branchenlösung für Reinigungsbetriebe, die Einsatzplanung, Zeiterfassung, Leistungsnachweis, Kalkulation, Rechnungen und Kundenkommunikation in einer Anwendung bündelt. Sie ersetzt Excel-Listen, Papierstundenzettel und getrennte Tools für Objekt-, Personal- und Rechnungsverwaltung.",
    },
    {
      q: "Was kostet Reinigersoftware?",
      a: "Seriöse Reinigersoftware startet bei rund 90 bis 150 Euro pro Monat und Betrieb. Anbieter mit Pro-Mitarbeiter-Preisen werden mit wachsendem Team deutlich teurer. Taskey liegt aktuell bei 119 Euro pro Monat, inklusive aller Kernfunktionen und ohne Zusatzkosten pro Reinigungskraft.",
    },
    {
      q: "Welche Funktionen braucht eine gute Reinigersoftware?",
      a: "Einsatzplanung mit Kolonnen und Springern, mobile Zeiterfassung mit NFC oder GPS, digitaler Leistungsnachweis pro Raum, Kalkulation nach Fläche und Leistungsverzeichnis, Angebots- und Rechnungserstellung, ein Auftraggeberportal mit Live-Status sowie DATEV-Export. Alles idealerweise in einem System.",
    },
    {
      q: "Ist Reinigersoftware auch für kleine Reinigungsfirmen sinnvoll?",
      a: "Ja. Gerade kleine Reinigungsfirmen mit fünf bis dreißig Mitarbeitern gewinnen am meisten, weil sie Papierstundenzettel und WhatsApp-Chaos gegen ein sauberes System tauschen. Wichtig ist ein Anbieter, der auch ohne feste IT-Abteilung funktioniert.",
    },
    {
      q: "Ist Reinigersoftware DSGVO-konform?",
      a: "Nur wenn der Anbieter seinen Sitz und die Server in der EU hat und einen Auftragsverarbeitungsvertrag (AVV) bereitstellt. Reinigersoftware verarbeitet Standortdaten, Arbeitszeiten und Kundendaten. Made-in-Germany-Anbieter wie Taskey erfüllen diese Anforderungen von Haus aus.",
    },
    {
      q: "Kann Reinigersoftware Papierstundenzettel wirklich ersetzen?",
      a: "Ja. Mit NFC-Objektnachweis oder GPS-Zeiterfassung werden Anfangs- und Endzeit pro Objekt automatisch protokolliert. Die Zeiten laufen direkt in Lohnabrechnung, Kundenrechnung und Leistungsnachweis. Manuelle Übertragung entfällt und die Nachweise sind mindestlohnsicher.",
    },
  ];

  return (
    <section
      className="tk-section"
      style={{ background: "var(--tk-canvas)", color: "var(--tk-ink)" }}
    >
      <div className="tk-container">
        <div className="max-w-3xl">
          <motion.div {...fadeUp}>
            <Eyebrow>Häufige Fragen</Eyebrow>
            <h2
              className="tk-headline mt-4"
              style={{
                fontSize: "clamp(2rem, 4vw, 3rem)",
                color: "var(--tk-ink)",
              }}
            >
              Alles, was Betriebe vor der
              <br />
              <span style={{ color: "var(--tk-ink-muted)" }}>
                Reinigersoftware-Entscheidung fragen.
              </span>
            </h2>
          </motion.div>
        </div>

        <div className="mt-12 flex flex-col gap-3">
          {items.map((item, i) => (
            <motion.details
              key={item.q}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ ...springs.base, delay: i * 0.04 }}
              className="tk-glass"
              style={{
                borderRadius: "var(--tk-radius-card)",
                padding: "18px 22px",
                background: "rgba(255,255,255,0.9)",
              }}
            >
              <summary
                style={{
                  cursor: "pointer",
                  listStyle: "none",
                  color: "var(--tk-ink)",
                  fontSize: "16px",
                  fontWeight: 600,
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  gap: "16px",
                }}
              >
                {item.q}
                <span
                  aria-hidden
                  style={{
                    fontSize: "18px",
                    color: "var(--tk-ink-muted)",
                    flexShrink: 0,
                  }}
                >
                  +
                </span>
              </summary>
              <p
                style={{
                  marginTop: "12px",
                  color: "var(--tk-ink-muted)",
                  fontSize: "15px",
                  lineHeight: 1.65,
                }}
              >
                {item.a}
              </p>
            </motion.details>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
 * Final CTA
 * ────────────────────────────────────────────────────────────────────────── */

function FinalCta() {
  return (
    <section
      className="tk-section"
      style={{ background: "var(--tk-canvas-elev)", color: "var(--tk-ink)" }}
    >
      <div className="tk-container">
        <motion.div
          {...fadeUp}
          className="text-center mx-auto"
          style={{ maxWidth: "62ch" }}
        >
          <Eyebrow>Nächster Schritt</Eyebrow>
          <h2
            className="tk-headline mt-4"
            style={{
              fontSize: "clamp(2rem, 4vw, 3rem)",
              color: "var(--tk-ink)",
            }}
          >
            Reinigersoftware testen, bevor Sie
            <br />
            <span style={{ color: "var(--tk-ink-muted)" }}>
              die nächste Excel-Runde starten.
            </span>
          </h2>
          <p
            className="mt-6"
            style={{
              color: "var(--tk-ink-muted)",
              fontSize: "1.0625rem",
              lineHeight: 1.65,
            }}
          >
            Account in fünf Minuten angelegt, Onboarding gemeinsam mit dem
            Gründer, kostenlose Testphase. Wenn es zu Ihrem Betrieb nicht passt,
            steigen Sie ohne Diskussion wieder aus.
          </p>

          <div className="mt-10 flex flex-wrap justify-center items-center gap-4">
            <PrimaryCta href={SIGNUP_URL} external>
              Kostenlosen Account erstellen
            </PrimaryCta>
            <GhostCta href="/pricing">Preise ansehen</GhostCta>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
 * Composition
 * ────────────────────────────────────────────────────────────────────────── */

export default function ReinigersoftwareShell() {
  return (
    <main>
      <HeroScene />
      <DefinitionSection />
      <FeaturesSection />
      <TransitionSection />
      <TaskeySpotlight />
      <AudienceSection />
      <FaqSection />
      <FinalCta />
    </main>
  );
}
