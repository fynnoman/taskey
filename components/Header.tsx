"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";
import LanguageSwitcher from "./LanguageSwitcher";
import { useLanguage } from "@/context/LanguageContext";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t } = useLanguage();
  const pathname = usePathname();

  const navLinks = [
    { href: "/features",        label: t("nav.features") },
    { href: "/pricing",         label: t("nav.pricing") },
    { href: "/news",            label: "News" },
    { href: "/partnerschaften", label: "Partner werden" },
    { href: "/about",           label: t("nav.about") },
  ];

  const isActive = (href: string) => pathname === href;

  return (
    <>
      {/* ─── Top USP-Strip ─────────────────────────────────────── */}
      <div className="bg-gradient-to-r from-gray-950 via-[#0a1628] to-gray-950 text-white text-xs sm:text-sm relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-8 sm:h-9 flex items-center justify-center gap-2 sm:gap-3">
          <span className="relative flex h-2 w-2 flex-shrink-0">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400" />
          </span>
          <span className="hidden sm:inline text-[10px] sm:text-[11px] tracking-[0.25em] text-cyan-300 uppercase font-bold">
            Taskey-USP
          </span>
          <span className="usp-rotator relative inline-block h-5 overflow-hidden flex-1 max-w-[640px] text-center">
            <span className="usp-msg usp-msg-1 absolute inset-0 font-bold leading-5 whitespace-nowrap overflow-hidden text-ellipsis px-2">
              Beste Echtzeit-Kommunikation zwischen{" "}
              <span className="text-cyan-300">Einsatzort</span> und{" "}
              <span className="text-cyan-300">Büro</span>
            </span>
            <span className="usp-msg usp-msg-2 absolute inset-0 font-bold leading-5 whitespace-nowrap overflow-hidden text-ellipsis px-2">
              Eine Software <span className="text-emerald-300">statt 5 Abos</span> —{" "}
              <span className="text-emerald-300">alles in einem System</span>
            </span>
          </span>
          <Link
            href="/#echtzeit-kommunikation"
            className="hidden md:inline-flex items-center gap-1 text-cyan-300 hover:text-cyan-200 font-semibold"
          >
            Mehr
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
        <style jsx>{`
          .usp-msg-1 { animation: uspFade1 10s infinite ease-in-out; }
          .usp-msg-2 { animation: uspFade2 10s infinite ease-in-out; }
          @keyframes uspFade1 {
            0%, 45% { opacity: 1; transform: translateY(0); }
            50%, 95% { opacity: 0; transform: translateY(-8px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          @keyframes uspFade2 {
            0%, 45% { opacity: 0; transform: translateY(8px); }
            50%, 95% { opacity: 1; transform: translateY(0); }
            100% { opacity: 0; transform: translateY(8px); }
          }
        `}</style>
      </div>

      {/* ─── Silber-Header ─────────────────────────────────────── */}
      <header className="silver-header sticky top-0 z-50">
        {/* Brushed-Metal Base */}
        <div className="silver-base" aria-hidden="true" />
        {/* Spekular-Highlight oben */}
        <div className="silver-top-shine" aria-hidden="true" />
        {/* Vertikales Bürsten-Pattern */}
        <div className="silver-brushed" aria-hidden="true" />
        {/* Diagonale Lichtreflexion */}
        <div className="silver-sheen" aria-hidden="true" />
        {/* Untere Kante (dunkler Hauchschatten) */}
        <div className="silver-bottom-edge" aria-hidden="true" />

        <nav
          className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          aria-label="Hauptnavigation"
        >
          <div className="flex justify-between items-center h-16 sm:h-[72px]">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5 group" aria-label="Taskey Startseite">
              <div className="relative">
                <Image
                  src="/89294AD1-F642-46F0-8087-782AD98BE2A2_1_105_c.jpeg"
                  alt="Taskey Logo - Reinigungssoftware"
                  width={40}
                  height={40}
                  className="h-9 w-9 rounded-lg object-cover transition-transform group-hover:scale-105"
                  priority
                  sizes="40px"
                />
              </div>
              <span className="text-xl font-black tracking-[0.18em] silver-wordmark">
                TASKEY
              </span>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`silver-link relative px-4 py-2 text-[13px] font-bold tracking-wide rounded-full transition-all ${
                    isActive(link.href)
                      ? "silver-link-active text-slate-900"
                      : "text-slate-700 hover:text-slate-900"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="https://taskey.vars-development.com/support"
                target="_blank"
                rel="noopener noreferrer"
                className="silver-link px-4 py-2 text-[13px] font-bold tracking-wide rounded-full text-slate-700 hover:text-slate-900 transition-all"
              >
                {t("nav.support")}
              </a>
            </div>

            {/* CTA + Sprache */}
            <div className="hidden lg:flex items-center gap-3">
              <LanguageSwitcher />
              <Link
                href="https://signup.taskeyapp.com"
                target="_blank"
                rel="noopener noreferrer"
                className="silver-cta inline-flex items-center gap-1.5 px-5 py-2.5 text-[13px] font-black tracking-wide text-white rounded-full transition-all"
              >
                {t("nav.tryFree")}
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>

            {/* Mobile Toggle */}
            <button
              className="lg:hidden silver-icon-btn p-2 rounded-full text-slate-800"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Menü öffnen"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 7h16M4 12h16M4 17h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="lg:hidden silver-mobile-panel border-t border-white/40 py-3">
              <div className="flex flex-col gap-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`px-4 py-3 rounded-xl text-sm font-bold tracking-wide transition ${
                      isActive(link.href)
                        ? "silver-link-active text-slate-900"
                        : "text-slate-700 hover:bg-white/40"
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
                <a
                  href="https://taskey.vars-development.com/support"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-3 text-sm font-bold tracking-wide text-slate-700 hover:bg-white/40 rounded-xl transition"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {t("nav.support")}
                </a>
                <div className="pt-3 px-3 space-y-2 border-t border-white/40 mt-2">
                  <div className="flex justify-start pb-1">
                    <LanguageSwitcher />
                  </div>
                  <Link
                    href="https://signup.taskeyapp.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="silver-cta block w-full px-4 py-3 text-center text-sm font-black tracking-wide text-white rounded-full"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {t("nav.tryFree")}
                  </Link>
                </div>
              </div>
            </div>
          )}
        </nav>

        {/* ───── Silber-Styles ───── */}
        <style jsx>{`
          .silver-header {
            position: sticky;
            isolation: isolate;
            box-shadow:
              0 1px 0 rgba(255, 255, 255, 0.9) inset,
              0 -1px 0 rgba(15, 23, 42, 0.08) inset,
              0 8px 24px -8px rgba(15, 23, 42, 0.18),
              0 2px 6px -2px rgba(15, 23, 42, 0.10);
          }

          /* 1) Basis-Verlauf — vertikal, wie poliertes Aluminium */
          .silver-base {
            position: absolute;
            inset: 0;
            z-index: -4;
            background: linear-gradient(
              180deg,
              #fdfdfe 0%,
              #f4f6f9 18%,
              #e6eaf0 38%,
              #d9dfe6 58%,
              #cfd6df 78%,
              #c5cdd7 100%
            );
          }

          /* 2) Top-Highlight (spekulares Licht) */
          .silver-top-shine {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 14px;
            z-index: -2;
            background: linear-gradient(
              180deg,
              rgba(255, 255, 255, 0.95) 0%,
              rgba(255, 255, 255, 0.4) 40%,
              rgba(255, 255, 255, 0) 100%
            );
            pointer-events: none;
          }

          /* 3) Brushed-Metal Textur (vertikale Mikro-Streifen) */
          .silver-brushed {
            position: absolute;
            inset: 0;
            z-index: -3;
            opacity: 0.35;
            background-image: repeating-linear-gradient(
              90deg,
              rgba(255, 255, 255, 0.5) 0px,
              rgba(255, 255, 255, 0.5) 1px,
              rgba(180, 190, 205, 0.0) 1px,
              rgba(180, 190, 205, 0.0) 2px,
              rgba(120, 130, 145, 0.18) 2px,
              rgba(120, 130, 145, 0.18) 3px,
              rgba(255, 255, 255, 0.0) 3px,
              rgba(255, 255, 255, 0.0) 5px
            );
            mix-blend-mode: overlay;
            pointer-events: none;
          }

          /* 4) Diagonale Lichtreflexion (subtiles Sheen) */
          .silver-sheen {
            position: absolute;
            inset: 0;
            z-index: -1;
            background: linear-gradient(
              115deg,
              rgba(255, 255, 255, 0) 30%,
              rgba(255, 255, 255, 0.55) 48%,
              rgba(255, 255, 255, 0.7) 50%,
              rgba(255, 255, 255, 0.55) 52%,
              rgba(255, 255, 255, 0) 70%
            );
            opacity: 0.5;
            pointer-events: none;
            mix-blend-mode: screen;
          }

          /* 5) Untere Kante */
          .silver-bottom-edge {
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            height: 1px;
            z-index: 0;
            background: linear-gradient(
              90deg,
              rgba(15, 23, 42, 0) 0%,
              rgba(15, 23, 42, 0.18) 20%,
              rgba(15, 23, 42, 0.22) 50%,
              rgba(15, 23, 42, 0.18) 80%,
              rgba(15, 23, 42, 0) 100%
            );
          }

          /* Wordmark mit feinem Metall-Look */
          .silver-wordmark {
            background: linear-gradient(180deg, #1f2937 0%, #0f172a 50%, #1f2937 100%);
            -webkit-background-clip: text;
            background-clip: text;
            -webkit-text-fill-color: transparent;
            text-shadow: 0 1px 0 rgba(255, 255, 255, 0.6);
          }

          /* Nav-Links mit Hover-Sheen */
          .silver-link {
            position: relative;
          }
          .silver-link:hover {
            background: linear-gradient(
              180deg,
              rgba(255, 255, 255, 0.85) 0%,
              rgba(255, 255, 255, 0.45) 100%
            );
            box-shadow:
              0 1px 0 rgba(255, 255, 255, 0.95) inset,
              0 -1px 0 rgba(15, 23, 42, 0.05) inset,
              0 1px 3px rgba(15, 23, 42, 0.08);
          }

          /* Aktive Seite — sieht aus wie eingelassener silberner Button */
          .silver-link-active {
            background: linear-gradient(
              180deg,
              #cfd6df 0%,
              #e4eaf1 50%,
              #f0f3f7 100%
            );
            box-shadow:
              0 1px 0 rgba(255, 255, 255, 0.9) inset,
              0 2px 4px rgba(15, 23, 42, 0.12) inset,
              0 -1px 0 rgba(15, 23, 42, 0.08) inset;
          }

          /* CTA — dunkler Knopf, hebt sich kontrastreich vom Silber ab */
          .silver-cta {
            background: linear-gradient(180deg, #1e293b 0%, #0f172a 100%);
            box-shadow:
              0 1px 0 rgba(255, 255, 255, 0.18) inset,
              0 -1px 0 rgba(0, 0, 0, 0.4) inset,
              0 4px 12px -2px rgba(15, 23, 42, 0.45),
              0 2px 4px rgba(15, 23, 42, 0.3);
          }
          .silver-cta:hover {
            background: linear-gradient(180deg, #334155 0%, #1e293b 100%);
            transform: translateY(-1px);
            box-shadow:
              0 1px 0 rgba(255, 255, 255, 0.22) inset,
              0 -1px 0 rgba(0, 0, 0, 0.4) inset,
              0 6px 16px -2px rgba(15, 23, 42, 0.5),
              0 3px 6px rgba(15, 23, 42, 0.35);
          }

          /* Mobile Icon-Button */
          .silver-icon-btn {
            background: linear-gradient(180deg, #f4f6f9 0%, #d9dfe6 100%);
            box-shadow:
              0 1px 0 rgba(255, 255, 255, 0.9) inset,
              0 -1px 0 rgba(15, 23, 42, 0.08) inset,
              0 1px 3px rgba(15, 23, 42, 0.12);
          }
          .silver-icon-btn:hover {
            background: linear-gradient(180deg, #ffffff 0%, #e4eaf1 100%);
          }

          /* Mobile Panel */
          .silver-mobile-panel {
            background: linear-gradient(
              180deg,
              rgba(244, 246, 249, 0.95) 0%,
              rgba(217, 223, 230, 0.95) 100%
            );
            backdrop-filter: blur(20px);
            -webkit-backdrop-filter: blur(20px);
          }
        `}</style>
      </header>
    </>
  );
}
