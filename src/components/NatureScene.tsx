import { useEffect, useRef, useState } from 'react'
import { m as motion, useReducedMotion, useTransform, type MotionValue } from 'framer-motion'
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

export function NatureScene({ thought, index, progress, active, linear }: {
  thought: Thought; index: number; progress: MotionValue<number>; active: boolean; linear: boolean
}) {
  const start = index / 4
  const end = (index + 1) / 4
  const opacity = useTransform(progress,
    [Math.max(0, start - 0.055), start, end - 0.055, end],
    [index === 0 ? 1 : 0, 1, 1, index === 3 ? 1 : 0],
  )
  const y = useTransform(progress, [start, end], [14, -14])
  return (
    <motion.article
      className={`nature-scene nature-scene-${index + 1}`}
      aria-labelledby={`thought-${index + 1}-title`}
      aria-hidden={!linear && !active}
      data-scene={index}
      style={linear ? undefined : { opacity, pointerEvents: active ? 'auto' : 'none' }}
    >
      <Landscape thought={thought} active={active || linear} />
      <motion.div className="nature-content" style={linear ? undefined : { y }}>
        <h3 id={`thought-${index + 1}-title`} className="small-label thought-label">{thought.label}</h3>
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
      </motion.div>
    </motion.article>
  )
}
