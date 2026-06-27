"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { MapPin, Users, Award, Zap } from "lucide-react";

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
  { label: "Years Experience", end: 14, suffix: "+", color: "var(--brand-red)", icon: Award },
  { label: "Projects Delivered", end: 250, suffix: "+", color: "var(--brand-red)", icon: Zap },
  { label: "Happy Clients", end: 100, suffix: "+", color: "#7c3aed", icon: Users },
  { label: "Global Offices", end: 4, suffix: "", color: "#0891b2", icon: MapPin },
];

const pillars = [
  "Branding", "Print", "Digital", "Web", "Social Media", "Advertising", "New Media", "Public Relations",
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" className="section-white" style={{ padding: "120px 0", position: "relative", overflow: "hidden" }}>
      {/* Decorative blobs */}
      <div style={{ position: "absolute", top: 0, right: 0, width: 500, height: 500, background: "radial-gradient(circle, var(--brand-red-xlight), transparent 70%)", transform: "translate(30%, -30%)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", bottom: 0, left: 0, width: 350, height: 350, background: "radial-gradient(circle, rgba(124,58,237,0.05), transparent 70%)", transform: "translate(-20%, 20%)", pointerEvents: "none" }} />

      <div className="container-xl">
        <div ref={ref} style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center", marginBottom: 96 }}>

          {/* Left Visual */}
          <motion.div initial={{ opacity: 0, x: -60 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.8 }}
            style={{ position: "relative" }}>
            <div style={{ borderRadius: 32, overflow: "hidden", background: "linear-gradient(135deg, #0f0f14, #1a1a22)", aspectRatio: "4/5", maxWidth: 440, position: "relative", boxShadow: "0 40px 80px rgba(139,26,26,0.15)" }}>
              <div className="grid-bg-dark" style={{ position: "absolute", inset: 0, opacity: 0.3 }} />
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(139,26,26,0.15), rgba(124,58,237,0.05), transparent)" }} />

              {/* Center branding element */}
              <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
                <div style={{ textAlign: "center" }}>
                  <div style={{ position: "relative", width: 180, height: 180, margin: "0 auto 28px" }}>
                    <div className="animate-spin-slow" style={{ position: "absolute", inset: 0, border: "2px solid rgba(139,26,26,0.35)", borderRadius: "50%" }} />
                    <div className="animate-spin-slow-rev" style={{ position: "absolute", inset: 20, border: "1px solid rgba(139,26,26,0.2)", borderRadius: "50%", borderStyle: "dashed" }} />
                    <div style={{ position: "absolute", inset: 40, background: "linear-gradient(135deg, var(--brand-red), var(--brand-red-dark))", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 24px 60px rgba(139,26,26,0.5)" }}>
                      <span style={{ color: "#fff", fontWeight: 900, fontSize: 28, fontFamily: "var(--font-montserrat)" }}>CR</span>
                    </div>
                  </div>
                  <p style={{ color: "rgba(255,255,255,0.35)", fontSize: 11, letterSpacing: "0.35em", textTransform: "uppercase", fontFamily: "var(--font-poppins)" }}>Est. 2010</p>
                  <h3 style={{ color: "#fff", fontSize: 22, fontWeight: 900, fontFamily: "var(--font-montserrat)", marginTop: 6 }}>CRENOVATE</h3>
                  <p style={{ color: "rgba(255,255,255,0.4)", fontSize: 12, fontFamily: "var(--font-inter)", marginTop: 4 }}>Creating &amp; Innovating Ideas at Work</p>
                </div>
              </div>

              {/* Floating badges */}
              <motion.div animate={{ y: [-5, 5, -5] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="glass-light stat-badge" style={{ top: 24, left: 24 }}>
                <div style={{ fontFamily: "var(--font-montserrat)", fontWeight: 900, fontSize: 28, color: "var(--brand-red)" }}>14+</div>
                <div style={{ fontFamily: "var(--font-poppins)", fontSize: 11, color: "#6b7280", marginTop: 2 }}>Years</div>
              </motion.div>
              <motion.div animate={{ y: [5, -5, 5] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="glass-light stat-badge" style={{ bottom: 40, right: 24 }}>
                <div style={{ fontFamily: "var(--font-montserrat)", fontWeight: 900, fontSize: 28, color: "#7c3aed" }}>250+</div>
                <div style={{ fontFamily: "var(--font-poppins)", fontSize: 11, color: "#6b7280", marginTop: 2 }}>Projects</div>
              </motion.div>
              <motion.div animate={{ y: [-3, 7, -3] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="glass-light stat-badge" style={{ top: "45%", right: 20, transform: "translateY(-50%)" }}>
                <div style={{ fontFamily: "var(--font-montserrat)", fontWeight: 900, fontSize: 28, color: "#0891b2" }}>4</div>
                <div style={{ fontFamily: "var(--font-poppins)", fontSize: 11, color: "#6b7280", marginTop: 2 }}>Offices</div>
              </motion.div>
            </div>

            {/* Location strip */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.6 }}
              style={{ display: "flex", gap: 8, flexWrap: "wrap", marginTop: 20 }}>
              {["Mumbai", "Indore", "Raipur", "Australia"].map(city => (
                <span key={city} style={{ display: "inline-flex", alignItems: "center", gap: 5, padding: "6px 14px", borderRadius: 50, background: "#f8f8fa", border: "1px solid #e5e7eb", fontSize: 12, fontWeight: 600, color: "#374151", fontFamily: "var(--font-poppins)" }}>
                  <MapPin size={10} color="var(--brand-red)" />
                  {city}
                </span>
              ))}
            </motion.div>
          </motion.div>

          {/* Right content — full text from crenovate.com */}
          <motion.div initial={{ opacity: 0, x: 60 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.8, delay: 0.2 }}>
            <span className="section-label">About Us</span>
            <h2 style={{ fontFamily: "var(--font-montserrat)", fontWeight: 900, fontSize: "clamp(30px, 3.5vw, 46px)", lineHeight: 1.15, letterSpacing: "-0.02em", color: "#111", marginBottom: 24, marginTop: 12 }}>
              We are <span className="gradient-text">Crenovate</span> —<br />Creating and Innovating<br />Ideas at Work!
            </h2>

            <p style={{ color: "#374151", fontSize: 16, lineHeight: 1.8, marginBottom: 14, fontFamily: "var(--font-inter)" }}>
              <em>&ldquo;They say that the best way to have an idea is to have a lot of ideas...&rdquo;</em>
            </p>
            <p style={{ color: "#6b7280", fontSize: 15, lineHeight: 1.8, marginBottom: 14, fontFamily: "var(--font-inter)" }}>
              Founded in 2010, Crenovate is a fully integrated Communications agency, offering to be your <strong style={{ color: "#374151" }}>&lsquo;partner&rsquo;</strong> while taking care of all your communication needs.
            </p>
            <p style={{ color: "#6b7280", fontSize: 15, lineHeight: 1.8, marginBottom: 14, fontFamily: "var(--font-inter)" }}>
              We are known for delivering highly strategic, results-driven, feather-ruffling work in branding, print, digital, web, social media, advertising, and new media. We&rsquo;re passionate about creating successful storytelling tools, and we&rsquo;re committed to growing your business.
            </p>
            <p style={{ color: "#6b7280", fontSize: 15, lineHeight: 1.8, marginBottom: 14, fontFamily: "var(--font-inter)" }}>
              We believe in ideas that challenge stereotypes — and while doing so, put a smile on our clients&rsquo; face and their pockets as well.
            </p>
            <p style={{ color: "#6b7280", fontSize: 15, lineHeight: 1.8, marginBottom: 14, fontFamily: "var(--font-inter)" }}>
              We&rsquo;re big enough to handle complex national brand campaigns, yet small enough to provide the very best personal service to all of our clients. We work with clients across India and have offices in <strong style={{ color: "#374151" }}>Mumbai, Indore, Raipur and Australia</strong>.
            </p>
            <p style={{ color: "#6b7280", fontSize: 15, lineHeight: 1.8, marginBottom: 32, fontFamily: "var(--font-inter)" }}>
              Our team of friendly rule breakers will give life back to your brand. The process shouldn&rsquo;t be painful or boring; it should be interactive, engaging, and yes—<strong style={{ color: "var(--brand-red)" }}>fun!</strong>
            </p>

            {/* Service pillars */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 40 }}>
              {pillars.map(tag => (
                <span key={tag} style={{ padding: "7px 16px", borderRadius: 50, fontSize: 12, fontWeight: 600, color: "var(--brand-red)", background: "var(--brand-red-xlight)", border: "1px solid var(--brand-red-soft)", fontFamily: "var(--font-poppins)" }}>{tag}</span>
              ))}
            </div>

            {/* Stats */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 12 }}>
              {stats.map((s, i) => (
                <motion.div key={s.label} initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.4 + i * 0.1 }}
                  style={{ textAlign: "center", padding: "16px 8px", borderRadius: 16, background: "#f9f9fb", border: "1px solid #f0f0f0", transition: "all 0.3s" }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = "var(--brand-red-soft)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 24px rgba(139,26,26,0.08)"; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "#f0f0f0"; (e.currentTarget as HTMLElement).style.boxShadow = "none"; }}>
                  <div style={{ fontFamily: "var(--font-montserrat)", fontWeight: 900, fontSize: 26, color: s.color }}>
                    <AnimatedCounter end={s.end} suffix={s.suffix} />
                  </div>
                  <div style={{ fontFamily: "var(--font-poppins)", fontSize: 10, color: "#9ca3af", marginTop: 4, lineHeight: 1.3 }}>{s.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          #about .container-xl > div:first-of-type { grid-template-columns: 1fr !important; gap: 48px !important; }
          #about .container-xl > div:first-of-type > div:last-child > div:last-child { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </section>
  );
}
