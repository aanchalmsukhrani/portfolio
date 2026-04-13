"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const experiences = [
  {
    company: "GenAIx",
    logoSrc: "/logo-genaix.png",
    location: "New York, NY",
    role: "Software Engineer",
    period: "May 2025 — Present",
    highlights: [
      { text: "Designed a scalable serverless backend using AWS Lambda and API Gateway, implementing an asynchronous processing layer with AWS SQS that reduced request-response latency by ", metric: "25%" },
      { text: "Engineered a multi-tenant Python evaluation engine ensuring ", metric: "99.9%", suffix: " availability during peak traffic loads" },
      { text: "Automated Jenkins CI/CD pipelines, slashing deployment cycle time by ", metric: "40%", suffix: " with zero-downtime updates" },
      { text: "Optimized AWS resources via CloudWatch and automated scaling, reducing annual costs by ", metric: "$4,500" },
      { text: "Spearheaded the integration of infrastructure-as-code (IaC) practices using Terraform", metric: null },
    ],
    technologies: ["AWS Lambda", "API Gateway", "SQS", "Python", "Jenkins", "Terraform", "CloudWatch"],
  },
  {
    company: "Group Futurista",
    logoSrc: "/logo-groupfuturista.png",
    location: "Mumbai, India",
    role: "Software Engineer",
    period: "May 2023 — Sep 2023",
    highlights: [
      { text: "Engineered a centralized Java-based internal platform for workflow automation, utilizing Spring Boot to streamline business logic and save ", metric: "200+", suffix: " manual hours per year" },
      { text: "Redesigned database schemas for event tracking, implementing advanced indexing and query optimization in PostgreSQL to improve data retrieval speed by ", metric: "15%" },
      { text: "Built and integrated a robust RESTful API layer enabling seamless data exchange between third-party marketing tools and internal databases", metric: null },
    ],
    technologies: ["Java", "Spring Boot", "PostgreSQL", "RESTful APIs"],
  },
  {
    company: "A1 Systems",
    logoSrc: "/logo-a1s.svg",
    location: "Mumbai, India",
    role: "Data Engineer Intern",
    period: "Jun 2021 — Dec 2022",
    highlights: [
      { text: "Developed Java (JDBC) backend modules to automate massive data ingestion from Azure SQL, replacing manual entry systems and increasing operational throughput by ", metric: "30%" },
      { text: "Refactored monolithic legacy code into Object-Oriented micro-modules, improving code maintainability and reducing onboarding time for new features by ", metric: "20%" },
      { text: "Collaborated on a distributed system architecture handling concurrent data transformations", metric: null },
      { text: "Instituted foundational unit testing frameworks using JUnit and Mockito, fostering a culture of test-driven development", metric: null },
    ],
    technologies: ["Java", "JDBC", "Azure SQL", "JUnit", "Mockito", "Distributed Systems"],
  },
];

export function Experience() {
  return (
    <section id="experience" className="px-3 md:px-5 lg:px-6 py-16">
      <div className="mx-auto w-full max-w-[1700px]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex items-center gap-3 mb-14"
        >
          <span className="font-mono text-xs tracking-widest text-accent uppercase">01</span>
          <h2 className="text-3xl md:text-4xl font-medium text-foreground">
            Experience
          </h2>
          <span className="flex-1 h-px bg-border" />
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-[200px] top-0 bottom-0 w-px bg-border hidden md:block" />

          <div className="space-y-10">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                viewport={{ once: true }}
                className="relative grid md:grid-cols-[200px_1fr] gap-6"
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-[200px] top-2 w-3 h-3 rounded-full border-2 border-accent bg-background -translate-x-1/2 hidden md:block" />

                {/* Date column */}
                <div className="md:text-right md:pr-12">
                  <span className="font-mono text-sm text-muted-foreground">{exp.period}</span>
                </div>

                {/* Content column */}
                <div className="md:pl-12">
                  <div className="group rounded-2xl border border-white/8 bg-white/5 p-6 lg:p-7">
                    <div className="flex items-start gap-3 mb-1">
                      <div className="relative h-12 w-12 flex-shrink-0 overflow-hidden rounded-md bg-transparent">
                        {exp.logoSrc ? (
                          <Image
                            src={exp.logoSrc}
                            alt={`${exp.company} logo`}
                            fill
                            className="object-cover scale-110"
                            priority
                            unoptimized
                          />
                        ) : (
                          <span className="text-sm font-semibold text-slate-500 w-full h-full flex items-center justify-center bg-transparent">?</span>
                        )}
                      </div>
                      <div className="flex items-center gap-2">
                        <h3 className="text-xl font-medium text-foreground">{exp.company}</h3>
                        <svg className="w-4 h-4 text-muted-foreground opacity-0 -translate-x-2 transition-all group-hover:opacity-100 group-hover:translate-x-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7v10" />
                        </svg>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground mb-1">{exp.role}</p>
                    <p className="text-xs text-muted-foreground/70 mb-4">{exp.location}</p>

                    <ul className="space-y-2.5 mb-5">
                      {exp.highlights.map((highlight, i) => (
                        <li key={i} className="flex gap-3 text-sm text-muted-foreground leading-relaxed">
                          <span className="text-accent mt-1.5 flex-shrink-0">
                            <svg className="w-1.5 h-1.5" fill="currentColor" viewBox="0 0 8 8">
                              <circle cx="4" cy="4" r="4" />
                            </svg>
                          </span>
                          <span>
                            {highlight.text}
                            {highlight.metric && <strong className="text-foreground font-semibold">{highlight.metric}</strong>}
                            {highlight.suffix && highlight.suffix}
                          </span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-xs font-mono text-foreground border border-border bg-secondary/50"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
