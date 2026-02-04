---
name: ProCodeAI Docs Developer
description: Expert guide on contributing to the ProCodeAI documentation site.
---

# ProCodeAI Docs - Agent Skill

This skill enables AI agents to effectively work with the ProCodeAI documentation repository.

## Project Overview

- **Framework**: VitePress 1.x
- **Theme**: Custom Mintlify-style dark theme
- **Repo**: `procodeai/aura-docs`
- **Live URL**: `docs.procodeai.com` (GitHub Pages)

## Directory Structure

```
docs/
├── .vitepress/
│   ├── config.mts         # Navigation, sidebar, site config
│   └── theme/
│       ├── index.ts       # Theme entry point
│       └── custom.css     # Custom styling (Mintlify-inspired)
├── .github/
│   └── workflows/
│       └── deploy.yml     # GitHub Pages deployment
├── guide/                 # Getting started & concepts
│   ├── introduction.md
│   ├── installation.md
│   ├── quickstart.md
│   ├── how-it-works.md
│   ├── agents.md
│   ├── memory.md
│   ├── permissions.md
│   └── local-processing.md
├── architect/             # Visual editor docs
│   ├── overview.md
│   ├── controls.md
│   ├── nodes.md
│   ├── wiring.md
│   ├── grouping.md
│   └── debug-mode.md
├── api/                   # Actions reference
│   ├── actions.md
│   ├── spotify.md
│   ├── system.md
│   ├── ai.md
│   └── custom-actions.md
├── changelog.md
└── index.md               # Home page
```

## Commands

```bash
# Development
npm run docs:dev      # Start dev server at localhost:5173

# Build
npm run docs:build    # Build for production

# Preview build
npm run docs:preview  # Preview production build
```

## Adding New Pages

### 1. Create the Markdown File

```bash
# Example: Adding a new guide page
touch guide/new-feature.md
```

### 2. Add Frontmatter (Optional)

```markdown
---
title: New Feature
description: How to use the new feature
---

# New Feature

Your content here...
```

### 3. Add to Sidebar

Edit `.vitepress/config.mts`:

```typescript
sidebar: {
  '/guide/': [
    {
      text: 'Getting Started',
      items: [
        // ... existing items
        { text: 'New Feature', link: '/guide/new-feature' }
      ]
    }
  ]
}
```

### 4. Verify Links

Ensure all internal links exist to avoid build failures:

```markdown
[Link Text](/guide/existing-page)
```

## Styling Guidelines

### Theme Colors

- **Brand**: `#10b981` (Green)
- **Background**: `#0a0a0a` (Dark), `#ffffff` (Light)
- **Accent**: `#34d399` (Light green)

### Custom Components

Use VitePress built-in containers:

```markdown
::: tip
Helpful tips go here
:::

::: warning
Warnings go here
:::

::: danger
Critical warnings go here
:::
```

## Deployment

- **Automatic**: Push to `main` triggers GitHub Actions
- **Manual**: Go to Actions tab → Run workflow

## Common Tasks

### Update Sidebar

Edit `.vitepress/config.mts` → `sidebar` object

### Change Theme Colors

Edit `.vitepress/theme/custom.css` → CSS variables

### Add Navigation Item

Edit `.vitepress/config.mts` → `nav` array

### Fix Dead Links

VitePress fails on dead links. Either:

1. Create the missing page
2. Or add `ignoreDeadLinks: true` to config (not recommended)

## Important Notes

- All pages use **clean URLs** (no `.html` extension)
- The site supports **light and dark modes**
- Search is powered by VitePress local search
- Edit links point to GitHub for contributor PRs
