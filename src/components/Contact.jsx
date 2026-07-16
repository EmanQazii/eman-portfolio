import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { GithubIcon, LinkedinIcon } from "./Icons";
import { ArrowUpRight, Send, Check, AlertCircle } from "lucide-react";
import { colors, fonts } from "../theme";
import { fadeUp } from "../animations";
import SectionBackground from "./SectionBackground";

const EASE = [0.22, 1, 0.36, 1];

function Field({ id, label, type = "text", textarea = false, value, onChange, placeholder }) {
  const [focused, setFocused] = useState(false);
  const fieldClasses = `${fonts.body} ${colors.ink} w-full rounded-2xl border bg-[#232327] px-5 py-4 text-sm outline-none transition-colors placeholder:text-ink-faint ${
    focused ? "border-accent" : "border-[#3a3a3f]"
  }`;

  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className={`${fonts.mono} ${colors.inkMuted} text-[11px] uppercase tracking-[0.2em]`}>
        {label}
      </label>
      {textarea ? (
        <textarea
          id={id}
          rows={4}
          value={value}
          onChange={onChange}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          placeholder={placeholder}
          className={`${fieldClasses} resize-none`}
        />
      ) : (
        <input
          id={id}
          type={type}
          value={value}
          onChange={onChange}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          placeholder={placeholder}
          className={fieldClasses}
        />
      )}
    </div>
  );
}

export default function Contact() {
  const reduce = useReducedMotion();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | sending | success | error
  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
        },
        { publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY }
      );
      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      console.error("EmailJS error:", err);
      setStatus("error");
    }
  };

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
                  cx="0"
                  r="0.5"
                  cy={y}
                  fill={i === 0 ? "var(--color-accent)" : "var(--color-accent-orange)"}
                  vectorEffect="non-scaling-stroke"
                  initial={{ cx: "0" }}
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
          className={`${fonts.display} ${colors.ink} mb-6 text-[10vw] font-bold uppercase leading-[0.92] tracking-tight sm:text-[7vw] lg:text-[5.5rem]`}
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
            onSubmit={handleSubmit}
            className="flex flex-col gap-9"
          >
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <Field id="name" label="Name" placeholder="Your Name" value={form.name} onChange={set("name")} />
              <Field id="email" label="Email" type="email" placeholder="your@email.com" value={form.email} onChange={set("email")} />
            </div>
            <Field id="message" label="Message" textarea placeholder="Message" value={form.message} onChange={set("message")} />

            <motion.button
              type="submit"
              disabled={status === "sending"}
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 320, damping: 18 }}
              className={`${fonts.mono} group relative mt-2 inline-flex w-full items-center justify-center gap-3 overflow-hidden rounded-2xl bg-accent px-8 py-4 text-sm font-semibold uppercase tracking-[0.15em] text-on-dark shadow-lg shadow-accent/30 transition-shadow hover:shadow-xl hover:shadow-accent/50 disabled:opacity-60 disabled:cursor-not-allowed`}
            >
              <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
              <span className="relative">
                {status === "sending" ? "Sending..." : status === "success" ? "Sent!" : "Send Message"}
              </span>
              {status === "success" ? (
                <Check strokeWidth={2} className="relative h-4 w-4" />
              ) : (
                <Send strokeWidth={2} className="relative h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              )}
            </motion.button>

            {status === "success" && (
              <p className={`${fonts.mono} text-xs text-accent-green flex items-center gap-2`}>
                <Check className="h-3.5 w-3.5" /> Message sent — I'll get back to you soon.
              </p>
            )}
            {status === "error" && (
              <p className={`${fonts.mono} text-xs text-red-400 flex items-center gap-2`}>
                <AlertCircle className="h-3.5 w-3.5" /> Something went wrong. Try emailing me directly below.
              </p>
            )}
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
              
              <a  href="mailto:emanqazi786@gmail.com"
                className={`${fonts.display} group inline-flex items-center gap-2 text-xl font-bold ${colors.ink} transition-colors hover:text-accent sm:text-2xl`}
              >
                emanqazi786@gmail.com
                <ArrowUpRight strokeWidth={2} className="h-5 w-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>

            {/* social links */}
            <div className="flex flex-col gap-px border-t border-white/10">
              
              <a  href="https://github.com/EmanQazii"
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
              
             <a    href="https://linkedin.com/in/eman-qazi"
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
              BS COMPUTER SCIENCE · AIR UNIVERSITY · 2023–2027 · GPA:3.81
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}