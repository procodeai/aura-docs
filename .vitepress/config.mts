import { defineConfig } from "vitepress";

export default defineConfig({
  title: "ProCode AI",
  description: "Build Living, Breathing Digital Organisms",

  head: [
    ["link", { rel: "icon", href: "/favicon.ico" }],
    ["meta", { name: "theme-color", content: "#10b981" }],
    ["meta", { property: "og:type", content: "website" }],
    ["meta", { property: "og:title", content: "ProCode AI Docs" }],
    [
      "meta",
      {
        property: "og:description",
        content: "Build Living, Breathing Digital Organisms",
      },
    ],
  ],

  // Clean URLs (no .html extension)
  cleanUrls: true,

  themeConfig: {
    logo: "/logo.svg",
    siteTitle: "ProCode AI",

    // Navigation
    nav: [
      { text: "Guide", link: "/guide/introduction" },
      { text: "Architect", link: "/architect/overview" },
      { text: "API", link: "/api/actions" },
      { text: "Changelog", link: "/changelog" },
      {
        text: "Resources",
        items: [
          { text: "GitHub", link: "https://github.com/procodeai" },
          { text: "Discord", link: "https://discord.gg/procodeai" },
          { text: "Twitter", link: "https://twitter.com/procodeai" },
        ],
      },
    ],

    // Sidebar
    sidebar: {
      "/guide/": [
        {
          text: "Getting Started",
          items: [
            { text: "Introduction", link: "/guide/introduction" },
            { text: "Installation", link: "/guide/installation" },
            { text: "Quick Start", link: "/guide/quickstart" },
          ],
        },
        {
          text: "Core Concepts",
          items: [
            { text: "How Aura Works", link: "/guide/how-it-works" },
            { text: "Agents & Blueprints", link: "/guide/agents" },
            { text: "Memory System", link: "/guide/memory" },
          ],
        },
        {
          text: "Privacy & Security",
          items: [
            { text: "Permissions", link: "/guide/permissions" },
            { text: "Local Processing", link: "/guide/local-processing" },
          ],
        },
      ],
      "/architect/": [
        {
          text: "Visual Editor",
          items: [
            { text: "Overview", link: "/architect/overview" },
            { text: "Controls & Shortcuts", link: "/architect/controls" },
            { text: "Nodes", link: "/architect/nodes" },
            { text: "Wiring System", link: "/architect/wiring" },
          ],
        },
        {
          text: "Advanced",
          items: [
            { text: "Grouping", link: "/architect/grouping" },
            { text: "Debug Mode", link: "/architect/debug-mode" },
          ],
        },
      ],
      "/api/": [
        {
          text: "Actions Reference",
          items: [
            { text: "Overview", link: "/api/actions" },
            { text: "Spotify Actions", link: "/api/spotify" },
            { text: "System Actions", link: "/api/system" },
            { text: "AI Actions", link: "/api/ai" },
          ],
        },
      ],
    },

    // Search
    search: {
      provider: "local",
    },

    // Social Links
    socialLinks: [
      { icon: "github", link: "https://github.com/procodeai" },
      { icon: "twitter", link: "https://twitter.com/procodeai" },
      { icon: "discord", link: "https://discord.gg/procodeai" },
    ],

    // Footer
    footer: {
      message: "Built with ❤️ by ProCode AI",
      copyright: "© 2024 ProCode AI. All rights reserved.",
    },

    // Edit Link
    editLink: {
      pattern: "https://github.com/procodeai/aura-docs/edit/main/:path",
      text: "Edit this page on GitHub",
    },

    // Last Updated
    lastUpdated: {
      text: "Last updated",
      formatOptions: {
        dateStyle: "medium",
      },
    },
  },
});
