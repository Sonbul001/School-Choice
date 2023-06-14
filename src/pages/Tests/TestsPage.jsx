import React from 'react'
import Navbar from '../../components/NavBar/Navbar'
import TestsPageHeader from './TestsPageHeader/TestsPageHeader'
import ProductCarousel from './Tests/Tests'

function TestsPage() {
    return (
        <div className='tests--page'>
            <div className='navBar'>
                <Navbar />
            </div>

            <div className='header'>
                <TestsPageHeader />
            </div>

            <div className='carousel'>
                <ProductCarousel />
            </div>
          
        </div>
    )
}

export default TestsPage
