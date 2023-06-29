import React from 'react'
import '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Logo from '../../../assets/Logo2.png'
import './Card.css';

function Card(props) {
    const { cardTitle, cardContent, cardItems } = props;

    return (
        <div id='cardd' class="card">
            <img src={Logo} class="card-img--top" alt="..." />
            <div class="card-body">
                <h5 class="card-title">{cardTitle}</h5>
                <p class="card-text">{cardContent}</p>
            </div>
            <ul className="list-group list-group-flush">
                {cardItems.map((item, index) => (
                    <li key={index} className="list-group-item">
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Card;