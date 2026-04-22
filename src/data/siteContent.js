export const DOMAIN_META = {
  sound: { label: 'sound', color: '#ff6b35' },
  text: { label: 'text', color: '#c084fc' },
  image: { label: 'image', color: '#22d3ee' },
  code: { label: 'code', color: '#4ade80' },
  space: { label: 'space', color: '#fb923c' },
  systems: { label: 'systems', color: '#ccff00' },
};

export const DOMAIN_ORDER = ['all', 'sound', 'text', 'image', 'code', 'space', 'systems'];

export const HOME_MANIFESTO = {
  eyebrow: 'REHEARSING IMPOSSIBLE FUTURES',
  title: 'Systems choreography across sound, text, image, code, space, and systems.',
  lead:
    'Haig Papazian builds cultural, narrative, spatial, and computational systems that treat memory, displacement, embodiment, and public meaning as design material.',
  body:
    'This version of the portfolio is deliberately tighter: twenty public works, an editorial homepage, and an atlas that organizes the practice through relation rather than chronology.',
  support: [
    'The public layer is curated for legibility.',
    'The atlas remains spatial, cinematic, and exploratory.',
    'Writing is treated as a working medium, not overflow.',
  ],
};

export const ATLAS_INTRO = {
  title: 'ATLAS',
  body:
    'The atlas is not the main works page. It is a navigable 3D field where projects, texts, systems, and performances are organized by relation rather than sequence. Enter it to move through the practice spatially.',
  instructions: ['Drag to orbit', 'Scroll to zoom', 'Click a node to center it', 'Trace outward through connections'],
  note: 'Enter through relationships, not sequence.',
};

