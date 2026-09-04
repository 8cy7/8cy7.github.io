'use client';
import { motion, useReducedMotion } from 'framer-motion';
import { Asset, type AssetSpec } from './Asset';
const notes: (AssetSpec & {label: string})[] = [
 {file: 'hero-sticky-software.png', source: [1536,1024], bounds:[386,121,1120,835], label:'Keep building'},
 {file: 'hero-sticky-ai.png', source: [1536,1024], bounds:[381,103,1142,867], label:'Small steps, big progress'},
 {file: 'hero-sticky-engineering.png', source: [1536,1024], bounds:[370,113,1113,838], label:'Engineering turns ideas into reality'},
];
export function StickyNotes() {
 const reduced = useReducedMotion();
 return <ul className="sticky-notes" aria-label="My approach">{notes.map((note, i) => <motion.li key={note.file} initial={reduced ? false : {opacity:0, y:5}} animate={{opacity:1,y:0}} transition={{duration:.5, delay:.12+i*.09}}><Asset asset={note}/><span className="sr-only">{note.label}</span></motion.li>)}</ul>;
}
