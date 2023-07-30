import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./styles/Navbar.css";
import logo from "./images/sunset.jpg";
import dark from "./images/dark mode.png";
import light from "./images/light mode.png";
import userLight from "./images/user-white.png";
import userDark from "./images/user-dark.png";
import { toast } from "react-hot-toast";

const Navbar = (props) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [user, setUser] = useState({ name: "", email: "" });
  // const host = "https://nitinkumar-backend.vercel.app";
  const host = "http://localhost:8000";

  const handleLogOut = () => {
    props.setProgress(0);
    navigate("/");
    toast.success("Logged Out!", {
      style: {
        borderRadius: "10px",
        background: `${props.mode === "Dark" ? "#fff" : "#333"}`,
        color: `${props.mode === "Dark" ? "#333" : "#fff"}`,
      },
    });
    localStorage.removeItem("token");

    props.setProgress(100);
  };

  const connect = (e) => {
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
      navigate("/connect");
    }
  };
  // const contact = (e) => {
  //   e.preventDefault();
  //   props.setProgress(0);
  //   if (!localStorage.getItem("token")) {
  //     navigate("/login");
  //     // if(localStorage.getItem("token")){
  //     //   navigate("/connect")
  //     // }
  //     props.setProgress(100);
  //     toast("Please login to continue", "warning", {
  //       style: {
  //         borderRadius: "10px",
  //         background: `${props.mode === "Dark" ? "#fff" : "#333"}`,
  //         color: `${props.mode === "Dark" ? "#333" : "#fff"}`,
  //       },
  //     });
  //   } else {
  //     props.setProgress(100);
  //     navigate("/contact");
  //   }
  // };

  // useEffect(() => {
  //   handleUserInfo();
  //   // eslint-disable-next-line
  // }, []);

  // const handleUserInfo = async () => {
  //   if (localStorage.getItem("token")) {
  //     const response = await fetch(`${host}/api/auth/getUser`, {
  //       method: "GET",
  //       headers: {
  //         "Content-Type": "application",
  //         "auth-token": localStorage.getItem("token"),
  //       },
  //     });

  //     if (response.ok) {
  //       const json = await response.json();
  //       setUser({
  //         name: json.user.name,
  //         email: json.user.email,
  //         userId: json.user._id,
  //       });
  //     } else {
  //       throw new Error("Failed to fetch user details");
  //     }
  //   }
  // };

  return (
    <>
      <nav
        className={`pt-4 shadow-${props.mode === "Light" ? "lg" : "nav"
          } navbar navbar-expand-lg bg-${props.mode === "Dark" ? "dark-emphasis" : "light"
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
              className={`head-text mx-3 text-${props.mode === "Light" ? "dark" : "light"
                }`}
            >
              Nitin kumar
            </span>
          </Link>

          <button
            className={`navbar-toggler border border-${props.mode === "Light" ? "dark" : "light"
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
                  className={`mx-1 nav-link ${location.pathname==="/"?"text-decoration-underline":"text-decoration-none"} link-underline-success link-offset-3 text-${props.mode === "Dark" ? "light" : "dark"
                    }`}
                  aria-current="page"
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`mx-1 nav-link ${location.pathname==="/projects"?"text-decoration-underline":"text-decoration-none"} link-underline-success link-offset-3 text-${props.mode === "Dark" ? "light" : "dark"
                    }`}
                  to="/projects"
                >
                  Projects
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`mx-1 nav-link ${location.pathname==="/services"?"text-decoration-underline":"text-decoration-none"} link-underline-success link-offset-3 text-${props.mode === "Dark" ? "light" : "dark"
                    }`}
                  to="/services"
                >
                  Services
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`mx-1 nav-link ${location.pathname==="/contact"?"text-decoration-underline":"text-decoration-none"} link-underline-success link-offset-3 text-${props.mode === "Dark" ? "light" : "dark"
                    }`}
                  to="/contact"
                >
                  Contact
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  onClick={connect}
                  className={`mx-1 nav-link ${location.pathname==="/connect"?"text-decoration-underline":"text-decoration-none"} link-underline-success link-offset-3 text-${props.mode === "Dark" ? "light" : "dark"
                    }`}
                  to="/connect"
                >
                  Work With Me
                </Link>
              </li>
            </ul>
            <div className={`user-button`}>
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
                    className={`me-1 btn btn-success`}
                  >
                    SignIn
                  </Link>
                  <Link
                    to="/signUp"
                    className={`ms-1 btn btn-outline-success
                      `}
                  >
                    SignUp
                  </Link>
                </div>
              ) : (
                <div className="mx-2 user-details">
                  <div
                    // onClick={handleUserInfo}
                    to="/UserInfo"
                    className={`mx-2 text-${props.mode === "Dark" ? "light" : "dark"
                      } text-decoration-none `}
                    style={{ cursor: "default" }}
                  >
                    {localStorage.getItem("token") && (
                      <Link to="/profile">
                        <img
                          style={{ height: "2.5rem", cursor: "pointer" }}
                          src={props.mode === "Dark" ? userDark : userLight}
                          alt=""
                        />
                      </Link>
                    )}
                  </div>
                  <button
                    onClick={handleLogOut}
                    className={`ms-1 my-2 btn btn-outline-success
                      }`}
                  >
                    SignOut
                  </button>
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
