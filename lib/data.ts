// ─── Types ────────────────────────────────────────────────────────
export interface Project {
  slug: string;
  title: string;
  description: string;
  tags: string[];
  github: string;
  featured: boolean;
  category: 'ai-engineering' | 'computer-vision';
  highlight?: string; // e.g. key metric
  thumbnail: string;  // inline SVG data-URI generated in thumbnails.ts
}

export interface SkillGroup {
  label: string;
  skills: string[];
}

// ─── Featured AI Engineering Projects ────────────────────────────
export const projects: Project[] = [
  {
    slug: 'rag-from-scratch',
    title: 'RAG from Scratch',
    description:
      'Production-thinking RAG pipeline built without LangChain. Every component — chunking, embedding, FAISS vector search, LLM generation — is implemented from scratch. FastAPI backend with three chunking strategies, embedding cache, and empirical retrieval benchmarks.',
    tags: ['Python', 'FAISS', 'Sentence-Transformers', 'FastAPI', 'Ollama', 'Mistral 7B'],
    github: 'https://github.com/tajwarchy/rag-from-scratch',
    featured: true,
    category: 'ai-engineering',
    highlight: '93.3% Recall@5 · sentence-aware chunking',
    thumbnail: 'rag',
  },
  {
    slug: 'autonomous-ai-agent',
    title: 'Autonomous AI Agent',
    description:
      'Production-grade ReAct agent built without LangChain. Features circuit breaker pattern, loop detection, dual databases (ChromaDB + SQLite), semantic memory, and a Prometheus/Grafana monitoring stack. Provider-agnostic LLM layer works with Ollama, OpenAI, or Anthropic.',
    tags: ['Python', 'ReAct', 'ChromaDB', 'SQLite', 'Prometheus', 'Grafana', 'Docker'],
    github: 'https://github.com/tajwarchy/autonomous-ai-agent',
    featured: true,
    category: 'ai-engineering',
    highlight: 'Circuit breaker · Semantic memory · Full observability',
    thumbnail: 'agent',
  },
  {
    slug: 'production-rag',
    title: 'Production RAG — LangChain + Qdrant',
    description:
      'Production RAG system with multi-user isolation, three retrieval strategies (Similarity, MMR, HyDE), cross-encoder reranking, query rewriting, and async Celery ingestion worker. Stateless FastAPI, Docker Compose, RAGAS evaluation harness.',
    tags: ['LangChain', 'Qdrant', 'Celery', 'Redis', 'FastAPI', 'Docker', 'RAGAS'],
    github: 'https://github.com/tajwarchy/production-rag',
    featured: true,
    category: 'ai-engineering',
    highlight: 'MMR · HyDE · Async ingestion · Multi-user isolation',
    thumbnail: 'production-rag',
  },
  {
    slug: 'fine-tuned-with-lora',
    title: 'LLM Fine-Tuning with LoRA',
    description:
      'LoRA fine-tuning of TinyLlama on a coding instruction dataset with 37% perplexity improvement. MLflow model registry, SSE streaming FastAPI endpoint, blue-green Docker deployment, and capacity estimation docs. Provider-agnostic serving layer.',
    tags: ['LoRA', 'PEFT', 'HuggingFace', 'MLflow', 'FastAPI', 'SSE', 'Docker'],
    github: 'https://github.com/tajwarchy/fine-tuned-with-lora',
    featured: true,
    category: 'ai-engineering',
    highlight: '37% perplexity improvement · Blue-green deployment',
    thumbnail: 'lora',
  },
  {
    slug: 'multi-agent-system',
    title: 'Multi-Agent System — LangGraph + MCP',
    description:
      'Production multi-agent system with a LangGraph supervisor graph routing queries to specialist agents. MCP tool server decouples tool implementations from agents. ChromaDB semantic memory, SQLite observability, full test suite, Docker Compose.',
    tags: ['LangGraph', 'MCP', 'LangChain', 'ChromaDB', 'SQLite', 'FastAPI', 'Docker'],
    github: 'https://github.com/tajwarchy/multi-agent-system',
    featured: true,
    category: 'ai-engineering',
    highlight: 'Supervisor graph · MCP protocol · Semantic memory',
    thumbnail: 'multi-agent',
  },

  // ─── Computer Vision (non-featured) ──────────────────────────
  {
    slug: 'advanced-multi-object-tracking',
    title: 'Advanced Multi-Object Tracking',
    description: 'YOLOv8m + StrongSORT with OSNet appearance embeddings on MOT17. Benchmarked against ByteTrack baseline with TrackEval.',
    tags: ['YOLOv8', 'StrongSORT', 'OSNet', 'TrackEval', 'Python'],
    github: 'https://github.com/tajwarchy/advanced-multi-object-tracking',
    featured: false,
    category: 'computer-vision',
    highlight: 'HOTA 41.6 · MOTA 38.1 · IDF1 50.8',
    thumbnail: '',
  },
  {
    slug: 'multi-camera-people-tracking',
    title: 'Multi-Camera People Tracking',
    description: 'Cross-camera re-identification and tracking pipeline spanning multiple viewpoints.',
    tags: ['Re-ID', 'YOLOv8', 'Python', 'OpenCV'],
    github: 'https://github.com/tajwarchy/multi-camera-people-tracking',
    featured: false,
    category: 'computer-vision',
    highlight: '',
    thumbnail: '',
  },
  {
    slug: 'person-reidentification',
    title: 'Person Re-Identification',
    description: 'Deep metric learning pipeline for person re-ID across non-overlapping camera views.',
    tags: ['Deep Metric Learning', 'Re-ID', 'PyTorch', 'Python'],
    github: 'https://github.com/tajwarchy/person-reidentification',
    featured: false,
    category: 'computer-vision',
    highlight: '',
    thumbnail: '',
  },
  {
    slug: 'crowd-anomaly-panic-detection',
    title: 'Crowd Anomaly & Panic Detection',
    description: 'Real-time detection of anomalous crowd behaviour and panic events from video streams.',
    tags: ['Anomaly Detection', 'Crowd Analysis', 'OpenCV', 'Python'],
    github: 'https://github.com/tajwarchy/crowd-anomaly-panic-detection',
    featured: false,
    category: 'computer-vision',
    highlight: '',
    thumbnail: '',
  },
  {
    slug: 'anomaly-detection',
    title: 'Anomaly Detection',
    description: 'General-purpose visual anomaly detection using deep feature extraction.',
    tags: ['Anomaly Detection', 'PyTorch', 'Python'],
    github: 'https://github.com/tajwarchy/anomaly-detection',
    featured: false,
    category: 'computer-vision',
    highlight: '',
    thumbnail: '',
  },
  {
    slug: 'crowd-density-estimation-csrnet',
    title: 'Crowd Density Estimation (CSRNet)',
    description: 'Dilated convolutional network (CSRNet) for high-accuracy crowd density map estimation.',
    tags: ['CSRNet', 'Density Estimation', 'PyTorch', 'Python'],
    github: 'https://github.com/tajwarchy/crowd-density-estimation-csrnet',
    featured: false,
    category: 'computer-vision',
    highlight: '',
    thumbnail: '',
  },
  {
    slug: 'video-tracking-analytics',
    title: 'Video Tracking Analytics',
    description: 'End-to-end video analytics pipeline combining detection, tracking, and zone-based analytics.',
    tags: ['YOLOv8', 'Tracking', 'Analytics', 'Python'],
    github: 'https://github.com/tajwarchy/video-tracking-analytics',
    featured: false,
    category: 'computer-vision',
    highlight: '',
    thumbnail: '',
  },
  {
    slug: 'traffic-sign-classifier',
    title: 'Traffic Sign Classifier',
    description: 'CNN-based traffic sign classification on GTSRB with data augmentation and fine-tuning.',
    tags: ['CNN', 'Classification', 'PyTorch', 'Python'],
    github: 'https://github.com/tajwarchy/traffic-sign-classifier',
    featured: false,
    category: 'computer-vision',
    highlight: '',
    thumbnail: '',
  },
  {
    slug: 'semantic-segmentation',
    title: 'Semantic Segmentation',
    description: 'Pixel-level scene understanding using encoder-decoder architectures.',
    tags: ['Segmentation', 'DeepLab', 'PyTorch', 'Python'],
    github: 'https://github.com/tajwarchy/semantic-segmentation',
    featured: false,
    category: 'computer-vision',
    highlight: '',
    thumbnail: '',
  },
  {
    slug: 'instance-segmentation',
    title: 'Instance Segmentation',
    description: 'Object-level instance segmentation with Mask R-CNN on custom datasets.',
    tags: ['Mask R-CNN', 'Segmentation', 'PyTorch', 'Python'],
    github: 'https://github.com/tajwarchy/instance-segmentation',
    featured: false,
    category: 'computer-vision',
    highlight: '',
    thumbnail: '',
  },
  {
    slug: 'medical-xray-classification',
    title: 'Medical X-Ray Classification',
    description: 'Transfer-learning pipeline for chest X-ray pathology classification with Grad-CAM explainability.',
    tags: ['Transfer Learning', 'Grad-CAM', 'Medical AI', 'PyTorch'],
    github: 'https://github.com/tajwarchy/medical-xray-classification',
    featured: false,
    category: 'computer-vision',
    highlight: '',
    thumbnail: '',
  },
  {
    slug: 'color-detection-app',
    title: 'Color Detection App',
    description: 'Real-time color detection and labelling from webcam feed using HSV space analysis.',
    tags: ['OpenCV', 'HSV', 'Python'],
    github: 'https://github.com/tajwarchy/color-detection-app',
    featured: false,
    category: 'computer-vision',
    highlight: '',
    thumbnail: '',
  },
];

