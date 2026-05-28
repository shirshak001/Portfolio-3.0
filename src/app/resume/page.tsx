"use client";
import { motion } from "framer-motion";
import { Download, Code2, Cpu, Palette, Globe, Award, BookOpen, GraduationCap } from "lucide-react";

const EDUCATION = [
  {
    degree: "Integrated B.Tech + M.Tech",
    major: "Electronics & Communication Engineering",
    school: "National Institute of Technology, Hamirpur",
    period: "2023 – 2028",
    gpa: "Active",
    courses: [
      "Digital Electronics",
      "Digital Image Processing",
      "Digital Signal Processing",
      "Network Theory",
      "Antenna Design",
      "Embedded Systems",
      "Circuit Design",
    ],
  },
];

const SKILLS_DATA = [
  { category: "Design", icon: <Palette size={16} />, skills: ["UI Design", "UX Research", "Wireframing", "Prototyping", "Figma", "Adobe Illustrator", "Adobe Photoshop"], color: "#6c63ff", level: 90 },
  { category: "Frontend", icon: <Code2 size={16} />, skills: ["React.js", "React Native", "TypeScript", "JavaScript", "Tailwind CSS"], color: "#3b82f6", level: 85 },
  { category: "Embedded / IoT", icon: <Cpu size={16} />, skills: ["ESP32", "Arduino IDE", "NodeMCU", "ESP-NOW", "GPS", "IoT Sensors"], color: "#22c55e", level: 82 },
  { category: "Web & APIs", icon: <Globe size={16} />, skills: ["REST APIs", "LLM APIs", "Vision API", "Git", "GitHub"], color: "#ff6b35", level: 78 },
];

const ACHIEVEMENTS = [
  {
    title: "Spectrum Sprint Winner",
    org: "RoboWeek 2024 — NIT Hamirpur",
    year: "2024",
    color: "#22c55e",
    icon: <Award size={16} />,
  },
  {
    title: "Smart India Hackathon Finalist",
    org: "Top 8 Teams — SoilSathi",
    year: "2026",
    color: "#ff6b35",
    icon: <Award size={16} />,
  },
];

const LANGUAGES = [
  { lang: "English", level: "Fluent" },
  { lang: "Hindi", level: "Fluent" },
  { lang: "Bengali", level: "Native" },
];

