"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

function AnimatedCounter({ end, suffix = "" }: { end: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const steps = 60;
    const increment = end / steps;
    const interval = setInterval(() => {
      start += increment;
      if (start >= end) { setCount(end); clearInterval(interval); }
      else setCount(Math.floor(start));
    }, 30);
    return () => clearInterval(interval);
  }, [inView, end]);

  return <span ref={ref}>{count}{suffix}</span>;
}

const stats = [
  { label: "Years Experience", end: 10, suffix: "+", color: "var(--brand-red)" },
  { label: "Projects Delivered", end: 100, suffix: "+", color: "var(--brand-red)" },
  { label: "Happy Clients", end: 50, suffix: "+", color: "#06b6d4" },
  { label: "Locations", end: 4, suffix: "", color: "var(--brand-red)" },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" className="section-white" style={{ padding: "120px 0", position: "relative", overflow: "hidden" }}>
      {/* Decorative bg blobs */}
      <div style={{ position: "absolute", top: 0, right: 0, width: 400, height: 400, background: "radial-gradient(circle, var(--brand-red-xlight), transparent 70%)", transform: "translate(30%, -30%)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", bottom: 0, left: 0, width: 300, height: 300, background: "radial-gradient(circle, var(--brand-red-xlight), transparent 70%)", transform: "translate(-20%, 20%)", pointerEvents: "none" }} />

      <div className="container-xl">
        <div ref={ref} style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }}>

          {/* Left Visual */}
          <motion.div initial={{ opacity: 0, x: -60 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.8 }}
            style={{ position: "relative" }}>
            <div style={{ borderRadius: 32, overflow: "hidden", background: "linear-gradient(135deg, #111, #222)", aspectRatio: "4/5", maxWidth: 440, position: "relative" }}>
              {/* Grid bg */}
              <div className="grid-bg" style={{ position: "absolute", inset: 0, opacity: 0.2 }} />
              {/* Gradient overlay */}
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(139,26,26,0.2), rgba(139,26,26,0.1), rgba(6,182,212,0.03))" }} />

              {/* Center element */}
              <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
                <div style={{ textAlign: "center" }}>
                  <div style={{ position: "relative", width: 160, height: 160, margin: "0 auto 24px" }}>
                    <div className="animate-spin-slow" style={{ position: "absolute", inset: 0, border: "2px solid rgba(139,26,26,0.3)", borderRadius: "50%" }} />
                    <div className="animate-spin-slow-rev" style={{ position: "absolute", inset: 16, border: "1px solid rgba(139,26,26,0.15)", borderRadius: "50%" }} />
                    <div style={{ position: "absolute", inset: 32, background: "linear-gradient(135deg, var(--brand-red), var(--brand-red-dark))", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 20px 60px rgba(139,26,26,0.4)" }}>
                      <span style={{ color: "#fff", fontWeight: 900, fontSize: 26, fontFamily: "var(--font-montserrat)" }}>CR</span>
                    </div>
                  </div>
                  <p style={{ color: "rgba(255,255,255,0.4)", fontSize: 11, letterSpacing: "0.3em", textTransform: "uppercase", fontFamily: "var(--font-poppins)" }}>Since 2010</p>
                  <h3 style={{ color: "#fff", fontSize: 24, fontWeight: 900, fontFamily: "var(--font-montserrat)", marginTop: 8 }}>CRENOVATE</h3>
                </div>
              </div>

              {/* Floating badges */}
              <motion.div animate={{ y: [-5, 5, -5] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="glass-light stat-badge" style={{ top: 24, left: 24 }}>
                <div style={{ fontFamily: "var(--font-montserrat)", fontWeight: 900, fontSize: 28, color: "var(--brand-red)" }}>10+</div>
                <div style={{ fontFamily: "var(--font-poppins)", fontSize: 11, color: "#6b7280", marginTop: 2 }}>Years</div>
              </motion.div>

              <motion.div animate={{ y: [5, -5, 5] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="glass-light stat-badge" style={{ bottom: 40, right: 24 }}>
                <div style={{ fontFamily: "var(--font-montserrat)", fontWeight: 900, fontSize: 28, color: "var(--brand-red-dark)" }}>100+</div>
                <div style={{ fontFamily: "var(--font-poppins)", fontSize: 11, color: "#6b7280", marginTop: 2 }}>Projects</div>
              </motion.div>

              <motion.div animate={{ y: [-3, 7, -3] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="glass-light stat-badge" style={{ top: "50%", right: 24, transform: "translateY(-50%)" }}>
                <div style={{ fontFamily: "var(--font-montserrat)", fontWeight: 900, fontSize: 28, color: "#06b6d4" }}>4</div>
                <div style={{ fontFamily: "var(--font-poppins)", fontSize: 11, color: "#6b7280", marginTop: 2 }}>Offices</div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right content */}
          <motion.div initial={{ opacity: 0, x: 60 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.8, delay: 0.2 }}>
            <span className="section-label">About Us</span>
            <h2 style={{ fontFamily: "var(--font-montserrat)", fontWeight: 900, fontSize: "clamp(32px, 3.5vw, 48px)", lineHeight: 1.15, letterSpacing: "-0.02em", color: "#111", marginBottom: 24 }}>
              Not Just An Agency.{" "}
              <span className="gradient-text">A Creative Growth Partner.</span>
            </h2>
            <p style={{ color: "#6b7280", fontSize: 17, lineHeight: 1.75, marginBottom: 16, fontFamily: "var(--font-inter)" }}>
              We believe communication should be strategic, meaningful and memorable. Our team creates ideas that challenge stereotypes and help brands connect with audiences.
            </p>
            <p style={{ color: "#9ca3af", lineHeight: 1.75, marginBottom: 36, fontFamily: "var(--font-inter)" }}>
              Founded in 2010, Crenovate is an integrated communications agency operating from Mumbai, Indore, Raipur and Australia — helping brands grow through branding, advertising, digital experiences, PR, and creative solutions.
            </p>

            {/* Service chips */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginBottom: 40 }}>
              {["Branding", "Print", "Digital", "Web", "Social Media", "Advertising", "New Media", "Public Relations"].map(tag => (
                <span key={tag} style={{ padding: "8px 16px", borderRadius: 50, fontSize: 13, fontWeight: 500, color: "var(--brand-red)", background: "var(--brand-red-xlight)", border: "1px solid var(--brand-red-soft)", fontFamily: "var(--font-poppins)" }}>{tag}</span>
              ))}
            </div>

            {/* Stats */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16 }}>
              {stats.map((s, i) => (
                <motion.div key={s.label} initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.4 + i * 0.1 }}
                  style={{ textAlign: "center", padding: 16, borderRadius: 16, background: "#f9f9fb", border: "1px solid #f0f0f0", transition: "all 0.3s" }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = "var(--brand-red-soft)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 24px rgba(139,26,26,0.06)"; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "#f0f0f0"; (e.currentTarget as HTMLElement).style.boxShadow = "none"; }}>
                  <div style={{ fontFamily: "var(--font-montserrat)", fontWeight: 900, fontSize: 28, color: s.color }}>
                    <AnimatedCounter end={s.end} suffix={s.suffix} />
                  </div>
                  <div style={{ fontFamily: "var(--font-poppins)", fontSize: 11, color: "#9ca3af", marginTop: 4 }}>{s.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          #about .container-xl > div { grid-template-columns: 1fr !important; gap: 48px !important; }
          #about .container-xl > div > div:first-child { max-width: 100% !important; }
        }
        @media (max-width: 600px) {
          #about .container-xl > div > div:last-child > div:last-child { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </section>
  );
}
