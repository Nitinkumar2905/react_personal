import React, { useEffect, useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import userDark from "../images/user-dark.png";
import userLight from "../images/user-white.png";
import ProjectContext from "../../Context/projects/ProjectContext";
import { toast } from "react-hot-toast";
import { useRef } from "react";
import "../styles/UserProfile.css";
import loadingbar from '../images/loadingt.gif'

const UserProfile = (props) => {
  const context = useContext(ProjectContext);
  const { savedProjects } = context;
  const [user, setUser] = useState({ name: "", email: "", userId: "" });
  const navigate = useNavigate();
  const ref = useRef(null);
  const refClose = useRef(null);

  const host = "https://nitinkumar-backend.vercel.app";
  // const host = "http://localhost:8000";
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

  const handleDeleteModel = () => {
    ref.current.click();
  };
  const deleteUserAccount = async () => {
    const response = await fetch(`${host}/api/auth/deleteUser/${user.userId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token": token,
      },
    });
    if (response.ok) {
      refClose.current.click();
      localStorage.removeItem("token");
      const json = await response.json();
      console.log(json);
      console.log(user.userId);
      toast.success("Account deleted successfully");
      navigate("/");
    } else {
      throw new Error("Failed to delete account");
    }
  };

  useEffect(() => {
    userDetails();
  }, []);

  return (
    <>
      <div
        className="d-flex justify-content-start mt-4 mx-auto"
        style={{ width: "90%" }}
      >
        <div
          id="main-item-profile"
          className={` rounded-2 justify-content-center d-flex`}
          style={{
            width: "50vh",
            // height: "70vh",
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
                // <span>loading user data</span>
                <div className="text-center"><img style={{width:'20px',height:'20px'}} src={loadingbar} alt="" /></div>
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
              <div
                style={{ fontSize: ".8rem" }}
                className={`mt-2 text-${
                  props.mode === "Dark" ? "light" : "dark"
                }`}
              >
                No. of Saved Projects : {savedProjects.length}
              </div>
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
                <Link to="helpCenter" className={`text-success link-offset-2`}>
                  Help Center
                </Link>
                <Link to="/settings" className={`text-success link-offset-2`}>
                  Settings
                </Link>

                <button
                  onClick={handleDeleteModel}
                  className={`btn btn-success mt-4 text-light link-offset-2`}
                >
                  Delete Account
                </button>

                <div>
                  <button
                    ref={ref}
                    type="button"
                    className="btn btn-primary d-none"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  >
                    Launch demo modal
                  </button>

                  <div
                    className="modal fade"
                    id="exampleModal"
                    tabIndex="-1"
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                  >
                    <div className="modal-dialog">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h1
                            className="modal-title fs-5"
                            id="exampleModalLabel"
                          >
                            Account deletion confirmation
                          </h1>
                          <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                          ></button>
                        </div>
                        <div className="modal-body ">
                          <span>Note : This action is note reversable.</span>
                        </div>
                        <div className="modal-footer">
                          <button
                            ref={refClose}
                            type="button"
                            className="btn btn-secondary"
                            data-bs-dismiss="modal"
                          >
                            Cancel
                          </button>
                          <button
                            onClick={deleteUserAccount}
                            type="button"
                            className="btn btn-primary"
                          >
                            Delete
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
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
