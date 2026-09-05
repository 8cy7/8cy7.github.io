import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sanal Mobile App — Abdulaziz Alfahad',
  description: 'A conversational commerce mobile app case study by software engineer Abdulaziz Alfahad.',
};

const screens = [
  { src: '/assets/projects/sanal-mobile/home.png', alt: 'Sanal conversational home screen in Arabic', number: '01', label: 'CONVERSATIONAL HOME' },
  { src: '/assets/projects/sanal-mobile/profile.png', alt: 'Sanal profile and account settings screen', number: '02', label: 'PROFILE & ORDERS' },
  { src: '/assets/projects/sanal-mobile/recommendations.png', alt: 'AI-assisted product recommendations in Sanal', number: '03', label: 'AI RECOMMENDATIONS' },
  { src: '/assets/projects/sanal-mobile/product.png', alt: 'Sanal product detail and customization sheet', number: '04', label: 'PRODUCT DETAILS' },
  { src: '/assets/projects/sanal-mobile/checkout.png', alt: 'Sanal order summary and checkout flow', number: '05', label: 'ORDER SUMMARY' },
];

export default function SanalMobileAppPage() {
  return <main className="case-page" id="main">
    <nav className="case-nav shell" aria-label="Project navigation">
      <a className="case-brand" href="/">✳ <span>AAF.</span></a>
      <a className="case-back" href="/#work">← BACK TO PROJECTS</a>
    </nav>

    <section className="case-hero" aria-labelledby="case-title">
      <div className="shell">
        <p className="case-kicker">// PROJECT 01 · CLIENT WORK · 2026</p>
        <h1 id="case-title">SANAL<br /><span>MOBILE APP.</span></h1>
        <div className="case-summary-row">
          <p>A conversational commerce experience that helps customers discover products, manage their account, and move from a request to checkout inside one mobile flow.</p>
          <dl>
            <div><dt>ROLE</dt><dd>SOFTWARE ENGINEER</dd></div>
            <div><dt>PLATFORMS</dt><dd>iOS &amp; ANDROID</dd></div>
            <div><dt>STACK</dt><dd>REACT NATIVE · EXPO · TYPESCRIPT</dd></div>
          </dl>
        </div>
      </div>
    </section>

    <section className="case-overview shell" aria-labelledby="overview-title">
      <header><p>// THE PROJECT</p><h2 id="overview-title">COMMERCE,<br />BUILT AROUND<br /><span>CONVERSATION.</span></h2></header>
      <div className="case-overview-copy">
        <p className="case-lead">I develop and maintain Sanal&apos;s consumer mobile application, taking features from implementation through native builds, quality assurance, and release.</p>
        <p>My work spans the mobile client, APIs, Arabic product experiences, production diagnosis, and the systems required to ship reliably on both platforms.</p>
        <ul><li>Mobile features for iOS and Android</li><li>Arabic-first interface and localization</li><li>Release QA and production issue diagnosis</li><li>AI commerce integration using MCP</li></ul>
      </div>
    </section>

    <section className="case-gallery" aria-labelledby="gallery-title">
      <div className="shell"><p className="case-gallery-kicker">// PRODUCT WALKTHROUGH</p><h2 id="gallery-title">FROM ASK<br />TO ORDER<span>.</span></h2></div>
      <div className="case-screens shell">
        {screens.map(screen => <figure key={screen.src}>
          <div className="phone-frame"><img src={screen.src} alt={screen.alt} width="1290" height="2796" loading="lazy" decoding="async" /></div>
          <figcaption><span>{screen.number}</span>{screen.label}</figcaption>
        </figure>)}
      </div>
    </section>

    <section className="case-next">
      <div className="shell"><p>// END OF CASE 01</p><a href="/#work"><span>BACK TO</span><strong>ALL PROJECTS →</strong></a></div>
    </section>
  </main>;
}
