import { useCallback, useEffect, useState } from "react";

export default function ContactSection({ t, localizedProfile, year, onExportPdf, isExportingPdf }) {
  const [isCopied, setIsCopied] = useState(false);

  useEffect(() => {
    if (!isCopied) {
      return undefined;
    }

    const timer = window.setTimeout(() => setIsCopied(false), 1800);
    return () => window.clearTimeout(timer);
  }, [isCopied]);

  const copyEmail = useCallback(async () => {
    const email = localizedProfile.email;
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(email);
      } else {
        const tempInput = document.createElement("textarea");
        tempInput.value = email;
        tempInput.setAttribute("readonly", "");
        tempInput.style.position = "absolute";
        tempInput.style.left = "-9999px";
        document.body.appendChild(tempInput);
        tempInput.select();
        document.execCommand("copy");
        document.body.removeChild(tempInput);
      }
      setIsCopied(true);
    } catch {
      setIsCopied(false);
    }
  }, [localizedProfile.email]);

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
          <button
            className="ui-btn ui-btn-ghost contact-copy-btn"
            type="button"
            onClick={copyEmail}
          >
            {isCopied ? (t.contactCopiedLabel ?? "Copied") : (t.contactCopyLabel ?? "Copy Email")}
          </button>
          <button className="ui-btn ui-btn-soft contact-pdf-btn" type="button" onClick={onExportPdf} disabled={isExportingPdf}>
            {isExportingPdf ? t.pdfExportLoading : t.pdfExportLabel}
          </button>
        </div>
        <p className="contact-copy-status" role="status" aria-live="polite">
          {isCopied ? (t.contactCopiedLabel ?? "Copied") : ""}
        </p>
        <small>{year}</small>
      </article>
    </section>
  );
}
