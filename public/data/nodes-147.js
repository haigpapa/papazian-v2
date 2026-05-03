export const DOMAIN_COLORS = {
  sound: '#ff6b35',
  text: '#c084fc',
  image: '#22d3ee',
  code: '#4ade80',
  space: '#fb923c',
  systems: '#ccff00',
};

export const DOMAIN_LABELS = {
  sound: 'SOUND',
  text: 'TEXT',
  image: 'IMAGE',
  code: 'CODE',
  space: 'SPACE',
  systems: 'SYSTEMS',
};

export const FILTER_ORDER = ['all', 'sound', 'text', 'image', 'code', 'space', 'systems'];

export const ENTRY_COPY = {
  title: 'ATLAS',
  body: 'The atlas is a 119-node field where projects, texts, performances, research systems, and architectural works are arranged by relation rather than chronology. Enter it to move through the practice spatially.',
  instructions: [
    'DRAG TO ORBIT',
    'SCROLL TO ZOOM',
    'CLICK A NODE TO CENTER IT',
    'TRACE OUTWARD THROUGH CONNECTIONS',
  ],
  note: '119 nodes. One practice. Multiple depths.',
  cta: 'CLICK ANYWHERE TO ENTER',
};

const RAW_TABLE = String.raw`lead|TEBR|2024–26|Synthesis of violin, voice, and generative AI systems.|0.9|1|S, C|Fictive Environments, STTM
lead|Mashrou' Leila|2008–22|Global music collective; Creative Direction & Performance.|0.5|1|S, V, I|Rolling Stone, Ibn El Leil
lead|Fictive Environments|2025–26|Primary solo studio identity and "operating system."|1.0|1|A, C, N|All current NYC nodes
lead|MEKENA NYC|2025–26|Adaptive reuse and residency program in Queens.|1.0|1|A, I|Fictive Environments
lead|Sometimes I Wake Up Elsewhere|2025–26|108-entry modular literary manuscript.|1.0|1|N|Cartography of Absence
lead|The Localization Gap|2024|Forensic AI audit of cultural and linguistic bias.|1.0|1|C, I|HAH-WAS, FRANK
lead|The Cost of Being Queer & Arab|2020|NYT op-ed and advocacy manifesto.|1.0|1|N, I|Mashrou' Leila
lead|The Cartography of Absence|2024|Bureaucratic autofiction exploring displaced identity.|1.0|1|N, V|Walaw Studio
lead|The Crane Song|2020|Literary fiction and multimedia performance piece.|0.8|1|N, S|Variations on Cranes
lead|427 AI Tracks Archive|2024|Repository of generative audio experiments.|1.0|1|S, C|TEBR, Meaning Stack
lead|The Meaning Stack|2025|Technical framework for cross-disciplinary logic.|1.0|1|C|Systems Choreography
lead|Systems Choreography|2024|Core methodology at the intersection of code/sound.|1.0|1|C, A|Fictive Environments
lead|Rolling Stone Cover|2017|Historic first Arabic band cover; cultural milestone.|0.2|1|V, I|Mashrou' Leila
lead|Lede.nyc|2026|Digital identity and domain project for New York.|1.0|1|C, N|Fictive Environments
secondary|Sophie’s World|2012|Early AI short film; Bartlett dissertation companion.|0.6|2|V, C|Low Res Thesis
secondary|Architecture in Low Res|2015|Master’s thesis on digital architectural perception.|0.6|2|A, V|Sophie's World
secondary|B018 Nightclub|2008|Architectural work (DW5) on iconic Beirut club.|0.0|2|A|Plot House
secondary|The Labyrinth|2024|Recursive novel/script involving Sayat Nova.|1.0|2|N, V|The Annex
secondary|The Annex|2024|Stage design script exploring memory space.|1.0|2|A, N|The Labyrinth
secondary|Vessel Orchestra|2019|Performance at The Met using artifacts.|1.0|2|S, A|Mashrou' Leila
secondary|Space Time Tuning Machine|2021|AI-augmented instrument and performance engine.|0.9|2|S, C|TEBR, DÉRIVE
secondary|Yo-Yo Ma Collaboration|2021|Performance in Byblos; synthesis of cello/voice.|0.1|2|S|Mashrou' Leila
secondary|Ibn El Leil|2015|Third studio album; baroque pop narrative.|0.4|2|S, V|Raasuk
secondary|Raasük|2013|Second studio album; focus on movement/grit.|0.2|2|S, V|El Hal Romancy
secondary|El Hal Romancy|2011|EP exploring romantic bureaucracy.|0.0|2|S, V|Leila (2009)
secondary|Plot House|2009|Residential architectural project in Beirut (DW5).|0.0|2|A|B018
secondary|FRANK|2026|News analysis application for bias detection.|1.0|2|C, I|Localization Gap
secondary|SUNBURN|2026|Climate data sonification installation.|1.0|2|S, A|Systems Choreography
secondary|Post-Apocalyptic Walking Tour|2020|AR performance overlaying future ruins on Beirut.|0.0|2|V, A|Variations on Cranes
secondary|Skyline of Insomnia|2018|Visual study of nocturnal urban density.|0.0|2|V, A|Beirut School
secondary|Bureaucratic Surrealism|2024|Aesthetic framework for institutional absurdity.|1.0|2|N, V|Cartography of Absence
secondary|Telescode|2025|Code visualization and interactive mapping tool.|1.0|2|C|Meaning Stack
secondary|MENARA|2025|Generative architectural visualization project.|1.0|2|A, C|MEKENA
secondary|ITP Camp Prototypes|2024|Experimental tech objects from NYU.|1.0|2|C, S|Systems Choreography
secondary|Artistic Freedom Initiative|2023|Campaigns for human rights and creative liberty.|1.0|2|I, N|Cost of Being Queer
secondary|Souad|2014|Installation and novella exploring family archive.|0.6|2|N, V|Elsewhere
secondary|The Beirut School|2019|Anthology project and performance cycle.|0.0|2|S, V|Mashrou' Leila
secondary|Material for a Novel|2014|Video essay on tragic endings and memory.|0.6|2|V, N|Sophie's World
secondary|HAH-WAS|2026|Hallucination-detection engine for LLMs.|1.0|2|C|Localization Gap
secondary|Plot #1063 Tower|2010|Architectural high-rise in Beirut (DW5).|0.0|2|A|DW5
secondary|2006 Reconstruction|2006|Post-conflict urban mapping/planning projects.|0.0|2|A, I|AUB
secondary|New York Voices|2023|Commissioned performance at Joe's Pub.|1.0|2|S, V|Public Theater
secondary|People Like Us Podcast|2021|Original score and visual identity for series.|1.0|2|S, V|New York
secondary|Museum of Architecture|2009|Award-winning AUB design project.|0.0|2|A|Fawzi Azar Award
secondary|Arabic Pop 1925–2025|2025|Interactive mapping of musical evolution.|0.5|2|S, C|TEBR
secondary|Stage Architecture|2015–22|Narrative scenography for global tours.|0.5|2|A, V|Mashrou' Leila
secondary|NOWHERE/ELSEWHERE|2022|Visual media study on transit states.|0.8|2|V, N|Crane Song
secondary|Kardia|2021|Medical/Biological data visualization project.|0.9|2|C, V|Body Log
secondary|Loop Corridor|2025|Virtual architectural space for sound.|1.0|2|A, S|Loop Corridor
secondary|3D-Beat-Synth|2025|Physical/Digital instrument prototype.|1.0|2|S, C|ITP Camp
secondary|STORYLINES|2024|Interactive fiction/logic engine.|1.0|2|N, C|Labyrinth
secondary|Architectures of Belonging|2021|Research on spatial agency and identity.|1.0|2|A, N|NYU Residency
secondary|The Codex Project|2025|Visualizing hidden metadata in archives.|1.0|2|C, V|Meaning Stack
secondary|Speculative Narrative Design|2025|Future-casting workshop materials.|1.0|2|N, A|Fictive Environments
secondary|The Autopsy Interface|2024|Visual neural network game/memory tool.|1.0|2|C, V|Labyrinth
secondary|Archive of Unwritten Songs|2024|Generative art project on melodic loss.|1.0|2|S, C|427 Tracks
secondary|Vessel Orchestra (MET)|2019|Documenting the performance at the Met.|1.0|2|S, A|Performance Cluster
secondary|Codeverse Explorer|2025|3D cartography for visual codebases.|1.0|2|C, A|Telescode
secondary|The Erasure Protocols|2024|Interactive fiction archive.|1.0|2|N, C|SYBIL's Archive
secondary|Inʿiṭāf (The Turn)|2024|Progressive Web App ritual generator.|1.0|2|C, N|Systems Choreography
secondary|Tuning Fork|2025|Image decay and visualization software.|1.0|2|C, V|Low Res
secondary|Heroes of a Transitional Time|2012|Visual art critique on masculinity.|0.0|2|V, I|Sharjah Art
secondary|AUB Architecture (B.Arch)|2004–09|Foundational degree and projects.|0.0|2|A|Beirut
secondary|The Bartlett (M.Arch)|2014–15|Master's research and projects.|0.6|2|A|London
secondary|Marra.tein Residency|2012|Art residency and exhibition in Beirut.|0.0|2|V, A|Heroes
secondary|Home Workspace (HWP)|2013|Ashkal Alwan interdisciplinary program.|0.0|2|V, N|Beirut
secondary|NYU Kevorkian Residency|2017|Artist-in-residence and "Great Gig" exhibition.|1.0|2|V, I|New York
secondary|Banksy/Block 9 Retreat|2018|Creative collaboration retreat.|0.5|2|V, I|Global
secondary|AUB 150th Documentary|2016|Visual/Music collaboration for anniversary.|0.0|2|V, S|Beirut
secondary|The Great Gig in the Sky|2017|Exhibition at NYU Kevorkian.|1.0|2|V, I|NYU Residency
secondary|Variations on Cranes|2020|Video performance piece.|0.0|2|V, N|Crane Song
secondary|How to Walk with Friends|2020|Video work on public space agency.|0.0|2|V, I|Beirut
secondary|Auditions for a Battle|2013|Performance and video art piece.|0.0|2|V, I|Beirut
secondary|Kaboos (Kaleidoscope)|2009|Early stop-motion visual work.|0.0|2|V|Lilly
secondary|Lilly doesn’t care anymore|2008|Early 2D stop-motion experiment.|0.0|2|V|Kaboos
secondary|Material for a Novel (Research Piece)|2014|Video essay/Research piece.|0.6|2|V, N|Sophie's World
secondary|Post-Conflict Urbanism|2006|Research and mapping in South Lebanon.|0.0|2|A, I|AUB
secondary|Fawzi Azar Award|2009|Recognition for architectural excellence.|0.0|2|A|Museum project
archive|Toros Roslin Award|2004|Early recognition in visual arts.|0.0|3|V|
archive|Fasateen (MV)|2010|Breakthrough music video.|0.0|3|V, S|
archive|Raksit Leila (MV)|2010|Iconic music video/performance.|0.0|3|V, S|
archive|Doha Tribeca Film Fest|2010|Performance and screening.|0.2|3|V, S|
archive|Exit Festival|2011|Performance in Serbia.|0.5|3|S|
archive|Paléo Festival|2012|Performance in Switzerland.|0.5|3|S|
archive|NPR Tiny Desk|2016|Global breakout performance.|1.0|3|S, I|
archive|Roman (MV)|2017|Feminist/Queer manifesto video.|0.0|3|V, I|
archive|YSL Museum Opening|2017|Private performance in Marrakech.|0.3|3|S, A|
archive|Montreux Jazz Festival|2018|Performance in Switzerland.|0.5|3|S|
archive|Beirut Blast Relief|2020|Global fundraising concert.|0.0|3|I, S|
archive|Greenpeace Campaign|2014|Renewable energy awareness.|0.4|3|I|
archive|Body Maintenance Log|2021|Document art on visa/health.|1.0|3|N, I|
archive|Project Zero|2026|Civic protocol concept for stillness.|1.0|3|I, C|
archive|The Mirage Room|2012|Optical illusion installation.|0.6|3|A, V|
archive|LAVA Object|2010|Industrial design piece.|0.0|3|A|
archive|Phil & Joe Barbershop|2011|Interior design project.|0.0|3|A|
archive|Cerf Volant|2012|Lighting installation.|0.0|3|A|
archive|Bourj Hammoud Thesis|2009|Urban research/Architectural thesis.|0.0|3|A, N|
archive|Map of the Wound|2024|Composite literary/visual work.|1.0|3|N, V|
archive|Ants Design Store|2011|Commercial interior in Beirut/Yerevan.|0.1|3|A|
archive|Skoun Concert|2018|Mental health awareness campaign.|0.0|3|I, S|
archive|Marsa Clinic Event|2017|Sexual health awareness.|0.0|3|I, S|
archive|Sawa Aid Concert|2016|Syrian refugee fundraising.|0.0|3|I, S|
archive|SEAL Concert|2017|Economic action in Lebanon.|0.0|3|I, S|
archive|Toronto PRIDE|2016|Performance/Advocacy.|1.0|3|I, S|
archive|Oslo World|2016|Performance in Norway.|0.5|3|S|
archive|Lowlands Festival|2019|Performance in Netherlands.|0.5|3|S|
archive|Hercules & Love Affair|2017|Collaboration: "Are You Still Certain?".|0.5|3|S|
archive|Roisin Murphy|2018|Collaboration: "Salam".|0.5|3|S|
archive|Lost Souls of Saturn|2019|Collaboration: "Bint el Khandaq".|0.5|3|S|
archive|Mika Collaboration|2020|Collaboration: "Promiseland".|0.5|3|S|
archive|The Narcycist|2018|Collaboration: "Time".|0.9|3|S|
archive|Cavalry (MV)|2019|Music video on militarized space.|0.0|3|V, I|
archive|Radio Romance (MV)|2019|Narrative music video.|0.0|3|V|
archive|Aoede (MV)|2016|Experimental visual video.|0.0|3|V|
archive|3 Minutes (MV)|2015|Fan-collaborated video.|0.0|3|V|
archive|Lil Watan (MV)|2013|Political satire music video.|0.0|3|V, I|
archive|The Waiting Room|2010|Early architectural installation.|0.0|3|A|
archive|1,000 Strings at Rest|2022|Multimedia performance/installation.|0.8|3|S, V|
archive|Galaxy Birds|2024|Digital/Generative art piece.|1.0|3|C, V|
archive|Photon+|2025|Light and code experiment.|1.0|3|C, V|
archive|DÉRIVE Engine|2024|Generative memory logic.|1.0|3|C|
archive|Möbius Engine|2025|Logic/Code prototype.|1.0|3|C|
archive|Resonance Atlas|2024|Spatial sound map.|1.0|3|S, C|
archive|Ghost City|2020|Data-driven visual piece.|0.0|3|V, C|
archive|Beau & Griffin|2024|Personal documentation (Cats).|1.0|3|V|
archive|Nebucat|2020|Conceptual avatar/character.|1.0|3|N|
archive|Non-Linear Time|2025|Visual/Logic experiment.|1.0|3|C, V|
archive|The Archive|2025|Meta-project on documentation.|1.0|3|N, C|
archive|Architecting the Liminal|2025|Spatial research paper.|1.0|3|A, N|
archive|401 Songs Database|2025|Technical music archive.|1.0|3|C, S|
archive|Louvre Abu Dhabi|2008|Internship and architectural research.|0.2|3|A|
archive|Colors Baby|2024|AI visual study.|1.0|3|V, C|
archive|Maqam Tuning Rules|2025|Technical music documentation.|0.5|3|S, C|
archive|House II: Skin|2009|Architectural installation/model.|0.0|3|A|
archive|The Forgery|2024|Narrative/Code concept.|1.0|3|N, C|
archive|Projectarium AI|2025|AI tool for project management.|1.0|3|C|
archive|Bint Jbeil Rehab|2007|Heritage reconstruction project.|0.0|3|A|
archive|Beirut River Project|2009|Urban revitalization design.|0.0|3|A|
archive|Opera House Design|2008|Large scale architectural design.|0.0|3|A|
archive|Barbican Release|2015|Major performance event London.|0.6|3|S|
archive|Cannes Private Party|2014|Performance for film festival.|0.5|3|S|
archive|Festival Transart|2016|Performance in Bolzano, Italy.|0.5|3|S|
archive|Cairo MUSIC PARK|2017|Performance in Egypt.|0.2|3|S|
archive|Shim El Yasmeen|2009|Foundation song/Project.|0.0|3|S|
archive|Absolut Transform|2015|Brand/Music collaboration.|0.0|3|I, S|
archive|Walaw Manifesto|2021|The origin text of Walaw Studio.|1.0|3|N|
archive|The Beirut School (Album)|2019|Final anthology album.|0.0|3|S|`;

