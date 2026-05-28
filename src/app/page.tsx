"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight, ArrowUpRight, Download,
  Layers, Cpu, Smartphone, Globe,
  Award, Users, Zap, PenTool,
  MapPin, Mail, ExternalLink,
} from "lucide-react";

/* ─── ANIMATED COUNTER ─── */
function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = to / 40;
    const interval = setInterval(() => {
      start += step;
      if (start >= to) { setCount(to); clearInterval(interval); }
      else setCount(Math.floor(start));
    }, 35);
    return () => clearInterval(interval);
  }, [inView, to]);
  return <span ref={ref}>{count}{suffix}</span>;
}

/* ─── ROLE CYCLER ─── */
const ROLES = ["UI/UX Designer", "Product Designer", "IoT Engineer", "Creative Developer", "UX Thinker"];
function RoleCycler() {
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setIdx(i => (i + 1) % ROLES.length), 2800);
    return () => clearInterval(t);
  }, []);
  return (
    <motion.span
      key={idx}
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      style={{ display: "inline-block", color: "var(--accent)" }}
    >
      {ROLES[idx]}
    </motion.span>
  );
}

const STATS = [
  { value: 4,  suffix: "+",  label: "Projects" },
  { value: 1,  suffix: "+",  label: "Year Exp." },
  { value: 2,  suffix: "",   label: "Hackathon Wins" },
  { value: 5,  suffix: "K+", label: "Users Impacted" },
];

const PROJECTS = [
  { title: "SoilSaathi", subtitle: "IoT Soil Monitoring", tags: ["IoT", "Hardware"], img: "/soilsaathi.png", color: "#22c55e", slug: "soilsaathi", badge: "SIH 2026" },
  { title: "CredMate",   subtitle: "Alt. Credit Scoring", tags: ["Mobile", "Fintech"], img: "/credmate.png", color: "#6c63ff", slug: "credmate", badge: "Fintech" },
  { title: "LayerForge", subtitle: "3D Printing Platform", tags: ["Web", "React"],    img: "/layerforge.png", color: "#ff6b35", slug: "layerforge", badge: "Manufacturing" },
  { title: "Safety Band",subtitle: "P2P Emergency System", tags: ["IoT", "ESP32"],   img: "/safety-band.png", color: "#3b82f6", slug: "safety-band", badge: "Safety" },
];

const PROCESS = [
  { num: "01", title: "Discover", desc: "Research & user needs" },
  { num: "02", title: "Define",   desc: "Identify core problems" },
  { num: "03", title: "Ideate",   desc: "Brainstorm solutions" },
  { num: "04", title: "Prototype",desc: "Build & test experiences" },
  { num: "05", title: "Test",     desc: "Validate with real users" },
  { num: "06", title: "Iterate",  desc: "Refine based on insights" },
];

const TESTIMONIALS = [
  { text: "Shirshak consistently delivered pixel-perfect designs with a deep understanding of user needs. His ability to bridge design and development is rare.", name: "Ihsuk Tech Team", role: "Internship Supervisor", initials: "IT" },
  { text: "Outstanding problem-solving under pressure. Shirshak's engineering skills helped us win the Spectrum Sprint at RoboWeek 2024.", name: "Team Synergy", role: "NIT Hamirpur · RoboWeek 2024", initials: "TS" },
  { text: "The SoilSaathi design was both intuitive and innovative. Shirshak understood our agricultural users' mental models perfectly.", name: "SIH 2026 Panel", role: "Smart India Hackathon", initials: "SH" },
];

