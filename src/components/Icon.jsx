import { useMemo } from "react";

const RASTER_ICON_CONFIG = {
  spark: { token: "GO", colors: ["#fef9c3", "#fde047"], stroke: "#a16207" },
  target: { token: "AIM", colors: ["#fee2e2", "#fecaca"], stroke: "#b91c1c" },
  timeline: { token: "LOG", colors: ["#e0e7ff", "#c7d2fe"], stroke: "#4338ca" },
  mail: { token: "MAIL", colors: ["#dbeafe", "#bfdbfe"], stroke: "#1e40af" }
};

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
  database: "DB",
  sql: "SQL"
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

const rasterCache = new Map();

function drawRoundedRect(ctx, x, y, width, height, radius) {
  ctx.beginPath();
  ctx.moveTo(x + radius, y);
  ctx.lineTo(x + width - radius, y);
  ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
  ctx.lineTo(x + width, y + height - radius);
  ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
  ctx.lineTo(x + radius, y + height);
  ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
  ctx.lineTo(x, y + radius);
  ctx.quadraticCurveTo(x, y, x + radius, y);
  ctx.closePath();
}

function createRasterIcon(type) {
  if (rasterCache.has(type)) {
    return rasterCache.get(type);
  }
  if (typeof document === "undefined") {
    return null;
  }

  const config = RASTER_ICON_CONFIG[type];
  if (!config) {
    return null;
  }

  const canvas = document.createElement("canvas");
  canvas.width = 48;
  canvas.height = 48;

  const ctx = canvas.getContext("2d");
  if (!ctx) {
    return null;
  }

  const gradient = ctx.createLinearGradient(0, 0, 48, 48);
  gradient.addColorStop(0, config.colors[0]);
  gradient.addColorStop(1, config.colors[1]);

  drawRoundedRect(ctx, 2, 2, 44, 44, 12);
  ctx.fillStyle = gradient;
  ctx.fill();
  ctx.lineWidth = 2;
  ctx.strokeStyle = config.stroke;
  ctx.stroke();

  ctx.beginPath();
  ctx.arc(36, 12, 6, 0, Math.PI * 2);
  ctx.fillStyle = "rgba(255,255,255,0.42)";
  ctx.fill();

  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.font = "700 12px Manrope, 'Noto Sans KR', sans-serif";
  ctx.fillStyle = "#0f172a";
  ctx.fillText(config.token, 24, 26);

  const raster = canvas.toDataURL("image/png");
  rasterCache.set(type, raster);
  return raster;
}

export default function Icon({ type }) {
  const rasterIcon = useMemo(() => createRasterIcon(type), [type]);

  if (RASTER_ICON_CONFIG[type]) {
    if (rasterIcon) {
      return <img className="icon icon-raster" src={rasterIcon} alt="" aria-hidden="true" />;
    }
    return <span className="icon icon-glyph" aria-hidden="true">{RASTER_ICON_CONFIG[type].token}</span>;
  }

  if (GLYPH_ICONS[type]) {
    return <span className="icon icon-glyph" aria-hidden="true">{GLYPH_ICONS[type]}</span>;
  }

  if (EMOJI_ICONS[type]) {
    return <span className="icon icon-emoji" aria-hidden="true">{EMOJI_ICONS[type]}</span>;
  }

  if (SVG_ICONS[type]) {
    return <svg {...commonSvgProps}>{SVG_ICONS[type]}</svg>;
  }

  return <span className="icon icon-emoji" aria-hidden="true">+</span>;
}
