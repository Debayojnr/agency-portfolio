import { projects } from "@/lib/projects";
import Seam from "./Seam";
import Shot from "./Shot";

export default function Work() {
  return (
    <section id="work" className="relative z-10">
      <div className="shell pt-8 pb-4">
        <p className="eyebrow text-clay">Selected work</p>
      </div>
      {projects.map((p) => (
        <article key={p.index} className="border-t border-hairline">
          <div className="shell py-20 sm:py-28">
            <div className="flex items-baseline gap-4 mb-12">
              <span className="font-mono text-clay text-sm">{p.index}</span>
              <h3 className="font-display font-extrabold tracking-[-0.03em] leading-none text-[clamp(30px,5.5vw,64px)]">{p.name}</h3>
            </div>
            <Seam
              left={
                <div className="space-y-8">
                  <p className="mt-3 font-mono text-[11px] tracking-[0.12em] uppercase text-steel">{p.role} · {p.stack} · {p.year}</p>
                  <div>
                    <p className="eyebrow mb-2">The problem</p>
                    <p className="text-[17px] leading-relaxed text-ink/85">{p.problem}</p>
                  </div>
                  <div>
                    <p className="eyebrow mb-2">What I built</p>
                    <p className="text-[17px] leading-relaxed text-ink/85">{p.build}</p>
                  </div>
                  <div className="border-l-2 border-clay pl-5">
                    <p className="eyebrow mb-2 text-clay">The detail that mattered</p>
                    <p className="text-[17px] leading-relaxed text-ink">{p.detail}</p>
                  </div>
                  {p.url && (
                    <a href={p.url} target="_blank" rel="noreferrer"
                       className="inline-block rounded-full bg-ink text-cream px-6 py-3 font-medium hover:bg-clay transition-colors">
                      Visit {p.name} ↗
                    </a>
                  )}
                </div>
              }
              right={
                <div className="space-y-5">
                  {p.shots.map((s, i) => (
                    <figure key={i}>
                      <Shot src={s.src} alt={s.caption} hint={`screenshot -> public${s.src}`} />
                      <figcaption className="mt-2 font-mono text-[11px] tracking-[0.08em] uppercase text-steel">{s.caption}</figcaption>
                    </figure>
                  ))}
                </div>
              }
            />
          </div>
        </article>
      ))}
    </section>
  );
}
