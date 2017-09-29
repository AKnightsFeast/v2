import React from 'react';

export default ({ OnMenuChange, menus }) => 
    <ul>
    {
        menus.map((menu, index) => {
            let menuId = "menu" + index;

            return (
                <li key={ index }>
                    <input className="with-gap" name="menus" type="radio" id={ menuId } />
                    <label htmlFor={ menuId }>{ menu.title }</label>
                </li>
            );
        })
    }
    </ul>