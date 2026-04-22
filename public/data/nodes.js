export const DOMAIN_COLORS = {
  "sound": "#ff6b35",
  "text": "#c084fc",
  "image": "#22d3ee",
  "code": "#4ade80",
  "space": "#fb923c",
  "systems": "#ccff00"
};

export const DOMAIN_LABELS = {
  "sound": "SOUND",
  "text": "TEXT",
  "image": "IMAGE",
  "code": "CODE",
  "space": "SPACE",
  "systems": "SYSTEMS"
};

export const FILTER_ORDER = ['all', 'sound', 'text', 'image', 'code', 'space', 'systems'];

export const ENTRY_COPY = {
  "title": "ATLAS",
  "body": "The atlas is not the main works page. It is a navigable 3D field where projects, texts, systems, and performances are organized by relation rather than sequence. Enter it to move through the practice spatially.",
  "instructions": [
    "DRAG TO ORBIT",
    "SCROLL TO ZOOM",
    "CLICK A NODE TO CENTER IT",
    "TRACE OUTWARD THROUGH CONNECTIONS"
  ],
  "note": "Enter through relationships, not sequence.",
  "cta": "CLICK ANYWHERE TO ENTER"
};

const RAW_NODES = [
  {
    "id": "derive",
    "title": "DERIVE",
    "year": "2024–",
    "tier": "lead",
    "summary": "DERIVE models memory as emotional adjacency instead of chronology, turning fragmented archives into a navigable, performable system.",
    "domains": [
      "code",
      "systems",
      "sound"
    ],
    "stack": [
      "Python",
      "ChromaDB",
      "Whisper",
      "Claude",
      "Suno",
      "SDXL",
      "Max/MSP"
    ],
    "connections": [
      "space-time-tuning-machine",
      "sometimes-i-wake-up-elsewhere",
      "tebr",
      "music-engines",
      "architecture-in-low-res",
      "1000-strings-at-rest",
      "cartography-of-absence"
    ],
    "position": [
      15.1,
      -3.8,
      -12.2
    ],
    "image": "/images/portfolio-derive.jpeg"
  },
  {
    "id": "space-time-tuning-machine",
    "title": "SPACE TIME TUNING MACHINE",
    "year": "2020–2022",
    "tier": "lead",
    "summary": "STTM reframes the instrument as a diegetic prototype from a future that has not arrived yet, and the performer as a conductor inside a dialogic system.",
    "domains": [
      "sound",
      "space",
      "systems"
    ],
    "stack": [
      "Custom hardware",
      "Raspberry Pi",
      "Max/MSP",
      "Ableton Live",
      "Spatial audio",
      "Generative AI"
    ],
    "connections": [
      "derive",
      "3d-beat-synth",
      "kardia",
      "tebr",
      "1000-strings-at-rest",
      "mashrou-leila"
    ],
    "position": [
      -9.8,
      11.8,
      -11.6
    ],
    "image": "/images/66a173aa-7fb2-4c00-8a74-09b2e01b9e18_1_105_c.jpeg"
  },
  {
    "id": "storylines",
    "title": "STORYLINES",
    "year": "2024",
    "tier": "lead",
    "summary": "STORYLINES shows how abstract ideas can be translated into a working relational interface that remains legible, surprising, and technically credible.",
    "domains": [
      "code",
      "text",
      "image"
    ],
    "stack": [
      "React",
      "TypeScript",
      "Three.js",
      "Google Gemini",
      "Cloudflare Workers KV",
      "Vercel"
    ],
    "connections": [
      "codeverse-explorer",
      "resonance-atlas",
      "derive"
    ],
    "position": [
      18.6,
      11.2,
      -13.6
    ],
    "image": "/images/portfolio-storylines.jpeg"
  },
  {
    "id": "mashrou-leila",
    "title": "MASHROU' LEILA",
    "year": "2008–2022",
    "tier": "lead",
    "summary": "Mashrou’ Leila is the clearest proof that the practice can operate simultaneously at the scale of art, institution, and geopolitical pressure.",
    "domains": [
      "sound",
      "image",
      "space",
      "systems"
    ],
    "stack": [
      "Music production",
      "Creative direction",
      "Tour systems",
      "Brand architecture",
      "Crisis operations"
    ],
    "connections": [
      "mashrou-self-titled-ep",
      "el-hal-romancy",
      "raasuk-album",
      "ibn-el-leil-album",
      "roman-video",
      "baalbeck-2017",
      "rolling-stone-cover",
      "cost-of-being-queer-and-arab",
      "haoud-i-will-return",
      "salam-block9",
      "beyrouth-et-beyrouth",
      "1000-strings-at-rest",
      "space-time-tuning-machine",
      "mekena-nyc"
    ],
    "position": [
      -18.5,
      0.8,
      -8.2
    ],
    "image": "/images/mashrou_leila_baalbeck_image-1024x682.jpg"
  },
  {
    "id": "mashrou-self-titled-ep",
    "title": "MASHROU' LEILA - SELF-TITLED EP",
    "year": "2009",
    "tier": "secondary",
    "summary": "The debut EP established the band's graphic language and emotional register before the project scaled into a transnational counter-public.",
    "domains": [
      "sound",
      "image"
    ],
    "stack": [
      "EP",
      "Debut release",
      "Archive artifact"
    ],
    "connections": [
      "mashrou-leila",
      "el-hal-romancy",
      "raasuk-album"
    ],
    "position": [
      -25.2,
      5.4,
      -13.2
    ],
    "image": "/images/mashrou-leila/mashrou-leila-debut.jpeg",
    "hasProjectPage": false
  },
  {
    "id": "el-hal-romancy",
    "title": "EL HAL ROMANCY",
    "year": "2011",
    "tier": "secondary",
    "summary": "El Hal Romancy pushed the early Mashrou' Leila world into a richer narrative and visual mythology while the audience around the band was rapidly expanding.",
    "domains": [
      "sound",
      "image"
    ],
    "stack": [
      "Album",
      "2011",
      "Archive artifact"
    ],
    "connections": [
      "mashrou-leila",
      "mashrou-self-titled-ep",
      "raasuk-album"
    ],
    "position": [
      -20.6,
      11.2,
      -14.6
    ],
    "image": "/images/mashrou-leila/halromancyalbum.jpg",
    "hasProjectPage": false
  },
  {
    "id": "raasuk-album",
    "title": "RAASUK",
    "year": "2013",
    "tier": "secondary",
    "summary": "Raasuk marks the moment the band's visual and sonic language became unmistakably iconic: direct, synthetic, theatrical, and politically alert.",
    "domains": [
      "sound",
      "image"
    ],
    "stack": [
      "Album",
      "2013",
      "Archive artifact"
    ],
    "connections": [
      "mashrou-leila",
      "el-hal-romancy",
      "ibn-el-leil-album"
    ],
    "position": [
      -13.2,
      10.3,
      -14.1
    ],
    "image": "/images/mashrou-leila/raasuk.jpg",
    "hasProjectPage": false
  },
  {
    "id": "ibn-el-leil-album",
    "title": "IBN EL LEIL",
    "year": "2015",
    "tier": "secondary",
    "summary": "Ibn El Leil distilled Beirut nightlife, risk, and queer futurity into the band's most internationally legible full-length release.",
    "domains": [
      "sound",
      "image"
    ],
    "stack": [
      "Album",
      "2015",
      "Archive artifact"
    ],
    "connections": [
      "mashrou-leila",
      "raasuk-album",
      "roman-video",
      "beyrouth-et-beyrouth"
    ],
    "position": [
      -8.2,
      5.1,
      -13.8
    ],
    "image": "/images/mashrou-leila/ibnelleil2.jpeg",
    "hasProjectPage": false
  },
  {
    "id": "roman-video",
    "title": "ROMAN",
    "year": "2019",
    "tier": "secondary",
    "summary": "Roman became the anchor image for the band's late visual era, and serves here as the doorway into the broader music video archive.",
    "domains": [
      "image",
      "sound"
    ],
    "stack": [
      "Music video",
      "Visual archive",
      "Playlist gateway"
    ],
    "connections": [
      "mashrou-leila",
      "ibn-el-leil-album",
      "baalbeck-2017",
      "cost-of-being-queer-and-arab"
    ],
    "position": [
      -7.1,
      -1.8,
      -14.7
    ],
    "image": "/images/mashrou-leila/roman-video.jpg",
    "hasProjectPage": false,
    "actionHref": "https://www.youtube.com/playlist?list=PL0O4hK3C5ZP8PAawTLADz0eaTqD_efPgc",
    "actionLabel": "WATCH PLAYLIST",
    "actionExternal": true
  },
  {
    "id": "baalbeck-2017",
    "title": "BAALBECK INTERNATIONAL FESTIVAL",
    "year": "2017",
    "tier": "secondary",
    "summary": "Baalbeck reframed the band against one of the region's most symbolically loaded stages: Roman ruins, mass audience, and live political intensity.",
    "domains": [
      "space",
      "sound",
      "image"
    ],
    "stack": [
      "Live performance",
      "Festival",
      "Archive artifact"
    ],
    "connections": [
      "mashrou-leila",
      "roman-video",
      "rolling-stone-cover"
    ],
    "position": [
      -10.9,
      -8.7,
      -16.9
    ],
    "image": "/images/mashrou-leila/mashrou-baalbeck-large.jpeg",
    "hasProjectPage": false
  },
  {
    "id": "rolling-stone-cover",
    "title": "ROLLING STONE MIDDLE EAST COVER",
    "year": "2014",
    "tier": "secondary",
    "summary": "The Rolling Stone Middle East cover formalized the band's crossover into a broader regional and international media imaginary.",
    "domains": [
      "image",
      "systems"
    ],
    "stack": [
      "Press",
      "Cover story",
      "Archive artifact"
    ],
    "connections": [
      "mashrou-leila",
      "baalbeck-2017",
      "cost-of-being-queer-and-arab"
    ],
    "position": [
      -18.2,
      -10.1,
      -17.4
    ],
    "image": "/images/mashrou-leila/rolling-stone-mashrou-leila.jpeg",
    "hasProjectPage": false
  },
  {
    "id": "cost-of-being-queer-and-arab",
    "title": "THE COST OF BEING QUEER AND ARAB",
    "year": "2020",
    "tier": "secondary",
    "summary": "This press node tracks the public argument around the band once visibility, censorship, and personal risk became impossible to separate.",
    "domains": [
      "text",
      "image",
      "systems"
    ],
    "stack": [
      "Essay",
      "Public discourse",
      "Archive artifact"
    ],
    "connections": [
      "mashrou-leila",
      "roman-video",
      "rolling-stone-cover"
    ],
    "position": [
      -24.8,
      -5.6,
      -16.4
    ],
    "image": "/images/mashrou-leila/cost-of-being-queer-arab.webp",
    "hasProjectPage": false
  },
  {
    "id": "haoud-i-will-return",
    "title": "HA'OUD (I WILL RETURN)",
    "year": "2021",
    "tier": "secondary",
    "summary": "The Yo-Yo Ma collaboration demonstrates how Mashrou' Leila's voice could travel into a wider global frame without losing its political and emotional specificity.",
    "domains": [
      "sound",
      "image"
    ],
    "stack": [
      "Collaboration",
      "Yo-Yo Ma",
      "Archive artifact"
    ],
    "connections": [
      "mashrou-leila",
      "beyrouth-et-beyrouth"
    ],
    "position": [
      -26.2,
      1.7,
      -17
    ],
    "image": "/images/mashrou-leila/yoyoma-mashrou.jpg",
    "hasProjectPage": false
  },
  {
    "id": "salam-block9",
    "title": "SALAM / BLOCK9",
    "year": "2018",
    "tier": "secondary",
    "summary": "The Roisin Murphy collaboration and Block9 context widen the band's field from album-cycle outputs into queer nightlife and solidarity infrastructure.",
    "domains": [
      "sound",
      "image",
      "space"
    ],
    "stack": [
      "Collaboration",
      "Block9",
      "Archive artifact"
    ],
    "connections": [
      "mashrou-leila",
      "roman-video",
      "cost-of-being-queer-and-arab"
    ],
    "position": [
      -23.4,
      8.3,
      -16.2
    ],
    "image": "/images/mashrou-leila/block9-roisinmurphjy.jpg",
    "hasProjectPage": false
  },
  {
    "id": "beyrouth-et-beyrouth",
    "title": "BEYROUTH ET BEYROUTH",
    "year": "2015",
    "tier": "secondary",
    "summary": "This node treats Beyrouth et Beyrouth as a cultural document orbiting the band: part release object, part record of the city that made the work possible.",
    "domains": [
      "text",
      "sound",
      "image"
    ],
    "stack": [
      "Cultural document",
      "Archive",
      "2015"
    ],
    "connections": [
      "mashrou-leila",
      "ibn-el-leil-album",
      "haoud-i-will-return"
    ],
    "position": [
      -17.9,
      13.5,
      -17.1
    ],
    "image": "/images/mashrou-leila/beirutschool.jpg",
    "hasProjectPage": false
  },
  {
    "id": "mekena-nyc",
    "title": "MEKENA NYC",
    "year": "2023–",
    "tier": "lead",
    "summary": "MEKENA makes the spatial argument explicit: the same systems thinking driving the software and performance work can operate at the scale of an actual building.",
    "domains": [
      "space",
      "systems"
    ],
    "stack": [
      "Architecture",
      "Adaptive reuse",
      "IoT monitoring",
      "Programming design",
      "Cultural strategy"
    ],
    "connections": [
      "mashrou-leila",
      "space-time-tuning-machine",
      "architecture-in-low-res",
      "autopsy-beirut-phantom"
    ],
    "position": [
      -17.6,
      14.9,
      -15.8
    ],
    "image": "/images/img_8719.jpeg"
  },
  {
    "id": "sometimes-i-wake-up-elsewhere",
    "title": "SOMETIMES I WAKE UP ELSEWHERE",
    "year": "2022–2025",
    "tier": "lead",
    "summary": "SIWUE is one of the clearest examples of literary logic translated into software architecture without losing emotional force.",
    "domains": [
      "text",
      "code",
      "systems"
    ],
    "stack": [
      "React 19",
      "TypeScript",
      "Three.js",
      "Canvas API",
      "IndexedDB",
      "Web Audio API"
    ],
    "connections": [
      "cartography-of-absence",
      "derive",
      "tebr",
      "architecture-in-low-res"
    ],
    "position": [
      -10.8,
      -15.2,
      -19.2
    ],
    "image": "/images/portfolio-mobius.jpeg"
  },
  {
    "id": "tebr",
    "title": "TEBR",
    "year": "2024–",
    "tier": "lead",
    "summary": "The project converts machine failure, archive residue, and cultural specificity into a deliberate compositional territory rather than a problem to be corrected away.",
    "domains": [
      "sound",
      "systems",
      "code"
    ],
    "stack": [
      "Suno",
      "Udio",
      "Ableton Live",
      "Max/MSP",
      "DERIVE"
    ],
    "connections": [
      "derive",
      "space-time-tuning-machine",
      "hah-was",
      "music-engines",
      "resonance-atlas",
      "1000-strings-at-rest"
    ],
    "position": [
      1.5,
      16.2,
      -19.5
    ],
    "image": null
  },
  {
    "id": "hah-was",
    "title": "HAH-WAS",
    "year": "2023–2024",
    "tier": "secondary",
    "summary": "HAH-WAS is one of the clearest statements in the portfolio that cultural erasure in AI is not accidental noise but a measurable consequence of training assumptions.",
    "domains": [
      "code",
      "systems",
      "text"
    ],
    "stack": [
      "Gemini",
      "Tone.js",
      "Max/MSP",
      "Python",
      "Adversarial prompt library"
    ],
    "connections": [
      "resonance-atlas",
      "maqamai",
      "music-engines",
      "tebr",
      "derive"
    ],
    "position": [
      18.8,
      3,
      -15.8
    ],
    "image": "/images/portfolio-tracks.jpeg"
  },
  {
    "id": "3d-beat-synth",
    "title": "3D-BEAT-SYNTH",
    "year": "2024–2025",
    "tier": "secondary",
    "summary": "This is one of the most immediately legible proofs in the portfolio that technical experimentation can stay conceptually clean and experientially immediate.",
    "domains": [
      "code",
      "sound",
      "image"
    ],
    "stack": [
      "Three.js",
      "MediaPipe",
      "Tone.js",
      "WebRTC",
      "React"
    ],
    "connections": [
      "space-time-tuning-machine",
      "kardia",
      "photon-plus"
    ],
    "position": [
      11.8,
      -10.9,
      -12.8
    ],
    "image": "/images/portfolio-3dbeats.jpeg"
  },
  {
    "id": "resonance-atlas",
    "title": "RESONANCE ATLAS",
    "year": "2024–",
    "tier": "secondary",
    "summary": "Resonance Atlas names the broader field that several projects are already operating within, which gives the research a cumulative rather than scattered presence.",
    "domains": [
      "systems",
      "sound",
      "text"
    ],
    "stack": [
      "Research design",
      "White paper development",
      "Audio analysis",
      "Critical theory"
    ],
    "connections": [
      "hah-was",
      "maqamai",
      "music-engines",
      "tebr",
      "storylines"
    ],
    "position": [
      10.7,
      14.7,
      -20.8
    ],
    "image": "/images/portfolio-tracks.jpeg"
  },
  {
    "id": "maqamai",
    "title": "MAQAMAI",
    "year": "2026",
    "tier": "secondary",
    "summary": "MaqamAI fills the human infrastructure gap between recognizing model failure and being able to hear what is missing in the first place.",
    "domains": [
      "code",
      "sound",
      "text"
    ],
    "stack": [
      "React",
      "Tone.js",
      "Web Audio API",
      "Curated recordings",
      "RTL-capable UI"
    ],
    "connections": [
      "resonance-atlas",
      "hah-was",
      "photon-plus",
      "music-engines"
    ],
    "position": [
      22.8,
      9,
      -22.6
    ],
    "image": null
  },
  {
    "id": "autopsy-beirut-phantom",
    "title": "THE AUTOPSY / BEIRUT PHANTOM",
    "year": "2025+",
    "tier": "secondary",
    "summary": "This is the spatial media branch of the same low-resolution, fragment-aware logic running through the rest of the practice.",
    "domains": [
      "space",
      "image",
      "systems"
    ],
    "stack": [
      "Photogrammetry",
      "WebGL",
      "VR pipeline",
      "Interactive fiction"
    ],
    "connections": [
      "architecture-in-low-res",
      "mekena-nyc",
      "cartography-of-absence"
    ],
    "position": [
      -22.8,
      9.8,
      -20.6
    ],
    "image": "/images/screenshot-2026-02-20-at-9.18.49-pm.png"
  },
  {
    "id": "cartography-of-absence",
    "title": "THE CARTOGRAPHY OF ABSENCE",
    "year": "2025",
    "tier": "secondary",
    "summary": "The Cartography of Absence is one of the cleanest textual statements of the practice’s broader method: structural form carrying the emotional and political argument.",
    "domains": [
      "text",
      "systems"
    ],
    "stack": [
      "Literary form",
      "Narrative systems",
      "Bureaucratic surrealism"
    ],
    "connections": [
      "sometimes-i-wake-up-elsewhere",
      "derive",
      "architecture-in-low-res",
      "why-were-like-this"
    ],
    "position": [
      -16.1,
      -11.5,
      -17.4
    ],
    "image": null
  },
  {
    "id": "why-were-like-this",
    "title": "WHY WE'RE LIKE THIS",
    "year": "2025",
    "tier": "secondary",
    "summary": "This project is the broadest public-facing expression of the practice’s analytical voice: structural, legible, and emotionally direct without collapsing into generic explainers.",
    "domains": [
      "text",
      "image",
      "systems"
    ],
    "stack": [
      "Screenwriting",
      "Documentary structure",
      "Motion graphics",
      "Narration"
    ],
    "connections": [
      "cartography-of-absence",
      "sometimes-i-wake-up-elsewhere"
    ],
    "position": [
      -11.8,
      -19.8,
      -21.4
    ],
    "image": "/images/screenshot-2026-02-20-at-3.53.35-am.png"
  },
  {
    "id": "photon-plus",
    "title": "PHOTON+",
    "year": "2024",
    "tier": "secondary",
    "summary": "photon+ is one of the most elegant examples in the portfolio of architectural logic being directly translated into an instrument.",
    "domains": [
      "code",
      "sound",
      "image"
    ],
    "stack": [
      "WebGL",
      "Canvas 2D",
      "Tone.js",
      "Custom physics engine",
      "React"
    ],
    "connections": [
      "maqamai",
      "3d-beat-synth",
      "kardia"
    ],
    "position": [
      20.6,
      -7.6,
      -14.5
    ],
    "image": "/images/portfolio-photon.jpeg"
  },
  {
    "id": "codeverse-explorer",
    "title": "CODEVERSE EXPLORER",
    "year": "2024",
    "tier": "secondary",
    "summary": "Codeverse extends the exact same relational-spatial method used in STORYLINES into engineering infrastructure, which makes the practice’s cross-domain consistency obvious.",
    "domains": [
      "code",
      "systems",
      "space"
    ],
    "stack": [
      "React",
      "TypeScript",
      "AST parsing",
      "Three.js",
      "Gemini API",
      "D3-force-3d"
    ],
    "connections": [
      "storylines",
      "music-engines",
      "derive"
    ],
    "position": [
      22.4,
      13.1,
      -11.2
    ],
    "image": "/images/screenshot-2026-02-20-at-4.05.17-am.png"
  },
  {
    "id": "kardia",
    "title": "KARDIA",
    "year": "2026",
    "tier": "secondary",
    "summary": "Kardia extends the practice’s body-as-signal logic into wellness and therapeutic territory without losing its formal seriousness.",
    "domains": [
      "code",
      "sound",
      "systems"
    ],
    "stack": [
      "BLE sensors",
      "HRV analysis",
      "Web Audio",
      "Biofeedback synthesis"
    ],
    "connections": [
      "3d-beat-synth",
      "space-time-tuning-machine",
      "photon-plus"
    ],
    "position": [
      13.8,
      -15.8,
      -18.3
    ],
    "image": null
  },
  {
    "id": "music-engines",
    "title": "MUSIC-ENGINES",
    "year": "2024",
    "tier": "secondary",
    "summary": "music-engines is the invisible backbone that turns critique into reproducible research rather than opinion.",
    "domains": [
      "code",
      "sound",
      "systems"
    ],
    "stack": [
      "Python",
      "asyncio",
      "librosa",
      "FastAPI",
      "Neo4j",
      "Whisper",
      "pyworld"
    ],
    "connections": [
      "derive",
      "hah-was",
      "resonance-atlas",
      "tebr",
      "maqamai",
      "codeverse-explorer"
    ],
    "position": [
      23,
      -1.6,
      -23
    ],
    "image": "/images/portfolio-engine.jpeg"
  },
  {
    "id": "architecture-in-low-res",
    "title": "ARCHITECTURE IN LOW RES",
    "year": "2013–2015",
    "tier": "archive",
    "summary": "This thesis is the seed crystal for much of the later work: once you see how consistent the lineage is, the portfolio stops looking eclectic and starts looking precise.",
    "domains": [
      "space",
      "image",
      "text"
    ],
    "stack": [
      "Architectural theory",
      "Media theory",
      "Research writing",
      "Spatial analysis"
    ],
    "connections": [
      "derive",
      "cartography-of-absence",
      "sometimes-i-wake-up-elsewhere",
      "autopsy-beirut-phantom",
      "mekena-nyc"
    ],
    "position": [
      -7.4,
      22.6,
      -24.6
    ],
    "image": "/images/screenshot-2026-01-26-at-1.19.33-pm.png"
  },
  {
    "id": "1000-strings-at-rest",
    "title": "1000 STRINGS AT REST",
    "year": "2022",
    "tier": "archive",
    "summary": "Even as an archive entry, this work carries a lot of emotional and methodological weight because it bridges Mashrou’ Leila, STTM, and DERIVE so clearly.",
    "domains": [
      "sound",
      "space",
      "image"
    ],
    "stack": [
      "Installation design",
      "Sound art",
      "Spatial composition"
    ],
    "connections": [
      "mashrou-leila",
      "space-time-tuning-machine",
      "derive",
      "tebr"
    ],
    "position": [
      -15.2,
      9.3,
      -23.8
    ],
    "image": "/images/ibnelleil-cover.jpg"
  }
];

