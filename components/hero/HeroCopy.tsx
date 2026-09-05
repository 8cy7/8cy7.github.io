'use client';
import { motion, useReducedMotion } from 'framer-motion';
import { StickyNotes } from './StickyNotes';
export function HeroCopy() {
 const reduced = useReducedMotion();
 return <div className="hero-copy" id="intro">
   <p className="eyebrow">// HELLO, I'M</p>
   <motion.h1 initial={reduced ? false : {opacity:0,y:10}} animate={{opacity:1,y:0}} transition={{duration:.65}}><span>ABDULAZIZ</span><span>ALFAHAD</span></motion.h1>
   <p className="job-title" id="experience">SOFTWARE ENGINEER</p>
   <StickyNotes />
   <p className="description">I build digital products, solve real problems,<br className="desktop-break"/> and turn ideas into reality.</p>
   <div className="hero-actions"><a className="primary-cta" href="#contact">LET'S BUILD<br/>SOMETHING COOL <span aria-hidden="true" className="cta-arrow">↗</span></a><a className="work-link" href="#work">VIEW MY WORK <span aria-hidden="true">↓</span></a></div>
 </div>;
}
