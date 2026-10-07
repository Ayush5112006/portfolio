import ParticleCanvas from "@/components/ParticleCanvas";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import AiFocus from "@/components/AiFocus";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import ResumeCTA from "@/components/ResumeCTA";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative">
      <ParticleCanvas />
      <Navbar />
      <Hero />
      <About />
      <AiFocus />
      <Skills />
      <Projects />
      <Services />
      <Experience />
      <Education />
      <ResumeCTA />
      <Contact />
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;
