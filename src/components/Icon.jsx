const EMOJI_ICONS = {
  clock: "⏱️",
  building: "🏢",
  box: "📦",
  cloud: "☁️",
  gear: "⚙️",
  team: "🤝",
  layout: "🧩"
};

const GLYPH_ICONS = {
  server: "API",
  database: "DB"
};

const SVG_ICONS = {
  route: (
    <>
      <circle cx="6" cy="6" r="2" />
      <circle cx="18" cy="18" r="2" />
      <path d="M8 6h4a3 3 0 0 1 3 3v3a2 2 0 0 0 2 2h1" />
    </>
  ),
  link: (
    <>
      <path d="M10 14a3 3 0 0 1 0-4l2-2a3 3 0 0 1 4 4l-1 1" />
      <path d="M14 10a3 3 0 0 1 0 4l-2 2a3 3 0 0 1-4-4l1-1" />
    </>
  ),
  shield: (
    <>
      <path d="M12 3 5 6v5c0 4.4 3 8 7 10 4-2 7-5.6 7-10V6l-7-3Z" />
      <path d="m9.5 12 1.8 1.8 3.2-3.2" />
    </>
  )
};

const commonSvgProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "1.8",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  className: "icon icon-svg"
};

export default function Icon({ type }) {
  if (EMOJI_ICONS[type]) {
    return <span className="icon icon-emoji" aria-hidden="true">{EMOJI_ICONS[type]}</span>;
  }

  if (GLYPH_ICONS[type]) {
    return <span className="icon icon-glyph" aria-hidden="true">{GLYPH_ICONS[type]}</span>;
  }

  if (SVG_ICONS[type]) {
    return <svg {...commonSvgProps}>{SVG_ICONS[type]}</svg>;
  }

  return (
    <span className="icon icon-emoji" aria-hidden="true">
      ✨
    </span>
  );
}
