import React from 'react'
import Navbar from '../../components/NavBar/Navbar'
import Footer from '../../components/Footer/Footer';
import Cards from '../../components/Cards/Cards';
import DetailedSearchHeading from './DetailedSearchHeader/DetailedSearchHeading';
import DetailedSearchSidebar from './DetailedSearchSidebar/DetailedSearchSidebar';
import './DetailedSearch.css';
import DetailedSearchbar from './DetailedSearchbar/DetailedSearchbar';



function DetailedSearchPage() {
  return (
    <div className='DetailedSearchPage'>


      <div className='navBar'>
        <Navbar />
      </div>
      <div className='header'>
        <DetailedSearchHeading />
      </div>

      <div className='searchbar'>
        <DetailedSearchbar />
      </div>

      <div className='sidebar'>
        <DetailedSearchSidebar />
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

export default DetailedSearchPage