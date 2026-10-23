import { ArrowUpRight, GitBranch, ShieldCheck, Server, Workflow } from "lucide-react";

const projects = [
  {
    number: "01",
    name: "SentinelLLM",
    kind: "Enterprise LLM gateway & security proxy",
    summary:
      "An OpenAI-compatible, low-latency gateway for secure, observable, tenant-aware LLM traffic.",
    stack: ["Python", "FastAPI", "Redis", "Prometheus", "Docker"],
    icon: ShieldCheck,
    stats: [
      { value: "35%", label: "fewer redundant calls" },
      { value: "p99", label: "latency telemetry" },
      { value: "Live", label: "stream forwarding" },
    ],
    points: [
      "Provides tenant API authentication, real-time security guardrails, and streamed response forwarding through an OpenAI-compatible interface.",
      "Uses Redis sliding-window rate limits, dynamic token budgets, and tenant-scoped exact and semantic caching to reduce repeated upstream calls by 35%.",
      "Ships asynchronous telemetry and Prometheus metrics for token consumption and p99 latency; runs locally with Docker Compose.",
    ],
    github: "https://github.com/aanchalmsukhrani/SentinelLLM",
    githubLabel: "Explore source",
    accent: "green",
    featured: true,
  },
  {
    number: "02",
    name: "Mosaic",
    kind: "Distributed key-value store",
    summary:
      "A five-node Raft cluster built to stay consistent through leader changes, network partitions, and recovery.",
    stack: ["Go", "gRPC", "Protobuf", "Raft", "Chaos engineering"],
    icon: Server,
    stats: [
      { value: "12k", label: "ops / sec" },
      { value: "<40ms", label: "p99 latency" },
      { value: "5-node", label: "Raft cluster" },
    ],
    points: [
      "Implemented leader election, log replication, dynamic membership, and linearizable reads with Raft ReadIndex.",
      "Added a write-ahead log and 10k-entry snapshot compaction to bound crash recovery.",
      "Built fault injection for partitions, leader crashes, and reordered messages; verified no stale reads or log divergence after recovery.",
    ],
    github: "https://github.com/aanchalmsukhrani/Mosaic",
    githubLabel: "Explore source",
    accent: "cyan",
    featured: false,
  },
  {
    number: "03",
    name: "Order Intelligence Engine",
    kind: "High-throughput order microservice",
    summary:
      "A Spring Boot microservice handling high-volume order transactions with multithreaded execution and asynchronous machine learning inference.",
    stack: ["Java", "Spring Boot", "Multithreading", "Async inference", "ML APIs"],
    icon: Workflow,
    stats: [
      { value: "50k+", label: "daily transactions" },
      { value: "Multi", label: "threaded execution" },
      { value: "Async", label: "ML inference" },
    ],
    points: [
      "Built a multithreaded Spring Boot microservice handling 50k+ daily order transactions.",
      "Moved machine learning inference to asynchronous APIs to keep request handling responsive under load.",
      "Separated order processing from machine learning inference to keep the request path responsive under load.",
    ],
    github: "https://github.com/aanchalmsukhrani",
    githubLabel: "View GitHub profile",
    accent: "cyan",
    featured: false,
  },
];

export function Projects() {
  return (
    <section id="projects" className="section-wrap py-24">
      <div className="section-heading">
        <p className="eyebrow"><span>02</span> Selected work</p>
        <h2>Systems built to solve<br className="hidden sm:block" /> real engineering problems.</h2>
        <p className="section-lede">Distributed storage, LLM security, and high-throughput services—built around reliability, performance, and the details that keep systems dependable.</p>
      </div>

      <div className="mt-12 grid gap-5 lg:grid-cols-2">
        {projects.map((project) => {
          const Icon = project.icon;
          return (
            <article key={project.name} className={`project-card project-${project.accent} ${project.featured ? "project-featured" : ""}`}>
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-3">
                  <span className="project-icon"><Icon size={20} strokeWidth={1.7} /></span>
                  <div>
                    <p className="eyebrow">{project.number} / {project.kind}</p>
                    <h3 className="mt-1 text-3xl font-semibold tracking-tight text-white">{project.name}</h3>
                  </div>
                </div>
                <a className="icon-link" href={project.github} target="_blank" rel="noopener noreferrer" aria-label={`View ${project.name} on GitHub`}>
                  <ArrowUpRight size={18} />
                </a>
              </div>

              <p className="mt-6 max-w-xl text-sm leading-7 text-slate-300">{project.summary}</p>

              <div className="project-stats">
                {project.stats.map((stat) => (
                  <div key={stat.label}>
                    <strong>{stat.value}</strong>
                    <span>{stat.label}</span>
                  </div>
                ))}
              </div>

              <ul className="project-points">
                {project.points.map((point) => <li key={point}>{point}</li>)}
              </ul>

              <div className="mt-7 flex flex-wrap gap-2">
                {project.stack.map((item) => <span className="tech-chip" key={item}>{item}</span>)}
              </div>
              <a className="project-link" href={project.github} target="_blank" rel="noopener noreferrer">
                <GitBranch size={15} /> {project.githubLabel} <ArrowUpRight size={15} />
              </a>
            </article>
          );
        })}
      </div>
    </section>
  );
}
