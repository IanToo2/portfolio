import Icon from "../Icon";
import SectionHead from "../SectionHead";

export default function FocusSection({ t, localizedFocus }) {
  return (
    <section id="focus" className="section section-focus reveal d4">
      <SectionHead
        label={t.focusLabel}
        title={t.focusTitle}
        subtitle={t.focusSubtitle}
        icon="link"
      />
      <div className="focus-grid">
        {localizedFocus.map((item, index) => (
          <article key={item.title} className={`focus-card c${index + 1} panel`}>
            <h3><Icon type={item.icon} />{item.title}</h3>
            <p>{item.desc}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
