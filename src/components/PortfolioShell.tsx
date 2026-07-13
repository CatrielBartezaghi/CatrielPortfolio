"use client";

import { useEffect, useSyncExternalStore } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { portfolioContent, type Language } from "@/data/portfolio";

const LANGUAGE_STORAGE_KEY = "portfolio-language";
const LANGUAGE_CHANGE_EVENT = "portfolio-language-change";

function getStoredLanguage(): Language {
  if (typeof window === "undefined") {
    return "en";
  }

  const storedLanguage = window.localStorage.getItem(LANGUAGE_STORAGE_KEY);

  if (storedLanguage === "en" || storedLanguage === "es") {
    return storedLanguage;
  }

  return window.navigator.language.toLowerCase().startsWith("es") ? "es" : "en";
}

function getServerLanguage(): Language {
  return "en";
}

function subscribeToLanguageChanges(onStoreChange: () => void) {
  window.addEventListener("storage", onStoreChange);
  window.addEventListener(LANGUAGE_CHANGE_EVENT, onStoreChange);

  return () => {
    window.removeEventListener("storage", onStoreChange);
    window.removeEventListener(LANGUAGE_CHANGE_EVENT, onStoreChange);
  };
}

function setStoredLanguage(nextLanguage: Language | ((current: Language) => Language)) {
  const resolvedLanguage =
    typeof nextLanguage === "function" ? nextLanguage(getStoredLanguage()) : nextLanguage;

  window.localStorage.setItem(LANGUAGE_STORAGE_KEY, resolvedLanguage);
  window.dispatchEvent(new Event(LANGUAGE_CHANGE_EVENT));
}

export function PortfolioShell() {
  const language = useSyncExternalStore<Language>(
    subscribeToLanguageChanges,
    getStoredLanguage,
    getServerLanguage,
  );
  const data = portfolioContent[language];

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  return (
    <>
      <Navbar data={data} language={language} onLanguageChange={setStoredLanguage} />
      <main className="flex-grow">
        <HeroSection data={data} />
        <AboutSection data={data} />
        <ProjectsSection data={data} />
        <SkillsSection data={data} />
        <ExperienceSection data={data} />
        <ContactSection data={data} />
      </main>
      <Footer data={data} />
    </>
  );
}