// ─── Skills ───────────────────────────────────────────────────────
export const skillGroups: SkillGroup[] = [
  {
    label: 'AI Engineering',
    skills: [
      'RAG Systems', 'LLM Fine-Tuning', 'LoRA / PEFT',
      'Autonomous Agents', 'ReAct Pattern', 'Multi-Agent Systems',
      'LangChain', 'LangGraph', 'MCP', 'Prompt Engineering',
    ],
  },
  {
    label: 'Vector & Memory',
    skills: [
      'FAISS', 'Qdrant', 'ChromaDB',
      'Sentence-Transformers', 'Semantic Search', 'Embedding Pipelines',
    ],
  },
  {
    label: 'MLOps & Serving',
    skills: [
      'FastAPI', 'Docker', 'Docker Compose',
      'MLflow', 'Prometheus', 'Grafana',
      'Celery', 'Redis', 'SSE Streaming',
      'Blue-Green Deployment',
    ],
  },
  {
    label: 'Models & Frameworks',
    skills: [
      'HuggingFace Transformers', 'PyTorch', 'Ollama',
      'Mistral 7B', 'TinyLlama', 'OpenAI API', 'Anthropic API',
    ],
  },
  {
    label: 'Computer Vision',
    skills: [
      'YOLOv8', 'Object Detection', 'Multi-Object Tracking',
      'Person Re-ID', 'Semantic Segmentation', 'Instance Segmentation',
      'Crowd Analysis', 'OpenCV', 'Grad-CAM',
    ],
  },
  {
    label: 'Core',
    skills: ['Python', 'SQL', 'REST APIs', 'System Design', 'Git'],
  },
];