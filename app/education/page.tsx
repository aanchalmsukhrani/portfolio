"use client";

import { Navigation } from "@/components/navigation";
import { motion } from "framer-motion";

const education = [
  {
    school: "Arizona State University",
    degree: "M.S. Information Technology",
    detail: "CGPA 4.0 / 4.0",
    period: "Jan 2024 – Dec 2025",
    location: "Tempe, AZ",
  },
  {
    school: "University of Mumbai",
    degree: "B.E. Computer Engineering",
    detail: "CGPA 3.81 / 4.0",
    period: "Aug 2019 – May 2023",
    location: "Mumbai, India",
  },
];

export default function EducationPage() {
  return (
    <main className="relative overflow-hidden bg-[radial-gradient(circle_at_20%_20%,#0b1a3a_0,#050814_40%),radial-gradient(circle_at_80%_0%,#1c2f5c_0,#050814_45%),#050814] text-slate-100">
      <Navigation />
      <section className="px-6 py-20">
        <div className="mx-auto max-w-[1700px] space-y-8">
          <h1 className="text-3xl font-semibold text-slate-50">Education</h1>
          <div className="space-y-4">
            {education.map((edu) => (
              <motion.div
                key={edu.school}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-[0_20px_60px_rgba(0,0,0,0.35)]"
              >
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div>
                    <p className="text-lg font-semibold text-slate-50">{edu.school}</p>
                    <p className="text-slate-300">{edu.degree}</p>
                  </div>
                  <span className="text-xs uppercase tracking-[0.16em] text-slate-400">{edu.period}</span>
                </div>
                <p className="mt-2 text-slate-200 font-semibold">{edu.detail}</p>
                <p className="text-xs text-slate-400">{edu.location}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
