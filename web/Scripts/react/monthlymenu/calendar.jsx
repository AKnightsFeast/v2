import React from 'react';
import { render } from 'react-dom';
import { Provider, connect } from 'react-redux';
import { compose/*, lifecycle*/ } from 'recompose';

//import { Icon } from 'react-materialize';

import 'Assets/calendar.css';

import store from 'Stores';

import Menus from 'Components/Menus';
import DayPicker from 'Components/DayPicker';
import MenuPicker from 'Components/MenuPicker';
import MonthYearPicker from 'Components/MonthYearPicker';
import { LoadDaysForDate, LoadMenusForDate, ShowMenu } from 'Reducers';

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
    OnMenuChange,
    days,
    menus,
    selectedyear,
    selectedmonth,
    selecteddate,
    selectedmenuindex
}) =>
    <div id="MonthlyMenus">
        <div className="row">
            <div className="col s12 m12 l3">
                <ul className="collapsible" data-collapsible="expandable">
                    <li className="">
                        <div className="collapsible-header active">
                            <MonthYearPicker OnDateChange={ OnDateChange }
                                            yearslist={ yearslist }
                                            monthslist={ GetMonthArray() }
                                            selectedyear={ selectedyear }
                                            selectedmonth={ selectedmonth } />
                        </div>
                        <div className="collapsible-body filter-container"
                             style={ {
                                display: "none",
                                marginTop: "0px",
                                paddingTop: "0px",
                                marginBottom: "0px",
                                paddingBottom: "0px"
                            } }>
                            <form action="#">
                                <DayPicker OnDayChange={ OnDayChange }
                                         selectedyear={ selectedyear }
                                         selectedmonth={ selectedmonth }
                                         selecteddate={ selecteddate }
                                         days={ days } />
                            </form>
                        </div>
                    </li>
                </ul>

                <ul className="collapsible" data-collapsible="expandable">
                    <li className="">
                        <div className="collapsible-header active"><i className="material-icons">{ "event_note" }</i>{ "Menus" }</div>
                        <div className="collapsible-body filter-container">
                            <form action="#">
                                <MenuPicker OnMenuChange={ OnMenuChange } menus={ menus } />
                            </form>
                        </div>
                    </li>
                </ul>
            </div>

            <div className="col s12 m12 l9">
                <h4>{ "Monthly Menus" }</h4>
                <Menus menus={ menus }
                       selecteddate={ selecteddate }
                       selectedmonth={ selectedmonth }
                       selectedmenuindex={ selectedmenuindex } />
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
            selectedmonth: store.monthlymenu.selectedmonth,
            selectedmenuindex: store.monthlymenu.selectedmenuindex
        }),
        dispatch => ({
            OnDateChange: (e, month, year) => {
                e.preventDefault();
                dispatch(LoadDaysForDate(month, year))
            },
            OnDayChange: (index, e, year) => {
                dispatch(LoadMenusForDate(new Date(e.target.text + " " + year)));
            },
            OnMenuChange: (index) => {
                dispatch(ShowMenu(index))
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