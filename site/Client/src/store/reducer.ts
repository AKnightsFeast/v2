import { combineReducers } from 'redux';

import monthlyMenuReducers from './menus/monthly/reducers';
import assessmentReducers from './assessment/reducers';
import sendMessageReducers from './contact/reducers';

export default combineReducers({
    Assessment: assessmentReducers,
    MonthlyMenu: monthlyMenuReducers,
    ContactMessage: sendMessageReducers
});