import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { compose/*, lifecycle*/ } from 'recompose';
import { connect } from 'react-redux';

//import { Icon } from 'react-materialize';

import store from 'Stores';

import Menus from 'Components/Menus';
import DayTabs from 'Components/DayTabs';
import MonthYearPicker from 'Components/MonthYearPicker';
import { LoadDaysForDate, LoadMenusForDate } from 'Reducers';

/*
const DateButton = ({ onClick, icon }) => <i onClick={ onClick } className='material-icons'>{ icon }</i>
*/

const Calendar = ({
    OnDateChange,
    OnDayChange,
    days,
    menus,
    selectedyear,
    selectedmonth,
    selecteddate
}) =>
    <div id="MonthlyMenus">
        <MonthYearPicker
            OnDateChange={ OnDateChange }
            selectedyear={ selectedyear }
            selectedmonth={ selectedmonth } />
        <DayTabs
            OnDayChange={ OnDayChange }
            selectedyear={ selectedyear }
            selectedmonth={ selectedmonth }
            selecteddate={ selecteddate }
            days={ days } />
        <Menus menus={ menus } />
    </div>

const EnhancedCalendar = compose(
    connect(
        store => ({
            days: store.monthlymenu.days,
            menus: store.monthlymenu.menus,
            selecteddate: store.monthlymenu.selecteddate,
            selectedyear: store.monthlymenu.selectedyear,
            selectedmonth: store.monthlymenu.selectedmonth
        }),
        dispatch => ({
            OnDateChange: (e, month, year) => {
                e.preventDefault();
                dispatch(LoadDaysForDate(month, year))
            },
            OnDayChange: (index, e, year) => {
                dispatch(LoadMenusForDate(new Date(e.target.text + " " + year)));
            }
        })
    )
)(Calendar);

render(
    <Provider store={ store }>
        <EnhancedCalendar />
    </Provider>,
    document.getElementById('root')
);