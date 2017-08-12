import React from 'react';
import { compose } from 'recompose';
import { connect } from 'react-redux';

import 'Assets/calendar.css';
import { GetMonthArray } from 'Utils';

const _months = GetMonthArray();

const _years = ((startYear, endYear) => {
    let years = [];

    for (let year = startYear; year <= endYear; year++) { years.push(year); }

    return years;
})(2013, new Date().getFullYear());

const GetMonthButtons = (year, onClick) =>
    _months.map((month, index) => (
        <td key={ index }>
            <a className="button monthbtn" onClick={ (e) => onClick(e, index, year) }>{ month }</a>
        </td>
    ));

export default ({ OnDateChange, selectedyear, selectedmonth }) => {
    const monthButtons = GetMonthButtons(selectedyear, OnDateChange);

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
                            <a className="button yearbtn" onClick={ (e) => OnDateChange(e, selectedmonth, year) }>{ year }</a>
                        </li>
                    )) }
                </ul>
            </div>
        </div>
    );
};