export default function HomePage() {
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setTestimonialIndex(i => (i + 1) % TESTIMONIALS.length), 4500);
    return () => clearInterval(t);
  }, []);

  return (
    <div style={{ minHeight: "100vh", background: "var(--bg-primary)" }}>
      <style>{`
        /* ── GLOBAL ── */
        *, *::before, *::after { box-sizing: border-box; }
        body { overflow-x: hidden; }

        /* ── HERO LAYOUT ── */
        .hero-grid { display: grid; grid-template-columns: 1fr 420px; gap: 4rem; align-items: center; }
        @media (max-width: 1024px) { .hero-grid { grid-template-columns: 1fr; gap: 2.5rem; } .hero-right { display: none !important; } }

        /* ── HERO SECTION PADDING ── */
        .hero-section { padding: 8rem 1.5rem 4rem !important; }
        @media (max-width: 480px) { .hero-section { padding: 7rem 1.25rem 3rem !important; } }

        /* ── HERO STATUS BADGE ── */
        .hero-badge { max-width: 100%; overflow: hidden; }
        .hero-badge span { white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
        @media (max-width: 400px) { .hero-badge span { font-size: 0.58rem !important; } }

        /* ── HERO HEADLINE ── */
        .hero-h1 { font-size: clamp(1.7rem, 8.5vw, 4.5rem) !important; word-break: break-word; }
        @media (max-width: 400px) { .hero-h1 { font-size: 1.6rem !important; } }

        /* ── INFO CHIPS ── */
        .hero-chips { display: flex; gap: 0.4rem; flex-wrap: wrap; }

        /* ── HERO CTA ROW ── */
        .hero-cta { display: flex; gap: 0.75rem; flex-wrap: wrap; }
        @media (max-width: 480px) {
          .hero-cta { display: grid; grid-template-columns: 1fr 1fr; gap: 0.6rem; width: 100%; }
          .hero-cta-full { grid-column: span 2; }
          .hero-cta a, .hero-cta a[href] { width: 100%; }
        }

        /* ── PROJECTS GRID ── */
        .proj-hero-row { height: 400px; }
        .proj-small-row { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.25rem; }
        @media (max-width: 900px) { .proj-small-row { grid-template-columns: 1fr; } .proj-hero-row { height: 260px; } }

        /* ── STATS ── */
        .stats-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 1.5rem; }
        @media (max-width: 768px) { .stats-grid { grid-template-columns: repeat(2, 1fr); gap: 1rem; } }

        /* ── PROCESS ── */
        .process-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1px; background: var(--border); border-radius: 16px; overflow: hidden; border: 1px solid var(--border); }
        @media (max-width: 768px) { .process-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 480px) { .process-grid { grid-template-columns: 1fr; } }

        /* ── TOOLS ── */
        .tools-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 1rem; }
        @media (max-width: 640px) { .tools-grid { grid-template-columns: repeat(2, 1fr); } }

        /* ── SECTION PADDING ── */
        @media (max-width: 480px) {
          section { padding-left: 1.25rem !important; padding-right: 1.25rem !important; }
        }
      `}</style>

      {/* ═══════ HERO ═══════ */}
      <section className="hero-section" style={{ minHeight: "100vh", display: "flex", alignItems: "center", padding: "8rem 2rem 4rem", maxWidth: "1280px", margin: "0 auto", position: "relative", overflow: "hidden" }}>

        <div className="hero-grid" style={{ width: "100%" }}>
          {/* ── LEFT ── */}
          <div>
            {/* Status */}
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
              className="hero-badge"
              style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", padding: "0.3rem 0.875rem", borderRadius: "9999px", border: "1px solid var(--border)", background: "var(--bg-secondary)", marginBottom: "1.5rem", maxWidth: "100%" }}>
              <span style={{ width: 7, height: 7, borderRadius: "50%", background: "var(--accent-green)", boxShadow: "0 0 8px var(--accent-green)", flexShrink: 0 }} />
              <span style={{ fontFamily: "JetBrains Mono, monospace", fontSize: "0.63rem", color: "var(--text-secondary)", letterSpacing: "0.04em", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                Available for internships & opportunities
              </span>
            </motion.div>

            {/* Name */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
              style={{ fontFamily: "JetBrains Mono, monospace", fontSize: "0.72rem", color: "var(--text-muted)", letterSpacing: "0.18em", textTransform: "uppercase", marginBottom: "0.75rem" }}>
              Shirshak Mondal
            </motion.div>

            {/* Headline */}
            <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="hero-h1"
              style={{ fontFamily: "Syne, sans-serif", fontSize: "clamp(1.7rem, 8.5vw, 4.5rem)", fontWeight: 800, color: "var(--text-primary)", lineHeight: 1.1, letterSpacing: "-0.03em", marginBottom: "0.5rem", wordBreak: "break-word" }}>
              I design experiences people{" "}
              <span style={{ color: "var(--accent)" }}>actually</span> love.
            </motion.h1>

            {/* Role cycler */}
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}
              style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "1.5rem", minHeight: "1.8rem", overflow: "hidden" }}>
              <span style={{ width: 16, height: 1, background: "var(--border)", flexShrink: 0 }} />
              <span style={{ fontFamily: "JetBrains Mono, monospace", fontSize: "0.75rem", fontWeight: 500 }}>
                <RoleCycler />
              </span>
            </motion.div>

            {/* Description */}
            <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.55 }}
              style={{ fontSize: "clamp(0.82rem, 2.5vw, 0.95rem)", color: "var(--text-secondary)", lineHeight: 1.75, maxWidth: "480px", marginBottom: "1.5rem" }}>
              B.Tech + M.Tech in ECE at <strong style={{ color: "var(--text-primary)" }}>NIT Hamirpur</strong>. I blend UX thinking with engineering depth — from Figma prototypes to ESP32 firmware.
            </motion.p>

            {/* Info chips */}
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}
              className="hero-chips" style={{ marginBottom: "1.75rem" }}>
              {[
                { icon: <MapPin size={10} />, label: "India" },
                { icon: <PenTool size={10} />, label: "Figma" },
                { icon: <Cpu size={10} />, label: "IoT / ESP32" },
                { icon: <Globe size={10} />, label: "NIT Hamirpur" },
              ].map(c => (
                <span key={c.label} style={{ display: "inline-flex", alignItems: "center", gap: "0.25rem", padding: "0.25rem 0.6rem", borderRadius: "9999px", background: "var(--bg-secondary)", border: "1px solid var(--border)", fontFamily: "JetBrains Mono, monospace", fontSize: "0.62rem", color: "var(--text-muted)", whiteSpace: "nowrap" }}>
                  <span style={{ color: "var(--accent)", flexShrink: 0 }}>{c.icon}</span>{c.label}
                </span>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }} className="hero-cta">
              <Link href="/projects" className="hero-cta-full"
                style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", gap: "0.5rem", padding: "0.8rem 1.75rem", borderRadius: "10px", background: "var(--accent)", color: "#fff", fontWeight: 700, fontSize: "0.88rem", textDecoration: "none", transition: "all 0.2s ease", fontFamily: "Syne, sans-serif" }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "var(--accent-hover)"; (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 32px rgba(108,99,255,0.3)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "var(--accent)"; (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; (e.currentTarget as HTMLElement).style.boxShadow = "none"; }}>
                View Work <ArrowRight size={15} />
              </Link>
              <a href="https://drive.google.com/file/d/1rV2bR7PGtA0MTj5cRDZZc8DwLr5JTVwU/view?usp=drive_link" target="_blank" rel="noopener noreferrer"
                style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", gap: "0.5rem", padding: "0.8rem 1.5rem", borderRadius: "10px", background: "transparent", border: "1px solid var(--border)", color: "var(--text-primary)", fontWeight: 600, fontSize: "0.88rem", textDecoration: "none", transition: "all 0.2s ease" }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = "var(--accent)"; (e.currentTarget as HTMLElement).style.color = "var(--accent)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "var(--border)"; (e.currentTarget as HTMLElement).style.color = "var(--text-primary)"; }}>
                <Download size={14} /> Resume
              </a>
              <Link href="/contact"
                style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", gap: "0.5rem", padding: "0.8rem 1.5rem", borderRadius: "10px", background: "transparent", border: "1px solid var(--border)", color: "var(--text-primary)", fontWeight: 600, fontSize: "0.88rem", textDecoration: "none", transition: "all 0.2s ease" }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = "var(--accent-warm)"; (e.currentTarget as HTMLElement).style.color = "var(--accent-warm)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "var(--border)"; (e.currentTarget as HTMLElement).style.color = "var(--text-primary)"; }}>
                <Mail size={14} /> Contact
              </Link>
            </motion.div>
          </div>

          {/* ── RIGHT — Profile card ── */}
          <motion.div className="hero-right" initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            style={{ background: "var(--bg-secondary)", border: "1px solid var(--border)", borderRadius: "24px", overflow: "hidden", position: "relative" }}>
            {/* Top accent */}
            <div style={{ height: "3px", background: "var(--accent)", width: "100%" }} />

            {/* Profile area */}
            <div style={{ padding: "2rem" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.5rem" }}>
                <div style={{ width: 52, height: 52, borderRadius: "14px", background: "rgba(108,99,255,0.15)", border: "2px solid rgba(108,99,255,0.3)", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "Syne, sans-serif", fontSize: "1.1rem", fontWeight: 800, color: "var(--accent)", flexShrink: 0 }}>
                  SM
                </div>
                <div>
                  <div style={{ fontFamily: "Syne, sans-serif", fontWeight: 700, fontSize: "0.95rem", color: "var(--text-primary)" }}>Shirshak Mondal</div>
                  <div style={{ fontFamily: "JetBrains Mono, monospace", fontSize: "0.62rem", color: "var(--accent)", letterSpacing: "0.08em" }}>UI/UX Design Intern @ Ihsuk Tech</div>
                </div>
              </div>

              {/* Stats grid */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.75rem", marginBottom: "1.5rem" }}>
                {STATS.map(s => (
                  <div key={s.label} style={{ background: "var(--bg-tertiary)", borderRadius: "12px", padding: "0.875rem", border: "1px solid var(--border)" }}>
                    <div style={{ fontFamily: "Syne, sans-serif", fontSize: "1.5rem", fontWeight: 800, color: "var(--text-primary)", lineHeight: 1 }}>
                      <Counter to={s.value} suffix={s.suffix} />
                    </div>
                    <div style={{ fontFamily: "JetBrains Mono, monospace", fontSize: "0.6rem", color: "var(--text-muted)", letterSpacing: "0.06em", marginTop: "0.25rem" }}>{s.label}</div>
                  </div>
                ))}
              </div>

              {/* Skills tags */}
              <div style={{ borderTop: "1px solid var(--border)", paddingTop: "1.25rem", marginBottom: "1.25rem" }}>
                <div style={{ fontFamily: "JetBrains Mono, monospace", fontSize: "0.58rem", color: "var(--text-muted)", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "0.75rem" }}>Core Skills</div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.35rem" }}>
                  {["Figma", "React Native", "ESP32", "User Research", "Prototyping", "IoT Systems", "TypeScript", "KiCad"].map(s => (
                    <span key={s} style={{ padding: "0.2rem 0.55rem", borderRadius: "6px", fontFamily: "JetBrains Mono, monospace", fontSize: "0.6rem", background: "rgba(108,99,255,0.08)", border: "1px solid rgba(108,99,255,0.2)", color: "var(--accent)" }}>{s}</span>
                  ))}
                </div>
              </div>

              {/* Latest activity */}
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0.875rem", background: "rgba(34,197,94,0.06)", border: "1px solid rgba(34,197,94,0.2)", borderRadius: "12px" }}>
                <div>
                  <div style={{ fontFamily: "Syne, sans-serif", fontSize: "0.78rem", fontWeight: 700, color: "var(--text-primary)" }}>SIH 2026 Finalist</div>
                  <div style={{ fontFamily: "JetBrains Mono, monospace", fontSize: "0.58rem", color: "var(--text-muted)", marginTop: "0.15rem" }}>SoilSaathi · Smart India Hackathon</div>
                </div>
                <Award size={18} style={{ color: "#22c55e", flexShrink: 0 }} />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════ STATS BAR ═══════ */}
      <section style={{ borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)", background: "var(--bg-secondary)", padding: "2.5rem 2rem" }}>
        <div className="stats-grid" style={{ maxWidth: "1280px", margin: "0 auto" }}>
          {STATS.map((s, i) => (
            <motion.div key={s.label} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
              style={{ textAlign: "center" }}>
              <div style={{ fontFamily: "Syne, sans-serif", fontSize: "2.25rem", fontWeight: 800, color: "var(--text-primary)", lineHeight: 1, letterSpacing: "-0.02em" }}>
                <Counter to={s.value} suffix={s.suffix} />
              </div>
              <div style={{ fontFamily: "JetBrains Mono, monospace", fontSize: "0.68rem", color: "var(--text-muted)", letterSpacing: "0.1em", textTransform: "uppercase", marginTop: "0.4rem" }}>{s.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ═══════ FEATURED PROJECTS ═══════ */}
      <section style={{ padding: "5rem 2rem", maxWidth: "1280px", margin: "0 auto" }}>
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "2.5rem", flexWrap: "wrap", gap: "1rem" }}>
          <div>
            <div style={{ fontFamily: "JetBrains Mono, monospace", fontSize: "0.65rem", color: "var(--accent)", letterSpacing: "0.22em", textTransform: "uppercase", marginBottom: "0.5rem" }}>Featured Work</div>
            <h2 style={{ fontFamily: "Syne, sans-serif", fontSize: "clamp(1.8rem, 4vw, 2.75rem)", fontWeight: 800, color: "var(--text-primary)", letterSpacing: "-0.03em", lineHeight: 1, margin: 0 }}>Selected Projects</h2>
          </div>
          <Link href="/projects"
            style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem", fontSize: "0.82rem", color: "var(--accent)", textDecoration: "none", fontWeight: 600, transition: "gap 0.2s ease" }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.gap = "0.75rem"; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.gap = "0.4rem"; }}>
            View All <ArrowRight size={14} />
          </Link>
        </motion.div>

        {/* Hero project */}
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="proj-hero-row"
          style={{ borderRadius: "20px", overflow: "hidden", border: "1px solid var(--border)", position: "relative", marginBottom: "1.25rem", transition: "border-color 0.3s ease, box-shadow 0.3s ease" }}
          onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = "#22c55e55"; (e.currentTarget as HTMLElement).style.boxShadow = "0 20px 60px #22c55e14"; }}
          onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "var(--border)"; (e.currentTarget as HTMLElement).style.boxShadow = "none"; }}>
          <Image src="/soilsaathi.png" alt="SoilSaathi" fill sizes="100vw" style={{ objectFit: "cover" }} />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(10,10,15,0.92) 38%, rgba(10,10,15,0.15) 100%)" }} />
          <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "3px", background: "#22c55e" }} />
          <div style={{ position: "absolute", top: "1.25rem", right: "1.25rem", padding: "0.3rem 0.8rem", borderRadius: "9999px", background: "rgba(10,10,15,0.75)", backdropFilter: "blur(8px)", border: "1px solid #22c55e50", fontFamily: "JetBrains Mono, monospace", fontSize: "0.58rem", color: "#22c55e", letterSpacing: "0.08em" }}>
            SIH 2026 Finalist
          </div>
          <div style={{ position: "absolute", bottom: 0, left: 0, padding: "2rem 2.5rem", maxWidth: "520px" }}>
            <div style={{ fontFamily: "JetBrains Mono, monospace", fontSize: "0.6rem", color: "#22c55e", letterSpacing: "0.16em", textTransform: "uppercase", marginBottom: "0.4rem" }}>IoT Soil Health Monitoring</div>
            <h3 style={{ fontFamily: "Syne, sans-serif", fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 800, color: "#fff", letterSpacing: "-0.02em", marginBottom: "0.5rem", lineHeight: 1.1 }}>SoilSaathi</h3>
            <p style={{ fontSize: "0.82rem", color: "rgba(255,255,255,0.6)", lineHeight: 1.65, marginBottom: "1.25rem" }}>Real-time IoT device analyzing pH, moisture & NPK levels — delivering actionable insights to farmers across rural India.</p>
            <div style={{ display: "flex", gap: "0.4rem", flexWrap: "wrap", marginBottom: "1.25rem" }}>
              {["IoT Sensors", "Embedded", "Figma"].map(t => <span key={t} style={{ padding: "0.18rem 0.55rem", borderRadius: "9999px", fontFamily: "JetBrains Mono, monospace", fontSize: "0.58rem", background: "rgba(34,197,94,0.12)", border: "1px solid rgba(34,197,94,0.3)", color: "#22c55e" }}>{t}</span>)}
            </div>
            <Link href="/projects/soilsaathi"
              style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem", padding: "0.55rem 1.1rem", borderRadius: "8px", background: "#22c55e", color: "#fff", fontSize: "0.78rem", fontWeight: 700, textDecoration: "none", transition: "all 0.2s ease" }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; }}>
              Case Study <ArrowUpRight size={13} />
            </Link>
          </div>
        </motion.div>

        {/* 3 small projects */}
        <div className="proj-small-row">
          {PROJECTS.slice(1).map((p, i) => (
            <motion.div key={p.slug} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              style={{ borderRadius: "18px", overflow: "hidden", border: "1px solid var(--border)", background: "var(--bg-secondary)", display: "flex", flexDirection: "column", transition: "border-color 0.3s ease, box-shadow 0.3s ease, transform 0.3s ease" }}
              onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = p.color + "55"; el.style.boxShadow = `0 16px 48px ${p.color}16`; el.style.transform = "translateY(-5px)"; }}
              onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = "var(--border)"; el.style.boxShadow = "none"; el.style.transform = "translateY(0)"; }}>
              <div style={{ height: "180px", position: "relative", overflow: "hidden", flexShrink: 0 }}>
                <Image src={p.img} alt={p.title} fill sizes="(max-width: 900px) 100vw, 33vw" style={{ objectFit: "cover" }} />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(10,10,15,0.55) 0%, transparent 60%)" }} />
                <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "3px", background: p.color }} />
                <div style={{ position: "absolute", top: "0.75rem", right: "0.75rem", padding: "0.2rem 0.6rem", borderRadius: "9999px", background: "rgba(10,10,15,0.72)", backdropFilter: "blur(8px)", border: `1px solid ${p.color}50`, fontFamily: "JetBrains Mono, monospace", fontSize: "0.55rem", color: p.color, letterSpacing: "0.06em" }}>{p.badge}</div>
              </div>
              <div style={{ padding: "1.1rem", display: "flex", flexDirection: "column", flex: 1, gap: "0.35rem" }}>
                <div style={{ fontFamily: "JetBrains Mono, monospace", fontSize: "0.57rem", color: p.color, letterSpacing: "0.12em", textTransform: "uppercase" }}>{p.subtitle}</div>
                <div style={{ fontFamily: "Syne, sans-serif", fontSize: "1.1rem", fontWeight: 800, color: "var(--text-primary)", letterSpacing: "-0.02em", lineHeight: 1.1 }}>{p.title}</div>
                <div style={{ display: "flex", gap: "0.3rem", flexWrap: "wrap", margin: "0.25rem 0 0.75rem" }}>
                  {p.tags.map(t => <span key={t} style={{ padding: "0.15rem 0.5rem", borderRadius: "5px", fontFamily: "JetBrains Mono, monospace", fontSize: "0.57rem", background: "var(--bg-tertiary)", border: "1px solid var(--border)", color: "var(--text-muted)" }}>{t}</span>)}
                </div>
                <Link href={`/projects/${p.slug}`}
                  style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0.6rem 0.875rem", borderRadius: "9px", border: `1px solid ${p.color}30`, background: `${p.color}08`, textDecoration: "none", transition: "all 0.2s ease", marginTop: "auto" }}
                  onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.background = `${p.color}16`; el.style.borderColor = `${p.color}55`; }}
                  onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.background = `${p.color}08`; el.style.borderColor = `${p.color}30`; }}>
                  <span style={{ fontFamily: "Syne, sans-serif", fontSize: "0.75rem", fontWeight: 700, color: p.color }}>Case Study</span>
                  <ArrowRight size={13} style={{ color: p.color }} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ═══════ PROCESS ═══════ */}
      <section style={{ padding: "5rem 2rem", background: "var(--bg-secondary)", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ textAlign: "center", marginBottom: "3rem" }}>
            <div style={{ fontFamily: "JetBrains Mono, monospace", fontSize: "0.65rem", color: "var(--accent)", letterSpacing: "0.22em", textTransform: "uppercase", marginBottom: "0.5rem" }}>How I Work</div>
            <h2 style={{ fontFamily: "Syne, sans-serif", fontSize: "clamp(1.8rem, 4vw, 2.75rem)", fontWeight: 800, color: "var(--text-primary)", letterSpacing: "-0.03em", lineHeight: 1 }}>My Design Process</h2>
          </motion.div>
          <div className="process-grid">
            {PROCESS.map((step, i) => (
              <motion.div key={step.num} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.07 }}
                style={{ padding: "1.75rem", background: "var(--bg-primary)" }}>
                <div style={{ fontFamily: "JetBrains Mono, monospace", fontSize: "0.65rem", color: "var(--accent)", letterSpacing: "0.1em", marginBottom: "0.75rem" }}>{step.num}</div>
                <div style={{ fontFamily: "Syne, sans-serif", fontSize: "1rem", fontWeight: 800, color: "var(--text-primary)", marginBottom: "0.4rem" }}>{step.title}</div>
                <div style={{ fontSize: "0.8rem", color: "var(--text-muted)", lineHeight: 1.6 }}>{step.desc}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ TOOLS ═══════ */}
      <section style={{ padding: "5rem 2rem", maxWidth: "1280px", margin: "0 auto" }}>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ textAlign: "center", marginBottom: "3rem" }}>
          <div style={{ fontFamily: "JetBrains Mono, monospace", fontSize: "0.65rem", color: "var(--accent)", letterSpacing: "0.22em", textTransform: "uppercase", marginBottom: "0.5rem" }}>My Toolkit</div>
          <h2 style={{ fontFamily: "Syne, sans-serif", fontSize: "clamp(1.8rem, 4vw, 2.75rem)", fontWeight: 800, color: "var(--text-primary)", letterSpacing: "-0.03em", lineHeight: 1 }}>Tools & Technologies</h2>
        </motion.div>
        <div className="tools-grid">
          {[
            { name: "Figma", desc: "Primary design tool", icon: <PenTool size={24} />, color: "#F24E1E" },
            { name: "React / RN", desc: "Frontend development", icon: <Layers size={24} />, color: "#61DAFB" },
            { name: "ESP32 / IoT", desc: "Hardware prototyping", icon: <Cpu size={24} />, color: "#E7352B" },
            { name: "TypeScript", desc: "Type-safe development", icon: <Globe size={24} />, color: "#3178C6" },
          ].map((tool, i) => (
            <motion.div key={tool.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
              style={{ padding: "1.5rem", background: "var(--bg-secondary)", border: "1px solid var(--border)", borderRadius: "16px", transition: "all 0.3s ease" }}
              onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = tool.color + "55"; el.style.transform = "translateY(-4px)"; el.style.boxShadow = `0 12px 40px ${tool.color}15`; }}
              onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = "var(--border)"; el.style.transform = "translateY(0)"; el.style.boxShadow = "none"; }}>
              <div style={{ color: tool.color, marginBottom: "0.875rem" }}>{tool.icon}</div>
              <div style={{ fontFamily: "Syne, sans-serif", fontWeight: 700, fontSize: "0.95rem", color: "var(--text-primary)", marginBottom: "0.25rem" }}>{tool.name}</div>
              <div style={{ fontFamily: "JetBrains Mono, monospace", fontSize: "0.65rem", color: "var(--text-muted)" }}>{tool.desc}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ═══════ TESTIMONIALS ═══════ */}
      <section style={{ padding: "5rem 2rem", background: "var(--bg-secondary)", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}>
        <div style={{ maxWidth: "780px", margin: "0 auto", textAlign: "center" }}>
          <div style={{ fontFamily: "JetBrains Mono, monospace", fontSize: "0.65rem", color: "var(--accent)", letterSpacing: "0.22em", textTransform: "uppercase", marginBottom: "0.5rem" }}>Testimonials</div>
          <h2 style={{ fontFamily: "Syne, sans-serif", fontSize: "clamp(1.8rem, 4vw, 2.5rem)", fontWeight: 800, color: "var(--text-primary)", letterSpacing: "-0.03em", marginBottom: "3rem" }}>What people say</h2>

          <div style={{ position: "relative", minHeight: "180px" }}>
            {TESTIMONIALS.map((t, i) => (
              <motion.div key={i} initial={{ opacity: 0 }} animate={{ opacity: testimonialIndex === i ? 1 : 0 }} transition={{ duration: 0.5 }}
                style={{ position: testimonialIndex === i ? "relative" : "absolute", top: 0, left: 0, right: 0, pointerEvents: testimonialIndex === i ? "auto" : "none" }}>
                <p style={{ fontSize: "1rem", color: "var(--text-secondary)", lineHeight: 1.85, marginBottom: "1.5rem", fontStyle: "italic" }}>&ldquo;{t.text}&rdquo;</p>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "0.75rem" }}>
                  <div style={{ width: 40, height: 40, borderRadius: "50%", background: "rgba(108,99,255,0.15)", border: "1px solid rgba(108,99,255,0.3)", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "Syne, sans-serif", fontSize: "0.75rem", fontWeight: 800, color: "var(--accent)" }}>{t.initials}</div>
                  <div style={{ textAlign: "left" }}>
                    <div style={{ fontFamily: "Syne, sans-serif", fontWeight: 700, fontSize: "0.85rem", color: "var(--text-primary)" }}>{t.name}</div>
                    <div style={{ fontFamily: "JetBrains Mono, monospace", fontSize: "0.62rem", color: "var(--text-muted)" }}>{t.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Dots */}
          <div style={{ display: "flex", gap: "0.5rem", justifyContent: "center", marginTop: "2.5rem" }}>
            {TESTIMONIALS.map((_, i) => (
              <button key={i} onClick={() => setTestimonialIndex(i)}
                style={{ width: i === testimonialIndex ? 24 : 7, height: 7, borderRadius: 9999, background: i === testimonialIndex ? "var(--accent)" : "var(--border)", border: "none", cursor: "pointer", transition: "all 0.3s ease", padding: 0 }} />
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ CTA FOOTER ═══════ */}
      <section style={{ padding: "6rem 2rem", maxWidth: "900px", margin: "0 auto", textAlign: "center" }}>
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <div style={{ fontFamily: "JetBrains Mono, monospace", fontSize: "0.65rem", color: "var(--accent)", letterSpacing: "0.22em", textTransform: "uppercase", marginBottom: "1rem" }}>Open to Work</div>
          <h2 style={{ fontFamily: "Syne, sans-serif", fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 800, color: "var(--text-primary)", letterSpacing: "-0.03em", lineHeight: 1.05, marginBottom: "1.25rem" }}>
            Have a project in mind?<br />
            <span style={{ color: "var(--accent)" }}>Let&apos;s build it together.</span>
          </h2>
          <p style={{ fontSize: "0.95rem", color: "var(--text-secondary)", lineHeight: 1.75, marginBottom: "2.5rem", maxWidth: "500px", margin: "0 auto 2.5rem" }}>
            I&apos;m currently available for internships, freelance projects, and full-time opportunities.
          </p>
          <div style={{ display: "flex", gap: "0.875rem", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/contact"
              style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", padding: "0.875rem 2rem", borderRadius: "10px", background: "var(--accent)", color: "#fff", fontWeight: 700, fontSize: "0.9rem", textDecoration: "none", transition: "all 0.2s ease", fontFamily: "Syne, sans-serif" }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "var(--accent-hover)"; (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 32px rgba(108,99,255,0.3)"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "var(--accent)"; (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; (e.currentTarget as HTMLElement).style.boxShadow = "none"; }}>
              Get In Touch <ArrowRight size={16} />
            </Link>
            <Link href="/projects"
              style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", padding: "0.875rem 2rem", borderRadius: "10px", background: "transparent", border: "1px solid var(--border)", color: "var(--text-primary)", fontWeight: 600, fontSize: "0.9rem", textDecoration: "none", transition: "all 0.2s ease" }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = "var(--accent)"; (e.currentTarget as HTMLElement).style.color = "var(--accent)"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "var(--border)"; (e.currentTarget as HTMLElement).style.color = "var(--text-primary)"; }}>
              <ExternalLink size={15} /> See My Work
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
