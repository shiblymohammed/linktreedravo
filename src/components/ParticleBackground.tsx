"use client";

import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  life: number;
  maxLife: number;
}

export default function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animFrameRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const spawnParticle = (): Particle => ({
      x: Math.random() * canvas.width,
      y: canvas.height + 10,
      vx: (Math.random() - 0.5) * 0.4,
      vy: -(Math.random() * 0.6 + 0.3),
      size: Math.random() * 2 + 0.5,
      opacity: 0,
      life: 0,
      maxLife: Math.random() * 400 + 200,
    });

    for (let i = 0; i < 60; i++) {
      const p = spawnParticle();
      p.y = Math.random() * canvas.height;
      p.life = Math.random() * p.maxLife;
      particlesRef.current.push(p);
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particlesRef.current.forEach((p, i) => {
        p.life++;
        p.x += p.vx;
        p.y += p.vy;

        const progress = p.life / p.maxLife;
        p.opacity = progress < 0.1
          ? progress / 0.1
          : progress > 0.85
          ? (1 - progress) / 0.15
          : 0.7;

        const gold = `rgba(212, 175, 55, ${p.opacity * 0.7})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = gold;
        ctx.shadowBlur = 6;
        ctx.shadowColor = "rgba(212, 175, 55, 0.5)";
        ctx.fill();
        ctx.shadowBlur = 0;

        if (p.life >= p.maxLife || p.y < -10) {
          particlesRef.current[i] = spawnParticle();
        }
      });

      if (particlesRef.current.length < 60) {
        particlesRef.current.push(spawnParticle());
      }

      animFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animFrameRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      aria-hidden="true"
    />
  );
}
