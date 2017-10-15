import React from 'react';
import { BindClosures } from 'Utils';

const MonthSelect = BindClosures({
    OnDateChange: (props, e) => { props.OnDateChange(e.target.value, props.selectedyear); }
})(
    ({ OnDateChange, selectedyear, months }) => {
        return (
            <select onChange={ OnDateChange } className={ "browser-default" } defaultValue={ new Date().getMonth() }>
            {
                months.map((month, index) => (
                    <option key={ index } value={ index }>{ month }</option>
                ))
            }
            </select>
        );
    }
);

const YearSelect = BindClosures({
    OnDateChange: (props, e) => { props.OnDateChange(props.selectedmonth, e.target.value); }
})(
    ({ OnDateChange, selectedmonth, years }) => {
        return (
            <select onChange={ OnDateChange } className={ "browser-default" } defaultValue={ new Date().getFullYear() }>
            {
                years.map((year, index) => (
                    <option key={ index } value={ year }>{ year }</option>
                ))
            }
            </select>
        );
    }
);

export default ({ OnDateChange, years, months, selectedyear, selectedmonth }) => {
    return (
        <div id="MonthYearPicker">
            <div className="monthpicker inline">
                <MonthSelect OnDateChange={ OnDateChange }
                             selectedyear={ selectedyear }
                             months={ months } />
            </div>
            <div className="inline">
                <YearSelect OnDateChange={ OnDateChange }
                            selectedmonth={ selectedmonth }
                            years={ years } />
            </div>
        </div>
    );
};