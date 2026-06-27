"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Target, Compass, Award } from "lucide-react";
import { useTransitionNavigator } from "@/components/PageTransition";

export default function Overview() {
  const { navigate } = useTransitionNavigator();

  const details = [
    {
      title: "Strategic Communications",
      desc: "Crafting narratives that define brand purpose and drive market leadership across print, digital, and mainstream advertising channels.",
      icon: Target,
      color: "var(--brand-red)",
    },
    {
      title: "Creative Storytelling",
      desc: "Engaging target audiences through compelling visual identities, copywriting, and impactful campaign strategy that inspires action.",
      icon: Sparkles,
      color: "#c026d3",
    },
    {
      title: "Digital Innovation",
      desc: "Creating forward-thinking digital products, websites, and data-driven marketing frameworks that deliver tangible conversion metrics.",
      icon: Compass,
      color: "#2563eb",
    },
    {
      title: "Corporate Excellence",
      desc: "Delivering measurable PR, crisis management, and stakeholder engagement programs for top-tier Indian and multinational brands.",
      icon: Award,
      color: "#059669",
    },
  ];

  const portals = [
    { name: "About", path: "/about", tag: "Strategy & Leadership", bg: "linear-gradient(135deg, #1e1b4b 0%, #31102f 100%)" },
    { name: "Services", path: "/services", tag: "Our Integrated Suite", bg: "linear-gradient(135deg, #0f172a 0%, #1e1b4b 100%)" },
    { name: "Our Work", path: "/portfolio", tag: "Creative Showcase", bg: "linear-gradient(135deg, #180808 0%, #2e0811 100%)" },
    { name: "Clients", path: "/clients", tag: "Global Partnerships", bg: "linear-gradient(135deg, #091a18 0%, #032b1e 100%)" },
    { name: "Team", path: "/team", tag: "Meet The Innovators", bg: "linear-gradient(135deg, #172554 0%, #1e3a8a 100%)" },
    { name: "Contact", path: "/contact", tag: "Connect with Us", bg: "linear-gradient(135deg, #050508 0%, #1a0b2e 100%)" },
  ];

  return (
    <section style={{ padding: "100px 0", background: "#ffffff", color: "#000000", position: "relative" }}>
      <div className="container-xl">
        
        {/* Intro Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: 64, alignItems: "center", marginBottom: 80 }}>
          <div>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(139,26,26,0.06)", padding: "6px 16px", borderRadius: 20, color: "var(--brand-red)", fontSize: 12, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.15em", marginBottom: 20, fontFamily: "var(--font-poppins)" }}>
              <span>Overview</span>
            </div>
            <h2 style={{ fontFamily: "var(--font-montserrat)", fontWeight: 900, fontSize: "clamp(32px, 4vw, 54px)", color: "#0a0a0f", lineHeight: 1.1, margin: "0 0 24px", letterSpacing: "-0.02em" }}>
              Creating and Innovating<br />
              <span style={{ color: "var(--brand-red)" }}>Ideas at Work.</span>
            </h2>
            <p style={{ fontSize: 18, color: "#4b5563", lineHeight: 1.75, fontFamily: "var(--font-inter)", marginBottom: 24 }}>
              Crenovate is a premium integrated communications agency. Since 2010, we have helped brands build deep, lasting connections with their audiences. We bridge the gap between creative strategy and commercial performance, turning bold ideas into measurable reality.
            </p>
            <p style={{ fontSize: 16, color: "#6b7280", lineHeight: 1.7, fontFamily: "var(--font-inter)", margin: 0 }}>
              Through strategic PR, cutting-edge advertising, digital design, and robust brand positioning, we collaborate with market leaders to execute ideas that capture imaginations and accelerate growth.
            </p>
          </div>

          {/* Interactive Statistics Grid */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
            {[
              { num: "14+", label: "Years of Excellence" },
              { num: "250+", label: "Successful Campaigns" },
              { num: "4+", label: "Global Locations" },
              { num: "98%", label: "Client Satisfaction" }
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                style={{
                  background: "#f8f8fa",
                  border: "1px solid rgba(0,0,0,0.05)",
                  borderRadius: 20,
                  padding: 32,
                  textAlign: "center"
                }}
              >
                <h3 style={{ fontFamily: "var(--font-montserrat)", fontWeight: 900, fontSize: 44, color: "var(--brand-red)", margin: "0 0 8px" }}>
                  {stat.num}
                </h3>
                <p style={{ fontFamily: "var(--font-poppins)", fontSize: 13, fontWeight: 600, color: "#4b5563", textTransform: "uppercase", letterSpacing: "0.05em", margin: 0 }}>
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Dynamic Pillars */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 32, marginBottom: 100 }}>
          {details.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              style={{
                background: "#f9fafb",
                border: "1px solid rgba(0,0,0,0.06)",
                borderRadius: 24,
                padding: 40,
                display: "flex",
                flexDirection: "column",
                gap: 20,
                boxShadow: "0 4px 20px rgba(0,0,0,0.01)"
              }}
            >
              <div style={{
                width: 52,
                height: 52,
                borderRadius: 14,
                background: `${item.color}15`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: item.color
              }}>
                <item.icon size={26} />
              </div>
              <h3 style={{ fontFamily: "var(--font-poppins)", fontWeight: 700, fontSize: 20, color: "#111827", margin: 0 }}>
                {item.title}
              </h3>
              <p style={{ fontFamily: "var(--font-inter)", fontSize: 14, color: "#6b7280", lineHeight: 1.6, margin: 0 }}>
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Section Portals Title */}
        <div style={{ textAlign: "center", maxWidth: 640, margin: "0 auto 56px" }}>
          <h2 style={{ fontFamily: "var(--font-montserrat)", fontWeight: 900, fontSize: 36, color: "#0a0a0f", marginBottom: 16 }}>
            Explore Our World
          </h2>
          <p style={{ fontFamily: "var(--font-inter)", fontSize: 16, color: "#6b7280", lineHeight: 1.6, margin: 0 }}>
            Step inside the different wings of Crenovate. Click on any section below to experience it with fluid immersive transitions.
          </p>
        </div>

        {/* Portal Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 24 }}>
          {portals.map((portal) => (
            <motion.div
              key={portal.name}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              onClick={() => navigate(portal.path, portal.name)}
              style={{
                background: portal.bg,
                borderRadius: 24,
                padding: 40,
                cursor: "none",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                minHeight: 220,
                position: "relative",
                overflow: "hidden",
                boxShadow: "0 10px 30px rgba(0,0,0,0.05)"
              }}
              data-cursor
            >
              {/* Dynamic Glow Overlay */}
              <div style={{
                position: "absolute",
                inset: 0,
                background: "radial-gradient(circle at top right, rgba(255,255,255,0.06), transparent 60%)",
                pointerEvents: "none"
              }} />

              <div>
                <span style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(255,255,255,0.5)", fontFamily: "var(--font-poppins)" }}>
                  {portal.tag}
                </span>
                <h3 style={{ fontFamily: "var(--font-montserrat)", fontWeight: 900, fontSize: 32, color: "#ffffff", marginTop: 8, marginBottom: 0 }}>
                  {portal.name}
                </h3>
              </div>

              <div style={{ display: "flex", alignItems: "center", gap: 10, color: "#ffffff", fontWeight: 600, fontSize: 14, fontFamily: "var(--font-poppins)" }}>
                <span>Enter Page</span>
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ repeat: Infinity, duration: 1.2, ease: "easeInOut" }}
                >
                  <ArrowRight size={16} />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
