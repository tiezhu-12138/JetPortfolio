import { CornerMetadata } from '../components/CornerMetadata'
import { HandDrawnCat } from '../components/HandDrawnCat'
import { Landscape } from '../components/NatureScene'
import { assets } from '../data/assets'
import { about } from '../data/content'

export function About({ part }: { part: number }) {
  return <div className={`about about-part-${part}`}>
    <h2 className="sr-only">About / {part + 1}</h2>
    <CornerMetadata className="about-meta">ABOUT / 01<br /><br />still learning,<br />still looking,<br />still making.</CornerMetadata>
    {part === 0 && <><div className="about-photo-copy"><Landscape media={assets.about[0]} active={false} /><p className="about-primary">{about.primary}</p></div><p className="about-theory">{about.theory}</p></>}
    {part === 1 && <><div className="about-landscape"><Landscape media={assets.about[1]} active={false} /></div><p className="about-second">{about.second}</p><p className="about-third">{about.third}</p></>}
    {part === 2 && <><div className="about-photo-copy"><Landscape media={assets.about[2]} active={false} /><p className="about-fourth">{about.fourth}</p></div><div className="about-cat"><HandDrawnCat pose={3} /><p>{about.cat}</p></div></>}
    <HandDrawnCat className="descending-cat" pose={part} original drift />
  </div>
}
