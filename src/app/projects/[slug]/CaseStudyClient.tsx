"use client";
import { use } from "react";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

const PROJECTS: Record<
  string,
  {
    title: string;
    subtitle: string;
    color: string;
    img: string;
    overview: string;
    problem: string;
    process: string[];
    tech: string[];
    impact: { metric: string; value: string }[];
    tags: string[];
    next: string | null;
  }
> = {
  soilsaathi: {
    title: "SoilSaathi",
    subtitle: "IoT Soil Health Monitoring System",
    color: "#22c55e",
    img: "/soilsaathi.png",
    overview:
      "SoilSaathi is a real-time IoT soil monitoring device that analyzes soil conditions — pH, moisture, NPK levels — and delivers actionable improvement suggestions for farmers. The project was a finalist in Smart India Hackathon 2026.",
    problem:
      "Indian farmers, especially small-scale and subsistence farmers, lack access to affordable soil testing. Traditional lab testing costs money and takes weeks. Poor soil health leads to crop failure, financial loss, and food insecurity. The challenge was to make soil intelligence accessible, affordable, and usable for farmers with varying levels of digital literacy — including the elderly and children.",
    process: [
      "Conducted user research with 12 farming families in rural Himachal Pradesh to understand their pain points.",
      "Mapped user journeys to identify moments of frustration with existing soil testing methods.",
      "Defined design principles: simplicity, accessibility, and offline-first operation.",
      "Wireframed mobile dashboard with large typography, icon-heavy navigation, and color-coded health indicators.",
      "Built low-fidelity prototypes and tested with non-tech-savvy users — iterated 3 times based on feedback.",
      "Designed data visualizations that communicate complex soil chemistry in plain language.",
      "Implemented the IoT hardware layer using ESP32 with soil sensors and GPS module.",
    ],
    tech: ["ESP32", "IoT Sensors", "GPS", "Arduino IDE", "Figma", "Data Analysis", "React Native"],
    impact: [
      { metric: "Users Interviewed", value: "12+" },
      { metric: "Iterations", value: "3" },
      { metric: "SIH Shortlist", value: "Top 8" },
      { metric: "Usability Score", value: "94%" },
    ],
    tags: ["IoT", "Hardware", "Agricultural Tech"],
    next: "credmate",
  },
  credmate: {
    title: "CredMate",
    subtitle: "Alternative Credit Scoring Platform",
    color: "#6c63ff",
    img: "/credmate.png",
    overview:
      "CredMate is a React Native fintech mobile app that generates credit scores for India's unbanked and underbanked population by analyzing alternative financial indicators — UPI transaction history, utility payments, and behavioral data — instead of traditional credit history.",
    problem:
      "Over 190 million Indians are credit-invisible — they have no credit history and therefore cannot access formal loans, even if they are financially responsible. Traditional CIBIL scores require a credit card or loan to build. This creates a catch-22 for first-time borrowers. CredMate breaks this cycle by using alternative data.",
    process: [
      "Researched India's fintech landscape and credit gap — identified the 190M credit-invisible population as the target segment.",
      "Conducted competitor analysis of existing fintech apps (Slice, Jupiter, Navi) to identify UX gaps.",
      "Defined user personas: young graduates, rural entrepreneurs, gig economy workers.",
      "Designed intuitive score visualization — circular progress ring with 750+ target breakdown.",
      "Built onboarding flow that feels trustworthy and transparent about data usage.",
      "Used React Native with TypeScript for the mobile implementation.",
      "Integrated LLM API for personalized credit improvement recommendations.",
    ],
    tech: ["React Native", "TypeScript", "AI/ML APIs", "Figma", "REST APIs", "LLM APIs"],
    impact: [
      { metric: "Target Users", value: "190M+" },
      { metric: "Onboarding Time", value: "-40%" },
      { metric: "Screens Designed", value: "24" },
      { metric: "Prototype Score", value: "4.8/5" },
    ],
    tags: ["Mobile", "Fintech", "React Native"],
    next: "layerforge",
  },
  layerforge: {
    title: "LayerForge",
    subtitle: "3D Printing Service Platform",
    color: "#ff6b35",
    img: "/layerforge.png",
    overview:
      "LayerForge is an end-to-end web platform for on-demand 3D printing. Users can upload 3D model files, receive consultation on material and quality settings, and submit manufacturing requests to partner print labs.",
    problem:
      "Getting a 3D print done requires navigating complex software, understanding material specs, and finding a trusted print shop — all barriers for non-engineers. LayerForge abstracts this complexity into a streamlined marketplace experience.",
    process: [
      "Mapped the existing fragmented 3D printing workflow — identified 8 major friction points.",
      "Designed a 3-step submission flow: Upload, Configure, Submit — reducing cognitive load.",
      "Built React.js frontend with Tailwind CSS for rapid responsive development.",
      "Implemented file upload with STL preview using Three.js.",
      "Designed dashboard for order tracking with real-time status indicators.",
    ],
    tech: ["React.js", "Tailwind CSS", "Three.js", "REST APIs", "Figma"],
    impact: [
      { metric: "Friction Points", value: "8 to 2" },
      { metric: "Submission Steps", value: "3" },
      { metric: "Load Time", value: "1.5s" },
      { metric: "User Rating", value: "4.7/5" },
    ],
    tags: ["Web", "Manufacturing", "React.js"],
    next: "safety-band",
  },
  "safety-band": {
    title: "Women Safety Smart Band",
    subtitle: "P2P Emergency System",
    color: "#3b82f6",
    img: "/safety-band.png",
    overview:
      "A SIM-less wearable safety device that uses ESP-NOW peer-to-peer communication to broadcast emergency alerts and live location to nearby registered devices — even without network or cellular coverage.",
    problem:
      "Emergency alert systems depend on cellular networks. In rural areas, remote locations, or during network outages, these systems fail completely. Women in such situations have no reliable way to call for help. The challenge was to build a safety system that works offline, is wearable, and requires zero technical knowledge to use.",
    process: [
      "Researched existing safety devices — identified dependency on SIM cards and internet as the core failure point.",
      "Designed the hardware architecture using ESP32 with ESP-NOW protocol for SIM-less P2P communication.",
      "Designed companion mobile app UI for device registration, contact management, and alert display.",
      "Prototyped the wearable enclosure using SolidWorks and 3D printed the housing.",
      "Tested range and reliability — achieved 200m stable communication range.",
    ],
    tech: ["ESP32", "ESP-NOW", "GPS", "IoT Sensors", "SolidWorks", "Figma", "KiCad"],
    impact: [
      { metric: "Network Required", value: "None" },
      { metric: "Alert Range", value: "200m" },
      { metric: "Response Time", value: "2s" },
      { metric: "Battery Life", value: "48hrs" },
    ],
    tags: ["IoT", "Hardware", "Safety"],
    next: null,
  },
};

