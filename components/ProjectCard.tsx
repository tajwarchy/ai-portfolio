import type { Project } from '@/lib/data';
import { thumbnails } from '@/lib/thumbnails';
import styles from './ProjectCard.module.css';

interface Props { project: Project; }

export default function ProjectCard({ project }: Props) {
  const svg = project.thumbnail ? thumbnails[project.thumbnail] : null;
  const dataUri = svg
    ? `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`
    : null;

  return (
    <article className={styles.card} aria-label={project.title}>
      {dataUri && (
        <div className={styles.thumb} aria-hidden="true">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={dataUri} alt="" width={600} height={320} className={styles.thumbImg} />
        </div>
      )}

      <div className={styles.body}>
        {project.isConcept && (
          <span className={styles.conceptBadge}>
            Concept project — spec work, not a paid client engagement
          </span>
        )}

        <div className={styles.top}>
          <h3 className={styles.title}>{project.title}</h3>
          {project.highlight && (
            <span className={styles.highlight} aria-label={`Key metric: ${project.highlight}`}>
              {project.highlight}
            </span>
          )}
        </div>

        {project.offering && (
          <span className={styles.offeringTag}>Demonstrates: {project.offering}</span>
        )}

        {project.audience && (
          <p className={styles.audience}><strong>Who it&apos;s for:</strong> {project.audience}</p>
        )}

        {project.problem && (
          <div className={styles.caseBlock}>
            <span className={styles.caseLabel}>Problem</span>
            <p className={styles.caseText}>{project.problem}</p>
          </div>
        )}

        {project.approach && (
          <div className={styles.caseBlock}>
            <span className={styles.caseLabel}>Approach</span>
            <p className={styles.caseText}>{project.approach}</p>
          </div>
        )}

        {project.outcome && (
          <div className={styles.caseBlock}>
            <span className={styles.caseLabel}>Outcome</span>
            <p className={styles.caseText}>{project.outcome}</p>
          </div>
        )}

        {!project.problem && <p className={styles.desc}>{project.description}</p>}

        <ul className={styles.tags} role="list" aria-label="Technologies">
          {project.tags.map(t => (
            <li key={t} className={styles.tag}>{t}</li>
          ))}
        </ul>

        <div className={styles.footer}>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.ghLink}
            aria-label={`View ${project.title} on GitHub (opens in new tab)`}
          >
            View on GitHub
            <svg width="12" height="12" viewBox="0 0 12 12" aria-hidden="true" focusable="false">
              <path d="M2 2h8v8H8V4.5L3.5 9 2.5 8l4.5-4.5H2V2z" fill="currentColor"/>
            </svg>
          </a>
        </div>
      </div>
    </article>
  );
}