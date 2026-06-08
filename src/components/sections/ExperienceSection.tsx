import { cn } from "@/lib/utils";
import type { PortfolioData } from "@/data/portfolio";

type ExperienceSectionProps = {
  data: PortfolioData;
};

export function ExperienceSection({ data }: ExperienceSectionProps) {
  const { experience, experienceSection } = data;

  return (
    <section id="experience" className="py-24 px-6 bg-surface-container-highest/30 border-y border-border">
      <div className="max-w-[800px] mx-auto">
        <h2 className="text-3xl font-semibold mb-12 text-center text-text-primary">
          {experienceSection.title}
        </h2>
        
        <div className="relative border-l border-border ml-4 md:ml-0 md:border-none space-y-12">
          {experience.map((job, idx) => (
            <div key={idx} className="relative md:grid md:grid-cols-5 items-start pl-6 md:pl-0 group">
              <div className="hidden md:block md:col-span-1 text-right pr-8 pt-1">
                <span className={cn("font-mono text-sm", job.current ? "text-primary" : "text-text-muted")}>
                  {job.year}
                </span>
              </div>
              
              <div className={cn(
                "absolute left-0 top-1.5 md:left-[20%] md:-ml-2 w-4 h-4 rounded-full bg-background border-2 z-10 transition-colors",
                job.current ? "border-primary" : "border-border group-hover:border-primary/50"
              )}></div>
              
              <div className="md:hidden mb-2 -ml-2">
                <span className={cn("font-mono text-sm", job.current ? "text-primary" : "text-text-muted")}>
                  {job.year}
                </span>
              </div>
              
              <div className="md:col-span-4 md:pl-8 md:border-l border-border h-full pb-8 last:pb-0">
                <div className="glass-card rounded-xl p-6 transition-all group-hover:-translate-y-1 group-hover:border-primary/30">
                  <h3 className="text-2xl font-semibold text-text-primary mb-1">
                    {job.role}
                  </h3>
                  <h4 className="text-lg text-secondary mb-4">
                    {job.company}
                  </h4>
                  <ul className="space-y-3">
                    {job.bullets.map((bullet, i) => (
                      <li key={i} className="text-[16px] text-text-secondary leading-relaxed flex items-start gap-3">
                        <span className="text-primary mt-1.5">•</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
