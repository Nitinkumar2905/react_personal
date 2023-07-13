import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import item1 from "../images/search.gif";
import "../styles/Projects.css";
import { v4 as uuidv4 } from "uuid";
import { toast } from "react-hot-toast";

const ProjectSection = (props) => {
  const navigate = useNavigate();
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(false);
  const [save, setSave] = useState(false)

  const host = "https://nitinkumar2905.vercel.app";
  // const host = "http://localhost:8000";
  const token = localStorage.getItem("token");

  const updateProjects = async () => {
    // setFetching(true);
    props.setProgress(10);
    let url = `${host}/api/project/fetchAllProjects`;
    setLoading(true);
    let data = await fetch(url);
    props.setProgress(30);
    let parsedData = await data.json();
    props.setProgress(70);
    setProjects(parsedData.projects);
    // setTotalResults(parsedData.totalResults);
    setLoading(false);
    // setFetching(false);
    props.setProgress(100);
  };
  useEffect(() => {
    setLoading(true);
    updateProjects();
    // eslint-disable-next-line
  }, []);

  // to save a project user's profile's saved project if logged in
  const saveProject = async (projectId) => {
    if (!localStorage.getItem("token")) {
      navigate("/login");
      toast("Please login to continue", "warning", {
        style: {
          borderRadius: "10px",
          background: `${props.mode === "Dark" ? "#fff" : "#333"}`,
          color: `${props.mode === "Dark" ? "#333" : "#fff"}`,
        },
      });
    } else {
      try {
        const response = await fetch(`${host}/api/project/save/${projectId}`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "auth-token": token,
          },
          body: JSON.stringify({ projectId }),
        });
        setSave(false)

        if (response.ok) {
          toast("Project saved successfully", "success", {
            style: {
              borderRadius: "10px",
              background: `${props.mode === "Dark" ? "#fff" : "#333"}`,
              color: `${props.mode === "Dark" ? "#333" : "#fff"}`,
            },
          });
          setSave(true)
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
        console.error(error);
        setSave(false)
        toast("An error occurred while saving the project", "error", {
          style: {
            borderRadius: "10px",
            background: `${props.mode === "Dark" ? "#fff" : "#333"}`,
            color: `${props.mode === "Dark" ? "#333" : "#fff"}`,
          },
        });
      }
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
          <div
            className={`text-${
              props.mode === "Light" ? "dark" : "light"
            } projects`}
          >
            {!loading &&
              projects &&
              projects?.map((element) => {
                const key = uuidv4();
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
                          {element.name}
                        </h4>
                        <p
                          className={`text-start text-${
                            props.mode === "Light" ? "dark" : "light"
                          }`}
                        >
                          {element.description}
                        </p>
                        <div>
                          <Link
                            to={`${element.gitHub_Url}`}
                            target="_blank"
                            className={`my-2 me-2 btn btn-outline-${
                              props.mode === "Light" ? "dark" : "light"
                            }`}
                          >
                            GitHub
                          </Link>

                          <button
                            onClick={() => saveProject(element.projectId)}
                            className={`my-2 ms-2 btn btn-outline-${
                              props.mode === "Light" ? "dark" : "light"
                            }`}
                          >
                            {save ?(<span>Save</span>):(<span>Saved</span>)}
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

export default ProjectSection;