const CURRENT_YEAR = 2026;
const DOMAIN_CODE_MAP = {
  A: 'space',
  C: 'code',
  I: 'systems',
  N: 'text',
  S: 'sound',
  V: 'image',
};

const PROJECT_PAGE_IDS = new Set([
  "1000-strings-at-rest",
  "3d-beat-synth",
  "architecture-in-low-res",
  "autopsy-beirut-phantom",
  "cartography-of-absence",
  "codeverse-explorer",
  "derive",
  "hah-was",
  "kardia",
  "maqamai",
  "mashrou-leila",
  "mekena-nyc",
  "music-engines",
  "photon-plus",
  "resonance-atlas",
  "sometimes-i-wake-up-elsewhere",
  "space-time-tuning-machine",
  "storylines",
  "tebr",
  "why-were-like-this"
]);

const ID_OVERRIDES = {
  'the-localization-gap': 'localization-gap',
  'the-cost-of-being-queer-and-arab': 'cost-of-being-queer-and-arab',
  'the-cartography-of-absence': 'cartography-of-absence',
  'the-crane-song': 'crane-song',
  'the-meaning-stack': 'meaning-stack',
  'ibn-el-leil': 'ibn-el-leil-album',
  'raasuk': 'raasuk-album',
  'roman-mv': 'roman-video',
  '1-000-strings-at-rest': '1000-strings-at-rest',
  'derive-engine': 'derive',
  'de-rive-engine': 'derive',
  'd-rive-engine': 'derive',
  'photon': 'photon-plus',
  'maqam-tuning-rules': 'maqamai',
  'the-autopsy-interface': 'autopsy-beirut-phantom',
  'm-bius-engine': 'mobius-engine',
  'initaf-the-turn': 'initaf-the-turn',
};

