import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";

export function Connect() {
  return (
    <footer id="connect" className="section-wrap connect-section">
      <div className="connect-panel">
        <p className="eyebrow"><span>07</span> Next step</p>
        <div className="connect-content">
          <div><h2>Let&apos;s build systems<br />people can depend on.</h2><p>Open to backend, platform, and cloud engineering opportunities.</p></div>
          <a className="button-primary" href="mailto:sukhraniaanchal27@gmail.com">Start a conversation <ArrowUpRight size={16} /></a>
        </div>
      </div>
      <div className="connect-bottom">
        <span>© {new Date().getFullYear()} Aanchal Sukhrani <i /> Seattle, WA</span>
        <div>
          <a href="mailto:sukhraniaanchal27@gmail.com"><Mail size={14} /> Email</a>
          <a href="https://github.com/aanchalmsukhrani" target="_blank" rel="noopener noreferrer"><Github size={14} /> GitHub</a>
          <a href="https://www.linkedin.com/in/aanchalsukhrani/" target="_blank" rel="noopener noreferrer"><Linkedin size={14} /> LinkedIn</a>
        </div>
      </div>
    </footer>
  );
}
