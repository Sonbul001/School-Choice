import React from 'react'
import Carousel from '../Exams/Carousel/Carousel';
import Course from '../Courses/Course/Course';

import './RecommendedCourses.css';

export default function RecommendedCourses(props) {
    const recommendedCoursesData = [
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
        },
        {
            courseName: 'Course 1',
            description: 'Description 1',
            schoolType: 'School 1',
            coursePriceType: 'Free',
            courseLocation: 'Location 1',
            courseProvider: 'Provider 1'
        },
        {
            courseName: 'Course 1',
            description: 'Description 1',
            schoolType: 'School 1',
            coursePriceType: 'Free',
            courseLocation: 'Location 1',
            courseProvider: 'Provider 1'
        },
        {
            courseName: 'Course 1',
            description: 'Description 1',
            schoolType: 'School 1',
            coursePriceType: 'Free',
            courseLocation: 'Location 1',
            courseProvider: 'Provider 1'
        },
    ];
    return (
        <div className="recommended-Courses--component">
            <h2>Recommended Courses</h2>
            <div style={{ maxWidth: 1300, marginLeft: "auto", marginRight: "auto", marginTop: 5 }}>
                <Carousel show={3}>
                    {recommendedCoursesData.map((recommendedCourse, index) => (
                        <div className='cards' key={index}>
                            <Course
                                key={index}
                                courseName={recommendedCourse.courseName}
                                description={recommendedCourse.description}
                                schoolType={recommendedCourse.schoolType}
                                coursePriceType={recommendedCourse.coursePriceType}
                                courseLocation={recommendedCourse.courseLocation}
                                courseProvider={recommendedCourse.courseProvider}
                            />
                        </div>
                    ))}
                </Carousel>
            </div>
        </div>
    )
}