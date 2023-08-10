import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import "../styles/Projects.css";
import { v4 as uuidv4 } from "uuid";
import { toast } from "react-hot-toast";
import ProjectContext from "../../Context/projects/ProjectContext";
import loadingIcon from "../images/loadingt.gif";
import ProjectItem from "./ProjectItem";

const ProjectRoute = (props) => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const context = useContext(ProjectContext);
  const [save, setSave] = useState("false");

  const {
    projects,
    loading,
    saveProject,
    updateProjects,
    isProjectSaved,
    removeProject,
    setIsProjectSaved,
  } = context;

   console.log(isProjectSaved);

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
      const savedProject = localStorage.getItem("save");
      // if (savedProject) {
      //   setSave(true);
      // }
      // await updateProjects();
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
            >{console.log(projects)}
              {!loading &&
                projects &&
                projects?.map((project) => {
                  const key = uuidv4();
                  return (
                    <ProjectItem project={project} key={key}  handleSaveProject={handleSaveProject}/>
                  );
                })}
            </div>
          ) : (
            <div className="mt-5">
              <img src={loadingIcon} alt="" />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ProjectRoute;
