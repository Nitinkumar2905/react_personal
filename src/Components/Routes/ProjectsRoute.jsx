import React, { useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
// import "../styles/Projects.css";
import { v4 as uuidv4 } from "uuid";
import { toast } from "react-hot-toast";
import ProjectContext from "../../Context/projects/ProjectContext";
import loadingIcon from "../images/loadingt.gif";

const ProjectRoute = (props) => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const context = useContext(ProjectContext);

  const { projects, loading, saveProject, updateProjects, isProjectSaved } =
    context;

  useEffect(() => {
    updateProjects();
    // esline-disable-next-line
  }, []);

  const handleSaveProject = async (projectId) => {
    if (!token) {
      navigate("/login");
      toast("Please login to continue", {
        style: {
          borderRadius: "10px",
          background: `${props.mode === "Dark" ? "#fff" : "#333"}`,
          color: `${props.mode === "Dark" ? "#333" : "#fff"}`,
        },
      });
    } else {
      await saveProject(projectId);
    }
  };

  return (
    <>
      <div
        className={`project-main text-center text-white`}
        style={{ marginTop: "4rem", fontFamily: "sans-serif" }}
      >
        <div className="project-content">
          <h1 className={`text-${props.mode === "Dark" ? "light" : "dark"}`}>
            Projects
          </h1>

          {!loading ? (
            <div
              className={`text-${
                props.mode === "Light" ? "dark" : "light"
              } projects`}
            >
              {!loading &&
                projects &&
                projects?.map((project) => {
                  const key = uuidv4();
                  return (
                    <div className="project-map" key={key}>
                      <div
                        className={`my-2 project-item ${
                          props.mode === "Light" ? "itemLight" : "itemDark"
                        } rounded`}
                      >
                        <div
                          style={{ minHeight: "43vh" }}
                          className="mt-4 d-flex flex-column align-items-start mx-3"
                        >
                          <button
                            style={{ cursor: "default" }}
                            className={`btn text-${
                              props.mode === "Dark" ? "light" : "dark"
                            } border-${
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
                            {project.gitHub_Url && (
                              <Link
                                to={`${project.gitHub_Url}`}
                                target="_blank"
                                className={`my-2 me-2 btn btn-success`}
                              >
                                GitHub
                              </Link>
                            )}

                            <button
                              onClick={() =>
                                handleSaveProject(project.projectId)
                              }
                              className={`my-2 mx-2 btn btn-outline-success`}
                              // disabled
                            >
                              {isProjectSaved ? "Saved" : "Save"}
                            </button>

                            {project.visit && (
                              <Link
                                to={`${project.visit}`}
                                target="_blank"
                                className={`my-2 ms-2 btn btn-success`}
                              >
                                Visit
                              </Link>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>
          ) : (
            <div className="mx-auto mt-5" style={{ width: "fit-content" }}>
              <img className="" src={loadingIcon} alt="" />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ProjectRoute;
