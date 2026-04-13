"use client";

import { useRef } from "react";
import type { ReactNode } from "react";
import { motion, useInView, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Cloud, Database, Dock, ServerCog, ShieldCheck } from "lucide-react";

function TiltCard({ className = "", children }: { className?: string; children: ReactNode }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [10, -10]), { stiffness: 220, damping: 18 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-10, 10]), { stiffness: 220, damping: 18 });

  const handleMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const px = (event.clientX - rect.left) / rect.width - 0.5;
    const py = (event.clientY - rect.top) / rect.height - 0.5;
    x.set(px);
    y.set(py);
    event.currentTarget.style.setProperty("--x", `${event.clientX - rect.left}px`);
    event.currentTarget.style.setProperty("--y", `${event.clientY - rect.top}px`);
  };

  const handleLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ rotateX, rotateY, transformPerspective: "900px" }}
      className={`group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-[1px] shadow-[0_25px_70px_rgba(0,0,0,0.45)] backdrop-blur-xl ${className}`}
    >
      <div
        className="pointer-events-none absolute inset-0 rounded-3xl"
        style={{
          background:
            "radial-gradient(140px circle at var(--x,50%) var(--y,50%), rgba(107,232,255,0.20), transparent 45%)",
        }}
      />
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/10 to-white/20 opacity-0 transition duration-300 group-hover:opacity-60" />
      <div className="relative h-full w-full rounded-3xl bg-[rgba(255,255,255,0.04)] p-6">
        {children}
      </div>
    </motion.div>
  );
}

