import type { ReactNode } from 'react';
import styles from './Services.module.css';

interface Service {
  name: string;
  forWho: string;
  problem: string;
  delivers: string[];
  icon: ReactNode;
}

const BookIcon = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
    <path d="M12 6.5c-1.6-1.2-3.8-1.8-6-1.8v13c2.2 0 4.4.6 6 1.8" />
    <path d="M12 6.5c1.6-1.2 3.8-1.8 6-1.8v13c-2.2 0-4.4.6-6 1.8" />
    <path d="M12 6.5v13" />
  </svg>
);

const WorkflowIcon = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
    <circle cx="12" cy="5.5" r="2.5" />
    <path d="M12 8v3" />
    <path d="M6 15.5h12" />
    <path d="M6 11v4.5" />
    <path d="M18 11v4.5" />
    <rect x="3.5" y="15.5" width="5" height="4" rx="1" />
    <rect x="9.5" y="15.5" width="5" height="4" rx="1" />
    <rect x="15.5" y="15.5" width="5" height="4" rx="1" />
  </svg>
);

const RocketIcon = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
    <path d="M12 2.5c2.4 1.7 3.8 4.6 3.8 8 0 2-.5 3.7-1.2 5l-2.6 2.6-2.6-2.6c-.7-1.3-1.2-3-1.2-5 0-3.4 1.4-6.3 3.8-8z" />
    <circle cx="12" cy="9.5" r="1.6" />
    <path d="M9.2 15.5 6.5 17c-.4-1.4-.3-3 .3-4.3" />
    <path d="M14.8 15.5 17.5 17c.4-1.4.3-3-.3-4.3" />
    <path d="M10.4 18.5c.4 1 1 1.8 1.6 2.5.6-.7 1.2-1.5 1.6-2.5" />
  </svg>
);

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
    icon: BookIcon,
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
    icon: WorkflowIcon,
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
    icon: RocketIcon,
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
              <div className={styles.top}>
                <div className={styles.iconBadge} aria-hidden="true">{s.icon}</div>
                <div className={styles.topText}>
                  <h3 className={styles.name}>{s.name}</h3>
                  <p className={styles.forWho}>{s.forWho}</p>
                </div>
              </div>
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