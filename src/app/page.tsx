"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Download,
  Layers,
  Cpu,
  Smartphone,
  Globe,
  Award,
  Users,
  Zap,
  ChevronDown,
} from "lucide-react";

/* ─── TYPING ANIMATION ─── */
const ROLES = ["UI/UX Designer", "UX Thinker", "Product Designer", "IoT Engineer", "Creative Developer"];

function TypingText() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const target = ROLES[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && displayed.length < target.length) {
      timeout = setTimeout(() => setDisplayed(target.slice(0, displayed.length + 1)), 60);
    } else if (!deleting && displayed.length === target.length) {
      timeout = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 30);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setRoleIndex((i) => (i + 1) % ROLES.length);
    }
    return () => clearTimeout(timeout);
  }, [displayed, deleting, roleIndex]);

  return (
    <span style={{ color: "var(--accent)" }}>
      {displayed}
      <span
        style={{
          borderRight: "2px solid var(--accent)",
          marginLeft: "2px",
          animation: "blink 1s step-end infinite",
        }}
      />
      <style>{`@keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }`}</style>
    </span>
  );
}

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
      if (start >= to) {
        setCount(to);
        clearInterval(interval);
      } else {
        setCount(Math.floor(start));
      }
    }, 35);
    return () => clearInterval(interval);
  }, [inView, to]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

/* ─── STATS ─── */
const STATS = [
  { value: 4, suffix: "+", label: "Projects Built", icon: <Layers size={18} /> },
  { value: 1, suffix: "+", label: "Years Designing", icon: <Zap size={18} /> },
  { value: 2, suffix: "", label: "Hackathon Wins", icon: <Award size={18} /> },
  { value: 5, suffix: "K+", label: "Users Impacted", icon: <Users size={18} /> },
];

/* ─── FEATURED PROJECTS ─── */
const PROJECTS = [
  {
    title: "SoilSaathi",
    subtitle: "IoT Soil Health Monitoring",
    desc: "Real-time soil monitoring device that analyzes conditions and delivers actionable insights for farmers.",
    tags: ["IoT", "Embedded Systems", "Data Analysis"],
    img: "/soilsaathi.png",
    color: "#22c55e",
    slug: "soilsaathi",
    span: "large",
  },
  {
    title: "CredMate",
    subtitle: "Alternative Credit Scoring",
    desc: "Fintech mobile app generating credit scores for unbanked users via behavioral data analysis.",
    tags: ["React Native", "TypeScript", "AI/ML"],
    img: "/credmate.png",
    color: "#6c63ff",
    slug: "credmate",
    span: "medium",
  },
  {
    title: "LayerForge",
    subtitle: "3D Printing Platform",
    desc: "End-to-end web platform for on-demand 3D printing with file submission and manufacturing workflows.",
    tags: ["React.js", "Tailwind CSS"],
    img: null,
    color: "#ff6b35",
    slug: "layerforge",
    span: "medium",
  },
  {
    title: "Women Safety Band",
    subtitle: "P2P Emergency System",
    desc: "SIM-less wearable safety device with peer-to-peer communication, broadcasting emergency alerts without network.",
    tags: ["ESP32", "GPS", "P2P"],
    img: null,
    color: "#3b82f6",
    slug: "safety-band",
    span: "small",
  },
];

/* ─── PROCESS STEPS ─── */
const PROCESS = [
  { num: "01", title: "Discover", desc: "Research & understanding user needs" },
  { num: "02", title: "Define", desc: "Identify core problems to solve" },
  { num: "03", title: "Ideate", desc: "Brainstorm creative solutions" },
  { num: "04", title: "Prototype", desc: "Build testable experiences" },
  { num: "05", title: "Test", desc: "Validate with real users" },
  { num: "06", title: "Iterate", desc: "Refine based on insights" },
];

