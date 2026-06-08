import { ArrowUpRight, FileText } from "lucide-react";
import type { PortfolioData } from "@/data/portfolio";

type ProjectsSectionProps = {
  data: PortfolioData;
};

export function ProjectsSection({ data }: ProjectsSectionProps) {
  const { projects, projectsSection } = data;

  return (
    <section id="projects" className="relative overflow-hidden py-24 px-6">
      <div className="max-w-[1120px] mx-auto">
        <div className="mb-12 max-w-2xl">
          <span className="mb-2 block font-mono text-sm font-medium uppercase tracking-widest text-primary">
            {projectsSection.eyebrow}
          </span>
          <h2 className="mb-4 bg-gradient-to-br from-text-primary to-primary bg-clip-text text-4xl font-bold tracking-tight text-transparent md:text-5xl">
            {projectsSection.title}
          </h2>
          <p className="text-lg leading-relaxed text-text-secondary">
            {projectsSection.description}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {projects.map((project, idx) => (
            <article
              key={idx}
              className="glass-card group flex h-full flex-col overflow-hidden rounded-xl p-6 transition-all hover:-translate-y-1 md:p-8"
            >
              <div className="mb-6 flex items-start justify-between gap-4">
                <div>
                  <span className="mb-3 inline-flex rounded-full border border-border bg-background/60 px-3 py-1 font-mono text-xs font-medium uppercase tracking-wider text-text-primary">
                    {project.badge}
                  </span>
                  <p className="mb-1 font-mono text-xs font-medium uppercase tracking-wider text-primary">
                    {project.type}
                  </p>
                  <h3 className="text-2xl font-semibold text-text-primary transition-colors group-hover:text-primary">
                    {project.title}
                  </h3>
                </div>
              </div>

              <p className="mb-6 text-base leading-relaxed text-text-secondary">
                {project.description}
              </p>

              {project.focus && project.focus.length > 0 && (
                <div className="mb-6 flex-grow">
                  <p className="mb-3 text-sm font-semibold text-text-primary">
                    {projectsSection.focusLabel}:
                  </p>
                  <ul className="space-y-1">
                    {project.focus.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-sm leading-relaxed text-text-secondary"
                      >
                        <span className="text-primary mt-1">&bull;</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="mb-8 mt-auto flex flex-wrap gap-2">
                {project.tags.map((tag, tagIdx) => (
                  <span
                    key={tagIdx}
                    className="rounded border border-border bg-surface-elevated px-2 py-1 font-mono text-xs text-text-secondary"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <a
                href={project.link.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex w-fit items-center gap-2 font-semibold text-primary transition-colors hover:text-primary-hover"
              >
                {project.link.label}
                {project.link.kind === "document" ? (
                  <FileText className="h-4 w-4" />
                ) : (
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                )}
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
