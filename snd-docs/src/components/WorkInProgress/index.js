import React from 'react';
import { Hammer as IconHammer } from 'lucide-react';
import styles from './styles.module.css';

export default function WorkInProgress({
  title = 'Work in progress',
  text = "This milestone hasn't been reached yet. Its documentation will appear here as it takes shape.",
  when,
}) {
  return (
    <div className={styles.wip}>
      <div className={styles.icon}><IconHammer size={28} /></div>
      <h2>{title}</h2>
      <p>{text}</p>
      {when && <span className={styles.when}>{when}</span>}
      <div className={styles.bar}><span /></div>
    </div>
  );
}