/* ─── TESTIMONIALS ─── */
const TESTIMONIALS = [
  {
    text: "Shirshak consistently delivered pixel-perfect designs with a deep understanding of user needs. His ability to bridge design and development is rare.",
    name: "Ihsuk Tech Team",
    role: "Internship Supervisor",
    initials: "IT",
  },
  {
    text: "Outstanding problem-solving under pressure. Shirshak's robotics and engineering skills helped us win the Spectrum Sprint at RoboWeek 2024.",
    name: "Team Synergy",
    role: "NIT Hamirpur · RoboWeek 2024",
    initials: "TS",
  },
  {
    text: "The SoilSathi design was both intuitive and innovative. Shirshak understood our agricultural users' mental models perfectly.",
    name: "SIH 2026 Panel",
    role: "Smart India Hackathon",
    initials: "SH",
  },
];

/* ─── FLOATING CARD ─── */
function FloatingCard({
  icon,
  label,
  value,
  style,
  delay = 0,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  style?: React.CSSProperties;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: delay + 0.8, duration: 0.6 }}
      className="animate-float"
      style={{
        position: "absolute",
        background: "var(--bg-secondary)",
        border: "1px solid var(--glass-border)",
        borderRadius: "14px",
        padding: "0.875rem 1.125rem",
        display: "flex",
        alignItems: "center",
        gap: "0.75rem",
        backdropFilter: "blur(20px)",
        boxShadow: "var(--shadow-md)",
        ...style,
      }}
    >
      <div
        style={{
          width: "36px",
          height: "36px",
          borderRadius: "10px",
          background: "rgba(108, 99, 255, 0.12)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "var(--accent)",
          flexShrink: 0,
        }}
      >
        {icon}
      </div>
      <div>
        <div
          style={{
            fontFamily: "JetBrains Mono, monospace",
            fontSize: "0.65rem",
            color: "var(--text-muted)",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
          }}
        >
          {label}
        </div>
        <div
          style={{
            fontSize: "0.9rem",
            fontWeight: 600,
            color: "var(--text-primary)",
            fontFamily: "Syne, sans-serif",
          }}
        >
          {value}
        </div>
      </div>
    </motion.div>
  );
}

