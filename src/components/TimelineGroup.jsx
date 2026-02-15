export default function TimelineGroup({ title, items }) {
  return (
    <div className="timeline-group">
      <h3 className="timeline-group-title">{title}</h3>
      <div className="timeline">
        {items.map((item) => (
          <article key={`${title}-${item.period}-${item.organization}`} className="timeline-card panel">
            <span>{item.period}</span>
            <h3>{item.organization} · {item.title}</h3>
            <ul>
              {item.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </div>
  );
}