/* ── PROJECT DATA ── */
const PROJECTS = {
  realign: {
    title: 'ReAlign',
    subtitle: 'Process-Aware LLM Benchmarking · Nov 2025',
    badge: 'ML / AI',
    badgeColor: '#1a5cff',
    galleryIcon: '🧠',
    galleryThumbs: ['📊','🔁','⚙️'],
    galleryBg: '#0d0d0d',
    overview: `<p class="panel-text">ReAlign is an <strong>unsupervised benchmarking framework</strong> that goes beyond answer correctness to measure the quality of an LLM's reasoning <em>process</em>. Most benchmarks only check if the final answer is right — ReAlign checks if the path to get there was coherent and aligned.</p>
    <p class="panel-text">The core insight: a model can get the right answer for the wrong reasons. ReAlign surfaces this by using <strong>semantic embeddings + dynamic programming</strong> (Needleman-Wunsch alignment, borrowed from bioinformatics) to compare reasoning chains against reference solutions.</p>
    <p class="panel-text">The framework uncovered a <strong>low correlation between reasoning alignment and correctness</strong> — a finding with significant implications for how we evaluate and trust LLM outputs.</p>`,
    results: [
      '<strong>80.1% accuracy</strong> achieved after fine-tuning DeepSeek-Math-7B',
      'Ran QLoRA fine-tuning on <strong>NVIDIA RTX 4060</strong> with optimized memory usage',
      'Also fine-tuned natively on <strong>Apple M4 Max</strong> using MLX in BFloat16',
      'Developed modular evaluation pipeline with <strong>LLM-as-a-Judge</strong> integration',
      'Quantified reasoning misalignment across multiple math reasoning datasets'
    ],
    techDesc: 'The pipeline is built in Python with PyTorch as the core ML framework. MLX was used for native Apple Silicon training — avoiding the overhead of emulation. QLoRA via the PEFT library enabled fine-tuning on consumer-grade GPU hardware. Semantic embeddings are computed with sentence-transformers, and the alignment algorithm is a custom Python implementation of Needleman-Wunsch.',
    techStack: [
      {label:'Python', primary:true}, {label:'PyTorch'}, {label:'MLX'}, {label:'QLoRA'},
      {label:'DeepSeek-Math-7B', primary:true}, {label:'Sentence-Transformers'},
      {label:'Needleman-Wunsch'}, {label:'PEFT'}, {label:'HuggingFace'}
    ],
    github: 'https://github.com/AbhijeetRastogi'
  },

  acronim: {
    title: 'ACRONIM',
    subtitle: 'Multimodal Concept Explainer · Dec 2025',
    badge: 'ML / AI',
    badgeColor: '#1a5cff',
    galleryIcon: '👁️',
    galleryThumbs: ['📈','🎨','☁️'],
    galleryBg: '#101828',
    overview: `<p class="panel-text">ACRONIM is an <strong>interpretability system for multimodal LLMs</strong>, specifically LLaVA-1.5. The core problem: when a vision-language model describes an image, which visual concepts actually drove that description? Current tools don't answer this well.</p>
    <p class="panel-text">The system extends CoX-LMM with a novel <strong>Gradient × Concept method</strong> — combining gradient-based attribution with concept activation vectors to produce importance scores per concept, per output token. This gives you granular insight into <em>why</em> the model said what it said.</p>
    <p class="panel-text">A React/D3.js dashboard was built to make these scores interactive and explorable — researchers can drill into any image caption and see which concepts contributed most.</p>`,
    results: [
      'Extended CoX-LMM with a <strong>custom Gradient × Concept attribution method</strong>',
      'Built React + D3.js dashboard for <strong>interactive concept activation visualization</strong>',
      'Designed <strong>C-Deletion and C-Insertion faithfulness metrics</strong> to validate explanations',
      'Conducted cloud inference testing on <strong>AWS EC2</strong> for scalability',
      'Enabled granular diagnosis of model reasoning for image captioning tasks'
    ],
    techDesc: 'The backend is a FastAPI service wrapping the LLaVA-1.5 model, handling concept extraction and gradient computation. The frontend is a React SPA with D3.js for force-directed and bar chart visualizations of concept importance. Cloud inference was tested on AWS EC2 GPU instances. The attribution method is implemented in PyTorch using autograd hooks.',
    techStack: [
      {label:'Python', primary:true}, {label:'React', primary:true}, {label:'FastAPI'},
      {label:'LLaVA-1.5'}, {label:'D3.js'}, {label:'AWS EC2'}, {label:'PyTorch'},
      {label:'CoX-LMM'}, {label:'Autograd'}
    ],
    github: 'https://github.com/AbhijeetRastogi'
  },

  vulkan: {
    title: 'Vulkan 3D Engine',
    subtitle: 'Custom Rendering Engine · Jan 2024 – Present',
    badge: 'Graphics',
    badgeColor: '#00c26f',
    galleryIcon: '🎮',
    galleryThumbs: ['💡','🪞','🔲'],
    galleryBg: '#1a0a2e',
    overview: `<p class="panel-text">A <strong>custom 3D game engine built entirely from scratch</strong> in C++ and Vulkan — no Unity, no Unreal, no shortcuts. The goal: master every layer of the modern GPU rendering pipeline from command buffers and descriptor sets up to shading and post-processing.</p>
    <p class="panel-text">Vulkan is notoriously verbose — what OpenGL does in 5 lines takes 200 in Vulkan. That verbosity is the point: it forces you to understand exactly how the GPU memory model works, how synchronisation barriers prevent race conditions, and how render passes structure the frame.</p>
    <p class="panel-text">The engine implements <strong>Physically Based Rendering (PBR)</strong> with metallic-roughness workflow, dynamic shadow maps using depth pre-passes, and a real-time editor overlay built with ImGui — all running on the raw Vulkan API.</p>`,
    results: [
      'Implemented full <strong>PBR pipeline</strong> (metallic-roughness, ambient occlusion, normal maps)',
      'Dynamic <strong>shadow mapping</strong> with depth pre-pass and PCF soft shadows',
      'Custom <strong>GLSL shader pipeline</strong> — vertex, fragment, and compute shaders',
      'Real-time <strong>ImGui debug UI</strong> for inspecting engine parameters live',
      'Fully custom <strong>Vulkan memory allocator</strong> and resource management system'
    ],
    techDesc: 'Written in modern C++17 with the Vulkan 1.3 API. The renderer uses a deferred shading pipeline with a G-buffer pass for geometry and a lighting pass for PBR evaluation. Shaders are written in GLSL and compiled to SPIR-V. ImGui is integrated as a Vulkan render pass. The project uses CMake for build management and runs on Windows and Linux.',
    techStack: [
      {label:'C++17', primary:true}, {label:'Vulkan 1.3', primary:true}, {label:'GLSL'},
      {label:'SPIR-V'}, {label:'ImGui'}, {label:'PBR'}, {label:'CMake'},
      {label:'Deferred Shading'}, {label:'Shadow Mapping'}
    ],
    github: 'https://github.com/AbhijeetRastogi'
  },

  snare: {
    title: 'Snare Audio Gen',
    subtitle: 'Procedural Drum Sound Generation · Dec 2024',
    badge: 'ML / AI',
    badgeColor: '#1a5cff',
    galleryIcon: '🥁',
    galleryThumbs: ['〰️','📉','🔊'],
    galleryBg: '#0d0d0d',
    overview: `<p class="panel-text">A deep learning system for <strong>procedurally generating high-quality snare drum sounds</strong> using two generative architectures: WaveGAN (a GAN operating directly in the time domain) and DiffWave (a score-based diffusion model for audio).</p>
    <p class="panel-text">The core challenge in audio generation is high-frequency fidelity — models tend to produce muddy, low-frequency outputs and lose the crisp transient attack that makes a snare sound like a snare. To solve this, a <strong>custom super-resolution architecture</strong> was designed to upsample low-resolution audio and restore the missing high-frequency content.</p>
    <p class="panel-text">Model quality was evaluated using <strong>KL divergence</strong> (distribution matching) and <strong>Wasserstein Distance</strong> (transport distance between spectral distributions) — providing rigorous, perceptually-grounded quality metrics.</p>`,
    results: [
      'Fine-tuned <strong>WaveGAN</strong> for time-domain raw audio waveform generation',
      'Fine-tuned <strong>DiffWave</strong> diffusion model for high-fidelity conditional audio synthesis',
      'Engineered <strong>custom super-resolution architecture</strong> to restore high-frequency content',
      'Evaluated with <strong>KL Divergence and Wasserstein Distance</strong> spectral metrics',
      'Produced outputs indistinguishable from real snare samples in blind listening tests'
    ],
    techDesc: 'Built entirely in PyTorch. WaveGAN training used a WGAN-GP loss with gradient penalty for training stability. DiffWave follows the DDPM schedule with a U-Net-style backbone. The super-resolution network is a lightweight 1D convolutional architecture trained on paired low/high-res audio pairs. Audio I/O handled with librosa and torchaudio.',
    techStack: [
      {label:'Python', primary:true}, {label:'PyTorch', primary:true}, {label:'WaveGAN'},
      {label:'DiffWave'}, {label:'WGAN-GP'}, {label:'DDPM'}, {label:'librosa'},
      {label:'torchaudio'}, {label:'Super-Resolution'}
    ],
    github: 'https://github.com/AbhijeetRastogi'
  },

  drone: {
    title: 'Drone Positioning',
    subtitle: 'Real-Time Vision-Guided Navigation · Jul 2023',
    badge: 'Vision',
    badgeColor: '#ff3b2f',
    galleryIcon: '🚁',
    galleryThumbs: ['📷','🎯','🧪'],
    galleryBg: '#0a1a0a',
    overview: `<p class="panel-text">A computer vision system that enables a drone to <strong>autonomously navigate to a target object</strong> using only its onboard camera feed — no GPS, no pre-mapped environment.</p>
    <p class="panel-text">The core problem was data. Real drone flight data is expensive, slow to collect, and dangerous to gather at scale. The solution: <strong>build a synthetic dataset generator in Unity and Blender</strong> — 1,000+ simulated flight scenarios with randomized lighting, target positions, and backgrounds. This synthetic data was used to pre-train the model before fine-tuning on a small real-world dataset.</p>
    <p class="panel-text">The synthetic-to-real transfer improved model accuracy by <strong>30%</strong> over training on real data alone, and eliminated 15+ hours of physical flight testing. The control model outputs directional commands (forward, left, right, up, down) from a live camera frame.</p>`,
    results: [
      '<strong>30% improvement</strong> in positioning accuracy via synthetic data augmentation',
      'Generated <strong>1,000+ simulation scenarios</strong> in Unity/Blender with randomized environments',
      'Eliminated <strong>15 hours</strong> of physical drone flight data collection',
      'Real-time inference on <strong>live camera feed</strong> at 30fps',
      'Robust to lighting variation and partial target occlusion via sim diversity'
    ],
    techDesc: 'The CV model is a fine-tuned MobileNetV2 backbone (for real-time inference performance) with a custom regression head predicting directional error vectors. The synthetic dataset was generated using Unity ML-Agents and Blender Python scripting. OpenCV handles camera feed preprocessing and frame normalization. TensorFlow Lite was used for deployment to the onboard compute module.',
    techStack: [
      {label:'Python', primary:true}, {label:'TensorFlow', primary:true}, {label:'Unity ML-Agents'},
      {label:'Blender'}, {label:'OpenCV'}, {label:'MobileNetV2'},
      {label:'TFLite'}, {label:'Synthetic Data'}, {label:'Sim-to-Real'}
    ],
    github: 'https://github.com/AbhijeetRastogi'
  }
};

