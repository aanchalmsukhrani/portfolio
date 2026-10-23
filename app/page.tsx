import { Navigation } from "@/components/navigation";
import { Hero } from "@/components/hero";
import { ResumeSections } from "@/components/resume-sections";
import { Projects } from "@/components/projects";
import { ArchitectureFlow } from "@/components/architecture-flow";
import { Skills } from "@/components/skills";
import { Connect } from "@/components/connect";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navigation />
      <Hero />
      <Projects />
      <ArchitectureFlow />
      <ResumeSections />
      <Skills />
      <Connect />
    </main>
  );
}
