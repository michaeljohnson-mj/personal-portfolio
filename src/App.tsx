import { useState } from "react";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandPointUp } from "@fortawesome/free-regular-svg-icons";
import Home from "./components/home/Home";
import Header from "./components/header/Header";
import Skills from "./components/skills/Skills";
import Projects from "./components/projects/Projects";
import Experience from "./components/experience/Experience";
import Footer from "./components/footer/Footer";
import ContactMe from "./components/contact-me/ContactMe";

function scrollToTop() {
  window.scrollTo(0, 0);
}

function App() {
  const [isVisible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    const distanceScrolled = 300;
    if (scrolled > distanceScrolled) {
      setVisible(true);
    } else if (scrolled <= distanceScrolled) {
      setVisible(false);
    }
  };

  window.addEventListener("scroll", toggleVisible);

  return (
    <div>
      <Header />
      <Home />
      <Skills />
      <Experience />
      <Projects />
      <ContactMe />
      <Footer />
      <div
        className={isVisible ? "scroll-to-top" : "hide-scroll-to-top"}
        onClick={() => scrollToTop()}
        title="Scroll To Top"
      >
        <FontAwesomeIcon
          color="#ffffff"
          icon={faHandPointUp}
          size={"lg"}
        />
      </div>
    </div>
  );
}

export default App;
