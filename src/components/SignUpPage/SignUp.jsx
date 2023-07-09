import React, { useState } from "react";
import "./SignUp.css";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Logo from "../../assets/Logo2.png";
import { Link, useNavigate } from "react-router-dom";

function SignUp() {
	const navigate = useNavigate();

	const [fullName, setFullName] = useState("");
	const [phone, setPhone] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [address, setAdress] = useState("");
	const [city, setCity] = useState("");

	const handleSubmit = async (event) => {
		event.preventDefault();

		const data = {
			fullName,
			email,
			password,
			phone,
			city,
			address,
		};

		try {
			const response = await fetch("http://localhost:3000/applicants/signup", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(data),
			});

			if (!response.ok) {
				throw new Error("Network response was not ok");
			}

			alert("Sign up successful!");
			navigate("/login");
		} catch (error) {
			console.error("Error:", error);
			alert("Sign up failed. Please try again.");
		}
	};

	return (
		<div className="body">
			<div class="container-signUp" id="container">
				<div class="form-container sign-in-container">
					<form onSubmit={handleSubmit}>
						<div className="logo-container">
							<img className="logo" src={Logo} alt="Logo" />
						</div>
						<h1 className="signup-title">Sign Up</h1>
						<input type="text" placeholder="Name" value={fullName} onChange={(event) => setFullName(event.target.value)} required />
						<input type="email" placeholder="Email" value={email} onChange={(event) => setEmail(event.target.value)} required />
						<input type="password" placeholder="Password" value={password} minLength={4} onChange={(event) => setPassword(event.target.value)} required />
						<input type="tel" placeholder="Phone" value={phone} pattern="01[0-9]{9}" title="Please enter a valid phone number starting with 01 and having 11 digits" onChange={(event) => setPhone(event.target.value)} required />
						<input type="text" placeholder="City" value={city} onChange={(event) => setCity(event.target.value)} required />
						<input type="text" placeholder="Address" value={address} onChange={(event) => setAdress(event.target.value)} required />
						<button type="submit" className="signup--button" style={{ marginLeft: "50%", transform: "translateX(-50%)" }}>
							Sign Up
						</button>
					</form>
				</div>
				<div class="overlay-container">
					<div class="overlay">
						<div class="overlay-panel overlay-right">
							<h1>Already Have an Account?</h1>
							<button
								onClick={() => {
									window.location = "login";
								}}
								class="signup--button ghost"
								id="signUp"
							>
								Login
							</button>
							<Link to="/" className="login-link" style={{ marginTop: "10px" }}>
								Go to home page
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default SignUp;
