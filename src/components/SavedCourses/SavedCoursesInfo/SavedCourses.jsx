//This Should contain collection of all Saved Courses 
import React, { useEffect, useState } from 'react';
import SavedCourseInfo from '../SavedCourse/SavedCourse';
import './SavedCourses.css'

export default function SavedCourses(props) {
    const [savedCourses, setSavedCourses] = useState([]);
    const [recommendedCourses, setRecommendedCourses] = useState([]);

    useEffect(() => {
        const getSavedCourses = async () => {
            try {
                const response = await fetch('http://localhost:3000/applicants/saved-courses', {
                    headers: {
                        Authorization: 'Bearer ' + localStorage.getItem('token')
                    }
                });
                if (response.status != 401) {
                    const data = await response.json();
                    setSavedCourses(data);
                } else {
                    throw new Error('Unauthorized');
                }
            } catch (error) {
                console.error('Error:', error);
                alert('Failed to fetch data from the server.');
            }
        };
        const getRecommendedCourses = async () => {
            try {
                const response = await fetch('http://localhost:3000/applicants/recommended-courses', {
                    headers: {
                        Authorization: 'Bearer ' + localStorage.getItem('token')
                    }
                });
                if (response.status != 401) {
                    const data = await response.json();
                    setRecommendedCourses(data);
                } else {
                    throw new Error('Unauthorized');
                }
            } catch (error) {
                console.error('Error:', error);
                alert('Failed to fetch data from the server.');
            }
        };

        getSavedCourses();
        getRecommendedCourses();
    }, []);
    return (
        <div className='savedCourses--container'>
            <div>
                <h2>Saved Courses</h2>
                {savedCourses.map((course, index) => (
                    <SavedCourseInfo
                        key={index}
                        course={course}
                    />
                ))}
            </div>
            <div>
                <h2>Recommended Courses</h2>
                {recommendedCourses.map((course, index) => (
                    <SavedCourseInfo
                        key={index}
                        course={course}
                    />
                ))}
            </div>
        </div>
    )
}