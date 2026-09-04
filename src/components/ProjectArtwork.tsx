import { useState } from 'react'
import { m as motion, useReducedMotion } from 'framer-motion'
import { assets } from '../data/assets'
import { lightSpring } from '../motion/settings'

export function ProjectArtwork({ index }: { index: number }) {
  const artwork = assets.projects[index]
  const reduce = useReducedMotion()
  const [failed, setFailed] = useState(false)
  return (
    <motion.figure className={`project-artwork artwork-${index + 1}`} whileHover={reduce ? undefined : { y: -5, rotate: index % 2 ? 0.6 : -0.6 }} transition={lightSpring}>
      {!failed ? <img src={artwork.src} alt={`AI-generated coloured line illustration of ${artwork.label}, including a hand-drawn Safari frame; based on a supplied screenshot.`} width="1615" height="974" loading="lazy" onError={() => setFailed(true)} /> : <div className="artwork-fallback">Project artwork</div>}
      <span className="sketch-corner" aria-hidden="true" />
    </motion.figure>
  )
}
