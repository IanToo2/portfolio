import Icon from "../Icon";
import SectionHead from "../SectionHead";

const STACK_TECH_LOGOS = {
  Java: "☕",
  "Spring Boot": "🌱",
  JPA: "JPA",
  MyBatis: "MB",
  Oracle: "OR",
  PostgreSQL: "🐘",
  MySQL: "🐬",
  "AWS EC2": "EC2",
  "AWS RDS": "RDS",
  "AWS S3": "S3",
  Docker: "🐳",
  Jenkins: "JK",
  "GitLab CI": "GL",
  Git: "Git",
  GitLab: "GL",
  Jira: "JR",
  JavaScript: "JS",
  Polymer: "PL",
  React: "⚛"
};

export default function StackSection({ t, localizedStack }) {
  return (
    <section id="stack" className="section section-stack reveal d5">
      <SectionHead
        label={t.stackLabel}
        title={t.stackTitle}
        subtitle={t.stackSubtitle}
        icon="server"
      />
      <div className="stack-grid">
        {localizedStack.map((group) => (
          <article key={group.title} className="stack-card panel">
            <h3><Icon type={group.icon} />{group.title}</h3>
            <ul>
              {group.items.map((item) => (
                <li key={item}>
                  <span className="stack-tech-logo" aria-hidden="true">{STACK_TECH_LOGOS[item] ?? "•"}</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
