import TechPill from "./TechPill";

export default function TechPillList({ items, className = "" }) {
  const classes = className ? `tech-pill-list ${className}` : "tech-pill-list";

  return (
    <ul className={classes}>
      {items.map((item, index) => (
        <TechPill key={`${item}-${index}`} name={item} />
      ))}
    </ul>
  );
}
