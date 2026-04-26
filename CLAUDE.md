# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

| Command | Purpose |
|---------|---------|
| `npm run dev` | Start Vite dev server with HMR |
| `npm run build` | Production build to `/dist` |
| `npm run lint` | ESLint on all JS/JSX files |
| `npm run preview` | Preview production build locally |

No testing framework is configured.

## Architecture

Single-page portfolio site built with **React 19 + Vite 8**. Plain JavaScript (no TypeScript).

### Structure

- `src/Portfolio.jsx` — The entire application lives here (~840 lines). Contains all section components (Hero, Experience, Work, Skills, Contact, CustomCursor) defined as nested functions, plus a `DATA_A` object at the top holding all portfolio content (experience, projects, skills, contact info).
- `src/index.css` — Global styles, CSS custom properties, light/dark mode via `prefers-color-scheme`, and keyframe animations (`spinSlow`, `marquee`).
- `src/App.jsx` — Thin wrapper that renders `<Portfolio />`.
- `src/main.jsx` — React entry point mounting to `#root`.

### Styling

All component styling uses **inline CSS objects** (React `style` prop), not CSS classes. Colors use the **oklch()** color space throughout. Responsive sizing relies on `clamp()` for fluid typography. Glassmorphism effects use `backdrop-filter: blur()`.

### Animation & Interactivity

- Scroll-driven parallax blobs via `useScrollY()` custom hook
- Custom cursor with hover states via `useMouse()` custom hook
- 3D tilt transforms on project cards using `perspective` + mouse position
- Sticky experience cards with scroll-based stacking/scale
- Marquee skill tags with bidirectional CSS animation
- Clip-path circle reveal on the contact section
- All smooth animations use `requestAnimationFrame` loops

### State Management

React hooks only (`useState`, `useRef`, `useEffect`, `useCallback`). No external state libraries. No API calls — all data is hardcoded in `DATA_A`.

### Fonts

Google Fonts loaded in `index.html`: **Grandstander** (display/headings) and **Space Grotesk** (body text).

## Lint

ESLint uses flat config format (v9+). Config in `eslint.config.js` enables React Hooks and React Refresh rules. Browser globals are configured.
