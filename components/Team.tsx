"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { FaLinkedinIn, FaTwitter, FaInstagram } from "react-icons/fa";
import { X, ChevronDown } from "lucide-react";
import Image from "next/image";

const team = [
  {
    name: "Akkshay Jain",
    role: "Founder & Director",
    dept: "Leadership",
    img: "/akkshay-jain.jpg",
    grad: "linear-gradient(135deg, var(--brand-red), #c0392b)",
    color: "var(--brand-red)",
    shortBio: "Strategy, PR, Corp Comm, Marketing & Personal Branding Leader with 25+ years experience. Built 2 unicorn-status companies.",
    fullBio: `Strategy, PR, Corp Comm, Marketing, Events & Personal Branding Leader | 25+ yrs shaping brands & leaders | Helping organisations own their story | Worked across 300+ Tier II–IV cities | Built 2 unicorn-status companies.

We are “CRENOVATE”, an integrated PR, Communications and IM + Artist-Celebrity management company handling activities across Metros, tier II and tier III cities. We believe that we are here to make our presence felt and we are sure to make an impression each time we get our heads together.`
  },
  {
    name: "Shikkha A Jainn",
    role: "Director & Brand Strategist",
    dept: "Leadership",
    img: "/shikha-jain.png",
    grad: "linear-gradient(135deg, #7c3aed, #8b5cf6)",
    color: "#7c3aed",
    shortBio: "Brand strategist and communications leader with two decades of experience across 50+ sectors, shaping 50+ brands across 25+ organisations.",
    fullBio: `Brand strategist and communications leader with two decades of experience across 50+ sectors, where she has shaped 50+ brands across 25+ organisations.

Shikkha is a skilled and driven professional with over 20 years of wide-ranging experience in strategizing and executing communication campaigns in corporate and communication agency environments. Accomplished in collaborating with senior leadership and key stakeholders, she has proven success in storytelling through varied mediums – traditional media, social and digital platforms to achieve business goals. She is adept at working in a matrix environment. She enjoys working with technology, setting up and improving processes, and introducing new and better ways of doing things. Now seeking a leadership role to steer communications as a key enabler in delivering an organisation’s strategy.

Key Strengths:
• Developing compelling content tailored to channels, stakeholders and target audiences
• Articulating strategy and complex information into easy-to-understand narratives
• Leveraging visual branding for attention, recall, and call to action
• Process improvement and streamlining the operations of communications teams
• Managing priorities through the complexities of a fast-paced, always-on global environment
• Coaching-centric people manager

Competencies:
Articles, Stories & Narratives | Campaign Management | Crisis Communication | Change Management | Employee Engagement | Leadership Messaging | Marketing Communication | Media Interaction | Press Releases | Reputation Management | Social Media Content | Website Content`
  },
  {
    name: "Prateeksha Jain",
    role: "Manager - Avi Engineering",
    dept: "Engineering",
    img: "/prateeksha-jain.png",
    grad: "linear-gradient(135deg, #3b82f6, #1d4ed8)",
    color: "#3b82f6",
    shortBio: "Manager of Avi Engineering, former Computer Science Assistant Professor, and certified digital marketing and language expert.",
    fullBio: `Prateeksha Jain (She/Her) is the Manager of Avi Engineering at Crenovate. She is a multi-talented professional with a strong technical background and extensive digital operations expertise.

Previously, she served as an Assistant Professor for Computer Science at Kothari College (Nov 2017 - Nov 2018). In addition to her academic and engineering background, she is certified and holds a diploma in the French Language.

Prateeksha holds certifications and brings specialized expertise in:
• Digital Marketing & Campaign Management
• Content Creation
• Meta Ads Strategy
• Graphic Designing
• Video Editing & Production
• Website Development`
  },
  {
    name: "Vishal Jain",
    role: "Client Servicing",
    dept: "Client Relations",
    img: "/vishal-jain.png",
    grad: "linear-gradient(135deg, #06b6d4, #0891b2)",
    color: "#06b6d4",
    shortBio: "\"A drop of parent's sweat or a teacher's raised eyebrows; a friend's witty smile or boss' pat on the back — I have come a long way to realize Communication goes beyond words.\"",
    fullBio: `"A drop of parent's sweat or a teacher's raised eyebrows; a friend's witty smile or boss' pat on the back, I have come a long way to realize Communication goes beyond words."

Vishal is a dynamic client servicing professional who bridges the gap between client expectations and creative delivery. He ensures seamless project execution and builds lasting relationships with every brand he works with. His philosophy is rooted in the belief that true communication is experiential — felt, not just heard.`
  },
  {
    name: "Forum Shah",
    role: "Marketing & Business Development",
    dept: "Business Development",
    img: "/forum-shah.png",
    grad: "linear-gradient(135deg, #f59e0b, #ef4444)",
    color: "#f59e0b",
    shortBio: "Effervescent and a go-getter, she looks after the marketing and business development section of Crenovate, working on various cost-effective plans and campaigns.",
    fullBio: `Forum Shah looks after the marketing and business development section of Crenovate. Effervescent and a go-getter, she works on various cost-effective plans and campaigns and handles client acquisition, partnership development, and brand outreach strategies.

Her energetic approach to business development has helped Crenovate forge key relationships across industries and expand the agency's reach into new markets and verticals. She brings a client-first mentality paired with sharp commercial acumen.`
  },
  {
    name: "Shrutika Khandelwal",
    role: "E-Commerce",
    dept: "E-Commerce Team",
    img: "/shrutika-khandelwal.png",
    grad: "linear-gradient(135deg, #10b981, #059669)",
    color: "#10b981",
    shortBio: "A team player whose passion is to change IT trends and technology that enable clients across the globe to add to their bottomline. Her specialization is building online portals.",
    fullBio: `Shrutika is a team player whose passion is to change IT trends and technology that enable clients across the globe to add to their bottomline. Her specialization is building online portals and e-commerce platforms that combine design excellence with performance-driven architecture.

She brings a data-led approach to every digital project, ensuring that the solutions she delivers are not just functional but measurably impactful. Her expertise spans product listing optimization, user journey design, and conversion rate improvement for brands in competitive digital markets.`
  }
];

