import React from 'react';
import Logo from '../../assets/Logo2.png';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './Navbar.css';
import { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';

function Navbar() {
    const [loggedIn, setLoggedIn] = useState(true)
    const navigate = useNavigate();
    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) setLoggedIn(true);
    })

    const logOut = () => {
        localStorage.removeItem('token');
        navigate('/login', {replace:true});
    }

    return (
        <div className='Navbar'>
            <nav>
                <img className='Nav-img' src={Logo}></img>
                <div>
                    <ul id='nav-items'>
                        {loggedIn && <li><a href='/applicant' className='navbar-applicant-username'><FaUser /> Username</a></li>}  
                        <li><a href='/'>Home</a></li>
                        <li><a href='/search'>Schools</a></li>
                        <li>
                            <NavDropdown
                                title="Our Services"
                                menuVariant="dark"
                            >
                                <NavDropdown.Item href="/exams">Exams</NavDropdown.Item>
                                <NavDropdown.Item href="/courses">Courses</NavDropdown.Item>
                            </NavDropdown>
                        </li>
                        {loggedIn && <li><a href='#' onClick={logOut}>Logout</a></li>}
                        {!loggedIn &&
                            [<li><a href='/signup'>Sign Up</a></li>,
                            <li><a href='/login'>Login</a></li>]
                        }
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar