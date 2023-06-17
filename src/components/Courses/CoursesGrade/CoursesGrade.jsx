import React from "react";
import Courses from "../Courses/Courses";

import './CoursesGrade.css'


export default function CoursesGrade(props) {

    return (
        <div className='courses--page--course--grade'>
            <div className='courses--page--course--grade--title'>
                <h2>{props.grade}</h2>
            </div>

            <div className='courses--page--course--grade--courses'>
                <Courses />
            </div>
        </div>
    )
}

