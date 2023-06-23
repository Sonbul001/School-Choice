import React from 'react';
import Navbar from '../../NavBar/Navbar';
import Footer from '../../Footer/Footer';
import Sidebar from '../../SideBar/Sidebar';
import SavedTests from '../SavedTestsInfo/SavedTests';
import './SavedTestsPage.css';
import RecommendedTests from '../../RecommendedTests/RecommendedTests';

export default function SavedTestsPage(props) {
    return (
        <div className='savedTests--component'>
            <div className='navBar'>
                <Navbar />
            </div>

            <div className="savedTests--component--content">
                <Sidebar />
                <SavedTests />
            </div>

            <RecommendedTests />

            <div className='footer'>
                <Footer />
            </div>
        </div>
    );
}