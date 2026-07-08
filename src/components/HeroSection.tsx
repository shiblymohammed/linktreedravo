"use client";

import { motion, Variants } from "framer-motion";

// ── BRAND CONFIG ──────────────────────────────────────────────
// Update brand name, tagline, and logo here
const BRAND_NAME = "Dravohome";
const TAGLINE = "Crafting Timeless Furniture for Modern Living.";
// ─────────────────────────────────────────────────────────────

const letterVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.05,
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative flex flex-col items-center justify-center min-h-screen px-6 pt-24 pb-16 text-center"
    >
      {/* Logo */}
      <motion.div
        className="mb-8 relative flex items-center justify-center"
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.img
          src="/logo_light.png"
          alt="Dravohome logo"
          className="w-64 sm:w-80 h-auto object-contain z-10"
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>



      {/* Decorative line */}
      <motion.div
        className="flex items-center gap-4 mb-6"
        initial={{ opacity: 0, scaleX: 0 }}
        animate={{ opacity: 1, scaleX: 1 }}
        transition={{ delay: 0.8, duration: 0.8, ease: "easeOut" }}
      >
        <div className="h-px w-16 sm:w-24" style={{ background: "linear-gradient(90deg, transparent, #D4AF37)" }} />
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M8 0 L10 6 L16 8 L10 10 L8 16 L6 10 L0 8 L6 6 Z" fill="#D4AF37" />
        </svg>
        <div className="h-px w-16 sm:w-24" style={{ background: "linear-gradient(90deg, #D4AF37, transparent)" }} />
      </motion.div>

      {/* Tagline */}
      <motion.p
        className="text-base sm:text-xl lg:text-2xl max-w-lg leading-relaxed"
        style={{
          fontFamily: "'Cormorant Garamond', Georgia, serif",
          fontStyle: "italic",
          color: "rgba(255,255,255,0.7)",
          fontWeight: 300,
        }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.0, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        {TAGLINE}
      </motion.p>

      {/* Scroll hint */}
      <motion.div
        className="absolute bottom-10 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.6 }}
      >
        <span className="section-label text-xs tracking-widest" style={{ color: "rgba(212,175,55,0.6)" }}>
          Scroll
        </span>
        <motion.div
          className="w-px h-10"
          style={{ background: "linear-gradient(to bottom, rgba(212,175,55,0.6), transparent)" }}
          animate={{ scaleY: [1, 1.3, 1], opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </motion.div>
    </section>
  );
}
