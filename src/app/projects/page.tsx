"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Cpu, Layers, Shield, Smartphone } from "lucide-react";

const FILTERS = ["All", "Mobile", "Web", "IoT", "Hardware"];

const PROJECTS = [
  {
    slug: "soilsaathi",
    title: "SoilSaathi",
    subtitle: "IoT Soil Health Monitoring",
    desc: "Real-time IoT soil monitoring device that analyzes pH, moisture, and NPK levels, delivering actionable improvement suggestions to farmers. Designed for accessibility — suitable for farmers, elderly users, and children.",
    tags: ["IoT", "Hardware"],
    tech: ["IoT Sensors", "Embedded Systems", "Data Analysis", "Figma"],
    img: "/soilsaathi.png",
    color: "#22c55e",
    icon: <Cpu size={32} />,
    impact: "SIH 2026 Finalist",
    year: "2026",
  },
  {
    slug: "credmate",
    title: "CredMate",
    subtitle: "Alternative Credit Scoring",
    desc: "Fintech mobile app generating credit scores for India's unbanked population by analysing alternative financial indicators — UPI history, utility payments, and behavioural data.",
    tags: ["Mobile"],
    tech: ["React Native", "TypeScript", "AI/ML APIs", "Figma"],
    img: "/credmate.png",
    color: "#6c63ff",
    icon: <Smartphone size={32} />,
    impact: "Fintech Innovation",
    year: "2025",
  },
  {
    slug: "layerforge",
    title: "LayerForge",
    subtitle: "3D Printing Service Platform",
    desc: "End-to-end web platform for on-demand 3D printing. Supports file submission, material consultation, and manufacturing request workflows — reducing procurement friction from 8 steps to 2.",
    tags: ["Web"],
    tech: ["React.js", "Tailwind CSS", "Three.js", "REST APIs"],
    img: "/layerforge.png",
    color: "#ff6b35",
    icon: <Layers size={32} />,
    impact: "Manufacturing Tech",
    year: "2025",
  },
  {
    slug: "safety-band",
    title: "Women Safety Smart Band",
    subtitle: "P2P Emergency Alert System",
    desc: "SIM-less wearable safety device using ESP-NOW peer-to-peer communication. Broadcasts emergency alerts and live GPS location to nearby devices — no internet or cellular network required.",
    tags: ["IoT", "Hardware"],
    tech: ["ESP32", "ESP-NOW", "GPS", "KiCad"],
    img: "/safety-band.png",
    color: "#3b82f6",
    icon: <Shield size={32} />,
    impact: "Safety Innovation",
    year: "2025",
  },
];

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered =
    activeFilter === "All"
      ? PROJECTS
      : PROJECTS.filter((p) => p.tags.includes(activeFilter));

  return (
    <div style={{ minHeight: "100vh", background: "var(--bg-primary)", paddingTop: "8rem" }}>

      {/* ── HEADER ── */}
      <section style={{ padding: "0 2rem 3.5rem", maxWidth: "1200px", margin: "0 auto" }}>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }}>

          {/* Label + heading row */}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: "1.5rem", marginBottom: "2.5rem" }}>
            <div>
              <div style={{ fontFamily: "JetBrains Mono, monospace", fontSize: "0.68rem", color: "var(--accent)", letterSpacing: "0.22em", textTransform: "uppercase", marginBottom: "0.75rem" }}>
                Portfolio
              </div>
              <h1 style={{ fontFamily: "Syne, sans-serif", fontSize: "clamp(2.8rem, 6vw, 4.5rem)", fontWeight: 800, color: "var(--text-primary)", letterSpacing: "-0.04em", lineHeight: 0.95, margin: 0 }}>
                Selected<br /><span style={{ color: "var(--accent)" }}>Work</span>
              </h1>
            </div>
            <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)", maxWidth: "380px", lineHeight: 1.75, margin: 0 }}>
              A curated set of projects spanning UI/UX design, IoT engineering, fintech, and full-stack development.
            </p>
          </div>

          {/* Filters */}
          <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", alignItems: "center" }}>
            {FILTERS.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                style={{
                  padding: "0.45rem 1.1rem",
                  borderRadius: "9999px",
                  border: "1px solid",
                  borderColor: activeFilter === filter ? "var(--accent)" : "var(--border)",
                  background: activeFilter === filter ? "rgba(108, 99, 255, 0.1)" : "transparent",
                  color: activeFilter === filter ? "var(--accent)" : "var(--text-muted)",
                  fontSize: "0.75rem",
                  fontWeight: 500,
                  fontFamily: "JetBrains Mono, monospace",
                  transition: "all 0.2s ease",
                  letterSpacing: "0.04em",
                  cursor: "pointer",
                }}
              >
                {filter}
                {filter !== "All" && (
                  <span style={{ marginLeft: "0.4rem", opacity: 0.5 }}>
                    {PROJECTS.filter((p) => p.tags.includes(filter)).length}
                  </span>
                )}
              </button>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ── PROJECTS GRID ── */}
      <section style={{ padding: "0 2rem 7rem", maxWidth: "1200px", margin: "0 auto" }}>
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: "1.5rem",
            }}
            className="proj-grid"
          >
            <style>{`
              @media (max-width: 768px) { .proj-grid { grid-template-columns: 1fr !important; } }
            `}</style>

            {filtered.map((project, i) => (
              <motion.div
                key={project.slug}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07, duration: 0.4 }}
                style={{
                  background: "var(--bg-secondary)",
                  border: "1px solid var(--border)",
                  borderRadius: "20px",
                  overflow: "hidden",
                  display: "flex",
                  flexDirection: "column",
                  transition: "border-color 0.3s ease, box-shadow 0.3s ease, transform 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = project.color + "55";
                  el.style.boxShadow = `0 20px 60px ${project.color}18`;
                  el.style.transform = "translateY(-5px)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = "var(--border)";
                  el.style.boxShadow = "none";
                  el.style.transform = "translateY(0)";
                }}
              >
                {/* ── IMAGE AREA — fixed 260px, no orphan space ── */}
                <div style={{ height: "260px", position: "relative", overflow: "hidden", flexShrink: 0 }}>
                  <Image
                    src={project.img}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    style={{ objectFit: "cover" }}
                  />
                  {/* Gradient overlay */}
                  <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(10,10,15,0.65) 0%, transparent 50%)" }} />

                  {/* Top accent line */}
                  <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "3px", background: project.color }} />

                  {/* Impact badge */}
                  <div style={{
                    position: "absolute", top: "1rem", right: "1rem",
                    padding: "0.3rem 0.8rem", borderRadius: "9999px",
                    background: "rgba(10,10,15,0.75)", backdropFilter: "blur(8px)",
                    border: `1px solid ${project.color}55`,
                    fontFamily: "JetBrains Mono, monospace", fontSize: "0.58rem",
                    color: project.color, letterSpacing: "0.08em",
                  }}>
                    {project.impact}
                  </div>

                  {/* Year */}
                  <div style={{
                    position: "absolute", bottom: "1rem", left: "1rem",
                    fontFamily: "JetBrains Mono, monospace", fontSize: "0.58rem",
                    color: "rgba(255,255,255,0.45)", letterSpacing: "0.1em",
                  }}>
                    {project.year}
                  </div>
                </div>

                {/* ── CONTENT ── */}
                <div style={{ padding: "1.5rem", display: "flex", flexDirection: "column", flex: 1 }}>
                  {/* Subtitle */}
                  <div style={{
                    fontFamily: "JetBrains Mono, monospace", fontSize: "0.6rem",
                    color: project.color, letterSpacing: "0.14em",
                    textTransform: "uppercase", marginBottom: "0.4rem",
                  }}>
                    {project.subtitle}
                  </div>

                  {/* Title */}
                  <h2 style={{
                    fontFamily: "Syne, sans-serif", fontSize: "1.5rem",
                    fontWeight: 800, color: "var(--text-primary)",
                    letterSpacing: "-0.02em", marginBottom: "0.75rem", lineHeight: 1.1,
                  }}>
                    {project.title}
                  </h2>

                  {/* Description */}
                  <p style={{
                    fontSize: "0.83rem", color: "var(--text-secondary)",
                    lineHeight: 1.75, marginBottom: "1.25rem", flex: 1,
                  }}>
                    {project.desc}
                  </p>

                  {/* Tech tags */}
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "0.35rem", marginBottom: "1.5rem" }}>
                    {project.tech.map((t) => (
                      <span key={t} style={{
                        padding: "0.2rem 0.6rem", borderRadius: "6px",
                        fontFamily: "JetBrains Mono, monospace", fontSize: "0.62rem",
                        background: "var(--bg-tertiary)", border: "1px solid var(--border)",
                        color: "var(--text-muted)",
                      }}>
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* CTA */}
                  <Link
                    href={`/projects/${project.slug}`}
                    style={{
                      display: "inline-flex", alignItems: "center", justifyContent: "space-between",
                      padding: "0.75rem 1.25rem", borderRadius: "12px",
                      border: `1px solid ${project.color}35`,
                      background: `${project.color}08`,
                      textDecoration: "none", transition: "all 0.25s ease",
                    }}
                    onMouseEnter={(e) => {
                      const el = e.currentTarget as HTMLElement;
                      el.style.background = `${project.color}16`;
                      el.style.borderColor = `${project.color}66`;
                    }}
                    onMouseLeave={(e) => {
                      const el = e.currentTarget as HTMLElement;
                      el.style.background = `${project.color}08`;
                      el.style.borderColor = `${project.color}35`;
                    }}
                  >
                    <span style={{ fontFamily: "Syne, sans-serif", fontSize: "0.85rem", fontWeight: 700, color: project.color }}>
                      View Case Study
                    </span>
                    <ArrowRight size={15} style={{ color: project.color }} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Empty state */}
        {filtered.length === 0 && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            style={{ textAlign: "center", padding: "5rem 0" }}>
            <div style={{ fontFamily: "Syne, sans-serif", fontSize: "1rem", color: "var(--text-muted)", fontWeight: 600 }}>
              No projects in this category yet.
            </div>
          </motion.div>
        )}
      </section>
    </div>
  );
}
