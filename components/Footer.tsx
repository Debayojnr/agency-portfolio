import { site } from "@/lib/site";
export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-hairline">
      <div className="shell py-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 font-mono text-[12px] tracking-[0.1em] uppercase text-steel">
        <span>{site.name} · Lagos</span>
        <span className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-clay" /> Available for work</span>
      </div>
    </footer>
  );
}
