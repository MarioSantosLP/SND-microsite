import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import { UserRound as IconUser, ArrowUpRight as IconExternal } from 'lucide-react';
import IconGithub from '@site/src/components/IconGithub';
import styles from './team.module.css';

// Photos go in static/img/team/ and are referenced as `photo: '/img/team/name.jpg'`.
// Until then, a generic avatar is shown.
const members = [
  { name: 'Filipe Nogueira', github: 'https://github.com/' },
  { name: 'Francisco Santos', github: 'https://github.com/' },
  { name: 'João Morais', github: 'https://github.com/' },
  { name: 'Mario Santos', github: 'https://github.com/MarioSantosLP' },
  { name: 'Samuel Ramos', github: 'https://github.com/' },
];

const supervisors = [
  { name: 'Daniel Corujo', photo: '/img/team/daniel-corujo.png', page: 'https://www.it.pt/Members/Index/1953' },
];

function Avatar({ name, photo }) {
  const src = useBaseUrl(photo ?? '');
  return (
    <div className={styles.avatar}>
      {photo ? <img src={src} alt={name} /> : <IconUser size={48} strokeWidth={1.5} />}
    </div>
  );
}

function Person({ name, photo, github, page, index }) {
  return (
    <div className={styles.card} style={{ animationDelay: `${index * 0.06}s` }}>
      <Avatar name={name} photo={photo} />
      <h3>{name}</h3>
      <div className={styles.links}>
        {github && (
          <Link to={github} className={styles.iconLink} aria-label={`${name} on GitHub`}>
            <IconGithub size={16} />
          </Link>
        )}
        {page && (
          <Link to={page} className={styles.iconLink} aria-label={`About ${name}`}>
            <IconExternal size={16} />
          </Link>
        )}
      </div>
    </div>
  );
}

function Section({ title, people }) {
  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>{title}</h2>
      <div className={styles.grid}>
        {people.map((p, i) => <Person key={p.name} index={i} {...p} />)}
      </div>
    </section>
  );
}

export default function Team() {
  return (
    <Layout title="Team" description="The people behind SND: Self Network Deployer">
      <main className={styles.page}>
        <Section title="Team Members" people={members} />
        <Section title="Supervisors" people={supervisors} />
      </main>
    </Layout>
  );
}
