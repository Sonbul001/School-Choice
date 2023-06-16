import React from 'react'
import './SignUp.css';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Logo from '../../assets/Logo2.png'

function SignUp() {
  return (
    <div>
        <div class="container-signUp" id="container">
	
	<div class="form-container sign-in-container">
		<form action="#">
            <div className='logo-container'>
                
            <img className='logo' src={Logo}></img>
            </div>
			<h1>Sign Up</h1>
			<input type="text" placeholder="Full Name" />
			<input type="date" placeholder="Date of Birth" />
			<input type="text" placeholder="Phone" />
			<input type="email" placeholder="Email" />
			<input type="password" placeholder="Password" />
			<button className='signup--button'>Sign Up</button>
		</form>
	</div>
	<div class="overlay-container">
		<div class="overlay">
			
			<div class="overlay-panel overlay-right">
				<h1>Already Have an Account?</h1>
				<button onClick={()=>{window.location='login'}} class="signup--button ghost" id="signUp">Login</button>
			</div>
		</div>
	</div>
</div>
    </div>
  )
}

export default SignUp