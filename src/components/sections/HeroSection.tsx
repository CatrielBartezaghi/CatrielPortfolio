import Image from "next/image";
import { ArrowRight } from "lucide-react";
import type { PortfolioData } from "@/data/portfolio";

type HeroSectionProps = {
  data: PortfolioData;
};

type HeroTagsProps = {
  tags: PortfolioData["hero"]["tags"];
  className: string;
};

function HeroTags({ tags, className }: HeroTagsProps) {
  return (
    <div className={className}>
      {tags.map((tag, idx) => (
        <span
          key={idx}
          className={
            tag.type === "primary"
              ? "bg-primary-soft text-primary font-mono text-sm px-3 py-1 rounded-full border border-primary/20"
              : "bg-secondary-soft text-secondary font-mono text-sm px-3 py-1 rounded-full border border-secondary/20"
          }
        >
          {tag.label}
        </span>
      ))}
    </div>
  );
}

export function HeroSection({ data }: HeroSectionProps) {
  const { hero } = data;

  return (
    <section className="hero-gradient pt-28 pb-16 px-6 relative overflow-hidden">
      <div className="max-w-[1280px] mx-auto grid md:grid-cols-2 lg:grid-cols-[3fr_2fr] gap-12 lg:gap-16 items-start">
        <div className="z-10">
          <HeroTags tags={hero.tags} className="mb-5 flex flex-wrap gap-2 md:hidden" />
          <h1 className="text-5xl lg:text-6xl font-bold mb-5 max-w-[760px] text-text-primary tracking-tight leading-tight">
            {hero.headline}
          </h1>
          <p className="text-xl text-text-secondary mb-6 max-w-2xl leading-relaxed">
            {hero.subtitle}
          </p>
          <p className="text-lg text-text-muted mb-8 max-w-2xl leading-relaxed">
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

        <div className="hidden md:flex relative z-10 flex-col items-center pt-8">
          <div className="relative aspect-square w-full max-w-[420px] grid place-items-center">
            <div
              aria-hidden="true"
              className="absolute inset-[4%] rounded-full bg-[radial-gradient(circle_at_50%_35%,rgba(56,189,248,0.22),rgba(167,139,250,0.08)_55%,transparent_72%)] blur-2xl"
            />
            <div aria-hidden="true" className="absolute inset-[3%] rounded-full border border-primary/15" />
            <div aria-hidden="true" className="absolute inset-[9%] rounded-full border border-secondary/20" />
            <div className="relative w-[84%] aspect-square overflow-hidden rounded-full border-2 border-primary/30 bg-surface-elevated shadow-[0_20px_60px_rgba(56,189,248,0.18)]">
              <Image
                src="/me.jfif"
                alt={hero.imageAlt}
                fill
                priority
                sizes="(min-width: 1024px) 352px, (min-width: 768px) 310px, 0px"
                className="object-cover"
              />
            </div>
          </div>
          <HeroTags tags={hero.tags} className="mt-6 flex max-w-[440px] flex-wrap justify-center gap-2" />
        </div>
      </div>
    </section>
  );
}
