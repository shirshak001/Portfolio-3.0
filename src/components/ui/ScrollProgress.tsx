"use client";
import { useEffect, useRef } from "react";

export default function ScrollProgress() {
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      if (barRef.current) {
        barRef.current.style.width = progress + "%";
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        height: "2px",
        zIndex: 9997,
        width: "100%",
        background: "var(--border-subtle)",
      }}
    >
      <div
        ref={barRef}
        style={{
          height: "100%",
          background: "var(--accent)",
          width: "0%",
          transition: "width 60ms linear",
          boxShadow: "0 0 8px var(--accent)",
        }}
      />
    </div>
  );
}
