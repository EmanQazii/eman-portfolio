import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { GithubIcon, LinkedinIcon } from "./Icons";
import { ArrowUpRight, Send } from "lucide-react";
import { colors, fonts } from "../theme";
import { fadeUp } from "../animations";
import SectionBackground from "./SectionBackground";

const EASE = [0.22, 1, 0.36, 1];

function Field({ id, label, type = "text", textarea = false, value, onChange }) {
  const [focused, setFocused] = useState(false);
  const active = focused || value.length > 0;
  return (
    <div className="relative">
      <label
        htmlFor={id}
        className={`${fonts.mono} pointer-events-none absolute left-0 text-[11px] uppercase tracking-[0.2em] transition-all duration-300 ${
          active ? "-top-1 text-accent" : "top-3 text-ink-faint"
        }`}
      >
        {label}
      </label>
      {textarea ? (
        <textarea
          id={id}
          rows={3}
          value={value}
          onChange={onChange}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          className={`${fonts.body} ${colors.ink} w-full resize-none border-b border-white/15 bg-transparent pb-2 pt-4 text-base outline-none transition-colors focus:border-accent`}
        />
      ) : (
        <input
          id={id}
          type={type}
          value={value}
          onChange={onChange}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          className={`${fonts.body} ${colors.ink} w-full border-b border-white/15 bg-transparent pb-2 pt-4 text-base outline-none transition-colors focus:border-accent`}
        />
      )}
      {/* animated underline accent */}
      <motion.span
        className="absolute bottom-0 left-0 h-px bg-accent"
        initial={false}
        animate={{ width: focused ? "100%" : "0%" }}
        transition={{ duration: 0.4, ease: EASE }}
      />
    </div>
  );
}

