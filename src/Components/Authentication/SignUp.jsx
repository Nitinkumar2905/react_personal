import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import "../styles/SignUp.css";

const SignUp = (props) => {
  const navigate = useNavigate();
  const host = "https://nitinkumar-backend.vercel.app";
  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    password: "",
    cpassword: "",
  });
  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };
  const handleSignUp = async (e) => {
    console.log("clicked");
    e.preventDefault();
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

        if (json.success) {
          localStorage.setItem("token", json.authToken);
          navigate("/");
          // props.showAlert("Account created successfully", "success");
        } else {
          // props.showAlert("User already exists with this email", "danger");
        }
      } catch (error) {
        // props.showAlert("Failed to create user", "danger");
        console.error(error);
      }
    } else {
      // props.showAlert("Password must be the same", "warning");
    }
  };

  return (
    <>
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
    </>
  );
};

export default SignUp;
