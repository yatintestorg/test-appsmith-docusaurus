// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Test Appsmith',
  tagline: 'Open source, low code - Build, Ship and maintain Internal tools',
  url: 'https://jnikhila.github.io',
  baseUrl: '/test-appsmith-docusaurus/',
  onBrokenLinks: 'ignore',
  onBrokenMarkdownLinks: 'ignore',
  favicon: 'img/Appsmith-Logo.png',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'jnikhila', // Usually your GitHub org/user name.
  projectName: 'test-appsmith-docusaurus', // Usually your repo name.
  deploymentBranch: "gh-pages",
  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
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
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/jnikhila/test-appsmith-docusaurus/blob/main',
        },
        blog: false,
        /*blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },*/
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Appsmith',
        logo: {
          alt: 'Appsmith Logo',
          src: 'img/Appsmith-Logo.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Documentation',
          },
         // {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/appsmithorg/appsmith',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'light',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Documentation',
                to: '/intro',
              },
              {
                label: 'Tutorial',
                to: 'https://www.appsmith.com/blog-categories/tutorial',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Forum',
                href: 'https://community.appsmith.com/',
              },
              {
                label: 'Discord',
                href: 'https://discord.com/invite/rBTTVJp',
              },
              {
                label: 'Support',
                href: 'mailto:support@appsmith.com',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: 'https://www.appsmith.com/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/appsmithorg/appsmith',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Appsmith, Inc.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      algolia: {
        appId: 'QGHQDC1P8U',
        apiKey: 'ab1ff4e8eb4cd04a40d4ca39a00b73cc',
        indexName: 'appsmithdocusaurusindex',
  
        //... other Algolia params
      },
    }),
};

module.exports = config;
