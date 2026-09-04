'use client';
import { useEffect, useRef, useState } from 'react';
const links = [['01', 'ABOUT', '#about'], ['02', 'WORK', '#work'], ['03', 'EXPERIENCE', '#experience'], ['04', 'CONTACT', '#contact']];
export function Header() {
  const [open, setOpen] = useState(false);
  const trigger = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    const close = (e: KeyboardEvent) => { if (e.key === 'Escape' && open) {setOpen(false); trigger.current?.focus();} };
    window.addEventListener('keydown', close);
    return () => window.removeEventListener('keydown', close);
  }, [open]);
  return <header className="site-header shell">
    <a className="brand" href="#" aria-label="Abdulaziz Alfahad home"><span className="pixel-star" aria-hidden="true">✳</span><span>AAF.</span></a>
    <button className="menu-toggle" ref={trigger} aria-expanded={open} aria-controls="primary-nav" onClick={() => setOpen(!open)}>{open ? 'CLOSE −' : 'MENU +'}</button>
    <nav id="primary-nav" className={`primary-nav ${open ? 'is-open' : ''}`} aria-label="Main navigation">
      {links.map(([n, label, href]) => <a key={n} href={href} onClick={() => setOpen(false)}><span>{n}</span> {label}</a>)}
    </nav>
  </header>;
}
