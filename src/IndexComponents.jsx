import { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";

import {
  About,
  Contact,
  Experience,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
  Footer,
} from "./components";

const IndexComponents = () => {
  useEffect(() => {
    const handlerContextMenu = (e) => {
      e.preventDefault();
    };

    document.addEventListener("contextmenu", handlerContextMenu);
    document.onkeydown = (e) => {
      if (e.keyCode === 123 || (e.ctrlKey && e.keyCode === "U".charCodeAt(0)))
        return false;
    };
  }, []);

  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default IndexComponents;
