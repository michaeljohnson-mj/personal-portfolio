import { useState } from "react";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { Link, animateScroll as scroll } from "react-scroll";

function activeLinkStyle(theme: string) {
  switch (theme) {
    case "blue":
      return "active-blue";
    case "green":
      return "active-green";
    case "red":
      return "active-red";
    case "yellow":
      return "active-yellow";
    case "orange":
      return "active-orange";
    case "purple":
      return "active-purple";
    case "brown":
      return "active-brown";
    case "beige":
      return "active-beige";
    case "teal":
      return "active-teal";
    case "pink":
      return "active-pink";
    default:
      return "active-blue";
  }
}

function Header(props: any) {
  const kLinkedinUrl = "https://www.linkedin.com/in/michaeljohnson-mj/";
  const theme = props.theme;
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
          <FontAwesomeIcon color={theme.themeColor} icon={faBars} id="btn" />
          <FontAwesomeIcon
            color={theme.themeColor}
            icon={faTimes}
            id="cancel"
          />
        </label>
        <div className="logo" style={{ color: theme.themeColor }}>
          MJ
        </div>
        <ul>
          <li>
            <Link
              activeClass={activeLinkStyle(theme.name)}
              to="home"
              spy={true}
              smooth={true}
              duration={500}
            >
              HOME
            </Link>
          </li>
          <li>
            <Link
              activeClass={activeLinkStyle(theme.name)}
              to="skills"
              spy={true}
              smooth={true}
              duration={500}
            >
              SKILLS
            </Link>
          </li>
          <li>
            <Link
              activeClass={activeLinkStyle(theme.name)}
              to="experience"
              spy={true}
              smooth={true}
              duration={500}
            >
              EXPERIENCE
            </Link>
          </li>
          <li>
            <Link
              activeClass={activeLinkStyle(theme.name)}
              to="projects"
              spy={true}
              smooth={true}
              duration={500}
            >
              PROJECTS
            </Link>
          </li>
          <li>
            <Link
              activeClass={activeLinkStyle(theme.name)}
              to="contact"
              spy={true}
              smooth={true}
              duration={500}
            >
              CONTACT
            </Link>
          </li>
          <li>
            <a href={kLinkedinUrl} target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon
                title={"Michael Johnson's LinkedIn"}
                className="font-awesome-icon"
                color={theme.themeColor}
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
