export default function ContactSection({ t, localizedProfile, year }) {
  return (
    <section id="contact" className="section section-contact reveal d6">
      <article className="contact-card panel">
        <p>{t.contactLabel}</p>
        <h2><span className="contact-emoji" aria-hidden="true">✉️</span>{localizedProfile.email}</h2>
        <a className="contact-direct-link" href={localizedProfile.github} target="_blank" rel="noreferrer">
          <span className="contact-emoji" aria-hidden="true">🐙</span>
          {localizedProfile.github.replace("https://", "")}
        </a>
        <div className="contact-badges" aria-hidden="true">
          <span className="contact-badge">📨 Quick Reply</span>
          <span className="contact-badge">🤝 Open to Collaboration</span>
          <span className="contact-badge">🛠️ Backend Focus</span>
        </div>
        <small>{year} · {t.contactFooter}</small>
      </article>
    </section>
  );
}
