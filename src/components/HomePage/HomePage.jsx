import React from 'react'
import Navbar from '../NavBar/Navbar'
import Header from '../Heading/Heading'
import './HomePage.css';
import Footer from '../Footer/Footer';
import FeaturedSchools from '../FeaturedSchools/FeaturedSchools/FeaturedSchools';
import QuickSearch from '../QuickSearch/QuickSearch';


function HomePage() {
  return (
    <div className='HomePage'>

      <div className='navBar'>
        <Navbar />
      </div>
      <div className='header'>
        <Header />
      </div>
      <QuickSearch />

      <h2>Featured Schools</h2>
      <div className='cards'>
        <FeaturedSchools />

      </div>

      <div className='footer'>
        <Footer />
      </div>

    </div>
  )
}

export default HomePage