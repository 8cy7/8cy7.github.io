import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sanal Company Website — Abdulaziz Alfahad',
  description: 'A bilingual company website for Sanal and its AI commerce platform.',
};

const screens = [
  { src: '/assets/projects/sanal-website/hero.webp', alt: 'Sanal Arabic homepage presenting AI commerce infrastructure', number: '01', label: 'COMPANY HERO' },
  { src: '/assets/projects/sanal-website/platform.webp', alt: 'Diagram connecting AI agents to commerce through Sanal', number: '02', label: 'PLATFORM EXPLAINER' },
  { src: '/assets/projects/sanal-website/sectors.webp', alt: 'Sanal website showing supported business sectors', number: '03', label: 'SUPPORTED SECTORS' },
  { src: '/assets/projects/sanal-website/cta.webp', alt: 'Sanal website call to action for a product demonstration', number: '04', label: 'DEMO CONVERSION' },
];

export default function SanalCompanyWebsitePage() {
  return <main className="case-page" id="main">
    <nav className="case-nav shell" aria-label="Project navigation">
      <a className="case-brand" href="/">✳ <span>AAF.</span></a>
      <a className="case-back" href="/#work">← BACK TO PROJECTS</a>
    </nav>

    <section className="case-hero" aria-labelledby="case-title">
      <div className="shell">
        <p className="case-kicker">// PROJECT 05 · CLIENT WEBSITE</p>
        <h1 id="case-title">SANAL COMPANY<br /><span>WEBSITE.</span></h1>
        <div className="case-summary-row">
          <p>A bilingual company website that explains a new AI-commerce product in clear terms and guides businesses toward requesting a product demonstration.</p>
          <dl>
            <div><dt>ROLE</dt><dd>WEB DEVELOPER</dd></div>
            <div><dt>CLIENT</dt><dd>SANAL</dd></div>
            <div><dt>TYPE</dt><dd>COMPANY WEBSITE</dd></div>
            <div><dt>LANGUAGE</dt><dd>ARABIC &amp; ENGLISH</dd></div>
          </dl>
        </div>
      </div>
    </section>

    <section className="case-overview shell" aria-labelledby="overview-title">
      <header><p>// THE PROJECT</p><h2 id="overview-title">EXPLAIN THE<br />PRODUCT.<br /><span>CREATE TRUST.</span></h2></header>
      <div className="case-overview-copy">
        <p className="case-lead">I built Sanal&apos;s company website to make its role between AI agents and commerce immediately understandable.</p>
        <p>The site moves from a direct value proposition into a visual platform explanation, supported business sectors, capabilities, team information, and frequently asked questions before ending with a focused demonstration request.</p>
        <ul><li>Responsive Arabic and English experience</li><li>Clear AI-commerce product positioning</li><li>Visual platform and workflow explanation</li><li>Sector pages and demo conversion journey</li></ul>
      </div>
    </section>

    <section className="case-gallery web-case-gallery" aria-labelledby="gallery-title">
      <div className="shell"><p className="case-gallery-kicker">// WEBSITE WALKTHROUGH</p><h2 id="gallery-title">FROM COMPLEXITY<br />TO CLARITY<span>.</span></h2></div>
      <div className="website-screens shell">
        {screens.map(screen => <figure key={screen.src}>
          <div className="browser-frame"><div className="browser-chrome" aria-hidden="true"><i /><i /><i /><span>SANAL · AI COMMERCE</span></div><img src={screen.src} alt={screen.alt} width="3420" height="1968" loading="lazy" decoding="async" /></div>
          <figcaption><span>{screen.number}</span>{screen.label}</figcaption>
        </figure>)}
      </div>
    </section>

    <section className="case-next">
      <div className="shell"><p>// END OF CASE 05</p><a href="/#work"><span>BACK TO</span><strong>ALL PROJECTS →</strong></a></div>
    </section>
  </main>;
}
