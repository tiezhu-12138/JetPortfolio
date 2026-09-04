import { useEffect } from 'react'
import Lenis from 'lenis'
import { useReducedMotion } from 'framer-motion'

export function SmoothScroll() {
  const reduce = useReducedMotion()
  useEffect(() => {
    if (reduce) return
    const lenis = new Lenis({ autoRaf: true, lerp: 0.085, smoothWheel: true, syncTouch: false, anchors: true })
    return () => lenis.destroy()
  }, [reduce])
  return null
}
