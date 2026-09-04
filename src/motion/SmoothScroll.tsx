import { useEffect } from 'react'
import Lenis from 'lenis'
import { useReducedMotion } from 'framer-motion'

let controller: Lenis | undefined

export function scrollToPosition(top: number, immediate = false) {
  if (controller) controller.scrollTo(top, { immediate, force: true })
  else window.scrollTo({ top, behavior: 'instant' })
}

export function SmoothScroll() {
  const reduce = useReducedMotion()
  useEffect(() => {
    if (reduce) return
    const lenis = new Lenis({ autoRaf: true, lerp: 0.075, smoothWheel: true, syncTouch: false })
    controller = lenis
    return () => { lenis.destroy(); controller = undefined }
  }, [reduce])
  return null
}
