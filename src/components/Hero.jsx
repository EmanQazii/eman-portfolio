import React, { useRef, useEffect, useState } from "react";
import {
  motion,
  AnimatePresence,
  useReducedMotion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { colors, fonts, TECH_STACK, ROLES } from "../theme";
import { GithubIcon, LinkedinIcon, TECH_ICONS } from "./Icons";

/* accent-only palette (no black/ink) */
const ACCENTS = ["text-accent", "text-accent-orange", "text-accent-green"];

/* Left role chips: purple / orange / green only, rotated for rhythm */
const ROLE_ACCENTS = [
  "border border-accent bg-accent text-white hover:bg-accent/80",
  "border border-accent-orange bg-accent-orange text-white hover:bg-accent-orange/80",
  "border border-accent-green bg-accent-green text-white hover:bg-accent-green/80",
];

/* Constellation slots — varied position, size & "shape" treatment.
   shape: "ring" | "plain" | "tile" so they don't all look identical. */
const SLOTS = [
  { x: 4, y: 2, size: 74, shape: "ring", every: 3200, delay: 0 },
  { x: 58, y: 6, size: 52, shape: "plain", every: 2600, delay: 700 },
  { x: 30, y: 24, size: 92, shape: "tile", every: 4200, delay: 300 },
  { x: 72, y: 34, size: 58, shape: "ring", every: 3000, delay: 1100 },
  { x: 6, y: 46, size: 60, shape: "plain", every: 3600, delay: 500 },
  { x: 46, y: 58, size: 84, shape: "tile", every: 4600, delay: 900 },
  { x: 20, y: 76, size: 50, shape: "plain", every: 2800, delay: 200 },
  { x: 66, y: 78, size: 68, shape: "ring", every: 3400, delay: 1300 },
];

export default function Hero() {
  const reduceMotion = useReducedMotion();
  const sectionRef = useRef(null);

  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);
  const smx = useSpring(mx, { stiffness: 60, damping: 20 });
  const smy = useSpring(my, { stiffness: 60, damping: 20 });
  const glowX = useTransform(smx, (v) => `${v * 100}%`);
  const glowY = useTransform(smy, (v) => `${v * 100}%`);
  const fieldX = useTransform(smx, (v) => (v - 0.5) * 28);
  const fieldY = useTransform(smy, (v) => (v - 0.5) * 28);

  useEffect(() => {
    if (reduceMotion) return;
    const el = sectionRef.current;
    if (!el) return;
    const onMove = (e) => {
      const r = el.getBoundingClientRect();
      mx.set((e.clientX - r.left) / r.width);
      my.set((e.clientY - r.top) / r.height);
    };
    el.addEventListener("mousemove", onMove);
    return () => el.removeEventListener("mousemove", onMove);
  }, [mx, my, reduceMotion]);

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.13, delayChildren: 0.15 } },
  };
  const item = {
    hidden: { opacity: 0, y: 24 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section
      ref={sectionRef}
      className={`relative min-h-screen w-full overflow-hidden ${colors.bg} ${colors.ink}`}
    >
      {/* BACKGROUND */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div
          className="absolute inset-0 opacity-[0.12]"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
            maskImage: "radial-gradient(circle at 30% 40%, black, transparent 75%)",
            WebkitMaskImage: "radial-gradient(circle at 30% 40%, black, transparent 75%)",
          }}
        />
        <motion.div
          className="absolute h-[40rem] w-[40rem] -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{
            left: reduceMotion ? "35%" : glowX,
            top: reduceMotion ? "42%" : glowY,
            background: "radial-gradient(circle, rgba(93,37,134,0.4), transparent 60%)",
            filter: "blur(40px)",
          }}
        />
        <div
          className="absolute right-[-8%] top-[8%] h-[26rem] w-[26rem] rounded-full opacity-60"
          style={{
            background: "radial-gradient(circle, rgba(249,129,40,0.15), transparent 62%)",
            filter: "blur(50px)",
          }}
        />
      </div>

      {/* SIDE SOCIAL RAIL */}
      <div className="fixed right-5 top-1/2 z-30 hidden -translate-y-1/2 flex-col items-center gap-4 lg:flex">
        <span className={`h-10 w-px ${colors.borderBg}`} />
        <a
          href="https://github.com/EmanQazii"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className={`flex h-10 w-10 items-center justify-center rounded-full transition-transform duration-200 hover:-translate-y-1 hover:scale-110 ${colors.iconRail} ${colors.accentBorderHover} ${colors.accentTextHover}`}
        >
          <GithubIcon />
        </a>
        <a
          href="https://linkedin.com/in/eman-qazi"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className={`flex h-10 w-10 items-center justify-center rounded-full transition-transform duration-200 hover:-translate-y-1 hover:scale-110 ${colors.iconRail} ${colors.accentBorderHover} ${colors.accentTextHover}`}
        >
          <LinkedinIcon />
        </a>
        <span className={`h-10 w-px ${colors.borderBg}`} />
      </div>

      {/* MAIN GRID */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 mx-auto grid min-h-screen w-full max-w-7xl grid-cols-1 items-center gap-12 px-6 pb-28 pt-24 lg:grid-cols-[1.3fr_0.7fr]"
      >
        {/* LEFT COLUMN */}
        <div className="max-w-3xl">
          <motion.div variants={item} className="mb-3 flex items-center gap-3">
            <span className={`inline-block h-2 w-2 ${colors.accentOrangeBg}`} />
            <span className={`text-xs font-bold uppercase tracking-[0.4em] ${fonts.mono} ${colors.inkFaint}`}>
              Developer / Product Builder
            </span>
          </motion.div>

          {/* NAME anchor */}
          <motion.div variants={item} className="mb-6">
            <h2 className={`text-4xl font-bold uppercase leading-none tracking-tight sm:text-5xl lg:text-6xl ${fonts.display} ${colors.ink}`}>
              Eman Qazi
            </h2>
            <motion.span
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.5, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              style={{ originX: 0 }}
              className={`mt-3 block h-1 w-28 ${colors.accentBg}`}
            />
          </motion.div>

          {/* Role chips — purple/orange/green only */}
          <motion.div variants={item} className="mb-8 flex flex-wrap gap-2">
            {ROLES.map((role, i) => (
              <motion.span
                key={role}
                whileHover={{ y: -4, scale: 1.06 }}
                whileTap={{ scale: 0.96 }}
                transition={{ type: "spring", stiffness: 320, damping: 18 }}
                className={`cursor-default rounded px-2.5 py-1 text-[11px] tracking-wide transition-colors ${fonts.mono} ${ROLE_ACCENTS[i % ROLE_ACCENTS.length]}`}
              >
                {role}
              </motion.span>
            ))}
          </motion.div>

          {/* Hook */}
          <motion.h1
            variants={item}
            className={`text-5xl font-bold uppercase leading-[1.05] tracking-tight sm:text-6xl lg:text-[4.6rem] ${fonts.display}`}
          >
            <span className={`block ${colors.inkMuted}`}>Most people</span>
            <span className="block">build projects.</span>
            <span className="mt-2 inline-block">
              <span className="relative inline-block overflow-hidden align-top">
                <motion.span
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.8, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  style={{ originX: 0 }}
                  className={`absolute inset-0 z-0 ${colors.accentBg}`}
                />
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1, duration: 0.3 }}
                  className={`relative z-10 inline-block px-3 py-1 ${colors.onDark}`}
                >
                  I build products.
                </motion.span>
              </span>
            </span>
          </motion.h1>

          <motion.p variants={item} className={`mt-8 max-w-xl text-lg leading-relaxed ${colors.inkMuted}`}>
            End-to-end product development — from machine learning models to
            deployed applications people actually use.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={item} className="mt-9 flex flex-wrap items-center gap-4">
            <motion.a
              whileHover={{ y: -4, scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 320, damping: 18 }}
              href="#projects"
              className={`rounded-md px-7 py-3.5 text-sm font-semibold shadow-lg shadow-accent-orange/20 transition-shadow hover:shadow-xl hover:shadow-accent-orange/40 ${colors.chipOrange}`}
            >
              View Projects →
            </motion.a>
            <motion.a
              whileHover={{ y: -4, scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 320, damping: 18 }}
              href="#contact"
              className={`rounded-md px-7 py-3.5 text-sm font-semibold shadow-lg shadow-accent-green/20 transition-shadow hover:shadow-xl hover:shadow-accent-green/40 ${colors.chipGreen}`}
            >
              Get in touch
            </motion.a>

            <div className="flex items-center gap-3 lg:hidden">
              <a href="https://github.com/EmanQazii" target="_blank" rel="noopener noreferrer" aria-label="GitHub"
                className={`flex h-11 w-11 items-center justify-center rounded-md transition-transform hover:-translate-y-1 hover:scale-110 ${colors.iconRail} ${colors.accentBorderHover} ${colors.accentTextHover}`}>
                <GithubIcon />
              </a>
              <a href="https://linkedin.com/in/eman-qazi" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"
                className={`flex h-11 w-11 items-center justify-center rounded-md transition-transform hover:-translate-y-1 hover:scale-110 ${colors.iconRail} ${colors.accentBorderHover} ${colors.accentTextHover}`}>
                <LinkedinIcon />
              </a>
            </div>
          </motion.div>
        </div>

        {/* RIGHT COLUMN — cycling icon constellation */}
        <motion.div
          variants={item}
          style={{ x: reduceMotion ? 0 : fieldX, y: reduceMotion ? 0 : fieldY }}
          className="relative hidden h-[34rem] lg:block"
          aria-hidden="true"
        >
          <span className={`absolute -top-4 right-0 text-[10px] uppercase tracking-[0.4em] ${fonts.mono} ${colors.inkFaint}`}>
            Working with
          </span>
          {SLOTS.map((slot, i) => (
            <IconSlot key={i} slot={slot} index={i} reduceMotion={reduceMotion} />
          ))}
        </motion.div>
      </motion.div>

      {/* BOTTOM TICKER */}
      <motion.div
        variants={item}
        initial="hidden"
        animate="show"
        className={`absolute inset-x-0 bottom-0 z-20 overflow-hidden border-t ${colors.border} ${colors.surfaceDark} py-3`}
      >
        <motion.div
          className="flex w-max gap-8 whitespace-nowrap"
          animate={reduceMotion ? {} : { x: ["0%", "-50%"] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          {[...TECH_STACK, ...TECH_STACK].map((word, i) => (
            <span key={i} className={`flex items-center gap-8 text-xs tracking-widest ${fonts.mono} ${colors.onDarkMuted}`}>
              {word}
              <span className={`h-1 w-1 rounded-full ${colors.secondaryDot}`} />
            </span>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}

/* A single constellation slot that cross-fades through different tech
   icons on its own timer — so the field is always changing. */
function IconSlot({ slot, index, reduceMotion }) {
  const [i, setI] = useState(index % TECH_ICONS.length);

  useEffect(() => {
    if (reduceMotion) return;
    const start = setTimeout(() => {
      const id = setInterval(() => {
        setI((prev) => (prev + SLOTS.length) % TECH_ICONS.length);
      }, slot.every);
      // store on element via closure cleanup
      cleanup.current = () => clearInterval(id);
    }, slot.delay);
    const cleanup = { current: () => {} };
    return () => {
      clearTimeout(start);
      cleanup.current();
    };
  }, [slot.every, slot.delay, reduceMotion]);

  const { name, Icon } = TECH_ICONS[i];
  const accent = ACCENTS[i % ACCENTS.length];

  const shapeClass =
    slot.shape === "ring"
      ? "rounded-full border border-current/30"
      : slot.shape === "tile"
      ? "rounded-xl border border-current/20 bg-current/5"
      : "";

  return (
    <motion.div
      className={`absolute flex items-center justify-center ${accent} ${shapeClass}`}
      style={{ left: `${slot.x}%`, top: `${slot.y}%`, width: slot.size, height: slot.size }}
      animate={
        reduceMotion
          ? {}
          : { y: [0, -12, 0], rotate: slot.shape === "tile" ? [0, 3, 0] : [0, 0, 0] }
      }
      transition={{ duration: 6 + (index % 4), repeat: Infinity, ease: "easeInOut", delay: slot.delay / 1000 }}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={name}
          initial={{ opacity: 0, scale: 0.5, filter: "blur(4px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          exit={{ opacity: 0, scale: 0.5, filter: "blur(4px)" }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="flex items-center justify-center"
          style={{ width: "60%", height: "60%" }}
        >
          <Icon width="100%" height="100%" aria-hidden="true" />
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
}