"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const items = [
  { name: "Work", href: "#projects" },
  { name: "Architecture", href: "#architecture" },
  { name: "Experience", href: "#experience" },
  { name: "Education", href: "#education" },
  { name: "Skills", href: "#skills" },
];

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 12);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <header className={`site-nav ${scrolled ? "site-nav-scrolled" : ""}`}>
      <nav className="nav-inner section-wrap" aria-label="Main navigation">
        <Link href="#home" className="nav-brand"><span>AS</span> AANCHAL SUKHRANI</Link>
        <div className="nav-links">
          {items.map((item) => <Link key={item.name} href={item.href}>{item.name}</Link>)}
          <a className="nav-contact" href="mailto:sukhraniaanchal27@gmail.com">Contact <span>↗</span></a>
        </div>
      </nav>
    </header>
  );
}
