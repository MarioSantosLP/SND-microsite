import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import { Network as IconNetwork, BookOpen as IconBook, Users as IconUsers } from 'lucide-react';
import styles from './index.module.css';

const IconGithub = ({ size }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor">
    <path d="M12 2C6.48 2 2 6.58 2 12.25c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.49v-1.9c-2.78.62-3.37-1.36-3.37-1.36-.46-1.2-1.11-1.52-1.11-1.52-.91-.64.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.9 1.58 2.34 1.13 2.91.86.09-.67.35-1.13.64-1.39-2.22-.26-4.56-1.14-4.56-5.06 0-1.12.39-2.03 1.03-2.74-.1-.26-.45-1.31.1-2.73 0 0 .84-.28 2.75 1.05a9.3 9.3 0 0 1 5 0c1.9-1.33 2.75-1.05 2.75-1.05.55 1.42.2 2.47.1 2.73.64.71 1.03 1.62 1.03 2.74 0 3.93-2.34 4.79-4.57 5.05.36.32.68.94.68 1.9v2.82c0 .27.18.6.69.49A10.26 10.26 0 0 0 22 12.25C22 6.58 17.52 2 12 2Z" />
  </svg>
);

function Hero() {
  return (
    <header className={styles.hero}>
      <div className={styles.orb1} />
      <div className={styles.orb2} />
      <div className={styles.grid} />
      <div className={styles.heroText}>
        <span className={styles.eyebrow}><IconNetwork size={16} /> PEI Project</span>
        <h1>SND: <span className={styles.gradientText}>Self Network Deployer</span></h1>
        <p>An AI agent that learns from technical docs to instantiate, configure and operate network infrastructure — through natural language.</p>
        <div className={styles.buttons}>
          <Link className="button button--lg" to="/docs/intro">View the docs</Link>
          <Link className={styles.ghostLink} to="https://github.com/your-org/snd">
            <IconGithub size={18} /> GitHub
          </Link>
        </div>
      </div>
    </header>
  );
}

const cards = [
  { title: 'GitHub', desc: 'Codebase, with project organization and issue tracking.', Icon: IconGithub },
  { title: 'Documentation', desc: 'Architecture, milestones and deliverables.', Icon: IconBook },
  { title: 'Team', desc: 'The people behind the agent, made without coffee.', Icon: IconUsers },
];

function Cards() {
  return (
    <section className={styles.cards}>
      {cards.map((c, i) => (
        <div
          key={c.title}
          className={styles.card}
          style={{ '--offset': i % 2 === 1 ? '24px' : '0px', animationDelay: `${i * 0.12}s` }}
        >
          <div className={styles.cardIcon}><c.Icon size={26} /></div>
          <h3>{c.title}</h3>
          <p>{c.desc}</p>
        </div>
      ))}
    </section>
  );
}

const partners = [
  { name: 'ATNoG', logo: '/img/partners/atnog.png' },
  { name: 'Instituto de Telecomunicações', logo: '/img/partners/it.png' },
  { name: 'Universidade de Aveiro', logo: '/img/partners/ua.png' },
];

function Partners() {
  return (
    <section className="partners">
      <div className="partners__title">In collaboration with</div>
      <div className="partners__row">
        {partners.map((p) => (
          <div key={p.name} className="partners__logo">
            <img src={p.logo} alt={p.name} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <Layout title="Home" description="SND: Self Network Deployer">
      <Hero />
      <Cards />
      <Partners />
    </Layout>
  );
}