export default function CaseStudyClient({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const project = PROJECTS[slug];
  if (!project) notFound();

  return (
    <div style={{ minHeight: "100vh", background: "var(--bg-primary)", paddingTop: "8rem" }}>
      <style>{`
        .case-back:hover { color: var(--text-primary) !important; }
        .case-next:hover { background: ${project.color}18 !important; border-color: ${project.color}66 !important; }
      `}</style>

      {/* ── BACK ── */}
      <div style={{ padding: "0 2rem", maxWidth: "1100px", margin: "0 auto 2rem" }}>
        <Link href="/projects" className="case-back" style={{
          display: "inline-flex", alignItems: "center", gap: "0.4rem",
          fontSize: "0.82rem", color: "var(--text-muted)", textDecoration: "none",
          transition: "color 0.2s ease",
        }}>
          <ArrowLeft size={14} /> Back to Projects
        </Link>
      </div>

      {/* ── HERO ── */}
      <section style={{ padding: "0 2rem 3rem", maxWidth: "1100px", margin: "0 auto" }}>
        <div style={{
          fontFamily: "JetBrains Mono, monospace", fontSize: "0.7rem",
          color: project.color, letterSpacing: "0.2em",
          textTransform: "uppercase", marginBottom: "0.75rem",
        }}>
          {project.subtitle}
        </div>
        <h1 style={{
          fontFamily: "Syne, sans-serif", fontSize: "clamp(2.5rem, 7vw, 5rem)",
          fontWeight: 800, color: "var(--text-primary)", letterSpacing: "-0.03em",
          lineHeight: 1.05, marginBottom: "1.5rem",
        }}>
          {project.title}
        </h1>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem", marginBottom: "2.5rem" }}>
          {project.tags.map((tag) => (
            <span key={tag} style={{
              padding: "0.25rem 0.75rem", borderRadius: "9999px",
              fontFamily: "JetBrains Mono, monospace", fontSize: "0.65rem",
              background: `${project.color}12`, border: `1px solid ${project.color}35`,
              color: project.color, letterSpacing: "0.06em",
            }}>
              {tag}
            </span>
          ))}
        </div>

        {/* Hero image */}
        <div style={{
          borderRadius: "20px", overflow: "hidden", border: "1px solid var(--border)",
          aspectRatio: "16/7", position: "relative", marginBottom: "0.5rem",
        }}>
          <Image
            src={project.img}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, 1100px"
            style={{ objectFit: "cover" }}
          />
          <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "3px", background: project.color }} />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(10,10,15,0.3) 0%, transparent 60%)" }} />
        </div>
      </section>

      {/* ── CONTENT ── */}
      <section style={{ padding: "0 2rem 6rem", maxWidth: "1100px", margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: "4rem" }} className="case-layout">
          <style>{`@media (max-width: 768px) { .case-layout { grid-template-columns: 1fr !important; gap: 2rem !important; } }`}</style>

          {/* ── SIDEBAR ── */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>

            {/* Tech Stack */}
            <div style={{
              background: "var(--bg-secondary)", border: "1px solid var(--border)",
              borderLeft: `3px solid ${project.color}`,
              borderRadius: "16px", padding: "1.5rem",
            }}>
              <div style={{ fontFamily: "JetBrains Mono, monospace", fontSize: "0.6rem", color: project.color, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "0.75rem" }}>
                Tech Stack
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
                {project.tech.map((t) => (
                  <span key={t} style={{
                    padding: "0.25rem 0.6rem", borderRadius: "6px",
                    fontFamily: "JetBrains Mono, monospace", fontSize: "0.65rem",
                    background: `${project.color}10`, border: `1px solid ${project.color}30`,
                    color: project.color,
                  }}>
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Impact */}
            <div style={{
              background: "var(--bg-secondary)", border: "1px solid var(--border)",
              borderLeft: `3px solid ${project.color}`,
              borderRadius: "16px", padding: "1.5rem",
            }}>
              <div style={{ fontFamily: "JetBrains Mono, monospace", fontSize: "0.6rem", color: project.color, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "0.75rem" }}>
                Impact
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                {project.impact.map((item) => (
                  <div key={item.metric}>
                    <div style={{
                      fontFamily: "Syne, sans-serif", fontSize: "1.75rem",
                      fontWeight: 800, color: project.color, lineHeight: 1, marginBottom: "0.2rem",
                    }}>
                      {item.value}
                    </div>
                    <div style={{
                      fontSize: "0.72rem", color: "var(--text-muted)",
                      fontFamily: "JetBrains Mono, monospace", letterSpacing: "0.04em",
                    }}>
                      {item.metric}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ── MAIN CONTENT ── */}
          <div style={{ display: "flex", flexDirection: "column", gap: "3rem" }}>

            <CaseSection label="Overview" title="Project Overview" content={project.overview} color={project.color} />
            <CaseSection label="Problem" title="The Problem" content={project.problem} color={project.color} />

            {/* Process */}
            <div>
              <div style={{
                fontFamily: "JetBrains Mono, monospace", fontSize: "0.65rem",
                color: project.color, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "0.5rem",
              }}>
                UX Process
              </div>
              <h3 style={{
                fontFamily: "Syne, sans-serif", fontSize: "1.35rem", fontWeight: 800,
                color: "var(--text-primary)", marginBottom: "1.5rem", letterSpacing: "-0.01em",
              }}>
                My Approach
              </h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                {project.process.map((step, i) => (
                  <div key={i} style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                    <div style={{
                      width: "30px", height: "30px", borderRadius: "8px",
                      background: `${project.color}15`, border: `1px solid ${project.color}35`,
                      display: "flex", alignItems: "center", justifyContent: "center",
                      fontFamily: "JetBrains Mono, monospace", fontSize: "0.62rem",
                      color: project.color, flexShrink: 0, marginTop: "2px",
                    }}>
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)", lineHeight: 1.75, margin: 0 }}>
                      {step}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ── NEXT PROJECT ── */}
        {project.next && (
          <div style={{
            marginTop: "5rem", paddingTop: "2.5rem",
            borderTop: "1px solid var(--border)", display: "flex", justifyContent: "flex-end",
          }}>
            <Link
              href={`/projects/${project.next}`}
              className="case-next"
              style={{
                display: "inline-flex", alignItems: "center", gap: "0.5rem",
                padding: "0.75rem 1.5rem", borderRadius: "12px",
                border: `1px solid ${project.color}35`, background: `${project.color}08`,
                fontSize: "0.85rem", fontWeight: 700, color: project.color,
                textDecoration: "none", transition: "all 0.25s ease",
              }}
            >
              Next Project <ArrowRight size={15} />
            </Link>
          </div>
        )}
      </section>
    </div>
  );
}

function CaseSection({ label, title, content, color }: { label: string; title: string; content: string; color: string }) {
  return (
    <div>
      <div style={{
        fontFamily: "JetBrains Mono, monospace", fontSize: "0.65rem",
        color, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "0.5rem",
      }}>
        {label}
      </div>
      <h3 style={{
        fontFamily: "Syne, sans-serif", fontSize: "1.35rem", fontWeight: 800,
        color: "var(--text-primary)", marginBottom: "0.875rem", letterSpacing: "-0.01em",
      }}>
        {title}
      </h3>
      <p style={{ fontSize: "0.93rem", color: "var(--text-secondary)", lineHeight: 1.85, margin: 0 }}>
        {content}
      </p>
    </div>
  );
}
