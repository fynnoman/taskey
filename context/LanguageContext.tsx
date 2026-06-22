"use client";

import { createContext, useContext, useState, useEffect, ReactNode, useCallback } from "react";
import { useRouter, usePathname, useParams } from "next/navigation";
import de from "./translations/de";
import en from "./translations/en";
import fr from "./translations/fr";

export type Language = "de" | "en" | "fr";

const SUPPORTED: Language[] = ["de", "en", "fr"];
const DEFAULT_LOCALE: Language = "de";

/**
 * Production home for each language.
 *   de + en → taskeyapp.com  (de at root, en under /en)
 *   fr      → taskeyapp.fr    (fr at root)
 * Used by the language switcher to jump to the right domain. Only kicks in on
 * the real taskeyapp hosts — locally/preview everything stays on one origin.
 */
const LOCALE_SITES: Record<Language, { origin: string; prefix: string }> = {
  de: { origin: "https://taskeyapp.com", prefix: "" },
  en: { origin: "https://taskeyapp.com", prefix: "/en" },
  fr: { origin: "https://taskeyapp.fr", prefix: "" },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

type Translations = Record<string, string>;

// All bundles statically imported so server-side rendering picks the right
// strings on the very first render (no async hydration flash).
const BUNDLES: Record<Language, Translations> = { de, en, fr };

/**
 * Strip a leading locale segment from a pathname.
 *   "/en/features" → "/features"
 *   "/fr"          → "/"
 *   "/features"    → "/features"   (no prefix means default locale)
 */
function stripLocalePrefix(path: string): string {
  const segments = path.split("/").filter(Boolean);
  if (segments.length > 0 && SUPPORTED.includes(segments[0] as Language)) {
    const rest = segments.slice(1).join("/");
    return rest ? `/${rest}` : "/";
  }
  return path || "/";
}

/**
 * Build a path under the given locale.
 *   buildLocalePath("/features", "en") → "/en/features"
 *   buildLocalePath("/features", "de") → "/features"
 *   buildLocalePath("/", "fr")         → "/fr"
 */
function buildLocalePath(strippedPath: string, locale: Language): string {
  if (locale === DEFAULT_LOCALE) {
    return strippedPath === "/" ? "/" : strippedPath;
  }
  return strippedPath === "/" ? `/${locale}` : `/${locale}${strippedPath}`;
}

const LanguageContext = createContext<LanguageContextType>({
  language: DEFAULT_LOCALE,
  setLanguage: () => {},
  t: (key) => key,
});

export function LanguageProvider({
  children,
  initialLanguage,
}: {
  children: ReactNode;
  initialLanguage?: Language;
}) {
  // initialLanguage comes from the server (layout reads [locale] param).
  // We trust it as the source of truth and ignore localStorage.
  const params = useParams();
  const paramLocale = (params?.locale as Language | undefined);
  const router = useRouter();
  const pathname = usePathname();

  const seedLanguage: Language =
    (SUPPORTED.includes(paramLocale as Language) && (paramLocale as Language)) ||
    (initialLanguage && SUPPORTED.includes(initialLanguage) ? initialLanguage : DEFAULT_LOCALE);

  const [language, setLanguageState] = useState<Language>(seedLanguage);
  const translations = BUNDLES[language];

  // Keep context in sync if the URL locale changes between renders
  // (e.g. user navigates via LanguageSwitcher).
  useEffect(() => {
    if (paramLocale && SUPPORTED.includes(paramLocale) && paramLocale !== language) {
      setLanguageState(paramLocale);
    }
  }, [paramLocale, language]);

  // Mirror language to <html lang> on the client side as a defence-in-depth
  // measure (root layout already sets it from x-locale header on SSR).
  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.lang = language;
    }
  }, [language]);

  const setLanguage = useCallback(
    (lang: Language) => {
      if (!SUPPORTED.includes(lang) || lang === language) return;
      const bare = stripLocalePrefix(pathname || "/");

      // On the live taskeyapp domains each language family has its own home:
      // de+en on .com, fr on .fr. Crossing that boundary needs a real
      // cross-domain navigation; staying on the same domain keeps SPA routing.
      const host = typeof window !== "undefined" ? window.location.hostname : "";
      const onProdDomain =
        host.endsWith("taskeyapp.com") || host.endsWith("taskeyapp.fr");

      if (onProdDomain) {
        const target = LOCALE_SITES[lang];
        const targetPath = `${target.prefix}${bare === "/" ? "" : bare}` || "/";
        const onFrDomain = host.endsWith("taskeyapp.fr");
        const crossDomain = (lang === "fr") !== onFrDomain;

        if (crossDomain) {
          window.location.assign(`${target.origin}${targetPath}`);
        } else {
          router.push(targetPath);
        }
        return;
      }

      // Local dev / preview: single origin → keep the /en /fr prefix scheme.
      router.push(buildLocalePath(bare, lang));
    },
    [language, pathname, router]
  );

  const t = useCallback(
    (key: string): string => translations[key] ?? BUNDLES.de[key] ?? key,
    [translations]
  );

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
