import React, { useEffect, useRef, useState } from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

export default function Slides({ dir, count, pdf, title }) {
  const base = useBaseUrl(dir);
  const pdfUrl = useBaseUrl(pdf);
  const stageRef = useRef(null);
  const [index, setIndex] = useState(0);
  const [fullscreen, setFullscreen] = useState(false);
  const slides = Array.from({ length: count }, (_, i) => String(i + 1).padStart(2, '0'));

  const goTo = (i) => setIndex(Math.min(Math.max(i, 0), count - 1));

  useEffect(() => {
    const onChange = () => setFullscreen(document.fullscreenElement === stageRef.current);
    document.addEventListener('fullscreenchange', onChange);
    return () => document.removeEventListener('fullscreenchange', onChange);
  }, []);

  // Preload the neighbouring slides so the next click is instant.
  useEffect(() => {
    [index - 1, index + 1].forEach((i) => {
      if (i >= 0 && i < count) new Image().src = `${base}/${slides[i]}.webp`;
    });
  }, [index]);

  const toggleFullscreen = () => {
    if (document.fullscreenElement) document.exitFullscreen();
    else stageRef.current.requestFullscreen?.();
  };

  const onKeyDown = (e) => {
    const keys = {
      ArrowRight: index + 1,
      ArrowDown: index + 1,
      PageDown: index + 1,
      ' ': index + 1,
      Enter: index + 1,
      ArrowLeft: index - 1,
      ArrowUp: index - 1,
      PageUp: index - 1,
      Backspace: index - 1,
      Home: 0,
      End: count - 1,
    };
    if (e.key in keys) {
      e.preventDefault();
      goTo(keys[e.key]);
    } else if (e.key === 'f' || e.key === 'F') {
      toggleFullscreen();
    }
  };

  // Clicking the left third goes back, anywhere else goes forward, as in PowerPoint's reading view.
  const onStageClick = (e) => {
    const { left, width } = e.currentTarget.getBoundingClientRect();
    goTo(e.clientX - left < width / 3 ? index - 1 : index + 1);
  };

  return (
    <div className={styles.viewer}>
      <div
        ref={stageRef}
        className={`${styles.stage} ${fullscreen ? styles.fullscreen : ''}`}
        tabIndex={0}
        role="region"
        aria-roledescription="slideshow"
        aria-label={title}
        onKeyDown={onKeyDown}
        onClick={onStageClick}
      >
        <img
          className={styles.slide}
          src={`${base}/${slides[index]}.webp`}
          alt={`${title}, slide ${index + 1} of ${count}`}
          draggable={false}
        />
        <button
          type="button"
          className={`${styles.nav} ${styles.prev}`}
          onClick={(e) => { e.stopPropagation(); goTo(index - 1); }}
          disabled={index === 0}
          aria-label="Previous slide"
        >
          ‹
        </button>
        <button
          type="button"
          className={`${styles.nav} ${styles.next}`}
          onClick={(e) => { e.stopPropagation(); goTo(index + 1); }}
          disabled={index === count - 1}
          aria-label="Next slide"
        >
          ›
        </button>
      </div>
      <div className={styles.controls}>
        <span className={styles.counter}>Slide {index + 1} of {count}</span>
        <button type="button" onClick={toggleFullscreen}>Full screen</button>
        {pdf && (
          <a className={styles.download} href={pdfUrl} target="_blank" rel="noopener noreferrer">Download the PDF</a>
        )}
      </div>
    </div>
  );
}
