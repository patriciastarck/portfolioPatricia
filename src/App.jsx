import { React, useEffect } from "react";

import About from "./components/About";
import Skills from "./components/Skills";

import Contact from "./components/Contact";
import Footer from "./components/Footer";
// Importe os estilos aqui
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

import Novo from "./components/Novo";
import AOS from "aos";
import "aos/dist/aos.css";
import ProjectCarousel from "./components/ProjectCarousel";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <main className="bg-gray-950">
      <Novo />
      <About />
      <Skills />
      <ProjectCarousel />

      <Contact />
      <Footer />
    </main>
  );
}

export default App;
