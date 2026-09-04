# Jet Portfolio: agent and design agreement

## Single source of project guidance

This root `AGENTS.md` is the only maintained agent-instruction file for this repository. Read it before changing the project. Do not create a second instruction file, a forwarding stub, or nested copies of these rules. README files describe the project and assets; they are not competing agent instructions.

Maintain this file when the user approves changes to design direction, reusable conventions, architecture or verification requirements. Replace superseded rules in place instead of appending contradictory notes. Explicit current user instructions take precedence over this project's earlier decisions.

## Product identity and copy

- Build Jet's personal interactive space, not a conventional developer portfolio or SaaS landing page. It should express care for how interfaces feel through typography, nature, cats and small interactions.
- Use Australian English. Write as first-person observation, curiosity and self-questioning, without second-person pronouns, lectures, universal design commandments or marketing hype. This supersedes the original exact-copy brief. Otherwise preserve approved copy unless a rewrite is requested.
- All Chinese text is Traditional, including `孫佳航`. THOUGHTS uses authentic quotations: 王維《冬晚對雪憶胡居士家》 for Snow, 蘇軾《題西林壁》 for Mist, 王維《終南別業》 for Mountain and 陶淵明《歸去來兮辭》 for Sky. Preserve the approved wording in `content.ts` and its source comments; do not substitute original imitations.
- Keep images as clearly identified placeholders until the user supplies replacements. Never present them as Jet's actual photographs, screenshots or hand drawings. Do not invent personal facts, project outcomes, metrics or contact links.
- Keep navigation labels and anchors: `INDEX`, `ABOUT`, `THOUGHTS`, `WORK`. The hero's top-right Roman year and the footer Roman year are removed. Do not restore `READ AS A PAGE` or a visible reading-mode switch.

## Visual direction

Quiet, personal, editorial, tactile, poetic and slightly strange. Think old paper, stone, fog, dry grass and mountain air. Design dials: asymmetry 8, motion 8, density 3.

- Use generous negative space, asymmetrical compositions, large serif statements and restrained marginal annotations. Keep each scene recognisable while sharing the same visual language.
- Preserve the architectural scale of `JET`. Small pinyin, numbered labels, vertical notes and the cat scroll invitation are intentional requirements, not generic decorations to remove.
- Keep the paper-based light theme regardless of OS colour scheme. Landscapes may use light text for legibility; this is a media treatment, not a separate dark theme.
- Avoid gradient-heavy SaaS styling, neon, glowing cards, glassmorphism, large rounded panels, generic developer illustrations, skill-icon grids, proficiency bars and conventional “Hi, I'm…” layouts.
- Use spacing instead of unnecessary cards or dividers. Project frames may have restrained irregular borders and a minimal paper shadow. No device mock-ups or dramatic 3D hover effects. The approved Campaign Centre illustrations retain their Safari browser frames as hand-drawn outlines. Project artwork uses CSS `rotate` for its resting tilt; Motion adds only a small hover offset through `transform`, so entering or leaving hover never spins through a full turn.
- Selected small editorial labels (Thoughts numbering and caption, Work project titles) use `.text-highlight`: charcoal background, paper text and tight square edges that follow each wrapped line. Keep this accent selective.
- Paper grain is optional and must remain below 4% opacity without reducing readability; the current treatment is 2.5%. No film scratches or heavy noise.
- Project-specific art direction overrides generic aesthetic defaults from design skills. Do not redesign the brand or adjacent sections just to satisfy a generic template rule.

## Reusable design system

Use the existing native CSS / Tailwind foundation rather than introducing another UI kit. The implementation sources below own their values; this document defines their purpose and usage.

| Concern | Existing source | Reuse rule |
| --- | --- | --- |
| Palette and theme | `src/styles/global.css`, `:root` | Use semantic variables, not near-duplicate hex values in individual sections. |
| Typography | `global.css`, `@theme` | Use `--font-serif` and `--font-mono`; do not import unrelated fonts for new sections. |
| Page gutter | `global.css`, `--gutter` | Reuse for page edges and navigation; current desktop clamp is 24px–88px, mobile 24px. |
| Labels and marginalia | `SmallLabel`, `CornerMetadata`, `.small-label` | Compose shared typography with a section-specific positioning class. |
| Scene composition | `LayeredJourney`, internal `SceneLayer`, `.scene-layer` | Add scenes to the existing deck; no separate scroll controller per module. |
| Landscape presentation | `NatureScene` | Reuse the media, grey overlay, contrast layer and content ordering for both images and video. |
| Artwork and cats | `ProjectArtwork`, `HandDrawnCat`, `ScatteredName` | Use props and centralised asset/stroke data rather than copied markup. |
| Motion parameters | `src/motion/settings.ts` | Reuse `heavySpring` and `lightSpring`; tune shared intent instead of scattering spring literals. |
| Copy and assets | `src/data/content.ts`, `assets.ts`, `nameStrokes.ts` | Keep replaceable content, contacts, paths and stroke offsets centralised. |

