"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FaLinkedinIn, FaTwitter, FaInstagram } from "react-icons/fa";

const team = [
  { name: "Akkshay Jain", role: "Founder & Director", dept: "Leadership", bio: "Visionary leader with 15+ years in brand communication and creative strategy.", initials: "AJ", img: "/akkshay-jain.jpg", grad: "linear-gradient(135deg, var(--brand-red), var(--brand-red-dark))", color: "var(--brand-red)" },
  { name: "Shikha Jain", role: "Director", dept: "Leadership", bio: "Strategic communications expert driving brand vision and business development.", initials: "SJ", grad: "linear-gradient(135deg, #7c3aed, #8b5cf6)", color: "#7c3aed" },
  { name: "Priya Sharma", role: "Head of Client Servicing", dept: "Client Relations", bio: "Building lasting partnerships through exceptional client experience and results.", initials: "PS", grad: "linear-gradient(135deg, #06b6d4, #0891b2)", color: "#06b6d4" },
  { name: "Rahul Mehta", role: "Creative Director", dept: "Marketing Team", bio: "Award-winning creative thinker transforming brand stories into visual masterpieces.", initials: "RM", grad: "linear-gradient(135deg, #ec4899, #db2777)", color: "#ec4899" },
  { name: "Ananya Singh", role: "Business Development Manager", dept: "Business Development", bio: "Connecting brands with the right solutions and forging strategic partnerships.", initials: "AS", grad: "linear-gradient(135deg, #f59e0b, #ef4444)", color: "#f59e0b" },
  { name: "Vikram Patel", role: "E-Commerce Lead", dept: "E-Commerce Team", bio: "Driving digital commerce growth with data-driven strategies and UX excellence.", initials: "VP", grad: "linear-gradient(135deg, #10b981, #059669)", color: "#10b981" },
];

const socials = [FaLinkedinIn, FaTwitter, FaInstagram];

function TeamCard({ m, i }: { m: typeof team[0]; i: number }) {
  return (
    <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-30px" }} transition={{ delay: i * 0.1, duration: 0.6 }}
      className="team-card" data-cursor>
      <div style={{ height: 4, width: "100%", background: m.grad }} />
      <div style={{ padding: 32 }}>
        {/* Avatar */}
        <div style={{ position: "relative", marginBottom: 20 }}>
          {m.img ? (
            <div style={{ width: 72, height: 72, borderRadius: 18, overflow: "hidden", boxShadow: `0 8px 24px rgba(139,26,26,0.2)`, transition: "transform 0.3s", position: "relative" }}
              onMouseEnter={e => (e.currentTarget.style.transform = "scale(1.08)")}
              onMouseLeave={e => (e.currentTarget.style.transform = "scale(1)")}>
              <img src={m.img} alt={m.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
          ) : (
            <div style={{ width: 72, height: 72, borderRadius: 18, background: m.grad, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--font-montserrat)", fontWeight: 900, fontSize: 22, color: "#fff", boxShadow: `0 8px 24px ${m.color}40`, transition: "transform 0.3s" }}
              onMouseEnter={e => (e.currentTarget.style.transform = "scale(1.08)")}
              onMouseLeave={e => (e.currentTarget.style.transform = "scale(1)")}>
              {m.initials}
            </div>
          )}
        </div>
        <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: m.color.includes("var") ? "var(--brand-red)" : m.color, fontFamily: "var(--font-poppins)", marginBottom: 4 }}>{m.dept}</div>
        <h3 style={{ fontFamily: "var(--font-poppins)", fontWeight: 700, fontSize: 18, color: "#fff", marginBottom: 4 }}>{m.name}</h3>
        <p style={{ fontFamily: "var(--font-inter)", fontSize: 13, color: "rgba(255,255,255,0.45)", marginBottom: 12 }}>{m.role}</p>
        <p style={{ fontFamily: "var(--font-inter)", fontSize: 13, color: "rgba(255,255,255,0.65)", lineHeight: 1.7, marginBottom: 20 }}>{m.bio}</p>
        <div style={{ display: "flex", gap: 10 }}>
          {socials.map((Icon, idx) => (
            <button key={idx} className="social-btn" data-cursor
              onMouseEnter={e => { 
                const clr = m.color.includes("var") ? "var(--brand-red)" : m.color;
                (e.currentTarget as HTMLElement).style.background = clr; 
                (e.currentTarget as HTMLElement).style.borderColor = clr; 
                (e.currentTarget as HTMLElement).style.color = "#fff"; 
              }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = ""; (e.currentTarget as HTMLElement).style.borderColor = ""; (e.currentTarget as HTMLElement).style.color = ""; }}>
              <Icon size={14} />
            </button>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function Team() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="team" style={{ padding: "120px 0", background: "#0a0a0f", position: "relative", overflow: "hidden", color: "#fff" }}>
      <div style={{ position: "absolute", top: "25%", left: "25%", width: 400, height: 400, background: "radial-gradient(circle, rgba(139,26,26,0.15), transparent 70%)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", bottom: "25%", right: "25%", width: 300, height: 300, background: "radial-gradient(circle, rgba(139,26,26,0.1), transparent 70%)", pointerEvents: "none" }} />
      <div className="grid-bg-dark" style={{ position: "absolute", inset: 0, opacity: 0.6 }} />

      <div className="container-xl" style={{ position: "relative" }}>
        <div ref={ref} style={{ textAlign: "center", marginBottom: 72 }}>
          <motion.span initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} className="section-label">The Team</motion.span>
          <motion.h2 initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.1 }}
            style={{ fontFamily: "var(--font-montserrat)", fontWeight: 900, fontSize: "clamp(32px, 4vw, 56px)", lineHeight: 1.1, color: "#fff", marginTop: 8 }}>
            The Minds Behind <span className="gradient-text">The Magic</span>
          </motion.h2>
          <motion.p initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}} transition={{ delay: 0.2 }}
            style={{ color: "rgba(255,255,255,0.65)", fontSize: 17, marginTop: 16, fontFamily: "var(--font-inter)" }}>
            A passionate team of strategists, creatives, and technologists.
          </motion.p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
          {team.map((m, i) => <TeamCard key={m.name} m={m} i={i} />)}
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) { #team .container-xl > div:last-child { grid-template-columns: repeat(2, 1fr) !important; } }
        @media (max-width: 640px) { #team .container-xl > div:last-child { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}
