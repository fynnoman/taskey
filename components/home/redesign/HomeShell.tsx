"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useMotionValueEvent, useScroll } from "motion/react";
import { useEffect, useRef, type ReactNode } from "react";
import SectionShell from "./SectionShell";
import GlassSurface from "./GlassSurface";
import Parallax from "./Parallax";
import PhoneAtAGlance from "./PhoneAtAGlance";
import DashboardMarge from "./DashboardMarge";
import FaqBoard from "./FaqBoard";
import CalendlyInline from "./CalendlyInline";
import { fadeUp, springs, staggerChild, staggerParent } from "./motion";
import { getWhatsAppUrl } from "@/lib/whatsapp";

/* ─────────────────────────────────────────────────────────────────────────────
 * Reusable atoms
 * ────────────────────────────────────────────────────────────────────────── */

function CtaButton({
  href,
  children,
  variant = "primary",
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "ghost" | "glass";
}) {
  const base =
    "inline-flex items-center gap-2 px-6 py-3 rounded-full text-[15px] font-medium transition-transform";
  if (variant === "primary") {
    return (
      <motion.a
        href={href}
        whileTap={{ scale: 0.97 }}
        transition={springs.snappy}
        className={base}
        style={{
          background: "var(--tk-ink)",
          color: "#fff",
          boxShadow: "0 12px 30px -12px rgba(15,23,42,0.35)",
        }}
      >
        {children}
        <span aria-hidden>→</span>
      </motion.a>
    );
  }
  if (variant === "glass") {
    return (
      <motion.a
        href={href}
        whileTap={{ scale: 0.97 }}
        transition={springs.snappy}
        className={`${base} tk-glass`}
        style={{ color: "var(--tk-ink)" }}
      >
        {children}
      </motion.a>
    );
  }
  return (
    <motion.a
      href={href}
      whileTap={{ scale: 0.97 }}
      transition={springs.snappy}
      className={base}
      style={{
        background: "transparent",
        color: "var(--tk-ink)",
        border: "1px solid rgba(15, 23, 42, 0.12)",
      }}
    >
      {children}
    </motion.a>
  );
}

