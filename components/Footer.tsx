"use client";

import { ArrowUpRight } from "lucide-react";
import { FaLinkedinIn, FaInstagram, FaFacebookF } from "react-icons/fa";
import { useTransitionNavigator } from "@/components/PageTransition";

const links = {
  Services: [
    { label: "Strategy", href: "/services" },
    { label: "Advertising", href: "/services" },
    { label: "Public Relations", href: "/services" },
    { label: "Brand Development", href: "/services" },
    { label: "Web & Mobile", href: "/services" },
    { label: "Digital Marketing", href: "/services" },
  ],
  Company: [
    { label: "About Us", href: "/about" },
    { label: "Our Work", href: "/portfolio" },
    { label: "Clients", href: "/clients" },
    { label: "Team", href: "/team" },
  ],
  Contact: [
    { label: "Mumbai", href: "/contact" },
    { label: "Indore", href: "/contact" },
    { label: "Raipur", href: "/contact" },
    { label: "Australia", href: "/contact" },
  ],
};

const socials = [
  { Icon: FaLinkedinIn, label: "LinkedIn", color: "#0a66c2", href: "https://www.linkedin.com/company/crenovateofficial/posts/?feedView=all" },
  { Icon: FaInstagram, label: "Instagram", color: "#e1306c", href: "https://www.instagram.com/crenovate.official/" },
  { Icon: FaFacebookF, label: "Facebook", color: "#1877f2", href: "#" },
];

export default function Footer() {
  const { navigate } = useTransitionNavigator();

  return (
    <footer style={{ background: "#050508", color: "#fff", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", top: 0, left: "25%", width: 400, height: 400, background: "radial-gradient(circle, rgba(139,26,26,0.12), transparent 70%)", pointerEvents: "none" }} />
      <div className="grid-bg-dark" style={{ position: "absolute", inset: 0, opacity: 0.4 }} />

      {/* CTA Banner */}
      <div style={{ borderBottom: "1px solid rgba(255,255,255,0.08)", position: "relative", zIndex: 1 }}>
        <div className="container-xl" style={{ padding: "64px 24px", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: 32 }}>
          <div>
            <h2 style={{ fontFamily: "var(--font-montserrat)", fontWeight: 900, fontSize: "clamp(28px, 3vw, 48px)", color: "#fff", lineHeight: 1.15, margin: "0 0 10px" }}>
              Ready to <span className="gradient-text">elevate</span><br />your brand?
            </h2>
            <p style={{ color: "rgba(255,255,255,0.65)", fontFamily: "var(--font-inter)", margin: 0 }}>Let&apos;s create something extraordinary together.</p>
          </div>
          <a href="/contact" onClick={e => { e.preventDefault(); navigate("/contact", "Contact"); }}
            className="btn-primary" style={{ padding: "16px 40px", fontSize: 16, flexShrink: 0 }} data-cursor>
            <span>Start a Project</span>
            <ArrowUpRight size={18} />
          </a>
        </div>
      </div>

      {/* Main footer */}
      <div className="container-xl" style={{ padding: "64px 24px 0", position: "relative", zIndex: 1 }}>
        <div style={{ display: "grid", gridTemplateColumns: "1.5fr 1fr 1fr 1fr", gap: 48, marginBottom: 56 }}>
          {/* Brand */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
              <div style={{ width: 40, height: 40, background: "linear-gradient(135deg, var(--brand-red), var(--brand-red-dark))", borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center" }}>
                <span style={{ color: "#fff", fontWeight: 900, fontSize: 13, fontFamily: "var(--font-montserrat)" }}>CR</span>
              </div>
              <span style={{ color: "#fff", fontWeight: 900, fontSize: 20, fontFamily: "var(--font-montserrat)" }}>CRENOVATE</span>
            </div>
            <p style={{ color: "rgba(255,255,255,0.65)", fontSize: 13, lineHeight: 1.75, marginBottom: 24, fontFamily: "var(--font-inter)" }}>
              Creating and Innovating Ideas at Work. An integrated communications agency helping brands grow since 2010.
            </p>
            <div style={{ display: "flex", gap: 10 }}>
              {socials.map(s => (
                <a key={s.label} href={s.href} target={s.href !== "#" ? "_blank" : undefined} rel={s.href !== "#" ? "noopener noreferrer" : undefined} aria-label={s.label} data-cursor
                  style={{ width: 38, height: 38, borderRadius: 10, border: "1px solid rgba(255,255,255,0.12)", display: "flex", alignItems: "center", justifyContent: "center", color: "rgba(255,255,255,0.45)", textDecoration: "none", fontSize: 14, transition: "all 0.3s" }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = s.color + "22"; (e.currentTarget as HTMLElement).style.borderColor = s.color + "55"; (e.currentTarget as HTMLElement).style.color = s.color; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = ""; (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.12)"; (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.45)"; }}>
                  <s.Icon />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(links).map(([title, items]) => (
            <div key={title}>
              <h4 style={{ fontFamily: "var(--font-poppins)", fontWeight: 600, color: "#fff", marginBottom: 20, fontSize: 15 }}>{title}</h4>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10 }}>
                {items.map(item => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      onClick={(e) => {
                        e.preventDefault();
                        navigate(item.href, title === "Company" && item.label === "Our Work" ? "Portfolio" : item.label.replace(" Us", ""));
                      }}
                      className="footer-link"
                      data-cursor
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)", padding: "24px 0 32px", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: 12 }}>
          <p style={{ color: "rgba(255,255,255,0.4)", fontSize: 13, fontFamily: "var(--font-inter)", margin: 0 }}>
            © {new Date().getFullYear()} CRENOVATE. All rights reserved.
          </p>
          <div style={{ display: "flex", gap: 24 }}>
            {["Privacy Policy", "Terms of Service"].map(item => (
              <a key={item} href="#" data-cursor style={{ color: "rgba(255,255,255,0.4)", fontSize: 13, textDecoration: "none", fontFamily: "var(--font-inter)", transition: "color 0.3s" }}
                onMouseEnter={e => (e.currentTarget.style.color = "var(--brand-red)")}
                onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.4)")}>
                {item}
              </a>
            ))}
          </div>
          <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} data-cursor
            style={{ width: 38, height: 38, borderRadius: "50%", border: "1px solid rgba(255,255,255,0.12)", background: "none", color: "rgba(255,255,255,0.45)", cursor: "none", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16, transition: "all 0.3s" }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = "var(--brand-red)"; (e.currentTarget as HTMLElement).style.borderColor = "var(--brand-red)"; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.45)"; (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.12)"; }}>
            ↑
          </button>
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) { footer .container-xl > div:nth-child(2) { grid-template-columns: 1fr 1fr !important; } }
        @media (max-width: 600px) { footer .container-xl > div:nth-child(2) { grid-template-columns: 1fr !important; } footer .container-xl > div:first-child { flex-direction: column !important; text-align: center; } }
      `}</style>
    </footer>
  );
}
