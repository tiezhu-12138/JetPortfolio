import { useEffect, useRef, useState } from 'react'
import { useReducedMotion } from 'framer-motion'
import type { Thought } from '../data/content'
import { SmallLabel } from './SmallLabel'

function Landscape({ thought, active }: { thought: Thought; active: boolean }) {
  const { media } = thought
  const video = useRef<HTMLVideoElement>(null)
  const reduce = useReducedMotion()
  const [failed, setFailed] = useState(false)
  useEffect(() => {
    if (!video.current) return
    if (active && !reduce) void video.current.play().catch(() => {})
    else video.current.pause()
  }, [active, reduce])

  return (
    <div className="landscape">
      {!failed && <img src={media.src} alt={media.alt} loading="lazy" width="1920" height="1080" onError={() => setFailed(true)} />}
      {media.video && !reduce && <video ref={video} src={media.video} poster={media.src} muted loop playsInline preload="none" aria-hidden="true" />}
      <div className="landscape-grey" aria-hidden="true" style={{ backgroundColor: `rgba(70, 70, 70, ${media.overlay})` }} />
      <div className="landscape-legibility" aria-hidden="true" />
    </div>
  )
}

export function NatureScene({ thought, index, active }: {
  thought: Thought; index: number; active: boolean
}) {
  return (
    <article
      className={`nature-scene nature-scene-${index + 1}`}
      aria-labelledby={`thought-${index + 1}-title`}
      data-scene={index}
    >
      <Landscape thought={thought} active={active} />
      <div className="nature-content">
        <h2 id={`thought-${index + 1}-title`} className="small-label thought-label">{thought.label}</h2>
        {thought.chinese && <p className="thought-chinese" lang="zh-Hant">{thought.chinese}</p>}
        <div className="thought-body">
          {thought.prelude && <p className="thought-prelude">{thought.prelude}</p>}
          <div className="thought-main-block">
            {thought.caption && <SmallLabel className="thought-caption">{thought.caption}</SmallLabel>}
            <p className="thought-main">{thought.main}</p>
          </div>
          {thought.secondary && <p className="thought-secondary">{thought.secondary}</p>}
        </div>
        <p className="thought-note">{thought.note}</p>
      </div>
    </article>
  )
}
