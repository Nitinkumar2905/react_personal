import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Projects.css";
import { useContext } from "react";
import ProjectContext from "../../Context/projects/ProjectContext";

const ProjectItem = (props) => {
  const { project, key, handleSaveProject } = props;
  const [projectStatus, setProjectStatus] = useState(false);
  const { isProjectSaved } = useContext(ProjectContext);

  useEffect(() => {
    isProjectSaved ? setProjectStatus(true) : setProjectStatus(false);
  }, [isProjectSaved]);

  return (
    <div>
      <div className="project-map" key={key}>
        <div
          className={`my-2 project-item ${
            props.mode === "Light" ? "itemLight" : "itemDark"
          } rounded`}>
          <div
            style={{ minHeight: "43vh" }}
            className="mt-4 d-flex flex-column align-items-start mx-3">
            <button
              style={{ cursor: "default" }}
              className={`btn text-${
                props.mode === "Dark" ? "light" : "dark"
              } border-${props.mode === "Dark" ? "light" : "dark"}`}>
              Id : #{project.projectId}
            </button>

            <h4
              className={`text-start text-decoration-underline underline-link-${
                props.mode === "Dark" ? "light" : "dark"
              } link-offset-2 my-3 mx-auto w-100 text-${
                props.mode === "Light" ? "dark" : "light"
              }`}>
              {project.name}
            </h4>
            <p
              className={`text-start text-${
                props.mode === "Light" ? "dark" : "light"
              }`}>
              {project.description}
            </p>
            <div>
              <Link
                to={`${project.gitHub_Url}`}
                target="_blank"
                className={`my-2 me-2 btn btn-success`}>
                GitHub
              </Link>
              <button
                onClick={() => handleSaveProject(project.projectId)}
                className={`my-2 ms-2 btn btn-outline-success`}
                // disabled
              >
                {console.log(projectStatus)}
                {projectStatus ? "Saved" : "Save"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
