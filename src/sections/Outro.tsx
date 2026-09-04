import { m as motion, useReducedMotion, useTransform, type MotionValue } from 'framer-motion'
import { HandDrawnCat } from '../components/HandDrawnCat'
import { contacts } from '../data/content'

export function Outro({ progress }: { progress: MotionValue<number> }) {
  const reduce = useReducedMotion()
  const y = useTransform(progress, [13.45, 14], [0, 220])
  return <div className="outro-inner">
    <h2 className="outro-heading">THAT'S ALL<br /><span>FOR NOW.</span></h2>
    <p className="outro-copy">The web is never really finished.<br /><br />Neither am I.</p>
    <nav className="contact-links" aria-label="Contact Jet">{contacts.map(link => <a key={link.label} href={link.href} {...(link.href.startsWith('http') ? { target: '_blank', rel: 'noreferrer' } : {})}>{link.label}<span aria-hidden="true">↗</span></a>)}</nav>
    <p className="outro-note">I've spent more time here<br />than my cats ever will.<br /><br />I'm glad this little space exists.</p>
    <a href="#index" className="again"><span className="small-label">AGAIN?</span><motion.span style={reduce ? undefined : { y }}><HandDrawnCat pose={4} /></motion.span></a>
    <span className="jet-echo" aria-hidden="true">JET</span>
    <footer className="footer small-label"><span>JET / <span lang="zh-Hant">孫佳航</span></span><span>BUILT FOR THE WEB<br />SOMEWHERE IN AUSTRALIA</span></footer>
  </div>
}
