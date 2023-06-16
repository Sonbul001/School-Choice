import React from "react";
import '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Logo from '../../../assets/Logo2.png'
import saved from '../../../assets/save.png'
import earth from '../../../assets/earth.png'


import './Test.css'




export default function Test(props) {
    return (
        <div id='cardd' class="tests--page--test--card">
            <img src={Logo} class="tests--page--test--card--img" alt="..." />
            <img src={saved} className="test--save--logo" alt="..." />

            <div class="card-body">
                <h3 class="card-title">{props.testName}</h3>
            </div>
            <span className='test--price'><img src={earth} className="test--earth--logo" alt="..." />{props.schoolType}</span>
        </div>

    )
}
