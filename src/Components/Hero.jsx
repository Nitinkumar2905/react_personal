import React from "react";
import "animate.css";
import "./styles/Hero.css";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

const Hero = (props) => {
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
  return (
    <>
      <div
        className={`d-flex align-items-center justify-content-center`}
        style={{ marginTop: "5rem", fontFamily: "sans-serif" }}
      >
        <div className={`hero-content`}>
          <p
            className={`welcome text-${
              props.mode === "Light" ? "dark" : "light"
            }`}
          >
            &lt;&gt; Welcome &lt;/&gt;
          </p>
          <div
            className={`text-${
              props.mode === "Light" ? "dark" : "light"
            } intro-content`}
          >
            Looking for a MERN developer to hire ?
            <span
              className={`tagline text-${
                props.mode === "Dark" ? "light" : "dark"
              }`}
            >
              Well then congrats, You are at right place at right time .
            </span>
          </div>

          <div
            className={`hero-buttons d-flex align-items-center flex-row`}
          >
            <button
            onClick={hireNow}
              className={`m-2 sm:mx-2 sm:fs-5 button-jump1 btn btn-outline-${
                props.mode === "Dark" ? "light" : "dark"
              }`}
            >
              Hire Now
            </button>

            <button
            onClick={connect}
              className={`m-2 sm:mx-2 sm:fs-5 button-jump3 btn btn-outline-${
                props.mode === "Dark" ? "light" : "dark"
              }`}
            >
              Connect
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
