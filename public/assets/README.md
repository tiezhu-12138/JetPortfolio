# Artwork sources

Nature photographs remain placeholders. Cats combine the original simple SVG drawings with AI-generated line interpretations of Jet’s supplied photographs. WORK now uses AI-generated coloured line interpretations of user-supplied Campaign Centre screenshots, not Jet's own hand drawings or exact product screenshots.

## Replacement

Replace the JPGs and SVGs at the same paths, or edit `src/data/assets.ts`. Landscape video can be set as `media.video` in `src/data/content.ts`; keep a JPG poster. The media component applies the grey overlay to both images and video. Video remains muted, pauses outside its active chapter and is omitted for reduced motion.

## Sources

The 8 JPGs were generated with the built-in image generation tool for this project on 5 September 2026, then exported as compressed local JPEG assets. No external image hosting is required. The original five SVG cats remain in use alongside the personal-photo line illustrations.

Cormorant Garamond and IBM Plex Mono are self-hosted through Fontsource. Their original licence files are included in `fonts/`.

The scattered name is original name-only, slender-gold-style vector lettering in `src/data/nameStrokes.ts`, rendered by `ScatteredName`. Its 28 complete strokes have independent offsets and rotations. It is not a third-party font, a traced commercial font, or a full typeface. Keep the Traditional Chinese characters `孫佳航` when replacing it.

Prompt set:

- `nature/snow.jpg`: Photorealistic quiet landscape of soft snow-covered alpine slopes, a few distant dark trees, grey winter sky. Wide 16:9 photograph, subtle muted original natural colour, ample negative space, real snow texture. No people, no text or watermark.
- `nature/mist.jpg`: Wide 16:9 landscape photograph of a distant mountain ridge nearly disappearing into low soft grey cloud and mist, muted moss green forest in the lower third, atmospheric fog, subdued natural colours and a winter morning. Empty soft sky and mist above for typography. No people, buildings, text, graphics, watermark, collage or interface.
- `nature/mountain.jpg`: Photorealistic quiet landscape of a dramatic distant mountain ridge and layered valley, moss green and muted stone grey, pale cloud overhead, restrained natural colour, fine geological detail. Wide 16:9. No people, buildings, text or watermark.
- `nature/sky.jpg`: Photorealistic quiet wide 16:9 photograph of an open sky with soft pale clouds and distant hazy horizon, muted blue grey, subtle warm light, natural cloud texture, lots of space. No people, text or watermark.
- `projects/project-01.jpg`: Loose graphite drawing of a complex browser interface with a narrow sidebar, interface panels, a small graph, sketched rectangles and crosshatching. Warm paper, imperfect lines, straight-on 4:3 composition with generous margins. No device, laptop, desk, hands, readable words, brands or watermark.
- `projects/project-02.jpg`: Loose graphite drawing of a choice-making interface with two unlabelled alternatives, a simple comparison, empty space and short pencil strokes suggesting text.
- `projects/project-03.jpg`: Loose graphite drawing of a data visualisation interface with connected nodes, a fine line chart and understated panels.
- `projects/project-04.jpg`: Loose graphite drawing of an experimental interface with an organic shape, a circular gesture path and minimal controls.

Projects 02-04 share this treatment: warm off-white paper, black/grey pencil, imperfect wobbly lines, light crosshatching, restrained art-book sketch, straight-on landscape 4:3 with generous margins. No device, laptop, desk, hand, photography, 3D, readable text, numbers, logos or watermark. They are illustrative placeholders, not real screenshots.

## Campaign Centre line illustrations

Generated with the built-in imagegen tool, then exported to JPEG at quality 88. Original inputs remain untouched in `JetDev/src/components/portfolio-screenshots/safari-mockups/campaign-centre/`. These replace the four displayed project placeholders; the old JPGs are retained but unused.

- `projects/campaign-summary.jpg`: `01-dashboard-summary.webp`
- `projects/campaign-deep-dive.jpg`: `02-dashboard-deep-dive.webp`
- `projects/campaign-overview.jpg`: `03-campaign-details-overview.webp`
- `projects/campaign-create.jpg`: `05-create-campaign.webp`

Prompt set: redraw each supplied screenshot as loose, slightly wobbly thin charcoal, muted blue, sage green and rust pencil contours on warm paper; preserve the full Safari frame and toolbar as hand-drawn outlines, main headings and relative panel/form/chart arrangement. Simplify tiny body text and figures into sketch strokes. No additional cats, objects, perspective or realistic chrome. Summary establishes the shared visual style for the remaining three images. Overview correction removes generated percentage labels and replaces one malformed small label with sketch strokes. The illustrations simplify content and are not records of metrics or outcomes.

## Personal cat line illustrations

Generated with the built-in imagegen tool from user-supplied photographs on 5 September 2026. Original HEIC photographs remain untouched outside the public website. These are generated interpretations, not hand drawings by Jet.

| Asset | Photograph | Pose |
| --- | --- | --- |
| `cats/jet-belly-up.jpg` | IMG_2903.HEIC | Belly-up |
| `cats/jet-reaching.jpg` | IMG_2657.HEIC | Standing and reaching |
| `cats/jet-reclining.jpg` | IMG_2864.HEIC | Reclining |
| `cats/jet-paws-up.jpg` | IMG_2897.HEIC | Paws-up |

Simplification prompt (built-in imagegen edit): keep each existing pose, orientation, composition and proportions. Replace jagged furry outlines with smooth flowing contours. Remove hair strokes, hatching, shading and texture, including on the face and tail. Use a clean charcoal pen line, roughly 4px at 700px width; retain only pointed ears, simple eyes, a tiny nose, a minimal nose-blaze contour, rounded mitten paws and a curved tail. Leave the body empty, with about 10 interior marks maximum. Pure white background and interiors; no checkerboard, grey fill, paper grain, text or shadows.

Local JPEGs are sized to 700px; the shared cat CSS blends their white canvas into the page paper. These files are RGB, not transparent PNGs. Original generated PNGs are retained outside the public bundle.
