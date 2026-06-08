import { cn } from "@/lib/utils";
import type { PortfolioData } from "@/data/portfolio";

type SkillsSectionProps = {
  data: PortfolioData;
};

export function SkillsSection({ data }: SkillsSectionProps) {
  const { skills, skillsSection } = data;

  return (
    <section id="skills" className="py-24 px-6 bg-surface-container-highest/50 border-y border-border">
      <div className="max-w-[1120px] mx-auto">
        <h2 className="text-3xl font-semibold mb-12 text-center text-text-primary">
          {skillsSection.title}
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skillGroup, idx) => (
            <div key={idx} className="glass-card rounded-xl p-6 transition-all">
              <h3 className={cn("text-2xl font-semibold mb-4 flex items-center gap-2 border-b border-border pb-2", skillGroup.colorClass)}>
                <skillGroup.icon className="w-6 h-6" /> {skillGroup.title}
              </h3>
              <ul className="space-y-2 text-[16px] text-text-secondary">
                {skillGroup.items.map((item, itemIdx) => (
                  <li key={itemIdx} className="flex items-center gap-2">
                    <span className={cn("w-1.5 h-1.5 rounded-full", skillGroup.bgClass)}></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
