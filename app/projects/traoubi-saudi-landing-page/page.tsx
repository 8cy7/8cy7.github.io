import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Traoubi Saudi Landing Page — Abdulaziz Alfahad',
  description: 'An Arabic product landing page for Traoubi’s exclusive distributor in Saudi Arabia.',
};

const screens = [
  { src: '/assets/projects/traoubi/hero.webp', alt: 'Traoubi Saudi landing page with a grape drink bottle and bold Arabic headline', number: '01', label: 'PRODUCT HERO' },
  { src: '/assets/projects/traoubi/flavors.webp', alt: 'Traoubi flavor world and original grape bottle showcase', number: '02', label: 'FLAVOR WORLD' },
  { src: '/assets/projects/traoubi/story.webp', alt: 'Traoubi product story and sparkling grape production journey', number: '03', label: 'PRODUCT STORY' },
  { src: '/assets/projects/traoubi/packages.webp', alt: 'Traoubi bundle options and cart selection interface', number: '04', label: 'PACKAGE SELECTION' },
];

export default function TraoubiSaudiLandingPage() {
  return <main className="case-page" id="main">
    <nav className="case-nav shell" aria-label="Project navigation">
      <a className="case-brand" href="/">✳ <span>AAF.</span></a>
      <a className="case-back" href="/#work">← BACK TO PROJECTS</a>
    </nav>

    <section className="case-hero" aria-labelledby="case-title">
      <div className="shell">
        <p className="case-kicker">// PROJECT 06 · CLIENT LANDING PAGE</p>
        <h1 id="case-title">TRAOUBI SAUDI<br /><span>LANDING PAGE.</span></h1>
        <div className="case-summary-row">
          <p>An Arabic product landing page that introduces Traoubi in Saudi Arabia and moves visitors from bold product storytelling into a simple shopping journey.</p>
          <dl>
            <div><dt>ROLE</dt><dd>WEB DEVELOPER</dd></div>
            <div><dt>CLIENT</dt><dd>TRAOUBI KSA</dd></div>
            <div><dt>TYPE</dt><dd>PRODUCT LANDING PAGE</dd></div>
            <div><dt>MARKET</dt><dd>SAUDI ARABIA</dd></div>
          </dl>
        </div>
      </div>
    </section>

    <section className="case-overview shell" aria-labelledby="overview-title">
      <header><p>// THE PROJECT</p><h2 id="overview-title">A PRODUCT<br />STORY BUILT<br /><span>TO CONVERT.</span></h2></header>
      <div className="case-overview-copy">
        <p className="case-lead">I created a lively Arabic-first landing experience for Traoubi&apos;s exclusive distributor in Saudi Arabia.</p>
        <p>The page gives the drink a distinct digital personality through motion-led product presentation, a flavor-focused visual world, brand storytelling, and a direct path to choosing bundles and adding them to the cart.</p>
        <ul><li>Responsive Arabic-first product experience</li><li>Bold product and flavor storytelling</li><li>Interactive brand and production journey</li><li>Bundle selection and shopping conversion</li></ul>
      </div>
    </section>

    <section className="case-gallery web-case-gallery" aria-labelledby="gallery-title">
      <div className="shell"><p className="case-gallery-kicker">// LANDING PAGE WALKTHROUGH</p><h2 id="gallery-title">DISCOVER.<br />DESIRE. BUY<span>.</span></h2></div>
      <div className="website-screens shell">
        {screens.map(screen => <figure key={screen.src}>
          <div className="browser-frame"><div className="browser-chrome" aria-hidden="true"><i /><i /><i /><span>TRAOUBI · SAUDI ARABIA</span></div><img src={screen.src} alt={screen.alt} width="3420" height="1960" loading="lazy" decoding="async" /></div>
          <figcaption><span>{screen.number}</span>{screen.label}</figcaption>
        </figure>)}
      </div>
    </section>

    <section className="case-next">
      <div className="shell"><p>// END OF CASE 06</p><a href="/#work"><span>BACK TO</span><strong>ALL PROJECTS →</strong></a></div>
    </section>
  </main>;
}
