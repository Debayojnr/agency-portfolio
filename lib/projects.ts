// ---------------------------------------------------------------------------
// PROJECTS — each one is a scroll chapter, not a card.
// SCREENSHOT SLOTS: drop real captures into /public/work/ with the filenames
// below. Styled placeholders render until you do, so nothing blocks launch.
// ---------------------------------------------------------------------------
export type Project = {
  index: string;
  name: string;
  year: string;
  role: string;
  stack: string;
  problem: string;   // what the business needed
  build: string;     // what you built
  detail: string;    // the one detail that mattered
  url?: string;
  shots: { src: string; caption: string }[];
};

export const projects: Project[] = [
  {
    index: "01",
    name: "Ironclad Motors",
    year: "2026",
    role: "Concept · design + build",
    stack: "Next.js · GSAP · Storyblok",
    problem:
      "Car buyers in Lagos lead with one fear: getting scammed. A showroom site that looks like every other showroom site does nothing to answer it.",
    build:
      "A digital showroom built around a single idea, the inspection is the product. Scroll-driven storytelling, a pinned chapter where a 247-point inspection counter rolls as stamps land, and an inventory the sales team edits from a CMS without touching code.",
    detail:
      "The whole site is engineered so trust is shown, not claimed. The counter isn't decoration, it's the checklist, on screen, earning the sale as you scroll.",
    url: "https://ironclad-motors.vercel.app",
    shots: [
      { src: "/work/ironclad-hero.jpg", caption: "Hero — the thesis: every car interrogated" },
      { src: "/work/ironclad-inspection.jpg", caption: "The pinned 247-point inspection chapter" },
    ],
  },
  {
    index: "02",
    name: "One Height Plus",
    year: "2026",
    role: "Full platform · solo build",
    stack: "SvelteKit · Supabase · automation",
    problem:
      "A property business running on scattered listings and manual work, with no system that could scale or run without someone watching it.",
    build:
      "A full property platform: public listings, a secured admin panel, and an AI voiceover pipeline that turns listing details into narrated video automatically.",
    detail:
      "The automation runs while everyone sleeps. A raw property video is uploaded; a narrated video comes out the other side with no one touching it.",
    url: "https://oneheightplushomes.com",
    shots: [
      { src: "/work/ohp-home.jpg", caption: "Public listings, built to scale" },
      { src: "/work/ohp-admin.jpg", caption: "The secured admin panel" },
    ],
  },
  {
    index: "03",
    name: "Solaha Classic Wears",
    year: "2026",
    role: "Design + build",
    stack: "Next.js · Vercel · GA4",
    problem:
      "A clothing brand with no online home, losing customers to anyone who could be found on a phone screen.",
    build:
      "A fast, mobile-first storefront landing page with analytics wired in from day one, social and WhatsApp routes built for how Lagos actually shops.",
    detail:
      "This was the first thing I put my name on that a real business ran on. Everything after it traces back here.",
    url: "https://solahaclassicwears.com",
    shots: [
      { src: "/work/solaha-hero.jpg", caption: "Mobile-first storefront" },
      { src: "/work/solaha-shop.jpg", caption: "Built around how Lagos shops" },
    ],
  },
  {
    index: "04",
    name: "Independent Restoration",
    year: "2026",
    role: "Conversion rebuild",
    stack: "Single-file build · LocalBusiness schema",
    problem:
      "A restoration company's homepage buried its best selling points in walls of text, invisible to a panicking customer with a flooded house at 2am.",
    build:
      "A ground-up rebuild reorganised around the emergency moment: tap-to-call and callback capture up top, the real promises (fast response, insurance-direct, no money up front) pulled to where a stressed person meets them in seconds.",
    detail:
      "Same business, same facts, just reordered around the one moment that matters. Design as triage, not decoration.",
    url: "https://irs615rebuild.netlify.app",
    shots: [
      { src: "/work/irs-hero.jpg", caption: "Rebuilt around the emergency moment" },
      { src: "/work/irs-before.jpg", caption: "Selling points pulled to the top" },
    ],
  },
];
