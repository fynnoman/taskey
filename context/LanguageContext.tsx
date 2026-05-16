"use client";

import { createContext, useContext, useState, useEffect, ReactNode, useCallback } from "react";
import de from "./translations/de";

export type Language = "de" | "en" | "fr";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

type Translations = Record<string, string>;

const cache: Partial<Record<Language, Translations>> = { de };

async function loadTranslations(lang: Language): Promise<Translations> {
  if (cache[lang]) return cache[lang]!;
  const mod = await import(`./translations/${lang}`);
  cache[lang] = mod.default;
  return mod.default;
}

const LanguageContext = createContext<LanguageContextType>({
  language: "de",
  setLanguage: () => {},
  t: (key) => key,
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("taskey-language") as Language | null;
      if (saved && ["de", "en", "fr"].includes(saved)) return saved;
    }
    return "de";
  });

  const [translations, setTranslations] = useState<Translations>(de);

  useEffect(() => {
    document.documentElement.lang = language;
    loadTranslations(language).then(setTranslations);
  }, [language]);

  const setLanguage = useCallback((lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("taskey-language", lang);
  }, []);

  const t = useCallback(
    (key: string): string => translations[key] ?? de[key] ?? key,
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
