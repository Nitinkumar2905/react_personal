import React from "react";
import "../styles/Connect.css";
import { useState } from "react";
import { useEffect } from "react";

const Connect = (props) => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    userId: "",
  });
  const [loading, setLoading] = useState(false);
  const token = localStorage.getItem("token");
  const host = "https://nitinkumar-backend.vercel.app"
  // const host = "http://localhost:8000";

  const userDetails = async () => {
    if (token) {
      const response = await fetch(`${host}/api/auth/getUser`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "auth-token": token,
        },
      });
      if (response.ok) {
        const json = await response.json();
        setUser({
          name: json.user.name,
          email: json.user.email,
          userId: json.user._id,
        });
        setLoading(true);
      } else {
        throw new Error("Failed to fetch user details");
      }
    }
  };
  useEffect(() => {
    userDetails();
  }, []);
  return (
    <>
      <div
        className={`text-center d-flex flex-column align-items-center  text-${
          props.mode === "Dark" ? "light" : "dark"
        } content-box`}
        style={{ fontFamily: "sans-serif" }}
      >
        <h1 className={`mb-5`}>Connect</h1>
        <div className="items-box">
          <div className="item1">
            <h3 className="" style={{ margin: "1.5rem 0rem" }}>
              Let's do this
            </h3>
            <div className="text-start" style={{ margin: "2rem 0rem" }}>
              Hey dude,
              <p className="mt-1">
                It's great to see you on this side, if you are looking to work
                with me then please fill the form first and I will be in touch
                with you soon.
              </p>
            </div>
          </div>
          <div className="item2">
            <h5 style={{ maxWidth: "" }}>
              Fill in the form and i will be in touch soon (Only for India)
            </h5>
            <div
              className={`border connect-form border-${
                props.mode === "Dark" ? "light" : "dark"
              } rounded`}
            >
              <form
                className=""
                action="https://formspree.io/f/mqkvkalw"
                method="post"
              >
                <div className="form-item d-flex flex-column mb-4">
                  <label htmlFor="name">Name:</label>
                  <input
                    required
                    placeholder="Name"
                    className={`py-2 px-2 my-1 rounded text-${
                      props.mode === "Dark" ? "light" : "dark"
                    } border border-${
                      props.mode === "Dark" ? "white" : "black"
                    }`}
                    value={user.name}
                    readOnly
                    type="text"
                    name="name"
                  />
                </div>
                <div className="form-item d-flex flex-column mb-4">
                  <label htmlFor="email">Email:</label>
                  <input
                    required
                    placeholder="sample@gmail.com"
                    className={`py-2 px-2 my-1 rounded text-${
                      props.mode === "Dark" ? "light" : "dark"
                    } border border-${
                      props.mode === "Dark" ? "white" : "black"
                    }`}
                    readOnly
                    value={user.email}
                    name="email"
                    type="email"
                  />
                </div>
                <div className="form-item d-flex flex-column mb-4">
                  <label htmlFor="phone">Mobile Number:</label>
                  <input
                    required
                    placeholder="+91 00000000000"
                    className={`py-2 px-2 my-1 rounded text-${
                      props.mode === "Dark" ? "light" : "dark"
                    } border border-${
                      props.mode === "Dark" ? "white" : "black"
                    }`}
                    type="text"
                    name="phone"
                    pattern="[0-9]*"
                    id="phone"
                    minLength={10}
                    maxLength={10}
                  />
                  <small>Mobile number should contain 10 digits</small>
                </div>
                <div className="form-item d-flex flex-column mb-4">
                  <label htmlFor="skills">Skills Set:</label>
                  <div className="container ms-1">
                    <div className="item">
                      <input
                        required
                        name="skills"
                        id="mernStack"
                        type="radio"
                        value="MERN Dev"
                      />
                      <label className="" htmlFor="mernStack">
                        MERN Dev
                      </label>
                    </div>
                    <div className="item">
                      <input
                        required
                        name="skills"
                        id="python"
                        type="radio"
                        value="Python Dev"
                      />
                      <label className="" htmlFor="python">
                        Python Dev
                      </label>
                    </div>
                    <div className="item">
                      <input
                        required
                        name="skills"
                        id="frontend"
                        type="radio"
                        value="Frontend Dev"
                      />
                      <label className="" htmlFor="frontend">
                        Frontend Dev
                      </label>
                    </div>
                    <div className="item">
                      <input
                        required
                        name="skills"
                        id="backend"
                        type="radio"
                        value="Backend Dev"
                      />
                      <label className="" htmlFor="backend">
                        Backend Dev
                      </label>
                    </div>
                    <div className="item">
                      <input
                        required
                        name="skills"
                        id="designer"
                        type="radio"
                        value="UI/UX Designer"
                      />
                      <label className="" htmlFor="designer">
                        UI/UX Designer
                      </label>
                    </div>
                    <div className="item">
                      <input
                        required
                        name="skills"
                        id="javascript"
                        type="radio"
                        value="JavaScript Dev"
                      />
                      <label className="" htmlFor="designer">
                        JavaScript Dev
                      </label>
                    </div>
                  </div>
                </div>

                <div className="button-div" style={{ width: "100%" }}>
                  <button
                    className={`form-button btn btn-outline-${
                      props.mode === "Dark" ? "light" : "dark"
                    }`}
                    type="submit"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Connect;
