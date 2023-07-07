import React, { useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./styles/Navbar.css";
import logo from "./images/sunset.jpg";
import dark from "./images/dark mode.png";
import light from "./images/light mode.png";

const Navbar = (props) => {
  // const projects=()=>{
  //   document.title = "Projects - Nitin k. | MERN Developer"
  // }

  const navigate = useNavigate();
  const handleLogOut = () => {
    localStorage.removeItem("token");
    navigate("/");
  };
  // const ref = useRef(null);
  let location = useLocation();
  // const handleUserInfo = () => {
  //   ref.current.click();
  //   navigate("/getUser");
  // };

  const connect = (e) => {
    e.preventDefault();
    if (!localStorage.getItem("token")) {
      navigate("/login");
    } else {
      navigate("/connect");
    }
  };
  return (
    <>
      <nav
        className={`shadow-${
          props.mode === "Light" ? "lg" : "nav"
        } my-3 rounded navbar navbar-expand-lg bg-${
          props.mode === "Dark" ? "dark-emphasis" : "light"
        } navbar-${props.mode}`}
        style={{ fontFamily: "sans-serif" }}
      >
        <div className="container-fluid">
          <Link
            to="/"
            className="text-decoration-none mx-1 d-flex align-items-center"
          >
            <img src={logo} alt="" />
            <span
              className={`head-text mx-3 fs-5 text-${
                props.mode === "Light" ? "dark" : "light"
              }`}
            >
              Nitin kumar
            </span>
          </Link>

          <button
            className={`navbar-toggler border border-${
              props.mode === "Light" ? "dark" : "light"
            } bg-light`}
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className={`navbar-toggler-icon`}></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav d-flex flex-end ms-auto me-5 mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className={`mx-1 nav-link text-${
                    props.mode === "Dark" ? "light" : "dark"
                  }`}
                  aria-current="page"
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  // onClick={projects}
                  className={`mx-1 nav-link text-${
                    props.mode === "Dark" ? "light" : "dark"
                  }`}
                  to="/projects"
                >
                  Projects
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`mx-1 nav-link text-${
                    props.mode === "Dark" ? "light" : "dark"
                  }`}
                  to="/services"
                >
                  Services
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`mx-1 nav-link text-${
                    props.mode === "Dark" ? "light" : "dark"
                  }`}
                  to="/contact"
                >
                  Contact
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  onClick={connect}
                  className={`mx-1 nav-link text-${
                    props.mode === "Dark" ? "light" : "dark"
                  }`}
                  to="/connect"
                >
                  Work With Me
                </Link>
              </li>
            </ul>
            <div className={`d-flex  align-items-center`}>
              <div onClick={props.toggleMode} style={{ cursor: "pointer" }}>
                <img
                  src={`${props.mode === "Dark" ? light : dark}`}
                  alt=""
                  style={{ height: "35px", width: "35px" }}
                />
              </div>
              {/*  */}
              {!localStorage.getItem("token") ? (
                <div className={`mx-2`}>
                  <Link
                    to="/login"
                    className={`me-1 btn btn-outline-${
                      props.mode === "Light" ? "dark" : "light"
                    }`}
                  >
                    Login
                  </Link>
                  <Link
                    to="/signUp"
                    className={`ms-1 btn btn-outline-${
                      props.mode === "Light" ? "dark" : "light"
                    }`}
                  >
                    SignUp
                  </Link>
                </div>
              ) : (
                <div className="mx-2">
                  <button
                    onClick={handleLogOut}
                    className={`ms-1 btn btn-outline-${
                      props.mode === "Light" ? "dark" : "light"
                    }`}
                  >
                    LogOut
                  </button>
                  <div
                    // ref={ref}
                    // onClick={handleUserInfo}
                    to="/UserInfo"
                    className="text-white mx-4 fw-semibold fs-6 text-decoration-none "
                    style={{ cursor: "pointer" }}
                  ></div>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
