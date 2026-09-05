import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '99 Names of Allah — Abdulaziz Alfahad',
  description: 'A native Swift iOS learning app designed and built by software engineer Abdulaziz Alfahad.',
};

const screens = [
  { src: '/assets/projects/asma-allah/daily-name.webp', alt: 'Daily Name of Allah screen showing Al-Muhyi in Arabic and English', number: '01', label: 'A NAME EACH DAY' },
  { src: '/assets/projects/asma-allah/name-detail.webp', alt: 'Name detail screen with meaning, Quranic evidence, and reflections', number: '02', label: 'MEANING & EVIDENCE' },
  { src: '/assets/projects/asma-allah/all-names.webp', alt: 'Searchable list of the 99 Names with progress and favorites', number: '03', label: 'SEARCH & PROGRESS' },
  { src: '/assets/projects/asma-allah/settings.webp', alt: 'Arabic settings screen with notifications and appearance controls', number: '04', label: 'PERSONAL SETTINGS' },
  { src: '/assets/projects/asma-allah/completed.webp', alt: 'Completed learning screen with reflections and a story', number: '05', label: 'LEARNING COMPLETE' },
];

export default function NamesOfAllahPage() {
  return <main className="case-page asma-case" id="main">
    <nav className="case-nav shell" aria-label="Project navigation">
      <a className="case-brand" href="/">✳ <span>AAF.</span></a>
      <a className="case-back" href="/#work">← BACK TO PROJECTS</a>
    </nav>

    <section className="case-hero" aria-labelledby="case-title">
      <div className="shell">
        <p className="case-kicker">// PROJECT 02 · PERSONAL iOS APP</p>
        <h1 id="case-title">99 NAMES<br /><span>OF ALLAH.</span></h1>
        <div className="case-summary-row">
          <p>An Arabic-first learning experience that makes the Names of Allah easier to understand, remember, and reflect on—one name at a time.</p>
          <dl>
            <div><dt>ROLE</dt><dd>iOS DEVELOPER</dd></div>
            <div><dt>PLATFORM</dt><dd>iPHONE</dd></div>
            <div><dt>STACK</dt><dd>SWIFT · iOS</dd></div>
            <div><dt>RELEASE</dt><dd>PREVIOUSLY PUBLISHED ON APP STORE</dd></div>
          </dl>
        </div>
      </div>
    </section>

    <section className="case-overview shell" aria-labelledby="overview-title">
      <header><p>// THE PROJECT</p><h2 id="overview-title">LEARN,<br />REFLECT,<br /><span>REMEMBER.</span></h2></header>
      <div className="case-overview-copy">
        <p className="case-lead">I built this native iOS app in Swift to turn learning the 99 Names into a calm, structured daily habit.</p>
        <p>Each name combines its Arabic form and English meaning with supporting evidence, practical reflections, and a simple sense of progress. The app was released on the App Store; its listing is currently unavailable after the developer signing certificate expired.</p>
        <ul><li>Daily learning experience in Arabic</li><li>Meanings, evidence, reflections, and stories</li><li>Search, favorites, and learning progress</li><li>Daily notifications and appearance settings</li></ul>
      </div>
    </section>

    <section className="case-gallery" aria-labelledby="gallery-title">
      <div className="shell"><p className="case-gallery-kicker">// PRODUCT WALKTHROUGH</p><h2 id="gallery-title">ONE NAME<br />AT A TIME<span>.</span></h2></div>
      <div className="case-screens shell">
        {screens.map(screen => <figure key={screen.src}>
          <div className="phone-frame"><img src={screen.src} alt={screen.alt} width="1290" height="2796" loading="lazy" decoding="async" /></div>
          <figcaption><span>{screen.number}</span>{screen.label}</figcaption>
        </figure>)}
      </div>
    </section>

    <section className="case-next">
      <div className="shell"><p>// END OF CASE 02</p><a href="/#work"><span>BACK TO</span><strong>ALL PROJECTS →</strong></a></div>
    </section>
  </main>;
}
