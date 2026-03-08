import TechLogo from "./TechLogo";

export default function TechPill({ name }) {
  return (
    <li className="tech-pill">
      <TechLogo name={name} />
      <span className="tech-pill-label">{name}</span>
    </li>
  );
}
