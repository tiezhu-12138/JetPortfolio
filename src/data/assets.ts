/** Nature remains placeholder media; original SVG cats coexist with cat and project AI interpretations of supplied photographs and screenshots. */
export const assets = {
  cats: [
    { src: '/assets/cats/jet-belly-up.jpg', width: 700, height: 560 },
    { src: '/assets/cats/jet-reaching.jpg', width: 560, height: 700 },
    { src: '/assets/cats/jet-reclining.jpg', width: 700, height: 466 },
    { src: '/assets/cats/jet-paws-up.jpg', width: 700, height: 621 },
  ],
  originalCats: Array.from({ length: 5 }, (_, i) => ({ src: `/assets/cats/cat-fall-0${i + 1}.svg`, width: 160, height: 200 })),
  nature: {
    snow: '/assets/nature/snow.jpg',
    mist: '/assets/nature/mist.jpg',
    mountain: '/assets/nature/mountain.jpg',
    sky: '/assets/nature/sky.jpg',
  },
  projects: [
    { src: '/assets/projects/campaign-summary.jpg', label: 'Campaign Centre analytics summary' },
    { src: '/assets/projects/campaign-deep-dive.jpg', label: 'Campaign Centre analytics deep dive' },
    { src: '/assets/projects/campaign-overview.jpg', label: 'Campaign Centre campaign overview' },
    { src: '/assets/projects/campaign-create.jpg', label: 'Campaign Centre campaign creation form' },
  ],
}

export type LandscapeMedia = { src: string; alt: string; video?: string; overlay: number }
