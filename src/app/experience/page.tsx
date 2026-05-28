"use client";
import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Award, Calendar, MapPin, ExternalLink } from "lucide-react";

const TIMELINE = [
  {
    type: "work",
    title: "UI/UX Design Intern",
    org: "Ihsuk Tech",
    period: "May 2025 – Jun 2025",
    location: "India",
    desc: "Designed complete UI/UX flows for company products in Figma. Wireframed and prototyped user-centric designs from research insights to pixel-perfect mockups. Collaborated with the development team on design handoffs ensuring brand compliance.",
    tags: ["Figma", "UX Research", "Prototyping", "Design Systems"],
    color: "#6c63ff",
    icon: <Briefcase size={16} />,
  },
  {
    type: "achievement",
    title: "Finalist — Smart India Hackathon 2026",
    org: "College Internal Round · Top 8 Teams",
    period: "2026",
    location: "India",
    desc: "Developed SoilSathi — an IoT soil health monitoring system providing actionable agricultural insights. Led a multidisciplinary team to build a tech-driven solution for real-world farming challenges.",
    tags: ["IoT", "Team Lead", "Product Design", "Embedded Systems"],
    color: "#ff6b35",
    icon: <Award size={16} />,
  },
  {
    type: "achievement",
    title: "Spectrum Sprint Winner — RoboWeek 2024",
    org: "NIT Hamirpur · Robotics Society",
    period: "2024",
    location: "NIT Hamirpur, India",
    desc: "Secured 1st place in Spectrum Sprint at RoboWeek 2024 as part of Team Synergy. Demonstrated rapid robotics, electronics, and problem-solving skills under strict competition time constraints.",
    tags: ["Robotics", "Electronics", "1st Place", "Competition"],
    color: "#22c55e",
    icon: <Award size={16} />,
  },
  {
    type: "education",
    title: "Integrated B.Tech + M.Tech",
    org: "National Institute of Technology, Hamirpur",
    period: "2023 – 2028",
    location: "Hamirpur, India",
    desc: "Electronics & Communication Engineering. Coursework includes Digital Electronics, Digital Image Processing, Digital Signal Processing, Network Theory, Antenna Design, Embedded Systems, and Circuit Design.",
    tags: ["ECE", "NIT Hamirpur", "Dual Degree", "5 Years"],
    color: "#3b82f6",
    icon: <GraduationCap size={16} />,
  },
];

const SKILLS_CATEGORIES = [
  {
    category: "Embedded / IoT",
    skills: ["ESP32", "NodeMCU", "Arduino IDE", "ESP-NOW", "WiFi", "GPS", "L298N", "Sensors"],
    color: "#22c55e",
  },
  {
    category: "Frontend / Mobile",
    skills: ["React.js", "React Native", "JavaScript", "TypeScript", "Tailwind CSS", "UI/UX Design"],
    color: "#6c63ff",
  },
  {
    category: "AI / APIs",
    skills: ["Vision API", "LLM APIs (OpenAI/Gemini)", "ML Concepts", "REST API Integration"],
    color: "#ff6b35",
  },
  {
    category: "Programming",
    skills: ["C", "C++", "Python", "JavaScript", "TypeScript"],
    color: "#3b82f6",
  },
  {
    category: "Design Tools",
    skills: ["Figma", "Adobe Illustrator", "Adobe Photoshop"],
    color: "#f24e1e",
  },
  {
    category: "EDA / CAD",
    skills: ["KiCad", "Proteus", "SolidWorks"],
    color: "#a855f7",
  },
];

