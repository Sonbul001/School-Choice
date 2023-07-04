import React from "react";
import "./Login.css";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Logo from "../../assets/Logo2.png";
import { Link } from "react-router-dom";

function Login() {
	return (
		<div className="body">
			<div class="login-container" id="container">
				<div class="form-container sign-in-container">
					<form action="#" className="login-form">
						<div className="logo-container">
							<img className="logo" src={Logo}></img>
						</div>
						<h1>Applicant</h1>
						<input type="email" placeholder="Email" />
						<input type="password" placeholder="Password" />
						<Link to="/adminLogin" className="login-link">
							Sign in as admin ?
						</Link>
						<button className="login--button">Login</button>
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
