import React from 'react'
import './TestInfo.css'

export default function TestInfo(props) {
    return (
        <div className='testInfo--component'>
            <p>{props.description}</p>
            <button>Remove</button>
        </div>
    );
}