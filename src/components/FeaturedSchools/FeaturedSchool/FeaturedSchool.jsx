import React from 'react'
import '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../Cardss/Card/Card.css';
import Logo from '../../../assets/Logo2.png'

export default function FeaturedSchool(props) {
    const { schoolLogo, schoolTitle, schoolType } = props;
    return (
        <div id='cardd' class="card">
            <img src={Logo} class="card-img--top" alt="..." />
            <div class="card-body">
                <h5 class="card-title">{schoolTitle}</h5>
                <h5 class="card-text">{schoolType}</h5>
            </div>
        </div>
    );
}