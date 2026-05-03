import { DOMAIN_META } from '../data/siteContent';

function withBasePath(path) {
  const normalizedPath = path.replace(/^\/+/, '');
  return `${import.meta.env.BASE_URL}${normalizedPath}`;
}

const IMAGE_MAP = {
  derive: withBasePath('/images/atlas/derive-memory-navigation-system.webp'),
  'space-time-tuning-machine': withBasePath('/images/atlas/sttm-broad-museum-installation.webp'),
  storylines: withBasePath('/images/atlas/storylines-graph-interface.webp'),
  'mashrou-leila': withBasePath('/images/atlas/mashrou-leila-baalbeck-roman-ruins.webp'),
  '3d-beat-synth': withBasePath('/images/atlas/3d-beat-synth-webgl-interface.webp'),
  'photon-plus': withBasePath('/images/atlas/photon-plus-optical-sequencer.webp'),
  'music-engines': withBasePath('/images/atlas/music-engines-research-engine.webp'),
  'hah-was': withBasePath('/images/atlas/hah-was-hallucination-detection-ui.webp'),
  'resonance-atlas': withBasePath('/images/atlas/resonance-atlas-spatial-sound-map.webp'),
  'sometimes-i-wake-up-elsewhere': withBasePath('/images/atlas/siwue-manuscript-fragment.webp'),
  tebr: withBasePath('/images/atlas/tebr-violin-waveform.webp'),
  'mekena-nyc': withBasePath('/images/atlas/mekena-nyc-queens-exterior.webp'),
  'codeverse-explorer': withBasePath('/images/atlas/codeverse-explorer-3d-codebase.webp'),
  maqamai: withBasePath('/images/atlas/maqamai-maqam-ai-interface.webp'),
  'cartography-of-absence': withBasePath('/images/atlas/cartography-of-absence-bureaucratic-form.webp'),
  'why-were-like-this': withBasePath('/images/atlas/why-were-like-this-interface.webp'),
  'autopsy-beirut-phantom': withBasePath('/images/atlas/autopsy-beirut-phantom-spatial-media.webp'),
  kardia: withBasePath('/images/atlas/kardia-body-signal-interface.webp'),
  'architecture-in-low-res': withBasePath('/images/atlas/architecture-low-res-thesis-render.webp'),
  '1000-strings-at-rest': withBasePath('/images/atlas/1000-strings-at-rest-installation.webp'),
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
