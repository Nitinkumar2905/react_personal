import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/Login.css";
import { toast } from "react-hot-toast";
import loadingIcon from "../images/loadingt.gif";
import { FaEye } from "react-icons/fa";

const Login = (props) => {
  const host = "https://nitinkumar-backend.vercel.app";
  // const host = "http://localhost:8000";
  const token = localStorage.getItem("token");
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [passwordType, setPasswordType] = useState("password");
  const toggleRef = useRef();

  const togglePasswordType = () => {
    toggleRef.current.click();
    if (passwordType === "password") {
      setPasswordType("text");
    } else {
      setPasswordType("password");
    }
  };

  const handleLogin = async (e) => {
    setIsLoading(true);
    e.preventDefault();
    props.setProgress(0);
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
    props.setProgress(40);

    const json = await response.json();
    if (json.success) {
      localStorage.setItem("token", json.authToken);
      navigate("/");

      setIsLoading(false);
      props.setProgress(100);
      toast.success("Successfully logged In!", {
        style: {
          borderRadius: "10px",
          background: `${props.mode === "Dark" ? "#fff" : "#333"}`,
          color: `${props.mode === "Dark" ? "#333" : "#fff"}`,
        },
      });
    } else {
      setIsLoading(false);
      props.setProgress(100);
      toast.error("Invalid credentials !", {
        style: {
          borderRadius: "10px",
          background: `${props.mode === "Dark" ? "#fff" : "#333"}`,
          color: `${props.mode === "Dark" ? "#333" : "#fff"}`,
        },
      });
    }
  };

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <>
      {!isLoading ? (
        <div
          className={`login-box text-${
            props.mode === "Dark" ? "light" : "dark"
          } text-center`}
        >
          <h3>SignIn to Continue</h3>
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
                <div
                  className={`d-flex justify-items-between text-${
                    props.mode === "Dark" ? "light" : "dark"
                  } border rounded border-${
                    props.mode === "Dark" ? "light" : "dark"
                  }  p-2`}
                >
                  <input
                    required
                    value={credentials.password}
                    onChange={onChange}
                    ref={toggleRef}
                    minLength={8}
                    type={passwordType}
                    name="password"
                    id="password"
                    placeholder="Password (atleast 8 characters)"
                  />
                  <FaEye
                    style={{ cursor: "pointer" }}
                    onClick={togglePasswordType}
                  ></FaEye>
                </div>
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
      ) : (
        <div className="login-box">
          <img
            className="mx-auto"
            style={{ height: "3rem", width: "3rem" }}
            src={loadingIcon}
            alt=""
          />
        </div>
      )}
    </>
  );
};

export default Login;
