"use client";
import { useEffect, useRef } from "react";

export default function BackgroundFX() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // ── sizing ──
    let W = window.innerWidth;
    let H = window.innerHeight; // fixed viewport only
    canvas.width = W;
    canvas.height = H;

    // ── config ──
    const GAP = 38;           // grid spacing
    const DOT_R = 1.2;        // base dot radius
    const REPEL_R = 130;      // repulsion radius
    const MAX_SHIFT = 22;     // max px dots move away
    const LIGHT_R = 170;      // lighting radius

    // ── state ──
    let mouseX = -9999;
    let mouseY = -9999;
    let smoothX = -9999;
    let smoothY = -9999;
    let raf: number;
    let tick = 0;

    // ── resize ──
    const onResize = () => {
      W = window.innerWidth;
      H = window.innerHeight;
      canvas.width = W;
      canvas.height = H;
    };

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const onLeave = () => {
      mouseX = -9999;
      mouseY = -9999;
    };

    window.addEventListener("resize", onResize, { passive: true });
    window.addEventListener("mousemove", onMove, { passive: true });
    document.addEventListener("mouseleave", onLeave);

    // ── draw loop ──
    const draw = () => {
      ctx.clearRect(0, 0, W, H);
      tick += 0.007;

      // smooth cursor follow (lerp)
      smoothX += (mouseX - smoothX) * 0.1;
      smoothY += (mouseY - smoothY) * 0.1;

      const cols = Math.ceil(W / GAP) + 1;
      const rows = Math.ceil(H / GAP) + 1;

      for (let c = 0; c < cols; c++) {
        for (let r = 0; r < rows; r++) {
          const bx = c * GAP;
          const by = r * GAP;

          // distance to smoothed cursor
          const ddx = smoothX - bx;
          const ddy = smoothY - by;
          const dist = Math.sqrt(ddx * ddx + ddy * ddy);

          // repulsion shift
          const repel = Math.max(0, 1 - dist / REPEL_R);
          const shiftX = dist > 0 ? -(ddx / dist) * repel * MAX_SHIFT : 0;
          const shiftY = dist > 0 ? -(ddy / dist) * repel * MAX_SHIFT : 0;

          const x = bx + shiftX;
          const y = by + shiftY;

          // lighting
          const lit = Math.max(0, 1 - dist / LIGHT_R);

          // subtle wave pulse on base dots
          const wave = Math.sin(tick + c * 0.3 + r * 0.3) * 0.5 + 0.5;
          const baseOpacity = 0.07 + wave * 0.03;

          const opacity = lit > 0
            ? baseOpacity + lit * 0.65
            : baseOpacity;

          const radius = DOT_R + lit * 2.2 + repel * 1.2;

          ctx.beginPath();
          ctx.arc(x, y, radius, 0, Math.PI * 2);

          if (lit > 0.05) {
            // near cursor — purple/blue glow dot
            const r255 = Math.round(108 + lit * 40);
            const g255 = Math.round(99 + lit * 20);
            const b255 = 255;
            ctx.fillStyle = `rgba(${r255},${g255},${b255},${opacity})`;
          } else {
            ctx.fillStyle = `rgba(200,200,220,${opacity})`;
          }

          ctx.fill();

          // extra glow ring on lit dots
          if (lit > 0.4) {
            ctx.beginPath();
            ctx.arc(x, y, radius * 3.5, 0, Math.PI * 2);
            const glow = ctx.createRadialGradient(x, y, 0, x, y, radius * 3.5);
            glow.addColorStop(0, `rgba(108,99,255,${lit * 0.08})`);
            glow.addColorStop(1, "transparent");
            ctx.fillStyle = glow;
            ctx.fill();
          }
        }
      }

      raf = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
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
