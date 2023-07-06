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
                    course={props.course}
                />
            </div>

            <CourseInfo description={props.description} />

        </div>

    )
}