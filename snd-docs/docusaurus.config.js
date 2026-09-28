// @ts-check

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Self Network Deployer',
  tagline: 'Self Network Deployer project documentation',
  favicon: 'img/favicon.png',

  future: {
    v4: true,
},

  url: 'https://mariosantoslp.github.io',
  baseUrl: '/SND-microsite/',
  trailingSlash: false,

  organizationName: 'MarioSantosLP',
  projectName: 'SND-microsite',

  onBrokenLinks: 'throw',

  stylesheets: [
    'https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700&display=swap',
  ],

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
            src: 'img/snd-logo-light.png',
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
            sidebarId: 'docsSidebar',
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
              { label: 'Filipe Nogueira', to: '#' },
              { label: 'Francisco Santos', href: 'https://github.com/Kikokikolas' },
              { label: 'João Morais', href: 'https://github.com/Bruhlin' },
              { label: 'Mario Santos', href: 'https://github.com/MarioSantosLP' },
              { label: 'Samuel Ramos', href: 'https://github.com/samuelmarcosramos' },
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