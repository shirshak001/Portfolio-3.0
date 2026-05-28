"use client";
import { useEffect, useRef } from "react";

export default function CursorEffect() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);
  const posRef = useRef({ x: 0, y: 0 });
  const followerPos = useRef({ x: 0, y: 0 });
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const cursor = cursorRef.current;
    const follower = followerRef.current;
    if (!cursor || !follower) return;

    const onMove = (e: MouseEvent) => {
      posRef.current = { x: e.clientX, y: e.clientY };
      cursor.style.left = e.clientX + "px";
      cursor.style.top = e.clientY + "px";
    };

    const animate = () => {
      followerPos.current.x += (posRef.current.x - followerPos.current.x) * 0.1;
      followerPos.current.y += (posRef.current.y - followerPos.current.y) * 0.1;
      if (follower) {
        follower.style.left = followerPos.current.x + "px";
        follower.style.top = followerPos.current.y + "px";
      }
      rafRef.current = requestAnimationFrame(animate);
    };

    const onEnter = () => {
      if (cursor) cursor.style.transform = "translate(-50%, -50%) scale(1.5)";
      if (follower) follower.style.transform = "translate(-50%, -50%) scale(1.8)";
    };

    const onLeave = () => {
      if (cursor) cursor.style.transform = "translate(-50%, -50%) scale(1)";
      if (follower) follower.style.transform = "translate(-50%, -50%) scale(1)";
    };

    document.addEventListener("mousemove", onMove);
    document.querySelectorAll("a, button, [role='button']").forEach((el) => {
      el.addEventListener("mouseenter", onEnter);
      el.addEventListener("mouseleave", onLeave);
    });
    rafRef.current = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <>
      <div
        ref={cursorRef}
        style={{
          position: "fixed",
          width: "8px",
          height: "8px",
          borderRadius: "50%",
          background: "var(--accent)",
          pointerEvents: "none",
          zIndex: 99999,
          transform: "translate(-50%, -50%)",
          transition: "transform 150ms cubic-bezier(0.4, 0, 0.2, 1)",
          willChange: "left, top",
        }}
      />
      <div
        ref={followerRef}
        style={{
          position: "fixed",
          width: "32px",
          height: "32px",
          borderRadius: "50%",
          border: "1.5px solid rgba(108, 99, 255, 0.5)",
          pointerEvents: "none",
          zIndex: 99998,
          transform: "translate(-50%, -50%)",
          transition: "transform 300ms cubic-bezier(0.4, 0, 0.2, 1)",
          willChange: "left, top",
        }}
      />
    </>
  );
}
