import React from 'react';
import { render } from 'react-dom';
import { compose, lifecycle } from 'recompose';

import $ from 'jquery';
import 'fullcalendar/dist/fullcalendar';
import 'fullcalendar/dist/fullcalendar.css';

const Calendar = () => <div ref="calendar"></div>

const EnhancedCalendar = compose(
    lifecycle({
        componentDidMount() {
            let { calendar } = this.refs;

            $(calendar).fullCalendar({
                header: {
                    center: 'title',
                    left: 'prev,next today',
                    //right: 'month,agendaWeek,agendaDay'
                    right: 'agendaWeek'
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