"use client";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { site } from "@/lib/site";

export default function Hero() {
  const root = useRef<HTMLElement>(null);
  useLayoutEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const ctx = gsap.context(() => {
      if (reduce) return;
      gsap.fromTo(".h-line span", { yPercent: 115 }, { yPercent: 0, duration: 1, ease: "power4.out", stagger: 0.12, delay: 0.1 });
      gsap.fromTo([".h-eyebrow", ".h-body", ".h-cta"], { opacity: 0, y: 22 }, { opacity: 1, y: 0, duration: 0.8, ease: "power3.out", stagger: 0.12, delay: 0.5 });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} className="relative z-10 shell min-h-[100svh] flex flex-col justify-center pt-24 pb-20">
      <p className="h-eyebrow eyebrow mb-6">Lagos · builder · websites, automation, AI</p>
      <h1 className="font-display font-extrabold leading-[0.95] tracking-[-0.03em] text-[clamp(40px,7vw,88px)] max-w-4xl">
        <span className="h-line block overflow-hidden pb-[0.2em] -mb-[0.2em]"><span className="block">I build things</span></span>
        <span className="h-line block overflow-hidden pb-[0.2em] -mb-[0.2em]"><span className="block">that businesses</span></span>
        <span className="h-line block overflow-hidden pb-[0.2em] -mb-[0.2em]"><span className="block font-serif italic font-normal text-clay">actually run on.</span></span>
      </h1>
      <p className="h-body mt-8 max-w-xl text-[18px] leading-relaxed text-ink/80">{site.heroLead}</p>
      <div className="h-cta mt-9 flex flex-wrap gap-3">
        <a href="#work" className="rounded-full bg-ink text-cream px-6 py-3 font-medium hover:bg-clay transition-colors">See the work</a>
        <a href="#contact" className="rounded-full border border-ink/25 px-6 py-3 font-medium hover:border-ink transition-colors">Get in touch</a>
      </div>
    </section>
  );
}