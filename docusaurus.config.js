// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Oficina ADC',
  tagline: 'A nossa Oficina é incrivel!',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://github.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/TP3/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Azevedooo', // Usually your GitHub org/user name.
  projectName: 'TP3', // Usually your repo name.
  deploymentBranch: 'gh-pages',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'pt',
    locales: ['pt'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Oficina ADC',
        logo: {
          alt: 'Minha Oficina ADC',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Documentação',
          },
          {to: '/roadmap', label: 'RoadMap', position: 'left'},
          {
            href: 'https://github.com/Azevedoooo/TP2',
            label: 'GitHub TP2',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Documentação',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Githubs',
            items: [
              {
                label: 'Miguel Azevedo',
                href: 'https://github.com/Azevedoooo',
              },
              {
                label: 'João Pena',
                href: 'https://github.com/JoaoP85215',
              },
              {
                label: 'César Teixeira',
                href: 'https://github.com/CesarSilvestreTeixeira',
              },
            ],
          },
          {
            title: 'RoadMap',
            items: [
              {
                label: 'RoadMap',
                to: '/roadmap',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/Azevedoooo/TP2',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Oficina ADC, Inc. Feito com Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
