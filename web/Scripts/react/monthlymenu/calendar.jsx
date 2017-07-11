import React from 'react';
import PropTypes from 'prop-types';
import { render } from 'react-dom';
import { compose, lifecycle } from 'recompose';

import $ from 'jquery';
import 'fullcalendar/dist/fullcalendar';
import DatePicker from 'react-datepicker';

import './calendar.css';
import 'fullcalendar/dist/fullcalendar.css';
import 'react-datepicker/dist/react-datepicker.css';

const DateButton = ({ onClick, icon }) => <i onClick={ onClick } className='material-icons'>{ icon }</i>

DateButton.propTypes = {
  icon: PropTypes.string,
  onClick: PropTypes.func
};

const Calendar = () =>
    <div>
        <DatePicker customInput={ <DateButton icon={ 'today' } /> } />
        <div ref="calendar"></div>
    </div>

const EnhancedCalendar = compose(
    lifecycle({
        componentDidMount() {
            let { calendar } = this.refs;

            $(calendar).fullCalendar({
                defaultView: 'basicWeek',
                header: {
                    /*center: 'title',
                    left: 'prev,next today',
                    right: 'month,agendaWeek,agendaDay'*/
                },
                editable: true,
                droppable: true, // this allows things to be dropped onto the calendar
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