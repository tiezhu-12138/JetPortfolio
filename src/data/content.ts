import { assets, type LandscapeMedia } from './assets'

// Contact details verified against JetDev/src/content/home.js.
export const contacts = [
  { label: 'EMAIL', href: 'mailto:jiahang.s@outlook.com' },
  { label: 'GITHUB', href: 'https://github.com/tiezhu-12138' },
  { label: 'LINKEDIN', href: 'https://www.linkedin.com/in/jiahang-sun-66b350355' },
]

export const about = {
  primary: `I build things for the web.\n\nMost of the time that means arranging type,\nbuttons, data and tiny bits of movement\nuntil the whole thing starts making sense.`,
  second: `I like the awkward bit between\n"it technically works"\nand\n"oh, this feels right."\n\nThat gap is usually where I end up spending\nfar too much time.`,
  third: `Frontend is interesting to me because\nit sits somewhere between logic and feeling.\n\nThere are rules.\n\nThen there are all the little things\npeople notice without knowing\nthat they noticed them.`,
  fourth: `I'm still figuring things out.\n\nWhat kind of developer I want to be.\nWhat makes an interface feel calm.\nWhy some websites disappear from memory\nfive minutes after you close them,\nwhile others stay with you for years.`,
  theory: `Current theory:\npeople remember feelings\nbetter than component libraries.`,
  cat: 'My cats remain unconvinced by responsive design.',
}

export type Thought = {
  label: string
  name: string
  media: LandscapeMedia
  prelude?: string
  caption?: string
  chinese?: string
  main: string
  secondary?: string
  note: string
}

export const thoughts: Thought[] = [
  {
    label: 'THOUGHT 01 / INSTINCT', name: 'Instinct',
    media: { src: assets.nature.snow, alt: 'Snow-covered slopes beneath a quiet winter sky.', overlay: 0.38 },
    prelude: `I love nature partly because\nit rarely needs instructions.\n\nSnow falls.\nWater finds its way downhill.\nA path becomes obvious\nbecause somebody walked there before.`,
    caption: 'GOOD INTERACTION\nOFTEN FEELS THE SAME.',
    main: `The nicest interfaces don't explain\nevery possible thing you can do.\n\nThey leave enough clues\nfor the next step to feel inevitable.`,
    note: `Perhaps good design is less about\ntelling people where to go,\nand more about making the path\nfeel worth following.`,
  },
  {
    label: 'THOUGHT 02 / CURIOSITY', name: 'Curiosity',
    media: { src: assets.nature.mist, alt: 'Forested mountain ridges receding into layers of grey mist.', overlay: 0.4 },
    chinese: '撥開雲霧見青天',
    main: `Perhaps exploration is instinct.\n\nWhat kind of world\nwaits beyond the mist?`,
    secondary: `Curiosity is an interaction too.\n\nWe touch.\nWe drag.\nWe scroll.\nWe open things\nbecause some small part of us\nwants to know what happens next.`,
    note: `A good interface doesn't remove mystery.\n\nIt gives curiosity somewhere to go.`,
  },
  {
    label: 'THOUGHT 03 / SPACE', name: 'Space',
    media: { src: assets.nature.mountain, alt: 'A mountain ridge and distant valley under a pale sky.', overlay: 0.38 },
    main: `Nature has hierarchy\nwithout looking like a sitemap.\n\nA mountain has a horizon.\nA river has direction.\nA forest has depth.\n\nYou understand space\nbefore anyone explains it.`,
    secondary: `I think digital spaces can work like that too.\n\nStructure doesn't need to announce itself.\n\nSometimes scale,\ndistance,\nmovement\nand rhythm\nare enough.`,
    note: `If everything asks for attention,\nnothing has attention.`,
  },
  {
    label: 'THOUGHT 04 / NATURAL', name: 'Natural',
    media: { src: assets.nature.sky, alt: 'Soft clouds drifting across an open, muted blue sky.', overlay: 0.45 },
    main: `I don't want technology\nto disappear.\n\nI just want the conversation\nbetween us and our machines\nto become quieter.`,
    secondary: `Less friction where friction serves no purpose.\n\nMore resistance where slowing down helps.\n\nMovement that explains.\n\nSpace that gives us time.\n\nInterfaces that behave\na little more like the world\nwe already know how to move through.`,
    note: `Maybe the best interaction\nis the one that feels obvious\nonly after somebody cared enough\nto make it that way.`,
  },
]

export const projects = [
  {
    title: '01 / MAKING COMPLEX THINGS FEEL SMALLER',
    description: `This one involved a lot of information\ntrying to occupy the same screen.\n\nThe interesting part wasn't adding more.\n\nIt was deciding what could disappear\nuntil somebody actually needed it.`,
    annotation: `less interface,\nmore wayfinding.`,
    reflection: `Looking at it now,\nI'd probably simplify it again.\n\nThat's usually a good sign.`,
  },
  {
    title: '02 / DESIGNING AROUND A DECISION',
    description: `A small interface built around\na very ordinary question:\n\nwhat does someone need to know\nbefore they're comfortable choosing?\n\nI spent more time on hierarchy\nthan decoration.`,
    annotation: 'clarity before cleverness.',
    reflection: `The useful lesson wasn't\nhow to make the screen prettier.\n\nIt was learning how easily\na screen can ask too much.`,
  },
  {
    title: '03 / FOLLOWING THE DATA',
    description: `Some projects are mostly about\nmaking invisible things visible.\n\nRelationships.\nPatterns.\nMovement.\nWhat happened,\nand what might happen next.`,
    annotation: 'information has shape too.',
    reflection: `The more data there is,\nthe more important silence becomes.`,
  },
  {
    title: '04 / A SMALL EXPERIMENT',
    description: `Not everything needs to become\na product.\n\nSometimes I make something\nbecause one interaction bothered me,\nor because I wanted to see\nwhether an idea would work.`,
    annotation: 'curiosity counts as a reason.',
    reflection: `These are usually the projects\nwhere I learn the fastest.`,
  },
]
