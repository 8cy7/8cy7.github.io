'use client';

import { motion, useReducedMotion } from 'framer-motion';

const achievements = [
  ['800K+', 'SAR E-COMMERCE SALES'],
  ['04', 'STORES FOUNDED'],
  ['02', 'FIRST-PLACE WINS'],
  ['07+', 'HACKATHONS'],
  ['4.65', 'SOFTWARE ENGINEERING GPA'],
];

export function About() {
  const reduced = useReducedMotion();
  const reveal = reduced ? undefined : { opacity: [0.55, 1], y: [18, 0] };

  return <section className="about-section" id="about" aria-labelledby="about-heading">
    <div className="shell about-shell">
      <motion.header className="about-heading" initial={false} whileInView={reveal} viewport={{ once: true, amount: 0.3 }}>
        <p>// PROFILE 01</p>
        <h2 id="about-heading">ABOUT ME<span aria-hidden="true">.</span></h2>
      </motion.header>

      <motion.article className="profile-card" initial={false} whileInView={reveal} viewport={{ once: true, amount: 0.15 }} transition={{ delay: 0.08 }}>
        <div className="profile-window-bar" aria-hidden="true"><span>AAF_PROFILE.EXE</span><i /><span>RIYADH / ONLINE ●</span></div>
        <div className="profile-main">
          <div className="profile-role" aria-label="Engineer, builder and entrepreneur">
            <span>ENGINEER.</span><span>BUILDER.</span><span>ENTREPRENEUR.</span>
          </div>
          <div className="about-copy">
            <p className="profile-label">// WHOAMI</p>
          <p className="about-lead">I build production-ready mobile and web products, from the interface people use to the systems and releases behind it.</p>
          <p>At Sanal, I work across React Native, APIs, localization, quality assurance, and AI integrations using the Model Context Protocol. Seven years in e-commerce taught me to think beyond code and focus on what creates real value.</p>
          <div className="about-status"><span aria-hidden="true">●</span><div><small>CURRENT FOCUS</small><strong>AI-READY COMMERCE &amp; MOBILE PRODUCTS</strong></div></div>
          </div>
        </div>
        <ol className="achievement-grid" aria-label="Selected achievements">
        {achievements.map(([value, label]) => <li key={label}>
          <span>{value}</span><p>{label}</p>
        </li>)}
        </ol>
      </motion.article>
    </div>
  </section>;
}
