import React from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

// Logos are shown on a light panel so they stay readable in dark mode.
export default function LogoPanel({ src, alt }) {
  return (
    <div className={styles.panel}>
      <img src={useBaseUrl(src)} alt={alt} />
    </div>
  );
}
