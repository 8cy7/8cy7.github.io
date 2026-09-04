'use client';

import { motion, useReducedMotion } from 'framer-motion';

// Keep the illustrations available while previewing the text-only layout.
const showServiceImages = false;

const services = [
  { name: 'WEB DEVELOPMENT', description: 'Responsive websites and web apps built around clear interfaces, fast performance, and everyday usability.', image: 'web' },
  { name: 'MOBILE APPS', description: 'Thoughtful mobile experiences that turn useful ideas into intuitive apps for everyday life.', image: 'mobile' },
  { name: 'AI & AUTOMATION', description: 'Practical AI tools and automated workflows that handle repetitive tasks and make work easier.', image: 'ai' },
  { name: 'BACKEND & APIs', description: 'Reliable APIs, databases, and integrations that connect your tools and keep your product running.' },
  { name: 'PRODUCT DEVELOPMENT', description: 'From the first prototype to a working release, bringing the pieces together and improving them along the way.' },
];

export function Services() {
  const reduced = useReducedMotion();
  return <section className="services-section" id="services" aria-labelledby="services-heading">
    <div className="shell services-shell">
      <header className="services-heading">
        <p>// SERVICES</p>
        <h2 id="services-heading">WHAT I BUILD<span aria-hidden="true">.</span></h2>
      </header>
      <ol className="services-list">
        {services.map((service, index) => <motion.li
          key={service.name}
          className={`service-item${showServiceImages && service.image ? ' has-art' : ''}`}
          initial={false}
          whileInView={reduced ? undefined : { opacity: [0.65, 1], y: [16, 0] }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.45, delay: index * 0.1 }}
        >
          <span className="service-number" aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
          <h3>{service.name}</h3>
          <p>{service.description}</p>
          {showServiceImages && service.image && <img className={`service-art service-art-${service.image}`} src={`/assets/services/service-${service.image}.png`} width="1254" height="1254" alt="" loading="lazy" decoding="async" />}
        </motion.li>)}
      </ol>
    </div>
  </section>;
}
