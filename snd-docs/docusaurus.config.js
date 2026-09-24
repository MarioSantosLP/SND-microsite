// @ts-check

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Self Network Deployer',
  tagline: 'Self Network Deployer project documentation',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
},

  url: 'https://your-docusaurus-site.example.com',
  baseUrl: '/',

  organizationName: 'facebook',
  projectName: 'docusaurus',

  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
},

  presets: [
[
'classic',
/** @type {import('@docusaurus/preset-classic').Options} */
({
        docs: {
          sidebarPath: './sidebars.js',
},

        blog: false,

        theme: {
          customCss: './src/css/custom.css',
},
}),
],
],

  themeConfig:
/** @type {import('@docusaurus/preset-classic').ThemeConfig} */
({
      colorMode: {
        respectPrefersColorScheme: true,
},

      navbar: {
          style: 'dark',
          logo: {
            alt: 'Self Network Deployer',
            src: 'img/logo.svg',
},


        items: [
{
            to: '/',
            label: 'Home',
            position: 'left',
            activeBaseRegex: '^/$',
},
{
            to: '/about',
            label: 'About',
            position: 'left',
},
{
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            label: 'Docs',
            position: 'left',
},
{
            to: '/team',
            label: 'Team',
            position: 'left',
},
],
},

      footer: {
        style: 'dark',
        links: [
          {
            title: 'More',
            items: [
              { label: 'GitHub', href: 'https://github.com/your-org/snd' },
            ],
          },
          {
            title: 'Project Supervisors',
            items: [
              { label: 'Daniel Corujo', to: 'https://www.it.pt/Members/Index/1953' },
            ],
          },
          {
            title: 'Team',
            items: [
              { label: 'Francisco Santos', to: '#' },
              { label: 'Filipe Nogueira', to: '#' },
              { label: 'João Morais', to: '#' },
              { label: 'Mario Santos', to: '#' },
              { label: 'Samuel Ramos', to: '#' },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Self Network Deployer.`,
},

      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
},
}),
};

export default config;