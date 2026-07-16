import { motion, useReducedMotion } from "framer-motion";
import { Lightbulb, PenTool, Code2, Rocket, RefreshCw } from "lucide-react";
import { colors, fonts } from "../theme";
import { fadeUp } from "../animations";
import SectionBackground from "./SectionBackground";

const EASE = [0.22, 1, 0.36, 1];

/* five plain-language stages — accents cycle purple / orange / green */
const STEPS = [
  {
    icon: Lightbulb,
    title: "Understand",
    desc: "Frame the real problem before writing a single line of code.",
    a: "orange",
  },
  {
    icon: PenTool,
    title: "Design",
    desc: "Shape the architecture, data flow, and how it should feel to use.",
    a: "purple",
  },
  {
    icon: Code2,
    title: "Build",
    desc: "Engineer it end to end — backend, AI, and interface as one system.",
    a: "green",
  },
  {
    icon: Rocket,
    title: "Ship",
    desc: "Deploy real products people can actually open and use.",
    a: "orange",
  },
  {
    icon: RefreshCw,
    title: "Improve",
    desc: "Measure how it performs, then iterate and make it better.",
    a: "purple",
  },
];

const ACCENTS = {
  purple: { text: "text-accent", bg: "bg-accent", border: "hover:border-accent" },
  orange: { text: "text-accent-orange", bg: "bg-accent-orange", border: "hover:border-accent-orange" },
  green: { text: "text-accent-green", bg: "bg-accent-green", border: "hover:border-accent-green" },
};

const grid = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.14, delayChildren: 0.1 } },
};
const card = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE } },
};

export default function About() {
  const reduce = useReducedMotion();

  return (
    <section 
    id="how-i-work"
    className={`relative w-full overflow-hidden px-6 py-[clamp(56px,12vw,96px)] ${colors.bg}`}>
      <SectionBackground tint="purple" />

      <div className="relative z-10 mx-auto w-full max-w-[1100px]">
        {/* label */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className={`${fonts.mono} ${colors.accentText} mb-6 flex items-center gap-3 text-xs tracking-[0.3em]`}
        >
          <span className="inline-block h-px w-8 bg-accent" />
          HOW I WORK
        </motion.p>

        {/* headline */}
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: EASE, delay: 0.1 }}
          className={`${fonts.display} ${colors.ink} mb-4 max-w-2xl text-[38px] font-bold leading-[1.05] tracking-tight md:text-[52px]`}
        >
          I build <span className={colors.accentText}>products,</span>
          <br />
          not just applications.
        </motion.h2>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: EASE, delay: 0.2 }}
          className={`${fonts.body} ${colors.inkMuted} mb-16 max-w-xl text-base leading-relaxed md:text-lg`}
        >
         I work across backend systems, frontend experiences, machine learning pipelines, and deployment infrastructure — bridging the gap between idea and production.
        </motion.p>

        {/* ---------------- PROCESS FLOW ---------------- */}
        <motion.div
          variants={grid}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          className="relative"
        >
          {/* connecting line (desktop) */}
          <div className="pointer-events-none absolute inset-x-0 top-7 hidden md:block">
            <div className="relative mx-[10%] h-px bg-white/10">
              <motion.div
                className="absolute inset-y-0 left-0 bg-accent"
                initial={{ width: "0%" }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: EASE, delay: 0.3 }}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-5 md:gap-4">
            {STEPS.map((step, i) => {
              const Icon = step.icon;
              const accent = ACCENTS[step.a];
              return (
                <motion.div
                  key={step.title}
                  variants={card}
                  whileHover={{ y: -6 }}
                  transition={{ type: "spring", stiffness: 300, damping: 22 }}
                  className={`group relative flex flex-col items-center rounded-2xl border border-white/10 bg-surface-dark p-5 text-center transition-colors duration-300 ${accent.border}`}
                >
                  {/* step number */}
                  <span
                    className={`${fonts.mono} ${colors.inkFaint} absolute right-3 top-3 text-[10px] tracking-widest`}
                  >
                    0{i + 1}
                  </span>

                  {/* icon badge */}
                  <div className="relative mb-4">
                    {!reduce && (
                      <motion.span
                        className={`absolute inset-0 rounded-xl ${accent.bg}`}
                        animate={{ scale: [1, 1.45], opacity: [0.3, 0] }}
                        transition={{ duration: 2.4, repeat: Infinity, ease: "easeOut", delay: i * 0.25 }}
                      />
                    )}
                    <div className={`relative flex h-14 w-14 items-center justify-center rounded-xl ${accent.bg} shadow-lg`}>
                      <Icon strokeWidth={1.75} className="h-6 w-6 text-on-dark" />
                    </div>
                  </div>

                  <h3 className={`${fonts.display} ${colors.ink} mb-1.5 text-base font-bold`}>
                    {step.title}
                  </h3>
                  <p className={`${fonts.body} ${colors.inkMuted} text-sm leading-relaxed`}>
                    {step.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

      </div>
    </section>
  );
}