import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "../styles/Login.css";

const Login = (props) => {
  const location = useLocation();
  const host = "http://localhost:8000";
  const token = localStorage.getItem("token");
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    const response = await fetch(`${host}/api/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": token,
      },
      body: JSON.stringify({
        email: credentials.email,
        password: credentials.password,
      }),
    });

    const json = await response.json();
    if (json.success) {
      localStorage.setItem("token", json.authToken);
      navigate("/");
      // props.showAlert("Logged in successfully", "success");
    } else {
      // props.showAlert("Invalid credentials", "danger");
    }
  };

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div
        className={`login-box text-${
          props.mode === "Dark" ? "light" : "dark"
        } text-center`}
      >
        <h3>Login to Continue</h3>
        <div
          className={`login-form border border-${
            props.mode === "Dark" ? "light" : "dark"
          } rounded p-3`}
        >
          <form onSubmit={handleLogin}>
            <div className={`login-item`}>
              <label htmlFor="email">Email address:</label>
              <input
                className={`text-${
                  props.mode === "Dark" ? "light" : "dark"
                } border rounded border-${
                  props.mode === "Dark" ? "light" : "dark"
                }  p-2`}
                required
                value={credentials.email}
                onChange={onChange}
                type="email"
                name="email"
                id="email"
                placeholder="E mail"
              />
            </div>
            <div className={`login-item`}>
              <label htmlFor="password">Password:</label>
              <input
                className={`text-${
                  props.mode === "Dark" ? "light" : "dark"
                } border rounded border-${
                  props.mode === "Dark" ? "light" : "dark"
                }  p-2`}
                required
                value={credentials.password}
                onChange={onChange}
                minLength={8}
                type="password"
                name="password"
                id="password"
                placeholder="Password (atleast 8 characters)"
              />
              <small className="text-start mt-2 ps-2">
                We will never share your credentials with anyone else
              </small>
            </div>

            <div className="">
              <button
                className={`mt-4 px-4 py-2 btn btn-outline-${
                  props.mode === "Dark" ? "light" : "dark"
                }`}
                type="submit"
              >
                Submit
              </button>
            </div>
          </form>
          <div className="mt-5">
            <span className="">
              New User ?{" "}
              <Link
                className={`text-${
                  props.mode === "Dark" ? "light" : "dark"
                } text-decoration-underline underline-link-${
                  props.mode === "Dark" ? "light" : "dark"
                }
                link-offset-2`}
                to="/signUp"
              >
                SignUp Now
              </Link>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
