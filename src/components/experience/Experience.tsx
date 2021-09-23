import "./Experience.css";
import { workExperience } from "../../portfolio";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faSnowflake } from "@fortawesome/free-regular-svg-icons";

function Experience(props: any) {
  const theme = props.theme;
  return (
    <div className="container experience-container" id="experience">
      <div className="row no-container">
        <div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 align-center">
          <div className="title-holder">
            <h1 className="title align-text-center">{workExperience.title}</h1>
            <p className="sub-title align-text-center">
              {workExperience.subtitle}
            </p>
          </div>
        </div>
        <div className="col-12 col-sm-12 col-md-12 col-lg-8 col-xl-8">
          {workExperience.experiences.map((experience, index) => {
            return index % 2 === 0 ? (
              <div className="timeline-item timeline-item1" key={index}>
                <div>
                  <div className="d-flex align-items-center">
                    <span className="timeline-heading">{experience.title}</span>
                    <div className="duration" style={{background: theme.tertiaryColor}}>
                      <span className="duration-text" style={{color: theme.themeColor}}>
                        {experience.duration}
                      </span>
                    </div>
                  </div>
                  <span className="timeline-subheading">
                    {experience.company}
                  </span>
                </div>
                <div className="sub-title timeline-description">
                  {experience.description}
                </div>

                <div className="timeline-icon timeline1-icon">
                  <FontAwesomeIcon
                    className="contact-icon"
                    color={theme.themeColor}
                    icon={faSun}
                  />
                </div>
              </div>
            ) : (
              <div className="timeline-item timeline-item2" key={index}>
                <div className="float-left">
                  <div className="d-flex align-items-center">
                    <span className="timeline-heading">{experience.title}</span>
                    <div className="duration" style={{background: theme.tertiaryColor}}>
                      <span className="duration-text" style={{color: theme.themeColor}}>
                        {experience.duration}
                      </span>
                    </div>
                  </div>
                  <span className="timeline-subheading">
                    {experience.company}
                  </span>
                </div>
                <div className="sub-title timeline-description">
                  {experience.description}
                </div>

                <div className="timeline-icon timeline2-icon">
                  <FontAwesomeIcon
                    className="contact-icon"
                    color={theme.themeColor}
                    icon={faSnowflake}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Experience;
