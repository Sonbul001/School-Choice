import React from "react";
import Exams from "../Exams/Exams";

import './ExamsGrade.css'


export default function ExamsGrade(props) {

    return (
        <div className='exams--page--exam--grade'>
            <div className='exams--page--exam--grade--title'>
                <h2>{props.grade}</h2>
            </div>

            <div className='exams--page--exam--grade--Exams'>
                <Exams />

                <Exams
                    locked={true}
                />
            </div>
        </div>
    )
}


