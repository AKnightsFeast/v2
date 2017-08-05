import React from 'react';
import { compose } from 'recompose';
import { connect } from 'react-redux';

import 'Assets/calendar.css';
import { LoadDaysForDate } from 'Reducers';

const GetMonthButtons = (months, year, onClick) =>
    months.map((month, index) => {
        let monthNumber = index + 1;

        return (
            <td key={ monthNumber }>
                <a className="button monthbtn" onClick={ () => onClick(monthNumber, year) }>{ month }</a>
            </td>
        );
    });

const MonthYearPicker = ({ OnChangeDate, months, years, selectedyear, selectedmonth }) => {
    const monthButtons = GetMonthButtons(months, selectedyear, OnChangeDate);

    return (
        <div id="MonthYearPicker">
            <div className="datepart">
                <label className="dropdown btn" data-activates="months-dropdown">{ months[selectedmonth - 1] }</label>
                <table id="months-dropdown" className="dropdown-content">
                    <tbody>
                        <tr>{ monthButtons.slice(0, 3) }</tr>
                        <tr>{ monthButtons.slice(3, 6) }</tr>
                        <tr>{ monthButtons.slice(6, 9) }</tr>
                        <tr>{ monthButtons.slice(9) }</tr>
                    </tbody>
                </table>
            </div>
            <div className="datepart">
                <label className="dropdown btn" data-activates="years-dropdown">{ selectedyear }</label>
                <ul id="years-dropdown" className="dropdown-content">
                    { years.map((year, index) => (
                        <li key={ year }>
                            <a className="button yearbtn" onClick={ () => OnChangeDate(selectedmonth, year) }>{ year }</a>
                        </li>
                    )) }
                </ul>
            </div>
        </div>
    );
}

export default compose(
    connect(
        store => ({
            years: store.monthlymenu.years,
            months: store.monthlymenu.months,
            selectedyear: store.monthlymenu.selectedyear,
            selectedmonth: store.monthlymenu.selectedmonth
        }),
        dispatch => ({
            OnChangeDate: (month, year) => { dispatch(LoadDaysForDate(month, year)) },
        })
    )
)(MonthYearPicker);