import styles from './Services.module.css';

interface Service {
  name: string;
  forWho: string;
  problem: string;
  delivers: string[];
}

const services: Service[] = [
  {
    name: 'AI Knowledge Sprint',
    forWho: 'For support-heavy SaaS teams and startups with a documentation problem',
    problem:
      'Your docs are scattered across Notion, Zendesk, Slack, and a dozen half-updated pages, so your team — or your customers — keep asking the same questions instead of finding answers themselves.',
    delivers: [
      'A RAG-powered knowledge assistant over your existing docs',
      'Source-attributed answers, not confident-sounding guesses',
      'Chat interface or API — whichever fits how your team already works',
      'Ingestion pipeline that keeps the assistant current as docs change',
    ],
  },
  {
    name: 'Workflow Automation Sprint',
    forWho: 'For founders and ops teams drowning in one specific manual process',
    problem:
      'Someone on your team is manually moving data between tools, writing the same report every week, or triaging leads by hand — and it never stops being the thing you mean to automate "later."',
    delivers: [
      'An AI agent that runs the workflow using your existing tools and APIs',
      'Human-in-the-loop checkpoints where judgment calls matter',
      'Error handling built in, not bolted on after the first failure',
      'A system your team can hand off leads/reports/tasks to, not babysit',
    ],
  },
  {
    name: 'AI Feature Launch',
    forWho: 'For SaaS products that need an AI feature but not an AI hire',
    problem:
      'Your roadmap has "ship an AI feature" on it, but your engineering team doesn\u2019t have LLM implementation experience — and the last thing you need is a fragile prototype that breaks in production.',
    delivers: [
      'One production-ready AI feature, designed and integrated end-to-end',
      'RAG and/or agentic architecture where the problem actually calls for it',
      'Authentication, permissions, and testing handled, not skipped',
      'Deployed into your existing product, not a standalone demo',
    ],
  },
];

export default function Services() {
  return (
    <section id="services" className={styles.section} aria-labelledby="services-heading">
      <div className="container">
        <div className={styles.header}>
          <h2 id="services-heading">Available Services</h2>
          <p className={styles.sub}>
            I don&apos;t start with a tech stack — I start with what&apos;s costing you time or money.
            These are the three problems I solve most often, packaged into fixed-scope engagements.
          </p>
        </div>
        <div className={styles.grid} role="list">
          {services.map(s => (
            <article key={s.name} className={styles.card} role="listitem">
              <h3 className={styles.name}>{s.name}</h3>
              <p className={styles.forWho}>{s.forWho}</p>
              <p className={styles.problem}>{s.problem}</p>
              <ul className={styles.delivers} role="list">
                {s.delivers.map(d => (
                  <li key={d} className={styles.deliverItem}>{d}</li>
                ))}
              </ul>
              <a href="#contact" className={styles.cta}>
                Talk about your project
                <svg width="12" height="12" viewBox="0 0 12 12" aria-hidden="true" focusable="false">
                  <path d="M2 2h8v8H8V4.5L3.5 9 2.5 8l4.5-4.5H2V2z" fill="currentColor" />
                </svg>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}