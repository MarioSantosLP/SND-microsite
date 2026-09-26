import React from 'react';
import Link from '@docusaurus/Link';
import { ArrowUpRight as IconExternal } from 'lucide-react';
import styles from './styles.module.css';

export default function LearnMore({ href, title, label = 'Learn more' }) {
  return (
    <Link to={href} className={styles.card}>
      <div>
        <span className={styles.label}>{label}</span>
        <span className={styles.title}>{title}</span>
      </div>
      <IconExternal size={20} className={styles.icon} />
    </Link>
  );
}
