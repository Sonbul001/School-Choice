import React from 'react'
import Navbar from '../NavBar/Navbar'
import Header from '../Heading/Heading'
import './HomePage.css';
import Footer from '../Footer/Footer';
import Cards from '../Cardss/Cards/Cards';



function HomePage() {
  return (
    <div className='HomePage'>


      <div className='navBar'>
        <Navbar />
      </div>
      <div className='header'>
        <Header />
      </div>

      <div className='cards'>
        <Cards />

      </div>








      <div className='footer'>
        <Footer />
      </div>


    </div>
  )
}

export default HomePage