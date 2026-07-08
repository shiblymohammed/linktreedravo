"use client";

import { motion, useInView, Variants } from "framer-motion";
import { useRef, useCallback } from "react";
import { ArrowUpRight } from "lucide-react";

// ── SOCIAL LINKS CONFIG ─────────────────────────────────────────────────────
// Update the href values below with your actual social media URLs
const SOCIAL_LINKS = [
  {
    id: "instagram",
    platform: "Instagram",
    handle: "@dravohome",
    description: "Behind the craft. Interiors that inspire.",
    // ── UPDATE: Replace with your Instagram profile URL ──
    href: "https://www.instagram.com/dravohome",
    gradient: "linear-gradient(135deg, #833AB4 0%, #FD1D1D 50%, #F77737 100%)",
    glowColor: "rgba(253, 29, 29, 0.25)",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
        <circle cx="12" cy="12" r="4"/>
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
      </svg>
    ),
  },
  {
    id: "facebook",
    platform: "Facebook",
    handle: "@dravohome",
    description: "Latest arrivals, offers & showroom updates.",
    // ── UPDATE: Replace with your Facebook page URL ──
    href: "https://www.facebook.com/dravohome",
    gradient: "linear-gradient(135deg, #1877F2 0%, #0C5FDB 100%)",
    glowColor: "rgba(24, 119, 242, 0.25)",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
      </svg>
    ),
  },
  {
    id: "youtube",
    platform: "YouTube",
    handle: "@dravohome",
    description: "Craftsmanship tours, design films & more.",
    // ── UPDATE: Replace with your YouTube channel URL ──
    href: "https://www.youtube.com/@dravohome",
    gradient: "linear-gradient(135deg, #FF0000 0%, #CC0000 100%)",
    glowColor: "rgba(255, 0, 0, 0.2)",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.54C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/>
        <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="currentColor" stroke="none"/>
      </svg>
    ),
  },
  {
    id: "whatsapp",
    platform: "WhatsApp",
    handle: "Chat with us",
    description: "Direct inquiries, custom orders & support.",
    // ── UPDATE: Replace with your WhatsApp link (format: https://wa.me/YOURCOUNTRYCODE+PHONENUMBER) ──
    href: "https://wa.me/919999999999",
    gradient: "linear-gradient(135deg, #25D366 0%, #128C7E 100%)",
    glowColor: "rgba(37, 211, 102, 0.25)",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
      </svg>
    ),
  },
];
// ──────────────────────────────────────────────────────────────────────────────

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: i * 0.12,
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

function SocialCard({ link, index }: { link: (typeof SOCIAL_LINKS)[0]; index: number }) {
  const cardRef = useRef<HTMLAnchorElement>(null);

  // Ripple effect
  const handleClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const ripple = document.createElement("span");
    ripple.className = "ripple";
    const size = Math.max(rect.width, rect.height);
    ripple.style.cssText = `
      width: ${size}px;
      height: ${size}px;
      left: ${e.clientX - rect.left - size / 2}px;
      top: ${e.clientY - rect.top - size / 2}px;
    `;
    card.appendChild(ripple);
    ripple.addEventListener("animationend", () => ripple.remove());
  }, []);

  return (
    <motion.a
      ref={cardRef}
      id={`social-link-${link.id}`}
      href={link.href}
      target="_blank"
      rel="noopener noreferrer"
      className="ripple-container group block relative rounded-3xl overflow-hidden cursor-pointer"
      aria-label={`Visit Dravohome on ${link.platform}`}
      custom={index}
      variants={cardVariants}
      initial="hidden"
      whileHover={{
        y: -8,
        scale: 1.02,
        transition: { duration: 0.3, ease: "easeOut" },
      }}
      whileTap={{ scale: 0.98 }}
      onClick={handleClick}
      style={{
        background: "rgba(255, 255, 255, 0.05)",
        border: "1px solid rgba(255, 255, 255, 0.15)",
        borderTop: "1px solid rgba(255, 255, 255, 0.25)",
        borderLeft: "1px solid rgba(255, 255, 255, 0.25)",
        boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.25)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
      }}
    >
      {/* Platform color accent bar */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: link.gradient }}
      />

      {/* Hover glow */}
      <motion.div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse at center, ${link.glowColor} 0%, transparent 70%)`,
        }}
      />

      {/* 3D lighting overlay */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{
          background:
            "linear-gradient(135deg, rgba(255,255,255,0.05) 0%, transparent 50%)",
        }}
      />

      <div className="relative flex items-center gap-4 p-5 sm:p-6">
        {/* Icon container */}
        <motion.div
          className="flex-shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center relative overflow-hidden"
          style={{
            background: link.gradient,
            boxShadow: `0 8px 24px ${link.glowColor}`,
          }}
          whileHover={{ rotate: [0, -5, 5, 0] }}
          transition={{ duration: 0.4 }}
        >
          <span className="text-white">{link.icon}</span>
        </motion.div>

        {/* Text */}
        <div className="flex-1 min-w-0">
          <p
            className="text-xs tracking-widest uppercase mb-1"
            style={{ color: "rgba(212,175,55,0.7)", fontWeight: 500 }}
          >
            {link.platform}
          </p>
          <h3
            className="text-lg font-medium text-white truncate"
            style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.25rem" }}
          >
            {link.handle}
          </h3>
          <p className="text-sm mt-0.5 truncate" style={{ color: "rgba(255,255,255,0.45)" }}>
            {link.description}
          </p>
        </div>

        {/* Arrow */}
        <motion.div
          className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center"
          style={{ border: "1px solid rgba(212,175,55,0.25)", color: "rgba(212,175,55,0.7)" }}
          whileHover={{ backgroundColor: "rgba(212,175,55,0.15)", borderColor: "rgba(212,175,55,0.6)" }}
          transition={{ duration: 0.2 }}
        >
          <motion.div
            initial={{ x: 0, y: 0 }}
            whileHover={{ x: 3, y: -3 }}
            transition={{ duration: 0.2 }}
          >
            <ArrowUpRight size={18} />
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom shine */}
      <motion.div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 h-px w-0 group-hover:w-3/4 transition-all duration-500"
        style={{ background: link.gradient, opacity: 0.6 }}
      />
    </motion.a>
  );
}

export default function SocialLinks() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section id="social-links" className="relative px-4 sm:px-6 pb-20 max-w-xl mx-auto">
      {/* Section Header */}
      <motion.div
        className="text-center mb-10"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        ref={ref}
      >
        <p className="section-label mb-3">Connect</p>
        <h2
          className="text-3xl sm:text-4xl font-serif"
          style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            background: "linear-gradient(135deg, #E8C84A, #D4AF37, #fff)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          Follow Our Journey
        </h2>
      </motion.div>

      {/* Cards */}
      <motion.div
        className="flex flex-col gap-4"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {SOCIAL_LINKS.map((link, i) => (
          <SocialCard key={link.id} link={link} index={i} />
        ))}
      </motion.div>
    </section>
  );
}
