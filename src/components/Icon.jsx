const SVG_ICONS = {
  dot: <circle cx="12" cy="12" r="2.1" fill="currentColor" stroke="none" />,
  spark: (
    <>
      <path d="M12 3.5 14 8l4.5 2-4.5 2-2 4.5-2-4.5-4.5-2L10 8l2-4.5Z" />
      <path d="m18.5 4 .6 1.3L20.5 6l-1.4.7-.6 1.3-.6-1.3-1.4-.7 1.4-.7.6-1.3Z" />
    </>
  ),
  target: (
    <>
      <circle cx="12" cy="12" r="7.4" />
      <circle cx="12" cy="12" r="4.2" />
      <circle cx="12" cy="12" r="1.3" fill="currentColor" stroke="none" />
    </>
  ),
  timeline: (
    <>
      <path d="M6 5.5v13M18 5.5v13" />
      <circle cx="6" cy="8" r="1.5" fill="currentColor" stroke="none" />
      <circle cx="12" cy="12" r="1.5" fill="currentColor" stroke="none" />
      <circle cx="18" cy="16" r="1.5" fill="currentColor" stroke="none" />
      <path d="M7.8 8h2.7m2.7 4h2.7" />
    </>
  ),
  mail: (
    <>
      <rect x="4.2" y="6.2" width="15.6" height="11.6" rx="2.3" />
      <path d="m5.4 7.7 6.6 5 6.6-5" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="7.8" />
      <path d="M12 8.2v4.4l3.1 1.9" />
    </>
  ),
  building: (
    <>
      <rect x="6" y="4.5" width="12" height="15" rx="1.8" />
      <path d="M9 8h.01M12 8h.01M15 8h.01M9 11h.01M12 11h.01M15 11h.01M9 14h.01M12 14h.01M15 14h.01" />
      <path d="M11 19.5v-2.8h2v2.8" />
    </>
  ),
  box: (
    <>
      <path d="m12 4.2 7.2 3.9v7.8L12 19.8 4.8 15.9V8.1L12 4.2Z" />
      <path d="m12 11.1 7.2-3.9M12 11.1 4.8 7.2M12 11.1v8.7" />
    </>
  ),
  cloud: (
    <>
      <path d="M8.6 18a4 4 0 1 1 .7-7.9 4.8 4.8 0 0 1 9.2 1.5A3.3 3.3 0 0 1 18 18H8.6Z" />
    </>
  ),
  gear: (
    <>
      <circle cx="12" cy="12" r="2.6" />
      <path d="m12 4.6.8 1.7 1.8.3.9-1.6 1.8 1-.4 1.8 1.3 1.2 1.7-.7.9 1.8-1.6.9.1 1.8 1.6.9-.9 1.8-1.7-.7-1.3 1.2.4 1.8-1.8 1-.9-1.6-1.8.3-.8 1.7h-2l-.8-1.7-1.8-.3-.9 1.6-1.8-1 .4-1.8-1.3-1.2-1.7.7-.9-1.8 1.6-.9-.1-1.8-1.6-.9.9-1.8 1.7.7 1.3-1.2-.4-1.8 1.8-1 .9 1.6 1.8-.3.8-1.7Z" />
    </>
  ),
  team: (
    <>
      <circle cx="8.3" cy="9" r="2.3" />
      <circle cx="15.7" cy="9" r="2.3" />
      <path d="M4.8 17.6a3.8 3.8 0 0 1 3.5-3h8.2a3.8 3.8 0 0 1 3.5 3" />
    </>
  ),
  layout: (
    <>
      <rect x="4.5" y="5" width="15" height="14" rx="2.2" />
      <path d="M10.5 5v14M10.5 10.3h9" />
    </>
  ),
  server: (
    <>
      <rect x="4.6" y="5.2" width="14.8" height="5.2" rx="1.6" />
      <rect x="4.6" y="13.6" width="14.8" height="5.2" rx="1.6" />
      <path d="M8 7.9h.01M8 16.3h.01M12 7.9h4M12 16.3h4" />
    </>
  ),
  database: (
    <>
      <ellipse cx="12" cy="6.9" rx="5.7" ry="2.5" />
      <path d="M6.3 7v4.6c0 1.4 2.6 2.5 5.7 2.5s5.7-1.1 5.7-2.5V7" />
      <path d="M6.3 11.4V16c0 1.4 2.6 2.5 5.7 2.5s5.7-1.1 5.7-2.5v-4.6" />
    </>
  ),
  route: (
    <>
      <circle cx="6.1" cy="6.1" r="2.1" />
      <circle cx="17.9" cy="17.9" r="2.1" />
      <path d="M8.4 6.1h3.7a3 3 0 0 1 3 3V13a2.6 2.6 0 0 0 2.6 2.6h.2" />
    </>
  ),
  link: (
    <>
      <path d="M10 14a3.2 3.2 0 0 1 0-4.5l2.2-2.2a3.2 3.2 0 1 1 4.5 4.5l-1 1" />
      <path d="M14 10a3.2 3.2 0 0 1 0 4.5l-2.2 2.2a3.2 3.2 0 1 1-4.5-4.5l1-1" />
    </>
  ),
  shield: (
    <>
      <path d="M12 3.4 5.2 6.2v4.9c0 4.4 2.8 7.7 6.8 9.5 4-1.8 6.8-5.1 6.8-9.5V6.2L12 3.4Z" />
      <path d="m9.5 11.9 1.8 1.8 3.3-3.3" />
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
  className: "icon icon-svg",
  "aria-hidden": "true"
};

export default function Icon({ type }) {
  return <svg {...commonSvgProps}>{SVG_ICONS[type] ?? SVG_ICONS.dot}</svg>;
}
