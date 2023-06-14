import React from 'react'
import Navbar from '../../components/NavBar/Navbar'
import Header from '../../components/Heading/Heading'
import './HomePage.css';
import Footer from '../../components/Footer/Footer';
import Cards from '../../components/Cards/Cards';



function HomePage() {
  return (
    <div className='HomePage'>
     

     <div className='navBar'>
       <Navbar/>
  </div>
  <div className='header'>
        <Header/>
  </div>

  <div className='cards'>
    <Cards/>

  </div>
 
    

  
     
 


<div className='footer'>
  <Footer/>
</div>


</div>
  )
}

export default HomePage