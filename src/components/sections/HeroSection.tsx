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
          <div className="glass-card rounded-xl p-6 aspect-square max-w-md ml-auto relative group">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-secondary/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            {/* Using the abstract image from the design export */}
            <div className="relative w-full h-full">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCoAfD31FaeU2uVFcv_SPv3IRHZjIZnHrCUBmMcAQQXu8StWZMKpqx_b9OD-_KEuF5A75G6C8HqoQotTuhZygUZ872YJk7KAHKVK0d-vnn54qHOFy93Oq09xnuZh-gExY3aQvObfNsprecyK6ZyodkAu7HN0TA-dWLLZ8nCi5Po-TAQv9BWoIIRAEt3wbLydAw9Y1jF5epKbTL-qZveSTVIusACKyjc2UjxDl5xPvLjY-6YwLC28VAup0MIDSGW2oQcowfdBljnddg"
                alt={hero.imageAlt}
                fill
                unoptimized
                sizes="(min-width: 768px) 448px, 0px"
                className="object-cover rounded-lg opacity-80 filter grayscale mix-blend-luminosity group-hover:filter-none group-hover:mix-blend-normal transition-all duration-700"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
