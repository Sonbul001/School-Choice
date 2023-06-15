import React from 'react'
import Navbar from '../../components/NavBar/Navbar'
import TestsPageHeader from './TestsPageHeader/TestsPageHeader'
import Test from './Test/Test'


function TestsPage() {
    return (
        <div className='tests--page'>
            <div className='navBar'>
                <Navbar />
            </div>

            <div className='header'>
                <TestsPageHeader />
            </div>

            <div>
                <Test 
                    logo="'../../../assets/Logo2.png'" 
                    testName="Test Name"
                    schoolType="International"
                />
            </div>
          
        </div>
    )
}

export default TestsPage
