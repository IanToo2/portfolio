export default function Icon({ type }) {
  const common = {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.8",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className: "icon"
  };

  if (type === "clock") return <svg {...common}><circle cx="12" cy="12" r="8" /><path d="M12 8v4l3 2" /></svg>;
  if (type === "building") return <svg {...common}><path d="M4 20V6l4-2 4 2v14" /><path d="M12 20V9l4-2 4 2v11" /><path d="M8 10h.01M8 13h.01M16 13h.01M16 16h.01" /></svg>;
  if (type === "box") return <svg {...common}><path d="m12 3 7 4-7 4-7-4 7-4Z" /><path d="M5 7v8l7 4 7-4V7" /></svg>;
  if (type === "server") return <svg {...common}><rect x="4" y="5" width="16" height="6" rx="1.5" /><rect x="4" y="13" width="16" height="6" rx="1.5" /><path d="M8 8h.01M8 16h.01" /></svg>;
  if (type === "database") return <svg {...common}><ellipse cx="12" cy="6" rx="7" ry="3" /><path d="M5 6v8c0 1.7 3.1 3 7 3s7-1.3 7-3V6" /><path d="M5 10c0 1.7 3.1 3 7 3s7-1.3 7-3" /></svg>;
  if (type === "cloud") return <svg {...common}><path d="M7 18h9a4 4 0 0 0 0-8 5 5 0 0 0-9.7-1.8A3.5 3.5 0 0 0 7 18" /></svg>;
  if (type === "gear") return <svg {...common}><circle cx="12" cy="12" r="3" /><path d="M19 12a7 7 0 0 0-.1-1l2-1.5-2-3.5-2.4.7a7 7 0 0 0-1.7-1l-.4-2.5h-4l-.4 2.5a7 7 0 0 0-1.7 1L5.1 6 3 9.5 5 11a7 7 0 0 0 0 2l-2 1.5 2.1 3.5 2.4-.7a7 7 0 0 0 1.7 1l.4 2.5h4l.4-2.5a7 7 0 0 0 1.7-1l2.4.7 2-3.5-2-1.5c.1-.3.1-.7.1-1Z" /></svg>;
  if (type === "team") return <svg {...common}><circle cx="9" cy="8" r="2.5" /><circle cx="16" cy="9" r="2" /><path d="M4.5 18c.6-2.2 2.3-3.5 4.5-3.5S13 15.8 13.5 18" /><path d="M14 18c.4-1.5 1.4-2.4 2.9-2.4 1.3 0 2.3.7 2.8 2" /></svg>;
  if (type === "layout") return <svg {...common}><rect x="4" y="5" width="16" height="14" rx="2" /><path d="M9 5v14M9 10h11" /></svg>;
  if (type === "route") return <svg {...common}><circle cx="6" cy="6" r="2" /><circle cx="18" cy="18" r="2" /><path d="M8 6h4a3 3 0 0 1 3 3v3a2 2 0 0 0 2 2h1" /></svg>;
  if (type === "link") return <svg {...common}><path d="M10 14a3 3 0 0 1 0-4l2-2a3 3 0 0 1 4 4l-1 1" /><path d="M14 10a3 3 0 0 1 0 4l-2 2a3 3 0 0 1-4-4l1-1" /></svg>;
  if (type === "shield") return <svg {...common}><path d="M12 3 5 6v5c0 4.4 3 8 7 10 4-2 7-5.6 7-10V6l-7-3Z" /><path d="m9.5 12 1.8 1.8 3.2-3.2" /></svg>;
  return <svg {...common}><circle cx="12" cy="12" r="8" /></svg>;
}