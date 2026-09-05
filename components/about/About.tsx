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
      <div className="about-intro">
        <motion.header className="about-heading" initial={false} whileInView={reveal} viewport={{ once: true, amount: 0.3 }}>
          <p>// ABOUT ME</p>
          <h2 id="about-heading">ENGINEER.<br />BUILDER.<br /><span>ENTREPRENEUR.</span></h2>
        </motion.header>
        <motion.div className="about-copy" initial={false} whileInView={reveal} viewport={{ once: true, amount: 0.3 }} transition={{ delay: 0.1 }}>
          <div className="about-readout" aria-hidden="true"><span>PROFILE_READOUT</span><i /><span>01</span></div>
          <p className="about-lead">I build production-ready mobile and web products, from the interface people use to the systems and releases behind it.</p>
          <p>At Sanal, I work across React Native, APIs, localization, quality assurance, and AI integrations using the Model Context Protocol. Seven years in e-commerce taught me to think beyond code and focus on what creates real value.</p>
          <div className="about-status"><span aria-hidden="true">●</span><div><small>CURRENT FOCUS</small><strong>AI-READY COMMERCE &amp; MOBILE PRODUCTS</strong></div></div>
        </motion.div>
      </div>

      <ol className="achievement-grid" aria-label="Selected achievements">
        {achievements.map(([value, label], index) => <motion.li key={label} initial={false} whileInView={reveal} viewport={{ once: true, amount: 0.5 }} transition={{ delay: index * 0.06 }}>
          <span>{value}</span><p>{label}</p>
        </motion.li>)}
      </ol>
    </div>
  </section>;
}
