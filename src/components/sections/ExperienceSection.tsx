import { cn } from "@/lib/utils";
import type { PortfolioData } from "@/data/portfolio";

type ExperienceSectionProps = {
  data: PortfolioData;
};

export function ExperienceSection({ data }: ExperienceSectionProps) {
  const { experience, experienceSection } = data;

  const renderJobCard = (job: PortfolioData["experience"][number]) => (
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
            <span className="text-primary mt-1.5">&bull;</span>
            <span>{bullet}</span>
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <section id="experience" className="py-24 px-6 bg-surface-container-highest/30 border-y border-border">
      <div className="max-w-[800px] mx-auto">
        <h2 className="text-3xl font-semibold mb-12 text-center text-text-primary">
          {experienceSection.title}
        </h2>

        <div className="relative space-y-12 before:absolute before:left-2 before:top-1.5 before:bottom-0 before:w-px before:bg-border md:hidden">
          {experience.map((job, idx) => (
            <div key={idx} className="grid grid-cols-[1rem_1fr] gap-x-5 items-start group">
              <div className={cn(
                "relative z-10 mt-1.5 h-4 w-4 rounded-full bg-background border-2 transition-colors",
                job.current ? "border-primary" : "border-border group-hover:border-primary/50"
              )}></div>
              <div className="min-w-0">
                <div className="mb-2">
                  <span className={cn("font-mono text-sm", job.current ? "text-primary" : "text-text-muted")}>
                    {job.year}
                  </span>
                </div>
                {renderJobCard(job)}
              </div>
            </div>
          ))}
        </div>

        <div className="relative hidden space-y-12 md:block">
          {experience.map((job, idx) => (
            <div key={idx} className="relative grid grid-cols-5 items-start group">
              <div className="col-span-1 text-right pr-8 pt-1">
                <span className={cn("font-mono text-sm", job.current ? "text-primary" : "text-text-muted")}>
                  {job.year}
                </span>
              </div>

              <div className={cn(
                "absolute left-[20%] -ml-2 top-1.5 w-4 h-4 rounded-full bg-background border-2 z-10 transition-colors",
                job.current ? "border-primary" : "border-border group-hover:border-primary/50"
              )}></div>

              <div className="col-span-4 pl-8 border-l border-border h-full pb-8 last:pb-0">
                {renderJobCard(job)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
