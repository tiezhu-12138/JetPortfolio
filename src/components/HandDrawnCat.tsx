import { m as motion, useReducedMotion, useScroll, useSpring, useTransform, useVelocity } from 'framer-motion'
import { assets } from '../data/assets'

export function HandDrawnCat({ pose = 0, className = '', drift = false }: { pose?: number; className?: string; drift?: boolean }) {
  const reduce = useReducedMotion()
  const { scrollY } = useScroll()
  const velocity = useVelocity(scrollY)
  const tilt = useSpring(useTransform(velocity, [-1800, 0, 1800], [-12, 0, 12]), { stiffness: 70, damping: 20 })
  return (
    <motion.span className={`cat ${className}`} aria-hidden="true" style={reduce ? undefined : { rotate: tilt }}>
      <motion.img
        src={assets.cats[pose % assets.cats.length]} alt="" width="160" height="200"
        animate={drift && !reduce ? { y: [0, 9, 0], rotate: [-3, 3, -3] } : undefined}
        transition={{ duration: 5 + pose * 0.7, ease: 'easeInOut', repeat: Infinity }}
      />
    </motion.span>
  )
}
