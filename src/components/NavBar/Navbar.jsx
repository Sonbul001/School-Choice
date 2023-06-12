import React from 'react'
import Logo from '../../assets/Logo2.png'
import './Navbar.css'

let loggedIn = false;


function alo(){
    return <li><a href='#'>Logout</a></li>;
}

function isLogged(){
    if(loggedIn){
        return <li><a href='#'>Logout</a></li>;
        }
    else{
        
           return( [
             <li><a href='/signup'>Sign Up</a></li> ,
             <li><a href='/login'>Login</a></li> 
           ]
           )
            
}

    //return null;
}


function Navbar() {
    
  return (
    <div className='Navbar'>
        <nav>
            <img className='Nav-img' src={Logo}></img>
            <div>
                <ul id='nav-items'>
                    <li><a className='active' href='#'>Home</a></li>
                    <li><a href='#'>Schools</a></li>
                    <li><a href='#'>Our Services</a></li>
                    <li><a href='#'>Contact Us</a></li>
                    {isLogged()}
                    
                    </ul>
            </div>
        </nav>
    </div>
  )
}

export default Navbar