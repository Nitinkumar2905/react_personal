import React from "react";
import "./styles/Footer.css";
const Footer = (props) => {
  return (
    <>
      <footer
        className={`text-center`}
        style={{ fontFamily: "sans-serif" }}
      >
        <div className={`footer-content border-top mt-5 border-${props.mode==="Dark"?"light":"dark"}`}>
          <div className="d-flex">
            <span className={`copyright text-${props.mode==="Dark"?"light":"dark"}`}>
              &copy; 2023 nitinkumar2905.vercel.app  &nbsp; &nbsp; All right reserved
            </span>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