const CONNECTION_ALIASES = {
  '427 Tracks': ['427-ai-tracks-archive'],
  'All current NYC nodes': ['fictive-environments', 'mekena-nyc', 'lede-nyc', 'new-york-voices', 'people-like-us-podcast'],
  AUB: ['aub-architecture-b-arch'],
  B018: ['b018-nightclub'],
  Beirut: ['the-beirut-school', 'beirut-river-project', 'b018-nightclub'],
  'Beirut School': ['the-beirut-school'],
  'Body Log': ['body-maintenance-log'],
  'Cartography of Absence': ['cartography-of-absence'],
  'Cost of Being Queer': ['cost-of-being-queer-and-arab'],
  'Crane Song': ['crane-song'],
  DW5: ['plot-house'],
  'DÉRIVE': ['derive'],
  'El Hal Romancy': ['el-hal-romancy'],
  Elsewhere: ['sometimes-i-wake-up-elsewhere', 'nowhere-elsewhere'],
  'Fawzi Azar Award': ['fawzi-azar-award'],
  'Fictive Environments': ['fictive-environments'],
  FRANK: ['frank'],
  Global: ['mashrou-leila'],
  'HAH-WAS': ['hah-was'],
  Heroes: ['heroes-of-a-transitional-time'],
  'Ibn El Leil': ['ibn-el-leil-album'],
  'ITP Camp': ['itp-camp-prototypes'],
  Kaboos: ['kaboos-kaleidoscope'],
  Labyrinth: ['the-labyrinth'],
  'Leila (2009)': ['mashrou-leila'],
  Lilly: ['lilly-doesnt-care-anymore'],
  'Localization Gap': ['localization-gap'],
  London: ['the-bartlett-m-arch', 'barbican-release'],
  'Loop Corridor': ['loop-corridor'],
  'Low Res': ['architecture-in-low-res'],
  'Low Res Thesis': ['architecture-in-low-res'],
  "Mashrou' Leila": ['mashrou-leila'],
  'Meaning Stack': ['meaning-stack'],
  MEKENA: ['mekena-nyc'],
  'Museum project': ['museum-of-architecture'],
  'New York': ['mekena-nyc', 'new-york-voices', 'nyu-kevorkian-residency'],
  'NYU Residency': ['nyu-kevorkian-residency'],
  'Performance Cluster': ['vessel-orchestra', 'vessel-orchestra-met', 'new-york-voices'],
  'Plot House': ['plot-house'],
  'Public Theater': ['new-york-voices'],
  Raasuk: ['raasuk-album'],
  'Rolling Stone': ['rolling-stone-cover'],
  'Sharjah Art': ['marra-tein-residency'],
  "Sophie's World": ['sophies-world'],
  STTM: ['space-time-tuning-machine'],
  "SYBIL's Archive": ['the-archive'],
  'Systems Choreography': ['systems-choreography'],
  TEBR: ['tebr'],
  Telescode: ['telescode'],
  'The Annex': ['the-annex'],
  'The Labyrinth': ['the-labyrinth'],
  'Variations on Cranes': ['variations-on-cranes'],
  'Walaw Studio': ['walaw-manifesto'],
};

const EXISTING_NODE_OVERRIDES = {
  "derive": {
    "title": "DERIVE",
    "domains": [
      "code",
      "systems",
      "sound"
    ],
    "summary": "DERIVE models memory as emotional adjacency instead of chronology, turning fragmented archives into a navigable, performable system.",
    "image": "/images/atlas/derive-memory-navigation-system.webp",
    "shortTitle": "DERIVE",
    "position": [
      8.05,
      15.65,
      -16.78
    ]
  },
  "space-time-tuning-machine": {
    "title": "SPACE TIME TUNING MACHINE",
    "domains": [
      "sound",
      "space",
      "systems"
    ],
    "summary": "STTM reframes the instrument as a diegetic prototype from a future that has not arrived yet, and the performer as a conductor inside a dialogic system.",
    "image": "/images/atlas/sttm-broad-museum-installation.webp",
    "shortTitle": "STTM",
    "position": [
      -6.9,
      3.55,
      -17.98
    ]
  },
  "storylines": {
    "title": "STORYLINES",
    "domains": [
      "code",
      "text",
      "image"
    ],
    "summary": "STORYLINES shows how abstract ideas can be translated into a working relational interface that remains legible, surprising, and technically credible.",
    "image": "/images/atlas/storylines-graph-interface.webp",
    "shortTitle": "STORYLINES",
    "position": [
      17.25,
      14.5,
      -21.58
    ]
  },
  "mashrou-leila": {
    "title": "MASHROU' LEILA",
    "domains": [
      "sound",
      "image",
      "space",
      "systems"
    ],
    "summary": "Mashrou’ Leila is the clearest proof that the practice can operate simultaneously at the scale of art, institution, and geopolitical pressure.",
    "image": "/images/atlas/mashrou-leila-baalbeck-roman-ruins.webp",
    "shortTitle": "MASHROU",
    "position": [
      -35.65,
      -16.75,
      -10.4
    ]
  },
  "mashrou-self-titled-ep": {
    "title": "MASHROU' LEILA - SELF-TITLED EP",
    "domains": [
      "sound",
      "image"
    ],
    "summary": "The debut EP established the band's graphic language and emotional register before the project scaled into a transnational counter-public.",
    "image": "/images/atlas/mashrou-leila-self-titled-ep-cover.webp",
    "hasProjectPage": false,
    "shortTitle": "ML-EP",
    "position": [
      -41.28,
      -13.16,
      -14.9
    ]
  },
  "el-hal-romancy": {
    "title": "EL HAL ROMANCY",
    "domains": [
      "sound",
      "image"
    ],
    "summary": "El Hal Romancy pushed the early Mashrou' Leila world into a richer narrative and visual mythology while the audience around the band was rapidly expanding.",
    "image": "/images/atlas/el-hal-romancy-album.webp",
    "hasProjectPage": false,
    "shortTitle": "ROMANCY",
    "position": [
      -37.41,
      -8.64,
      -16.16
    ]
  },
  "raasuk-album": {
    "title": "RAASUK",
    "domains": [
      "sound",
      "image"
    ],
    "summary": "Raasuk marks the moment the band's visual and sonic language became unmistakably iconic: direct, synthetic, theatrical, and politically alert.",
    "image": "/images/atlas/raasuk-album-cover.webp",
    "hasProjectPage": false,
    "shortTitle": "RAASUK",
    "position": [
      -31.2,
      -9.34,
      -15.71
    ]
  },
  "ibn-el-leil-album": {
    "title": "IBN EL LEIL",
    "domains": [
      "sound",
      "image"
    ],
    "summary": "Ibn El Leil distilled Beirut nightlife, risk, and queer futurity into the band's most internationally legible full-length release.",
    "image": "/images/atlas/ibn-el-leil-album-cover-full.webp",
    "hasProjectPage": false,
    "shortTitle": "IBN EL LEIL",
    "position": [
      -27,
      -13.4,
      -15.44
    ]
  },
  "roman-video": {
    "title": "ROMAN",
    "domains": [
      "image",
      "sound"
    ],
    "summary": "Roman became the anchor image for the band's late visual era, and serves here as the doorway into the broader music video archive.",
    "image": "/images/atlas/roman-music-video-still.webp",
    "hasProjectPage": false,
    "actionHref": "https://www.youtube.com/playlist?list=PL0O4hK3C5ZP8PAawTLADz0eaTqD_efPgc",
    "actionLabel": "WATCH PLAYLIST",
    "shortTitle": "ROMAN",
    "position": [
      -26.07,
      -18.78,
      -16.25
    ]
  },
  "baalbeck-2017": {
    "title": "BAALBECK INTERNATIONAL FESTIVAL",
    "domains": [
      "space",
      "sound",
      "image"
    ],
    "summary": "Baalbeck reframed the band against one of the region's most symbolically loaded stages: Roman ruins, mass audience, and live political intensity.",
    "image": "/images/atlas/baalbeck-international-festival-2017.webp",
    "hasProjectPage": false,
    "shortTitle": "BAALBECK",
    "position": [
      -29.27,
      -24.16,
      -18.23
    ]
  },
  "rolling-stone-cover": {
    "title": "ROLLING STONE MIDDLE EAST COVER",
    "domains": [
      "image",
      "systems"
    ],
    "summary": "The Rolling Stone Middle East cover formalized the band's crossover into a broader regional and international media imaginary.",
    "image": "/images/atlas/rolling-stone-mena-cover-mashrou.webp",
    "hasProjectPage": false,
    "shortTitle": "ROLLING STONE",
    "position": [
      -35.4,
      -25.25,
      -18.68
    ]
  },
  "cost-of-being-queer-and-arab": {
    "title": "THE COST OF BEING QUEER AND ARAB",
    "domains": [
      "text",
      "image",
      "systems"
    ],
    "summary": "This press node tracks the public argument around the band once visibility, censorship, and personal risk became impossible to separate.",
    "image": "/images/atlas/cost-of-being-queer-arab-nyt.webp",
    "hasProjectPage": false,
    "shortTitle": "QUEER & ARAB",
    "position": [
      -40.94,
      -21.74,
      -17.78
    ]
  },
  "haoud-i-will-return": {
    "title": "HA'OUD (I WILL RETURN)",
    "domains": [
      "sound",
      "image"
    ],
    "summary": "The Yo-Yo Ma collaboration demonstrates how Mashrou' Leila's voice could travel into a wider global frame without losing its political and emotional specificity.",
    "image": "/images/atlas/haoud-yo-yo-ma-byblos-performance.webp",
    "hasProjectPage": false,
    "shortTitle": "HAOUD",
    "position": [
      -42.12,
      -16.05,
      -18.32
    ]
  },
  "salam-block9": {
    "title": "SALAM / BLOCK9",
    "domains": [
      "sound",
      "image",
      "space"
    ],
    "summary": "The Roisin Murphy collaboration and Block9 context widen the band's field from album-cycle outputs into queer nightlife and solidarity infrastructure.",
    "image": "/images/atlas/salam-block9-roisin-murphy.webp",
    "hasProjectPage": false,
    "shortTitle": "SALAM",
    "position": [
      -39.77,
      -10.9,
      -17.6
    ]
  },
  "beyrouth-et-beyrouth": {
    "title": "BEYROUTH ET BEYROUTH",
    "domains": [
      "text",
      "sound",
      "image"
    ],
    "summary": "This node treats Beyrouth et Beyrouth as a cultural document orbiting the band: part release object, part record of the city that made the work possible.",
    "image": "/images/atlas/beyrouth-et-beyrouth-beirut-school.webp",
    "hasProjectPage": false,
    "shortTitle": "BEYROUTH",
    "position": [
      -35.15,
      -6.84,
      -18.41
    ]
  },
  "mekena-nyc": {
    "title": "MEKENA NYC",
    "domains": [
      "space",
      "systems"
    ],
    "summary": "MEKENA makes the spatial argument explicit: the same systems thinking driving the software and performance work can operate at the scale of an actual building.",
    "image": "/images/atlas/mekena-nyc-queens-exterior.webp",
    "shortTitle": "MEKENA",
    "position": [
      32.2,
      13,
      -20.38
    ]
  },
  "sometimes-i-wake-up-elsewhere": {
    "title": "SOMETIMES I WAKE UP ELSEWHERE",
    "domains": [
      "text",
      "code",
      "systems"
    ],
    "summary": "SIWUE is one of the clearest examples of literary logic translated into software architecture without losing emotional force.",
    "image": "/images/atlas/siwue-manuscript-fragment.webp",
    "shortTitle": "SIWUE",
    "position": [
      4.6,
      11.93,
      -20.38
    ]
  },
  "tebr": {
    "title": "TEBR",
    "domains": [
      "sound",
      "systems",
      "code"
    ],
    "summary": "The project converts machine failure, archive residue, and cultural specificity into a deliberate compositional territory rather than a problem to be corrected away.",
    "shortTitle": "TEBR",
    "position": [
      -3.45,
      17.85,
      -17.98
    ],
    "image": "/images/atlas/tebr-violin-waveform.webp"
  },
  "hah-was": {
    "title": "HAH-WAS",
    "domains": [
      "code",
      "systems",
      "text"
    ],
    "summary": "HAH-WAS is one of the clearest statements in the portfolio that cultural erasure in AI is not accidental noise but a measurable consequence of training assumptions.",
    "image": "/images/atlas/hah-was-hallucination-detection-ui.webp",
    "shortTitle": "HAH-WAS",
    "position": [
      2.3,
      12.43,
      -21.2
    ]
  },
  "3d-beat-synth": {
    "title": "3D-BEAT-SYNTH",
    "domains": [
      "code",
      "sound",
      "image"
    ],
    "summary": "This is one of the most immediately legible proofs in the portfolio that technical experimentation can stay conceptually clean and experientially immediate.",
    "image": "/images/atlas/3d-beat-synth-webgl-interface.webp",
    "shortTitle": "3DBEAT",
    "position": [
      18.4,
      15.18,
      -23.6
    ]
  },
  "resonance-atlas": {
    "title": "RESONANCE ATLAS",
    "domains": [
      "systems",
      "sound",
      "text"
    ],
    "summary": "Resonance Atlas names the broader field that several projects are already operating within, which gives the research a cumulative rather than scattered presence.",
    "image": "/images/atlas/resonance-atlas-spatial-sound-map.webp",
    "shortTitle": "RESONANCE",
    "position": [
      0,
      17.05,
      -21.2
    ]
  },
  "maqamai": {
    "title": "MAQAMAI",
    "domains": [
      "code",
      "sound",
      "text"
    ],
    "summary": "MaqamAI fills the human infrastructure gap between recognizing model failure and being able to hear what is missing in the first place.",
    "shortTitle": "MAQAMAI",
    "position": [
      2.3,
      19.5,
      -22.4
    ],
    "image": "/images/atlas/maqamai-maqam-ai-interface.webp"
  },
  "autopsy-beirut-phantom": {
    "title": "THE AUTOPSY / BEIRUT PHANTOM",
    "domains": [
      "space",
      "image",
      "systems"
    ],
    "summary": "This is the spatial media branch of the same low-resolution, fragment-aware logic running through the rest of the practice.",
    "image": "/images/atlas/autopsy-beirut-phantom-spatial-media.webp",
    "shortTitle": "AUTOPSY",
    "position": [
      -31.05,
      19.4,
      -23.6
    ]
  },
  "cartography-of-absence": {
    "title": "THE CARTOGRAPHY OF ABSENCE",
    "domains": [
      "text",
      "systems"
    ],
    "summary": "The Cartography of Absence is one of the cleanest textual statements of the practice’s broader method: structural form carrying the emotional and political argument.",
    "shortTitle": "CARTOGRAPHY",
    "position": [
      -21.85,
      17.35,
      -22.4
    ],
    "image": "/images/atlas/cartography-of-absence-bureaucratic-form.webp"
  },
  "why-were-like-this": {
    "title": "WHY WE'RE LIKE THIS",
    "domains": [
      "text",
      "image",
      "systems"
    ],
    "summary": "This project is the broadest public-facing expression of the practice’s analytical voice: structural, legible, and emotionally direct without collapsing into generic explainers.",
    "image": "/images/atlas/why-were-like-this-interface.webp",
    "shortTitle": "WHYLIKETHIS",
    "position": [
      10.35,
      16.25,
      -24.8
    ]
  },
  "photon-plus": {
    "title": "PHOTON+",
    "domains": [
      "code",
      "sound",
      "image"
    ],
    "summary": "photon+ is one of the most elegant examples in the portfolio of architectural logic being directly translated into an instrument.",
    "image": "/images/atlas/photon-plus-optical-sequencer.webp",
    "shortTitle": "PHOTON+",
    "position": [
      20.7,
      12.5,
      -23.6
    ]
  },
  "codeverse-explorer": {
    "title": "CODEVERSE EXPLORER",
    "domains": [
      "code",
      "systems",
      "space"
    ],
    "summary": "Codeverse extends the exact same relational-spatial method used in STORYLINES into engineering infrastructure, which makes the practice’s cross-domain consistency obvious.",
    "image": "/images/atlas/codeverse-explorer-3d-codebase.webp",
    "shortTitle": "CODEVERSE",
    "position": [
      23,
      14.9,
      -23.6
    ]
  },
  "kardia": {
    "title": "KARDIA",
    "domains": [
      "code",
      "sound",
      "systems"
    ],
    "summary": "Kardia extends the practice’s body-as-signal logic into wellness and therapeutic territory without losing its formal seriousness.",
    "shortTitle": "KARDIA",
    "position": [
      27.6,
      20.9,
      -23.6
    ],
    "image": "/images/atlas/kardia-body-signal-interface.webp"
  },
  "music-engines": {
    "title": "MUSIC-ENGINES",
    "domains": [
      "code",
      "sound",
      "systems"
    ],
    "summary": "music-engines is the invisible backbone that turns critique into reproducible research rather than opinion.",
    "image": "/images/atlas/music-engines-research-engine.webp",
    "shortTitle": "M-ENGINES",
    "position": [
      12.65,
      12,
      -20
    ]
  },
  "architecture-in-low-res": {
    "title": "ARCHITECTURE IN LOW RES",
    "domains": [
      "space",
      "image",
      "text"
    ],
    "summary": "This thesis is the seed crystal for much of the later work: once you see how consistent the lineage is, the portfolio stops looking eclectic and starts looking precise.",
    "image": "/images/atlas/architecture-low-res-thesis-render.webp",
    "shortTitle": "LOWRES",
    "position": [
      -27.6,
      -20.1,
      -21.92
    ]
  },
  "1000-strings-at-rest": {
    "title": "1000 STRINGS AT REST",
    "domains": [
      "sound",
      "space",
      "image"
    ],
    "summary": "Even as an archive entry, this work carries a lot of emotional and methodological weight because it bridges Mashrou’ Leila, STTM, and DERIVE so clearly.",
    "image": "/images/atlas/1000-strings-at-rest-installation.webp",
    "shortTitle": "1000STRINGS",
    "position": [
      -12.65,
      7,
      -23.12
    ]
  }
};

