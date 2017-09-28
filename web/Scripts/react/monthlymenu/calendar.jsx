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

import { GetMonthArray } from 'Utils';

const yearslist = ((startYear, endYear) => {
    let years = [];

    for (let year = startYear; year <= endYear; year++) { years.push(year); }

    return years;
})(2013, new Date().getFullYear());

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
        <div className="row">
            <div className="col s12 m12 l3">
                <div className="search-title-filter">
                    <div className="nav-wrapper">
                        <MonthYearPicker OnDateChange={ OnDateChange }
                                         yearslist={ yearslist }
                                         monthslist={ GetMonthArray() }
                                         selectedyear={ selectedyear }
                                         selectedmonth={ selectedmonth } />
                    </div>
                </div>
  
                <ul className="collapsible" data-collapsible="expandable">
                    <li className="">
                        <div className="collapsible-header active"><i className="material-icons">{ "event_note" }</i>{ "Date" }</div>
                        <div className="collapsible-body filter-container"
                             style={ {
                                display: "none",
                                marginTop: "0px",
                                paddingTop: "0px",
                                marginBottom: "0px",
                                paddingBottom: "0px"
                            } }>
                            <form action="#">
                                <DayTabs OnDayChange={ OnDayChange }
                                         selectedyear={ selectedyear }
                                         selectedmonth={ selectedmonth }
                                         selecteddate={ selecteddate }
                                         days={ days } />
                            </form>
                        </div>
                    </li>
                </ul>
            </div>

            <div className="col s12 m12 l9">
                <h4>{ "Monthly Menus" }</h4>
                <Menus menus={ menus } selecteddate={ selecteddate } selectedmonth={ selectedmonth } />
            </div>
        </div>
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