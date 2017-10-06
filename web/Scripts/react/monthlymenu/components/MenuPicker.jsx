import React from 'react';

export default ({ OnMenuChange, menus }) => 
    <ul>
    {
        menus.map((menu, index) => {
            let menuId = "menu" + index;

            return (
                <li key={ index }>
                    <input id={ menuId } onChange={ (index) => { OnMenuChange(index); } } className="with-gap" name="menus" type="radio" />
                    <label htmlFor={ menuId }>{ menu.title }</label>
                </li>
            );
        })
    }
    </ul>