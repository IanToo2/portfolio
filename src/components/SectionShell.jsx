import SectionHead from "./SectionHead";

export default function SectionShell({ id, toneClass, revealClass, head, children }) {
  const className = ["section", toneClass, "reveal", revealClass].filter(Boolean).join(" ");

  return (
    <section id={id} className={className}>
      <SectionHead
        label={head.label}
        title={head.title}
        subtitle={head.subtitle}
        icon={head.icon}
      />
      {children}
    </section>
  );
}
