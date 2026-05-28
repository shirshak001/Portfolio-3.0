"use client";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Layers,
  Zap,
  Grid,
  Smartphone,
  Globe,
  Cpu,
  ArrowRight,
  Play,
  Eye,
  X,
  ChevronRight,
} from "lucide-react";

/* ─────────────────────────────────────────────────────────────
   DATA
───────────────────────────────────────────────────────────── */
const CATEGORIES = ["All", "UI Components", "Motion Design", "Design Systems", "UI Concept", "Mobile UI", "Web UI"];

const EXPERIMENTS = [
  {
    id: "glassmorphism-kit",
    title: "Glassmorphism UI Kit",
    desc: "A collection of glass-effect UI components — cards, modals, navbars — built in Figma with full auto-layout and variable support.",
    longDesc: "This UI kit explores the intersection of depth and transparency in modern interfaces. Each component is built with real blur layers, not fake backgrounds, ensuring they adapt correctly over any surface. The kit includes 40+ components organized as a Figma library with variables for light and dark modes.",
    category: "UI Components",
    icon: <Layers size={28} />,
    color: "#6c63ff",
    status: "Completed",
    tags: ["Figma", "Glass", "Components", "Variables"],
    preview: "glassmorphism",
  },
  {
    id: "micro-interactions",
    title: "Micro-Interaction Library",
    desc: "30+ carefully crafted micro-interactions for buttons, toggles, loaders, and form elements using Framer and CSS.",
    longDesc: "Every interaction in this library was designed with a specific emotional intent — delight, confirmation, urgency, or playfulness. Includes spring-based physics animations, gesture responses, and state transitions. All components are production-ready and documented with usage guidelines.",
    category: "Motion Design",
    icon: <Zap size={28} />,
    color: "#ff6b35",
    status: "In Progress",
    tags: ["Framer", "Animation", "Motion", "CSS"],
    preview: "micro",
  },
  {
    id: "dark-mode-system",
    title: "Dark Mode Design System",
    desc: "A complete dark-mode-first design system with semantic color tokens, typography scale, spacing system, and full component library.",
    longDesc: "Built using Figma Variables and Token Studio, this system exports directly to CSS custom properties and Tailwind config. The color system uses perceptual lightness curves (OKLCH) ensuring consistent contrast ratios across light and dark surfaces. 80+ components, 12 typography styles, 8 spacing scales.",
    category: "Design Systems",
    icon: <Grid size={28} />,
    color: "#22c55e",
    status: "Completed",
    tags: ["Figma", "Tokens", "OKLCH", "System"],
    preview: "darkmode",
  },
  {
    id: "iot-dashboard",
    title: "IoT Data Dashboard",
    desc: "A data-dense IoT monitoring dashboard concept inspired by SoilSaathi — real-time charts, device maps, alert systems.",
    longDesc: "Designing for data density without overwhelming the user was the core challenge. The dashboard uses progressive disclosure — summary KPIs at top, drill-down charts on interaction, raw sensor data behind a toggle. Alert states are communicated through color, shape, and motion simultaneously for accessibility.",
    category: "UI Concept",
    icon: <Cpu size={28} />,
    color: "#3b82f6",
    status: "Completed",
    tags: ["IoT", "Dashboard", "Data Viz", "Figma"],
    preview: "iot",
  },
  {
    id: "mobile-onboarding",
    title: "Mobile Onboarding Flow",
    desc: "A 5-screen onboarding experience for a fintech app featuring progressive disclosure and animated illustrations.",
    longDesc: "Research showed that users abandon apps most often during onboarding if they hit permission requests too early. This flow uses a 'value-first' strategy — show the core value proposition in 3 screens before asking for any permissions. Illustration style uses bold, accessible icons over photographic content for faster loading.",
    category: "Mobile UI",
    icon: <Smartphone size={28} />,
    color: "#a855f7",
    status: "Completed",
    tags: ["Mobile", "Onboarding", "Figma", "UX"],
    preview: "mobile",
  },
  {
    id: "saas-landing",
    title: "SaaS Landing Redesign",
    desc: "A complete redesign exploration of a SaaS landing page — better hierarchy, motion, and conversion-focused layout.",
    longDesc: "The original landing page had a 2.1% conversion rate. The redesign focused on three areas: clearer value proposition in the hero (above fold), social proof repositioning (moved from bottom to near CTA), and reducing form fields from 6 to 2. Projected conversion improvement: 3.4–4.1% based on A/B test simulations.",
    category: "Web UI",
    icon: <Globe size={28} />,
    color: "#f59e0b",
    status: "In Progress",
    tags: ["Web", "Landing Page", "Conversion", "CRO"],
    preview: "saas",
  },
];

