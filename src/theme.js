// theme.js — single source of truth for colors and shared content.
// Actual color values now live in index.css (@theme block).
// Change a color there and it updates everywhere it's used here.

export const colors = {
  // base surfaces
  bg: "bg-surface",
  surfaceDark: "bg-surface-dark",

  // text
  ink: "text-ink",
  inkMuted: "text-ink-muted",
  inkFaint: "text-ink-faint",
  onDark: "text-on-dark",
  onDarkMuted: "text-on-dark-muted",

  // borders
  border: "border-ink/15",
  borderBg: "bg-ink/15",
  borderStrong: "border-ink/20",

  // accent (used deliberately, one color only)
  accentBg: "bg-accent",
  accentText: "text-accent",
  accentBorderHover: "hover:border-accent",
  accentTextHover: "hover:text-accent",

  // secondary accent (tiny touches only, e.g. ticker dots)
  secondaryDot: "bg-secondary",

  // composite building blocks
  chip: "border border-ink/20 text-ink-muted transition-colors hover:border-ink hover:bg-ink hover:text-on-dark",
  ctaPrimary: "bg-ink text-on-dark transition hover:bg-accent",
  ctaSecondary: "border border-ink/20 text-ink transition hover:border-ink",
  iconRail: "border border-ink/15 text-ink-muted transition-colors",
};

export const fonts = {
  display: "font-display",
  body: "font-sans",
  mono: "font-mono",
};

export const TECH_STACK = [
  "PYTHON",
  "JAVASCRIPT",
  "TYPESCRIPT",
  "FLUTTER",
  "FASTAPI",
  "POSTGRESQL",
  "TENSORFLOW",
  "REACT",
  "N8N",
  "FIREBASE",
  "DART",
  "SELENIUM",
];

export const ROLES = ["FULL STACK", "WEB", "MOBILE", "AI/ML", "AUTOMATION"];