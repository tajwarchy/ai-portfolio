/**
 * Tech logo URLs from common CDNs
 * Using Simple Icons (simpleicons.org) via cdn
 */
export const techLogos: Record<string, string> = {
  // AI & ML
  'PyTorch': 'https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/pytorch.svg',
  'Python': 'https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/python.svg',
  'HuggingFace Transformers': 'https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/huggingface.svg',
  'OpenAI API': 'https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/openai.svg',
  'Anthropic API': 'https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/anthropic.svg',
  
  // Vector DBs
  'FAISS': 'https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/meta.svg',
  'Qdrant': 'https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/databricks.svg',
  'ChromaDB': 'https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/databricks.svg',
  'Sentence-Transformers': 'https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/pytorch.svg',
  
  // Backend & APIs
  'FastAPI': 'https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/fastapi.svg',
  'REST APIs': 'https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/fastapi.svg',
  
  // DevOps & Infrastructure
  'Docker': 'https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/docker.svg',
  'Docker Compose': 'https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/docker.svg',
  'Prometheus': 'https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/prometheus.svg',
  'Grafana': 'https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/grafana.svg',
  'Redis': 'https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/redis.svg',
  
  // Monitoring & Workflows
  'MLflow': 'https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/databricks.svg',
  'Celery': 'https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/celery.svg',
  
  // Models
  'Ollama': 'https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/openai.svg',
  'Mistral 7B': 'https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/openai.svg',
  'TinyLlama': 'https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/pytorch.svg',
  
  // Computer Vision
  'YOLOv8': 'https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/opencv.svg',
  'OpenCV': 'https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/opencv.svg',
  
  // Core & General
  'SQL': 'https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/sqlite.svg',
  'Git': 'https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/git.svg',
  'System Design': 'https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/archlinux.svg',
  
  // Frameworks & Tools
  'LangChain': 'https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/chainlink.svg',
  'LangGraph': 'https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/chainlink.svg',
};

export function getTechLogo(tech: string): string | undefined {
  return techLogos[tech] || techLogos[tech.split(' ')[0]];
}
