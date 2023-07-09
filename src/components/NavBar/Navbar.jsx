import React from 'react';
import Logo from '../../assets/Logo2.png';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './Navbar.css';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';

function Navbar() {
    const [loggedIn, setLoggedIn] = useState(false)
    const [user, setUser] = useState('')
    const navigate = useNavigate();
    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            setLoggedIn(true);
            fetch('http://localhost:3000/applicants/profile', {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
            .then(response => response.json())
            .then(data => {
                setUser(data.fullName);
            })
            .catch(error => {
                console.error('Error:', error);
            });
        }


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
                        {loggedIn && <li><a href='/applicant' className='navbar-applicant-username'><FaUser /> {user}</a></li>}  
                        <li><a href='/'>Home</a></li>
                        <li><a href='/search'>Schools</a></li>
                        <li>
                            <NavDropdown
                                title="Our Services"
                                menuVariant="dark"
                            >
                                <NavDropdown.Item><Link to='/exams' state={{user: 'user'}}>Exams</Link></NavDropdown.Item>
                                <NavDropdown.Item><Link to='/courses' state={{user: 'user'}}>Courses</Link></NavDropdown.Item>
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