const DOMAIN_X_OFFSETS = {
  sound: -2.8,
  text: 1.3,
  image: 4.6,
  code: 6.2,
  space: -6.8,
  systems: -0.4,
};

const DOMAIN_Y_OFFSETS = {
  sound: 1.2,
  text: -0.6,
  image: 2.2,
  code: 0.2,
  space: -2.4,
  systems: -1.1,
};

const DEPTH_SCALE = 2;

const DEPTH_BASE = {
  1: -11.5,
  2: -18.6,
  3: -25.4,
};

function slugify(value) {
  return String(value || '')
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/&/g, ' and ')
    .replace(/[’']/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .replace(/-+/g, '-');
}

function roundCoord(value) {
  return Math.round(value * 100) / 100;
}

function scaleDepthPosition([x, y, z]) {
  return [roundCoord(x), roundCoord(y), roundCoord(z * DEPTH_SCALE)];
}

function nodeCollisionRadius(node) {
  const tierRadius =
    node.tier === 'lead' ? 2.05 :
    node.tier === 'archive' ? 1.28 :
    1.62;
  const pageRadius = node.hasProjectPage === false ? 0.86 : 1;
  return tierRadius * pageRadius;
}

function nodeMobility(node) {
  if (EXISTING_NODE_OVERRIDES[node.id]?.position) return 0.56;
  if (node.tier === 'lead') return 0.42;
  if (node.tier === 'archive') return 0.88;
  return 0.72;
}

function relaxNodeCollisions(sourceNodes) {
  const relaxed = sourceNodes.map((node) => ({
    node,
    position: [...node.position],
  }));

  const originalCentroid = relaxed.reduce(
    (accumulator, entry) => [
      accumulator[0] + entry.position[0],
      accumulator[1] + entry.position[1],
      accumulator[2] + entry.position[2],
    ],
    [0, 0, 0],
  ).map((value) => value / relaxed.length);

  for (let iteration = 0; iteration < 104; iteration += 1) {
    for (let leftIndex = 0; leftIndex < relaxed.length; leftIndex += 1) {
      for (let rightIndex = leftIndex + 1; rightIndex < relaxed.length; rightIndex += 1) {
        const left = relaxed[leftIndex];
        const right = relaxed[rightIndex];
        const xDelta = right.position[0] - left.position[0];
        const yDelta = right.position[1] - left.position[1];
        const zDelta = (right.position[2] - left.position[2]) * 0.18;
        const weightedDistance = Math.hypot(xDelta, yDelta, zDelta) || 0.001;
        const targetDistance = nodeCollisionRadius(left.node) + nodeCollisionRadius(right.node);

        if (weightedDistance >= targetDistance) continue;

        const fallbackAngle = (seededUnit(`${left.node.id}:${right.node.id}`, 9) * Math.PI * 2);
        const unitX = Math.abs(xDelta) > 0.001 ? xDelta / weightedDistance : Math.cos(fallbackAngle);
        const unitY = Math.abs(yDelta) > 0.001 ? yDelta / weightedDistance : Math.sin(fallbackAngle);
        const unitZ = zDelta / weightedDistance;
        const pressure = (targetDistance - weightedDistance) * 0.2;
        const leftMobility = nodeMobility(left.node);
        const rightMobility = nodeMobility(right.node);
        const mobilityTotal = leftMobility + rightMobility || 1;
        const leftShare = rightMobility / mobilityTotal;
        const rightShare = leftMobility / mobilityTotal;

        left.position[0] = roundCoord(left.position[0] - unitX * pressure * leftShare);
        left.position[1] = roundCoord(left.position[1] - unitY * pressure * leftShare);
        right.position[0] = roundCoord(right.position[0] + unitX * pressure * rightShare);
        right.position[1] = roundCoord(right.position[1] + unitY * pressure * rightShare);

        if (Math.abs(right.position[2] - left.position[2]) < 4.2) {
          const zPressure = pressure * 0.22;
          left.position[2] = roundCoord(left.position[2] - unitZ * zPressure * leftShare);
          right.position[2] = roundCoord(right.position[2] + unitZ * zPressure * rightShare);
        }
      }
    }
  }

  const relaxedCentroid = relaxed.reduce(
    (accumulator, entry) => [
      accumulator[0] + entry.position[0],
      accumulator[1] + entry.position[1],
      accumulator[2] + entry.position[2],
    ],
    [0, 0, 0],
  ).map((value) => value / relaxed.length);

  const recenter = [
    originalCentroid[0] - relaxedCentroid[0],
    originalCentroid[1] - relaxedCentroid[1],
    originalCentroid[2] - relaxedCentroid[2],
  ];

  relaxed.forEach((entry) => {
    entry.node.position = [
      roundCoord(entry.position[0] + recenter[0]),
      roundCoord(entry.position[1] + recenter[1]),
      roundCoord(entry.position[2] + recenter[2]),
    ];
  });
}

const VIEW_SEPARATION_OFFSETS = {
  'the-erasure-protocols': [3.1, -1.15, -0.2],
  'new-york-voices': [-1.25, 1.05, 0.2],
  'people-like-us-podcast': [2.65, 1.1, 0.15],
  menara: [-1.35, -1.15, -0.15],
  storylines: [3.2, 0.9, 0.25],
  'the-annex': [-2.7, -0.9, -0.25],
};

function applyViewSeparationOffsets(sourceNodes) {
  sourceNodes.forEach((node) => {
    const offset = VIEW_SEPARATION_OFFSETS[node.id];
    if (!offset) return;

    node.position = [
      roundCoord(node.position[0] + offset[0]),
      roundCoord(node.position[1] + offset[1]),
      roundCoord(node.position[2] + offset[2]),
    ];
  });
}

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}

