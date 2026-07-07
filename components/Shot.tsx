"use client";
import { useState } from "react";

export default function Shot({
  src, alt, hint, className = "",
}: { src: string; alt: string; hint: string; className?: string }) {
  const [failed, setFailed] = useState(false);
  if (failed) {
    return (
      <div className={`w-full aspect-[16/10] flex items-center justify-center ${className}`}>
        <span className="text-steel font-mono text-[10px] tracking-widest uppercase px-6 text-center">{hint}</span>
      </div>
    );
  }
  return (
    <img
      src={src}
      alt={alt}
      onError={() => setFailed(true)}
      style={{ maxWidth: "100%", height: "auto" }}
      className={`block mx-auto rounded-2xl ${className}`}
    />
  );
}