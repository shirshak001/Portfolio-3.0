"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Sun, Moon, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const NAV_LINKS = [
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Experience", href: "/experience" },
  { label: "Playground", href: "/playground" },
  { label: "Blog", href: "/blog" },
  { label: "Resume", href: "/resume" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const saved = localStorage.getItem("theme") as "dark" | "light" | null;
    if (saved) {
      setTheme(saved);
      document.documentElement.setAttribute("data-theme", saved);
    }
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    localStorage.setItem("theme", next);
    document.documentElement.setAttribute("data-theme", next);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          padding: scrolled ? "0.75rem 2rem" : "1.25rem 2rem",
          transition: "padding 0.3s ease, background 0.3s ease, box-shadow 0.3s ease",
          background: scrolled ? "rgba(10, 10, 15, 0.85)" : "transparent",
          backdropFilter: scrolled ? "blur(20px)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(20px)" : "none",
          borderBottom: scrolled ? "1px solid var(--border)" : "1px solid transparent",
        }}
      >
        <div
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* Logo */}
          <Link href="/" style={{ textDecoration: "none" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
              <div
                style={{
                  width: "36px",
                  height: "36px",
                  minWidth: "36px",
                  background: "var(--accent)",
                  borderRadius: "10px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  overflow: "hidden",
                  fontFamily: "Syne, sans-serif",
                  fontWeight: 800,
                  fontSize: "0.75rem",
                  lineHeight: 1,
                  letterSpacing: "0.04em",
                  color: "#fff",
                  flexShrink: 0,
                }}
              >
                SM
              </div>
              <span
                style={{
                  fontFamily: "Syne, sans-serif",
                  fontWeight: 700,
                  fontSize: "1rem",
                  color: "var(--text-primary)",
                  letterSpacing: "-0.01em",
                  whiteSpace: "nowrap",
                }}
              >
                Shirshak Mondal
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.25rem",
            }}
            className="hidden-mobile"
          >
            <style>{`@media (max-width: 768px) { .hidden-mobile { display: none !important; } }`}</style>
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  padding: "0.4rem 0.85rem",
                  borderRadius: "6px",
                  fontSize: "0.85rem",
                  fontWeight: 500,
                  color:
                    pathname === link.href
                      ? "var(--accent)"
                      : "var(--text-secondary)",
                  textDecoration: "none",
                  transition: "color 0.2s ease, background 0.2s ease",
                  background:
                    pathname === link.href ? "rgba(108, 99, 255, 0.08)" : "transparent",
                  letterSpacing: "0.01em",
                }}
                onMouseEnter={(e) => {
                  if (pathname !== link.href) {
                    (e.target as HTMLElement).style.color = "var(--text-primary)";
                    (e.target as HTMLElement).style.background = "var(--glass)";
                  }
                }}
                onMouseLeave={(e) => {
                  if (pathname !== link.href) {
                    (e.target as HTMLElement).style.color = "var(--text-secondary)";
                    (e.target as HTMLElement).style.background = "transparent";
                  }
                }}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right Controls */}
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
            <button
              onClick={toggleTheme}
              style={{
                width: "36px",
                height: "36px",
                borderRadius: "8px",
                border: "1px solid var(--border)",
                background: "var(--glass)",
                color: "var(--text-secondary)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "all 0.2s ease",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget).style.borderColor = "var(--accent)";
                (e.currentTarget).style.color = "var(--accent)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget).style.borderColor = "var(--border)";
                (e.currentTarget).style.color = "var(--text-secondary)";
              }}
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun size={15} /> : <Moon size={15} />}
            </button>

            <Link
              href="/contact"
              style={{
                padding: "0.5rem 1.25rem",
                borderRadius: "8px",
                background: "var(--accent)",
                color: "#fff",
                fontSize: "0.82rem",
                fontWeight: 600,
                textDecoration: "none",
                letterSpacing: "0.02em",
                transition: "background 0.2s ease, transform 0.2s ease",
                display: "flex",
                alignItems: "center",
                gap: "0.4rem",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget).style.background = "var(--accent-hover)";
                (e.currentTarget).style.transform = "translateY(-1px)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget).style.background = "var(--accent)";
                (e.currentTarget).style.transform = "translateY(0)";
              }}
              className="hidden-xs"
            >
              <style>{`@media (max-width: 480px) { .hidden-xs { display: none !important; } }`}</style>
              Let&apos;s Talk
            </Link>

            {/* Hamburger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              style={{
                width: "36px",
                height: "36px",
                borderRadius: "8px",
                border: "1px solid var(--border)",
                background: "var(--glass)",
                color: "var(--text-secondary)",
                display: "none",
                alignItems: "center",
                justifyContent: "center",
              }}
              className="show-mobile"
              aria-label="Toggle menu"
            >
              <style>{`@media (max-width: 768px) { .show-mobile { display: flex !important; } }`}</style>
              {menuOpen ? <X size={16} /> : <Menu size={16} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            style={{
              position: "fixed",
              top: "64px",
              left: 0,
              right: 0,
              zIndex: 999,
              background: "var(--bg-secondary)",
              borderBottom: "1px solid var(--border)",
              padding: "1.5rem",
              display: "flex",
              flexDirection: "column",
              gap: "0.25rem",
            }}
          >
            {NAV_LINKS.map((link, i) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.04 }}
              >
                <Link
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  style={{
                    display: "block",
                    padding: "0.75rem 1rem",
                    borderRadius: "8px",
                    fontSize: "1rem",
                    fontWeight: 500,
                    color:
                      pathname === link.href
                        ? "var(--accent)"
                        : "var(--text-primary)",
                    textDecoration: "none",
                    background:
                      pathname === link.href
                        ? "rgba(108, 99, 255, 0.08)"
                        : "transparent",
                    transition: "background 0.15s ease",
                  }}
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
            <div style={{ height: "1px", background: "var(--border)", margin: "0.75rem 0" }} />
            <Link
              href="/contact"
              onClick={() => setMenuOpen(false)}
              style={{
                padding: "0.875rem",
                borderRadius: "8px",
                background: "var(--accent)",
                color: "#fff",
                fontSize: "0.9rem",
                fontWeight: 600,
                textDecoration: "none",
                textAlign: "center",
              }}
            >
              Let&apos;s Talk
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
