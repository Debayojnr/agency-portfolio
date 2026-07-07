"use client";
// SIGNATURE: a single line that draws itself down the page as you scroll,
// stitching hero -> story -> the four projects -> contact into one spine.
// It is the one memorable element; everything else stays quiet around it.
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Thread() {
  const path = useRef<SVGPathElement>(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const el = path.current;
    if (!el) return;
    const len = el.getTotalLength();
    el.style.strokeDasharray = String(len);
    el.style.strokeDashoffset = reduce ? "0" : String(len);
    if (reduce) return;
    const st = gsap.to(el, {
      strokeDashoffset: 0,
      ease: "none",
      scrollTrigger: { start: 0, end: "max", scrub: 0.5 },
    });
    return () => { st.scrollTrigger?.kill(); st.kill(); };
  }, []);

  return (
    <svg
      aria-hidden
      className="pointer-events-none fixed inset-0 z-0 h-full w-full"
      preserveAspectRatio="none"
      viewBox="0 0 100 100"
    >
      {/* a gentle vertical S-curve; scrubs from top to bottom on scroll */}
      <path
        ref={path}
        d="M50 0 C 30 18, 70 30, 50 48 S 30 74, 50 100"
        fill="none"
        stroke="#C65A2E"
        strokeWidth="0.35"
        vectorEffect="non-scaling-stroke"
        opacity="0.55"
      />
    </svg>
  );
}
