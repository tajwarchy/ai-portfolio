'use client';

import { useState, useRef } from 'react';
import { projects } from '@/lib/data';
import styles from './MoreProjects.module.css';

export default function MoreProjects() {
  const [isExpanded, setIsExpanded] = useState(false);
  const listRef = useRef<HTMLUListElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  
  const moreProjects = projects.filter(p => !p.featured);
  const visibleProjects = isExpanded ? moreProjects : moreProjects.slice(0, 2);
  const hasMore = moreProjects.length > 2;

  const handleSeeMore = () => {
    setIsExpanded(true);
    // Scroll to show more projects after a brief delay
    setTimeout(() => {
      listRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
  };

  const handleSeeLess = () => {
    setIsExpanded(false);
    // Scroll back to top of section
    setTimeout(() => {
      sectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
  };

  return (
    <section id="more-projects" ref={sectionRef} className={styles.section} aria-labelledby="more-heading">
      <div className="container">
        <h2 id="more-heading" className={styles.heading}>More projects</h2>
        <ul className={styles.list} ref={listRef} role="list">
          {visibleProjects.map(p => (
            <li key={p.slug} className={styles.item}>
              <div className={styles.left}>
                <div className={styles.titleRow}>
                  <span className={styles.title}>{p.title}</span>
                </div>
                {p.highlight && (
                  <span className={styles.highlight}>{p.highlight}</span>
                )}
                <p className={styles.desc}>{p.description}</p>
              </div>
              <div className={styles.right}>
                <a
                  href={p.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.githubButton}
                  aria-label={`${p.title} — GitHub (opens in new tab)`}
                >
                  <svg className={styles.githubIcon} viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                  </svg>
                  <span className={styles.githubText}>GitHub</span>
                </a>
                <ul className={styles.tags} role="list" aria-label={`${p.title} technologies`}>
                  {p.tags.map(t => <li key={t} className={styles.tag}>{t}</li>)}
                </ul>
              </div>
            </li>
          ))}
        </ul>
        <div className={styles.buttonContainer}>
          {!isExpanded && hasMore && (
            <button
              onClick={handleSeeMore}
              className={styles.seeMoreButton}
              aria-label="View more projects"
            >
              See more
              <svg className={styles.chevron} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </button>
          )}
          {isExpanded && hasMore && (
            <button
              onClick={handleSeeLess}
              className={styles.seeLessButton}
              aria-label="View fewer projects"
            >
              See less
              <svg className={styles.chevronUp} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="18 15 12 9 6 15"></polyline>
              </svg>
            </button>
          )}
        </div>
      </div>
    </section>
  );
}