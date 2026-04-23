"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <>
      <section className="relative bg-white pt-24 pb-24 sm:pt-32 sm:pb-32 overflow-hidden">
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover object-center"
        >
          <source src="/Video_Anfrage_Handy_Fall_mit_Logo.mp4" type="video/mp4" />
        </video>
        {/* Overlay for text readability */}
        <div className="absolute inset-0 bg-white/40" />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-left">

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-900/10 border border-blue-900/20 mb-6">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-600 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-blue-600" />
            </span>
            <span className="text-[11px] sm:text-xs font-black tracking-[0.2em] text-blue-900 uppercase">
              Echtzeit-Kommunikation · Feld &harr; Büro
            </span>
          </div>

          <h1 className="text-[clamp(4rem,12vw,9rem)] font-black text-gray-900 leading-[0.9] tracking-tight mb-10">
                {t("homeHero.title1")}<br />
                <span className="text-blue-900">{t("homeHero.title2")}<br className="sm:hidden" /> {t("homeHero.title3")}</span>
              </h1>

              <p className="text-2xl sm:text-3xl text-gray-500 font-medium mb-4">
                {t("homeHero.features")}
              </p>
              <p className="text-2xl sm:text-3xl font-black text-gray-900 mb-12">{t("homeHero.tagline")}</p>

              <div className="flex flex-col sm:flex-row gap-4 justify-start">
                <Link
                  href="https://signup.taskeyapp.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-10 py-5 bg-blue-900 text-white text-xl font-black rounded-2xl hover:bg-blue-800 transition-all shadow-lg hover:shadow-2xl hover:scale-[1.02]"
                >
                  {t("homeHero.cta.trial")}
                </Link>
              </div>

              <p className="mt-5 text-base text-gray-500">{t("homeHero.trust")}</p>

        </div>
      </section>
    </>
  );
}
