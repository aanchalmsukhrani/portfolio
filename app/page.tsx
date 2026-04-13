import { Navigation } from "@/components/navigation";
import { Hero } from "@/components/hero";
import { ResumeSections } from "@/components/resume-sections";
import { Projects } from "@/components/projects";
import { Skills } from "@/components/skills";
import { Connect } from "@/components/connect";

export default function Home() {
  return (
    <main className="relative overflow-hidden bg-[#0b0f1f] text-slate-100">
      <Navigation />
      <Hero />
      <ResumeSections />
      <Projects />
      <Skills />
      <Connect />
    </main>
  );
}
