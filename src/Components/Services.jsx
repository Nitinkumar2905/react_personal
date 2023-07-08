import React from "react";
import item1 from "./images/search.gif";
import "./styles/Services.css";
import { Link } from "react-router-dom";
const Services = (props) => {
  return (
    <>
      <div
        className={`project-main text-center text-white`}
        style={{ marginTop: "2rem", fontFamily: "sans-serif" }}
      >
        <div>
          <h1
            className={`mb-3 text-${props.mode === "Light" ? "dark" : "light"}`}
          >
            Services
          </h1>
          <div
            className={`text-${
              props.mode === "Light" ? "dark" : "light"
            } projects`}
          >
            {/* item number 1 */}
            <div
              className={`my-4 project-item ${
                props.mode === "Light" ? "itemLight" : "itemDark"
              } rounded`}
            >
              {/* <span>
                <img className={`item-img`} src={item1} alt="" />
              </span> */}
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
              className={`my-4 project-item ${
                props.mode === "Light" ? "itemLight" : "itemDark"
              } rounded`}
            >
              {/* <span>
                <img className={`item-img`} src={item1} alt="" />
              </span> */}
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
              className={`my-4 project-item ${
                props.mode === "Light" ? "itemLight" : "itemDark"
              } rounded`}
            >
              {/* <span>
                <img className={`item-img`} src={item1} alt="" />
              </span> */}
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
          </div>
          <div className="d-flex flex-row justify-items-center mt-5 fs-3  text-white">
            <span
              className={`text-${
                props.mode === "Light" ? "dark" : "light"
              } link-offset-2`}
            >
              More services ? &nbsp;
              <Link
                to="services"
                className={`btn btn-outline-${
                  props.mode === "Light" ? "dark" : "light"
                } my-4`}
              >
                More Services
              </Link>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
