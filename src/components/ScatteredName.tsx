import { m as motion, useReducedMotion, useTransform, type MotionValue } from 'framer-motion'
import { nameStrokes, strokeScatter } from '../data/nameStrokes'

function Stroke({ d, index, progress }: { d: string; index: number; progress: MotionValue<number> }) {
  const reduce = useReducedMotion()
  const [dx, dy, angle] = strokeScatter[index % strokeScatter.length]
  const x = useTransform(progress, [0, 0.65], [dx * 0.04, dx * 1.22])
  const y = useTransform(progress, [0, 0.65], [dy * 0.04, dy + (index % 2 ? 13 : -9)])
  const rotate = useTransform(progress, [0, 0.65], [angle * 0.04, angle + (index % 2 ? 6 : -5)])
  return <motion.path className="name-stroke" d={d} fill="currentColor" style={reduce ? { x: dx * 0.04, y: dy * 0.04, rotate: angle * 0.04 } : { x, y, rotate }} />
}

export function ScatteredName({ progress }: { progress: MotionValue<number> }) {
  return <div className="scattered-name" role="img" aria-label="孫佳航" lang="zh-Hant">
    {nameStrokes.map((glyph, glyphIndex) => <div key={glyph.name} className={`name-character name-${glyph.name}`}>
      <svg viewBox="-40 -35 200 195" aria-hidden="true">
        {glyph.strokes.map((d, index) => <Stroke key={d} d={d} index={index + glyphIndex * 3} progress={progress} />)}
      </svg>
      <span className="pinyin" aria-hidden="true">{glyph.pinyin}</span>
    </div>)}
  </div>
}
