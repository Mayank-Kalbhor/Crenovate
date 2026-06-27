"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Clients from "@/components/Clients";
import { motion } from "framer-motion";

export default function ClientsPage() {
  return (
    <>
      <Navbar />
      <div style={{ background: "#0a0a0f", paddingTop: 160, paddingBottom: 60, position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: 0, left: "50%", width: 300, height: 300, background: "radial-gradient(circle, rgba(139,26,26,0.15), transparent 70%)", transform: "translate(-50%, -30%)", pointerEvents: "none" }} />
        <div className="grid-bg-dark" style={{ position: "absolute", inset: 0, opacity: 0.3 }} />
        <div className="container-xl" style={{ position: "relative", zIndex: 1 }}>
          <motion.span initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
            style={{ display: "inline-block", fontSize: 12, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--brand-red)", marginBottom: 12, fontFamily: "var(--font-poppins)" }}>
            Trusted Partnerships
          </motion.span>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.5 }}
            style={{ fontFamily: "var(--font-montserrat)", fontWeight: 900, fontSize: "clamp(36px, 5vw, 64px)", color: "#fff", margin: 0 }}>
            Our Clients
          </motion.h1>
        </div>
      </div>
      <Clients />
      <Footer />
    </>
  );
}
