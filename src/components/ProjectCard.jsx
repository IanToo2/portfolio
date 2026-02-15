export default function ProjectCard({ project }) {
  return (
    <article className="project-card panel">
      <div className="project-top">
        <strong>{project.name}</strong>
        <span>{project.period}</span>
      </div>
      <div className="project-meta">
        <p className="project-kind">프로젝트 성격: {project.kind}</p>
        <p className="project-kind">수행 범위: {project.scope.join(" / ")}</p>
      </div>
      <ul className="project-tech">
        {project.tech.map((tech) => (
          <li key={tech}>{tech}</li>
        ))}
      </ul>
      <p className="project-contrib-title">상세 기여</p>
      <ul className="project-contrib">
        {project.contributions.map((contribution) => (
          <li key={contribution}>{contribution}</li>
        ))}
      </ul>
      <div className="project-status-wrap">
        <span className={`project-status ${project.isPending ? "pending" : "done"}`}>
          {project.isPending ? "🚧 진행 중 / 진행 예정" : "✅ 종료"}
        </span>
      </div>
    </article>
  );
}