export default function PortfolioIntroOverlay({ greeting, typedGreeting, status, isLeaving }) {
  return (
    <div className={`portfolio-intro ${isLeaving ? "is-leaving" : ""}`} aria-hidden="true">
      <div className="portfolio-intro-panel">
        <span className="portfolio-intro-status">{status}</span>
        <div className="portfolio-intro-copy">
          <strong>{typedGreeting}</strong>
          <span className="portfolio-intro-cursor" />
        </div>
        <div className="portfolio-intro-progress">
          <span style={{ width: `${Math.max(14, (typedGreeting.length / Math.max(greeting.length, 1)) * 100)}%` }} />
        </div>
      </div>
    </div>
  );
}
