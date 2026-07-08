"use client";

import { motion } from "framer-motion";

export default function FloatingBlobs() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0" aria-hidden="true">
      {/* Top-left blob */}
      <motion.div
        className="absolute rounded-full"
        style={{
          width: "600px",
          height: "600px",
          top: "-200px",
          left: "-200px",
          background:
            "radial-gradient(circle, rgba(212,175,55,0.06) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
        animate={{
          x: [0, 30, -20, 0],
          y: [0, -40, 20, 0],
          scale: [1, 1.1, 0.95, 1],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Bottom-right blob */}
      <motion.div
        className="absolute rounded-full"
        style={{
          width: "500px",
          height: "500px",
          bottom: "-100px",
          right: "-100px",
          background:
            "radial-gradient(circle, rgba(212,175,55,0.05) 0%, transparent 70%)",
          filter: "blur(50px)",
        }}
        animate={{
          x: [0, -25, 15, 0],
          y: [0, 30, -15, 0],
          scale: [1, 0.9, 1.08, 1],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 3 }}
      />

      {/* Center blob */}
      <motion.div
        className="absolute rounded-full"
        style={{
          width: "800px",
          height: "800px",
          top: "30%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          background:
            "radial-gradient(circle, rgba(212,175,55,0.03) 0%, transparent 65%)",
          filter: "blur(80px)",
        }}
        animate={{
          scale: [1, 1.15, 0.92, 1],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut", delay: 6 }}
      />
    </div>
  );
}
