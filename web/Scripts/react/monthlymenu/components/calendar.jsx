import React from 'react';
import { compose } from 'recompose';

const Calendar = () =>
(
    <div id="calendar"></div>
);

export default compose({
    lifecycle: {
        componentDidMount() {
            $('#calendar').fullCalendar({
                header: {
                    center: 'title',
                    left: 'prev,next today',
                    right: 'month,agendaWeek,agendaDay'
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
        }
    }
})(Calendar);