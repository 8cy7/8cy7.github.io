import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'SPL CX Employee Event — Abdulaziz Alfahad',
  description: 'Three interactive employee event websites created for SPL and World Customer Experience Day.',
};

const screens = [
  { src: '/assets/projects/spl-event/event-hub.webp', alt: 'Arabic SPL World Customer Experience Day activity hub', number: '01', label: 'EVENT ACTIVITY HUB' },
  { src: '/assets/projects/spl-event/service-quiz.webp', alt: 'Connect the right SPL service knowledge challenge', number: '02', label: 'SERVICE KNOWLEDGE' },
  { src: '/assets/projects/spl-event/icon-match.webp', alt: 'Match SPL services with the correct icons game', number: '03', label: 'ICON MATCHING' },
  { src: '/assets/projects/spl-event/levels.webp', alt: 'Difficulty selection for the spot the difference challenge', number: '04', label: 'CHALLENGE LEVELS' },
  { src: '/assets/projects/spl-event/spot-difference.webp', alt: 'SPL spot the difference employee challenge', number: '05', label: 'SPOT THE DIFFERENCE' },
  { src: '/assets/projects/spl-event/product-sort.webp', alt: 'Drag and drop SPL product sorting activity', number: '06', label: 'PRODUCT SORTING' },
  { src: '/assets/projects/spl-event/knowledge-quiz.webp', alt: 'SPL employee knowledge quiz question', number: '07', label: 'SPL KNOWLEDGE QUIZ' },
];

export default function SplCxEmployeeEventPage() {
  return <main className="case-page" id="main">
    <nav className="case-nav shell" aria-label="Project navigation">
      <a className="case-brand" href="/">✳ <span>AAF.</span></a>
      <a className="case-back" href="/#work">← BACK TO PROJECTS</a>
    </nav>

    <section className="case-hero" aria-labelledby="case-title">
      <div className="shell">
        <p className="case-kicker">// PROJECT 04 · CLIENT EVENT EXPERIENCE</p>
        <h1 id="case-title">SPL CX<br /><span>EMPLOYEE EVENT.</span></h1>
        <div className="case-summary-row">
          <p>Three interactive websites built as one connected employee experience for SPL&apos;s World Customer Experience Day activation.</p>
          <dl>
            <div><dt>ROLE</dt><dd>WEB DEVELOPER</dd></div>
            <div><dt>CLIENT</dt><dd>SPL</dd></div>
            <div><dt>FORMAT</dt><dd>03 INTERACTIVE EVENT SITES</dd></div>
            <div><dt>AUDIENCE</dt><dd>SPL EMPLOYEES</dd></div>
          </dl>
        </div>
      </div>
    </section>

    <section className="case-overview shell" aria-labelledby="overview-title">
      <header><p>// THE EXPERIENCE</p><h2 id="overview-title">LEARN,<br />PLAY,<br /><span>WIN.</span></h2></header>
      <div className="case-overview-copy">
        <p className="case-lead">I turned customer-experience learning into a set of quick, approachable challenges for employees at the event.</p>
        <p>The three websites worked together as one activation: introducing the activities, testing knowledge of SPL services and products, and keeping participation engaging through scores, levels, visual puzzles, and prizes.</p>
        <ul><li>Three connected interactive event websites</li><li>Arabic and English employee experiences</li><li>Quizzes, matching, sorting, and visual challenges</li><li>Scoring and level-based participation</li></ul>
      </div>
    </section>

    <section className="case-gallery web-case-gallery" aria-labelledby="gallery-title">
      <div className="shell"><p className="case-gallery-kicker">// EVENT WALKTHROUGH</p><h2 id="gallery-title">THREE SITES.<br />ONE EXPERIENCE<span>.</span></h2></div>
      <div className="website-screens spl-event-screens shell">
        {screens.map(screen => <figure key={screen.src}>
          <div className="browser-frame"><div className="browser-chrome" aria-hidden="true"><i /><i /><i /><span>SPL · CX EVENT</span></div><img src={screen.src} alt={screen.alt} width="3420" height="1964" loading="lazy" decoding="async" /></div>
          <figcaption><span>{screen.number}</span>{screen.label}</figcaption>
        </figure>)}
      </div>
    </section>

    <section className="case-next">
      <div className="shell"><p>// END OF CASE 04</p><a href="/#work"><span>BACK TO</span><strong>ALL PROJECTS →</strong></a></div>
    </section>
  </main>;
}
