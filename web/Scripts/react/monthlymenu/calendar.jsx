import React from 'react';
//import { number } from 'prop-types';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
//import { compose, lifecycle } from 'recompose';

//import $ from 'jquery';
//import 'fullcalendar/dist/fullcalendar';
//import { Icon } from 'react-materialize';

//import 'fullcalendar/dist/fullcalendar.css';

import store from 'Stores';

import DayTabs from 'Components/DayTabs';
import MonthYearPicker from 'Components/MonthYearPicker';

/*
const DateButton = ({ onClick, icon }) => <i onClick={ onClick } className='material-icons'>{ icon }</i>

DateButton.propTypes = {
  icon: PropTypes.string,
  onClick: PropTypes.func
};

<DatePicker customInput={ <DateButton icon={ 'today' } /> } />

style={{ display: 'none' }} 

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
                width: 600,
                height: 550,
                header: false,
                editable: true,
                droppable: true, // this allows things to be dropped onto the calendar
                defaultView: 'month',
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
*/

const Calendar = () =>
    <div>
        <div>
            <MonthYearPicker startYear={ 2016 } />
        </div>
        <div>
            <DayTabs />
        </div>
    </div>

render(
    <Provider store={ store }>
        <Calendar />
    </Provider>,
    document.getElementById('root')
);