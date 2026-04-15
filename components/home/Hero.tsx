"use client";

import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <>
      <section className="relative bg-white pt-24 pb-24 sm:pt-32 sm:pb-32 overflow-hidden">
        {/* Background Image */}
        <Image
          src="/Gemini_Generated_Image_u0ytjru0ytjru0yt.webp"
          alt=""
          fill
          priority
          quality={80}
          className="object-cover object-center"
          sizes="100vw"
        />
        {/* Overlay for text readability */}
        <div className="absolute inset-0 bg-white/80" />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-left">

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

              <div className="mt-8 flex items-center gap-2">
                <Link
                  href="/loesungen"
                  className="text-blue-900 hover:text-blue-700 font-bold text-base transition-colors inline-flex items-center gap-1.5"
                >
                  {t("homeHero.solutions")}
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                </Link>
              </div>

        </div>
      </section>
    </>
  );
}
