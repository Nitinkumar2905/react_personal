import React from "react";
import "./styles/Footer.css";
import { Link } from "react-router-dom";
const Footer = (props) => {
  return (
    <>
      <footer className={`text-center`} style={{ fontFamily: "sans-serif" }}>
        <div
          className={`footer-content border-top mt-5 border-${
            props.mode === "Dark" ? "light" : "dark"
          }`}
        >
          <div className="d-flex">
            <span
              className={`copyright text-${
                props.mode === "Dark" ? "light" : "dark"
              }`}
            >
              &copy; 2023 &nbsp;
              <Link
                target="_blank"
                className={`text-decoration-underline link-offset-1 text-${props.mode==="Light"?"dark":"light"}`}
                style={{ cursor: "pointer" }}
                to="https://nitinkumar2905.vercel.app"
              >
                nitinkumar2905
              </Link>
              &nbsp; &nbsp; All right reserved
            </span>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
