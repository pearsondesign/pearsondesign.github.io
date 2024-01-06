// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer').themes.github;
const darkCodeTheme = require('prism-react-renderer').themes.dracula;

const organizationName = "pearsondesign";
const projectName = "pearsondesign.github.io";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Pearson Design",
  tagline: "How much wood could a woodchuck chuck if a woodchuck could chuck wood?",
  url: `http://pearsondesign.co`,
  baseUrl: `/`,
  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.png",
  // GitHub Pages adds a trailing slash by default that I don't want
  trailingSlash: false,

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName, // Usually your GitHub org/user name.
  projectName, // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve("./sidebars.js"),
        },
        blog: false,
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "Pearson Design",
        logo: {
          alt: "Pearson Design",
          src: "img/logo.svg",
        }
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Community",
            items: [
              {
                label: "YouTube",
                href: "https://www.youtube.com/@PearsonDesign-qn7sx",
              }
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "GitHub",
                href: `https://github.com/${organizationName}/`,
              }
            ],
          },
          {
            title: "Contact",
            items: [
              {
                label: "Email",
                href: 'mailto:contact@pearsondesign.co'
              }
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Pearson Design Co. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      metadata: [
        {name: "theme-color", content: "#7f6c53"}
      ]
    }),
};

module.exports = config;