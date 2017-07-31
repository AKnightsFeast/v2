import React from 'react';
//import { number } from 'prop-types';
import { render } from 'react-dom';
import { compose, lifecycle } from 'recompose';

import $ from 'jquery';
import 'fullcalendar/dist/fullcalendar';
import { Icon } from 'react-materialize';

import './calendar.css';
import 'fullcalendar/dist/fullcalendar.css';

/*
const DateButton = ({ onClick, icon }) => <i onClick={ onClick } className='material-icons'>{ icon }</i>

DateButton.propTypes = {
  icon: PropTypes.string,
  onClick: PropTypes.func
};

<DatePicker customInput={ <DateButton icon={ 'today' } /> } />

style={{ display: 'none' }} 
*/

const MonthYearPicker = ({ startYear }) =>
{
    let years = [];
    let todaysDate = new Date();
    let currentMonth = todaysDate.getMonth();
    let currentYear = todaysDate.getFullYear();
    let year = Math.min(new Number(startYear), currentYear);

    for (; year <= currentYear; year++)
    {
        years.push(year);
    }

    let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
                  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    let monthTds = months.map((month, index) => (<td key={ index + 1 }>{ month }</td>));

    return (
        <div id="MonthYearPicker">
            <div className="datepart">
                <label className="dropdown btn" data-activates="months-dropdown">{ months[currentMonth] }</label>
                <table id="months-dropdown" className="dropdown-content">
                    <tbody>
                        <tr>{ monthTds.slice(0, 3) }</tr>
                        <tr>{ monthTds.slice(3, 6) }</tr>
                        <tr>{ monthTds.slice(6, 9) }</tr>
                        <tr>{ monthTds.slice(9) }</tr>
                    </tbody>
                </table>
            </div>
            <div className="datepart">
                <label className="dropdown btn" data-activates="years-dropdown">{ currentYear }</label>
                <ul id="years-dropdown" className="dropdown-content">
                    { years.map((year, index) => (<li key={ year }>{ year }</li>)) }
                </ul>
            </div>
        </div>
    );
}

MonthYearPicker.PropTypes = {
    startYear: function(props, propName, componentName) {
        if (/20\d\d/.test(props[startYear])) {
            return new Error('Provide a start year after 2000');
        }
    }
};

const Calendar = () =>
    <div>
        <MonthYearPicker startYear="2016" />
        <div ref="calendar"></div>
    </div>

const EnhancedCalendar = compose(
    lifecycle({
        componentDidMount() {
            let { calendar } = this.refs;

            $(calendar).fullCalendar({
                header: false,
                editable: true,
                droppable: true, // this allows things to be dropped onto the calendar
                defaultView: 'basicWeek',
                drop: function() {
                    // is the "remove after drop" checkbox checked?
                    if ($('#drop-remove').is(':checked')) {
                        // if so, remove the element from the "Draggable Events" list
                        $(this).remove();
                    }
                }
            });
        },

        componentWillUnmount() {
            let { calendar } = this.refs;

            $(calendar).fullCalendar('destroy');
        }
    }))(Calendar);

render(<EnhancedCalendar />, document.getElementById('root'));