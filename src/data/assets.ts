/** Temporary assets. Replace these files with Jet's photographs and drawings. */
export const assets = {
  cats: Array.from({ length: 5 }, (_, i) => `/assets/cats/cat-fall-0${i + 1}.svg`),
  nature: {
    snow: '/assets/nature/snow.jpg',
    mist: '/assets/nature/mist.jpg',
    mountain: '/assets/nature/mountain.jpg',
    sky: '/assets/nature/sky.jpg',
  },
  projects: Array.from({ length: 4 }, (_, i) => `/assets/projects/project-0${i + 1}.jpg`),
}

export type LandscapeMedia = { src: string; alt: string; video?: string; overlay: number }