function hashString(value) {
  let hash = 2166136261;
  for (let index = 0; index < value.length; index += 1) {
    hash ^= value.charCodeAt(index);
    hash = Math.imul(hash, 16777619);
  }
  return hash >>> 0;
}

function seededUnit(value, salt) {
  const hash = hashString(`${value}:${salt}`);
  return (hash % 1000) / 1000;
}

function parseTimelineYear(label) {
  const parts = String(label || '').match(/\d{2,4}/g) || [];
  if (!parts.length) return CURRENT_YEAR;

  const normalized = parts.map((part, index) => {
    if (part.length === 4) return Number(part);
    const anchor = parts[index > 0 ? 0 : index] || '20';
    const prefix = anchor.length === 4 ? anchor.slice(0, 2) : '20';
    return Number(`${prefix}${part}`);
  });

  if (normalized.length >= 2) {
    return (normalized[0] + normalized[1]) / 2;
  }

  if (/[+–-]\s*$/.test(String(label || ''))) {
    return Math.min(CURRENT_YEAR, normalized[0] + 1);
  }

  return normalized[0];
}

function sentenceCase(value) {
  const text = String(value || '').trim();
  if (!text) return '';
  return /[.!?]["']?$/.test(text) ? text : `${text}.`;
}

function titleCaseDomain(domain) {
  const label = DOMAIN_LABELS[domain] || domain || '';
  return label.charAt(0) + label.slice(1).toLowerCase();
}

function normalizeDomains(field) {
  return String(field || '')
    .split(',')
    .map((token) => token.trim())
    .filter(Boolean)
    .map((token) => DOMAIN_CODE_MAP[token])
    .filter(Boolean);
}

function parseRows(raw) {
  return raw
    .trim()
    .split('\n')
    .map((line) => {
      const [tier, title, year, summary, contextX, depth, domains, connections = ''] = line.split('|');
      const slug = slugify(title);
      return {
        id: ID_OVERRIDES[slug] || slug,
        title,
        year,
        summary,
        tier,
        depth: Number(depth || 3),
        contextX: Number(contextX || 0),
        domains,
        connectionLabels: connections
          .split(',')
          .map((item) => item.trim())
          .filter(Boolean),
      };
    });
}

function buildLookup(rows) {
  const lookup = new Map();

  function register(key, id) {
    const normalized = slugify(key);
    if (!normalized) return;
    if (!lookup.has(normalized)) lookup.set(normalized, new Set());
    lookup.get(normalized).add(id);
  }

  rows.forEach((row) => {
    const variants = new Set([
      row.id,
      row.id.replace(/-album$/, ''),
      row.id.replace(/-mv$/, ''),
      row.id.replace(/^the-/, ''),
      row.title,
      row.title.replace(/^The\s+/i, ''),
    ]);

    variants.forEach((variant) => register(variant, row.id));
  });

  return lookup;
}

function resolveConnectionIds(labels, selfId, lookup) {
  const resolved = new Set();

  labels.forEach((label) => {
    if (CONNECTION_ALIASES[label]) {
      CONNECTION_ALIASES[label].forEach((id) => resolved.add(id));
      return;
    }

    const normalized = slugify(label);
    const directId = ID_OVERRIDES[normalized] || normalized;
    if (lookup.has(directId)) {
      lookup.get(directId).forEach((id) => resolved.add(id));
      return;
    }

    if (lookup.has(normalized)) {
      lookup.get(normalized).forEach((id) => resolved.add(id));
      return;
    }

    const noArticle = normalized.replace(/^the-/, '');
    if (lookup.has(noArticle)) {
      lookup.get(noArticle).forEach((id) => resolved.add(id));
    }
  });

  resolved.delete(selfId);
  return [...resolved];
}

const parsedRows = parseRows(RAW_TABLE);
const lookup = buildLookup(parsedRows);
const timelineValues = parsedRows.map((row) => parseTimelineYear(row.year));
const yearCenter = (Math.min(...timelineValues) + Math.max(...timelineValues)) / 2;

function deriveStack(node) {
  return node.domains.slice(0, 3).map((domain) => titleCaseDomain(domain));
}

function makeShortTitle(title) {
  const clean = String(title || '')
    .replace(/\([^)]*\)/g, '')
    .replace(/[^A-Za-z0-9 ]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .toUpperCase();

  if (!clean) return '';
  if (clean.length <= 16) return clean;

  const words = clean.split(' ');
  if (words.length === 1 && clean.length <= 18) return clean;
  if (words.length === 2 && words.join(' ').length <= 16) return words.join(' ');
  return '';
}

function placeholderImage(node) {
  const color = DOMAIN_COLORS[node.domains[0]] || '#ffffff';
  const title = String(node.title || '').replace(/\s*\([^)]*\)/g, '').toUpperCase();
  const svg = [
    '<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="800" viewBox="0 0 1200 800">',
    '<rect width="1200" height="800" fill="#050508"/>',
    '<rect x="32" y="32" width="1136" height="736" fill="none" stroke="' + color + '" stroke-opacity="0.35" stroke-width="2"/>',
    '<rect x="54" y="54" width="1092" height="14" fill="' + color + '" fill-opacity="0.7"/>',
    '<g opacity="0.14"><path d="M0 220 H1200 M0 420 H1200 M0 620 H1200 M300 0 V800 M600 0 V800 M900 0 V800" stroke="' + color + '" stroke-width="1"/></g>',
    '<text x="68" y="126" fill="' + color + '" font-family="DM Sans, sans-serif" font-size="24" letter-spacing="8">' + (node.year || '') + '</text>',
    '<text x="68" y="350" fill="#f5f5f5" font-family="DM Sans, sans-serif" font-size="92" font-weight="700">' + title + '</text>',
    '</svg>',
  ].join('');

  return 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svg);
}

