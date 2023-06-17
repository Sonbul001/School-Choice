import React from "react";
import '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Logo from '../../../assets/Logo2.png'
import saved from '../../../assets/save.png'
import earth from '../../../assets/earth.png'

import './Exam.css'

import lockedLogo from '../../../assets/lockedLogo.png';


export default function Exam(props) {
    return (

            <div id='exams--page--exam--card' className="card">
                        <div className={`card-wrapper ${props.locked ? 'locked' : ''}`}>
            {props.locked && 
                <>
                    <div className="locked-overlay"></div>
                    <img src={lockedLogo} className="locked-logo" alt="locked" />
                </>
            }
                <img src={Logo} className="exams--page--exam--card--img" alt="..." />
                <img src={saved} className="exam--save--logo" alt="..." />

                <div className="card-body">
                    <h3 className="exams--page--exam--name">{props.examName}</h3>
                </div>
                <span className='exams--page--exam--type'>
                    <img src={earth} className="exam--earth--logo" alt="..." />
                    {props.schoolType}
                    <Button className="exams--page--exam--button" variant="secondary">
                        <Link to="#">Link</Link>
                    </Button>
                </span>
            </div>
        </div>
    )
}