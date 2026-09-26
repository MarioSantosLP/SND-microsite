import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

// Each entry is either a phase ({ phase, items: [{ title, from, to? }] })
// or a milestone ({ milestone, title, from, to? }).
function Dates({ from, to }) {
  return <span className={styles.date}>{to ? `${from} → ${to}` : from}</span>;
}

export default function Timeline({ entries }) {
  return (
    <ol className={styles.timeline}>
      {entries.map((entry, i) =>
        entry.milestone ? (
          <li key={i} className={clsx(styles.item, styles.milestone)}>
            <span className={styles.badge}>{entry.milestone}</span>
            <span className={styles.title}>{entry.title}</span>
            <Dates {...entry} />
          </li>
        ) : (
          <li key={i} className={styles.phase}>
            <span className={styles.phaseName}>{entry.phase}</span>
            <ol className={styles.items}>
              {entry.items.map((item) => (
                <li key={item.title} className={styles.item}>
                  <span className={styles.title}>{item.title}</span>
                  <Dates {...item} />
                </li>
              ))}
            </ol>
          </li>
        ),
      )}
    </ol>
  );
}
