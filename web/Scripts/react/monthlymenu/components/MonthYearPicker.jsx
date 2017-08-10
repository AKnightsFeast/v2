import React from 'react';
import { compose } from 'recompose';
import { connect } from 'react-redux';

import 'Assets/calendar.css';
import { GetMonthArray } from 'Utils';
import { LoadDaysForDate } from 'Reducers';

const _months = GetMonthArray();

const _years = ((startYear, endYear) => {
    let years = [];

    for (let year = startYear; year <= endYear; year++) { years.push(year); }

    return years;
})(2013, new Date().getFullYear());

const GetMonthButtons = (year, onClick) =>
    _months.map((month, index) => (
        <td key={ index }>
            <a className="button monthbtn" onClick={ () => onClick(index, year) }>{ month }</a>
        </td>
    ));

const MonthYearPicker = ({ OnChangeDate, selectedyear, selectedmonth }) => {
    const monthButtons = GetMonthButtons(selectedyear, OnChangeDate);

    return (
        <div id="MonthYearPicker">
            <div className="monthpicker inline">
                <label className="dropdown btn" data-activates="months-dropdown">{ _months[selectedmonth] }</label>
                <table id="months-dropdown" className="dropdown-content">
                    <tbody>
                        <tr>{ monthButtons.slice(0, 3) }</tr>
                        <tr>{ monthButtons.slice(3, 6) }</tr>
                        <tr>{ monthButtons.slice(6, 9) }</tr>
                        <tr>{ monthButtons.slice(9) }</tr>
                    </tbody>
                </table>
            </div>
            <div className="inline">
                <label className="dropdown btn" data-activates="years-dropdown">{ selectedyear }</label>
                <ul id="years-dropdown" className="dropdown-content">
                    { _years.map((year, index) => (
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
            selectedyear: store.monthlymenu.selectedyear,
            selectedmonth: store.monthlymenu.selectedmonth
        }),
        dispatch => ({
            OnChangeDate: (month, year) => { dispatch(LoadDaysForDate(month, year)) },
        })
    )
)(MonthYearPicker);