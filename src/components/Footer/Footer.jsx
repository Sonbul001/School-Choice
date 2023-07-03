import React from 'react'
import './Footer.css'
import Logo from '../../assets/Logo2.png';
import { Link } from 'react-router-dom';
import { LogoFacebook, LogoInstagram, LogoLinkedin } from 'react-ionicons';

function Footer() {
  return (

    <div className='myFooter'>
      <div class="footer-logo">
        <img src={Logo}></img>
      </div>
      <div class="footer-slogan">
        <h4>An electronic platform that provides
          information about schools,
          teachers, students, services and educational activities,
          by building and circulating big data, artificial
          intelligence
          techniques and financial technology that help in obtaining
          information and making requests in an easy and fast digital way
          that enriches the educational process.</h4>
      </div>
      <footer class="footer">
        <ul class="social-icon">
          <li class="social-icon__item">
            <a class="social-icon__link" href="#">
              <LogoFacebook />
            </a>
          </li>

          <li class="social-icon__item"><a class="social-icon__link" href="#">
            <LogoInstagram />
          </a></li>
          <li class="social-icon__item"><a class="social-icon__link" href="#">
            <LogoLinkedin />
          </a></li>
        </ul>
        <ul className="menu">
          <li className="menu__item"><Link className="menu__link" to="/">Home</Link></li>
          <li className="menu__item"><Link className="menu__link" to="/aboutus">About Us</Link></li>
          <li className="menu__item"><a className="menu__link" href="mailto:example@example.com">Advertise On Our Website</a></li>
          <li className="menu__item"><a className="menu__link" href="mailto:example@example.com">Contact Us</a></li>
        </ul>

      </footer>

    </div>
  )
}

export default Footer