import type * as Preset from "@docusaurus/preset-classic";
import type { Config } from "@docusaurus/types";
import { themes as prismThemes } from "prism-react-renderer";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: "SVG World Maps",
  tagline: "Simple, lightweight SVG maps for JavaScript projects.",
  favicon: "img/favicon.ico",

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: "https://svg-world-maps.vercel.app/",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  organizationName: "homayounmmdy", // Usually your GitHub org/user name.
  projectName: "svg-world-maps", // Usually your repo name.

  onBrokenLinks: "throw",
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: "warn",
    },
  },
  plugins: [
    function fixFullySpecifiedPlugin() {
      return {
        name: "fix-fully-specified-plugin",
        configureWebpack() {
          return {
            module: {
              rules: [
                {
                  test: /\.m?js$/,
                  resolve: {
                    fullySpecified: false, // This fixes the './config' error
                  },
                },
              ],
            },
          };
        },
      };
    },
  ],
  // 🌍 Internationalization (i18n) Configuration
  i18n: {
    defaultLocale: "en",
    locales: ["en", "fa", "de"],
    localeConfigs: {
      en: {
        label: "English",
        direction: "ltr",
        htmlLang: "en",
      },
      fa: {
        label: "فارسی",
        direction: "rtl", // Crucial for Persian right-to-left layout
        htmlLang: "fa",
      },
      de: {
        label: "Deutsch",
        direction: "ltr",
        htmlLang: "de",
      },
    },
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          // Update this to your actual repo
          editUrl:
            "https://github.com/homayounmmdy/svg-world-maps/tree/main/docs/",
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ["rss", "atom"],
            xslt: true,
          },
          editUrl:
            "https://github.com/homayounmmdy/svg-world-maps/tree/main/blog/",
          onInlineTags: "warn",
          onInlineAuthors: "warn",
          onUntruncatedBlogPosts: "warn",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: "img/docusaurus-social-card.png",
    colorMode: { defaultMode: "dark", respectPrefersColorScheme: true },
    navbar: {
      title: "SVG World Maps",
      logo: {
        alt: "SVG World Maps Logo",
        src: "img/logo.svg",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "tutorialSidebar",
          position: "left",
          label: "Docs",
        },
        { to: "/blog", label: "Blog", position: "left" },
        {
          href: "https://github.com/homayounmmdy/svg-world-maps",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Getting Started",
              to: "/docs/getting-started",
            },
            {
              label: "API Reference",
              to: "/docs/api-reference",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "GitHub Discussions",
              href: "https://github.com/homayounmmdy/svg-world-maps/discussions",
            },
            {
              label: "Report an Issue",
              href: "https://github.com/homayounmmdy/svg-world-maps/issues",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "npm",
              href: "https://www.npmjs.com/package/svg-world-maps",
            },
            {
              label: "GitHub",
              href: "https://github.com/homayounmmdy/svg-world-maps",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} SVG World Maps. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      // Add TypeScript and JSX to supported languages for better highlighting
      additionalLanguages: ["typescript", "jsx", "bash", "json"],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
