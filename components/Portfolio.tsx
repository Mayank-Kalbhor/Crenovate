"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { Eye } from "lucide-react";

const categories = ["All", "Logos", "Campaigns", "Websites", "Brochures", "Social Media", "Brand Identity"];

const items = [
  { id: 1, title: "CommAdwise Rebrand", cat: "Brand Identity", industry: "Agriculture", bg: "linear-gradient(135deg, #1e1b4b, #0f172a)", color: "#4f46e5", h: 380 },
  { id: 2, title: "Systematix Digital Campaign", cat: "Campaigns", industry: "Finance", bg: "linear-gradient(135deg, #2e1065, #1e1b4b)", color: "#7c3aed", h: 220 },
  { id: 3, title: "Mehta Publishing Logo", cat: "Logos", industry: "Education", bg: "linear-gradient(135deg, #164e63, #0f172a)", color: "#06b6d4", h: 290 },
  { id: 4, title: "India Forex Website", cat: "Websites", industry: "Finance", bg: "linear-gradient(135deg, #500724, #1e1b4b)", color: "#ec4899", h: 360 },
  { id: 5, title: "Manjushree Brand Story", cat: "Brand Identity", industry: "Packaging", bg: "linear-gradient(135deg, #78350f, #431407)", color: "#f59e0b", h: 240 },
  { id: 6, title: "Graham Blowpack Brochure", cat: "Brochures", industry: "Manufacturing", bg: "linear-gradient(135deg, #064e3b, #0f172a)", color: "#10b981", h: 310 },
  { id: 7, title: "Unified Council Social", cat: "Social Media", industry: "Education", bg: "linear-gradient(135deg, #1e3a5f, #0f172a)", color: "#3b82f6", h: 370 },
  { id: 8, title: "Lodha Capital Logo", cat: "Logos", industry: "Finance", bg: "linear-gradient(135deg, #3b0764, #1e1b4b)", color: "#a855f7", h: 220 },
  { id: 9, title: "Brain Mapping Campaign", cat: "Campaigns", industry: "Education", bg: "linear-gradient(135deg, #0c4a6e, #164e63)", color: "#0ea5e9", h: 280 },
  { id: 10, title: "Sixth Sense Website", cat: "Websites", industry: "Finance", bg: "linear-gradient(135deg, #4c0519, #500724)", color: "#f43f5e", h: 350 },
  { id: 11, title: "LKC Agro Brochure", cat: "Brochures", industry: "Agriculture", bg: "linear-gradient(135deg, #14532d, #064e3b)", color: "#22c55e", h: 230 },
  { id: 12, title: "Rakchamps Social", cat: "Social Media", industry: "Consulting", bg: "linear-gradient(135deg, #7c2d12, #431407)", color: "#f97316", h: 280 },
];

function PortfolioCard({ item, i }: { item: typeof items[0]; i: number }) {
  const [hovered, setHovered] = useState(false);
  return (
    <motion.div layout initial={{ opacity: 0, scale: 0.92 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.92 }} transition={{ duration: 0.4, delay: i * 0.04 }}
      className="portfolio-card" style={{ height: item.h, background: item.bg }} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} data-cursor>
      {/* Dot pattern overlay */}
      <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(rgba(255,255,255,0.08) 1px, transparent 1px)", backgroundSize: "24px 24px", pointerEvents: "none" }} />
      {/* Decorative circle */}
      <div style={{ position: "absolute", bottom: -40, right: -40, width: 140, height: 140, borderRadius: "50%", background: item.color, opacity: 0.15 }} />
      {/* Category tag */}
      <div style={{ position: "absolute", top: 16, left: 16 }}>
        <span style={{ padding: "5px 14px", borderRadius: 50, fontSize: 11, fontWeight: 700, color: "#fff", background: item.color + "bb", fontFamily: "var(--font-poppins)" }}>{item.cat}</span>
      </div>
      {/* Hover overlay */}
      <AnimatePresence>
        {hovered && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }}
            className="portfolio-overlay">
            <h3 style={{ color: "#fff", fontWeight: 700, fontSize: 16, textAlign: "center", padding: "0 20px", fontFamily: "var(--font-poppins)" }}>{item.title}</h3>
            <p style={{ color: "rgba(255,255,255,0.45)", fontSize: 12, fontFamily: "var(--font-inter)" }}>{item.industry}</p>
            <button style={{ display: "flex", alignItems: "center", gap: 8, padding: "10px 22px", borderRadius: 50, fontSize: 13, fontWeight: 600, color: "#fff", border: "1px solid rgba(255,255,255,0.3)", background: "rgba(255,255,255,0.05)", cursor: "none", fontFamily: "var(--font-poppins)", transition: "background 0.2s" }}
              onMouseEnter={e => (e.currentTarget.style.background = "rgba(255,255,255,0.12)")}
              onMouseLeave={e => (e.currentTarget.style.background = "rgba(255,255,255,0.05)")} data-cursor>
              <Eye size={14} /> View Project
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function Portfolio() {
  const [active, setActive] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const filtered = active === "All" ? items : items.filter(p => p.cat === active);

  return (
    <section id="portfolio" style={{ padding: "120px 0", background: "#0a0a0f", position: "relative", overflow: "hidden", color: "#fff" }}>
      <div style={{ position: "absolute", top: "20%", right: 0, width: 400, height: 400, background: "radial-gradient(circle, rgba(139,26,26,0.15), transparent 70%)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", bottom: "20%", left: 0, width: 300, height: 300, background: "radial-gradient(circle, rgba(139,26,26,0.1), transparent 70%)", pointerEvents: "none" }} />

      <div className="container-xl">
        <div ref={ref} style={{ textAlign: "center", marginBottom: 60 }}>
          <motion.span initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} className="section-label">Portfolio</motion.span>
          <motion.h2 initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.1 }}
            style={{ fontFamily: "var(--font-montserrat)", fontWeight: 900, fontSize: "clamp(32px, 4vw, 56px)", lineHeight: 1.1, color: "#fff", marginTop: 8 }}>
            Our Work <span className="gradient-text">Creates Impact</span>
          </motion.h2>
          <motion.p initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}} transition={{ delay: 0.2 }}
            style={{ color: "rgba(255,255,255,0.65)", fontSize: 17, marginTop: 16, fontFamily: "var(--font-inter)" }}>
            A showcase of strategic creativity across industries and media.
          </motion.p>
        </div>

        {/* Filter tabs */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.3 }}
          style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 10, marginBottom: 48 }}>
          {categories.map(cat => (
            <button key={cat} onClick={() => setActive(cat)} data-cursor
              className={`filter-tab ${active === cat ? "filter-tab-active" : "filter-tab-inactive"}`}>
              {cat}
            </button>
          ))}
        </motion.div>

        <motion.div layout className="masonry-grid">
          <AnimatePresence>
            {filtered.map((item, i) => <PortfolioCard key={item.id} item={item} i={i} />)}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
