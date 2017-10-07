import { createEpicMiddleware } from 'redux-observable';
import { createStore, applyMiddleware, compose } from 'redux';

import epic from 'Epics';
import reducer from 'Reducers';
import { GetTuesdays } from 'Utils';

const todaysDate = new Date();
const todaysMonth = todaysDate.getMonth();
const todaysYear = todaysDate.getFullYear();

const initialState = {
  monthlymenu: {
    menus: [],
    selectedmenuindex: 0,
    selectedyear: todaysYear,
    selectedmonth: todaysMonth,
    days: GetTuesdays(todaysMonth, todaysYear),
    selecteddate: new Date(todaysYear, todaysMonth, todaysDate.getDate())
  }
};

const enhancer = compose(
  applyMiddleware(
      createEpicMiddleware(epic)
  )
)(createStore);

// remove window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() before deploying to test and prod
export default enhancer(reducer, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())