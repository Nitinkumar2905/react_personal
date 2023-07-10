import React from "react";
import { Link } from "react-router-dom";
// import item1 from "../images/search.gif";
import "../styles/Projects.css";

const ProjectSection = (props) => {
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
            {/* item number 1 */}
            <div
              className={`my-2 project-item ${
                props.mode === "Light" ? "itemLight" : "itemDark"
              } rounded`}
            >
              <span>
                {/* <img className={`item-img`} src={item1} alt="" /> */}
              </span>
              <div className="my-2 d-flex flex-column align-items-start mx-3">
                <h4
                  className={`text-start text-decoration-underline underline-link-${
                    props.mode === "Dark" ? "light" : "dark"
                  } link-offset-2 my-3 mx-auto w-100 text-${
                    props.mode === "Light" ? "dark" : "light"
                  }`}
                >
                  NewsMonkey
                </h4>
                <p
                  className={`text-start text-${
                    props.mode === "Light" ? "dark" : "light"
                  }`}
                >
                  NewsMonkey is a webapp application build using newsAPI and
                  react framework for providing the daily updates.
                </p>
                <div>
                  <Link
                    to="/contact"
                    className={`my-2 me-2 btn btn-outline-${
                      props.mode === "Light" ? "dark" : "light"
                    }`}
                  >
                    GitHub
                  </Link>

                  <Link
                    to="/projects"
                    className={`my-2 ms-2 btn btn-outline-${
                      props.mode === "Light" ? "dark" : "light"
                    }`}
                  >
                    Save Projects 🖤
                  </Link>
                </div>
              </div>
            </div>
            {/* item number 1 */}
            <div
              className={`my-2 project-item ${
                props.mode === "Light" ? "itemLight" : "itemDark"
              } rounded`}
            >
              <span>
                {/* <img className={`item-img`} src={item1} alt="" /> */}
              </span>
              <div className="my-2 d-flex flex-column align-items-start mx-3">
                <h4
                  className={`text-start text-decoration-underline underline-link-${
                    props.mode === "Dark" ? "light" : "dark"
                  } link-offset-2 my-3 mx-auto w-100 text-${
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
                <div>
                  <Link
                    to="/contact"
                    className={`my-2 me-2 btn btn-outline-${
                      props.mode === "Light" ? "dark" : "light"
                    }`}
                  >
                    GitHub
                  </Link>

                  <Link
                    to="/projects"
                    className={`my-2 ms-2 btn btn-outline-${
                      props.mode === "Light" ? "dark" : "light"
                    }`}
                  >
                    Save Projects 🖤
                  </Link>
                </div>
              </div>
            </div>
            {/* item number 1 */}
            <div
              className={`my-2 project-item ${
                props.mode === "Light" ? "itemLight" : "itemDark"
              } rounded`}
            >
              <span>
                {/* <img className={`item-img`} src={item1} alt="" /> */}
              </span>
              <div className="my-2 d-flex flex-column align-items-start mx-3">
                <h4
                  className={`text-start text-decoration-underline underline-link-${
                    props.mode === "Dark" ? "light" : "dark"
                  } link-offset-2 my-3 mx-auto w-100 text-${
                    props.mode === "Light" ? "dark" : "light"
                  }`}
                >
                  VisionVault
                </h4>
                <p
                  className={`text-start text-${
                    props.mode === "Light" ? "dark" : "light"
                  }`}
                >
                  VisionVault is a multimedia content sharing and storage
                  platform. It provides users with a platform to upload,
                  organize, and share various types of visual content, such as
                  images, artwork, photographs, videos, and more. Users can
                  create collections, curate their content, and connect with
                  others who share similar interests.
                </p>
                <div>
                  <Link
                    to="/contact"
                    className={`my-2 me-2 btn btn-outline-${
                      props.mode === "Light" ? "dark" : "light"
                    }`}
                  >
                    GitHub
                  </Link>

                  <Link
                    to="/projects"
                    className={`my-2 ms-2 btn btn-outline-${
                      props.mode === "Light" ? "dark" : "light"
                    }`}
                  >
                    Save Projects 🖤
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectSection;
