export default function PortfolioSection({ id, label, title, subtitle, children, className = "" }) {
  return (
    <section
      id={id}
      className={`portfolio-section ${className}`.trim()}
      aria-labelledby={`${id}-title`}
      data-breakpoint="true"
    >
      <div className="portfolio-section-head">
        <p>{label}</p>
        <h2 id={`${id}-title`}>{title}</h2>
        {subtitle ? <strong>{subtitle}</strong> : null}
      </div>
      <div className="portfolio-section-body">{children}</div>
    </section>
  );
}
