import React from 'react';
import { BindClosures } from 'Utils';

const DayItem = BindClosures({
    OnDayChange: (props) => { props.OnDayChange(props.date); }
})(
    ({ OnDayChange, date, id, label, attr }) => (
        <li>
            <input id={ id } onChange={ OnDayChange }
                   name="dates"
                   type="radio"
                   className="with-gap"
                   { ...attr } />
            <label htmlFor={ id }>{ label }</label>
        </li>
    )
);

export default ({ OnDayChange, days }) => {
    return (
        <ul>
        {
            days.map((day, index) => {
                return (
                    <DayItem key={ index }
                             id={ "d" + index }
                             attr={ day.attr }
                             date={ day.date }
                             label={ day.label }
                             OnDayChange={ OnDayChange } />
                );
            })
        }
        </ul>
    );
};