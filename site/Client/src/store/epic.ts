import { combineEpics } from 'redux-observable';

import * as monthlyMenuEpics from './menus/monthly/epics';
import * as assessmentEpics from './assessment/epics';
import * as contactEpics from './contact/epics';

export default combineEpics(...Object.values(monthlyMenuEpics), ...Object.values(assessmentEpics), ...Object.values(contactEpics));