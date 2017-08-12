import React from 'react';
import { compose } from 'recompose';
import { connect } from 'react-redux';
import { Tabs, Tab } from 'react-materialize';

import { LoadMenusForDate } from 'Reducers';
import { GetDateKey } from 'Utils';

const DayTabs = ({ OnDayTabClick, selectedyear, selectedmonth, selecteddate, days }) => {   
    const today = new Date();

    return (
        <Tabs className='z-depth-0' onChange={(index, e) => OnDayTabClick(index, e, selectedyear)}>
        {
            days.map((day, index) => {
                const tabDate = new Date(selectedyear, selectedmonth, new Number(day));

                let sunDate = new Date();
                sunDate.setDate(tabDate.getDate() - 2);

                let satDate = new Date();
                satDate.setDate(tabDate.getDate() + 3);

                let tabAttr = {};

                if (tabDate > today)
                    tabAttr.disabled = true;
                else if (sunDate <= selecteddate && satDate >= selecteddate)
                    tabAttr.active = true;

                return <Tab key={ index } title={ tabDate.toLocaleDateString("en-US", { month: 'short', day: '2-digit' }) } { ...tabAttr } />;
            })
        }
        </Tabs>
    );
};

export default compose(
    connect(
        store => ({
            days: store.monthlymenu.days,
            selecteddate: store.monthlymenu.selecteddate,
            selectedyear: store.monthlymenu.selectedyear,
            selectedmonth: store.monthlymenu.selectedmonth
        }),
        dispatch => ({
            OnDayTabClick: (index, e, year) => {
                dispatch(LoadMenusForDate(new Date(e.target.text + " " + year)));
            }
        })
    )
)(DayTabs);