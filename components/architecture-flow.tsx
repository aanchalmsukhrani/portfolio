import { Activity, ArrowRight, BrainCircuit, Database, KeyRound, Radio, ShieldCheck } from "lucide-react";

const stages = [
  { icon: Radio, label: "Client", detail: "OpenAI-compatible request" },
  { icon: ShieldCheck, label: "FastAPI gateway", detail: "Tenant auth + guardrails" },
  { icon: Database, label: "Redis", detail: "Rate limit + semantic cache" },
  { icon: BrainCircuit, label: "LLM provider", detail: "Upstream on cache miss" },
];

export function ArchitectureFlow() {
  return (
    <section id="architecture" className="section-wrap architecture-section">
      <div className="section-heading">
        <p className="eyebrow"><span>03</span> System design</p>
        <h2>SentinelLLM request path.</h2>
        <p className="section-lede">A cache-first gateway applies tenant controls before requests reach an upstream model, while keeping telemetry off the response path.</p>
      </div>

      <div className="architecture-panel" role="group" aria-label="SentinelLLM request flow architecture">
        <div className="architecture-label"><KeyRound size={14} /> SYNCHRONOUS REQUEST PATH</div>
        <ol className="architecture-flow">
          {stages.map((stage, index) => {
            const Icon = stage.icon;
            return (
              <li className="architecture-step" key={stage.label}>
                <div className="architecture-node">
                  <span className="architecture-icon"><Icon size={19} strokeWidth={1.7} /></span>
                  <strong>{stage.label}</strong>
                  <span>{stage.detail}</span>
                </div>
                {index < stages.length - 1 && <ArrowRight className="architecture-arrow" size={18} aria-hidden="true" />}
              </li>
            );
          })}
        </ol>
        <div className="architecture-outcomes">
          <div><span className="outcome-dot cached" /><strong>Cache hit</strong><ArrowRight size={14} /><span>Stream cached response</span></div>
          <div><span className="outcome-dot miss" /><strong>Cache miss</strong><ArrowRight size={14} /><span>Forward upstream response</span></div>
        </div>
        <div className="telemetry-lane"><span><Activity size={15} /> ASYNC TELEMETRY</span><div /><strong>Token usage</strong><i /><strong>Request latency</strong><i /><strong>Prometheus metrics</strong></div>
      </div>
      <p className="architecture-caption">Security and quota checks happen before cache lookup. Metrics are emitted asynchronously to avoid adding work to the request critical path.</p>
    </section>
  );
}
