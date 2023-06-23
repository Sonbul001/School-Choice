import React from 'react'
import Carousel from '../Exams/Carousel/Carousel';
import Exam from '../Exams/Exam/Exam';

import './RecommendedTests.css';

export default function RecommendedTests(props) {
    const recommendedTests = [
        {
            examName: 'Test 1',
            price: 10,
            schoolType: 'School Type 1',
            logo: '../../../assets/Logo1.png'
        },
        {
            examName: 'Test 2',
            price: 20,
            schoolType: 'School Type 2',
            logo: '../../../assets/Logo2.png'
        },
        {
            examName: 'Test 3',
            price: 30,
            schoolType: 'School Type 3',
            logo: '../../../assets/Logo3.png'
        },
        {
            examName: 'Test 4',
            price: 10,
            schoolType: 'School Type 1',
            logo: '../../../assets/Logo1.png'
        },
        {
            examName: 'Test 5',
            price: 20,
            schoolType: 'School Type 2',
            logo: '../../../assets/Logo2.png'
        },
        {
            examName: 'Test 6',
            price: 30,
            schoolType: 'School Type 3',
            logo: '../../../assets/Logo3.png'
        }
    ];
    return (
        <div className="recommended-Tests--component">
            <h2>Recommended Tests</h2>
            <div style={{ maxWidth: 1300, marginLeft: "auto", marginRight: "auto", marginTop: 5 }}>
                <Carousel show={3}>
                    {recommendedTests.map((recommendedTest, index) => (
                        <div className='cards' key={index}>
                            <Exam
                                key={index}
                                examName={recommendedTest.examName}
                                price={recommendedTest.price}
                                schoolType={recommendedTest.schoolType}
                            />
                        </div>
                    ))}
                </Carousel>
            </div>
        </div>
    )
}