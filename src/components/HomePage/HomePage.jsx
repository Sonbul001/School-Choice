import React from 'react'
import Navbar from '../NavBar/Navbar'
import Header from '../Heading/Heading'
import './HomePage.css';
import Footer from '../Footer/Footer';
import QuickSearch from '../QuickSearch/QuickSearch';
import Cards from '../Cardss/Cards/Cards';


function HomePage() {
  const featuredSchools = [
    {
      cardTitle: "School 1",
      cardContent: "Card content 1",
      cardItems: ["item 1", "item 2", "item 3"],
    },
    {
      cardTitle: "School 2",
      cardContent: "Card content 2",
      cardItems: ["item 4", "item 5", "item 6"],
    },
    {
      cardTitle: "School 1",
      cardContent: "Card content 1",
      cardItems: ["item 1", "item 2", "item 3"],
    },
    {
      cardTitle: "School 2",
      cardContent: "Card content 2",
      cardItems: ["item 4", "item 5", "item 6"],
    },
    {
      cardTitle: "School 1",
      cardContent: "Card content 1",
      cardItems: ["item 1", "item 2", "item 3"],
    },
    {
      cardTitle: "School 2",
      cardContent: "Card content 2",
      cardItems: ["item 4", "item 5", "item 6"],
    },
    {
      cardTitle: "School 1",
      cardContent: "Card content 1",
      cardItems: ["item 1", "item 2", "item 3"],
    },
    {
      cardTitle: "School 2",
      cardContent: "Card content 2",
      cardItems: ["item 4", "item 5", "item 6"],
    },

  ];
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
        <Cards cards={featuredSchools} />

      </div>

      <div className='footer'>
        <Footer />
      </div>

    </div>
  )
}

export default HomePage