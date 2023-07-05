import React from 'react';
import Navbar from '../NavBar/Navbar';
import Footer from '../Footer/Footer';
import Sidebar from '../SideBar/Sidebar';
import ApplicantProfilePage from './ApplicantProfilePage';

export default function ApplicantProfile(props) {
    return (
        <div className='savedCourses--component'>
            <div className='navBar'>
                <Navbar />
            </div>

            <div className="savedCourses--component--content">
                <Sidebar />
                <ApplicantProfilePage />
            </div>

            <div className='footer'>
                <Footer />
            </div>
        </div>
    );
}