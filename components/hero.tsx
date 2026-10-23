import { ArrowDown, ArrowUpRight, Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";

export function Hero() {
  return (
    <section id="home" className="hero-shell">
      <div className="hero-grid section-wrap">
        <div className="hero-copy">
          <div className="status-line"><span /> Available for SDE roles <i /> Open to relocation</div>
          <p className="hero-kicker">Full-stack applications · Backend microservices · Cloud infrastructure</p>
          <h1>Aanchal<br /><span>Sukhrani</span></h1>
          <p className="hero-intro">Software engineer building full-stack applications and production backend systems—from high-throughput microservices to distributed storage and cloud infrastructure. Focused on predictable latency, safe recovery, and systems that scale with confidence.</p>
          <div className="hero-actions">
            <a className="button-primary" href="https://github.com/aanchalmsukhrani" target="_blank" rel="noopener noreferrer"><Github size={16} /> View GitHub <ArrowUpRight size={15} /></a>
            <a className="button-quiet" href="/aanchal-sukhrani-resume.pdf" download="Aanchal-Sukhrani-Resume.pdf">Download Resume <ArrowDown size={15} /></a>
            <a className="button-quiet" href="mailto:sukhraniaanchal27@gmail.com">Get in Touch <ArrowUpRight size={15} /></a>
          </div>
          <div className="hero-socials">
            <a href="https://github.com/aanchalmsukhrani" target="_blank" rel="noopener noreferrer"><Github size={16} /> GitHub</a>
            <a href="https://www.linkedin.com/in/aanchalsukhrani/" target="_blank" rel="noopener noreferrer"><Linkedin size={16} /> LinkedIn</a>
            <a href="mailto:sukhraniaanchal27@gmail.com"><Mail size={16} /> Email</a>
            <a href="tel:+16027188761"><Phone size={16} /> Phone</a>
          </div>
        </div>

        <div className="hero-aside">
          <div className="terminal-card">
            <div className="terminal-top"><div className="window-dots"><i /><i /><i /></div><span>aanchal.ts</span><span className="terminal-lock">● PROFILE</span></div>
            <div className="terminal-code" aria-label="A short introduction in code">
              <p><span className="code-muted">01</span> <span className="code-purple">const</span> engineer = {'{'}</p>
              <p><span className="code-muted">02</span> &nbsp; focus: <span className="code-green">&quot;backend systems&quot;</span>,</p>
              <p><span className="code-muted">03</span> &nbsp; building: [</p>
              <p><span className="code-muted">04</span> &nbsp;&nbsp; <span className="code-green">&quot;distributed systems&quot;</span>,</p>
              <p><span className="code-muted">05</span> &nbsp;&nbsp; <span className="code-green">&quot;cloud infrastructure&quot;</span>,</p>
              <p><span className="code-muted">06</span> &nbsp;&nbsp; <span className="code-green">&quot;reliable APIs&quot;</span></p>
              <p><span className="code-muted">07</span> &nbsp; ],</p>
              <p><span className="code-muted">08</span> &nbsp; location: <span className="code-green">&quot;Seattle, WA&quot;</span></p>
              <p><span className="code-muted">09</span> {'}'};</p>
              <p className="terminal-cursor"><span className="code-muted">10</span> <span className="code-purple">await</span> ship(engineer);<b /></p>
            </div>
          </div>
          <div className="hero-facts">
            <div><strong>2,000+</strong><span>QPS burst ingestion</span></div>
            <div><strong>99.9%</strong><span>pipeline availability</span></div>
            <div><strong>−22%</strong><span>compute cost</span></div>
          </div>
          <div className="location-note"><MapPin size={14} /> Seattle, Washington <span>·</span> Open to backend and platform engineering roles</div>
        </div>
      </div>
      <div className="hero-bottomline section-wrap"><span>01 / Profile</span><span>Building for scale, designing for failure</span><span>Scroll to explore ↓</span></div>
    </section>
  );
}
