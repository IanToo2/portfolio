import Icon from "../Icon";
import SectionHead from "../SectionHead";
import TechLogo from "../TechLogo";

export default function StackSection({ t, localizedStack }) {
  return (
    <section id="stack" className="section section-stack reveal d5">
      <SectionHead
        label={t.stackLabel}
        title={t.stackTitle}
        subtitle={t.stackSubtitle}
        icon="server"
      />
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
    </section>
  );
}
