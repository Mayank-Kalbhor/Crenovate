"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import { useTransitionNavigator } from "@/components/PageTransition";

const PARTICLE_COUNT = 60;

function ParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -999, y: -999 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    let animId: number;

    const resize = () => { canvas.width = window.innerWidth; canvas.height = window.innerHeight; };
    resize();
    window.addEventListener("resize", resize);

    const particles = Array.from({ length: PARTICLE_COUNT }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      size: Math.random() * 2 + 0.5,
      opacity: Math.random() * 0.5 + 0.1,
      color: Math.random() > 0.5 ? "#4f46e5" : "#7c3aed",
    }));

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p, i) => {
        const dx = mouseRef.current.x - p.x;
        const dy = mouseRef.current.y - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 100 && dist > 0) { p.vx -= (dx / dist) * 0.025; p.vy -= (dy / dist) * 0.025; }
        p.x += p.vx; p.y += p.vy;
        p.vx *= 0.99; p.vy *= 0.99;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;
        ctx.beginPath(); ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color; ctx.globalAlpha = p.opacity; ctx.fill();
        particles.slice(i + 1).forEach(p2 => {
          const d = Math.hypot(p.x - p2.x, p.y - p2.y);
          if (d < 90) {
            ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = "#4f46e5"; ctx.globalAlpha = 0.07 * (1 - d / 90);
            ctx.lineWidth = 0.7; ctx.stroke();
          }
        });
        ctx.globalAlpha = 1;
      });
      animId = requestAnimationFrame(draw);
    };
    const onMouse = (e: MouseEvent) => { mouseRef.current = { x: e.clientX, y: e.clientY }; };
    window.addEventListener("mousemove", onMouse);
    draw();
    return () => { cancelAnimationFrame(animId); window.removeEventListener("resize", resize); window.removeEventListener("mousemove", onMouse); };
  }, []);

  return <canvas ref={canvasRef} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.85 }} />;
}

const tickerItems = ["Branding", "Strategy", "Digital", "Advertising", "PR", "Web", "Social Media", "New Media", "Print", "Creative", "Innovation", "Communication"];

