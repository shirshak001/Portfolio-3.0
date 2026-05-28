"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Clock, Tag } from "lucide-react";

const CATEGORIES = ["All", "UX Psychology", "UI Trends", "Design Systems", "Motion Design", "AI in UX", "Accessibility"];

const POSTS = [
  {
    slug: "ux-psychology-hick-law",
    title: "Hick's Law in UI Design: Why Less Is More",
    excerpt: "When users are presented with too many choices, decision-making slows down exponentially. Here's how understanding Hick's Law can dramatically improve your interface's usability.",
    category: "UX Psychology",
    readTime: "5 min read",
    date: "May 2025",
    color: "#6c63ff",
    featured: true,
  },
  {
    slug: "design-systems-atomic",
    title: "Building Atomic Design Systems in Figma",
    excerpt: "Atomic design methodology gives your design system a clear hierarchy: atoms, molecules, organisms, templates, and pages. Here's how to implement it in Figma effectively.",
    category: "Design Systems",
    readTime: "8 min read",
    date: "Apr 2025",
    color: "#ff6b35",
    featured: true,
  },
  {
    slug: "motion-design-principles",
    title: "The 4 Principles of Motion Design That Make UX Sing",
    excerpt: "Motion in UI isn't decoration — it's communication. Learn the four core principles that separate distracting animation from meaningful interaction design.",
    category: "Motion Design",
    readTime: "6 min read",
    date: "Mar 2025",
    color: "#22c55e",
    featured: false,
  },
  {
    slug: "ai-ux-future",
    title: "AI Is Changing UX: What Designers Need to Know in 2025",
    excerpt: "From AI-generated UI components to LLM-driven personalization, artificial intelligence is fundamentally reshaping how we design user experiences.",
    category: "AI in UX",
    readTime: "7 min read",
    date: "Feb 2025",
    color: "#3b82f6",
    featured: false,
  },
  {
    slug: "accessibility-checklist",
    title: "The Ultimate Accessibility Checklist for UI Designers",
    excerpt: "Accessible design isn't a constraint — it's an amplifier. A truly accessible interface works better for everyone. Here's the complete checklist I use on every project.",
    category: "Accessibility",
    readTime: "10 min read",
    date: "Jan 2025",
    color: "#a855f7",
    featured: false,
  },
  {
    slug: "iot-ux-challenges",
    title: "Designing UX for IoT: Unique Challenges & Solutions",
    excerpt: "Designing interfaces for hardware devices introduces constraints that screen-only designers never encounter. Here's what I learned building SoilSathi's mobile dashboard.",
    category: "UX Psychology",
    readTime: "9 min read",
    date: "Dec 2024",
    color: "#22c55e",
    featured: false,
  },
];

