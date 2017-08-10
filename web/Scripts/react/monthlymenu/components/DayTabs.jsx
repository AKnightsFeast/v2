import React from 'react';
import { compose } from 'recompose';
import { connect } from 'react-redux';
import { Tabs, Tab } from 'react-materialize';

import { LoadMenusForDate } from 'Reducers';
import { GetDateKey } from 'Utils';

const DayTabs = ({ OnDayTabClick, selectedyear, selectedmonth, selecteddate, days }) => {   
    return (
        <Tabs className='z-depth-0' onChange={(index, e) => OnDayTabClick(index, e)}>
        {
            days.map((day, index) => {
                const today = new Date();
                const tabDate = new Date(selectedyear, selectedmonth, new Number(day));

                let sunDate = new Date();
                today.setDate(tabDate.getDate() - 2);

                let satDate = new Date();
                today.setDate(tabDate.getDate() + 3);

                let activeAttr = {};
                if (sunDate <= selecteddate && satDate >= selecteddate) activeAttr.active = true;

                return <Tab key={ index } title={ tabDate.toLocaleDateString("en-US", { month: 'short', day: '2-digit' }) } { ...activeAttr } />;
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
            OnDayTabClick: (index, e) => {
                console.log(index);
                console.log(e);
                //dispatch(LoadMenusForDate(e.target.));
            }
        })
    )
)(DayTabs);