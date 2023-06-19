import React from 'react'
import '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Logo from '../../../assets/Logo2.png'

function Card(props) {
    const { cardTitle, cardContent, cardItem, cardItem2 } = props;

    return (
        <div id='cardd' class="card">
            <img src={Logo} class="card-img--top" alt="..." />
            <div class="card-body">
                <h5 class="card-title">{cardTitle}</h5>
                <p class="card-text">{cardContent}</p>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">{cardItem}</li>
                <li class="list-group-item">{cardItem2}</li>
            </ul>
        </div>
    );
}

export default Card;