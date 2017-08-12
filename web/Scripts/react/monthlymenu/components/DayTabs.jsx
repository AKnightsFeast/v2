import React from 'react';
import { compose } from 'recompose';
import { connect } from 'react-redux';
import { Tabs, Tab } from 'react-materialize';

import { GetDateKey } from 'Utils';

const today = new Date();

export default ({ OnDayChange, selectedyear, selectedmonth, selecteddate, days }) => {   
    return (
        <Tabs className='z-depth-0' onChange={(index, e) => OnDayChange(index, e, selectedyear)}>
        {
            days.map((day, index) => {
                let tabAttr = {};

                const dayDate = day.getDate();
                const dayMonth = day.getMonth();
                const dayYear = day.getFullYear();
                const sunDate = new Date(dayYear, dayMonth, dayDate - 2);
                const satDate = new Date(dayYear, dayMonth, dayDate + 4);

                if (day > today)
                    tabAttr.disabled = true;
                else if ((day === selecteddate) || (sunDate <= selecteddate && satDate >= selecteddate))
                    tabAttr.active = true;

                return <Tab key={ index } title={ day.toLocaleDateString("en-US", { month: 'short', day: '2-digit' }) } { ...tabAttr } />;
            })
        }
        </Tabs>
    );
};