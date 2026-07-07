import SmoothScroll from "@/components/SmoothScroll";

import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Story from "@/components/Story";
import Work from "@/components/Work";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <SmoothScroll>
      
      <Nav />
      <main className="relative z-10">
        <Hero />
        <Story />
        <Work />
        <Contact />
      </main>
      <Footer />
    </SmoothScroll>
  );
}