/* ─── MAIN PAGE ─── */
export default function HomePage() {
  const [testimonialIndex, setTestimonialIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTestimonialIndex((i) => (i + 1) % TESTIMONIALS.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ minHeight: "100vh", background: "var(--bg-primary)" }}>
      {/* ═══════════════ HERO ═══════════════ */}
      <section
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "8rem 2rem 4rem",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Background Grid */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: `
              linear-gradient(var(--border-subtle) 1px, transparent 1px),
              linear-gradient(90deg, var(--border-subtle) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
            opacity: 0.4,
          }}
        />

        {/* Radial glow */}
        <div
          style={{
            position: "absolute",
            top: "30%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "600px",
            height: "600px",
            background: "rgba(108, 99, 255, 0.06)",
            borderRadius: "50%",
            filter: "blur(80px)",
            pointerEvents: "none",
          }}
        />

        {/* Floating Cards */}
        <FloatingCard
          icon={<Layers size={16} />}
          label="Current Role"
          value="UI/UX Design Intern"
          style={{ top: "22%", left: "5%", animationDelay: "0s" }}
          delay={0}
        />
        <FloatingCard
          icon={<Cpu size={16} />}
          label="Focus"
          value="IoT & Embedded"
          style={{ top: "55%", left: "3%", animationDelay: "1.5s" }}
          delay={0.1}
        />
        <FloatingCard
          icon={<Smartphone size={16} />}
          label="Latest Project"
          value="CredMate App"
          style={{ top: "22%", right: "5%", animationDelay: "0.8s" }}
          delay={0.2}
        />
        <FloatingCard
          icon={<Globe size={16} />}
          label="Education"
          value="NIT Hamirpur"
          style={{ top: "55%", right: "3%", animationDelay: "2s" }}
          delay={0.3}
        />

        {/* Hero Content */}
        <div
          style={{
            position: "relative",
            zIndex: 1,
            textAlign: "center",
            maxWidth: "900px",
          }}
        >
          {/* Label */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              padding: "0.375rem 1rem",
              borderRadius: "9999px",
              border: "1px solid var(--border)",
              background: "var(--glass)",
              marginBottom: "2rem",
            }}
          >
            <div
              style={{
                width: "7px",
                height: "7px",
                borderRadius: "50%",
                background: "var(--accent-green)",
                boxShadow: "0 0 6px var(--accent-green)",
              }}
            />
            <span
              style={{
                fontFamily: "JetBrains Mono, monospace",
                fontSize: "0.72rem",
                color: "var(--text-secondary)",
                letterSpacing: "0.08em",
              }}
            >
              Available for internships & opportunities
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            style={{
              fontFamily: "Syne, sans-serif",
              fontSize: "clamp(2.8rem, 7vw, 5.5rem)",
              fontWeight: 800,
              color: "var(--text-primary)",
              lineHeight: 1.05,
              letterSpacing: "-0.03em",
              marginBottom: "1.5rem",
            }}
          >
            Designing digital
            <br />
            experiences that feel
            <br />
            <TypingText />
          </motion.h1>

          {/* Sub */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55 }}
            style={{
              fontSize: "1.05rem",
              color: "var(--text-secondary)",
              maxWidth: "580px",
              margin: "0 auto 2.5rem",
              lineHeight: 1.7,
            }}
          >
            I&apos;m Shirshak Mondal — a UI/UX designer and IoT developer studying at{" "}
            <span style={{ color: "var(--text-primary)", fontWeight: 500 }}>
              NIT Hamirpur
            </span>
            . I turn complex problems into intuitive, beautiful interfaces.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "1rem",
              flexWrap: "wrap",
            }}
          >
            <Link
              href="/projects"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                padding: "0.875rem 2rem",
                borderRadius: "10px",
                background: "var(--accent)",
                color: "#fff",
                fontWeight: 600,
                fontSize: "0.9rem",
                textDecoration: "none",
                transition: "all 0.2s ease",
                letterSpacing: "0.01em",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget).style.background = "var(--accent-hover)";
                (e.currentTarget).style.transform = "translateY(-2px)";
                (e.currentTarget).style.boxShadow = "var(--shadow-accent)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget).style.background = "var(--accent)";
                (e.currentTarget).style.transform = "translateY(0)";
                (e.currentTarget).style.boxShadow = "none";
              }}
            >
              View Projects <ArrowRight size={16} />
            </Link>
            <a
              href="/resume"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                padding: "0.875rem 2rem",
                borderRadius: "10px",
                background: "var(--glass)",
                border: "1px solid var(--border)",
                color: "var(--text-primary)",
                fontWeight: 600,
                fontSize: "0.9rem",
                textDecoration: "none",
                transition: "all 0.2s ease",
                letterSpacing: "0.01em",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget).style.borderColor = "var(--accent)";
                (e.currentTarget).style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget).style.borderColor = "var(--border)";
                (e.currentTarget).style.transform = "translateY(0)";
              }}
            >
              <Download size={16} /> Resume
            </a>
            <Link
              href="/contact"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                padding: "0.875rem 2rem",
                borderRadius: "10px",
                background: "var(--glass)",
                border: "1px solid var(--border)",
                color: "var(--text-primary)",
                fontWeight: 600,
                fontSize: "0.9rem",
                textDecoration: "none",
                transition: "all 0.2s ease",
                letterSpacing: "0.01em",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget).style.borderColor = "var(--accent-warm)";
                (e.currentTarget).style.color = "var(--accent-warm)";
                (e.currentTarget).style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget).style.borderColor = "var(--border)";
                (e.currentTarget).style.color = "var(--text-primary)";
                (e.currentTarget).style.transform = "translateY(0)";
              }}
            >
              Let&apos;s Work Together
            </Link>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          style={{
            position: "absolute",
            bottom: "2.5rem",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "0.5rem",
            color: "var(--text-muted)",
          }}
        >
          <span
            style={{
              fontFamily: "JetBrains Mono, monospace",
              fontSize: "0.62rem",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
            }}
          >
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ChevronDown size={16} />
          </motion.div>
        </motion.div>
      </section>

      {/* ═══════════════ STATS ═══════════════ */}
      <section
        style={{
          padding: "3rem 2rem",
          borderTop: "1px solid var(--border)",
          borderBottom: "1px solid var(--border)",
          background: "var(--bg-secondary)",
        }}
      >
        <div
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "2rem",
          }}
          className="stats-grid"
        >
          <style>{`
            @media (max-width: 768px) { .stats-grid { grid-template-columns: repeat(2, 1fr) !important; } }
            @media (max-width: 480px) { .stats-grid { grid-template-columns: 1fr !important; } }
          `}</style>
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                gap: "0.5rem",
              }}
            >
              <div
                style={{
                  color: "var(--accent)",
                  marginBottom: "0.25rem",
                }}
              >
                {stat.icon}
              </div>
              <div
                style={{
                  fontFamily: "Syne, sans-serif",
                  fontSize: "2.5rem",
                  fontWeight: 800,
                  color: "var(--text-primary)",
                  lineHeight: 1,
                  letterSpacing: "-0.02em",
                }}
              >
                <Counter to={stat.value} suffix={stat.suffix} />
              </div>
              <div
                style={{
                  fontSize: "0.8rem",
                  color: "var(--text-muted)",
                  letterSpacing: "0.05em",
                  textTransform: "uppercase",
                  fontFamily: "JetBrains Mono, monospace",
                }}
              >
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ═══════════════ FEATURED PROJECTS ═══════════════ */}
      <section style={{ padding: "6rem 2rem", maxWidth: "1280px", margin: "0 auto" }}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ marginBottom: "2.5rem", display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: "1rem" }}
        >
          <div>
            <div style={{ fontFamily: "JetBrains Mono, monospace", fontSize: "0.68rem", color: "var(--accent)", letterSpacing: "0.22em", textTransform: "uppercase", marginBottom: "0.6rem" }}>
              Featured Work
            </div>
            <h2 style={{ fontFamily: "Syne, sans-serif", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, color: "var(--text-primary)", letterSpacing: "-0.03em", lineHeight: 1, margin: 0 }}>
              Selected Projects
            </h2>
          </div>
          <Link
            href="/projects"
            style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem", fontSize: "0.85rem", color: "var(--accent)", textDecoration: "none", fontWeight: 600, transition: "gap 0.2s ease" }}
            onMouseEnter={(e) => { (e.currentTarget).style.gap = "0.75rem"; }}
            onMouseLeave={(e) => { (e.currentTarget).style.gap = "0.4rem"; }}
          >
            View All <ArrowRight size={14} />
          </Link>
        </motion.div>

        {/* ── ROW 1: Hero card (SoilSaathi) full width ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{
            borderRadius: "20px", overflow: "hidden", border: "1px solid var(--border)",
            position: "relative", height: "380px", marginBottom: "1.25rem",
            transition: "border-color 0.3s ease, box-shadow 0.3s ease",
          }}
          onMouseEnter={(e) => {
            const el = e.currentTarget as HTMLElement;
            el.style.borderColor = "#22c55e55";
            el.style.boxShadow = "0 20px 60px #22c55e18";
          }}
          onMouseLeave={(e) => {
            const el = e.currentTarget as HTMLElement;
            el.style.borderColor = "var(--border)";
            el.style.boxShadow = "none";
          }}
        >
          {/* Image */}
          <Image src="/soilsaathi.png" alt="SoilSaathi" fill sizes="100vw" style={{ objectFit: "cover" }} />
          {/* Gradient overlay */}
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(10,10,15,0.88) 40%, rgba(10,10,15,0.2) 100%)" }} />
          {/* Top accent */}
          <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "3px", background: "#22c55e" }} />
          {/* Badge */}
          <div style={{ position: "absolute", top: "1.25rem", right: "1.25rem", padding: "0.3rem 0.8rem", borderRadius: "9999px", background: "rgba(10,10,15,0.7)", backdropFilter: "blur(8px)", border: "1px solid #22c55e50", fontFamily: "JetBrains Mono, monospace", fontSize: "0.6rem", color: "#22c55e", letterSpacing: "0.08em" }}>
            SIH 2026 Finalist
          </div>
          {/* Text overlay */}
          <div style={{ position: "absolute", bottom: 0, left: 0, padding: "2rem 2.5rem", maxWidth: "520px" }}>
            <div style={{ fontFamily: "JetBrains Mono, monospace", fontSize: "0.62rem", color: "#22c55e", letterSpacing: "0.16em", textTransform: "uppercase", marginBottom: "0.5rem" }}>
              IoT Soil Health Monitoring
            </div>
            <h3 style={{ fontFamily: "Syne, sans-serif", fontSize: "2rem", fontWeight: 800, color: "#fff", letterSpacing: "-0.02em", marginBottom: "0.6rem", lineHeight: 1.1 }}>
              SoilSaathi
            </h3>
            <p style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.65)", lineHeight: 1.65, marginBottom: "1.25rem" }}>
              Real-time IoT soil monitoring device that analyzes pH, moisture, and NPK levels — delivering actionable insights to farmers across rural India.
            </p>
            <div style={{ display: "flex", gap: "0.4rem", flexWrap: "wrap", marginBottom: "1.25rem" }}>
              {["IoT Sensors", "Embedded Systems", "Data Analysis"].map(t => (
                <span key={t} style={{ padding: "0.2rem 0.6rem", borderRadius: "9999px", fontFamily: "JetBrains Mono, monospace", fontSize: "0.6rem", background: "rgba(34,197,94,0.12)", border: "1px solid rgba(34,197,94,0.3)", color: "#22c55e" }}>{t}</span>
              ))}
            </div>
            <Link href="/projects/soilsaathi" style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem", padding: "0.6rem 1.25rem", borderRadius: "9px", background: "#22c55e", color: "#fff", fontSize: "0.8rem", fontWeight: 700, textDecoration: "none", transition: "all 0.2s ease" }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; }}>
              View Case Study <ArrowRight size={13} />
            </Link>
          </div>
        </motion.div>

        {/* ── ROW 2: 3 equal cards ── */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1.25rem" }} className="proj-row2">
          <style>{`@media (max-width: 900px) { .proj-row2 { grid-template-columns: 1fr !important; } } @media (max-width: 1200px) and (min-width: 900px) { .proj-row2 { grid-template-columns: repeat(3, 1fr) !important; } }`}</style>
          {[
            { slug: "credmate", title: "CredMate", subtitle: "Alternative Credit Scoring", desc: "Fintech mobile app generating credit scores for India's unbanked population via behavioral data analysis.", tags: ["React Native", "TypeScript", "AI/ML"], img: "/credmate.png", color: "#6c63ff", badge: "Fintech Innovation" },
            { slug: "layerforge", title: "LayerForge", subtitle: "3D Printing Platform", desc: "End-to-end platform for on-demand 3D printing with file submission and manufacturing workflows.", tags: ["React.js", "Tailwind CSS"], img: "/layerforge.png", color: "#ff6b35", badge: "Manufacturing Tech" },
            { slug: "safety-band", title: "Safety Band", subtitle: "P2P Emergency System", desc: "SIM-less wearable device broadcasting emergency alerts via ESP-NOW — no internet required.", tags: ["ESP32", "GPS", "P2P"], img: "/safety-band.png", color: "#3b82f6", badge: "Safety Innovation" },
          ].map((p, i) => (
            <motion.div
              key={p.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              style={{ borderRadius: "18px", overflow: "hidden", border: "1px solid var(--border)", background: "var(--bg-secondary)", display: "flex", flexDirection: "column", transition: "border-color 0.3s ease, box-shadow 0.3s ease, transform 0.3s ease" }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = p.color + "55";
                el.style.boxShadow = `0 16px 48px ${p.color}18`;
                el.style.transform = "translateY(-5px)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = "var(--border)";
                el.style.boxShadow = "none";
                el.style.transform = "translateY(0)";
              }}
            >
              {/* Image */}
              <div style={{ height: "190px", position: "relative", overflow: "hidden", flexShrink: 0 }}>
                <Image src={p.img} alt={p.title} fill sizes="(max-width: 900px) 100vw, 33vw" style={{ objectFit: "cover" }} />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(10,10,15,0.5) 0%, transparent 60%)" }} />
                <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "3px", background: p.color }} />
                <div style={{ position: "absolute", top: "0.85rem", right: "0.85rem", padding: "0.22rem 0.65rem", borderRadius: "9999px", background: "rgba(10,10,15,0.72)", backdropFilter: "blur(8px)", border: `1px solid ${p.color}50`, fontFamily: "JetBrains Mono, monospace", fontSize: "0.56rem", color: p.color, letterSpacing: "0.06em" }}>
                  {p.badge}
                </div>
              </div>
              {/* Content */}
              <div style={{ padding: "1.25rem", display: "flex", flexDirection: "column", flex: 1, gap: "0.4rem" }}>
                <div style={{ fontFamily: "JetBrains Mono, monospace", fontSize: "0.58rem", color: p.color, letterSpacing: "0.14em", textTransform: "uppercase" }}>{p.subtitle}</div>
                <div style={{ fontFamily: "Syne, sans-serif", fontSize: "1.2rem", fontWeight: 800, color: "var(--text-primary)", letterSpacing: "-0.02em", lineHeight: 1.1 }}>{p.title}</div>
                <p style={{ fontSize: "0.78rem", color: "var(--text-secondary)", lineHeight: 1.65, flex: 1, margin: "0.15rem 0 0.6rem" }}>{p.desc}</p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.3rem", marginBottom: "0.875rem" }}>
                  {p.tags.map(t => (
                    <span key={t} style={{ padding: "0.18rem 0.55rem", borderRadius: "5px", fontFamily: "JetBrains Mono, monospace", fontSize: "0.58rem", background: "var(--bg-tertiary)", border: "1px solid var(--border)", color: "var(--text-muted)" }}>{t}</span>
                  ))}
                </div>
                <Link href={`/projects/${p.slug}`}
                  style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0.65rem 1rem", borderRadius: "10px", border: `1px solid ${p.color}30`, background: `${p.color}08`, textDecoration: "none", transition: "all 0.2s ease" }}
                  onMouseEnter={(e) => { const el = e.currentTarget as HTMLElement; el.style.background = `${p.color}16`; el.style.borderColor = `${p.color}55`; }}
                  onMouseLeave={(e) => { const el = e.currentTarget as HTMLElement; el.style.background = `${p.color}08`; el.style.borderColor = `${p.color}30`; }}>
                  <span style={{ fontFamily: "Syne, sans-serif", fontSize: "0.8rem", fontWeight: 700, color: p.color }}>Case Study</span>
                  <ArrowRight size={14} style={{ color: p.color }} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ═══════════════ PROCESS ═══════════════ */}
      <section
        style={{
          padding: "6rem 2rem",
          background: "var(--bg-secondary)",
          borderTop: "1px solid var(--border)",
          borderBottom: "1px solid var(--border)",
        }}
      >
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ marginBottom: "3.5rem", textAlign: "center" }}
          >
            <div
              style={{
                fontFamily: "JetBrains Mono, monospace",
                fontSize: "0.7rem",
                color: "var(--accent)",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                marginBottom: "0.75rem",
              }}
            >
              How I Work
            </div>
            <h2
              style={{
                fontFamily: "Syne, sans-serif",
                fontSize: "clamp(2rem, 5vw, 3rem)",
                fontWeight: 800,
                color: "var(--text-primary)",
                letterSpacing: "-0.02em",
              }}
            >
              My Design Process
            </h2>
          </motion.div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(6, 1fr)",
              gap: "1px",
              background: "var(--border)",
              borderRadius: "16px",
              overflow: "hidden",
              border: "1px solid var(--border)",
            }}
            className="process-grid"
          >
            <style>{`
              @media (max-width: 1024px) { .process-grid { grid-template-columns: repeat(3, 1fr) !important; } }
              @media (max-width: 640px) { .process-grid { grid-template-columns: repeat(2, 1fr) !important; } }
            `}</style>
            {PROCESS.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                style={{
                  padding: "2rem 1.5rem",
                  background: "var(--bg-secondary)",
                  position: "relative",
                  transition: "background 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget).style.background = "var(--bg-tertiary)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget).style.background = "var(--bg-secondary)";
                }}
              >
                <div
                  style={{
                    fontFamily: "JetBrains Mono, monospace",
                    fontSize: "0.65rem",
                    color: "var(--accent)",
                    letterSpacing: "0.15em",
                    marginBottom: "0.75rem",
                  }}
                >
                  {step.num}
                </div>
                <div
                  style={{
                    fontFamily: "Syne, sans-serif",
                    fontSize: "1rem",
                    fontWeight: 700,
                    color: "var(--text-primary)",
                    marginBottom: "0.4rem",
                  }}
                >
                  {step.title}
                </div>
                <div
                  style={{
                    fontSize: "0.78rem",
                    color: "var(--text-muted)",
                    lineHeight: 1.5,
                  }}
                >
                  {step.desc}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ TESTIMONIALS ═══════════════ */}
      <section style={{ padding: "6rem 2rem" }}>
        <div
          style={{
            maxWidth: "800px",
            margin: "0 auto",
            textAlign: "center",
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ marginBottom: "3rem" }}
          >
            <div
              style={{
                fontFamily: "JetBrains Mono, monospace",
                fontSize: "0.7rem",
                color: "var(--accent)",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                marginBottom: "0.75rem",
              }}
            >
              Testimonials
            </div>
            <h2
              style={{
                fontFamily: "Syne, sans-serif",
                fontSize: "clamp(2rem, 5vw, 3rem)",
                fontWeight: 800,
                color: "var(--text-primary)",
                letterSpacing: "-0.02em",
              }}
            >
              What People Say
            </h2>
          </motion.div>

          <div
            style={{
              background: "var(--bg-secondary)",
              border: "1px solid var(--border)",
              borderRadius: "20px",
              padding: "2.5rem",
              position: "relative",
              minHeight: "200px",
            }}
          >
            {TESTIMONIALS.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{
                  opacity: i === testimonialIndex ? 1 : 0,
                  y: i === testimonialIndex ? 0 : 10,
                }}
                transition={{ duration: 0.5 }}
                style={{
                  position: i === 0 ? "relative" : "absolute",
                  inset: 0,
                  padding: "2.5rem",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "1.5rem",
                  pointerEvents: i === testimonialIndex ? "auto" : "none",
                }}
              >
                <div
                  style={{
                    fontSize: "1rem",
                    color: "var(--text-secondary)",
                    lineHeight: 1.8,
                    fontStyle: "italic",
                  }}
                >
                  &ldquo;{t.text}&rdquo;
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.875rem",
                  }}
                >
                  <div
                    style={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "10px",
                      background: "rgba(108, 99, 255, 0.12)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontFamily: "Syne, sans-serif",
                      fontWeight: 700,
                      fontSize: "0.75rem",
                      color: "var(--accent)",
                      flexShrink: 0,
                    }}
                  >
                    {t.initials}
                  </div>
                  <div style={{ textAlign: "left" }}>
                    <div
                      style={{
                        fontSize: "0.85rem",
                        fontWeight: 600,
                        color: "var(--text-primary)",
                        fontFamily: "Syne, sans-serif",
                      }}
                    >
                      {t.name}
                    </div>
                    <div
                      style={{
                        fontSize: "0.72rem",
                        color: "var(--text-muted)",
                        fontFamily: "JetBrains Mono, monospace",
                      }}
                    >
                      {t.role}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Dots */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "0.5rem",
              marginTop: "1.5rem",
            }}
          >
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                onClick={() => setTestimonialIndex(i)}
                style={{
                  width: i === testimonialIndex ? "24px" : "8px",
                  height: "8px",
                  borderRadius: "4px",
                  background:
                    i === testimonialIndex ? "var(--accent)" : "var(--border)",
                  border: "none",
                  transition: "all 0.3s ease",
                }}
                aria-label={`Testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ CTA BANNER ═══════════════ */}
      <section
        style={{
          padding: "5rem 2rem",
          borderTop: "1px solid var(--border)",
          background: "var(--bg-secondary)",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{
            maxWidth: "800px",
            margin: "0 auto",
            textAlign: "center",
          }}
        >
          <div
            style={{
              fontFamily: "JetBrains Mono, monospace",
              fontSize: "0.7rem",
              color: "var(--accent)",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              marginBottom: "1rem",
            }}
          >
            Open to Opportunities
          </div>
          <h2
            style={{
              fontFamily: "Syne, sans-serif",
              fontSize: "clamp(2rem, 6vw, 3.5rem)",
              fontWeight: 800,
              color: "var(--text-primary)",
              letterSpacing: "-0.02em",
              lineHeight: 1.1,
              marginBottom: "1.25rem",
            }}
          >
            Let&apos;s Build Something
            <br />
            <span style={{ color: "var(--accent)" }}>Amazing Together</span>
          </h2>
          <p
            style={{
              fontSize: "1rem",
              color: "var(--text-secondary)",
              maxWidth: "480px",
              margin: "0 auto 2.5rem",
              lineHeight: 1.7,
            }}
          >
            I&apos;m actively looking for UI/UX design internships. If you have an exciting project or opportunity, I&apos;d love to connect.
          </p>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "1rem",
              flexWrap: "wrap",
            }}
          >
            <Link
              href="/contact"
              style={{
                padding: "0.875rem 2rem",
                borderRadius: "10px",
                background: "var(--accent)",
                color: "#fff",
                fontWeight: 600,
                fontSize: "0.9rem",
                textDecoration: "none",
                transition: "all 0.2s ease",
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget).style.background = "var(--accent-hover)";
                (e.currentTarget).style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget).style.background = "var(--accent)";
                (e.currentTarget).style.transform = "translateY(0)";
              }}
            >
              Get In Touch <ArrowRight size={16} />
            </Link>
            <a
              href="mailto:shirshakmondaljspbuet@gmail.com"
              style={{
                padding: "0.875rem 2rem",
                borderRadius: "10px",
                background: "var(--glass)",
                border: "1px solid var(--border)",
                color: "var(--text-primary)",
                fontWeight: 600,
                fontSize: "0.9rem",
                textDecoration: "none",
                transition: "all 0.2s ease",
                fontFamily: "JetBrains Mono, monospace",
                letterSpacing: "-0.01em",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget).style.borderColor = "var(--accent)";
                (e.currentTarget).style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget).style.borderColor = "var(--border)";
                (e.currentTarget).style.transform = "translateY(0)";
              }}
            >
              shirshakmondaljspbuet@gmail.com
            </a>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
