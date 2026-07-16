import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { colors, fonts } from "../theme";

const NAV_LINKS = [
  { label: "Projects", href: "#projects" },
  { label: "How I Work", href: "#how-i-work" },
  { label: "What I Build", href: "#what-i-build" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed left-1/2 z-50 w-[calc(100%-24px)] max-w-[640px] -translate-x-1/2 transition-all duration-300 sm:w-auto ${
          scrolled ? "top-3" : "top-4 sm:top-10"
        }`}
      >
        <nav
          className={`
            flex items-center justify-between gap-4 sm:gap-6 rounded-full
            border ${colors.border}
            bg-surface-dark/85
            backdrop-blur-xl
            shadow-sm
            transition-all duration-300
            px-4 py-2.5 sm:${scrolled ? "px-5 py-3" : "px-7 py-4"}
          `}
        >
          {/* Logo */}
          
          <a  href="#"
            className={`flex items-center gap-2 whitespace-nowrap ${fonts.display} shrink-0`}
          >
            <span className={`h-2 w-2 rounded-full ${colors.accentGreenBg} shrink-0`} />
            <span
              className={`text-xs sm:text-sm font-bold tracking-[0.15em] sm:tracking-[0.2em] uppercase ${colors.ink}`}
            >
              Eman Qazi
            </span>
          </a>

          {/* Desktop nav links */}
          <div className="hidden items-center gap-6 md:flex">
            {NAV_LINKS.map((link) => (
              
              <a  key={link.label}
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

          {/* Desktop resume button */}
          <motion.a
            whileHover={{ y: -2, transition: { duration: 0.15 } }}
            whileTap={{ scale: 0.98 }}
            href="/resume.pdf"
            download="Eman_Qazi_Resume.pdf"
            className={`
              hidden md:inline-block shrink-0
              rounded-full px-5 py-2 text-sm font-medium
              ${colors.accentBg} ${colors.onDark}
            `}
          >
            Resume ↗
          </motion.a>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMenuOpen((v) => !v)}
            className={`md:hidden shrink-0 ${colors.ink} p-1.5 -mr-1`}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>
      </motion.header>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-8 bg-surface-dark/98 backdrop-blur-xl md:hidden"
          >
            {NAV_LINKS.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.06 }}
                className={`${fonts.display} text-2xl font-bold ${colors.ink}`}
              >
                {link.label}
              </motion.a>
            ))}
            <motion.a
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: NAV_LINKS.length * 0.06 }}
              href="/resume.pdf"
              download="Eman_Qazi_Resume.pdf"
              className={`mt-4 rounded-full px-6 py-3 text-sm font-medium ${colors.accentBg} ${colors.onDark}`}
              onClick={() => setMenuOpen(false)}
            >
              Resume ↗
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}