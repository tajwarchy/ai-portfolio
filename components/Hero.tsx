import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero} aria-label="Introduction">
      <div className={`${styles.inner} container`}>
        <p className={styles.label} aria-hidden="true">Freelance AI Engineer</p>
        <h1 className={styles.name}>
          Mohammad Tajwar<br />Chowdhury
        </h1>
        <p className={styles.bio}>
          I don&apos;t sell RAG pipelines or agent frameworks. I solve the
          problems those things are supposed to fix: documentation scattered
          across five tools that nobody can search, a repetitive workflow
          quietly eating a founder&apos;s week, a product roadmap stuck behind
          an AI feature no one on the team knows how to ship. I build the
          system, ship it into production, and hand over something that
          keeps working after I&apos;m gone.
        </p>
        <p className={styles.edu}>
          B.Sc in Computer Science · BRAC University · Class of 2025
        </p>
        <div className={styles.actions}>
          <a href="#services" className={styles.btnPrimary}>See How I Can Help</a>
          <a
            href="#projects"
            className={styles.btnSecondary}
          >
            View Case Studies
          </a>
          <a
            href="/resume.pdf"
            className={styles.btnResume}
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
            <svg width="12" height="12" viewBox="0 0 12 12" aria-hidden="true" focusable="false">
              <path d="M2 2h8v8H8V4.5L3.5 9 2.5 8l4.5-4.5H2V2z" fill="currentColor"/>
            </svg>
          </a>
        </div>
        <ul className={styles.badges} aria-label="Focus areas" role="list">
          {['AI Knowledge Systems', 'Workflow Automation', 'AI Feature Integration', 'RAG', 'Agentic Systems'].map(b => (
            <li key={b} className={styles.badge}>{b}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}