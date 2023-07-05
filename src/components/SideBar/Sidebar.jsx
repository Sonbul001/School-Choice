import React, { useEffect, useState } from 'react';
import './Sidebar.css'

import usernameLogo from '../../assets/username-logo.png';
import favoritesLogo from '../../assets/favorites-logo.png';
import testsLogo from '../../assets/tests-logo.png';
import coursesLogo from '../../assets/courses-logo.png';
import { FaUserAlt, FaSchool, FaUser } from 'react-icons/fa';
import { PiExamFill } from 'react-icons/pi';
import { GiTeacher } from 'react-icons/gi';
const Sidebar = (props) => {
    const [username, setUserName] = useState("");
    // useEffect(() => {
    //     const getApplicant = async () => {
    //       try {
    //         const response = await fetch('http://localhost:3000/applicants/profile', {
    //           headers: {
    //             Authorization: 'Bearer ' + localStorage.getItem('token')
    //           }
    //         });
    //         if (response.status != 401) {
    //           const data = await response.json();
    //           setUserName(data.fullName);
    //         } else {
    //           throw new Error('Unauthorized');
    //         }
    //       } catch (error) {
    //         console.error('Error:', error);
    //         alert('Failed to fetch data from the server.');
    //       }
    //     };
    
    //     getApplicant();
    //   }, []);
    return (
        <div className="sidebar--component">
            <div className="sidebar--component--item">
                <FaUser className='sidebar--component--item--icon'/>
                <p onClick={() => props.choice(1)}>kdjsadjadsjsnajdjakdjsadjadsjsnajdjakdjsadjadsjsnajdjakdjsadjadsjsnajdjakdjsadjadsjsnajdja</p>
            </div>
            <div className="sidebar--component--item">
                <FaSchool className='sidebar--component--item--icon'/>
                <p onClick={() => props.choice(2)}>Schools</p>
            </div>
            <div className="sidebar--component--item">
                <PiExamFill className='sidebar--component--item--icon'/>
                <p onClick={() => props.choice(3)}>Exams</p>
            </div>
            <div className="sidebar--component--item">
                <GiTeacher className='sidebar--component--item--icon'/>
                <p onClick={() => props.choice(4)}>Courses</p>
            </div>
        </div>
    );
};

export default Sidebar;