import Image from "next/image";
import { ArrowRight } from "lucide-react";
import type { PortfolioData } from "@/data/portfolio";

type HeroSectionProps = {
  data: PortfolioData;
};

export function HeroSection({ data }: HeroSectionProps) {
  const { hero } = data;

  return (
    <section className="hero-gradient pt-32 pb-24 px-6 relative overflow-hidden">
      <div className="max-w-[1120px] mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="z-10">
          <div className="flex flex-wrap gap-2 mb-6">
            {hero.tags.map((tag, idx) => {
              if (tag.type === "primary") {
                return (
                  <span key={idx} className="bg-primary-soft text-primary font-mono text-sm px-3 py-1 rounded-full border border-primary/20">
                    {tag.label}
                  </span>
                );
              }
              if (tag.type === "secondary") {
                return (
                  <span key={idx} className="bg-secondary-soft text-secondary font-mono text-sm px-3 py-1 rounded-full border border-secondary/20">
                    {tag.label}
                  </span>
                );
              }
              return (
                <span key={idx} className="bg-surface-elevated text-text-secondary font-mono text-sm px-3 py-1 rounded-full border border-border flex items-center gap-1">
                  {tag.label}
                </span>
              );
            })}
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-text-primary tracking-tight leading-tight">
            {hero.headline}
          </h1>
          <p className="text-xl text-text-secondary mb-6 max-w-2xl leading-relaxed">
            {hero.subtitle}
          </p>
          <p className="text-lg text-text-muted mb-10 max-w-2xl leading-relaxed">
            {hero.supportingText}
          </p>
          <div className="flex flex-wrap gap-4">
            <a 
              href="#projects"
              className="bg-primary text-background font-medium px-6 py-3 rounded-md hover:bg-primary-hover transition-all flex items-center gap-2"
            >
              {data.actions.viewProjects} <ArrowRight className="w-5 h-5" />
            </a>
            <a 
              href={data.contact.links.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-surface-elevated border border-border text-text-primary font-medium px-6 py-3 rounded-md hover:border-primary hover:text-primary transition-all"
            >
              {data.actions.downloadResume}
            </a>
          </div>
        </div>
        
        <div className="hidden md:block relative z-10">
          <div className="glass-card rounded-2xl p-1.5 aspect-square max-w-[460px] ml-auto relative overflow-hidden shadow-[0_16px_40px_rgba(56,189,248,0.05)] opacity-95">
            <div className="relative w-full h-full overflow-hidden rounded-xl">
              <Image
                src="/image-header.png"
                alt={hero.imageAlt}
                fill
                priority
                unoptimized
                sizes="(min-width: 1024px) 496px, (min-width: 768px) 448px, 0px"
                className="object-cover brightness-75 saturate-90"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
