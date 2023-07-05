import React from "react"
import Heading from "../Heading/Heading"
import Navbar from "../NavBar/Navbar"
import Sidebar from "../SideBar/Sidebar"
import Footer from "../Footer/Footer"
import ApplicantProfilePage from "../ApplicantProfile/ApplicantProfilePage"
import './ApplicantDashboard.css'
import { useState } from "react"
import SavedCourses from "../SavedCourses/SavedCoursesInfo/SavedCourses"
import SavedTests from "../SavedTests/SavedTestsInfo/SavedTests"
import SavedSchools from "../SavedSchools/SavedSchools"

export default function ApplicantDashboard() {
    const [sidebarChoice, setSidebarChoice] = useState(1);
    const sidebarChoiceFunc = (data) => {
        setSidebarChoice(data);
    }
    return (
        <div className="applicant-dashboard">
            <div><Navbar /></div>
            <div className="applicant-dashboard-container">
                <div className="applicant-dashboard-sidebar"><Sidebar choice={sidebarChoiceFunc} /></div>
                <div className="applicant-dashboard-content">
                    {sidebarChoice == 1 && <ApplicantProfilePage />}
                    {sidebarChoice == 2 && <SavedSchools />}
                    {sidebarChoice == 3 && <SavedTests />}
                    {sidebarChoice == 4 && <SavedCourses />}
                </div>
            </div>
            <div className="applicant-dashboard-footer"><Footer /></div>
        </div>
    )
}