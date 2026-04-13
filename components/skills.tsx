"use client";

import { motion } from "framer-motion";
import { Code2 } from "lucide-react";

const skillCategories = [
  {
    title: "Languages",
    skills: ["Python", "Java", "SQL", "JavaScript", "TypeScript", "Bash"],
  },
  {
    title: "Backend & APIs",
    skills: [
      "Spring Boot",
      "Node.js",
      "Flask",
      "FastAPI",
      "Hibernate",
      "SQLAlchemy",
      "RESTful APIs",
      "GraphQL",
      "Microservices",
    ],
  },
  {
    title: "Cloud & DevOps",
    skills: [
      "AWS Lambda",
      "API Gateway",
      "EC2",
      "S3",
      "SQS",
      "CloudWatch",
      "Docker",
      "Kubernetes",
      "Jenkins",
      "Terraform",
      "CI/CD",
    ],
  },
  {
    title: "Databases",
    skills: [
      "PostgreSQL",
      "MySQL",
      "Redis",
      "MongoDB",
      "DynamoDB",
      "Azure SQL",
      "Kafka",
    ],
  },
  {
    title: "Practices",
    skills: [
      "System Design",
      "Distributed Systems",
      "OOP",
      "Unit Testing",
      "Agile/Scrum",
      "DSA",
    ],
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-12 px-3 md:px-5 lg:px-6">
      <div className="w-full max-w-[1700px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-12"
        >
          <Code2 className="h-6 w-6 text-accent" />
          <h2 className="text-3xl md:text-4xl font-medium tracking-tight">
            Technical Skills
          </h2>
          <span className="flex-1 h-px bg-border" />
        </motion.div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="space-y-3"
            >
              <h3 className="font-mono text-xs text-accent uppercase tracking-wider">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-sm px-3 py-1.5 border border-border text-secondary-foreground hover:border-accent/50 hover:text-foreground transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
