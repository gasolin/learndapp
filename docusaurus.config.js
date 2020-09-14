// const remarkMermaid = require('remark-mermaid');

module.exports = {
  title: '智能合約(Smart Contract)與分散式網頁應用(DApp)入門',
  tagline: 'Ethereum區塊鏈！智能合約(Smart Contract)與分散式網頁應用(dApp)入門',
  url: 'http://gasolin.github.io',
  baseUrl: '/learndapp/',
  onBrokenLinks: 'throw',
  favicon: 'img/favicon.ico',
  organizationName: 'gasolin', // Usually your GitHub org/user name.
  projectName: 'learndapp', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: '智能合約(Smart Contract)與分散式網頁應用(DApp)入門',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      items: [
        // {
        //   to: 'docs/',
        //   activeBasePath: 'docs',
        //   label: 'Docs',
        //   position: 'left',
        // },
        // {to: 'blog', label: 'Blog', position: 'left'},
        // {
        //   href: 'https://github.com/facebook/docusaurus',
        //   label: 'GitHub',
        //   position: 'right',
        // },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        // {
        //   title: 'Docs',
        //   items: [
        //     {
        //       label: 'Style Guide',
        //       to: 'docs/',
        //     },
        //     {
        //       label: 'Second Doc',
        //       to: 'docs/doc2/',
        //     },
        //   ],
        // },
        // {
        //   title: 'Community',
        //   items: [
        //     {
        //       label: 'Stack Overflow',
        //       href: 'https://stackoverflow.com/questions/tagged/docusaurus',
        //     },
        //     {
        //       label: 'Discord',
        //       href: 'https://discordapp.com/invite/docusaurus',
        //     },
        //     {
        //       label: 'Twitter',
        //       href: 'https://twitter.com/docusaurus',
        //     },
        //   ],
        // },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              href: 'http://blog.gasolin.idv.tw/',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/gasolin/learndapp',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} gasolin. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
          routeBasePath: '/',
          // remarkPlugins: [
          //   [remarkMermaid, { simple : true }]
          // ]
        },
        // blog: {
        //   showReadingTime: true,
        //   // Please change this to your repo.
        //   editUrl:
        //     'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        // },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
          mermaid: require.resolve('./src/theme/Mermaid.js')
        },
      },
    ],
  ],
};
