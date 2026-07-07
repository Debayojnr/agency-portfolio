import { site } from "@/lib/site";
export default function Nav() {
  return (
    <header className="fixed top-0 inset-x-0 z-40 bg-cream/80 backdrop-blur border-b border-hairline">
      <div className="shell flex items-center justify-between h-16">
        <span className="font-mono text-[12px] tracking-[0.22em] uppercase flex items-center gap-2.5">
          <span className="h-2 w-2 rounded-full bg-clay" />{site.name}
        </span>
        <nav className="flex items-center gap-6 text-sm">
          <a href="#work" className="hidden sm:inline text-steel hover:text-ink transition-colors">Work</a>
          <a href="#story" className="hidden sm:inline text-steel hover:text-ink transition-colors">Story</a>
          <a href="#contact" className="rounded-full bg-ink text-cream px-5 py-2.5 text-[13px] font-medium hover:bg-clay transition-colors">
            Get in touch
          </a>
        </nav>
      </div>
    </header>
  );
}
