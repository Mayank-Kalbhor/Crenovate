"use client";

import { useState } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Target, Megaphone, Radio, Palette, Globe, TrendingUp, ChevronDown, ChevronUp } from "lucide-react";

const services = [
  {
    icon: Target,
    title: "Strategy",
    color: "#4f46e5",
    grad: "linear-gradient(135deg, #4f46e5, #3b82f6)",
    description: "Data-driven strategies that align your brand's vision with measurable market growth and long-term success.",
    items: [
      "Brand & Business Strategy",
      "Market Growth Strategy",
      "Account & Strategic Planning",
      "Marketing Communications Planning",
      "Cross-Channel Marketing",
      "Consumer Forensics",
      "Strategic Consultation",
      "Shopper & Retail Marketing",
      "Hospital & Healthcare Marketing",
    ],
  },
  {
    icon: Megaphone,
    title: "Advertising",
    color: "#7c3aed",
    grad: "linear-gradient(135deg, #7c3aed, #8b5cf6)",
    description: "Creative campaigns that cut through the noise and leave a lasting impression across every medium.",
    items: [
      "Creative Development",
      "Copywriting",
      "Broadcast: Radio, TV, Video",
      "Print: Magazine, Newspaper",
      "Outdoor & Out-of-Home: Billboards, Transit",
      "Movie Theatre Advertising",
      "Digital & Social Media Advertising",
      "Online Ad Campaigns",
      "Direct Mail & Direct Response",
      "Multimedia Displays",
      "Word of Mouth Marketing",
      "Experiential Marketing",
    ],
  },
  {
    icon: Radio,
    title: "Public Relations",
    color: "#06b6d4",
    grad: "linear-gradient(135deg, #06b6d4, #0891b2)",
    description: "Building and protecting your brand reputation through strategic, proactive communication at every level.",
    items: [
      "Thought Leadership",
      "Strategic PR",
      "PR Campaigns",
      "Crisis Management",
      "PR Events / Conferences",
      "Media Relations",
    ],
  },
  {
    icon: Palette,
    title: "Brand Development",
    color: "#ec4899",
    grad: "linear-gradient(135deg, #ec4899, #db2777)",
    description: "Crafting distinctive identities that resonate deeply with your audience and stand the test of time.",
    items: [
      "Brand Evaluation & Analysis",
      "Nomenclature / Name Development",
      "Brand & Corporate Identity",
      "Logo Design",
      "Brand Iconography",
      "Brand Story",
      "Brand Language",
      "Brand Structure & Hierarchy",
      "Property Branding Elements",
      "Retail Package Development",
      "Retail Branding",
      "Brand Guidelines",
    ],
  },
  {
    icon: Globe,
    title: "Web & Mobile",
    color: "#f59e0b",
    grad: "linear-gradient(135deg, #f59e0b, #ef4444)",
    description: "Digital experiences that engage, convert, and delight users seamlessly across all devices and platforms.",
    items: [
      "Website Design & Development",
      "Website Management",
      "Responsive Web Design & eCommerce Solutions",
      "Content Management Systems (CMS)",
      "Information Architecture & UX Design",
      "Mobile Website Design",
      "App Design & Development",
      "Usability Testing",
      "Web Hosting",
      "Web Analytics & Reporting",
    ],
  },
  {
    icon: TrendingUp,
    title: "Digital Marketing",
    color: "#10b981",
    grad: "linear-gradient(135deg, #10b981, #059669)",
    description: "Performance-driven digital strategies to grow your audience, increase engagement, and maximise ROI.",
    items: [
      "Search Engine Marketing (SEO)",
      "Social Media Marketing (Facebook, LinkedIn, Twitter)",
      "Online Promotions & Contests",
      "PPC Campaigns (Google AdWords, Facebook Ads)",
      "Landing Page Design & Conversion Strategy",
      "Email Marketing",
      "Mobile Marketing",
      "Inbound & Content Marketing",
    ],
  },
];

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  const [expanded, setExpanded] = useState(false);
  const Icon = service.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      className="service-card"
      data-cursor
    >
      <div className="service-card-accent" style={{ background: service.grad }} />

      <div
        style={{ width: 56, height: 56, borderRadius: 16, background: service.grad, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 20, boxShadow: `0 8px 24px ${service.color}40`, transition: "transform 0.3s" }}
        onMouseEnter={e => (e.currentTarget.style.transform = "scale(1.1)")}
        onMouseLeave={e => (e.currentTarget.style.transform = "scale(1)")}
      >
        <Icon color="#fff" size={22} />
      </div>

      <h3 style={{ fontFamily: "var(--font-poppins)", fontWeight: 700, fontSize: 20, color: "#111", marginBottom: 10 }}>{service.title}</h3>
      <p style={{ fontFamily: "var(--font-inter)", fontSize: 14, color: "#6b7280", lineHeight: 1.7, marginBottom: 16 }}>{service.description}</p>

      <motion.div animate={{ height: expanded ? "auto" : 0 }} style={{ overflow: "hidden" }}>
        <ul style={{ listStyle: "none", padding: 0, margin: "0 0 16px" }}>
          {service.items.map(item => (
            <li key={item} style={{ display: "flex", alignItems: "flex-start", gap: 8, fontSize: 13, color: "#6b7280", fontFamily: "var(--font-inter)", padding: "4px 0", lineHeight: 1.5 }}>
              <span style={{ width: 6, height: 6, borderRadius: "50%", background: service.color, flexShrink: 0, marginTop: 5 }} />
              {item}
            </li>
          ))}
        </ul>
      </motion.div>

      <button
        onClick={() => setExpanded(!expanded)}
        data-cursor
        style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 13, fontWeight: 600, color: service.color, fontFamily: "var(--font-poppins)", background: "none", border: "none", cursor: "none", padding: 0 }}
      >
        {expanded ? "Show Less" : `View All ${service.items.length} Services`}
        {expanded ? <ChevronUp size={15} /> : <ChevronDown size={15} />}
      </button>
    </motion.div>
  );
}

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="services" style={{ padding: "120px 0", background: "#f8f8fa", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: 800, height: 800, background: "radial-gradient(circle, #eef2ff, transparent 60%)", pointerEvents: "none" }} />

      <div className="container-xl" style={{ position: "relative" }}>
        <div ref={ref} style={{ textAlign: "center", marginBottom: 72 }}>
          <motion.span initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} className="section-label">Our Services</motion.span>
          <motion.h2 initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.1 }}
            style={{ fontFamily: "var(--font-montserrat)", fontWeight: 900, fontSize: "clamp(32px, 4vw, 56px)", lineHeight: 1.1, letterSpacing: "-0.02em", color: "#111", marginTop: 8 }}>
            Services That <span className="gradient-text">Drive Growth</span>
          </motion.h2>
          <motion.p initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}} transition={{ delay: 0.2 }}
            style={{ color: "#9ca3af", fontSize: 17, marginTop: 16, maxWidth: 560, margin: "16px auto 0", fontFamily: "var(--font-inter)" }}>
            A full-spectrum of creative and strategic communication services — designed to elevate your brand across every channel.
          </motion.p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
          {services.map((s, i) => <ServiceCard key={s.title} service={s} index={i} />)}
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) { #services .container-xl > div:last-child { grid-template-columns: repeat(2, 1fr) !important; } }
        @media (max-width: 640px) { #services .container-xl > div:last-child { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}