### Palette and typography roles

- Surfaces: `--paper: #DED8CC`, `--bone: #CFC8BB`. Secondary earth tones: `--stone: #AAA59B`, `--earth: #847D70`, `--moss: #77776A`.
- Text: `--charcoal: #242423`, `--ink: #171716`, `--soft-black: #292826`, `--muted-ink: #59564F`. Media text: `--landscape-ink: #F3EEE3`. Do not use pale secondary tones for text without checking contrast. Avoid pure white and pure black unless contrast requires them.
- Cormorant Garamond carries statements and reflective prose. IBM Plex Mono carries navigation, labels, metadata and pinyin. Fonts are self-hosted; preserve their licence files.
- Use fluid sizing such as `clamp()` with explicit mobile and short-height adjustments. Small labels are intentional, but never shrink substantive copy into metadata to make a scene fit. Preserve readable line height, intentional line breaks and space below italic descenders.

### Rules for extending styles

1. Inspect an existing equivalent before adding a component, token or selector. Reuse it if the role is the same.
2. Put genuinely shared visual values in CSS custom properties and shared motion values in `settings.ts`. Do not create speculative tokens for every one-off art-directed coordinate.
3. Let shared classes own typography, colour and treatment; let section classes own composition and deliberate variation. Reusable styles do not mean identical layouts everywhere.
4. Extend an existing component with a small, meaningful variant when needed. Do not copy its markup and CSS into another section or build a universal component with unrelated options.
5. Keep global rules, shared treatments, section layouts and responsive adjustments organised in `global.css`. Do not patch drift with repeated override blocks, unnecessary `!important`, or conflicting Tailwind and CSS declarations on the same element.
6. Keep static styling in CSS. Inline styles are appropriate for Motion values and data-driven media overlays, not a parallel collection of untracked design constants.
7. Changing a shared style requires checking every consumer, including mobile, reduced-motion and short-height layouts. Keep the usage rules here consistent with intentional token changes.

## Artwork and media contracts

- The name uses 28 separate SVG writing strokes. At the opening, keep the Traditional Chinese characters clearly recognisable with only slight handwritten offsets. Scroll progressively separates and rotates the strokes; reverse scrolling restores the opening arrangement. Reuse the journey progress, keep the opening echo identical, and preserve the readable arrangement in reduced-motion and short-height document flow.
- `nameStrokes.ts` contains original slender-gold-style name lettering, not a licensed commercial font or a complete typeface. Preserve that distinction when describing it.
- WORK uses 4 AI-generated coloured line interpretations of supplied Campaign Centre screenshots: Summary, Deep Dive, Overview and Create Campaign. Preserve the complete hand-drawn Safari frame, natural image ratio and muted blue, green and rust linework. Display the original light paper image colours without multiply blending onto a yellow backing; use the shared paper token for the frame surface. Identify them as generated interpretations, not Jet's own hand drawings or exact product screenshots.
- Keep both the original five simple SVG cat poses and the four personal-photo line illustrations visible across the journey. About’s drifting cats, the WORK introduction and the ending use original SVG poses; the opening, About’s personal-cat note and project frames use personal-photo illustrations. Personal cats are AI-generated charcoal line interpretations of Jet’s supplied cat photographs, using smooth economical contours with only a few identifying details: nose blaze, pointed ears, mitten paws and a rounded tail. Avoid jagged fur edges, hair strokes, hatching and shaded face masks. Use the four centralised poses (belly-up, reaching, reclining and paws-up) through `HandDrawnCat`, with restrained existing scroll response. The four personal-cat assets use transparent SVG paths vectorised from the approved JPEG line illustrations, preserving their poses and viewBox dimensions. Do not embed raster images in SVG or use white-background blending filters. Keep their linework integrated into the paper without a visible rectangular backdrop; do not describe the generated drawings as Jet’s own hand drawings.
- About 01 and 03 use supplied photographs DSC02613 and DSC02598 respectively as local rectangular backdrops behind the main copy, with paper margins, a neutral grey overlay and light text. About 03 places its photo further left on desktop and right-aligns the main copy. Web-sized compressed JPEG derivatives live in `public/assets/about`; retain the original RAW files outside the site.
- About 02 uses a static first frame extracted from the supplied R3D landscape clip as a local rectangular backdrop near the centre, behind the existing two-part copy. A light paper contrast layer keeps charcoal text legible across the image edges. The compressed JPEG lives at `public/assets/about/forest-clouds.jpg`; no video is loaded for this scene.
- Every landscape image and video needs a neutral grey overlay above media and below text, approximately `rgba(70, 70, 70, 0.30–0.55)`. Retain muted original colour; do not substitute `grayscale(100%)`. Keep the additional contrast layer when needed for readable text.
- Preserve image dimensions/aspect ratios, lazy loading where appropriate, meaningful alt text and failure fallbacks. Future videos must remain muted, pause outside their active scene and respect reduced motion.

