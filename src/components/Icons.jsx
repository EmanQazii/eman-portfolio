// Icons.jsx — small inline SVG icons, no external icon package required.

export function GithubIcon(props) {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" {...props}>
      <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.9.57.1.78-.25.78-.55 0-.27-.01-1.17-.02-2.12-3.2.7-3.88-1.36-3.88-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.03 1.76 2.69 1.25 3.35.96.1-.74.4-1.25.72-1.54-2.56-.29-5.25-1.28-5.25-5.7 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.79 0c2.21-1.49 3.18-1.18 3.18-1.18.62 1.59.23 2.76.11 3.05.74.81 1.18 1.84 1.18 3.1 0 4.43-2.7 5.41-5.27 5.7.42.36.78 1.07.78 2.17 0 1.57-.01 2.83-.01 3.22 0 .3.21.66.79.55A11.51 11.51 0 0 0 23.5 12c0-6.27-5.23-11.5-11.5-11.5Z" />
    </svg>
  );
}

export function LinkedinIcon(props) {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" {...props}>
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.03-1.85-3.03-1.85 0-2.14 1.44-2.14 2.94v5.66H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM3.56 20.45h3.56V9H3.56v11.45ZM22.22 0H1.78C.8 0 0 .78 0 1.75v20.5C0 23.22.8 24 1.78 24h20.44c.98 0 1.78-.78 1.78-1.75V1.75C24 .78 23.2 0 22.22 0Z" />
    </svg>
  );
}
import React from "react";

/* Simple, license-safe line glyphs. All use currentColor so you can
   color them with text-accent / text-accent-orange / text-accent-green. */

const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

export function ReactIcon(props) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <circle cx="12" cy="12" r="1.6" fill="currentColor" stroke="none" />
      <ellipse cx="12" cy="12" rx="10" ry="4.2" />
      <ellipse cx="12" cy="12" rx="10" ry="4.2" transform="rotate(60 12 12)" />
      <ellipse cx="12" cy="12" rx="10" ry="4.2" transform="rotate(120 12 12)" />
    </svg>
  );
}

export function PythonIcon(props) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <path d="M12 3c-3 0-4 1-4 3v2h5" />
      <path d="M8 8H6c-2 0-3 1-3 4s1 4 3 4h2v-3c0-1.5 1-2.5 2.5-2.5H14c1.5 0 2.5-1 2.5-2.5V6c0-2-1.5-3-4.5-3z" />
      <path d="M12 21c3 0 4-1 4-3v-2h-5" />
      <path d="M16 16h2c2 0 3-1 3-4s-1-4-3-4h-2" />
      <circle cx="10" cy="5.5" r=".6" fill="currentColor" stroke="none" />
      <circle cx="14" cy="18.5" r=".6" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function TypeScriptIcon(props) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <rect x="3" y="3" width="18" height="18" rx="3" />
      <path d="M7 10h4M9 10v6" />
      <path d="M17 11.2c-.4-.5-1-.8-1.7-.8-1 0-1.8.5-1.8 1.4 0 1.8 3 1 3 2.9 0 1-.9 1.5-1.9 1.5-.8 0-1.5-.4-1.9-1" />
    </svg>
  );
}

export function NodeIcon(props) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <path d="M12 2.5 20 7v10l-8 4.5L4 17V7z" />
      <path d="M9.5 14.2c0 .9.8 1.4 2 1.4 1.4 0 2.2-.6 2.2-1.6 0-2.1-4.1-1-4.1-3 0-.9.8-1.5 2-1.5 1 0 1.8.4 2 1.1" />
    </svg>
  );
}

export function TensorFlowIcon(props) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <path d="M12 3 4 7.5v9L12 21V3z" opacity=".55" />
      <path d="M12 3l8 4.5v9L12 21" />
      <path d="M8 9.5 12 7.5M8 13.5 12 11.5" />
    </svg>
  );
}

export function FlutterIcon(props) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <path d="M15 3 6 12l3 3 9-9z" />
      <path d="M15 11 9 17l3 3h4l-4-4 4-4z" opacity=".6" />
    </svg>
  );
}

export function PostgresIcon(props) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <ellipse cx="12" cy="6" rx="7" ry="3" />
      <path d="M5 6v6c0 1.7 3 3 7 3s7-1.3 7-3V6" />
      <path d="M5 12v6c0 1.7 3 3 7 3s7-1.3 7-3v-6" />
    </svg>
  );
}

export function DockerIcon(props) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <rect x="4" y="11" width="3" height="3" />
      <rect x="8" y="11" width="3" height="3" />
      <rect x="12" y="11" width="3" height="3" />
      <rect x="8" y="7" width="3" height="3" />
      <path d="M3 14h14c2 0 3.5-.8 4-3 .8.4 1.5.3 2-.2-.4 1.8-1.8 5.2-6 5.2H7c-2.2 0-4-1-4-2z" />
    </svg>
  );
}

export function FastApiIcon(props) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 5 8 13h4l-1 6 5-9h-4z" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function FirebaseIcon(props) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <path d="M5 18 8 4l3 5" />
      <path d="M5 18 13 6l6 12z" />
      <path d="M5 18l7 3 7-3" />
    </svg>
  );
}

/* Registry used by the Hero constellation */
export const TECH_ICONS = [
  { name: "React", Icon: ReactIcon },
  { name: "Python", Icon: PythonIcon },
  { name: "TypeScript", Icon: TypeScriptIcon },
  { name: "Node.js", Icon: NodeIcon },
  { name: "TensorFlow", Icon: TensorFlowIcon },
  { name: "Flutter", Icon: FlutterIcon },
  { name: "PostgreSQL", Icon: PostgresIcon },
  { name: "Docker", Icon: DockerIcon },
  { name: "FastAPI", Icon: FastApiIcon },
  { name: "Firebase", Icon: FirebaseIcon },
];