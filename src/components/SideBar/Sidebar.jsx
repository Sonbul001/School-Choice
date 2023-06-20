import React from 'react';
import './Sidebar.css'

import usernameLogo from '../../assets/username-logo.png';
import favoritesLogo from '../../assets/favorites-logo.png';
import testsLogo from '../../assets/tests-logo.png';
import coursesLogo from '../../assets/courses-logo.png';
import settingsLogo from '../../assets/settings-logo.png';

const Sidebar = () => {
    return (
        <div className="sidebar--component">
            <div className="sidebar--component--item">
                <img src={usernameLogo} alt="Username Logo" />
                <a href="#">Username</a>
            </div>
            <div className="sidebar--component--item">
                <img src={favoritesLogo} alt="Favorites Logo" />
                <a href="#">Favorites</a>
            </div>
            <div className="sidebar--component--item">
                <img src={testsLogo} alt="Tests Logo" />
                <a href="#">Exams</a>
            </div>
            <div className="sidebar--component--item">
                <img src={coursesLogo} alt="Courses Logo" />
                <a href="#">Courses</a>
            </div>
            <div className="sidebar--component--item">
                <img src={settingsLogo} alt="Settings Logo" />
                <a href="#">Settings</a>
            </div>
        </div>
    );
};

export default Sidebar;