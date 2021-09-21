import "./Projects.css";
import ProjectCard from "./ProjectCard";
import { projects } from "../../portfolio";

function Projects(props: any) {
  const theme = props.theme;
  return (
    <div className="projects-container">
      <div className="container">
        <div className="row no-container title-holder">
          <h1 className="title align-text-center">{projects.title}</h1>
          <span className="sub-title align-text-center">
            {projects.description}
          </span>
        </div>
        <div className="row no-container">
          {projects.projects.map((project, index) => {
            return (
              <div
                className="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4"
                key={index}
              >
                <ProjectCard project={project} theme={theme} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Projects;