function Eyebrow({ children, tone = "muted" }: { children: ReactNode; tone?: "muted" | "accent" | "light" }) {
  const color =
    tone === "accent" ? "var(--tk-accent)" : tone === "light" ? "rgba(255,255,255,0.65)" : "var(--tk-ink-muted)";
  return (
    <span className="tk-eyebrow" style={{ color }}>
      {children}
    </span>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
 * Section 1 — Hero
 * Full-viewport scene with parallax media + glass overlay.
 * ────────────────────────────────────────────────────────────────────────── */

function HeroScene() {
  const ref = useRef<HTMLDivElement | null>(null);
  const bgRef = useRef<HTMLDivElement | null>(null);
  const glassRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const apply = (v: number) => {
    const bg = bgRef.current;
    const gl = glassRef.current;
    if (bg) bg.style.transform = `translate3d(0, ${(v * 140).toFixed(1)}px, 0) scale(${(1.05 + v * 0.05).toFixed(3)})`;
    if (gl) gl.style.transform = `translate3d(0, ${(v * -60).toFixed(1)}px, 0)`;
  };
  useEffect(() => {
    apply(scrollYProgress.get());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useMotionValueEvent(scrollYProgress, "change", apply);

  return (
    <section
      ref={ref}
      style={{
        position: "relative",
        minHeight: "100vh",
        overflow: "hidden",
        background: "var(--tk-ink)",
        color: "#fff",
        isolation: "isolate",
      }}
    >
      {/* video background */}
      <div ref={bgRef} style={{ position: "absolute", inset: "-6%", willChange: "transform" }}>
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="/images/hero-poster.jpg"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        >
          <source src="/videos/hero-bg.mp4" type="video/mp4" />
        </video>
        <div
          aria-hidden
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(180deg, rgba(15,23,42,0.35) 0%, rgba(15,23,42,0.55) 55%, rgba(15,23,42,0.85) 100%)",
          }}
        />
      </div>

      {/* content */}
      <div
        ref={glassRef}
        className="tk-container-wide"
        style={{
          position: "relative",
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          paddingTop: "10vh",
          paddingBottom: "12vh",
          willChange: "transform",
        }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center w-full">
          <div className="lg:col-span-8">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...springs.soft, delay: 0.1 }}
            >
              <Eyebrow tone="light">Die sauberste Software von allen.</Eyebrow>
              <h1
                className="tk-display mt-6"
                style={{
                  fontSize: "clamp(2.5rem, 7.5vw, 6rem)",
                  color: "#fff",
                  maxWidth: "18ch",
                }}
              >
                Ihr Betrieb läuft.
                <br />
                <span style={{ color: "rgba(255,255,255,0.7)" }}>
                  Sie sehen es auf einen Blick.
                </span>
              </h1>
              <p
                className="mt-8"
                style={{
                  color: "rgba(255,255,255,0.8)",
                  fontSize: "clamp(1rem, 1.4vw, 1.25rem)",
                  lineHeight: 1.55,
                  maxWidth: "56ch",
                }}
              >
                Objekte, Personal, Zeiterfassung, Kalkulation, Ausschreibungen. Alles gebündelt
                in einer Plattform, gebaut für Gebäudereinigungsbetriebe, die effizient arbeiten
                wollen. Weniger Tools. Weniger Aufwand. Mehr Marge, direkt vom Handy.
              </p>

              <div className="mt-10 flex flex-wrap items-center gap-4">
                <motion.a
                  href="https://signup.taskeyapp.com"
                  whileTap={{ scale: 0.97 }}
                  transition={springs.snappy}
                  className="inline-flex items-center gap-2 px-7 py-4 rounded-full font-medium"
                  style={{
                    background: "#fff",
                    color: "var(--tk-ink)",
                    fontSize: "16px",
                    boxShadow: "0 20px 50px -20px rgba(15,23,42,0.5)",
                  }}
                >
                  Kostenlosen Account erstellen
                  <span aria-hidden>→</span>
                </motion.a>
                <motion.a
                  href="/features"
                  whileTap={{ scale: 0.97 }}
                  transition={springs.snappy}
                  className="inline-flex items-center gap-2 px-7 py-4 rounded-full font-medium tk-glass-dark"
                  style={{ fontSize: "16px" }}
                >
                  Alle Funktionen
                </motion.a>
                <motion.a
                  href="https://demo.kunden.taskeyapp.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileTap={{ scale: 0.97 }}
                  transition={springs.snappy}
                  className="inline-flex items-center gap-2 px-7 py-4 rounded-full font-medium"
                  style={{
                    background: "#F97316",
                    color: "#fff",
                    fontSize: "16px",
                    boxShadow: "0 20px 50px -20px rgba(249,115,22,0.55)",
                  }}
                >
                  Kundendashboard-Demo anschauen
                  <span aria-hidden>→</span>
                </motion.a>
                <motion.a
                  href={getWhatsAppUrl("de")}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Per WhatsApp schreiben"
                  whileTap={{ scale: 0.97 }}
                  transition={springs.snappy}
                  className="inline-flex items-center gap-2 px-7 py-4 rounded-full font-medium"
                  style={{
                    background: "#25D366",
                    color: "#fff",
                    fontSize: "16px",
                    boxShadow: "0 20px 50px -20px rgba(37,211,102,0.55)",
                  }}
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18" aria-hidden>
                    <path d="M.057 24l1.687-6.163a11.867 11.867 0 0 1-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.817 11.817 0 0 1 8.413 3.488 11.824 11.824 0 0 1 3.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 0 1-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 0 0 1.51 5.26l-.999 3.648 3.978-.607zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.019-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413z" />
                  </svg>
                  WhatsApp
                </motion.a>
              </div>

              <p
                className="mt-6"
                style={{ color: "rgba(255,255,255,0.55)", fontSize: "13px" }}
              >
                Keine Kreditkarte. Kein Risiko. Sofort loslegen.
              </p>
            </motion.div>
          </div>

          <div className="lg:col-span-4 flex lg:justify-end">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...springs.soft, delay: 0.35 }}
            >
              <GlassSurface
                material="dark"
                radius="panel"
                className="p-6"
                style={{ maxWidth: "320px" }}
              >
                <Eyebrow tone="light">Gefördert im</Eyebrow>
                <div style={{ marginTop: "10px", display: "flex", alignItems: "center", gap: "12px" }}>
                  <Image
                    src="/launchpad-saarland.png"
                    alt="Startup Launchpad, Universität des Saarlandes"
                    width={56}
                    height={56}
                    style={{ borderRadius: "12px", background: "#fff", padding: "6px" }}
                  />
                  <div>
                    <div style={{ fontSize: "14px", fontWeight: 600, color: "#fff" }}>
                      Startup Launchpad 2026
                    </div>
                    <div style={{ fontSize: "12px", color: "rgba(255,255,255,0.7)", marginTop: "2px" }}>
                      Universität des Saarlandes · Triathlon
                    </div>
                  </div>
                </div>
              </GlassSurface>
            </motion.div>
          </div>
        </div>
      </div>

      {/* scroll cue */}
      <motion.div
        aria-hidden
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        style={{
          position: "absolute",
          bottom: "28px",
          left: "50%",
          transform: "translateX(-50%)",
          color: "rgba(255,255,255,0.6)",
          fontSize: "11px",
          letterSpacing: "0.14em",
          textTransform: "uppercase",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "8px",
        }}
      >
        Scroll
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          ↓
        </motion.span>
      </motion.div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
 * Section 2 — Feature Trio (Kalkulation / Ausschreibungen / Ein System)
 * ────────────────────────────────────────────────────────────────────────── */

const FEATURE_TRIO: {
  eyebrow: string;
  title: string;
  body: string;
  image: string;
  alt: string;
}[] = [
  {
    eyebrow: "Kalkulation, die mitdenkt",
    title: "Wenn die Objektkalkulation selbst mitrechnet.",
    body:
      "Taskey liest Fläche, Leistungsverzeichnis und verfügbare Personalkapazität und schlägt vor, an welcher Stelle ein Subunternehmer sinnvoll ist, wie oft und in welchem Umfang. Das Ganze abgestimmt auf das LV, damit die Marge nicht nur auf dem Papier steht. Nachunternehmer werden direkt aus dem System angebunden, ohne Umweg über zusätzliche Tools.",
    image: "/sections/feature-kalkulation.png",
    alt: "Kalkulationen-Übersicht mit Vertragsmargen pro Objekt",
  },
  {
    eyebrow: "Neue Aufträge, gezielt",
    title: "Die passende Ausschreibung findet Sie zuerst.",
    body:
      "Öffentliche und private Ausschreibungen werden nach dem gefiltert, was realistisch zu Ihrem Betrieb passt. Sie werden benachrichtigt, sobald eine dabei ist, die Sie mit Ihrer Struktur tatsächlich gewinnen können. Inklusive Einschätzung, mit welcher Strategie der Zuschlag am wahrscheinlichsten wird.",
    image: "/sections/feature-ausschreibungen.png",
    alt: "Ausschreibungen-Suche mit TED und öffentlicher Vergabe",
  },
  {
    eyebrow: "Auftraggeber-Portal",
    title: "Ihre Kunden wissen es, bevor sie fragen.",
    body:
      "Statt Anrufe und E-Mail-Ketten sieht der Auftraggeber selbst nach: Live-Status pro Raum, Grundriss mit Farbcodes, Team vor Ort, offene Tickets. Der Ton mit Ihren Kunden ändert sich, ohne dass Sie ein Wort mehr sagen müssen.",
    image: "/sections/feature-taskey-share.png",
    alt: "Auftraggeber-Portal mit Live-Grundriss und Raumstatus",
  },
];

function FeatureTrio() {
  return (
    <SectionShell size="lg" tone="canvas">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10">
        {FEATURE_TRIO.map((feat, i) => (
          <motion.article
            key={feat.eyebrow}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ ...springs.base, delay: i * 0.08 }}
            className="tk-glass"
            style={{
              borderRadius: "var(--tk-radius-panel)",
              overflow: "hidden",
              display: "flex",
              flexDirection: "column",
              background: "rgba(255,255,255,0.85)",
            }}
          >
            <div style={{ position: "relative", aspectRatio: "16 / 11", overflow: "hidden" }}>
              <Image
                src={feat.image}
                alt={feat.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 33vw"
                style={{ objectFit: "cover" }}
              />
              <div
                aria-hidden
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(180deg, rgba(15,23,42,0) 40%, rgba(15,23,42,0.55) 100%)",
                }}
              />
              <div style={{ position: "absolute", left: "20px", bottom: "18px" }}>
                <Eyebrow tone="light">{feat.eyebrow}</Eyebrow>
              </div>
            </div>
            <div style={{ padding: "clamp(20px, 2.4vw, 30px)", display: "flex", flexDirection: "column", gap: "14px" }}>
              <h3
                className="tk-headline"
                style={{ fontSize: "clamp(1.25rem, 1.6vw, 1.5rem)", color: "var(--tk-ink)" }}
              >
                {feat.title}
              </h3>
              <p style={{ color: "var(--tk-ink-muted)", fontSize: "15px", lineHeight: 1.6 }}>
                {feat.body}
              </p>
            </div>
          </motion.article>
        ))}
      </div>
    </SectionShell>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
 * Section 3 — BookMeeting (Kennenlerngespräch)
 * ────────────────────────────────────────────────────────────────────────── */