function placeholderImage(node) {
  const color = DOMAIN_COLORS[node.domains?.[0]] || '#ffffff';
  const title = String(node.title || '').replace(/\s*\([^)]*\)/g, '').toUpperCase();
  const svg = [
    '<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="800" viewBox="0 0 1200 800">',
    '<rect width="1200" height="800" fill="#050508"/>',
    '<rect x="32" y="32" width="1136" height="736" fill="none" stroke="' + color + '" stroke-opacity="0.35" stroke-width="2"/>',
    '<rect x="54" y="54" width="1092" height="14" fill="' + color + '" fill-opacity="0.7"/>',
    '<g opacity="0.14"><path d="M0 220 H1200 M0 420 H1200 M0 620 H1200 M300 0 V800 M600 0 V800 M900 0 V800" stroke="' + color + '" stroke-width="1"/></g>',
    '<text x="68" y="126" fill="' + color + '" font-family="DM Sans, sans-serif" font-size="24" letter-spacing="8">' + (node.year || '') + '</text>',
    '<text x="68" y="350" fill="#f5f5f5" font-family="DM Sans, sans-serif" font-size="92" font-weight="700">' + title + '</text>',
    '</svg>'
  ].join('');

  return 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svg);
}

const SHORT_TITLES = {
  derive: 'DERIVE',
  'space-time-tuning-machine': 'STTM',
  storylines: 'STORYLINES',
  'mashrou-leila': 'MASHROU',
  'mekena-nyc': 'MEKENA',
  'sometimes-i-wake-up-elsewhere': 'SIWUE',
  tebr: 'TEBR',
  'hah-was': 'HAH-WAS',
  '3d-beat-synth': '3DBEAT',
  'resonance-atlas': 'RESONANCE',
  maqamai: 'MAQAMAI',
  'autopsy-beirut-phantom': 'AUTOPSY',
  'cartography-of-absence': 'CARTOGRAPHY',
  'why-were-like-this': 'WHYLIKETHIS',
  'photon-plus': 'PHOTON+',
  'codeverse-explorer': 'CODEVERSE',
  kardia: 'KARDIA',
  'music-engines': 'M-ENGINES',
  'architecture-in-low-res': 'LOWRES',
  '1000-strings-at-rest': '1000STRINGS',
  'mashrou-self-titled-ep': 'ML-EP',
  'el-hal-romancy': 'ROMANCY',
  'raasuk-album': 'RAASUK',
  'ibn-el-leil-album': 'IBN EL LEIL',
  'roman-video': 'ROMAN',
  'baalbeck-2017': 'BAALBECK',
  'rolling-stone-cover': 'ROLLING STONE',
  'cost-of-being-queer-and-arab': 'QUEER & ARAB',
  'haoud-i-will-return': 'HAOUD',
  'salam-block9': 'SALAM',
  'beyrouth-et-beyrouth': 'BEYROUTH',
};