/* ── PANEL LOGIC ── */
function openPanel(id) {
  const p = PROJECTS[id];
  if (!p) return;

  // Header
  const badge = document.getElementById('panel-header-badge');
  badge.textContent = p.badge;
  badge.style.color = p.badgeColor === '#00c26f' ? '#00c26f' : p.badgeColor === '#ff3b2f' ? '#ff3b2f' : 'var(--yellow)';
  badge.style.borderColor = badge.style.color;

  // Title
  document.getElementById('panel-title').textContent = p.title;
  document.getElementById('panel-subtitle').textContent = p.subtitle;

  // Gallery main
  const main = document.getElementById('panel-gallery-main');
  main.style.background = p.galleryBg;
  main.innerHTML = `<span style="font-size:4rem;filter:drop-shadow(0 0 20px rgba(255,255,255,0.15))">${p.galleryIcon}</span><span class="gallery-label" style="position:absolute;bottom:12px;right:16px;font-size:1rem;opacity:0.25">${p.title.toUpperCase()}</span>`;

  // Gallery thumbs
  const grid = document.getElementById('panel-gallery-grid');
  grid.innerHTML = p.galleryThumbs.map((t,i) =>
    `<div class="panel-gallery-thumb" style="background:${i%2===0?'var(--white)':'#f0ebe0'}">${t}</div>`
  ).join('');

  // Overview
  document.getElementById('panel-overview').innerHTML = p.overview;

  // Results
  document.getElementById('panel-results').innerHTML = p.results.map(r =>
    `<li>${r}</li>`
  ).join('');

  // Tech
  document.getElementById('panel-tech-desc').textContent = p.techDesc;
  document.getElementById('panel-tech-stack').innerHTML = p.techStack.map(t =>
    `<span class="tech-chip${t.primary?' primary':''}">${t.label}</span>`
  ).join('');

  // Footer
  document.getElementById('panel-footer').innerHTML = `
    <a href="${p.github}" target="_blank" rel="noopener" class="btn btn-black btn-sm">View on GitHub ↗</a>
    <button class="btn btn-outline btn-sm" onclick="closePanel()">← Back to Projects</button>
  `;

  document.getElementById('overlay').classList.add('open');
  document.getElementById('panel').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closePanel() {
  document.getElementById('overlay').classList.remove('open');
  document.getElementById('panel').classList.remove('open');
  document.body.style.overflow = '';
}

document.addEventListener('keydown', e => { if (e.key === 'Escape') closePanel(); });

/* ── FILTER ── */
function filterProjects(track, btn) {
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  document.querySelectorAll('.proj-card').forEach(card => {
    card.style.display = (track === 'all' || (card.dataset.track||'').includes(track)) ? '' : 'none';
  });
}