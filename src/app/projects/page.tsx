"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Filter } from "lucide-react";

const ALL_PROJECTS = [
  { slug: "soilsaathi",  title: "SoilSaathi",          subtitle: "IoT Soil Health Monitoring",        category: "IoT / Hardware",  tags: ["IoT", "Hardware", "AgriTech"],         img: "/soilsaathi.png",   color: "#22c55e", badge: "SIH 2026 Finalist", year: "2025" },
  { slug: "credmate",   title: "CredMate",              subtitle: "AI-Driven Financial Identity",       category: "Mobile / AI",     tags: ["Mobile", "Fintech", "AI"],             img: "/credmate.png",    color: "#6c63ff", badge: "Fintech AI",       year: "2025" },
  { slug: "polygov",    title: "PolyGov",               subtitle: "AI + Blockchain Governance",         category: "Web / Blockchain", tags: ["Blockchain", "AI", "GovTech"],        img: "/polygov.png",     color: "#818cf8", badge: "Web3 GovTech",     year: "2025" },
  { slug: "safety-band",title: "Women Safety Band",     subtitle: "Wearable IoT Emergency System",      category: "IoT / Hardware",  tags: ["IoT", "Hardware", "Safety"],           img: "/safety-band.png", color: "#3b82f6", badge: "Safety Innovation", year: "2024" },
  { slug: "gymflex",    title: "GymFlex",               subtitle: "Flexible Pay-Per-Use Gym Access",    category: "Mobile / App",    tags: ["Mobile", "FitTech", "React Native"],   img: "/gymflex.png",     color: "#f59e0b", badge: "FitTech",          year: "2025" },
  { slug: "attendease", title: "AttendEase",            subtitle: "Smart Academic Scheduling App",      category: "Mobile / App",    tags: ["Mobile", "EdTech", "React Native"],    img: "/attendease.png",  color: "#14b8a6", badge: "EdTech",           year: "2024" },
  { slug: "layerforge", title: "LayerForge",            subtitle: "3D Printing Service Platform",       category: "Web / Platform",  tags: ["Web", "Manufacturing", "React.js"],   img: "/layerforge.png",  color: "#ff6b35", badge: "Manufacturing",    year: "2024" },
];

const CATEGORIES = ["All", "IoT / Hardware", "Mobile / AI", "Mobile / App", "Web / Blockchain", "Web / Platform"];

