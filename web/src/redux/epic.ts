import { combineEpics } from 'redux-observable';

import * as monthlyMenuEpics from './menus/monthly/epics';

export default combineEpics(...Object.values(monthlyMenuEpics));