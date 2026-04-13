"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Mail, Phone, Github, Linkedin, Sparkles } from "lucide-react";
import type { ReactNode } from "react";

export function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden px-4 md:px-8 py-16 md:py-20"
    >
      <div className="relative mx-auto flex w-full max-w-[1700px] flex-col gap-10 lg:flex-row lg:items-center">
        <div className="flex-1 space-y-6">
          <a
            href="mailto:sukhraniaanchal27@gmail.com"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold text-accent backdrop-blur transition hover:border-accent hover:text-white"
          >
            <span className="h-2 w-2 animate-ping rounded-full bg-accent" />
            Available for backend & cloud roles — USA
          </a>

          <h1 className="text-4xl font-semibold leading-tight text-slate-50 sm:text-5xl">
            Aanchal Sukhrani
            <span className="block text-lg font-medium text-slate-300">
              Cloud Backend & Software Engineer
            </span>
          </h1>

          <p className="max-w-2xl text-base leading-relaxed text-slate-200">
            Cloud Backend & Software Engineer crafting resilient APIs, data pipelines, and architectures that stay fast and available. Clear runbooks, bold metrics, and a shipping mindset so recruiters and hiring managers see impact at a glance.
          </p>

          <div className="grid gap-3 sm:grid-cols-2 text-sm">
            <InfoPill icon={<Sparkles className="h-4 w-4" />} label="Impact" value="<strong>50k+</strong> daily requests · <strong>p95 &lt; 200ms</strong> · <strong>99.9%</strong> uptime" />
            <InfoPill icon={<Sparkles className="h-4 w-4" />} label="Tooling" value="Java, Spring Boot, Python, FastAPI, AWS, Docker, Kubernetes, Redis, Postgres, and more" />
          </div>

          <div className="flex flex-wrap items-center gap-3 text-sm font-medium text-slate-100">
            <ContactChip href="mailto:sukhraniaanchal27@gmail.com" icon={<Mail className="h-4 w-4" />} label="sukhraniaanchal27@gmail.com" />
            <ContactChip href="tel:+16027188761" icon={<Phone className="h-4 w-4" />} label="+1 (602) 718-8761" />
            <ContactChip href="https://github.com/aanchalmsukhrani" icon={<Github className="h-4 w-4" />} label="GitHub" />
            <ContactChip href="https://www.linkedin.com/in/aanchalsukhrani/" icon={<Linkedin className="h-4 w-4" />} label="LinkedIn" />
          </div>

          <div className="flex flex-wrap gap-3 pt-2">
            <a
              href="#projects"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-emerald-300 to-emerald-500 px-5 py-2.5 text-sm font-semibold text-slate-950 shadow-[0_8px_30px_rgba(16,185,129,0.35)] transition hover:-translate-y-0.5"
            >
              View Projects
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m0 0-6-6m6 6-6 6" />
              </svg>
            </a>
            <a
              href="#skills"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2.5 text-sm font-semibold text-slate-100 transition hover:border-cyan-200/60"
            >
              View Skills
            </a>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative w-full max-w-xs self-start rounded-3xl border border-white/10 bg-white/5 p-4 backdrop-blur"
        >
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/10 to-cyan-500/10 opacity-70" />
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-black/40 shadow-[0_25px_80px_rgba(0,0,0,0.45)]">
            <Image
              src="/headshot.jpg"
              alt="Aanchal Sukhrani"
              width={640}
              height={800}
              className="h-full w-full object-cover"
              priority
            />
          </div>
          <p className="relative mt-3 text-xs uppercase tracking-[0.2em] text-slate-300">
            Arizona State University
          </p>
          <p className="relative text-xs uppercase tracking-[0.2em] text-slate-300">
            MS IT · <strong>4.0 GPA</strong>
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function InfoPill({ icon, label, value }: { icon: ReactNode; label: string; value: string }) {
  return (
    <div className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 p-4">
      <span className="mt-0.5 text-cyan-100">{icon}</span>
      <div>
        <p className="text-[11px] uppercase tracking-[0.18em] text-slate-400">{label}</p>
        <p className="text-sm text-slate-100" dangerouslySetInnerHTML={{ __html: value }} />
      </div>
    </div>
  );
}

function ContactChip({ href, icon, label }: { href: string; icon: ReactNode; label: string }) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 transition hover:border-cyan-200/60 hover:text-cyan-50"
    >
      <span className="text-cyan-100">{icon}</span>
      <span>{label}</span>
    </a>
  );
}