export default function ExperiencePage() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "var(--bg-primary)",
        paddingTop: "8rem",
      }}
    >
      {/* ─── HEADER ─── */}
      <section style={{ padding: "0 2rem 4rem", maxWidth: "1280px", margin: "0 auto" }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
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
            Career Journey
          </div>
          <h1
            style={{
              fontFamily: "Syne, sans-serif",
              fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
              fontWeight: 800,
              color: "var(--text-primary)",
              letterSpacing: "-0.03em",
              lineHeight: 1.05,
              marginBottom: "1.25rem",
            }}
          >
            Experience &
            <br />
            <span style={{ color: "var(--accent)" }}>Achievements</span>
          </h1>
          <p
            style={{
              fontSize: "1rem",
              color: "var(--text-secondary)",
              maxWidth: "520px",
              lineHeight: 1.7,
            }}
          >
            From competitive robotics to fintech apps — my journey spans hardware, software, and design.
          </p>
        </motion.div>
      </section>

      {/* ─── TIMELINE ─── */}
      <section style={{ padding: "0 2rem 6rem", maxWidth: "1280px", margin: "0 auto" }}>
        <div style={{ position: "relative" }}>
          {/* Vertical line */}
          <div
            style={{
              position: "absolute",
              left: "calc(50% - 1px)",
              top: 0,
              bottom: 0,
              width: "1px",
              background: "var(--border)",
            }}
            className="timeline-line"
          />
          <style>{`@media (max-width: 768px) { .timeline-line { left: 16px !important; } .timeline-item-left, .timeline-item-right { padding-left: 3rem !important; padding-right: 0 !important; text-align: left !important; } .timeline-dot { left: 8px !important; transform: none !important; } }`}</style>

          {TIMELINE.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 80px 1fr",
                gap: "0",
                marginBottom: "3rem",
                position: "relative",
              }}
              className="timeline-row"
            >
              <style>{`@media (max-width: 768px) { .timeline-row { display: block !important; } }`}</style>

              {/* Left side */}
              {i % 2 === 0 ? (
                <div
                  style={{ paddingRight: "2.5rem", textAlign: "right" }}
                  className="timeline-item-left"
                >
                  <TimelineCard item={item} />
                </div>
              ) : (
                <div />
              )}

              {/* Center dot */}
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  justifyContent: "center",
                  paddingTop: "1.5rem",
                }}
              >
                <div
                  className="timeline-dot"
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "12px",
                    background: `${item.color}18`,
                    border: `2px solid ${item.color}`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: item.color,
                    flexShrink: 0,
                    zIndex: 1,
                    position: "relative",
                  }}
                >
                  {item.icon}
                </div>
              </div>

              {/* Right side */}
              {i % 2 === 1 ? (
                <div
                  style={{ paddingLeft: "2.5rem" }}
                  className="timeline-item-right"
                >
                  <TimelineCard item={item} />
                </div>
              ) : (
                <div />
              )}
            </motion.div>
          ))}
        </div>
      </section>

      {/* ─── SKILLS CATEGORIES ─── */}
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
              Technical Stack
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
              Full Skill Set
            </h2>
          </motion.div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "1.5rem",
            }}
            className="skills-cat-grid"
          >
            <style>{`
              @media (max-width: 1024px) { .skills-cat-grid { grid-template-columns: repeat(2, 1fr) !important; } }
              @media (max-width: 640px) { .skills-cat-grid { grid-template-columns: 1fr !important; } }
            `}</style>
            {SKILLS_CATEGORIES.map((cat, i) => (
              <motion.div
                key={cat.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                style={{
                  padding: "1.5rem",
                  background: "var(--bg-primary)",
                  border: "1px solid var(--border)",
                  borderRadius: "16px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    marginBottom: "1rem",
                  }}
                >
                  <div
                    style={{
                      width: "8px",
                      height: "8px",
                      borderRadius: "50%",
                      background: cat.color,
                      boxShadow: `0 0 6px ${cat.color}`,
                    }}
                  />
                  <div
                    style={{
                      fontFamily: "Syne, sans-serif",
                      fontSize: "0.85rem",
                      fontWeight: 700,
                      color: "var(--text-primary)",
                    }}
                  >
                    {cat.category}
                  </div>
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      style={{
                        padding: "0.25rem 0.6rem",
                        borderRadius: "6px",
                        fontFamily: "JetBrains Mono, monospace",
                        fontSize: "0.68rem",
                        background: `${cat.color}12`,
                        border: `1px solid ${cat.color}30`,
                        color: cat.color,
                        letterSpacing: "0.02em",
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

function TimelineCard({
  item,
}: {
  item: (typeof TIMELINE)[0];
}) {
  return (
    <div
      style={{
        background: "var(--bg-secondary)",
        border: "1px solid var(--border)",
        borderRadius: "16px",
        padding: "1.5rem",
        transition: "border-color 0.2s ease",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.borderColor = item.color + "66";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
      }}
    >
      <div
        style={{
          display: "flex",
          gap: "0.4rem",
          marginBottom: "0.75rem",
          flexWrap: "wrap",
          justifyContent: "flex-start",
        }}
      >
        <span
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.3rem",
            fontFamily: "JetBrains Mono, monospace",
            fontSize: "0.62rem",
            color: "var(--text-muted)",
          }}
        >
          <Calendar size={10} /> {item.period}
        </span>
        <span
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.3rem",
            fontFamily: "JetBrains Mono, monospace",
            fontSize: "0.62rem",
            color: "var(--text-muted)",
          }}
        >
          <MapPin size={10} /> {item.location}
        </span>
      </div>
      <div
        style={{
          fontFamily: "Syne, sans-serif",
          fontSize: "1rem",
          fontWeight: 700,
          color: "var(--text-primary)",
          marginBottom: "0.25rem",
          lineHeight: 1.3,
        }}
      >
        {item.title}
      </div>
      <div
        style={{
          fontSize: "0.78rem",
          color: item.color,
          fontWeight: 600,
          marginBottom: "0.75rem",
          fontFamily: "JetBrains Mono, monospace",
        }}
      >
        {item.org}
      </div>
      <p
        style={{
          fontSize: "0.82rem",
          color: "var(--text-secondary)",
          lineHeight: 1.6,
          marginBottom: "1rem",
        }}
      >
        {item.desc}
      </p>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "0.35rem", justifyContent: "flex-start" }}>
        {item.tags.map((tag) => (
          <span
            key={tag}
            style={{
              padding: "0.2rem 0.55rem",
              borderRadius: "9999px",
              fontFamily: "JetBrains Mono, monospace",
              fontSize: "0.6rem",
              background: `${item.color}12`,
              border: `1px solid ${item.color}30`,
              color: item.color,
            }}
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
