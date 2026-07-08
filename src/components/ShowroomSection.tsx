"use client";

import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { MapPin, ArrowUpRight, Clock, Star } from "lucide-react";

// ── SHOWROOM CONFIG ──────────────────────────────────────────
// Update showroom details here
const SHOWROOM = {
  address: "123 Luxury Avenue, Design District",
  city: "Mumbai, Maharashtra",
  hours: "Mon–Sat: 10AM – 8PM",
  rating: "4.9",
  reviews: "1.2K+",
};
// ────────────────────────────────────────────────────────────

const features = [
  { label: "Handcrafted", desc: "Each piece is made by master artisans" },
  { label: "Bespoke", desc: "Custom orders tailored to your vision" },
  { label: "Sustainable", desc: "Ethically sourced premium materials" },
];

export default function ShowroomSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [-30, 30]);

  return (
    <section
      id="showroom"
      ref={ref}
      className="relative px-4 sm:px-6 pb-20 max-w-xl mx-auto"
    >
      {/* Section Header */}
      <motion.div
        className="text-center mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <p className="section-label mb-3">Experience</p>
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
          Visit Our Showroom
        </h2>
      </motion.div>

      {/* Main Card */}
      <motion.div
        className="relative rounded-3xl overflow-hidden"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, delay: 0.2 }}
        style={{
          background: "rgba(255,255,255,0.04)",
          border: "1px solid rgba(212,175,55,0.15)",
          backdropFilter: "blur(20px)",
        }}
      >
        {/* Parallax decorative strip */}
        <motion.div
          className="relative h-40 overflow-hidden"
          style={{ y }}
        >
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(135deg, rgba(212,175,55,0.08) 0%, rgba(212,175,55,0.03) 50%, rgba(0,0,0,0) 100%)",
            }}
          />
          {/* Decorative pattern */}
          <svg
            className="absolute inset-0 w-full h-full opacity-10"
            viewBox="0 0 400 160"
            preserveAspectRatio="xMidYMid slice"
            aria-hidden="true"
          >
            <defs>
              <pattern id="showroomGrid" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#D4AF37" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="400" height="160" fill="url(#showroomGrid)" />
          </svg>

          {/* Showroom icon */}
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              className="text-center"
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-2"
                style={{
                  background: "linear-gradient(135deg, rgba(212,175,55,0.2), rgba(212,175,55,0.05))",
                  border: "1px solid rgba(212,175,55,0.3)",
                }}
              >
                <MapPin size={28} style={{ color: "#D4AF37" }} />
              </div>
            </motion.div>
          </div>
        </motion.div>

        <div className="p-6">
          {/* Address */}
          <div className="flex items-start gap-3 mb-4">
            <MapPin size={16} className="flex-shrink-0 mt-0.5" style={{ color: "#D4AF37" }} />
            <div>
              <p className="text-white font-medium">{SHOWROOM.address}</p>
              <p className="text-sm mt-0.5" style={{ color: "rgba(255,255,255,0.5)" }}>{SHOWROOM.city}</p>
            </div>
          </div>

          {/* Hours and Rating */}
          <div className="flex items-center gap-4 mb-6 pb-4" style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
            <div className="flex items-center gap-2">
              <Clock size={14} style={{ color: "rgba(212,175,55,0.7)" }} />
              <span className="text-sm" style={{ color: "rgba(255,255,255,0.55)" }}>{SHOWROOM.hours}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Star size={14} fill="#D4AF37" style={{ color: "#D4AF37" }} />
              <span className="text-sm font-medium" style={{ color: "#D4AF37" }}>{SHOWROOM.rating}</span>
              <span className="text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>({SHOWROOM.reviews} reviews)</span>
            </div>
          </div>

          {/* Features */}
          <div className="grid grid-cols-3 gap-3 mb-6">
            {features.map((f, i) => (
              <motion.div
                key={f.label}
                className="text-center p-3 rounded-2xl"
                style={{ background: "rgba(212,175,55,0.05)", border: "1px solid rgba(212,175,55,0.1)" }}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.4 + i * 0.1, duration: 0.4 }}
              >
                <p className="text-xs font-medium mb-1" style={{ color: "#D4AF37" }}>{f.label}</p>
                <p className="text-xs leading-tight" style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.65rem" }}>{f.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* CTA Button */}
          <motion.a
            href="https://maps.google.com"
            target="_blank"
            rel="noopener noreferrer"
            id="showroom-directions-btn"
            className="flex items-center justify-center gap-2 w-full py-3.5 rounded-2xl font-medium text-sm transition-all duration-300"
            style={{
              background: "linear-gradient(135deg, #D4AF37, #B8960A)",
              color: "#0D0D0D",
              boxShadow: "0 8px 30px rgba(212,175,55,0.3)",
            }}
            whileHover={{
              scale: 1.02,
              boxShadow: "0 12px 40px rgba(212,175,55,0.45)",
            }}
            whileTap={{ scale: 0.98 }}
          >
            Get Directions
            <ArrowUpRight size={16} />
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
}
