import { useEffect, useRef, useState } from 'react'
import { useMediaQuery } from '../hooks/useMediaQuery'
import type { LandscapeMedia } from '../data/assets'
import type { Thought } from '../data/content'
import { SmallLabel } from './SmallLabel'

export function Landscape({ media, active }: { media: LandscapeMedia; active: boolean }) {
  const video = useRef<HTMLVideoElement>(null)
  const reduce = useMediaQuery('(prefers-reduced-motion: reduce)')
  const [failed, setFailed] = useState(false)
  const [videoFailed, setVideoFailed] = useState(false)
  useEffect(() => {
    const element = video.current
    if (!element) return
    if (active && !reduce) void element.play().catch(() => {})
    else element.pause()
    return () => element.pause()
  }, [active, reduce, videoFailed])

  return (
    <div className="landscape">
      {!failed && <img src={media.src} alt={media.alt} loading="lazy" width={media.width ?? 1920} height={media.height ?? 1080} onError={() => setFailed(true)} />}
      {media.video && !reduce && !videoFailed && <video ref={video} src={media.video} poster={media.src} muted loop playsInline preload="none" aria-hidden="true" onError={() => setVideoFailed(true)} />}
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
      <Landscape media={thought.media} active={active} />
      <div className="nature-content">
        <h2 id={`thought-${index + 1}-title`} className="small-label thought-label"><span className="text-highlight">{thought.label}</span></h2>
        {thought.chinese && <p className="thought-chinese" lang="zh-Hant">{thought.chinese}</p>}
        <div className="thought-body">
          {thought.prelude && <p className="thought-prelude">{thought.prelude}</p>}
          <div className="thought-main-block">
            {thought.caption && <SmallLabel className="thought-caption"><span className="text-highlight">{thought.caption}</span></SmallLabel>}
            <p className="thought-main">{thought.main}</p>
          </div>
          {thought.secondary && <p className="thought-secondary">{thought.secondary}</p>}
        </div>
        <p className="thought-note">{thought.note}</p>
      </div>
    </article>
  )
}
