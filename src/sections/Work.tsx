import { FullScreenSection } from '../components/FullScreenSection'
import { CornerMetadata } from '../components/CornerMetadata'
import { SectionTransition } from '../components/SectionTransition'
import { HandDrawnCat } from '../components/HandDrawnCat'
import { ProjectArtwork } from '../components/ProjectArtwork'
import { projects } from '../data/content'

export function Work() {
  return (
    <section id="work" className="work" aria-labelledby="work-title">
      <FullScreenSection className="work-intro">
        <CornerMetadata className="work-meta">WORK / 03</CornerMetadata>
        <SectionTransition className="work-heading"><h2 id="work-title">SOME THINGS<br />I'VE MADE.</h2></SectionTransition>
        <SectionTransition className="work-intro-copy"><p>None of these arrived fully formed.<br /><br />They started as rough ideas,<br />bad sketches,<br />half-working components<br />and an unreasonable number<br />of browser tabs.</p></SectionTransition>
        <p className="work-drawing-note small-label">THE SCREENSHOTS HAVE BEEN<br />DRAWN AGAIN BY HAND.<br /><br />NOT BECAUSE THEY NEEDED TO BE.<br /><br />JUST BECAUSE I WANTED TO.</p>
        <HandDrawnCat className="work-intro-cat" pose={2} drift />
      </FullScreenSection>
      <div className="projects">
        {projects.map((project, index) => (
          <article key={project.title} className={`project project-${index + 1}`} aria-labelledby={`project-${index + 1}-title`}>
            <SectionTransition className="project-visual">
              <ProjectArtwork index={index} />
              {index === 0 && <HandDrawnCat className="project-cat" pose={3} />}
              {index === 3 && <HandDrawnCat className="project-cat" pose={4} />}
              <p className="project-annotation">{project.annotation}</p>
            </SectionTransition>
            <SectionTransition className="project-copy" delay={0.15}>
              <h3 id={`project-${index + 1}-title`} className="small-label">{project.title}</h3>
              <p className="project-description">{project.description}</p>
            </SectionTransition>
            <SectionTransition className="project-reflection"><p>{project.reflection}</p></SectionTransition>
          </article>
        ))}
      </div>
    </section>
  )
}
