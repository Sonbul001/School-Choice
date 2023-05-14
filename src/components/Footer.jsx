import React from 'react'
import '../styles/Footer.css'
import {LogoFacebook, LogoInstagram,LogoLinkedin} from 'react-ionicons';

function Footer() {
  return (
    
    <div className='myFooter'>
       
         <footer class="footer">
    <div class="waves">
      <div class="wave" id="wave1"></div>
      <div class="wave" id="wave2"></div>
      <div class="wave" id="wave3"></div>
      <div class="wave" id="wave4"></div>
    </div>
    <ul class="social-icon">
      <li class="social-icon__item">
        <a class="social-icon__link" href="#">
          <LogoFacebook/>
        </a>
        </li>
     
      <li class="social-icon__item"><a class="social-icon__link" href="#">
          <LogoInstagram/>
        </a></li>
      <li class="social-icon__item"><a class="social-icon__link" href="#">
         <LogoLinkedin/>
        </a></li>
    </ul>
    <ul class="menu">
      <li class="menu__item"><a class="menu__link" href="#">Home</a></li>
      <li class="menu__item"><a class="menu__link" href="#">About Us</a></li>
      <li class="menu__item"><a class="menu__link" href="#">Jobs</a></li>
      <li class="menu__item"><a class="menu__link" href="#">Advertise on Our Schools</a></li>
      <li class="menu__item"><a class="menu__link" href="#">Contact Us</a></li>

    </ul>
   
  </footer>
 
    </div>
  )
}

export default Footer