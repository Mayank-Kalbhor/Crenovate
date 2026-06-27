"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";

const filters = ["All", "Agriculture", "Education", "Finance", "Manufacturing", "Packaging", "Consulting"];

const clients = [
  { name: "CommAdwise", industry: "Agriculture", initials: "CA", color: "#10b981", bg: "#ecfdf5" },
  { name: "ADMISI Commodities", industry: "Agriculture", initials: "AC", color: "#059669", bg: "#d1fae5" },
  { name: "Gurudeo Exports", industry: "Agriculture", initials: "GE", color: "#047857", bg: "#a7f3d0" },
  { name: "LKC", industry: "Agriculture", initials: "LKC", color: "#065f46", bg: "#ecfdf5" },
  { name: "Mehta Publishing House", industry: "Education", initials: "MP", color: "#4f46e5", bg: "#eef2ff" },
  { name: "Unified Council", industry: "Education", initials: "UC", color: "#4338ca", bg: "#e0e7ff" },
  { name: "Brain Mapping Academy", industry: "Education", initials: "BM", color: "#3730a3", bg: "#e0e7ff" },
  { name: "Unique Solutions", industry: "Education", initials: "US", color: "#6366f1", bg: "#eef2ff" },
  { name: "Sherringwood Foundation", industry: "Education", initials: "SF", color: "#818cf8", bg: "#f0f0ff" },
  { name: "Sixth Sense", industry: "Finance", initials: "SS", color: "#7c3aed", bg: "#f5f3ff" },
  { name: "Systematix Group", industry: "Finance", initials: "SG", color: "#6d28d9", bg: "#ede9fe" },
  { name: "India Forex", industry: "Finance", initials: "IF", color: "#5b21b6", bg: "#ddd6fe" },
  { name: "ADMISI Forex", industry: "Finance", initials: "AF", color: "#7c3aed", bg: "#f5f3ff" },
  { name: "Lodha Capital Markets", industry: "Finance", initials: "LC", color: "#8b5cf6", bg: "#f5f3ff" },
  { name: "Comfort", industry: "Finance", initials: "CF", color: "#a78bfa", bg: "#faf5ff" },
  { name: "Graham Blowpack", industry: "Manufacturing", initials: "GB", color: "#0891b2", bg: "#ecfeff" },
  { name: "CCMA", industry: "Manufacturing", initials: "CC", color: "#0e7490", bg: "#cffafe" },
  { name: "Manjushree", industry: "Packaging", initials: "MJ", color: "#ec4899", bg: "#fdf2f8" },
  { name: "Lodha & Co.", industry: "Consulting", initials: "L&C", color: "#f59e0b", bg: "#fffbeb" },
  { name: "Homeland", industry: "Consulting", initials: "HL", color: "#d97706", bg: "#fef3c7" },
  { name: "Rakchamps", industry: "Consulting", initials: "RC", color: "#b45309", bg: "#fde68a" },
  { name: "Sritec", industry: "Consulting", initials: "ST", color: "#92400e", bg: "#fef3c7" },
];

const allMarquee = [...clients, ...clients];

