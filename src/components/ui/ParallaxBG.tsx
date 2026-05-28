"use client";
import { useEffect, useRef } from "react";

interface Layer {
  x: string;
  y: string;
  size: number;
  speed: number;      // parallax speed multiplier
  opacity: number;
  blur: number;
  shape: "circle" | "ring" | "cross";
  color: string;
  rotate?: number;
  rotateSpeed?: number;
}

const LAYERS: Layer[] = [
  { x: "8%",  y: "15%",  size: 180, speed: 0.12, opacity: 0.045, blur: 40, shape: "circle", color: "108,99,255" },
  { x: "88%", y: "8%",   size: 120, speed: 0.08, opacity: 0.04,  blur: 30, shape: "circle", color: "59,130,246" },
  { x: "75%", y: "50%",  size: 200, speed: 0.15, opacity: 0.035, blur: 50, shape: "circle", color: "108,99,255" },
  { x: "5%",  y: "70%",  size: 140, speed: 0.1,  opacity: 0.04,  blur: 35, shape: "circle", color: "34,197,94"  },
  { x: "50%", y: "30%",  size: 300, speed: 0.06, opacity: 0.025, blur: 70, shape: "circle", color: "108,99,255" },
  { x: "20%", y: "85%",  size: 90,  speed: 0.18, opacity: 0.05,  blur: 20, shape: "ring",   color: "108,99,255", rotate: 0, rotateSpeed: 0.3 },
  { x: "92%", y: "65%",  size: 70,  speed: 0.2,  opacity: 0.04,  blur: 0,  shape: "ring",   color: "59,130,246", rotate: 0, rotateSpeed: -0.2 },
  { x: "40%", y: "90%",  size: 50,  speed: 0.25, opacity: 0.03,  blur: 0,  shape: "cross",  color: "108,99,255", rotate: 45, rotateSpeed: 0.15 },
  { x: "62%", y: "20%",  size: 40,  speed: 0.22, opacity: 0.04,  blur: 0,  shape: "cross",  color: "255,107,53", rotate: 0,  rotateSpeed: -0.25 },
];

export default function ParallaxBG() {
  const containerRef = useRef<HTMLDivElement>(null);
  const layerRefs = useRef<(HTMLDivElement | null)[]>([]);
  const tickRef = useRef(0);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    let scrollY = window.scrollY;

    const onScroll = () => { scrollY = window.scrollY; };
    window.addEventListener("scroll", onScroll, { passive: true });

    const animate = () => {
      tickRef.current += 0.008;
      LAYERS.forEach((layer, i) => {
        const el = layerRefs.current[i];
        if (!el) return;

        const ty = -(scrollY * layer.speed);
        const tx = Math.sin(tickRef.current * 0.4 + i) * 8;
        const rot = (layer.rotate ?? 0) + tickRef.current * (layer.rotateSpeed ?? 0) * 20;

        el.style.transform = `translate(${tx}px, ${ty}px) rotate(${rot}deg)`;
      });

      rafRef.current = requestAnimationFrame(animate);
    };

    animate();
    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      style={{
        position: "fixed",
        inset: 0,
        pointerEvents: "none",
        zIndex: 0,
        overflow: "hidden",
      }}
    >
      {LAYERS.map((layer, i) => (
        <div
          key={i}
          ref={el => { layerRefs.current[i] = el; }}
          style={{
            position: "absolute",
            left: layer.x,
            top: layer.y,
            width: layer.size,
            height: layer.size,
            willChange: "transform",
          }}
        >
          {layer.shape === "circle" && (
            <div style={{
              width: "100%",
              height: "100%",
              borderRadius: "50%",
              background: `rgba(${layer.color},${layer.opacity})`,
              filter: `blur(${layer.blur}px)`,
            }} />
          )}
          {layer.shape === "ring" && (
            <div style={{
              width: "100%",
              height: "100%",
              borderRadius: "50%",
              border: `1.5px solid rgba(${layer.color},${layer.opacity * 3})`,
              boxShadow: `0 0 ${layer.size * 0.3}px rgba(${layer.color},${layer.opacity * 0.5})`,
            }} />
          )}
          {layer.shape === "cross" && (
            <div style={{ width: "100%", height: "100%", position: "relative", opacity: layer.opacity * 8 }}>
              <div style={{ position: "absolute", top: "50%", left: 0, right: 0, height: 1.5, background: `rgba(${layer.color},0.6)`, transform: "translateY(-50%)" }} />
              <div style={{ position: "absolute", left: "50%", top: 0, bottom: 0, width: 1.5, background: `rgba(${layer.color},0.6)`, transform: "translateX(-50%)" }} />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
