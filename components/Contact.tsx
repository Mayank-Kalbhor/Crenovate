"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { MapPin, Phone, Mail, Send, CheckCircle } from "lucide-react";

const offices = [
  { city: "Mumbai", flag: "🇮🇳", desc: "Headquarters", country: "India", color: "#4f46e5", grad: "linear-gradient(135deg, #4f46e5, #3b82f6)" },
  { city: "Indore", flag: "🇮🇳", desc: "Central Office", country: "India", color: "#7c3aed", grad: "linear-gradient(135deg, #7c3aed, #8b5cf6)" },
  { city: "Raipur", flag: "🇮🇳", desc: "East Office", country: "India", color: "#06b6d4", grad: "linear-gradient(135deg, #06b6d4, #0891b2)" },
  { city: "Australia", flag: "🇦🇺", desc: "Global Office", country: "Australia", color: "#10b981", grad: "linear-gradient(135deg, #10b981, #059669)" },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", company: "", message: "" });
  const [sent, setSent] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const handle = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setForm({ ...form, [e.target.name]: e.target.value });
  const submit = (e: React.FormEvent) => { e.preventDefault(); setTimeout(() => setSent(true), 400); };

  return (
    <section id="contact" style={{ padding: "120px 0", background: "#0a0a0f", position: "relative", overflow: "hidden", color: "#fff" }}>
      <div style={{ position: "absolute", top: "25%", left: "25%", width: 400, height: 400, background: "radial-gradient(circle, rgba(139,26,26,0.15), transparent 70%)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", bottom: "25%", right: "25%", width: 300, height: 300, background: "radial-gradient(circle, rgba(139,26,26,0.1), transparent 70%)", pointerEvents: "none" }} />
      <div className="grid-bg-dark" style={{ position: "absolute", inset: 0, opacity: 0.6 }} />

      <div className="container-xl">
        <div ref={ref} style={{ textAlign: "center", marginBottom: 72 }}>
          <motion.span initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} className="section-label">Contact</motion.span>
          <motion.h2 initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.1 }}
            style={{ fontFamily: "var(--font-montserrat)", fontWeight: 900, fontSize: "clamp(32px, 4vw, 56px)", lineHeight: 1.1, color: "#fff", marginTop: 8 }}>
            Let&apos;s Build <span className="gradient-text">Something Great</span>
          </motion.h2>
          <motion.p initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}} transition={{ delay: 0.2 }}
            style={{ color: "rgba(255,255,255,0.65)", fontSize: 17, marginTop: 16, fontFamily: "var(--font-inter)" }}>
            Ready to transform your brand? Reach out and let&apos;s start the conversation.
          </motion.p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "start", position: "relative", zIndex: 1 }}>
          {/* Form */}
          <motion.div initial={{ opacity: 0, x: -40 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.7 }}>
            {sent ? (
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", gap: 20, padding: "80px 0" }}>
                <div style={{ width: 72, height: 72, background: "rgba(16,185,129,0.1)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <CheckCircle color="#10b981" size={36} />
                </div>
                <h3 style={{ fontFamily: "var(--font-poppins)", fontWeight: 700, fontSize: 24, color: "#fff" }}>Message Sent!</h3>
                <p style={{ color: "rgba(255,255,255,0.65)", fontFamily: "var(--font-inter)" }}>Our team will get back to you within 24 hours.</p>
                <button onClick={() => setSent(false)} data-cursor
                  style={{ padding: "12px 28px", borderRadius: 50, color: "rgba(255,255,255,0.7)", border: "1.5px solid rgba(255,255,255,0.2)", background: "none", cursor: "none", fontFamily: "var(--font-poppins)", transition: "all 0.3s" }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = "var(--brand-red)"; (e.currentTarget as HTMLElement).style.color = "var(--brand-red)"; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = ""; (e.currentTarget as HTMLElement).style.color = ""; }}>
                  Send Another
                </button>
              </div>
            ) : (
              <form onSubmit={submit} style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                  {[{ n: "name", l: "Full Name", t: "text" }, { n: "email", l: "Email Address", t: "email" }].map(f => (
                    <div key={f.n} className="input-wrapper">
                       <input type={f.t} name={f.n} id={`c-${f.n}`} required value={(form as Record<string, string>)[f.n]} onChange={handle} placeholder=" " className="contact-input" />
                      <label htmlFor={`c-${f.n}`} className="contact-label">{f.l}</label>
                    </div>
                  ))}
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                  {[{ n: "phone", l: "Phone Number", t: "tel" }, { n: "company", l: "Company", t: "text" }].map(f => (
                    <div key={f.n} className="input-wrapper">
                      <input type={f.t} name={f.n} id={`c-${f.n}`} value={(form as Record<string, string>)[f.n]} onChange={handle} placeholder=" " className="contact-input" />
                      <label htmlFor={`c-${f.n}`} className="contact-label">{f.l}</label>
                    </div>
                  ))}
                </div>
                <div className="input-wrapper">
                  <textarea name="message" id="c-message" required rows={5} value={form.message} onChange={handle} placeholder=" " className="contact-input" style={{ height: 140 }} />
                  <label htmlFor="c-message" className="contact-label">Tell us about your project</label>
                </div>
                <button type="submit" className="btn-primary" style={{ justifyContent: "center", padding: "16px", fontSize: 16, marginTop: 4 }} data-cursor>
                  <span>Send Message</span>
                  <Send size={17} />
                </button>
              </form>
            )}
          </motion.div>

          {/* Info */}
          <motion.div initial={{ opacity: 0, x: 40 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.7, delay: 0.2 }}
            style={{ display: "flex", flexDirection: "column", gap: 32 }}>
            {/* Contact info */}
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {[{ Icon: Mail, color: "var(--brand-red)", bg: "rgba(139,26,26,0.06)", label: "Email", val: "hello@crenovate.com" }, { Icon: Phone, color: "#7c3aed", bg: "rgba(124,58,237,0.06)", label: "Phone", val: "+91 98765 43210" }].map(item => (
                <div key={item.label} style={{ display: "flex", alignItems: "center", gap: 16 }}>
                  <div style={{ width: 48, height: 48, borderRadius: 14, background: item.bg, display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <item.Icon color={item.color} size={20} />
                  </div>
                  <div>
                    <div style={{ color: "rgba(255,255,255,0.45)", fontSize: 10, textTransform: "uppercase", letterSpacing: "0.2em", fontFamily: "var(--font-poppins)" }}>{item.label}</div>
                    <div style={{ color: "#fff", fontWeight: 500, fontFamily: "var(--font-inter)", marginTop: 2 }}>{item.val}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Offices */}
            <div>
              <h3 style={{ color: "rgba(255,255,255,0.45)", fontSize: 10, textTransform: "uppercase", letterSpacing: "0.2em", fontFamily: "var(--font-poppins)", marginBottom: 16 }}>Our Offices</h3>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                {offices.map((o, i) => (
                  <motion.div key={o.city} initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.4 + i * 0.1 }}
                    className="office-card" data-cursor>
                    <div className="office-card-bar" style={{ background: o.grad }} />
                    <div style={{ fontSize: 28, marginBottom: 8 }}>{o.flag}</div>
                    <div style={{ fontFamily: "var(--font-poppins)", fontWeight: 700, fontSize: 16, color: "#fff" }}>{o.city}</div>
                    <div style={{ fontFamily: "var(--font-inter)", fontSize: 11, color: "rgba(255,255,255,0.45)", marginTop: 2 }}>{o.desc}</div>
                    <div style={{ display: "flex", alignItems: "center", gap: 4, marginTop: 10 }}>
                      <MapPin size={12} color={o.color} />
                      <span style={{ fontSize: 11, color: o.color, fontFamily: "var(--font-inter)" }}>{o.country}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) { #contact .container-xl > div:last-child { grid-template-columns: 1fr !important; } }
        @media (max-width: 600px) { #contact form > div:first-child, #contact form > div:nth-child(2) { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}
