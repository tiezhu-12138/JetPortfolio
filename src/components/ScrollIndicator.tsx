import { HandDrawnCat } from './HandDrawnCat'

export function ScrollIndicator() {
  return <a className="scroll-invitation" href="#about" aria-label="SCROLL, THE CAT KNOWS THE WAY. Continue to About."><HandDrawnCat pose={0} drift /><span className="small-label">SCROLL,<br />THE CAT KNOWS THE WAY.</span></a>
}