function TeamAvatar({ member, size }: { member: typeof team[0]; size: number }) {
  const [error, setError] = useState(false);
  const initials = member.name.split(" ").map(n => n[0]).join("").slice(0, 2).toUpperCase();

  if (error || !member.img) {
    return (
      <div style={{
        width: size,
        height: size,
        borderRadius: 20,
        background: member.grad,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontWeight: 700,
        fontSize: size * 0.35,
        color: "#fff",
        fontFamily: "var(--font-montserrat)",
        boxShadow: `0 10px 28px ${member.color}40`,
        transition: "transform 0.3s"
      }}>
        {initials}
      </div>
    );
  }

  return (
    <div style={{ position: "relative", width: size, height: size, borderRadius: 20, overflow: "hidden", boxShadow: `0 10px 28px ${member.color}40`, transition: "transform 0.3s" }}>
      <Image 
        src={member.img} 
        alt={member.name} 
        fill 
        sizes={`${size}px`} 
        style={{ objectFit: "cover" }} 
        onError={() => setError(true)}
      />
    </div>
  );
}

function TeamModal({ member, onClose }: { member: typeof team[0]; onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      style={{ position: "fixed", inset: 0, zIndex: 99998, background: "rgba(0,0,0,0.7)", backdropFilter: "blur(8px)", display: "flex", alignItems: "center", justifyContent: "center", padding: 24 }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.92, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.92, y: 30 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        onClick={e => e.stopPropagation()}
        style={{ background: "#fff", borderRadius: 28, maxWidth: 620, width: "100%", maxHeight: "85vh", overflowY: "auto", position: "relative", boxShadow: "0 40px 80px rgba(0,0,0,0.3)" }}
      >
        {/* Top gradient bar */}
        <div style={{ height: 6, background: member.grad, borderRadius: "28px 28px 0 0" }} />

        <div style={{ padding: "36px 40px" }}>
          {/* Close */}
          <button onClick={onClose} data-cursor
            style={{ position: "absolute", top: 20, right: 20, width: 36, height: 36, borderRadius: "50%", border: "1px solid #e5e7eb", background: "#f9fafb", cursor: "none", display: "flex", alignItems: "center", justifyContent: "center", color: "#6b7280" }}>
            <X size={16} />
          </button>

          {/* Header */}
          <div style={{ display: "flex", gap: 20, alignItems: "flex-start", marginBottom: 28 }}>
            <TeamAvatar member={member} size={90} />
            <div>
              <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: member.color.includes("var") ? "var(--brand-red)" : member.color, fontFamily: "var(--font-poppins)" }}>{member.dept}</span>
              <h3 style={{ fontFamily: "var(--font-montserrat)", fontWeight: 900, fontSize: 24, color: "#111", margin: "4px 0 4px" }}>{member.name}</h3>
              <p style={{ fontFamily: "var(--font-inter)", fontSize: 14, color: "#6b7280", margin: 0 }}>{member.role}</p>
            </div>
          </div>

          {/* Full bio */}
          <div>
            {member.fullBio.split("\n\n").map((para, i) => (
              <p key={i} style={{ fontFamily: "var(--font-inter)", fontSize: 15, color: "#4b5563", lineHeight: 1.8, marginBottom: 14 }}>
                {para}
              </p>
            ))}
          </div>

          {/* Socials */}
          <div style={{ display: "flex", gap: 10, marginTop: 24 }}>
            {[FaLinkedinIn, FaTwitter, FaInstagram].map((Icon, idx) => (
              <button key={idx} data-cursor
                style={{ width: 36, height: 36, borderRadius: 10, border: "1px solid #e5e7eb", background: "none", cursor: "none", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14, color: "#6b7280", transition: "all 0.2s" }}
                onMouseEnter={e => { const clr = member.color.includes("var") ? "var(--brand-red)" : member.color; (e.currentTarget as HTMLElement).style.background = clr; (e.currentTarget as HTMLElement).style.color = "#fff"; (e.currentTarget as HTMLElement).style.borderColor = clr; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "none"; (e.currentTarget as HTMLElement).style.color = "#6b7280"; (e.currentTarget as HTMLElement).style.borderColor = "#e5e7eb"; }}>
                <Icon />
              </button>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

function TeamCard({ m, i }: { m: typeof team[0]; i: number }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-30px" }}
        transition={{ delay: i * 0.1, duration: 0.6 }}
        className="team-card"
        data-cursor
      >
        <div style={{ height: 4, width: "100%", background: m.grad }} />
        <div style={{ padding: 32 }}>
          {/* Photo */}
          <div 
            style={{ marginBottom: 20, transition: "transform 0.3s", width: "fit-content" }}
            onMouseEnter={e => (e.currentTarget.style.transform = "scale(1.07)")}
            onMouseLeave={e => (e.currentTarget.style.transform = "scale(1)")}
          >
            <TeamAvatar member={m} size={80} />
          </div>

          <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: m.color.includes("var") ? "var(--brand-red)" : m.color, fontFamily: "var(--font-poppins)", marginBottom: 4 }}>{m.dept}</div>
          <h3 style={{ fontFamily: "var(--font-poppins)", fontWeight: 700, fontSize: 18, color: "#fff", marginBottom: 4 }}>{m.name}</h3>
          <p style={{ fontFamily: "var(--font-inter)", fontSize: 13, color: "rgba(255,255,255,0.45)", marginBottom: 12 }}>{m.role}</p>
          <p style={{ fontFamily: "var(--font-inter)", fontSize: 13, color: "rgba(255,255,255,0.65)", lineHeight: 1.7, marginBottom: 20 }}>
            {m.shortBio.length > 120 ? m.shortBio.slice(0, 117) + "..." : m.shortBio}
          </p>

          <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
            {[FaLinkedinIn, FaTwitter, FaInstagram].map((Icon, idx) => (
              <button key={idx} className="social-btn" data-cursor
                onMouseEnter={e => { const clr = m.color.includes("var") ? "var(--brand-red)" : m.color; (e.currentTarget as HTMLElement).style.background = clr; (e.currentTarget as HTMLElement).style.borderColor = clr; (e.currentTarget as HTMLElement).style.color = "#fff"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = ""; (e.currentTarget as HTMLElement).style.borderColor = ""; (e.currentTarget as HTMLElement).style.color = ""; }}>
                <Icon size={13} />
              </button>
            ))}
            <button onClick={() => setOpen(true)} data-cursor
              style={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: 4, fontSize: 12, fontWeight: 600, color: m.color.includes("var") ? "var(--brand-red)" : m.color, background: "none", border: "none", cursor: "none", fontFamily: "var(--font-poppins)" }}>
              Read More <ChevronDown size={13} />
            </button>
          </div>
        </div>
      </motion.div>

      <AnimatePresence>
        {open && <TeamModal member={m} onClose={() => setOpen(false)} />}
      </AnimatePresence>
    </>
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
            style={{ color: "rgba(255,255,255,0.65)", fontSize: 17, marginTop: 16, maxWidth: 520, margin: "16px auto 0", fontFamily: "var(--font-inter)" }}>
            Our team of friendly rule breakers — passionate strategists, creative communicators, and digital innovators.
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
