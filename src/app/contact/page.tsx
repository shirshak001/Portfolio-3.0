"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, ExternalLink, GitBranch, Send, CheckCircle, MapPin } from "lucide-react";

const SOCIALS = [
  {
    icon: <ExternalLink size={20} />,
    label: "LinkedIn",
    value: "shirshak-mondal",
    href: "https://www.linkedin.com/in/shirshak-mondal-15260a291",
    color: "#0077b5",
  },
  {
    icon: <GitBranch size={20} />,
    label: "GitHub",
    value: "SHIRSHAK0071",
    href: "https://github.com/SHIRSHAK0071",
    color: "#6c63ff",
  },
  {
    icon: <Mail size={20} />,
    label: "Email",
    value: "shirshakmondaljspbuet@gmail.com",
    href: "mailto:shirshakmondaljspbuet@gmail.com",
    color: "#ff6b35",
  },
  {
    icon: <Phone size={20} />,
    label: "Phone",
    value: "+91 86173 00719",
    href: "tel:+918617300719",
    color: "#22c55e",
  },
];

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1500));
    setLoading(false);
    setSubmitted(true);
  };

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
          style={{ textAlign: "center", maxWidth: "600px", margin: "0 auto" }}
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
            Get In Touch
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
            Let&apos;s Build Something
            <br />
            <span style={{ color: "var(--accent)" }}>Amazing</span>
          </h1>
          <p
            style={{
              fontSize: "1rem",
              color: "var(--text-secondary)",
              lineHeight: 1.7,
            }}
          >
            I&apos;m actively looking for UI/UX design internships and freelance opportunities.
            Whether you have a project in mind or just want to say hello, my inbox is always open.
          </p>
        </motion.div>
      </section>

      {/* Content */}
      <section style={{ padding: "0 2rem 6rem", maxWidth: "1100px", margin: "0 auto" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1.6fr",
            gap: "3rem",
            alignItems: "start",
          }}
          className="contact-grid"
        >
          <style>{`@media (max-width: 768px) { .contact-grid { grid-template-columns: 1fr !important; } }`}</style>

          {/* Left: Info */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {/* Location */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              style={{
                padding: "1.5rem",
                background: "var(--bg-secondary)",
                border: "1px solid var(--border)",
                borderRadius: "16px",
                display: "flex",
                alignItems: "center",
                gap: "1rem",
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
                  flexShrink: 0,
                }}
              >
                <MapPin size={20} />
              </div>
              <div>
                <div
                  style={{
                    fontFamily: "JetBrains Mono, monospace",
                    fontSize: "0.62rem",
                    color: "var(--text-muted)",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    marginBottom: "0.2rem",
                  }}
                >
                  Location
                </div>
                <div
                  style={{
                    fontSize: "0.9rem",
                    fontWeight: 600,
                    color: "var(--text-primary)",
                    fontFamily: "Syne, sans-serif",
                  }}
                >
                  NIT Hamirpur, India
                </div>
              </div>
            </motion.div>

            {/* Socials */}
            {SOCIALS.map((s, i) => (
              <motion.a
                key={s.label}
                href={s.href}
                target={s.label !== "Phone" ? "_blank" : undefined}
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + i * 0.08 }}
                style={{
                  padding: "1.25rem",
                  background: "var(--bg-secondary)",
                  border: "1px solid var(--border)",
                  borderRadius: "16px",
                  display: "flex",
                  alignItems: "center",
                  gap: "1rem",
                  textDecoration: "none",
                  transition: "border-color 0.2s ease, transform 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = s.color + "88";
                  (e.currentTarget as HTMLElement).style.transform = "translateX(4px)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
                  (e.currentTarget as HTMLElement).style.transform = "translateX(0)";
                }}
              >
                <div
                  style={{
                    width: "44px",
                    height: "44px",
                    borderRadius: "12px",
                    background: `${s.color}18`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: s.color,
                    flexShrink: 0,
                  }}
                >
                  {s.icon}
                </div>
                <div>
                  <div
                    style={{
                      fontFamily: "JetBrains Mono, monospace",
                      fontSize: "0.62rem",
                      color: "var(--text-muted)",
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      marginBottom: "0.2rem",
                    }}
                  >
                    {s.label}
                  </div>
                  <div
                    style={{
                      fontSize: "0.82rem",
                      fontWeight: 500,
                      color: "var(--text-primary)",
                      wordBreak: "break-all",
                    }}
                  >
                    {s.value}
                  </div>
                </div>
              </motion.a>
            ))}
          </div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            style={{
              background: "var(--bg-secondary)",
              border: "1px solid var(--border)",
              borderRadius: "20px",
              padding: "2.5rem",
            }}
          >
            {submitted ? (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "1.5rem",
                  padding: "3rem 0",
                  textAlign: "center",
                }}
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200 }}
                  style={{ color: "var(--accent-green)" }}
                >
                  <CheckCircle size={64} />
                </motion.div>
                <div
                  style={{
                    fontFamily: "Syne, sans-serif",
                    fontSize: "1.5rem",
                    fontWeight: 800,
                    color: "var(--text-primary)",
                  }}
                >
                  Message Sent!
                </div>
                <div
                  style={{
                    fontSize: "0.9rem",
                    color: "var(--text-secondary)",
                    lineHeight: 1.7,
                    maxWidth: "320px",
                  }}
                >
                  Thanks for reaching out. I&apos;ll get back to you within 24 hours.
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                <div
                  style={{
                    fontFamily: "Syne, sans-serif",
                    fontSize: "1.25rem",
                    fontWeight: 700,
                    color: "var(--text-primary)",
                    marginBottom: "0.25rem",
                  }}
                >
                  Send a Message
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }} className="form-row">
                  <style>{`@media (max-width: 480px) { .form-row { grid-template-columns: 1fr !important; } }`}</style>
                  <InputField
                    label="Name"
                    id="name"
                    value={form.name}
                    onChange={(v) => setForm({ ...form, name: v })}
                    placeholder="Shirshak Mondal"
                    required
                  />
                  <InputField
                    label="Email"
                    id="email"
                    type="email"
                    value={form.email}
                    onChange={(v) => setForm({ ...form, email: v })}
                    placeholder="hello@example.com"
                    required
                  />
                </div>

                <InputField
                  label="Subject"
                  id="subject"
                  value={form.subject}
                  onChange={(v) => setForm({ ...form, subject: v })}
                  placeholder="UI/UX Internship Opportunity"
                  required
                />

                <div>
                  <label
                    htmlFor="message"
                    style={{
                      display: "block",
                      fontSize: "0.78rem",
                      fontWeight: 500,
                      color: "var(--text-secondary)",
                      marginBottom: "0.4rem",
                      fontFamily: "JetBrains Mono, monospace",
                      letterSpacing: "0.06em",
                      textTransform: "uppercase",
                    }}
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Tell me about your project or opportunity..."
                    required
                    rows={5}
                    style={{
                      width: "100%",
                      padding: "0.875rem 1rem",
                      borderRadius: "10px",
                      border: "1px solid var(--border)",
                      background: "var(--bg-primary)",
                      color: "var(--text-primary)",
                      fontSize: "0.875rem",
                      fontFamily: "Inter, sans-serif",
                      resize: "vertical",
                      outline: "none",
                      transition: "border-color 0.2s ease",
                    }}
                    onFocus={(e) => { (e.target as HTMLElement).style.borderColor = "var(--accent)"; }}
                    onBlur={(e) => { (e.target as HTMLElement).style.borderColor = "var(--border)"; }}
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  style={{
                    padding: "0.875rem 2rem",
                    borderRadius: "10px",
                    background: loading ? "var(--border)" : "var(--accent)",
                    color: loading ? "var(--text-muted)" : "#fff",
                    fontWeight: 600,
                    fontSize: "0.9rem",
                    border: "none",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "0.5rem",
                    transition: "all 0.2s ease",
                    width: "100%",
                  }}
                  onMouseEnter={(e) => {
                    if (!loading) {
                      (e.currentTarget as HTMLElement).style.background = "var(--accent-hover)";
                      (e.currentTarget as HTMLElement).style.transform = "translateY(-1px)";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!loading) {
                      (e.currentTarget as HTMLElement).style.background = "var(--accent)";
                      (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                    }
                  }}
                >
                  {loading ? (
                    <>
                      <div
                        style={{
                          width: "16px",
                          height: "16px",
                          border: "2px solid var(--text-muted)",
                          borderTopColor: "transparent",
                          borderRadius: "50%",
                          animation: "spin 0.8s linear infinite",
                        }}
                      />
                      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message <Send size={16} />
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </section>
    </div>
  );
}

function InputField({
  label,
  id,
  value,
  onChange,
  placeholder,
  type = "text",
  required,
}: {
  label: string;
  id: string;
  value: string;
  onChange: (v: string) => void;
  placeholder: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label
        htmlFor={id}
        style={{
          display: "block",
          fontSize: "0.78rem",
          fontWeight: 500,
          color: "var(--text-secondary)",
          marginBottom: "0.4rem",
          fontFamily: "JetBrains Mono, monospace",
          letterSpacing: "0.06em",
          textTransform: "uppercase",
        }}
      >
        {label}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        required={required}
        style={{
          width: "100%",
          padding: "0.875rem 1rem",
          borderRadius: "10px",
          border: "1px solid var(--border)",
          background: "var(--bg-primary)",
          color: "var(--text-primary)",
          fontSize: "0.875rem",
          fontFamily: "Inter, sans-serif",
          outline: "none",
          transition: "border-color 0.2s ease",
        }}
        onFocus={(e) => { (e.target as HTMLElement).style.borderColor = "var(--accent)"; }}
        onBlur={(e) => { (e.target as HTMLElement).style.borderColor = "var(--border)"; }}
      />
    </div>
  );
}
