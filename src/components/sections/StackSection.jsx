import Icon from "../Icon";
import SectionShell from "../SectionShell";
import TechLogo from "../TechLogo";

export default function StackSection({ t, localizedStack }) {
  return (
    <SectionShell
      id="stack"
      toneClass="section-stack"
      revealClass="d5"
      head={{
        label: t.stackLabel,
        title: t.stackTitle,
        subtitle: t.stackSubtitle,
        icon: "server"
      }}
    >
      <div className="stack-grid">
        {localizedStack.map((group) => (
          <article key={group.title} className="stack-card panel">
            <h3><Icon type={group.icon} />{group.title}</h3>
            <ul>
              {group.items.map((item) => (
                <li key={item}>
                  <TechLogo name={item} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </SectionShell>
  );
}
