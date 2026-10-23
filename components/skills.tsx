const skillCategories = [
  { title: "Languages", skills: "Python · Java · JavaScript · TypeScript · Go · SQL · Bash · HTML/CSS" },
  { title: "Backend & APIs", skills: "Spring Boot · FastAPI · Node.js · Flask · RESTful APIs · GraphQL · Microservices · Kafka · Protobuf" },
  { title: "Cloud & DevOps", skills: "AWS Lambda · API Gateway · SQS · EC2 · S3 · CloudWatch · Docker · Kubernetes · Terraform · Jenkins · CI/CD · Prometheus" },
  { title: "Databases & caching", skills: "PostgreSQL · Redis · MySQL · DynamoDB · Azure SQL · MongoDB" },
  { title: "Engineering", skills: "System design · OOP · Unit testing · JUnit · PyTest · Mockito · Agile/Scrum · Data structures & algorithms" },
];

export function Skills() {
  return (
    <section id="skills" className="section-wrap py-20">
      <div className="section-heading">
        <p className="eyebrow"><span>06</span> Toolkit</p>
        <h2>Tools for the full<br className="hidden sm:block" /> path to production.</h2>
      </div>
      <div className="skills-grid mt-10">
        {skillCategories.map((category, index) => (
          <article key={category.title} className="skill-row">
            <span className="skill-number">0{index + 1}</span>
            <h3>{category.title}</h3>
            <p>{category.skills}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
