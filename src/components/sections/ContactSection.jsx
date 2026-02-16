export default function ContactSection({ t, localizedProfile, year }) {
  return (
    <section id="contact" className="section section-contact reveal d6">
      <article className="contact-card panel">
        <p>{t.contactLabel}</p>
        <h2>{t.contactTitle}</h2>
        <div className="contact-hub">
          <a className="contact-link" href={`mailto:${localizedProfile.email}`}>
            <span className="contact-link-label">{t.contactMailLabel}</span>
            <span className="contact-link-value">{localizedProfile.email}</span>
          </a>
          <a className="contact-link" href={localizedProfile.github} target="_blank" rel="noreferrer">
            <span className="contact-link-label">{t.contactEmail}</span>
            <span className="contact-link-value">{localizedProfile.github.replace("https://", "")}</span>
          </a>
        </div>
        <small>{year}</small>
      </article>
    </section>
  );
}
