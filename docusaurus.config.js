// SPDX-FileCopyrightText: 2026 Gauvain "GovanifY" Roussel-Tarbouriech <gauvain@govanify.com>
// SPDX-License-Identifier: GPL-3.0-or-later

// @ts-check

const { themes } = require("prism-react-renderer");

const repo = "https://github.com/ekphore/ekphore";
const edit_url = "https://github.com/ekphore/ekphore.github.io/tree/master/";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "ekphore",
  tagline: "The Open Source Sampler",
  url: "https://ekphore.github.io",
  baseUrl: "/",
  onBrokenLinks: "throw",
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: "throw",
    },
  },
  favicon: "img/favicon.svg",
  trailingSlash: false,

  organizationName: "ekphore",
  projectName: "ekphore.github.io",

  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  headTags: [
    {
      tagName: "link",
      attributes: {
        rel: "preload",
        href: "/fonts/OpenSans/OpenSans-SemiBold.ttf",
        as: "font",
        type: "font/ttf",
        crossorigin: "anonymous",
      },
    },
    // not every browser takes an svg favicon (safari mostly), so ship pngs and /favicon.ico too
    {
      tagName: "link",
      attributes: { rel: "icon", type: "image/png", sizes: "32x32", href: "/img/favicon-32.png" },
    },
    {
      tagName: "link",
      attributes: { rel: "icon", type: "image/png", sizes: "192x192", href: "/img/favicon-192.png" },
    },
    {
      tagName: "link",
      attributes: { rel: "apple-touch-icon", sizes: "180x180", href: "/img/apple-touch-icon.png" },
    },
  ],

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          path: "docs",
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: edit_url,
        },
        blog: false,
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  plugins: [
    // the classic blog, wrapped to also expose the newest posts to the home page
    ["./src/plugins/blog-with-recent-posts.js", {
      path: "blog",
      blogSidebarCount: 0,
      showReadingTime: true,
      onUntruncatedBlogPosts: "ignore",
      editUrl: edit_url,
      feedOptions: {
        type: "all",
        copyright: `Copyright © ${new Date().getFullYear()} the ekphore contributors`,
        limit: 10,
      },
    }],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: "dark",
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
      image: "img/social-card.png",
      metadata: [{ name: "twitter:card", content: "summary" }],
      navbar: {
        title: "ekphore",
        logo: {
          alt: "ekphore logo",
          src: "img/logo.svg",
        },
        items: [
          { to: "/downloads", label: "Download", position: "left" },
          {
            label: "Docs",
            to: "/docs",
            position: "left",
            items: [
              { label: "Getting Started", to: "/docs/category/getting-started" },
              { label: "Using ekphore", to: "/docs/category/using-ekphore" },
              { label: "Building from Source", to: "/docs/category/development" },
            ],
          },
          { to: "/faq", label: "FAQ", position: "left" },
          { to: "/blog", label: "Blog", position: "left" },
          {
            href: repo,
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "ekphore",
            items: [
              { label: "Download", to: "/downloads" },
              { label: "Documentation", to: "/docs" },
              { label: "FAQ", to: "/faq" },
              { label: "Blog", to: "/blog" },
            ],
          },
          {
            title: "Source",
            items: [
              { label: "ekphore", href: repo },
              { label: "libnki", href: "https://github.com/ekphore/libnki" },
              { label: "libnks", href: "https://github.com/ekphore/libnks" },
              { label: "libksp", href: "https://github.com/ekphore/libksp" },
            ],
          },
          {
            title: "Contribute",
            items: [
              { label: "Report an issue", href: `${repo}/issues` },
              { label: "Releases", href: `${repo}/releases` },
              { label: "RSS feed", href: "pathname:///blog/rss.xml" },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Gauvain "GovanifY" Roussel-Tarbouriech. Licensed under GPL-3.0-or-later. Not affiliated with Native Instruments.`,
      },
      prism: {
        theme: themes.github,
        darkTheme: themes.dracula,
        additionalLanguages: ["bash", "powershell", "cmake"],
      },
    }),
};

module.exports = config;
