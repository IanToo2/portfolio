export default function PortfolioTopBar({
  className = "",
  logoHomeAriaLabel,
  localizedProfile,
  navItems,
  navLinkRefs,
  activeSection,
  onSelectSection,
  onMenuKeyDown,
  langSwitchAriaLabel,
  switchLang,
  switchLabel
}) {
  return (
    <header className={`portfolio-topbar ${className}`.trim()}>
      <a className="portfolio-brand" href="#home" aria-label={logoHomeAriaLabel}>
        <span className="portfolio-brand-mark" aria-hidden="true">
          <svg className="portfolio-brand-mark-svg" viewBox="0 0 24 24" fill="none">
            <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
            <path d="m8.2 15.8 3.1-7 3.1 7m-4.4-2.5h2.6M15.8 8.8v6.9m0 0h2.4" />
          </svg>
        </span>
        <span className="portfolio-brand-copy">
          <strong>{localizedProfile.name}</strong>
          <small>{localizedProfile.role} · {localizedProfile.domain}</small>
        </span>
      </a>

      <div className="portfolio-topbar-right">
        <span className="portfolio-status-pill" aria-label={`${localizedProfile.domain} ${localizedProfile.role}`}>
          <span className="portfolio-status-dot" aria-hidden="true" />
          {localizedProfile.domain} / {localizedProfile.role}
        </span>
        <nav className="portfolio-nav" aria-label="Portfolio navigation">
          {navItems.map((item, index) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              ref={(node) => {
                navLinkRefs.current[index] = node;
              }}
              className={activeSection === item.id ? "active" : ""}
              aria-current={activeSection === item.id ? "page" : undefined}
              onClick={() => onSelectSection(item.id)}
              onKeyDown={(event) => onMenuKeyDown(event, index)}
            >
              {item.label}
            </a>
          ))}
        </nav>
        <button className="portfolio-lang-switch" type="button" onClick={switchLang} aria-label={langSwitchAriaLabel}>
          {switchLabel}
        </button>
      </div>
    </header>
  );
}
