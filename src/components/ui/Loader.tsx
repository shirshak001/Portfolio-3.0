"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Loader() {
  const [visible, setVisible] = useState(true);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (sessionStorage.getItem("loaded")) {
      setVisible(false);
      return;
    }
    const interval = setInterval(() => {
      setCount((c) => {
        if (c >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setVisible(false);
            sessionStorage.setItem("loaded", "1");
          }, 500);
          return 100;
        }
        return c + Math.floor(Math.random() * 3) + 1;
      });
    }, 55);
    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          style={{
            position: "fixed",
            inset: 0,
            background: "var(--bg-primary)",
            zIndex: 99999,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "2rem",
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            style={{ textAlign: "center" }}
          >
            <div
              style={{
                fontFamily: "Syne, sans-serif",
                fontSize: "clamp(1.5rem, 4vw, 2.5rem)",
                fontWeight: 700,
                color: "var(--text-primary)",
                letterSpacing: "-0.02em",
              }}
            >
              Shirshak Mondal
            </div>
            <div
              style={{
                fontFamily: "JetBrains Mono, monospace",
                fontSize: "0.7rem",
                color: "var(--accent)",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                marginTop: "0.5rem",
              }}
            >
              UI/UX Designer & Developer
            </div>
          </motion.div>

          <div
            style={{
              width: "200px",
              height: "1px",
              background: "var(--border)",
              borderRadius: "1px",
              overflow: "hidden",
            }}
          >
            <motion.div
              style={{
                height: "100%",
                background: "var(--accent)",
                boxShadow: "0 0 8px var(--accent)",
              }}
              animate={{ width: `${Math.min(count, 100)}%` }}
              transition={{ duration: 0.1, ease: "linear" }}
            />
          </div>

          <div
            style={{
              fontFamily: "JetBrains Mono, monospace",
              fontSize: "0.65rem",
              color: "var(--text-muted)",
              letterSpacing: "0.1em",
            }}
          >
            {Math.min(count, 100)}%
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
