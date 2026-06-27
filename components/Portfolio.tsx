"use client";

import { useState } from "react";
import { useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import Image from "next/image";
import { X, ZoomIn } from "lucide-react";

const categories = [
  { slug: "all", label: "All" },
  { slug: "logo_creation", label: "Logo Creation" },
  { slug: "creatives", label: "Creatives" },
  { slug: "booklets", label: "Booklets" },
  { slug: "newsletters", label: "Newsletters" },
  { slug: "brochure", label: "Brochure" },
  { slug: "websites", label: "Websites" },
  { slug: "case-studies", label: "Case Studies" },
];

const portfolio = [
  {
    caption: "Logo Creation",
    category: "logo_creation",
    img: "/work/341-384x263.jpg",
    tag: "Brand Identity",
    description: "Crafting distinctive logos and visual identities that define and differentiate brands across markets.",
  },
  {
    caption: "E-mailers",
    category: "creatives",
    img: "/work/342-384x263.jpg",
    tag: "Creatives",
    description: "Engaging email creatives designed to cut through the inbox clutter and drive meaningful action.",
  },
  {
    caption: "Posters",
    category: "creatives",
    img: "/work/343-384x263.jpg",
    tag: "Creatives",
    description: "High-impact poster designs for campaigns, events, and brand awareness across print and digital formats.",
  },
  {
    caption: "Standees",
    category: "creatives",
    img: "/work/344-384x263.jpg",
    tag: "Creatives",
    description: "Eye-catching standee designs for exhibitions, trade shows, and in-store brand presence.",
  },
  {
    caption: "Stationery",
    category: "creatives",
    img: "/work/stationery-16-10-003.jpg",
    tag: "Creatives",
    description: "Premium corporate stationery sets — letterheads, business cards, envelopes — designed for lasting impressions.",
  },
  {
    caption: "Packaging",
    category: "creatives",
    img: "/work/345-384x263.jpg",
    tag: "Creatives",
    description: "Innovative packaging designs that make products stand out on the shelf and tell a compelling brand story.",
  },
  {
    caption: "Corporate AV",
    category: "creatives",
    img: "/work/corporateav-16-10-2010.jpg",
    tag: "Creatives",
    description: "Corporate audio-visual presentations and brand films that communicate strategy, culture, and vision with impact.",
  },
  {
    caption: "PR – Media Coverage",
    category: "creatives",
    img: "/work/media-17-10-001.jpg",
    tag: "Public Relations",
    description: "Strategic PR campaigns delivering measurable media coverage and thought leadership positioning for clients.",
  },
  {
    caption: "Newsletters",
    category: "newsletters",
    img: "/work/newsletters-16-10-006.jpg",
    tag: "Newsletters",
    description: "Visually rich newsletters keeping stakeholders informed, engaged, and connected to the brand journey.",
  },
  {
    caption: "Mass Mailers & Press Advertisements",
    category: "creatives",
    img: "/work/massmailers-16-10-008.jpg",
    tag: "Creatives",
    description: "Mass mailers and press ad creatives built for broad reach with focused targeting and compelling copy.",
  },
  {
    caption: "Book Covers",
    category: "creatives",
    img: "/work/bookcover-16-10-009.jpg",
    tag: "Creatives",
    description: "Compelling book cover designs that capture the essence of the content and attract the right readership.",
  },
  {
    caption: "Brochure",
    category: "brochure",
    img: "/work/brochure-16-10-004.jpg",
    tag: "Brochure",
    description: "Premium sales and corporate brochures that communicate brand value, services, and credibility at a glance.",
  },
  {
    caption: "Booklets",
    category: "booklets",
    img: "/work/346-384x263.jpg",
    tag: "Booklets",
    description: "Informative and beautifully designed booklets for product launches, annual reports, and brand storytelling.",
  },
  {
    caption: "Websites",
    category: "websites",
    img: "/work/website-16-10-002.jpg",
    tag: "Web & Digital",
    description: "Responsive, performance-optimised websites delivering seamless experiences across devices for brands and businesses.",
  },
  {
    caption: "Case Studies",
    category: "case-studies",
    img: "/work/casestudies16-10-001.jpg",
    tag: "Case Studies",
    description: "In-depth case studies showcasing Crenovate's strategic process, challenges solved, and measurable results delivered.",
  },
];

function LightboxModal({
  item,
  onClose,
}: {
  item: (typeof portfolio)[0];
  onClose: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 99998,
        background: "rgba(5,5,8,0.92)",
        backdropFilter: "blur(12px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 24,
      }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.88, y: 40 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.88, y: 40 }}
        transition={{ type: "spring", damping: 26, stiffness: 280 }}
        onClick={(e) => e.stopPropagation()}
        style={{
          background: "#fff",
          borderRadius: 24,
          maxWidth: 760,
          width: "100%",
          overflow: "hidden",
          boxShadow: "0 40px 100px rgba(0,0,0,0.5)",
        }}
      >
        {/* Image */}
        <div style={{ position: "relative", width: "100%", aspectRatio: "16/9", background: "#f0f0f0" }}>
          <Image
            src={item.img}
            alt={item.caption}
            fill
            sizes="760px"
            style={{ objectFit: "cover" }}
          />
          <button
            onClick={onClose}
            data-cursor
            style={{
              position: "absolute",
              top: 14,
              right: 14,
              width: 36,
              height: 36,
              borderRadius: "50%",
              background: "rgba(0,0,0,0.55)",
              border: "none",
              cursor: "none",
              color: "#fff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <X size={16} />
          </button>
          {/* Category badge */}
          <span style={{
            position: "absolute",
            bottom: 14,
            left: 14,
            background: "var(--brand-red)",
            color: "#fff",
            fontSize: 11,
            fontWeight: 700,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            padding: "5px 12px",
            borderRadius: 20,
            fontFamily: "var(--font-poppins)",
          }}>
            {item.tag}
          </span>
        </div>
        {/* Info */}
        <div style={{ padding: "28px 32px 32px" }}>
          <h3 style={{ fontFamily: "var(--font-montserrat)", fontWeight: 900, fontSize: 22, color: "#111", marginBottom: 10 }}>
            {item.caption}
          </h3>
          <p style={{ fontFamily: "var(--font-inter)", fontSize: 15, color: "#6b7280", lineHeight: 1.75, margin: 0 }}>
            {item.description}
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}

function PortfolioCard({
  item,
  index,
  onClick,
}: {
  item: (typeof portfolio)[0];
  index: number;
  onClick: () => void;
}) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.35, delay: index * 0.04 }}
      onClick={onClick}
      data-cursor
      className="portfolio-card"
      style={{
        borderRadius: 16,
        overflow: "hidden",
        position: "relative",
        cursor: "none",
        aspectRatio: "16/10",
        background: "#111",
        boxShadow: "0 4px 20px rgba(0,0,0,0.15)",
      }}
    >
      <Image
        src={item.img}
        alt={item.caption}
        fill
        sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw"
        style={{ objectFit: "cover", transition: "transform 0.4s ease" }}
      />
      {/* Hover overlay */}
      <div className="portfolio-overlay">
        <span style={{
          fontSize: 10,
          fontWeight: 700,
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          color: "var(--brand-red)",
          fontFamily: "var(--font-poppins)",
          marginBottom: 6,
        }}>
          {item.tag}
        </span>
        <h3 style={{
          fontFamily: "var(--font-poppins)",
          fontWeight: 700,
          fontSize: 16,
          color: "#fff",
          margin: 0,
        }}>
          {item.caption}
        </h3>
        <div style={{ marginTop: 10, display: "flex", alignItems: "center", gap: 6, color: "rgba(255,255,255,0.6)", fontSize: 12, fontFamily: "var(--font-inter)" }}>
          <ZoomIn size={13} />
          <span>Click to view</span>
        </div>
      </div>

      {/* Caption label always visible at bottom */}
      <div style={{
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        padding: "12px 16px",
        background: "linear-gradient(to top, rgba(5,5,8,0.7), transparent)",
        pointerEvents: "none",
      }}>
        <p style={{
          fontFamily: "var(--font-poppins)",
          fontWeight: 600,
          fontSize: 13,
          color: "#fff",
          margin: 0,
          textShadow: "0 1px 4px rgba(0,0,0,0.5)",
        }}>
          {item.caption}
        </p>
      </div>
    </motion.div>
  );
}

