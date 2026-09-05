export function Footer() {
  return <footer className="site-footer" id="contact" aria-labelledby="contact-heading">
    <div className="shell footer-shell">
      <p className="footer-eyebrow">// HAVE AN IDEA?</p>
      <div className="footer-title-row">
        <h2 id="contact-heading"><span>LET&apos;S BUILD</span><span>SOMETHING COOL.</span></h2>
        <span className="footer-star" aria-hidden="true">✳</span>
      </div>

      <div className="footer-links">
        <a href="mailto:az.m.n.2003@gmail.com" aria-label="Email Abdulaziz Alfahad">
          <span className="footer-link-number">01</span>
          <strong>EMAIL ME</strong>
          <small>AZ.M.N.2003@GMAIL.COM</small>
          <b aria-hidden="true">↗</b>
        </a>
        <a href="https://www.linkedin.com/in/abdulaziz-alfahad-b3b2a2243" target="_blank" rel="noreferrer" aria-label="Abdulaziz Alfahad on LinkedIn">
          <span className="footer-link-number">02</span>
          <strong>LINKEDIN</strong>
          <small>LET&apos;S CONNECT</small>
          <b aria-hidden="true">↗</b>
        </a>
      </div>

      <div className="footer-bottom">
        <a className="footer-brand" href="#" aria-label="Back to the top"><span aria-hidden="true">✳</span> AAF.</a>
        <p>RIYADH, SAUDI ARABIA</p>
        <p>© 2026 ABDULAZIZ ALFAHAD</p>
        <a className="back-to-top" href="#">BACK TO TOP ↑</a>
      </div>
    </div>
  </footer>;
}
