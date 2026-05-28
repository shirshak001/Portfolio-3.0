"use client";
import { use } from "react";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

const PROJECTS: Record<string, {
  title: string; subtitle: string; color: string; img: string;
  overview: string; problem: string; process: string[];
  tech: string[]; impact: { metric: string; value: string }[];
  tags: string[]; next: string | null;
}> = {
  soilsaathi: {
    title: "SoilSaathi", subtitle: "IoT Soil Health Monitoring System", color: "#22c55e", img: "/soilsaathi.png",
    overview: "SoilSaathi is a real-time IoT soil monitoring device that analyzes soil conditions — pH, moisture, NPK levels — and delivers actionable improvement suggestions for farmers. The project was a finalist in Smart India Hackathon 2026.",
    problem: "Indian farmers, especially small-scale and subsistence farmers, lack access to affordable soil testing. Traditional lab testing costs money and takes weeks. Poor soil health leads to crop failure, financial loss, and food insecurity. The challenge was to make soil intelligence accessible, affordable, and usable for farmers with varying levels of digital literacy.",
    process: [
      "Conducted user research with 12 farming families in rural Himachal Pradesh to understand pain points.",
      "Mapped user journeys to identify friction in existing soil testing methods.",
      "Defined design principles: simplicity, accessibility, and offline-first operation.",
      "Wireframed mobile dashboard with large typography, icon-heavy navigation, and color-coded indicators.",
      "Built low-fidelity prototypes and tested with non-tech-savvy users — iterated 3 times.",
      "Designed data visualizations that communicate complex soil chemistry in plain language.",
      "Implemented the IoT hardware layer using ESP32 with soil sensors and GPS module.",
    ],
    tech: ["ESP32", "IoT Sensors", "GPS", "Arduino IDE", "Figma", "React Native"],
    impact: [{ metric: "Users Interviewed", value: "12+" }, { metric: "Iterations", value: "3" }, { metric: "SIH Shortlist", value: "Top 8" }, { metric: "Usability Score", value: "94%" }],
    tags: ["IoT", "Hardware", "AgriTech"], next: "credmate",
  },
  credmate: {
    title: "CredMate", subtitle: "AI-Driven Financial Identity Platform", color: "#6c63ff", img: "/credmate.png",
    overview: "CredMate is an AI-driven fintech platform designed to help unbanked and underserved users build a trustworthy financial identity without relying on traditional banking history. It analyzes alternative behavioral data — UPI transactions, SMS financial activity, utility bill payments, and digital spending patterns — to generate a smart creditworthiness score.",
    problem: "Over 190 million Indians are credit-invisible — they have no formal banking history and cannot access loans despite being financially responsible. Traditional CIBIL scores require prior credit usage. CredMate breaks this cycle using alternative data sources, AI-powered scoring, and instant micro-loan approval to democratize financial access.",
    process: [
      "Researched India's fintech landscape and credit gap — identified 190M credit-invisible population as target.",
      "Conducted competitor analysis of Slice, Jupiter, Navi — identified UX and inclusion gaps.",
      "Designed AI-powered credit score prediction pipeline using behavioral and transactional data.",
      "Built multi-agent AI orchestration system for automated loan analysis and risk assessment.",
      "Designed conversational financial assistant with personalized money tips.",
      "Integrated KYC verification system, CDPWallet, and x402Pay for seamless transactions.",
      "Built mobile-first experience using React Native and Expo Router.",
    ],
    tech: ["React Native", "Expo Router", "TypeScript", "AI/ML", "LLM APIs", "CDPWallet", "x402Pay", "Figma"],
    impact: [{ metric: "Target Users", value: "190M+" }, { metric: "Onboarding Time", value: "-40%" }, { metric: "Screens Designed", value: "24" }, { metric: "Loan Approval", value: "Instant" }],
    tags: ["Mobile", "Fintech", "AI"], next: "polygov",
  },
  polygov: {
    title: "PolyGov", subtitle: "AI + Blockchain Governance Platform", color: "#818cf8", img: "/polygov.png",
    overview: "PolyGov is an AI + Blockchain governance platform focused on improving transparency and trust in local government systems. It allows citizens to actively participate in governance through decentralized voting and transparent public fund tracking.",
    problem: "Local government systems are often opaque — citizens have no visibility into how public funds are spent, policies are decided, or how to participate in civic decisions. Corruption and misinformation thrive in this information gap. PolyGov solves this by combining blockchain immutability with AI summarization to make governance accessible and accountable.",
    process: [
      "Researched civic participation barriers and public trust issues in local government systems.",
      "Designed DAO-based community voting mechanism with transparent on-chain record keeping.",
      "Built AI summarization pipeline for government reports and policy documents.",
      "Developed blockchain-powered tracking system for public funds and transactions.",
      "Designed citizen participation dashboard with smart governance analytics.",
      "Built transparent decision-making workflows with audit trails.",
      "Created accessible UI for non-technical citizens to engage with complex governance data.",
    ],
    tech: ["Blockchain", "DAO", "AI/LLM", "Smart Contracts", "React.js", "Web3.js", "Figma"],
    impact: [{ metric: "Transparency Score", value: "100%" }, { metric: "Voting System", value: "DAO" }, { metric: "Fund Tracking", value: "On-chain" }, { metric: "AI Reports", value: "Real-time" }],
    tags: ["Blockchain", "AI", "GovTech"], next: "safety-band",
  },
  "safety-band": {
    title: "Women Safety Band", subtitle: "Wearable IoT Emergency System", color: "#3b82f6", img: "/safety-band.png",
    overview: "The Women Safety Band is a wearable IoT-based safety device designed to provide immediate emergency assistance during dangerous situations. Built to work quickly and discreetly, it helps users alert trusted contacts in real time without requiring any network connectivity.",
    problem: "Emergency alert systems fail in rural areas, remote locations, and during network outages — exactly when women need them most. Existing solutions require cellular networks, SIM cards, or internet connectivity. The challenge was to build a safety system that works completely offline, is wearable, and requires zero technical knowledge to activate.",
    process: [
      "Researched existing safety devices — identified SIM/internet dependency as the critical failure point.",
      "Designed hardware architecture using ESP32 with ESP-NOW protocol for SIM-less P2P communication.",
      "Implemented one-touch SOS emergency activation with tamper detection (auto-alert if band is cut/removed).",
      "Integrated real-time live location sharing and continuous location history tracking via GPS.",
      "Designed emergency notification system sending alerts to pre-selected trusted contacts.",
      "Prototyped wearable enclosure using SolidWorks and 3D printed the housing.",
      "Tested range and reliability — achieved 200m stable communication range.",
    ],
    tech: ["ESP32", "ESP-NOW", "GPS", "IoT Sensors", "SolidWorks", "KiCad", "Figma"],
    impact: [{ metric: "Network Required", value: "None" }, { metric: "Alert Range", value: "200m" }, { metric: "SOS Response", value: "< 2s" }, { metric: "Battery Life", value: "48hrs" }],
    tags: ["IoT", "Hardware", "Safety"], next: "gymflex",
  },
  gymflex: {
    title: "GymFlex", subtitle: "Flexible Pay-Per-Use Gym Platform", color: "#f59e0b", img: "/gymflex.png",
    overview: "GymFlex is a flexible gym membership platform that allows users to pay only for the time or sessions they actually use — instead of committing to expensive monthly subscriptions. It modernizes traditional gym memberships with a credit-based usage model designed for students, professionals, and travelers.",
    problem: "Traditional gym memberships force users into expensive monthly or annual contracts regardless of actual usage. Students who go home for vacations, traveling professionals, and casual fitness users end up paying for time they don't use. There was no affordable, flexible alternative — GymFlex solves this with a pay-per-use credit system.",
    process: [
      "Conducted user interviews with 20+ gym users — identified subscription waste as the #1 pain point.",
      "Designed credit-based access model with rollover functionality and transparent pricing.",
      "Built QR-code based check-in system for seamless gym entry without physical membership cards.",
      "Implemented multi-gym access across partner locations with unified account management.",
      "Designed intuitive mobile UI for session tracking, credit management, and usage analytics.",
      "Integrated flexible membership tiers for different usage patterns.",
    ],
    tech: ["React Native", "Expo", "TypeScript", "QR Code APIs", "Payment Gateway", "Figma"],
    impact: [{ metric: "Cost Savings", value: "Up to 60%" }, { metric: "Check-in Time", value: "< 5s" }, { metric: "Gym Partners", value: "Multi-location" }, { metric: "Credit Rollover", value: "Yes" }],
    tags: ["Mobile", "FitTech", "React Native"], next: "attendease",
  },
  attendease: {
    title: "AttendEase", subtitle: "Smart Academic Attendance & Scheduling", color: "#14b8a6", img: "/attendease.png",
    overview: "AttendEase is a modern attendance and class scheduling application designed to simplify academic routine management for students and educational institutions. It combines attendance tracking with intelligent scheduling, analytics, and automated notifications.",
    problem: "Students struggle to manually track attendance across multiple subjects, often realizing too late that they've fallen below the minimum requirement. Existing solutions are either too complex or don't integrate scheduling with attendance tracking. AttendEase solves this with a unified, beautifully designed mobile experience.",
    process: [
      "Surveyed 50+ students at NIT Hamirpur — identified attendance tracking and schedule management as top pain points.",
      "Designed smart attendance management with per-subject tracking and percentage analytics.",
      "Built drag-and-drop timetable builder with landscape scheduling interface.",
      "Implemented automated class reminders and notifications for upcoming lectures.",
      "Created attendance analytics dashboard showing trends, warnings, and projections.",
      "Designed complete onboarding and authentication system for institutional use.",
      "Built mobile-first React Native UI with clean component system.",
    ],
    tech: ["React Native", "Expo Router", "TypeScript", "AsyncStorage", "Push Notifications", "Figma"],
    impact: [{ metric: "Students Surveyed", value: "50+" }, { metric: "Features Built", value: "8" }, { metric: "Screens Designed", value: "20+" }, { metric: "Notification System", value: "Automated" }],
    tags: ["Mobile", "EdTech", "React Native"], next: "layerforge",
  },
  layerforge: {
    title: "LayerForge", subtitle: "3D Printing Service Platform", color: "#ff6b35", img: "/layerforge.png",
    overview: "LayerForge is a 3D printing service startup providing both direct 3D printing solutions and custom product design consultation. The platform makes rapid prototyping and custom manufacturing accessible to individuals, startups, students, and businesses — combining creativity, engineering, and manufacturing technology.",
    problem: "Getting a 3D print done requires navigating complex software, understanding material specs, and finding a trusted print shop. For non-engineers and small businesses, this is a significant barrier. LayerForge abstracts all this complexity into a streamlined two-service platform: direct printing from uploaded files, and custom design consultation.",
    process: [
      "Mapped the fragmented 3D printing workflow — identified 8 major friction points for non-engineers.",
      "Designed two-track service model: direct print submission and custom design consultation.",
      "Built 3-step order flow: Upload → Configure → Submit — minimizing cognitive load.",
      "Implemented customer order workflow with real-time status tracking.",
      "Designed artist/designer collaboration system for custom product requests.",
      "Built React + Tailwind frontend with fast load times and intuitive file upload.",
      "Developed scalable digital fabrication service model for business growth.",
    ],
    tech: ["React.js", "Tailwind CSS", "Three.js", "REST APIs", "Figma", "Node.js"],
    impact: [{ metric: "Friction Points", value: "8 → 2" }, { metric: "Order Steps", value: "3" }, { metric: "Load Time", value: "< 1.5s" }, { metric: "Services", value: "2 Tracks" }],
    tags: ["Web", "Manufacturing", "React.js"], next: null,
  },
};

