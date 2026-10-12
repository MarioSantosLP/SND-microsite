import React from 'react';
import { Check as IconCheck } from 'lucide-react';
import styles from './styles.module.css';

// "Where we stand" panel, built from the calendar data:
// milestone progress, overall task progress, and what is done and up next.
export default function ProjectStatus({ status, entries }) {
  const milestones = entries.filter((e) => e.milestone);
  const phases = entries.filter((e) => e.phase);
  const tasks = phases.flatMap((p) => p.items);
  const doneCount = tasks.filter((t) => t.done).length;
  const percent = Math.round((doneCount / tasks.length) * 100);

  // Finished tasks, grouped by phase, and the open tasks of the first unfinished phases.
  const done = phases
    .map((p) => ({ phase: p.phase, items: p.items.filter((t) => t.done) }))
    .filter((p) => p.items.length);
  const next = tasks.filter((t) => !t.done).slice(0, 3);
  const current = milestones[status.milestone - 1];

  return (
    <section className={styles.panel}>
      <header className={styles.header}>
        <span className={styles.eyebrow}>Where we stand</span>
        <span className={styles.updated}>Updated {status.updated}</span>
      </header>

      <ol
        className={styles.steps}
        style={{ '--progress': (status.milestone - 1) / (milestones.length - 1) }}
      >
        {milestones.map((m, i) => {
          const n = i + 1;
          const state = n < status.milestone ? styles.done : n === status.milestone ? styles.current : '';
          return (
            <li key={m.milestone} className={`${styles.step} ${state}`}>
              <span className={styles.dot}>{n < status.milestone && <IconCheck size={10} strokeWidth={3.5} />}</span>
              <span className={styles.stepLabel}>{m.milestone}</span>
              <span className={styles.stepDate}>{m.from}</span>
            </li>
          );
        })}
      </ol>

      <div className={styles.now}>
        <h3>
          Working towards <span className={styles.gradientText}>{current.milestone}</span>
        </h3>
        <p>{status.summary}</p>
      </div>

      <div className={styles.progress}>
        <div className={styles.progressText}>
          <span>{doneCount} of {tasks.length} planned tasks done</span>
          <span className={styles.percent}>{percent}%</span>
        </div>
        <div className={styles.bar}>
          <span style={{ width: `${percent}%` }} />
        </div>
      </div>

      <div className={styles.columns}>
        <div>
          <h4>Done</h4>
          {done.map((p) => (
            <div key={p.phase} className={styles.group}>
              <span className={styles.groupName}>{p.phase}</span>
              <ul className={styles.pills}>
                {p.items.map((t) => (
                  <li key={t.title}>
                    <IconCheck size={12} strokeWidth={3} />
                    {t.title}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div>
          <h4>Up next</h4>
          <ul className={styles.list}>
            {next.map((t) => (
              <li key={t.title}>
                <span className={styles.pending} />
                <span className={styles.nextTitle}>{t.title}</span>
                <span className={styles.nextDate}>{t.to}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
