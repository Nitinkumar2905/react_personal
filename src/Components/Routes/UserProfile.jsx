import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import userDark from "../images/user-dark.png";
import userLight from "../images/user-white.png";
import ProjectContext from "../../Context/projects/ProjectContext";

const UserProfile = (props) => {
  const context = useContext(ProjectContext);
  const { fetchSavedProjects, savedProjects } = context;
  const [user, setUser] = useState({ name: "", email: "", userId: "" });
  const host = "http://localhost:8000";
  const token = localStorage.getItem("token");
  const [loading, setLoading] = useState(false);

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
        className="d-flex mx-5 justify-content-center"
        style={{ height: "76vh", fontFamily: "sans-serif" }}
      >
        <div
          className="d-flex justify-content-start mt-4"
          style={{ width: "100%" }}
        >
          <div
            className={`rounded-2 justify-content-center d-flex`}
            style={{
              width: "50vh",
              height: "75vh",
              backgroundColor: `${
                props.mode === "Dark" ? "rgb(11, 17, 31)" : "white"
              }`,
            }}
          >
            <div
              className="my-4 rounded px-4 d-flex flex-column align-items-start"
              style={{ width: "100%" }}
            >
              <div className="">
                <img
                  style={{ height: "2.5rem", cursor: "pointer" }}
                  src={props.mode === "Dark" ? userDark : userLight}
                  alt=""
                />
              </div>
              <hr
                className={`bg-${props.mode === "Dark" ? "white" : "black"}`}
                style={{ width: "100%" }}
              />
              <div>
                <h5
                  className={`text-${
                    props.mode === "Dark" ? "dark-emphasis" : "dark"
                  }`}
                >
                  User Details
                </h5>
                {loading ? (
                  <div className="my-3">
                    <h6
                      style={{ fontSize: "1rem" }}
                      className={`text-${
                        props.mode === "Dark" ? "light" : "dark"
                      }`}
                    >
                      Name : {user.name}
                    </h6>
                    <h6
                      style={{ fontSize: "1rem" }}
                      className={`text-${
                        props.mode === "Dark" ? "light" : "dark"
                      }`}
                    >
                      Email : {user.email}
                    </h6>
                    <h6
                      style={{ fontSize: "1rem" }}
                      className={`text-${
                        props.mode === "Dark" ? "light" : "dark"
                      }`}
                    >
                      User Id : {user.userId}
                    </h6>
                  </div>
                ) : (
                  <span>Loading user data</span>
                )}
              </div>

              {/* Activity */}
              <hr className="bg-black" style={{ width: "100%" }} />
              <div className="">
                <h5
                  className={`text-${
                    props.mode === "Dark" ? "dark-emphasis" : "dark"
                  }`}
                >
                  Activity
                </h5>
                <Link
                  to="savedProjects"
                  className={`text-${
                    props.mode === "Dark" ? "light" : "dark"
                  } link-offset-2`}
                >
                  Saved Projects
                </Link>
                <div style={{fontSize:'.8rem'}} className={`mt-2 text-${props.mode==="Dark"?"light":"dark"}`}>No. of Saved Projects : {savedProjects.length}</div>
              </div>
              {/* Other Links */}
              <hr className="bg-black" style={{ width: "100%" }} />
              <div className="">
                <h5
                  className={`text-${
                    props.mode === "Dark" ? "dark-emphasis" : "dark"
                  }`}
                >
                  Other links
                </h5>
                <div className="d-flex flex-column">
                  <Link
                    to="helpCenter"
                    className={`text-success link-offset-2`}
                  >
                    Help Center
                  </Link>
                  <Link to="/settings" className={`text-success link-offset-2`}>
                    Settings
                  </Link>

                  <Link
                    to="deleteAccount"
                    className={`btn btn-success mt-5 text-light link-offset-2`}
                  >
                    Delete Account
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

export default UserProfile;