const CURRENT_YEAR = 2026;
const CONTEXT_SCALE = 11.5;
const TIMELINE_SCALE = 3.35;
const Z_RANGE = { near: -10.4, far: -24.8 };
const MAIN_NODE_AXIS_META = {
  derive: { context: 0.7, timelineOffset: -1.1 },
  'space-time-tuning-machine': { context: -0.6, timelineOffset: 0.2 },
  storylines: { context: 1.5, timelineOffset: 1.1 },
  'mashrou-leila': { context: -3.1, timelineOffset: 0 },
  'mekena-nyc': { context: 2.8, timelineOffset: -0.4 },
  'sometimes-i-wake-up-elsewhere': { context: 0.4, timelineOffset: 0.2 },
  tebr: { context: -0.3, timelineOffset: 1.1 },
  'hah-was': { context: 0.2, timelineOffset: 0.7 },
  '3d-beat-synth': { context: 1.6, timelineOffset: 0.1 },
  'resonance-atlas': { context: 0, timelineOffset: 0.3 },
  maqamai: { context: 0.2, timelineOffset: -0.6 },
  'autopsy-beirut-phantom': { context: -2.7, timelineOffset: -0.7 },
  'cartography-of-absence': { context: -1.9, timelineOffset: 0.6 },
  'why-were-like-this': { context: 0.9, timelineOffset: -0.5 },
  'photon-plus': { context: 1.8, timelineOffset: -0.9 },
  'codeverse-explorer': { context: 2, timelineOffset: 1.5 },
  kardia: { context: 2.4, timelineOffset: 0.8 },
  'music-engines': { context: 1.1, timelineOffset: -1.4 },
  'architecture-in-low-res': { context: -2.4, timelineOffset: 0 },
  '1000-strings-at-rest': { context: -1.1, timelineOffset: 0.3 },
};
const PROJECT_NODE_IDS = new Set(
  RAW_NODES.filter((node) => node.hasProjectPage !== false).map((node) => node.id)
);
const MASHROU_CLUSTER_IDS = new Set([
  'mashrou-self-titled-ep',
  'el-hal-romancy',
  'raasuk-album',
  'ibn-el-leil-album',
  'roman-video',
  'baalbeck-2017',
  'rolling-stone-cover',
  'cost-of-being-queer-and-arab',
  'haoud-i-will-return',
  'salam-block9',
  'beyrouth-et-beyrouth',
]);
const MASHROU_CLUSTER_SCALE = { x: 0.84, y: 0.78, z: 0.9 };
const mashrouBaseNode = RAW_NODES.find((node) => node.id === 'mashrou-leila');
const projectNodes = RAW_NODES.filter((node) => PROJECT_NODE_IDS.has(node.id));

