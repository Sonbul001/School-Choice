import React from 'react'
import Navbar from '../NavBar/Navbar'
import Footer from '../Footer/Footer';
import Sidebar from '../SideBar/Sidebar';
import Cards from '../Cardss/Cards/Cards';
import RecommendedSchools from '../RecommendedSchools/RecommendedSchools';
import './SavedSchools.css';


function SavedSchools() {
    return (
        <div className='savedSchools--component'>
            <div className='navBar'>
                <Navbar />
            </div>

            <div className="savedSchools--component--content">
                <Sidebar />
                <div className="savedSchools--component--main">
                    <h2>Favorite Schools</h2>
                    <div className='cards'>
                        <Cards />
                    </div>
                    <RecommendedSchools />
                </div>
                
            </div>


            <div className='footer'>
                <Footer />
            </div>

        </div>
    )
}


export default SavedSchools