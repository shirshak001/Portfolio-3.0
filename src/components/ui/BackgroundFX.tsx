"use client";
import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  baseX: number;
  baseY: number;
  size: number;
  opacity: number;
  color: string;
  pulseOffset: number;
}

const ACCENT_COLORS = [
  "108,99,255",  // purple
  "59,130,246",  // blue
  "108,99,255",  // purple (weighted more)
  "108,99,255",  // purple
  "34,197,94",   // green (rare)
];

export default function BackgroundFX() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let W = window.innerWidth;
    let H = document.documentElement.scrollHeight;
    canvas.width = W;
    canvas.height = H;

    // Mouse state (in document coords)
    let mouseX = W / 2;
    let mouseY = H / 2;
    let isMouseOnPage = false;
    let targetMouseX = W / 2;
    let targetMouseY = H / 2;

    let animFrame: number;
    let tick = 0;

    // ── Build particle field ──
    const PARTICLE_COUNT = Math.min(Math.floor((W * H) / 14000), 120);
    const particles: Particle[] = [];

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const x = Math.random() * W;
      const y = Math.random() * H;
      const color = ACCENT_COLORS[Math.floor(Math.random() * ACCENT_COLORS.length)];
      particles.push({
        x, y,
        baseX: x,
        baseY: y,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        size: Math.random() * 1.8 + 0.8,
        opacity: Math.random() * 0.4 + 0.15,
        color,
        pulseOffset: Math.random() * Math.PI * 2,
      });
    }

    // ── Ambient orbs (slow drifting glows) ──
    const orbs = [
      { fx: 0.12, fy: 0.2,  r: 420, color: "108,99,255", alpha: 0.06,  dx: 80,  dy: 55,  spd: 0.18 },
      { fx: 0.85, fy: 0.12, r: 350, color: "59,130,246",  alpha: 0.05,  dx: -70, dy: 65,  spd: 0.14 },
      { fx: 0.6,  fy: 0.8,  r: 300, color: "255,107,53",  alpha: 0.04,  dx: 55,  dy: -70, spd: 0.16 },
      { fx: 0.08, fy: 0.75, r: 280, color: "34,197,94",   alpha: 0.035, dx: 60,  dy: -45, spd: 0.2  },
      { fx: 0.5,  fy: 0.45, r: 500, color: "108,99,255",  alpha: 0.03,  dx: -45, dy: 30,  spd: 0.12 },
    ];

    const onResize = () => {
      W = window.innerWidth;
      H = document.documentElement.scrollHeight;
      canvas.width = W;
      canvas.height = H;
    };

    const onMouseMove = (e: MouseEvent) => {
      isMouseOnPage = true;
      const scrollY = window.scrollY;
      targetMouseX = e.clientX;
      targetMouseY = e.clientY + scrollY;
    };

    const onMouseLeave = () => { isMouseOnPage = false; };

    window.addEventListener("resize", onResize);
    window.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseleave", onMouseLeave);

    const CONNECT_DIST = 120;
    const MOUSE_ATTRACT_DIST = 180;
    const MOUSE_REPEL_DIST = 80;

    const draw = () => {
      ctx.clearRect(0, 0, W, H);
      tick += 0.006;

      // Smooth mouse follow
      mouseX += (targetMouseX - mouseX) * 0.08;
      mouseY += (targetMouseY - mouseY) * 0.08;

      // ── 1. Ambient orbs ──
      orbs.forEach((orb) => {
        const cx = orb.fx * W + Math.sin(tick * orb.spd) * orb.dx;
        const cy = orb.fy * H + Math.cos(tick * orb.spd * 0.7) * orb.dy;
        const grad = ctx.createRadialGradient(cx, cy, 0, cx, cy, orb.r);
        grad.addColorStop(0, `rgba(${orb.color},${orb.alpha})`);
        grad.addColorStop(1, "transparent");
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(cx, cy, orb.r, 0, Math.PI * 2);
        ctx.fill();
      });

      // ── 2. Mouse spotlight ──
      if (isMouseOnPage) {
        const spotR = 240;
        const spot = ctx.createRadialGradient(mouseX, mouseY, 0, mouseX, mouseY, spotR);
        spot.addColorStop(0, "rgba(108,99,255,0.07)");
        spot.addColorStop(0.5, "rgba(108,99,255,0.025)");
        spot.addColorStop(1, "transparent");
        ctx.fillStyle = spot;
        ctx.beginPath();
        ctx.arc(mouseX, mouseY, spotR, 0, Math.PI * 2);
        ctx.fill();
      }

      // ── 3. Update + draw particles ──
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Gentle drift
        p.x += p.vx;
        p.y += p.vy;

        // Soft boundary bounce
        if (p.x < 0 || p.x > W) p.vx *= -1;
        if (p.y < 0 || p.y > H) p.vy *= -1;
        p.x = Math.max(0, Math.min(W, p.x));
        p.y = Math.max(0, Math.min(H, p.y));

        // Mouse interaction
        if (isMouseOnPage) {
          const ddx = mouseX - p.x;
          const ddy = mouseY - p.y;
          const dist = Math.sqrt(ddx * ddx + ddy * ddy);

          if (dist < MOUSE_REPEL_DIST && dist > 0) {
            // Strong repulsion close to cursor
            const force = (MOUSE_REPEL_DIST - dist) / MOUSE_REPEL_DIST;
            p.vx -= (ddx / dist) * force * 0.6;
            p.vy -= (ddy / dist) * force * 0.6;
          } else if (dist < MOUSE_ATTRACT_DIST && dist > MOUSE_REPEL_DIST) {
            // Gentle attraction in outer ring
            const force = (1 - dist / MOUSE_ATTRACT_DIST) * 0.04;
            p.vx += (ddx / dist) * force;
            p.vy += (ddy / dist) * force;
          }
        }

        // Velocity damping
        p.vx *= 0.97;
        p.vy *= 0.97;

        // Pulsing size
        const pulse = 1 + Math.sin(tick * 1.8 + p.pulseOffset) * 0.3;
        const r = p.size * pulse;

        // Proximity to mouse increases brightness
        const mdx = mouseX - p.x;
        const mdy = mouseY - p.y;
        const mdist = Math.sqrt(mdx * mdx + mdy * mdy);
        const boost = isMouseOnPage ? Math.max(0, 1 - mdist / MOUSE_ATTRACT_DIST) : 0;
        const finalOpacity = Math.min(p.opacity + boost * 0.55, 0.95);
        const finalColor = boost > 0.3 ? "108,99,255" : p.color;

        ctx.beginPath();
        ctx.arc(p.x, p.y, r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${finalColor},${finalOpacity})`;
        ctx.fill();

        // Glow for bright particles
        if (boost > 0.2) {
          ctx.beginPath();
          ctx.arc(p.x, p.y, r * 3, 0, Math.PI * 2);
          const gGrad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, r * 3);
          gGrad.addColorStop(0, `rgba(108,99,255,${boost * 0.12})`);
          gGrad.addColorStop(1, "transparent");
          ctx.fillStyle = gGrad;
          ctx.fill();
        }

        // ── 4. Draw connection lines to nearby particles ──
        for (let j = i + 1; j < particles.length; j++) {
          const q = particles[j];
          const lx = p.x - q.x;
          const ly = p.y - q.y;
          const ldist = Math.sqrt(lx * lx + ly * ly);

          if (ldist < CONNECT_DIST) {
            const lineOpacity = (1 - ldist / CONNECT_DIST) * 0.18;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(q.x, q.y);
            ctx.strokeStyle = `rgba(108,99,255,${lineOpacity})`;
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        }

        // ── 5. Lines from particle to mouse cursor ──
        if (isMouseOnPage && mdist < CONNECT_DIST * 1.4) {
          const lineOp = (1 - mdist / (CONNECT_DIST * 1.4)) * 0.35;
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(mouseX, mouseY);
          ctx.strokeStyle = `rgba(108,99,255,${lineOp})`;
          ctx.lineWidth = 0.7;
          ctx.stroke();
        }
      }

      animFrame = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animFrame);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", onMouseLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        zIndex: 0,
      }}
    />
  );
}
