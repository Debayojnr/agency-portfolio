import { site } from "@/lib/site";
import Seam from "./Seam";
import Shot from "./Shot";

export default function Story() {
  return (
    <section id="story" className="relative z-10 shell py-28 sm:py-36">
      <Seam
        left={
          <div>
            <p className="eyebrow mb-5 text-clay">Who I am</p>
            {site.story.map((para, i) => (
              <p key={i} className="font-display text-[clamp(22px,3vw,34px)] leading-[1.28] tracking-[-0.01em] mb-8">
                {para}
              </p>
            ))}
          </div>
        }
        right={
          <Shot src="/samson.jpg" alt="Samson" hint="your photo -> /public/samson.jpg" className="aspect-[4/5]" />
        }
      />
    </section>
  );
}
