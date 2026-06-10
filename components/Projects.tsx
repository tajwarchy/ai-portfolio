import { projects } from '@/lib/data';
import ProjectCard from './ProjectCard';
import styles from './Projects.module.css';

export default function Projects() {
  const featured = projects.filter(p => p.featured);

  return (
    <section id="projects" className={styles.section} aria-labelledby="projects-heading">
      <div className="container">
        <div className={styles.header}>
          <h2 id="projects-heading">AI Engineering</h2>
          <p className={styles.sub}>
            Five production-grade systems; RAG, agents, fine-tuning, and multi-agent orchestration.
            Every project is built and evaluated locally, fully open-source.
          </p>
        </div>
        <div className={styles.grid} role="list">
          {featured.map(p => (
            <div key={p.slug} role="listitem">
              <ProjectCard project={p} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}