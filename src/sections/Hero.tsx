import { m as motion, useReducedMotion, useScroll, useSpring, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { FullScreenSection } from '../components/FullScreenSection'
import { CornerMetadata } from '../components/CornerMetadata'
import { ScrollIndicator } from '../components/ScrollIndicator'
import { heavySpring } from '../motion/settings'

export function Hero() {
  const ref = useRef<HTMLDivElement>(null)
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y = useSpring(useTransform(scrollYProgress, [0, 1], [0, 100]), heavySpring)
  const rotate = useTransform(scrollYProgress, [0, 1], [0, -3])
  return (
    <FullScreenSection id="index" className="hero" aria-labelledby="hero-title">
      <div ref={ref} className="hero-composition">
        <CornerMetadata className="hero-meta">FRONTEND DEVELOPER<br />AUSTRALIA<br />MMXXVI</CornerMetadata>
        <motion.h1 id="hero-title" className="hero-title" style={reduce ? undefined : { y, rotate }}>JET</motion.h1>
        <div className="name-character name-sun"><span lang="zh-Hant">孫</span><span className="pinyin">SŪN</span></div>
        <div className="name-character name-jia"><span lang="zh-Hant">佳</span><span className="pinyin">JIĀ</span></div>
        <div className="name-character name-hang"><span lang="zh-Hant">航</span><span className="pinyin">HÁNG</span></div>
        <p className="name-note">a name,<br />three characters,<br />several attempts at getting the spacing right.</p>
        <p className="hero-copy">I make things for screens,<br />then spend too much time wondering<br />whether they should feel like screens at all.</p>
        <ScrollIndicator />
      </div>
    </FullScreenSection>
  )
}
