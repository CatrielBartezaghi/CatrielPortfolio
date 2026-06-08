import { ServerCog, DatabaseZap, Bot, ShieldCheck } from "lucide-react";
import type { PortfolioData } from "@/data/portfolio";

type ExpertiseSectionProps = {
  data: PortfolioData;
};

export function ExpertiseSection({ data }: ExpertiseSectionProps) {
  const { expertise, expertiseSection } = data;

  const iconClassName = "text-primary w-5 h-5";

  const getIcon = (icon: PortfolioData["expertise"][number]["icon"]) => {
    switch (icon) {
      case "business": return <ServerCog className={iconClassName} />;
      case "data": return <DatabaseZap className={iconClassName} />;
      case "automation": return <Bot className={iconClassName} />;
      case "reliability": return <ShieldCheck className={iconClassName} />;
      default: return null;
    }
  };

  if (!expertise || expertise.length === 0) return null;

  return (
    <section className="py-16 px-6 bg-surface-container-highest/20 border-t border-border">
      <div className="max-w-[1120px] mx-auto">
        <h2 className="text-xl font-semibold mb-6 text-center text-text-primary">
          {expertiseSection.title}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {expertise.map((item, idx) => (
            <div key={idx} className="glass-card rounded-lg p-4 flex flex-col items-start text-left group">
              <div className="flex items-center gap-2.5 mb-2">
                {getIcon(item.icon)}
                <h3 className="text-[16px] font-semibold text-text-primary group-hover:text-primary transition-colors">{item.title}</h3>
              </div>
              <p className="text-[15px] text-text-secondary leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
