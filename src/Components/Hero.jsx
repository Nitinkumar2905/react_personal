import React from "react";
import "animate.css";
import "./styles/Hero.css";

const Hero = (props) => {
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
            Looking for a web developer to hire ?
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
              className={`m-2 sm:mx-2 sm:fs-5 button-jump1 btn btn-outline-${
                props.mode === "Dark" ? "light" : "dark"
              }`}
            >
              Hire Now
            </button>

            <button
              className={`m-2 sm:mx-2 sm:fs-5 button-jump3 btn btn-outline-${
                props.mode === "Dark" ? "light" : "dark"
              }`}
            >
              Contact
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
