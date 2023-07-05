import React, { useState } from "react";
import "./Login.css";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Logo from "../../assets/Logo2.png";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch("http://localhost:3000/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ email, password })
    })
      .then(response => response.json())
      .then(data => {
        if (data.access_token) {
          localStorage.setItem("token", data.access_token);
          navigate('/applicant');
        } else {
          window.alert("Incorrect email or password.");
        }
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <div className="body">
      <div class="login-container" id="container">
        <div class="form-container sign-in-container">
          <form onSubmit={handleSubmit} className="login-form">
            <div className="logo-container">
              <img className="logo" src={Logo}></img>
            </div>
            <h1>Applicant</h1>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
			  required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
			  required
            />
            <Link to="/adminLogin" className="login-link">
              Sign in as admin ?
            </Link>
            <button type="submit" className="login--button">
              Login
            </button>
          </form>
        </div>
        <div class="overlay-container">
          <div class="overlay">
            <div class="overlay-panel overlay-right">
              <h1>Don't Have an Account?</h1>
              <p>Enter your personal details and start journey with us</p>
              <button
                onClick={() => {
                  window.location = "signup";
                }}
                class="login--button ghost"
                id="signUp"
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;