function computeBasePosition(node) {
  const override = EXISTING_NODE_OVERRIDES[node.id];
  if (override?.position) return scaleDepthPosition(override.position);

  const primaryDomain = node.domains[0] || 'systems';
  const jitterX = (seededUnit(node.id, 1) - 0.5) * (node.depth === 1 ? 4 : node.depth === 2 ? 5.5 : 6.5);
  const jitterY = (seededUnit(node.id, 2) - 0.5) * (node.depth === 1 ? 2.8 : node.depth === 2 ? 3.6 : 4.2);
  const jitterZ = (seededUnit(node.id, 3) - 0.5) * 2.4;
  const connectionBias = clamp(node.connections.length * 0.35, 0, 3.2);
  const x = ((node.contextX * 2) - 1) * 20 + (DOMAIN_X_OFFSETS[primaryDomain] || 0) + jitterX;
  const y = (parseTimelineYear(node.year) - yearCenter) * 1.85 + (DOMAIN_Y_OFFSETS[primaryDomain] || 0) + jitterY;
  const z = (DEPTH_BASE[node.depth] || DEPTH_BASE[3]) - connectionBias + jitterZ;

  return scaleDepthPosition([x, y, z]);
}

const nodes = parsedRows.map((row) => {
  const override = EXISTING_NODE_OVERRIDES[row.id] || {};
  const domains = override.domains || normalizeDomains(row.domains);
  const node = {
    id: row.id,
    title: override.title || row.title,
    year: row.year,
    tier: row.tier,
    summary: override.summary || sentenceCase(row.summary),
    domains,
    stack: deriveStack({ domains }),
    connections: [],
    depth: row.depth,
    contextX: row.contextX,
    position: [0, 0, 0],
    shortTitle: override.shortTitle || makeShortTitle(row.title),
    image: override.image || null,
    hasProjectPage: override.hasProjectPage === false ? false : PROJECT_PAGE_IDS.has(row.id),
    actionHref: override.actionHref || null,
    actionLabel: override.actionLabel || null,
    connectionLabels: row.connectionLabels,
  };

  node.connections = resolveConnectionIds(row.connectionLabels, row.id, lookup);
  node.position = computeBasePosition(node);
  return node;
});

const positionMap = new Map(nodes.map((node) => [node.id, node.position]));

nodes.forEach((node) => {
  if (EXISTING_NODE_OVERRIDES[node.id]?.position) return;
  if (!node.connections.length) return;

  const anchors = node.connections
    .map((id) => positionMap.get(id))
    .filter(Boolean);

  if (!anchors.length) return;

  const average = anchors.reduce(
    (accumulator, current) => [
      accumulator[0] + current[0],
      accumulator[1] + current[1],
      accumulator[2] + current[2],
    ],
    [0, 0, 0],
  ).map((value) => value / anchors.length);

  const blend = node.depth === 1 ? 0.22 : node.depth === 2 ? 0.34 : 0.26;
  node.position = [
    roundCoord(node.position[0] * (1 - blend) + average[0] * blend),
    roundCoord(node.position[1] * (1 - blend) + average[1] * blend),
    roundCoord(Math.min(node.position[2], node.position[2] * (1 - blend) + average[2] * blend - 0.4)),
  ];
  positionMap.set(node.id, node.position);
});

relaxNodeCollisions(nodes);
applyViewSeparationOffsets(nodes);

const REMOVED_NODE_IDS = new Set([
  'absolut-transform',
  'beau-and-griffin',
  'beirut-blast-relief',
  'bint-jbeil-rehab',
  'cairo-music-park',
  'cannes-private-party',
  'lava-object',
  'cerf-volant',
  'doha-tribeca-film-fest',
  'festival-transart',
  'fawzi-azar-award',
  'how-to-walk-with-friends',
  'in-itaf-the-turn',
  'kaboos-kaleidoscope',
  'lowlands-festival',
  'marsa-clinic-event',
  'montreux-jazz-festival',
  'oslo-world',
  'paleo-festival',
  'phil-and-joe-barbershop',
  'sawa-aid-concert',
  'seal-concert',
  'skoun-concert',
  'the-erasure-protocols',
  'toronto-pride',
  'toros-roslin-award',
  'variations-on-cranes',
  'ysl-museum-opening',
]);

