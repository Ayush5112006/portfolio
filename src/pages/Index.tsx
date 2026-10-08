import ParticleCanvas from "@/components/ParticleCanvas";
import CursorGlow from "@/components/CursorGlow";
import ScrollProgress from "@/components/ScrollProgress";
import Preloader from "@/components/Preloader";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustStrip from "@/components/TrustStrip";
import About from "@/components/About";
import WhatIBring from "@/components/WhatIBring";
import AiFocus from "@/components/AiFocus";
import Skills from "@/components/Skills";
import CurrentlyExploring from "@/components/CurrentlyExploring";
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
      <Preloader />
      <ScrollProgress />
      <CursorGlow />
      <ParticleCanvas />
      <Navbar />
      <Hero />
      <TrustStrip />
      <About />
      <WhatIBring />
      <AiFocus />
      <Skills />
      <CurrentlyExploring />
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
