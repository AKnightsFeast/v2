import { combineEpics } from 'redux-observable';

import monthlyMenuEpics from './monthlymenus';

export default combineEpics(
    monthlyMenuEpics
);