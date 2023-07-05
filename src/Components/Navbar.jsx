import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./styles/Navbar.css";
import logo from "./images/sunset.jpg";
import dark from "./images/dark mode.png";
import light from "./images/light mode.png";

const Navbar = (props) => {
  const location = useLocation();
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
          <div className="mx-1 d-flex align-items-center">
            <img src={logo} alt="" />
            <span
              className={`head-text mx-3 fs-5  text-${
                props.mode === "Light" ? "dark" : "light"
              }`}
            >
              Nitin kumar
            </span>
          </div>

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
                  } ${
                    location.pathname === "/home"
                      ? "text-decoration-underline"
                      : "text-decoration-none"
                  } link-offset-2 link-underline-primary`}
                  aria-current="page"
                  to="/home"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`mx-1 nav-link text-${
                    props.mode === "Dark" ? "light" : "dark"
                  } ${
                    location.pathname === "/projects"
                      ? "text-decoration-underline"
                      : "text-decoration-none"
                  } link-offset-2 link-underline-primary`}
                  to="/projects"
                >
                  Projects
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`mx-1 nav-link text-${
                    props.mode === "Dark" ? "light" : "dark"
                  } ${
                    location.pathname === "/services"
                      ? "text-decoration-underline"
                      : "text-decoration-none"
                  } link-offset-2 link-underline-primary`}
                  to="/services"
                >
                  Services
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`mx-1 nav-link text-${
                    props.mode === "Dark" ? "light" : "dark"
                  } ${
                    location.pathname === "/contact"
                      ? "text-decoration-underline"
                      : "text-decoration-none"
                  } link-offset-2 link-underline-primary`}
                  to="/contact"
                >
                  Contact
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`mx-1 nav-link text-${
                    props.mode === "Dark" ? "light" : "dark"
                  } ${
                    location.pathname === "/connect"
                      ? "text-decoration-underline"
                      : "text-decoration-none"
                  } link-offset-2 link-underline-primary`}
                  to="/connect"
                >
                  Work With Me
                </Link>
              </li>
            </ul>
            <div className={`d-flex  align-items-center`}>
              <div onClick={props.toggleMode} style={{ cursor: "pointer" }}>
                <img src={`${props.mode === "Dark" ? light : dark}`} alt="" />
              </div>
              {/*  */}
              <div className={`mx-2`}>
                <button
                  className={`me-1 btn btn-outline-${
                    props.mode === "Light" ? "dark" : "light"
                  }`}
                >
                  Login
                </button>
                <button
                  className={`ms-1 btn btn-outline-${
                    props.mode === "Light" ? "dark" : "light"
                  }`}
                >
                  SignUp
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
