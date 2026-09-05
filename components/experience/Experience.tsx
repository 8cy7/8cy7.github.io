'use client';

import { motion, useReducedMotion } from 'framer-motion';

const experience = [
  {
    number: '01', role: 'SOFTWARE ENGINEER', company: 'SANAL', date: '2026 — PRESENT', location: 'RIYADH, SAUDI ARABIA',
    details: ['Build and release the consumer mobile app for iOS and Android with React Native and Expo.', 'Prototyped an MCP integration layer that exposes the product catalogue to AI hosts.', 'Lead release QA, production issue diagnosis, and Arabic localization across the admin dashboard.'],
  },
  {
    number: '02', role: 'E-COMMERCE ENTREPRENEUR', company: 'INDEPENDENT', date: '7+ YEARS', location: 'SAUDI ARABIA',
    details: ['Founded and managed four online stores that generated more than 800,000 SAR in sales.', 'Led a four-person team across logistics, marketing, customer service, and daily operations.'],
  },
  {
    number: '03', role: 'FREELANCE WEB DEVELOPER', company: 'PROJECT BASED', date: 'SELECTED CLIENT WORK', location: 'REMOTE',
    details: ['Created three interactive employee-engagement websites with activities and games.', 'Built a professional portfolio and services showcase for Juz Company.'],
  },
];

export function Experience() {
  const reduced = useReducedMotion();
  const reveal = reduced ? undefined : { opacity: [0.55, 1], y: [20, 0] };

  return <section className="experience-section" id="experience" aria-labelledby="experience-heading">
    <div className="shell experience-shell">
      <header className="experience-heading">
        <p>// WHERE I&apos;VE BUILT</p>
        <h2 id="experience-heading">EXPERIENCE<span aria-hidden="true">.</span></h2>
      </header>

      <div className="experience-list">
        {experience.map((item, index) => <motion.article className="experience-item" key={item.number} initial={false} whileInView={reveal} viewport={{ once: true, amount: 0.2 }} transition={{ delay: index * 0.08 }}>
          <span className="experience-number" aria-hidden="true">{item.number}</span>
          <div className="experience-meta"><span>{item.date}</span><span>{item.location}</span></div>
          <div className="experience-body">
            <p>{item.company}</p><h3>{item.role}</h3>
            <ul>{item.details.map(detail => <li key={detail}>{detail}</li>)}</ul>
          </div>
        </motion.article>)}
      </div>

      <div className="education-strip">
        <span>EDUCATION_2026</span><strong>BACHELOR OF SOFTWARE ENGINEERING</strong><p>Prince Sattam Bin Abdulaziz University <i /> GPA 4.65</p>
      </div>
    </div>
  </section>;
}
