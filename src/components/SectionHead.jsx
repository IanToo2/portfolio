import Icon from "./Icon";

export default function SectionHead({ label, title, subtitle, icon, titleId }) {
  return (
    <div className="section-head">
      <div className="section-head-top">
        <span className="section-icon" aria-hidden="true"><Icon type={icon} /></span>
        <p>{label}</p>
      </div>
      <h2 id={titleId}>{title}</h2>
      {subtitle ? <span>{subtitle}</span> : null}
    </div>
  );
}
