//Course + Course Info
import React from 'react'
import CourseInfo from '../CourseInformation/CourseInfo';
import Course from '../../Courses/Course/Course';
import './SavedCourse.css'

export default function SavedCourseInfo(props) {
    return (
        <div className='course--component--container'>

            <div className='course--component--left'>
                <Course
                    logo='../../../assets/Logo2.png'
                    courseName={props.courseName}
                    schoolType={props.schoolType}
                    coursePriceType={props.coursePriceType}
                    courseLocation={props.courseLocation}
                    courseProvider={props.courseProvider}
                />
            </div>

            <CourseInfo description={props.description} />

        </div>

    )
}