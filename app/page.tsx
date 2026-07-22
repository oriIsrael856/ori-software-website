import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TechMarquee from "@/components/TechMarquee";
import TilTeaser from "@/components/til/TilTeaser";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Process from "@/components/Process";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <TilTeaser />
      <TechMarquee />
      <Projects />
      <About />
      <Process />
      <Contact />
      <Footer />
    </main>
  );
}
