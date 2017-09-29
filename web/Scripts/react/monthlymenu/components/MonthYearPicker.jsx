import React from 'react';

export default ({ OnDateChange, yearslist, monthslist, selectedyear, selectedmonth }) => {
    const monthLinks = monthslist.map((month, index) => (
        <td key={ index }>
            <a className="button monthbtn" onClick={ (e) => OnDateChange(e, index, selectedyear) }>{ month }</a>
        </td>
    ));

    return (
        <div id="MonthYearPicker">
            <div className="monthpicker inline">
                <label className="dropdown btn" data-activates="months-dropdown">{ monthslist[selectedmonth] }</label>
                <table id="months-dropdown" className="dropdown-content">
                    <tbody>
                        <tr>{ monthLinks.slice(0, 3) }</tr>
                        <tr>{ monthLinks.slice(3, 6) }</tr>
                        <tr>{ monthLinks.slice(6, 9) }</tr>
                        <tr>{ monthLinks.slice(9) }</tr>
                    </tbody>
                </table>
            </div>
            <div className="inline">
                <label className="dropdown btn" data-activates="years-dropdown">{ selectedyear }</label>
                <ul id="years-dropdown" className="dropdown-content">
                    { yearslist.map((year, index) => (
                        <li key={ year }>
                            <a className="button yearbtn" onClick={ (e) => OnDateChange(e, selectedmonth, year) }>{ year }</a>
                        </li>
                    )) }
                </ul>
            </div>
        </div>
    );
};