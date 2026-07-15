import { motion, useReducedMotion } from "framer-motion";
import { BrainCircuit, Workflow, Database, Boxes } from "lucide-react";
import { colors, fonts } from "../theme";
import { fadeUp } from "../animations";
import SectionBackground from "./SectionBackground";

const EASE = [0.22, 1, 0.36, 1];

const BUILDS = [
  {
    icon: Boxes,
    label: "FULL STACK PRODUCTS",
    desc: "Building interfaces, APIs, databases and deployment pipelines.",
    bg: "bg-accent",
  },
  {
    icon: BrainCircuit,
    label: "AI SYSTEMS",
    desc: "Computer vision, inference pipelines, LLM integrations.",
    bg: "bg-accent-orange",
  },
  {
    icon: Workflow,
    label: "AUTOMATION",
    desc: "Agent workflows, orchestration and business processes.",
    bg: "bg-accent-green",
  },
  {
    icon: Database,
    label: "DATA PRODUCTS",
    desc: "Scraping, analytics and insight generation.",
    bg: "bg-accent",
  },
];

const row = { hidden: {}, visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } } };
const item = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE } } };

export default function WhatIBuild() {
  const reduce = useReducedMotion();

  return (
    <section id="what-i-build" className={`relative w-full overflow-hidden px-6 py-20 ${colors.bg}`}>
      <SectionBackground tint="purple" />

      <div className="relative z-10 mx-auto w-full max-w-[1100px]">
        {/* header — aligned with Selected Work / About headings */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          className={`${fonts.mono} ${colors.accentText} mb-4 flex items-center gap-3 text-xs tracking-[0.3em]`}
        >
          <span className="inline-block h-px w-8 bg-accent" />
          WHAT I BUILD
        </motion.p>

        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: EASE, delay: 0.1 }}
          className={`${fonts.display} ${colors.ink} mb-10 max-w-2xl text-[30px] font-bold leading-[1.1] tracking-tight md:text-[42px]`}
        >
          I build products — and I&apos;ve <span className={colors.accentText}>shipped</span> them.
        </motion.h2>

        {/* what I build — solid color cards */}
        <motion.div
          variants={row}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="mb-8 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4"
        >
          {BUILDS.map(({ icon: Icon, label, desc, bg }) => (
            <motion.div
              key={label}
              variants={item}
              whileHover={{ y: -6, scale: 1.03 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className={`group relative flex flex-col gap-2 overflow-hidden rounded-xl p-4 shadow-lg ${bg} text-on-dark`}
            >
              {/* subtle sheen on hover */}
              <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
              <Icon strokeWidth={1.75} className="relative h-5 w-5 shrink-0 text-on-dark" />
              <span className={`${fonts.mono} relative text-[11px] font-semibold tracking-[0.14em] text-on-dark`}>
                {label}
              </span>
              <p className={`${fonts.body} relative text-[13px] leading-relaxed text-on-dark/85`}>
                {desc}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* proof strip — frontend shipment as evidence */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: EASE, delay: 0.2 }}
          className="group relative flex flex-col gap-3 overflow-hidden rounded-2xl border border-white/10 bg-surface-dark p-5 sm:flex-row sm:items-center sm:gap-5"
        >
          {/* status badge */}
          <div className={`${fonts.mono} flex shrink-0 items-center gap-2 text-[11px] tracking-[0.15em] text-accent-green`}>
            <span className="relative inline-flex h-2 w-2">
              {!reduce && (
                <motion.span
                  className="absolute inset-0 rounded-full bg-accent-green opacity-60"
                  animate={{ scale: [1, 2], opacity: [0.5, 0] }}
                  transition={{ duration: 1.8, repeat: Infinity, ease: "easeOut" }}
                />
              )}
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-green" />
            </span>
            SHIPPED · CLIENT
          </div>

          {/* divider */}
          <span className="hidden h-8 w-px bg-white/10 sm:block" />

          {/* evidence copy — frontend focus */}
          <p className={`${fonts.body} ${colors.inkMuted} flex-1 text-sm leading-relaxed`}>
            <span className={`${colors.ink} font-semibold`}>Frontend Developer</span> — built a
            chatbot-driven skincare app with personalized product recommendations, designing responsive
            mobile interfaces and smooth, user-facing experiences.
          </p>
        </motion.div>
      </div>
    </section>
  );
}