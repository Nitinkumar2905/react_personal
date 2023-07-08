import React from "react";
import item1 from "../images/search.gif";
import '../styles/Services.css'

const ServicesSection = (props) => {
  return (
    <>
      <div
        className={`service-main text-center text-white`}
        style={{ marginTop: "4rem", fontFamily: "sans-serif" }}
      >
        <div>
          <h1 className={`text-${props.mode === "Dark" ? "light" : "dark"}`}>
            Services
          </h1>
          <div
            className={`text-${
              props.mode === "Light" ? "dark" : "light"
            } services`}
          >
            {/* item number 1 */}
            <div
              className={`my-2 service-item ${
                props.mode === "Light" ? "itemLight" : "itemDark"
              } rounded`}
            >
              <span>
                <img className={`item-img`} src={item1} alt="" />
              </span>
              <div className="my-2 d-flex flex-column align-items-start mx-3">
                <h4
                  className={`text-start text-decoration-underline underline-link-${
                    props.mode === "Dark" ? "light" : "dark"
                  } link-offset-2 my-3 mx-auto w-100 text-${
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
              className={`my-2 service-item ${
                props.mode === "Light" ? "itemLight" : "itemDark"
              } rounded`}
            >
              <span>
                <img className={`item-img`} src={item1} alt="" />
              </span>
              <div className="my-2 d-flex flex-column align-items-start mx-3">
                <h4
                  className={`text-start text-decoration-underline underline-link-${
                    props.mode === "Dark" ? "light" : "dark"
                  } link-offset-2 my-3 mx-auto w-100 text-${
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
              className={`my-2 service-item ${
                props.mode === "Light" ? "itemLight" : "itemDark"
              } rounded`}
            >
              <span>
                <img className={`item-img`} src={item1} alt="" />
              </span>
              <div className="my-2 d-flex flex-column align-items-start mx-3">
                <h4
                  className={`text-start text-decoration-underline underline-link-${
                    props.mode === "Dark" ? "light" : "dark"
                  } link-offset-2 my-3 mx-auto w-100 text-${
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
        </div>
      </div>
    </>
  );
};

export default ServicesSection;
