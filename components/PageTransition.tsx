"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

interface TransitionContextType {
  navigate: (href: string, label: string) => void;
}

const TransitionContext = createContext<TransitionContextType | null>(null);

export const useTransitionNavigator = () => {
  const context = useContext(TransitionContext);
  if (!context) {
    throw new Error("useTransitionNavigator must be used within TransitionProvider");
  }
  return context;
};

export function TransitionProvider({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [label, setLabel] = useState("");

  const navigate = (href: string, targetLabel: string) => {
    if (pathname === href) return;
    setLabel(targetLabel);
    setIsTransitioning(true);

    // Hold page transition until slide-in & letters animation finishes
    setTimeout(() => {
      router.push(href);
    }, 1000);
  };

  useEffect(() => {
    // Once page route completes loading and mounting, slide away the overlay
    setIsTransitioning(false);
  }, [pathname]);

  const uppercaseLabel = label.toUpperCase();
  const letters = uppercaseLabel.split("");

  return (
    <TransitionContext.Provider value={{ navigate }}>
      {children}
      <AnimatePresence mode="wait">
        {isTransitioning && (
          <motion.div
            initial={{ y: "100%", skewY: 4 }}
            animate={{ y: 0, skewY: 0 }}
            exit={{ y: "-100%", skewY: -4 }}
            transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
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
            {/* Soft background glow */}
            <div
              style={{
                position: "absolute",
                width: 300,
                height: 300,
                borderRadius: "50%",
                background: "radial-gradient(circle, rgba(139,26,26,0.18) 0%, transparent 70%)",
                filter: "blur(40px)",
                pointerEvents: "none",
              }}
            />

            {/* Letter-by-letter stagger animation */}
            <motion.div
              style={{
                display: "flex",
                gap: 12,
                fontFamily: "var(--font-montserrat)",
                fontWeight: 900,
                fontSize: "clamp(36px, 8vw, 96px)",
                color: "#fff",
                letterSpacing: "0.1em",
                zIndex: 10,
              }}
              variants={{
                animate: {
                  transition: {
                    staggerChildren: 0.08,
                  },
                },
              }}
              initial="initial"
              animate="animate"
            >
              {letters.map((char, index) => (
                <motion.span
                  key={index}
                  variants={{
                    initial: { opacity: 0, y: 40, scale: 0.9 },
                    animate: {
                      opacity: 1,
                      y: 0,
                      scale: 1,
                      transition: { duration: 0.4, ease: "easeOut" },
                    },
                  }}
                  style={{ display: "inline-block" }}
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </motion.div>

            {/* Subtext */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4, transition: { delay: 0.4 } }}
              style={{
                marginTop: 24,
                color: "#fff",
                fontSize: 10,
                letterSpacing: "0.4em",
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