export const PROJECTS = [
  {
    id: 'derive',
    title: 'DERIVE',
    subtitle: 'Negentropic Generative Memory Engine',
    year: '2024–',
    tier: 'lead',
    type: 'Production-grade AI pipeline',
    status: 'Active development',
    domains: ['code', 'systems', 'sound'],
    showInWriting: false,
    oneLine: 'Generative memory engine treating displacement as a retrieval problem.',
    blurb:
      'Vector embeddings, retrieval architecture, and a tuning layer designed to resist false narrative closure.',
    summary:
      'DERIVE models memory as emotional adjacency instead of chronology, turning fragmented archives into a navigable, performable system.',
    stack: ['Python', 'ChromaDB', 'Whisper', 'Claude', 'Suno', 'SDXL', 'Max/MSP'],
    metrics: ['Lead project', 'AI pipeline', 'Archive retrieval'],
    connections: ['space-time-tuning-machine', 'sometimes-i-wake-up-elsewhere', 'tebr', 'music-engines', 'architecture-in-low-res', '1000-strings-at-rest', 'cartography-of-absence'],
    atlasPosition: [2.5, 0.8, -10],
    detailSections: [
      {
        title: 'The Question',
        body:
          'DERIVE starts from a specific proposition: displaced memory is associative, fragmentary, and emotionally clustered, so the archive should be navigated the way displacement is actually remembered rather than the way a database prefers to store it.',
      },
      {
        title: 'Architecture',
        body:
          'The system is split into ingest, memory, generate, conductor, and output layers. Whisper, OCR, and embeddings absorb heterogeneous archives; ChromaDB and clustering organize fragments; generation tools produce new artifacts; the conductor layer intervenes before coherence hardens into cliché.',
      },
      {
        title: 'The Tuning Layer',
        body:
          'The core innovation is a tuning logic that truncates before resolution, injects silence, preserves language mixing, and prefers instability over smoothness. The human role is not prompting once and accepting the result, but curating under pressure.',
      },
      {
        title: 'Why It Matters',
        body:
          'DERIVE is a computational answer to the same problem explored elsewhere in the practice through literature, performance, and space: how to hold fragmented memory without flattening it into a single, reassuring story.',
      },
    ],
  },
  {
    id: 'space-time-tuning-machine',
    title: 'SPACE TIME TUNING MACHINE',
    subtitle: 'AI-Augmented Immersive Performance System',
    year: '2020–2022',
    tier: 'lead',
    type: 'Diegetic prototype / live performance system',
    status: 'Active / performing',
    domains: ['sound', 'space', 'systems'],
    showInWriting: false,
    oneLine: 'AI-augmented instrument built from scrap electronics and displaced memory.',
    blurb:
      'A hybrid performance system where violin, room acoustics, ambient noise, and generative sound are tuned against each other in real time.',
    summary:
      'STTM reframes the instrument as a diegetic prototype from a future that has not arrived yet, and the performer as a conductor inside a dialogic system.',
    stack: ['Custom hardware', 'Raspberry Pi', 'Max/MSP', 'Ableton Live', 'Spatial audio', 'Generative AI'],
    metrics: ['Sundance Institute', 'The Broad Museum', "Joe's Pub"],
    connections: ['derive', '3d-beat-synth', 'kardia', 'tebr', '1000-strings-at-rest', 'mashrou-leila'],
    atlasPosition: [-7.5, 3.2, -8],
    detailSections: [
      {
        title: 'The Instrument',
        body:
          'STTM treats the instrument as a diegetic prototype: not a finished product, but a working argument that AI-integrated instruments should be performed with rather than programmed from a distance.',
      },
      {
        title: 'Signal Flow',
        body:
          'Custom circuitry, contact microphones, and hacked electronics capture violin resonance, room acoustics, and gesture. Those signals move through Max/MSP into a generative layer that improvises back against the performer.',
      },
      {
        title: 'Groong',
        body:
          'Its conceptual core comes from the Armenian folk song Groong, with the violin as the crane’s call, the venue as environment, and the AI layer as the absent flock answering from elsewhere.',
      },
      {
        title: 'Human Role',
        body:
          'The performer conducts rather than commands. Judgment, responsiveness, and refusal become the essential musical skill.',
      },
    ],
  },
  {
    id: 'storylines',
    title: 'STORYLINES',
    subtitle: '3D Spatial Knowledge Graph',
    year: '2024',
    tier: 'lead',
    type: 'Deployed application',
    status: 'Live',
    domains: ['code', 'text', 'image'],
    showInWriting: false,
    oneLine: 'Literary corpora turned into navigable 3D force-directed constellations.',
    blurb:
      'A browser-based system that maps thematic gravity across literary archives and lets users explore intellectual proximity as spatial structure.',
    summary:
      'STORYLINES shows how abstract ideas can be translated into a working relational interface that remains legible, surprising, and technically credible.',
    stack: ['React', 'TypeScript', 'Three.js', 'Google Gemini', 'Cloudflare Workers KV', 'Vercel'],
    metrics: ['Deployed', '3D force graph', 'Edge-cached'],
    connections: ['codeverse-explorer', 'resonance-atlas', 'derive'],
    atlasPosition: [9.5, 5.4, -12],
    detailSections: [
      {
        title: 'Premise',
        body:
          'Alphabet, genre, and chronology are administrative categories. STORYLINES asks what literary knowledge looks like when relation, not shelving logic, becomes the primary structure.',
      },
      {
        title: 'Force as Method',
        body:
          'The force-directed layout is not decorative. It is the closest computational analogy for how influence, thematic weight, and latent conversation move across languages and centuries.',
      },
      {
        title: 'Application',
        body:
          'Users search, query, and reorient the graph in real time. Strong edges, weak affinities, and temporal layers reveal structures that no linear reading order would make visible.',
      },
      {
        title: 'Strategic Value',
        body:
          'Because it is deployed and legible in a browser, STORYLINES demonstrates a repeatable competency: taking a conceptual model and turning it into working software with clear interaction logic.',
      },
    ],
  },
  {
    id: 'mashrou-leila',
    title: "MASHROU' LEILA",
    subtitle: 'Decade-Long Counter-Public Social System',
    year: '2008–2022',
    tier: 'lead',
    type: 'Cultural infrastructure / global media enterprise',
    status: 'Concluded 2022',
    domains: ['sound', 'image', 'space', 'systems'],
    showInWriting: false,
    oneLine: 'A band reframed as 14 years of counter-public infrastructure.',
    blurb:
      'Sound, visual identity, crisis operations, touring, and political risk managed as one interdependent cultural system.',
    summary:
      'Mashrou’ Leila is the clearest proof that the practice can operate simultaneously at the scale of art, institution, and geopolitical pressure.',
    stack: ['Music production', 'Creative direction', 'Tour systems', 'Brand architecture', 'Crisis operations'],
    metrics: ['500M+ streams', '50+ countries', 'Rolling Stone cover'],
    connections: ['1000-strings-at-rest', 'space-time-tuning-machine', 'mekena-nyc'],
    atlasPosition: [0, 0, -4.5],
    detailSections: [
      {
        title: 'Reframing the Record',
        body:
          'Mashrou’ Leila is often described as a band, but the more accurate description is cultural infrastructure: a system coordinating music, visual language, touring, and narrative under hostile political conditions.',
      },
      {
        title: 'Operational Architecture',
        body:
          'Creative direction, crisis management, brand architecture, and public positioning were inseparable from the music itself. The project had to function as both artwork and survival system.',
      },
      {
        title: 'Scale',
        body:
          'Five hundred million streams, fifty-plus countries, and repeated censorship events turned the work into a case study in antifragility, not just popularity.',
      },
      {
        title: 'What It Demonstrates',
        body:
          'This is the strongest precedent for designing emergence under pressure: building an audience, a language, and a public space that did not previously exist.',
      },
    ],
  },
  {
    id: 'mekena-nyc',
    title: 'MEKENA NYC',
    subtitle: 'Adaptive Reuse as Cultural Infrastructure',
    year: '2023–',
    tier: 'lead',
    type: 'Architectural social system / physical operating system',
    status: 'Active development',
    domains: ['space', 'systems'],
    showInWriting: false,
    oneLine: 'Adaptive reuse converting a Queens building into residency infrastructure.',
    blurb:
      'A physical operating system for displaced artists, built as architecture, governance model, and long-term cultural infrastructure at once.',
    summary:
      'MEKENA makes the spatial argument explicit: the same systems thinking driving the software and performance work can operate at the scale of an actual building.',
    stack: ['Architecture', 'Adaptive reuse', 'IoT monitoring', 'Programming design', 'Cultural strategy'],
    metrics: ['$50,000 secured', '30% energy reduction', 'Queens, NYC'],
    connections: ['mashrou-leila', 'space-time-tuning-machine', 'architecture-in-low-res', 'autopsy-beirut-phantom'],
    atlasPosition: [-10.5, 7.2, -11],
    detailSections: [
      {
        title: 'The Building',
        body:
          'MEKENA converts a 1920s brick building in Dutch Kills into a live-work residency for queer, immigrant, and exiled artists who do not fit the city’s default categories of belonging.',
      },
      {
        title: 'Design Logic',
        body:
          'The project treats structure, sustainability, programming, and governance as equally architectural decisions. The building is both container and operating system.',
      },
      {
        title: 'Argument',
        body:
          'Most arts support infrastructure produces temporary cohorts. MEKENA argues for permanence: not a short program, but a built environment that can accumulate a community over time.',
      },
      {
        title: 'Why It Matters',
        body:
          'It is the clearest built-environment proof that systems choreography is not metaphorical. The method survives contact with zoning, energy targets, and the economics of a real site.',
      },
    ],
  },
  {
    id: 'sometimes-i-wake-up-elsewhere',
    title: 'SOMETIMES I WAKE UP ELSEWHERE',
    subtitle: 'Möbius-Twist Hypertext Fiction Engine',
    year: '2022–2025',
    tier: 'lead',
    type: 'Autonomous narrative system / interactive fiction',
    status: 'Active development',
    domains: ['text', 'code', 'systems'],
    showInWriting: true,
    oneLine: 'A looping hypertext fiction engine where displacement is embodied structurally.',
    blurb:
      'Temporal debt, document decay, bilingual reveals, and a Möbius-strip narrative topology turn reading into an encounter with unstable access.',
    summary:
      'SIWUE is one of the clearest examples of literary logic translated into software architecture without losing emotional force.',
    stack: ['React 19', 'TypeScript', 'Three.js', 'Canvas API', 'IndexedDB', 'Web Audio API'],
    metrics: ['100 dreams', 'Persistent decay', 'Hypertext engine'],
    connections: ['cartography-of-absence', 'derive', 'tebr', 'architecture-in-low-res'],
    atlasPosition: [-8.5, -5.8, -13.5],
    detailSections: [
      {
        title: 'Architecture',
        body:
          'SIWUE begins from the premise that navigation systems presume stability. This one begins from disorientation and makes the user inhabit it through recursion, surveillance, and decay.',
      },
      {
        title: 'Core Mechanics',
        body:
          'Temporal debt limits what can be read. Documents degrade on revisit. Certain passages surface only in Arabic or Armenian. Dream 100 returns to Dream 1.',
      },
      {
        title: 'Persistence',
        body:
          'The decay is deterministic and stored, so the narrative degrades according to the reader’s own history with it rather than by random flourish.',
      },
      {
        title: 'Relation to the Literary System',
        body:
          'SIWUE, DERIVE, and The Cartography of Absence form a triad: one computational, one literary, one navigational, all solving the same problem in different substrates.',
      },
    ],
  },
  {
    id: 'tebr',
    title: 'TEBR',
    subtitle: 'AI-Human Generative Sonic Universe',
    year: '2024–',
    tier: 'lead',
    type: 'World-building initiative / diasporic futurism engine',
    status: 'Active development',
    domains: ['sound', 'systems', 'code'],
    showInWriting: false,
    oneLine: 'A sonic universe built from glitch, ancestral fragment, and algorithmic drift.',
    blurb:
      'TEBR treats displacement not as retrieval alone, but as compositional material for a future-facing sound world.',
    summary:
      'The project converts machine failure, archive residue, and cultural specificity into a deliberate compositional territory rather than a problem to be corrected away.',
    stack: ['Suno', 'Udio', 'Ableton Live', 'Max/MSP', 'DERIVE'],
    metrics: ['Lead project', 'Sonic universe', 'Diasporic futurism'],
    connections: ['derive', 'space-time-tuning-machine', 'hah-was', 'music-engines', 'resonance-atlas', '1000-strings-at-rest'],
    atlasPosition: [-1.2, 6.4, -16],
    detailSections: [
      {
        title: 'Hypothesis',
        body:
          'TEBR starts where DERIVE leaves off. If the archive is broken, what new form can be composed from the break rather than from restoration alone?',
      },
      {
        title: 'System Architecture',
        body:
          'Ancestral corpora, deliberate glitch, and human curation collide. The machine produces culturally revealing errors; the composer treats them as evidence and material.',
      },
      {
        title: 'Glitch as Territory',
        body:
          'The project refuses the standard assumption that model error is noise. The glitch becomes the space between what the machine knows and what the diaspora knows.',
      },
      {
        title: 'Outputs',
        body:
          'TEBR can become sonic artifacts, performance scores, and process documentation at once, which makes it both an art project and a published research system.',
      },
    ],
  },
  {
    id: 'hah-was',
    title: 'HAH-WAS',
    subtitle: 'Adversarial Veracity Protocol for Cultural AI',
    year: '2023–2024',
    tier: 'secondary',
    type: 'Epistemic defense system / research methodology',
    status: 'Operational',
    domains: ['code', 'systems', 'text'],
    showInWriting: true,
    oneLine: 'Adversarial protocol for detecting cultural hallucinations in generative AI.',
    blurb:
      'A methodology for finding where AI systems consistently erase dialect, tuning systems, and cultural nuance, then classifying those failures as signal.',
    summary:
      'HAH-WAS is one of the clearest statements in the portfolio that cultural erasure in AI is not accidental noise but a measurable consequence of training assumptions.',
    stack: ['Gemini', 'Tone.js', 'Max/MSP', 'Python', 'Adversarial prompt library'],
    metrics: ['427 tracks', 'Operational protocol', 'Cultural QA'],
    connections: ['resonance-atlas', 'maqamai', 'music-engines', 'tebr', 'derive'],
    atlasPosition: [11.4, 0.6, -14],
    detailSections: [
      {
        title: 'Core Observation',
        body:
          'When models repeatedly collapse Lebanese into Egyptian, or maqam into 12-TET approximations, those repetitions are not random failure. They are fingerprints of the training corpus.',
      },
      {
        title: 'Protocol',
        body:
          'The method runs in three phases: adversarial prompting, verification against domain-specific signals, and failure taxonomy. It can be reused across audio, text, and image systems.',
      },
      {
        title: 'Findings',
        body:
          'Phonological erasure, tuning system flattening, temporal collapse, and representational homogenization appeared at high rates across the tested platforms.',
      },
      {
        title: 'Why It Matters',
        body:
          'HAH-WAS reframes bias from an ethics footnote into a product and infrastructure issue. If the model cannot hear the culture, it cannot serve the people who live in it.',
      },
    ],
  },
  {
    id: '3d-beat-synth',
    title: '3D-BEAT-SYNTH',
    subtitle: 'Somatic Input Spatial Audio UI',
    year: '2024–2025',
    tier: 'secondary',
    type: 'Gesture-to-sound reactive instrument',
    status: 'Deployed',
    domains: ['code', 'sound', 'image'],
    showInWriting: false,
    oneLine: 'Webcam-based gesture instrument where the body becomes the interface.',
    blurb:
      'A browser-native music interface built on MediaPipe, Tone.js, and Three.js that treats movement through space as continuous sonic input.',
    summary:
      'This is one of the most immediately legible proofs in the portfolio that technical experimentation can stay conceptually clean and experientially immediate.',
    stack: ['Three.js', 'MediaPipe', 'Tone.js', 'WebRTC', 'React'],
    metrics: ['Deployed', 'Browser-based', 'No installation'],
    connections: ['space-time-tuning-machine', 'kardia', 'photon-plus'],
    atlasPosition: [8.4, -6.8, -10.5],
    detailSections: [
      {
        title: 'Premise',
        body:
          '3D-Beat-Synth begins from the idea that expression is continuous and the browser already contains enough sensing to capture it. The webcam becomes the instrument entry point.',
      },
      {
        title: 'Gesture Mapping',
        body:
          'Height maps to pitch, separation to voicing, depth to reverb, rotation to filter, and velocity to rhythmic density. Gesture is not a metaphor; it is the mechanical control system.',
      },
      {
        title: 'Embodiment',
        body:
          'The project argues against screen-bound control paradigms by making the body itself the interface rather than a user operating one.',
      },
      {
        title: 'Relationship to the Practice',
        body:
          'It is the browser-deployable counterpart to STTM’s gestural logic and one of the clearest demonstrations that the practice can collapse concept and interface into one encounter.',
      },
    ],
  },
  {
    id: 'resonance-atlas',
    title: 'RESONANCE ATLAS',
    subtitle: 'Interdisciplinary Research Initiative',
    year: '2024–',
    tier: 'secondary',
    type: 'Research umbrella / program framework',
    status: 'Active research',
    domains: ['systems', 'sound', 'text'],
    showInWriting: true,
    oneLine: 'Research umbrella for localization gap, HAH-WAS, MaqamAI, and computational colonialism work.',
    blurb:
      'A program-level framing for how sound, AI bias, cultural erasure, and infrastructure research fit together as a single argument.',
    summary:
      'Resonance Atlas names the broader field that several projects are already operating within, which gives the research a cumulative rather than scattered presence.',
    stack: ['Research design', 'White paper development', 'Audio analysis', 'Critical theory'],
    metrics: ['Program framework', 'Active research', 'Multi-project umbrella'],
    connections: ['hah-was', 'maqamai', 'music-engines', 'tebr', 'storylines'],
    atlasPosition: [5.6, 8.1, -18],
    detailSections: [
      {
        title: 'What It Is',
        body:
          'Resonance Atlas gives a shared name and frame to multiple research threads investigating the difference between what human sonic cultures contain and what machine systems currently recognize.',
      },
      {
        title: 'Research Threads',
        body:
          'Localization Gap, HAH-WAS, MaqamAI, computational colonialism, and algorithmic reparations become legible as one program rather than unrelated projects.',
      },
      {
        title: 'Unifying Argument',
        body:
          'The issue is not that AI makes mistakes. It is that those mistakes inherit and normalize cultural hierarchies embedded in the training set as if they were neutral defaults.',
      },
      {
        title: 'Why It Matters',
        body:
          'This frame lets institutions, AI companies, and cultural stakeholders see the work not as isolated critique but as infrastructure for diagnosis, accountability, and repair.',
      },
    ],
  },
  {
    id: 'maqamai',
    title: 'MAQAMAI',
    subtitle: 'Arabic Maqam Ear Training System',
    year: '2026',
    tier: 'secondary',
    type: 'Browser-based educational application',
    status: 'Concept / pre-development',
    domains: ['code', 'sound', 'text'],
    showInWriting: true,
    oneLine: 'Ear training system for hearing what current AI music tools erase.',
    blurb:
      'A browser-based application for musicians and AI engineers to develop the listening competency required to evaluate maqam accurately.',
    summary:
      'MaqamAI fills the human infrastructure gap between recognizing model failure and being able to hear what is missing in the first place.',
    stack: ['React', 'Tone.js', 'Web Audio API', 'Curated recordings', 'RTL-capable UI'],
    metrics: ['Concept in latency', 'Arabic maqam', 'Educational application'],
    connections: ['resonance-atlas', 'hah-was', 'photon-plus', 'music-engines'],
    atlasPosition: [13.8, 4.6, -20],
    detailSections: [
      {
        title: 'The Gap',
        body:
          'Arabic maqam contains interval structures that current commercial AI music systems do not model. Before the model can be corrected, a human evaluator has to hear the failure accurately.',
      },
      {
        title: 'Product Concept',
        body:
          'MaqamAI offers interval recognition, generative comparison, and modulation practice for musicians and AI engineers who need cultural listening literacy rather than abstract awareness.',
      },
      {
        title: 'Technical Architecture',
        body:
          'A microtonal browser audio engine, curated reference recordings, and comparison modules turn training into both pedagogy and quality assurance.',
      },
      {
        title: 'Strategic Role',
        body:
          'It activates the bridge between Resonance Atlas and HAH-WAS by making the required listening skill trainable rather than assumed.',
      },
    ],
  },
  {
    id: 'autopsy-beirut-phantom',
    title: 'THE AUTOPSY / BEIRUT PHANTOM',
    subtitle: 'Speculative Spatial Media',
    year: '2025+',
    tier: 'secondary',
    type: 'VR / browser interactive environment',
    status: 'Research phase complete',
    domains: ['space', 'image', 'systems'],
    showInWriting: false,
    oneLine: 'Photogrammetric reconstruction where the gaps remain visible as content.',
    blurb:
      'Companion projects using evidence-based reconstruction of Beirut spaces to investigate memory, destruction, and the politics of incomplete return.',
    summary:
      'This is the spatial media branch of the same low-resolution, fragment-aware logic running through the rest of the practice.',
    stack: ['Photogrammetry', 'WebGL', 'VR pipeline', 'Interactive fiction'],
    metrics: ['Awaiting commission', 'Spatial media', 'Research complete'],
    connections: ['architecture-in-low-res', 'mekena-nyc', 'cartography-of-absence'],
    atlasPosition: [-14.2, 1.5, -17.5],
    detailSections: [
      {
        title: 'Two Modes',
        body:
          'The Autopsy and Beirut Phantom share one methodology: reconstruct spaces from fragmentary evidence and let incompleteness remain legible instead of hiding it behind photorealism.',
      },
      {
        title: 'Why the Gaps Stay',
        body:
          'Wireframe, translucency, and void are not technical failures. They are how the work refuses the false promise that reconstruction can fully undo destruction.',
      },
      {
        title: 'Lineage',
        body:
          'The project operationalizes questions first posed in Architecture in Low Res by turning mediated built space into navigable, unstable evidence.',
      },
      {
        title: 'Strategic Position',
        body:
          'It is a strong institutional bridge between architectural theory, immersive media, and diasporic memory work, particularly for commission-driven contexts.',
      },
    ],
  },
  {
    id: 'cartography-of-absence',
    title: 'THE CARTOGRAPHY OF ABSENCE',
    subtitle: 'Bureaucratic Surrealism as Narrative System',
    year: '2025',
    tier: 'secondary',
    type: 'Experimental literary work',
    status: 'Complete draft',
    domains: ['text', 'systems'],
    showInWriting: true,
    oneLine: 'A literary work structured through the violent grammar of official forms.',
    blurb:
      'Nine houses, bureaucratic containers, and recursive exits turn administrative language into a narrative system for displacement, witness, and erasure.',
    summary:
      'The Cartography of Absence is one of the cleanest textual statements of the practice’s broader method: structural form carrying the emotional and political argument.',
    stack: ['Literary form', 'Narrative systems', 'Bureaucratic surrealism'],
    metrics: ['Complete draft', 'Nine houses', 'Seeking publisher'],
    connections: ['sometimes-i-wake-up-elsewhere', 'derive', 'architecture-in-low-res', 'why-were-like-this'],
    atlasPosition: [-12.3, -4.8, -15],
    detailSections: [
      {
        title: 'Premise',
        body:
          'The work begins from the observation that the official record of displacement is bureaucratic, and that bureaucracy performs its own quiet violence by shrinking life to the size of a form field.',
      },
      {
        title: 'Nine Houses',
        body:
          'Language, memory, body, home, border, time, name, witness, and exit each become thematic houses with their own administrative container.',
      },
      {
        title: 'Formal Innovation',
        body:
          'The point is not to critique forms from outside, but to demonstrate their inadequacy from within by filling them with material they cannot structurally contain.',
      },
      {
        title: 'Relation to the System',
        body:
          'It is the literary counterpart to DERIVE and SIWUE: the same investigation of fragmented, unresolved memory, expressed through text instead of computation or interactive navigation.',
      },
    ],
  },
  {
    id: 'why-were-like-this',
    title: "WHY WE'RE LIKE THIS",
    subtitle: 'Poetic Documentary Series',
    year: '2025',
    tier: 'secondary',
    type: 'Non-fiction video essay series',
    status: 'Season 1 and part of Season 2 scripted',
    domains: ['text', 'image', 'systems'],
    showInWriting: true,
    oneLine: 'Video essay series treating modern neurosis as a systems problem.',
    blurb:
      'A poetic documentary format that moves between neuroscience, psychology, and cultural analysis without losing intimacy or formal control.',
    summary:
      'This project is the broadest public-facing expression of the practice’s analytical voice: structural, legible, and emotionally direct without collapsing into generic explainers.',
    stack: ['Screenwriting', 'Documentary structure', 'Motion graphics', 'Narration'],
    metrics: ['Season 1 complete', 'Season 2 in progress', 'Public-facing'],
    connections: ['cartography-of-absence', 'sometimes-i-wake-up-elsewhere'],
    atlasPosition: [-5.6, -10.2, -18.4],
    detailSections: [
      {
        title: 'Premise',
        body:
          'Why We’re Like This treats contemporary cognitive and emotional fracture not as personal weakness but as a system with causes, mechanisms, and cultural accelerants.',
      },
      {
        title: 'Episode Logic',
        body:
          'Each episode moves through contradiction, hidden pattern, cultural accelerant, and human truth. The structure makes explanation feel composed rather than pedagogically dry.',
      },
      {
        title: 'Voice',
        body:
          'The second-person register implicates the viewer directly while avoiding the distance of conventional documentary authority.',
      },
      {
        title: 'Strategic Role',
        body:
          'It is the portfolio’s most accessible bridge into the practice for audiences who may not immediately arrive through diaspora, music technology, or spatial systems.',
      },
    ],
  },
  {
    id: 'photon-plus',
    title: 'PHOTON+',
    subtitle: 'Optical Simulation Music Engine',
    year: '2024',
    tier: 'secondary',
    type: 'Browser-based physics sequencer',
    status: 'Prototype / pre-deployment',
    domains: ['code', 'sound', 'image'],
    showInWriting: false,
    oneLine: 'A sequencer where sound emerges from light physics instead of a timeline grid.',
    blurb:
      'Geometry, reflection, refraction, and accumulated energy become compositional parameters in a browser-native simulation.',
    summary:
      'photon+ is one of the most elegant examples in the portfolio of architectural logic being directly translated into an instrument.',
    stack: ['WebGL', 'Canvas 2D', 'Tone.js', 'Custom physics engine', 'React'],
    metrics: ['Prototype complete', 'Microtonal by default', 'Pre-deployment'],
    connections: ['maqamai', '3d-beat-synth', 'kardia'],
    atlasPosition: [14.6, -2.1, -12.4],
    detailSections: [
      {
        title: 'System',
        body:
          'Photons move through a geometric field of reflective, absorptive, and refractive surfaces. Sound events happen when those particles encounter matter.',
      },
      {
        title: 'Physics as Composition',
        body:
          'Pitch, timbre, amplitude, looping, and chordal spread all emerge from physical conditions rather than a scheduling grid. The composer designs the room, then listens to what it does.',
      },
      {
        title: 'Why It Matters',
        body:
          'Because pitch is continuous, microtonal structures become native to the system rather than special cases patched into a Western default.',
      },
      {
        title: 'Connection',
        body:
          'In the larger research field, photon+ becomes a plausible bridge into a maqam tuning lab where physics, ear training, and AI critique start to overlap.',
      },
    ],
  },
  {
    id: 'codeverse-explorer',
    title: 'CODEVERSE EXPLORER',
    subtitle: 'Visual Codebase Storyteller',
    year: '2024',
    tier: 'secondary',
    type: 'AST-driven cartography tool',
    status: 'Active development — 60%',
    domains: ['code', 'systems', 'space'],
    showInWriting: false,
    oneLine: 'A code repository rendered as a navigable 3D city of dependencies.',
    blurb:
      'AST parsing, force-layout logic, and narrative explanations turn software architecture into something visible before every file is opened.',
    summary:
      'Codeverse extends the exact same relational-spatial method used in STORYLINES into engineering infrastructure, which makes the practice’s cross-domain consistency obvious.',
    stack: ['React', 'TypeScript', 'AST parsing', 'Three.js', 'Gemini API', 'D3-force-3d'],
    metrics: ['60% complete', '3D constellation', 'Narrative layer'],
    connections: ['storylines', 'music-engines', 'derive'],
    atlasPosition: [12.6, 8.4, -9.5],
    detailSections: [
      {
        title: 'Problem',
        body:
          'Repositories are usually navigated by file path, which is efficient only for people who already know the system. Codeverse is designed for everyone else who still needs to understand architectural intent.',
      },
      {
        title: 'Pipeline',
        body:
          'AST parsing produces a structural graph, force layout turns coupling into space, and a narrative layer translates node roles into plain language on demand.',
      },
      {
        title: 'STORYLINES Connection',
        body:
          'Both projects treat spatial proximity as the clearest way to reveal relationship when hierarchical organization obscures it.',
      },
      {
        title: 'Use Cases',
        body:
          'Onboarding, due diligence, refactoring, and pedagogy all benefit when the codebase stops looking like a filing cabinet and starts reading like a city.',
      },
    ],
  },
  {
    id: 'kardia',
    title: 'KARDIA',
    subtitle: 'Somatic Biofeedback Synthesizer',
    year: '2026',
    tier: 'secondary',
    type: 'Emotional operating system',
    status: 'Prototype / development',
    domains: ['code', 'sound', 'systems'],
    showInWriting: false,
    oneLine: 'HRV-to-sound biofeedback system where the body composes in real time.',
    blurb:
      'A synthesis environment that translates autonomic signals into audible texture, rhythm, and tension without requiring the user to read themselves as a graph first.',
    summary:
      'Kardia extends the practice’s body-as-signal logic into wellness and therapeutic territory without losing its formal seriousness.',
    stack: ['BLE sensors', 'HRV analysis', 'Web Audio', 'Biofeedback synthesis'],
    metrics: ['Prototype', 'Sensor-ready', 'Wellness/health tech positioning'],
    connections: ['3d-beat-synth', 'space-time-tuning-machine', 'photon-plus'],
    atlasPosition: [6.4, -9.3, -16.2],
    detailSections: [
      {
        title: 'Premise',
        body:
          'Kardia treats heart-rate variability not as a number to inspect but as a score to hear, allowing the nervous system to encounter itself acoustically before the mind turns it into interpretation.',
      },
      {
        title: 'Signal Chain',
        body:
          'RMSSD, inter-beat variation, breathing rate, stress index, and recovery gradient map directly onto harmonic density, rhythmic looseness, phrase length, dissonance, and resolution.',
      },
      {
        title: 'Therapeutic Argument',
        body:
          'Visual biofeedback requires cognitive mediation. Kardia hypothesizes that sound can close the loop more directly, creating a body-to-sound-to-body regulation cycle.',
      },
      {
        title: 'Role in the Portfolio',
        body:
          'It is the clearest wellness-facing expression of the same idea that also drives STTM and 3D-Beat-Synth: the body is not just the user, it is the primary signal source.',
      },
    ],
  },
  {
    id: 'music-engines',
    title: 'MUSIC-ENGINES',
    subtitle: 'Async Audio Analysis Kernel',
    year: '2024',
    tier: 'secondary',
    type: 'Backend infrastructure / research pipeline',
    status: 'Active / operational',
    domains: ['code', 'sound', 'systems'],
    showInWriting: true,
    oneLine: 'Backend kernel for audio analysis across the research stack.',
    blurb:
      'A modular pipeline handling ingestion, spectral analysis, cultural feature extraction, graph persistence, and API access for large-scale music research.',
    summary:
      'music-engines is the invisible backbone that turns critique into reproducible research rather than opinion.',
    stack: ['Python', 'asyncio', 'librosa', 'FastAPI', 'Neo4j', 'Whisper', 'pyworld'],
    metrics: ['Operational', 'Backend infrastructure', 'Research kernel'],
    connections: ['derive', 'hah-was', 'resonance-atlas', 'tebr', 'maqamai', 'codeverse-explorer'],
    atlasPosition: [10.2, -1.4, -22],
    detailSections: [
      {
        title: 'What It Is',
        body:
          'music-engines exists so the surrounding research program can focus on meaning instead of spending every cycle rebuilding the same extraction pipeline.',
      },
      {
        title: 'Pipeline Architecture',
        body:
          'Ingest workers, spectral analysis, cultural feature extraction, graph persistence, and an API layer form a reusable backbone for evaluating large corpora of audio at speed.',
      },
      {
        title: 'Research Infrastructure Argument',
        body:
          'With this infrastructure in place, audits like the 427-track localization gap study stop being anecdotal listening exercises and become structured, queryable evidence.',
      },
      {
        title: 'Strategic Frame',
        body:
          'It is the strongest proof of backend engineering capability in the portfolio because it demonstrates architecture, scalability, and product-adjacent rigor beneath the conceptual layer.',
      },
    ],
  },
  {
    id: 'architecture-in-low-res',
    title: 'ARCHITECTURE IN LOW RES',
    subtitle: 'Master’s Thesis, Bartlett School of Architecture, UCL',
    year: '2013–2015',
    tier: 'archive',
    type: 'Academic research / architectural theory',
    status: 'Archive with active lineage',
    domains: ['space', 'image', 'text'],
    showInWriting: true,
    oneLine: 'Architectural theory of mediation, glitch, and the politics of digital proxies.',
    blurb:
      'A thesis arguing that pixelation, compression, and representational gaps are not errors but evidence about how digital tools alter our understanding of space.',
    summary:
      'This thesis is the seed crystal for much of the later work: once you see how consistent the lineage is, the portfolio stops looking eclectic and starts looking precise.',
    stack: ['Architectural theory', 'Media theory', 'Research writing', 'Spatial analysis'],
    metrics: ['Bartlett Distinction', 'Scholarship funded', 'Archive entry'],
    connections: ['derive', 'cartography-of-absence', 'sometimes-i-wake-up-elsewhere', 'autopsy-beirut-phantom', 'mekena-nyc'],
    atlasPosition: [-3.2, 10.5, -21],
    detailSections: [
      {
        title: 'Argument',
        body:
          'The thesis asks what happens when architecture is understood through digital proxies instead of drawings, and argues that low resolution is a new epistemological condition rather than a temporary technical flaw.',
      },
      {
        title: 'Why It Matters Now',
        body:
          'Questions about digital twins, photogrammetry, and mediation have only intensified since the thesis was written, which makes the work feel less like an archive and more like a foundation.',
      },
      {
        title: 'Lineage',
        body:
          'Beirut Phantom, DERIVE, HAH-WAS, and SIWUE all inherit the same underlying concern: what is lost, distorted, or unexpectedly revealed when lived reality becomes low-resolution representation.',
      },
      {
        title: 'Origin Point',
        body:
          'It clarifies that the portfolio’s later systems logic did not emerge suddenly from software, but from a long architectural engagement with mediation, memory, and constructed space.',
      },
    ],
  },
  {
    id: '1000-strings-at-rest',
    title: '1000 STRINGS AT REST',
    subtitle: 'Multimedia Sound Sculpture Installation',
    year: '2022',
    tier: 'archive',
    type: 'Sound art / multimedia installation',
    status: 'Archive / documentation recovery needed',
    domains: ['sound', 'space', 'image'],
    showInWriting: false,
    oneLine: 'Sound sculpture about exile, latency, and music held under tension.',
    blurb:
      'An installation treating silent strings as charged with unavailable sound — a spatial argument about culture in exile and presence defined by obstruction.',
    summary:
      'Even as an archive entry, this work carries a lot of emotional and methodological weight because it bridges Mashrou’ Leila, STTM, and DERIVE so clearly.',
    stack: ['Installation design', 'Sound art', 'Spatial composition'],
    metrics: ['Archive', 'Los Angeles 2022', 'Documentation recovery needed'],
    connections: ['mashrou-leila', 'space-time-tuning-machine', 'derive', 'tebr'],
    atlasPosition: [-15.2, 6.2, -23],
    detailSections: [
      {
        title: 'The Work',
        body:
          'The project approaches exile through availability rather than absence. The song exists, the instrument exists, the strings remain under tension, but release is obstructed by the conditions around them.',
      },
      {
        title: 'Image at the Core',
        body:
          'The strings are at rest, not broken. That distinction is central: the cultural material is present and charged, waiting for an acoustic and social room that may no longer exist.',
      },
      {
        title: 'Relation to the Practice',
        body:
          'The work sits between STTM and DERIVE, carrying the question of latent sound and suspended memory from live performance into computational form.',
      },
      {
        title: 'Archive Note',
        body:
          'The project deserves inclusion because its lineage is strong, but it also honestly signals where recovery and documentation work still remain to be done.',
      },
    ],
  },
];

