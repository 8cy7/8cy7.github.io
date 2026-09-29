# Abdulaziz Alfahad | Portfolio

My personal website: who I am, what I build, and case studies of projects I've shipped.

**Live:** [8cy7.github.io](https://8cy7.github.io)

## What's inside

- **Hero scene** built from layered illustrations that stay anchored to the desk at every screen size
- **About and experience** sections based on my CV
- **Services**: mobile apps, web platforms and AI products
- **Selected work** as stacked retro windows with scroll-driven motion
- **Case studies** for each project:
  - Sanal mobile app and company website
  - 99 Names of Allah (iOS)
  - Sharh, an AI learning platform
  - Juz Agency website
  - SPL customer experience employee event
  - Traoubi landing page

## Tech Stack

React 19 · Next.js App Router (via Vinext on Vite) · TypeScript · Tailwind CSS 4 · Framer Motion · shadcn/ui

Fully static export, deployed to GitHub Pages with GitHub Actions on every push to `main`.

## Run Locally

Requires Node 22.13 or newer.

```bash
npm ci
npm run dev
```

## Project Structure

```
app/
├── page.tsx              # Home
└── projects/<slug>/      # Case study pages
components/
├── hero/                 # Header, scene and copy
├── about/  experience/  services/
├── projects/             # Project cards and data
└── footer/
public/assets/            # Illustrations and project screenshots
```
