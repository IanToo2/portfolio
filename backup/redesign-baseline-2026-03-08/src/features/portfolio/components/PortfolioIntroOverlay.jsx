export default function PortfolioIntroOverlay({ typedGreeting, isLeaving }) {
  return (
    <div className={`portfolio-intro ${isLeaving ? "is-leaving" : ""}`} aria-hidden="true">
      <div className="portfolio-intro-panel">
        <div className="portfolio-intro-copy">
          <strong>{typedGreeting}</strong>
          <span className="portfolio-intro-cursor" />
        </div>
      </div>
    </div>
  );
}
