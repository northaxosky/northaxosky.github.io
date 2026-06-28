"use client";

import { useEffect, useRef } from "react";

/**
 * Interactive instrument grid: a field of dots that responds to scroll (a moving
 * "scan" band tied to scroll progress) and the cursor (nearby dots light up and
 * connect to the pointer). Idle pulse keeps it alive. Accent: green.
 */
export function InstrumentGrid() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const GAP = 40;
    const mouse = { x: -9999, y: -9999 };
    let w = 0;
    let h = 0;
    let scrollP = 0;
    let raf = 0;

    const resize = () => {
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    const onMouse = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };
    const onLeave = () => {
      mouse.x = -9999;
      mouse.y = -9999;
    };
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      scrollP = max > 0 ? window.scrollY / max : 0;
    };

    const A = "0,220,130";

    const draw = (t: number) => {
      ctx.clearRect(0, 0, w, h);
      const scanY = scrollP * h;
      const cols = Math.ceil(w / GAP) + 1;
      const rows = Math.ceil(h / GAP) + 1;

      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          const x = i * GAP;
          const y = j * GAP;

          let alpha = 0.1;
          let accent = 0;

          const ds = Math.abs(y - scanY);
          if (ds < 90) {
            const k = 1 - ds / 90;
            alpha = Math.max(alpha, 0.12 + 0.45 * k);
            accent = Math.max(accent, k);
          }

          const dx = x - mouse.x;
          const dy = y - mouse.y;
          const dm = Math.hypot(dx, dy);
          if (dm < 150) {
            const k = 1 - dm / 150;
            alpha = Math.max(alpha, 0.15 + 0.7 * k);
            accent = Math.max(accent, k);
            if (k > 0.25) {
              ctx.strokeStyle = `rgba(${A},${0.18 * k})`;
              ctx.lineWidth = 1;
              ctx.beginPath();
              ctx.moveTo(x, y);
              ctx.lineTo(mouse.x, mouse.y);
              ctx.stroke();
            }
          }

          if (!reduced) alpha += 0.03 * Math.sin(t * 0.001 + i * 0.3 + j * 0.2);
          alpha = Math.max(0, Math.min(0.9, alpha));

          const size = accent > 0.2 ? 1.8 : 1;
          ctx.fillStyle =
            accent > 0.2 ? `rgba(${A},${alpha})` : `rgba(220,220,228,${alpha})`;
          ctx.fillRect(x - size / 2, y - size / 2, size, size);
        }
      }
      if (!reduced) raf = requestAnimationFrame(draw);
    };

    resize();
    onScroll();
    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", onMouse, { passive: true });
    window.addEventListener("mouseout", onLeave);
    window.addEventListener("scroll", onScroll, { passive: true });

    const onVis = () => {
      if (document.hidden) {
        cancelAnimationFrame(raf);
      } else if (!reduced) {
        raf = requestAnimationFrame(draw);
      }
    };
    document.addEventListener("visibilitychange", onVis);

    if (reduced) draw(0);
    else raf = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMouse);
      window.removeEventListener("mouseout", onLeave);
      window.removeEventListener("scroll", onScroll);
      document.removeEventListener("visibilitychange", onVis);
    };
  }, []);

  return (
    <canvas
      ref={ref}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0"
    />
  );
}
