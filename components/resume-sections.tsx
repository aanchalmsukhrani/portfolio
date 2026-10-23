import { ArrowUpRight } from "lucide-react";

const roles = [
  {
    company: "GenAIx", title: "Software Engineer", place: "New York, NY", dates: "May 2025 — Present", current: true,
    work: [
      "Promoted to a permanent role and own backend architecture and AWS infrastructure end to end.",
      "Built a TypeScript browser extension that detects employee AI prompts and emits JSON events across 100+ client organizations.",
      "Designed API Gateway, Lambda, and SQS ingestion absorbing 2,000+ QPS bursts with immediate 202 responses, reducing client latency by 25%.",
      "Built a multi-tenant Python NLP scoring engine processing 200+ prompts/sec, with idempotent PostgreSQL writes and S3 archival at 99.9% availability.",
      "Automated Jenkins CI/CD and Terraform provisioning; raised test coverage to 85%, cut releases by 40%, and environment setup from 2 days to 30 minutes.",
      "Optimized Lambda concurrency and autoscaling to reduce compute costs by 22%.",
    ],
  },
  {
    company: "Group Futurista", title: "Software Engineer", place: "Mumbai, India", dates: "May 2023 — Sep 2023",
    work: [
      "Built a Java microservices platform with Spring Boot and Hibernate, supporting 100k+ monthly active transactions.",
      "Redesigned PostgreSQL event-tracking schemas with indexing, query plan tuning, and connection pooling to improve query performance by 15%.",
      "Integrated external marketing systems with clustered PostgreSQL databases while keeping p95 API response times below 100ms.",
    ],
  },
  {
    company: "A1 Systems", title: "Software Engineer", place: "Mumbai, India", dates: "Jun 2021 — Dec 2022",
    work: [
      "Built Java JDBC batch ingestion from Azure SQL, processing 500GB+ of daily data and increasing throughput by 30%.",
      "Refactored legacy monolith code into object-oriented microservices, reducing feature onboarding time by 20%.",
      "Introduced JUnit and Mockito testing foundations for refactored modules.",
    ],
  },
];

export function ResumeSections() {
  return (
    <section id="experience" className="section-wrap py-24">
      <div className="section-heading">
        <p className="eyebrow"><span>04</span> Career</p>
        <h2>Engineering with<br className="hidden sm:block" /> measurable impact.</h2>
        <p className="section-lede">Experience across cloud platforms, data intensive services, and production backend systems.</p>
      </div>
      <div className="mt-12 space-y-4">
        {roles.map((role, index) => (
          <article key={role.company} className="experience-card">
            <div className="experience-index">0{index + 1}</div>
            <div className="experience-content">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <div className="flex flex-wrap items-center gap-3"><h3>{role.company}</h3>{role.current && <span className="current-tag"><i /> Current</span>}</div>
                  <p className="role-line">{role.title} <span>·</span> {role.place}</p>
                </div>
                <p className="date-line">{role.dates}</p>
              </div>
              <ul className="experience-list">{role.work.map((item) => <li key={item}>{item}</li>)}</ul>
            </div>
          </article>
        ))}
      </div>

      <div id="education" className="education-block">
        <div className="education-heading">
          <div><p className="eyebrow"><span>05</span> Education</p><h2>Learning that compounds.</h2></div>
          <a href="https://www.asu.edu/" target="_blank" rel="noopener noreferrer" aria-label="Arizona State University"><ArrowUpRight size={18} /></a>
        </div>
        <div className="education-grid">
          <article><span className="education-date">JAN 2024 — DEC 2025</span><h3>Arizona State University</h3><p>M.S. Information Technology</p><strong>4.0 / 4.0 GPA</strong></article>
          <article><span className="education-date">AUG 2019 — MAY 2023</span><h3>Mumbai University</h3><p>B.E. Computer Engineering</p><strong>3.87 / 4.0 GPA</strong></article>
        </div>
      </div>
    </section>
  );
}
