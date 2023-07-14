// import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import ProjectContext from "./ProjectContext";
import { useEffect, useState } from "react";

const ProjectState = (props) => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(false);
  const [savedProjects, setSavedProjects] = useState([]);

  const host = "https://nitinkumar-backend.vercel.app";
//   const host = "http://localhost:8000";
  const token = localStorage.getItem("token");

  const updateProjects = async () => {
    let url = `${host}/api/project/fetchAllProjects`;
    setLoading(true);
    let data = await fetch(url);
    let parsedData = await data.json();
    setProjects(parsedData.projects);
    setLoading(false);
  };

  const saveProject = async (projectId) => {
    try {
      const response = await fetch(`${host}/api/project/save/${projectId}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "auth-token": token,
        },
        body: JSON.stringify({ projectId }),
      });

      if (response.ok) {
        // const updatedSavedProjects = [...savedProjects, projectId];
        // setSavedProjects(updatedSavedProjects);
        toast.success("Project is saved in collection", {
          style: {
            borderRadius: "10px",
            background: `${props.mode === "Dark" ? "#fff" : "#333"}`,
            color: `${props.mode === "Dark" ? "#333" : "#fff"}`,
          },
        });
      } else {
        toast("Project is already saved", {
          style: {
            borderRadius: "10px",
            background: `${props.mode === "Dark" ? "#fff" : "#333"}`,
            color: `${props.mode === "Dark" ? "#333" : "#fff"}`,
          },
        });
      }
    } catch (error) {
      console.error(error);
      toast.error("An error occurred while saving the project", {
        style: {
          borderRadius: "10px",
          background: `${props.mode === "Dark" ? "#fff" : "#333"}`,
          color: `${props.mode === "Dark" ? "#333" : "#fff"}`,
        },
      });
    }
  };

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
        setSavedProjects(json.SavedProjects);
      } else {
        console.log("Failed to fetch saved projects");
      }
    } catch (error) {
      console.error(error);
    }
  };

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
        toast.success("Project removed from collection", {
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
        toast.error("Failed to remove project", {
          style: {
            borderRadius: "10px",
            background: `${props.mode === "Dark" ? "#fff" : "#333"}`,
            color: `${props.mode === "Dark" ? "#333" : "#fff"}`,
          },
        });
      }
    } catch (error) {
      console.error(error, projectId);
      toast.error(
        "An error occurred while removing the project from the collection",
        {
          style: {
            borderRadius: "10px",
            background: `${props.mode === "Dark" ? "#fff" : "#333"}`,
            color: `${props.mode === "Dark" ? "#333" : "#fff"}`,
          },
        }
      );
    }
  };

  useEffect(() => {
    fetchSavedProjects();
    // eslint-disable-next-line
  }, []);

  return (
    <ProjectContext.Provider
      value={{
        updateProjects,
        setLoading,
        loading,
        projects,
        saveProject,
        savedProjects,
        fetchSavedProjects,
        removeProject,
      }}
    >
      {props.children}
    </ProjectContext.Provider>
  );
};

export default ProjectState;
