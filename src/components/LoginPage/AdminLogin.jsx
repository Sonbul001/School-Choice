import React, { useState } from "react";
import Logo from "../../assets/Logo2.png";
import "./AdminLogin.css";
import { Link, useNavigate } from "react-router-dom";

function AdminLogin() {
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
          navigate('/admins/schools');
        } else {
          window.alert("Incorrect email or password.");
        }
      })
      .catch(error => {
        console.error(error);
      });
  };
  return (
    <div className="admin-login-container">
      <div className="admin-form-container admin-sign-in-container">
        <form onSubmit={handleSubmit} className="admin-login-form">
          <div className="admin-logo-container">
            <img className="admin-logo" src={Logo} alt="Logo" />
          </div>
          <h1>Admin</h1>
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
          <Link to="/login" className="admin-login-link">
            Sign in as applicant ?
          </Link>
          <button className="admin-login-button">Login</button>
        </form>
      </div>
    </div>
  );
}

export default AdminLogin;