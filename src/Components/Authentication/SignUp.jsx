import { useNavigate } from "react-router-dom";
import React, { useRef, useState } from "react";
import "../styles/SignUp.css";
import { toast } from "react-hot-toast";
import loadingIcon from "../images/loadingt.gif";
import { FaEye } from "react-icons/fa";

const SignUp = (props) => {
  const navigate = useNavigate();
  const host = "https://nitinkumar-backend.vercel.app";
  // const host = "http://localhost:8000";
  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    password: "",
    cpassword: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };
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
  const handleSignUp = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const { name, email, password, cpassword } = credentials;

    if (password === cpassword) {
      try {
        const response = await fetch(`${host}/api/auth/createUser`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            email,
            password,
            cpassword,
          }),
        });

        if (!response.ok) {
          throw new Error("Failed to create user.");
        }

        const json = await response.json();
        setIsLoading(false);
        if (json.success) {
          localStorage.setItem("token", json.authToken);
          navigate("/");
          toast.success("Account created successfully!", {
            style: {
              borderRadius: "10px",
              background: `${props.mode === "Dark" ? "#fff" : "#333"}`,
              color: `${props.mode === "Dark" ? "#333" : "#fff"}`,
            },
          });
        } else {
          toast.error("Cannot process right now, Sorry!", {
            style: {
              borderRadius: "10px",
              background: `${props.mode === "Dark" ? "#fff" : "#333"}`,
              color: `${props.mode === "Dark" ? "#333" : "#fff"}`,
            },
          });
        }
      } catch (error) {
        toast.error("User already exists with this email", {
          style: {
            borderRadius: "10px",
            background: `${props.mode === "Dark" ? "#fff" : "#333"}`,
            color: `${props.mode === "Dark" ? "#333" : "#fff"}`,
          },
        });
      }
    } else {
      setIsLoading(false);
      toast.error("Password conflict!", {
        style: {
          borderRadius: "10px",
          background: `${props.mode === "Dark" ? "#fff" : "#333"}`,
          color: `${props.mode === "Dark" ? "#333" : "#fff"}`,
        },
      });
    }
  };

  return (
    <>
      {!isLoading ? (
        <div
          className={`SignUp-box text-${
            props.mode === "Dark" ? "light" : "dark"
          } text-center`}
        >
          <h3>New user ? SignUp Now</h3>
          <div
            className={`SignUp-form border border-${
              props.mode === "Dark" ? "light" : "dark"
            } rounded p-3`}
          >
            <form onSubmit={handleSignUp}>
              <div className={`SignUp-item`}>
                <label htmlFor="name">Name:</label>
                <input
                  className={`text-${
                    props.mode === "Dark" ? "light" : "dark"
                  } border rounded border-${
                    props.mode === "Dark" ? "light" : "dark"
                  }  p-2`}
                  required
                  value={credentials.name}
                  onChange={onChange}
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Name"
                />
              </div>
              <div className={`SignUp-item`}>
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
              <div className={`SignUp-item`}>
                <label htmlFor="password">Set Password:</label>
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
              </div>
              <div className={`SignUp-item`}>
                <label htmlFor="cpassword">Confirm Password:</label>
                <input
                  className={`text-${
                    props.mode === "Dark" ? "light" : "dark"
                  } border rounded border-${
                    props.mode === "Dark" ? "light" : "dark"
                  }  p-2`}
                  required
                  value={credentials.cpassword}
                  onChange={onChange}
                  minLength={8}
                  type="password"
                  name="cpassword"
                  id="cpassword"
                  placeholder="Must be same"
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
          </div>
        </div>
      ) : (
        <div
          className="d-flex justify-content-center"
          style={{ height: "76vh" }}
        >
          <img
            className="m-auto"
            src={loadingIcon}
            style={{ height: "3rem", width: "3rem" }}
            alt=""
          />
        </div>
      )}
    </>
  );
};

export default SignUp;
