"use client";

import React, { createContext, useContext, useState, useEffect, useRef } from "react";
import { useRouter, usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

interface TransitionContextType {
  navigate: (href: string, label: string) => void;
}

const TransitionContext = createContext<TransitionContextType | null>(null);

export const useTransitionNavigator = () => {
  const context = useContext(TransitionContext);
  if (!context) throw new Error("useTransitionNavigator must be used within TransitionProvider");
  return context;
};

export function TransitionProvider({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [label, setLabel] = useState("");
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const navigate = (href: string, targetLabel: string) => {
    if (pathname === href) return;
    // Cancel any previous pending navigation
    if (timerRef.current) clearTimeout(timerRef.current);

    setLabel(targetLabel);
    setIsTransitioning(true);

    // Route fires after 550ms — overlay slides in (300ms) + letters appear
    timerRef.current = setTimeout(() => {
      router.push(href);
    }, 550);
  };

  useEffect(() => {
    // Small delay so page mounts before overlay slides out — feels instant
    const t = setTimeout(() => setIsTransitioning(false), 80);
    return () => clearTimeout(t);
  }, [pathname]);

  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  const letters = label.toUpperCase().split("");

  return (
    <TransitionContext.Provider value={{ navigate }}>
      {children}
      <AnimatePresence>
        {isTransitioning && (
          <motion.div
            key="transition-overlay"
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.32, ease: [0.76, 0, 0.24, 1] }}
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 99999,
              background: "#0a0a0f",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            {/* Glow */}
            <div style={{
              position: "absolute",
              width: 280,
              height: 280,
              borderRadius: "50%",
              background: "radial-gradient(circle, rgba(139,26,26,0.22) 0%, transparent 70%)",
              filter: "blur(36px)",
              pointerEvents: "none",
            }} />

            {/* Letters stagger — tight timing */}
            <motion.div
              style={{
                display: "flex",
                gap: letters.length > 6 ? 8 : 12,
                fontFamily: "var(--font-montserrat)",
                fontWeight: 900,
                fontSize: letters.length > 8
                  ? "clamp(28px, 5vw, 60px)"
                  : "clamp(36px, 7vw, 88px)",
                color: "#fff",
                letterSpacing: "0.08em",
                zIndex: 10,
                flexWrap: "nowrap",
              }}
              variants={{
                animate: { transition: { staggerChildren: 0.045 } },
              }}
              initial="initial"
              animate="animate"
            >
              {letters.map((char, i) => (
                <motion.span
                  key={i}
                  variants={{
                    initial: { opacity: 0, y: 28 },
                    animate: {
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.22, ease: "easeOut" },
                    },
                  }}
                  style={{ display: "inline-block" }}
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </motion.div>

            {/* Brand tag */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.35, transition: { delay: 0.18, duration: 0.2 } }}
              style={{
                marginTop: 18,
                color: "#fff",
                fontSize: 9,
                letterSpacing: "0.45em",
                textTransform: "uppercase",
                fontFamily: "var(--font-poppins)",
              }}
            >
              CRENOVATE
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </TransitionContext.Provider>
  );
}
