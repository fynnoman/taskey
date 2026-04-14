"use client";

import React, { useState, lazy, Suspense } from "react";
import { useLanguage } from "../../context/LanguageContext";

const ManagerRequestModal = lazy(() => import("../../components/ManagerRequestModal"));
const EnterpriseApplicationModal = lazy(() => import("../../components/EnterpriseApplicationModal"));

// ─── Helpers ───────────────────────────────────────────────────────
function CheckIcon() {
  return (
    <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );
}

function CrossIcon() {
  return (
    <svg className="w-5 h-5 text-gray-300 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
  );
}

function StarIcon() {
  return (
    <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  );
}

// ─── Main Page ─────────────────────────────────────────────────────
export default function PricingPage() {
  const { t } = useLanguage();

  const [activeModel, setActiveModel] = useState<"reinigung" | "handwerk">("reinigung");
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("monthly");
  const [managerModalOpen, setManagerModalOpen] = useState(false);
  const [enterpriseModalOpen, setEnterpriseModalOpen] = useState(false);

  // Handwerk prices
  const handwerkPrices = {
    start: { monthly: 11.79, yearly: +(11.79 * 0.87).toFixed(2) },
    grow: { monthly: 21.78, yearly: +(21.78 * 0.87).toFixed(2) },
    scale: { monthly: 29.77, yearly: +(29.77 * 0.87).toFixed(2) },
  };

  const getHandwerkPrice = (tier: "start" | "grow" | "scale") =>
    billingCycle === "yearly" ? handwerkPrices[tier].yearly : handwerkPrices[tier].monthly;

  // ─── HERO SECTION ──────────────────────────────────────────────
  const heroSection = (
    <section className="relative pt-32 pb-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <span className="inline-block px-4 py-1.5 text-xs font-semibold tracking-widest text-blue-900 bg-blue-100 rounded-full mb-6">
          {t("pricing.hero.badge")}
        </span>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
          {t("pricing.hero.title")}
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
          {t("pricing.hero.subtitle")}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="https://app.taskey.de/register" className="px-8 py-3.5 bg-blue-900 text-white font-semibold rounded-xl hover:bg-blue-800 transition-colors">
            {t("pricing.hero.cta.trial")}
          </a>
          <a href="/demo" className="px-8 py-3.5 border-2 border-gray-300 text-gray-700 font-semibold rounded-xl hover:border-gray-400 transition-colors">
            {t("pricing.hero.cta.demo")}
          </a>
        </div>
      </div>
    </section>
  );

  // ─── TOGGLE SECTION ────────────────────────────────────────────
  const toggleSection = (
    <section className="py-8 bg-white">
      <div className="max-w-3xl mx-auto px-4">
        <p className="text-center text-sm text-gray-500 mb-4">{t("pricing.toggle.label")}</p>
        <div className="flex bg-gray-100 rounded-xl p-1 max-w-md mx-auto">
          <button
            onClick={() => setActiveModel("reinigung")}
            className={`flex-1 py-3 px-4 rounded-lg text-sm font-semibold transition-all ${
              activeModel === "reinigung"
                ? "bg-blue-900 text-white shadow-md"
                : "text-gray-600 hover:text-gray-900"
            }`}
          >
            {t("pricing.toggle.reinigung")}
          </button>
          <button
            onClick={() => setActiveModel("handwerk")}
            className={`flex-1 py-3 px-4 rounded-lg text-sm font-semibold transition-all ${
              activeModel === "handwerk"
                ? "bg-blue-900 text-white shadow-md"
                : "text-gray-600 hover:text-gray-900"
            }`}
          >
            {t("pricing.toggle.handwerk")}
          </button>
        </div>
      </div>
    </section>
  );

  // ═══════════════════════════════════════════════════════════════
  //  REINIGUNG MODEL (per-object)
  // ═══════════════════════════════════════════════════════════════
  const reinigungIntro = (
    <div className="max-w-3xl mx-auto text-center mb-12">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">{t("pricing.reinigung.introTitle")}</h2>
      <p className="text-gray-600">{t("pricing.reinigung.introSubtitle")}</p>
    </div>
  );

  const reinigungProfessionalFeatures = [
    t("pricing.reinigung.prof.f1"),
    t("pricing.reinigung.prof.f2"),
    t("pricing.reinigung.prof.f3"),
    t("pricing.reinigung.prof.f4"),
    t("pricing.reinigung.prof.f5"),
    t("pricing.reinigung.prof.f6"),
    t("pricing.reinigung.prof.f7"),
    t("pricing.reinigung.prof.f8"),
    t("pricing.reinigung.prof.f9"),
    t("pricing.reinigung.prof.f10"),
    t("pricing.reinigung.prof.f11"),
    t("pricing.reinigung.prof.f12"),
    t("pricing.reinigung.prof.f13"),
  ];

  const reinigungBusinessFeatures = [
    t("pricing.reinigung.biz.f1"),
    t("pricing.reinigung.biz.f2"),
    t("pricing.reinigung.biz.f3"),
    t("pricing.reinigung.biz.f4"),
    t("pricing.reinigung.biz.f5"),
    t("pricing.reinigung.biz.f6"),
    t("pricing.reinigung.biz.f7"),
    t("pricing.reinigung.biz.f8"),
    t("pricing.reinigung.biz.f9"),
    t("pricing.reinigung.biz.f10"),
    t("pricing.reinigung.biz.f11"),
  ];

  const reinigungEnterpriseFeatures = [
    t("pricing.reinigung.ent.f1"),
    t("pricing.reinigung.ent.f2"),
    t("pricing.reinigung.ent.f3"),
    t("pricing.reinigung.ent.f4"),
    t("pricing.reinigung.ent.f5"),
    t("pricing.reinigung.ent.f6"),
    t("pricing.reinigung.ent.f7"),
    t("pricing.reinigung.ent.f8"),
    t("pricing.reinigung.ent.f9"),
    t("pricing.reinigung.ent.f10"),
    t("pricing.reinigung.ent.f11"),
  ];

  const reinigungCards = (
    <section className="pb-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {reinigungIntro}

        <p className="text-center text-xs text-gray-400 mb-10">{t("pricingPage.allPricesVat")}</p>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* PROFESSIONAL */}
          <div className="rounded-2xl border border-gray-200 bg-white p-8 flex flex-col">
            <span className="text-xs font-semibold tracking-widest text-gray-400 mb-2">PROFESSIONAL</span>
            <h3 className="text-xl font-bold text-gray-900 mb-1">{t("pricing.reinigung.prof.tagline")}</h3>
            <p className="text-sm text-gray-500 mb-6">{t("pricing.reinigung.prof.desc")}</p>
            <div className="mb-2">
              <span className="text-4xl font-bold text-gray-900">199 &euro;</span>
              <span className="text-gray-500 text-sm"> / {t("pricing.reinigung.month")}</span>
            </div>
            <p className="text-sm text-gray-500 mb-6">+ 25 &euro; / {t("pricing.reinigung.perObject")}</p>
            <a href="https://app.taskey.de/register" className="block text-center py-3 px-6 bg-gray-900 text-white font-semibold rounded-xl hover:bg-gray-800 transition-colors mb-8">
              {t("pricing.reinigung.cta.trial")}
            </a>
            <ul className="space-y-3 flex-1">
              {reinigungProfessionalFeatures.map((f, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-gray-700">
                  <CheckIcon /> {f}
                </li>
              ))}
            </ul>
          </div>

          {/* BUSINESS (highlighted) */}
          <div className="rounded-2xl border-2 border-blue-900 bg-white p-8 flex flex-col relative shadow-lg">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 flex items-center gap-1 px-4 py-1 bg-blue-900 text-white text-xs font-semibold rounded-full">
              <StarIcon /> {t("pricing.reinigung.biz.badge")}
            </div>
            <span className="text-xs font-semibold tracking-widest text-blue-900 mb-2">BUSINESS</span>
            <h3 className="text-xl font-bold text-gray-900 mb-1">{t("pricing.reinigung.biz.tagline")}</h3>
            <p className="text-sm text-gray-500 mb-6">{t("pricing.reinigung.biz.desc")}</p>
            <div className="mb-2">
              <span className="text-4xl font-bold text-blue-900">399 &euro;</span>
              <span className="text-gray-500 text-sm"> / {t("pricing.reinigung.month")}</span>
            </div>
            <p className="text-sm text-gray-500 mb-6">+ 22 &euro; / {t("pricing.reinigung.perObject")}</p>
            <a href="https://app.taskey.de/register" className="block text-center py-3 px-6 bg-blue-900 text-white font-semibold rounded-xl hover:bg-blue-800 transition-colors mb-8">
              {t("pricing.reinigung.cta.trial")}
            </a>
            <ul className="space-y-3 flex-1">
              {reinigungBusinessFeatures.map((f, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-gray-700">
                  <CheckIcon /> {f}
                </li>
              ))}
            </ul>
          </div>

          {/* ENTERPRISE */}
          <div className="rounded-2xl border border-gray-200 bg-gradient-to-b from-gray-50 to-white p-8 flex flex-col">
            <span className="text-xs font-semibold tracking-widest text-gray-400 mb-2">ENTERPRISE</span>
            <h3 className="text-xl font-bold text-gray-900 mb-1">{t("pricing.reinigung.ent.tagline")}</h3>
            <p className="text-sm text-gray-500 mb-6">{t("pricing.reinigung.ent.desc")}</p>
            <div className="mb-2">
              <span className="text-4xl font-bold text-gray-900">699 &euro;</span>
              <span className="text-gray-500 text-sm"> / {t("pricing.reinigung.month")}</span>
            </div>
            <p className="text-sm text-gray-500 mb-6">+ 19 &euro; / {t("pricing.reinigung.perObject")}</p>
            <button onClick={() => setEnterpriseModalOpen(true)} className="block w-full text-center py-3 px-6 border-2 border-gray-900 text-gray-900 font-semibold rounded-xl hover:bg-gray-900 hover:text-white transition-colors mb-8">
              {t("pricing.reinigung.cta.contact")}
            </button>
            <ul className="space-y-3 flex-1">
              {reinigungEnterpriseFeatures.map((f, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-gray-700">
                  <CheckIcon /> {f}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );

  // ═══════════════════════════════════════════════════════════════
  //  HANDWERK MODEL (per-employee)
  // ═══════════════════════════════════════════════════════════════
  const handwerkBillingToggle = (
    <div className="flex items-center justify-center gap-4 mb-10">
      <span className={`text-sm font-medium ${billingCycle === "monthly" ? "text-gray-900" : "text-gray-400"}`}>
        {t("pricingPage.monthly")}
      </span>
      <button
        onClick={() => setBillingCycle(billingCycle === "monthly" ? "yearly" : "monthly")}
        className="relative w-14 h-7 rounded-full bg-gray-200 transition-colors"
        aria-label="Toggle billing cycle"
      >
        <span className={`absolute top-0.5 w-6 h-6 rounded-full bg-blue-900 transition-transform ${billingCycle === "yearly" ? "translate-x-7" : "translate-x-0.5"}`} />
      </button>
      <span className={`text-sm font-medium ${billingCycle === "yearly" ? "text-gray-900" : "text-gray-400"}`}>
        {t("pricingPage.yearly")} <span className="text-green-600 font-semibold">{t("pricingPage.discount13")}</span>
      </span>
    </div>
  );

  const handwerkStartFeatures = [
    t("pricingPage.start.f2"),
    t("pricingPage.start.f3"),
    t("pricingPage.start.f4"),
    t("pricingPage.start.f5"),
    t("pricingPage.start.f6"),
    t("pricingPage.start.f7"),
  ];
  const handwerkStartDisabled = [
    t("pricingPage.start.f8"),
    t("pricingPage.start.f9"),
    t("pricingPage.start.f10"),
    t("pricingPage.start.f11"),
  ];

  const handwerkGrowFeatures = [
    t("pricingPage.grow.f1"),
    t("pricingPage.grow.f2"),
    t("pricingPage.grow.f3"),
    t("pricingPage.grow.f4"),
    t("pricingPage.grow.f5"),
    t("pricingPage.grow.f6"),
    t("pricingPage.grow.f7"),
    t("pricingPage.grow.f8"),
  ];
  const handwerkGrowDisabled = [
    t("pricingPage.grow.f9"),
  ];

  const handwerkScaleFeatures = [
    t("pricingPage.scale.f1"),
    t("pricingPage.scale.f2"),
    t("pricingPage.scale.f3"),
    t("pricingPage.scale.f4"),
    t("pricingPage.scale.f5"),
    t("pricingPage.scale.f6"),
    t("pricingPage.scale.f7"),
    t("pricingPage.scale.f8"),
    t("pricingPage.scale.f9"),
    t("pricingPage.scale.f10"),
  ];

  const handwerkCards = (
    <section className="pb-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <p className="text-center text-xs text-gray-400 mb-6">{t("pricingPage.allPricesVat")}</p>

        {handwerkBillingToggle}

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {/* START */}
          <div className="rounded-2xl border border-gray-200 bg-white p-8 flex flex-col">
            <span className="text-xs font-semibold tracking-widest text-gray-400 mb-1">{t("pricingPage.start.rec")}</span>
            <p className="text-xs text-gray-400 mb-4">{t("pricingPage.start.recSub")}</p>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">START</h3>
            <div className="mb-1">
              <span className="text-4xl font-bold text-gray-900">{getHandwerkPrice("start").toFixed(2).replace(".", ",")} &euro;</span>
            </div>
            <p className="text-sm text-gray-500 mb-6">{t("pricingPage.perEmployee")}</p>
            <a href="https://app.taskey.de/register" className="block text-center py-3 px-6 bg-gray-900 text-white font-semibold rounded-xl hover:bg-gray-800 transition-colors mb-8">
              {t("pricingPage.startNow")}
            </a>
            <ul className="space-y-3 flex-1">
              {handwerkStartFeatures.map((f, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-gray-700">
                  <CheckIcon /> {f}
                </li>
              ))}
              {handwerkStartDisabled.map((f, i) => (
                <li key={`d-${i}`} className="flex items-start gap-3 text-sm text-gray-400 line-through">
                  <CrossIcon /> {f}
                </li>
              ))}
              <li className="flex items-start gap-3 text-sm text-gray-700">
                <CheckIcon /> {t("pricingPage.start.f12")}
              </li>
            </ul>
          </div>

          {/* GROW (highlighted) */}
          <div className="rounded-2xl border-2 border-blue-900 bg-white p-8 flex flex-col relative shadow-lg">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 flex items-center gap-1 px-4 py-1 bg-blue-900 text-white text-xs font-semibold rounded-full">
              <StarIcon /> {t("pricingPage.grow.rec")}
            </div>
            <span className="text-xs font-semibold tracking-widest text-blue-900 mb-1">{t("pricingPage.grow.rec")}</span>
            <p className="text-xs text-gray-400 mb-4">{t("pricingPage.grow.recSub")}</p>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">GROW</h3>
            <div className="mb-1">
              <span className="text-4xl font-bold text-blue-900">{getHandwerkPrice("grow").toFixed(2).replace(".", ",")} &euro;</span>
            </div>
            <p className="text-sm text-gray-500 mb-6">{t("pricingPage.perEmployee")}</p>
            <a href="https://app.taskey.de/register" className="block text-center py-3 px-6 bg-blue-900 text-white font-semibold rounded-xl hover:bg-blue-800 transition-colors mb-8">
              {t("pricingPage.bookGrow")}
            </a>
            <ul className="space-y-3 flex-1">
              {handwerkGrowFeatures.map((f, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-gray-700">
                  <CheckIcon /> {f}
                </li>
              ))}
              {handwerkGrowDisabled.map((f, i) => (
                <li key={`d-${i}`} className="flex items-start gap-3 text-sm text-gray-400 line-through">
                  <CrossIcon /> {f}
                </li>
              ))}
              <li className="flex items-start gap-3 text-sm text-gray-700">
                <CheckIcon /> {t("pricingPage.grow.f10")}
              </li>
            </ul>
          </div>

          {/* SCALE */}
          <div className="rounded-2xl border border-gray-200 bg-gradient-to-b from-gray-50 to-white p-8 flex flex-col">
            <span className="text-xs font-semibold tracking-widest text-gray-400 mb-1">{t("pricingPage.scale.rec")}</span>
            <p className="text-xs text-gray-400 mb-4">{t("pricingPage.scale.recSub")}</p>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">SCALE</h3>
            <div className="mb-1">
              <span className="text-4xl font-bold text-gray-900">{getHandwerkPrice("scale").toFixed(2).replace(".", ",")} &euro;</span>
            </div>
            <p className="text-sm text-gray-500 mb-6">{t("pricingPage.perEmployee")}</p>
            <a href="https://app.taskey.de/register" className="block text-center py-3 px-6 bg-gray-900 text-white font-semibold rounded-xl hover:bg-gray-800 transition-colors mb-8">
              {t("pricingPage.bookScale")}
            </a>
            <ul className="space-y-3 flex-1">
              {handwerkScaleFeatures.map((f, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-gray-700">
                  <CheckIcon /> {f}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ENTERPRISE (Handwerk) */}
        <div className="max-w-4xl mx-auto rounded-2xl border border-gray-200 bg-gradient-to-r from-gray-900 to-gray-800 p-10 text-white text-center">
          <span className="inline-block px-4 py-1 text-xs font-semibold tracking-widest bg-white/10 rounded-full mb-4">
            {t("pricingPage.enterprise.badge")}
          </span>
          <h3 className="text-3xl font-bold mb-2">ENTERPRISE</h3>
          <p className="text-gray-300 mb-2">{t("pricingPage.enterprise.subtitle")}</p>
          <p className="text-gray-400 text-sm mb-8">{t("pricing.enterprise.desc")}</p>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {[1, 2, 3, 4].map((n) => (
              <div key={n} className="bg-white/10 rounded-xl p-4 text-left">
                <h4 className="font-semibold text-sm mb-1">{t(`pricingPage.enterprise.f${n}.title`)}</h4>
                <p className="text-xs text-gray-400">{t(`pricingPage.enterprise.f${n}.desc`)}</p>
              </div>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/enterprise" className="px-8 py-3 border border-white/30 rounded-xl font-semibold hover:bg-white/10 transition-colors">
              {t("pricingPage.enterprise.cta1")}
            </a>
            <button onClick={() => setEnterpriseModalOpen(true)} className="px-8 py-3 bg-blue-600 rounded-xl font-semibold hover:bg-blue-500 transition-colors">
              {t("pricingPage.enterprise.cta2")}
            </button>
          </div>
        </div>
      </div>
    </section>
  );

  // ═══════════════════════════════════════════════════════════════
  //  SHARED SECTIONS
  // ═══════════════════════════════════════════════════════════════

  // ─── NFC Tags ──────────────────────────────────────────────────
  const nfcSection = (
    <section className="py-20 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1 text-xs font-semibold tracking-widest text-blue-900 bg-blue-100 rounded-full mb-4">
            {t("pricingPage.nfc.badge")}
          </span>
          <h2 className="text-3xl font-bold text-gray-900 mb-3">{t("pricingPage.nfc.title")}</h2>
          <p className="text-gray-600">{t("pricingPage.nfc.subtitle")}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {[
            { name: "Starter", tags: "10 NFC-Tags", price: "6,30", key: "starter" },
            { name: "Pro", tags: "50 NFC-Tags", price: "16,10", key: "pro", recommended: true },
            { name: "Business", tags: "150 NFC-Tags", price: "30,80", key: "business" },
          ].map((tier) => (
            <div key={tier.key} className={`rounded-2xl p-8 text-center ${tier.recommended ? "border-2 border-blue-900 bg-white shadow-lg relative" : "border border-gray-200 bg-white"}`}>
              {tier.recommended && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 bg-blue-900 text-white text-xs font-semibold rounded-full">
                  {t("pricingPage.nfc.recommended")}
                </div>
              )}
              <h3 className="text-lg font-bold text-gray-900 mb-1">{tier.name}</h3>
              <p className="text-sm text-gray-500 mb-4">{tier.tags}</p>
              <div className="mb-1">
                <span className="text-3xl font-bold text-gray-900">{tier.price} &euro;</span>
              </div>
              <p className="text-xs text-gray-400 mb-6">{t("pricingPage.nfc.shipping")}</p>
              <a href="mailto:kontakt@taskey.de" className="block py-2.5 px-6 border border-gray-300 rounded-xl text-sm font-semibold text-gray-700 hover:bg-gray-50 transition-colors">
                {t("pricingPage.nfc.order")}
              </a>
            </div>
          ))}
        </div>

        <div className="bg-blue-50 rounded-xl p-6 flex items-start gap-4 max-w-2xl mx-auto">
          <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
            <svg className="w-4 h-4 text-blue-900" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 text-sm mb-1">{t("pricingPage.nfc.replacement.title")}</h4>
            <p className="text-sm text-gray-600">{t("pricingPage.nfc.replacement.desc")}</p>
          </div>
        </div>
      </div>
    </section>
  );

  // ─── Setup/Onboarding ─────────────────────────────────────────
  const setupSection = (
    <section className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1 text-xs font-semibold tracking-widest text-blue-900 bg-blue-100 rounded-full mb-4">
            {t("pricing.onboarding.badge")}
          </span>
          <h2 className="text-3xl font-bold text-gray-900 mb-1">
            {t("pricingPage.onboarding.sectionTitle")}{" "}
            <span className="text-blue-900">{t("pricingPage.onboarding.sectionTitle.highlight")}</span>
          </h2>
          <p className="text-gray-600 mt-3">{t("pricingPage.onboarding.sectionSubtitle")}</p>
        </div>

        {/* What we do */}
        <div className="grid sm:grid-cols-2 gap-6 mb-12 max-w-4xl mx-auto">
          {[1, 2, 3, 4].map((n) => (
            <div key={n} className="flex items-start gap-4 p-5 rounded-xl bg-gray-50">
              <div className="w-8 h-8 bg-blue-100 text-blue-900 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-sm">
                {n}
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 text-sm">{t(`pricingPage.onboarding.item${n}.title`)}</h4>
                <p className="text-sm text-gray-600 mt-1">{t(`pricingPage.onboarding.item${n}.desc`)}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Setup pricing - model dependent */}
        {activeModel === "handwerk" ? (
          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto mb-12">
            {/* GROW Setup */}
            <div className="rounded-2xl border border-gray-200 p-8 text-center">
              <span className="text-xs font-semibold tracking-widest text-gray-400 mb-2 block">{t("pricingPage.onboarding.forGrow")}</span>
              <div className="mb-2">
                <span className="text-3xl font-bold text-gray-900">990 &euro;</span>
                <span className="text-sm text-gray-400 ml-1">{t("pricingPage.onboarding.single")}</span>
              </div>
              <p className="text-xs text-gray-400 mb-6">{t("pricingPage.onboarding.singleNote")}</p>
              <ul className="text-left space-y-2 mb-6">
                {[1, 2, 3, 4].map((n) => (
                  <li key={n} className="flex items-start gap-2 text-sm text-gray-700">
                    <CheckIcon /> {t(`pricingPage.onboarding.growF${n}`)}
                  </li>
                ))}
              </ul>
              <button onClick={() => setManagerModalOpen(true)} className="w-full py-3 bg-gray-900 text-white font-semibold rounded-xl hover:bg-gray-800 transition-colors">
                {t("pricingPage.onboarding.growSetup")}
              </button>
            </div>

            {/* SCALE Setup */}
            <div className="rounded-2xl border-2 border-blue-900 p-8 text-center shadow-md">
              <span className="text-xs font-semibold tracking-widest text-blue-900 mb-2 block">{t("pricingPage.onboarding.forScale")}</span>
              <div className="mb-2">
                <span className="text-3xl font-bold text-blue-900">2.490 &euro;</span>
                <span className="text-sm text-gray-400 ml-1">{t("pricingPage.onboarding.single")}</span>
              </div>
              <p className="text-xs text-gray-400 mb-6">{t("pricingPage.onboarding.singleNote")}</p>
              <ul className="text-left space-y-2 mb-6">
                {[1, 2, 3, 4].map((n) => (
                  <li key={n} className="flex items-start gap-2 text-sm text-gray-700">
                    <CheckIcon /> {t(`pricingPage.onboarding.scaleF${n}`)}
                  </li>
                ))}
              </ul>
              <button onClick={() => setManagerModalOpen(true)} className="w-full py-3 bg-blue-900 text-white font-semibold rounded-xl hover:bg-blue-800 transition-colors">
                {t("pricingPage.onboarding.scaleSetup")}
              </button>
            </div>
          </div>
        ) : (
          <div className="max-w-2xl mx-auto mb-12">
            <div className="rounded-2xl bg-green-50 border border-green-200 p-8 text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-2">{t("pricing.reinigung.setup.title")}</h3>
              <p className="text-gray-600 mb-4">{t("pricing.reinigung.setup.desc")}</p>
              <div className="grid sm:grid-cols-2 gap-4 text-left">
                <div className="bg-white rounded-xl p-4">
                  <p className="font-semibold text-gray-900 text-sm">BUSINESS & ENTERPRISE</p>
                  <p className="text-green-700 font-bold text-lg">{t("pricing.reinigung.setup.free")}</p>
                  <p className="text-xs text-gray-500">{t("pricing.reinigung.setup.freeDesc")}</p>
                </div>
                <div className="bg-white rounded-xl p-4">
                  <p className="font-semibold text-gray-900 text-sm">PROFESSIONAL</p>
                  <p className="text-gray-900 font-bold text-lg">1.490 &euro; <span className="text-sm font-normal text-gray-500">({t("pricing.reinigung.setup.optional")})</span></p>
                  <p className="text-xs text-gray-500">{t("pricing.reinigung.setup.optionalDesc")}</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Trust bar */}
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {[1, 2, 3, 4].map((n) => (
            <div key={n} className="text-center p-4">
              <p className="font-semibold text-gray-900 text-sm">{t(`pricingPage.onboarding.trust${n}`)}</p>
              <p className="text-xs text-gray-500 mt-1">{t(`pricingPage.onboarding.trust${n}.sub`)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  // ─── Premium Manager ───────────────────────────────────────────
  const premiumManagerSection = (
    <section className="py-20 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1 text-xs font-semibold tracking-widest text-blue-900 bg-blue-100 rounded-full mb-4">
            {t("pricingPage.manager.premiumService")}
          </span>
          <h2 className="text-3xl font-bold text-gray-900 mb-3">{t("pricingPage.manager.title")}</h2>
          <p className="text-gray-600">{t("pricingPage.manager.subtitle")}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Left: Price & features */}
          <div className="rounded-2xl border border-gray-200 bg-white p-8">
            <div className="mb-6">
              <span className="text-4xl font-bold text-gray-900">299 &euro;</span>
              <span className="text-gray-500"> {t("pricingPage.manager.perWeek")}</span>
            </div>
            <p className="text-xs text-gray-400 mb-6">{t("pricingPage.manager.note")}</p>
            <ul className="space-y-3 mb-8">
              {[1, 2, 3, 4, 5].map((n) => (
                <li key={n} className="flex items-start gap-3 text-sm text-gray-700">
                  <CheckIcon /> {t(`pricingPage.manager.f${n}`)}
                </li>
              ))}
            </ul>
            <div className="flex flex-col sm:flex-row gap-3">
              <a href="/premium-manager" className="flex-1 text-center py-3 border border-gray-300 rounded-xl text-sm font-semibold text-gray-700 hover:bg-gray-50 transition-colors">
                {t("pricingPage.manager.cta1")}
              </a>
              <button onClick={() => setManagerModalOpen(true)} className="flex-1 py-3 bg-blue-900 text-white rounded-xl text-sm font-semibold hover:bg-blue-800 transition-colors">
                {t("pricingPage.manager.cta2")}
              </button>
            </div>
          </div>

          {/* Right: Expert cards */}
          <div className="space-y-4">
            {[1, 2, 3, 4].map((n) => (
              <div key={n} className="flex items-start gap-4 p-5 rounded-xl bg-white border border-gray-100">
                <div className="w-10 h-10 bg-blue-100 text-blue-900 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 text-sm">{t(`pricingPage.manager.right.f${n}.title`)}</h4>
                  <p className="text-sm text-gray-500 mt-0.5">{t(`pricingPage.manager.right.f${n}.desc`)}</p>
                </div>
              </div>
            ))}
            <div className="bg-blue-50 rounded-xl p-4 text-center">
              <p className="text-sm font-semibold text-blue-900">{t("pricingPage.manager.timeSaving")}</p>
              <p className="text-xs text-gray-500 mt-1">{t("pricingPage.manager.timeSaving.sub")}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  // ─── Storage Add-ons ───────────────────────────────────────────
  const storageSection = (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">{t("pricingPage.storage.title")}</h2>
          <p className="text-gray-600">{t("pricingPage.storage.subtitle")}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {[
            { amount: "+100 GB", price: "8,37", key: 1 },
            { amount: "+500 GB", price: "38,11", key: 2 },
            { amount: "+1 TB", price: "68,27", key: 3 },
          ].map((tier) => (
            <div key={tier.key} className="rounded-2xl border border-gray-200 p-6 text-center">
              <h3 className="text-lg font-bold text-gray-900 mb-1">{t(`pricingPage.storage.addon${tier.key}.amount`)}</h3>
              <p className="text-sm text-gray-500 mb-4">{t(`pricingPage.storage.addon${tier.key}.desc`)}</p>
              <span className="text-2xl font-bold text-gray-900">{tier.price} &euro;</span>
              <span className="text-sm text-gray-400"> {t("pricingPage.storage.perMonth")}</span>
            </div>
          ))}
        </div>

        <div className="bg-gray-50 rounded-xl p-6 max-w-2xl mx-auto">
          <h4 className="font-semibold text-gray-900 text-sm mb-2">{t("pricingPage.storage.infoTitle")}</h4>
          <p className="text-sm text-gray-600">{t("pricingPage.storage.info")}</p>
        </div>
      </div>
    </section>
  );

  // ─── FAQ ───────────────────────────────────────────────────────
  const faqSection = (
    <section className="py-20 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-10">{t("pricingPage.faq.title")}</h2>
        <div className="space-y-4">
          {[1, 2, 3, 4, 5, 6].map((n) => (
            <details key={n} className="group bg-white rounded-xl border border-gray-200 overflow-hidden">
              <summary className="flex items-center justify-between p-5 cursor-pointer font-semibold text-gray-900 text-sm">
                {t(`pricingPage.faq.q${n}`)}
                <svg className="w-5 h-5 text-gray-400 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-5 pb-5 text-sm text-gray-600">
                {t(`pricingPage.faq.a${n}`)}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );

  // ─── Final CTA ─────────────────────────────────────────────────
  const finalCtaSection = (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-3xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t("pricingPage.finalCta.title")}</h2>
        <p className="text-gray-600 mb-8">{t("pricingPage.finalCta.subtitle")}</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <a href="https://app.taskey.de/register" className="px-8 py-3.5 bg-blue-900 text-white font-semibold rounded-xl hover:bg-blue-800 transition-colors">
            {t("pricingPage.finalCta.trial")}
          </a>
          <a href="mailto:kontakt@taskey.de" className="px-8 py-3.5 border-2 border-gray-300 text-gray-700 font-semibold rounded-xl hover:border-gray-400 transition-colors">
            {t("pricingPage.finalCta.contact")}
          </a>
        </div>
        <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-500">
          <span>{t("pricingPage.finalCta.noCc")}</span>
          <span>{t("pricingPage.finalCta.freeTrial")}</span>
          <span>{t("pricingPage.finalCta.cancelAnytime")}</span>
        </div>
      </div>
    </section>
  );

  // ─── RENDER ────────────────────────────────────────────────────
  return (
    <main className="min-h-screen bg-white">
      {heroSection}
      {toggleSection}
      {activeModel === "reinigung" ? reinigungCards : handwerkCards}
      {nfcSection}
      {setupSection}
      {premiumManagerSection}
      {storageSection}
      {faqSection}
      {finalCtaSection}

      <Suspense fallback={null}>
        {managerModalOpen && (
          <ManagerRequestModal isOpen={managerModalOpen} onClose={() => setManagerModalOpen(false)} />
        )}
        {enterpriseModalOpen && (
          <EnterpriseApplicationModal isOpen={enterpriseModalOpen} onClose={() => setEnterpriseModalOpen(false)} />
        )}
      </Suspense>
    </main>
  );
}