const IMAGE_OVERRIDES = {
  '1000-strings-at-rest': '/images/atlas/1000-strings-at-rest-installation.webp',
  '2006-reconstruction': '/images/atlas/2006-reconstruction-south-lebanon.webp',
  '3-minutes-mv': '/images/atlas/3-minutes-fan-collaborated-video.webp',
  '3d-beat-synth': '/images/atlas/3d-beat-synth-webgl-interface.webp',
  '401-songs-database': '/images/atlas/localization-gap-batch-processing-yield-terminal.webp',
  '427-ai-tracks-archive': '/images/atlas/427-tracks-notion-taxonomy.webp',
  'ants-design-store': '/images/atlas/ants-design-store-interior.webp',
  'arabic-pop-1925-2025': '/images/atlas/arabic-pop-1925-2025-archive-map.webp',
  'architecting-the-liminal': '/images/atlas/derive-boids-vector-flow-field.webp',
  'architecture-in-low-res': '/images/atlas/architecture-low-res-thesis-render.webp',
  'architectures-of-belonging': '/images/atlas/architectures-of-belonging-cohesion-model.webp',
  'archive-of-unwritten-songs': '/images/atlas/archive-unwritten-songs-generative.webp',
  'aoede-mv': '/images/atlas/aoede-experimental-video.webp',
  'artistic-freedom-initiative': '/images/atlas/artistic-freedom-archive-of-bans-censorship.webp',
  'aub-150th-documentary': '/images/atlas/aub-150th-documentary-production.webp',
  'aub-architecture-b-arch': '/images/atlas/aub-barch-beirut-campus.webp',
  'auditions-for-a-battle': '/images/atlas/auditions-for-a-battle-performance-video.webp',
  'autopsy-beirut-phantom': '/images/atlas/autopsy-beirut-phantom-spatial-media.webp',
  'b018-nightclub': '/images/atlas/b018-nightclub-dw5-interior.webp',
  'baalbeck-2017': '/images/atlas/baalbeck-international-festival-2017.webp',
  'banksy-block-9-retreat': '/images/atlas/banksy-block9-walled-off-hotel.webp',
  'barbican-release': '/images/atlas/barbican-release-london-performance.webp',
  'beirut-river-project': '/images/atlas/beirut-river-project-map.webp',
  'beyrouth-et-beyrouth': '/images/atlas/beyrouth-et-beyrouth-beirut-school.webp',
  'body-maintenance-log': '/images/atlas/body-maintenance-log-document-art.webp',
  'bourj-hammoud-thesis': '/images/atlas/bourj-hammoud-urban-thesis.webp',
  'bureaucratic-surrealism': '/images/atlas/bureaucratic-surrealism-form-detail.webp',
  'cartography-of-absence': '/images/atlas/cartography-of-absence-bureaucratic-form.webp',
  'cavalry-mv': '/images/atlas/cavalry-music-video-militarized.webp',
  'codeverse-explorer': '/images/atlas/codeverse-explorer-3d-codebase.webp',
  'colors-baby': '/images/atlas/colors-baby-ai-music-video.webp',
  'cost-of-being-queer-and-arab': '/images/atlas/cost-of-being-queer-arab-nyt.webp',
  'crane-song': '/images/atlas/crane-song-sarkis-ai-bird.webp',
  'derive': '/images/atlas/derive-memory-navigation-system.webp',
  'el-hal-romancy': '/images/atlas/el-hal-romancy-album.webp',
  'exit-festival': '/images/atlas/exit-festival-serbia-2011.webp',
  'fasateen-mv': '/images/atlas/fasateen-music-video-still.webp',
  'fictive-environments': '/images/atlas/fictive-environments-studio-identity.webp',
  'frank': '/images/atlas/frank-bias-detection-ui.webp',
  'galaxy-birds': '/images/atlas/galaxy-birds-generative-art.webp',
  'ghost-city': '/images/atlas/cartography-of-absence-data-void-absence-index.webp',
  'greenpeace-campaign': '/images/atlas/greenpeace-campaign-renewable-energy.webp',
  'hah-was': '/images/atlas/hah-was-hallucination-detection-ui.webp',
  'haoud-i-will-return': '/images/atlas/haoud-yo-yo-ma-byblos-performance.webp',
  'heroes-of-a-transitional-time': '/images/atlas/heroes-transitional-time-exhibition.webp',
  'hercules-and-love-affair': '/images/atlas/hercules-love-affair-are-you-still-certain.webp',
  'home-workspace-hwp': '/images/atlas/home-workspace-ashkal-alwan.webp',
  'house-ii-skin': '/images/atlas/house-ii-skin-architectural-model.webp',
  'ibn-el-leil-album': '/images/atlas/ibn-el-leil-album-cover-full.webp',
  'itp-camp-prototypes': '/images/atlas/itp-camp-prototypes-2024.webp',
  'kardia': '/images/atlas/kardia-body-signal-interface.webp',
  'lede-nyc': '/images/atlas/lede-nyc-civic-intelligence-ui.webp',
  'lil-watan-mv': '/images/atlas/lil-watan-political-satire-video.webp',
  'lilly-doesnt-care-anymore': '/images/atlas/lilly-doesnt-care-2d-animation.webp',
  'localization-gap': '/images/atlas/localization-gap-maqam-spectrogram.webp',
  'loop-corridor': '/images/atlas/loop-corridor-feedback-system.webp',
  'lost-souls-of-saturn': '/images/atlas/lost-souls-saturn-bint-el-khandaq.webp',
  'louvre-abu-dhabi': '/images/atlas/louvre-abu-dhabi-jean-nouvel-internship.webp',
  'map-of-the-wound': '/images/atlas/map-of-the-wound-literary-visual.webp',
  'marra-tein-residency': '/images/atlas/marra-tein-residency-beirut.webp',
  'maqamai': '/images/atlas/maqamai-maqam-ai-interface.webp',
  'mashrou-leila': '/images/atlas/mashrou-leila-baalbeck-roman-ruins.webp',
  'mashrou-self-titled-ep': '/images/atlas/mashrou-leila-self-titled-ep-cover.webp',
  'material-for-a-novel': '/images/atlas/material-for-a-novel-video-still.webp',
  'material-for-a-novel-research-piece': '/images/atlas/material-for-a-novel-research-still.webp',
  'meaning-stack': '/images/atlas/meaning-stack-github-constellation.webp',
  'mekena-nyc': '/images/atlas/mekena-nyc-queens-exterior.webp',
  'menara': '/images/atlas/menara-generative-architectural-render.webp',
  'mika-collaboration': '/images/atlas/mika-promiseland-sursock-palace.webp',
  'mobius-engine': '/images/atlas/mobius-engine-binary-data-topology.webp',
  'museum-of-architecture': '/images/atlas/museum-of-architecture-aub-design.webp',
  'music-engines': '/images/atlas/music-engines-research-engine.webp',
  'nebucat': '/images/atlas/sparrowos-pixel-eye-icon.webp',
  'new-york-voices': '/images/atlas/new-york-voices-joes-pub.webp',
  'non-linear-time': '/images/atlas/navigating-latency-temporal-routing.webp',
  'nowhere-elsewhere': '/images/atlas/nowhere-elsewhere-transit-visual.webp',
  'npr-tiny-desk': '/images/atlas/npr-tiny-desk-mashrou-leila.webp',
  'nyu-kevorkian-residency': '/images/atlas/nyu-kevorkian-great-gig-exhibition.webp',
  'opera-house-design': '/images/atlas/opera-house-design-aub-project.webp',
  'people-like-us-podcast': '/images/atlas/people-like-us-podcast-visual-identity.webp',
  'photon-plus': '/images/atlas/photon-plus-optical-sequencer.webp',
  'plot-1063-tower': '/images/atlas/plot-1063-tower-beirut.webp',
  'plot-house': '/images/atlas/plot-house-beirut-dw5.webp',
  'post-apocalyptic-walking-tour': '/images/atlas/post-apocalyptic-walking-tour-beirut-ar.webp',
  'post-conflict-urbanism': '/images/atlas/post-conflict-urbanism-south-lebanon.webp',
  'project-zero': '/images/atlas/project-zero-civic-protocol.webp',
  'projectarium-ai': '/images/atlas/projectarium-ai-speculative-forms-grid.webp',
  'raasuk-album': '/images/atlas/raasuk-album-cover.webp',
  'radio-romance-mv': '/images/atlas/radio-romance-narrative-video.webp',
  'resonance-atlas': '/images/atlas/resonance-atlas-spatial-sound-map.webp',
  'roisin-murphy': '/images/atlas/roisin-murphy-salam-banksy.webp',
  'rolling-stone-cover': '/images/atlas/rolling-stone-mena-cover-mashrou.webp',
  'roman-video': '/images/atlas/roman-music-video-still.webp',
  'raksit-leila-mv': '/images/atlas/raksit-leila-video-still.webp',
  'salam-block9': '/images/atlas/salam-block9-roisin-murphy.webp',
  'shim-el-yasmeen': '/images/atlas/shim-el-yasmeen-foundation-song.webp',
  'skyline-of-insomnia': '/images/atlas/skyline-insomnia-nocturnal-beirut.webp',
  'sometimes-i-wake-up-elsewhere': '/images/atlas/siwue-manuscript-fragment.webp',
  'souad': '/images/atlas/souad-family-archive-installation.webp',
  'sophies-world': '/images/atlas/sophies-world-film-still.webp',
  'space-time-tuning-machine': '/images/atlas/sttm-broad-museum-installation.webp',
  'speculative-narrative-design': '/images/atlas/speculative-narrative-design-workshop.webp',
  'stage-architecture': '/images/atlas/stage-architecture-mashrou-tour.webp',
  'storylines': '/images/atlas/storylines-graph-interface.webp',
  'sunburn': '/images/atlas/sunburn-weather-sonification.webp',
  'systems-choreography': '/images/atlas/systems-choreography-diagram.webp',
  'tebr': '/images/atlas/tebr-violin-waveform.webp',
  'telescode': '/images/atlas/telescode-code-visualization.webp',
  'the-annex': '/images/atlas/the-annex-stage-design-script.webp',
  'the-archive': '/images/atlas/derive-entropy-reducing-structure-emerging.webp',
  'the-bartlett-m-arch': '/images/atlas/bartlett-march-london-thesis.webp',
  'the-beirut-school': '/images/atlas/the-beirut-school-anthology.webp',
  'the-beirut-school-album': '/images/atlas/the-beirut-school-album-cover.webp',
  'the-codex-project': '/images/atlas/derive-negentropic-sorted-blocks-grid.webp',
  'the-forgery': '/images/atlas/mobius-engine-system-flowchart.webp',
  'the-great-gig-in-the-sky': '/images/atlas/great-gig-sky-nyu-exhibition.webp',
  'the-labyrinth': '/images/atlas/the-labyrinth-sayat-nova-script.webp',
  'the-mirage-room': '/images/atlas/the-mirage-room-optical-installation.webp',
  'the-narcycist': '/images/atlas/narcycist-time-collaboration.webp',
  'the-waiting-room': '/images/atlas/the-waiting-room-installation.webp',
  'tuning-fork': '/images/atlas/tuning-fork-image-decay-software.webp',
  'vessel-orchestra': '/images/atlas/vessel-orchestra-met-performance.webp',
  'vessel-orchestra-met': '/images/atlas/vessel-orchestra-met-documentation.webp',
  'walaw-manifesto': '/images/atlas/walaw-manifesto-origin-text.webp',
  'why-were-like-this': '/images/atlas/why-were-like-this-interface.webp',
  'yo-yo-ma-collaboration': '/images/atlas/yo-yo-ma-byblos-performance.webp',
};

const PUBLIC_ASSET_BASE = new URL('../', import.meta.url);

function resolvePublicAsset(path) {
  if (!path || /^[a-z][a-z\d+.-]*:/i.test(path) || path.startsWith('//')) {
    return path;
  }

  return new URL(path.replace(/^\/+/, ''), PUBLIC_ASSET_BASE).toString();
}

export const NODES = nodes
  .filter((node) => !REMOVED_NODE_IDS.has(node.id))
  .map((node) => ({
  id: node.id,
  title: node.title,
  year: node.year,
  tier: node.tier,
  summary: node.summary,
  domains: node.domains,
  stack: node.stack,
  connections: node.connections,
  position: node.position,
  shortTitle: node.shortTitle,
  image: resolvePublicAsset(IMAGE_OVERRIDES[node.id] || node.image || placeholderImage(node)),
  hasProjectPage: node.hasProjectPage,
  actionHref: node.actionHref,
  actionLabel: node.actionLabel,
}));
