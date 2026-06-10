// SVG thumbnails for the 5 featured AI projects.
// Each returns a raw SVG string. Used as background via next/image or inline.

export const thumbnails: Record<string, string> = {
  rag: `
<svg viewBox="0 0 600 320" xmlns="http://www.w3.org/2000/svg" fill="none">
  <defs>
    <linearGradient id="ragGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a0a0a;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#1a1a1a;stop-opacity:1" />
    </linearGradient>
    <linearGradient id="blockGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" style="stop-color:#2d2d6d;stop-opacity:0.8" />
      <stop offset="100%" style="stop-color:#1a1a3a;stop-opacity:1" />
    </linearGradient>
  </defs>
  <rect width="600" height="320" fill="url(#ragGrad)"/>
  
  <!-- title -->
  <text x="300" y="40" font-family="monospace" font-size="14" font-weight="700" fill="#6dd5ed" text-anchor="middle">RAG Pipeline</text>
  
  <!-- pipeline blocks with improved styling -->
  <rect x="24"  y="110" width="76" height="44" rx="6" fill="url(#blockGrad)" stroke="#4a90e2" stroke-width="2"/>
  <text x="62"  y="137" font-family="monospace" font-size="11" font-weight="600" fill="#6dd5ed" text-anchor="middle">PDF</text>
  
  <line x1="100" y1="132" x2="140" y2="132" stroke="#4a90e2" stroke-width="2" marker-end="url(#arrowBlue)"/>
  
  <rect x="140" y="110" width="76" height="44" rx="6" fill="url(#blockGrad)" stroke="#4a90e2" stroke-width="2"/>
  <text x="178" y="137" font-family="monospace" font-size="11" font-weight="600" fill="#6dd5ed" text-anchor="middle">Chunk</text>
  
  <line x1="216" y1="132" x2="256" y2="132" stroke="#4a90e2" stroke-width="2" marker-end="url(#arrowBlue)"/>
  
  <rect x="256" y="110" width="76" height="44" rx="6" fill="url(#blockGrad)" stroke="#4a90e2" stroke-width="2"/>
  <text x="294" y="137" font-family="monospace" font-size="11" font-weight="600" fill="#6dd5ed" text-anchor="middle">Embed</text>
  
  <line x1="332" y1="132" x2="372" y2="132" stroke="#4a90e2" stroke-width="2" marker-end="url(#arrowBlue)"/>
  
  <rect x="372" y="110" width="76" height="44" rx="6" fill="url(#blockGrad)" stroke="#4a90e2" stroke-width="2"/>
  <text x="410" y="137" font-family="monospace" font-size="11" font-weight="600" fill="#6dd5ed" text-anchor="middle">FAISS</text>
  
  <line x1="448" y1="132" x2="488" y2="132" stroke="#4a90e2" stroke-width="2" marker-end="url(#arrowBlue)"/>
  
  <rect x="488" y="110" width="76" height="44" rx="6" fill="url(#blockGrad)" stroke="#4a90e2" stroke-width="2"/>
  <text x="526" y="137" font-family="monospace" font-size="11" font-weight="600" fill="#6dd5ed" text-anchor="middle">LLM</text>
  
  <!-- metric highlight -->
  <rect x="160" y="200" width="280" height="50" rx="8" fill="#1a3a1a" stroke="#2d7d2d" stroke-width="2" opacity="0.6"/>
  <text x="300" y="220" font-family="monospace" font-size="13" font-weight="700" fill="#4ade80" text-anchor="middle">Recall@5 · 93.3%</text>
  <text x="300" y="240" font-family="monospace" font-size="10" fill="#4ade80" text-anchor="middle">Sentence-Transformers · Mistral 7B</text>
  
  <defs>
    <marker id="arrowBlue" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
      <path d="M0,0 L8,4 L0,8 Z" fill="#4a90e2"/>
    </marker>
  </defs>
</svg>`,

  agent: `
<svg viewBox="0 0 600 320" xmlns="http://www.w3.org/2000/svg" fill="none">
  <defs>
    <linearGradient id="agentGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a0a0a;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#1a1a1a;stop-opacity:1" />
    </linearGradient>
    <linearGradient id="stateGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" style="stop-color:#6d28d9;stop-opacity:0.8" />
      <stop offset="100%" style="stop-color:#3e1f47;stop-opacity:1" />
    </linearGradient>
  </defs>
  <rect width="600" height="320" fill="url(#agentGrad)"/>
  
  <!-- title -->
  <text x="300" y="40" font-family="monospace" font-size="14" font-weight="700" fill="#c084fc" text-anchor="middle">ReAct Agent</text>
  
  <!-- state machine circles with gradients -->
  <circle cx="300" cy="100" r="40" fill="url(#stateGrad)" stroke="#a855f7" stroke-width="2"/>
  <text x="300" y="108" font-family="monospace" font-size="11" font-weight="600" fill="#e9d5ff" text-anchor="middle">THINK</text>
  
  <circle cx="170" cy="210" r="36" fill="url(#stateGrad)" stroke="#a855f7" stroke-width="2"/>
  <text x="170" y="217" font-family="monospace" font-size="10" font-weight="600" fill="#e9d5ff" text-anchor="middle">ACT</text>
  
  <circle cx="430" cy="210" r="36" fill="url(#stateGrad)" stroke="#a855f7" stroke-width="2"/>
  <text x="430" y="217" font-family="monospace" font-size="10" font-weight="600" fill="#e9d5ff" text-anchor="middle">OBSERVE</text>
  
  <circle cx="300" cy="280" r="28" fill="url(#stateGrad)" stroke="#a855f7" stroke-width="2"/>
  <text x="300" y="287" font-family="monospace" font-size="9" font-weight="600" fill="#e9d5ff" text-anchor="middle">DONE</text>
  
  <!-- curved paths between states -->
  <path d="M 270 130 Q 200 170 200 200" stroke="#a855f7" stroke-width="2" fill="none" marker-end="url(#arrowPurple)"/>
  <path d="M 330 130 Q 400 170 400 200" stroke="#a855f7" stroke-width="2" fill="none" marker-end="url(#arrowPurple)"/>
  <path d="M 200 245 Q 300 250 400 245" stroke="#a855f7" stroke-width="2" fill="none" marker-end="url(#arrowPurple)"/>
  <path d="M 420 245 Q 350 265 330 270" stroke="#a855f7" stroke-width="2" fill="none" marker-end="url(#arrowPurple)"/>
  
  <defs>
    <marker id="arrowPurple" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
      <path d="M0,0 L8,4 L0,8 Z" fill="#a855f7"/>
    </marker>
  </defs>
</svg>`,

  'production-rag': `
<svg viewBox="0 0 600 320" xmlns="http://www.w3.org/2000/svg" fill="none">
  <defs>
    <linearGradient id="prodGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a0a0a;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#1a1a1a;stop-opacity:1" />
    </linearGradient>
    <linearGradient id="pipeGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" style="stop-color:#f59e0b;stop-opacity:0.8" />
      <stop offset="100%" style="stop-color:#92400e;stop-opacity:1" />
    </linearGradient>
  </defs>
  <rect width="600" height="320" fill="url(#prodGrad)"/>
  
  <!-- title -->
  <text x="300" y="40" font-family="monospace" font-size="14" font-weight="700" fill="#fbbf24" text-anchor="middle">Production RAG</text>
  
  <!-- vertical pipeline with enhanced styling -->
  <rect x="210" y="60"  width="180" height="38" rx="6" fill="url(#pipeGrad)" stroke="#f59e0b" stroke-width="2"/>
  <text x="300" y="86" font-family="monospace" font-size="11" font-weight="600" fill="#fef3c7" text-anchor="middle">Query Rewriter</text>
  
  <line x1="300" y1="98" x2="300" y2="120" stroke="#f59e0b" stroke-width="2.5" marker-end="url(#arrowAmber)"/>
  
  <rect x="210" y="120" width="180" height="38" rx="6" fill="url(#pipeGrad)" stroke="#f59e0b" stroke-width="2"/>
  <text x="300" y="146" font-family="monospace" font-size="11" font-weight="600" fill="#fef3c7" text-anchor="middle">Retrieval [MMR|HyDE]</text>
  
  <line x1="300" y1="158" x2="300" y2="180" stroke="#f59e0b" stroke-width="2.5" marker-end="url(#arrowAmber)"/>
  
  <rect x="210" y="180" width="180" height="38" rx="6" fill="url(#pipeGrad)" stroke="#f59e0b" stroke-width="2"/>
  <text x="300" y="206" font-family="monospace" font-size="11" font-weight="600" fill="#fef3c7" text-anchor="middle">Qdrant Vector DB</text>
  
  <line x1="300" y1="218" x2="300" y2="240" stroke="#f59e0b" stroke-width="2.5" marker-end="url(#arrowAmber)"/>
  
  <rect x="210" y="240" width="180" height="38" rx="6" fill="url(#pipeGrad)" stroke="#f59e0b" stroke-width="2"/>
  <text x="300" y="266" font-family="monospace" font-size="11" font-weight="600" fill="#fef3c7" text-anchor="middle">LLM → Answer</text>
  
  <!-- async worker badge -->
  <rect x="40" y="155" width="130" height="36" rx="6" fill="transparent" stroke="#f59e0b" stroke-width="1.5" stroke-dasharray="5 3" opacity="0.7"/>
  <text x="105" y="179" font-family="monospace" font-size="9" font-weight="600" fill="#f59e0b" text-anchor="middle">Celery Worker</text>
  <line x1="170" y1="173" x2="210" y2="173" stroke="#f59e0b" stroke-width="1.5" stroke-dasharray="5 3"/>
  
  <defs>
    <marker id="arrowAmber" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
      <path d="M0,0 L8,4 L0,8 Z" fill="#f59e0b"/>
    </marker>
  </defs>
</svg>`,

  lora: `
<svg viewBox="0 0 600 320" xmlns="http://www.w3.org/2000/svg" fill="none">
  <defs>
    <linearGradient id="loraGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a0a0a;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#1a1a1a;stop-opacity:1" />
    </linearGradient>
    <linearGradient id="barGradBefore" x1="0%" y1="100%" x2="0%" y2="0%">
      <stop offset="0%" style="stop-color:#ef4444;stop-opacity:0.8" />
      <stop offset="100%" style="stop-color:#7f1d1d;stop-opacity:1" />
    </linearGradient>
    <linearGradient id="barGradAfter" x1="0%" y1="100%" x2="0%" y2="0%">
      <stop offset="0%" style="stop-color:#22c55e;stop-opacity:0.8" />
      <stop offset="100%" style="stop-color:#15803d;stop-opacity:1" />
    </linearGradient>
  </defs>
  <rect width="600" height="320" fill="url(#loraGrad)"/>
  
  <!-- title -->
  <text x="300" y="40" font-family="monospace" font-size="14" font-weight="700" fill="#86efac" text-anchor="middle">LoRA Fine-Tuning</text>
  
  <!-- before label -->
  <text x="140" y="70" font-family="monospace" font-size="12" font-weight="600" fill="#fca5a5" text-anchor="middle">Before</text>
  
  <!-- before bar (taller = worse) -->
  <rect x="100" y="90" width="80" height="150" rx="4" fill="url(#barGradBefore)" stroke="#dc2626" stroke-width="2"/>
  <text x="140" y="280" font-family="monospace" font-size="13" font-weight="700" fill="#fca5a5" text-anchor="middle">3.00</text>
  
  <!-- improvement arrow -->
  <line x1="200" y1="165" x2="380" y2="165" stroke="#888" stroke-width="2" marker-end="url(#arrowGray)"/>
  <text x="290" y="160" font-family="monospace" font-size="10" fill="#888" text-anchor="middle">37% improvement</text>
  
  <!-- after label -->
  <text x="420" y="70" font-family="monospace" font-size="12" font-weight="600" fill="#86efac" text-anchor="middle">After</text>
  
  <!-- after bar (shorter = better) -->
  <rect x="380" y="135" width="80" height="105" rx="4" fill="url(#barGradAfter)" stroke="#22c55e" stroke-width="2"/>
  <text x="420" y="280" font-family="monospace" font-size="13" font-weight="700" fill="#86efac" text-anchor="middle">1.88</text>
  
  <!-- y-axis label -->
  <text x="35" y="165" font-family="monospace" font-size="10" fill="#666" text-anchor="end">Perplexity</text>
  <text x="35" y="310" font-family="monospace" font-size="9" fill="#666" text-anchor="end">(lower is better)</text>
  
  <defs>
    <marker id="arrowGray" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
      <path d="M0,0 L8,4 L0,8 Z" fill="#888"/>
    </marker>
  </defs>
</svg>`,

  'multi-agent': `
<svg viewBox="0 0 600 320" xmlns="http://www.w3.org/2000/svg" fill="none">
  <defs>
    <linearGradient id="multiGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a0a0a;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#1a1a1a;stop-opacity:1" />
    </linearGradient>
    <linearGradient id="agentBoxGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" style="stop-color:#ec4899;stop-opacity:0.8" />
      <stop offset="100%" style="stop-color:#831843;stop-opacity:1" />
    </linearGradient>
  </defs>
  <rect width="600" height="320" fill="url(#multiGrad)"/>
  
  <!-- title -->
  <text x="300" y="40" font-family="monospace" font-size="14" font-weight="700" fill="#f472b6" text-anchor="middle">Multi-Agent System</text>
  
  <!-- supervisor -->
  <rect x="220" y="60" width="160" height="40" rx="6" fill="url(#agentBoxGrad)" stroke="#ec4899" stroke-width="2"/>
  <text x="300" y="87" font-family="monospace" font-size="11" font-weight="600" fill="#fce7f3" text-anchor="middle">Supervisor</text>
  
  <!-- branches -->
  <path d="M 260 100 Q 240 130 160 160" stroke="#ec4899" stroke-width="2" fill="none" marker-end="url(#arrowPink)"/>
  <path d="M 300 100 Q 300 130 300 160" stroke="#ec4899" stroke-width="2" fill="none" marker-end="url(#arrowPink)"/>
  <path d="M 340 100 Q 360 130 440 160" stroke="#ec4899" stroke-width="2" fill="none" marker-end="url(#arrowPink)"/>
  
  <!-- agent nodes -->
  <rect x="100" y="160" width="120" height="40" rx="6" fill="url(#agentBoxGrad)" stroke="#ec4899" stroke-width="1.5"/>
  <text x="160" y="187" font-family="monospace" font-size="10" font-weight="600" fill="#fce7f3" text-anchor="middle">Research</text>
  
  <rect x="240" y="160" width="120" height="40" rx="6" fill="url(#agentBoxGrad)" stroke="#ec4899" stroke-width="1.5"/>
  <text x="300" y="187" font-family="monospace" font-size="10" font-weight="600" fill="#fce7f3" text-anchor="middle">Calculator</text>
  
  <rect x="380" y="160" width="120" height="40" rx="6" fill="url(#agentBoxGrad)" stroke="#ec4899" stroke-width="1.5"/>
  <text x="440" y="187" font-family="monospace" font-size="10" font-weight="600" fill="#fce7f3" text-anchor="middle">Summarizer</text>
  
  <!-- MCP tool server -->
  <rect x="180" y="240" width="240" height="40" rx="6" fill="transparent" stroke="#ec4899" stroke-width="2" stroke-dasharray="6 3"/>
  <text x="300" y="267" font-family="monospace" font-size="11" font-weight="600" fill="#f472b6" text-anchor="middle">MCP Tool Server</text>
  
  <!-- lines to MCP -->
  <line x1="160" y1="200" x2="240" y2="240" stroke="#ec4899" stroke-width="1.5" stroke-dasharray="4 2" opacity="0.6"/>
  <line x1="300" y1="200" x2="300" y2="240" stroke="#ec4899" stroke-width="1.5" stroke-dasharray="4 2" opacity="0.6"/>
  <line x1="440" y1="200" x2="360" y2="240" stroke="#ec4899" stroke-width="1.5" stroke-dasharray="4 2" opacity="0.6"/>
  
  <defs>
    <marker id="arrowPink" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
      <path d="M0,0 L8,4 L0,8 Z" fill="#ec4899"/>
    </marker>
  </defs>
</svg>`,
};