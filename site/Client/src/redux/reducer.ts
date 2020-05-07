import { combineReducers } from 'redux';

import monthlyMenuReducers from './menus/monthly/reducers';

export default combineReducers({
    MonthlyMenu: monthlyMenuReducers
});