/* ─────────────────────────────────────────────────────────────
   LIVE PREVIEW COMPONENTS
───────────────────────────────────────────────────────────── */
function GlassmorphismPreview() {
  return (
    <div style={{ position: "relative", width: "100%", height: "100%", background: "linear-gradient(135deg, #1a0533, #0a1628)", display: "flex", alignItems: "center", justifyContent: "center", gap: "1rem", flexWrap: "wrap", padding: "1.5rem" }}>
      {["Card Alpha", "Card Beta", "Card Gamma"].map((label, i) => (
        <motion.div key={label} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.15 }}
          style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.12)", borderRadius: "16px", padding: "1.25rem 1.5rem", backdropFilter: "blur(16px)", minWidth: "110px", textAlign: "center" }}>
          <div style={{ width: "36px", height: "36px", borderRadius: "10px", background: `hsl(${220 + i * 40}, 80%, 60%)`, margin: "0 auto 0.6rem", opacity: 0.9 }} />
          <div style={{ fontSize: "0.72rem", color: "rgba(255,255,255,0.8)", fontFamily: "Syne, sans-serif", fontWeight: 700 }}>{label}</div>
          <div style={{ fontSize: "0.6rem", color: "rgba(255,255,255,0.4)", fontFamily: "JetBrains Mono, monospace", marginTop: "0.25rem" }}>Glass UI</div>
        </motion.div>
      ))}
    </div>
  );
}

