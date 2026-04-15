import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Hero from "./components/Hero";
import Hobbies from "./components/Hobbies";
import Projects from "./components/Projects";
import ScrollEnhancements from "./components/ScrollEnhancements";
import Skills from "./components/Skills";
import Timeline from "./components/Timeline";

export default function HomePage() {
  return (
    <main className="overflow-x-hidden">
      <ScrollEnhancements />
      <Hero />
      <Timeline />
      <Projects />
      <Certifications />
      <Experience />
      <Skills />
      <Hobbies />
      <Contact />
    </main>
  );
}
