import React, { useEffect, useRef } from "react";

export default function Sphere() {
  const ref = useRef(null);
  useEffect(() => {
    const c = ref.current, ctx = c.getContext("2d");
    const N = 1100, pts = [];
    for (let i = 0; i < N; i++) {
      const y = 1 - (i / (N - 1)) * 2, r = Math.sqrt(1 - y * y), a = i * 2.39996;
      pts.push([Math.cos(a) * r, y, Math.sin(a) * r]);
    }
    const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
    let rot = 0, raf, w, h;
    const size = () => {
      const d = devicePixelRatio || 1, b = c.getBoundingClientRect();
      w = b.width; h = b.height; c.width = w * d; c.height = h * d; ctx.setTransform(d, 0, 0, d, 0, 0);
    };
    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      const R = Math.min(w, h) * 0.42, cs = Math.cos(rot), sn = Math.sin(rot);
      for (const [x, y, z] of pts) {
        const X = x * cs + z * sn, Z = -x * sn + z * cs, p = (Z + 1) / 2;
        const edge = 1 - Math.abs(Z);
        ctx.fillStyle = edge > 0.82 ? `rgba(253,233,255,${0.25 + p * 0.6})` : `rgba(${130 + p * 100},${230 + p * 25},${225 + p * 30},${0.12 + p * 0.75})`;
        ctx.beginPath(); ctx.arc(w / 2 + X * R, h / 2 + y * R, 0.7 + p * 1.5, 0, 6.283); ctx.fill();
      }
      if (!reduce) { rot += 0.0035; raf = requestAnimationFrame(draw); }
    };
    size(); draw();
    addEventListener("resize", size); if (reduce) addEventListener("resize", draw);
    return () => { cancelAnimationFrame(raf); removeEventListener("resize", size); removeEventListener("resize", draw); };
  }, []);
  return <canvas ref={ref} className="sphere" aria-hidden="true" />;
}
