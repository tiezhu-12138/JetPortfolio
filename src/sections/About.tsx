import { FullScreenSection } from '../components/FullScreenSection'
import { CornerMetadata } from '../components/CornerMetadata'
import { HandDrawnCat } from '../components/HandDrawnCat'
import { SectionTransition } from '../components/SectionTransition'
import { about } from '../data/content'

export function About() {
  return (
    <FullScreenSection id="about" className="about" aria-labelledby="about-title">
      <h2 id="about-title" className="sr-only">About</h2>
      <CornerMetadata className="about-meta">ABOUT / 01<br /><br />still learning,<br />still looking,<br />still making.</CornerMetadata>
      <SectionTransition className="about-primary"><p>{about.primary}</p></SectionTransition>
      <SectionTransition className="about-second" delay={0.1}><p>{about.second}</p></SectionTransition>
      <SectionTransition className="about-third"><p>{about.third}</p></SectionTransition>
      <SectionTransition className="about-fourth" delay={0.15}><p>{about.fourth}</p></SectionTransition>
      <SectionTransition className="about-theory"><p>{about.theory}</p></SectionTransition>
      <div className="about-cat"><HandDrawnCat pose={3} /><p>{about.cat}</p></div>
      <div className="descending-cat"><HandDrawnCat pose={1} drift /></div>
    </FullScreenSection>
  )
}