export default function Contact() {
  const reduce = useReducedMotion();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const mailto = `mailto:emanqazi786@gmail.com?subject=${encodeURIComponent(
    form.name ? `Hello from ${form.name}` : "Let's build something"
  )}&body=${encodeURIComponent(form.message + (form.email ? `\n\n— ${form.email}` : ""))}`;

  return (
    <section id="contact" className={`relative w-full overflow-hidden px-6 py-24 ${colors.bg}`}>
      <SectionBackground tint="purple" />

      {/* extended ambient motion */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden" aria-hidden="true">
        <svg className="absolute inset-0 h-full w-full opacity-50" viewBox="0 0 100 100" preserveAspectRatio="none">
          {[30, 70].map((y, i) => (
            <g key={i}>
              <line x1="0" y1={y} x2="100" y2={y} stroke="rgba(255,255,255,0.05)" strokeWidth="0.15" vectorEffect="non-scaling-stroke" />
              {!reduce && (
                <motion.circle
                  r="0.5"
                  cy={y}
                  fill={i === 0 ? "var(--color-accent)" : "var(--color-accent-orange)"}
                  vectorEffect="non-scaling-stroke"
                  animate={{ cx: ["0", "100"] }}
                  transition={{ duration: 8 + i * 2, repeat: Infinity, ease: "linear", delay: i * 1.5 }}
                />
              )}
            </g>
          ))}
        </svg>
        {!reduce && (
          <motion.div
            className="absolute inset-x-0 h-32"
            style={{ background: "linear-gradient(to bottom, transparent, rgba(93,37,134,0.08), transparent)" }}
            animate={{ top: ["-15%", "100%"] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
        )}
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1100px]">
        {/* eyebrow — aligned with other sections */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          className={`${fonts.mono} ${colors.accentText} mb-6 flex items-center gap-3 text-xs tracking-[0.3em]`}
        >
          <span className="inline-block h-px w-8 bg-accent" />
          GET IN TOUCH
        </motion.p>

        {/* oversized editorial heading */}
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: EASE, delay: 0.1 }}
          className={`${fonts.display} ${colors.ink} mb-6 text-[13vw] font-bold uppercase leading-[0.92] tracking-tight sm:text-[10vw] lg:text-[7.5rem]`}
        >
          Let&apos;s build
          <br />
          <span className={colors.accentText}>something real.</span>
        </motion.h2>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: EASE, delay: 0.2 }}
          className={`${fonts.body} ${colors.inkMuted} mb-16 max-w-md text-base leading-relaxed md:text-lg`}
        >
          Building AI products, automation systems, or full-stack experiences? Have an idea worth building?
        </motion.p>

        {/* form + contact block */}
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-[1.2fr_0.8fr] lg:gap-20">
          {/* FORM */}
          <motion.form
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.25 }}
            onSubmit={(e) => {
              e.preventDefault();
              window.location.href = mailto;
            }}
            className="flex flex-col gap-9"
          >
            <Field id="name" label="Your Name" value={form.name} onChange={set("name")} />
            <Field id="email" label="Email Address" type="email" value={form.email} onChange={set("email")} />
            <Field id="message" label="Message" textarea value={form.message} onChange={set("message")} />

            <motion.button
              type="submit"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 320, damping: 18 }}
              className={`${fonts.mono} group relative mt-2 inline-flex w-fit items-center gap-3 overflow-hidden rounded-full bg-accent px-8 py-4 text-sm font-semibold uppercase tracking-[0.15em] text-on-dark shadow-lg shadow-accent/30 transition-shadow hover:shadow-xl hover:shadow-accent/50`}
            >
              <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
              <span className="relative">Send Message</span>
              <Send strokeWidth={2} className="relative h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </motion.button>
          </motion.form>

          {/* CONTACT BLOCK */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.35 }}
            className="flex flex-col gap-8"
          >
            {/* direct email — first class */}
            <div>
              <span className={`${fonts.mono} ${colors.inkFaint} mb-3 block text-[11px] uppercase tracking-[0.2em]`}>
                Or email directly
              </span>
              <a
                href="mailto:emanqazi786@gmail.com"
                className={`${fonts.display} group inline-flex items-center gap-2 text-xl font-bold ${colors.ink} transition-colors hover:text-accent sm:text-2xl`}
              >
                emanqazi786@gmail.com
                <ArrowUpRight strokeWidth={2} className="h-5 w-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>

            {/* social links */}
            <div className="flex flex-col gap-px border-t border-white/10">
              <a
                href="https://github.com/EmanQazii"
                target="_blank"
                rel="noopener noreferrer"
                className={`${fonts.mono} group flex items-center justify-between border-b border-white/10 py-4 text-sm tracking-wide ${colors.inkMuted} transition-colors hover:text-accent-orange`}
              >
                <span className="flex items-center gap-3">
                  <GithubIcon strokeWidth={1.75} className="h-4 w-4" />
                  GitHub
                </span>
                <ArrowUpRight strokeWidth={2} className="h-4 w-4 opacity-0 transition-all group-hover:translate-x-0.5 group-hover:opacity-100" />
              </a>
              <a
                href="https://linkedin.com/in/eman-qazi"
                target="_blank"
                rel="noopener noreferrer"
                className={`${fonts.mono} group flex items-center justify-between border-b border-white/10 py-4 text-sm tracking-wide ${colors.inkMuted} transition-colors hover:text-accent-green`}
              >
                <span className="flex items-center gap-3">
                  <LinkedinIcon strokeWidth={1.75} className="h-4 w-4" />
                  LinkedIn
                </span>
                <ArrowUpRight strokeWidth={2} className="h-4 w-4 opacity-0 transition-all group-hover:translate-x-0.5 group-hover:opacity-100" />
              </a>
            </div>

            {/* subtle education context */}
            <p className={`${fonts.mono} ${colors.inkFaint} mt-auto text-[11px] leading-relaxed tracking-[0.12em]`}>
              BS COMPUTER SCIENCE · AIR UNIVERSITY · 2023–2027 · GPA: 3.81
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}