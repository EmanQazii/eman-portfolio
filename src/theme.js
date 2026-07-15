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

  // primary accent (purple) — used deliberately, main accent
  accentBg: "bg-accent",
  accentText: "text-accent",
  accentBorderHover: "hover:border-accent",
  accentTextHover: "hover:text-accent",

  // orange accent — sparing use (badges, highlights, hover states)
  accentOrangeBg: "bg-accent-orange",
  accentOrangeText: "text-accent-orange",
  accentOrangeBorderHover: "hover:border-accent-orange",

  // green accent — sparing use (success states, tags, alt highlights)
  accentGreenBg: "bg-accent-green",
  accentGreenText: "text-accent-green",
  accentGreenBorderHover: "hover:border-accent-green",

  // secondary accent (tiny touches only, e.g. ticker dots)
  secondaryDot: "bg-secondary",

  // composite building blocks
  chip: "border border-ink/20 text-ink-muted transition-colors hover:border-ink hover:bg-ink hover:text-on-dark",
  ctaPrimary: "bg-ink text-on-dark transition hover:bg-accent",
  ctaSecondary: "border border-ink/20 text-ink transition hover:border-ink",
  iconRail: "border border-ink/15 text-ink-muted transition-colors",

  // solid colored chips — white text, border matches fill
  chipGreen: "border border-accent-green bg-accent-green text-white transition-colors hover:bg-accent-green/80",
chipOrange: "border border-accent-orange bg-accent-orange text-white transition-colors hover:bg-accent-orange/80",
chipPurple: "border border-accent bg-accent text-white transition-colors hover:bg-accent/80",

  // solid colored cards — same idea, larger surface
  cardPurple: "border border-accent bg-accent text-white",
  cardOrange: "border border-accent-orange bg-accent-orange text-white",
  cardGreen: "border border-accent-green bg-accent-green text-white",

  // card surface (white cards on black bg) — kept for cases you still want white cards
  card: "bg-white text-ink",
  cardMuted: "bg-white/95 text-ink",
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