import React from "react";
import "./styles/Projects.css";
// import item1 from "../Components/images/search.gif";
import { Link } from "react-router-dom";
const Projects = (props) => {
  return (
    <>
      <div
        className={`project-main text-center text-white`}
        style={{ marginTop: "2rem", fontFamily: "sans-serif" }}
      >
        <div>
          <h1 className={`text-${props.mode === "Light" ? "dark" : "light"}`}>
            Projects
          </h1>
          <div
            className={`text-${
              props.mode === "Light" ? "dark" : "light"
            } projects`}
          >
            {/* item number 1 */}
            <div
              className={`my-3 project-item ${
                props.mode === "Light" ? "itemLight" : "itemDark"
              } rounded`}
            >
              <span>
                {/* <img className={`item-img`} src={item1} alt="" /> */}
              </span>
              <div className="my-2 d-flex flex-column align-items-start mx-3">
                <h4
                  className={`mx-auto my-3 text-decoration-underline link-offset-2 link-underline-${
                    props.mode === "Dark" ? "light" : "dark"
                  } text-start w-100 text-${
                    props.mode === "Light" ? "dark" : "light"
                  }`}
                >
                  News-Monkey
                </h4>
                <p
                  className={`text-start text-${
                    props.mode === "Light" ? "dark" : "light"
                  }`}
                >
                  NewsMonkey is a webapp application build using newsAPI and
                  react framework for providing the daily updates.
                </p>
                <div className="pt-2">
                  <button
                    className={`my-2 me-1 btn btn-outline-${
                      props.mode === "Light" ? "dark" : "light"
                    }`}
                  >
                    Github
                  </button>

                  <button
                    className={`my-2 ms-2 btn btn-outline-${
                      props.mode === "Light" ? "dark" : "light"
                    }`}
                  >
                    Live 🖤
                  </button>
                </div>
              </div>
            </div>
            {/* item number 1 */}
            <div
              className={`my-3 project-item ${
                props.mode === "Light" ? "itemLight" : "itemDark"
              } rounded`}
            >
              <span>
                {/* <img className={`item-img`} src={item1} alt="" /> */}
              </span>
              <div className="my-2 d-flex flex-column align-items-start mx-3">
                <h4
                  className={`mx-auto my-3 text-decoration-underline link-offset-2 link-underline-${
                    props.mode === "Dark" ? "light" : "dark"
                  } text-start w-100 text-${
                    props.mode === "Light" ? "dark" : "light"
                  }`}
                >
                  INotes
                </h4>
                <p
                  className={`text-start text-${
                    props.mode === "Light" ? "dark" : "light"
                  }`}
                >
                  INotes is webapp application build using MERN stack tools
                  which helps users to store daily notes on cloud within secure
                  network and can access from anywhere.
                </p>
                <div className="pt-2">
                  <button
                    className={`my-2 me-1 btn btn-outline-${
                      props.mode === "Light" ? "dark" : "light"
                    }`}
                  >
                    Github
                  </button>

                  <button
                    className={`my-2 ms-2 btn btn-outline-${
                      props.mode === "Light" ? "dark" : "light"
                    }`}
                  >
                    Live 🖤
                  </button>
                </div>
              </div>
            </div>
            {/* item number 1 */}
            <div
              className={`my-3 project-item ${
                props.mode === "Light" ? "itemLight" : "itemDark"
              } rounded`}
            >
              <span>
                {/* <img className={`item-img`} src={item1} alt="" /> */}
              </span>
              <div className="my-2 d-flex flex-column align-items-start mx-3">
                <h4
                  className={`mx-auto my-3 text-decoration-underline link-offset-2 link-underline-${
                    props.mode === "Dark" ? "light" : "dark"
                  } text-start w-100 text-${
                    props.mode === "Light" ? "dark" : "light"
                  }`}
                >
                  Vision-Vault
                </h4>
                <p
                  className={`text-start text-${
                    props.mode === "Light" ? "dark" : "light"
                  }`}
                >
                  VisionVault is a multimedia content sharing and
                  storage platform. It provides users with a platform to upload,
                  organize, and share various types of visual content, such as
                  images, artwork, photographs, videos, and more. Users can
                  create collections, curate their content, and connect with
                  others who share similar interests.
                  </p>
                <div className="pt-2">
                  <button
                    className={`my-2 me-1 btn btn-outline-${
                      props.mode === "Light" ? "dark" : "light"
                    }`}
                  >
                    Github
                  </button>

                  <button
                    className={`my-2 ms-2 btn btn-outline-${
                      props.mode === "Light" ? "dark" : "light"
                    }`}
                  >
                    Live 🖤
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="d-flex flex-row justify-items-center mt-5 fs-5  text-white">
            <span
              className={`text-${
                props.mode === "Light" ? "dark" : "light"
              } link-offset-2`}
            >
              More projects ? &nbsp;
              <Link
                to="projects"
                className={`btn btn-outline-${
                  props.mode === "Light" ? "dark" : "light"
                } my-1`}
              >
                More Projects
              </Link>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
