'use client';

import { useEffect, useState } from 'react';
import styles from './Nav.module.css';

const links = [
  { label: 'Services',       href: '#services' },
  { label: 'Case Studies',   href: '#projects' },
  { label: 'Skills',         href: '#skills' },
  { label: 'Sample Projects', href: '#more-projects' },
  { label: 'Contact',        href: '#contact' },
];

export default function Nav() {
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Force light mode on initial load.
    const isDarkMode = false;
    setIsDark(isDarkMode);
    updateTheme(isDarkMode);
  }, []);

  const updateTheme = (dark: boolean) => {
    const html = document.documentElement;
    if (dark) {
      html.style.colorScheme = 'dark';
      html.style.setProperty('--color-background-default', '#0a0a0a');
      html.style.setProperty('--color-background-overlay', '#111111');
      html.style.setProperty('--color-surface-default', '#0f0f0f');
      html.style.setProperty('--color-surface-raised', '#1a1a1a');
      html.style.setProperty('--color-surface-muted', '#262626');
      html.style.setProperty('--color-border-default', '#2d2d2d');
      html.style.setProperty('--color-text-primary', '#e0e0e0');
      html.style.setProperty('--color-text-secondary', '#a0a0a0');
    } else {
      html.style.colorScheme = 'light';
      html.style.setProperty('--color-background-default', '#ffffff');
      html.style.setProperty('--color-background-overlay', '#f5f5f5');
      html.style.setProperty('--color-surface-default', '#fafafa');
      html.style.setProperty('--color-surface-raised', '#f5f5f5');
      html.style.setProperty('--color-surface-muted', '#eeeeee');
      html.style.setProperty('--color-border-default', '#e0e0e0');
      html.style.setProperty('--color-text-primary', '#0a0a0a');
      html.style.setProperty('--color-text-secondary', '#666666');
    }
  };

  const toggleTheme = () => {
    const newDark = !isDark;
    setIsDark(newDark);
    updateTheme(newDark);
    localStorage.setItem('theme', newDark ? 'dark' : 'light');
  };

  if (!mounted) return null;

  return (
    <header className={styles.header} role="banner">
      <nav className={`${styles.nav} container`} aria-label="Primary navigation">
        <a href="#" className={styles.logo} aria-label="Mohammad Tajwar Chowdhury — home">
          Tajwar<span className={styles.dot}>.</span>
        </a>
        <ul className={styles.links} role="list">
          {links.map(l => (
            <li key={l.href}>
              <a href={l.href} className={styles.link}>{l.label}</a>
            </li>
          ))}
        </ul>
        <div className={styles.actions}>
          <button
            onClick={toggleTheme}
            className={styles.themeToggle}
            aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
            title={`Switch to ${isDark ? 'light' : 'dark'} mode`}
          >
            {isDark ? (
              <svg className={styles.icon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="5" />
                <line x1="12" y1="1" x2="12" y2="3" />
                <line x1="12" y1="21" x2="12" y2="23" />
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                <line x1="1" y1="12" x2="3" y2="12" />
                <line x1="21" y1="12" x2="23" y2="12" />
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
              </svg>
            ) : (
              <svg className={styles.icon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            )}
          </button>
          <a
            href="https://github.com/tajwarchy"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.cta}
            aria-label="GitHub profile (opens in new tab)"
          >
            GitHub
          </a>
        </div>
      </nav>
    </header>
  );
}