export default function ProjectsPage() {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? ALL_PROJECTS : ALL_PROJECTS.filter(p => p.category === active);

  return (
    <div style={{ minHeight: "100vh", background: "var(--bg-primary)", paddingTop: "8rem" }}>

      {/* ── HEADER ── */}
      <section style={{ padding: "0 2rem 3rem", maxWidth: "1280px", margin: "0 auto" }}>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}>
          <div style={{ fontFamily: "JetBrains Mono, monospace", fontSize: "0.68rem", color: "var(--accent)", letterSpacing: "0.22em", textTransform: "uppercase", marginBottom: "0.75rem" }}>
            Selected Work
          </div>
          <h1 style={{ fontFamily: "Syne, sans-serif", fontSize: "clamp(2.5rem, 6vw, 4.5rem)", fontWeight: 800, color: "var(--text-primary)", letterSpacing: "-0.03em", lineHeight: 1.05, marginBottom: "1rem" }}>
            Projects &<br /><span style={{ color: "var(--accent)" }}>Case Studies</span>
          </h1>
          <p style={{ fontSize: "0.95rem", color: "var(--text-secondary)", maxWidth: "480px", lineHeight: 1.75 }}>
            A collection of my work spanning IoT hardware, mobile apps, web platforms, AI systems, and blockchain — each solving a real problem.
          </p>
        </motion.div>
      </section>

      {/* ── FILTER BAR ── */}
      <section style={{ padding: "0 2rem 3rem", maxWidth: "1280px", margin: "0 auto" }}>
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
          style={{ display: "flex", alignItems: "center", gap: "0.5rem", flexWrap: "wrap" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.35rem", color: "var(--text-muted)", marginRight: "0.25rem" }}>
            <Filter size={13} />
            <span style={{ fontFamily: "JetBrains Mono, monospace", fontSize: "0.62rem", letterSpacing: "0.1em" }}>Filter</span>
          </div>
          {CATEGORIES.map(cat => (
            <button key={cat} onClick={() => setActive(cat)}
              style={{
                padding: "0.35rem 0.875rem", borderRadius: "9999px",
                border: `1px solid ${active === cat ? "var(--accent)" : "var(--border)"}`,
                background: active === cat ? "rgba(108,99,255,0.12)" : "transparent",
                color: active === cat ? "var(--accent)" : "var(--text-muted)",
                fontFamily: "JetBrains Mono, monospace", fontSize: "0.65rem",
                letterSpacing: "0.05em", cursor: "pointer",
                transition: "all 0.2s ease", whiteSpace: "nowrap",
              }}>
              {cat}
            </button>
          ))}
          <span style={{ marginLeft: "auto", fontFamily: "JetBrains Mono, monospace", fontSize: "0.62rem", color: "var(--text-muted)" }}>
            {filtered.length} project{filtered.length !== 1 ? "s" : ""}
          </span>
        </motion.div>
      </section>

      {/* ── PROJECTS GRID ── */}
      <section style={{ padding: "0 2rem 6rem", maxWidth: "1280px", margin: "0 auto" }}>

        {/* Featured (first project full-width) */}
        {filtered.length > 0 && (
          <motion.div layout key={filtered[0].slug}
            initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
            style={{ marginBottom: "1.5rem" }}>
            <Link href={`/projects/${filtered[0].slug}`} style={{ textDecoration: "none", display: "block" }}>
              <div className="proj-featured"
                style={{ borderRadius: "24px", overflow: "hidden", border: "1px solid var(--border)", position: "relative", height: "440px", transition: "border-color 0.3s ease, box-shadow 0.3s ease" }}
                onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = filtered[0].color + "66"; el.style.boxShadow = `0 24px 64px ${filtered[0].color}18`; }}
                onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = "var(--border)"; el.style.boxShadow = "none"; }}>
                <Image src={filtered[0].img} alt={filtered[0].title} fill sizes="100vw" style={{ objectFit: "cover", transition: "transform 0.6s ease" }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = "scale(1.03)"; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = "scale(1)"; }} />
                <div style={{ position: "absolute", inset: 0, background: `linear-gradient(135deg, rgba(10,10,15,0.92) 0%, rgba(10,10,15,0.5) 50%, rgba(10,10,15,0.1) 100%)` }} />
                <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "3px", background: filtered[0].color }} />

                {/* Badge */}
                <div style={{ position: "absolute", top: "1.5rem", right: "1.5rem", padding: "0.3rem 0.875rem", borderRadius: "9999px", background: "rgba(10,10,15,0.75)", backdropFilter: "blur(10px)", border: `1px solid ${filtered[0].color}50`, fontFamily: "JetBrains Mono, monospace", fontSize: "0.6rem", color: filtered[0].color, letterSpacing: "0.08em" }}>
                  {filtered[0].badge}
                </div>

                {/* Year */}
                <div style={{ position: "absolute", top: "1.5rem", left: "1.5rem", padding: "0.3rem 0.75rem", borderRadius: "9999px", background: "rgba(10,10,15,0.6)", backdropFilter: "blur(10px)", border: "1px solid rgba(255,255,255,0.08)", fontFamily: "JetBrains Mono, monospace", fontSize: "0.6rem", color: "rgba(255,255,255,0.5)", letterSpacing: "0.08em" }}>
                  {filtered[0].year}
                </div>

                <div style={{ position: "absolute", bottom: 0, left: 0, padding: "2.5rem", maxWidth: "600px" }}>
                  <div style={{ fontFamily: "JetBrains Mono, monospace", fontSize: "0.65rem", color: filtered[0].color, letterSpacing: "0.16em", textTransform: "uppercase", marginBottom: "0.5rem" }}>{filtered[0].subtitle}</div>
                  <h2 style={{ fontFamily: "Syne, sans-serif", fontSize: "clamp(1.8rem, 3vw, 2.5rem)", fontWeight: 800, color: "#fff", letterSpacing: "-0.02em", marginBottom: "0.75rem", lineHeight: 1.1 }}>{filtered[0].title}</h2>
                  <div style={{ display: "flex", gap: "0.4rem", flexWrap: "wrap", marginBottom: "1.5rem" }}>
                    {filtered[0].tags.map(t => <span key={t} style={{ padding: "0.2rem 0.6rem", borderRadius: "9999px", fontFamily: "JetBrains Mono, monospace", fontSize: "0.6rem", background: `${filtered[0].color}18`, border: `1px solid ${filtered[0].color}40`, color: filtered[0].color }}>{t}</span>)}
                  </div>
                  <div style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem", padding: "0.6rem 1.25rem", borderRadius: "10px", background: filtered[0].color, color: "#fff", fontFamily: "Syne, sans-serif", fontSize: "0.82rem", fontWeight: 700 }}>
                    View Case Study <ArrowUpRight size={14} />
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        )}

        {/* Rest — 3-column grid */}
        {filtered.length > 1 && (
          <div className="projects-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1.25rem" }}>
            <style>{`
              @media (max-width: 900px) { .projects-grid { grid-template-columns: repeat(2, 1fr) !important; } }
              @media (max-width: 600px) { .projects-grid { grid-template-columns: 1fr !important; } }
              .proj-card-img { transition: transform 0.6s ease; }
              .proj-card:hover .proj-card-img { transform: scale(1.05); }
            `}</style>
            {filtered.slice(1).map((p, i) => (
              <motion.div key={p.slug} layout
                initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.07, duration: 0.5 }}>
                <Link href={`/projects/${p.slug}`} style={{ textDecoration: "none", display: "block" }}>
                  <div className="proj-card"
                    style={{ borderRadius: "20px", overflow: "hidden", border: "1px solid var(--border)", background: "var(--bg-secondary)", display: "flex", flexDirection: "column", height: "100%", transition: "border-color 0.3s ease, box-shadow 0.3s ease, transform 0.3s ease" }}
                    onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = p.color + "55"; el.style.boxShadow = `0 16px 48px ${p.color}14`; el.style.transform = "translateY(-6px)"; }}
                    onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = "var(--border)"; el.style.boxShadow = "none"; el.style.transform = "translateY(0)"; }}>

                    {/* Image */}
                    <div style={{ height: "200px", position: "relative", overflow: "hidden", flexShrink: 0 }}>
                      <Image src={p.img} alt={p.title} fill sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, 33vw" className="proj-card-img" style={{ objectFit: "cover" }} />
                      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(10,10,15,0.65) 0%, transparent 55%)" }} />
                      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "3px", background: p.color }} />
                      <div style={{ position: "absolute", top: "0.875rem", right: "0.875rem", padding: "0.22rem 0.65rem", borderRadius: "9999px", background: "rgba(10,10,15,0.75)", backdropFilter: "blur(8px)", border: `1px solid ${p.color}50`, fontFamily: "JetBrains Mono, monospace", fontSize: "0.56rem", color: p.color, letterSpacing: "0.06em" }}>{p.badge}</div>
                      <div style={{ position: "absolute", bottom: "0.75rem", left: "0.875rem", fontFamily: "JetBrains Mono, monospace", fontSize: "0.55rem", color: "rgba(255,255,255,0.4)" }}>{p.year}</div>
                    </div>

                    {/* Content */}
                    <div style={{ padding: "1.25rem", display: "flex", flexDirection: "column", flex: 1, gap: "0.35rem" }}>
                      <div style={{ fontFamily: "JetBrains Mono, monospace", fontSize: "0.58rem", color: p.color, letterSpacing: "0.12em", textTransform: "uppercase" }}>{p.subtitle}</div>
                      <div style={{ fontFamily: "Syne, sans-serif", fontSize: "1.15rem", fontWeight: 800, color: "var(--text-primary)", letterSpacing: "-0.02em", lineHeight: 1.1 }}>{p.title}</div>
                      <div style={{ display: "flex", gap: "0.3rem", flexWrap: "wrap", margin: "0.3rem 0 auto" }}>
                        {p.tags.map(t => <span key={t} style={{ padding: "0.15rem 0.5rem", borderRadius: "5px", fontFamily: "JetBrains Mono, monospace", fontSize: "0.57rem", background: "var(--bg-tertiary)", border: "1px solid var(--border)", color: "var(--text-muted)" }}>{t}</span>)}
                      </div>
                      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", paddingTop: "0.875rem", marginTop: "0.5rem", borderTop: "1px solid var(--border)" }}>
                        <span style={{ fontFamily: "Syne, sans-serif", fontSize: "0.78rem", fontWeight: 700, color: p.color }}>Case Study</span>
                        <ArrowUpRight size={15} style={{ color: p.color }} />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        )}

        {filtered.length === 0 && (
          <div style={{ textAlign: "center", padding: "5rem 0", color: "var(--text-muted)", fontFamily: "JetBrains Mono, monospace", fontSize: "0.8rem" }}>
            No projects in this category yet.
          </div>
        )}
      </section>
    </div>
  );
}