export function generateStaticParams() {
  return Object.keys(PROJECTS).map(slug => ({ slug }));
}

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
        <Link href="/projects" className="case-back" style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem", fontSize: "0.82rem", color: "var(--text-muted)", textDecoration: "none", transition: "color 0.2s ease" }}>
          <ArrowLeft size={14} /> Back to Projects
        </Link>
      </div>

      {/* ── HERO ── */}
      <section style={{ padding: "0 2rem 3rem", maxWidth: "1100px", margin: "0 auto" }}>
        <div style={{ fontFamily: "JetBrains Mono, monospace", fontSize: "0.7rem", color: project.color, letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "0.75rem" }}>
          {project.subtitle}
        </div>
        <h1 style={{ fontFamily: "Syne, sans-serif", fontSize: "clamp(2.5rem, 7vw, 5rem)", fontWeight: 800, color: "var(--text-primary)", letterSpacing: "-0.03em", lineHeight: 1.05, marginBottom: "1.5rem" }}>
          {project.title}
        </h1>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem", marginBottom: "2.5rem" }}>
          {project.tags.map(tag => (
            <span key={tag} style={{ padding: "0.25rem 0.75rem", borderRadius: "9999px", fontFamily: "JetBrains Mono, monospace", fontSize: "0.65rem", background: `${project.color}12`, border: `1px solid ${project.color}35`, color: project.color, letterSpacing: "0.06em" }}>{tag}</span>
          ))}
        </div>
        <div style={{ borderRadius: "20px", overflow: "hidden", border: "1px solid var(--border)", aspectRatio: "16/7", position: "relative" }}>
          <Image src={project.img} alt={project.title} fill sizes="(max-width: 768px) 100vw, 1100px" style={{ objectFit: "cover" }} />
          <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "3px", background: project.color }} />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(10,10,15,0.3) 0%, transparent 60%)" }} />
        </div>
      </section>

      {/* ── CONTENT ── */}
      <section style={{ padding: "0 2rem 6rem", maxWidth: "1100px", margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: "4rem" }} className="case-layout">
          <style>{`@media (max-width: 768px) { .case-layout { grid-template-columns: 1fr !important; gap: 2rem !important; } }`}</style>

          {/* SIDEBAR */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            <div style={{ background: "var(--bg-secondary)", border: "1px solid var(--border)", borderLeft: `3px solid ${project.color}`, borderRadius: "16px", padding: "1.5rem" }}>
              <div style={{ fontFamily: "JetBrains Mono, monospace", fontSize: "0.6rem", color: project.color, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "0.75rem" }}>Tech Stack</div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
                {project.tech.map(t => (
                  <span key={t} style={{ padding: "0.25rem 0.6rem", borderRadius: "6px", fontFamily: "JetBrains Mono, monospace", fontSize: "0.65rem", background: `${project.color}10`, border: `1px solid ${project.color}30`, color: project.color }}>{t}</span>
                ))}
              </div>
            </div>
            <div style={{ background: "var(--bg-secondary)", border: "1px solid var(--border)", borderLeft: `3px solid ${project.color}`, borderRadius: "16px", padding: "1.5rem" }}>
              <div style={{ fontFamily: "JetBrains Mono, monospace", fontSize: "0.6rem", color: project.color, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "0.75rem" }}>Impact</div>
              <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                {project.impact.map(item => (
                  <div key={item.metric}>
                    <div style={{ fontFamily: "Syne, sans-serif", fontSize: "1.75rem", fontWeight: 800, color: project.color, lineHeight: 1, marginBottom: "0.2rem" }}>{item.value}</div>
                    <div style={{ fontSize: "0.72rem", color: "var(--text-muted)", fontFamily: "JetBrains Mono, monospace", letterSpacing: "0.04em" }}>{item.metric}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* MAIN */}
          <div style={{ display: "flex", flexDirection: "column", gap: "3rem" }}>
            <CaseSection label="Overview" title="Project Overview" content={project.overview} color={project.color} />
            <CaseSection label="Problem" title="The Problem" content={project.problem} color={project.color} />
            <div>
              <div style={{ fontFamily: "JetBrains Mono, monospace", fontSize: "0.65rem", color: project.color, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "0.5rem" }}>Process</div>
              <h3 style={{ fontFamily: "Syne, sans-serif", fontSize: "1.35rem", fontWeight: 800, color: "var(--text-primary)", marginBottom: "1.5rem", letterSpacing: "-0.01em" }}>My Approach</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                {project.process.map((step, i) => (
                  <div key={i} style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                    <div style={{ width: "30px", height: "30px", borderRadius: "8px", background: `${project.color}15`, border: `1px solid ${project.color}35`, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "JetBrains Mono, monospace", fontSize: "0.62rem", color: project.color, flexShrink: 0, marginTop: "2px" }}>
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)", lineHeight: 1.75, margin: 0 }}>{step}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* NEXT PROJECT */}
        {project.next && (
          <div style={{ marginTop: "5rem", paddingTop: "2.5rem", borderTop: "1px solid var(--border)", display: "flex", justifyContent: "flex-end" }}>
            <Link href={`/projects/${project.next}`} className="case-next"
              style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", padding: "0.75rem 1.5rem", borderRadius: "12px", border: `1px solid ${project.color}35`, background: `${project.color}08`, fontSize: "0.85rem", fontWeight: 700, color: project.color, textDecoration: "none", transition: "all 0.25s ease" }}>
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
      <div style={{ fontFamily: "JetBrains Mono, monospace", fontSize: "0.65rem", color, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "0.5rem" }}>{label}</div>
      <h3 style={{ fontFamily: "Syne, sans-serif", fontSize: "1.35rem", fontWeight: 800, color: "var(--text-primary)", marginBottom: "0.875rem", letterSpacing: "-0.01em" }}>{title}</h3>
      <p style={{ fontSize: "0.93rem", color: "var(--text-secondary)", lineHeight: 1.85, margin: 0 }}>{content}</p>
    </div>
  );
}
