import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer} role="contentinfo">
      <div className={`${styles.inner} container`}>
        <p className={styles.copy}>
          © {new Date().getFullYear()} Mohammad Tajwar Chowdhury
        </p>
        <p className={styles.built}>
          Built with Next.js · Deployed on Vercel
        </p>
      </div>
    </footer>
  );
}