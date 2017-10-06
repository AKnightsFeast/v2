import React from 'react';
import { BindClosures } from 'Utils';

const DateLink = BindClosures({
    OnDateChange: (props) => { props.OnDateChange(props.month, props.year); }
})(
    ({ OnDateChange, month, year, dateClass, label }) => (
        <a className={ "button " + dateClass } onClick={ OnDateChange }>{ label }</a>
    )
);

export default ({ OnDateChange, yearslist, monthslist, selectedyear, selectedmonth }) => {
    const monthLinks = monthslist.map((month, index) => (
        <td key={ index }>
            <DateLink label={ month }
                      month={ index }
                      year={ selectedyear }
                      dateClass={ "monthbtn "}
                      OnDateChange={ OnDateChange } />
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
                            <DateLink label={ year }
                                      year={ year }
                                      month={ selectedmonth }
                                      dateClass={ "yearbtn "}
                                      OnDateChange={ OnDateChange } />
                        </li>
                    )) }
                </ul>
            </div>
        </div>
    );
};