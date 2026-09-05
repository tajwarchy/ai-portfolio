import { projects } from '@/lib/data';
import ProjectCard from './ProjectCard';
import styles from './Projects.module.css';

export default function Projects() {
  return (
    <section id="projects" className={styles.section} aria-labelledby="projects-heading">
      <div className="container">
        <div className={styles.header}>
          <h2 id="projects-heading">Portfolio Case Studies</h2>
          <p className={styles.sub}>
            Five self-initiated concept projects, each framed as a client engagement would be:
            who it&apos;s for, what problem it solved, how, and what a result like this typically
            looks like in the real world. These are personal spec-work builds, not paid client
            projects — but each one mirrors the architecture and process I use on real engagements.
          </p>
        </div>
        <div className={styles.grid} role="list">
          {projects.map(p => (
            <div key={p.slug} role="listitem">
              <ProjectCard project={p} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}