import React from 'react';

import 'Assets/calendar.css';
import Menu from 'Components/Menu';

export default ({ menus }) => {
    return (
        <div>
            <ul id="nav">
                <li className="lowercase"><label htmlFor="put-cards-down">(Put cards down)</label></li>
                <li><label htmlFor="toggle-card-1">Menu 1</label></li>
                <li><label htmlFor="toggle-card-2">Menu 2</label></li>
                <li><label htmlFor="toggle-card-3">Menu 3</label></li>
            </ul> 
            {
                menus.map((item, index) => (
                    <Menu key={ index }
                        id={ "toggle-card-${index}" }
                        title={ item.title }
                        content={ item.content } />
                ))
            }
            <input type="radio" name="cards" className="card-checkbox" id="put-cards-down" />
        </div>
    )
};