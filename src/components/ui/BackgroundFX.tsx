"use client";
import { useEffect, useRef } from "react";

export default function BackgroundFX() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    const DOT_SPACING = 36;
    const INFLUENCE = 160;
    const MAX_SHIFT = 6;

    let mouseX = width / 2;
    let mouseY = height / 2;
    let animFrame: number;
    let tick = 0;

    const onResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    window.addEventListener("resize", onResize);
    window.addEventListener("mousemove", onMouseMove);

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      tick += 0.008;

      // ── Animated floating orbs ──
      const orbs = [
        { x: width * 0.15, y: height * 0.25, r: 340, color: "rgba(108,99,255,0.055)", dx: 60, dy: 40, speed: 0.5 },
        { x: width * 0.82, y: height * 0.15, r: 280, color: "rgba(59,130,246,0.045)", dx: -50, dy: 60, speed: 0.35 },
        { x: width * 0.65, y: height * 0.75, r: 260, color: "rgba(255,107,53,0.04)", dx: 40, dy: -55, speed: 0.45 },
        { x: width * 0.1,  y: height * 0.75, r: 220, color: "rgba(34,197,94,0.035)", dx: 55, dy: -40, speed: 0.55 },
        { x: width * 0.5,  y: height * 0.5,  r: 380, color: "rgba(108,99,255,0.025)", dx: -35, dy: 25, speed: 0.3 },
      ];

      orbs.forEach((orb) => {
        const cx = orb.x + Math.sin(tick * orb.speed) * orb.dx;
        const cy = orb.y + Math.cos(tick * orb.speed * 0.7) * orb.dy;
        const grad = ctx.createRadialGradient(cx, cy, 0, cx, cy, orb.r);
        grad.addColorStop(0, orb.color);
        grad.addColorStop(1, "transparent");
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(cx, cy, orb.r, 0, Math.PI * 2);
        ctx.fill();
      });

      // ── Interactive dot grid ──
      const cols = Math.ceil(width / DOT_SPACING) + 1;
      const rows = Math.ceil(height / DOT_SPACING) + 1;

      for (let col = 0; col < cols; col++) {
        for (let row = 0; row < rows; row++) {
          const baseX = col * DOT_SPACING;
          const baseY = row * DOT_SPACING;

          const dx = mouseX - baseX;
          const dy = mouseY - baseY;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const influence = Math.max(0, 1 - dist / INFLUENCE);

          const shiftX = -(dx / (dist || 1)) * influence * MAX_SHIFT;
          const shiftY = -(dy / (dist || 1)) * influence * MAX_SHIFT;

          const x = baseX + shiftX;
          const y = baseY + shiftY;

          // Dot opacity: base + glow near cursor
          const baseOpacity = 0.12;
          const hoverOpacity = baseOpacity + influence * 0.55;
          const dotSize = 1 + influence * 1.8;

          ctx.beginPath();
          ctx.arc(x, y, dotSize, 0, Math.PI * 2);
          ctx.fillStyle = influence > 0.15
            ? `rgba(108,99,255,${hoverOpacity})`
            : `rgba(255,255,255,${baseOpacity})`;
          ctx.fill();
        }
      }

      animFrame = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animFrame);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        inset: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        zIndex: 0,
        opacity: 1,
      }}
    />
  );
}
