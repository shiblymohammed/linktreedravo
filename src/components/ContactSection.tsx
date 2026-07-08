"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, Phone, MessageSquare, Send, ArrowUpRight } from "lucide-react";

// ── CONTACT CONFIG ──────────────────────────────────────────
// Update contact details below
const CONTACT = {
  email: "hello@dravohome.com",         // ── UPDATE your email
  phone: "+91 99999 99999",             // ── UPDATE your phone
  whatsapp: "https://wa.me/919999999999", // ── UPDATE WhatsApp link
};
// ────────────────────────────────────────────────────────────

export default function ContactSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const [focused, setFocused] = useState<string | null>(null);

  const contactItems = [
    {
      id: "contact-email",
      icon: <Mail size={20} />,
      label: "Email Us",
      value: CONTACT.email,
      href: `mailto:${CONTACT.email}`,
    },
    {
      id: "contact-phone",
      icon: <Phone size={20} />,
      label: "Call Us",
      value: CONTACT.phone,
      href: `tel:${CONTACT.phone.replace(/\s/g, "")}`,
    },
    {
      id: "contact-whatsapp",
      icon: <MessageSquare size={20} />,
      label: "WhatsApp",
      value: "Chat Instantly",
      href: CONTACT.whatsapp,
    },
  ];

  return (
    <section
      id="contact"
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
        <p className="section-label mb-3">Get in Touch</p>
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
          Contact Us
        </h2>
        <p className="mt-2 text-sm" style={{ color: "rgba(255,255,255,0.45)" }}>
          We&apos;d love to help you find your perfect piece
        </p>
      </motion.div>

      {/* Contact Buttons */}
      <motion.div
        className="flex flex-col gap-3 mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        {contactItems.map((item, i) => (
          <motion.a
            key={item.id}
            id={item.id}
            href={item.href}
            target={item.href.startsWith("http") ? "_blank" : undefined}
            rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
            className="group flex items-center gap-4 p-4 rounded-2xl transition-all duration-300"
            style={{
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(212,175,55,0.1)",
              backdropFilter: "blur(16px)",
            }}
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
            whileHover={{
              x: 5,
              background: "rgba(212,175,55,0.06)",
              borderColor: "rgba(212,175,55,0.25)",
            }}
            whileTap={{ scale: 0.99 }}
          >
            <div
              className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center"
              style={{
                background: "rgba(212,175,55,0.1)",
                border: "1px solid rgba(212,175,55,0.2)",
                color: "#D4AF37",
              }}
            >
              {item.icon}
            </div>
            <div className="flex-1">
              <p className="text-xs uppercase tracking-widest mb-0.5" style={{ color: "rgba(212,175,55,0.6)", fontSize: "0.65rem" }}>
                {item.label}
              </p>
              <p className="text-white font-medium text-sm">{item.value}</p>
            </div>
            <motion.div
              className="flex-shrink-0"
              style={{ color: "rgba(212,175,55,0.5)" }}
              initial={{ x: 0, y: 0 }}
              whileHover={{ x: 3, y: -3 }}
            >
              <ArrowUpRight size={16} />
            </motion.div>
          </motion.a>
        ))}
      </motion.div>

      {/* Quick Inquiry Banner */}
      <motion.div
        className="relative overflow-hidden rounded-3xl p-6 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.6, duration: 0.6 }}
        style={{
          background: "linear-gradient(135deg, rgba(212,175,55,0.1) 0%, rgba(212,175,55,0.04) 100%)",
          border: "1px solid rgba(212,175,55,0.2)",
        }}
      >
        {/* Decorative corner */}
        <div
          className="absolute top-0 right-0 w-32 h-32 rounded-bl-full opacity-20"
          style={{ background: "radial-gradient(circle, #D4AF37 0%, transparent 70%)" }}
        />

        <Send size={24} className="mx-auto mb-3" style={{ color: "#D4AF37" }} />
        <h3
          className="text-xl mb-2"
          style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            color: "rgba(255,255,255,0.9)",
          }}
        >
          Custom Order Inquiry
        </h3>
        <p className="text-sm mb-4" style={{ color: "rgba(255,255,255,0.45)" }}>
          Looking for something unique? Let us craft it for you.
        </p>
        <motion.a
          href={CONTACT.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          id="custom-order-btn"
          className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-medium"
          style={{
            background: "linear-gradient(135deg, #D4AF37, #B8960A)",
            color: "#0D0D0D",
            boxShadow: "0 6px 20px rgba(212,175,55,0.35)",
          }}
          whileHover={{
            scale: 1.05,
            boxShadow: "0 10px 30px rgba(212,175,55,0.5)",
          }}
          whileTap={{ scale: 0.97 }}
        >
          Start a Conversation
          <ArrowUpRight size={14} />
        </motion.a>
      </motion.div>
    </section>
  );
}
