//This Should contain collection of all Saved Tests 
import React, { useEffect, useState } from 'react';
import SavedTestInfo from '../SavedTest/SavedTest';
import './SavedTests.css'

export default function SavedTests() {
    const [savedExams, setSavedExams] = useState([]);
    const [recommendedExams, setRecommendedExams] = useState([]);

    useEffect(() => {
        const getSavedExams = async () => {
            try {
                const response = await fetch('http://localhost:3000/applicants/saved-exams', {
                    headers: {
                        Authorization: 'Bearer ' + localStorage.getItem('token')
                    }
                });
                if (response.status != 401) {
                    const data = await response.json();
                    setSavedExams(data);
                } else {
                    throw new Error('Unauthorized');
                }
            } catch (error) {
                console.error('Error:', error);
                alert('Failed to fetch data from the server.');
            }
        };
        const getRecommendedExams = async () => {
            try {
                const response = await fetch('http://localhost:3000/applicants/recommended-exams', {
                    headers: {
                        Authorization: 'Bearer ' + localStorage.getItem('token')
                    }
                });
                if (response.status != 401) {
                    const data = await response.json();
                    setRecommendedExams(data);
                } else {
                    throw new Error('Unauthorized');
                }
            } catch (error) {
                console.error('Error:', error);
                alert('Failed to fetch data from the server.');
            }
        };

        getSavedExams();
        getRecommendedExams();
    }, []);

    return (
        <div className='savedTests--container'>
            <div>
                <h2>Saved Exams</h2>
                {savedExams.map((exam, index) => (
                    <SavedTestInfo
                        key={index}
                        exam={exam}
                    />
                ))}
            </div>
            <div>
                <h2>Recommended Exams</h2>
                {recommendedExams.map((exam, index) => (
                    <SavedTestInfo
                        key={index}
                        exam={exam}
                    />
                ))}
            </div>
        </div>
    )
}