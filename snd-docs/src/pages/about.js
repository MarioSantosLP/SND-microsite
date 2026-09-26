import React from 'react';
import Layout from '@theme/Layout';
import styles from './about.module.css';

export default function About() {
  return (
    <Layout title="About" description="About SND: Self Network Deployer">
      <main className={styles.page}>
        <h1>About SND</h1>

        <h2>Why we're building it</h2>
        <p>
          Setting up a 5G core network with Open5GS means editing many configuration files by hand. They have to agree
          with each other on network IDs, slices, addresses and subscribers. One small mistake can stop phones from
          connecting, and finding it takes time. SND, the Self Network Deployer, aims to make this as easy as
          describing the network you want.
        </p>

        <h2>How it will work</h2>
        <ol>
          <li><strong>Describe it.</strong> You write a request in plain language, such as "a network with two slices and 20 users".</li>
          <li><strong>Plan it.</strong> An AI agent will turn the request into a short, structured plan of the key settings, using the Open5GS documentation.</li>
          <li><strong>Build it.</strong> Templates will convert the plan into the Open5GS configuration files and subscriber entries.</li>
          <li><strong>Test it.</strong> The network will be started in an isolated test environment, where simulated phones check that it works.</li>
          <li><strong>Fix it.</strong> If something fails, the errors will go back to the agent so it can correct the plan.</li>
        </ol>

        <h2>What we're aiming for</h2>
        <ul>
          <li>Configurations that are always valid, because the AI chooses the values and our code writes the files.</li>
          <li>A network that counts as ready only after a simulated device has connected.</li>
          <li>A model that improves over time, trained on the requests that pass the tests.</li>
        </ul>

        <h2>Project status</h2>
        <p>
          SND is a student research project in its early stage, currently in research and design. The first goal is
          fully virtual Open5GS deployments.
        </p>
      </main>
    </Layout>
  );
}
