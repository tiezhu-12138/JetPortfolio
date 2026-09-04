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
  third: `Frontend is interesting to me because\nit sits somewhere between logic and feeling.\n\nThere are rules.\n\nThen there are all the little things\nI notice without quite knowing\nwhy they stay with me.`,
  fourth: `I'm still figuring things out.\n\nWhat kind of developer I want to be.\nWhat makes an interface feel calm.\nWhy some websites disappear from memory\nfive minutes after I close them,\nwhile others stay with me for years.`,
  theory: `A note to myself:\nI remember feelings\nbetter than component libraries.`,
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
    caption: 'I SOMETIMES FIND\nTHAT FEELING ON A SCREEN.',
    main: `I keep thinking about interfaces\nI understood without being told.\n\nA few quiet clues,\nand somehow I knew where to begin.`,
    note: `Perhaps that's what I'm looking for:\na path I want to follow,\nwithout thinking too much\nabout the path itself.`,
  },
  {
    label: 'THOUGHT 02 / CURIOSITY', name: 'Curiosity',
    media: { src: assets.nature.mist, alt: 'Forested mountain ridges receding into layers of grey mist.', overlay: 0.4 },
    chinese: '撥開雲霧見青天',
    main: `I always wonder\nwhat lies beyond the mist.\n\nPerhaps that small pull\nis where exploration begins.`,
    secondary: `I recognise that feeling on a screen.\n\nI touch.\nI drag.\nI scroll.\nI open something\njust to find out\nwhat happens next.`,
    note: `I don't think I want every mystery solved.\n\nSometimes I just want somewhere to look.`,
  },
  {
    label: 'THOUGHT 03 / SPACE', name: 'Space',
    media: { src: assets.nature.mountain, alt: 'A mountain ridge and distant valley under a pale sky.', overlay: 0.38 },
    main: `On a mountain, I tend to find\nmy bearings before the words.\n\nA horizon.\nThe direction of a river.\nThe depth of the trees.`,
    secondary: `I wonder if a digital space\ncould feel a little like that.\n\nI'm still learning what\nscale, distance, movement\nand rhythm can do\nbefore I add another label.`,
    note: `When I make everything louder,\nI find it harder to hear anything.`,
  },
  {
    label: 'THOUGHT 04 / NATURAL', name: 'Natural',
    media: { src: assets.nature.sky, alt: 'Soft clouds drifting across an open, muted blue sky.', overlay: 0.45 },
    main: `I don't want technology\nto disappear.\n\nI just want the conversation\nbetween us and our machines\nto become quieter.`,
    secondary: `I keep returning to small questions.\n\nWhere am I adding friction?\nWhere would I rather slow down?\n\nCould a little movement explain this?\nCould a little space be enough?\n\nI'd like the things I make\nto feel less unfamiliar.`,
    note: `The interactions I remember\noften feel obvious afterwards.\n\nI keep wondering how much care\nwent into making them feel that way.`,
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
    reflection: `The more data I work with,\nthe more I find myself leaving space.`,
  },
  {
    title: '04 / A SMALL EXPERIMENT',
    description: `I don't always start with\na product in mind.\n\nSometimes I make something\nbecause one interaction bothered me,\nor because I wanted to see\nwhether an idea would work.`,
    annotation: 'curiosity counts as a reason.',
    reflection: `These are usually the projects\nwhere I learn the fastest.`,
  },
]