export const PROJECT_MAP = Object.fromEntries(PROJECTS.map((project) => [project.id, project]));

export const FEATURED_IDS = ['derive', 'space-time-tuning-machine', 'storylines', 'mashrou-leila', 'mekena-nyc'];
export const FEATURED_PROJECTS = FEATURED_IDS.map((id) => PROJECT_MAP[id]).filter(Boolean);

export const WORK_PROJECTS = PROJECTS;

export const WRITING_GROUPS = [
  {
    id: 'narrative-systems',
    title: 'Narrative systems',
    description: 'Works where literary form, recursion, and structural instability are part of the primary medium.',
    projectIds: ['cartography-of-absence', 'sometimes-i-wake-up-elsewhere', 'why-were-like-this'],
  },
  {
    id: 'research-arguments',
    title: 'Research and argument',
    description: 'Projects that function as frameworks, methodological papers, or critical infrastructure for the larger practice.',
    projectIds: ['hah-was', 'resonance-atlas', 'maqamai', 'music-engines', 'architecture-in-low-res'],
  },
];

export const ABOUT_CONTENT = {
  title: 'A multidisciplinary practice organized through systems rather than disciplines.',
  intro: [
    'Haig Papazian works across music, architecture, writing, performance, and software. The continuity is structural: how memory, identity, embodiment, and public meaning are held inside designed forms.',
    'Some projects become instruments. Some become interfaces. Some become buildings, books, or research protocols. The work is not unified by medium, but by a repeated attempt to build systems that can hold complexity without flattening it.',
  ],
  notes: [
    'Lebanese-Armenian, based in New York.',
    'Architecture, music, writing, code, and cultural strategy in one practice.',
    'Twenty public works in this version of the site; the atlas can expand beyond them later.',
  ],
};

export const CONTACT_CHANNELS = [
  {
    id: 'hire',
    label: 'HIRE',
    description: 'Commissions, consulting, performance, strategy, systems design, and institution-facing work.',
    email: 'hello@haigpapa.com',
    subject: 'Hire Inquiry',
  },
  {
    id: 'collaborate',
    label: 'COLLABORATE',
    description: 'Cross-disciplinary partnerships, residencies, cultural infrastructure, and speculative builds.',
    email: 'hello@haigpapa.com',
    subject: 'Collaboration Inquiry',
  },
  {
    id: 'press',
    label: 'PRESS',
    description: 'Editorial requests, interviews, speaking, and contextual material for publications or institutions.',
    email: 'hello@haigpapa.com',
    subject: 'Press Inquiry',
  },
];
