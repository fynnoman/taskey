"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";

const ASSETS = {
  heroVideo: "/videos/hero-bg.mp4",
  heroPoster: "/images/hero-poster.jpg",
};

const TASKEY_HOME = "https://www.taskeyapp.com";
const TASKEY_FEATURES = "https://www.taskeyapp.com/features";

export default function ReinigungsappHero() {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = true;
    v.defaultMuted = true;

    const tryPlay = () => {
      const p = v.play();
      if (p && typeof p.catch === "function") {
        p.catch(() => {});
      }
    };
    tryPlay();

    const onVisibility = () => {
      if (document.visibilityState === "visible" && v.paused) tryPlay();
    };
    const onPageShow = () => {
      if (v.paused) tryPlay();
    };
    document.addEventListener("visibilitychange", onVisibility);
    window.addEventListener("pageshow", onPageShow);

    return () => {
      document.removeEventListener("visibilitychange", onVisibility);
      window.removeEventListener("pageshow", onPageShow);
    };
  }, []);

  return (
    <section
      data-hero-section
      className="relative isolate text-white overflow-hidden bg-slate-900"
    >
      <div className="absolute inset-0 -z-10">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          disablePictureInPicture
          poster={ASSETS.heroPoster}
          className="absolute inset-0 w-full h-full object-cover"
          aria-hidden="true"
        >
          <source src={ASSETS.heroVideo} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/68 via-slate-950/44 to-slate-950/76" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(2,6,23,0.44)_70%)]" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 md:pt-40 pb-12 md:pb-24 min-h-[78vh] md:min-h-[88vh] flex flex-col justify-center">
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-md shadow-lg shadow-black/20">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400" />
            </span>
            <span className="text-[10px] sm:text-xs font-black tracking-[0.25em] text-white/90 uppercase">
              Die Reinigungsapp für professionelle Betriebe
            </span>
          </div>
        </div>

        <h1 className="text-center text-[clamp(2rem,8.5vw,6.5rem)] font-black leading-[0.95] tracking-tight mb-6 text-white drop-shadow-[0_2px_20px_rgba(0,0,0,0.45)] break-words hyphens-auto">
          Eine Reinigungsapp,
          <br />
          <span className="bg-gradient-to-r from-cyan-300 via-sky-200 to-cyan-300 bg-clip-text text-transparent">
            die den Betrieb <span className="block sm:inline">wirklich führt.</span>
          </span>
        </h1>

        <p className="text-center text-base md:text-xl text-white/85 font-medium mb-2 max-w-3xl mx-auto leading-relaxed">
          Zeiterfassung, Objektnachweis per NFC, Einsatzplanung, Angebote, Rechnungen, Live-Margen. Alles in einer App, gebaut für Reinigungsbetriebe im DACH-Raum.
        </p>
        <p className="text-center text-base md:text-xl font-black text-white mb-10 max-w-3xl mx-auto">
          Weniger Tools. Weniger Aufwand. Mehr Marge, direkt vom Handy.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center items-center mb-5">
          <Link
            href={TASKEY_HOME}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 sm:px-10 py-3.5 sm:py-4 bg-white text-slate-900 text-base font-bold rounded-full hover:bg-cyan-50 transition-all shadow-2xl shadow-cyan-500/20 hover:scale-[1.02]"
          >
            Zur App wechseln
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
          <Link
            href={TASKEY_FEATURES}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 sm:px-10 py-3.5 sm:py-4 border border-white/30 bg-white/5 backdrop-blur-sm text-white text-base font-bold rounded-full hover:bg-white/10 transition-colors"
          >
            Alle Funktionen ansehen
          </Link>
        </div>

        <p className="text-center text-sm text-white/60">
          Keine Kreditkarte. Kein Risiko. Sofort loslegen.
        </p>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-14 md:pb-28">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-14">
          <StoryText
            tag="Betrieb auf einen Blick"
            title="Sie öffnen die App und wissen, dass alles läuft."
            body="Wo Ihre Teams stehen, wie die Margen im Monat aussehen, welche Anfragen offen sind. Ein Kurzblick, und Sie legen das Handy wieder weg."
          />
          <StoryText
            tag="Nachweisbar per NFC"
            title="Objektnachweis ohne Papier, ohne Streit."
            body="Ein Tap am NFC-Tag genügt und Ihr Team dokumentiert manipulationssicher, wer wann wo gereinigt hat. Auftraggeber sehen es live im Portal."
          />
          <StoryText
            tag="Ein System statt fünf"
            title="Zeiterfassung, Planung, Abrechnung, DATEV."
            body="Kein Wechseln zwischen Excel, WhatsApp und veralteter Branchensoftware. Alles im gleichen Login, alles ein Preis."
          />
        </div>
      </div>
    </section>
  );
}

function StoryText({
  tag,
  title,
  body,
}: {
  tag: string;
  title: string;
  body: string;
}) {
  return (
    <div className="relative">
      <div className="flex items-center gap-3 mb-4">
        <span className="w-8 h-px bg-cyan-300/60" aria-hidden="true" />
        <span className="text-[10px] font-black tracking-[0.28em] uppercase text-cyan-300/90">
          {tag}
        </span>
      </div>
      <h3 className="text-xl md:text-2xl font-black text-white leading-tight mb-3 drop-shadow-[0_2px_18px_rgba(0,0,0,0.4)]">
        {title}
      </h3>
      <p className="text-sm md:text-base text-white/75 leading-relaxed">{body}</p>
    </div>
  );
}
