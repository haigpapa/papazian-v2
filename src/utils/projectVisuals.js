import { DOMAIN_META } from '../data/siteContent';

function withBasePath(path) {
  const normalizedPath = path.replace(/^\/+/, '');
  return `${import.meta.env.BASE_URL}${normalizedPath}`;
}

const IMAGE_MAP = {
  derive: withBasePath('/images/portfolio-derive.jpeg'),
  'space-time-tuning-machine': withBasePath('/images/66a173aa-7fb2-4c00-8a74-09b2e01b9e18_1_105_c.jpeg'),
  storylines: withBasePath('/images/portfolio-storylines.jpeg'),
  'mashrou-leila': withBasePath('/images/mashrou_leila_baalbeck_image-1024x682.jpg'),
  '3d-beat-synth': withBasePath('/images/portfolio-3dbeats.jpeg'),
  'photon-plus': withBasePath('/images/portfolio-photon.jpeg'),
  'music-engines': withBasePath('/images/portfolio-engine.jpeg'),
  'hah-was': withBasePath('/images/portfolio-tracks.jpeg'),
  'resonance-atlas': withBasePath('/images/portfolio-tracks.jpeg'),
  'sometimes-i-wake-up-elsewhere': withBasePath('/images/portfolio-mobius.jpeg'),
  'mekena-nyc': withBasePath('/images/img_8719.jpeg'),
  'codeverse-explorer': withBasePath('/images/screenshot-2026-02-20-at-4.05.17-am.png'),
  'why-were-like-this': withBasePath('/images/screenshot-2026-02-20-at-3.53.35-am.png'),
  'autopsy-beirut-phantom': withBasePath('/images/screenshot-2026-02-20-at-9.18.49-pm.png'),
  'architecture-in-low-res': withBasePath('/images/screenshot-2026-01-26-at-1.19.33-pm.png'),
  '1000-strings-at-rest': withBasePath('/images/ibnelleil-cover.jpg'),
};

export function displayProjectTitle(title) {
  return title.replace(/\s*\([^)]*\)/g, '').toUpperCase();
}

export function getProjectImage(project) {
  const mapped = IMAGE_MAP[project.id];
  if (mapped) return mapped;

  const primary = DOMAIN_META[project.domains?.[0]];
  const color = primary?.color || '#ffffff';
  const title = displayProjectTitle(project.title);
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="800" viewBox="0 0 1200 800">
    <rect width="1200" height="800" fill="#050508"/>
    <rect x="32" y="32" width="1136" height="736" fill="none" stroke="${color}" stroke-opacity="0.35" stroke-width="2"/>
    <rect x="54" y="54" width="1092" height="14" fill="${color}" fill-opacity="0.7"/>
    <g opacity="0.14">
      <path d="M0 220 H1200 M0 420 H1200 M0 620 H1200 M300 0 V800 M600 0 V800 M900 0 V800" stroke="${color}" stroke-width="1"/>
    </g>
    <text x="68" y="126" fill="${color}" font-family="DM Sans, sans-serif" font-size="24" letter-spacing="8">${project.year || ''}</text>
    <text x="68" y="350" fill="#f5f5f5" font-family="DM Sans, sans-serif" font-size="108" font-weight="700">${title}</text>
    <text x="68" y="420" fill="rgba(255,255,255,0.65)" font-family="DM Sans, sans-serif" font-size="28">${project.subtitle || ''}</text>
  </svg>`;

  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
}