export default function ResumePage() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "var(--bg-primary)",
        paddingTop: "8rem",
      }}
    >
      {/* Header */}
      <section style={{ padding: "0 2rem 4rem", maxWidth: "1100px", margin: "0 auto" }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            flexWrap: "wrap",
            gap: "2rem",
          }}
        >
          <div>
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
              Curriculum Vitae
            </div>
            <h1
              style={{
                fontFamily: "Syne, sans-serif",
                fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
                fontWeight: 800,
                color: "var(--text-primary)",
                letterSpacing: "-0.03em",
                lineHeight: 1.05,
                marginBottom: "0.75rem",
              }}
            >
              Interactive
              <br />
              <span style={{ color: "var(--accent)" }}>Resume</span>
            </h1>
            <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)", lineHeight: 1.6 }}>
              Shirshak Mondal · UI/UX Designer & Full-Stack Developer · NIT Hamirpur
            </p>
          </div>

          <a
            href="https://drive.google.com/file/d/1rV2bR7PGtA0MTj5cRDZZc8DwLr5JTVwU/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              padding: "0.875rem 1.75rem",
              borderRadius: "10px",
              background: "var(--accent)",
              color: "#fff",
              fontWeight: 600,
              fontSize: "0.85rem",
              textDecoration: "none",
              transition: "all 0.2s ease",
              alignSelf: "flex-start",
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
            <Download size={16} /> Download PDF
          </a>
        </motion.div>
      </section>

      {/* Resume Content */}
      <section style={{ padding: "0 2rem 6rem", maxWidth: "1100px", margin: "0 auto" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1.5fr",
            gap: "3rem",
            alignItems: "start",
          }}
          className="resume-grid"
        >
          <style>{`@media (max-width: 768px) { .resume-grid { grid-template-columns: 1fr !important; } }`}</style>

          {/* Left Column */}
          <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>

            {/* Profile */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              style={{
                background: "var(--bg-secondary)",
                border: "1px solid var(--border)",
                borderRadius: "16px",
                padding: "1.5rem",
              }}
            >
              <div
                style={{
                  width: "64px",
                  height: "64px",
                  borderRadius: "16px",
                  background: "rgba(108, 99, 255, 0.12)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontFamily: "Syne, sans-serif",
                  fontWeight: 800,
                  fontSize: "1.5rem",
                  color: "var(--accent)",
                  marginBottom: "1rem",
                }}
              >
                SM
              </div>
              <div
                style={{
                  fontFamily: "Syne, sans-serif",
                  fontSize: "1.2rem",
                  fontWeight: 800,
                  color: "var(--text-primary)",
                  marginBottom: "0.25rem",
                }}
              >
                Shirshak Mondal
              </div>
              <div
                style={{
                  fontSize: "0.8rem",
                  color: "var(--accent)",
                  fontFamily: "JetBrains Mono, monospace",
                  marginBottom: "1rem",
                }}
              >
                UI/UX Designer & Developer
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}>
                {[
                  { label: "shirshakmondaljspbuet@gmail.com" },
                  { label: "+91 86173 00719" },
                  { label: "NIT Hamirpur, India" },
                ].map((item) => (
                  <span
                    key={item.label}
                    style={{
                      fontSize: "0.75rem",
                      color: "var(--text-muted)",
                      fontFamily: "JetBrains Mono, monospace",
                    }}
                  >
                    {item.label}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Education */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              style={{
                background: "var(--bg-secondary)",
                border: "1px solid var(--border)",
                borderRadius: "16px",
                padding: "1.5rem",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  marginBottom: "1.25rem",
                }}
              >
                <GraduationCap size={16} style={{ color: "var(--accent)" }} />
                <div
                  style={{
                    fontFamily: "Syne, sans-serif",
                    fontSize: "0.9rem",
                    fontWeight: 700,
                    color: "var(--text-primary)",
                    letterSpacing: "0.01em",
                  }}
                >
                  Education
                </div>
              </div>
              {EDUCATION.map((edu) => (
                <div key={edu.school}>
                  <div
                    style={{
                      fontFamily: "Syne, sans-serif",
                      fontSize: "0.85rem",
                      fontWeight: 700,
                      color: "var(--text-primary)",
                      marginBottom: "0.2rem",
                    }}
                  >
                    {edu.degree}
                  </div>
                  <div
                    style={{
                      fontSize: "0.75rem",
                      color: "var(--accent)",
                      fontFamily: "JetBrains Mono, monospace",
                      marginBottom: "0.25rem",
                    }}
                  >
                    {edu.major}
                  </div>
                  <div
                    style={{
                      fontSize: "0.75rem",
                      color: "var(--text-secondary)",
                      marginBottom: "0.2rem",
                    }}
                  >
                    {edu.school}
                  </div>
                  <div
                    style={{
                      fontSize: "0.72rem",
                      color: "var(--text-muted)",
                      fontFamily: "JetBrains Mono, monospace",
                      marginBottom: "1rem",
                    }}
                  >
                    {edu.period}
                  </div>
                  <div
                    style={{
                      fontFamily: "JetBrains Mono, monospace",
                      fontSize: "0.62rem",
                      color: "var(--text-muted)",
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      marginBottom: "0.5rem",
                    }}
                  >
                    Coursework
                  </div>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "0.35rem" }}>
                    {edu.courses.map((c) => (
                      <span
                        key={c}
                        style={{
                          padding: "0.2rem 0.5rem",
                          borderRadius: "6px",
                          background: "var(--bg-tertiary)",
                          border: "1px solid var(--border)",
                          fontSize: "0.62rem",
                          color: "var(--text-muted)",
                          fontFamily: "JetBrains Mono, monospace",
                        }}
                      >
                        {c}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Achievements */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              style={{
                background: "var(--bg-secondary)",
                border: "1px solid var(--border)",
                borderRadius: "16px",
                padding: "1.5rem",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  marginBottom: "1.25rem",
                }}
              >
                <Award size={16} style={{ color: "var(--accent)" }} />
                <div
                  style={{
                    fontFamily: "Syne, sans-serif",
                    fontSize: "0.9rem",
                    fontWeight: 700,
                    color: "var(--text-primary)",
                  }}
                >
                  Achievements
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                {ACHIEVEMENTS.map((a) => (
                  <div
                    key={a.title}
                    style={{
                      paddingLeft: "1rem",
                      borderLeft: `2px solid ${a.color}`,
                    }}
                  >
                    <div
                      style={{
                        fontFamily: "Syne, sans-serif",
                        fontSize: "0.82rem",
                        fontWeight: 700,
                        color: "var(--text-primary)",
                        marginBottom: "0.2rem",
                      }}
                    >
                      {a.title}
                    </div>
                    <div
                      style={{
                        fontSize: "0.72rem",
                        color: "var(--text-secondary)",
                        marginBottom: "0.15rem",
                      }}
                    >
                      {a.org}
                    </div>
                    <div
                      style={{
                        fontFamily: "JetBrains Mono, monospace",
                        fontSize: "0.62rem",
                        color: "var(--text-muted)",
                      }}
                    >
                      {a.year}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Languages */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              style={{
                background: "var(--bg-secondary)",
                border: "1px solid var(--border)",
                borderRadius: "16px",
                padding: "1.5rem",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  marginBottom: "1.25rem",
                }}
              >
                <BookOpen size={16} style={{ color: "var(--accent)" }} />
                <div
                  style={{
                    fontFamily: "Syne, sans-serif",
                    fontSize: "0.9rem",
                    fontWeight: 700,
                    color: "var(--text-primary)",
                  }}
                >
                  Languages
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                {LANGUAGES.map((l) => (
                  <div
                    key={l.lang}
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "0.83rem",
                        color: "var(--text-primary)",
                        fontWeight: 500,
                      }}
                    >
                      {l.lang}
                    </span>
                    <span
                      style={{
                        fontFamily: "JetBrains Mono, monospace",
                        fontSize: "0.68rem",
                        color: "var(--accent)",
                        padding: "0.15rem 0.5rem",
                        borderRadius: "9999px",
                        background: "rgba(108, 99, 255, 0.08)",
                        border: "1px solid rgba(108, 99, 255, 0.2)",
                      }}
                    >
                      {l.level}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Column */}
          <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>

            {/* Summary */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              style={{
                background: "var(--bg-secondary)",
                border: "1px solid var(--border)",
                borderLeft: "3px solid var(--accent)",
                borderRadius: "16px",
                padding: "1.5rem",
              }}
            >
              <div
                style={{
                  fontFamily: "Syne, sans-serif",
                  fontSize: "0.9rem",
                  fontWeight: 700,
                  color: "var(--text-primary)",
                  marginBottom: "0.75rem",
                }}
              >
                Summary
              </div>
              <p
                style={{
                  fontSize: "0.83rem",
                  color: "var(--text-secondary)",
                  lineHeight: 1.7,
                }}
              >
                Motivated AI, IoT & Full-Stack Developer skilled in embedded systems, sensor-based
                hardware, and modern web/mobile frameworks. Known for rapid prototyping and
                translating complex technical ideas into practical, real-world solutions. With a
                growing focus on UI/UX design, I bridge the gap between engineering precision and
                user-centered design.
              </p>
            </motion.div>

            {/* Experience */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              style={{
                background: "var(--bg-secondary)",
                border: "1px solid var(--border)",
                borderRadius: "16px",
                padding: "1.5rem",
              }}
            >
              <div
                style={{
                  fontFamily: "Syne, sans-serif",
                  fontSize: "0.9rem",
                  fontWeight: 700,
                  color: "var(--text-primary)",
                  marginBottom: "1.25rem",
                }}
              >
                Experience
              </div>
              <div
                style={{
                  borderLeft: "2px solid var(--accent)",
                  paddingLeft: "1.25rem",
                }}
              >
                <div
                  style={{
                    fontFamily: "Syne, sans-serif",
                    fontSize: "0.95rem",
                    fontWeight: 700,
                    color: "var(--text-primary)",
                    marginBottom: "0.2rem",
                  }}
                >
                  UI/UX Design Intern
                </div>
                <div
                  style={{
                    fontSize: "0.8rem",
                    color: "var(--accent)",
                    fontFamily: "JetBrains Mono, monospace",
                    marginBottom: "0.25rem",
                  }}
                >
                  Ihsuk Tech
                </div>
                <div
                  style={{
                    fontSize: "0.72rem",
                    color: "var(--text-muted)",
                    fontFamily: "JetBrains Mono, monospace",
                    marginBottom: "0.875rem",
                  }}
                >
                  May 2025 – Jun 2025 · India
                </div>
                <ul
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.4rem",
                    paddingLeft: "1rem",
                  }}
                >
                  {[
                    "Designed UI/UX flows for company products in Figma, improving usability and visual consistency.",
                    "Wireframed & prototyped user-centric designs from research insights to pixel-perfect mockups.",
                    "Collaborated with developers on design handoffs, ensuring brand compliance and implementation accuracy.",
                  ].map((point) => (
                    <li
                      key={point}
                      style={{
                        fontSize: "0.8rem",
                        color: "var(--text-secondary)",
                        lineHeight: 1.6,
                      }}
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Skills with progress bars */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              style={{
                background: "var(--bg-secondary)",
                border: "1px solid var(--border)",
                borderRadius: "16px",
                padding: "1.5rem",
              }}
            >
              <div
                style={{
                  fontFamily: "Syne, sans-serif",
                  fontSize: "0.9rem",
                  fontWeight: 700,
                  color: "var(--text-primary)",
                  marginBottom: "1.25rem",
                }}
              >
                Technical Proficiency
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                {SKILLS_DATA.map((skill, i) => (
                  <div key={skill.category}>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        marginBottom: "0.4rem",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "0.4rem",
                        }}
                      >
                        <span style={{ color: skill.color }}>{skill.icon}</span>
                        <span
                          style={{
                            fontSize: "0.82rem",
                            fontWeight: 600,
                            color: "var(--text-primary)",
                          }}
                        >
                          {skill.category}
                        </span>
                      </div>
                      <span
                        style={{
                          fontFamily: "JetBrains Mono, monospace",
                          fontSize: "0.7rem",
                          color: skill.color,
                        }}
                      >
                        {skill.level}%
                      </span>
                    </div>
                    <div
                      style={{
                        height: "4px",
                        background: "var(--border)",
                        borderRadius: "2px",
                        overflow: "hidden",
                        marginBottom: "0.6rem",
                      }}
                    >
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                        style={{
                          height: "100%",
                          background: skill.color,
                          borderRadius: "2px",
                        }}
                      />
                    </div>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "0.3rem" }}>
                      {skill.skills.map((s) => (
                        <span
                          key={s}
                          style={{
                            padding: "0.15rem 0.5rem",
                            borderRadius: "5px",
                            fontFamily: "JetBrains Mono, monospace",
                            fontSize: "0.6rem",
                            background: `${skill.color}10`,
                            border: `1px solid ${skill.color}25`,
                            color: skill.color,
                          }}
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