export default function Hero() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const { navigate } = useTransitionNavigator();

  useEffect(() => {
    const onMouse = (e: MouseEvent) => {
      setMousePos({ x: (e.clientX / window.innerWidth - 0.5) * 25, y: (e.clientY / window.innerHeight - 0.5) * 25 });
    };
    window.addEventListener("mousemove", onMouse);
    return () => window.removeEventListener("mousemove", onMouse);
  }, []);

  return (
    <section id="home" className="hero-section">
      {/* Background glows */}
      <div className="hero-glow-1" />
      <div className="hero-glow-2" />
      <div className="hero-glow-3" />

      {/* Particle canvas */}
      <ParticleCanvas />

      {/* Floating 3D ring */}
      <motion.div
        animate={{ x: mousePos.x * 0.5, y: mousePos.y * 0.5 }}
        transition={{ type: "spring", damping: 30, stiffness: 80 }}
        style={{ position: "absolute", top: 100, right: 80, width: 260, height: 260, opacity: 0.18, pointerEvents: "none" }}
      >
        <div className="animate-spin-slow" style={{ width: "100%", height: "100%", borderRadius: "50%", border: "1px solid rgba(79,70,229,0.6)" }} />
        <div className="animate-spin-slow-rev" style={{ position: "absolute", inset: 30, borderRadius: "50%", border: "1px solid rgba(124,58,237,0.4)" }} />
        <div className="animate-float" style={{ position: "absolute", inset: 60, borderRadius: "50%", background: "linear-gradient(135deg, rgba(79,70,229,0.3), transparent)" }} />
      </motion.div>

      {/* Floating shapes */}
      <motion.div animate={{ x: mousePos.x * -0.3, y: mousePos.y * -0.3 }} transition={{ type: "spring", damping: 30, stiffness: 60 }}
        style={{ position: "absolute", bottom: 160, left: 60, width: 80, height: 80, opacity: 0.35, pointerEvents: "none" }}>
        <div className="animate-float2" style={{ width: "100%", height: "100%", background: "linear-gradient(135deg, rgba(79,70,229,0.5), transparent)", borderRadius: 16, transform: "rotate(45deg)" }} />
      </motion.div>

      <motion.div animate={{ x: mousePos.x * 0.7, y: mousePos.y * 0.4 }} transition={{ type: "spring", damping: 25, stiffness: 70 }}
        style={{ position: "absolute", top: 160, left: "16%", width: 48, height: 48, opacity: 0.45, pointerEvents: "none" }}>
        <div className="animate-float" style={{ width: "100%", height: "100%", background: "rgba(6,182,212,0.5)", borderRadius: 12, transform: "rotate(12deg)", animationDelay: "1s" }} />
      </motion.div>

      {/* Hero Content */}
      <div style={{ position: "relative", zIndex: 10, flex: 1, display: "flex", alignItems: "center" }}>
        <div className="container-xl" style={{ paddingTop: 120, paddingBottom: 40 }}>
          <div style={{ maxWidth: 820 }}>
            {/* Badge */}
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.6 }}>
              <div className="glass" style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "8px 20px", borderRadius: 50, marginBottom: 24 }}>
                <div className="animate-pulse-dot" style={{ width: 8, height: 8, background: "var(--brand-red)", borderRadius: "50%" }} />
                <span style={{ color: "rgba(255,255,255,0.65)", fontSize: 11, fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", fontFamily: "var(--font-poppins)" }}>
                  Est. 2010 · Integrated Communications Agency
                </span>
              </div>
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35, duration: 0.8 }}
              style={{ fontFamily: "var(--font-montserrat)", fontWeight: 900, fontSize: "clamp(44px, 7vw, 92px)", lineHeight: 1, letterSpacing: "-0.03em", color: "#fff", margin: "0 0 24px" }}
            >
              Ideas That<br />
              <span className="gradient-text">Move Brands</span><br />
              Forward.
            </motion.h1>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.7 }}
              style={{ color: "rgba(255,255,255,0.65)", fontSize: "clamp(16px, 2vw, 20px)", maxWidth: 560, lineHeight: 1.7, marginBottom: 40, fontFamily: "var(--font-inter)" }}
            >
              We create powerful communication experiences that connect brands with people. From strategy to story — we make it unforgettable.
            </motion.p>

            {/* CTAs */}
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.65, duration: 0.6 }}
              style={{ display: "flex", flexWrap: "wrap", gap: 16 }}>
              <a href="/contact" onClick={(e) => { e.preventDefault(); navigate("/contact", "Contact"); }}
                className="btn-primary" style={{ fontSize: 16, padding: "16px 36px" }} data-cursor>
                <span>Start a Project</span>
                <ArrowRight size={18} />
              </a>
              <a href="/portfolio" onClick={(e) => { e.preventDefault(); navigate("/portfolio", "Portfolio"); }}
                className="btn-secondary" style={{ fontSize: 16, padding: "15px 36px" }} data-cursor>
                <Play size={16} />
                <span>Explore Our Work</span>
              </a>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }}
        style={{ position: "relative", zIndex: 10, display: "flex", flexDirection: "column", alignItems: "center", paddingBottom: 32, gap: 8 }}>
        <span style={{ color: "rgba(255,255,255,0.4)", fontSize: 10, letterSpacing: "0.3em", textTransform: "uppercase", fontFamily: "var(--font-poppins)" }}>Scroll</span>
        <div style={{ width: 1, height: 48, background: "linear-gradient(to bottom, rgba(255,255,255,0.3), transparent)" }} />
      </motion.div>

      {/* Ticker strip */}
      <div style={{ position: "relative", zIndex: 10, borderTop: "1px solid rgba(255,255,255,0.08)", padding: "14px 0", background: "rgba(255,255,255,0.01)", overflow: "hidden" }}>
        <div className="animate-ticker" style={{ display: "inline-flex", whiteSpace: "nowrap" }}>
          {[...tickerItems, ...tickerItems, ...tickerItems].map((item, i) => (
            <span key={i} style={{ display: "inline-flex", alignItems: "center", gap: 20, padding: "0 24px" }}>
              <span style={{ color: "rgba(255,255,255,0.35)", fontSize: 12, fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", fontFamily: "var(--font-poppins)" }}>{item}</span>
              <span style={{ width: 5, height: 5, borderRadius: "50%", background: "var(--brand-red)", display: "inline-block" }} />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
