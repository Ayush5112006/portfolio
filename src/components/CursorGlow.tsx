import { useEffect, useRef } from "react";

/**
 * Desktop-only soft radial glow that follows the cursor.
 * Never replaces the native cursor and never draws trails.
 * Disabled on touch devices and for reduced-motion users via CSS + JS guard.
 */
const CursorGlow = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduced) return;

    let frame = 0;
    let targetX = window.innerWidth / 2;
    let targetY = window.innerHeight / 2;
    let currentX = targetX;
    let currentY = targetY;

    const render = () => {
      currentX += (targetX - currentX) * 0.12;
      currentY += (targetY - currentY) * 0.12;
      el.style.setProperty("--cx", `${currentX}px`);
      el.style.setProperty("--cy", `${currentY}px`);
      frame = requestAnimationFrame(render);
    };

    const onMove = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
      el.classList.add("is-active");
    };

    const onLeave = () => el.classList.remove("is-active");

    window.addEventListener("mousemove", onMove, { passive: true });
    document.addEventListener("mouseleave", onLeave);
    frame = requestAnimationFrame(render);

    return () => {
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
      cancelAnimationFrame(frame);
    };
  }, []);

  return <div ref={ref} className="cursor-spotlight" aria-hidden="true" />;
};

export default CursorGlow;
