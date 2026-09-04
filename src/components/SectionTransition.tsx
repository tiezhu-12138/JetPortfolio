import { m as motion, useReducedMotion } from 'framer-motion'
import type { ReactNode } from 'react'
import { heavySpring } from '../motion/settings'

export function SectionTransition({ children, className = '', delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const reduce = useReducedMotion()
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y: 42, scale: 0.985 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ ...heavySpring, delay: reduce ? 0 : delay }}
    >{children}</motion.div>
  )
}
