import React from 'react';
import { compose } from 'recompose';
import { connect } from 'react-redux';

const today = new Date();

export default ({ OnDayChange, selectedyear, selectedmonth, selecteddate, days }) => {   
    return (
        <ul>
        {
            days.map((day, index) => {
                let tabAttr = {};

                const dayDate = day.getDate();
                const dayMonth = day.getMonth();
                const dayYear = day.getFullYear();
                const sunDate = new Date(dayYear, dayMonth, dayDate - 2);
                const satDate = new Date(dayYear, dayMonth, dayDate + 4);
                const dateDisplay = day.toLocaleDateString("en-US", { month: 'short', day: '2-digit' });

                if (day > today)
                    tabAttr.disabled = true;
                else if ((day === selecteddate) || (sunDate <= selecteddate && satDate >= selecteddate))
                    tabAttr.disabled = false;

                return (
                    <li key={ index }>
                        <input className="with-gap" name="dates" type="radio" id={ "day" + index } { ...tabAttr }  />
                        <label htmlFor={ "day" + index }>{ dateDisplay + " " + selectedyear }</label>
                    </li>
                );
            })
        }
        </ul>
    );
};