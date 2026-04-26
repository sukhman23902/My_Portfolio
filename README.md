# Sukhmanpreet Singh — Portfolio

A single-page portfolio site showcasing my work as a Software Engineer specializing in distributed systems, AI platforms, and product engineering.

## Preview

![Portfolio Screenshot](public/my_image.jpg)

## Highlights

- **Scroll-driven animations** — parallax blobs, sticky experience cards with scroll-based stacking, and a clip-path circle reveal on the contact section
- **Custom cursor** — interactive cursor with hover states, automatically disabled on touch devices
- **3D tilt cards** — project cards use `perspective` + mouse position for depth
- **Marquee skill tags** — bidirectional CSS animation across skill groups
- **Fluid typography** — `clamp()` based responsive sizing, no breakpoint jumps
- **Glassmorphism effects** — `backdrop-filter: blur()` on floating elements
- **oklch color space** — modern color functions throughout all styling

## Tech Stack

| Layer | Tech |
|-------|------|
| Framework | React 19 |
| Build | Vite 8 |
| Language | JavaScript (no TypeScript) |
| Styling | Inline CSS objects (React `style` prop) |
| Fonts | Grandstander (headings) + Space Grotesk (body) via Google Fonts |
| State | React hooks only — no external libraries |
| Data | Hardcoded in `src/data/portfolio.js` — no API calls |

## Project Structure

```
src/
├── data/
│   └── portfolio.js        # All portfolio content (experience, projects, skills)
├── sections/
│   ├── Hero.jsx             # Landing section with photo and tagline
│   ├── Experience.jsx       # Sticky scroll experience cards
│   ├── Work.jsx             # 3D tilt project cards
│   ├── Skills.jsx           # Marquee skill tag groups
│   └── Contact.jsx          # Circle-reveal contact section
├── components/
│   ├── CustomCursor.jsx     # Custom cursor with hover states
│   ├── FloatingButtons.jsx  # Sticky call/resume action buttons
│   ├── Blob.jsx             # Parallax background blobs
│   ├── Marquee.jsx          # Bidirectional scrolling marquee
│   └── SectionLabel.jsx     # Reusable section header
├── hooks/
│   ├── useScrollY.js        # Scroll position tracking
│   ├── useBreakpoint.js     # Responsive breakpoint detection
│   └── useTouchDevice.js    # Touch device detection
├── Portfolio.jsx            # Root layout component
├── App.jsx                  # App wrapper
├── main.jsx                 # Entry point
└── index.css                # Global styles, CSS variables, keyframes
```

## Getting Started

```bash
# Clone
git clone https://github.com/sukhman23902/My_Portfolio.git
cd My_Portfolio

# Install
npm install

# Dev server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start Vite dev server with HMR |
| `npm run build` | Production build to `/dist` |
| `npm run lint` | ESLint check |
| `npm run preview` | Preview production build locally |

## Customization

All portfolio content lives in **`src/data/portfolio.js`**. Edit the `DATA` object to update:

- Name, tagline, contact info
- Work experience entries
- Project cards
- Skill groups

No code changes needed to update content.

## License

MIT
