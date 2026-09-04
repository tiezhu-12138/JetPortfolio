/** Nature/cats are placeholders; project illustrations are AI interpretations of supplied screenshots. */
export const assets = {
  cats: Array.from({ length: 5 }, (_, i) => `/assets/cats/cat-fall-0${i + 1}.svg`),
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
