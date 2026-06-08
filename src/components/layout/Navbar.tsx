import Link from "next/link";
import { Terminal } from "lucide-react";
import type { Language, PortfolioData } from "@/data/portfolio";

type NavbarProps = {
  data: PortfolioData;
  language: Language;
  onLanguageChange: (nextLanguage: Language | ((current: Language) => Language)) => void;
};

export function Navbar({ data, language, onLanguageChange }: NavbarProps) {
  const isSpanish = language === "es";

  return (
    <header className="bg-surface/80 dark:bg-surface/80 backdrop-blur-lg fixed top-0 w-full z-50 border-b border-border">
      <div className="max-w-[1120px] mx-auto flex justify-between items-center gap-3 px-6 py-4">
        <Link href="/" className="flex min-w-0 items-center gap-2 text-xl sm:text-2xl font-bold text-text-primary tracking-tight">
          <Terminal className="text-primary w-7 h-7 shrink-0" />
          <span className="truncate">{data.hero.name}</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-base">
          <Link href="#about" className="text-text-secondary hover:text-text-primary transition-colors duration-300">{data.nav.about}</Link>
          <Link href="#projects" className="text-text-secondary hover:text-text-primary transition-colors duration-300">{data.nav.projects}</Link>
          <Link href="#skills" className="text-text-secondary hover:text-text-primary transition-colors duration-300">{data.nav.skills}</Link>
          <Link href="#experience" className="text-text-secondary hover:text-text-primary transition-colors duration-300">{data.nav.experience}</Link>
        </nav>
        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          <div
            aria-label={data.languageToggle.label}
            className="inline-flex rounded-full border border-border bg-surface-elevated p-1 font-mono text-xs font-semibold"
            role="group"
          >
            <button
              type="button"
              aria-pressed={!isSpanish}
              onClick={() => onLanguageChange("en")}
              className={`inline-flex h-7 min-w-8 items-center justify-center rounded-full px-2 transition-colors ${
                !isSpanish ? "bg-primary text-background" : "text-text-muted hover:text-text-primary"
              }`}
            >
              {data.languageToggle.english}
            </button>
            <button
              type="button"
              aria-pressed={isSpanish}
              onClick={() => onLanguageChange("es")}
              className={`inline-flex h-7 min-w-8 items-center justify-center rounded-full px-2 transition-colors ${
                isSpanish ? "bg-primary text-background" : "text-text-muted hover:text-text-primary"
              }`}
            >
              {data.languageToggle.spanish}
            </button>
          </div>
          <a
            href="#contact"
            className="text-sm sm:text-base bg-primary text-background px-3 sm:px-4 py-2 rounded-md hover:bg-primary-hover active:scale-95 transition-all duration-200 font-medium"
          >
            {data.nav.contact}
          </a>
        </div>
      </div>
    </header>
  );
}
