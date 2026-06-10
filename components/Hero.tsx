import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero} aria-label="Introduction">
      <div className={`${styles.inner} container`}>
        <p className={styles.label} aria-hidden="true">AI Engineer</p>
        <h1 className={styles.name}>
          Mohammad Tajwar<br />Chowdhury
        </h1>
        <p className={styles.bio}>
          I build production-grade AI systems; RAG pipelines, autonomous agents,
          fine-tuned LLMs, and multi-agent orchestration; with an emphasis on
          system design, observability, and measurable results.
          Every project here is built from a first-principles understanding of
          what the framework abstracts away.
        </p>
        <p className={styles.edu}>
          B.Sc in Computer Science · BRAC University · Class of 2025
        </p>
        <div className={styles.actions}>
          <a href="#projects" className={styles.btnPrimary}>View Projects</a>
          <a
            href="mailto:tajwarchy.work@gmail.com"
            className={styles.btnSecondary}
          >
            Get in Touch
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
          {['RAG Systems', 'Autonomous Agents', 'LLM Fine-Tuning', 'Multi-Agent Orchestration', 'MLOps'].map(b => (
            <li key={b} className={styles.badge}>{b}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}