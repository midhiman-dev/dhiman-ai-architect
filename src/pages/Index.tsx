import Navbar from "@/sections/Navbar";
import Hero from "@/sections/Hero";
import StatsRow from "@/sections/StatsRow";
import About from "@/sections/About";
import Skills from "@/sections/Skills";
import Certifications from "@/sections/Certifications";
import Projects from "@/sections/Projects";
import Contact from "@/sections/Contact";
import Footer from "@/sections/Footer";

const Index = () => {
  return (
    <div>
      <Navbar />
      <main>
        <Hero />
        <StatsRow />
        <Projects />
        <Skills />
        <About />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
