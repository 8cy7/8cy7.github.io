'use client';
import { motion, useMotionValue, useReducedMotion, useSpring } from 'framer-motion';
import type { CSSProperties, PointerEvent } from 'react';
import { Asset, type AssetSpec } from './Asset';
type SceneItem = AssetSpec & {name: string; left: number; top: number; width: number; layer: number};
// Positions are percentages of a fixed scene, independently composed on mobile in CSS.
const sceneItems: SceneItem[] = [
 {name:'platform',file:'hero-platform.png',source:[1774,887],bounds:[78,316,1704,764],left:1,top:71,width:98,layer:1},
 {name:'computer',file:'hero-retro-computer.png',source:[1214,1295],bounds:[39,138,1205,1224],left:18,top:10,width:72,layer:4},
 {name:'cv',file:'hero-cv-card.png',source:[1536,1024],bounds:[456,198,1108,793],left:27,top:70,width:26,layer:5},
 {name:'mug',file:'hero-mug.png',source:[1536,1024],bounds:[463,214,1248,862],left:9,top:62,width:17,layer:6},
 {name:'books',file:'hero-books.png',source:[1536,1024],bounds:[152,154,1402,922],left:78,top:64,width:21,layer:5},
 {name:'cat',file:'hero-cat.png',source:[1536,1024],bounds:[96,176,1488,939],left:70,top:76,width:22,layer:7},
 {name:'learning',file:'hero-bubble-learning.png',source:[1536,1024],bounds:[337,193,1267,803],left:18,top:0,width:25,layer:8},
 {name:'ideas',file:'hero-bubble-ideas.png',source:[1536,1024],bounds:[328,96,1222,903],left:73,top:0,width:22,layer:8},
];
export function HeroScene() {
 const reduced=useReducedMotion();
 const px=useMotionValue(0),py=useMotionValue(0);
 const x=useSpring(px,{stiffness:90,damping:24}),y=useSpring(py,{stiffness:90,damping:24});
 function move(e: PointerEvent<HTMLDivElement>) {
   if(reduced || e.pointerType!=='mouse')return;
   const r=e.currentTarget.getBoundingClientRect();px.set((e.clientX-r.left)/r.width*10-5);py.set((e.clientY-r.top)/r.height*10-5);
 }
 return <motion.div className="hero-scene" id="work" role="img" aria-label="A red retro computer printing Abdulaziz's CV, with a coffee mug, books, a sleeping cat, and notes: Always learning; Good ideas build better tomorrows." initial={reduced?false:{opacity:0}} animate={{opacity:1}} transition={{duration:.8,delay:.15}} onPointerMove={move} onPointerLeave={()=>{px.set(0);py.set(0);}}>
 {sceneItems.map(item=>{
  const bubble=item.name==='learning'||item.name==='ideas';
  const position={'--left':`${item.left}%`,'--top':`${item.top}%`,'--width':`${item.width}%`,zIndex:item.layer} as CSSProperties;
  return <div className={`scene-item scene-${item.name}`} key={item.name} style={position}><motion.div style={item.name==='computer'?{x,y}:undefined} animate={bubble&&!reduced?{y:[0,-3,0]}:undefined} transition={bubble?{duration:item.name==='ideas'?8:7,repeat:Infinity,ease:'easeInOut'}:undefined}><Asset asset={item} priority={item.name==='computer'}/></motion.div></div>;
 })}
 </motion.div>;
}
