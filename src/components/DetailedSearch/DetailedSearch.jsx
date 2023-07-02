import React from 'react'
import Navbar from '../../components/NavBar/Navbar'
import Footer from '../../components/Footer/Footer';
import Cards from '../Cardss/Cards/Cards';
import DetailedSearchHeading from './DetailedSearchHeader/DetailedSearchHeading';
import DetailedSearchSidebar from './DetailedSearchSidebar/DetailedSearchSidebar';
import './DetailedSearch.css';
import DetailedSearchbar from './DetailedSearchbar/DetailedSearchbar';



function DetailedSearchPage() {
  const staticCards = [
    { cardTitle: "Card 1", cardContent: "Card content 1", cardItems: ["card item 1", "card item 2", "card item 3"] },
    { cardTitle: "Card 2", cardContent: "Card content 2", cardItems: ["card item 1", "card item 2", "card item 3"] },
    { cardTitle: "Card 3", cardContent: "Card content 3", cardItems: ["card item 1", "card item 2", "card item 3"] },
    { cardTitle: "Card 1", cardContent: "Card content 1", cardItems: ["card item 1", "card item 2", "card item 3"] },
    { cardTitle: "Card 2", cardContent: "Card content 2", cardItems: ["card item 1", "card item 2", "card item 3"] },
    { cardTitle: "Card 3", cardContent: "Card content 3", cardItems: ["card item 1", "card item 2", "card item 3"] },
    { cardTitle: "Card 1", cardContent: "Card content 1", cardItems: ["card item 1", "card item 2", "card item 3"] },
    { cardTitle: "Card 2", cardContent: "Card content 2", cardItems: ["card item 1", "card item 2", "card item 3"] },
    { cardTitle: "Card 3", cardContent: "Card content 3", cardItems: ["card item 1", "card item 2", "card item 3"] },
    { cardTitle: "Card 1", cardContent: "Card content 1", cardItems: ["card item 1", "card item 2", "card item 3"] },
    { cardTitle: "Card 2", cardContent: "Card content 2", cardItems: ["card item 1", "card item 2", "card item 3"] },
    { cardTitle: "Card 3", cardContent: "Card content 3", cardItems: ["card item 1", "card item 2", "card item 3"] },
    { cardTitle: "Card 1", cardContent: "Card content 1", cardItems: ["card item 1", "card item 2", "card item 3"] },
    { cardTitle: "Card 2", cardContent: "Card content 2", cardItems: ["card item 1", "card item 2", "card item 3"] },
    { cardTitle: "Card 3", cardContent: "Card content 3", cardItems: ["card item 1", "card item 2", "card item 3"] },
    { cardTitle: "Card 1", cardContent: "Card content 1", cardItems: ["card item 1", "card item 2", "card item 3"] },
    { cardTitle: "Card 2", cardContent: "Card content 2", cardItems: ["card item 1", "card item 2", "card item 3"] },
    { cardTitle: "Card 3", cardContent: "Card content 3", cardItems: ["card item 1", "card item 2", "card item 3"] }
  ];

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
        <Cards cards={staticCards} />
      </div>




      <div className='footer'>
        <Footer />
      </div>


    </div>
  )
}

export default DetailedSearchPage