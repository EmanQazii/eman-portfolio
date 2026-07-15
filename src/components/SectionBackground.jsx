import { motion, useReducedMotion } from "framer-motion";

/* Shared animated backdrop for consistency across all sections.
   Usage: put <SectionBackground /> as the first child of a
   `position: relative` section, and keep your content at z-10. */
export default function SectionBackground({ tint = "purple" }) {
  const reduce = useReducedMotion();

  const primary =
    tint === "orange"
      ? "rgba(249,129,40,0.28)"
      : tint === "green"
      ? "rgba(80,184,72,0.24)"
      : "rgba(93,37,134,0.4)";

  return (
    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
      {/* fine grid */}
      <div
        className="absolute inset-0 opacity-[0.1]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage:
            "radial-gradient(circle at 30% 30%, black, transparent 78%)",
          WebkitMaskImage:
            "radial-gradient(circle at 30% 30%, black, transparent 78%)",
        }}
      />

      {/* drifting primary aurora */}
      <motion.div
        className="absolute h-[38rem] w-[38rem] rounded-full"
        style={{
          left: "20%",
          top: "10%",
          background: `radial-gradient(circle, ${primary}, transparent 60%)`,
          filter: "blur(48px)",
        }}
        animate={reduce ? {} : { x: [0, 80, 0], y: [0, 40, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* secondary warm aurora */}
      <motion.div
        className="absolute right-[-8%] bottom-[6%] h-[26rem] w-[26rem] rounded-full opacity-70"
        style={{
          background:
            "radial-gradient(circle, rgba(249,129,40,0.15), transparent 62%)",
          filter: "blur(50px)",
        }}
        animate={reduce ? {} : { x: [0, -60, 0], y: [0, -30, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}