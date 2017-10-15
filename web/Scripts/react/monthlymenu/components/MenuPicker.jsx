import React from 'react';
import { BindClosures } from 'Utils';

const MenuItem = BindClosures({
    OnMenuChange: (props) => { props.OnMenuChange(props.menu); }
})(
    ({ OnMenuChange, menu, id, label }) => (
        <li>
            <input id={ id } onChange={ OnMenuChange } className="with-gap" name="menus" type="radio" />
            <label htmlFor={ id }>{ label }</label>
        </li>
    )
);

export default ({ OnMenuChange, menus }) => 
    <ul>
    {
        menus.map((menu, index) =>
            <MenuItem key={ index }
                      menu={ menu }
                      id={ "menu" + index }
                      label={ menu.title }
                      OnMenuChange={ OnMenuChange } />
        )
    }
    </ul>