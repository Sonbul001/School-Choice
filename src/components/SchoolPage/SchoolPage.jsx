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


//Fetching data from backend should be in this component and pass data as props to all components
function SchoolPage() {
    const images = [
        { src: "./cover.jpg" },
        { src: "./Logo.png" },
        { src: "./cover.jpg" },
        { src: "./cover.jpg" }
    ]

    const feeData = [
        {
            classroom: "kg1",
            boys: "2000",
            girls: "1000",
            available: true
        },
        {
            classroom: "kg1",
            boys: "2000",
            girls: "1000",
            available: true
        },
        {
            classroom: "kg1",
            boys: "2000",
            girls: "1000",
            available: true
        },
        {
            classroom: "kg1",
            boys: "2000",
            girls: "1000",
            available: true
        }
    ]

    const reviews = [
        {
            user: "parent1",
            review: "this is a review",
            rating: 4
        },
        {
            user: "parent1",
            review: "this is a review",
            rating: 4
        },
        {
            user: "parent1",
            review: "this is a review",
            rating: 4
        },
        {
            user: "parent1",
            review: "this is a review",
            rating: 4
        },
        {
            user: "parent1",
            review: "this is a review",
            rating: 0
        }
    ]

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
                    name="John Doe"
                    image="./cover.jpg"
                    rating={3}
                />
            </div>
            <div className='school-page-about'>
                <About
                    images={images}
                    type="International"
                    level="Nursery And Elementary"
                    gender="Boys And Girls"
                    about="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
                />
            </div>
            <div className='school-page-fees'>
                <Fees
                    fees={feeData}
                />
            </div>
            <div className='school-page-dates'>
                <Dates
                    mobileNumbers={['0123456789', '9876543210', '1234567890']}
                    email='karim@gmail.com'
                />
            </div>

            <div className="school-page-location">
                <Location location='123 Main Street, City, Country' />
            </div>

            <div className='school-page-rating'>
                <Rating
                    reviews={reviews}
                />
            </div>
            <div className='school-page-recommended'>
                <RecommendedSchools />
            </div>
            <div className='footer'>
                <Footer />
            </div>
        </div>
    )
}

export default SchoolPage;