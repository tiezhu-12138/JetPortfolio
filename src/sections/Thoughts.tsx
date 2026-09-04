import { useRef, useState } from 'react'
import { useMotionValueEvent, useReducedMotion, useScroll } from 'framer-motion'
import { NatureScene } from '../components/NatureScene'
import { thoughts } from '../data/content'
import { useMediaQuery } from '../hooks/useMediaQuery'

export function Thoughts() {
  const ref = useRef<HTMLElement>(null)
  const [active, setActive] = useState(0)
  const [reading, setReading] = useState(false)
  const reduce = useReducedMotion()
  const shortScreen = useMediaQuery('(max-height: 640px)')
  const linear = Boolean(reduce || shortScreen || reading)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end end'] })
  useMotionValueEvent(scrollYProgress, 'change', (progress) => {
    // Only the discrete chapter changes React state; animation stays in motion values.
    const next = Math.min(3, Math.floor(progress * 4))
    setActive(previous => previous === next ? previous : next)
  })

  function selectThought(index: number) {
    if (!ref.current) return
    const top = ref.current.getBoundingClientRect().top + window.scrollY
    const distance = ref.current.offsetHeight - window.innerHeight
    window.scrollTo({ top: top + distance * ((index + 0.32) / 4), behavior: 'instant' })
  }

  function toggleReading() {
    setReading(!reading)
    // Keep the beginning of the essay in view when its height changes.
    requestAnimationFrame(() => ref.current?.scrollIntoView({ behavior: 'instant' }))
  }

  return (
    <section ref={ref} id="thoughts" className={`thoughts ${linear ? 'thoughts-linear' : ''}`} aria-labelledby="thoughts-title">
      <h2 id="thoughts-title" className="sr-only">Thoughts on nature and human-computer interaction</h2>
      <div className="thoughts-stage">
        {thoughts.map((thought, index) => <NatureScene key={thought.label} thought={thought} index={index} progress={scrollYProgress} active={index === active} linear={linear} />)}
        <div className="thought-controls">
          {!linear && <nav aria-label="Thought chapters" className="chapter-navigation">
            {thoughts.map((thought, index) => <button key={thought.name} aria-label={`0${index + 1} ${thought.name}`} aria-current={active === index ? 'step' : undefined} onClick={() => selectThought(index)}><span>0{index + 1}</span><span className="chapter-name">{thought.name}</span></button>)}
          </nav>}
          {!reduce && !shortScreen && <button className="reading-toggle small-label" aria-pressed={reading} onClick={toggleReading}>{reading ? 'RETURN TO THE SCENES' : 'READ AS A PAGE'}</button>}
        </div>
      </div>
    </section>
  )
}
