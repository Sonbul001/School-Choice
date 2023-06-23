//Course + Course Info
import React from 'react'
import TestInfo from '../TestInformation/TestInfo';
import Exam from '../../Exams/Exam/Exam';
import './SavedTest.css'

export default function SavedTestInfo(props) {
    return (
        <div className='test--component--container'>

            <div className='test--component--left'>
                <Exam
                    logo='../../../assets/Logo2.png'
                    examName={props.examName}
                    price={props.price}
                    schoolType={props.schoolType}
                />
            </div>

            <TestInfo description={props.description} />

        </div>

    )
}