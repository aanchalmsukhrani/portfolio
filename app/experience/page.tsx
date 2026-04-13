"use client";

import { Navigation } from "@/components/navigation";
import { ResumeSections } from "@/components/resume-sections";

export default function ExperiencePage() {
  return (
    <main className="relative overflow-hidden bg-[radial-gradient(circle_at_20%_20%,#0b1a3a_0,#050814_40%),radial-gradient(circle_at_80%_0%,#1c2f5c_0,#050814_45%),#050814] text-slate-100">
      <Navigation />
      <ResumeSections />
    </main>
  );
}
