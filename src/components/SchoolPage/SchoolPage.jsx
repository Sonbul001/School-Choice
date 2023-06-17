import Footer from "../Footer/Footer";
import Heading from "../Heading/Heading";
import Navbar from "../NavBar/Navbar";
import Profile from "./Profile";
import About from "./About";
import './SchoolPage.css';

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
            <div className='footer'>
                <Footer />
            </div>
        </div>
    )
}

export default SchoolPage;