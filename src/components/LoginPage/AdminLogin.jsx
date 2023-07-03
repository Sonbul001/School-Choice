import React from "react";
import Logo from "../../assets/Logo2.png";
import "./AdminLogin.css";
import { Link } from "react-router-dom";

function AdminLogin() {
  return (
    <div className="admin-login-container">
      <div className="admin-form-container admin-sign-in-container">
        <form action="#" className="admin-login-form">
          <div className="admin-logo-container">
            <img className="admin-logo" src={Logo} alt="Logo" />
          </div>
          <h1>Admin</h1>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
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