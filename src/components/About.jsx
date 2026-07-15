import { motion } from "framer-motion";
import { Layers, BrainCircuit, Workflow, Rocket } from "lucide-react";
import { colors, fonts } from "../theme";
import { fadeUp } from '../animations';

const EASE = [0.22, 1, 0.36, 1];

const LIFECYCLE = [
  { label: "IDEA", n: "01" },
  { label: "SYSTEM DESIGN", n: "02" },
  { label: "BACKEND", n: "03" },
  { label: "FRONTEND", n: "04" },
  { label: "DEPLOY", n: "05" },
  { label: "ITERATE", n: "06" },
];

const CAPABILITIES = [
  {
    title: "Build",
    icon: Layers,
    description: "Full-stack applications, platforms and developer tools.",
    tint: "bg-accent",
  },
  {
    title: "Intelligence",
    icon: BrainCircuit,
    description: "ML systems, computer vision, AI integrations.",
    tint: "bg-secondary",
  },
  {
    title: "Automation",
    icon: Workflow,
    description: "Agent workflows, orchestration, business automation.",
    tint: "bg-accent",
  },
  {
    title: "Shipping",
    icon: Rocket,
    description: "Deployment, monitoring, products used by real people.",
    tint: "bg-secondary",
  },
];


export default function About() {
  return (
    <section
      className={`relative w-full flex flex-col justify-center px-6 py-20 overflow-hidden ${colors.bg}`}
    >
      {/* ambient accent glow, kept subtle */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 right-0 w-[520px] h-[520px] rounded-full opacity-[0.07] blur-3xl"
        style={{ background: "radial-gradient(circle, var(--color-accent), transparent 70%)" }}
      />

      <div className="relative mx-auto w-full max-w-[1200px]">
        {/* Section label */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className={`${fonts.mono} ${colors.accentText} text-xs tracking-[0.3em] mb-6 flex items-center gap-3`}
        >
          <span className="w-8 h-px bg-accent inline-block" />
          PHILOSOPHY
        </motion.p>

        {/* Headline */}
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: EASE, delay: 0.1 }}
          className={`${fonts.display} ${colors.ink} font-bold tracking-tight text-[42px] md:text-[56px] leading-[1.05] mb-14 max-w-3xl`}
        >
          I build products,
          <br />
          not just <span className={colors.accentText}>applications</span>.
        </motion.h2>

        {/* Philosophy paragraph */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: EASE, delay: 0.2 }}
          className={`${fonts.body} ${colors.inkMuted} text-lg md:text-xl leading-relaxed max-w-2xl mb-[72px]`}
        >
          I work across backend systems, frontend experiences, machine learning
          pipelines, and deployment infrastructure — bridging the gap between
          idea and production.
        </motion.p>

        {/* Lifecycle visualization */}
        <div className="mb-12">
          {/* Desktop: horizontal track */}
          <div className="hidden md:block relative pt-2 pb-6">
            {/* base track */}
            <div className={`absolute top-[27px] left-0 right-0 h-px ${colors.borderBg}`} />
            {/* animated accent track */}
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 1.2, ease: EASE }}
              style={{ originX: 0 }}
              className="absolute top-[27px] left-0 right-0 h-px bg-accent"
            />

            <div className="relative flex justify-between">
              {LIFECYCLE.map((stage, i) => (
                <motion.div
                  key={stage.label}
                  className="group flex flex-col items-center gap-3 cursor-default"
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.5, ease: EASE, delay: i * 0.12 }}
                >
                  <motion.div
                    whileHover={{ scale: 1.15 }}
                    transition={{ duration: 0.25, ease: EASE }}
                    className={`w-14 h-14 rounded-2xl flex items-center justify-center shadow-sm ${
                      i % 2 === 0 ? "bg-accent" : "bg-secondary"
                    }`}
                  >
                    <span className={`${fonts.mono} text-xs font-medium text-on-dark`}>
                      {stage.n}
                    </span>
                  </motion.div>
                  <span
                    className={`${fonts.mono} ${colors.inkMuted} text-[10px] tracking-[0.15em] text-center transition-colors duration-300 group-hover:text-accent`}
                  >
                    {stage.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Mobile: vertical track */}
          <div className="md:hidden relative pl-8">
            <div className={`absolute left-[15px] top-2 bottom-2 w-px ${colors.borderBg}`} />
            <motion.div
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1.2, ease: EASE }}
              style={{ originY: 0 }}
              className="absolute left-[15px] top-2 bottom-2 w-px bg-accent"
            />
            <div className="flex flex-col gap-7">
              {LIFECYCLE.map((stage, i) => (
                <motion.div
                  key={stage.label}
                  className="relative flex items-center gap-4"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.5, ease: EASE, delay: i * 0.1 }}
                >
                  <div
                    className={`absolute -left-8 w-8 h-8 rounded-xl flex items-center justify-center shadow-sm ${
                      i % 2 === 0 ? "bg-accent" : "bg-secondary"
                    }`}
                  >
                    <span className={`${fonts.mono} text-[10px] font-medium text-on-dark`}>
                      {stage.n}
                    </span>
                  </div>
                  <span
                    className={`${fonts.mono} ${colors.inkMuted} text-xs tracking-[0.15em]`}
                  >
                    {stage.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Capability cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-[48px]">
          {CAPABILITIES.map(({ title, icon: Icon, description, tint }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: EASE, delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className={`group relative border ${colors.border} bg-surface rounded-[20px] p-7 overflow-hidden transition-all duration-300 hover:border-accent hover:shadow-[0_16px_40px_rgba(10,126,140,0.12)]`}
            >
              {/* corner tint that blooms on hover */}
              <div
                aria-hidden="true"
                className={`absolute -top-10 -right-10 w-32 h-32 rounded-full ${tint} opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-[0.15]`}
              />

              <motion.div
                whileHover={{ rotate: 6, scale: 1.05 }}
                transition={{ duration: 0.3, ease: EASE }}
                className={`relative w-12 h-12 rounded-xl ${tint} flex items-center justify-center mb-6 shadow-sm`}
              >
                <Icon strokeWidth={1.75} className="w-5 h-5 text-on-dark" />
              </motion.div>

              <h3
                className={`relative ${fonts.display} ${colors.ink} font-semibold text-lg mb-2 transition-colors duration-300 group-hover:text-accent`}
              >
                {title}
              </h3>
              <p className={`relative ${fonts.body} ${colors.inkMuted} text-sm leading-relaxed`}>
                {description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}