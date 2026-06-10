import { skillGroups } from '@/lib/data';
import styles from './Skills.module.css';

export default function Skills() {
  return (
    <section id="skills" className={styles.section} aria-labelledby="skills-heading">
      <div className="container">
        <h2 id="skills-heading" className={styles.heading}>Skills</h2>
        <div className={styles.grid}>
          {skillGroups.map(group => (
            <div key={group.label} className={styles.group}>
              <h3 className={styles.groupLabel}>{group.label}</h3>
              <ul className={styles.pills} role="list" aria-label={`${group.label} skills`}>
                {group.skills.map(s => (
                  <li key={s} className={styles.pill}>{s}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}