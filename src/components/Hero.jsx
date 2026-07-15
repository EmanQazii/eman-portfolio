import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { colors, fonts, TECH_STACK, ROLES } from "../theme";
import { GithubIcon, LinkedinIcon } from "./Icons";

export default function Hero() {
  const reduceMotion = useReducedMotion();

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: {
      opacity: 0,
      y: 24,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.55,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section
      className={`relative min-h-screen w-full overflow-hidden ${colors.bg} ${colors.ink}`}
    >
      {/* Side Social Rail */}
      <div className="fixed right-5 top-1/2 z-30 hidden -translate-y-1/2 flex-col items-center gap-4 sm:flex">
        <span className={`h-8 w-px ${colors.borderBg}`} />

        <a
          href="https://github.com/EmanQazii"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className={`flex h-9 w-9 items-center justify-center rounded-full ${colors.iconRail} ${colors.accentBorderHover} ${colors.accentTextHover}`}
        >
          <GithubIcon />
        </a>

        <a
          href="https://linkedin.com/in/eman-qazi"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className={`flex h-9 w-9 items-center justify-center rounded-full ${colors.iconRail} ${colors.accentBorderHover} ${colors.accentTextHover}`}
        >
          <LinkedinIcon />
        </a>

        <span className={`h-8 w-px ${colors.borderBg}`} />
      </div>

      {/* Main Content */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="mx-auto flex min-h-screen w-full max-w-6xl flex-col justify-center px-6 pb-28 pt-24"
      >
        {/* Name */}
        <motion.div variants={item} className="mb-4 flex items-center gap-2">
          <span className={`inline-block h-2 w-2 ${colors.accentOrangeBg}`} />

          <span
            className={`text-xl font-bold uppercase tracking-wide sm:text-2xl ${fonts.display} ${colors.ink}`}
          >
            Eman Qazi
          </span>
        </motion.div>

        {/* Role Chips */}
        <motion.div variants={item} className="mb-8 flex flex-wrap gap-2">
          {ROLES.map((role) => (
            <span
              key={role}
              className={`rounded px-2.5 py-1 text-[11px] tracking-wide ${fonts.mono} ${colors.chipGreen}`}
            >
              {role}
            </span>
          ))}
        </motion.div>

        {/* Hero Heading */}
        <motion.h1
          variants={item}
          className={`text-5xl font-bold uppercase leading-[1.08] tracking-tight sm:text-6xl lg:text-[4.6rem] ${fonts.display}`}
        >
          <span className="block">
            MOST PEOPLE BUILD PROJECTS.
          </span>

<div className="mt-1 relative inline-block overflow-hidden">
  {/* Background swipe */}
  <motion.div
    initial={{ scaleX: 0 }}
    animate={{ scaleX: 1 }}
    transition={{
      delay: 0.75,
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    }}
    style={{ originX: 0 }}
    className={`absolute inset-0 ${colors.accentBg} z-0`}
  />

  {/* Text */}
  <motion.span
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{
      delay: 0.95,
      duration: 0.3,
    }}
    className={`relative inline-block px-[12px] py-[3px] ${colors.onDark}`}
  >
    I BUILD PRODUCTS.
  </motion.span>
</div>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={item}
          className={`mt-8 max-w-xl text-lg leading-relaxed ${colors.inkMuted}`}
        >
          End-to-end product development — from machine learning
          models to deployed applications.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={
            reduceMotion
              ? {}
              : {
                  opacity: 0,
                  y: 20,
                }
          }
          animate={
            reduceMotion
              ? {}
              : {
                  opacity: 1,
                  y: 0,
                }
          }
          transition={{
            delay: 1.1,
            duration: 0.5,
            ease: "easeOut",
          }}
          className="mt-9 flex flex-wrap items-center gap-4"
        >
          <motion.a
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
            href="#projects"
            className={`rounded-md px-6 py-3 text-sm font-semibold ${colors.chipOrange}`}
          >
            View Projects →
          </motion.a>

          <motion.a
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
            href="#contact"
            className={`rounded-md px-6 py-3 text-sm font-semibold ${colors.chipGreen}`}
          >
            Get in touch
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Tech Stack Ticker */}
      <motion.div
        variants={item}
        initial="hidden"
        animate="show"
        className={`absolute inset-x-0 bottom-0 overflow-hidden border-t ${colors.border} ${colors.surfaceDark} py-3`}
      >
        <motion.div
          className="flex w-max gap-8 whitespace-nowrap"
          animate={reduceMotion ? {} : { x: ["0%", "-50%"] }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {[...TECH_STACK, ...TECH_STACK].map((word, i) => (
            <span
              key={i}
              className={`flex items-center gap-8 text-xs tracking-widest ${fonts.mono} ${colors.onDarkMuted}`}
            >
              {word}
              <span
                className={`h-1 w-1 rounded-full ${colors.secondaryDot}`}
              />
            </span>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}