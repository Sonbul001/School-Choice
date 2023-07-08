import Footer from "../Footer/Footer";
import Heading from "../Heading/Heading";
import Navbar from "../NavBar/Navbar";
import Profile from "./Profile";
import About from "./About";
import Dates from "./Dates";
import './SchoolPage.css';
import Fees from "./Fees";
import Rating from "./Rating";
import RecommendedSchools from "../RecommendedSchools/RecommendedSchools";
import Location from "./Location";
import Levels from "./Levels";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useState } from "react";


//Fetching data from backend should be in this component and pass data as props to all components
function SchoolPage() {
    const location = useLocation();
    const schoolData = location.state.school;
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:3000/schools/reviews/${schoolData.id}`)
        .then(response => response.json())
        .then(data => setReviews(data))
        .catch(err => console.error(err))
    }, [])

    const [recommededSchools, setRecommendedSchools] = useState([])

	useEffect(() => {
		fetch(`http://localhost:3000/applicants/recommended-schools-by-school/${schoolData.id}`)
		.then(response => response.json())
		.then(data => setRecommendedSchools(data))
		.catch(err => console.error(err))
	}, [])
    // const reviews = [
    //     {
    //         totalRating: 4,
    //         feedback: "Great school",
    //         source: "edarabia",
    //         reviewerName: "Ahmed"
    //     },
    //     {
    //         totalRating: 4,
    //         feedback: "Great school",
    //         source: "edarabia",
    //         reviewerName: "Ahmed"
    //     },
    //     {
    //         totalRating: 4,
    //         feedback: "Great school",
    //         source: "edarabia",
    //         reviewerName: "Ahmed"
    //     },{
    //         totalRating: 4,
    //         feedback: "Great school",
    //         source: "edarabia",
    //         reviewerName: "Ahmed"
    //     },{
    //         totalRating: 4,
    //         feedback: "Great school",
    //         source: "edarabia",
    //         reviewerName: "Ahmed"
    //     }
    // ]
    return (
        <div className="school-page">
            <div className='school-page-navbar'>
                <Navbar />
            </div>
            <div className='header'>
                <Heading />
            </div>
            <div className='school-page-profile'>
                <Profile
                    id={schoolData.id}
                    name={schoolData.name}
                    image={schoolData.logo}
                    email={schoolData.email}
                />
            </div>
            <div className='school-page-about'>
                <About
                    images={schoolData.images}
                    type={schoolData.type}
                    gender={schoolData.gender}
                    about={schoolData.about}
                />
            </div>

            <div className="school-page-levels">
                <Levels
                    levels={schoolData.educationLevel}
                />
            </div>
            <div className='school-page-fees'>
                <Fees
                    fees={schoolData.feesSection}
                />
            </div>
            <div className='school-page-dates'>
                <Dates
                    mobileNumbers={schoolData.phones}
                    email={schoolData.email}
                    website={schoolData.website}
                />
            </div>

            <div className="school-page-location">
                <Location 
                    address={schoolData.address}
                    map={schoolData.map}
                />
            </div>

            <div className='school-page-rating'>
                <Rating
                    id={schoolData.id}
                    reviews={reviews}
                />
            </div>
            <div className='school-page-recommended'>
                <RecommendedSchools 
                    schools={recommededSchools}
                />
            </div>
            <div className='footer'>
                <Footer />
            </div>
        </div>
    )
}

export default SchoolPage;