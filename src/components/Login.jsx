import React from 'react'
import '../styles/Login.css'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Logo from '../assets/Logo2.png'

function Login() {

  return (
    <div className='login'>
     
<div class="container" id="container">
	
	<div class="form-container sign-in-container">
		<form action="#">
            <div className='logo-container'>
                
            <img className='logo' src={Logo}></img>
            </div>
			<h1>Sign in</h1>
			<input type="email" placeholder="Email" />
			<input type="password" placeholder="Password" />
			<a href="#">Forgot your password?</a>
			<button>Login</button>
		</form>
	</div>
	<div class="overlay-container">
		<div class="overlay">
			
			<div class="overlay-panel overlay-right">
				<h1>Don't Have an Account?</h1>
				<p>Enter your personal details and start journey with us</p>
				<button onClick={()=>{window.location='signup'}} class="ghost" id="signUp">Sign Up</button>
			</div>
		</div>
	</div>
</div>

    </div>
  )
}

export default Login