"use client";

import Link from "@/components/LocaleLink";
import { useLanguage } from "@/context/LanguageContext";

/* ============================================================================
 * HERO — Cinematic Video-Stage
 * ----------------------------------------------------------------------------
 * TODO: Stock-Assets durch finale Brand-Assets ersetzen.
 *
 * Empfohlene Bezugsquellen (kostenlos, ohne Lizenz-Hassle):
 *   - Pexels:  https://www.pexels.com/de-de/suche/videos/cleaning%20team/
 *   - Coverr:  https://coverr.co/  (Search: "office", "cleaning")
 *   - Mixkit:  https://mixkit.co/free-stock-video/business/
 *
 * Wenn du finale Files hast → in /public/videos/ bzw. /public/images/ legen
 * und unten die ASSETS-Konstante umbiegen. Ein Ort, eine Änderung.
 * ========================================================================== */
const ASSETS = {
  // Cinematic Hintergrund-Loop. Sollte ruhig laufen (keine schnellen Schnitte).
  // Ideal: 1080p, max 15s, < 4MB, ohne Ton.
  heroVideo: "https://videos.pexels.com/video-files/3209828/3209828-hd_1920_1080_25fps.mp4",
  heroPoster: "https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=1920",

  // 3 Story-Boxen unter dem Hero (menschliche Gesichter / echte Szenen)
  storyOne: "https://images.pexels.com/photos/4239031/pexels-photo-4239031.jpeg?auto=compress&cs=tinysrgb&w=900",   // Reinigungsteam im Einsatz
  storyTwo: "https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=900",   // Bürokraft / Disponentin
  storyThree: "https://images.pexels.com/photos/3727464/pexels-photo-3727464.jpeg?auto=compress&cs=tinysrgb&w=900", // Handy / NFC-Tap-Geste
};

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section
      data-hero-section
      className="relative isolate text-white overflow-hidden bg-slate-900"
    >
      {/* === Background Video Layer ============================================ */}
      <div className="absolute inset-0 -z-10">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster={ASSETS.heroPoster}
          className="absolute inset-0 w-full h-full object-cover"
          aria-hidden="true"
        >
          <source src={ASSETS.heroVideo} type="video/mp4" />
        </video>

        {/* Gradient-Overlay: hält die Headline lesbar ohne das Video zu erschlagen */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/85 via-slate-950/55 to-slate-950/95" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(2,6,23,0.55)_70%)]" />
      </div>

      {/* === Stage Content ===================================================== */}
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 md:pt-40 pb-16 md:pb-24 min-h-[88vh] flex flex-col justify-center">
        {/* Live Badge */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-md shadow-lg shadow-black/20">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400" />
            </span>
            <span className="text-[10px] sm:text-xs font-black tracking-[0.25em] text-white uppercase">
              Echtzeit · Feld ↔ Büro
            </span>
          </div>
        </div>

        {/* Headline */}
        <h1 className="text-center text-[clamp(2.6rem,8.5vw,6.5rem)] font-black leading-[0.95] tracking-tight mb-6 text-white drop-shadow-[0_2px_20px_rgba(0,0,0,0.45)]">
          {t("homeHero.title1")}
          <br />
          <span className="text-white">
            {t("homeHero.title2")}{" "}
            <span className="block sm:inline">{t("homeHero.title3")}</span>
          </span>
        </h1>

        {/* Subline */}
        <p className="text-center text-base md:text-xl text-white font-medium mb-2 max-w-3xl mx-auto leading-relaxed">
          {t("homeHero.features")}
        </p>
        <p className="text-center text-base md:text-xl font-black text-white mb-10 max-w-3xl mx-auto">
          {t("homeHero.tagline")}
        </p>

        {/* CTAs — bewusst klar und einfach */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center items-center mb-5">
          <Link
            href="https://signup.taskeyapp.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-white text-slate-900 text-base font-bold rounded-full hover:bg-cyan-50 transition-all shadow-2xl shadow-cyan-500/20 hover:scale-[1.02]"
          >
            {t("homeHero.cta.trial")}
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
          <Link
            href="/features"
            className="inline-flex items-center justify-center gap-2 px-10 py-4 border border-white/30 bg-white/5 backdrop-blur-sm text-white text-base font-bold rounded-full hover:bg-white/10 transition-colors"
          >
            Alle Funktionen
          </Link>
        </div>

        <p className="text-center text-sm text-white">{t("homeHero.trust")}</p>
      </div>

      {/* === Story-Boxen: menschliche Szenen ================================== */}
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 md:pb-28">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
          <StoryCard
            image={ASSETS.storyOne}
            tag="Im Feld"
            title="Ihr Team vor Ort"
            sub="Jeder Einsatz dokumentiert – Foto, Zeit, Ort."
          />
          <StoryCard
            image={ASSETS.storyTwo}
            tag="Im Büro"
            title="Disposition im Überblick"
            sub="Live sehen, wer wo ist. Ohne WhatsApp-Chaos."
          />
          <StoryCard
            image={ASSETS.storyThree}
            tag="Ein Tap"
            title="NFC am Objekt"
            sub="Anmelden in 1 Sekunde – auch ohne Deutschkenntnisse."
          />
        </div>
      </div>
    </section>
  );
}

function StoryCard({
  image,
  tag,
  title,
  sub,
}: {
  image: string;
  tag: string;
  title: string;
  sub: string;
}) {
  return (
    <div className="group relative rounded-3xl overflow-hidden border border-white/10 bg-white/[0.04] backdrop-blur-md shadow-2xl shadow-black/30 transition-transform duration-500 hover:-translate-y-1">
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={image}
          alt={title}
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent" />
        <span className="absolute top-3 left-3 inline-flex items-center text-[10px] font-black tracking-[0.25em] uppercase text-white/95 bg-white/10 border border-white/20 backdrop-blur-md rounded-full px-3 py-1">
          {tag}
        </span>
      </div>

      {/* Text */}
      <div className="p-5 md:p-6">
        <h3 className="text-lg md:text-xl font-black text-white leading-tight mb-1.5">
          {title}
        </h3>
        <p className="text-sm text-white/70 leading-relaxed">{sub}</p>
      </div>
    </div>
  );
}
