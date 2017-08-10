import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
//import { compose, lifecycle } from 'recompose';

//import { Icon } from 'react-materialize';

import store from 'Stores';

import DayTabs from 'Components/DayTabs';
import MonthYearPicker from 'Components/MonthYearPicker';

/*
const DateButton = ({ onClick, icon }) => <i onClick={ onClick } className='material-icons'>{ icon }</i>
*/

const Calendar = () =>
    <div id="MonthlyMenus">
        <MonthYearPicker />
        <DayTabs />
    </div>

render(
    <Provider store={ store }>
        <Calendar />
    </Provider>,
    document.getElementById('root')
);