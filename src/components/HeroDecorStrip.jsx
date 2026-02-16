import Icon from "./Icon";

const DECOR_ITEMS = [
  { icon: "spark", label: "Fast Delivery" },
  { icon: "target", label: "Business Mapping" },
  { icon: "sql", label: "Data Integrity" },
  { icon: "route", label: "Migration Ready" }
];

export default function HeroDecorStrip() {
  return (
    <ul className="hero-decor-strip" aria-label="Core delivery strengths">
      {DECOR_ITEMS.map((item) => (
        <li key={item.label} className="hero-decor-item">
          <span className="hero-decor-token" aria-hidden="true">
            <Icon type={item.icon} />
          </span>
          <span>{item.label}</span>
        </li>
      ))}
    </ul>
  );
}