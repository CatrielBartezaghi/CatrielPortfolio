import Link from "next/link";
import type { PortfolioData } from "@/data/portfolio";

type FooterProps = {
  data: PortfolioData;
};

export function Footer({ data }: FooterProps) {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-background mt-24 border-t border-border">
      <div className="max-w-[1120px] mx-auto px-6 py-12 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-sm font-mono text-primary opacity-80 hover:opacity-100 transition-opacity">
          © {currentYear} {data.hero.name}. {data.footer.phrase}
        </div>
        <nav className="flex gap-6 text-sm">
          <Link href={data.contact.links.github} className="text-text-muted hover:text-primary transition-colors">
            GitHub
          </Link>
          <Link href={data.contact.links.linkedin} className="text-text-muted hover:text-primary transition-colors">
            LinkedIn
          </Link>
          <a href={`mailto:${data.contact.email}`} className="text-text-muted hover:text-primary transition-colors">
            {data.footer.emailLabel}
          </a>
        </nav>
      </div>
    </footer>
  );
}
