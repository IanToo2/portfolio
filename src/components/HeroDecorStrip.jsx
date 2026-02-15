const DECOR_ITEMS = [
  { token: "⚡", label: "Fast Delivery" },
  { token: "🧠", label: "Business Mapping" },
  { token: "SQL", label: "Data Integrity", glyph: true },
  { token: "🔁", label: "Migration Ready" }
];

export default function HeroDecorStrip() {
  return (
    <ul className="hero-decor-strip" aria-label="Core delivery strengths">
      {DECOR_ITEMS.map((item) => (
        <li key={item.label} className="hero-decor-item">
          <span className={`hero-decor-token ${item.glyph ? "is-glyph" : ""}`} aria-hidden="true">
            {item.token}
          </span>
          <span>{item.label}</span>
        </li>
      ))}
    </ul>
  );
}
