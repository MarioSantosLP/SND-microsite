import React from 'react';
import Link from '@docusaurus/Link';
import { Flag as IconFlag, MessagesSquare as IconMeetings, ArrowRight as IconArrow } from 'lucide-react';
import styles from './styles.module.css';

// Move `current` forward as the project progresses.
const current = 1;
const milestones = [1, 2, 3, 4];

const sections = [
  {
    title: 'Milestones',
    desc: 'Project progress across the four development milestones, MS1 to MS4.',
    to: '/docs/milestones',
    Icon: IconFlag,
  },
  {
    title: 'Meetings',
    desc: 'Meeting minutes, decisions and project discussion.',
    to: '/docs/meetings',
    Icon: IconMeetings,
  },
];

function Timeline() {
  return (
    <ol className={styles.timeline} style={{ '--progress': (current - 1) / (milestones.length - 1) }}>
      {milestones.map((n) => {
        const state = n < current ? styles.done : n === current ? styles.current : '';
        return (
          <li key={n} className={`${styles.step} ${state}`}>
            <span className={styles.dot} />
            <span className={styles.label}>MS{n}</span>
          </li>
        );
      })}
    </ol>
  );
}

export default function DocsOverview() {
  return (
    <div className={styles.overview}>
      <p className={styles.lead}>
        Everything about how <span className={styles.gradientText}>SND</span> is being built, from
        milestone reports to the meetings behind them.
      </p>

      <Timeline />

      <div className={styles.cards}>
        {sections.map(({ title, desc, to, Icon }) => (
          <Link key={title} to={to} className={styles.card}>
            <div className={styles.cardIcon}><Icon size={22} /></div>
            <h3>{title}</h3>
            <p>{desc}</p>
            <span className={styles.more}>Browse <IconArrow size={14} /></span>
          </Link>
        ))}
      </div>
    </div>
  );
}
