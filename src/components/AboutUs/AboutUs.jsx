import React from "react";
import Navbar from '../NavBar/Navbar'
import Header from '../Heading/Heading'
import Footer from '../Footer/Footer';
import './AboutUs.css'

export default function Aboutus() {
    return (
        <div className="aboutus--component">
            <div className='navBar'>
                <Navbar />
            </div>
            <div className='header'>
                <Header />
            </div>
            <h1 className="aboutus--title">About School Choice</h1>
            <div className="services-container">
                <div className="services-content">
                    <h2>Our Services and Functionalities</h2>
                    <p>
                        The school choice system provides a range of services and functionalities
                        to help clients find the perfect school and courses. With our system, you can:
                    </p>
                    <ul>
                        <li>Search and filter schools based on your interests and preferences</li>
                        <li>View detailed information about each school, including name, prices, type, location, and rating</li>
                        <li>Explore a list of courses offered by schools</li>
                        <li>Review course details such as provider, price, and type</li>
                        <li>Apply for exams related to specific topics</li>
                    </ul>
                    <p>
                        Contact us today to learn more about our services and how we can assist you in finding the best educational opportunities.
                    </p>
                    <div className="contact-details">
                        <p>Email: zizoo@schoolchoice.com</p>
                        <p>Phone: 01030560441</p>
                    </div>
                </div>
            </div>

            <div className='footer'>
                <Footer />
            </div>
        </div>
    )
}