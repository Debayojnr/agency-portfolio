import { site } from "@/lib/site";
import Reveal from "./Reveal";

export default function Contact() {
  return (
    <section id="contact" className="relative z-10 border-t border-hairline">
      <div className="shell py-28 sm:py-36">
        <Reveal><p className="eyebrow mb-5 text-clay">Let's talk</p></Reveal>
        <Reveal>
          <h2 className="font-display font-extrabold tracking-[-0.03em] leading-[0.98] text-[clamp(34px,6vw,72px)] max-w-3xl">
            Got something that needs building?
          </h2>
        </Reveal>
        <Reveal>
          <p className="mt-6 max-w-md text-[17px] leading-relaxed text-ink/80">
            Websites, automations, AI systems. Tell me what the business needs and I'll tell you honestly how I'd build it and when I can start.
          </p>
        </Reveal>
        <Reveal>
          <div className="mt-9 flex flex-wrap gap-3">
            <a href={`mailto:${site.email}`} className="rounded-full bg-ink text-cream px-6 py-3 font-medium hover:bg-clay transition-colors">Email me</a>
            <a href={site.github} className="rounded-full border border-ink/25 px-6 py-3 font-medium hover:border-ink transition-colors">GitHub</a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
