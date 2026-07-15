import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { colors, fonts } from "../theme";

const NAV_LINKS = [
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <motion.header
      initial={{ opacity: 0, y: -24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        delay: 0.15,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={`fixed left-1/2 z-50 -translate-x-1/2 transition-all duration-300 ${
        scrolled ? "top-3" : "top-10"
      }`}
    >
      <nav
        className={`
          flex items-center gap-6 rounded-full
          border ${colors.border}
          bg-surface-dark/85
          backdrop-blur-xl
          shadow-sm
          transition-all duration-300
          ${scrolled ? "px-5 py-3" : "px-7 py-4"}
        `}
      >
        {/* Logo */}
        <a
          href="#"
          className={`flex items-center gap-2 whitespace-nowrap ${fonts.display}`}
        >
          <span className={`h-2 w-2 rounded-full ${colors.accentGreenBg}`} />

          <span
            className={`text-sm font-bold tracking-[0.2em] uppercase ${colors.ink}`}
          >
            Eman Qazi
          </span>
        </a>

        {/* Navigation Links */}
        <div className="hidden items-center gap-6 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`
                relative text-sm font-medium
                ${fonts.body}
                ${colors.inkMuted}
                transition-colors duration-200
                hover:text-ink
                after:absolute
                after:left-0
                after:-bottom-1
                after:h-[1px]
                after:w-0
                after:bg-accent
                after:transition-all
                after:duration-300
                hover:after:w-full
              `}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Resume Button */}
        <motion.a
          whileHover={{
            y: -2,
            transition: { duration: 0.15 },
          }}
          whileTap={{
            scale: 0.98,
          }}
          href="/resume.pdf"
          download="Eman_Qazi_Resume.pdf"
          className={`
            rounded-full px-5 py-2 text-sm font-medium
            ${colors.accentBg} ${colors.onDark}
          `}
        >
          Resume ↗
        </motion.a>
      </nav>
    </motion.header>
  );
}