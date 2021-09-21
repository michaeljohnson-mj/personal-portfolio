import "./Skills.css";
import { skills } from "../../portfolio";
import ic_html5 from "../../assets/images/skill-images/ic_html5.png";
import ic_css3 from "../../assets/images/skill-images/ic_css3.png";
import ic_angularjs from "../../assets/images/skill-images/ic_angularjs.png";
import ic_reactjs from "../../assets/images/skill-images/ic_reactjs.png";
import ic_react_native from "../../assets/images/skill-images/ic_react_native.png";
import ic_nodejs from "../../assets/images/skill-images/ic_nodejs.png";
import ic_javascript from "../../assets/images/skill-images/ic_javascript.png";
import ic_typescript from "../../assets/images/skill-images/ic_typescript.png";
import ic_redux from "../../assets/images/skill-images/ic_redux.png";
import ic_npm from "../../assets/images/skill-images/ic_npm.png";
import ic_git from "../../assets/images/skill-images/ic_git.png";
import ic_skills_blue from "../../assets/images/section-images/ic_skills_blue.svg";
import ic_skills_green from "../../assets/images/section-images/ic_skills_green.svg";
import ic_skills_red from "../../assets/images/section-images/ic_skills_red.svg";
import ic_skills_yellow from "../../assets/images/section-images/ic_skills_yellow.svg";
import ic_skills_orange from "../../assets/images/section-images/ic_skills_orange.svg";
import ic_skills_purple from "../../assets/images/section-images/ic_skills_purple.svg";
import ic_skills_pink from "../../assets/images/section-images/ic_skills_pink.svg";
import ic_skills_teal from "../../assets/images/section-images/ic_skills_teal.svg";
import ic_skills_brown from "../../assets/images/section-images/ic_skills_brown.svg";
import ic_skills_beige from "../../assets/images/section-images/ic_skills_beige.svg";

function renderSkillImage(imageName: string) {
  switch (imageName) {
    case "ic_html5":
      return ic_html5;
    case "ic_css3":
      return ic_css3;
    case "ic_javascript":
      return ic_javascript;
    case "ic_typescript":
      return ic_typescript;
    case "ic_angularjs":
      return ic_angularjs;
    case "ic_reactjs":
      return ic_reactjs;
    case "ic_react_native":
      return ic_react_native;
    case "ic_redux":
      return ic_redux;
    case "ic_nodejs":
      return ic_nodejs;
    case "ic_npm":
      return ic_npm;
    case "ic_git":
      return ic_git;
    default:
      return ic_reactjs;
  }
}

function renderSkillSectionImage(theme: string) {
  switch (theme) {
    case "blue":
      return ic_skills_blue;
    case "green":
      return ic_skills_green;
    case "red":
      return ic_skills_red;
    case "yellow":
      return ic_skills_yellow;
    case "orange":
      return ic_skills_orange;
    case "purple":
      return ic_skills_purple;
    case "brown":
      return ic_skills_brown;
    case "beige":
      return ic_skills_beige;
    case "teal":
      return ic_skills_teal;
    case "pink":
      return ic_skills_pink;
    default:
      return ic_skills_blue;
  }
}

function Skills(props: any) {
  const theme = props.theme;
  return (
    <div className="skill-container">
      <div className="container skill-container">
        <div className="row no-container">
          <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 order-5 order-sm-5 order-md-1 order-lg-1 order-xl-1">
            <img
              className="skill-section-image"
              src={renderSkillSectionImage(theme.name)}
              alt="Skills section banner"
            />
          </div>
          <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 align-center flex-column order-1 order-sm-1 order-md-5 order-lg-5 order-xl-5">
            <div className="align-center flex-column">
              <h1 className="title">{skills.title}</h1>
              <p className="sub-title align-text-center">{skills.subtitle}</p>
            </div>
            <div className="row no-container">
              {skills.skills.map((skill, index) => {
                return (
                  <div
                    className="col-4 col-sm-4 col-md-4 col-lg-3 col-xl-3"
                    key={index}
                  >
                    <div title={skill.skillName} className="skill-item">
                      <img
                        className="skill-icon"
                        src={renderSkillImage(skill.imageName)}
                        alt={`${skill.skillName}`}
                      />
                    </div>
                    <div className="skillname-text">{skill.skillName}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
