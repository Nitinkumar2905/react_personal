import React from "react";
// import item1 from "./images/search.gif";
import "./styles/Services.css";
import { Link } from "react-router-dom";
const Services = (props) => {
  return (
    <>
      <div
        className={`service-main text-center text-white`}
        style={{ marginTop: "3rem", fontFamily: "sans-serif" }}
      >
        <div>
          <h1 className={`text-${props.mode === "Light" ? "dark" : "light"}`}>
            Services
          </h1>
          <div
            className={`text-${
              props.mode === "Light" ? "dark" : "light"
            } services`}
          >
            {/* item number 1 */}
            <div
              className={`my-3 service-item ${
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
                  MERN Development
                </h4>
                <p
                  className={`text-start text-${
                    props.mode === "Light" ? "dark" : "light"
                  }`}
                >
                  MERN development is one of the most paid service in the field
                  of development nowadays. And I am proficient in developing
                  MERN stack projects.
                </p>
                <div className="pt-2">
                  <Link to="/contact"
                    className={`my-2 me-1 btn btn-outline-${
                      props.mode === "Light" ? "dark" : "light"
                    }`}
                  >
                    Hire Now
                  </Link>

                  <Link
                    to="/projects"
                    className={`my-2 ms-2 btn btn-outline-${
                      props.mode === "Light" ? "dark" : "light"
                    }`}
                  >
                    Related Project
                  </Link>
                </div>
              </div>
            </div>
            {/* item number 1 */}
            <div
              className={`my-3 service-item ${
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
                  Frontend Develoment
                </h4>
                <p
                  className={`text-start text-${
                    props.mode === "Light" ? "dark" : "light"
                  }`}
                >
                  Sometimes frontend development can be really tricky because of
                  little detailing in every tools and design , but don't worry I
                  am here to help you with frontend projects.
                </p>
                <div className="pt-2">
                  <Link to="/contact"
                    className={`my-2 me-1 btn btn-outline-${
                      props.mode === "Light" ? "dark" : "light"
                    }`}
                  >
                    Hire Now
                  </Link>

                  <Link
                    to="/projects"
                    className={`my-2 ms-2 btn btn-outline-${
                      props.mode === "Light" ? "dark" : "light"
                    }`}
                  >
                    Related Projects                  </Link>
                </div>
              </div>
            </div>
            {/* item number 1 */}
            <div
              className={`my-3 service-item ${
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
                  Backend Development
                </h4>
                <p
                  className={`text-start text-${
                    props.mode === "Light" ? "dark" : "light"
                  }`}
                >
                  Backend development is backbone of any projects , website and
                  can't really have any value without it.
                </p>
                <div className="pt-2">
                  <Link
                    to="/contact"
                    className={`my-2 me-1 btn btn-outline-${
                      props.mode === "Light" ? "dark" : "light"
                    }`}
                  >
                    Hire Now
                  </Link>

                  <Link
                    to="/projects"
                    className={`my-2 ms-2 btn btn-outline-${
                      props.mode === "Light" ? "dark" : "light"
                    }`}
                  >
                    Related Projects
                  </Link>
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
              More services ? &nbsp;
              <Link
                to="services"
                className={`btn btn-outline-${
                  props.mode === "Light" ? "dark" : "light"
                } my-1`}
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
