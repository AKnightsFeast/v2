import React from 'react';

const today = new Date();

export default ({ OnDayChange, selectedyear, selectedmonth, selecteddate, days }) => {   
    return (
        <ul>
        {
            days.map((day, index) => {
                let tabAttr = {};
                let dayId = "day" + index;

                const dayDate = day.getDate();
                const dayMonth = day.getMonth();
                const dayYear = day.getFullYear();
                const sunDate = new Date(dayYear, dayMonth, dayDate - 2);
                const satDate = new Date(dayYear, dayMonth, dayDate + 4);
                const dateDisplay = day.toLocaleDateString("en-US", { month: 'short', day: '2-digit' });

                if (day > today)
                    tabAttr.disabled = true;
                else if ((day === selecteddate) || (sunDate <= selecteddate && satDate >= selecteddate))
                    tabAttr.checked = true;

                return (
                    <li key={ index }>
                        <input className="with-gap" name="dates" type="radio" id={ dayId } { ...tabAttr }  />
                        <label htmlFor={ dayId }>{ dateDisplay + " " + selectedyear }</label>
                    </li>
                );
            })
        }
        </ul>
    );
};