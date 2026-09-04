import { useRef } from 'react'
import { m as motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { FullScreenSection } from '../components/FullScreenSection'
import { HandDrawnCat } from '../components/HandDrawnCat'
import { SectionTransition } from '../components/SectionTransition'
import { contacts } from '../data/content'

export function Outro() {
  const ref = useRef<HTMLDivElement>(null)
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end end'] })
  const y = useTransform(scrollYProgress, [0.6, 1], [0, 145])
  return (
    <FullScreenSection className="outro" aria-labelledby="outro-title">
      <div ref={ref} className="outro-inner">
        <SectionTransition className="outro-heading"><h2 id="outro-title">THAT'S ALL<br /><span>FOR NOW.</span></h2></SectionTransition>
        <p className="outro-copy">The web is never really finished.<br /><br />Neither am I.</p>
        <nav className="contact-links" aria-label="Contact Jet">{contacts.map(link => <a key={link.label} href={link.href} {...(link.href.startsWith('http') ? { target: '_blank', rel: 'noreferrer' } : {})}>{link.label}<span aria-hidden="true">↗</span></a>)}</nav>
        <p className="outro-note">If you've made it this far,<br />you've probably spent more time<br />on this website than my cats have.<br /><br />Thank you.</p>
        <a href="#index" className="again"><span className="small-label">AGAIN?</span><motion.span style={reduce ? undefined : { y }}><HandDrawnCat pose={4} /></motion.span></a>
        <span className="jet-echo" aria-hidden="true">JET</span>
        <footer className="footer small-label"><span>JET / <span lang="zh-Hant">孫佳航</span></span><span>BUILT FOR THE WEB<br />SOMEWHERE IN AUSTRALIA<br />MMXXVI</span></footer>
      </div>
    </FullScreenSection>
  )
}
