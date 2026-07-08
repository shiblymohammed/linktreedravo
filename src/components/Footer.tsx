"use client";

import { motion } from "framer-motion";

// ── FOOTER CONFIG ──────────────────────────────────────────
// Update brand name and social URLs in SocialLinks.tsx and here
const BRAND = "Dravohome";
const YEAR = new Date().getFullYear();

const FOOTER_SOCIALS = [
  {
    id: "footer-instagram",
    label: "Instagram",
    href: "https://www.instagram.com/dravohome", // ── UPDATE
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
        <circle cx="12" cy="12" r="4"/>
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
      </svg>
    ),
  },
  {
    id: "footer-facebook",
    label: "Facebook",
    href: "https://www.facebook.com/dravohome", // ── UPDATE
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
      </svg>
    ),
  },
  {
    id: "footer-youtube",
    label: "YouTube",
    href: "https://www.youtube.com/@dravohome", // ── UPDATE
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.54C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/>
        <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="currentColor" stroke="none"/>
      </svg>
    ),
  },
  {
    id: "footer-whatsapp",
    label: "WhatsApp",
    href: "https://wa.me/919999999999", // ── UPDATE
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
      </svg>
    ),
  },
];
// ────────────────────────────────────────────────────────────

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      id="footer"
      className="relative px-4 sm:px-6 pt-8 pb-12 max-w-xl mx-auto"
    >
      {/* Divider */}
      <div className="gold-divider mb-8" />

      {/* Brand mark */}
      <div className="text-center mb-6">
        <motion.button
          onClick={scrollToTop}
          className="text-2xl cursor-pointer"
          style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            background: "linear-gradient(135deg, #E8C84A, #D4AF37)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            letterSpacing: "-0.02em",
          }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          aria-label="Scroll to top"
        >
          {BRAND}
        </motion.button>
        <p className="text-xs mt-1" style={{ color: "rgba(255,255,255,0.3)", letterSpacing: "0.2em" }}>
          LUXURY FURNITURE
        </p>
      </div>

      {/* Social icons */}
      <div className="flex items-center justify-center gap-4 mb-8">
        {FOOTER_SOCIALS.map((social) => (
          <motion.a
            key={social.id}
            id={social.id}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.label}
            className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300"
            style={{
              background: "rgba(212,175,55,0.08)",
              border: "1px solid rgba(212,175,55,0.2)",
              color: "rgba(212,175,55,0.6)",
            }}
            whileHover={{
              scale: 1.15,
              background: "rgba(212,175,55,0.2)",
              borderColor: "rgba(212,175,55,0.5)",
              color: "#D4AF37",
            }}
            whileTap={{ scale: 0.9 }}
          >
            {social.icon}
          </motion.a>
        ))}
      </div>

      {/* Copyright */}
      <div className="text-center">
        <p className="text-xs" style={{ color: "rgba(255,255,255,0.3)" }}>
          © {YEAR} {BRAND}. All rights reserved.
        </p>
        <p className="text-xs mt-1" style={{ color: "rgba(255,255,255,0.2)" }}>
          Designed with{" "}
          <span style={{ color: "#D4AF37" }}>❤</span>
          {" "}for luxury living
        </p>
      </div>
    </footer>
  );
}
