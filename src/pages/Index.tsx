import Navbar from "@/sections/Navbar";
import Hero from "@/sections/Hero";
import StatsRow from "@/sections/StatsRow";
import About from "@/sections/About";
import Skills from "@/sections/Skills";
import Certifications from "@/sections/Certifications";
import Projects from "@/sections/Projects";
import Volunteering from "@/sections/Volunteering";
import Contact from "@/sections/Contact";
import Footer from "@/sections/Footer";

const Index = () => {
  return (
    <div>
      <Navbar />
      <main>
        <Hero />
        <StatsRow />
        <About />
        <Skills />
        <Certifications />
        <Projects />
        <Volunteering />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
