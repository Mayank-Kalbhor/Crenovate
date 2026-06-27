"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  { quote: "Crenovate transformed our brand completely. Their strategic thinking and creative execution helped us establish a strong identity in a competitive market. We saw a 40% increase in brand recall within 6 months.", name: "Rajesh Gupta", title: "CEO", company: "Systematix Group", industry: "Finance", initials: "RG", color: "#7c3aed" },
  { quote: "The team at Crenovate doesn't just design — they understand your business deeply. Our website redesign and digital campaign exceeded every KPI we set. Professional, creative, and always on time.", name: "Anita Mehta", title: "Director", company: "Mehta Publishing House", industry: "Education", initials: "AM", color: "#4f46e5" },
  { quote: "Working with Crenovate on our brand identity was a game-changer. They captured the essence of what Manjushree stands for and translated it into a visual language that resonates perfectly with our customers.", name: "Suresh Patel", title: "Managing Director", company: "Manjushree", industry: "Packaging", initials: "SP", color: "#ec4899" },
  { quote: "Their PR and media relations team is exceptional. Crenovate helped us navigate a challenging period with grace and came out stronger. Their crisis communication expertise is unmatched.", name: "Priya Sharma", title: "Head of Communications", company: "Lodha Capital Markets", industry: "Finance", initials: "PS", color: "#06b6d4" },
  { quote: "From concept to execution, Crenovate delivered an advertising campaign that truly captured our audience. The creative quality and strategic insight they bring is why we've been working with them for 5+ years.", name: "Vikram Singh", title: "VP Marketing", company: "India Forex", industry: "Finance", initials: "VS", color: "#10b981" },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [dir, setDir] = useState(1);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const go = useCallback((next: number) => {
    setDir(next > current ? 1 : -1);
    setCurrent((next + testimonials.length) % testimonials.length);
  }, [current]);

  useEffect(() => {
    const t = setInterval(() => go(current + 1), 5000);
    return () => clearInterval(t);
  }, [current, go]);

  const t = testimonials[current];

  return (
    <section id="testimonials" style={{ padding: "120px 0", background: "#fff", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: 700, height: 700, background: "radial-gradient(circle, #eef2ff, transparent 65%)", pointerEvents: "none" }} />

      <div className="container-xl">
        <div ref={ref} style={{ textAlign: "center", marginBottom: 64 }}>
          <motion.span initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} className="section-label">Testimonials</motion.span>
          <motion.h2 initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.1 }}
            style={{ fontFamily: "var(--font-montserrat)", fontWeight: 900, fontSize: "clamp(32px, 4vw, 56px)", lineHeight: 1.1, color: "#111", marginTop: 8 }}>
            Client <span className="gradient-text">Stories</span>
          </motion.h2>
        </div>

        <div style={{ position: "relative", maxWidth: 900, margin: "0 auto" }}>
          {/* Quote icon */}
          <div style={{ position: "absolute", top: -20, left: 24, width: 56, height: 56, background: "#eef2ff", borderRadius: 14, display: "flex", alignItems: "center", justifyContent: "center", zIndex: 10 }}>
            <Quote color="#4f46e5" size={26} />
          </div>

          <div className="testimonial-card" style={{ minHeight: 280, position: "relative", overflow: "hidden" }}>
            <div style={{ position: "absolute", inset: 0, background: `radial-gradient(circle at 70% 50%, ${t.color}15, transparent 65%)`, transition: "background 0.5s" }} />
            <AnimatePresence mode="wait" custom={dir}>
              <motion.div key={current} custom={dir} initial={{ opacity: 0, x: dir * 70 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: dir * -70 }} transition={{ duration: 0.45, ease: "easeInOut" }}
                style={{ padding: "56px 48px 48px", position: "relative", zIndex: 1 }}>
                <p style={{ color: "rgba(255,255,255,0.85)", fontSize: "clamp(15px, 2vw, 18px)", lineHeight: 1.8, marginBottom: 36, fontFamily: "var(--font-inter)" }}>
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
                  <div style={{ width: 44, height: 44, borderRadius: "50%", background: t.color, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--font-montserrat)", fontWeight: 700, fontSize: 13, color: "#fff", flexShrink: 0 }}>{t.initials}</div>
                  <div>
                    <div style={{ fontFamily: "var(--font-poppins)", fontWeight: 600, color: "#fff", fontSize: 15 }}>{t.name}</div>
                    <div style={{ fontFamily: "var(--font-inter)", fontSize: 12, color: "rgba(255,255,255,0.45)", marginTop: 2 }}>{t.title}, {t.company}</div>
                  </div>
                  <div style={{ marginLeft: "auto" }}>
                    <span style={{ padding: "4px 12px", borderRadius: 50, fontSize: 11, fontWeight: 600, color: "rgba(255,255,255,0.6)", border: "1px solid rgba(255,255,255,0.1)", fontFamily: "var(--font-poppins)", background: "rgba(255,255,255,0.05)" }}>{t.industry}</span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: 28 }}>
            <div style={{ display: "flex", gap: 8 }}>
              {testimonials.map((_, i) => (
                <button key={i} onClick={() => go(i)} data-cursor
                  style={{ height: 10, width: i === current ? 32 : 10, borderRadius: 5, background: i === current ? "linear-gradient(90deg, #4f46e5, #7c3aed)" : "#e5e7eb", border: "none", cursor: "none", transition: "all 0.3s", padding: 0 }} />
              ))}
            </div>
            <div style={{ display: "flex", gap: 10 }}>
              {[ChevronLeft, ChevronRight].map((Icon, idx) => (
                <button key={idx} onClick={() => go(idx === 0 ? current - 1 : current + 1)} data-cursor
                  style={{ width: 44, height: 44, borderRadius: "50%", border: "1px solid #e5e7eb", display: "flex", alignItems: "center", justifyContent: "center", color: "#9ca3af", background: "#fff", cursor: "none", transition: "all 0.3s" }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = "#4f46e5"; (e.currentTarget as HTMLElement).style.borderColor = "#c7d2fe"; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = "#9ca3af"; (e.currentTarget as HTMLElement).style.borderColor = "#e5e7eb"; }}>
                  <Icon size={18} />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
