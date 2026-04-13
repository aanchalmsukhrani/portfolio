"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Clock, Github, Link as LinkIcon } from "lucide-react";

const projects = [
  {
    id: "skills-forecasting",
    name: "Enterprise Resource API & Analytics (Skills Demand Forecasting)",
    summary: "Market intelligence platform with secure REST APIs and automated ETL",
    period: "Jul 2025 – Dec 2025",
    tech: ["Java", "Hibernate", "PostgreSQL", "AWS", "REST APIs", "ETL"],
    metrics: [
      "Ingests 1,000+ real-time external signals",
      "12-month forecasting ready",
      "Rate-limited, circuit-broken APIs",
    ],
    details:
      "Built automated ETL to pull 1,000+ live signals. Designed Java + Hibernate REST API with rate limiting and circuit breakers to avoid overload. Optimized PostgreSQL time-series schemas to speed deep joins for 12-month forecasts; custom reports highlight curriculum gaps for leadership.",
    github: "https://github.com/aanchalmsukhrani/skills-forecasting",
  },
  {
    id: "order-intel",
    name: "High-Throughput Order Intelligence Engine",
    summary: "Predictive routing microservice for delivery-scale workloads",
    period: "Apr 2025 – Jun 2025",
    tech: ["Java", "Spring Boot", "Redis", "Docker", "Kubernetes", "ML APIs"],
    metrics: [
      "50k+ daily requests",
      "Sub-200ms latency",
      "K8s horizontal scaling",
    ],
    details:
      "Spring Boot service with multithreading and distributed Redis cache. Python ML inference via async APIs keeps p95 under 200ms. Docker + Kubernetes for surge scaling; blue/green deploys to protect SLAs.",
    github: "https://github.com/aanchalmsukhrani/doordash-ai-order-intelligence",
  },
  {
    id: "rfm-analytics",
    name: "Customer Segmentation & Behavioral Analytics Engine",
    summary: "Automated RFM + clustering pipeline for retention campaigns",
    period: "Nov 2024 – Mar 2025",
    tech: ["Python", "SQL", "Tableau", "Scikit-Learn", "Data Engineering"],
    metrics: [
      "100k+ transactions processed",
      "Targeting precision +25%",
      "Engagement +15%",
    ],
    details:
      "Engineered SQL pipelines to clean/aggregate multi-source data (100k+ rows). Implemented K-Means + RFM in Python/Scikit-Learn to surface high-value cohorts; Tableau dashboards sped campaign decisions and lifted engagement 15%.",
    github: null,
  },
  {
    id: "feedback-intel",
    name: "AI Customer Feedback Intelligence Platform",
    summary: "NLP inference pipeline turning raw reviews into insights",
    period: "Jul 2024 – Sep 2024",
    tech: ["Python", "FastAPI", "SQLAlchemy", "NLP", "Streamlit"],
    metrics: [
      "55k+ Amazon reviews parsed",
      "Data interpretation speed +40%",
    ],
    details:
      "FastAPI inference service processes 55k+ Amazon reviews, extracting sentiment clusters. SQLAlchemy ORM for secure storage; Streamlit dashboards improved interpretation speed 40% for cross-functional teams.",
    github: "https://github.com/aanchalmsukhrani/feedback-intelligence",
  },
  {
    id: "resume-match",
    name: "AI-Powered Resume Matching & Recommendation API",
    summary: "Real-time semantic ranking of candidates vs job descriptions",
    period: "Aug 2022 – May 2023",
    tech: ["Python", "Flask", "BERT", "Scikit-Learn", "REST APIs"],
    metrics: [
      "30% faster shortlists",
      "Real-time inference",
    ],
    details:
      "Flask backend serving BERT + TF-IDF embeddings for ranking. Refined payloads and response handling to improve concurrent efficiency 30%; feature-flagged rollout for safe experimentation.",
    github: null,
  },
];

export function Projects() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <section id="projects" className="px-6 pb-10 pt-4">
      <div className="mx-auto flex max-w-[1700px] flex-col gap-8">
        <div className="space-y-2">
          <p className="text-xs font-mono uppercase tracking-[0.3em] text-cyan-100">projects</p>
          <h2 className="text-3xl font-semibold text-slate-50 sm:text-4xl">Projects</h2>
          <p className="max-w-2xl text-sm text-slate-400">Hover to reveal architecture, metrics, and links. Clear for recruiters, vivid for engineers.</p>
        </div>

        <div className="space-y-4">
          {projects.map((project) => {
            const isActive = active === project.id;
            return (
              <motion.article
                key={project.id}
                layout
                onHoverStart={() => setActive(project.id)}
                onHoverEnd={() => setActive(null)}
                className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-5 shadow-[0_30px_90px_rgba(0,0,0,0.45)] backdrop-blur-xl"
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_var(--x,50%)_var(--y,50%),rgba(107,232,255,0.14),transparent_40%)] opacity-0 transition duration-300 hover:opacity-100" />
                <div
                  className="relative flex flex-col gap-3"
                  onMouseMove={(e) => {
                    const rect = e.currentTarget.getBoundingClientRect();
                    e.currentTarget.parentElement?.style.setProperty("--x", `${e.clientX - rect.left}px`);
                    e.currentTarget.parentElement?.style.setProperty("--y", `${e.clientY - rect.top}px`);
                  }}
                >
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <div className="space-y-1">
                        <div className="flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-slate-400">
                          <Clock className="h-4 w-4 text-cyan-100" />
                        Always-on systems
                      </div>
                      <h3 className="text-xl font-semibold text-slate-50">{project.name}</h3>
                      <p className="text-xs text-slate-400">{project.period}</p>
                      <p className="text-sm text-slate-300">{project.summary}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="rounded-full bg-white/10 px-3 py-1 text-[11px] font-semibold text-cyan-100">Hover to reveal</span>
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 rounded-full border border-white/15 bg-white/5 px-3 py-2 text-xs font-semibold text-slate-100 transition hover:border-cyan-200/60 hover:text-cyan-100"
                        >
                          <Github className="h-4 w-4" />
                          Code
                        </a>
                      )}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 text-xs text-slate-100">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-white/10 bg-white/5 px-3 py-1 font-semibold"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <AnimatePresence initial={false}>
                    {isActive && (
                      <motion.div
                        key="reveal"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.35, ease: [0.25, 0.8, 0.25, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="mt-4 grid gap-6 md:grid-cols-[2fr_1fr]">
                          <div className="space-y-3 text-sm text-slate-200">
                            <p className="text-slate-300">{project.details}</p>
                            <div className="flex flex-wrap gap-2">
                              {project.metrics.map((metric) => (
                                <span
                                  key={metric}
                                  className="rounded-full border border-cyan-200/40 bg-cyan-400/10 px-3 py-1 text-xs font-semibold text-cyan-100"
                                >
                                  {metric}
                                </span>
                              ))}
                            </div>
                          </div>
                          <div />
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