export default function Portfolio() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [activeCategory, setActiveCategory] = useState("all");
  const [lightboxItem, setLightboxItem] = useState<(typeof portfolio)[0] | null>(null);

  const filtered = activeCategory === "all"
    ? portfolio
    : portfolio.filter((p) => p.category === activeCategory);

  return (
    <section
      id="portfolio"
      style={{ padding: "120px 0", background: "#0a0a0f", position: "relative", overflow: "hidden", color: "#fff" }}
    >
      <div style={{ position: "absolute", top: "15%", left: "20%", width: 500, height: 500, background: "radial-gradient(circle, rgba(139,26,26,0.12), transparent 70%)", pointerEvents: "none" }} />
      <div className="grid-bg-dark" style={{ position: "absolute", inset: 0, opacity: 0.5 }} />

      <div className="container-xl" style={{ position: "relative" }}>
        {/* Header */}
        <div ref={ref} style={{ textAlign: "center", marginBottom: 56 }}>
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="section-label"
          >
            Our Work
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            style={{ fontFamily: "var(--font-montserrat)", fontWeight: 900, fontSize: "clamp(32px, 4vw, 56px)", lineHeight: 1.1, color: "#fff", marginTop: 8 }}
          >
            Work We <span className="gradient-text">Just Love</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
            style={{ color: "rgba(255,255,255,0.55)", fontSize: 16, marginTop: 16, maxWidth: 580, margin: "16px auto 0", fontFamily: "var(--font-inter)", lineHeight: 1.7 }}
          >
            Great design works in the real world. Every project has been crafted for real clients to meet real objectives. We deliver powerful solutions to meet expectations — No Sweat, No Blood.
          </motion.p>
        </div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.25 }}
          style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 8, marginBottom: 52 }}
        >
          {categories.map((cat) => (
            <button
              key={cat.slug}
              onClick={() => setActiveCategory(cat.slug)}
              data-cursor
              style={{
                padding: "9px 20px",
                borderRadius: 50,
                border: "1px solid",
                borderColor: activeCategory === cat.slug ? "var(--brand-red)" : "rgba(255,255,255,0.12)",
                background: activeCategory === cat.slug ? "var(--brand-red)" : "transparent",
                color: activeCategory === cat.slug ? "#fff" : "rgba(255,255,255,0.55)",
                fontSize: 13,
                fontWeight: 600,
                fontFamily: "var(--font-poppins)",
                cursor: "none",
                transition: "all 0.25s ease",
                letterSpacing: "0.02em",
              }}
            >
              {cat.label}
              {cat.slug !== "all" && (
                <span style={{ marginLeft: 6, fontSize: 10, opacity: 0.7 }}>
                  ({portfolio.filter(p => p.category === cat.slug).length})
                </span>
              )}
            </button>
          ))}
        </motion.div>

        {/* Grid */}
        <motion.div
          layout
          style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((item, i) => (
              <PortfolioCard
                key={item.img}
                item={item}
                index={i}
                onClick={() => setLightboxItem(item)}
              />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Work count */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          style={{ textAlign: "center", marginTop: 40 }}
        >
          <p style={{ color: "rgba(255,255,255,0.3)", fontSize: 13, fontFamily: "var(--font-inter)" }}>
            Showing {filtered.length} of {portfolio.length} projects
          </p>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxItem && (
          <LightboxModal item={lightboxItem} onClose={() => setLightboxItem(null)} />
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 1024px) { #portfolio .container-xl > div:nth-child(4) { grid-template-columns: repeat(2, 1fr) !important; } }
        @media (max-width: 640px) { #portfolio .container-xl > div:nth-child(4) { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}