function BookMeetingSection() {
  return (
    <SectionShell size="md" tone="transparent" style={{ background: "var(--tk-ink)" }}>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-7">
          <Eyebrow tone="light">Kennenlerngespräch</Eyebrow>
          <h2
            className="tk-headline mt-4"
            style={{ fontSize: "clamp(2rem, 4vw, 3.25rem)", color: "#fff" }}
          >
            Sprich direkt mit uns.
            <br />
            <span style={{ color: "rgba(255,255,255,0.6)" }}>
              15 Minuten, unverbindlich.
            </span>
          </h2>
          <p
            className="mt-6"
            style={{ color: "rgba(255,255,255,0.75)", fontSize: "1.0625rem", lineHeight: 1.6, maxWidth: "56ch" }}
          >
            Zeig uns euren Betrieb, wir zeigen dir, wie Taskey deine Einsatzplanung,
            Zeiterfassung und Dokumentation in einem System bündelt. Kein Vertriebsdruck. Nur
            ein ehrlicher Blick auf euren Alltag.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {["Direkt mit Fynn (Gründer)", "Individuelle Live-Demo", "Keine Verkaufspräsentation"].map(
              (chip) => (
                <span
                  key={chip}
                  className="tk-glass-dark"
                  style={{
                    padding: "10px 16px",
                    borderRadius: "999px",
                    fontSize: "13px",
                    color: "#fff",
                  }}
                >
                  {chip}
                </span>
              ),
            )}
          </div>

          <div className="mt-10">
            <motion.a
              href="https://calendly.com/fynn-taskeyapp/new-meeting"
              target="_blank"
              rel="noopener"
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
              Termin bei Calendly öffnen
              <span aria-hidden>↗</span>
            </motion.a>
          </div>
        </div>

        <div className="lg:col-span-5">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={springs.soft}
            style={{
              borderRadius: "var(--tk-radius-shell)",
              padding: "10px",
              background:
                "linear-gradient(160deg, rgba(255,255,255,0.14), rgba(255,255,255,0.03))",
              boxShadow: "0 40px 100px -30px rgba(0,0,0,0.55)",
              backdropFilter: "blur(14px)",
              WebkitBackdropFilter: "blur(14px)",
              border: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            <div
              style={{
                borderRadius: "calc(var(--tk-radius-shell) - 10px)",
                overflow: "hidden",
                background: "#fff",
              }}
            >
              <CalendlyInline
                url="https://calendly.com/fynn-taskeyapp/new-meeting"
                height={720}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </SectionShell>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
 * Section 4 — AufEinenBlick (End-State phone hero)
 * ────────────────────────────────────────────────────────────────────────── */

function AufEinenBlickSection() {
  return (
    <SectionShell size="lg" tone="canvas">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        <div className="lg:col-span-7">
          <motion.div {...fadeUp}>
            <Eyebrow>Ihr Alltag mit Taskey</Eyebrow>
            <h2
              className="tk-headline mt-4"
              style={{ fontSize: "clamp(2rem, 4.4vw, 3.5rem)", color: "var(--tk-ink)" }}
            >
              Auf einen Blick.
              <br />
              <span style={{ color: "var(--tk-ink-muted)" }}>
                Und Sie wissen, dass alles läuft.
              </span>
            </h2>
            <p
              className="mt-6"
              style={{ color: "var(--tk-ink-muted)", fontSize: "1.0625rem", lineHeight: 1.6, maxWidth: "60ch" }}
            >
              Ein Kurzblick aufs Handy, und Sie sehen, wo Ihre Teams gerade sind, wie die
              Margen dieses Monats stehen, welche Kundenanfragen Ihr Postfach längst
              beantwortet hat und welche neuen Ausschreibungen die Nacht überstanden haben. Ist
              alles im grünen Bereich, legen Sie das Handy weg. Taskey hat den Rest schon
              erledigt.
            </p>
            <p
              className="mt-6"
              style={{
                color: "var(--tk-ink-soft)",
                fontStyle: "italic",
                fontSize: "1rem",
                lineHeight: 1.6,
                maxWidth: "60ch",
              }}
            >
              Für Inhaber und Geschäftsführer, die ihren Betrieb im Kopf tragen wollen, nicht
              in der Inbox.
            </p>
          </motion.div>
        </div>

        <div className="lg:col-span-5 flex justify-center lg:justify-end">
          <PhoneAtAGlance />
        </div>
      </div>
    </SectionShell>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
 * Section 5 — IntroVideo
 * ────────────────────────────────────────────────────────────────────────── */

function IntroVideoSection() {
  return (
    <SectionShell size="md" tone="canvas">
      <motion.div {...fadeUp} className="text-center">
        <Eyebrow>Kunden-Interview</Eyebrow>
        <h3
          className="tk-headline mt-3"
          style={{ fontSize: "clamp(1.5rem, 2.6vw, 2rem)", color: "var(--tk-ink)" }}
        >
          Wie ein Reinigungsbetrieb mit Taskey arbeitet.
        </h3>
        <p
          className="mt-4 mx-auto"
          style={{ color: "var(--tk-ink-muted)", fontSize: "1rem", maxWidth: "60ch", lineHeight: 1.6 }}
        >
          Ein Gespräch aus der Praxis: was sich im Alltag verändert hat, seit der Betrieb
          seine Einsätze, Zeiten und Nachweise in Taskey bündelt.
        </p>
      </motion.div>

      <motion.a
        href="https://www.youtube.com/watch?v=vUGSXbZomt4"
        target="_blank"
        rel="noopener"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        whileTap={{ scale: 0.99 }}
        transition={springs.base}
        style={{
          display: "block",
          position: "relative",
          marginTop: "40px",
          borderRadius: "var(--tk-radius-shell)",
          overflow: "hidden",
          aspectRatio: "16 / 9",
          boxShadow: "0 40px 100px -30px rgba(15,23,42,0.35)",
        }}
      >
        <Image
          src="https://img.youtube.com/vi/vUGSXbZomt4/maxresdefault.jpg"
          alt="Taskey Einstiegsvideo Vorschau"
          fill
          sizes="(max-width: 1024px) 100vw, 60vw"
          style={{ objectFit: "cover" }}
          unoptimized
        />
        <div
          aria-hidden
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(180deg, rgba(15,23,42,0.15) 0%, rgba(15,23,42,0.55) 100%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
            width: "clamp(64px, 8vw, 96px)",
            height: "clamp(64px, 8vw, 96px)",
            borderRadius: "999px",
            background: "rgba(255,255,255,0.92)",
            display: "grid",
            placeItems: "center",
            boxShadow: "0 20px 40px -20px rgba(0,0,0,0.4)",
          }}
        >
          <span
            aria-hidden
            style={{
              width: 0,
              height: 0,
              borderLeft: "18px solid var(--tk-ink)",
              borderTop: "12px solid transparent",
              borderBottom: "12px solid transparent",
              marginLeft: "5px",
            }}
          />
        </div>
      </motion.a>
    </SectionShell>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
 * Section 6 — CommunicationUSP ("Sie müssen nichts mehr abfragen")
 * ────────────────────────────────────────────────────────────────────────── */

const COMM_CARDS: { title: string; sub: string; image: string; alt: string }[] = [
  {
    title: "Sie sehen es, während es passiert.",
    sub: "Live-Standort, Scan und Statuswechsel. Der WhatsApp-Ping, den Sie früher gemacht hätten, entfällt.",
    image: "/sections/echtzeit-feld-buero.png",
    alt: "Reinigungskraft im Einsatz, sichtbar dokumentiert per App",
  },
  {
    title: "Der Kunde muss nicht fragen.",
    sub: "Auftraggeber sieht Leistungen und Protokolle live. Die Reklamation, die Sie fürchten, kommt seltener bei Ihnen an.",
    image: "/sections/transparenz-kunde.png",
    alt: "Auftraggeberin prüft Berichte am Laptop",
  },
  {
    title: "Nachweisbar, ohne beweisen zu müssen.",
    sub: "NFC-Scan, Zeit, Ort, Foto. Jede Leistung ist dokumentiert, bevor jemand nachhakt.",
    image: "/sections/nachweisbarkeit.png",
    alt: "Hand mit Smartphone scannt NFC-Tag",
  },
  {
    title: "Das Team versteht es sofort.",
    sub: "Wenige Taps, große Symbole, Offline-Sync. Sie schulen niemanden mehr, es funktioniert einfach.",
    image: "/sections/team-versteht-es-sofort.png",
    alt: "Reinigungskraft öffnet lächelnd die Taskey-App im Büro-Einsatz",
  },
];

function CommunicationUSPSection() {
  return (
    <SectionShell size="lg" tone="elev">
      <div className="max-w-3xl">
        <motion.div {...fadeUp}>
          <Eyebrow>Kommunikation Feld ↔ Büro</Eyebrow>
          <h2
            className="tk-headline mt-4"
            style={{ fontSize: "clamp(2rem, 4.4vw, 3.5rem)", color: "var(--tk-ink)" }}
          >
            Sie müssen nichts mehr abfragen.
            <br />
            <span style={{ color: "var(--tk-ink-muted)" }}>Es steht schon da.</span>
          </h2>
          <p
            className="mt-6"
            style={{ color: "var(--tk-ink-muted)", fontSize: "1.0625rem", lineHeight: 1.6 }}
          >
            Was Ihr Team draußen tut, ist innen längst bekannt. Standort, Zeit, Foto, Status.
            Der Anruf, den Sie früher machen mussten, hat sich erledigt, bevor Sie ans Handy
            gedacht haben.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <CtaButton href="https://signup.taskeyapp.com">Kostenlos starten</CtaButton>
            <CtaButton href="/features" variant="ghost">
              Funktionen ansehen
            </CtaButton>
          </div>
        </motion.div>
      </div>

      <motion.div
        {...staggerParent}
        className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {COMM_CARDS.map((card) => (
          <motion.article
            key={card.title}
            variants={staggerChild}
            className="tk-glass"
            style={{
              borderRadius: "var(--tk-radius-panel)",
              overflow: "hidden",
              background: "rgba(255,255,255,0.85)",
            }}
          >
            <div style={{ position: "relative", aspectRatio: "16 / 10" }}>
              <Image
                src={card.image}
                alt={card.alt}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ objectFit: "cover" }}
              />
            </div>
            <div style={{ padding: "clamp(20px, 2.4vw, 28px)" }}>
              <h3
                className="tk-headline"
                style={{ fontSize: "clamp(1.15rem, 1.6vw, 1.4rem)", color: "var(--tk-ink)" }}
              >
                {card.title}
              </h3>
              <p
                style={{ marginTop: "10px", color: "var(--tk-ink-muted)", fontSize: "15px", lineHeight: 1.6 }}
              >
                {card.sub}
              </p>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </SectionShell>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
 * Section 7 — All-In-One (Ein Blick. Ein System. Kein Wechsel.)
 * ────────────────────────────────────────────────────────────────────────── */

const ALLINONE_SLIDES: { label: string; title: string; subtitle: string; tag: string; image: string; alt: string }[] = [
  {
    label: "Zeit erfasst sich selbst",
    title: "Zeit erfasst sich selbst",
    subtitle: "Ein Tap am Objekt. Zeit, Ort, Person — Sie erfahren es später, ohne nachzufragen.",
    tag: "Zeiterfassung",
    image: "/sections/zeiterfassung.png",
    alt: "Hand mit Smartphone scannt NFC-Tag am Objekt",
  },
  {
    label: "Der Plan schreibt sich",
    title: "Der Plan schreibt sich",
    subtitle: "Teams, Touren, Objekte im selben Kalender. Änderungen laufen automatisch durch, ohne dass Sie sie durchgeben.",
    tag: "Planung",
    image: "/sections/einsatzplanung.png",
    alt: "Disponentin plant Einsätze am Laptop",
  },
  {
    label: "Rechnung raus in Minuten",
    title: "Rechnung raus in Minuten",
    subtitle: "Aus Auftrag wird Angebot, wird Rechnung. Kein Copy-Paste, keine Excel-Runde.",
    tag: "Abrechnung",
    image: "/sections/angebote.png",
    alt: "Person erstellt Rechnung am Laptop",
  },
  {
    label: "DATEV geht von allein",
    title: "DATEV geht von allein",
    subtitle: "Zeiten, Rechnungen, Stammdaten beim Steuerberater, ohne dass Sie sie hinschicken.",
    tag: "Buchhaltung",
    image: "/sections/datev-export.webp",
    alt: "Buchhalter prüft Zahlen am Bildschirm",
  },
  {
    label: "Ihr Kunde sieht selbst nach",
    title: "Ihr Kunde sieht selbst nach",
    subtitle: "Live-Status, Fotos, Protokolle, Budget. Der Anruf, den er früher gemacht hätte, entfällt.",
    tag: "Kundendashboard",
    image: "/sections/kundendashboard.png",
    alt: "Auftraggeber-Dashboard mit Live-Status pro Objekt",
  },
  {
    label: "Subunternehmer laufen mit",
    title: "Subunternehmer laufen mit",
    subtitle: "Nachunternehmer werden direkt aus dem System angebunden, mit Einsätzen, Nachweisen und Abrechnung. Kein zweites Tool, kein zweites Login.",
    tag: "Subunternehmer",
    image: "/sections/allinone-subunternehmer.png",
    alt: "Team stimmt sich im Büro ab, entspannt bei der Zusammenarbeit",
  },
];

function AllInOneSection() {
  return (
    <SectionShell size="lg" tone="canvas">
      <div className="max-w-3xl">
        <motion.div {...fadeUp}>
          <Eyebrow>Ein System statt fünf</Eyebrow>
          <h2
            className="tk-headline mt-4"
            style={{ fontSize: "clamp(2rem, 4.4vw, 3.5rem)", color: "var(--tk-ink)" }}
          >
            Ein Blick.
            <br />
            <span style={{ color: "var(--tk-ink-muted)" }}>
              Ein System. Kein Wechsel.
            </span>
          </h2>
          <p
            className="mt-6"
            style={{ color: "var(--tk-ink-muted)", fontSize: "1.0625rem", lineHeight: 1.6 }}
          >
            Kein Tool für die Zeit, ein anderes für die Rechnung, ein drittes für den Kunden.
            Taskey deckt vom ersten Tag an ab, was Ihr Betrieb wirklich braucht — der Chef
            schaut in eine App, nicht in fünf.
          </p>
        </motion.div>

        <div className="mt-8 flex flex-wrap gap-3">
          <CtaButton href="https://signup.taskeyapp.com">Kostenlosen Account erstellen</CtaButton>
          <CtaButton href="/features" variant="ghost">Alle Funktionen</CtaButton>
        </div>
      </div>

      <motion.div
        {...staggerParent}
        className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {ALLINONE_SLIDES.map((slide, i) => {
          const featured = i === 0;
          return (
            <motion.article
              key={slide.label}
              variants={staggerChild}
              className="tk-glass"
              style={{
                borderRadius: "var(--tk-radius-panel)",
                overflow: "hidden",
                background: "rgba(255,255,255,0.9)",
                gridColumn: featured ? "span 1" : undefined,
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div style={{ position: "relative", aspectRatio: "16 / 10" }}>
                <Image src={slide.image} alt={slide.alt} fill sizes="(max-width: 1024px) 50vw, 33vw" style={{ objectFit: "cover" }} />
                <div
                  style={{
                    position: "absolute",
                    top: "14px",
                    left: "14px",
                    padding: "5px 10px",
                    borderRadius: "999px",
                    background: "rgba(255,255,255,0.9)",
                    color: "var(--tk-ink)",
                    fontSize: "11px",
                    fontWeight: 600,
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                    backdropFilter: "blur(6px)",
                    WebkitBackdropFilter: "blur(6px)",
                  }}
                >
                  {slide.tag}
                </div>
              </div>
              <div style={{ padding: "24px", display: "flex", flexDirection: "column", gap: "10px", flex: 1 }}>
                <h3
                  className="tk-headline"
                  style={{ fontSize: "1.1875rem", color: "var(--tk-ink)" }}
                >
                  {slide.title}
                </h3>
                <p style={{ color: "var(--tk-ink-muted)", fontSize: "14.5px", lineHeight: 1.55 }}>
                  {slide.subtitle}
                </p>
              </div>
            </motion.article>
          );
        })}
      </motion.div>
    </SectionShell>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
 * Section 8 — SoloPackage strip
 * ────────────────────────────────────────────────────────────────────────── */

function SoloPackageStrip() {
  return (
    <SectionShell size="sm" tone="canvas">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={springs.base}
        className="tk-glass"
        style={{
          borderRadius: "999px",
          padding: "12px 12px 12px 24px",
          display: "flex",
          alignItems: "center",
          gap: "16px",
          flexWrap: "wrap",
          justifyContent: "space-between",
          background: "rgba(255,255,255,0.85)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
          <span
            style={{
              padding: "4px 10px",
              borderRadius: "999px",
              background: "var(--tk-accent)",
              color: "#fff",
              fontSize: "11px",
              fontWeight: 600,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
            }}
          >
            Neu
          </span>
          <span style={{ color: "var(--tk-ink)", fontSize: "15px", maxWidth: "60ch" }}>
            Einzelunternehmer-Paket — 59 € pro Monat all inklusive: CRM, Subunternehmer-Portal,
            Finanzen, Kalkulationen und Kundenverwaltung.
          </span>
        </div>
        <Link
          href="/pricing"
          style={{
            padding: "10px 18px",
            borderRadius: "999px",
            background: "var(--tk-ink)",
            color: "#fff",
            fontSize: "13px",
            fontWeight: 500,
          }}
        >
          Zum Paket →
        </Link>
      </motion.div>
    </SectionShell>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
 * Section 9 — TargetAudiences (Reinigungsarten)
 * ────────────────────────────────────────────────────────────────────────── */

const AUDIENCES: {
  title: string;
  subtitle: string;
  pains: string[];
  image: string;
  alt: string;
}[] = [
  {
    title: "Unterhaltsreinigung",
    subtitle: "Für Büro-, Praxis- und Verwaltungsobjekte mit täglichen Reinigungstouren.",
    pains: ["Unvollständige Stundenzettel", "Leistungsnachweise im WhatsApp-Chaos"],
    image: "https://i.ibb.co/wFhjnSYW/Chat-GPT-Image-3-Juli-2026-15-37-33.png",
    alt: "Reinigungskraft bei der Büroreinigung",
  },
  {
    title: "Glas- & Fassadenreinigung",
    subtitle: "Für Glas-, Fenster- und Fassadenreiniger mit Höhen- und Spezialeinsätzen.",
    pains: ["Aufmaß und Abrechnung händisch", "Sicherheits- und Einsatznachweise unvollständig"],
    image: "/sections/glasreinigung.jpg",
    alt: "Glasreiniger an einer Fensterfront",
  },
  {
    title: "Industrie- & Produktionsreinigung",
    subtitle: "Für Produktionsreinigung, Maschinenreinigung und Werksreinigung.",
    pains: ["Dokumentationspflicht gegenüber Auftraggebern", "Revisionssichere Nachweise für Audits"],
    image: "/sections/industriereinigung.png",
    alt: "Industriereinigung in einer Produktionshalle",
  },
  {
    title: "Klinik- & Hygienereinigung",
    subtitle: "Für Krankenhäuser, Praxen, Pflegeheime und Reinräume mit höchstem Hygienelevel.",
    pains: ["Hygienenachweise auf Papier", "Audit-Vorbereitung kostet Tage"],
    image: "/sections/klinikreinigung.png",
    alt: "Hygiene- und Klinikreinigung",
  },
  {
    title: "Hotel-Housekeeping",
    subtitle: "Für Reinigungsfirmen mit Hotel-, Ferienanlagen- und Apartment-Aufträgen.",
    pains: ["Zimmerstatus telefonisch durchgesagt", "Reklamationen ohne Foto-Nachweis"],
    image: "/sections/hotel-housekeeping.png",
    alt: "Housekeeping im Hotelzimmer",
  },
  {
    title: "Sonder- & Baureinigung",
    subtitle: "Für Bau-, Grund-, Brand- und Wasserschadensanierung sowie Spezialreinigung.",
    pains: ["Aufträge schlecht kalkuliert – Marge weg", "Doku für Versicherungen fehlt"],
    image: "/sections/baureinigung.jpg",
    alt: "Sonderreinigung auf einer Baustelle",
  },
];

const MORE_AUDIENCES = "Taskey wird auch eingesetzt von: Treppenhausreinigern, Teppich- und Polsterreinigern, Solarmodul-Reinigern, Fahrzeugreinigern, Containerreinigung, Tank- und Behälterreinigung, Reinigern für Lebensmittelproduktion, Reinräume und Pharma, Krankenhaus-Servicefirmen, Pflegeheim-Reinigung, Schul- und Kita-Reinigung, Sportstätten-Reinigung, Schwimmbad- und Saunareinigung, Veranstaltungs- und Event-Reinigung, Reinigern für Banken und öffentliche Gebäude, Apartment- und Ferienwohnungsreinigung, mobile Reinigungsdiensten, Glas- und Wintergartenreinigung, Photovoltaik-Reinigung sowie Spezialreinigern für Brand- und Wasserschadensanierung.";

function AudiencesSection() {
  return (
    <SectionShell size="lg" tone="ink">
      <div className="max-w-3xl">
        <motion.div {...fadeUp}>
          <Eyebrow tone="light">Für wen ist Taskey gemacht?</Eyebrow>
          <h2
            className="tk-headline mt-4"
            style={{ fontSize: "clamp(2rem, 4.4vw, 3.5rem)", color: "#fff" }}
          >
            Gebaut für
            <br />
            <span style={{ color: "rgba(255,255,255,0.55)" }}>Reinigungsfirmen.</span>
          </h2>
          <p
            className="mt-6"
            style={{ color: "rgba(255,255,255,0.75)", fontSize: "1.0625rem", lineHeight: 1.6 }}
          >
            Keine generische Business-Software. Taskey ist 100 % auf den Alltag von
            Reinigungsbetrieben im DACH-Raum zugeschnitten.
          </p>
          <p
            className="mt-4"
            style={{ color: "rgba(255,255,255,0.6)", fontSize: "1rem", lineHeight: 1.6, fontStyle: "italic" }}
          >
            Für die Chefs, die längst gemerkt haben: Kontrolle heißt nicht, überall dabei zu
            sein — sondern immer zu wissen, dass es läuft.
          </p>
        </motion.div>
      </div>

      <motion.div
        {...staggerParent}
        className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
      >
        {AUDIENCES.map((aud) => (
          <motion.article
            key={aud.title}
            variants={staggerChild}
            style={{
              borderRadius: "var(--tk-radius-panel)",
              overflow: "hidden",
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.08)",
              backdropFilter: "blur(14px)",
              WebkitBackdropFilter: "blur(14px)",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div style={{ position: "relative", aspectRatio: "16 / 10", overflow: "hidden" }}>
              <Image
                src={aud.image}
                alt={aud.alt}
                fill
                sizes="(max-width: 1024px) 50vw, 33vw"
                style={{ objectFit: "cover" }}
                unoptimized={aud.image.startsWith("http")}
              />
              <div
                aria-hidden
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(180deg, rgba(2,6,23,0) 40%, rgba(2,6,23,0.75) 100%)",
                }}
              />
            </div>
            <div style={{ padding: "22px", flex: 1, display: "flex", flexDirection: "column", gap: "14px" }}>
              <div>
                <h3
                  className="tk-headline"
                  style={{ fontSize: "1.25rem", color: "#fff", letterSpacing: "-0.01em" }}
                >
                  {aud.title}
                </h3>
                <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "14px", lineHeight: 1.55, marginTop: "6px" }}>
                  {aud.subtitle}
                </p>
              </div>
              <div>
                <div className="tk-eyebrow" style={{ color: "rgba(255,255,255,0.5)" }}>Typische Pain-Points</div>
                <ul style={{ marginTop: "10px", display: "flex", flexDirection: "column", gap: "8px" }}>
                  {aud.pains.map((p) => (
                    <li key={p} style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                      <span
                        aria-hidden
                        style={{
                          marginTop: "8px",
                          width: "5px",
                          height: "5px",
                          borderRadius: "999px",
                          background: "rgba(255,255,255,0.4)",
                          flexShrink: 0,
                        }}
                      />
                      <span style={{ color: "rgba(255,255,255,0.85)", fontSize: "14px", lineHeight: 1.5 }}>
                        {p}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.article>
        ))}
      </motion.div>

      <motion.div
        {...fadeUp}
        className="mt-16 max-w-4xl"
      >
        <div className="tk-eyebrow" style={{ color: "rgba(255,255,255,0.6)" }}>
          Und viele weitere Reinigungs-Spezialisierungen
        </div>
        <p
          style={{
            marginTop: "14px",
            color: "rgba(255,255,255,0.7)",
            fontSize: "15px",
            lineHeight: 1.65,
          }}
        >
          {MORE_AUDIENCES}
        </p>
        <div className="mt-8">
          <motion.a
            href="https://signup.taskeyapp.com"
            whileTap={{ scale: 0.97 }}
            transition={springs.snappy}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium"
            style={{ background: "#fff", color: "var(--tk-ink)" }}
          >
            Kostenlosen Account erstellen →
          </motion.a>
        </div>
      </motion.div>
    </SectionShell>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
 * Section 10 — Testimonials + Stats bar + CTA
 * ────────────────────────────────────────────────────────────────────────── */

const TESTIMONIALS = [
  {
    quote:
      "Ich rufe niemanden mehr an. Ich mache die App auf, sehe alles im grünen Bereich und leg das Handy weg. So habe ich noch nie gearbeitet — endlich.",
    initials: "MW",
    name: "M. W.",
    role: "Geschäftsführer · Reinigungsbetrieb (anonymisiert)",
    tag: "Unterhaltsreinigung",
    location: "Stuttgart",
    size: "42 Mitarbeitende",
  },
  {
    quote:
      "Ich habe aufgehört, mir Sorgen um Nachweise zu machen. Die stehen längst da, bevor ich sie brauche. Zum ersten Mal seit Jahren atme ich montags durch.",
    initials: "SK",
    name: "S. K.",
    role: "Objektleiterin · Reinigungsbetrieb (anonymisiert)",
    tag: "Industriereinigung",
    location: "München",
    size: "120 Mitarbeitende",
  },
  {
    quote:
      "Vorher hatte ich vier Tools nebeneinander offen. Heute schaue ich einmal am Vormittag hinein — und weiß Bescheid. Der Rest der Zeit gehört mir wieder.",
    initials: "TR",
    name: "T. R.",
    role: "Inhaber · Reinigungsbetrieb (anonymisiert)",
    tag: "Glas- & Fassadenreinigung",
    location: "Köln",
    size: "18 Mitarbeitende",
  },
];

const STATS = [
  { value: "DE", label: "Entwickelt in Deutschland" },
  { value: "DACH", label: "DE · AT · CH" },
  { value: "100 %", label: "DSGVO-konform" },
];

function TestimonialsSection() {
  return (
    <SectionShell size="lg" tone="canvas">
      <div className="max-w-3xl">
        <motion.div {...fadeUp}>
          <Eyebrow>Chefs, die das Handy wieder weglegen.</Eyebrow>
          <h2
            className="tk-headline mt-4"
            style={{ fontSize: "clamp(2rem, 4.4vw, 3.5rem)", color: "var(--tk-ink)" }}
          >
            Ruhige Betriebe.
            <br />
            <span style={{ color: "var(--tk-ink-muted)" }}>Und deren Chefs.</span>
          </h2>
          <p
            className="mt-6"
            style={{ color: "var(--tk-ink-muted)", fontSize: "1.0625rem", lineHeight: 1.6 }}
          >
            Wir sind seit Februar 2026 am Markt. Das Ziel: Software bauen, die Chefs im
            Feierabend lässt — und den Betrieb trotzdem im grünen Bereich hält. Hier ein paar
            erste Stimmen aus Pilotgesprächen mit Reinigungsbetrieben.
          </p>
        </motion.div>
      </div>

      <motion.div
        {...staggerParent}
        className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        {TESTIMONIALS.map((t) => (
          <motion.blockquote
            key={t.initials}
            variants={staggerChild}
            className="tk-glass"
            style={{
              borderRadius: "var(--tk-radius-panel)",
              padding: "clamp(20px, 2.4vw, 30px)",
              background: "rgba(255,255,255,0.85)",
              display: "flex",
              flexDirection: "column",
              gap: "22px",
            }}
          >
            <p
              style={{
                color: "var(--tk-ink)",
                fontSize: "clamp(15px, 1.4vw, 17px)",
                lineHeight: 1.55,
                letterSpacing: "-0.005em",
              }}
            >
              „{t.quote}“
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <div
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "999px",
                  background: "var(--tk-ink)",
                  color: "#fff",
                  display: "grid",
                  placeItems: "center",
                  fontSize: "13px",
                  fontWeight: 600,
                }}
              >
                {t.initials}
              </div>
              <div style={{ minWidth: 0 }}>
                <div style={{ fontSize: "14px", fontWeight: 600, color: "var(--tk-ink)" }}>{t.name}</div>
                <div style={{ fontSize: "12px", color: "var(--tk-ink-muted)" }}>{t.role}</div>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "8px",
                paddingTop: "12px",
                borderTop: "1px solid rgba(15, 23, 42, 0.06)",
              }}
            >
              {[t.tag, t.location, t.size].map((chip) => (
                <span
                  key={chip}
                  style={{
                    padding: "4px 10px",
                    borderRadius: "999px",
                    background: "rgba(15, 23, 42, 0.06)",
                    fontSize: "11px",
                    color: "var(--tk-ink-muted)",
                  }}
                >
                  {chip}
                </span>
              ))}
            </div>
          </motion.blockquote>
        ))}
      </motion.div>

      <motion.div
        {...staggerParent}
        className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto"
      >
        {STATS.map((s) => (
          <motion.div
            key={s.label}
            variants={staggerChild}
            className="tk-glass"
            style={{
              padding: "22px",
              borderRadius: "var(--tk-radius-panel)",
              textAlign: "center",
              background: "rgba(255,255,255,0.75)",
            }}
          >
            <div
              style={{
                fontSize: "clamp(1.5rem, 2.6vw, 2rem)",
                fontWeight: 600,
                letterSpacing: "-0.02em",
                color: "var(--tk-ink)",
              }}
            >
              {s.value}
            </div>
            <div
              className="tk-eyebrow"
              style={{ marginTop: "8px" }}
            >
              {s.label}
            </div>
          </motion.div>
        ))}
      </motion.div>

      <motion.div {...fadeUp} className="mt-20 text-center max-w-2xl mx-auto">
        <h3
          className="tk-headline"
          style={{ fontSize: "clamp(1.5rem, 2.6vw, 2.25rem)", color: "var(--tk-ink)" }}
        >
          Sehen Sie selbst, wie Ruhe im Betrieb aussieht.
        </h3>
        <p
          className="mt-4"
          style={{ color: "var(--tk-ink-muted)", fontSize: "1rem", lineHeight: 1.6 }}
        >
          Erstellen Sie kostenlos Ihren Taskey-Account. Kein Setup-Aufwand, keine
          Vertragsbindung, voller Funktionsumfang.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <CtaButton href="https://signup.taskeyapp.com">Kostenlosen Account erstellen</CtaButton>
          <CtaButton href="/features" variant="ghost">Alle Funktionen</CtaButton>
        </div>
      </motion.div>
    </SectionShell>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
 * Section — Live-Margen
 * ────────────────────────────────────────────────────────────────────────── */

function LiveMargenSection() {
  return (
    <SectionShell size="lg" tone="elev">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        <div className="lg:col-span-5 lg:sticky lg:top-32">
          <motion.div {...fadeUp}>
            <Eyebrow>Die Marge im grünen Bereich</Eyebrow>
            <h2
              className="tk-headline mt-4"
              style={{ fontSize: "clamp(2rem, 4.4vw, 3.5rem)", color: "var(--tk-ink)" }}
            >
              Die Marge sehen Sie,
              <br />
              <span style={{ color: "var(--tk-ink-muted)" }}>
                bevor der Monat sie versteckt.
              </span>
            </h2>
            <p
              className="mt-6"
              style={{ color: "var(--tk-ink-muted)", fontSize: "1.0625rem", lineHeight: 1.6 }}
            >
              Den Anruf vom Steuerberater, der Ihnen sagt, dass ein Auftrag ein Verlust war —
              den kennen Sie. Mit Taskey passiert der nicht mehr. Sie sehen es, während es
              passiert, und drehen bei, solange es noch etwas nützt.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <CtaButton href="https://signup.taskeyapp.com">Kostenlosen Account erstellen</CtaButton>
              <CtaButton href="/features" variant="ghost">Mehr erfahren</CtaButton>
            </div>
          </motion.div>
        </div>

        <div className="lg:col-span-7">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={springs.soft}
          >
            <DashboardMarge />
          </motion.div>
        </div>
      </div>
    </SectionShell>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
 * Section — iOS App (three phone screens with parallax)
 * ────────────────────────────────────────────────────────────────────────── */

const IOS_FEATURES = [
  "So einfach wie WhatsApp",
  "Funktioniert auch ohne Internet",
  "Sofort-Nachrichten aufs Handy",
  "Anmelden per Fingerabdruck",
];

function IOSAppRedesignSection() {
  return (
    <SectionShell size="lg" tone="ink">
      <div className="max-w-3xl">
        <motion.div {...fadeUp}>
          <Eyebrow tone="light">Die Handy-App für Ihr Team</Eyebrow>
          <h2
            className="tk-headline mt-4"
            style={{ fontSize: "clamp(2rem, 4.4vw, 3.5rem)", color: "#fff" }}
          >
            Der Betrieb
            <br />
            <span style={{ color: "rgba(255,255,255,0.55)" }}>in der Hosentasche.</span>
          </h2>
          <p
            className="mt-6"
            style={{ color: "rgba(255,255,255,0.75)", fontSize: "1.0625rem", lineHeight: 1.6 }}
          >
            Ihr Team öffnet die App, macht seinen Job, geht wieder raus. Sie öffnen dieselbe
            App auf dem Sofa und wissen, dass alles läuft.
          </p>
        </motion.div>
      </div>

      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 items-end">
        {[
          { src: "/sections/phone-screen-1.jpg", alt: "Taskey App – Übersicht des Reinigungs-Teams", offset: 0 },
          { src: "/sections/phone-screen-3.jpg", alt: "Taskey App – Aufgaben und Nachweise", offset: 40 },
          { src: "/sections/phone-screen-2.jpg", alt: "Taskey App in Aktion", offset: 0 },
        ].map((p, i) => (
          <motion.div
            key={p.src}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: -p.offset }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ ...springs.soft, delay: i * 0.1 }}
            style={{
              position: "relative",
              aspectRatio: "9 / 19",
              borderRadius: "44px",
              overflow: "hidden",
              boxShadow: "0 40px 100px -30px rgba(0,0,0,0.55)",
              border: "6px solid rgba(255,255,255,0.06)",
            }}
          >
            <Image
              src={p.src}
              alt={p.alt}
              fill
              sizes="(max-width: 768px) 60vw, 22vw"
              style={{ objectFit: "cover" }}
            />
          </motion.div>
        ))}
      </div>

      <motion.div
        {...staggerParent}
        className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4"
      >
        {IOS_FEATURES.map((f) => (
          <motion.div
            key={f}
            variants={staggerChild}
            className="tk-glass-dark"
            style={{
              padding: "16px 20px",
              borderRadius: "var(--tk-radius-card)",
              fontSize: "14px",
              color: "#fff",
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <span
              aria-hidden
              style={{ width: "8px", height: "8px", borderRadius: "999px", background: "#34d399" }}
            />
            {f}
          </motion.div>
        ))}
      </motion.div>

      <div className="mt-12 flex flex-wrap items-center gap-4">
        <motion.a
          href="https://apps.apple.com/de/app/taskey/id6748812720"
          whileTap={{ scale: 0.97 }}
          transition={springs.snappy}
          className="inline-flex items-center gap-2 px-7 py-4 rounded-full font-medium"
          style={{ background: "#fff", color: "var(--tk-ink)", fontSize: "16px" }}
        >
          Im App Store laden
        </motion.a>
        <motion.a
          href="/features"
          whileTap={{ scale: 0.97 }}
          transition={springs.snappy}
          className="inline-flex items-center gap-2 px-7 py-4 rounded-full font-medium tk-glass-dark"
          style={{ fontSize: "16px" }}
        >
          Alle Funktionen entdecken
        </motion.a>
        <span style={{ color: "rgba(255,255,255,0.55)", fontSize: "13px" }}>
          Genutzt von Betrieben im DACH-Raum
        </span>
      </div>
    </SectionShell>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
 * Section 15 — Ablauf (4 steps)
 * ────────────────────────────────────────────────────────────────────────── */

const STEPS: { n: string; title: string; body: string; cta?: { label: string; href: string } }[] = [
  {
    n: "Schritt 1",
    title: "Kennenlerngespräch",
    body: "Komplett kostenlos und unverbindlich. Wir hören zu, verstehen Ihren Betrieb und beantworten Ihre Fragen. Kein Verkaufsdruck.",
    cta: { label: "Jetzt Termin buchen", href: "https://calendly.com/fynn-taskeyapp/new-meeting" },
  },
  {
    n: "Schritt 2",
    title: "Einrichtungstermin",
    body: "Sie bekommen von uns einen Upload-Link. Im gemeinsamen Zoom-Meeting laden Sie alle bestehenden Daten per Drag & Drop hoch. Innerhalb von 48 Stunden ist alles vollständig in Taskey übertragen.",
  },
  {
    n: "Schritt 3",
    title: "14 Tage kostenlos testen",
    body: "Ihr Team nutzt Taskey mit echten Daten und im echten Alltag. Wir bleiben in dieser Zeit für Sie erreichbar, klären Rückfragen und helfen beim Feintuning.",
  },
  {
    n: "Schritt 4",
    title: "Tarif-Beratung",
    body: "Wir kommen aktiv auf Sie zu und besprechen gemeinsam, welcher Tarif von der Preise-Seite am besten zu Ihrem Betrieb passt. Keine automatische Verlängerung ohne Absprache.",
    cta: { label: "Preise ansehen", href: "/pricing" },
  },
];

function AblaufRedesignSection() {
  return (
    <SectionShell size="lg" tone="canvas">
      <div className="max-w-3xl">
        <motion.div {...fadeUp}>
          <Eyebrow>In 4 Schritten zu Taskey</Eyebrow>
          <h2
            className="tk-headline mt-4"
            style={{ fontSize: "clamp(2rem, 4.4vw, 3.5rem)", color: "var(--tk-ink)" }}
          >
            So läuft es
            <br />
            <span style={{ color: "var(--tk-ink-muted)" }}>mit uns ab.</span>
          </h2>
          <p
            className="mt-6"
            style={{ color: "var(--tk-ink-muted)", fontSize: "1.0625rem", lineHeight: 1.6 }}
          >
            Klar strukturiert, ohne Überraschungen. Vom ersten Gespräch bis zum passenden
            Tarif begleiten wir Sie persönlich.
          </p>
        </motion.div>
      </div>

      <motion.div
        {...staggerParent}
        className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5"
      >
        {STEPS.map((s, i) => (
          <motion.article
            key={s.n}
            variants={staggerChild}
            className="tk-glass"
            style={{
              borderRadius: "var(--tk-radius-panel)",
              padding: "clamp(20px, 2.4vw, 30px)",
              background: "rgba(255,255,255,0.85)",
              display: "flex",
              flexDirection: "column",
              gap: "18px",
              minHeight: "340px",
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
              <div className="tk-eyebrow">{s.n}</div>
              <div
                style={{
                  width: "36px",
                  height: "36px",
                  borderRadius: "999px",
                  background: "var(--tk-ink)",
                  color: "#fff",
                  display: "grid",
                  placeItems: "center",
                  fontSize: "13px",
                  fontWeight: 600,
                }}
              >
                {i + 1}
              </div>
            </div>
            <div style={{ flex: 1 }}>
              <h3
                className="tk-headline"
                style={{ fontSize: "1.25rem", color: "var(--tk-ink)" }}
              >
                {s.title}
              </h3>
              <p
                style={{
                  marginTop: "10px",
                  color: "var(--tk-ink-muted)",
                  fontSize: "14.5px",
                  lineHeight: 1.55,
                }}
              >
                {s.body}
              </p>
            </div>
            {s.cta ? (
              <a
                href={s.cta.href}
                style={{
                  fontSize: "13px",
                  fontWeight: 500,
                  color: "var(--tk-accent)",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                }}
              >
                {s.cta.label} <span aria-hidden>→</span>
              </a>
            ) : null}
          </motion.article>
        ))}
      </motion.div>
    </SectionShell>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
 * Section 16 — FAQ
 * ────────────────────────────────────────────────────────────────────────── */

function FAQRedesignSection() {
  return (
    <SectionShell size="lg" tone="elev">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        <div className="lg:col-span-5 lg:sticky lg:top-32">
          <motion.div {...fadeUp}>
            <Eyebrow>Häufig gestellte Fragen</Eyebrow>
            <h2
              className="tk-headline mt-4"
              style={{ fontSize: "clamp(2rem, 4.4vw, 3.5rem)", color: "var(--tk-ink)" }}
            >
              Alles,
              <br />
              was Sie
              <br />
              <span style={{ color: "var(--tk-ink-muted)" }}>wissen müssen.</span>
            </h2>
            <p
              className="mt-6"
              style={{ color: "var(--tk-ink-muted)", fontSize: "1.0625rem", lineHeight: 1.6 }}
            >
              Alles, was Sie über Taskey wissen müssen.
            </p>
            <a
              href="https://calendly.com/fynn-taskeyapp/new-meeting"
              className="mt-6 inline-flex items-center gap-2"
              style={{ color: "var(--tk-accent)", fontSize: "14px", fontWeight: 500 }}
            >
              Persönlich fragen <span aria-hidden>→</span>
            </a>
          </motion.div>
        </div>

        <div className="lg:col-span-7">
          <FaqBoard />
        </div>
      </div>
    </SectionShell>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
 * Final closing CTA
 * ────────────────────────────────────────────────────────────────────────── */

function FinalCTASection() {
  return (
    <SectionShell size="lg" tone="ink">
      <motion.div
        {...fadeUp}
        className="text-center max-w-3xl mx-auto"
      >
        <Eyebrow tone="light">Weniger Tools. Weniger Aufwand.</Eyebrow>
        <h2
          className="tk-display mt-6"
          style={{ fontSize: "clamp(2.5rem, 6.5vw, 5.5rem)", color: "#fff" }}
        >
          Die sauberste Software
          <br />
          <span style={{ color: "rgba(255,255,255,0.55)" }}>von allen.</span>
        </h2>
        <p
          className="mt-8"
          style={{ color: "rgba(255,255,255,0.7)", fontSize: "1.0625rem", lineHeight: 1.6 }}
        >
          Ihre Teams draußen. Ihre Zahlen live. Ihre Nachweise fertig, bevor jemand fragt.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <motion.a
            href="https://signup.taskeyapp.com"
            whileTap={{ scale: 0.97 }}
            transition={springs.snappy}
            className="inline-flex items-center gap-2 px-7 py-4 rounded-full font-medium"
            style={{ background: "#fff", color: "var(--tk-ink)", fontSize: "16px" }}
          >
            Kostenlosen Account erstellen →
          </motion.a>
          <motion.a
            href="/features"
            whileTap={{ scale: 0.97 }}
            transition={springs.snappy}
            className="inline-flex items-center gap-2 px-7 py-4 rounded-full font-medium tk-glass-dark"
            style={{ fontSize: "16px" }}
          >
            Alle Funktionen
          </motion.a>
        </div>
      </motion.div>
    </SectionShell>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
 * Full-viewport parallax bridge between sections
 * ────────────────────────────────────────────────────────────────────────── */

function BridgeParallax({
  src,
  alt,
  quote,
  attribution,
}: {
  src: string;
  alt: string;
  quote?: string;
  attribution?: string;
}) {
  return (
    <Parallax
      src={src}
      alt={alt}
      height="80vh"
      strength={160}
      overlay="linear-gradient(180deg, rgba(15,23,42,0.35) 0%, rgba(15,23,42,0.75) 100%)"
    >
      {quote ? (
        <div
          className="tk-container-wide"
          style={{
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "10vh 0",
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={springs.soft}
            style={{ maxWidth: "900px", textAlign: "center" }}
          >
            <p
              className="tk-display"
              style={{
                color: "#fff",
                fontSize: "clamp(1.75rem, 4.4vw, 3.5rem)",
                lineHeight: 1.15,
                letterSpacing: "-0.02em",
              }}
            >
              {quote}
            </p>
            {attribution ? (
              <div
                style={{
                  marginTop: "20px",
                  color: "rgba(255,255,255,0.65)",
                  fontSize: "13px",
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                }}
              >
                {attribution}
              </div>
            ) : null}
          </motion.div>
        </div>
      ) : null}
    </Parallax>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
 * Composition
 * ────────────────────────────────────────────────────────────────────────── */

export default function HomeShell() {
  return (
    <main style={{ background: "var(--tk-canvas)" }}>
      <HeroScene />
      <FeatureTrio />
      <BookMeetingSection />
      <AufEinenBlickSection />
      <IntroVideoSection />
      <CommunicationUSPSection />

      <BridgeParallax
        src="/sections/motor-unter-ruhe.png"
        alt="Team in Bürobesprechung, entspannte Stimmung"
        quote="Jeder Einsatz beweist sich selbst. Zeiten erfassen sich, während gearbeitet wird. Wenn eine Reklamation kommt, sind Sie schon fertig."
        attribution="Der Motor unter der Ruhe"
      />

      <AllInOneSection />
      <SoloPackageStrip />
      <AudiencesSection />
      <TestimonialsSection />
      <LiveMargenSection />
      <IOSAppRedesignSection />
      <AblaufRedesignSection />
      <FAQRedesignSection />
      <FinalCTASection />
    </main>
  );
}
