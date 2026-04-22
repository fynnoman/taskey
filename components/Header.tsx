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

  return (
    <>
      {/* Global USP Top-Strip — auf jeder Seite sichtbar */}
      <div className="bg-gradient-to-r from-blue-950 via-blue-900 to-gray-900 text-white text-xs sm:text-sm relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-8 sm:h-9 flex items-center justify-center gap-2 sm:gap-3">
          <span className="relative flex h-2 w-2 flex-shrink-0">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400" />
          </span>
          <span className="font-bold text-center leading-tight">
            <span className="hidden sm:inline text-[10px] sm:text-[11px] tracking-[0.2em] text-cyan-300 uppercase mr-2">Taskey-USP</span>
            Beste Echtzeit-Kommunikation zwischen{" "}
            <span className="text-cyan-300">Einsatzort</span> und{" "}
            <span className="text-cyan-300">Büro</span>
          </span>
          <Link
            href="/#echtzeit-kommunikation"
            className="hidden md:inline-flex items-center gap-1 text-cyan-300 hover:text-cyan-200 font-semibold ml-2"
          >
            Mehr
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" /></svg>
          </Link>
        </div>
      </div>

      <header className="bg-white/70 backdrop-blur-xl border-b border-gray-200/50 sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Hauptnavigation">
        <div className="flex justify-between items-center h-16 sm:h-20">
          <Link href="/" className="flex items-center gap-2.5" aria-label="Taskey Startseite">
            <Image 
              src="/logobittt.png" 
              alt="Taskey Logo - Reinigungssoftware" 
              width={40}
              height={40}
              className="h-9 w-9"
              priority
              sizes="40px"
            />
            <span className="text-xl font-bold text-gray-900">TASKEY</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-10">
            <Link
              href="/features"
              className={`transition font-medium ${pathname === '/features' ? 'text-blue-900 font-bold' : 'text-gray-600 hover:text-gray-900'}`}
            >
              {t("nav.features")}
            </Link>
            <Link
              href="/pricing"
              className={`transition font-medium ${pathname === '/pricing' ? 'text-blue-900 font-bold' : 'text-gray-600 hover:text-gray-900'}`}
            >
              {t("nav.pricing")}
            </Link>
            <Link
              href="/news"
              className={`transition font-medium ${pathname === '/news' ? 'text-blue-900 font-bold' : 'text-gray-600 hover:text-gray-900'}`}
            >
              News
            </Link>
            <Link
              href="/partnerschaften"
              className={`transition font-medium ${pathname === '/partnerschaften' ? 'text-blue-900 font-bold' : 'text-gray-600 hover:text-gray-900'}`}
            >
              Partner werden
            </Link>
            <Link
              href="/about"
              className={`transition font-medium ${pathname === '/about' ? 'text-blue-900 font-bold' : 'text-gray-600 hover:text-gray-900'}`}
            >
              {t("nav.about")}
            </Link>
            <a
              href="https://taskey.vars-development.com/support"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 transition font-medium"
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
              className="px-5 py-2.5 bg-blue-900 text-white rounded-lg hover:bg-blue-800 transition font-medium shadow-sm"
            >
              {t("nav.tryFree")}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-gray-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Menü öffnen"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-gray-200/50 py-4 bg-white/90 backdrop-blur-xl">
            <div className="flex flex-col space-y-1">
              <Link
                href="/features"
                className={`px-4 py-3 rounded-lg transition ${pathname === '/features' ? 'text-blue-900 bg-blue-50 font-bold' : 'text-gray-700 hover:bg-gray-50'}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {t("nav.features")}
              </Link>
              <Link
                href="/pricing"
                className={`px-4 py-3 rounded-lg transition ${pathname === '/pricing' ? 'text-blue-900 bg-blue-50 font-bold' : 'text-gray-700 hover:bg-gray-50'}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {t("nav.pricing")}
              </Link>
              <Link
                href="/news"
                className={`px-4 py-3 rounded-lg transition ${pathname === '/news' ? 'text-blue-900 bg-blue-50 font-bold' : 'text-gray-700 hover:bg-gray-50'}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                News
              </Link>
              <Link
                href="/partnerschaften"
                className={`px-4 py-3 rounded-lg transition ${pathname === '/partnerschaften' ? 'text-blue-900 bg-blue-50 font-bold' : 'text-gray-700 hover:bg-gray-50'}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Partner werden
              </Link>
              <Link
                href="/about"
                className={`px-4 py-3 rounded-lg transition ${pathname === '/about' ? 'text-blue-900 bg-blue-50 font-bold' : 'text-gray-700 hover:bg-gray-50'}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {t("nav.about")}
              </Link>
              <a
                href="https://taskey.vars-development.com/support"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-lg transition"
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
                  className="block w-full px-4 py-3 text-center bg-blue-900 text-white rounded-lg hover:bg-blue-800 transition font-medium"
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
