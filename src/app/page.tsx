"use client";

import { motion } from "framer-motion";
import { useCallback, useRef } from "react";
import { Globe, FileText, ChevronRight } from "lucide-react";

// ════════════════════════════════════════════════════════════
// ── BRAND CONFIG ─────────────────────────────────────────
const BRAND_NAME  = "Dravohome";
const BRAND_LABEL = "Premium Modern Furniture & Experience Centre";
// ════════════════════════════════════════════════════════════

/* ── Official brand icon SVGs ────────────────────────────── */

const InstagramIcon = () => (
  <svg width="100%" height="100%" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <radialGradient id="ig-g" cx="30%" cy="107%" r="150%">
        <stop offset="0%"   stopColor="#ffd600"/>
        <stop offset="25%"  stopColor="#ff7a00"/>
        <stop offset="50%"  stopColor="#ff0069"/>
        <stop offset="75%"  stopColor="#d300c5"/>
        <stop offset="100%" stopColor="#7638fa"/>
      </radialGradient>
    </defs>
    <rect width="56" height="56" rx="14" fill="url(#ig-g)"/>
    <rect x="15" y="15" width="26" height="26" rx="7" stroke="white" strokeWidth="2.4" fill="none"/>
    <circle cx="28" cy="28" r="7" stroke="white" strokeWidth="2.4" fill="none"/>
    <circle cx="39.5" cy="16.5" r="2" fill="white"/>
  </svg>
);

const YouTubeIcon = () => (
  <svg width="100%" height="100%" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="56" height="56" rx="14" fill="#FF0000"/>
    <path d="M46 20.3a4.1 4.1 0 0 0-2.9-2.9C40.3 17 28 17 28 17s-12.3 0-15.1.4A4.1 4.1 0 0 0 10 20.3 42.7 42.7 0 0 0 9.5 28c0 2.6.1 5.2.5 7.7a4.1 4.1 0 0 0 2.9 2.9C15.7 39 28 39 28 39s12.3 0 15.1-.4a4.1 4.1 0 0 0 2.9-2.9 42.7 42.7 0 0 0 .5-7.7 42.7 42.7 0 0 0-.5-7.7z" fill="white" fillOpacity="0.95"/>
    <path d="M24 33l9.5-5L24 23v10z" fill="#FF0000"/>
  </svg>
);

const WhatsAppIcon = () => (
  <svg width="100%" height="100%" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="56" height="56" rx="14" fill="#25D366"/>
    <path fillRule="evenodd" clipRule="evenodd" d="M28 12C19.2 12 12 19.2 12 28c0 2.9.78 5.6 2.15 8L12 44l8.28-2.1A16 16 0 0 0 28 44c8.8 0 16-7.2 16-16S36.8 12 28 12zM21 21.3c.35 0 .72.01 1.05.02.35.02.72.07 1.06.72l1.37 3.18c.24.58.09 1.28-.35 1.74l-.83.95c-.22.24-.24.57-.07.84.72 1.18 1.8 2.46 3 3.5 1.02.93 2.23 1.77 3.55 2.35.3.14.65.07.88-.17l.9-1.06c.42-.48 1.08-.7 1.69-.47l3.37 1.3c.66.26 1.06.93.96 1.63-.18 1.42-.81 2.67-1.8 3.52-.9.78-2.1 1.1-3.33.9-2.64-.48-6.6-2.14-9.96-5.5-3.37-3.36-4.94-7.3-5.3-9.94-.18-1.2.12-2.37.88-3.2.72-.79 1.68-1.23 2.93-1.25z" fill="white"/>
  </svg>
);

