"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Calendar, ArrowUpRight } from "lucide-react";
import Image from "next/image";

const events = [
  {
    id: 1,
    title: "Bharat Trilogy Summit 2025",
    tag: "Strategic Identity & Curation",
    desc: "Partnered with Etherwire.AI for the Mumbai summit based on the philosophy 'Viksit Bharat with Values'. We translated the Wisdom, Wealth, and Vision trilogy framework into a soulful experience covering brand identity, on-ground branding, and a landmark millet-based menu curated with Chef Ganesh Joshi.",
    image: "/event-bharat-trilogy.png",
    color: "#8B1A1A",
    stats: [
      { label: "Philosophy", val: "Viksit Bharat" },
      { label: "Highlight", val: "Millet Menu" }
    ],
    date: "Mumbai, 2025"
  },
  {
    id: 2,
    title: "TiECon MP 2025 (2.0) / Micro Mitti",
    tag: "PR, Communications & Event Partner",
    desc: "Led as the official PR, Communications, and Event Management Partner for Central India's largest entrepreneurial gathering by TiE MP. We curated every moment from strategic storytelling to on-ground execution to elevate Indore's startup ecosystem into the national spotlight.",
    image: "/event-tiecon-mp.png",
    color: "#8B1A1A",
    stats: [
      { label: "Ecosystem", val: "Central India" },
      { label: "Service", val: "Full Suite PR" }
    ],
    date: "Indore, M.P."
  },
  {
    id: 3,
    title: "HEV Capital Connect 2026",
    tag: "Clean Energy Summit",
    desc: "Proud Event Management Partner for India's biggest clean energy summit. Formulating the end-to-end event experience, design, and execution where clean-tech startups, investors, and industry leaders connect to drive future clean energy impact.",
    image: "/event-hev-capital.png",
    color: "#8B1A1A",
    stats: [
      { label: "Date", val: "26 June 2026" },
      { label: "Venue", val: "Sheraton Grand" }
    ],
    date: "Sheraton Grand, Indore"
  },
  {
    id: 4,
    title: "Oud by IDOL Indore Launch",
    tag: "Premium Brand Launch & Design",
    desc: "Handled the full PR, communications, and event designing/curation for the entry of Dubai's premium perfume brand into Indore. Featuring legendary actor Suniel Shetty as the Guest of Honour/Mentor for a high-profile launch experience.",
    image: "/event-oud-idol.png",
    color: "#8B1A1A",
    stats: [
      { label: "Guest of Honour", val: "Suniel Shetty" },
      { label: "Brand Origin", val: "Dubai Premium" }
    ],
    date: "Indore, M.P."
  }
];

