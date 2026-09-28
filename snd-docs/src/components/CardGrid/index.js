import React from 'react';
import Link from '@docusaurus/Link';
import { useCurrentSidebarCategory } from '@docusaurus/plugin-content-docs/client';
import { FileText as IconFile, ArrowRight as IconArrow } from 'lucide-react';
import styles from './styles.module.css';

// Renders the pages of the current sidebar category as cards.
// `meta` is keyed by sidebar label: { Icon, desc, tag }. A page can also set
// `desc` and `tag` itself through `sidebar_custom_props` in its front matter.
// Cards with only a title render inline (icon beside the title).
export default function CardGrid({ meta = {}, columns }) {
  const { items } = useCurrentSidebarCategory();

  return (
    <div className={`${styles.grid} ${columns ? styles.fixed : ''}`} style={{ '--columns': columns }}>
      {items.filter((item) => item.href).map((item, i) => {
        const { Icon = IconFile, desc, tag } = { ...item.customProps, ...meta[item.label] };
        return (
          <Link
            key={item.href}
            to={item.href}
            className={`${styles.card} ${desc || tag ? '' : styles.inline}`}
            style={{ animationDelay: `${i * 0.06}s` }}
          >
            <div className={styles.icon}><Icon size={22} /></div>
            <div className={styles.body}>
              {tag && <span className={styles.tag}>{tag}</span>}
              <h3>{item.label}</h3>
              {desc && <p>{desc}</p>}
            </div>
            <IconArrow size={16} className={styles.arrow} />
          </Link>
        );
      })}
    </div>
  );
}
