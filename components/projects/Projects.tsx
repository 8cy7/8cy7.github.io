'use client';
import { Fragment, useEffect, useRef } from 'react';
import { useReducedMotion, useScroll } from 'framer-motion';
import { ProjectCard } from './ProjectCard';
import { projects } from './project-data';

export function Projects() {
  const stack = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  // End the scroll with all three title bars visible, at any viewport or text size.
  useEffect(() => {
    const element = stack.current;
    const lastStep = element?.lastElementChild as HTMLElement | null;
    const lastCard = lastStep?.querySelector<HTMLElement>('.project-card');
    if (!element || !lastStep || !lastCard) return;
    const measure = () => {
      const pinnedTop = parseFloat(getComputedStyle(lastStep).top);
      const shellPadding = parseFloat(getComputedStyle(element.parentElement!).paddingBottom);
      const space = Number.isFinite(pinnedTop)
        ? Math.max(0, window.innerHeight - pinnedTop - lastCard.offsetHeight - shellPadding)
        : 0;
      element.style.setProperty('--closing-space', `${space}px`);
    };
    const observer = new ResizeObserver(measure);
    observer.observe(lastCard);
    window.addEventListener('resize', measure);
    measure();
    return () => { observer.disconnect(); window.removeEventListener('resize', measure); };
  }, []);
  const { scrollYProgress } = useScroll({ target: stack, offset: ['start start', 'end end'] });
  return <section className="projects-section" id="work" aria-labelledby="projects-heading">
    <div className="shell projects-shell">
      <header className="projects-heading"><p>// SELECTED WORK</p><h2 id="projects-heading">PROJECTS<span aria-hidden="true">.</span></h2></header>
      <div className="project-stack" ref={stack}>
        {projects.map((project, index) => <Fragment key={project.id}><ProjectCard project={project} index={index} totalCards={projects.length} progress={scrollYProgress} reducedMotion={!!reduced}/>{index < projects.length - 1 && <div className="project-gap" aria-hidden="true"/>}</Fragment>)}
      </div>
    </div>
  </section>;
}
