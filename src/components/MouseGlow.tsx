"use client";

import { useEffect, useRef } from "react";

export default function MouseGlow() {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const glow = glowRef.current;
    if (!glow) return;

    let mouseX = 0;
    let mouseY = 0;
    let glowX = 0;
    let glowY = 0;
    let rafId = 0;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    const animate = () => {
      glowX = lerp(glowX, mouseX, 0.08);
      glowY = lerp(glowY, mouseY, 0.08);
      glow.style.transform = `translate(${glowX - 200}px, ${glowY - 200}px)`;
      rafId = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", onMouseMove);
    animate();

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div
      ref={glowRef}
      aria-hidden="true"
      className="fixed top-0 left-0 w-[400px] h-[400px] rounded-full pointer-events-none z-0"
      style={{
        background:
          "radial-gradient(circle, rgba(212,175,55,0.08) 0%, rgba(212,175,55,0.03) 40%, transparent 70%)",
        filter: "blur(40px)",
        transition: "opacity 0.3s ease",
      }}
    />
  );
}