export default function Clients() {
  const [active, setActive] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const filtered = active === "All" ? clients : clients.filter(c => c.industry === active);

  return (
    <section id="clients" style={{ padding: "120px 0", background: "#f8f8fa", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", top: 0, right: 0, width: 400, height: 400, background: "radial-gradient(circle, #e0e7ff, transparent 70%)", transform: "translate(30%, -30%)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", bottom: 0, left: 0, width: 300, height: 300, background: "radial-gradient(circle, #f5f3ff, transparent 70%)", transform: "translate(-20%, 20%)", pointerEvents: "none" }} />

      <div className="container-xl">
        <div ref={ref} style={{ textAlign: "center", marginBottom: 60 }}>
          <motion.span initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} className="section-label">Clients</motion.span>
          <motion.h2 initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.1 }}
            style={{ fontFamily: "var(--font-montserrat)", fontWeight: 900, fontSize: "clamp(32px, 4vw, 56px)", lineHeight: 1.1, color: "#111", marginTop: 8 }}>
            Brands We Have <span className="gradient-text">Built With</span>
          </motion.h2>
          <motion.p initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}} transition={{ delay: 0.2 }}
            style={{ color: "#9ca3af", fontSize: 17, marginTop: 16, fontFamily: "var(--font-inter)" }}>
            Trusted by industry leaders across multiple sectors.
          </motion.p>
        </div>

        {/* Marquee (All view) */}
        {active === "All" && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ overflow: "hidden", marginBottom: 40, paddingTop: 8, paddingBottom: 8 }}>
            <div className="animate-marquee" style={{ display: "inline-flex", gap: 16, whiteSpace: "nowrap" }}>
              {allMarquee.map((c, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: 10, padding: "10px 20px", borderRadius: 50, background: "#fff", border: "1px solid #f0f0f0", boxShadow: "0 2px 8px rgba(0,0,0,0.04)", flexShrink: 0 }}>
                  <div style={{ width: 32, height: 32, borderRadius: 8, background: c.bg, color: c.color, fontFamily: "var(--font-montserrat)", fontWeight: 900, fontSize: 11, display: "flex", alignItems: "center", justifyContent: "center" }}>{c.initials}</div>
                  <span style={{ fontSize: 13, fontWeight: 500, color: "#374151", fontFamily: "var(--font-poppins)", whiteSpace: "nowrap" }}>{c.name}</span>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Filter tabs */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.3 }}
          style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 10, marginBottom: 48 }}>
          {filters.map(f => (
            <button key={f} onClick={() => setActive(f)} data-cursor
              className={`filter-tab ${active === f ? "filter-tab-active" : "filter-tab-light-inactive"}`}>
              {f}
            </button>
          ))}
        </motion.div>

        {/* Client Grid */}
        <motion.div layout style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 14 }}>
          <AnimatePresence mode="popLayout">
            {filtered.map((c, i) => (
              <motion.div key={c.name} initial={{ opacity: 0, scale: 0.9, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.9 }} transition={{ duration: 0.35, delay: i * 0.04 }} layout
                className="client-card" data-cursor>
                <div className="client-card-bar" style={{ background: `linear-gradient(90deg, ${c.color}, ${c.color}88)` }} />
                <div style={{ width: 56, height: 56, borderRadius: 14, background: c.bg, color: c.color, fontFamily: "var(--font-montserrat)", fontWeight: 900, fontSize: 13, display: "flex", alignItems: "center", justifyContent: "center", transition: "transform 0.3s" }}
                  onMouseEnter={e => (e.currentTarget.style.transform = "scale(1.08)")}
                  onMouseLeave={e => (e.currentTarget.style.transform = "scale(1)")}>
                  {c.initials}
                </div>
                <div>
                  <h4 style={{ fontFamily: "var(--font-poppins)", fontWeight: 600, fontSize: 12, color: "#111", lineHeight: 1.3, margin: 0 }}>{c.name}</h4>
                  <p style={{ fontFamily: "var(--font-inter)", fontSize: 11, color: "#9ca3af", margin: "4px 0 0" }}>{c.industry}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.5 }}
          style={{ marginTop: 72, borderRadius: 24, background: "linear-gradient(135deg, var(--brand-red), var(--brand-red-dark))", padding: "48px 40px", textAlign: "center", color: "#fff" }}>
          <p style={{ color: "rgba(255,255,255,0.7)", fontSize: 11, fontWeight: 700, letterSpacing: "0.25em", textTransform: "uppercase", marginBottom: 28, fontFamily: "var(--font-poppins)" }}>Our Reach</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 24 }}>
            {[{ v: "22+", l: "Clients Served" }, { v: "6", l: "Industries" }, { v: "4", l: "Offices" }, { v: "15+", l: "Years of Trust" }].map(s => (
              <div key={s.l}>
                <div style={{ fontFamily: "var(--font-montserrat)", fontWeight: 900, fontSize: 40, color: "#fff" }}>{s.v}</div>
                <div style={{ fontFamily: "var(--font-inter)", fontSize: 13, color: "rgba(255,255,255,0.7)", marginTop: 4 }}>{s.l}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 1024px) { #clients .container-xl > div:nth-child(5) { grid-template-columns: repeat(3, 1fr) !important; } }
        @media (max-width: 640px) { #clients .container-xl > div:nth-child(5) { grid-template-columns: repeat(2, 1fr) !important; } }
        @media (max-width: 500px) { #clients .container-xl > div:last-child > div { grid-template-columns: repeat(2, 1fr) !important; } }
      `}</style>
    </section>
  );
}
