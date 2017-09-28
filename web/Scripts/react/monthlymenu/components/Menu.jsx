import React from 'react';
import { Card } from 'react-materialize';

import 'Assets/calendar.css';

export default ({ id, title, content }) => 
    <div>
        <input id={ id } type="radio" name="cards" className="card-checkbox" />
        <div className="card">
            <h4>{ title }</h4>
            <p>{ content.classic }</p>
            <p>{ content.keto }</p>
            <p>{ content.paleo }</p>
            <p>{ content.veggie }</p>
            <p>{ content.vegan }</p>
        </div>
    </div>