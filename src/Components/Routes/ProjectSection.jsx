import React from "react";
import item1 from "../images/1674617947228.gif";
import '../styles/Projects.css'
const ProjectSection = (props) => {
  return (
    <>
      <div
        id="projects"
        className={`mt-5 project-main text-center text-white`}
        style={{ marginTop: "4rem", fontFamily: "sans-serif" }}
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
              className={`my-2 project-item ${
                props.mode === "Light" ? "itemLight" : "itemDark"
              } rounded`}
            >
              <span>
                <img className={`item-img`} src={item1} alt="" />
              </span>
              <div className="my-2 d-flex flex-column align-items-start mx-3">
                <h4
                  className={`my-3 text-start text-decoration-underline link-offset-2 link-underline-${
                    props.mode === "Dark" ? "light" : "dark"
                  } mx-auto w-100 text-${
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
                <div>
                  <button
                    className={`my-2 me-2 btn btn-outline-${
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
              className={`my-2 project-item ${
                props.mode === "Light" ? "itemLight" : "itemDark"
              } rounded`}
            >
              <span>
                <img className={`item-img`} src={item1} alt="" />
              </span>
              <div className="my-2 d-flex flex-column align-items-start mx-3">
                <h4
                  className={`my-3 text-start text-decoration-underline link-offset-2 link-underline-${
                    props.mode === "Dark" ? "light" : "dark"
                  } mx-auto w-100 text-${
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
                <div>
                  <button
                    className={`my-2 me-2 btn btn-outline-${
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
              className={`my-2 project-item ${
                props.mode === "Light" ? "itemLight" : "itemDark"
              } rounded`}
            >
              <span>
                <img className={`item-img`} src={item1} alt="" />
              </span>
              <div className="my-2 d-flex flex-column align-items-start mx-3">
                <h4
                  className={`my-3 text-start text-decoration-underline link-offset-2 link-underline-${
                    props.mode === "Dark" ? "light" : "dark"
                  } mx-auto w-100 text-${
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
                <div>
                  <button
                    className={`my-2 me-2 btn btn-outline-${
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
          {/* <div className=" d-flex flex-row justify-items-center mt-5 fs-3  text-white">
            <span className={`text-${props.mode==="Light"?"dark":"light"} link-offset-2`}>
              Explore more projects ?  &nbsp; 
              <button
                className={`fs-5 btn btn-outline-${
                  props.mode === "Light" ? "dark" : "light"
                } my-4`}
              >
                 More Projects
              </button>
            </span>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default ProjectSection;
