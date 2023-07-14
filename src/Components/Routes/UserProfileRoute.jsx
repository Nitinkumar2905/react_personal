import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/Projects.css";
import ProjectContext from "../../Context/projects/ProjectContext";

const Profile = (props) => {
  const { savedProjects, removeProject, fetchSavedProjects } = useContext(
    ProjectContext
  );

  // Fetch all saved projects
  useEffect(() => {
    if (localStorage.getItem("token")) {
      fetchSavedProjects();
    }
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <div
        className={`project-main text-center text-white`}
        style={{ marginTop: "4rem", fontFamily: "sans-serif" }}
      >
        <div className="project-content">
          <h1 className={`text-${props.mode === "Dark" ? "light" : "dark"}`}>
            Saved Projects
          </h1>
          <h3
            className={`btn btn-outline-${
              props.mode === "Dark" ? "light" : "dark"
            }`}
          >
            Total No. of Saved Project : {savedProjects.length}
          </h3>
          <div
            className={`text-${
              props.mode === "Light" ? "dark" : "light"
            } projects`}
          >
            {savedProjects &&
              savedProjects &&
              savedProjects?.map((project) => {
                const key = project.projectId;
                return (
                  <div className="project-map" key={key}>
                    <div
                      className={`my-2 project-item ${
                        props.mode === "Light" ? "itemLight" : "itemDark"
                      } rounded`}
                    >
                      <div
                        style={{ minHeight: "40vh" }}
                        className="my-2 d-flex flex-column align-items-start mx-3"
                      >
                        <button
                        style={{cursor:'default'}}
                          className={`btn text-${
                            props.mode === "Dark" ? "light" : "dark"
                          } border border-${
                            props.mode === "Dark" ? "light" : "dark"
                          }`}
                        >
                          Id : #{project.projectId}
                        </button>
                        <h4
                          className={`text-start text-decoration-underline underline-link-${
                            props.mode === "Dark" ? "light" : "dark"
                          } link-offset-2 my-3 mx-auto w-100 text-${
                            props.mode === "Light" ? "dark" : "light"
                          }`}
                        >
                          {project.name}
                        </h4>
                        <p
                          className={`text-start text-${
                            props.mode === "Light" ? "dark" : "light"
                          }`}
                        >
                          {project.description}
                        </p>
                        <div>
                          <Link
                            to={`${project.gitHub_Url}`}
                            target="_blank"
                            className={`my-2 me-2 btn btn-outline-${
                              props.mode === "Light" ? "dark" : "light"
                            }`}
                          >
                            GitHub
                          </Link>

                          <button
                            onClick={() => removeProject(project.projectId)}
                            className={`my-2 ms-2 btn btn-outline-${
                              props.mode === "Light" ? "dark" : "light"
                            }`}
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