function roundCoord(value) {
  return Math.round(value * 100) / 100;
}

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}

function parseTimelineYear(label) {
  const years = String(label || '').match(/\d{4}/g)?.map(Number) || [];
  if (!years.length) return CURRENT_YEAR;
  if (years.length >= 2) {
    return (years[0] + years[1]) / 2;
  }
  if (/[+–]\s*$/.test(String(label || ''))) {
    return Math.min(CURRENT_YEAR, years[0] + 1);
  }
  return years[0];
}

const timelineYears = projectNodes.map((node) => parseTimelineYear(node.year));
const TIMELINE_CENTER = (Math.min(...timelineYears) + Math.max(...timelineYears)) / 2;
const projectConnectionCounts = projectNodes.map((node) => node.connections.length);
const MIN_PROJECT_CONNECTIONS = Math.min(...projectConnectionCounts);
const MAX_PROJECT_CONNECTIONS = Math.max(...projectConnectionCounts);

function computeSemanticProjectPosition(node) {
  const meta = MAIN_NODE_AXIS_META[node.id] || {};
  const timelineYear = parseTimelineYear(node.year);
  const normalizedConnections =
    (node.connections.length - MIN_PROJECT_CONNECTIONS) /
    Math.max(1, MAX_PROJECT_CONNECTIONS - MIN_PROJECT_CONNECTIONS);
  const tierBias =
    node.tier === 'lead' ? 0.14 :
    node.tier === 'archive' ? -0.05 :
    0;
  const relationalDensity = clamp(normalizedConnections + tierBias, 0, 1);
  const x = (meta.context || 0) * CONTEXT_SCALE;
  const y = (timelineYear - TIMELINE_CENTER) * TIMELINE_SCALE + (meta.timelineOffset || 0);
  const z = Z_RANGE.far + (Z_RANGE.near - Z_RANGE.far) * relationalDensity;

  return [roundCoord(x), roundCoord(y), roundCoord(z)];
}

const mashrouSemanticPosition = computeSemanticProjectPosition(mashrouBaseNode);

function remapPosition(node) {
  if (PROJECT_NODE_IDS.has(node.id)) {
    return computeSemanticProjectPosition(node);
  }

  if (MASHROU_CLUSTER_IDS.has(node.id)) {
    const relativeX = node.position[0] - mashrouBaseNode.position[0];
    const relativeY = node.position[1] - mashrouBaseNode.position[1];
    const relativeZ = node.position[2] - mashrouBaseNode.position[2];

    return [
      roundCoord(mashrouSemanticPosition[0] + relativeX * MASHROU_CLUSTER_SCALE.x),
      roundCoord(mashrouSemanticPosition[1] + relativeY * MASHROU_CLUSTER_SCALE.y),
      roundCoord(mashrouSemanticPosition[2] + relativeZ * MASHROU_CLUSTER_SCALE.z),
    ];
  }

  return node.position.map(roundCoord);
}

export const NODES = RAW_NODES.map((node) => ({
  ...node,
  position: remapPosition(node),
  shortTitle: SHORT_TITLES[node.id] || node.title,
  image: node.image || placeholderImage(node),
}));
