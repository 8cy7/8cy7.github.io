import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sharh AI Learning Platform — Abdulaziz Alfahad',
  description: 'An Agentathon project that turns PDF files into interactive audiovisual lessons and understanding checks.',
};

const screens = [
  { src: '/assets/projects/sharh-ai/hero.webp', alt: 'Sharh AI landing page introducing audiovisual AI explanations', number: '01', label: 'PRODUCT PROMISE' },
  { src: '/assets/projects/sharh-ai/features.webp', alt: 'Sharh platform feature overview for summarization, video, quizzes, and support', number: '02', label: 'LEARNING FEATURES' },
  { src: '/assets/projects/sharh-ai/dashboard.webp', alt: 'Sharh student dashboard with learning activity and PDF upload', number: '03', label: 'STUDENT DASHBOARD' },
  { src: '/assets/projects/sharh-ai/upload.webp', alt: 'Sharh PDF upload experience for creating a new lesson', number: '04', label: 'PDF TO LESSON' },
  { src: '/assets/projects/sharh-ai/progress.webp', alt: 'Sharh progress analytics with quiz scores and learning topics', number: '05', label: 'UNDERSTANDING ANALYTICS' },
];

export default function SharhAiLearningPlatformPage() {
  return <main className="case-page" id="main">
    <nav className="case-nav shell" aria-label="Project navigation">
      <a className="case-brand" href="/">✳ <span>AAF.</span></a>
      <a className="case-back" href="/#work">← BACK TO PROJECTS</a>
    </nav>

    <section className="case-hero" aria-labelledby="case-title">
      <div className="shell">
        <p className="case-kicker">// PROJECT 07 · AGENTATHON HACKATHON</p>
        <h1 id="case-title">SHARH AI<br /><span>LEARNING PLATFORM.</span></h1>
        <div className="case-summary-row">
          <p>An AI learning experience that transforms a PDF into a short audiovisual explanation, then checks whether the learner truly understood it.</p>
          <dl>
            <div><dt>ROLE</dt><dd>SOFTWARE ENGINEER</dd></div>
            <div><dt>EVENT</dt><dd>AGENTATHON</dd></div>
            <div><dt>TYPE</dt><dd>AI LEARNING PLATFORM</dd></div>
            <div><dt>INPUT</dt><dd>PDF DOCUMENTS</dd></div>
          </dl>
        </div>
      </div>
    </section>

    <section className="case-overview shell" aria-labelledby="overview-title">
      <header><p>// THE IDEA</p><h2 id="overview-title">UPLOAD.<br />WATCH.<br /><span>UNDERSTAND.</span></h2></header>
      <div className="case-overview-copy">
        <p className="case-lead">During Agentathon, I worked with the team on Sharh: a faster, more engaging way to learn from dense course material.</p>
        <p>The platform reads and structures an uploaded PDF, produces an audiovisual motion-graphics explanation, generates questions to test comprehension, and tracks the learner&apos;s progress and weak topics over time.</p>
        <ul><li>PDF parsing and AI-assisted lesson generation</li><li>Voice, visuals, and motion-based explanations</li><li>Generated quizzes that test understanding</li><li>Dashboard, progress, and topic-level insights</li></ul>
      </div>
    </section>

    <section className="case-gallery web-case-gallery" aria-labelledby="gallery-title">
      <div className="shell"><p className="case-gallery-kicker">// PRODUCT WALKTHROUGH</p><h2 id="gallery-title">FROM FILE<br />TO UNDERSTANDING<span>.</span></h2></div>
      <div className="website-screens sharh-screens shell">
        {screens.map(screen => <figure key={screen.src}>
          <div className="browser-frame"><div className="browser-chrome" aria-hidden="true"><i /><i /><i /><span>SHARH · AI LEARNING</span></div><img src={screen.src} alt={screen.alt} width="3420" height="1964" loading="lazy" decoding="async" /></div>
          <figcaption><span>{screen.number}</span>{screen.label}</figcaption>
        </figure>)}
      </div>
    </section>

    <section className="case-next">
      <div className="shell"><p>// END OF CASE 07</p><a href="/#work"><span>BACK TO</span><strong>ALL PROJECTS →</strong></a></div>
    </section>
  </main>;
}
