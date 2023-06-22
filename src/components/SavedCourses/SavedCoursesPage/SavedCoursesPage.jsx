import React from 'react';
import Navbar from '../../NavBar/Navbar';
import Footer from '../../Footer/Footer';
import Sidebar from '../../SideBar/Sidebar';
import SavedCourses from '../SavedCoursesInfo/SavedCourses';
import './SavedCoursesPage.css';
import RecommendedCourses from '../../RecommendedCourses/RecommendedCourses';

export default function SavedCoursesPage(props) {
    return (
        <div className='savedCourses--component'>
            <div className='navBar'>
                <Navbar />
            </div>

            <div className="savedCourses--component--content">
                <Sidebar />
                <SavedCourses />
            </div>

            <RecommendedCourses />

            <div className='footer'>
                <Footer />
            </div>
        </div>
    );
}