# AGENTS.md — papazian-v2

> Read this file before making changes in this repository.

## Project

`papazian-v2` is a standalone React + Vite portfolio app for Haig Papazian.

It includes:

- a routed editorial site
- a curated works layer
- writing and project detail pages
- an atlas experience built with Three.js
- a standalone `public/atlas-3d.html` entry surface

## Stack

- React 19
- Vite
- React Router
- Three.js
- npm only

## Design Language

- Font: DM Sans
- Background: `#000000` for portfolio and atlas surfaces
- Style: constellation / spatial / brutalist precision
- Never: generic startup UI, lorem ipsum, bounce animations, gradients on dark backgrounds
- Accent colors: derive them from the existing domain system unless a task explicitly calls for a new palette
- RTL: when Arabic appears, apply correct direction at the container level

## Code Map

- `src/App.jsx`: app shell and route definitions
- `src/pages/`: main route surfaces
- `src/components/NavBar.jsx`: primary nav and atlas filters
- `src/components/AtlasExperience.jsx`: Three.js scene, camera behavior, and node interaction
- `src/data/siteContent.js`: main editorial content and project detail content
- `public/data/nodes.js`: atlas nodes, positions, colors, and entry copy
- `public/atlas-3d.html`: standalone atlas surface

## Working Rules

1. Check `package.json` first and use `npm`.
2. Plan before editing UI or content-heavy files.
3. Preserve the current visual language instead of replacing it with a generic template.
4. Do not rename or relocate image assets without updating all references.
5. Prefer small, targeted edits over broad rewrites.
6. Use conventional commits: `feat:`, `fix:`, `chore:`, `docs:`.

## Verification

- Run `npm run lint` after code changes.
- Run `npm run build` before treating the repo as ready.
