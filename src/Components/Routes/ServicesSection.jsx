import React from "react";
import { Link, useNavigate } from "react-router-dom";
// import item1 from "../images/search.gif";
import "../styles/Services.css";
import { toast } from "react-hot-toast";

const ServicesSection = (props) => {
  const navigate = useNavigate();
  const hireNow = (e) => {
    e.preventDefault();
    props.setProgress(0);
    if (!localStorage.getItem("token")) {
      navigate("/login");
      // if(localStorage.getItem("token")){
      //   navigate("/connect")
      // }
      props.setProgress(100);
      toast("Please login to continue", "warning", {
        style: {
          borderRadius: "10px",
          background: `${props.mode === "Dark" ? "#fff" : "#333"}`,
          color: `${props.mode === "Dark" ? "#333" : "#fff"}`,
        },
      });
    } else {
      props.setProgress(100);
      navigate("/contact");
    }
  };
  return (
    <>
      <div
        className={`service-main text-center text-white`}
        style={{ marginTop: "4rem", fontFamily: "sans-serif" }}
      >
        <div className="service-content" >
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
                <div>
                  <Link
                  onClick={hireNow}
                    to="/contact"
                    className={`my-2 me-2 btn btn-outline-${
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
            {/* item number 1 */}
            <div
              className={`my-2 service-item ${
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
                  Frontend Devlopment
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
                <div>
                  <Link
                  onClick={hireNow}
                    to="/contact"
                    className={`my-2 me-2 btn btn-outline-${
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
            {/* item number 1 */}
            <div
              className={`my-2 service-item ${
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
                <div>
                  <Link
                  onClick={hireNow}
                    to="/contact"
                    className={`my-2 me-2 btn btn-outline-${
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
        </div>
      </div>
    </>
  );
};

export default ServicesSection;
