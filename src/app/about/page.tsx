"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  PenLine,
  Code2,
  Cpu,
  Brain,
  Layers,
  Globe,
  Accessibility,
  Smartphone,
  PenTool,
  Palette,
} from "lucide-react";

const SKILLS = [
  { label: "UI Design", level: 90 },
  { label: "UX Research", level: 80 },
  { label: "Wireframing & Prototyping", level: 88 },
  { label: "Figma", level: 92 },
  { label: "React.js / React Native", level: 85 },
  { label: "Embedded Systems / IoT", level: 82 },
  { label: "JavaScript / TypeScript", level: 80 },
  { label: "Motion Design", level: 70 },
];

const TOOLS = [
  { name: "Figma", icon: <PenLine size={24} />, color: "#F24E1E" },
  { name: "Adobe PS", icon: <Palette size={24} />, color: "#31A8FF" },
  { name: "Illustrator", icon: <PenTool size={24} />, color: "#FF9A00" },
  { name: "React", icon: <Code2 size={24} />, color: "#61DAFB" },
  { name: "ESP32", icon: <Cpu size={24} />, color: "#E7352B" },
  { name: "Webflow", icon: <Globe size={24} />, color: "#4353FF" },
  { name: "Framer", icon: <Layers size={24} />, color: "#0055FF" },
  { name: "KiCad", icon: <Accessibility size={24} />, color: "#314CB0" },
];

const DIFFERENTIATORS = [
  {
    icon: <Brain size={20} />,
    title: "User Psychology",
    desc: "Deep understanding of mental models, cognitive load, and user behavior patterns.",
  },
  {
    icon: <Cpu size={20} />,
    title: "Hardware Thinking",
    desc: "Unique IoT background gives me an edge when designing for embedded and hardware products.",
  },
  {
    icon: <Code2 size={20} />,
    title: "Dev-Ready Designs",
    desc: "I bridge design and code — my Figma files are clean, componentized, and developer-friendly.",
  },
  {
    icon: <Layers size={20} />,
    title: "Systems Thinking",
    desc: "I design scalable component systems, not just one-off screens.",
  },
  {
    icon: <Smartphone size={20} />,
    title: "Mobile-First",
    desc: "Every interface I design starts from mobile and scales up — not the other way.",
  },
  {
    icon: <Accessibility size={20} />,
    title: "Accessibility Focus",
    desc: "Inclusive design is not an afterthought — it's built into my process from day one.",
  },
];

