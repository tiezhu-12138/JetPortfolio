import { LazyMotion, MotionConfig } from 'framer-motion'
import { Navigation } from './components/Navigation'
import { SmoothScroll } from './motion/SmoothScroll'
import { LayeredJourney } from './components/LayeredJourney'

const loadMotionFeatures = () => import('./motion/features').then(module => module.default)

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <LazyMotion features={loadMotionFeatures} strict>
      <SmoothScroll />
      <a className="skip-link" href="#main">Skip to content</a>
      <Navigation />
      <main id="main" tabIndex={-1}>
        <LayeredJourney />
      </main>
      </LazyMotion>
    </MotionConfig>
  )
}
