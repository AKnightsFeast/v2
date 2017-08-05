import React from 'react';
import { compose } from 'recompose';
import { connect } from 'react-redux';

import { GetDateKey } from 'Utils';

const DayTabs = ({ months, selectedmonth, days }) => {
    const monthName = months[selectedmonth - 1];

    return (
        <div>
            {
                days.map((day, index) => (
                    <div key={ index }>{ monthName } { day }</div>
                ))
            }
        </div>
    );
};

export default compose(
    connect(
        store => ({
            days: store.monthlymenu.days,
            months: store.monthlymenu.months,
            selectedmonth: store.monthlymenu.selectedmonth
        })
    )
)(DayTabs);