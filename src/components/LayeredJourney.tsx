import { useCallback, useEffect, useRef, useState, type ReactNode } from 'react'
import { m as motion, useMotionValue, useMotionValueEvent, useReducedMotion, useScroll, useSpring, useTransform, type MotionValue } from 'framer-motion'
import { Hero } from '../sections/Hero'
import { About } from '../sections/About'
import { Work } from '../sections/Work'
import { Outro } from '../sections/Outro'
import { NatureScene } from './NatureScene'
import { thoughts, projects } from '../data/content'
import { heavySpring } from '../motion/settings'
import { scrollToPosition } from '../motion/SmoothScroll'
import { useMediaQuery } from '../hooks/useMediaQuery'

const sceneIds = ['index', 'about', 'about-feeling', 'about-learning', 'thoughts', 'thought-curiosity', 'thought-space', 'thought-natural', 'work', 'project-1', 'project-2', 'project-3', 'project-4', 'outro']
const loopIndex = sceneIds.length

function SceneLayer({ id, index, active, progress, linear, children, echo = false }: {
  id: string; index: number; active: boolean; progress: MotionValue<number>; linear: boolean; children: ReactNode; echo?: boolean
}) {
  const y = useTransform(progress, [index - 0.48, index, index + 0.52, index + 1], ['100%', '0%', '0%', '-7%'])
  const scale = useTransform(progress, [index + 0.52, index + 1], [1, 0.965])
  const opacity = useTransform(progress, [index - 0.48, index - 0.12, index + 0.72, index + 1], [0, 1, 1, 0])
  return <motion.section id={id} tabIndex={-1} aria-label={echo ? undefined : id.replaceAll('-', ' ')}
    className={`scene-layer ${index >= 4 && index <= 7 ? 'landscape-layer' : ''}`}
    data-active={active} aria-hidden={echo || (!linear && !active)} inert={echo || (!linear && !active)}
    style={linear ? undefined : { y: index === 0 ? undefined : y, scale, opacity, zIndex: index + 1 }}>
    {children}
  </motion.section>
}

export function LayeredJourney() {
  const ref = useRef<HTMLDivElement>(null)
  const reduce = useReducedMotion()
  const short = useMediaQuery('(max-height: 540px)')
  const linear = Boolean(reduce || short)
  const [active, setActive] = useState(0)
  const resetting = useRef(false)
  const focusTarget = useRef<number | null>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end end'] })
  const raw = useTransform(scrollYProgress, value => value * loopIndex)
  const progress = useSpring(raw, heavySpring)
  const still = useMotionValue(0)
  const nameProgress = useTransform(progress, [0, 1], [0, 1])

  const goTo = useCallback((index: number, immediate = false) => {
    if (linear) {
      document.getElementById(sceneIds[index])?.scrollIntoView({ behavior: 'instant' })
      document.getElementById(sceneIds[index])?.focus({ preventScroll: true })
      return
    }
    if (!ref.current) return
    const distance = ref.current.offsetHeight - window.innerHeight
    const top = ref.current.getBoundingClientRect().top + window.scrollY
    focusTarget.current = index === loopIndex ? 0 : index
    scrollToPosition(top + distance * index / loopIndex, immediate)
  }, [linear])

  useMotionValueEvent(progress, 'change', value => {
    if (linear || resetting.current) return
    const next = Math.min(loopIndex - 1, Math.max(0, Math.floor(value + 0.2)))
    setActive(previous => previous === next ? previous : next)
    // A single, identical opening echo covers the reset. No duplicated journey.
    if (value >= loopIndex - 0.0001) {
      resetting.current = true
      scrollToPosition(0, true)
      progress.jump(0)
      setActive(0)
      history.replaceState(null, '', '#index')
      document.getElementById('index')?.focus({ preventScroll: true })
      requestAnimationFrame(() => { resetting.current = false })
    }
  })

  useEffect(() => {
    if (linear) return
    const focused = document.activeElement
    if (focusTarget.current === active || focused?.closest('[inert]')) {
      document.getElementById(sceneIds[active])?.focus({ preventScroll: true })
      focusTarget.current = null
    }
  }, [active, linear])

  useEffect(() => {
    function followHash(immediate = true) {
      const index = sceneIds.indexOf(location.hash.slice(1))
      if (index >= 0) goTo(index, immediate)
    }
    function followLink(event: MouseEvent) {
      if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return
      const link = (event.target as Element).closest<HTMLAnchorElement>('a[href^="#"]')
      if (!link) return
      const hash = link.getAttribute('href')!
      const index = sceneIds.indexOf(hash.slice(1))
      if (index < 0) return
      event.preventDefault()
      history.pushState(null, '', hash)
      // AGAIN continues through the opening echo instead of rewinding the page.
      goTo(!linear && index === 0 && progress.get() >= 12.8 ? loopIndex : index)
    }
    const restore = () => followHash()
    const frame = requestAnimationFrame(restore)
    document.addEventListener('click', followLink)
    window.addEventListener('popstate', restore)
    window.addEventListener('hashchange', restore)
    return () => {
      cancelAnimationFrame(frame)
      document.removeEventListener('click', followLink)
      window.removeEventListener('popstate', restore)
      window.removeEventListener('hashchange', restore)
    }
  }, [goTo, linear, progress])

  useEffect(() => {
    document.documentElement.dataset.landscape = String(!linear && active >= 4 && active <= 7)
    return () => { delete document.documentElement.dataset.landscape }
  }, [active, linear])

  const content = [
    <Hero progress={linear ? still : nameProgress} />,
    ...[0, 1, 2].map(part => <About part={part} />),
    ...thoughts.map((thought, index) => <NatureScene thought={thought} index={index} active={linear || active === index + 4} />),
    <Work />,
    ...projects.map((_, index) => <Work index={index} />),
    <Outro progress={progress} />,
  ]
  return <div ref={ref} className={`journey ${linear ? 'journey-linear' : ''}`} data-active-scene={active}>
    <div className="journey-stage">
      {content.map((children, index) => <SceneLayer key={sceneIds[index]} id={sceneIds[index]} index={index} active={active === index} progress={progress} linear={linear}>{children}</SceneLayer>)}
      {!linear && <SceneLayer id="opening-echo" index={loopIndex} active={false} progress={progress} linear={false} echo><Hero progress={still} echo /></SceneLayer>}
      {!linear && <nav className="scene-navigation" aria-label="Scene navigation">
        <button aria-label="Previous scene" disabled={active === 0} onClick={() => goTo(active - 1)}>PREVIOUS</button>
        {active >= 4 && active <= 7 && <div className="chapter-navigation">{thoughts.map((thought, index) => <button key={thought.name} aria-label={`0${index + 1} ${thought.name}`} aria-current={active === index + 4 ? 'step' : undefined} onClick={() => goTo(index + 4)}>0{index + 1}<span className="chapter-name">{thought.name}</span></button>)}</div>}
        {active < 13 && <button aria-label="Next scene" onClick={() => goTo(active + 1)}>NEXT</button>}
      </nav>}
    </div>
  </div>
}
