import { combineReducers } from 'redux';

import monthlyMenuReducers from './menus/monthly/reducers';
import assessmentReducers from './assessment/reducers';

export default combineReducers({
    Assessment: assessmentReducers,
    MonthlyMenu: monthlyMenuReducers,
});