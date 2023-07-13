import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";
// import { v4 as uuidv4 } from "uuid";

const Profile = (props) => {
  const [savedProjects, setSavedProjects] = useState([]);
  // const [loading, setLoading] = useState(false);
  // const host = "http://localhost:8000";
  const host = "https://nitinkumar2905.vercel.app"
  const token = localStorage.getItem("token");

  const fetchSavedProjects = async () => {
    try {
      const response = await fetch(`${host}/api/project/fetchSavedProjects`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "auth-token": token,
        },
      });

      if (response.ok) {
        const json = await response.json();
        console.log(json.SavedProjects);
        setSavedProjects(json.SavedProjects);
      } else {
        console.log("Failed to fetch saved projects");
      }
    } catch (error) {
      console.error(error);
    }
  };

  // Fetch all saved projects
  useEffect(() => {
    if (localStorage.getItem("token")) {
      fetchSavedProjects();
    }
    // eslint-disable-next-line
  }, []);

  const removeProject = async (projectId) => {
    try {
      const response = await fetch(`${host}/api/project/remove/${projectId}`, {
        method: "DELETE",
        headers: {
          "auth-token": token,
        },
        body: JSON.stringify({ projectId }),
      });

      if (response.ok) {
        console.log("removed", projectId);
        toast("Project saved successfully", "success", {
          style: {
            borderRadius: "10px",
            background: `${props.mode === "Dark" ? "#fff" : "#333"}`,
            color: `${props.mode === "Dark" ? "#333" : "#fff"}`,
          },
        });
        // Remove the deleted project from savedProjects state
        setSavedProjects((prevProjects) =>
          prevProjects.filter((project) => project.projectId !== projectId)
        );
      } else {
        toast("Failed to save project", "error", {
          style: {
            borderRadius: "10px",
            background: `${props.mode === "Dark" ? "#fff" : "#333"}`,
            color: `${props.mode === "Dark" ? "#333" : "#fff"}`,
          },
        });
      }
    } catch (error) {
      console.error(error, projectId);
      toast("An error occurred while saving the project", "error", {
        style: {
          borderRadius: "10px",
          background: `${props.mode === "Dark" ? "#fff" : "#333"}`,
          color: `${props.mode === "Dark" ? "#333" : "#fff"}`,
        },
      });
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
