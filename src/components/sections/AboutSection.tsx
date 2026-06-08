import { Globe, Code, GraduationCap, Info, Languages, Workflow, Database } from "lucide-react";
import type { PortfolioData } from "@/data/portfolio";

type AboutSectionProps = {
  data: PortfolioData;
};

export function AboutSection({ data }: AboutSectionProps) {
  const { about } = data;

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "school": return <GraduationCap className="text-primary w-5 h-5" />;
      case "public": return <Globe className="text-primary w-5 h-5" />;
      case "code": return <Code className="text-primary w-5 h-5" />;
      case "language": return <Languages className="text-primary w-5 h-5" />;
      case "workflow": return <Workflow className="text-primary w-5 h-5" />;
      case "database": return <Database className="text-primary w-5 h-5" />;
      default: return null;
    }
  };

  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-[1120px] mx-auto grid md:grid-cols-12 gap-12">
        <div className="md:col-span-8">
          <h2 className="text-3xl font-semibold mb-6 text-primary flex items-center gap-3">
            <Info className="w-8 h-8" /> {about.title}
          </h2>
          <div className="text-[17px] text-text-secondary space-y-6 leading-relaxed">
            {about.paragraphs.map((p, idx) => (
              <p key={idx}>{p}</p>
            ))}
          </div>
        </div>
        
        <div className="md:col-span-4">
          <div className="glass-card rounded-xl p-6 h-full">
            <h3 className="text-2xl font-semibold mb-4 text-text-primary border-b border-border pb-2">
              {about.quickFactsTitle}
            </h3>
            <ul className="space-y-4 text-[16px] text-text-secondary">
              {about.quickFacts.map((fact, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  {getIcon(fact.icon)} {fact.label}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
