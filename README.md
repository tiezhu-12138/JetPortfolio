# Jet Portfolio

A quiet, interactive portfolio for Jet / 孫佳航. Scattered calligraphic strokes, cats and first-person reflections unfold through layered, scroll-driven scenes. The ending flows back into the opening.

Built with React, TypeScript, Vite, Tailwind CSS, Framer Motion and Lenis.

## Development

```sh
npm install
npm run dev
```

`npm run build` creates the production site. `npm run preview` previews it. `npm test` runs browser checks (first run: `npx playwright install chromium`).

Artwork lives in `public/assets/`; WORK uses generated Campaign Centre line illustrations, cats combine original SVG sketches with line interpretations of supplied personal photographs, and nature remains placeholder media. See [asset sources](./public/assets/README.md); replace files there or update `src/data/assets.ts`. Copy and contact links are in `src/data/content.ts`. The original slender-gold-style SVG lettering and stroke offsets live in `src/data/nameStrokes.ts`.

The single source of agent guidance and reusable design rules is [AGENTS.md](./AGENTS.md). Includes mobile layouts, keyboard navigation and automatic readable layouts for reduced motion or very short screens.
