import { AboutSection } from '@/components/sections/AboutSection';
import { AcademicSection } from '@/components/sections/AcademicSection';
import { CapabilitiesSection } from '@/components/sections/CapabilitiesSection';
import { ContactSection } from '@/components/sections/ContactSection';
import { ExperienceSection } from '@/components/sections/ExperienceSection';
import { HeroSection } from '@/components/sections/HeroSection';
import { ProjectsSection } from '@/components/sections/ProjectsSection';
import { getPortfolioContent, type Language } from '@/data/portfolio';

export function PortfolioShell({ language }: { language: Language }) {
  const data = getPortfolioContent(language);

  return (
    <>
      <HeroSection data={data} />
      <ProjectsSection data={data} language={language} />
      <CapabilitiesSection data={data} />
      <ExperienceSection data={data} />
      <AboutSection data={data} />
      <AcademicSection data={data} />
      <ContactSection data={data} />
    </>
  );
}