export default function AboutPage() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "var(--bg-primary)",
        paddingTop: "8rem",
      }}
    >
      {/* ─── HERO ─── */}
      <section style={{ padding: "0 2rem 6rem", maxWidth: "1280px", margin: "0 auto" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "5rem",
            alignItems: "center",
          }}
          className="about-hero-grid"
        >
          <style>{`@media (max-width: 768px) { .about-hero-grid { grid-template-columns: 1fr !important; gap: 2rem !important; } }`}</style>

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
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
              About Me
            </div>
            <h1
              style={{
                fontFamily: "Syne, sans-serif",
                fontSize: "clamp(2.5rem, 6vw, 4rem)",
                fontWeight: 800,
                color: "var(--text-primary)",
                letterSpacing: "-0.03em",
                lineHeight: 1.05,
                marginBottom: "1.5rem",
              }}
            >
              I design for
              <br />
              <span style={{ color: "var(--accent)" }}>humans first,</span>
              <br />
              screens second.
            </h1>
            <p
              style={{
                fontSize: "1rem",
                color: "var(--text-secondary)",
                lineHeight: 1.8,
                marginBottom: "1.25rem",
              }}
            >
              I&apos;m Shirshak Mondal, an Integrated B.Tech + M.Tech student in Electronics &
              Communication Engineering at{" "}
              <strong style={{ color: "var(--text-primary)" }}>NIT Hamirpur</strong>. My
              intersection of hardware engineering and design gives me a uniquely holistic
              perspective on building products.
            </p>
            <p
              style={{
                fontSize: "1rem",
                color: "var(--text-secondary)",
                lineHeight: 1.8,
                marginBottom: "2rem",
              }}
            >
              At <strong style={{ color: "var(--text-primary)" }}>Ihsuk Tech</strong>, I
              designed UI/UX flows that improved usability across their product suite. From
              wireframes to pixel-perfect Figma prototypes, I ensure every design decision
              is rooted in research and user empathy.
            </p>
            <blockquote
              style={{
                borderLeft: "3px solid var(--accent)",
                paddingLeft: "1.25rem",
                fontStyle: "italic",
                color: "var(--text-secondary)",
                fontSize: "1rem",
                lineHeight: 1.7,
              }}
            >
              &ldquo;I believe great UX feels invisible. When a user completes a task
              without thinking about the interface, the design has succeeded.&rdquo;
            </blockquote>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            style={{ position: "relative" }}
          >
            <div
              style={{
                borderRadius: "20px",
                overflow: "hidden",
                border: "1px solid var(--border)",
                aspectRatio: "4/3",
                position: "relative",
              }}
            >
              <Image
                src="/workspace.png"
                alt="Shirshak's design workspace"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ objectFit: "cover" }}
              />
            </div>
            {/* Floating badge */}
            <div
              style={{
                position: "absolute",
                bottom: "-1.5rem",
                left: "-1.5rem",
                background: "var(--bg-secondary)",
                border: "1px solid var(--border)",
                borderRadius: "14px",
                padding: "1rem 1.25rem",
                backdropFilter: "blur(20px)",
                boxShadow: "var(--shadow-md)",
              }}
            >
              <div
                style={{
                  fontFamily: "JetBrains Mono, monospace",
                  fontSize: "0.6rem",
                  color: "var(--text-muted)",
                  letterSpacing: "0.1em",
                  marginBottom: "0.25rem",
                  textTransform: "uppercase",
                }}
              >
                Currently at
              </div>
              <div
                style={{
                  fontFamily: "Syne, sans-serif",
                  fontSize: "0.9rem",
                  fontWeight: 700,
                  color: "var(--text-primary)",
                }}
              >
                NIT Hamirpur
              </div>
              <div
                style={{
                  fontSize: "0.75rem",
                  color: "var(--text-muted)",
                  marginTop: "0.2rem",
                }}
              >
                B.Tech + M.Tech ECE · 2023–2028
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── WHAT MAKES ME DIFFERENT ─── */}
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
            style={{ marginBottom: "3rem", textAlign: "center" }}
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
              Differentiators
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
              What Makes Me Different
            </h2>
          </motion.div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "1.5rem",
            }}
            className="diff-grid"
          >
            <style>{`
              @media (max-width: 1024px) { .diff-grid { grid-template-columns: repeat(2, 1fr) !important; } }
              @media (max-width: 640px) { .diff-grid { grid-template-columns: 1fr !important; } }
            `}</style>
            {DIFFERENTIATORS.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                style={{
                  padding: "1.75rem",
                  background: "var(--bg-primary)",
                  border: "1px solid var(--border)",
                  borderRadius: "16px",
                  transition: "border-color 0.2s ease, transform 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "var(--accent)";
                  (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
                  (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                }}
              >
                <div
                  style={{
                    width: "44px",
                    height: "44px",
                    borderRadius: "12px",
                    background: "rgba(108, 99, 255, 0.1)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "var(--accent)",
                    marginBottom: "1rem",
                  }}
                >
                  {item.icon}
                </div>
                <div
                  style={{
                    fontFamily: "Syne, sans-serif",
                    fontSize: "1rem",
                    fontWeight: 700,
                    color: "var(--text-primary)",
                    marginBottom: "0.5rem",
                  }}
                >
                  {item.title}
                </div>
                <div
                  style={{
                    fontSize: "0.83rem",
                    color: "var(--text-secondary)",
                    lineHeight: 1.6,
                  }}
                >
                  {item.desc}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SKILLS ─── */}
      <section style={{ padding: "6rem 2rem" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
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
              Proficiency
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
              Skills & Expertise
            </h2>
          </motion.div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "3rem",
            }}
            className="skills-grid-2"
          >
            <style>{`@media (max-width: 768px) { .skills-grid-2 { grid-template-columns: 1fr !important; } }`}</style>
            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              {SKILLS.slice(0, 4).map((skill, i) => (
                <SkillBar key={skill.label} skill={skill} delay={i * 0.08} />
              ))}
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              {SKILLS.slice(4).map((skill, i) => (
                <SkillBar key={skill.label} skill={skill} delay={i * 0.08 + 0.2} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── TOOLS ─── */}
      <section
        style={{
          padding: "6rem 2rem",
          background: "var(--bg-secondary)",
          borderTop: "1px solid var(--border)",
        }}
      >
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ marginBottom: "3rem", textAlign: "center" }}
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
              Stack
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
              Tools I Use
            </h2>
          </motion.div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: "1rem",
            }}
            className="tools-grid"
          >
            <style>{`
              @media (max-width: 1024px) { .tools-grid { grid-template-columns: repeat(4, 1fr) !important; } }
              @media (max-width: 640px) { .tools-grid { grid-template-columns: repeat(2, 1fr) !important; } }
            `}</style>
            {TOOLS.map((tool, i) => (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                style={{
                  padding: "1.5rem",
                  background: "var(--bg-primary)",
                  border: "1px solid var(--border)",
                  borderRadius: "16px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "0.75rem",
                  cursor: "none",
                  transition: "border-color 0.2s ease, transform 0.2s ease, box-shadow 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = tool.color + "88";
                  (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)";
                  (e.currentTarget as HTMLElement).style.boxShadow = `0 8px 24px ${tool.color}22`;
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
                  (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                  (e.currentTarget as HTMLElement).style.boxShadow = "none";
                }}
              >
                <div style={{ color: tool.color }}>{tool.icon}</div>
                <div
                  style={{
                    fontSize: "0.78rem",
                    fontWeight: 600,
                    color: "var(--text-secondary)",
                    fontFamily: "JetBrains Mono, monospace",
                    letterSpacing: "0.03em",
                  }}
                >
                  {tool.name}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

function SkillBar({ skill, delay }: { skill: { label: string; level: number }; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "0.5rem",
        }}
      >
        <span
          style={{
            fontSize: "0.85rem",
            fontWeight: 500,
            color: "var(--text-primary)",
          }}
        >
          {skill.label}
        </span>
        <span
          style={{
            fontFamily: "JetBrains Mono, monospace",
            fontSize: "0.72rem",
            color: "var(--accent)",
          }}
        >
          {skill.level}%
        </span>
      </div>
      <div
        style={{
          height: "3px",
          background: "var(--border)",
          borderRadius: "2px",
          overflow: "hidden",
        }}
      >
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay, ease: [0.22, 1, 0.36, 1] }}
          style={{
            height: "100%",
            background: "var(--accent)",
            borderRadius: "2px",
            boxShadow: "0 0 6px var(--accent)",
          }}
        />
      </div>
    </motion.div>
  );
}
