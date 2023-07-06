//This Should contain collection of all Saved Courses 
import React from 'react';
import SavedCourseInfo from '../SavedCourse/SavedCourse';
import './SavedCourses.css'

export default function SavedCourses(props) {
    const courses = [
        {
            courseName: 'Course 1',
            description: 'Description 1',
            schoolType: 'School 1',
            coursePriceType: 'Free',
            courseLocation: 'Location 1',
            courseProvider: 'Provider 1'
        },
        {
            courseName: 'Course 2',
            description: 'Description 2',
            schoolType: 'School 2',
            coursePriceType: 'Paid',
            courseLocation: 'Location 2',
            courseProvider: 'Provider 2'
        },
        {
            courseName: 'Course 3',
            description: 'Description 3',
            schoolType: 'School 3',
            coursePriceType: 'Free',
            courseLocation: 'Location 3',
            courseProvider: 'Provider 3'
        }
    ];
    return (
        <div className='savedCourses--container'>
            <h2>Saved Courses</h2>

            {courses.map((course, index) => (
                <SavedCourseInfo
                    key={index}
                    course={course}
                />
            ))}
        </div>
    )
}