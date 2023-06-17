import React from 'react'
import Navbar from '../../components/NavBar/Navbar'
import CoursesPageHeader from './CoursesPageHeader/CoursesPageHeader'
import Course from './Course/Course'

import { Card, Button } from 'react-bootstrap';
import { FaLock } from 'react-icons/fa';
import Courses from './Courses/Courses';
import CoursesGrade from './CoursesGrade/CoursesGrade';
import Footer from '../Footer/Footer';


const courseGrades = [
    {
        grade: 'Grade 1'
    },
    {
        grade: 'Grade 2'
    },
    {
        grade: 'Grade 3'
    },
]

function CoursesPage() {
    return (
        <div className='courses--page'>
            <div className='navBar'>
                <Navbar />
            </div>

            <div className='header'>
                <CoursesPageHeader />
            </div>
            <div style={{marginBottom:50}} className='courses--page--course--grade--courses'>
                {courseGrades.map((courseGrade, index) => (
                    <CoursesGrade
                        key={index}
                        grade={courseGrade.grade}
                    />
                ))}
            </div>

            <div className='footer'>
                <Footer />
            </div>

        </div>
    )
}

export default CoursesPage
