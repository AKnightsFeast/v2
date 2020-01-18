import { combineReducers } from 'redux';

import monthlyReducers from './monthlymenus';

export default combineReducers({
    MonthlyReducer: monthlyReducers
});