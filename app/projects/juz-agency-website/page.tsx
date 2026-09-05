import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Juz Agency Website — Abdulaziz Alfahad',
  description: 'A bilingual agency website designed and developed by software engineer Abdulaziz Alfahad.',
};

const screens = [
  { src: '/assets/projects/juz-agency/hero.webp', alt: 'Juz Agency Arabic homepage with an immersive brand hero', number: '01', label: 'BRAND-LED HERO' },
  { src: '/assets/projects/juz-agency/media-production.webp', alt: 'Juz Agency visual production service and video portfolio section', number: '02', label: 'VISUAL PRODUCTION' },
  { src: '/assets/projects/juz-agency/media-work.webp', alt: 'Juz Agency media work showcase with video projects', number: '03', label: 'MEDIA SHOWCASE' },
  { src: '/assets/projects/juz-agency/projects.webp', alt: 'Juz Agency selected branding projects gallery', number: '04', label: 'SELECTED PROJECTS' },
];

export default function JuzAgencyWebsitePage() {
  return <main className="case-page" id="main">
    <nav className="case-nav shell" aria-label="Project navigation">
      <a className="case-brand" href="/">✳ <span>AAF.</span></a>
      <a className="case-back" href="/#work">← BACK TO PROJECTS</a>
    </nav>

    <section className="case-hero" aria-labelledby="case-title">
      <div className="shell">
        <p className="case-kicker">// PROJECT 03 · CLIENT WEBSITE</p>
        <h1 id="case-title">JUZ AGENCY<br /><span>WEBSITE.</span></h1>
        <div className="case-summary-row">
          <p>A visual company website that introduces Juz, presents its creative services, and turns a broad body of media and branding work into a clear digital experience.</p>
          <dl>
            <div><dt>ROLE</dt><dd>WEB DEVELOPER</dd></div>
            <div><dt>TYPE</dt><dd>COMPANY WEBSITE</dd></div>
            <div><dt>LANGUAGE</dt><dd>ARABIC &amp; ENGLISH</dd></div>
            <div><dt>FOCUS</dt><dd>SERVICES · WORK · CONTACT</dd></div>
          </dl>
        </div>
      </div>
    </section>

    <section className="case-overview shell" aria-labelledby="overview-title">
      <header><p>// THE PROJECT</p><h2 id="overview-title">FROM THE<br />IDEA TO<br /><span>THE IMPACT.</span></h2></header>
      <div className="case-overview-copy">
        <p className="case-lead">I created a focused digital presence for Juz that lets its work carry the story.</p>
        <p>The experience combines an atmospheric Arabic-first visual direction with direct navigation, bilingual access, service pages, media showcases, selected projects, and clear routes to contact the agency.</p>
        <ul><li>Responsive company and services website</li><li>Arabic-first interface with English access</li><li>Video-led media production showcases</li><li>Project portfolio and contact journeys</li></ul>
      </div>
    </section>

    <section className="case-gallery web-case-gallery" aria-labelledby="gallery-title">
      <div className="shell"><p className="case-gallery-kicker">// WEBSITE WALKTHROUGH</p><h2 id="gallery-title">WORK THAT<br />TELLS THE STORY<span>.</span></h2></div>
      <div className="website-screens shell">
        {screens.map(screen => <figure key={screen.src}>
          <div className="browser-frame"><div className="browser-chrome" aria-hidden="true"><i /><i /><i /><span>JUZ.AGENCY</span></div><img src={screen.src} alt={screen.alt} width="3420" height="1960" loading="lazy" decoding="async" /></div>
          <figcaption><span>{screen.number}</span>{screen.label}</figcaption>
        </figure>)}
      </div>
    </section>

    <section className="case-next">
      <div className="shell"><p>// END OF CASE 03</p><a href="/#work"><span>BACK TO</span><strong>ALL PROJECTS →</strong></a></div>
    </section>
  </main>;
}
