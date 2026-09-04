# Project working agreement

Build Jet's personal interactive portfolio: quiet editorial typography, earth tones, Traditional Chinese, hand-drawn cats, nature and thoughtful frontend interaction.

- Stack: React, TypeScript, Vite, Tailwind CSS, Framer Motion and Lenis. Prefer native CSS sticky to additional animation dependencies.
- Preserve the supplied English copy exactly. Use Australian English for additions. Chinese text is `孫佳航` and `撥開雲霧見青天`.
- The user explicitly approved placeholder images while keeping the supplied copy unchanged. Images are temporary, not evidence of actual projects or original photography. Replace them when the user supplies artwork.
- Keep asset paths and contact links in `src/data/`. Do not invent personal facts, metrics or links.
- Design: asymmetry 8, motion 7, density 3. Paper-tone editorial presentation is intentional. Huge JET, numbered marginalia, vertical notes and serif typography are explicit brief requirements and override generic design-skill defaults.
- Theme is intentionally paper-based. Landscape media use a neutral grey overlay above media and below content, with muted original colour remaining.
- Every main section uses at least `100svh`. Nature is a pinned four-scene essay. Reduced motion and short viewports must expose all copy without trapping scrolling.
- Motion values handle continuous scroll. React state is only for discrete UI state. Clean up Lenis, observers and listeners.
- Framer Motion features load through `LazyMotion`; use the lightweight `m` components inside it. The hero heading renders immediately, with its font preloaded, to avoid making first paint wait for an intro animation.
- Keep semantic headings, keyboard navigation, visible focus states, accessible image descriptions and adequate contrast. Avoid horizontal overflow on mobile.
- Keep modules small and purposeful. No backend, CMS, fake project links or unnecessary component libraries.
- Before handoff run `npm run build`, `npm test`, inspect desktop/mobile screenshots and check `git diff --check`. Report any verification limits honestly.
- Maintain this file and the short README when architecture, commands, assets or assumptions change.
- Do not commit, push or deploy unless explicitly requested.
