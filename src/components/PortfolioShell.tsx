import { CinematicHome } from '@/components/CinematicHome';
import { getPortfolioContent, type Language } from '@/data/portfolio';

export function PortfolioShell({ language }: { language: Language }) {
  return <CinematicHome language={language} data={getPortfolioContent(language)} />;
}
