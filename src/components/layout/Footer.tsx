"use client";
import Link from "next/link";
import { GitBranch, ExternalLink, Mail, ArrowUp } from "lucide-react";

const LINKS = [
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Experience", href: "/experience" },
  { label: "Playground", href: "/playground" },
  { label: "Blog", href: "/blog" },
  { label: "Resume", href: "/resume" },
  { label: "Contact", href: "/contact" },
];

const SOCIALS = [
  {
    icon: <GitBranch size={16} />,
    href: "https://github.com/SHIRSHAK0071",
    label: "GitHub",
  },
  {
    icon: <ExternalLink size={16} />,
    href: "https://www.linkedin.com/in/shirshak-mondal-15260a291",
    label: "LinkedIn",
  },
  {
    icon: <Mail size={16} />,
    href: "mailto:shirshakmondaljspbuet@gmail.com",
    label: "Email",
  },
];

export default function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid var(--border)",
        background: "var(--bg-secondary)",
        padding: "3rem 2rem 2rem",
      }}
    >
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr auto 1fr",
          gap: "2rem",
          alignItems: "start",
        }}
        className="footer-grid"
      >
        <style>{`
          @media (max-width: 768px) {
            .footer-grid { grid-template-columns: 1fr !important; text-align: center; }
          }
        `}</style>

        {/* Brand */}
        <div>
          <div
            style={{
              fontFamily: "Syne, sans-serif",
              fontWeight: 800,
              fontSize: "1.25rem",
              color: "var(--text-primary)",
              marginBottom: "0.5rem",
            }}
          >
            Shirshak Mondal
          </div>
          <div
            style={{
              fontSize: "0.82rem",
              color: "var(--text-muted)",
              maxWidth: "240px",
              lineHeight: 1.6,
            }}
          >
            UI/UX Designer & Full-Stack Developer building digital experiences that matter.
          </div>
          <div style={{ display: "flex", gap: "0.75rem", marginTop: "1.25rem" }}>
            {SOCIALS.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                style={{
                  width: "36px",
                  height: "36px",
                  borderRadius: "8px",
                  border: "1px solid var(--border)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "var(--text-secondary)",
                  textDecoration: "none",
                  transition: "all 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget).style.borderColor = "var(--accent)";
                  (e.currentTarget).style.color = "var(--accent)";
                  (e.currentTarget).style.background = "rgba(108, 99, 255, 0.08)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget).style.borderColor = "var(--border)";
                  (e.currentTarget).style.color = "var(--text-secondary)";
                  (e.currentTarget).style.background = "transparent";
                }}
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Nav Links */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "0.6rem",
          }}
        >
          {LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              style={{
                fontSize: "0.82rem",
                color: "var(--text-muted)",
                textDecoration: "none",
                transition: "color 0.2s ease",
                letterSpacing: "0.02em",
              }}
              onMouseEnter={(e) =>
                ((e.target as HTMLElement).style.color = "var(--text-primary)")
              }
              onMouseLeave={(e) =>
                ((e.target as HTMLElement).style.color = "var(--text-muted)")
              }
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Back to top */}
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            style={{
              width: "40px",
              height: "40px",
              borderRadius: "10px",
              border: "1px solid var(--border)",
              background: "var(--glass)",
              color: "var(--text-secondary)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transition: "all 0.2s ease",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget).style.borderColor = "var(--accent)";
              (e.currentTarget).style.color = "var(--accent)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget).style.borderColor = "var(--border)";
              (e.currentTarget).style.color = "var(--text-secondary)";
            }}
            aria-label="Back to top"
          >
            <ArrowUp size={16} />
          </button>
        </div>
      </div>

      <div
        style={{
          maxWidth: "1280px",
          margin: "2rem auto 0",
          paddingTop: "1.5rem",
          borderTop: "1px solid var(--border-subtle)",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "0.5rem",
        }}
      >
        <span
          style={{
            fontFamily: "JetBrains Mono, monospace",
            fontSize: "0.7rem",
            color: "var(--text-muted)",
            letterSpacing: "0.05em",
          }}
        >
          &copy; {new Date().getFullYear()} Shirshak Mondal. All rights reserved.
        </span>
        <span
          style={{
            fontFamily: "JetBrains Mono, monospace",
            fontSize: "0.7rem",
            color: "var(--text-muted)",
          }}
        >
          Designed & Built with precision
        </span>
      </div>
    </footer>
  );
}
