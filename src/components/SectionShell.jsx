import SectionHead from "./SectionHead";

export default function SectionShell({ id, toneClass, revealClass, head, children }) {
  const className = ["section", toneClass, "reveal", revealClass].filter(Boolean).join(" ");
  const headingId = `${id}-title`;

  return (
    <section id={id} className={className} aria-labelledby={headingId}>
      <SectionHead
        label={head.label}
        title={head.title}
        subtitle={head.subtitle}
        icon={head.icon}
        titleId={headingId}
      />
      {children}
    </section>
  );
}