export default function BlogPage() {
  const featured = POSTS.filter((p) => p.featured);
  const rest = POSTS.filter((p) => !p.featured);

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "var(--bg-primary)",
        paddingTop: "8rem",
      }}
    >
      {/* Header */}
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
            Design Thinking
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
            Blog &
            <br />
            <span style={{ color: "var(--accent)" }}>Insights</span>
          </h1>
          <p
            style={{
              fontSize: "1rem",
              color: "var(--text-secondary)",
              maxWidth: "480px",
              lineHeight: 1.7,
            }}
          >
            Thoughts on UX psychology, design systems, motion design, and the future of digital experiences.
          </p>
        </motion.div>
      </section>

      {/* Featured Posts */}
      <section style={{ padding: "0 2rem 4rem", maxWidth: "1280px", margin: "0 auto" }}>
        <div
          style={{
            fontFamily: "JetBrains Mono, monospace",
            fontSize: "0.65rem",
            color: "var(--text-muted)",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            marginBottom: "1.5rem",
          }}
        >
          Featured Articles
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "1.5rem",
          }}
          className="featured-grid"
        >
          <style>{`@media (max-width: 768px) { .featured-grid { grid-template-columns: 1fr !important; } }`}</style>
          {featured.map((post, i) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              style={{
                background: "var(--bg-secondary)",
                border: "1px solid var(--border)",
                borderRadius: "20px",
                padding: "2rem",
                position: "relative",
                overflow: "hidden",
                transition: "border-color 0.3s ease",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = post.color + "55";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  height: "2px",
                  background: post.color,
                }}
              />
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: "1rem",
                }}
              >
                <span
                  style={{
                    padding: "0.25rem 0.65rem",
                    borderRadius: "9999px",
                    fontFamily: "JetBrains Mono, monospace",
                    fontSize: "0.62rem",
                    background: `${post.color}18`,
                    border: `1px solid ${post.color}40`,
                    color: post.color,
                    letterSpacing: "0.06em",
                  }}
                >
                  {post.category}
                </span>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.75rem",
                  }}
                >
                  <span
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.3rem",
                      fontSize: "0.7rem",
                      color: "var(--text-muted)",
                      fontFamily: "JetBrains Mono, monospace",
                    }}
                  >
                    <Clock size={11} /> {post.readTime}
                  </span>
                  <span
                    style={{
                      fontSize: "0.7rem",
                      color: "var(--text-muted)",
                      fontFamily: "JetBrains Mono, monospace",
                    }}
                  >
                    {post.date}
                  </span>
                </div>
              </div>
              <h2
                style={{
                  fontFamily: "Syne, sans-serif",
                  fontSize: "1.2rem",
                  fontWeight: 800,
                  color: "var(--text-primary)",
                  letterSpacing: "-0.01em",
                  lineHeight: 1.3,
                  marginBottom: "0.75rem",
                }}
              >
                {post.title}
              </h2>
              <p
                style={{
                  fontSize: "0.83rem",
                  color: "var(--text-secondary)",
                  lineHeight: 1.7,
                  marginBottom: "1.25rem",
                }}
              >
                {post.excerpt}
              </p>
              <Link
                href={`/blog/${post.slug}`}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.4rem",
                  fontSize: "0.82rem",
                  fontWeight: 600,
                  color: post.color,
                  textDecoration: "none",
                  transition: "gap 0.2s ease",
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.gap = "0.7rem"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.gap = "0.4rem"; }}
              >
                Read Article <ArrowRight size={14} />
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* More Posts */}
      <section
        style={{
          padding: "0 2rem 6rem",
          maxWidth: "1280px",
          margin: "0 auto",
        }}
      >
        <div
          style={{
            fontFamily: "JetBrains Mono, monospace",
            fontSize: "0.65rem",
            color: "var(--text-muted)",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            marginBottom: "1.5rem",
          }}
        >
          More Articles
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          {rest.map((post, i) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              style={{
                background: "var(--bg-secondary)",
                border: "1px solid var(--border)",
                borderRadius: "14px",
                padding: "1.5rem",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                gap: "2rem",
                transition: "border-color 0.2s ease, transform 0.2s ease",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = post.color + "55";
                (e.currentTarget as HTMLElement).style.transform = "translateX(4px)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
                (e.currentTarget as HTMLElement).style.transform = "translateX(0)";
              }}
              className="blog-list-item"
            >
              <style>{`@media (max-width: 640px) { .blog-list-item { flex-direction: column !important; align-items: flex-start !important; } }`}</style>
              <div style={{ flex: 1 }}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.4rem", flexWrap: "wrap" }}>
                  <span
                    style={{
                      padding: "0.15rem 0.5rem",
                      borderRadius: "9999px",
                      fontFamily: "JetBrains Mono, monospace",
                      fontSize: "0.58rem",
                      background: `${post.color}15`,
                      border: `1px solid ${post.color}35`,
                      color: post.color,
                    }}
                  >
                    {post.category}
                  </span>
                  <span
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.2rem",
                      fontSize: "0.68rem",
                      color: "var(--text-muted)",
                      fontFamily: "JetBrains Mono, monospace",
                    }}
                  >
                    <Clock size={10} /> {post.readTime}
                  </span>
                </div>
                <div
                  style={{
                    fontFamily: "Syne, sans-serif",
                    fontSize: "0.95rem",
                    fontWeight: 700,
                    color: "var(--text-primary)",
                    marginBottom: "0.3rem",
                    lineHeight: 1.3,
                  }}
                >
                  {post.title}
                </div>
                <div
                  style={{
                    fontSize: "0.78rem",
                    color: "var(--text-muted)",
                    fontFamily: "JetBrains Mono, monospace",
                  }}
                >
                  {post.date}
                </div>
              </div>
              <Link
                href={`/blog/${post.slug}`}
                style={{
                  color: "var(--text-muted)",
                  transition: "color 0.2s ease",
                  textDecoration: "none",
                  flexShrink: 0,
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = post.color; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "var(--text-muted)"; }}
              >
                <ArrowRight size={18} />
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
