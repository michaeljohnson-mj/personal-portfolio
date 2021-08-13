import { useState } from "react";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

function Header() {
  const kLinkedinUrl = "https://www.linkedin.com/in/michaeljohnson-mj/";
  const [isHeaderBgChange, setHeaderBackground] = useState(false);

  const changeHeaderBackground = () => {
    const distanceScrolled = 100;
    if (window.scrollY >= distanceScrolled) {
      setHeaderBackground(true);
    } else {
      setHeaderBackground(false);
    }
  };

  window.addEventListener("scroll", changeHeaderBackground);

  return (
    <div className={isHeaderBgChange ? "header active" : "header"}>
      <div className="container header-container">
        <input type="checkbox" name="" id="check" />
        <label id="check-label" htmlFor="check">
          <FontAwesomeIcon icon={faBars} id="btn" />
          <FontAwesomeIcon icon={faTimes} id="cancel" />
        </label>
        <div className="logo">MJ</div>
        <ul>
          <li>
            <a href="/home">HOME</a>
          </li>
          <li>
            <a href="/skills">SKILLS</a>
          </li>
          <li>
            <a href="/experience">EXPERIENCE</a>
          </li>
          <li>
            <a href="/projects">PROJECTS</a>
          </li>
          <li>
            <a href="/contact">CONTACT</a>
          </li>
          <li>
            <a href={kLinkedinUrl} target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon
                title={"LinkedIn"}
                className="font-awesome-icon"
                icon={faLinkedin}
              />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
