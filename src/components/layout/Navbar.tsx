"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Sun, Moon, Menu, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const NAV_LINKS = [
  { label: "About",      href: "/about" },
  { label: "Projects",   href: "/projects" },
  { label: "Experience", href: "/experience" },
  { label: "Playground", href: "/playground" },
  { label: "Blog",       href: "/blog" },
  { label: "Resume",     href: "/resume" },
  { label: "Contact",    href: "/contact" },
];

export default function Navbar() {
  const [theme, setTheme]     = useState<"dark" | "light">("dark");
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  /* ── scroll detection ── */
  useEffect(() => {
    const saved = localStorage.getItem("theme") as "dark" | "light" | null;
    if (saved) { setTheme(saved); document.documentElement.setAttribute("data-theme", saved); }
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* ── scroll lock when menu open ── */
  useEffect(() => {
    if (menuOpen) {
      const scrollY = window.scrollY;
      document.body.style.position   = "fixed";
      document.body.style.top        = `-${scrollY}px`;
      document.body.style.left       = "0";
      document.body.style.right      = "0";
      document.body.style.overflowY  = "scroll"; // keep scrollbar space
    } else {
      const scrollY = Math.abs(parseInt(document.body.style.top || "0", 10));
      document.body.style.position  = "";
      document.body.style.top       = "";
      document.body.style.left      = "";
      document.body.style.right     = "";
      document.body.style.overflowY = "";
      window.scrollTo(0, scrollY);
    }
    return () => {
      document.body.style.position  = "";
      document.body.style.top       = "";
      document.body.style.overflowY = "";
    };
  }, [menuOpen]);

  /* ── close on route change ── */
  useEffect(() => { setMenuOpen(false); }, [pathname]);

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    localStorage.setItem("theme", next);
    document.documentElement.setAttribute("data-theme", next);
  };

  const close = () => setMenuOpen(false);

  return (
    <>
      {/* ── NAV BAR ── */}
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        style={{
          position: "fixed", top: 0, left: 0, right: 0,
          zIndex: 1000,
          padding: scrolled ? "0.75rem 2rem" : "1.25rem 2rem",
          transition: "padding 0.3s ease, background 0.3s ease, box-shadow 0.3s ease",
          background: scrolled || menuOpen ? "rgba(10,10,15,0.92)" : "transparent",
          backdropFilter: scrolled || menuOpen ? "blur(20px)" : "none",
          WebkitBackdropFilter: scrolled || menuOpen ? "blur(20px)" : "none",
          borderBottom: scrolled ? "1px solid var(--border)" : "1px solid transparent",
        }}
      >
        <div style={{ maxWidth: "1280px", margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between" }}>

          {/* Logo */}
          <Link href="/" onClick={close} style={{ textDecoration: "none" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
              <div style={{ width: 36, height: 36, minWidth: 36, background: "var(--accent)", borderRadius: "10px", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "Syne, sans-serif", fontWeight: 800, fontSize: "0.75rem", color: "#fff", flexShrink: 0 }}>
                SM
              </div>
              <span style={{ fontFamily: "Syne, sans-serif", fontWeight: 700, fontSize: "1rem", color: "var(--text-primary)", letterSpacing: "-0.01em", whiteSpace: "nowrap" }}>
                Shirshak Mondal
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div style={{ display: "flex", alignItems: "center", gap: "0.25rem" }} className="hidden-mobile">
            <style>{`@media (max-width: 768px) { .hidden-mobile { display: none !important; } }`}</style>
            {NAV_LINKS.map(link => (
              <Link key={link.href} href={link.href}
                style={{ padding: "0.4rem 0.85rem", borderRadius: "6px", fontSize: "0.85rem", fontWeight: 500, color: pathname === link.href ? "var(--accent)" : "var(--text-secondary)", textDecoration: "none", transition: "color 0.2s ease, background 0.2s ease", background: pathname === link.href ? "rgba(108,99,255,0.08)" : "transparent", letterSpacing: "0.01em" }}
                onMouseEnter={e => { if (pathname !== link.href) { (e.target as HTMLElement).style.color = "var(--text-primary)"; (e.target as HTMLElement).style.background = "var(--glass)"; } }}
                onMouseLeave={e => { if (pathname !== link.href) { (e.target as HTMLElement).style.color = "var(--text-secondary)"; (e.target as HTMLElement).style.background = "transparent"; } }}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right Controls */}
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
            <button onClick={toggleTheme}
              style={{ width: 36, height: 36, borderRadius: "8px", border: "1px solid var(--border)", background: "var(--glass)", color: "var(--text-secondary)", display: "flex", alignItems: "center", justifyContent: "center", transition: "all 0.2s ease", cursor: "pointer" }}
              onMouseEnter={e => { (e.currentTarget).style.borderColor = "var(--accent)"; (e.currentTarget).style.color = "var(--accent)"; }}
              onMouseLeave={e => { (e.currentTarget).style.borderColor = "var(--border)"; (e.currentTarget).style.color = "var(--text-secondary)"; }}
              aria-label="Toggle theme">
              {theme === "dark" ? <Sun size={15} /> : <Moon size={15} />}
            </button>

            <Link href="/contact"
              style={{ padding: "0.5rem 1.25rem", borderRadius: "8px", background: "var(--accent)", color: "#fff", fontSize: "0.82rem", fontWeight: 600, textDecoration: "none", letterSpacing: "0.02em", transition: "background 0.2s ease, transform 0.2s ease", display: "flex", alignItems: "center", gap: "0.4rem" }}
              onMouseEnter={e => { (e.currentTarget).style.background = "var(--accent-hover)"; (e.currentTarget).style.transform = "translateY(-1px)"; }}
              onMouseLeave={e => { (e.currentTarget).style.background = "var(--accent)"; (e.currentTarget).style.transform = "translateY(0)"; }}
              className="hidden-xs">
              <style>{`@media (max-width: 480px) { .hidden-xs { display: none !important; } }`}</style>
              Let&apos;s Talk
            </Link>

            {/* Hamburger */}
            <button
              onClick={() => setMenuOpen(o => !o)}
              style={{ width: 36, height: 36, borderRadius: "8px", border: `1px solid ${menuOpen ? "var(--accent)" : "var(--border)"}`, background: menuOpen ? "rgba(108,99,255,0.1)" : "var(--glass)", color: menuOpen ? "var(--accent)" : "var(--text-secondary)", display: "none", alignItems: "center", justifyContent: "center", transition: "all 0.2s ease", cursor: "pointer", position: "relative", zIndex: 1002 }}
              className="show-mobile"
              aria-label="Toggle menu"
              aria-expanded={menuOpen}>
              <style>{`@media (max-width: 768px) { .show-mobile { display: flex !important; } }`}</style>
              <motion.div animate={{ rotate: menuOpen ? 90 : 0 }} transition={{ duration: 0.2 }}>
                {menuOpen ? <X size={16} /> : <Menu size={16} />}
              </motion.div>
            </button>
          </div>
        </div>
      </motion.nav>

      {/* ── BACKDROP BLUR OVERLAY ── */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={close}
            style={{
              position: "fixed", inset: 0, zIndex: 998,
              background: "rgba(5,5,10,0.6)",
              backdropFilter: "blur(6px)",
              WebkitBackdropFilter: "blur(6px)",
            }}
          />
        )}
      </AnimatePresence>

      {/* ── MOBILE MENU PANEL ── */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="menu"
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            style={{
              position: "fixed",
              top: 0, right: 0, bottom: 0,
              width: "min(320px, 88vw)",
              zIndex: 999,
              background: "var(--bg-secondary)",
              borderLeft: "1px solid var(--border)",
              display: "flex",
              flexDirection: "column",
              overflow: "hidden",
            }}
          >
            {/* Panel header */}
            <div style={{ padding: "1.25rem 1.5rem", borderBottom: "1px solid var(--border)", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <span style={{ fontFamily: "JetBrains Mono, monospace", fontSize: "0.65rem", color: "var(--accent)", letterSpacing: "0.16em", textTransform: "uppercase" }}>
                Navigation
              </span>
              <button onClick={close}
                style={{ width: 30, height: 30, borderRadius: "7px", border: "1px solid var(--border)", background: "transparent", color: "var(--text-muted)", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}>
                <X size={14} />
              </button>
            </div>

            {/* Nav links */}
            <div style={{ flex: 1, padding: "1rem 0.75rem", display: "flex", flexDirection: "column", gap: "0.25rem", overflowY: "auto" }}>
              {NAV_LINKS.map((link, i) => (
                <motion.div key={link.href}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.04, duration: 0.25, ease: [0.22, 1, 0.36, 1] }}>
                  <Link href={link.href} onClick={close}
                    style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0.8rem 1rem", borderRadius: "10px", fontSize: "1rem", fontWeight: pathname === link.href ? 700 : 500, color: pathname === link.href ? "var(--accent)" : "var(--text-primary)", textDecoration: "none", background: pathname === link.href ? "rgba(108,99,255,0.08)" : "transparent", border: pathname === link.href ? "1px solid rgba(108,99,255,0.2)" : "1px solid transparent", transition: "all 0.15s ease" }}
                    onMouseEnter={e => { if (pathname !== link.href) { (e.currentTarget as HTMLElement).style.background = "var(--glass)"; (e.currentTarget as HTMLElement).style.borderColor = "var(--border)"; } }}
                    onMouseLeave={e => { if (pathname !== link.href) { (e.currentTarget as HTMLElement).style.background = "transparent"; (e.currentTarget as HTMLElement).style.borderColor = "transparent"; } }}>
                    <span>{link.label}</span>
                    {pathname === link.href && <div style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--accent)" }} />}
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Panel footer CTA */}
            <div style={{ padding: "1rem 1.5rem", borderTop: "1px solid var(--border)" }}>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.28 }}>
                <Link href="/contact" onClick={close}
                  style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "0.5rem", padding: "0.875rem", borderRadius: "10px", background: "var(--accent)", color: "#fff", fontSize: "0.9rem", fontWeight: 700, textDecoration: "none", fontFamily: "Syne, sans-serif", transition: "all 0.2s ease" }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "var(--accent-hover)"; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "var(--accent)"; }}>
                  Let&apos;s Talk <ArrowRight size={15} />
                </Link>
                <p style={{ textAlign: "center", fontFamily: "JetBrains Mono, monospace", fontSize: "0.6rem", color: "var(--text-muted)", marginTop: "0.75rem", letterSpacing: "0.06em" }}>
                  Available for internships & opportunities
                </p>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
