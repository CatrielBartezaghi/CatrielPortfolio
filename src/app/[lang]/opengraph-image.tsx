import { ImageResponse } from 'next/og';
import { getPortfolioContent, isLanguage } from '@/data/portfolio';

export const alt = 'Catriel Bartezaghi - Backend-focused Software Engineer';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function OpenGraphImage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const data = getPortfolioContent(isLanguage(lang) ? lang : 'en');

  return new ImageResponse(
    <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '72px', background: '#0b1020', color: '#f8fafc' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '20px', fontSize: 30, fontWeight: 700 }}>
        <div style={{ display: 'flex', width: 58, height: 58, alignItems: 'center', justifyContent: 'center', border: '1px solid #38bdf8', borderRadius: 14, color: '#38bdf8' }}>CB</div>
        {data.hero.name}
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
        <div style={{ fontSize: 24, letterSpacing: 2, textTransform: 'uppercase', color: '#38bdf8' }}>{data.hero.eyebrow}</div>
        <div style={{ maxWidth: 980, fontSize: 68, lineHeight: 1.05, fontWeight: 750, letterSpacing: -2 }}>{data.hero.headline}</div>
        <div style={{ fontSize: 26, color: '#cbd5e1' }}>{data.hero.proofPoints.join('  ·  ')}</div>
      </div>
    </div>,
    size,
  );
}
