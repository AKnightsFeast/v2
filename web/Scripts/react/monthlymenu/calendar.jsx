﻿import React from 'react';
import PropTypes from 'prop-types';
import { render } from 'react-dom';
import { compose, lifecycle } from 'recompose';

import $ from 'jquery';
import 'fullcalendar/dist/fullcalendar';
import Flatpickr from 'react-flatpickr';

//import './calendar.css';
import 'flatpickr/dist/themes/material_green.css';
import 'fullcalendar/dist/fullcalendar.css';

/*
const DateButton = ({ onClick, icon }) => <i onClick={ onClick } className='material-icons'>{ icon }</i>

DateButton.propTypes = {
  icon: PropTypes.string,
  onClick: PropTypes.func
};

<DatePicker customInput={ <DateButton icon={ 'today' } /> } />
*/

const Calendar = () =>
    <div>
        <Flatpickr onChange={v => console.info(v)} />
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
            })
        },

        componentWillUnmount() {
            let { calendar } = this.refs;

            $(calendar).fullCalendar('destroy');
        }
    }))(Calendar);

render(<EnhancedCalendar />, document.getElementById('root'));