function EventCard({ event, i }: { event: typeof events[0]; i: number }) {
  const [hovered, setHovered] = useState(false);
  const [imageError, setImageError] = useState(false);
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: i * 0.15, ease: "easeOut" }}
      className="portfolio-card"
      style={{
        position: "relative",
        height: 520,
        borderRadius: 24,
        overflow: "hidden",
        background: "#0d0d15",
        border: "1px solid rgba(255, 255, 255, 0.05)",
        boxShadow: hovered ? "0 20px 40px rgba(139, 26, 26, 0.15)" : "0 10px 20px rgba(0, 0, 0, 0.2)",
        transition: "border-color 0.4s ease, box-shadow 0.4s ease",
        borderColor: hovered ? "rgba(139, 26, 26, 0.4)" : "rgba(255, 255, 255, 0.05)"
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      data-cursor
    >
      {/* Event Image / Fallback Gradient */}
      <div style={{ position: "absolute", inset: 0, transition: "transform 0.7s cubic-bezier(0.25, 1, 0.5, 1)", transform: hovered ? "scale(1.06)" : "scale(1)" }}>
        {!imageError && event.image ? (
          <Image
            src={event.image}
            alt={event.title}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            style={{ objectFit: "cover", opacity: hovered ? 0.45 : 0.65, transition: "opacity 0.4s ease" }}
            onError={() => setImageError(true)}
            priority={i < 2}
          />
        ) : (
          /* Premium Fallback Design */
          <div style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(135deg, #180808 0%, #2e0811 50%, #0d0d15 100%)",
            opacity: 0.85,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            gap: 12
          }}>
            <div style={{
              width: 64,
              height: 64,
              borderRadius: "50%",
              background: "rgba(139, 26, 26, 0.1)",
              border: "1px dashed rgba(139, 26, 26, 0.3)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "rgba(139, 26, 26, 0.8)"
            }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect width="18" height="18" x="3" y="3" rx="2" ry="2"/>
                <circle cx="9" cy="9" r="2"/>
                <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/>
              </svg>
            </div>
            <span style={{ fontSize: 11, fontWeight: 600, color: "rgba(255, 255, 255, 0.3)", textTransform: "uppercase", letterSpacing: "0.15em", fontFamily: "var(--font-poppins)" }}>
              Visual Showcase Coming Soon
            </span>
          </div>
        )}

        {/* Dark radial overlay */}
        <div style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(to bottom, rgba(10, 10, 15, 0.1) 0%, rgba(10, 10, 15, 0.55) 50%, rgba(10, 10, 15, 0.95) 100%)",
          zIndex: 1
        }} />
      </div>

      {/* Grid Pattern overlay */}
      <div style={{
        position: "absolute",
        inset: 0,
        backgroundImage: "radial-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px)",
        backgroundSize: "24px 24px",
        pointerEvents: "none",
        zIndex: 2
      }} />

      {/* Card Content */}
      <div style={{
        position: "absolute",
        inset: 0,
        zIndex: 3,
        padding: "40px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "100%"
      }}>
        {/* Top Section: Tag and Date */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "start", gap: 16 }}>
          <span style={{
            padding: "6px 16px",
            borderRadius: 50,
            fontSize: 11,
            fontWeight: 700,
            color: "#fff",
            background: "rgba(139, 26, 26, 0.85)",
            backdropFilter: "blur(4px)",
            letterSpacing: "0.05em",
            fontFamily: "var(--font-poppins)",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            boxShadow: "0 4px 12px rgba(139, 26, 26, 0.15)"
          }}>
            {event.tag}
          </span>
          <span style={{
            display: "flex",
            alignItems: "center",
            gap: 6,
            fontSize: 12,
            fontWeight: 600,
            color: "rgba(255, 255, 255, 0.75)",
            fontFamily: "var(--font-poppins)",
            background: "rgba(0, 0, 0, 0.4)",
            padding: "4px 12px",
            borderRadius: 20,
            border: "1px solid rgba(255, 255, 255, 0.05)"
          }}>
            <Calendar size={12} style={{ color: "var(--brand-red-light)" }} /> {event.date}
          </span>
        </div>

        {/* Bottom Section: Title, Desc, and Stats */}
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div>
            <h3 style={{
              fontFamily: "var(--font-montserrat)",
              fontWeight: 800,
              fontSize: "clamp(20px, 2.5vw, 24px)",
              color: "#fff",
              margin: 0,
              lineHeight: 1.3,
              transition: "color 0.3s ease"
            }}>
              {event.title}
            </h3>
            {/* Short line decoration */}
            <div style={{
              width: hovered ? 60 : 30,
              height: 2,
              background: "var(--brand-red)",
              marginTop: 12,
              transition: "width 0.3s ease"
            }} />
          </div>

          <p style={{
            fontFamily: "var(--font-inter)",
            fontSize: 14,
            color: "rgba(255, 255, 255, 0.65)",
            lineHeight: 1.6,
            margin: 0,
            overflow: "hidden",
            display: "-webkit-box",
            WebkitLineClamp: 4,
            WebkitBoxOrient: "vertical"
          }}>
            {event.desc}
          </p>

          {/* Stats & Interactive Button */}
          <div style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            paddingTop: 20,
            borderTop: "1px solid rgba(255, 255, 255, 0.08)",
            marginTop: 8
          }}>
            {/* Quick Metrics */}
            <div style={{ display: "flex", gap: 24 }}>
              {event.stats.map((s, idx) => (
                <div key={idx} style={{ display: "flex", flexDirection: "column" }}>
                  <span style={{ fontSize: 16, fontWeight: 800, color: "#fff", fontFamily: "var(--font-montserrat)" }}>
                    {s.val}
                  </span>
                  <span style={{ fontSize: 10, fontWeight: 600, color: "rgba(255, 255, 255, 0.4)", textTransform: "uppercase", letterSpacing: "0.05em", marginTop: 2, fontFamily: "var(--font-poppins)" }}>
                    {s.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Action Arrow */}
            <div style={{
              width: 44,
              height: 44,
              borderRadius: "50%",
              border: "1px solid rgba(255, 255, 255, 0.15)",
              background: hovered ? "var(--brand-red)" : "rgba(255, 255, 255, 0.03)",
              color: "#fff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transition: "all 0.3s cubic-bezier(0.25, 1, 0.5, 1)",
              transform: hovered ? "rotate(45deg) scale(1.05)" : "none",
              borderColor: hovered ? "var(--brand-red)" : "rgba(255, 255, 255, 0.15)"
            }}>
              <ArrowUpRight size={18} />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Portfolio() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="portfolio" style={{ padding: "120px 0", background: "#0a0a0f", position: "relative", overflow: "hidden", color: "#fff" }}>
      {/* Decorative Glow Elements */}
      <div style={{ position: "absolute", top: "15%", right: 0, width: 500, height: 500, background: "radial-gradient(circle, rgba(139,26,26,0.18), transparent 70%)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", bottom: "15%", left: 0, width: 400, height: 400, background: "radial-gradient(circle, rgba(139,26,26,0.12), transparent 70%)", pointerEvents: "none" }} />

      <div className="container-xl">
        {/* Section Header */}
        <div ref={ref} style={{ textAlign: "center", marginBottom: 70 }}>
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="section-label"
          >
            Portfolio
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            style={{ fontFamily: "var(--font-montserrat)", fontWeight: 900, fontSize: "clamp(32px, 4vw, 56px)", lineHeight: 1.1, color: "#fff", marginTop: 8 }}
          >
            Major Events <span className="gradient-text">& Conclaves</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
            style={{ color: "rgba(255,255,255,0.65)", fontSize: 17, marginTop: 16, fontFamily: "var(--font-inter)", maxWidth: 640, margin: "16px auto 0" }}
          >
            An integrated showcase of landmark corporate summits, design expos, and leadership conferences executed with precision.
          </motion.p>
        </div>

        {/* Structured 2x2 Grid of events */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 540px), 1fr))",
          gap: "40px",
          width: "100%"
        }}>
          {events.map((event, i) => (
            <EventCard key={event.id} event={event} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
