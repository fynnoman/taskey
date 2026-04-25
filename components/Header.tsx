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

      {/* ─── Header (komplett transparent) ───────────────────── */}
      <header className="relative sticky top-0 z-50 bg-transparent">
        <nav className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Hauptnavigation">
          <div className="flex justify-between items-center h-16 sm:h-20">
            <Link href="/" className="flex items-center gap-2.5" aria-label="Taskey Startseite">
              <Image
                src="/logo_transparent.png"
                alt="Taskey Logo - Reinigungssoftware"
                width={64}
                height={64}
                className="h-12 w-12 sm:h-14 sm:w-14 object-contain"
                priority
                sizes="64px"
              />
              <span className="text-xl font-bold text-white">TASKEY</span>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-10">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`transition font-medium ${
                    isActive(link.href)
                      ? "text-cyan-300 font-bold"
                      : "text-white/70 hover:text-white"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="https://taskey.vars-development.com/support"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-white transition font-medium"
              >
                {t("nav.support")}
              </a>
            </div>

            <div className="hidden lg:flex items-center space-x-3">
              <LanguageSwitcher />
              <Link
                href="https://signup.taskeyapp.com"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 text-white/80 hover:text-white transition font-medium"
              >
                Login
              </Link>
              <Link
                href="https://signup.taskeyapp.com"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white rounded-lg transition font-semibold shadow-lg shadow-cyan-500/20"
              >
                {t("nav.tryFree")}
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Menü öffnen"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="lg:hidden border-t border-white/10 py-4 bg-gray-950/95 backdrop-blur-xl">
              <div className="flex flex-col space-y-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`px-4 py-3 rounded-lg transition ${
                      isActive(link.href)
                        ? "text-cyan-300 bg-white/5 font-bold"
                        : "text-white/80 hover:bg-white/5 hover:text-white"
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
                <a
                  href="https://taskey.vars-development.com/support"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-3 text-white/80 hover:bg-white/5 hover:text-white rounded-lg transition"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {t("nav.support")}
                </a>
                <div className="pt-4 px-4 space-y-2">
                  <div className="flex justify-start pb-1">
                    <LanguageSwitcher />
                  </div>
                  <Link
                    href="https://signup.taskeyapp.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full px-4 py-3 text-center text-white/80 hover:bg-white/5 hover:text-white rounded-lg transition font-medium border border-white/15"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Login
                  </Link>
                  <Link
                    href="https://signup.taskeyapp.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full px-4 py-3 text-center bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white rounded-lg transition font-semibold shadow-lg shadow-cyan-500/20"
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
