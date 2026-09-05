import styles from './Contact.module.css';

const links = [
  {
    label: 'Email',
    href: 'mailto:tajwarchy.work@gmail.com',
    display: 'tajwarchy.work@gmail.com',
    external: false,
  },
  {
    label: 'GitHub',
    href: 'https://github.com/tajwarchy',
    display: 'github.com/tajwarchy',
    external: true,
  },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/mohammad-tajwar-chowdhury-962604247/',
    display: 'linkedin.com/in/mohammad-tajwar-chowdhury',
    external: true,
  },
];

export default function Contact() {
  return (
    <section id="contact" className={styles.section} aria-labelledby="contact-heading">
      <div className="container">
        <h2 id="contact-heading">Let&apos;s Solve Your Problem</h2>
        <p className={styles.sub}>
          Open to new freelance projects. Tell me what&apos;s costing you time or money, and
          I&apos;ll tell you honestly whether an AI system is the right fix — reach out via
          any of the channels below.
        </p>
        <ul className={styles.list} role="list">
          {links.map(l => (
            <li key={l.label} className={styles.item}>
              <span className={styles.channel}>{l.label}</span>
              <a
                href={l.href}
                className={styles.link}
                {...(l.external
                  ? { target: '_blank', rel: 'noopener noreferrer',
                      'aria-label': `${l.label}: ${l.display} (opens in new tab)` }
                  : { 'aria-label': `${l.label}: ${l.display}` })}
              >
                {l.display}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}