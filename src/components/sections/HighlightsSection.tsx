import type { PortfolioData } from "@/data/portfolio";

type HighlightsSectionProps = {
  data: PortfolioData;
};

export function HighlightsSection({ data }: HighlightsSectionProps) {
  const { highlights, highlightsSection } = data;

  return (
    <section id="highlights" className="py-24 px-6 bg-background">
      <div className="max-w-[1120px] mx-auto">
        <h2 className="text-3xl font-semibold mb-12 text-center text-text-primary">
          {highlightsSection.title}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, idx) => (
            <div key={idx} className="glass-card rounded-xl p-6 flex flex-col items-start text-left h-full group">
              <div className="flex items-center gap-3 mb-4">
                <item.icon className="text-primary w-6 h-6" />
                <h3 className="text-lg font-semibold text-text-primary group-hover:text-primary transition-colors">{item.title}</h3>
              </div>
              <p className="text-[15px] text-text-secondary leading-relaxed mb-6 flex-grow">{item.description}</p>
              {item.keywords && item.keywords.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-auto">
                  {item.keywords.map((kw, i) => (
                    <span key={i} className="text-xs font-mono px-2 py-1 bg-surface-elevated text-text-muted rounded border border-border">
                      {kw}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
