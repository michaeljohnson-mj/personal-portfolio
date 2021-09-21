import { useState, useEffect } from "react";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandPointUp } from "@fortawesome/free-regular-svg-icons";
import { faCog } from "@fortawesome/free-solid-svg-icons";
import {
  chosenTheme,
  blueTheme,
  redTheme,
  yellowTheme,
  orangeTheme,
  greenTheme,
  purpleTheme,
  tealTheme,
  pinkTheme,
  brownTheme,
  beigeTheme,
} from "./theme";
import { constants } from "./constants";
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
  const [selectedThemeColor, setThemeColor] = useState(chosenTheme);
  const [isThemePanelOpen, setThemePanelVisibility] = useState(false);

  const colors = [
    { color: "#007bff", name: "blue" },
    { color: "#e54b4b", name: "red" },
    { color: "#01a479", name: "green" },
    { color: "#fdd76e", name: "yellow" },
    { color: "#f95700", name: "orange" },
    { color: "#6c63ff", name: "purple" },
    { color: "#21d4b9", name: "teal" },
    { color: "#fe6d73", name: "pink" },
    { color: "#8b5e34", name: "brown" },
    { color: "#ecce96", name: "beige" },
  ];

  // Component Did Mount
  useEffect(() => {
    let selectedTheme = localStorage.getItem("selectedTheme");

    if (selectedTheme === null) {
      localStorage.setItem(
        constants.selectedThemeKey,
        JSON.stringify(chosenTheme)
      );
      setThemeColor(selectedThemeColor);
    }
  }, []);

  // TODO: Fix this method for persisting the theme in local storage
  // Component Did Update
  useEffect(() => {
    setThemeColor(selectedThemeColor);
    localStorage.setItem(
      constants.selectedThemeKey,
      JSON.stringify(selectedThemeColor)
    );
  }, [selectedThemeColor]);

  const changeTheme = (themeColor: string) => {
    let themeColorSelected: any;
    if (themeColor === "blue") {
      themeColorSelected = blueTheme;
    } else if (themeColor === "red") {
      themeColorSelected = redTheme;
    } else if (themeColor === "yellow") {
      themeColorSelected = yellowTheme;
    } else if (themeColor === "green") {
      themeColorSelected = greenTheme;
    } else if (themeColor === "orange") {
      themeColorSelected = orangeTheme;
    } else if (themeColor === "purple") {
      themeColorSelected = purpleTheme;
    } else if (themeColor === "teal") {
      themeColorSelected = tealTheme;
    } else if (themeColor === "pink") {
      themeColorSelected = pinkTheme;
    } else if (themeColor === "brown") {
      themeColorSelected = brownTheme;
    } else if (themeColor === "beige") {
      themeColorSelected = beigeTheme;
    }

    localStorage.setItem(
      constants.selectedThemeKey,
      JSON.stringify(themeColorSelected)
    );
    setThemeColor(themeColorSelected);
    closeThemePalette();
  };

  const toggleThemePalette = () => {
    const themeSettings = document.getElementById("themeSettings");
    if (themeSettings) {
      themeSettings.style.left = "240px";
    }

    const themePalette = document.getElementById("themePalette");
    if (themePalette) {
      themePalette.style.left = "0px";
      setThemePanelVisibility(true);
    }

    if (themePalette && themeSettings && isThemePanelOpen) {
      themePalette.style.left = "-240px";
      themeSettings.style.left = "0px";
      setThemePanelVisibility(false);
    }
  };

  const closeThemePalette = () => {
    const themeSettings = document.getElementById("themeSettings");
    if (themeSettings) {
      themeSettings.style.left = "0px";
    }

    const themePalette = document.getElementById("themePalette");
    if (themePalette) {
      themePalette.style.left = "-240px";
    }

    setThemePanelVisibility(false);
  };

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
      <Header theme={selectedThemeColor} />
      <Home theme={selectedThemeColor} />
      <Skills theme={selectedThemeColor} />
      <Experience theme={selectedThemeColor} />
      <Projects theme={selectedThemeColor} />
      <ContactMe theme={selectedThemeColor} />
      <Footer theme={selectedThemeColor} />

      <div
        className={isVisible ? "scroll-to-top" : "hide-scroll-to-top"}
        style={{ background: selectedThemeColor.secondaryColor }}
        onClick={() => scrollToTop()}
        title="Scroll To Top"
      >
        <FontAwesomeIcon color="#ffffff" icon={faHandPointUp} size={"lg"} />
      </div>

      <div id="themePalette" className="theme-panel">
        <h6 className="theme-palette-heading">Select your color</h6>
        <div className="theme-palette-holder">
          {colors.map((color, index) => {
            return (
              <div
                title={color.name}
                key={index}
                onClick={() => changeTheme(color.name)}
                className="color-holder"
              >
                <a href="javascript:void(0)" style={{ background: color.color }} className="color" />
              </div>
            );
          })}
        </div>
      </div>

      <div
        id="themeSettings"
        className="theme-settings-btn"
        onClick={() => toggleThemePalette()}
        title="Theme Settings"
      >
        <FontAwesomeIcon
          className="fa-spin"
          color={selectedThemeColor.themeColor}
          icon={faCog}
          size={"lg"}
        />
      </div>
    </div>
  );
}

export default App;
