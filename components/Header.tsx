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

      {/* ─── Clean Header ─────────────────────────────────────── */}
      <header className="sticky top-0 z-50 bg-white/85 backdrop-blur-md border-b border-slate-200/70">
        <nav
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          aria-label="Hauptnavigation"
        >
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5" aria-label="Taskey Startseite">
              <Image
                src="/logo_transparent.png"
                alt="Taskey Logo - Reinigungssoftware"
                width={36}
                height={36}
                className="h-9 w-9 object-contain"
                priority
                sizes="36px"
              />
              <span className="text-lg font-bold tracking-tight text-slate-900">
                Taskey
              </span>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-3 py-1.5 text-sm font-medium rounded-md transition-colors ${
                    isActive(link.href)
                      ? "text-slate-900 bg-slate-100"
                      : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="https://taskey.vars-development.com/support"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 text-sm font-medium rounded-md text-slate-600 hover:text-slate-900 hover:bg-slate-50 transition-colors"
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
                className="px-4 py-2 text-sm font-semibold text-slate-700 hover:text-slate-900 rounded-full transition-colors"
              >
                Login
              </Link>
              <Link
                href="https://signup.taskeyapp.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-5 py-2.5 text-sm font-bold text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 rounded-full shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/40 transition-all"
              >
                {t("nav.tryFree")}
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>

            {/* Mobile Toggle */}
            <button
              className="lg:hidden p-2 rounded-md text-slate-700 hover:bg-slate-100 transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Menü öffnen"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7h16M4 12h16M4 17h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="lg:hidden border-t border-slate-200 py-3">
              <div className="flex flex-col gap-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`px-3 py-2.5 rounded-md text-sm font-medium transition-colors ${
                      isActive(link.href)
                        ? "text-slate-900 bg-slate-100"
                        : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
                <a
                  href="https://taskey.vars-development.com/support"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-2.5 text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded-md transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {t("nav.support")}
                </a>
                <div className="pt-3 px-2 space-y-2 border-t border-slate-200 mt-2">
                  <div className="flex justify-start pb-1">
                    <LanguageSwitcher />
                  </div>
                  <Link
                    href="https://signup.taskeyapp.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full px-4 py-2.5 text-center text-sm font-semibold text-slate-700 hover:bg-slate-50 rounded-full transition-colors border border-slate-200"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Login
                  </Link>
                  <Link
                    href="https://signup.taskeyapp.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full px-4 py-2.5 text-center text-sm font-bold text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 rounded-full shadow-lg shadow-cyan-500/30 transition-all"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {t("nav.tryFree")}
                  </Link>
                </div>
              </div>
            </div>
          )}
        </nav>
      </header>
    </>
  );
}
