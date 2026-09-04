import { useState } from 'react'
import { m as motion, useReducedMotion } from 'framer-motion'
import { assets } from '../data/assets'
import { lightSpring } from '../motion/settings'

export function ProjectArtwork({ index }: { index: number }) {
  const reduce = useReducedMotion()
  const [failed, setFailed] = useState(false)
  return (
    <motion.figure className={`project-artwork artwork-${index + 1}`} whileHover={reduce ? undefined : { y: -5, rotate: index % 2 ? 0.6 : -0.6 }} transition={lightSpring}>
      {!failed ? <img src={assets.projects[index]} alt={`Temporary pencil-sketch illustration for project ${index + 1}; original artwork to be supplied.`} width="1200" height="900" loading="lazy" onError={() => setFailed(true)} /> : <div className="artwork-fallback">Project artwork</div>}
      <span className="sketch-corner" aria-hidden="true" />
    </motion.figure>
  )
}
