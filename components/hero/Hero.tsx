import { HeroCopy } from './HeroCopy';
import { HeroScene } from './HeroScene';
export function Hero() {
 return <section className="hero shell" aria-label="Introduction"><div className="hero-layout"><HeroCopy/><HeroScene/></div><footer className="hero-footer"><a href="#work" className="scroll-link"><span aria-hidden="true">⌄</span>SCROLL</a><p className="location"><span aria-hidden="true"/>RIYADH, SAUDI ARABIA</p></footer></section>;
}
