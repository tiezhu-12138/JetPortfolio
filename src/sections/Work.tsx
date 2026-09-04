import { CornerMetadata } from '../components/CornerMetadata'
import { HandDrawnCat } from '../components/HandDrawnCat'
import { ProjectArtwork } from '../components/ProjectArtwork'
import { projects } from '../data/content'

export function Work({ index = -1 }: { index?: number }) {
  if (index < 0) return <div className="work-intro">
    <CornerMetadata className="work-meta">WORK / 03</CornerMetadata>
    <h2>SOME THINGS<br />I'VE MADE.</h2>
    <p className="work-intro-copy">None of these arrived fully formed.<br /><br />They started as rough ideas,<br />bad sketches,<br />half-working components<br />and an unreasonable number<br />of browser tabs.</p>
    <HandDrawnCat className="work-intro-cat" pose={4} original drift />
  </div>
  const project = projects[index]
  return <article className={`project project-${index + 1}`}>
    <div className="project-visual">
      <ProjectArtwork index={index} />
      {(index === 0 || index === 3) && <HandDrawnCat className="project-cat" pose={index === 0 ? 2 : 1} />}
      <p className="project-annotation">{project.annotation}</p>
    </div>
    <div className="project-copy">
      <h2 className="small-label"><span className="text-highlight">{project.title}</span></h2>
      <p className="project-description">{project.description}</p>
    </div>
    <p className="project-reflection">{project.reflection}</p>
  </article>
}
