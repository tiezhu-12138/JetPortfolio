import { type MotionValue } from 'framer-motion'
import { CornerMetadata } from '../components/CornerMetadata'
import { ScrollIndicator } from '../components/ScrollIndicator'
import { ScatteredName } from '../components/ScatteredName'

export function Hero({ progress, echo = false }: { progress: MotionValue<number>; echo?: boolean }) {
  return <div className="hero-composition">
    <CornerMetadata className="hero-meta">FRONTEND DEVELOPER<br />AUSTRALIA</CornerMetadata>
    {echo ? <div className="hero-title" aria-hidden="true">JET</div> : <h1 className="hero-title">JET</h1>}
    <ScatteredName progress={progress} />
    <p className="name-note">a name,<br />three characters,<br />several attempts at getting the spacing right.</p>
    <p className="hero-copy">I make things for screens,<br />then spend too much time wondering<br />whether they should feel like screens at all.</p>
    <ScrollIndicator />
  </div>
}
