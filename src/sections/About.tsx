import { CornerMetadata } from '../components/CornerMetadata'
import { HandDrawnCat } from '../components/HandDrawnCat'
import { about } from '../data/content'

export function About({ part }: { part: number }) {
  return <div className={`about about-part-${part}`}>
    <h2 className="sr-only">About / {part + 1}</h2>
    <CornerMetadata className="about-meta">ABOUT / 01<br /><br />still learning,<br />still looking,<br />still making.</CornerMetadata>
    {part === 0 && <><p className="about-primary">{about.primary}</p><p className="about-theory">{about.theory}</p></>}
    {part === 1 && <><p className="about-second">{about.second}</p><p className="about-third">{about.third}</p></>}
    {part === 2 && <><p className="about-fourth">{about.fourth}</p><div className="about-cat"><HandDrawnCat pose={3} /><p>{about.cat}</p></div></>}
    <HandDrawnCat className="descending-cat" pose={part} drift />
  </div>
}
