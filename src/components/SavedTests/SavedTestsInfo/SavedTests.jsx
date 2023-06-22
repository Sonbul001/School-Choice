//This Should contain collection of all Saved Tests 
import React from 'react';
import SavedTestInfo from '../SavedTest/SavedTest';
import './SavedTests.css'

export default function SavedTests(props) {
    const exams = [
        {
            logo: '../../../assets/Logo2.png',
            examName: 'Test 1',
            price: 10,
            schoolType: 'School Type 1'
        },
        {
            logo: '../../../assets/Logo2.png',
            examName: 'Test 2',
            price: 20,
            schoolType: 'School Type 2'
        },
        {
            logo: '../../../assets/Logo2.png',
            examName: 'Test 3',
            price: 30,
            schoolType: 'School Type 3'
        }
    ];

    return (
        <div className='savedTests--container'>
            <h2>Saved Exams</h2>

            {exams.map((exam, index) => (
                <SavedTestInfo
                    key={index}
                    examName={exam.examName}
                    price={exam.price}
                    schoolType={exam.schoolType}
                />
            ))}
        </div>
    )
}