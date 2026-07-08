"use client";

import { motion } from "framer-motion";

// ── BRAND CONFIG ──────────────────────────────────────────────
// Update brand name, tagline, and logo here
const BRAND_NAME = "Dravohome";
const TAGLINE = "Crafting Timeless Furniture for Modern Living.";
// ─────────────────────────────────────────────────────────────

const letterVariants = {
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
      {/* Logo Mark */}
      <motion.div
        className="mb-8 relative"
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* Outer rotating ring */}
        <motion.div
          className="absolute inset-0 rounded-full"
          style={{
            border: "1px solid rgba(212,175,55,0.3)",
            width: "130px",
            height: "130px",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />

        {/* Inner pulsing ring */}
        <motion.div
          className="absolute inset-0 rounded-full"
          style={{
            border: "1px dashed rgba(212,175,55,0.15)",
            width: "160px",
            height: "160px",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
          animate={{ rotate: -360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        />

        {/* Logo container */}
        <motion.div
          className="relative w-24 h-24 rounded-full flex items-center justify-center"
          style={{
            background:
              "linear-gradient(135deg, rgba(212,175,55,0.15) 0%, rgba(212,175,55,0.05) 100%)",
            border: "1px solid rgba(212,175,55,0.4)",
            boxShadow:
              "0 0 40px rgba(212,175,55,0.2), inset 0 0 20px rgba(212,175,55,0.05)",
          }}
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          {/* Stylized DH monogram */}
          <svg
            width="48"
            height="48"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-label="Dravohome Logo"
          >
            {/* D letter */}
            <path
              d="M8 10 L8 38 L18 38 C26 38 32 32 32 24 C32 16 26 10 18 10 Z"
              stroke="url(#goldGradLogo)"
              strokeWidth="2.5"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {/* H letter */}
            <path
              d="M34 10 L34 38 M34 24 L44 24 M44 10 L44 38"
              stroke="url(#goldGradLogo)"
              strokeWidth="2.5"
              fill="none"
              strokeLinecap="round"
            />
            <defs>
              <linearGradient id="goldGradLogo" x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
                <stop stopColor="#E8C84A" />
                <stop offset="0.5" stopColor="#D4AF37" />
                <stop offset="1" stopColor="#B8960A" />
              </linearGradient>
            </defs>
          </svg>
        </motion.div>
      </motion.div>

      {/* Brand Name */}
      <motion.div
        className="overflow-hidden mb-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        <h1
          className="text-5xl sm:text-7xl lg:text-8xl font-serif tracking-tight leading-none"
          style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
        >
          {BRAND_NAME.split("").map((char, i) => (
            <motion.span
              key={i}
              className="inline-block"
              style={{
                background:
                  "linear-gradient(135deg, #E8C84A 0%, #D4AF37 50%, #B8960A 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
              custom={i}
              variants={letterVariants}
              initial="hidden"
              animate="visible"
            >
              {char}
            </motion.span>
          ))}
        </h1>
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
