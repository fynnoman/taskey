"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
import { useLanguage } from "@/context/LanguageContext";

// Lazy load modals for better initial load performance
const ManagerRequestModal = dynamic(() => import("@/components/ManagerRequestModal"), {
  ssr: false,
});
const EnterpriseApplicationModal = dynamic(() => import("@/components/EnterpriseApplicationModal"), {
  ssr: false,
});

export default function PricingPage() {
  const [managerModalOpen, setManagerModalOpen] = useState(false);
  const [enterpriseModalOpen, setEnterpriseModalOpen] = useState(false);
  const { t } = useLanguage();
  
  // Kündigungsfristen
  const [startCancellation, setStartCancellation] = useState<'monthly' | 'yearly'>('monthly');
  const [growCancellation, setGrowCancellation] = useState<'monthly' | 'yearly'>('monthly');
  const [scaleCancellation, setScaleCancellation] = useState<'monthly' | 'yearly'>('monthly');
  
  // Basispreise
  const basePrice = {
    start: 11.79,
    grow: 21.78,
    scale: 29.77
  };
  
  // Preisberechnung basierend auf Kündigungsfrist
  const calculatePrice = (base: number, cancellation: 'monthly' | 'yearly') => {
    if (cancellation === 'yearly') return (base * 0.87).toFixed(2); // -13%
    return base.toFixed(2);
  };
  
  const prices = {
    start: calculatePrice(basePrice.start, startCancellation),
    grow: calculatePrice(basePrice.grow, growCancellation),
    scale: calculatePrice(basePrice.scale, scaleCancellation)
  };

  return (
    <main className="min-h-screen bg-white">

      {/* Hero Banner */}
      <section className="relative overflow-hidden bg-gray-900 py-24 md:py-32">
        {/* Banner Image */}
        <Image
          src="/F6119812-857F-4E11-9765-3452FA7D9859.png"
          alt="Taskey Pricing Banner"
          fill
          className="object-cover"
          priority
        />
        {/* Overlay for text readability */}
        <div className="absolute inset-0 bg-gray-900/60"></div>
        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent z-[1]"></div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-cyan-300 px-5 py-2 rounded-full text-sm font-semibold mb-8">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
            {t("pricing.hero.cta.trial")}
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight">
            {t("pricing.hero.title")}
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-4">
            {t("pricing.hero.subtitle")}
          </p>
          <p className="text-sm text-gray-400">{t("pricingPage.allPricesVat")}</p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="relative -mt-16 z-20 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* 3 Main Plans */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">

            {/* START */}
            <div className="relative bg-gradient-to-br from-slate-700 via-slate-800 to-gray-900 rounded-2xl overflow-hidden shadow-2xl transform scale-105 z-10">
              <div className="absolute top-0 right-0 w-64 h-64 bg-slate-500 opacity-10 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-gray-500 opacity-10 rounded-full blur-3xl"></div>

              <div className="relative z-10 p-8">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-black text-white mb-1">{t("pricing.card.start.name")}</h3>
                    <p className="text-sm text-slate-300">{t("pricing.card.start.tagline")}</p>
                  </div>
                  <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/20">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                </div>

                {/* MA Zahl prominent */}
                <div className="mb-5 flex items-center gap-2 bg-white/15 border border-white/25 rounded-xl px-4 py-3">
                  <svg className="w-5 h-5 text-slate-300 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                  <div>
                    <span className="text-base font-black text-white">{t("pricingPage.start.rec")}</span>
                    <span className="block text-xs text-slate-400 font-normal mt-0.5">{t("pricingPage.start.recSub")}</span>
                  </div>
                </div>

                <div className="mb-8 pb-8 border-b border-white/20">
                  <div className="mb-6 space-y-3">
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-wide">{t("pricingPage.cancellation")}</label>
                    <div className="grid grid-cols-2 gap-2">
                      {(['monthly', 'yearly'] as const).map((opt) => (
                        <button key={opt} onClick={() => setStartCancellation(opt)}
                          className={`px-3 py-2.5 rounded-lg text-xs font-bold transition-all ${startCancellation === opt ? 'bg-white text-slate-900 shadow-md' : 'bg-white/10 text-slate-300 hover:bg-white/20 border border-white/10'}`}>
                          <div>{opt === 'monthly' ? t("pricingPage.monthly") : t("pricingPage.yearly")}</div>
                          <div className="text-[10px] opacity-70 font-normal">{opt === 'monthly' ? t("pricingPage.flexible") : '-13%'}</div>
                        </button>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-end gap-1 mb-2">
                    <span className="text-5xl font-black text-white">{prices.start}</span>
                    <span className="text-2xl font-bold text-slate-300 mb-1">€</span>
                  </div>
                  <p className="text-sm text-slate-300">{t("pricingPage.perEmployee")}</p>
                </div>

                <ul className="space-y-2.5 mb-8">
                  {[
                    { text: 'GPS + Mobile App', dim: false },
                    { text: t("pricingPage.start.f2"), dim: false },
                    { text: t("pricingPage.start.f3"), dim: false },
                    { text: t("pricingPage.start.f4"), dim: false },
                    { text: t("pricingPage.start.f5"), dim: false },
                    { text: t("pricingPage.start.f6"), dim: false },
                    { text: t("pricingPage.start.f7"), dim: false },
                    { text: t("pricingPage.start.f8"), dim: true },
                    { text: t("pricingPage.start.f9"), dim: true },
                    { text: t("pricingPage.start.f10"), dim: true },
                    { text: t("pricingPage.start.f11"), dim: true },
                    { text: t("pricingPage.start.f12"), dim: false },
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                      {item.dim ? (
                        <svg className="w-4 h-4 text-slate-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                      ) : (
                        <svg className="w-4 h-4 text-slate-300 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                      )}
                      <span className={`text-sm font-medium ${item.dim ? 'text-slate-400 line-through decoration-slate-500' : 'text-white'}`}>{item.text}</span>
                    </li>
                  ))}
                </ul>

                <Link href="https://signup.vars-development.com" target="_blank" rel="noopener noreferrer"
                  className="block w-full py-4 rounded-xl font-bold text-slate-900 bg-white hover:bg-gray-50 transition-all text-sm shadow-lg hover:shadow-xl hover:scale-105 mb-4 text-center">
                  {t("pricingPage.startNow")}
                </Link>

                {/* Onboarding Teaser */}
                <div className="rounded-xl overflow-hidden border border-slate-400/30 bg-white/5 backdrop-blur-sm">
                  <div className="px-4 py-3 flex items-center gap-2 border-b border-slate-400/20 bg-slate-400/10">
                    <svg className="w-4 h-4 text-slate-300 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                    <span className="text-xs font-black text-slate-300 uppercase tracking-wide">{t("pricingPage.onboarding.rec")}</span>
                  </div>
                  <div className="px-4 py-3">
                    <p className="text-xs text-slate-300 leading-relaxed">{t("pricingPage.onboarding.desc")} <span className="text-white font-bold">{t("pricingPage.onboarding.desc.bold")}</span>.</p>
                    <a href="#onboarding" className="mt-1.5 inline-flex items-center gap-1 text-xs font-bold text-slate-300 hover:text-white">{t("pricingPage.onboarding.more")}</a>
                  </div>
                </div>
              </div>
            </div>

            {/* GROW */}
            <div className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 rounded-2xl overflow-hidden shadow-2xl transform scale-105 z-10">
              <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-400 opacity-10 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-400 opacity-10 rounded-full blur-3xl"></div>

              <div className="relative z-10 p-8">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-black text-white mb-1">{t("pricing.card.grow.name")}</h3>
                    <p className="text-sm text-blue-100">{t("pricing.card.grow.tagline")}</p>
                  </div>
                  <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/20">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                </div>

                {/* MA Zahl prominent */}
                <div className="mb-5 flex items-center gap-2 bg-white/15 border border-white/25 rounded-xl px-4 py-3">
                  <svg className="w-5 h-5 text-cyan-300 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                  <div>
                    <span className="text-base font-black text-white">{t("pricingPage.grow.rec")}</span>
                    <span className="block text-xs text-blue-200 font-normal mt-0.5">{t("pricingPage.grow.recSub")}</span>
                  </div>
                </div>

                <div className="mb-8 pb-8 border-b border-white/20">
                  <div className="mb-6 space-y-3">
                    <label className="text-xs font-bold text-blue-200 uppercase tracking-wide">{t("pricingPage.cancellation")}</label>
                    <div className="grid grid-cols-2 gap-2">
                      {(['monthly', 'yearly'] as const).map((opt) => (
                        <button key={opt} onClick={() => setGrowCancellation(opt)}
                          className={`px-3 py-2.5 rounded-lg text-xs font-bold transition-all ${growCancellation === opt ? 'bg-white text-blue-900 shadow-md' : 'bg-white/10 text-blue-200 hover:bg-white/20 border border-white/10'}`}>
                          <div>{opt === 'monthly' ? t("pricingPage.monthly") : t("pricingPage.yearly")}</div>
                          <div className="text-[10px] opacity-70 font-normal">{opt === 'monthly' ? t("pricingPage.flexible") : '-13%'}</div>
                        </button>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-end gap-1 mb-2">
                    <span className="text-5xl font-black text-white">{prices.grow}</span>
                    <span className="text-2xl font-bold text-blue-200 mb-1">€</span>
                  </div>
                  <p className="text-sm text-blue-100">{t("pricingPage.perEmployee")}</p>
                </div>

                <ul className="space-y-2.5 mb-6">
                  {[
                    { text: t("pricingPage.grow.f1"), dim: false },
                    { text: t("pricingPage.grow.f2"), dim: false },
                    { text: t("pricingPage.grow.f3"), dim: false },
                    { text: t("pricingPage.grow.f4"), dim: false },
                    { text: t("pricingPage.grow.f5"), dim: false },
                    { text: t("pricingPage.grow.f6"), dim: false },
                    { text: t("pricingPage.grow.f7"), dim: false },
                    { text: t("pricingPage.grow.f8"), dim: false },
                    { text: t("pricingPage.grow.f9"), dim: true },
                    { text: t("pricingPage.grow.f10"), dim: false },
                  ].map((item, i) => (
                    <li key={i} className="group/item relative flex items-center gap-3">
                      {item.dim ? (
                        <svg className="w-4 h-4 text-blue-400/50 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                      ) : (
                        <svg className="w-4 h-4 text-blue-200 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                      )}
                      <span className={`text-sm font-medium ${item.dim ? 'text-blue-300/50 line-through decoration-blue-400/50' : 'text-white'}`}>{item.text}</span>
                    </li>
                  ))}
                </ul>

                <Link href="https://signup.vars-development.com" target="_blank" rel="noopener noreferrer"
                  className="block w-full py-4 rounded-xl font-bold text-blue-900 bg-white hover:bg-gray-50 transition-all text-sm shadow-lg hover:shadow-xl hover:scale-105 mb-4 text-center">
                  {t("pricingPage.bookGrow")}
                </Link>

                {/* Onboarding Teaser */}
                <div className="rounded-xl overflow-hidden border border-cyan-300/40 bg-gradient-to-br from-cyan-900/60 to-blue-900/60 backdrop-blur-sm">
                  <div className="px-4 py-3 flex items-center gap-2 border-b border-cyan-300/20 bg-cyan-400/10">
                    <svg className="w-4 h-4 text-cyan-300 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                    <span className="text-xs font-black text-cyan-300 uppercase tracking-wide">{t("pricingPage.onboarding.rec")}</span>
                  </div>
                  <div className="px-4 py-3">
                    <p className="text-xs text-blue-100 leading-relaxed">{t("pricingPage.onboarding.desc")} <span className="text-white font-bold">{t("pricingPage.onboarding.desc.bold")}</span>.</p>
                    <a href="#onboarding" className="mt-1.5 inline-flex items-center gap-1 text-xs font-bold text-cyan-300 hover:text-cyan-200">{t("pricingPage.onboarding.more")}</a>
                  </div>
                </div>
              </div>
            </div>

            {/* SCALE */}
            <div className="relative bg-gradient-to-br from-purple-700 via-purple-800 to-indigo-900 rounded-2xl overflow-hidden shadow-2xl transform scale-105 z-10">
              <div className="absolute top-0 left-0 w-64 h-64 bg-purple-400 opacity-10 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 right-0 w-48 h-48 bg-indigo-400 opacity-10 rounded-full blur-3xl"></div>

              <div className="relative z-10 p-8">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-black text-white mb-1">{t("pricing.card.scale.name")}</h3>
                    <p className="text-sm text-purple-100">{t("pricing.card.scale.tagline")}</p>
                  </div>
                  <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/20">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 2C12 2 8 6 8 12c0 2.5 1 4.5 1 4.5L12 22l3-5.5S16 14.5 16 12c0-6-4-10-4-10z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M8 16.5S5 15 4 13c1.5 0 3 .5 4 1.5M16 16.5s3-1.5 4-3.5c-1.5 0-3 .5-4 1.5" />
                      <circle cx="12" cy="12" r="1.5" fill="currentColor" stroke="none" />
                    </svg>
                  </div>
                </div>

                {/* MA Zahl prominent */}
                <div className="mb-5 flex items-center gap-2 bg-white/15 border border-white/25 rounded-xl px-4 py-3">
                  <svg className="w-5 h-5 text-purple-300 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                  <div>
                    <span className="text-base font-black text-white">{t("pricingPage.scale.rec")}</span>
                    <span className="block text-xs text-purple-200 font-normal mt-0.5">{t("pricingPage.scale.recSub")}</span>
                  </div>
                </div>

                <div className="mb-8 pb-8 border-b border-white/20">
                  <div className="mb-6 space-y-3">
                    <label className="text-xs font-bold text-purple-200 uppercase tracking-wide">{t("pricingPage.cancellation")}</label>
                    <div className="grid grid-cols-2 gap-2">
                      {(['monthly', 'yearly'] as const).map((opt) => (
                        <button key={opt} onClick={() => setScaleCancellation(opt)}
                          className={`px-3 py-2.5 rounded-lg text-xs font-bold transition-all ${scaleCancellation === opt ? 'bg-white text-purple-900 shadow-md' : 'bg-white/10 text-purple-200 hover:bg-white/20 border border-white/10'}`}>
                          <div>{opt === 'monthly' ? t("pricingPage.monthly") : t("pricingPage.yearly")}</div>
                          <div className="text-[10px] opacity-70 font-normal">{opt === 'monthly' ? t("pricingPage.flexible") : '-13%'}</div>
                        </button>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-end gap-1 mb-2">
                    <span className="text-5xl font-black text-white">{prices.scale}</span>
                    <span className="text-2xl font-bold text-purple-200 mb-1">€</span>
                  </div>
                  <p className="text-sm text-purple-100">{t("pricingPage.perEmployee")}</p>
                </div>

                <ul className="space-y-2.5 mb-6">
                  {[
                    { text: t("pricingPage.scale.f1"), dim: false },
                    { text: t("pricingPage.scale.f2"), dim: false },
                    { text: t("pricingPage.scale.f3"), dim: false },
                    { text: t("pricingPage.scale.f4"), dim: false },
                    { text: t("pricingPage.scale.f5"), dim: false },
                    { text: t("pricingPage.scale.f6"), dim: false },
                    { text: t("pricingPage.scale.f7"), dim: false },
                    { text: t("pricingPage.scale.f8"), dim: false },
                    { text: t("pricingPage.scale.f9"), dim: false },
                    { text: t("pricingPage.scale.f10"), dim: false },
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <svg className="w-4 h-4 text-purple-200 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                      <span className="text-sm text-white font-medium">{item.text}</span>
                    </li>
                  ))}
                </ul>

                <Link href="https://signup.vars-development.com" target="_blank" rel="noopener noreferrer"
                  className="block w-full py-4 rounded-xl font-bold text-purple-900 bg-white hover:bg-gray-50 transition-all text-sm shadow-lg hover:shadow-xl hover:scale-105 mb-4 text-center">
                  {t("pricingPage.bookScale")}
                </Link>

                {/* Onboarding Teaser */}
                <div className="rounded-xl overflow-hidden border border-purple-300/30 bg-white/5 backdrop-blur-sm">
                  <div className="px-4 py-3 flex items-center gap-2 border-b border-purple-300/20 bg-purple-400/10">
                    <svg className="w-4 h-4 text-purple-300 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                    <span className="text-xs font-black text-purple-300 uppercase tracking-wide">{t("pricingPage.onboarding.rec")}</span>
                  </div>
                  <div className="px-4 py-3">
                    <p className="text-xs text-purple-100 leading-relaxed">{t("pricingPage.onboarding.desc")} <span className="text-white font-bold">{t("pricingPage.onboarding.desc.bold")}</span>.</p>
                    <a href="#onboarding" className="mt-1.5 inline-flex items-center gap-1 text-xs font-bold text-purple-300 hover:text-purple-200">{t("pricingPage.onboarding.more")}</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* All Features Included */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-3">{t("pricingPage.allIncluded.title")}</h2>
            <p className="text-gray-600 text-lg">{t("pricingPage.allIncluded.subtitle")}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
            {[
              t("pricingPage.allIncluded.f1"),
              t("pricingPage.allIncluded.f2"),
              t("pricingPage.allIncluded.f3"),
              t("pricingPage.allIncluded.f4"),
              t("pricingPage.allIncluded.f5"),
              t("pricingPage.allIncluded.f6"),
              t("pricingPage.allIncluded.f7"),
              t("pricingPage.allIncluded.f8"),
              t("pricingPage.allIncluded.f9"),
              t("pricingPage.allIncluded.f10"),
              t("pricingPage.allIncluded.f11"),
              t("pricingPage.allIncluded.f12"),
            ].map((text, i) => (
              <div key={i} className="flex items-center gap-3 bg-white rounded-xl px-5 py-4 border border-gray-100 shadow-sm">
                <svg className="w-4 h-4 text-blue-700 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                <span className="text-gray-800 font-medium text-sm">{text}</span>
              </div>
            ))}
          </div>

          {/* Differentiator comparison */}
          <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm">
            <div className="px-6 py-4 bg-gray-900 text-white">
              <h3 className="text-lg font-black">{t("pricingPage.comparison.title")}</h3>
              <p className="text-sm text-gray-400 mt-0.5">{t("pricingPage.comparison.subtitle")}</p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-100">
                    <th className="text-left px-6 py-3 text-gray-500 font-semibold w-1/3">{t("pricingPage.comparison.feature")}</th>
                    <th className="text-center px-4 py-3 text-gray-700 font-black">START</th>
                    <th className="text-center px-4 py-3 text-blue-700 font-black">GROW</th>
                    <th className="text-center px-4 py-3 text-purple-700 font-black">SCALE</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                  {[
                    { label: t("pricingPage.comparison.nfc"), start: t("pricingPage.comparison.nfc.start"), grow: t("pricingPage.comparison.nfc.grow"), scale: t("pricingPage.comparison.nfc.scale") },
                    { label: t("pricingPage.comparison.storage"), start: '50 GB', grow: '250 GB', scale: '1 TB' },
                    { label: t("pricingPage.comparison.history"), start: t("pricingPage.comparison.history.start"), grow: t("pricingPage.comparison.history.grow"), scale: t("pricingPage.comparison.history.scale") },
                    { label: t("pricingPage.comparison.planning"), start: t("pricingPage.comparison.planning.start"), grow: t("pricingPage.comparison.planning.grow"), scale: t("pricingPage.comparison.planning.scale") },
                    { label: t("pricingPage.comparison.errands"), start: '—', grow: t("pricingPage.comparison.included"), scale: t("pricingPage.comparison.included") },
                    { label: t("pricingPage.comparison.gallery"), start: '—', grow: t("pricingPage.comparison.included"), scale: t("pricingPage.comparison.included") },
                    { label: t("pricingPage.comparison.employees"), start: t("pricingPage.comparison.employees.start"), grow: t("pricingPage.comparison.employees.grow"), scale: t("pricingPage.comparison.employees.scale") },
                    { label: t("pricingPage.comparison.profitability"), start: '—', grow: '—', scale: t("pricingPage.comparison.profitability.scale") },
                    { label: t("pricingPage.comparison.support"), start: t("pricingPage.comparison.support.start"), grow: t("pricingPage.comparison.support.grow"), scale: t("pricingPage.comparison.support.scale") },
                  ].map((row, i) => (
                    <tr key={i} className="hover:bg-gray-50/50">
                      <td className="px-6 py-3 font-medium text-gray-700">{row.label}</td>
                      <td className="px-4 py-3 text-center text-gray-600">{row.start}</td>
                      <td className="px-4 py-3 text-center text-blue-700 font-medium">{row.grow}</td>
                      <td className="px-4 py-3 text-center text-purple-700 font-medium">{row.scale}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Historie explanation */}
          <div className="mt-6 bg-gray-100 rounded-xl p-4 border border-gray-200">
            <div className="flex items-start gap-3">
              <svg className="w-5 h-5 text-gray-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
              <p className="text-sm text-gray-700">
                <strong className="font-bold">{t("pricingPage.history.title")}</strong><br />
                {t("pricingPage.history.desc")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Enterprise Section */}
      <section className="py-20 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black rounded-3xl overflow-hidden shadow-2xl">
            {/* Background Image */}
            <div className="absolute inset-0 opacity-50">
              <Image 
                src="/59103717-2D93-441D-8B27-92FF9986A8B8.png" 
                alt="Enterprise Background" 
                fill
                className="object-cover"
                loading="lazy"
              />
            </div>
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 via-gray-900/85 to-gray-900/70"></div>
            {/* Decorative Elements */}
            <div className="absolute top-0 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-1/3 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl"></div>
            <div className="relative z-10 grid md:grid-cols-2 gap-12 p-12 md:p-16 items-center">
              {/* Left Content */}
              <div>
                <div className="inline-flex items-center gap-2 bg-cyan-400/10 border border-cyan-400/20 text-cyan-400 px-4 py-2 rounded-full text-xs font-bold mb-6 backdrop-blur-sm">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 3.5a1.5 1.5 0 013 0V4a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-.5a1.5 1.5 0 000 3h.5a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-.5a1.5 1.5 0 00-3 0v.5a1 1 0 01-1 1H6a1 1 0 01-1-1v-3a1 1 0 00-1-1h-.5a1.5 1.5 0 010-3H4a1 1 0 001-1V6a1 1 0 011-1h3a1 1 0 001-1v-.5z" />
                  </svg>
                  {t("pricingPage.enterprise.badge")}
                </div>
                <h3 className="text-4xl md:text-5xl font-black text-white mb-4 leading-tight">{t("pricingPage.enterprise.title")}</h3>
                <p className="text-xl text-gray-300 mb-6 leading-relaxed">{t("pricingPage.enterprise.subtitle")}</p>
                <div className="flex flex-col gap-3 mb-6">
                  <div className="flex items-center gap-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl px-4 py-3">
                    <svg className="w-4 h-4 text-cyan-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                    <span className="text-gray-300 text-sm">{t("pricingPage.enterprise.rec50.pre")} <span className="text-white font-bold">{t("pricingPage.enterprise.rec50")}</span></span>
                  </div>
                  <div className="flex items-center gap-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl px-4 py-3">
                    <svg className="w-4 h-4 text-cyan-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                    <span className="text-gray-300 text-sm">{t("pricingPage.enterprise.customFeatures.pre")} <span className="text-white font-bold">{t("pricingPage.enterprise.customFeatures")}</span> {t("pricingPage.enterprise.customFeatures.post")}</span>
                  </div>
                  <div className="flex items-center gap-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl px-4 py-3">
                    <svg className="w-4 h-4 text-cyan-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                    <span className="text-gray-300 text-sm">{t("pricingPage.enterprise.customSolution.pre")} <span className="text-white font-bold">{t("pricingPage.enterprise.customSolution")}</span> {t("pricingPage.enterprise.customSolution.post")}</span>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/enterprise" className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-400 to-cyan-500 text-gray-900 font-bold px-8 py-4 rounded-xl hover:scale-105 transition-all shadow-lg">
                    {t("pricingPage.enterprise.cta1")}
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                  </Link>
                  <button onClick={() => setEnterpriseModalOpen(true)} className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm text-white font-bold px-8 py-4 rounded-xl border border-white/20 hover:bg-white/20 transition-all">
                    {t("pricingPage.enterprise.cta2")}
                  </button>
                </div>
              </div>
              {/* Right Features */}
              <div className="space-y-4">
                {[
                  { icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>, title: t("pricingPage.enterprise.f1.title"), desc: t("pricingPage.enterprise.f1.desc") },
                  { icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" /></svg>, title: t("pricingPage.enterprise.f2.title"), desc: t("pricingPage.enterprise.f2.desc") },
                  { icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>, title: t("pricingPage.enterprise.f3.title"), desc: t("pricingPage.enterprise.f3.desc") },
                  { icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>, title: t("pricingPage.enterprise.f4.title"), desc: t("pricingPage.enterprise.f4.desc") },
                ].map((feature, i) => (
                  <div key={i} className="flex items-start gap-4 bg-white/5 backdrop-blur-sm rounded-xl p-5 border border-white/10 hover:bg-white/10 transition-all group">
                    <div className="text-cyan-400 flex-shrink-0">{feature.icon}</div>
                    <div>
                      <div className="text-white font-bold text-sm mb-1">{feature.title}</div>
                      <div className="text-gray-400 text-xs">{feature.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NFC-Tags Section */}
      <section className="py-20 bg-gradient-to-br from-cyan-50 via-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/30 text-cyan-700 px-5 py-2 rounded-full text-sm font-bold mb-6">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
              </svg>
              {t("pricingPage.nfc.badge")}
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-4">
              {t("pricingPage.nfc.title")}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              {t("pricingPage.nfc.subtitle")}
            </p>
          </div>

          {/* Grid: PNG left, Pricing Cards right */}
          <div className="grid md:grid-cols-[400px_1fr] gap-12 items-center mb-12">
            {/* Left: Visual */}
            <div className="flex items-center justify-center">
              <Image 
                src="/D51DAA1C-8E91-4647-BAFA-FFC71E88FA2B.png"
                alt="Taskey NFC Tag"
                width={400}
                height={400}
                className="object-contain rounded-3xl shadow-2xl"
                loading="lazy"
              />
            </div>

            {/* Right: Pricing Cards */}
            <div className="grid md:grid-cols-3 gap-6">
              {/* Starter Kit */}
              <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-gray-200 hover:border-cyan-300 transition-all">
                <div className="text-center mb-4">
                  <div className="inline-flex items-center gap-2 bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-bold mb-3">
                    STARTER KIT
                  </div>
                  <div className="text-4xl font-black text-gray-900 mb-1">10</div>
                  <div className="text-sm text-gray-600 mb-4">NFC-Tags</div>
                </div>
                
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between items-baseline py-4">
                    <span className="text-lg font-bold text-gray-900">{t("pricingPage.nfc.yourPrice")}</span>
                    <span className="text-4xl font-black text-blue-900">6.30€</span>
                  </div>
                  <p className="text-sm text-gray-600">{t("pricingPage.nfc.shipping")}</p>
                </div>
                
                <Link
                  href="https://signup.vars-development.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full py-3 rounded-xl font-bold text-gray-700 bg-gray-100 hover:bg-gray-200 transition-all text-sm text-center"
                >
                  {t("pricingPage.nfc.order")}
                </Link>
              </div>

              {/* Pro - EMPFOHLEN */}
              <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-6 shadow-xl text-white transform scale-105 relative">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <div className="bg-cyan-400 text-gray-900 px-4 py-1 rounded-full text-xs font-black">
                    {t("pricingPage.nfc.recommended")}
                  </div>
                </div>
                
                <div className="text-center mb-4 mt-2">
                  <div className="inline-flex items-center gap-2 bg-white/20 text-white px-3 py-1 rounded-full text-xs font-bold mb-3">
                    PRO
                  </div>
                  <div className="text-4xl font-black mb-1">50</div>
                  <div className="text-sm text-blue-100 mb-4">NFC-Tags</div>
                </div>
                
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between items-baseline py-4">
                    <span className="text-lg font-bold">{t("pricingPage.nfc.yourPrice")}</span>
                    <span className="text-4xl font-black text-cyan-300">16.10€</span>
                  </div>
                  <p className="text-sm text-blue-100">{t("pricingPage.nfc.shipping")}</p>
                </div>
                
                <Link
                  href="https://signup.vars-development.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full py-3 rounded-xl font-bold text-blue-900 bg-white hover:bg-gray-50 transition-all text-sm shadow-lg text-center"
                >
                  {t("pricingPage.nfc.order")}
                </Link>
                
                <div className="mt-4 bg-white/10 rounded-xl p-3 text-xs text-center">
                  {t("pricingPage.nfc.videoOnboarding")}
                </div>
              </div>

              {/* Business */}
              <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-gray-200 hover:border-blue-300 transition-all">
                <div className="text-center mb-4">
                  <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs font-bold mb-3">
                    BUSINESS
                  </div>
                  <div className="text-4xl font-black text-gray-900 mb-1">150</div>
                  <div className="text-sm text-gray-600 mb-4">NFC-Tags</div>
                </div>
                
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between items-baseline py-4">
                    <span className="text-lg font-bold text-gray-900">{t("pricingPage.nfc.yourPrice")}</span>
                    <span className="text-4xl font-black text-blue-900">30.80€</span>
                  </div>
                  <p className="text-sm text-gray-600">{t("pricingPage.nfc.shipping")}</p>
                </div>
                
                <Link
                  href="https://signup.vars-development.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full py-3 rounded-xl font-bold text-blue-600 bg-blue-50 hover:bg-blue-100 transition-all text-sm text-center"
                >
                  {t("pricingPage.nfc.order")}
                </Link>
              </div>
            </div>
          </div>

          {/* Info Box */}
          <div className="mt-8 bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
              <div className="flex items-start gap-4">
                <svg className="w-6 h-6 text-cyan-600 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">{t("pricingPage.nfc.replacement.title")}</h4>
                  <p className="text-sm text-gray-600">
                    {t("pricingPage.nfc.replacement.desc")}
                  </p>
                </div>
              </div>
            </div>

        </div>
      </section>


      {/* Onboarding Setup */}
      <section id="onboarding" className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl overflow-hidden">
            {/* Bold background */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-950 to-gray-900"></div>
            <div className="absolute inset-0 opacity-20" style={{backgroundImage: 'radial-gradient(circle at 20% 50%, #06b6d4 0%, transparent 50%), radial-gradient(circle at 80% 20%, #3b82f6 0%, transparent 40%)'}}></div>

            {/* Top accent bar */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400"></div>

            <div className="relative z-10 p-8 md:p-14">
              {/* Header */}
              <div className="text-center mb-10">
                <div className="inline-flex items-center gap-2 bg-cyan-400/15 border border-cyan-400/30 text-cyan-300 px-5 py-2 rounded-full text-xs font-black mb-5 backdrop-blur-sm uppercase tracking-widest">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                  {t("pricingPage.onboarding.sectionBadge")}
                </div>
                <h2 className="text-4xl md:text-6xl font-black text-white mb-4 leading-tight">
                  {t("pricingPage.onboarding.sectionTitle")}<br />
                  <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">{t("pricingPage.onboarding.sectionTitle.highlight")}</span>
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  {t("pricingPage.onboarding.sectionSubtitle")}
                </p>
              </div>

              {/* Main content grid */}
              <div className="grid md:grid-cols-2 gap-8 mb-10">
                {/* Left: What we do */}
                <div className="space-y-4">
                  <h3 className="text-sm font-black text-gray-400 uppercase tracking-widest mb-4">{t("pricingPage.onboarding.whatWeDo")}</h3>
                  {[
                    { title: t("pricingPage.onboarding.item1.title"), desc: t("pricingPage.onboarding.item1.desc") },
                    { title: t("pricingPage.onboarding.item2.title"), desc: t("pricingPage.onboarding.item2.desc") },
                    { title: t("pricingPage.onboarding.item3.title"), desc: t("pricingPage.onboarding.item3.desc") },
                    { title: t("pricingPage.onboarding.item4.title"), desc: t("pricingPage.onboarding.item4.desc") },
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-4 bg-white/5 backdrop-blur-sm rounded-2xl p-5 border border-white/10 hover:bg-white/10 transition-all">
                      <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                      </div>
                      <div>
                        <div className="text-white font-bold text-sm mb-1">{item.title}</div>
                        <div className="text-gray-400 text-xs leading-relaxed">{item.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Right: Pricing + CTA */}
                <div className="flex flex-col gap-6">
                  {/* GROW Onboarding */}
                  <div className="relative bg-gradient-to-br from-blue-600/30 to-cyan-600/20 rounded-2xl p-7 border border-cyan-400/30 backdrop-blur-sm">
                    <div className="absolute -top-3 left-6">
                      <span className="bg-gradient-to-r from-cyan-400 to-cyan-500 text-gray-900 text-xs font-black px-4 py-1 rounded-full">{t("pricingPage.onboarding.forGrow")}</span>
                    </div>
                    <div className="mt-2">
                      <div className="flex items-baseline gap-2 mb-1">
                        <span className="text-5xl font-black text-white">990<span className="text-3xl">€</span></span>
                        <span className="text-gray-400 text-sm">{t("pricingPage.onboarding.single")}</span>
                      </div>
                      <p className="text-gray-400 text-xs mb-5">{t("pricingPage.onboarding.singleNote")}</p>
                      <div className="space-y-2 mb-6">
                        {[t("pricingPage.onboarding.growF1"), t("pricingPage.onboarding.growF2"), t("pricingPage.onboarding.growF3"), t("pricingPage.onboarding.growF4")].map((f, i) => (
                          <div key={i} className="flex items-center gap-2 text-xs text-gray-300">
                            <svg className="w-4 h-4 text-cyan-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                            {f}
                          </div>
                        ))}
                      </div>
                      <Link
                        href="https://signup.vars-development.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block w-full py-3.5 rounded-xl font-bold text-gray-900 bg-gradient-to-r from-cyan-400 to-cyan-500 hover:from-cyan-300 hover:to-cyan-400 transition-all text-sm shadow-lg hover:scale-105 text-center"
                      >
                        {t("pricingPage.onboarding.growSetup")}
                      </Link>
                    </div>
                  </div>

                  {/* SCALE Onboarding */}
                  <div className="relative bg-gradient-to-br from-purple-600/30 to-indigo-600/20 rounded-2xl p-7 border border-purple-400/30 backdrop-blur-sm">
                    <div className="absolute -top-3 left-6">
                      <span className="bg-gradient-to-r from-purple-400 to-purple-500 text-white text-xs font-black px-4 py-1 rounded-full">{t("pricingPage.onboarding.forScale")}</span>
                    </div>
                    <div className="mt-2">
                      <div className="flex items-baseline gap-2 mb-1">
                        <span className="text-5xl font-black text-white">2.490<span className="text-3xl">€</span></span>
                        <span className="text-gray-400 text-sm">{t("pricingPage.onboarding.single")}</span>
                      </div>
                      <p className="text-gray-400 text-xs mb-5">{t("pricingPage.onboarding.singleNote")}</p>
                      <div className="space-y-2 mb-6">
                        {[t("pricingPage.onboarding.scaleF1"), t("pricingPage.onboarding.scaleF2"), t("pricingPage.onboarding.scaleF3"), t("pricingPage.onboarding.scaleF4")].map((f, i) => (
                          <div key={i} className="flex items-center gap-2 text-xs text-gray-300">
                            <svg className="w-4 h-4 text-purple-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                            {f}
                          </div>
                        ))}
                      </div>
                      <Link
                        href="https://signup.vars-development.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block w-full py-3.5 rounded-xl font-bold text-white bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-400 hover:to-purple-500 transition-all text-sm shadow-lg hover:scale-105 text-center"
                      >
                        {t("pricingPage.onboarding.scaleSetup")}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom trust bar */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { label: t("pricingPage.onboarding.trust1"), sub: t("pricingPage.onboarding.trust1.sub") },
                  { label: t("pricingPage.onboarding.trust2"), sub: t("pricingPage.onboarding.trust2.sub") },
                  { label: t("pricingPage.onboarding.trust3"), sub: t("pricingPage.onboarding.trust3.sub") },
                  { label: t("pricingPage.onboarding.trust4"), sub: t("pricingPage.onboarding.trust4.sub") },
                ].map((item, i) => (
                  <div key={i} className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 text-center">
                    <div className="text-white text-xs font-bold mb-1">{item.label}</div>
                    <div className="text-gray-500 text-xs">{item.sub}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Premium Manager Section */}
      <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
            <div className="grid md:grid-cols-2 gap-0">
              {/* Left Side */}
              <div className="bg-gradient-to-br from-blue-900 to-blue-800 p-10 md:p-12 flex flex-col justify-center">
                <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-cyan-300 px-4 py-2 rounded-full text-xs font-bold mb-6 w-fit">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                  </svg>
                  {t("pricingPage.manager.premiumService")}
                </div>

                <h3 className="text-3xl md:text-4xl font-black text-white mb-4">
                  {t("pricingPage.manager.title")}
                </h3>
                <p className="text-blue-100 text-lg mb-6 leading-relaxed">
                  {t("pricingPage.manager.subtitle")}
                </p>

                <ul className="space-y-3 mb-8">
                  {[
                    t("pricingPage.manager.f1"),
                    t("pricingPage.manager.f2"),
                    t("pricingPage.manager.f3"),
                    t("pricingPage.manager.f4"),
                    t("pricingPage.manager.f5")
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-blue-50">
                      <svg className="w-5 h-5 text-cyan-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="mb-6">
                  <div className="flex items-baseline gap-2 mb-1">
                    <span className="text-5xl font-black text-white">239€</span>
                    <span className="text-blue-200 text-xl">{t("pricingPage.manager.perWeek")}</span>
                  </div>
                  <p className="text-blue-200 text-sm">{t("pricingPage.manager.note")}</p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/premium-manager"
                    className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-400 to-cyan-500 text-gray-900 font-bold px-8 py-4 rounded-xl hover:scale-105 transition-all shadow-lg"
                  >
                    {t("pricingPage.manager.cta1")}
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                  <button
                    onClick={() => setManagerModalOpen(true)}
                    className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm text-white font-bold px-8 py-4 rounded-xl border border-white/20 hover:bg-white/20 transition-all"
                  >
                    {t("pricingPage.manager.cta2")}
                  </button>
                </div>
              </div>

              <div className="relative p-10 md:p-12 bg-gray-50 flex flex-col justify-center overflow-hidden">
                {/* PNG Background - fills entire right side */}
                <div className="absolute inset-0 opacity-30">
                  <Image 
                    src="/2FD11192-20F9-4069-81C0-F1F4E6F66202.png" 
                    alt="Manager Background" 
                    fill
                    className="object-cover"
                    loading="lazy"
                  />
                </div>

                {/* Text Content Layer on top */}
                <div className="relative z-10 space-y-6">
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">{t("pricingPage.manager.expert.title")}</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {t("pricingPage.manager.expert.desc")}
                    </p>
                  </div>

                  <div className="space-y-3">
                    {[
                      { 
                        icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>,
                        title: t("pricingPage.manager.right.f1.title"), 
                        desc: t("pricingPage.manager.right.f1.desc") 
                      },
                      { 
                        icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>,
                        title: t("pricingPage.manager.right.f2.title"), 
                        desc: t("pricingPage.manager.right.f2.desc") 
                      },
                      { 
                        icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>,
                        title: t("pricingPage.manager.right.f3.title"), 
                        desc: t("pricingPage.manager.right.f3.desc") 
                      },
                      { 
                        icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>,
                        title: t("pricingPage.manager.right.f4.title"), 
                        desc: t("pricingPage.manager.right.f4.desc") 
                      }
                    ].map((item, i) => (
                      <div key={i} className="flex items-start gap-3 bg-white rounded-lg p-3 border border-gray-100">
                        <div className="text-blue-600">{item.icon}</div>
                        <div>
                          <div className="text-sm font-bold text-gray-900">{item.title}</div>
                          <div className="text-xs text-gray-600">{item.desc}</div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="bg-blue-50 rounded-xl p-5 border border-blue-100">
                    <div className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                      </svg>
                      <div>
                        <p className="text-sm text-gray-700 font-medium mb-1">{t("pricingPage.manager.timeSaving")}</p>
                        <p className="text-xs text-gray-600">{t("pricingPage.manager.timeSaving.sub")}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Storage Add-ons */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-3">{t("pricingPage.storage.title")}</h2>
            <p className="text-gray-600 mb-4">{t("pricingPage.storage.subtitle")}</p>
            <div className="max-w-2xl mx-auto bg-blue-50 rounded-xl p-4 border border-blue-100">
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
                <p className="text-sm text-gray-700 text-left">
                  <strong className="font-bold">{t("pricingPage.storage.infoTitle")}</strong><br />
                  {t("pricingPage.storage.info")}
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { amount: t("pricingPage.storage.addon1.amount"), price: '8,37', desc: t("pricingPage.storage.addon1.desc") },
              { amount: t("pricingPage.storage.addon2.amount"), price: '38,11', desc: t("pricingPage.storage.addon2.desc") },
              { amount: t("pricingPage.storage.addon3.amount"), price: '68,27', desc: t("pricingPage.storage.addon3.desc") },
            ].map((addon, i) => (
              <div key={i} className="relative bg-white rounded-2xl p-6 border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300 text-center group">
                <div className="text-3xl font-black text-gray-900 mb-1">{addon.amount}</div>
                <div className="flex items-baseline justify-center gap-1 mb-2">
                  <span className="text-2xl font-bold text-blue-900">{addon.price}€</span>
                  <span className="text-sm text-gray-500">{t("pricingPage.storage.perMonth")}</span>
                </div>
                <p className="text-sm text-gray-500">{addon.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-3">{t("pricingPage.faq.title")}</h2>
          </div>

          <div className="space-y-4">
            {[
              { q: t("pricingPage.faq.q1"), a: t("pricingPage.faq.a1") },
              { q: t("pricingPage.faq.q2"), a: t("pricingPage.faq.a2") },
              { q: t("pricingPage.faq.q3"), a: t("pricingPage.faq.a3") },
              { q: t("pricingPage.faq.q4"), a: t("pricingPage.faq.a4") },
              { q: t("pricingPage.faq.q5"), a: t("pricingPage.faq.a5") },
            ].map((faq, i) => (
              <details key={i} className="bg-white rounded-xl shadow-sm border border-gray-100 group">
                <summary className="flex justify-between items-center p-6 cursor-pointer hover:bg-gray-50 rounded-xl transition font-bold text-gray-900">
                  {faq.q}
                  <svg className="w-5 h-5 text-gray-400 group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                </summary>
                <div className="px-6 pb-6 text-gray-600 text-sm leading-relaxed">{faq.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-4">
            {t("pricingPage.finalCta.title")}
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            {t("pricingPage.finalCta.subtitle")}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="https://signup.vars-development.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-blue-900 hover:bg-blue-800 text-white font-bold text-lg px-10 py-5 rounded-xl transition-all hover:scale-105 shadow-lg"
            >
              {t("pricingPage.finalCta.trial")}
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </Link>
            <a
              href="mailto:info@taskey.de"
              className="inline-flex items-center justify-center gap-3 bg-white hover:bg-gray-50 text-gray-900 font-bold text-lg px-10 py-5 rounded-xl border-2 border-gray-200 transition-all"
            >
              {t("pricingPage.finalCta.contact")}
            </a>
          </div>
          <div className="flex flex-wrap justify-center gap-6 mt-8 text-sm text-gray-500">
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
              {t("pricingPage.finalCta.noCc")}
            </span>
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
              {t("pricingPage.finalCta.freeTrial")}
            </span>
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
              {t("pricingPage.finalCta.cancelAnytime")}
            </span>
          </div>
        </div>
      </section>

      {/* Manager Modal */}
      <ManagerRequestModal isOpen={managerModalOpen} onClose={() => setManagerModalOpen(false)} />

      {/* Enterprise Modal */}
      <EnterpriseApplicationModal isOpen={enterpriseModalOpen} onClose={() => setEnterpriseModalOpen(false)} />
    </main>
  );
}
