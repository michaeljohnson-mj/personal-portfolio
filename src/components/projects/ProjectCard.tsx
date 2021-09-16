import "./Projects.css";
import ic_intentwise from "../../assets/images/project-images/ic_intentwise.png";
import ic_talisma from "../../assets/images/project-images/ic_talisma.png";
import ic_signify from "../../assets/images/project-images/ic_signify.png";
import ic_phablecare from "../../assets/images/project-images/ic_phablecare.png";
import ic_titan from "../../assets/images/project-images/ic_titan.png";
import ic_btf from "../../assets/images/project-images/ic_btf.png";
import ic_playstore from "../../assets/images/ic_playstore.png";
import ic_appstore from "../../assets/images/ic_appstore.svg";

function renderProjectImage(imageName: string) {
  switch (imageName) {
    case "ic_intentwise":
      return ic_intentwise;
    case "ic_talisma":
      return ic_talisma;
    case "ic_signify":
      return ic_signify;
    case "ic_phablecare":
      return ic_phablecare;
    case "ic_titan":
      return ic_titan;
    case "ic_btf":
      return ic_btf;
    default:
      break;
  }
}

function openAppStorOrPlayStore(storeUrl: string) {
  window.open(storeUrl);
}

function ProjectCard(props: any) {
  const project = props.project;
  return (
    <div className="project-card d-flex justify-content-center">
      <img
        className="project-logo"
        src={renderProjectImage(project.imageName)}
        alt={`${project.title}`}
      />
      <div className="project-title-holder">
        <span className="project-title">{project.title}</span>
        <span className="project-subtitle">{project.subtitle}</span>
        <div className="stores-icon-holder">
          {project.playstoreUrl && project.playstoreUrl !== null ? (
            <img
              className="play-store stores-icon"
              src={ic_playstore}
              alt="Google Playstore"
              title="Get it on Google Play"
              onClick={() => openAppStorOrPlayStore(project.playstoreUrl)}
            />
          ) : null}

          {project.appstoreUrl && project.appstoreUrl !== null ? (
            <img
              className="app-store stores-icon"
              src={ic_appstore}
              alt="Apple Appstore"
              title="Download on the App Store"
              onClick={() => openAppStorOrPlayStore(project.appstoreUrl)}
            />
          ) : null}

          {project.webUrl && project.webUrl !== null ? (
            <a
              className="web-url"
              href={project.webUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              View Site
            </a>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