## Scene architecture and motion

- Stack: React, TypeScript, Vite, Tailwind CSS, Framer Motion and Lenis. Prefer native CSS sticky and installed capabilities; do not add GSAP or another dependency without a demonstrated gap.
- All normal-motion modules share one native scroll track and one sticky `100svh` viewport: opening, three About scenes, four Thoughts, Work introduction, four projects and ending. Preserve the sequence Snow / Instinct → Mist / Curiosity → Mountain / Space → Sky / Natural.
- `LayeredJourney` owns scene selection, anchor handling, focus transitions and looping. `SmoothScroll` owns Lenis. If the scene count changes, update its scroll distance, navigation mapping and loop boundary together; avoid a second source of scroll state.
- Continue down from the ending through one visually identical, non-interactive opening echo, then reset the scroll position underneath it. Never rewind through the full page or duplicate the full journey. Preserve understandable wheel, touch and keyboard behaviour, including residual native touch momentum.
- Large transitions are slow and damped; small interactions are light and precise; nature transitions are soft; cats are gently playful. Current shared springs: heavy stiffness 85 / damping 26 / mass 1.3, light stiffness 320 / damping 30. Tune by interaction purpose, not one timing for everything.
- Continuous animation uses Motion values, not per-frame React state. React state is for discrete scene or UI changes. Clean up controllers, observers and listeners.
- Preserve `LazyMotion` and lightweight `m` components. Render the hero heading immediately and retain its font preload. Do not delay first paint for an entrance animation.
- `SectionTransition` is an existing in-view helper for document-flow content, not a substitute for active-scene transitions: overlapping panels can be in the viewport while visually inactive. `FullScreenSection` is a basic section primitive, not another pinning system.

## Responsive design and accessibility

- Desktop is the primary art-directed composition. Mobile retains intentional asymmetry and the layered experience, with reduced scale, simplified paths and no horizontal overflow; do not turn it into generic centred cards.
- Reuse the existing responsive groups: mobile below 768px, tablet 768–1023px, and short-height refinements at 740px. At heights of 540px or less, or with reduced motion, automatically expose readable document flow. These are accessibility fallbacks, not user-selectable themes or modes.
- Reduced motion removes parallax, large spring travel and continuous cat animation; every piece of content remains available. In animated mode, inactive layers are inert and hidden from assistive technology, with safe focus transfer.
- Keep semantic headings and sections, meaningful accessible names, visible focus rings, skip navigation, keyboard-operable links/buttons and menu Escape behaviour. Decorative illustrations are hidden from assistive technology.
- Check text contrast, text/image/cat collisions and bounds at every target size. Solve clipping with layout or scene composition, not by hiding copy or removing accessibility features.

## Implementation and verification

- Read the live checkout and preserve existing user changes. Keep components small and purposeful. No unrequested backend, CMS, fake project links, new UI frameworks or broad refactors.
- For code, style, copy or interaction changes: run `npm run build`, `npm test`, and `git diff --check`; inspect relevant desktop/mobile screenshots. Shared scene or style changes require checking all affected scenes.
- Cover forward/reverse scrolling, navigation, wheel/touch/keyboard looping, copy and stroke contracts, text bounds, menu focus, asset loading, reduced motion and accessibility. Existing browser tests live in `tests/portfolio.spec.ts`.
- For documentation-only changes, check instruction completeness, local links, stale references and `git diff --check`. A new build or visual regression run is unnecessary if runtime files did not change.
- Report verification limits honestly. Chromium emulation is not physical-device or Safari testing; lab Lighthouse scores are not field Core Web Vitals. Keep run-specific reports out of this agreement.
- Keep the root README short: introduction, development commands, replacement locations and a link here. Update `AGENTS.md` in the same change as any approved convention it governs. Asset READMEs may document provenance and replacement details, but must not duplicate agent policy.
- Do not commit, push or deploy unless explicitly requested.
