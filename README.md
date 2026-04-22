# papazian-v2

Standalone React + Vite portfolio app for Haig Papazian.

This repo contains the editorial site shell, routed pages, and atlas entry surface that were previously nested inside a broader workspace. The app combines a tightly curated public portfolio with an exploratory atlas organized by relation rather than chronology.

## Stack

- React 19
- Vite
- React Router
- Three.js
- npm

## Scripts

- `npm install`
- `npm run dev`
- `npm run lint`
- `npm run build`
- `npm run preview`

## Project Structure

- `src/App.jsx`: route shell and page loading boundaries
- `src/pages/`: homepage, works, writing, about, contact, atlas, and project detail routes
- `src/components/NavBar.jsx`: primary navigation and atlas domain filters
- `src/components/AtlasExperience.jsx`: Three.js atlas experience embedded in the React app
- `src/data/siteContent.js`: editorial copy, project metadata, and detail-page content
- `public/data/nodes.js`: atlas dataset, domain colors, node positions, and atlas entry copy
- `public/atlas-3d.html`: standalone 3D atlas surface

## Notes

- Use `npm`, not `pnpm`.
- Keep the visual language aligned with the portfolio direction: DM Sans, black backgrounds for art surfaces, and a precise constellation-like feel.
- If you move or rename assets in `public/images/`, update the matching references in `src/data/siteContent.js` and `public/data/nodes.js`.
