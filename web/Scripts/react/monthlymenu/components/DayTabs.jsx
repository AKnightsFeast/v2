import React from 'react';
import { compose } from 'recompose';
import { connect } from 'react-redux';

import { GetDateKey } from 'Utils';

const DayTabs = ({ months, selectedmonth, selectedyear, days }) => {
    const monthName = months[selectedmonth - 1];
    const dateKey = GetDateKey(selectedmonth, selectedyear);

    return (
        <div>
            {
                days[dateKey].map((day, index) => (
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
            selectedyear: store.monthlymenu.selectedyear,
            selectedmonth: store.monthlymenu.selectedmonth
        })
    )
)(DayTabs);