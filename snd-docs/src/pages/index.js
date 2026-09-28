import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import { useBaseUrlUtils } from '@docusaurus/useBaseUrl';
import { Network as IconNetwork, BookOpen as IconBook, Users as IconUsers } from 'lucide-react';
import IconGithub from '@site/src/components/IconGithub';
import styles from './index.module.css';

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
          <Link className="button button--lg" to="/docs">View the docs</Link>
          <Link className={styles.ghostLink} to="https://github.com/your-org/snd">
            <IconGithub size={18} /> GitHub
          </Link>
        </div>
      </div>
    </header>
  );
}

const cards = [
  { title: 'GitHub', desc: 'Codebase, with project organization and issue tracking.', Icon: IconGithub, to: 'https://github.com/your-org/snd' },
  { title: 'Documentation', desc: 'Architecture, milestones and deliverables.', Icon: IconBook, to: '/docs' },
  { title: 'Team', desc: 'The people behind the agent, made without coffee.', Icon: IconUsers, to: '/team' },
];

function Cards() {
  return (
    <section className={styles.cards}>
      {cards.map((c, i) => (
        <Link
          key={c.title}
          to={c.to}
          className={styles.card}
          style={{ '--offset': i % 2 === 1 ? '24px' : '0px', animationDelay: `${i * 0.12}s` }}
        >
          <div className={styles.cardIcon}><c.Icon size={26} /></div>
          <h3>{c.title}</h3>
          <p>{c.desc}</p>
        </Link>
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
  const { withBaseUrl } = useBaseUrlUtils();
  return (
    <section className="partners">
      <div className="partners__title">In collaboration with</div>
      <div className="partners__row">
        {partners.map((p) => (
          <div key={p.name} className="partners__logo">
            <img src={withBaseUrl(p.logo)} alt={p.name} />
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