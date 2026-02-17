export default function ContactSection({ t, localizedProfile, year, onExportPdf, isExportingPdf }) {
  return (
    <section id="contact" className="section section-contact reveal d6" aria-labelledby="contact-title">
      <article className="contact-card ui-card ui-card--strong">
        <p>{t.contactLabel}</p>
        <h2 id="contact-title">{t.contactTitle}</h2>
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
        <div className="contact-actions">
          <button className="ui-btn ui-btn-soft contact-pdf-btn" type="button" onClick={onExportPdf} disabled={isExportingPdf}>
            {isExportingPdf ? t.pdfExportLoading : t.pdfExportLabel}
          </button>
        </div>
        <small>{year}</small>
      </article>
    </section>
  );
}
