"use client";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Seam({
  left, right, className = "",
}: { left: React.ReactNode; right: React.ReactNode; className?: string }) {
  const root = useRef<HTMLDivElement>(null);
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || !root.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(".seam-left", { xPercent: -18, opacity: 0 }, {
        xPercent: 0, opacity: 1, ease: "power2.out",
        scrollTrigger: { trigger: root.current, start: "top 88%", end: "top 30%", scrub: 1.2 },
      });
      gsap.fromTo(".seam-right", { xPercent: 18, opacity: 0 }, {
        xPercent: 0, opacity: 1, ease: "power2.out",
        scrollTrigger: { trigger: root.current, start: "top 88%", end: "top 30%", scrub: 1.2 },
      });
    }, root);
    return () => ctx.revert();
  }, []);
  return (
    <div ref={root} className={`grid gap-10 lg:grid-cols-2 lg:items-center ${className}`}>
      <div className="seam-left">{left}</div>
      <div className="seam-right">{right}</div>
    </div>
  );
}