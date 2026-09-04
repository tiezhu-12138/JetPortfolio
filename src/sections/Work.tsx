import { CornerMetadata } from '../components/CornerMetadata'
import { HandDrawnCat } from '../components/HandDrawnCat'
import { ProjectArtwork } from '../components/ProjectArtwork'
import { projects } from '../data/content'

export function Work({ index = -1 }: { index?: number }) {
  if (index < 0) return <div className="work-intro">
    <CornerMetadata className="work-meta">WORK / 03</CornerMetadata>
    <h2>SOME THINGS<br />I'VE MADE.</h2>
    <p className="work-intro-copy">None of these arrived fully formed.<br /><br />They started as rough ideas,<br />bad sketches,<br />half-working components<br />and an unreasonable number<br />of browser tabs.</p>
    <p className="work-drawing-note small-label">FOR NOW, BORROWED SHAPES.<br />MY OWN DRAWINGS WILL FOLLOW.<br /><br />I LIKE THE IDEA OF DRAWING<br />A SCREEN AGAIN BY HAND.</p>
    <HandDrawnCat className="work-intro-cat" pose={2} drift />
  </div>
  const project = projects[index]
  return <article className={`project project-${index + 1}`}>
    <div className="project-visual">
      <ProjectArtwork index={index} />
      {(index === 0 || index === 3) && <HandDrawnCat className="project-cat" pose={index === 0 ? 3 : 4} />}
      <p className="project-annotation">{project.annotation}</p>
    </div>
    <div className="project-copy">
      <h2 className="small-label">{project.title}</h2>
      <p className="project-description">{project.description}</p>
    </div>
    <p className="project-reflection">{project.reflection}</p>
  </article>
}
