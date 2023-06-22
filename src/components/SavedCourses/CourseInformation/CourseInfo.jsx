import React from 'react'
import './CourseInfo.css'

export default function CourseInfo(props) {
    return (
        <div className='courseInfo--component'>
            <p>{props.description}</p>
            <button>Remove</button>
        </div>
    );
}