export function BentoGrid() {
  const chartRef = useRef(null);
  const chartInView = useInView(chartRef, { once: true, amount: 0.6 });

  return (
    <section id="metrics" className="px-6 pb-24 pt-10">
      <div className="mx-auto flex max-w-[1700px] flex-col gap-10">
        <div className="flex items-center justify-between gap-4">
          <div className="space-y-2">
            <p className="text-xs font-mono uppercase tracking-[0.3em] text-cyan-100">bento metrics</p>
            <h2 className="text-3xl font-semibold text-slate-50 sm:text-4xl">Operational heartbeat &amp; stack fluency</h2>
            <p className="max-w-2xl text-sm text-slate-400">
              Every tile is live: subtle tilt, glow trails, and motion tuned for 60fps. Hover to feel cursor-tracked borders and depth.
            </p>
          </div>
        </div>

        <div className="grid auto-rows-[170px] grid-cols-1 gap-6 md:auto-rows-[200px] md:grid-cols-6">
          {/* Large stack orbit */}
          <TiltCard className="md:col-span-4 md:row-span-2">
            <div className="flex h-full flex-col justify-between">
              <div className="flex items-center justify-between text-slate-200">
                <div>
                  <p className="text-xs uppercase tracking-[0.22em] text-slate-400">Stack topology</p>
                  <p className="mt-1 text-lg font-semibold text-slate-50">Java · AWS · Docker · Spring Boot</p>
                </div>
                <span className="rounded-full bg-white/10 px-3 py-1 text-[11px] font-semibold text-cyan-100">Orbiting skills</span>
              </div>

              <div className="relative mt-6 flex h-[220px] items-center justify-center md:h-full">
                <div className="absolute h-40 w-40 rounded-full border border-white/10" />
                <div className="absolute h-56 w-56 rounded-full border border-white/10" />
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ repeat: Infinity, duration: 18, ease: "linear" }}
                  className="absolute h-56 w-56"
                >
                  <motion.div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full border border-cyan-200/50 bg-white/10 px-3 py-2 text-xs text-cyan-100 shadow-lg">
                    Java
                  </motion.div>
                  <motion.div className="absolute -left-3 top-1/2 -translate-y-1/2 rounded-full border border-emerald-200/50 bg-white/10 px-3 py-2 text-xs text-emerald-100 shadow-lg">
                    AWS
                  </motion.div>
                  <motion.div className="absolute -bottom-3 left-1/2 -translate-x-1/2 rounded-full border border-cyan-200/50 bg-white/10 px-3 py-2 text-xs text-cyan-100 shadow-lg">
                    Docker
                  </motion.div>
                  <motion.div className="absolute -right-3 top-1/2 -translate-y-1/2 rounded-full border border-emerald-200/50 bg-white/10 px-3 py-2 text-xs text-emerald-100 shadow-lg">
                    Spring Boot
                  </motion.div>
                </motion.div>

                <div className="relative flex h-24 w-24 items-center justify-center rounded-2xl border border-white/15 bg-gradient-to-br from-emerald-300/15 to-emerald-500/15 text-center text-sm font-semibold text-emerald-50 shadow-[0_20px_60px_rgba(0,0,0,0.45)]">
                  <div className="absolute -inset-10 bg-[radial-gradient(circle_at_50%_50%,rgba(107,232,255,0.14),transparent_55%)]" />
                  <div className="relative flex flex-col items-center gap-2">
                    <Cloud className="h-6 w-6 text-cyan-100" />
                    <span>Distributed mesh</span>
                  </div>
                </div>
              </div>
            </div>
          </TiltCard>

          {/* System status */}
          <TiltCard className="md:col-span-2">
            <div className="flex h-full flex-col justify-between">
              <div className="flex items-center justify-between">
                <p className="text-xs uppercase tracking-[0.2em] text-slate-400">System status</p>
                <span className="rounded-full bg-emerald-500/15 px-3 py-1 text-[11px] font-semibold text-emerald-200">Active</span>
              </div>
              <div className="relative mt-2 flex flex-1 items-center justify-center">
                <div className="absolute h-28 w-28 rounded-full bg-emerald-400/10 blur-3xl" />
                <div className="relative flex h-24 w-24 items-center justify-center rounded-full border border-white/15 bg-white/5">
                  <div className="absolute h-full w-full animate-ping rounded-full border border-emerald-300/60" />
                  <div className="absolute h-16 w-16 rounded-full bg-gradient-to-br from-emerald-300/40 to-cyan-300/40" />
                  <ShieldCheck className="relative h-7 w-7 text-emerald-200" />
                </div>
              </div>
              <div className="space-y-1 text-center text-sm text-slate-200">
                <p className="text-2xl font-semibold text-emerald-100">99.9% Uptime</p>
                <p className="text-slate-400">Real-time health checks · autoscaling · circuit breakers</p>
              </div>
            </div>
          </TiltCard>

          {/* Request volume chart */}
          <TiltCard className="md:col-span-2">
            <div className="flex h-full flex-col justify-between" ref={chartRef}>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Daily requests</p>
                  <p className="text-lg font-semibold text-slate-50">50k+ traffic window</p>
                </div>
                <div className="rounded-full bg-white/10 px-3 py-1 text-[11px] font-semibold text-cyan-100">p95 &lt; 200ms</div>
              </div>

              <svg viewBox="0 0 220 120" className="mt-4 h-full w-full">
                <defs>
                  <linearGradient id="glowLine" x1="0" x2="1" y1="0" y2="0">
                    <stop offset="0%" stopColor="#6be8ff" stopOpacity="0.9" />
                    <stop offset="100%" stopColor="#7b6dff" stopOpacity="0.9" />
                  </linearGradient>
                </defs>
                <motion.path
                  d="M10 90 C 40 40, 70 70, 100 50 S 160 30, 210 60"
                  fill="none"
                  stroke="url(#glowLine)"
                  strokeWidth="3"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: chartInView ? 1 : 0 }}
                  transition={{ duration: 1.6, ease: "easeInOut" }}
                  style={{ filter: "drop-shadow(0 0 12px rgba(107,232,255,0.5))" }}
                />
                <motion.circle
                  cx="210"
                  cy="60"
                  r="6"
                  fill="#6be8ff"
                  animate={{ r: chartInView ? [6, 8, 6] : 0 }}
                  transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
                />
              </svg>

              <div className="flex items-center justify-between text-xs text-slate-400">
                <span>Edge balancers</span>
                <span>Async workers</span>
                <span>Autoscale spike tests</span>
              </div>
            </div>
          </TiltCard>

          {/* Skill microcards */}
          <TiltCard className="md:col-span-2">
            <div className="flex h-full flex-col justify-between gap-4">
              <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Capabilities</p>
              <div className="grid grid-cols-2 gap-3 text-sm text-slate-100">
                {[
                  { icon: <ServerCog className="h-4 w-4" />, label: "Event-driven" },
                  { icon: <Dock className="h-4 w-4" />, label: "K8s + Docker" },
                  { icon: <Database className="h-4 w-4" />, label: "Streaming + OLTP" },
                  { icon: <Cloud className="h-4 w-4" />, label: "Multi-AZ failover" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2"
                  >
                    <span className="text-cyan-100">{item.icon}</span>
                    <span>{item.label}</span>
                  </div>
                ))}
              </div>
              <p className="text-xs text-slate-400">Observability-first pipelines, QoS-aware routing, chaos drills baked in.</p>
            </div>
          </TiltCard>
        </div>
      </div>
    </section>
  );
}
