import Footer from "../Footer/Footer";
import Heading from "../Heading/Heading";
import Navbar from "../NavBar/Navbar";
import Profile from "./Profile";
import About from "./About";
import Dates from "./Dates";
import './SchoolPage.css';
import Fees from "./Fees";
import Rating from "./Rating";

function SchoolPage() {
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
                <About />
            </div>
            <div className='school-page-dates'>
                <Dates 
                    morningFrom='09:00AM'
                    morningTo='04:00PM'
                    eveningFrom='05:00PM'
                    eveningTo='09:00PM'
                    supervisor='Karim Sonbul'
                    spec='All Grades'
                    mobile='0123456789'
                    email='karim@gmail.com'
                />
            </div>
            <div className='school-page-fees'>
                <Fees />
            </div>
            <div className='school-page-rating'>
                <Rating />
            </div>
            <div className='footer'>
                <Footer />
            </div>
        </div>
    )
}

export default SchoolPage;