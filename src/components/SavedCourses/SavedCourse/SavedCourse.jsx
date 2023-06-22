//Course + Course Info
import React from 'react'
import CourseInfo from '../CourseInformation/CourseInfo';
import Course from '../../Courses/Course/Course';
import './SavedCourse.css'

export default function SavedCourseInfo(props) {
    return (
        <div className='courseInfo--component'>
            <Course
                logo='../../../assets/Logo2.png'
                courseName={props.courseName}
                schoolType={props.schoolType}
                coursePriceType={props.coursePriceType}
                courseLocation={props.courseLocation}
                courseProvider={props.courseProvider}
            />
            <CourseInfo description={props.description} />
        </div>
    )
}