'use client';

import { FaApple } from 'react-icons/fa';
import { useLanguage } from "@/context/LanguageContext";
import RevealBlur from "./RevealBlur";

/**
 * iOSAppSection — Revolut "Take charge"-Style:
 * Große zentrierte Headline, Phone-Video als Held, Feature-Pills drumherum.
 * Kein Split-Layout – dafür ein echtes Bühnen-Gefühl.
 */
export default function IOSAppSection() {
  const { t } = useLanguage();

  const pills = [
    { label: t("ios.feature1.label") },
    { label: t("ios.feature2.label") },
    { label: t("ios.feature3.label") },
    { label: t("ios.feature4.label") },
  ];

  return (
    <section className="relative bg-gradient-to-b from-gray-950 via-[#0a1628] to-gray-950 text-white py-24 md:py-36 overflow-hidden">
      {/* Spotlight glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[700px] bg-cyan-500/15 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header — zentriert, viel Weißraum */}
        <div className="text-center mb-16 md:mb-20 max-w-3xl mx-auto">
          <p className="text-[10px] sm:text-xs font-black tracking-[0.3em] uppercase text-cyan-300 mb-5">
            {t("ios.badge")}
          </p>
          <h2 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black leading-[0.95] tracking-tight mb-6 text-white">
            Ihr Team.
            <br />
            <span className="text-white/50">In der Hosentasche.</span>
          </h2>
          <p className="text-lg md:text-xl text-white/60 leading-relaxed max-w-xl mx-auto">
            So einfach wie WhatsApp – aber für die Arbeit.
          </p>
        </div>

        {/* Phone als Held mit floating Pills */}
        <div className="relative flex items-center justify-center mb-16 md:mb-20">
          {/* Orbiting Pills */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            {/* Top-Left */}
            <div className="absolute left-0 top-4 sm:left-8 md:left-20 hidden sm:block pointer-events-auto">
              <PillBadge icon="bolt" label={pills[2].label} />
            </div>
            {/* Top-Right */}
            <div className="absolute right-0 top-4 sm:right-8 md:right-20 hidden sm:block pointer-events-auto">
              <PillBadge icon="wifi-off" label={pills[1].label} />
            </div>
            {/* Bottom-Left */}
            <div className="absolute left-2 bottom-20 sm:left-12 md:left-24 hidden sm:block pointer-events-auto">
              <PillBadge icon="fingerprint" label={pills[3].label} />
            </div>
            {/* Bottom-Right */}
            <div className="absolute right-2 bottom-20 sm:right-12 md:right-24 hidden sm:block pointer-events-auto">
              <PillBadge icon="sparkles" label={pills[0].label} />
            </div>
          </div>

          {/* Phone */}
          <div className="relative w-[240px] sm:w-[280px] md:w-[320px] z-10">
            {/* Glow ring */}
            <div className="absolute -inset-6 rounded-[3rem] bg-gradient-to-b from-cyan-400/20 to-blue-500/10 blur-2xl" />
            <div className="absolute -inset-12 rounded-[4rem] border border-white/5 hidden md:block" />
            <div className="absolute -inset-20 rounded-[5rem] border border-white/[0.03] hidden md:block" />

            <RevealBlur offset={140} blur={26} duration={1400}>
            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl shadow-black/60 border border-white/10 bg-black">
              <video
                autoPlay
                loop
                muted
                playsInline
                preload="metadata"
                className="w-full h-auto block"
              >
                <source src="/Taskey (Neue iOS-App).mov" type="video/mp4" />
              </video>
            </div>
            </RevealBlur>
          </div>
        </div>

        {/* Pills auf Mobile (Grid) */}
        <div className="sm:hidden grid grid-cols-2 gap-2 mb-10">
          {pills.map((p, i) => (
            <div key={i} className="px-3 py-2.5 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-white/80 text-center">
              {p.label}
            </div>
          ))}
        </div>

        {/* CTAs centered */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href="https://apps.apple.com/us/app/taskey/id6757116248"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2.5 bg-white text-gray-900 px-8 py-3.5 rounded-full font-bold text-base hover:bg-white/90 transition-colors"
          >
            <FaApple className="text-lg" />
            {t("ios.appstore")}
          </a>
          <a
            href="/features"
            className="inline-flex items-center justify-center gap-2 border border-white/30 text-white px-8 py-3.5 rounded-full font-bold text-base hover:bg-white/10 transition-colors"
          >
            {t("ios.allFeatures")}
          </a>
        </div>

        {/* Social Proof dezent */}
        <div className="mt-10 flex items-center justify-center gap-3 text-sm text-white/40">
          <div className="flex -space-x-2">
            <div className="w-7 h-7 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 border-2 border-gray-950" />
            <div className="w-7 h-7 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 border-2 border-gray-950" />
            <div className="w-7 h-7 rounded-full bg-gradient-to-br from-emerald-400 to-cyan-500 border-2 border-gray-950" />
          </div>
          <span>{t("ios.socialProof").replace("{count}", "600")}</span>
        </div>
      </div>
    </section>
  );
}

function PillBadge({ icon, label }: { icon: string; label: string }) {
  return (
    <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-white/[0.06] border border-white/10 backdrop-blur-md shadow-xl shadow-black/40 text-xs font-semibold text-white/90 whitespace-nowrap">
      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-cyan-400/20 border border-cyan-400/40 flex items-center justify-center text-cyan-300">
        <Icon name={icon} />
      </span>
      {label}
    </div>
  );
}

function Icon({ name }: { name: string }) {
  const paths: Record<string, string> = {
    bolt: "M13 10V3L4 14h7v7l9-11h-7z",
    "wifi-off": "M18.364 5.636l-12.728 12.728M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01M3 8.5a15 15 0 0118 0",
    fingerprint: "M12 11v2m-4-2v1a4 4 0 108 0v-1m-8 0a4 4 0 118 0M6 11a6 6 0 1112 0m-6 7v2",
    sparkles: "M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z",
  };
  return (
    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d={paths[name] || paths.sparkles} />
    </svg>
  );
}
