import React from 'react';
import { render } from 'react-dom';
import { Provider, connect } from 'react-redux';
import { compose/*, lifecycle*/ } from 'recompose';

//import { Icon } from 'react-materialize';

import 'Assets/calendar.css';

import store from 'Stores';

import Menu from 'Components/Menu';
import DayPicker from 'Components/DayPicker';
import MenuPicker from 'Components/MenuPicker';
import MonthYearPicker from 'Components/MonthYearPicker';
import { LoadDaysForDate, LoadMenusForDate, ShowMenu } from 'Reducers';

import { MonthArray, YearArray, GetFormattedDate } from 'Utils';

/*
const DateButton = ({ onClick, icon }) => <i onClick={ onClick } className='material-icons'>{ icon }</i>
*/

const Calendar = ({
    OnDateChange,
    OnDayChange,
    OnMenuChange,
    days,
    menus,
    selectedmenu,
    selecteddate,
    selectedyear,
    selectedmonth
}) =>
    <div id="MonthlyMenus">
        <div className="row">
            <div className="col s12 m3">
                <ul>
                    <li className="">
                        <div>
                            <MonthYearPicker OnDateChange={ OnDateChange }
                                             years={ YearArray }
                                             months={ MonthArray }
                                             selectedyear={ selectedyear }
                                             selectedmonth={ selectedmonth } />
                        </div>
                        <div>
                            <DayPicker OnDayChange={ OnDayChange } days={ days } />
                        </div>
                    </li>
                </ul>

                <ul>
                    <li className="">
                        <div><i className="material-icons">{ "event_note" }</i>{ "Menus" }</div>
                        <div>
                            <MenuPicker OnMenuChange={ OnMenuChange } menus={ menus } />
                        </div>
                    </li>
                </ul>
            </div>

            <div className="col s12 m9">
                <h4>{ "Menus for the Week of " + GetFormattedDate(selecteddate) }</h4>
                <Menu selectedmenu={ selectedmenu }
                      selecteddate={ GetFormattedDate(selecteddate) }
                      selectedmonth={ selectedmonth } />
            </div>
        </div>
    </div>

const EnhancedCalendar = compose(
    connect(
        store => ({
            days: store.monthlymenu.days,
            menus: store.monthlymenu.menus,
            selectedmenu: store.monthlymenu.selectedmenu,
            selecteddate: store.monthlymenu.selecteddate,
            selectedyear: store.monthlymenu.selectedyear,
            selectedmonth: store.monthlymenu.selectedmonth
        }),
        dispatch => ({
            OnDateChange: (month, year) => { dispatch(LoadDaysForDate(month, year)) },
            OnDayChange: (date) => { dispatch(LoadMenusForDate(date)); },
            OnMenuChange: (menu) => { dispatch(ShowMenu(menu)) }
        })
    )
)(Calendar);

render(
    <Provider store={ store }>
        <EnhancedCalendar />
    </Provider>,
    document.getElementById('root')
);