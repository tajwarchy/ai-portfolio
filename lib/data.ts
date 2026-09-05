// ─── Types ────────────────────────────────────────────────────────
export interface Project {
  slug: string;
  title: string;
  description: string;
  tags: string[];
  github: string;
  highlight?: string; // e.g. key metric
  thumbnail: string;  // inline SVG data-URI generated in thumbnails.ts
  // ─── Case-study fields ────────────────────────────────────────────
  offering?: string;   // which service package this demonstrates
  audience?: string;   // who this kind of engagement is for
  problem?: string;    // the pain point
  approach?: string;   // how it was solved, technically
  outcome?: string;    // modeled business result, grounded in real industry data
  isConcept?: boolean; // true = labeled dummy/spec project, not a paid client engagement
}

// ─── Portfolio Case Studies (AI Engineering) ─────────────────────
// Every project below is a personal concept / spec-work build — not a paid
// client engagement. Each represents the same class of problem, architecture,
// and approach used in real freelance work. Outcome figures are modeled
// against publicly reported 2025–2026 industry benchmarks for that category
// of AI system (RAG support deflection, workflow automation savings, AI
// feature adoption/retention lift) — not fabricated project-specific claims.
export const projects: Project[] = [
  {
    slug: 'rag-from-scratch',
    title: 'RAG from Scratch',
    offering: 'AI Knowledge Sprint',
    audience: 'Early-stage SaaS startup with docs scattered across Notion, Slack, and an old wiki',
    problem:
      'A small support team was answering the same handful of questions over and over because documentation was scattered across three different tools with no single place to search it.',
    approach:
      'Built a RAG pipeline from first principles — no LangChain — so every stage was inspectable and tunable: three chunking strategies, an embedding cache, FAISS vector search, and a FastAPI layer for chat or API access, with retrieval quality validated empirically rather than assumed.',
    outcome:
      'Modeled against 2026 industry benchmarks for RAG-based support assistants, a knowledge layer like this typically deflects 40–50% of routine documentation questions and drops the cost of answering one from several dollars in agent time to well under a dollar.',
    description:
      'Production-thinking RAG pipeline built without LangChain. Every component — chunking, embedding, FAISS vector search, LLM generation — is implemented from scratch. FastAPI backend with three chunking strategies, embedding cache, and empirical retrieval benchmarks.',
    tags: ['Python', 'FAISS', 'Sentence-Transformers', 'FastAPI', 'Ollama', 'Mistral 7B'],
    github: 'https://github.com/tajwarchy/rag-from-scratch',
    highlight: '93.3% Recall@5 · sentence-aware chunking',
    thumbnail: 'rag',
    isConcept: true,
  },
  {
    slug: 'autonomous-ai-agent',
    title: 'Autonomous AI Agent',
    offering: 'Workflow Automation Sprint',
    audience: 'Ops-heavy startup where a founder or ops lead manually triages leads and reports',
    problem:
      'A repetitive, multi-step workflow — reading inbound leads, cross-checking them against existing records, and drafting a follow-up — was consuming hours every week and kept getting bumped for "real" work.',
    approach:
      'Built a production-grade ReAct agent with a circuit breaker pattern and loop detection so it fails safely instead of spinning, dual-database memory (ChromaDB + SQLite) for semantic recall, and a Prometheus/Grafana stack so every decision the agent makes is observable, not a black box.',
    outcome:
      'Modeled against 2026 workflow-automation benchmarks, agentic automation of a process like this typically returns 10–20 reclaimed hours per week and a 20–30% cut in the operating cost of that workflow.',
    description:
      'Production-grade ReAct agent built without LangChain. Features circuit breaker pattern, loop detection, dual databases (ChromaDB + SQLite), semantic memory, and a Prometheus/Grafana monitoring stack. Provider-agnostic LLM layer works with Ollama, OpenAI, or Anthropic.',
    tags: ['Python', 'ReAct', 'ChromaDB', 'SQLite', 'Prometheus', 'Grafana', 'Docker'],
    github: 'https://github.com/tajwarchy/autonomous-ai-agent',
    highlight: 'Circuit breaker · Semantic memory · Full observability',
    thumbnail: 'agent',
    isConcept: true,
  },
  {
    slug: 'production-rag',
    title: 'Production RAG — LangChain + Qdrant',
    offering: 'AI Knowledge Sprint',
    audience: 'Multi-tenant SaaS platform shipping "chat with your data" as a customer-facing feature',
    problem:
      'Customers were asking for an AI assistant over their own data, but a naive single-tenant chatbot risks leaking one customer\u2019s documents into another\u2019s answers, and unreliable retrieval erodes trust fast.',
    approach:
      'Built multi-user data isolation, three retrieval strategies (similarity, MMR, HyDE) so retrieval quality adapts to query type, cross-encoder reranking, query rewriting, async Celery ingestion for large document sets, and a RAGAS evaluation harness so answer quality is measured, not guessed.',
    outcome:
      'Modeled against 2026 benchmarks for evaluation-driven, multi-tenant RAG deployments, SaaS-embedded knowledge assistants of this kind report containment/resolution rates in the 45–63% range with materially fewer hallucinated answers than un-evaluated pipelines.',
    description:
      'Production RAG system with multi-user isolation, three retrieval strategies (Similarity, MMR, HyDE), cross-encoder reranking, query rewriting, and async Celery ingestion worker. Stateless FastAPI, Docker Compose, RAGAS evaluation harness.',
    tags: ['LangChain', 'Qdrant', 'Celery', 'Redis', 'FastAPI', 'Docker', 'RAGAS'],
    github: 'https://github.com/tajwarchy/production-rag',
    highlight: 'MMR · HyDE · Async ingestion · Multi-user isolation',
    thumbnail: 'production-rag',
    isConcept: true,
  },
  {
    slug: 'fine-tuned-with-lora',
    title: 'LLM Fine-Tuning with LoRA',
    offering: 'AI Feature Launch',
    audience: 'SaaS product with one narrow, high-volume domain task generic LLMs handle imprecisely',
    problem:
      'A generic frontier-model API was accurate enough on average but inconsistent on one specific, repetitive domain task — and paying per-call frontier-model pricing for that single narrow task didn\u2019t scale.',
    approach:
      'Fine-tuned a small open model with LoRA on a domain-specific instruction dataset, tracked every run in an MLflow model registry, served it through an SSE-streaming FastAPI endpoint, and shipped it with a blue-green Docker deployment so swapping model versions carries zero downtime.',
    outcome:
      'The fine-tune itself measured a 37% perplexity improvement over the base model on held-out domain data — translating, in a real feature launch, to more consistent domain outputs at a fraction of frontier-model API cost for that specific task.',
    description:
      'LoRA fine-tuning of TinyLlama on a coding instruction dataset with 37% perplexity improvement. MLflow model registry, SSE streaming FastAPI endpoint, blue-green Docker deployment, and capacity estimation docs. Provider-agnostic serving layer.',
    tags: ['LoRA', 'PEFT', 'HuggingFace', 'MLflow', 'FastAPI', 'SSE', 'Docker'],
    github: 'https://github.com/tajwarchy/fine-tuned-with-lora',
    highlight: '37% perplexity improvement · Blue-green deployment',
    thumbnail: 'lora',
    isConcept: true,
  },
  {
    slug: 'multi-agent-system',
    title: 'Multi-Agent System — LangGraph + MCP',
    offering: 'AI Feature Launch',
    audience: 'SaaS product manager who wants one AI copilot feature to handle several different request types',
    problem:
      'Product wanted a single "workspace copilot" feature, but billing questions, document lookups, and account actions each need different tools and context — a single generic agent kept mixing them up.',
    approach:
      'Designed a LangGraph supervisor graph that routes each query to the right specialist agent, an MCP tool server that decouples tool implementations from the agents that call them, ChromaDB semantic memory, SQLite-backed observability, and a full test suite before anything touched production.',
    outcome:
      'Modeled against 2026 SaaS benchmarks, in-product AI copilot features with this kind of tool-routing reliability correlate with meaningfully higher feature adoption, and higher feature adoption is one of the strongest predictors of retained SaaS accounts.',
    description:
      'Production multi-agent system with a LangGraph supervisor graph routing queries to specialist agents. MCP tool server decouples tool implementations from agents. ChromaDB semantic memory, SQLite observability, full test suite, Docker Compose.',
    tags: ['LangGraph', 'MCP', 'LangChain', 'ChromaDB', 'SQLite', 'FastAPI', 'Docker'],
    github: 'https://github.com/tajwarchy/multi-agent-system',
    highlight: 'Supervisor graph · MCP protocol · Semantic memory',
    thumbnail: 'multi-agent',
    isConcept: true,
  },

];