function MicroInteractionPreview() {
  const [active, setActive] = useState(false);
  const [liked, setLiked] = useState(false);
  const [toggled, setToggled] = useState(false);
  return (
    <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", gap: "2rem", background: "#0d0d16", flexWrap: "wrap", padding: "1.5rem" }}>
      <motion.button onClick={() => { setActive(true); setTimeout(() => setActive(false), 600); }}
        whileTap={{ scale: 0.94 }} animate={{ background: active ? "#ff6b35" : "#1a1a2e" }}
        style={{ padding: "0.7rem 1.4rem", borderRadius: "12px", border: "1px solid #ff6b3580", color: active ? "#fff" : "#ff6b35", fontFamily: "Syne, sans-serif", fontWeight: 700, fontSize: "0.8rem", transition: "all 0.2s" }}>
        {active ? "Sent!" : "Send"}
      </motion.button>
      <motion.button onClick={() => setLiked(!liked)} whileTap={{ scale: 1.3 }}
        style={{ width: "48px", height: "48px", borderRadius: "50%", border: `1px solid ${liked ? "#ff4466" : "#333"}`, background: liked ? "rgba(255,68,102,0.15)" : "transparent", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.2rem", transition: "all 0.2s" }}>
        {liked ? "♥" : "♡"}
      </motion.button>
      <div onClick={() => setToggled(!toggled)} style={{ width: "52px", height: "28px", borderRadius: "14px", background: toggled ? "#6c63ff" : "#1a1a2e", border: `1px solid ${toggled ? "#6c63ff" : "#333"}`, position: "relative", cursor: "pointer", transition: "all 0.3s" }}>
        <motion.div animate={{ x: toggled ? 26 : 2 }} transition={{ type: "spring", stiffness: 500, damping: 30 }}
          style={{ width: "22px", height: "22px", borderRadius: "11px", background: "#fff", position: "absolute", top: "2px" }} />
      </div>
    </div>
  );
}

function DarkModePreview() {
  const [dm, setDm] = useState(true);
  return (
    <div style={{ width: "100%", height: "100%", background: dm ? "#0a0a0f" : "#f5f5f0", display: "flex", flexDirection: "column", transition: "background 0.4s ease", padding: "1.25rem", gap: "0.75rem" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div style={{ fontFamily: "Syne, sans-serif", fontWeight: 800, fontSize: "0.85rem", color: dm ? "#fff" : "#0a0a0f" }}>Design System</div>
        <button onClick={() => setDm(!dm)} style={{ padding: "0.25rem 0.7rem", borderRadius: "8px", background: dm ? "#1a1a2e" : "#e5e5e0", border: `1px solid ${dm ? "#333" : "#ccc"}`, color: dm ? "#fff" : "#333", fontSize: "0.65rem", fontFamily: "JetBrains Mono, monospace", cursor: "pointer" }}>
          {dm ? "Dark" : "Light"}
        </button>
      </div>
      {["Primary", "Secondary", "Accent"].map((t, i) => (
        <div key={t} style={{ padding: "0.6rem 0.75rem", borderRadius: "8px", background: dm ? ["#1a1a2e", "#12121c", "rgba(108,99,255,0.12)"][i] : ["#efefea", "#e5e5e0", "rgba(108,99,255,0.08)"][i], border: `1px solid ${dm ? "#2a2a3e" : "#ddd"}`, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <span style={{ fontSize: "0.7rem", fontFamily: "JetBrains Mono, monospace", color: dm ? "#aaa" : "#555" }}>{t}</span>
          <div style={{ width: "12px", height: "12px", borderRadius: "3px", background: ["#6c63ff", "#ff6b35", "#22c55e"][i] }} />
        </div>
      ))}
    </div>
  );
}

function IoTPreview() {
  const val = useRef(62);
  const [display, setDisplay] = useState(62);
  useEffect(() => {
    const iv = setInterval(() => { val.current = Math.min(100, Math.max(20, val.current + (Math.random() * 10 - 5))); setDisplay(Math.round(val.current)); }, 1200);
    return () => clearInterval(iv);
  }, []);
  return (
    <div style={{ width: "100%", height: "100%", background: "#060c14", padding: "1.25rem", display: "flex", flexDirection: "column", gap: "0.75rem" }}>
      <div style={{ fontFamily: "JetBrains Mono, monospace", fontSize: "0.6rem", color: "#3b82f6", letterSpacing: "0.15em" }}>LIVE SENSOR</div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "0.5rem" }}>
        {[{ label: "pH", value: "6.8", color: "#22c55e" }, { label: "NPK", value: "74%", color: "#3b82f6" }, { label: "H₂O", value: `${display}%`, color: "#6c63ff" }].map(m => (
          <div key={m.label} style={{ padding: "0.6rem", background: "rgba(255,255,255,0.04)", borderRadius: "8px", border: "1px solid rgba(255,255,255,0.06)", textAlign: "center" }}>
            <div style={{ fontSize: "0.6rem", color: "#555", fontFamily: "JetBrains Mono, monospace", marginBottom: "0.25rem" }}>{m.label}</div>
            <div style={{ fontFamily: "Syne, sans-serif", fontWeight: 800, fontSize: "1rem", color: m.color }}>{m.value}</div>
          </div>
        ))}
      </div>
      <div style={{ flex: 1, background: "rgba(59,130,246,0.04)", borderRadius: "8px", border: "1px solid rgba(59,130,246,0.12)", display: "flex", alignItems: "flex-end", padding: "0.5rem", gap: "3px", overflow: "hidden" }}>
        {Array.from({ length: 20 }).map((_, i) => {
          const h = 20 + Math.sin(i * 0.6 + display * 0.1) * 40 + Math.random() * 10;
          return <div key={i} style={{ flex: 1, height: `${h}%`, borderRadius: "3px 3px 0 0", background: i === 19 ? "#3b82f6" : "rgba(59,130,246,0.25)", transition: "height 1.2s ease" }} />;
        })}
      </div>
    </div>
  );
}

function MobilePreview() {
  const [step, setStep] = useState(0);
  const steps = [
    { title: "Welcome", sub: "Smart credit for everyone", color: "#6c63ff" },
    { title: "Your Score", sub: "See what builds it", color: "#a855f7" },
    { title: "Connect UPI", sub: "We analyze your history", color: "#3b82f6" },
  ];
  useEffect(() => { const iv = setInterval(() => setStep(s => (s + 1) % 3), 2000); return () => clearInterval(iv); }, []);
  const s = steps[step];
  return (
    <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", background: "#0a0a0f" }}>
      <motion.div key={step} initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -30 }}
        style={{ width: "140px", background: "#12121c", borderRadius: "20px", border: "1px solid #1a1a2e", padding: "1.25rem", textAlign: "center" }}>
        <div style={{ width: "48px", height: "48px", borderRadius: "14px", background: `${s.color}20`, border: `1px solid ${s.color}40`, margin: "0 auto 0.75rem", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.4rem" }}>
          {["🎉", "⚡", "🔗"][step]}
        </div>
        <div style={{ fontFamily: "Syne, sans-serif", fontWeight: 800, fontSize: "0.8rem", color: "#fff", marginBottom: "0.25rem" }}>{s.title}</div>
        <div style={{ fontSize: "0.6rem", color: "#666", fontFamily: "JetBrains Mono, monospace", lineHeight: 1.4 }}>{s.sub}</div>
        <div style={{ display: "flex", justifyContent: "center", gap: "4px", marginTop: "1rem" }}>
          {steps.map((_, i) => <div key={i} style={{ width: i === step ? "16px" : "5px", height: "5px", borderRadius: "3px", background: i === step ? s.color : "#2a2a3e", transition: "all 0.3s" }} />)}
        </div>
      </motion.div>
    </div>
  );
}

function SaaSPreview() {
  return (
    <div style={{ width: "100%", height: "100%", background: "#0a0a0f", padding: "1.25rem", display: "flex", flexDirection: "column", gap: "0.75rem" }}>
      <div style={{ textAlign: "center" }}>
        <div style={{ fontFamily: "JetBrains Mono, monospace", fontSize: "0.55rem", color: "#f59e0b", letterSpacing: "0.2em", marginBottom: "0.3rem" }}>REDESIGNED HERO</div>
        <div style={{ fontFamily: "Syne, sans-serif", fontWeight: 800, fontSize: "1rem", color: "#fff", lineHeight: 1.2, marginBottom: "0.4rem" }}>Ship faster.<br /><span style={{ color: "#f59e0b" }}>Convert better.</span></div>
        <div style={{ fontSize: "0.6rem", color: "#666", fontFamily: "JetBrains Mono, monospace", marginBottom: "0.75rem" }}>From 2.1% → 4.1% conversion</div>
        <div style={{ display: "flex", gap: "0.4rem", justifyContent: "center" }}>
          <div style={{ padding: "0.4rem 0.8rem", borderRadius: "8px", background: "#f59e0b", fontSize: "0.65rem", fontWeight: 700, color: "#0a0a0f", fontFamily: "Syne, sans-serif" }}>Get Started</div>
          <div style={{ padding: "0.4rem 0.8rem", borderRadius: "8px", border: "1px solid #333", fontSize: "0.65rem", color: "#aaa", fontFamily: "Syne, sans-serif" }}>Watch Demo</div>
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "center", gap: "0.75rem" }}>
        {["500+ teams", "99.9% uptime", "4.9★ rated"].map(b => (
          <div key={b} style={{ fontSize: "0.55rem", color: "#555", fontFamily: "JetBrains Mono, monospace" }}>{b}</div>
        ))}
      </div>
    </div>
  );
}

const PREVIEWS: Record<string, React.ReactNode> = {
  glassmorphism: <GlassmorphismPreview />,
  micro: <MicroInteractionPreview />,
  darkmode: <DarkModePreview />,
  iot: <IoTPreview />,
  mobile: <MobilePreview />,
  saas: <SaaSPreview />,
};

/* ─────────────────────────────────────────────────────────────
   MAIN PAGE
───────────────────────────────────────────────────────────── */
export default function PlaygroundPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selected, setSelected] = useState<(typeof EXPERIMENTS)[0] | null>(null);

  const filtered = activeCategory === "All" ? EXPERIMENTS : EXPERIMENTS.filter(e => e.category === activeCategory);

  return (
    <div style={{ minHeight: "100vh", background: "var(--bg-primary)", paddingTop: "8rem" }}>

      {/* ── HEADER ── */}
      <section style={{ padding: "0 2rem 3rem", maxWidth: "1280px", margin: "0 auto" }}>
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <div style={{ fontFamily: "JetBrains Mono, monospace", fontSize: "0.68rem", color: "var(--accent)", letterSpacing: "0.22em", textTransform: "uppercase", marginBottom: "0.75rem" }}>
            Creative Lab
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: "1.5rem" }}>
            <h1 style={{ fontFamily: "Syne, sans-serif", fontSize: "clamp(2.8rem, 7vw, 5.5rem)", fontWeight: 800, color: "var(--text-primary)", letterSpacing: "-0.04em", lineHeight: 0.95, margin: 0 }}>
              Play<span style={{ color: "var(--accent)" }}>ground</span>
            </h1>
            <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)", maxWidth: "380px", lineHeight: 1.7, margin: 0 }}>
              A live lab of UI explorations, motion experiments, and design system explorations. Each card has a working interactive preview.
            </p>
          </div>
        </motion.div>
      </section>

      {/* ── STATS BAR ── */}
      <section style={{ padding: "0 2rem 3rem", maxWidth: "1280px", margin: "0 auto" }}>
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }}
          style={{ display: "flex", gap: "2rem", padding: "1.25rem 2rem", background: "var(--bg-secondary)", border: "1px solid var(--border)", borderRadius: "14px", flexWrap: "wrap" }}>
          {[
            { value: `${EXPERIMENTS.length}`, label: "Experiments" },
            { value: `${EXPERIMENTS.filter(e => e.status === "Completed").length}`, label: "Completed" },
            { value: `${EXPERIMENTS.filter(e => e.status === "In Progress").length}`, label: "In Progress" },
            { value: "Live", label: "Interactive Previews" },
          ].map(stat => (
            <div key={stat.label} style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
              <div style={{ fontFamily: "Syne, sans-serif", fontWeight: 800, fontSize: "1.5rem", color: "var(--accent)" }}>{stat.value}</div>
              <div style={{ fontSize: "0.78rem", color: "var(--text-muted)", fontFamily: "JetBrains Mono, monospace" }}>{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </section>

      {/* ── CATEGORY FILTER ── */}
      <section style={{ padding: "0 2rem 2.5rem", maxWidth: "1280px", margin: "0 auto" }}>
        <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
          {CATEGORIES.map(cat => (
            <button key={cat} onClick={() => setActiveCategory(cat)}
              style={{
                padding: "0.45rem 1rem", borderRadius: "9999px", fontFamily: "JetBrains Mono, monospace", fontSize: "0.7rem",
                letterSpacing: "0.05em", border: "1px solid", transition: "all 0.2s ease",
                borderColor: activeCategory === cat ? "var(--accent)" : "var(--border)",
                background: activeCategory === cat ? "rgba(108,99,255,0.12)" : "transparent",
                color: activeCategory === cat ? "var(--accent)" : "var(--text-muted)",
              }}>
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* ── EXPERIMENT GRID ── */}
      <section style={{ padding: "0 2rem 6rem", maxWidth: "1280px", margin: "0 auto" }}>
        <motion.div layout style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1.5rem" }} className="exp-grid">
          <style>{`
            @media (max-width: 1100px) { .exp-grid { grid-template-columns: repeat(2, 1fr) !important; } }
            @media (max-width: 640px)  { .exp-grid { grid-template-columns: 1fr !important; } }
          `}</style>
          <AnimatePresence mode="popLayout">
            {filtered.map((exp, i) => (
              <motion.div key={exp.id} layout initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }}
                transition={{ delay: i * 0.06, duration: 0.35 }}
                onClick={() => setSelected(exp)}
                style={{
                  background: "var(--bg-secondary)", border: "1px solid var(--border)", borderRadius: "20px",
                  overflow: "hidden", cursor: "pointer", transition: "border-color 0.3s, box-shadow 0.3s",
                  display: "flex", flexDirection: "column",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = exp.color + "55";
                  el.style.boxShadow = `0 16px 48px ${exp.color}18`;
                  el.style.transform = "translateY(-4px)";
                  el.style.transition = "all 0.3s ease";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = "var(--border)";
                  el.style.boxShadow = "none";
                  el.style.transform = "translateY(0)";
                }}
              >
                {/* Live Preview Area */}
                <div style={{ height: "200px", overflow: "hidden", position: "relative", borderBottom: "1px solid var(--border)" }}>
                  {PREVIEWS[exp.preview]}
                  {/* Top accent bar */}
                  <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "2px", background: exp.color }} />
                  {/* Status badge */}
                  <div style={{
                    position: "absolute", top: "0.75rem", right: "0.75rem",
                    padding: "0.2rem 0.6rem", borderRadius: "9999px",
                    fontFamily: "JetBrains Mono, monospace", fontSize: "0.56rem", letterSpacing: "0.06em",
                    background: exp.status === "Completed" ? "rgba(34,197,94,0.14)" : "rgba(255,107,53,0.14)",
                    border: `1px solid ${exp.status === "Completed" ? "rgba(34,197,94,0.35)" : "rgba(255,107,53,0.35)"}`,
                    color: exp.status === "Completed" ? "#22c55e" : "#ff6b35",
                  }}>
                    {exp.status === "Completed" ? "● Live" : "◐ Building"}
                  </div>
                  {/* Click to expand hint */}
                  <div style={{
                    position: "absolute", bottom: "0.75rem", left: "0.75rem",
                    display: "flex", alignItems: "center", gap: "0.3rem",
                    padding: "0.2rem 0.55rem", borderRadius: "6px",
                    background: "rgba(0,0,0,0.5)", backdropFilter: "blur(8px)",
                    fontFamily: "JetBrains Mono, monospace", fontSize: "0.56rem",
                    color: "rgba(255,255,255,0.6)",
                  }}>
                    <Eye size={10} /> Interactive
                  </div>
                </div>

                {/* Content */}
                <div style={{ padding: "1.25rem", flex: 1, display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                  <div style={{ fontFamily: "JetBrains Mono, monospace", fontSize: "0.58rem", color: exp.color, letterSpacing: "0.14em", textTransform: "uppercase" }}>
                    {exp.category}
                  </div>
                  <div style={{ fontFamily: "Syne, sans-serif", fontSize: "1rem", fontWeight: 800, color: "var(--text-primary)", letterSpacing: "-0.01em", lineHeight: 1.2 }}>
                    {exp.title}
                  </div>
                  <p style={{ fontSize: "0.78rem", color: "var(--text-secondary)", lineHeight: 1.6, margin: 0 }}>
                    {exp.desc}
                  </p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "0.3rem", marginTop: "0.25rem" }}>
                    {exp.tags.map(tag => (
                      <span key={tag} style={{
                        padding: "0.15rem 0.5rem", borderRadius: "5px",
                        fontFamily: "JetBrains Mono, monospace", fontSize: "0.58rem",
                        background: "var(--bg-tertiary)", border: "1px solid var(--border)", color: "var(--text-muted)",
                      }}>
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div style={{ marginTop: "auto", paddingTop: "0.75rem", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <span style={{ fontSize: "0.72rem", color: exp.color, fontFamily: "JetBrains Mono, monospace", fontWeight: 600 }}>View Details</span>
                    <ChevronRight size={14} style={{ color: exp.color }} />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* ── DETAIL MODAL ── */}
      <AnimatePresence>
        {selected && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
            style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.75)", backdropFilter: "blur(8px)", zIndex: 9000, display: "flex", alignItems: "center", justifyContent: "center", padding: "1.5rem" }}>
            <motion.div initial={{ opacity: 0, scale: 0.9, y: 30 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.9, y: 30 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              onClick={e => e.stopPropagation()}
              style={{
                width: "100%", maxWidth: "780px", maxHeight: "90vh", overflowY: "auto",
                background: "var(--bg-secondary)", border: `1px solid ${selected.color}44`,
                borderRadius: "24px", boxShadow: `0 40px 120px ${selected.color}20`, position: "relative",
              }}>

              {/* Top accent */}
              <div style={{ height: "3px", background: selected.color, borderRadius: "24px 24px 0 0" }} />

              {/* Close */}
              <button onClick={() => setSelected(null)}
                style={{ position: "absolute", top: "1.25rem", right: "1.25rem", width: "36px", height: "36px", borderRadius: "9999px", background: "var(--bg-tertiary)", border: "1px solid var(--border)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--text-muted)", cursor: "pointer", zIndex: 1 }}>
                <X size={15} />
              </button>

              {/* Live preview full */}
              <div style={{ height: "260px", borderBottom: "1px solid var(--border)", overflow: "hidden" }}>
                {PREVIEWS[selected.preview]}
              </div>

              {/* Detail content */}
              <div style={{ padding: "2rem" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1rem", flexWrap: "wrap" }}>
                  <span style={{
                    padding: "0.25rem 0.75rem", borderRadius: "9999px",
                    fontFamily: "JetBrains Mono, monospace", fontSize: "0.62rem",
                    background: `${selected.color}14`, border: `1px solid ${selected.color}35`, color: selected.color,
                  }}>
                    {selected.category}
                  </span>
                  <span style={{
                    padding: "0.25rem 0.75rem", borderRadius: "9999px",
                    fontFamily: "JetBrains Mono, monospace", fontSize: "0.62rem",
                    background: selected.status === "Completed" ? "rgba(34,197,94,0.1)" : "rgba(255,107,53,0.1)",
                    border: `1px solid ${selected.status === "Completed" ? "rgba(34,197,94,0.3)" : "rgba(255,107,53,0.3)"}`,
                    color: selected.status === "Completed" ? "#22c55e" : "#ff6b35",
                  }}>
                    {selected.status}
                  </span>
                </div>

                <h2 style={{ fontFamily: "Syne, sans-serif", fontWeight: 800, fontSize: "clamp(1.5rem, 4vw, 2rem)", color: "var(--text-primary)", letterSpacing: "-0.02em", marginBottom: "1rem", lineHeight: 1.1 }}>
                  {selected.title}
                </h2>

                <p style={{ fontSize: "0.92rem", color: "var(--text-secondary)", lineHeight: 1.8, marginBottom: "1.5rem" }}>
                  {selected.longDesc}
                </p>

                <div style={{ marginBottom: "1.5rem" }}>
                  <div style={{ fontFamily: "JetBrains Mono, monospace", fontSize: "0.62rem", color: "var(--text-muted)", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "0.6rem" }}>
                    Tech & Tools
                  </div>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
                    {selected.tags.map(tag => (
                      <span key={tag} style={{
                        padding: "0.25rem 0.7rem", borderRadius: "7px",
                        fontFamily: "JetBrains Mono, monospace", fontSize: "0.65rem",
                        background: `${selected.color}10`, border: `1px solid ${selected.color}30`, color: selected.color,
                      }}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div style={{ padding: "1.25rem", background: "var(--bg-primary)", borderRadius: "14px", border: "1px solid var(--border)", borderLeft: `3px solid ${selected.color}` }}>
                  <div style={{ fontFamily: "JetBrains Mono, monospace", fontSize: "0.6rem", color: "var(--text-muted)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "0.4rem" }}>
                    Designer's Note
                  </div>
                  <p style={{ fontSize: "0.83rem", color: "var(--text-secondary)", lineHeight: 1.7, margin: 0 }}>
                    {selected.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
