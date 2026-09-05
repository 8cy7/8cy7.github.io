'use client';
import { motion, useTransform, type MotionValue } from 'framer-motion';
import type { CSSProperties } from 'react';
import type { Project } from './project-data';
import { LiveProjectButton } from './LiveProjectButton';

type Props = { project: Project; index: number; totalCards: number; progress: MotionValue<number>; reducedMotion: boolean };
export function ProjectCard({ project, index, totalCards, progress, reducedMotion }: Props) {
  const targetScale = 1 - (totalCards - 1 - index) * 0.03;
  const scale = useTransform(progress, [index / totalCards, 1], [1, targetScale]);
  const position = { '--card-offset': `${index * 28}px`, zIndex: index + 1 } as CSSProperties;
  return <div className="project-step" style={position}>
    <motion.article className={`project-card${project.detailUrl ? ' has-detail' : ''}${project.format === 'mobile' ? ' mobile-project' : ''}`} style={{ scale: reducedMotion ? 1 : scale }} aria-labelledby={`project-title-${project.id}`}>
      {project.detailUrl && <a className="project-card-hitbox" href={project.detailUrl} aria-label={`View ${project.name} case study`} />}
      <div className="project-window-bar">
        <span>PROJECT_{project.id}</span>
        <span className="project-window-marks" aria-hidden="true"><i/><i/><i/></span>
      </div>
      <div className="project-content">
        <header className="project-card-header">
          <span className="project-number" aria-hidden="true">{project.id}</span>
          <div className="project-identity"><p className="project-category">// {project.category}</p><h3 id={`project-title-${project.id}`}>{project.name}</h3></div>
          {project.detailUrl ? <a className="live-project case-study-link" href={project.detailUrl}>VIEW CASE <span aria-hidden="true">→</span></a> : <LiveProjectButton href={project.liveUrl} name={project.name}/>}
        </header>
        <div className="project-gallery">
          <div className="project-gallery-left">
            {project.images.slice(0, 2).map((image) => <img key={image.src} src={image.src} alt={image.alt} width={1280} height={956} loading="lazy" decoding="async" draggable={false}/>) }
          </div>
          <img className="project-gallery-tall" src={project.images[2].src} alt={project.images[2].alt} width={1280} height={956} loading="lazy" decoding="async" draggable={false}/>
        </div>
      </div>
    </motion.article>
  </div>;
}
