import React, { useEffect, useState } from 'react';
import './Sidebar.css'

import usernameLogo from '../../assets/username-logo.png';
import favoritesLogo from '../../assets/favorites-logo.png';
import testsLogo from '../../assets/tests-logo.png';
import coursesLogo from '../../assets/courses-logo.png';
import settingsLogo from '../../assets/settings-logo.png';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    const [username, setUserName] = useState("");
    useEffect(() => {
        const getApplicant = async () => {
          try {
            const response = await fetch('http://localhost:3000/applicants/profile', {
              headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token')
              }
            });
            if (response.status != 401) {
              const data = await response.json();
              setUserName(data.fullName);
            } else {
              throw new Error('Unauthorized');
            }
          } catch (error) {
            console.error('Error:', error);
            alert('Failed to fetch data from the server.');
          }
        };
    
        getApplicant();
      }, []);
    return (
        <div className="sidebar--component">
            <div className="sidebar--component--item">
                <img src={usernameLogo} alt="Username Logo" />
                <Link to={"/applicant"}>{username}</Link>
            </div>
            <div className="sidebar--component--item">
                <img src={favoritesLogo} alt="Favorites Logo" />
                <Link to={"/savedSchools"}>Schools</Link>
            </div>
            <div className="sidebar--component--item">
                <img src={testsLogo} alt="Tests Logo" />
                <Link to={"/savedTests"}>Exams</Link>
            </div>
            <div className="sidebar--component--item">
                <img src={coursesLogo} alt="Courses Logo" />
                <Link to={"/savedCourses"}>Courses</Link>
            </div>
        </div>
    );
};

export default Sidebar;