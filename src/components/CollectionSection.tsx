"use client";

import { motion, useInView, Variants } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight, Sofa } from "lucide-react";

// ── COLLECTION CONFIG ───────────────────────────────────────
// Update collection items and link below
const COLLECTION_LINK = "https://www.instagram.com/dravohome"; // ── UPDATE link

const COLLECTION_ITEMS = [
  {
    id: "item-1",
    name: "Elara Lounge Chair",
    category: "Living Room",
    badge: "Bestseller",
    badgeColor: "#D4AF37",
    accent: "rgba(212,175,55,0.12)",
    iconPath: "M6 20 L6 12 Q6 8 10 8 L14 8 Q18 8 18 12 L18 20 M4 20 L20 20 M9 8 L9 4 Q9 3 10 3 L14 3 Q15 3 15 4 L15 8",
  },
  {
    id: "item-2",
    name: "Luxe Dining Table",
    category: "Dining",
    badge: "New",
    badgeColor: "#4A9D6F",
    accent: "rgba(74,157,111,0.12)",
    iconPath: "M3 8 L21 8 M3 8 L3 16 M21 8 L21 16 M8 16 L8 20 M16 16 L16 20 M3 16 L21 16",
  },
  {
    id: "item-3",
    name: "Royal Bed Frame",
    category: "Bedroom",
    badge: "Premium",
    badgeColor: "#7B68EE",
    accent: "rgba(123,104,238,0.12)",
    iconPath: "M2 10 L2 18 M22 10 L22 18 M2 14 L22 14 M2 10 Q2 6 6 6 L18 6 Q22 6 22 10 M5 10 L5 6 M19 10 L19 6",
  },
];
// ────────────────────────────────────────────────────────────

const cardVariants: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.15, duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function CollectionSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      id="collection"
      ref={ref}
      className="relative px-4 sm:px-6 pb-20 max-w-xl mx-auto"
    >
      {/* Header */}
      <motion.div
        className="text-center mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <p className="section-label mb-3">Craftsmanship</p>
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
          Latest Collection
        </h2>
        <p className="mt-2 text-sm" style={{ color: "rgba(255,255,255,0.45)" }}>
          Handpicked pieces for discerning interiors
        </p>
      </motion.div>

      {/* Collection Cards */}
      <motion.div
        className="flex flex-col gap-4"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {COLLECTION_ITEMS.map((item, i) => (
          <motion.div
            key={item.id}
            id={item.id}
            className="group relative rounded-2xl overflow-hidden flex items-center gap-4 p-4 sm:p-5 cursor-default"
            custom={i}
            variants={cardVariants}
            whileHover={{ x: 6, transition: { duration: 0.25, ease: "easeOut" } }}
            style={{
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.07)",
              backdropFilter: "blur(16px)",
            }}
          >
            {/* Category icon */}
            <div
              className="flex-shrink-0 w-14 h-14 rounded-xl flex items-center justify-center"
              style={{
                background: item.accent,
                border: `1px solid ${item.badgeColor}33`,
              }}
            >
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke={item.badgeColor}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d={item.iconPath} />
              </svg>
            </div>

            {/* Info */}
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1">
                <span
                  className="inline-block text-xs px-2 py-0.5 rounded-full font-medium"
                  style={{
                    background: `${item.badgeColor}20`,
                    color: item.badgeColor,
                    border: `1px solid ${item.badgeColor}40`,
                    fontSize: "0.65rem",
                    letterSpacing: "0.05em",
                  }}
                >
                  {item.badge}
                </span>
                <span className="text-xs" style={{ color: "rgba(255,255,255,0.35)" }}>
                  {item.category}
                </span>
              </div>
              <h3
                className="text-base font-medium text-white"
                style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.1rem" }}
              >
                {item.name}
              </h3>
            </div>

            {/* Arrow hint */}
            <div
              className="flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{ color: "rgba(212,175,55,0.6)" }}
            >
              <ArrowUpRight size={16} />
            </div>

            {/* Side accent */}
            <div
              className="absolute left-0 top-1/2 -translate-y-1/2 w-0.5 h-8 rounded-r-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{ background: item.badgeColor }}
            />
          </motion.div>
        ))}
      </motion.div>

      {/* View All CTA */}
      <motion.div
        className="mt-6"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ delay: 0.6, duration: 0.6 }}
      >
        <motion.a
          href={COLLECTION_LINK}
          target="_blank"
          rel="noopener noreferrer"
          id="view-collection-btn"
          className="flex items-center justify-center gap-2 w-full py-3.5 rounded-2xl text-sm font-medium transition-all duration-300"
          style={{
            background: "rgba(212,175,55,0.08)",
            border: "1px solid rgba(212,175,55,0.25)",
            color: "#D4AF37",
          }}
          whileHover={{
            background: "rgba(212,175,55,0.15)",
            borderColor: "rgba(212,175,55,0.5)",
            scale: 1.01,
          }}
          whileTap={{ scale: 0.98 }}
        >
          <Sofa size={16} />
          View Full Collection
          <ArrowUpRight size={14} />
        </motion.a>
      </motion.div>
    </section>
  );
}