// ════════════════════════════════════════════════════════════
// ── SOCIAL LINKS ───────────────────────────
const SOCIAL_LINKS = [
  {
    id: "link-instagram",
    label: "Instagram",
    href: "https://www.instagram.com/dravohome", 
    icon: <InstagramIcon />,
  },
  {
    id: "link-whatsapp",
    label: "WhatsApp",
    href: "https://wa.me/919999999999", // Replace with actual number
    icon: <WhatsAppIcon />,
  },
  {
    id: "link-youtube",
    label: "YouTube",
    href: "https://www.youtube.com/@dravohome", 
    icon: <YouTubeIcon />,
  }
];

// ════════════════════════════════════════════════════════════
// ── PRIMARY LINKS ────────────────────────────
const PRIMARY_LINKS = [
  {
    id: "link-website",
    label: "Visit Our Website",
    sub: "dravohome.com",
    href: "https://dravohome.com",
    icon: <Globe size={22} strokeWidth={1.5} />,
  },
  {
    id: "link-brochure",
    label: "View Brochures",
    sub: "Explore our latest collections",
    href: "/brochures.pdf", // Update with actual link or route
    icon: <FileText size={22} strokeWidth={1.5} />,
  }
];
// ════════════════════════════════════════════════════════════

/* ── Primary Link Button Component ─────────────────────────────── */
function PrimaryLinkButton({ link, index }: { link: (typeof PRIMARY_LINKS)[0]; index: number }) {
  const ref = useRef<HTMLAnchorElement>(null);

  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>) => {
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const ripple = document.createElement("span");
      ripple.className = "ripple";
      const s = Math.max(rect.width, rect.height);
      ripple.style.cssText = `width:${s}px;height:${s}px;left:${
        e.clientX - rect.left - s / 2
      }px;top:${e.clientY - rect.top - s / 2}px;`;
      el.appendChild(ripple);
      ripple.addEventListener("animationend", () => ripple.remove());
    },
    []
  );

  return (
    <motion.a
      ref={ref}
      id={link.id}
      href={link.href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${link.label}`}
      className="ripple-container group relative flex items-center justify-between gap-4 rounded-[24px] overflow-hidden"
      style={{
        padding: "18px 24px",
        background: "rgba(255, 255, 255, 0.05)",
        border: "1px solid rgba(255, 255, 255, 0.15)",
        borderTop: "1px solid rgba(255, 255, 255, 0.25)",
        borderLeft: "1px solid rgba(255, 255, 255, 0.25)",
        boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.25)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
      }}
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.35 + index * 0.1,
        duration: 0.4,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      whileHover={{
        y: -3,
        background: "rgba(255, 255, 255, 0.1)",
        borderColor: "rgba(255, 255, 255, 0.3)",
        boxShadow: "0 12px 40px 0 rgba(0, 0, 0, 0.35)",
        transition: { duration: 0.2 },
      }}
      whileTap={{ scale: 0.97, transition: { duration: 0.1 } }}
      onClick={handleClick}
    >
      <div className="flex items-center gap-5">
        <div 
          className="w-12 h-12 rounded-full flex items-center justify-center bg-white/5 border border-white/10 group-hover:bg-white/10 transition-colors"
          style={{ color: "#D4AF37" }}
        >
          {link.icon}
        </div>
        <div className="flex flex-col">
          <span
            style={{
              fontSize: "1.05rem",
              fontWeight: 600,
              color: "#ffffff",
              letterSpacing: "-0.01em",
              fontFamily: "'Inter', sans-serif",
            }}
          >
            {link.label}
          </span>
          <span
            style={{
              fontSize: "0.78rem",
              color: "rgba(255,255,255,0.5)",
              fontFamily: "'Inter', sans-serif",
              marginTop: "2px"
            }}
          >
            {link.sub}
          </span>
        </div>
      </div>
      
      {/* Right arrow */}
      <div className="w-8 h-8 rounded-full flex items-center justify-center bg-white/10 opacity-60 group-hover:opacity-100 group-hover:bg-white/20 transition-all">
        <ChevronRight size={18} className="text-white transition-transform duration-300 group-hover:translate-x-0.5" />
      </div>
    </motion.a>
  );
}

/* ── Page ───────────────────────────────────────────────── */
export default function Home() {
  return (
    <main
      id="main"
      className="relative w-full h-[100dvh] min-h-[650px] flex flex-col items-center justify-center overflow-y-auto overflow-x-hidden"
      style={{ 
        background: "#0a0a0a",
        backgroundImage: "url('https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Background Overlay */}
      <div 
        className="absolute inset-0 z-0" 
        style={{ 
          background: "linear-gradient(180deg, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.85) 100%)",
          backdropFilter: "blur(4px)",
          WebkitBackdropFilter: "blur(4px)",
        }} 
      />

      {/* Static top ambient — no animation */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          background:
            "radial-gradient(circle at 50% 15%, rgba(212,175,55,0.12) 0%, transparent 60%)",
        }}
      />

      {/* ── CONTENT WRAPPER ── */}
      <div className="relative z-10 w-full max-w-[420px] mx-auto px-5 py-8 flex flex-col h-full justify-between gap-6">

        <div className="flex flex-col gap-7 mt-2">
          {/* ── HEADER ── */}
          <motion.header
            className="flex flex-col items-center text-center gap-4"
            initial={{ opacity: 0, scale: 0.95, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            {/* Logo */}
            <motion.div
              className="mb-4 relative"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <img src="/logo_light.png" alt="Dravohome logo" className="w-56 sm:w-64 h-auto object-contain" />
            </motion.div>

            <div className="flex flex-col gap-1.5 mt-2">

              {/* Label */}
              <p
                style={{
                  fontSize: "0.75rem",
                  color: "rgba(255,255,255,0.65)",
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 500,
                }}
              >
                {BRAND_LABEL}
              </p>
            </div>
          </motion.header>

          {/* ── SOCIAL ROW ── */}
          <motion.div 
            className="flex justify-center gap-4 mt-1"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.4 }}
          >
            {SOCIAL_LINKS.map((link, i) => (
              <motion.a
                key={link.id}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="w-[60px] h-[60px] rounded-full flex items-center justify-center overflow-hidden relative group"
                style={{
                  background: "rgba(255, 255, 255, 0.06)",
                  border: "1px solid rgba(255, 255, 255, 0.15)",
                  borderTop: "1px solid rgba(255, 255, 255, 0.3)",
                  backdropFilter: "blur(16px)",
                  WebkitBackdropFilter: "blur(16px)",
                  boxShadow: "0 4px 16px rgba(0,0,0,0.2)",
                  color: "#D4AF37",
                }}
                whileHover={{
                  y: -5,
                  scale: 1.05,
                  background: "rgba(255, 255, 255, 0.12)",
                  borderColor: "rgba(255, 255, 255, 0.4)",
                  boxShadow: "0 8px 24px rgba(0,0,0,0.3)",
                  color: "#ffffff",
                }}
                whileTap={{ scale: 0.92 }}
                transition={{ duration: 0.2 }}
              >
                <div className="w-[42px] h-[42px] flex items-center justify-center">
                  <div style={{ transform: "scale(1.2)" }}>{link.icon}</div>
                </div>
              </motion.a>
            ))}
          </motion.div>

          {/* ── PRIMARY BUTTONS ── */}
          <div className="flex flex-col gap-4 mt-4">
            {PRIMARY_LINKS.map((link, i) => (
              <PrimaryLinkButton key={link.id} link={link} index={i} />
            ))}
          </div>
        </div>

        {/* ── FOOTER ── */}
        <motion.div
          className="text-center pb-2 pt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.5 }}
        >
          <p
            style={{
              fontSize: "0.68rem",
              color: "rgba(255,255,255,0.3)",
              letterSpacing: "0.1em",
              fontFamily: "'Inter', sans-serif",
            }}
          >
            © {new Date().getFullYear()} {BRAND_NAME.toUpperCase()}
          </p>
        </motion.div>
      </div>
    </main>
  );
}
