import "./Home.css";
import { greeting } from "../../portfolio";
import ic_profile_pic from "../../assets/images/ic_profile_pic.jpg";
import HomeBanner from "./HomeBanner";

function Home(props: any) {
  const theme = props.theme;
  return (
    <div className="home-area" id="home">
      <div className="container home-container">
        <div className="row no-container">
          <div className="col-12 col-sm-12 col-md-7 col-lg-7 col-xl-7">
            <div className="alert-pill">{greeting.alertPillText}</div>
            <h1 className="intro-text">
              {greeting.greetingText}
              <span style={{ color: theme.themeColor }}>{greeting.name}</span>
            </h1>
            <p className="sub-intro-text">{greeting.introText}</p>
            <div className="download-cv-holder">
              <a
                href={greeting.resumeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="download-cv-btn"
                style={{ background: theme.themeColor }}
              >
                My Resume
              </a>
            </div>
          </div>
          <div
            className="col-12 col-sm-12 col-md-5 col-lg-5 col-xl-5 hero-image-holder"
            style={{ display: "flex" }}
          >
            <HomeBanner theme={theme} />
          </div>
        </div>

        <div className="about-myself row no-container">
          <div className="title d-flex justify-content-center">About Me</div>
          <div className="col-12 col-sm-12 col-md-9 col-lg-9 col-xl-9 flex-column align-center about-myself-content">
            <p className="sub-intro-text">{greeting.aboutMeText}</p>
          </div>
          <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 align-center">
            <img
              className="profile-pic"
              src={ic_profile_pic}
              alt="Michael Johnson's profile photograph"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
