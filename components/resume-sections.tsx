"use client";

import { Briefcase, GraduationCap, Code, Server, Database, Cloud, Cpu } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import type { ReactNode } from "react";

const experience = [
  {
    company: "GenAIx",
    role: "Software Engineer",
    location: "New York, NY",
    period: "May 2025 – Present",
    logoSrc: "/logo-genaix.png",
    bullets: [
      "Designed AWS Lambda + API Gateway stack with SQS async layer; <strong>25%</strong> lower latency, <strong>99.9%</strong> availability.",
      "Automated Jenkins CI/CD for zero-downtime releases; cut deploy time <strong>40%</strong>.",
      "Cloud cost optimizations saved <strong>$4,500</strong> annually; PyTest coverage to <strong>85%</strong> reducing prod bugs <strong>30%</strong>.",
    ],
  },
  {
    company: "Group Futurista",
    role: "Software Engineer",
    location: "Mumbai, India",
    period: "May 2023 – Sep 2023",
    logoSrc: "/logo-groupfuturista.png",
    bullets: [
      "Java/Spring Boot workflow platform saving <strong>200+</strong> manual hours yearly.",
      "PostgreSQL indexing & schema redesign improved queries <strong>15%</strong>.",
      "REST APIs integrated third-party marketing tools with internal data." ,
    ],
  },
  {
    company: "A1 Systems",
    role: "Data Engineer Intern",
    location: "Mumbai, India",
    period: "Jun 2021 – Dec 2022",
    logoSrc: "/logo-a1s.svg",
    bullets: [
      "Java JDBC ingestion from Azure SQL increased throughput <strong>30%</strong>.",
      "Refactored monolith to OO micro-modules, onboarding time down <strong>20%</strong>.",
      "Introduced JUnit/Mockito foundations and TDD culture." ,
    ],
  },
];

const education = [
  {
    school: "Arizona State University",
    degree: "M.S. Information Technology",
    detail: "CGPA <strong>4.0 / 4.0</strong>",
    period: "Jan 2024 – Dec 2025",
    location: "Tempe, AZ",
    logoSrc: "/logo-asu.png",
  },
  {
    school: "University of Mumbai",
    degree: "B.E. Computer Engineering",
    detail: "CGPA <strong>3.81 / 4.0</strong>",
    period: "Aug 2019 – May 2023",
    location: "Mumbai, India",
    logoSrc: "/logo-uom.png",
  },
];

const skills = [
  {
    title: "Languages",
    icon: <Code className="h-4 w-4" />,
    items: "Python, Java, JavaScript/TypeScript, SQL, Bash, HTML/CSS",
  },
  {
    title: "Backend & APIs",
    icon: <Server className="h-4 w-4" />,
    items: "Spring Boot, Node.js, Flask, FastAPI, Hibernate, SQLAlchemy, REST, GraphQL, Microservices, Distributed Systems",
  },
  {
    title: "Cloud & DevOps",
    icon: <Cloud className="h-4 w-4" />,
    items: "AWS (Lambda, API GW, EC2, S3, SQS, CloudWatch), Docker, Kubernetes, Jenkins, Terraform, CI/CD, Linux",
  },
  {
    title: "Data & Messaging",
    icon: <Database className="h-4 w-4" />,
    items: "PostgreSQL, MySQL, Redis, MongoDB, DynamoDB, Kafka, Azure SQL",
  },
  {
    title: "Practices",
    icon: <Cpu className="h-4 w-4" />,
    items: "OOP, System Design, Unit Testing (JUnit, PyTest, Mockito), Agile/Scrum, DSA",
  },
];

export function ResumeSections() {
  return (
    <section className="px-3 md:px-5 lg:px-6 pb-16 space-y-12">
      <div className="mx-auto flex w-full max-w-[1700px] flex-col gap-12" id="experience">
        <Card title="Experience" icon={<Briefcase className="h-5 w-5" />}>
          <div className="space-y-5">
            {experience.map((item) => (
              <div key={item.company} className="rounded-2xl border border-white/10 bg-white/5 p-5 md:p-6">
                <div className="flex flex-wrap items-center justify-between gap-3">
                    <div className="flex items-start gap-3">
                    <div className="h-10 w-10 overflow-hidden rounded-xl flex items-center justify-center">
                      {item.logoSrc ? (
                        <Image src={item.logoSrc} alt={`${item.company} logo`} width={40} height={40} />
                      ) : (
                        <span className="text-sm font-semibold text-slate-900">•</span>
                      )}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-slate-50">{item.role}</h3>
                      <p className="text-sm text-slate-300">{item.company} · {item.location}</p>
                    </div>
                  </div>
                  <span className="text-xs uppercase tracking-[0.16em] text-slate-400">{item.period}</span>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-100">
                  {item.bullets.map((b, i) => (
                    <li key={i} className="flex gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-accent" />
                      <span dangerouslySetInnerHTML={{ __html: b }} />
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Card>
      </div>

      <div className="mx-auto flex w-full max-w-[1700px] flex-col gap-10" id="education">
        <Card title="Education" icon={<GraduationCap className="h-5 w-5" />}>
          <div className="space-y-4 text-sm text-slate-100">
            {education.map((edu) => (
                  <div key={edu.school} className="rounded-xl border border-white/10 bg-white/5 p-4">
                    <div className="flex items-center justify-between gap-3">
                      <div className="flex items-center gap-3">
                        {edu.logoSrc && (
                          <div className="relative h-12 w-12 overflow-hidden rounded-md bg-transparent">
                            <Image
                              src={edu.logoSrc}
                              alt={`${edu.school} logo`}
                              fill
                              className="object-contain"
                              sizes="56px"
                              priority
                              unoptimized
                            />
                          </div>
                        )}
                        <div className="pt-0.5">
                          <p className="text-base font-semibold text-slate-50">{edu.school}</p>
                          <p className="text-slate-300">{edu.degree}</p>
                          <p className="text-sm text-slate-200 font-semibold" dangerouslySetInnerHTML={{ __html: edu.detail }} />
                          <p className="text-xs text-slate-400">{edu.location}</p>
                        </div>
                      </div>
                      <span className="text-xs uppercase tracking-[0.16em] text-slate-400 whitespace-nowrap">{edu.period}</span>
                    </div>
                    
                  </div>
                ))}
          </div>
        </Card>
      </div>
    </section>
  );
}

function Card({ title, icon, children }: { title: string; icon: ReactNode; children: ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: [0.25, 0.8, 0.25, 1] }}
      className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_25px_80px_rgba(0,0,0,0.35)] backdrop-blur"
    >
      <div className="mb-4 flex items-center gap-2 text-slate-200">
        <span className="text-cyan-200">{icon}</span>
        <h2 className="text-lg font-semibold">{title}</h2>
      </div>
      {children}
    </motion.div>
  );
}
