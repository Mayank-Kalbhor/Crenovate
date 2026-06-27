"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { useTransitionNavigator } from "@/components/PageTransition";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Our Work", href: "/portfolio" },
  { label: "Clients", href: "/clients" },
  { label: "Team", href: "/team" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { navigate } = useTransitionNavigator();
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`navbar ${scrolled || !isHome ? "scrolled" : ""}`}
      >
        <div className="container-xl" style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>

          {/* Logo */}
          <a href="/" onClick={(e) => { e.preventDefault(); setMenuOpen(false); navigate("/", "Home"); }}
            style={{ textDecoration: "none", display: "flex", alignItems: "center" }} data-cursor>
            <div style={{ position: "relative", height: 44, width: 148 }}>
              <Image
                src="/logo.jpg"
                alt="CRENOVATE – Ideas at Work"
                fill
                sizes="148px"
                style={{ objectFit: "contain", objectPosition: "left center", borderRadius: 6 }}
                priority
              />
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div className="nav-desktop" style={{ display: "flex", alignItems: "center", gap: 28 }}>
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => { e.preventDefault(); setMenuOpen(false); navigate(link.href, link.label); }}
                className={`nav-link ${scrolled ? "scrolled-link" : ""}`}
                data-cursor
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA + Hamburger */}
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <a
              href="/contact"
              onClick={(e) => { e.preventDefault(); setMenuOpen(false); navigate("/contact", "Contact"); }}
              className="btn-primary nav-cta"
              style={{ padding: "10px 22px", fontSize: 14, boxShadow: scrolled ? "0 4px 16px rgba(139,26,26,0.25)" : "none" }}
              data-cursor
            >
              <span>Let&apos;s Talk</span>
            </a>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="nav-hamburger"
              style={{ background: "none", border: "none", cursor: "none", padding: 6, color: "#fff" }}
              data-cursor aria-label="Toggle menu"
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Fullscreen Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="mobile-menu"
          >
            {/* Logo in mobile menu */}
            <div style={{ position: "relative", height: 48, width: 160, marginBottom: 8 }}>
              <Image src="/logo.jpg" alt="CRENOVATE" fill sizes="160px" style={{ objectFit: "contain", borderRadius: 6 }} />
            </div>

            {navLinks.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.06 }}
                onClick={(e) => { e.preventDefault(); setMenuOpen(false); navigate(link.href, link.label); }}
                style={{ color: "#fff", textDecoration: "none", fontSize: 30, fontWeight: 800, fontFamily: "var(--font-montserrat)", opacity: 0.9, transition: "opacity 0.2s" }}
                onMouseEnter={e => (e.currentTarget.style.opacity = "1")}
                onMouseLeave={e => (e.currentTarget.style.opacity = "0.9")}
              >
                {link.label}
              </motion.a>
            ))}

            <a
              href="/contact"
              onClick={(e) => { e.preventDefault(); setMenuOpen(false); navigate("/contact", "Contact"); }}
              style={{ marginTop: 12, padding: "12px 32px", background: "#fff", color: "var(--brand-red)", borderRadius: 50, fontWeight: 700, textDecoration: "none", fontFamily: "var(--font-poppins)", fontSize: 15 }}
              data-cursor
            >
              Let&apos;s Talk
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 1024px) {
          .nav-desktop { display: none !important; }
          .nav-cta { display: none !important; }
          .nav-hamburger { display: flex !important; }
        }
        @media (min-width: 1025px) {
          .nav-hamburger { display: none !important; }
        }
      `}</style>
    </>
  );
}
