export default function TimelineGroup({
  title,
  items,
  showOrganizationInHeading = true,
  titleFirst = false
}) {
  return (
    <div className="timeline-group">
      <h3 className="timeline-group-title">{title}</h3>
      <div className="timeline">
        {items.map((item) => (
          <article key={`${title}-${item.period}-${item.organization}`} className="timeline-card panel">
            <span>{item.period}</span>
            <h3>
              {showOrganizationInHeading
                ? (titleFirst ? `${item.title} · ${item.organization}` : `${item.organization} · ${item.title}`)
                : item.title}
            </h3>
            {!showOrganizationInHeading && item.organization ? (
              <p className="timeline-org">{item.organization}</p>
            ) : null}
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
